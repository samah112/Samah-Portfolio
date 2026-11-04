import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PORTFOLIO_CONFIG } from '../../config';
import { Globe, ArrowUp, Mail, Phone } from 'lucide-react';

// Custom Official LinkedIn Vector Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Custom Official GitHub Vector Icon
const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom Official WhatsApp Vector Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.04 8.04 0 01-1.24-4.29c0-4.44 3.61-8.05 8.05-8.05 2.15 0 4.17.84 5.69 2.36a8.01 8.01 0 012.35 5.68c0 4.44-3.62 8.06-8.06 8.06zm4.41-6.03c-.24-.12-1.43-.71-1.65-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: { en: 'Home', ar: 'الرئيسية' } },
    { id: 'cv', label: { en: 'CV / Resume', ar: 'السيرة الذاتية' } },
    { id: 'about', label: { en: 'About', ar: 'عن سماح' } },
    { id: 'education', label: { en: 'Education', ar: 'التعليم' } },
    { id: 'projects', label: { en: 'Projects', ar: 'المشاريع' } },
    { id: 'award', label: { en: 'Award', ar: 'الجائزة' } },
    { id: 'research', label: { en: 'Research', ar: 'الأبحاث' } },
    { id: 'skills', label: { en: 'Skills', ar: 'المهارات' } },
    { id: 'leadership', label: { en: 'Leadership', ar: 'القيادة' } },
    { id: 'contact', label: { en: 'Contact', ar: 'تواصل' } },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#f5f2f7]/85 dark:bg-[#0f0b1a]/90 text-[#261F2D] dark:text-[hsl(270,15%,92%)] pt-16 pb-28 lg:pb-16 border-t border-[#D9CFE8]/70 dark:border-white/10 backdrop-blur-2xl relative overflow-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9CFE8]/35 dark:bg-[#9b87c8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DFE3EA]/45 dark:bg-[#81c8d4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D9CFE8]/70 dark:border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center border border-[#D9CFE8]/80 dark:border-white/20 overflow-hidden shadow-sm">
                <img
                  src={t(PORTFOLIO_CONFIG.images.logo)}
                  alt="Samah A.Basoodan Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#261F2D] dark:text-white block leading-tight">
                  {t(PORTFOLIO_CONFIG.name)}
                </span>
                <span className="text-xs text-[#915EBD] dark:text-[#D9D2F3] font-medium block">
                  {isRTL ? 'باحثة ذكاء اصطناعي · مبتكرة هندسة طبية حيوية' : 'AI Researcher · Biomedical Innovator'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#786B7F] dark:text-[hsl(270,15%,92%)] leading-relaxed max-w-sm">
              {isRTL
                ? 'بناء تقنيات ذكاء اصطناعي تُحدث أثراً حقيقياً في الرعاية الصحية والاستثمار والأنظمة الذكية.'
                : 'Building AI technologies that transform healthcare and intelligent systems into meaningful real-world impact.'}
            </p>

            {/* Quick Contact Buttons Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`mailto:${PORTFOLIO_CONFIG.contact.email}`}
                className="p-2 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-[#D9D2F3] border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs transition-all flex items-center gap-1.5 text-xs font-semibold"
                title={PORTFOLIO_CONFIG.contact.email}
              >
                <Mail className="w-4 h-4 text-[#915EBD] dark:text-[#D9D2F3]" />
                <span className="hidden sm:inline">{PORTFOLIO_CONFIG.contact.email}</span>
              </a>

              {PORTFOLIO_CONFIG.contact.whatsapp && (
                <a
                  href={PORTFOLIO_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#9b87c8]/25 to-[#81c8d4]/30 hover:from-[#9b87c8]/45 hover:to-[#81c8d4]/50 dark:bg-gradient-to-r dark:from-[#9b87c8]/35 dark:to-[#81c8d4]/35 text-[#261F2D] dark:text-[#81C8D4] border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs transition-all"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#261F2D] dark:text-[#81C8D4]" />
                </a>
              )}

              <a
                href={PORTFOLIO_CONFIG.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-[#0077B5] text-[#261F2D] dark:text-white hover:text-white border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs transition-all"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_CONFIG.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-[#261F2D] text-[#261F2D] dark:text-white hover:text-white border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs transition-all"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-4">
              {isRTL ? 'أقسام الموقع' : 'Navigation'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#786B7F] dark:text-[hsl(270,15%,85%)]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left hover:text-[#261F2D] dark:hover:text-white transition-colors cursor-pointer ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  {t(link.label)}
                </button>
              ))}
            </div>
          </div>

          {/* Controls & Socials Col */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-2">
              {isRTL ? 'اللغة والاتصال' : 'Language & Networks'}
            </span>

            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 border border-[#D9CFE8]/80 dark:border-white/10 text-xs font-semibold text-[#261F2D] dark:text-white shadow-2xs transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#915EBD] dark:text-[#D9D2F3]" />
                <span>{language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}</span>
              </div>
              <span className="text-[10px] text-[#786B7F] dark:text-[hsl(270,10%,65%)] uppercase">{language}</span>
            </button>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 border border-[#D9CFE8]/80 dark:border-white/10 text-xs font-semibold text-[#261F2D] dark:text-white shadow-2xs transition-all cursor-pointer"
            >
              <span>{isRTL ? 'العودة للأعلى' : 'Back to top'}</span>
              <ArrowUp className="w-4 h-4 text-[#915EBD] dark:text-[#D9D2F3]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#786B7F] dark:text-[hsl(270,10%,65%)]">
          <p>
            © {new Date().getFullYear()} {t(PORTFOLIO_CONFIG.name)}. {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <p className="text-[11px] text-[#786B7F]/70 dark:text-[hsl(270,10%,65%)]">
            {isRTL ? 'المملكة العربية السعودية · رؤية 2030' : 'Kingdom of Saudi Arabia · Vision 2030'}
          </p>
        </div>

      </div>
    </footer>
  );
};
