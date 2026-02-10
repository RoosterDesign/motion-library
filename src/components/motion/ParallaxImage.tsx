"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type ParallaxImageProps = {
  imageUrl: string;
  alt?: string;
  offset?: number;
  className?: string;
};

export function ParallaxImage({
  imageUrl,
  alt = "",
  offset,
  className,
}: ParallaxImageProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const ref = useRef<HTMLDivElement>(null);

  const resolvedOffset = offset ?? preset.parallax.offset;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [resolvedOffset, -resolvedOffset],
  );

  if (reduced) {
    return (
      <div className={clsx("relative aspect-16/10 overflow-hidden", className)}>
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
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          top: -resolvedOffset,
          bottom: -resolvedOffset,
        }}
      >
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
