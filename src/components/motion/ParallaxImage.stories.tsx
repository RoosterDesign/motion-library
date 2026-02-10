import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ParallaxImage } from "./ParallaxImage";

const meta = {
  title: "Image Effects/ParallaxImage",
  component: ParallaxImage,
  tags: ["autodocs"],
  argTypes: {
    offset: { table: { disable: true } },
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
} satisfies Meta<typeof ParallaxImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/demo/demo-1.jpg"
  },
};
