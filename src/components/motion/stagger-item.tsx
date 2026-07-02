"use client";

import { motionConfig } from "@/lib/motion-config";
import { motion } from "motion/react";
import { ReactNode } from "react";

export interface StaggerItemProps {
  children: ReactNode;
}

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: motionConfig.duration.normal,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
