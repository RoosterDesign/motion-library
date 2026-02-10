import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextRotator } from "./TextRotator";

const meta = {
  title: "Text Animations/TextRotator",
  component: TextRotator,
  tags: ["autodocs"],
  argTypes: {
    interval: { table: { disable: true } },
    className: { table: { disable: true } },
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
