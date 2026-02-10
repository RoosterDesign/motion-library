"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type ScaleRevealProps = {
  imageUrl: string;
  alt?: string;
  initialScale?: number;
  className?: string;
};

export function ScaleReveal({
  imageUrl,
  alt = "",
  initialScale,
  className,
}: ScaleRevealProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const ref = useRef<HTMLDivElement>(null);

  const resolvedScale = initialScale ?? preset.scaleReveal.initialScale;
  const { duration, ease } = preset.scaleReveal;

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -10% 0px",
  });

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
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        initial={{ scale: resolvedScale }}
        animate={inView ? { scale: 1 } : { scale: resolvedScale }}
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
