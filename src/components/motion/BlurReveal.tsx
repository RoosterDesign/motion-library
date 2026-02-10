"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type BlurRevealProps = {
  imageUrl: string;
  alt?: string;
  blur?: number;
  className?: string;
};

export function BlurReveal({
  imageUrl,
  alt = "",
  blur,
  className,
}: BlurRevealProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const ref = useRef<HTMLDivElement>(null);

  const resolvedBlur = blur ?? preset.blurReveal.blur;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const blurValue = useTransform(scrollYProgress, [0, 1], [resolvedBlur, 0]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  if (reduced) {
    return (
      <div className={clsx("relative aspect-[16/10] overflow-hidden", className)}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={clsx("relative aspect-[16/10] overflow-hidden", className)}
    >
      <motion.div className="absolute inset-0" style={{ filter }}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </div>
  );
}
