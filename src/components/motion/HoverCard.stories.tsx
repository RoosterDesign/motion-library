import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HoverCard } from "./HoverCard";

const meta = {
  title: "Cards/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {
    hoverStyle: {
      control: "select",
      options: ["zoom", "zoomRotate", "zoomOut"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Zoom: Story = {
  args: {
    title: "Mountain Vista",
    description: "A breathtaking view of the peaks at sunrise.",
    imageUrl: "/demo/demo-1.jpg",
    hoverStyle: "zoom",
  },
};

export const ZoomRotate: Story = {
  args: {
    title: "Ocean Breeze",
    description: "Waves crashing on a sunlit shore.",
    imageUrl: "/demo/demo-2.jpg",
    hoverStyle: "zoomRotate",
  },
};

export const ZoomOut: Story = {
  args: {
    title: "Forest Path",
    description: "A winding trail through old-growth forest.",
    imageUrl: "/demo/demo-3.jpg",
    hoverStyle: "zoomOut",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Featured Project",
    description: "Custom footer content below the card.",
    imageUrl: "/demo/demo-1.jpg",
    hoverStyle: "zoom",
    footer: (
      <span className="text-sm text-gray-400">Published Jan 2025</span>
    ),
  },
};
