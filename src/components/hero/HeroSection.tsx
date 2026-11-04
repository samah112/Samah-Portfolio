import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { HERO_CONTENT } from '../../data/portfolioContent';
import { NeuralBackground } from './NeuralBackground';
import { PortraitExperience } from './PortraitExperience';
import { TypewriterRoles } from './TypewriterRoles';
import { ArrowDown, Mail, Sparkles, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenAIChat?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { t, isRTL } = useLanguage();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Dynamic Interactive Background Pattern */}
      <NeuralBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Editorial Typography & CTAs with Motion Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`lg:col-span-7 flex flex-col justify-center text-center ${
              isRTL ? 'lg:text-right lg:items-start items-center' : 'lg:text-left lg:items-start items-center'
            }`}
          >
            {/* Main Greeting & Dynamic Typewriter Identity */}
            <motion.div
              variants={itemVariants}
              className={`mb-3 flex flex-col items-center lg:items-start ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/90 dark:border-white/15 shadow-2xs mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4]" />
                <span className="text-xs sm:text-sm font-extrabold text-[#786B7F] dark:text-white/80 tracking-wider uppercase">
                  {t(HERO_CONTENT.greeting)}{' '}
                  <strong className="text-[#261F2D] dark:text-white font-black">{t(HERO_CONTENT.name)}</strong>
                </span>
              </div>

              {/* Character-by-character dynamic typewriter animation */}
              <TypewriterRoles />
            </motion.div>

            {/* Display Headline with Crisp Modern Editorial Typography & Gradient */}
            <motion.h1
              variants={itemVariants}
              className={`font-hero-title font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] tracking-tight leading-[1.15] mb-6 text-center hero-title-gradient ${
                isRTL ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              {t(HERO_CONTENT.heroHeading)}
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg text-[#786B7F] dark:text-[hsl(270,15%,92%)] font-normal leading-relaxed max-w-2xl mb-8 text-center ${
                isRTL ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              {t(HERO_CONTENT.heroSubheading)}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 justify-center lg:justify-start"
            >
              {/* Primary Gradient Button (#9b87c8 → #81c8d4) */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={scrollToProjects}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>{t(HERO_CONTENT.ctaPrimary)}</span>
                <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>

              {/* Secondary Clean White Button (Deep Plum Text in Light Mode, Frosted Dark in Dark Mode) */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-2xl bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-white text-sm font-bold border border-[#D9CFE8]/80 dark:border-white/15 hover:border-[#915EBD]/40 dark:hover:border-[#81C8D4]/40 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" />
                <span>{t(HERO_CONTENT.ctaSecondary)}</span>
              </motion.button>
            </motion.div>

            {/* Quick Metrics / Tags Row in Frosted Glass Cards */}
            <motion.div
              variants={itemVariants}
              className={`mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="px-4 py-2 rounded-2xl bg-white/60 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-md border border-white/80 dark:border-white/12 shadow-2xs"
              >
                <span className="font-display font-black text-xl sm:text-2xl text-[#080808] dark:text-white block">
                  {isRTL ? 'المركز الثاني' : '2nd Place'}
                </span>
                <span className="text-xs font-semibold text-[#525252] dark:text-[hsl(270,15%,85%)]">{isRTL ? 'الداتاثون الصحي الوطني' : 'Health Datathon MOH'}</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="px-4 py-2 rounded-2xl bg-white/60 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-md border border-white/80 dark:border-white/12 shadow-2xs"
              >
                <span className="font-display font-black text-xl sm:text-2xl text-[#080808] dark:text-white block">
                  {isRTL ? 'المؤسسة' : 'Founder'}
                </span>
                <span className="text-xs font-semibold text-[#525252] dark:text-[hsl(270,15%,85%)]">{isRTL ? 'منصة ULTRA Investment' : 'ULTRA Investment FinTech'}</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                className="px-4 py-2 rounded-2xl bg-white/60 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-md border border-white/80 dark:border-white/12 shadow-2xs"
              >
                <span className="font-display font-black text-xl sm:text-2xl text-[#080808] dark:text-white block">
                  {isRTL ? '+5 سنوات' : '5+ Years'}
                </span>
                <span className="text-xs font-semibold text-[#525252] dark:text-[hsl(270,15%,85%)]">{isRTL ? 'قيادة التوستماسترز بإثراء' : 'Toastmasters Leadership'}</span>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Free-standing 3D Portrait Experience */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <PortraitExperience />
          </div>

        </div>
      </div>
    </section>
  );
};
