import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Reveal } from "./Reveal";
import {
  fade,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
} from "@/motion/variants/basic";
import type { Variants } from "framer-motion";

const variantMap: Record<string, Variants> = {
  fade,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
};

const meta = {
  title: "Text Animations/Reveal",
  component: Reveal,
  tags: ["autodocs"],
  argTypes: {
    role: {
      control: "select",
      options: ["heading", "body", "section", "card", "media", "listItem"],
    },
    variant: {
      control: "select",
      options: Object.keys(variantMap),
      mapping: variantMap,
    },
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeUp: Story = {
  args: {
    variant: fadeUp,
    children: "Fade in upwards",
    className: "text-3xl font-bold",
  },
};

export const FadeDown: Story = {
  args: {
    variant: fadeDown,
    children: "Fade in downwards",
    className: "text-3xl font-bold",
  },
};

export const FadeLeft: Story = {
  args: {
    variant: fadeLeft,
    children: "Fade in from the right",
    className: "text-3xl font-bold",
  },
};

export const FadeRight: Story = {
  args: {
    variant: fadeRight,
    children: "Fade in from the left",
    className: "text-3xl font-bold",
  },
};

export const Fade: Story = {
  args: {
    variant: fade,
    children: "Simple fade in (no movement)",
    className: "text-3xl font-bold",
  },
};

export const BodyText: Story = {
  args: {
    role: "body",
    children:
      "This is body text using the default role-based variant. Change the variant dropdown above to preview different animation styles.",
    className: "text-lg text-gray-600",
  },
};
