import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RevealGroup } from "./RevealGroup";
import { Reveal } from "./Reveal";
import { MotionButton } from "./MotionButton";
import React from "react";

const meta = {
  title: "Content Blocks/RevealGroup",
  component: RevealGroup,
  tags: ["autodocs"],
  argTypes: {
    stagger: { control: { type: "number", min: 0.05, max: 0.5, step: 0.05 } },
    delay: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof RevealGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Reveal role="heading">
          <h2 className="text-3xl font-bold">Staggered Heading</h2>
        </Reveal>
        <Reveal role="body">
          <p className="mt-2 text-lg text-gray-600">
            Each child element animates in sequence, creating a cascading reveal
            effect that guides the reader through the content.
          </p>
        </Reveal>
        <Reveal role="body">
          <div className="mt-4">
            <MotionButton variant="standard">Take Action</MotionButton>
          </div>
        </Reveal>
      </>
    ),
  },
};
