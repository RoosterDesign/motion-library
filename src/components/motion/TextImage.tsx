"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import { Reveal } from "./Reveal";
import { RevealGroup } from "./RevealGroup";
import { variantRegistry } from "@/motion/variantRegistry";
import clsx from "clsx";

type TextImageProps = {
  heading: string;
  body: string;
  imageUrl: string;
  reversed?: boolean;
  imageVariant?: "fadeUp" | "fadeLeft" | "fadeRight" | "fadeRotateLeft" | "fadeRotateRight" | "auto";
  footer?: ReactNode;
  className?: string;
};

export function TextImage({
  heading,
  body,
  imageUrl,
  reversed = false,
  imageVariant = "auto",
  footer,
  className,
}: TextImageProps) {
  let resolvedVariant: Variants;

  if (imageVariant === "auto") {
    resolvedVariant = reversed
      ? variantRegistry.fadeRotateRight
      : variantRegistry.fadeRotateLeft;
  } else {
    resolvedVariant = variantRegistry[imageVariant];
  }

  return (
    <div className={clsx("grid items-center gap-8 md:grid-cols-2 md:gap-12", className)}>
      <RevealGroup className={clsx("space-y-4", reversed && "md:order-2")}>
        <Reveal role="heading">
          <h2 className="text-2xl font-semibold">{heading}</h2>
        </Reveal>
        <Reveal role="body">
          <p className="max-w-2xl text-gray-600">{body}</p>
        </Reveal>
        {footer ? (
          <Reveal>
            <div className="pt-2">{footer}</div>
          </Reveal>
        ) : null}
      </RevealGroup>

      <div className={clsx(reversed && "md:order-1")}>
        <Reveal variant={resolvedVariant}>
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={heading}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
