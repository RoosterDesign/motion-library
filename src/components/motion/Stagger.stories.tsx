import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stagger } from "./Stagger";
import React from "react";

const meta = {
  title: "Layout Blocks/Stagger",
  component: Stagger,
  tags: ["autodocs"],
} satisfies Meta<typeof Stagger>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const ListItems: Story = {
  args: {
    className: "flex flex-col gap-2",
    childRole: "listItem",
    children: ["Design", "Develop", "Deploy", "Iterate"].map((item) => (
      <div
        key={item}
        className="rounded-md bg-gray-50 px-4 py-3 text-gray-700"
      >
        {item}
      </div>
    )),
  },
};
