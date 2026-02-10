import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Marquee } from "./Marquee";
import React from "react";

const meta = {
  title: "Layout Blocks/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["left", "right"] },
    hoverBehaviour: { control: "select", options: ["pause", "slow"] },
    duration: { control: { type: "number", min: 5, max: 60, step: 5 } },
    gap: { control: { type: "number", min: 0, max: 64, step: 4 } },
  },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

const logos = ["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Industries"];

export const Default: Story = {
  args: {
    children: logos.map((name) => (
      <span
        key={name}
        className="inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700"
      >
        {name}
      </span>
    )),
  },
};

export const RightDirection: Story = {
  args: {
    direction: "right",
    children: logos.map((name) => (
      <span
        key={name}
        className="inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700"
      >
        {name}
      </span>
    )),
  },
};

export const SlowOnHover: Story = {
  args: {
    hoverBehaviour: "slow",
    children: logos.map((name) => (
      <span
        key={name}
        className="inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700"
      >
        {name}
      </span>
    )),
  },
};

export const FastMarquee: Story = {
  args: {
    duration: 10,
    children: logos.map((name) => (
      <span
        key={name}
        className="inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700"
      >
        {name}
      </span>
    )),
  },
};
