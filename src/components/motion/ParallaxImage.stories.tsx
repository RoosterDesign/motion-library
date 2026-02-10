import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ParallaxImage } from "./ParallaxImage";

const meta = {
  title: "Image Effects/ParallaxImage",
  component: ParallaxImage,
  tags: ["autodocs"],
  argTypes: {
    offset: { control: { type: "number", min: 0, max: 300, step: 10 } },
  },
} satisfies Meta<typeof ParallaxImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
    alt: "Parallax image",
  },
};

export const LargeOffset: Story = {
  args: {
    imageUrl: "/demo/demo-2.jpg",
    alt: "Large parallax offset",
    offset: 200,
  },
};

export const SmallOffset: Story = {
  args: {
    imageUrl: "/demo/demo-3.jpg",
    alt: "Small parallax offset",
    offset: 40,
  },
};
