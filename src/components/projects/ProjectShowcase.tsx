import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { PROJECTS_DATA } from '../../data/portfolioContent';
import { Project, ProjectCategory } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryCount = (catId: ProjectCategory) => {
    if (catId === 'all') return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.categoryKey === catId).length;
  };

  const categories: { id: ProjectCategory; title: { en: string; ar: string } }[] = [
    { id: 'all', title: { en: 'All Projects', ar: 'جميع المشاريع' } },
    { id: 'medical', title: { en: 'Medical AI & Health', ar: 'الذكاء الطبي والصحة' } },
    { id: 'fintech', title: { en: 'FinTech & Generative SaaS', ar: 'التقنية المالية والبرمجيات' } },
    { id: 'systems', title: { en: 'Hardware & Systems', ar: 'العتاد والأنظمة المدمجة' } },
    { id: 'eco', title: { en: 'Eco-Tech & Smart Systems', ar: 'الاستدامة والبيئة' } },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.categoryKey === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
              {isRTL ? 'معرض المشاريع والابتكارات' : 'Featured Work'}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
              {isRTL ? 'المشاريع والابتكارات التقنية' : 'Innovations & Systems'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#525252] dark:text-[hsl(270,15%,92%)] max-w-md font-medium">
            {isRTL
              ? 'مجموعة مختارة من مشاريع الذكاء الاصطناعي الطبي، منصات الاستثمار التوليدي، وتطوير الأنظمة الذكية.'
              : 'Selected medical AI concepts, generative financial intelligence platforms, and smart systems.'}
          </p>
        </motion.div>

        {/* Category Filters with Smooth Button Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-sm'
                    : 'bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 text-[#261F2D] dark:text-white hover:border-[#915EBD]/40 dark:hover:border-[#81C8D4]/40 border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs'
                }`}
              >
                {t(cat.title)} ({getCategoryCount(cat.id)})
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid with Smooth AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
