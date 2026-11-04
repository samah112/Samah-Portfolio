import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { AWARD_SPOTLIGHT } from '../../data/portfolioContent';
import { Trophy, CheckCircle2, Star } from 'lucide-react';

export const AwardSpotlight: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="award" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9D2F3]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#BFDDF4]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#261F2D] dark:text-white bg-white/90 dark:bg-white/10 border border-[#D9CFE8]/80 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Trophy className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" />
            <span>{isRTL ? 'تكريم وتميز وطني' : 'National Award Spotlight'}</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#080808] dark:text-white leading-tight">
            {t(AWARD_SPOTLIGHT.title)}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-normal leading-relaxed">
            {t(AWARD_SPOTLIGHT.statement)}
          </p>
        </motion.div>

        {/* Award Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Authentic Award Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl p-2 bg-gradient-to-tr from-[#D9D2F3] via-[#BFDDF4] to-[#F3D4DE] dark:from-[#9b87c8]/40 dark:via-[#130e24] dark:to-[#81c8d4]/30 shadow-[0_20px_50px_rgba(16,24,39,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              <div className="relative rounded-[22px] overflow-hidden bg-white dark:bg-[#130e24] aspect-[4/3] flex items-center justify-center">
                <img
                  src={AWARD_SPOTLIGHT.imageUrl}
                  alt="Samah Basoodan receiving 2nd Place at Health Datathon"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating "02" Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="bg-white/90 dark:bg-[#130e24]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 dark:border-white/15 shadow-md">
                    <span className="text-xs font-bold text-[#080808] dark:text-white block">
                      {isRTL ? 'ملتقى الصحة العالمي' : 'Global Health Exhibition'}
                    </span>
                    <span className="text-[11px] text-[#525252] dark:text-[hsl(270,15%,85%)] font-semibold">
                      {t(AWARD_SPOTLIGHT.track)}
                    </span>
                  </div>

                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white font-display font-black text-2xl flex items-center justify-center shadow-xl border border-white/40">
                    02
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Details & Supporter Recognition with Stagger Motion */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-5"
          >
            
            {/* Track Info Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/45 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 border border-white/70 dark:border-white/12 backdrop-blur-2xl shadow-xs hover:shadow-md transition-all">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-1.5">
                {isRTL ? 'المسار التنافسي' : 'Competitive Track'}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#261F2D] dark:text-white">
                {t(AWARD_SPOTLIGHT.track)}
              </h3>
              <p className="text-xs sm:text-sm text-[#786B7F] dark:text-[hsl(270,15%,92%)] mt-2 leading-relaxed">
                {isRTL
                  ? 'تطوير حلول استباقية بالذكاء الاصطناعي للرصد المبكر للحالات الحرجة والتنبؤ بالمخاطر الدماغية الوعائية.'
                  : 'Developing pre-emptive AI solutions for early detection of critical cerebrovascular conditions.'}
              </p>
            </div>

            {/* Ministerial & Royal Recognition */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/55 dark:bg-gradient-to-br dark:from-[#1d1336]/95 dark:via-[#16132b]/95 dark:to-[#111a28]/95 border border-[#D9CFE8] dark:border-white/15 backdrop-blur-2xl shadow-md">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#261F2D] dark:text-white flex items-center gap-1.5 mb-3">
                <Star className="w-3.5 h-3.5 text-[#915EBD] fill-[#915EBD] dark:text-[#81C8D4] dark:fill-[#81C8D4]" />
                <span>{isRTL ? 'التكريم والتشريف' : 'Official Recognition'}</span>
              </span>
              <ul className="space-y-2.5">
                {t(AWARD_SPOTLIGHT.recognition).map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#261F2D] dark:text-white font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supporters & Partners */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/40 dark:bg-gradient-to-br dark:from-[#1d1336]/70 dark:via-[#16132b]/70 dark:to-[#111a28]/70 border border-white/70 dark:border-white/10 backdrop-blur-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-3">
                {isRTL ? 'الجهات الداعمة والمنظمة' : 'Supporting & Organizing Bodies'}
              </span>
              <div className="flex flex-wrap gap-2">
                {t(AWARD_SPOTLIGHT.supporters).map((sup: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/70 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs"
                  >
                    {sup}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
