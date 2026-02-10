import type { Variants } from "framer-motion";
import { motionTokens } from "../tokens";

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const slideUp: Variants = {
  hidden: { y: 16 },
  show: { y: 0 },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0 },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 },
};

const { angle, offset } = motionTokens.rotateReveal;

// Swings in from the right edge
export const fadeRotateLeft: Variants = {
  hidden: { opacity: 0, x: offset, rotate: angle },
  show: { opacity: 1, x: 0, rotate: 0 },
};

// Swings in from the left edge
export const fadeRotateRight: Variants = {
  hidden: { opacity: 0, x: -offset, rotate: -angle },
  show: { opacity: 1, x: 0, rotate: 0 },
};
