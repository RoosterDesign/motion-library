"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";

const RevealGroupContext = createContext(false);

export function useIsInRevealGroup() {
  return useContext(RevealGroupContext);
}

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
};

export function RevealGroup({ children, stagger, delay, className }: RevealGroupProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();

  const step = stagger ?? preset.revealGroup.step;
  const delayChildren = delay ?? preset.revealGroup.delayChildren;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <RevealGroupContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={preset.reveal.viewport}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: step,
              delayChildren,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </RevealGroupContext.Provider>
  );
}
