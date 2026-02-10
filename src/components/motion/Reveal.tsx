"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import type { MotionRole } from "@/motion/env";
import type { Variants } from "framer-motion";
import { useIsInRevealGroup } from "./RevealGroup";

type RevealProps = {
  children: ReactNode;
  role?: MotionRole;
  variant?: Variants; // optional override
  className?: string;
};

export function Reveal({ children, role = "section", variant, className }: RevealProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const inGroup = useIsInRevealGroup();

  if (reduced) return <>{children}</>;

  const variants = variant ?? preset.roles[role];

  // Inside a RevealGroup: parent orchestrates timing via staggerChildren,
  // so we only declare variants and let the parent propagate "hidden"/"show".
  if (inGroup) {
    return (
      <motion.div
        className={className}
        variants={variants}
        transition={preset.reveal.transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={preset.reveal.viewport}
      transition={preset.reveal.transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
