import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScaleReveal } from "./ScaleReveal";

const meta = {
  title: "Image Effects/ScaleReveal",
  component: ScaleReveal,
  tags: ["autodocs"],
  argTypes: {
    initialScale: { table: { disable: true } },
    alt: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ScaleReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg"
  },
};
