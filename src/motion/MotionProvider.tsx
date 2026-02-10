"use client";

import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { getMotionSelectionFromEnv, type MotionRole } from "./env";
import { getVariant } from "./variantRegistry";
import { motionTokens } from "./tokens";

export type MotionPreset = {
  roles: Record<MotionRole, Variants>;
  reveal: typeof motionTokens.reveal;
  stagger: typeof motionTokens.stagger;
  revealGroup: typeof motionTokens.revealGroup;
  imageReveal: typeof motionTokens.imageReveal;
  marquee: typeof motionTokens.marquee;
  parallax: typeof motionTokens.parallax;
  textRotator: typeof motionTokens.textRotator;
  blurReveal: typeof motionTokens.blurReveal;
  scaleReveal: typeof motionTokens.scaleReveal;
  expandCards: typeof motionTokens.expandCards;
  buttonHover: "lift" | "fill";
};

const MotionContext = createContext<MotionPreset | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const selection = getMotionSelectionFromEnv();

  const preset: MotionPreset = {
    roles: {
      heading: getVariant(selection.roles.heading),
      body: getVariant(selection.roles.body),
      section: getVariant(selection.roles.section),
      card: getVariant(selection.roles.card),
      media: getVariant(selection.roles.media),
      listItem: getVariant(selection.roles.listItem),
    },
    reveal: motionTokens.reveal,
    stagger: motionTokens.stagger,
    revealGroup: motionTokens.revealGroup,
    imageReveal: motionTokens.imageReveal,
    marquee: motionTokens.marquee,
    parallax: motionTokens.parallax,
    textRotator: motionTokens.textRotator,
    blurReveal: motionTokens.blurReveal,
    scaleReveal: motionTokens.scaleReveal,
    expandCards: motionTokens.expandCards,
    buttonHover: selection.buttonHover,
  };

  return <MotionContext.Provider value={preset}>{children}</MotionContext.Provider>;
}

export function useMotionPreset() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotionPreset must be used within MotionProvider");
  return ctx;
}
