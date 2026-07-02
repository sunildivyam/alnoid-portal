"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 32,
  once = true,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
