import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RevealGroup } from "./RevealGroup";
import { Reveal } from "./Reveal";
import { MotionButton } from "./MotionButton";
import React from "react";

const meta = {
  title: "Layout Blocks/RevealGroup",
  component: RevealGroup,
  tags: ["autodocs"],
  argTypes: {
    stagger: { control: { type: "number", min: 50, max: 500, step: 25 } },
    delay: { control: { type: "number", min: 0, max: 2, step: 0.1 } },
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
          <MotionButton variant="standard">Take Action</MotionButton>
        </Reveal>
      </>
    ),
  },
};

export const FastStagger: Story = {
  args: {
    stagger: 50,
    children: (
      <>
        <Reveal role="heading">
          <h2 className="text-3xl font-bold">Quick Cascade</h2>
        </Reveal>
        <Reveal role="body">
          <p className="mt-2 text-gray-600">First paragraph appears quickly.</p>
        </Reveal>
        <Reveal role="body">
          <p className="text-gray-600">Second follows right after.</p>
        </Reveal>
        <Reveal role="body">
          <p className="text-gray-600">Third completes the sequence.</p>
        </Reveal>
      </>
    ),
  },
};

export const WithDelay: Story = {
  args: {
    stagger: 150,
    delay: 0.5,
    children: (
      <>
        <Reveal role="heading">
          <h2 className="text-2xl font-semibold">Delayed Start</h2>
        </Reveal>
        <Reveal role="body">
          <p className="mt-2 text-gray-600">
            This group waits 0.5s before starting the stagger sequence.
          </p>
        </Reveal>
      </>
    ),
  },
};
