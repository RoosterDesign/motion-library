import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextImage } from "./TextImage";
import { MotionButton } from "./MotionButton";
import React from "react";

const meta = {
  title: "Layout Blocks/TextImage",
  component: TextImage,
  tags: ["autodocs"],
  argTypes: {
    imageVariant: {
      control: "select",
      options: [
        "auto",
        "fadeUp",
        "fadeLeft",
        "fadeRight",
        "fadeRotateLeft",
        "fadeRotateRight",
      ],
    },
    reversed: { control: "boolean" },
  },
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Built for Impact",
    body: "Our motion library brings your content to life with scroll-driven animations, smooth transitions, and interactive reveals — all accessible and performant.",
    imageUrl: "/demo/demo-1.jpg",
  },
};

export const Reversed: Story = {
  args: {
    heading: "Image on the Left",
    body: "When reversed, the image appears on the left side and the text on the right. The rotation direction auto-adjusts.",
    imageUrl: "/demo/demo-2.jpg",
    reversed: true,
  },
};

export const RotateIn: Story = {
  name: "Rotate In (Auto)",
  args: {
    heading: "Rotate Reveal",
    body: "The image rotates in from its natural side — right images rotate from the right, left images from the left.",
    imageUrl: "/demo/demo-3.jpg",
    imageVariant: "auto",
  },
};

export const SlideFromLeft: Story = {
  args: {
    heading: "Slide From Left",
    body: "The image slides in from the left using the fadeLeft variant for a horizontal entrance.",
    imageUrl: "/demo/demo-1.jpg",
    imageVariant: "fadeLeft",
  },
};

export const WithFooter: Story = {
  args: {
    heading: "Call to Action",
    body: "This block includes a footer slot, perfect for adding buttons or links below the text content.",
    imageUrl: "/demo/demo-2.jpg",
    footer: <MotionButton variant="standard">Learn More</MotionButton>,
  },
};
