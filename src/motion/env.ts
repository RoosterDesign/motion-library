import type { VariantName } from "./variantRegistry";

const allowed = new Set<VariantName>([
  "fade",
  "slideUp",
  "fadeUp",
  "fadeDown",
  "fadeLeft",
  "fadeRight",
  "fadeScale",
  "fadeRotateLeft",
  "fadeRotateRight",
]);

function validateVariant(value: string | undefined, fallback: VariantName): VariantName {
  if (!value) return fallback;
  return allowed.has(value as VariantName) ? (value as VariantName) : fallback;
}

export type MotionRole = "heading" | "body" | "section" | "card" | "media" | "listItem";

export function getMotionSelectionFromEnv() {
  return {
    roles: {
      heading: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_HEADING, "fadeUp"),
      body: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_BODY, "fadeUp"),
      section: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_SECTION, "fadeUp"),
      card: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_CARD, "fadeUp"),
      media: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_MEDIA, "fadeScale"),
      listItem: validateVariant(process.env.NEXT_PUBLIC_MOTION_ROLE_LISTITEM, "fadeUp"),
    },
    buttonHover:
      process.env.NEXT_PUBLIC_MOTION_BUTTON_HOVER === "fill" ? "fill" : "lift",
  } as const;
}
