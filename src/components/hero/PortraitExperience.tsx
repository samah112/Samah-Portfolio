import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { PORTFOLIO_CONFIG } from '../../config';
import { Brain } from 'lucide-react';

export const PortraitExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance 3D Parallax & Magnetic Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 140, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  
  // Parallax shift for subtle backdrop halo
  const haloShiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const haloShiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] mx-auto flex flex-col items-center justify-center select-none pt-4 pb-4 px-2"
      style={{ perspective: 1200 }}
    >
      {/* 
        =====================================================================
        SOFT, SUBTLE & SHADED BACKGROUND PATTERN (20% Opacity)
        =====================================================================
      */}
      <motion.div
        style={{ x: haloShiftX, y: haloShiftY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-20"
      >
        {/* Soft Radial Ambient Luminous Shadow Glow */}
        <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#D9D2F3] via-[#BFDDF4] to-[#CFEBDD] blur-3xl" />

        {/* Soft Ultrasonic Wave Ring 1 */}
        <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#8E84D4]/40 animate-spin-slow" />

        {/* Dashed Tech Ring 2 */}
        <div className="absolute w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-[#8E84D4]/30 animate-spin-reverse-slow" />

        {/* Concentric Ultrasound Geometric Arcs Pattern (SVG) */}
        <svg
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] animate-spin-slow opacity-60"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="190" stroke="#8E84D4" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="150" stroke="#5D92C4" strokeWidth="1" strokeDasharray="10 14" strokeOpacity="0.4" />
          <circle cx="200" cy="200" r="110" stroke="#5EA888" strokeWidth="1" strokeDasharray="2 6" strokeOpacity="0.35" />

          {/* Crosshair lines */}
          <line x1="200" y1="10" x2="200" y2="40" stroke="#8E84D4" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="200" y1="360" x2="200" y2="390" stroke="#8E84D4" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="10" y1="200" x2="40" y2="200" stroke="#8E84D4" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="360" y1="200" x2="390" y2="200" stroke="#8E84D4" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>

        {/* Orbiting Satellite Nodes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[350px] h-[350px] sm:w-[430px] sm:h-[430px]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#8E84D4] border border-white" />
          <div className="absolute bottom-6 right-10 w-2 h-2 rounded-full bg-[#5D92C4] border border-white" />
        </motion.div>
      </motion.div>

      {/* 
        =====================================================================
        MAIN 3D TILTED PORTRAIT IMAGE (Clean, unobstructed view)
        =====================================================================
      */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full flex items-center justify-center animate-float-slow"
      >
        <motion.img
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          src={PORTFOLIO_CONFIG.images.portrait}
          alt="Samah Basoodan — AI Researcher and Biomedical Innovator"
          className="w-full max-h-[460px] sm:max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(16,24,39,0.1)] hover:drop-shadow-[0_28px_50px_rgba(16,24,39,0.16)] transition-all duration-300"
          loading="eager"
        />
      </motion.div>

      {/* 
        =====================================================================
        ACADEMIC CREDENTIALS PEDESTAL (SEU · KAUST Academy · KACST)
        =====================================================================
      */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        whileHover={{ scale: 1.04, y: -2 }}
        className="mt-4 sm:mt-5 z-20 bg-white/75 hover:bg-white/90 dark:bg-[rgba(19,14,36,0.7)] backdrop-blur-xl px-5 py-2 rounded-full border border-white/80 dark:border-white/15 shadow-[0_12px_28px_-6px_rgba(16,24,39,0.08)] flex items-center gap-2.5 text-xs font-bold text-[#261F2D] dark:text-white transition-all cursor-default"
      >
        <Brain className="w-3.5 h-3.5 text-[#915EBD] dark:text-[#bda4f2]" />
        <span>SEU · KAUST Academy · KACST</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5 animate-pulse" />
      </motion.div>

    </div>
  );
};
