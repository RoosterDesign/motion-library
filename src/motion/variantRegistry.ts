import type { Variants } from "framer-motion";
import {
  fade,
  slideUp,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeScale,
  fadeRotateLeft,
  fadeRotateRight,
} from "./variants/basic";

export const variantRegistry = {
  fade,
  slideUp,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeScale,
  fadeRotateLeft,
  fadeRotateRight,
} as const;

export type VariantName = keyof typeof variantRegistry;

export function getVariant(name: VariantName): Variants {
  return variantRegistry[name];
}
