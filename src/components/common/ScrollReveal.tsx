import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  stagger?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'blur-up',
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
  className = '',
  ...props
}) => {
  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.92, y: 25 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
      case 'blur-up':
      default:
        return {
          hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
          visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
          },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
