"use client";

import { useReducedMotion } from "framer-motion";
import { useMotionPreset } from "@/motion/MotionProvider";
import { useCallback, useEffect, useId, useRef, type ReactNode } from "react";
import clsx from "clsx";

type MarqueeProps = {
  children: ReactNode;
  direction?: "left" | "right";
  hoverBehaviour?: "pause" | "slow";
  duration?: number;
  gap?: number;
  className?: string;
};

export function Marquee({
  children,
  direction,
  hoverBehaviour,
  duration,
  gap,
  className,
}: MarqueeProps) {
  const reduced = useReducedMotion();
  const preset = useMotionPreset();
  const id = useId();
  const animName = `marquee-${id.replace(/:/g, "")}`;
  const trackRef = useRef<HTMLDivElement>(null);

  const resolvedDirection = direction ?? "left";
  const resolvedHoverBehaviour =
    hoverBehaviour ?? preset.marquee.hoverBehaviour;
  const resolvedDuration = duration ?? preset.marquee.duration;
  const resolvedGap = gap ?? preset.marquee.gap;

  const animDirection = resolvedDirection === "right" ? "reverse" : "normal";

  // Use Web Animations API playbackRate for smooth speed transitions (no snap)
  const setPlaybackRate = useCallback(
    (rate: number) => {
      const el = trackRef.current;
      if (!el) return;
      const anims = el.getAnimations();
      for (const a of anims) {
        a.playbackRate = rate;
      }
    },
    [],
  );

  const handleMouseEnter = useCallback(() => {
    if (reduced) return;
    if (resolvedHoverBehaviour === "pause") {
      setPlaybackRate(0);
    } else {
      setPlaybackRate(1 / preset.marquee.slowFactor);
    }
  }, [reduced, resolvedHoverBehaviour, preset.marquee.slowFactor, setPlaybackRate]);

  const handleMouseLeave = useCallback(() => {
    if (reduced) return;
    setPlaybackRate(1);
  }, [reduced, setPlaybackRate]);

  // Pause when reduced motion is preferred
  useEffect(() => {
    if (reduced) {
      setPlaybackRate(0);
    }
  }, [reduced, setPlaybackRate]);

  return (
    <>
      <style>{`
        @keyframes ${animName} {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className={clsx("overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: resolvedGap,
            width: "max-content",
            animationName: animName,
            animationDuration: `${resolvedDuration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: animDirection,
          }}
        >
          <div style={{ display: "flex", gap: resolvedGap }}>
            {children}
          </div>
          <div
            style={{ display: "flex", gap: resolvedGap }}
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
