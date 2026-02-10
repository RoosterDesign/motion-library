"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type MotionButtonProps = {
  children: ReactNode;
  variant?: "standard" | "slot";
  className?: string;
};

export function MotionButton({
  children,
  variant = "standard",
  className,
}: MotionButtonProps) {
  if (variant === "slot") {
    return (
      <motion.button
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        initial="rest"
        animate="rest"
        className={clsx(
          "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border px-5 text-sm font-medium",
          "bg-gray-900 text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
          className
        )}
      >
        {/* Slot-machine labels */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -24, opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.span>

        <motion.span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { y: 24, opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.span>

        {/* Keeps button height stable for layout */}
        <span className="invisible">{children}</span>
      </motion.button>
    );
  }

  // Standard hover: background + small lift
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={clsx(
        "inline-flex h-11 items-center justify-center rounded-xl border px-5 text-sm font-medium",
        "bg-white text-gray-900 shadow-sm",
        "transition-colors duration-200 hover:bg-gray-900 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
