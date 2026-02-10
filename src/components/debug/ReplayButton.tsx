"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ReplayButton({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState(0);
  const reduced = useReducedMotion();

  const replay = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <>
      <div key={key}>{children}</div>

      <motion.button
        onClick={replay}
        whileHover={reduced ? undefined : { scale: 1.05 }}
        whileTap={reduced ? undefined : { scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 items-center gap-2 rounded-full bg-gray-900 px-5 text-sm font-medium text-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        aria-label="Replay all animations"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
        Replay
      </motion.button>
    </>
  );
}
