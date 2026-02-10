"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type TextRotatorProps = {
  before?: string;
  words: string[];
  after?: string;
  interval?: number;
  className?: string;
};

export function TextRotator({
  before,
  words,
  after,
  interval,
  className,
}: TextRotatorProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const [index, setIndex] = useState(0);

  const resolvedInterval = interval ?? preset.textRotator.interval;
  const { duration, ease } = preset.textRotator;

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, resolvedInterval * 1000);
    return () => clearInterval(id);
  }, [words.length, resolvedInterval]);

  return (
    <motion.span layout className={clsx("inline-flex flex-wrap items-baseline", className)}>
      {before ? <motion.span layout>{before}&nbsp;</motion.span> : null}

      <motion.span
        layout
        className="relative inline-flex overflow-hidden"
        style={{ verticalAlign: "baseline" }}
        transition={{ duration, ease }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={reduced ? undefined : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? undefined : { y: "-100%", opacity: 0 }}
            transition={{ duration, ease }}
            className="inline-block text-[#ff784a]"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>

      {after ? <motion.span layout transition={{ duration, ease }}>&nbsp;{after}</motion.span> : null}
    </motion.span>
  );
}
