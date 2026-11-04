/**
 * Netlify Function: Samah AI chat endpoints.
 *
 *   POST /api/chat          -> JSON { reply, source }
 *   POST /api/chat/stream   -> Server-Sent Events { chunk } ... { done: true }
 *
 * Set GEMINI_API_KEY in Netlify: Site configuration -> Environment variables.
 * Without a key, the assistant answers from the verified local knowledge base.
 */
import {
  GEMINI_MODEL,
  SYSTEM_PROMPT,
  buildContents,
  cleanStars,
  getGeminiClient,
  getLocalFallbackResponse,
  isRateLimited,
  MAX_MESSAGE_LENGTH,
} from "../../server/chatCore";

type Lang = "ar" | "en";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

export default async (req: Request, context?: { ip?: string }): Promise<Response> => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  const clientIp = context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
  if (isRateLimited(clientIp)) {
    return json({ error: "Too many requests. Please try again in a minute." }, 429);
  }

  let body: { message?: unknown; language?: unknown; history?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) {
    return json({ error: "Message is required." }, 400);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: "Message is too long." }, 413);
  }

  const language: Lang = body.language === "ar" ? "ar" : "en";
  const isStream = new URL(req.url).pathname.endsWith("/stream");
  const ai = getGeminiClient();
  const fallback = () => cleanStars(getLocalFallbackResponse(message, language));

  if (!isStream) {
    if (!ai) {
      return json({ reply: fallback(), source: "verified-knowledge-base" });
    }
    try {
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: buildContents(message, body.history),
        config: { systemInstruction: SYSTEM_PROMPT, temperature: 0.6 },
      });
      return json({ reply: cleanStars(response.text || fallback()), source: GEMINI_MODEL });
    } catch (error) {
      console.error("Gemini API error in /api/chat:", error);
      return json({ reply: fallback(), source: "verified-fallback" });
    }
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const send = (data: object) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));

      try {
        if (!ai) {
          send({ chunk: fallback() });
        } else {
          const result = await ai.models.generateContentStream({
            model: GEMINI_MODEL,
            contents: buildContents(message, body.history),
            config: { systemInstruction: SYSTEM_PROMPT, temperature: 0.6 },
          });
          for await (const chunk of result) {
            const text = chunk.text ? cleanStars(chunk.text) : "";
            if (text) send({ chunk: text });
          }
        }
      } catch (error) {
        console.error("Gemini streaming error in /api/chat/stream:", error);
        send({ chunk: fallback() });
      } finally {
        send({ done: true });
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
};

export const config = {
  path: ["/api/chat", "/api/chat/stream"],
  // Netlify platform rate limit: max 20 requests per minute per visitor IP.
  rateLimit: {
    windowLimit: 20,
    windowSize: 60,
    aggregateBy: ["ip", "domain"],
  },
};
