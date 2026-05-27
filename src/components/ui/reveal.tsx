import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp } from '../../lib/motion';
import { cn } from '../../lib/cn';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial={prefersReduced ? 'visible' : 'hidden'}
      animate={prefersReduced || isInView ? 'visible' : 'hidden'}
      transition={{ delay: prefersReduced ? 0 : delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
