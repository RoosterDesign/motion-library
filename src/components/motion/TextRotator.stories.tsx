import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextRotator } from "./TextRotator";

const meta = {
  title: "Text Animations/TextRotator",
  component: TextRotator,
  tags: ["autodocs"],
  argTypes: {
    interval: { control: { type: "number", min: 500, max: 5000, step: 100 } },
  },
} satisfies Meta<typeof TextRotator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    before: "We build",
    words: ["websites", "apps", "experiences", "platforms"],
    after: "that matter.",
    className: "text-3xl font-bold",
  },
};

export const FastCycle: Story = {
  args: {
    before: "Think",
    words: ["bigger", "faster", "smarter", "bolder"],
    after: ".",
    interval: 1000,
    className: "text-3xl font-bold",
  },
};

export const SlowCycle: Story = {
  args: {
    before: "Our",
    words: ["mission", "vision", "purpose"],
    after: "drives us forward.",
    interval: 4000,
    className: "text-2xl font-semibold",
  },
};
