import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Marquee } from "./Marquee";
import Image from "next/image";
import React from "react";

const meta = {
  title: "Content Blocks/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["left", "right"] },
    hoverBehaviour: { control: "select", options: ["pause", "slow"] },
    duration: { table: { disable: true } },
    gap: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = ["/demo/demo-1.jpg", "/demo/demo-2.jpg", "/demo/demo-3.jpg"];

const imageItems = images.map((src, i) => (
  <Image
    key={i}
    src={src}
    alt=""
    width={300}
    height={200}
    className="rounded-lg object-cover"
    style={{ width: 300, height: 200 }}
  />
));

export const Default: Story = {
  args: {
    children: imageItems,
  },
};

export const RightDirection: Story = {
  args: {
    direction: "right",
    children: imageItems,
  },
};

export const SlowOnHover: Story = {
  args: {
    hoverBehaviour: "slow",
    children: imageItems,
  },
};
