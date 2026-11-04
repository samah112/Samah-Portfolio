import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { LEADERSHIP_CONTENT } from '../../data/portfolioContent';
import { Users, Crown, Mic, CheckCircle2 } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="leadership" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            {t(LEADERSHIP_CONTENT.sectionTag)}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
            {t(LEADERSHIP_CONTENT.heading)}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-medium leading-relaxed">
            {isRTL
              ? 'القدرة على توجيه الفرق وإلهام المبتكرين ونقل الأفكار العلمية المعقدة بوضوح وتأثير.'
              : 'Empowering teams, mentoring aspiring communicators, and delivering clear rhetorical impact.'}
          </p>
        </motion.div>

        {/* Highlight Banner with 5+ Years Motif & Motion (Pastel Gradient in Light Mode, Deep Plum Glass in Dark Mode) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#9b87c8] via-[#8c94d0] to-[#81c8d4] dark:bg-gradient-to-r dark:from-[#1b122e]/90 dark:via-[#16142a]/90 dark:to-[#131b28]/90 text-white shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/40 dark:border-white/15 backdrop-blur-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glowing Spheres for Dark Mode */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#9b87c8]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#81c8d4]/20 rounded-full blur-2xl pointer-events-none" />
          
          {/* Subtle Glass Light Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* 5+ Number Badge */}
            <div className={`md:col-span-4 flex flex-col items-center ${isRTL ? 'md:items-start text-right' : 'md:items-start text-left'} text-center`}>
              <div className="inline-flex items-baseline gap-1.5">
                <span className="font-display font-black text-6xl sm:text-7xl tracking-tight text-white drop-shadow-sm">
                  {LEADERSHIP_CONTENT.highlightNumber}
                </span>
                <span className="text-xl font-extrabold text-white/90">{isRTL ? 'سنوات' : 'Years'}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-white/95 mt-1 max-w-xs leading-snug">
                {t(LEADERSHIP_CONTENT.highlightLabel)}
              </span>
              <div className="mt-4 px-3.5 py-1 rounded-full bg-white/20 text-[11px] font-semibold text-white border border-white/30 backdrop-blur-md">
                {isRTL ? 'مركز إثراء (أرامكو)' : 'Hosted at Ithra by Aramco'}
              </div>
            </div>

            {/* Story */}
            <div className={`md:col-span-8 border-t md:border-t-0 ${isRTL ? 'md:border-r md:pr-8 text-right' : 'md:border-l md:pl-8 text-left'} md:border-white/30 pt-6 md:pt-0`}>
              <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal">
                {t(LEADERSHIP_CONTENT.story)}
              </p>
            </div>

          </div>
        </motion.div>

        {/* Detailed Roles & Responsibilities Cards in Translucent Frosted Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_CONTENT.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-7 rounded-3xl bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)] transition-all duration-300 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs">
                    {t(role.badge)}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D9CFE8]/60 via-[#BDE5EF]/50 to-[#81C8D4]/40 dark:bg-white/10 text-[#261F2D] dark:text-white border border-white/60 dark:border-white/15 flex items-center justify-center">
                    {idx === 0 ? <Crown className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" /> : idx === 1 ? <Mic className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" /> : <Users className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" />}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-lg text-[#080808] dark:text-white mb-1 leading-snug">
                  {t(role.title)}
                </h3>
                <span className="text-xs font-bold text-[#525252] dark:text-[hsl(270,15%,85%)] block mb-3">
                  {t(role.organization)}
                </span>
                <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] leading-relaxed font-normal">
                  {t(role.desc)}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-black/8 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-[#261F2D] dark:text-white/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4]" />
                <span>{isRTL ? 'إنجاز قيادي موثق' : 'Verified Leadership'}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
