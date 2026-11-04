/**
 * Shared Samah AI chat logic.
 * Used by the local Express server (server.ts) and the Netlify function
 * (netlify/functions/chat.mts). The Gemini API key is read from the
 * server-side GEMINI_API_KEY environment variable and never reaches the browser.
 */
import { GoogleGenAI } from "@google/genai";

export const GEMINI_MODEL = "gemini-3.7-flash";

export type ChatHistoryItem = { sender: string; text: string };

export function buildContents(message: string, history: unknown) {
  const formattedHistory = Array.isArray(history)
    ? (history as ChatHistoryItem[]).slice(-6).map((h) => ({
        role: h.sender === "user" ? "user" : "model",
        parts: [{ text: cleanStars(String(h.text ?? "")) }],
      }))
    : [];
  return [...formattedHistory, { role: "user", parts: [{ text: message }] }];
}

export function cleanStars(str: string): string {
  if (!str) return "";
  return str.replace(/\*{1,3}/g, '').trim();
}

export const SYSTEM_PROMPT = `
You are "Samah AI", the official intelligent assistant on the portfolio of Samah A.Basoodan (سماح باسودان).

YOUR IDENTITY & CAPABILITIES:
You are an exceptionally smart, articulate, and versatile AI assistant.
1. When asked about Samah A.Basoodan, her portfolio, projects, awards, studies, or innovations: Ground your answers first and foremost in her verified portfolio knowledge below.
2. When asked ANY general questions (AI, computer science, medicine, technology, finance, philosophy, science, coding, general advice, culture, etc.): Answer accurately, intelligently, and with broad intellect ("توسع مدارك"). You are NOT limited to only discussing Samah; you can answer any question with clarity and depth while remaining polite, concise, and helpful.

SAMAH A.BASOODAN'S VERIFIED PORTFOLIO KNOWLEDGE:
- Full Name: Samah A.Basoodan (سماح باسودان).
- Identity: AI Researcher, Computer Science Student, Biomedical Engineering Innovator, Medical Inventor, Founder of ULTRA Investment.
- Mission: Building intelligent technologies for healthcare, investment, and future systems.

Education & Programs:
- Saudi Electronic University (SEU): Bachelor of Computer Science (Current Student).
- KAUST Academy: Artificial Intelligence Program (Specialized in Machine Learning, Deep Learning, and AI architectures).
- KACST: Semiconductor Integrated Circuits (IC) Program (Microchips, hardware design, and edge computing).

Awards & Recognitions:
- 2nd Place Winner at the national Health Datathon (Reducing Premature Mortality track).
- Recognized for an AI-driven stroke prediction and risk modeling system.
- Supported by the Ministry of Health (MOH), SDAIA (Saudi Data & AI Authority), and Misk Foundation.

Key Projects & Innovations:
- ULTRA Investment: Founder & System Architect. Institutional investment intelligence platform integrating generative AI & LLMs with financial research and portfolio analytics.
- Brain Cancer Biomedical Innovation: Biomedical research concept integrating AI tumor segmentation and focused ultrasound (FUS) for non-invasive brain cancer treatment.
- AI Stroke Risk Prediction: Predictive machine learning model for early detection of cerebrovascular risks and reducing premature mortality.
- Thrombosis Dosage Decision Algorithm: Clinical decision-support algorithm calculating personalized anticoagulation dosages (KSAU-HS Hackathon).
- MVP Design AI Platform: Intelligent workflow generation for rapid digital MVP scoping.
- Medical Telemetry & Edge AI: Hardware biosensor pipeline for low-latency clinical monitoring.
- Environmental Sustainability Platform: Satellite GIS mapping and desertification mitigation analytics.

Leadership:
- 5+ years of leadership. President of Okaz Toastmasters Club hosted at King Abdulaziz Center for World Culture (Ithra) by Aramco.

STRICT FORMATTING & STYLE MANDATES:
1. NO ASTERISKS: NEVER use asterisks (no **bold**, no *italic*). Do not format words with asterisks at all.
2. CONCISENESS: Provide clean, direct, and well-structured responses (2 to 4 clear sentences, or clean bullet points using • or - without asterisks).
3. ELEGANT FORMAT: Write naturally with comfortable paragraph breaks. Avoid unnecessary fluff or redundant greetings.
4. LANGUAGE: Always respond in the language of the prompt (Arabic for Arabic prompts, English for English prompts).
5. MEDICAL ETHICS: Present medical concepts responsibly as research and innovative concepts, not certified medical treatment advice.
`;

