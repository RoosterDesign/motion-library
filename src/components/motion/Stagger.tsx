"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import type { MotionRole } from "@/motion/env";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  childRole?: MotionRole; // which role children should use
};

export function Stagger({ children, className, childRole = "listItem" }: StaggerProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();

  if (reduced) return <div className={className}>{children}</div>;

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: preset.stagger.step,
        delayChildren: preset.stagger.delayChildren,
      },
    },
  };

  const childVariants = preset.roles[childRole];

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={preset.reveal.viewport}
    >
      {/* children must be motion elements to receive variants */}
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <motion.div key={idx} variants={childVariants} transition={preset.stagger.transition}>
              {child}
            </motion.div>
          ))
        : (
          <motion.div variants={childVariants} transition={preset.stagger.transition}>
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}
