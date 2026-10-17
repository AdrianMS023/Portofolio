'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

type ScrollRevealProps = HTMLMotionProps<'section'>;

export const ScrollReveal = ({ children, ...sectionProps }: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      {...sectionProps}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  );
};
