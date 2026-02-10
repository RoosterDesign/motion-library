"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type HoverCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  hoverStyle?: "zoom" | "zoomRotate" | "zoomOut";
  footer?: ReactNode;
};

export function HoverCard({
  title,
  description,
  imageUrl,
  hoverStyle = "zoom",
  footer,
}: HoverCardProps) {
  const reduced = useReducedMotion();

  const isZoomOut = hoverStyle === "zoomOut";

  const idleState = isZoomOut
    ? { scale: 1.06, rotate: 0 }
    : { scale: 1, rotate: 0 };

  const hoverState =
    hoverStyle === "zoomRotate"
      ? { scale: 1.08, rotate: -2 }
      : hoverStyle === "zoomOut"
        ? { scale: 1, rotate: 0 }
        : { scale: 1.06 };

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border bg-white shadow-sm"
      whileHover={reduced ? undefined : "hover"}
      initial="idle"
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={{
            idle: idleState,
            hover: hoverState,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority={false}
          />
        </motion.div>

        {/* Optional subtle overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="space-y-2 p-5">
        <div className="text-lg font-semibold text-black">{title}</div>
        <p className="text-sm text-gray-600">{description}</p>

        {footer ? <div className="pt-2">{footer}</div> : null}
      </div>
    </motion.div>
  );
}
