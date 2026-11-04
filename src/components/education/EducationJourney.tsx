import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { EDUCATION_DATA } from '../../data/portfolioContent';
import { Building, CheckCircle2 } from 'lucide-react';

export const EducationJourney: React.FC = () => {
  const { t, isRTL } = useLanguage();

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
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            {isRTL ? 'المسيرة الأكاديمية والبرامج' : 'Academic Journey'}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
            {isRTL ? 'التعليم والبرامج المتقدمة' : 'Education & Specializations'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-medium leading-relaxed">
            {isRTL
              ? 'تأسيس أكاديمي رصين في علوم الحاسب مدعوم ببرامج بحثية متقدمة في الذكاء الاصطناعي وأشباه الموصلات.'
              : 'Rigorous computer science fundamentals combined with specialized programs in frontier AI and semiconductor engineering.'}
          </p>
        </motion.div>

        {/* Pathway Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl rounded-3xl p-7 border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)] transition-all duration-300 flex flex-col justify-between cursor-default"
            >
              <div>
                {/* Top status badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs">
                    {t(item.status)}
                  </span>
                  <span className="w-7 h-7 rounded-xl bg-gradient-to-r from-[#9b87c8]/25 to-[#81c8d4]/30 dark:bg-white/10 flex items-center justify-center text-[#261F2D] dark:text-white font-bold text-xs border border-[#D9CFE8]/80 dark:border-white/15">
                    0{idx + 1}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="font-display font-extrabold text-xl text-[#261F2D] dark:text-white mb-2 leading-snug">
                  {t(item.degree)}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold text-[#786B7F] dark:text-[hsl(270,15%,85%)] mb-6">
                  <Building className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4]" />
                  <span>{t(item.institution)}</span>
                </div>

                {/* Focus Points */}
                <div className="space-y-2.5 pt-4 border-t border-[#D9CFE8]/60 dark:border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-2">
                    {isRTL ? 'المحاور والتركيز' : 'Key Focus Areas'}
                  </span>
                  {t(item.focus).map((f: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#261F2D] dark:text-white font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-3 border-t border-[#D9CFE8]/60 dark:border-white/10 flex items-center justify-between text-[11px] text-[#786B7F] dark:text-[hsl(270,10%,65%)] font-semibold">
                <span>{isRTL ? 'برنامج معتمد' : 'Verified Program'}</span>
                <span className="text-[#261F2D] dark:text-white font-bold">{isRTL ? 'المملكة العربية السعودية' : 'KSA'}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
