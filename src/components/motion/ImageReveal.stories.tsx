import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageReveal } from "./ImageReveal";

const meta = {
  title: "Image Effects/ImageReveal",
  component: ImageReveal,
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "select", options: ["circle", "diamond"] },
    bgColor: { control: "color" },
    triggerOnLoad: { control: "boolean" },
  },
} satisfies Meta<typeof ImageReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleMask: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
    alt: "Circle mask reveal",
    shape: "circle",
    triggerOnLoad: true,
  },
};

export const DiamondMask: Story = {
  args: {
    imageUrl: "/demo/demo-2.jpg",
    alt: "Diamond mask reveal",
    shape: "diamond",
    triggerOnLoad: true,
  },
};

export const CustomOverlay: Story = {
  args: {
    imageUrl: "/demo/demo-3.jpg",
    alt: "Custom overlay color",
    shape: "circle",
    bgColor: "#1a1a2e",
    triggerOnLoad: true,
  },
};
