import React, { useEffect } from 'react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { X, ShieldAlert, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#181526]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#f8f5fb] dark:bg-gradient-to-br dark:from-[#1d1336] dark:via-[#16132b] dark:to-[#111a28] text-[#261F2D] dark:text-[hsl(270,15%,92%)] backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#D9CFE8]/80 dark:border-white/15 overflow-y-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#D9CFE8]/60 dark:border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15">
                {t(project.category)}
              </span>
              {project.badge && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D9D2F3]/40 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9D2F3] dark:border-white/15">
                  {t(project.badge)}
                </span>
              )}
            </div>
            <h3 id="modal-project-title" className="font-display font-extrabold text-2xl sm:text-3xl text-[#261F2D] dark:text-white">
              {t(project.title)}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#786B7F] dark:text-white/80 hover:text-[#261F2D] dark:hover:text-white border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs transition-all cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-6">
          {/* Role */}
          {project.role && (
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-[#D9CFE8]/60 dark:border-white/10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#915EBD] dark:text-[#81C8D4] shrink-0" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#786B7F] dark:text-white/60 block leading-none">
                  {isRTL ? 'دور ومساهمة سماح' : "Samah's Role & Contribution"}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#261F2D] dark:text-white mt-0.5 block">
                  {t(project.role)}
                </span>
              </div>
            </div>
          )}

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] mb-2">
              {isRTL ? 'عن المشروع والمنهجية' : 'Overview & Architecture'}
            </h4>
            <p className="text-sm sm:text-base text-[#261F2D]/90 dark:text-[hsl(270,15%,92%)] leading-relaxed">
              {t(project.fullDescription)}
            </p>
          </div>

          {/* Key Highlights / Innovations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] mb-3">
              {isRTL ? 'أبرز الابتكارات والميزات' : 'Key Methodologies & Features'}
            </h4>
            <ul className="space-y-2.5">
              {t(project.highlights).map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#261F2D] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Clinical / Research Note if applicable */}
          {project.clinicalNote && (
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-700/50 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                {t(project.clinicalNote)}
              </p>
            </div>
          )}

          {/* Technologies Used Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#525252] dark:text-[hsl(270,10%,65%)] inline mr-1" />
              <span>{isRTL ? 'التقنيات والأطر المستخدمة' : 'Technologies & Stack'}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {t(project.technologies).map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/70 dark:bg-white/10 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#D9CFE8]/60 dark:border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white text-xs font-bold hover:opacity-95 shadow-xs transition-all cursor-pointer"
          >
            {isRTL ? 'إغلاق النافذة' : 'Close Details'}
          </button>
        </div>
      </div>
    </div>
  );
};
