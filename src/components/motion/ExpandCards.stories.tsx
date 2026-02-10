import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ExpandCards } from "./ExpandCards";

const meta = {
  title: "Cards/ExpandCards",
  component: ExpandCards,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof ExpandCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        imageUrl: "/demo/demo-1.jpg",
        title: "Creative Design",
        description: "Pushing the boundaries of visual storytelling.",
      },
      {
        imageUrl: "/demo/demo-2.jpg",
        title: "Engineering",
        description: "Built with performance and scale in mind.",
      },
    ],
  },
};
