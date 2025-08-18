"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import type { Ref } from 'react';

interface AnimatedDivProps extends HTMLMotionProps<"div"> {
  delay?: number;
  once?: boolean;
}

export default function AnimatedDiv({ children, className, delay = 0, once = true, ...props }: AnimatedDivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
