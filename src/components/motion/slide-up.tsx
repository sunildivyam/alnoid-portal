"use client";

import { motionConfig } from "@/lib/motion-config";
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
  duration = motionConfig.duration.normal,
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
        ease: motionConfig.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
