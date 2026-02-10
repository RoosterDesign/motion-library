/**
 * Global motion tokens — single source of truth for all animation defaults.
 *
 * ┌─────────────────┬──────────────────────────────────────────────────────────┐
 * │ Token group     │ What it controls                                        │
 * ├─────────────────┼──────────────────────────────────────────────────────────┤
 * │ reveal          │ Individual Reveal component transitions & viewport opts  │
 * │ stagger         │ Stagger grid — timing between identical child items      │
 * │ revealGroup     │ RevealGroup — timing between sequential mixed reveals    │
 * │ rotateReveal    │ fadeRotateLeft / fadeRotateRight variant parameters       │
 * │ imageReveal     │ ImageReveal mask animation (shape, speed, colour)        │
 * │ marquee         │ Marquee infinite scrolling strip (speed, gap, hover)    │
 * │ parallax        │ ParallaxImage scroll-driven vertical shift              │
 * │ textRotator     │ TextRotator slot-machine word cycling                   │
 * │ blurReveal      │ BlurReveal scroll-driven blur-to-sharp image effect     │
 * │ scaleReveal     │ ScaleReveal image scales up on scroll into view        │
 * │ expandCards     │ ExpandCards hover-to-expand side-by-side cards         │
 * └─────────────────┴──────────────────────────────────────────────────────────┘
 *
 * Per-role variant selection is configured in .env.local — see that file
 * for available variant names.
 */
export const motionTokens = {
    // ─── Reveal ──────────────────────────────────────────────────────────
    // Controls individual <Reveal> component animations.
    reveal: {
      // duration (seconds) and easing for each reveal animation
      // ease options: "easeOut" | "easeIn" | "easeInOut" | "linear" | [n,n,n,n]
      transition: {
        duration: 0.75,
        ease: "easeOut" as const,
      },
      // Intersection Observer options for triggering reveals
      viewport: {
        once: true,           // true = animate once, false = re-animate on every scroll in/out
        amount: 0.2,          // 0–1, fraction of element visible before triggering
        margin: "0px 0px -10% 0px", // rootMargin — negative bottom triggers earlier
      },
    },

    // ─── Stagger ─────────────────────────────────────────────────────────
    // Controls <Stagger> grids — identical children animate in sequence.
    stagger: {
      // duration & ease for each child's animation
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
      // seconds between each child animating in
      step: 0.1,
      // seconds to wait before the first child starts
      delayChildren: 0.0,
    },

    // ─── RevealGroup ─────────────────────────────────────────────────────
    // Controls <RevealGroup> — staggered sequence of mixed content
    // (e.g. heading → body → button).
    revealGroup: {
      // seconds between each sequential reveal
      step: 0.15,
      // seconds to wait before the first child starts
      delayChildren: 0.0,
    },

    // ─── Rotate Reveal ───────────────────────────────────────────────────
    // Parameters for fadeRotateLeft / fadeRotateRight variants
    // used by <TextImage> and available as standalone Reveal variants.
    rotateReveal: {
      // rotation angle in degrees (positive = clockwise)
      angle: 15,
      // horizontal translate distance in pixels
      offset: 80,
    },

    // ─── Image Reveal ────────────────────────────────────────────────────
    // Controls <ImageReveal> mask-expand animation.
    imageReveal: {
      // animation duration in seconds
      duration: 1.2,
      // cubic-bezier easing curve [x1, y1, x2, y2]
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
      // default mask shape — options: "circle" | "diamond"
      shape: "circle" as const,
      // initial peek size (% from centre — controls how much image is visible before animation)
      initialSize: 12,
      // overlay colour shown behind the mask (hex, rgb, or any CSS colour)
      bgColor: "#ffffff",
    },

    // ─── Marquee ──────────────────────────────────────────────────────────
    // Controls <Marquee> infinite scrolling strip.
    marquee: {
      // seconds for one full scroll cycle (lower = faster)
      duration: 30,
      // gap between items in pixels
      gap: 16,
      // hover behaviour — options: "pause" | "slow"
      hoverBehaviour: "pause" as const,
      // speed multiplier when hovered in "slow" mode (e.g. 3 = 3× slower)
      slowFactor: 3,
    },

    // ─── Parallax ───────────────────────────────────────────────────────
    // Controls <ParallaxImage> scroll-driven vertical shift.
    parallax: {
      // how far the image shifts in pixels (half above, half below centre)
      // e.g. 80 means the image moves 80px total as it scrolls through the viewport
      offset: 100,
    },

    // ─── Text Rotator ───────────────────────────────────────────────────
    // Controls <TextRotator> slot-machine word cycling.
    textRotator: {
      // seconds each word is shown before cycling to the next
      interval: 2.5,
      // animation duration in seconds for each slide transition
      duration: 0.5,
      // easing curve for the slide
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },

    // ─── Blur Reveal ────────────────────────────────────────────────────
    // Controls <BlurReveal> scroll-driven blur-to-sharp image effect.
    blurReveal: {
      // maximum blur in pixels when fully out of view
      blur: 20,
      // animation duration in seconds (used when not scroll-driven)
      duration: 1.2,
      // easing curve
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },

    // ─── Scale Reveal ───────────────────────────────────────────────────
    // Controls <ScaleReveal> image scale-up on scroll into view.
    scaleReveal: {
      // initial scale (1 = full size, 0.9 = 90%)
      initialScale: 0.75,
      // animation duration in seconds
      duration: 1.2,
      // easing curve
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },

    // ─── Expand Cards ───────────────────────────────────────────────────
    // Controls <ExpandCards> hover-to-expand side-by-side cards.
    expandCards: {
      // flex ratio for the expanded (hovered) card (default card = 1)
      expandedFlex: 1,
      // flex ratio for the collapsed (non-hovered) card
      collapsedFlex: 0.6,
      // transition duration in seconds
      duration: 0.5,
      // easing curve
      ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
    },
  } as const;
