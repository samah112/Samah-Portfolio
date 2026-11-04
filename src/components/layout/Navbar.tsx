import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { PORTFOLIO_CONFIG } from '../../config';
import { Globe, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenAIChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { language, toggleLanguage, isRTL, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);

          const sections = ['hero', 'cv', 'about', 'education', 'projects', 'award', 'research', 'skills', 'leadership', 'contact'];
          const current = sections.find((sec) => {
            const el = document.getElementById(sec);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= 180 && rect.bottom >= 180;
            }
            return false;
          });
          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: { en: 'Home', ar: 'الرئيسية' } },
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
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/70 dark:bg-[rgba(19,14,36,0.75)] backdrop-blur-xl border-b border-white/80 dark:border-white/10 shadow-[0_4px_30px_rgba(16,24,39,0.03)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            aria-label="Samah A.Basoodan Home"
          >
            <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9CFE8]/80 dark:border-white/20 shadow-xs group-hover:shadow-md group-hover:scale-105 transition-all flex items-center justify-center p-1.5 overflow-hidden">
              <img
                src={t(PORTFOLIO_CONFIG.images.logo)}
                alt="Samah A.Basoodan Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-extrabold text-base sm:text-lg text-[#261F2D] dark:text-white tracking-tight block">
              {t(PORTFOLIO_CONFIG.name)}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-[rgba(19,14,36,0.65)] backdrop-blur-xl px-3 py-1.5 rounded-full border border-[#D9CFE8]/80 dark:border-white/15 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-xs font-bold'
                      : 'text-[#786B7F] dark:text-[hsl(270,15%,85%)] hover:text-[#261F2D] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  {t(item.label)}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group: Theme Toggle + Language Switcher */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle (Light ☀️ / Dark 🌙) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#261F2D] dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs backdrop-blur-md transition-all cursor-pointer flex items-center justify-center"
              title={isDark ? (isRTL ? 'التحويل إلى الوضع المضيء' : 'Switch to Light Mode') : (isRTL ? 'التحويل إلى الوضع الداكن' : 'Switch to Dark Mode')}
              aria-label="Toggle theme between Light and Dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#81C8D4] animate-in spin-in-180 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#915EBD] animate-in spin-in-180 duration-300" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#261F2D] dark:text-white bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-[#D9CFE8]/80 dark:border-white/15 hover:border-[#915EBD]/40 shadow-2xs backdrop-blur-md transition-all cursor-pointer"
              aria-label="Toggle language between English and Arabic"
            >
              <Globe className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4]" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
