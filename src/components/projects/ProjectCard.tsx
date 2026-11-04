import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, ArrowUpLeft } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="h-full bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-7 border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(38,31,45,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-default"
    >
      <div>
        {/* Category Pill & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs">
            {t(project.category)}
          </span>
          {project.badge && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#D9CFE8]/40 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8] dark:border-white/15">
              {t(project.badge)}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-xl text-[#261F2D] dark:text-white mb-3 group-hover:text-[#915EBD] dark:group-hover:text-[#81C8D4] transition-colors leading-snug">
          {t(project.title)}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#786B7F] dark:text-[hsl(270,15%,92%)] leading-relaxed mb-6 font-normal">
          {t(project.shortDescription)}
        </p>
      </div>

      <div>
        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {t(project.technologies).slice(0, 4).map((tech: string, idx: number) => (
            <span
              key={idx}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white/60 dark:bg-white/10 text-[#261F2D] dark:text-white/90 border border-white/80 dark:border-white/10 shadow-2xs"
            >
              {tech}
            </span>
          ))}
          {t(project.technologies).length > 4 && (
            <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white/60 dark:bg-white/10 text-[#261F2D] dark:text-white border border-white/80 dark:border-white/10">
              +{t(project.technologies).length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(project)}
          className="w-full py-3 px-4 rounded-2xl bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-white border border-[#D9CFE8]/90 dark:border-white/15 hover:border-[#915EBD]/50 dark:hover:border-[#81C8D4]/50 text-xs font-bold transition-all duration-200 flex items-center justify-between cursor-pointer shadow-2xs hover:shadow-md"
        >
          <span>{isRTL ? 'استكشف تفاصيل المشروع' : 'View Project Details'}</span>
          {isRTL ? (
            <ArrowUpLeft className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};
