import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SKILL_CATEGORIES } from '../../data/portfolioContent';
import {
  Brain,
  Sparkles,
  GitBranch,
  Layers,
  Eye,
  Wand2,
  Terminal,
  BarChart3,
  HeartPulse,
  BookOpen,
  Activity,
  Stethoscope,
  Component,
  Lightbulb,
  ShieldAlert,
  Cpu,
  Network,
  Palette,
  HardDrive,
  Rocket,
  Users,
  Crown,
  Mic,
  MessageSquare,
  Target,
  CheckCircle2,
  Compass,
} from 'lucide-react';

const skillIconMap: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  GitBranch,
  Layers,
  Eye,
  Wand2,
  Terminal,
  BarChart3,
  HeartPulse,
  BookOpen,
  Activity,
  Stethoscope,
  Component,
  Lightbulb,
  ShieldAlert,
  Cpu,
  Network,
  Palette,
  HardDrive,
  Rocket,
  Users,
  Crown,
  Mic,
  MessageSquare,
  Target,
  CheckCircle2,
  Compass,
  Figma: Palette,
  Microchip: Cpu,
};

export const SkillCluster: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
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
            {isRTL ? 'الخبرات والمهارات' : 'Core Capabilities'}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
            {isRTL ? 'المهارات والخبرات التخصصية' : 'Skills & Technical Toolkit'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-medium leading-relaxed">
            {isRTL
              ? 'مجموعة متكاملة من الأدوات التقنية، المعارف البحثية الحيوية، والمهارات القيادية التنفيذية.'
              : 'An interdisciplinary matrix spanning computational intelligence, biomedical methodology, system design, and executive leadership.'}
          </p>
        </motion.div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const CatIcon = skillIconMap[cat.iconName] || Sparkles;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 35, scale: 0.96, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)] transition-all duration-300"
              >
                {/* Cluster Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#D9CFE8]/60 dark:border-white/10">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D9CFE8]/50 via-[#BDE5EF]/40 to-[#81C8D4]/30 dark:bg-white/10 text-[#261F2D] dark:text-white border border-white/60 dark:border-white/15 flex items-center justify-center shadow-2xs">
                    <CatIcon className="w-5 h-5 text-[#915EBD] dark:text-[#81C8D4]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-[#261F2D] dark:text-white">
                      {t(cat.title)}
                    </h3>
                    <span className="text-xs text-[#786B7F] dark:text-[hsl(270,15%,85%)] font-bold">
                      {cat.skills.length} {isRTL ? 'مهارات متقنة' : 'Specialized Capabilities'}
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = (skill.iconName && skillIconMap[skill.iconName]) || CheckCircle2;

                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.04, y: -2 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/70 hover:bg-white/90 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/10 transition-all text-xs font-semibold cursor-default shadow-2xs"
                      >
                        <SkillIcon className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#81C8D4] shrink-0" />
                        <span>{t(skill.name)}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
