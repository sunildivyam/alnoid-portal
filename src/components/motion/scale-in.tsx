"use client";

import { motionConfig } from "@/lib/motion-config";
import { motion } from "motion/react";
import { ReactNode } from "react";

export interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
}

export function ScaleIn({ children, delay = 0, once = true }: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once }}
      transition={{
        duration: motionConfig.duration.normal,
        delay,
        ease: motionConfig.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
