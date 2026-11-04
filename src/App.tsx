import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { HighlightRail } from './components/highlights/HighlightRail';
import { AboutSection } from './components/about/AboutSection';
import { ProjectShowcase } from './components/projects/ProjectShowcase';
import { AwardSpotlight } from './components/awards/AwardSpotlight';
import { ResearchAtlas } from './components/research/ResearchAtlas';
import { EducationJourney } from './components/education/EducationJourney';
import { SkillCluster } from './components/skills/SkillCluster';
import { LeadershipSection } from './components/leadership/LeadershipSection';
import { ResumeSection } from './components/resume/ResumeSection';
import { ContactSection } from './components/contact/ContactSection';
import { SamahAIChat, AIChatLauncher } from './components/chat/SamahAIChat';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';

export function PortfolioApp() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="min-h-screen iridescent-canvas text-[#261F2D] dark:text-[hsl(270,15%,92%)] flex flex-col font-sans selection:bg-[#D9CFE8] selection:text-[#261F2D] dark:selection:bg-[#915EBD] dark:selection:text-white overflow-x-hidden relative transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Dynamic Ambient Iridescent Waves / Blobs with Dark Mode Palette */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transform-gpu">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#D9CFE8]/40 via-[#BDE5EF]/30 to-transparent dark:from-[#9b87c8]/20 dark:via-[#130e24]/40 blur-3xl animate-wave-mesh will-change-transform" />
        <div className="absolute top-[30%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-[#81C8D4]/30 via-[#C8A0BE]/25 to-transparent dark:from-[#298199]/20 dark:via-[#c8a0be]/15 blur-3xl animate-wave-mesh will-change-transform" style={{ animationDelay: '-5s' }} />
        <div className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-[#DFE3EA]/40 via-[#BDE5EF]/30 to-transparent dark:from-[#130e24]/40 dark:via-[#0d1220]/50 blur-3xl animate-wave-mesh will-change-transform" style={{ animationDelay: '-9s' }} />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D-inspired Portrait */}
        <HeroSection onOpenAIChat={() => setIsAIChatOpen(true)} />

        {/* 2. Selected Milestones & Highlights */}
        <HighlightRail />

        {/* 3. Curriculum Vitae & Resume Actions (View & Download) */}
        <ResumeSection />

        {/* 4. About Section: Bridging AI & Healthcare */}
        <AboutSection />

        {/* 5. Academic Journey (SEU, KAUST, KACST) */}
        <EducationJourney />

        {/* 6. Featured Projects & Innovations */}
        <ProjectShowcase />

        {/* 7. National Award Spotlight (Health Datathon) */}
        <AwardSpotlight />

        {/* 8. Research Focus Constellation Atlas */}
        <ResearchAtlas />

        {/* 9. Skills & Capabilities Matrix */}
        <SkillCluster />

        {/* 10. Leadership & Toastmasters Impact */}
        <LeadershipSection />

        {/* 11. Direct Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Navigation */}
      <MobileBottomNav onOpenAIChat={() => setIsAIChatOpen(true)} />

      {/* Samah AI Assistant Floating Launcher */}
      <AIChatLauncher onClick={() => setIsAIChatOpen(true)} />

      {/* Samah AI Chat Dialog / Sheet */}
      <SamahAIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
