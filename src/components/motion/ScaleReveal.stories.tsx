import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScaleReveal } from "./ScaleReveal";

const meta = {
  title: "Image Effects/ScaleReveal",
  component: ScaleReveal,
  tags: ["autodocs"],
  argTypes: {
    initialScale: {
      control: { type: "number", min: 0.1, max: 1, step: 0.05 },
    },
  },
} satisfies Meta<typeof ScaleReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
    alt: "Scale reveal image",
  },
};

export const DramaticScale: Story = {
  args: {
    imageUrl: "/demo/demo-2.jpg",
    alt: "Dramatic scale from small",
    initialScale: 0.3,
  },
};

export const SubtleScale: Story = {
  args: {
    imageUrl: "/demo/demo-3.jpg",
    alt: "Subtle scale reveal",
    initialScale: 0.9,
  },
};
