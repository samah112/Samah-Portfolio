import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { RESEARCH_DOMAINS } from '../../data/portfolioContent';
import { Brain, HeartPulse, Cpu, TrendingUp, Sparkles, CheckCircle2, MousePointerClick, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  HeartPulse,
  Cpu,
  TrendingUp,
};

export const ResearchAtlas: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeDomainId, setActiveDomainId] = useState(RESEARCH_DOMAINS[0].id);

  const activeDomain = RESEARCH_DOMAINS.find((d) => d.id === activeDomainId) || RESEARCH_DOMAINS[0];
  const ActiveIcon = iconMap[activeDomain.iconName] || Sparkles;

  return (
    <section id="research" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            {isRTL ? 'خريطة الأبحاث والاهتمامات' : 'Research Constellation'}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
            {isRTL ? 'محاور البحث العلمي والذكاء' : 'Research Pillars & Inquiry'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-medium leading-relaxed">
            {isRTL
              ? 'استكشاف الأبعاد المتقدمة للذكاء الاصطناعي، الهندسة الطبية، الدوائر المتكاملة والذكاء المالي.'
              : 'Interdisciplinary research across neural networks, biomedical therapeutics, hardware co-design, and financial models.'}
          </p>
        </motion.div>

        {/* Interactive Helper Banner: Explicit visual prompt to click */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[rgba(19,14,36,0.8)] border border-black/10 dark:border-white/15 shadow-xs text-xs font-bold text-[#080808] dark:text-white animate-pulse">
            <MousePointerClick className="w-3.5 h-3.5 text-[#8E84D4] dark:text-[#81C8D4]" />
            <span>
              {isRTL
                ? 'اضغط على أي محور أدناه لاستعراض التفاصيل والمواضيع البحثية'
                : 'Click any research pillar below to explore in-depth topics & details'}
            </span>
          </div>
        </motion.div>

        {/* Interactive Domain Navigation Cards (Tabs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
          {RESEARCH_DOMAINS.map((domain) => {
            const Icon = iconMap[domain.iconName] || Sparkles;
            const isActive = domain.id === activeDomainId;

            return (
              <motion.button
                key={domain.id}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveDomainId(domain.id)}
                className={`relative p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-xl ring-2 ring-[#9b87c8]/30'
                    : 'bg-white dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 hover:bg-white dark:hover:from-[#241842]/95 dark:hover:via-[#1c1836]/95 dark:hover:to-[#162234]/95 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/12 hover:border-[#915EBD]/40 dark:hover:border-white/25 shadow-xs'
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {/* Header Row of each Card: Icon + Interactive Status Tag */}
                <div className="flex items-center justify-between w-full mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-[#080808] dark:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Visual Status Indicator */}
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full transition-all ${
                      isActive
                        ? 'bg-white/20 text-white shadow-2xs'
                        : 'bg-black/5 dark:bg-white/10 text-[#525252] dark:text-[hsl(270,15%,85%)] group-hover:bg-black/10'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{isRTL ? 'المحور النشط' : 'Active'}</span>
                      </>
                    ) : (
                      <>
                        <span>{isRTL ? 'اضغط للعرض' : 'Click to view'}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#525252] dark:text-[hsl(270,15%,85%)]" />
                      </>
                    )}
                  </span>
                </div>

                {/* Title & Core Topics Count */}
                <div>
                  <h3 className="font-display font-bold text-base leading-snug">
                    {t(domain.title)}
                  </h3>
                  <span
                    className={`text-xs font-semibold block mt-1.5 ${
                      isActive ? 'text-white/80' : 'text-[#525252] dark:text-[hsl(270,15%,85%)]'
                    }`}
                  >
                    {domain.topics.en.length} {isRTL ? 'محاور ومفاهيم بحثية' : 'Core Research Topics'}
                  </span>
                </div>

                {/* Active Indicator Arrow pointing downwards */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] rotate-45 hidden lg:block" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active Domain Detail Showcase with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomainId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white/45 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/70 dark:border-white/12 shadow-[0_20px_40px_-10px_rgba(38,31,45,0.06)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Domain Overview */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white flex items-center justify-center shadow-xs">
                    <ActiveIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block">
                      {isRTL ? 'تفاصيل المحور المختار' : 'Selected Research Domain'}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#261F2D] dark:text-white">
                      {t(activeDomain.title)}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#786B7F] dark:text-[hsl(270,15%,92%)] leading-relaxed">
                  {t(activeDomain.description)}
                </p>

                <div className="p-4.5 rounded-2xl bg-white/50 dark:bg-white/10 border border-white/70 dark:border-white/10 shadow-2xs">
                  <span className="text-xs font-bold text-[#261F2D] dark:text-white block mb-1">
                    {isRTL ? 'الأثر والتطبيق العملي' : 'Real-World Impact & Application'}
                  </span>
                  <p className="text-xs sm:text-sm text-[#261F2D]/90 dark:text-[hsl(270,15%,92%)] leading-relaxed">
                    {t(activeDomain.impact)}
                  </p>
                </div>
              </div>

              {/* Focal Topics Chips */}
              <div className="lg:col-span-6 bg-white/40 dark:bg-gradient-to-br dark:from-[#1d1336]/70 dark:via-[#16132b]/70 dark:to-[#111a28]/70 rounded-2xl p-6 border border-white/60 dark:border-white/10 backdrop-blur-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" />
                  <span>{isRTL ? 'المواضيع والمفاهيم البحثية المشمولة' : 'Topics & Sub-Domains Included'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t(activeDomain.topics).map((topic: string, idx: number) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="p-3.5 rounded-xl bg-white/75 dark:bg-white/10 border border-white/80 dark:border-white/10 shadow-2xs flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] shrink-0" />
                      <span className="text-xs font-bold text-[#261F2D] dark:text-white">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
