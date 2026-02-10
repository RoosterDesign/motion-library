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
    <span className={clsx("inline-flex flex-wrap items-baseline", className)}>
      {before ? <span>{before}&nbsp;</span> : null}

      <span
        className="relative inline-flex overflow-hidden"
        style={{ verticalAlign: "baseline" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={reduced ? undefined : { y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? undefined : { y: "-100%", opacity: 0 }}
            transition={{ duration, ease }}
            className="inline-block text-red-600"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>

      {after ? <span>&nbsp;{after}</span> : null}
    </span>
  );
}
