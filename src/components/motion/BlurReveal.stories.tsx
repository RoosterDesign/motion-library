import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlurReveal } from "./BlurReveal";

const meta = {
  title: "Image Effects/BlurReveal",
  component: BlurReveal,
  tags: ["autodocs"],
  argTypes: {
    blur: { table: { disable: true } },
    alt: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200vh", paddingTop: "100vh", position: "relative" }}>
        <p style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", color: "#888", fontSize: 14 }}>
          Scroll down to view effect
        </p>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BlurReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg",
  },
};
