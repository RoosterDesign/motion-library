import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MotionButton } from "./MotionButton";

const meta = {
  title: "Button Animations/MotionButton",
  component: MotionButton,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["standard", "slot"] },
  },
} satisfies Meta<typeof MotionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: "Get Started",
    variant: "standard",
  },
};

export const Slot: Story = {
  args: {
    children: "Learn More",
    variant: "slot",
  },
};

export const StandardLongLabel: Story = {
  name: "Standard (Long Label)",
  args: {
    children: "Explore Our Services Today",
    variant: "standard",
  },
};

export const SlotLongLabel: Story = {
  name: "Slot (Long Label)",
  args: {
    children: "Explore Our Services Today",
    variant: "slot",
  },
};
