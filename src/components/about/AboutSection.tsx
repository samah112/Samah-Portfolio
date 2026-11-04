import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_CONTENT } from '../../data/portfolioContent';
import { Sparkles, HeartPulse, Code2, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  HeartPulse,
  Code2,
  Users,
};

export const AboutSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Tag with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#080808] dark:text-[#81C8D4]" />
            <span>{t(ABOUT_CONTENT.sectionTag)}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight leading-tight">
            {t(ABOUT_CONTENT.heading)}
          </h2>
          <p className="mt-4 text-base text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed font-normal">
            {isRTL
              ? 'رحلة تتقاطع فيها خوارزميات الذكاء الاصطناعي مع الفيزياء الطبية والأنظمة الذكية لصناعة حلول حقيقية.'
              : 'Where computational intelligence meets biomedical physics and leadership to create tangible real-world solutions.'}
          </p>
        </motion.div>

        {/* Narrative & Visual Bridge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left / Narrative Block */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white/70 hover:bg-white/85 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(16,24,39,0.04)] transition-all cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#080808] dark:bg-[#81C8D4]" />
                <strong className="text-[#080808] dark:text-white font-bold text-base block">
                  {isRTL ? 'الأساس الأكاديمي والشغف' : 'Academic Foundation & Passion'}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                {t(ABOUT_CONTENT.p1)}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white/70 hover:bg-white/85 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(16,24,39,0.04)] transition-all cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#080808] dark:bg-[#81C8D4]" />
                <strong className="text-[#080808] dark:text-white font-bold text-base block">
                  {isRTL ? 'الابتكار في الذكاء الاصطناعي الطبي' : 'Biomedical & Clinical AI'}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                {t(ABOUT_CONTENT.p2)}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white/70 hover:bg-white/85 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(16,24,39,0.04)] transition-all cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#080808] dark:bg-[#81C8D4]" />
                <strong className="text-[#080808] dark:text-white font-bold text-base block">
                  {isRTL ? 'ريادة الأعمال والذكاء المالي' : 'Entrepreneurship & FinTech'}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                {t(ABOUT_CONTENT.p3)}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white/70 hover:bg-white/85 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(16,24,39,0.04)] transition-all cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#080808] dark:bg-[#81C8D4]" />
                <strong className="text-[#080808] dark:text-white font-bold text-base block">
                  {isRTL ? 'القيادة والأثر المجتمعي' : 'Leadership & Toastmasters Impact'}
                </strong>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                {t(ABOUT_CONTENT.p4)}
              </p>
            </motion.div>
          </motion.div>

          {/* Right / Identity Pillars Matrix with Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {ABOUT_CONTENT.identityPillars.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Sparkles;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -7, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-7 rounded-3xl bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)] transition-all duration-300 flex flex-col justify-between cursor-default group"
                >
                  <div>
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#D9CFE8]/50 via-[#BDE5EF]/40 to-[#81C8D4]/30 dark:bg-white/10 text-[#261F2D] dark:text-white border border-white/60 dark:border-white/15 flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#915EBD] dark:text-[#81C8D4]" />
                    </div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#261F2D] dark:text-white mb-2.5 leading-snug tracking-tight">
                      {t(pillar.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786B7F] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                      {t(pillar.desc)}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-[#D9CFE8]/60 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-[#261F2D] dark:text-white">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4]" />
                      <span>{isRTL ? 'ركيزة أساسية' : 'Core Pillar'}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
