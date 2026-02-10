"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useMotionPreset } from "@/motion/MotionProvider";
import clsx from "clsx";

type ExpandCardItem = {
  imageUrl: string;
  title: string;
  description?: string;
};

type ExpandCardsProps = {
  items: [ExpandCardItem, ExpandCardItem];
  className?: string;
};

export function ExpandCards({ items, className }: ExpandCardsProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const [hovered, setHovered] = useState<number | null>(null);

  const { expandedFlex, collapsedFlex, duration, ease } = preset.expandCards;

  function getFlex(index: number) {
    if (hovered === null || reduced) return 1;
    return hovered === index ? expandedFlex : collapsedFlex;
  }

  return (
    <div className={clsx("flex gap-4", className)} style={{ height: 400 }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-2xl"
          style={{ flex: 1 }}
          animate={{ flex: getFlex(i) }}
          transition={{ duration, ease }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <div className="whitespace-nowrap text-xl font-semibold">
              {item.title}
            </div>
            {item.description ? (
              <p className="mt-1 whitespace-nowrap text-sm text-white/80">
                {item.description}
              </p>
            ) : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
