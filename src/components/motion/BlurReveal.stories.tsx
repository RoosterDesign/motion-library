import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlurReveal } from "./BlurReveal";

const meta = {
  title: "Image Effects/BlurReveal",
  component: BlurReveal,
  tags: ["autodocs"],
  argTypes: {
    blur: { control: { type: "number", min: 0, max: 50, step: 1 } },
  },
} satisfies Meta<typeof BlurReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
    alt: "Blur reveal image",
  },
};

export const HeavyBlur: Story = {
  args: {
    imageUrl: "/demo/demo-2.jpg",
    alt: "Heavy blur reveal",
    blur: 40,
  },
};

export const SubtleBlur: Story = {
  args: {
    imageUrl: "/demo/demo-3.jpg",
    alt: "Subtle blur reveal",
    blur: 8,
  },
};
