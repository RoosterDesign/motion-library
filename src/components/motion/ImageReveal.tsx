"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type ImageRevealShape = "circle" | "diamond";

function getClipPaths(shape: ImageRevealShape, initialSize: number) {
  switch (shape) {
    case "circle":
      return {
        hidden: `circle(${initialSize}% at 50% 50%)`,
        show: `circle(75% at 50% 50%)`,
      };
    case "diamond": {
      // A diamond is a rotated square polygon.
      // initialSize controls how far the points are from centre (as %).
      const s = initialSize;
      const f = 150; // full reveal size — must overshoot to cover rectangle corners
      return {
        hidden: `polygon(50% ${50 - s}%, ${50 + s}% 50%, 50% ${50 + s}%, ${50 - s}% 50%)`,
        show: `polygon(50% ${50 - f}%, ${50 + f}% 50%, 50% ${50 + f}%, ${50 - f}% 50%)`,
      };
    }
  }
}

type ImageRevealProps = {
  imageUrl: string;
  alt?: string;
  shape?: ImageRevealShape;
  bgColor?: string;
  className?: string;
};

export function ImageReveal({
  imageUrl,
  alt = "",
  shape,
  bgColor,
  className,
}: ImageRevealProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const ref = useRef<HTMLDivElement>(null);

  const resolvedShape = shape ?? preset.imageReveal.shape;
  const resolvedBgColor = bgColor ?? preset.imageReveal.bgColor;
  const { initialSize, duration, ease } = preset.imageReveal;

  const clips = getClipPaths(resolvedShape, initialSize);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -10% 0px",
  });

  const shouldAnimate = inView;

  if (reduced) {
    return (
      <div className={clsx("relative aspect-16/10", className)}>
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
      className={clsx("relative aspect-16/10 overflow-hidden", className)}
      style={{ backgroundColor: resolvedBgColor }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: clips.hidden }}
        animate={shouldAnimate ? { clipPath: clips.show } : { clipPath: clips.hidden }}
        transition={{ duration, ease }}
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
