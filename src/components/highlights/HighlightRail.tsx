import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { HIGHLIGHTS_DATA } from '../../data/portfolioContent';
import { Trophy, Activity, TrendingUp, Award, Brain, Cpu, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Activity,
  TrendingUp,
  Award,
  Brain,
  Cpu,
};

export const HighlightRail: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-white/40 dark:bg-transparent border-y border-white/80 dark:border-white/10 backdrop-blur-md relative overflow-hidden">
      {/* Background radiant ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D9D2F3]/25 dark:bg-[#9b87c8]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#BFDDF4]/25 dark:bg-[#81c8d4]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Spring Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 text-[#171717] dark:text-white text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#525252] dark:text-[#81C8D4]" />
              <span>{isRTL ? 'أبرز الإنجازات والمحطات' : 'Selected Highlights'}</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#080808] dark:text-white tracking-tight">
              {isRTL ? 'محطات التميز والابتكار' : 'Milestones in AI & Innovation'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] max-w-md font-medium leading-relaxed">
            {isRTL
              ? 'مزيج فريد من البحث العلمي، والابتكار الطبي، وريادة الأعمال التقنية والقيادة التنفيذية.'
              : 'A curated overview of national awards, biomedical research initiatives, and technological leadership.'}
          </p>
        </motion.div>

        {/* Highlights Dynamic Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HIGHLIGHTS_DATA.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            const isFeatured = item.featured;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25, ease: 'easeOut' } }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-7 sm:p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between cursor-default overflow-hidden ${
                  isFeatured
                    ? 'bg-white/55 hover:bg-white/70 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl border-2 border-[#D9CFE8] dark:border-white/20 shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)]'
                    : 'bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(38,31,45,0.08)]'
                }`}
              >
                {/* Top Badge & Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-300 ${
                        isFeatured
                          ? 'bg-[#D9CFE8]/50 text-[#261F2D] dark:text-white border border-[#D9CFE8] dark:border-white/15'
                          : 'bg-white/70 dark:bg-white/10 text-[#786B7F] dark:text-white/90 border border-[#D9CFE8]/60 dark:border-white/10'
                      }`}
                    >
                      {t(item.badge)}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-sm'
                          : 'bg-gradient-to-br from-[#D9CFE8]/50 via-[#BDE5EF]/40 to-[#81C8D4]/30 dark:bg-white/10 text-[#261F2D] dark:text-white border border-white/60 dark:border-white/15 group-hover:from-[#9b87c8] group-hover:to-[#81c8d4] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-extrabold text-lg sm:text-xl mb-3 leading-snug tracking-tight text-[#261F2D] dark:text-white"
                  >
                    {t(item.title)}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-xs sm:text-sm leading-relaxed font-normal text-[#786B7F] dark:text-[hsl(270,15%,92%)]"
                  >
                    {t(item.description)}
                  </p>
                </div>

                {/* Bottom status indicator */}
                <div
                  className="relative z-10 mt-7 pt-4 border-t border-[#D9CFE8]/60 dark:border-white/10 text-[11px] font-bold flex items-center justify-between text-[#786B7F] dark:text-[hsl(270,10%,65%)] group-hover:text-[#261F2D] dark:group-hover:text-white transition-colors"
                >
                  <span>{isFeatured ? (isRTL ? 'جائزة وطنية متميزة' : 'Key Recognition') : (isRTL ? 'مسار تخصصي' : 'Specialization')}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
