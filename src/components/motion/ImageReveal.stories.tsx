import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageReveal } from "./ImageReveal";

const meta = {
  title: "Image Effects/ImageReveal",
  component: ImageReveal,
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "select", options: ["circle", "diamond"] },
    alt: { table: { disable: true } },
    className: { table: { disable: true } },
    bgColor: { table: { disable: true } },
  },
} satisfies Meta<typeof ImageReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleMask: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
    shape: "circle",
  },
};

export const DiamondMask: Story = {
  args: {
    imageUrl: "/demo/demo-2.jpg",
    shape: "diamond",
  },
};
