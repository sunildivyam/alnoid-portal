"use client";

import { motionConfig } from "@/lib/motion-config";
import { motion } from "motion/react";
import { ReactNode } from "react";

export interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  stagger = motionConfig.stagger,
  delayChildren = 0,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}
