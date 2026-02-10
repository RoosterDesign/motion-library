import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stagger } from "./Stagger";
import Image from "next/image";
import React from "react";

const meta = {
  title: "Layout Blocks/Stagger",
  component: Stagger,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } },
    childRole: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Stagger>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  "/demo/demo-1.jpg",
  "/demo/demo-2.jpg",
  "/demo/demo-3.jpg",
  "/demo/demo-1.jpg",
  "/demo/demo-2.jpg",
  "/demo/demo-3.jpg",
];

export const CardGrid: Story = {
  args: {
    className: "grid grid-cols-3 gap-4",
    childRole: "card",
    children: Array.from({ length: 6 }, (_, i) => (
      <div
        key={i}
        className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h3 className="mb-1 text-lg font-medium">Card {i + 1}</h3>
        <p className="text-sm text-gray-500">
          Staggered card animation with sequential timing.
        </p>
      </div>
    )),
  },
};

export const ImageGrid: Story = {
  args: {
    className: "grid grid-cols-3 gap-4",
    childRole: "card",
    children: images.map((src, i) => (
      <div key={i} className="relative aspect-16/10 overflow-hidden rounded-lg">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="33vw"
        />
      </div>
    )),
  },
};