export function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback intelligent responder based on local verified knowledge (100% star-free)
export function getLocalFallbackResponse(query: string, lang: 'ar' | 'en'): string {
  const q = query.toLowerCase();
  
  if (lang === 'ar' || /[\u0600-\u06FF]/.test(query)) {
    if (q.includes('بحث') || q.includes('اهتمام') || q.includes('مجال') || q.includes('ذكاء')) {
      return "تركز أبحاث ومشاريع سماح باسودان على الذكاء الاصطناعي الطبي، والموجات فوق الصوتية المركزة لعلاج أورام الدماغ غير الجراحية، ونماذج التنبؤ المبكر بالسكتة الدماغية، بالإضافة إلى الذكاء التوليدي المالي في منصة ULTRA Investment.";
    }
    if (q.includes('جائزة') || q.includes('داتاثون') || q.includes('مركز') || q.includes('صحة') || q.includes('سكتة')) {
      return "حققت سماح المركز الثاني في الداتاثون الصحي الوطني بمسار تقليل الوفيات المبكرة، عن مشروعها القائم على الذكاء الاصطناعي للتنبؤ بمخاطر السكتة الدماغية، بدعم وزارة الصحة وسدايا ومسك.";
    }
    if (q.includes('دراسة') || q.includes('تعليم') || q.includes('جامعة') || q.includes('كاوست') || q.includes('مدينة الملك')) {
      return "سماح طالبة علوم حاسب في الجامعة السعودية الإلكترونية، وأكملت برنامج الذكاء الاصطناعي بأكاديمية كاوست (KAUST)، وبرنامج الدوائر المتكاملة وأشباه الموصلات بمدينة الملك عبدالعزيز للعلوم والتقنية (KACST).";
    }
    if (q.includes('ultra') || q.includes('استثمار') || q.includes('ألترا') || q.includes('مالي')) {
      return "منصة ULTRA Investment هي منصة ذكاء اصطناعي مؤسسية أسستها سماح باسودان، لربط النماذج اللغوية التوليدية بأبحاث الاستثمار والتحليل المالي المتقدم وإدارة المحافظ.";
    }
    if (q.includes('سرطان') || q.includes('دماغ') || q.includes('موجات') || q.includes('طبي')) {
      return "ابتكار أورام الدماغ هو مفهوم بحثي طبي حيوي يجمع بين خوارزميات الذكاء الاصطناعي لتحديد الأورام والموجات فوق الصوتية المركزة لاستهداف الأنسجة بدقة عالية دون تدخل جراحي.";
    }
    if (q.includes('توستماسترز') || q.includes('قيادة') || q.includes('إثراء') || q.includes('عكاظ')) {
      return "تمتلك سماح خبرة قيادية تتجاوز 5 سنوات، وشغلت منصب رئيسة نادي عكاظ للتوستماسترز في مركز الملك عبدالعزيز الثقافي العالمي (إثراء) التابع لأرامكو السعودية.";
    }
    if (q.includes('تواصل') || q.includes('ايميل') || q.includes('تعاون') || q.includes('رسالة')) {
      return "يسعد سماح التواصل للتعاون في أبحاث الذكاء الاصطناعي والابتكار الطبي والتقني. يمكنك إرسال رسالة مباشرة عبر قسم 'تواصل معي' في أسفل الموقع.";
    }
    return "سماح باسودان هي باحثة ذكاء اصطناعي، وطالبة علوم حاسب، ومبتكرة في الهندسة الطبية الحيوية ومؤسسة منصة ULTRA Investment. أنا هنا للإجابة عن مشاريعها وأبحاثها، بالإضافة إلى أي موضوع علمي أو تقني ترغب في استكشافه.";
  } else {
    if (q.includes('research') || q.includes('interest') || q.includes('medical') || q.includes('ai')) {
      return "Samah's research focuses on Medical AI, non-invasive focused ultrasound concepts for brain cancer treatment, early stroke risk prediction modeling, and generative investment intelligence through ULTRA Investment.";
    }
    if (q.includes('datathon') || q.includes('award') || q.includes('achievement') || q.includes('stroke')) {
      return "Samah won 2nd Place at the national Health Datathon (Reducing Premature Mortality track) for her AI-driven stroke prediction system, supported by the Ministry of Health, SDAIA, and Misk.";
    }
    if (q.includes('study') || q.includes('education') || q.includes('university') || q.includes('kaust')) {
      return "Samah is a Computer Science student at Saudi Electronic University, a graduate of the KAUST Academy AI Program, and completed the KACST Semiconductor Integrated Circuits program.";
    }
    if (q.includes('ultra') || q.includes('investment') || q.includes('fintech')) {
      return "ULTRA Investment is an institutional AI platform founded by Samah Basoodan, engineered to connect generative language models with enterprise investment research and analytics workflows.";
    }
    if (q.includes('leadership') || q.includes('toastmaster') || q.includes('ithra')) {
      return "Samah has over 5 years of leadership experience and served as President of Okaz Toastmasters Club hosted at Ithra (King Abdulaziz Center for World Culture by Aramco).";
    }
    if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('collaborat')) {
      return "You can connect with Samah for research collaborations or inquiries directly via the 'Let's Build the Future' contact section at the bottom of the page.";
    }
    return "Samah Basoodan is an AI Researcher, Computer Science student, Biomedical Engineering innovator, and founder of ULTRA Investment. Feel free to ask about any of her projects or any technical, scientific, or general topic.";
  }
}
