/**
 * Application Configuration
 * Contains verified URLs, configuration placeholders, and global feature toggles.
 */

export const PORTFOLIO_CONFIG = {
  name: {
    en: "Samah A.Basoodan",
    ar: "سماح باسودان",
  },
  title: {
    en: "AI Researcher · Computer Science Student · Biomedical Engineering Innovator · Medical Inventor",
    ar: "باحثة ذكاء اصطناعي · طالبة علوم حاسب · مبتكرة هندسة طبية حيوية · مخترعة طبية",
  },
  
  // Authentic Visual Assets
  images: {
    portrait: "/portrait.png",
    datathonAward: "/datathon-award.jpeg",
    logo: {
      en: "/logo-en.png",
      ar: "/logo-ar.png",
    },
  },

  // Contact & Social Links
  contact: {
    email: "samah1basudan@gmail.com",
    whatsapp: "https://wa.me/966508906437",
    whatsappNumber: "966508906437",
    github: "https://github.com/samah112",
    linkedin: "https://www.linkedin.com/in/samah-basoodan-329348294",
    location: {
      en: "Riyadh & Eastern Province, Kingdom of Saudi Arabia",
      ar: "الرياض والمنطقة الشرقية، المملكة العربية السعودية",
    },
  },

  // Resume / CV Links & Configuration
  resume: {
    pdfUrl: "/SamahCV.pdf", 
    fileName: "SamahCV.pdf",
    version: "2025/2026 Edition",
    title: {
      en: "Curriculum Vitae",
      ar: "السيرة الذاتية",
    },
    subtitle: {
      en: "Verified Academic, Research & Leadership Record",
      ar: "الملف الأكاديمي والبحثي والقيادي المعتمد",
    },
  },

  // Refined Color Palette Constants
  theme: {
    // Light Mode
    lavenderWhite: "hsl(270, 30%, 97%)",
    lightBlueGray: "#dfe3ea",
    lightLavender: "#d9cfe8",
    softVioletWhite: "#f5f2f7",
    deepPlum: "hsl(270, 20%, 15%)",
    purpleGray: "hsl(270, 10%, 45%)",
    mutedViolet: "hsl(270, 40%, 55%)",
    lavender: "hsl(300, 20%, 90%)",
    paleCyan: "hsl(195, 50%, 85%)",
    dustyPink: "#c8a0be",
    lightTeal: "#81c8d4",
    
    // Dark Mode
    deepPlumBlack: "hsl(270, 25%, 8%)",
    deepPurple: "#130e24",
    midnightBluePurple: "#0d1220",
    darkPurple: "#0f0b1a",
    softLavenderWhite: "hsl(270, 15%, 92%)",
    lightLavenderGray: "hsl(270, 15%, 85%)",
    mutedGrayPurple: "hsl(270, 10%, 55%)",
    brightLavender: "hsl(270, 60%, 70%)",
    darkPlum: "hsl(270, 20%, 18%)",
    deepTeal: "hsl(195, 60%, 40%)",

    surfaceGlass: "rgba(255, 255, 255, 0.65)",
  },

  // AI Assistant Setup
  assistant: {
    name: {
      en: "Samah AI",
      ar: "مساعد سماح الذكي",
    },
    defaultModel: "gemini-3.7-flash",
  },
};
