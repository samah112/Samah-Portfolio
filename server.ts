import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import {
  GEMINI_MODEL,
  SYSTEM_PROMPT,
  buildContents,
  cleanStars,
  getGeminiClient,
  getLocalFallbackResponse,
  isRateLimited,
  MAX_MESSAGE_LENGTH,
} from "./server/chatCore";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50kb" }));

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      name: "Samah Basoodan Portfolio Server",
      timestamp: new Date().toISOString(),
    });
  });

  // Contact Form Submission API
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    
    console.log(`[Contact Message Received] From: ${name} <${email}> | Subject: ${subject}`);
    return res.json({
      success: true,
      message: "Thank you! Your message has been safely received.",
    });
  });

  // Real-time SSE Streaming Chat API
  app.post("/api/chat/stream", async (req, res) => {
    const { message, language = 'en', history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "Message is required." });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(413).json({ error: "Message is too long." });
    }
    if (isRateLimited(req.ip || "unknown")) {
      return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
    }

    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    const sendEvent = (data: object) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    const ai = getGeminiClient();

    if (!ai) {
      const fallbackText = cleanStars(getLocalFallbackResponse(message, language));
      // Stream words smoothly
      const words = fallbackText.split(" ");
      for (let i = 0; i < words.length; i++) {
        const chunk = words[i] + (i < words.length - 1 ? " " : "");
        sendEvent({ chunk });
        await new Promise((r) => setTimeout(r, 30));
      }
      sendEvent({ done: true });
      res.end();
      return;
    }

    try {
      const contents = buildContents(message, history);

      const stream = await ai.models.generateContentStream({
        model: GEMINI_MODEL,
        contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.6,
        },
      });

      for await (const chunk of stream) {
        const rawText = chunk.text || "";
        if (rawText) {
          const cleaned = cleanStars(rawText);
          sendEvent({ chunk: cleaned });
        }
      }
      sendEvent({ done: true });
      res.end();
    } catch (error) {
      console.error("Gemini Streaming Error in /api/chat/stream:", error);
      const fallbackText = cleanStars(getLocalFallbackResponse(message, language));
      sendEvent({ chunk: fallbackText, done: true });
      res.end();
    }
  });

  // Regular Non-Streaming Chat API (Fallback)
  app.post("/api/chat", async (req, res) => {
    const { message, language = 'en', history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: "Message is required." });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(413).json({ error: "Message is too long." });
    }
    if (isRateLimited(req.ip || "unknown")) {
      return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
    }

    const ai = getGeminiClient();

    if (!ai) {
      const fallbackReply = cleanStars(getLocalFallbackResponse(message, language));
      return res.json({ reply: fallbackReply, source: "verified-knowledge-base" });
    }

    try {
      const contents = buildContents(message, history);

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.6,
        },
      });

      const replyText = cleanStars(response.text || getLocalFallbackResponse(message, language));
      return res.json({ reply: replyText, source: GEMINI_MODEL });
    } catch (error) {
      console.error("Gemini API Error in /api/chat:", error);
      const fallbackReply = cleanStars(getLocalFallbackResponse(message, language));
      return res.json({ reply: fallbackReply, source: "verified-fallback" });
    }
  });

  // Vite Middleware Setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

