import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-[#D9D2F3] via-[#BFDDF4] to-[#F3D4DE] origin-left shadow-[0_0_12px_rgba(217,210,243,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
