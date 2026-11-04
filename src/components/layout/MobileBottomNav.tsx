import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Home, Briefcase, Brain, User, Mail, MoreHorizontal, Trophy, GraduationCap, Sparkles, X, Sun, Moon } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenAIChat: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenAIChat }) => {
  const { t, isRTL } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [moreDrawerOpen, setMoreDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show when scrolling up or at top; hide when scrolling down rapidly
          if (currentScrollY <= 80) {
            setVisible(true);
          } else if (currentScrollY > lastScrollY.current + 10) {
            setVisible(false);
          } else if (currentScrollY < lastScrollY.current - 10) {
            setVisible(true);
          }

          lastScrollY.current = currentScrollY;

          // Ensure it reappears when scroll stops
          if (scrollTimeout.current) {
            window.clearTimeout(scrollTimeout.current);
          }
          scrollTimeout.current = window.setTimeout(() => {
            setVisible(true);
          }, 1200);

          // Detect active section
          const sections = ['hero', 'projects', 'research', 'about', 'award', 'education', 'skills', 'leadership'];
          const current = sections.find((sec) => {
            const el = document.getElementById(sec);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= 250 && rect.bottom >= 150;
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMoreDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const primaryItems = [
    { id: 'hero', icon: Home, label: { en: 'Home', ar: 'الرئيسية' } },
    { id: 'projects', icon: Briefcase, label: { en: 'Work', ar: 'الأعمال' } },
    { id: 'research', icon: Brain, label: { en: 'Research', ar: 'الأبحاث' } },
    { id: 'about', icon: User, label: { en: 'About', ar: 'عن سماح' } },
    { id: 'award', icon: Trophy, label: { en: 'Award', ar: 'الجائزة' } },
  ];

  const secondaryItems = [
    { id: 'education', icon: GraduationCap, label: { en: 'Education & Academics', ar: 'التعليم والأكاديميات' } },
    { id: 'skills', icon: Sparkles, label: { en: 'Skills & Tools', ar: 'المهارات والتقنيات' } },
    { id: 'leadership', icon: User, label: { en: 'Leadership & Toastmasters', ar: 'القيادة والتوستماسترز' } },
    { id: 'contact', icon: Mail, label: { en: 'Contact & Collaboration', ar: 'التواصل والتعاون' } },
  ];

  return (
    <>
      {/* Secondary Destination Drawer */}
      {moreDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#181526]/70 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div
            className="bg-[#f8f5fb] dark:bg-[#130e24] rounded-t-3xl p-5 border-t border-[#D9CFE8]/80 dark:border-white/15 shadow-2xl pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#D9CFE8]/60 dark:border-white/10">
              <span className="font-display font-bold text-sm text-[#261F2D] dark:text-white">
                {isRTL ? 'استكشف المزيد من الأقسام' : 'Explore More Sections'}
              </span>
              
              <div className="flex items-center gap-2">
                {/* Theme toggle in drawer */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/80 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 cursor-pointer shadow-2xs"
                  aria-label="Toggle theme"
                  title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {isDark ? <Sun className="w-4 h-4 text-[#81C8D4]" /> : <Moon className="w-4 h-4 text-[#915EBD]" />}
                </button>
                <button
                  onClick={() => setMoreDrawerOpen(false)}
                  className="p-1.5 rounded-full bg-white/80 dark:bg-white/10 text-[#786B7F] dark:text-white/80 hover:text-[#261F2D] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 text-left transition-all border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#D9CFE8]/40 dark:bg-white/10 flex items-center justify-center text-[#915EBD] dark:text-[#81C8D4]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#261F2D] dark:text-white">{t(item.label)}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#D9CFE8]/60 dark:border-white/10">
              <button
                onClick={() => {
                  setMoreDrawerOpen(false);
                  onOpenAIChat();
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>{isRTL ? 'محادثة المساعد الذكي Samah AI' : "Open Samah's AI Assistant"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Bar */}
      <nav
        className={`lg:hidden fixed bottom-3 left-3 right-3 z-40 transition-transform duration-300 ${
          visible ? 'translate-y-0' : 'translate-y-24'
        }`}
        aria-label="Mobile bottom navigation"
      >
        <div className="max-w-md mx-auto bg-white/95 dark:bg-[rgba(19,14,36,0.92)] backdrop-blur-xl border border-[#D9CFE8]/80 dark:border-white/15 rounded-3xl shadow-[0_8px_30px_rgba(38,31,45,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-1.5 flex items-center justify-around">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex flex-col items-center justify-center flex-1 min-h-[48px] py-1 px-1 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#915EBD] dark:text-[#81C8D4] font-bold bg-[#D9CFE8]/35 dark:bg-white/10'
                    : 'text-[#786B7F] dark:text-[hsl(270,15%,85%)] hover:text-[#261F2D] dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] mt-0.5 whitespace-nowrap">{t(item.label)}</span>
              </button>
            );
          })}

          {/* More menu trigger */}
          <button
            onClick={() => setMoreDrawerOpen(true)}
            className="flex flex-col items-center justify-center flex-1 min-h-[48px] py-1 px-1 rounded-2xl text-[#786B7F] dark:text-[hsl(270,15%,85%)] hover:text-[#261F2D] dark:hover:text-white transition-all cursor-pointer"
            aria-label="More sections"
          >
            <MoreHorizontal className="w-4 h-4" />
            <span className="text-[10px] mt-0.5 whitespace-nowrap">{isRTL ? 'المزيد' : 'More'}</span>
          </button>
        </div>
      </nav>
    </>
  );
};
