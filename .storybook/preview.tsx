import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import { MotionProvider } from "../src/motion/MotionProvider";
import React, { useState, useCallback, useEffect } from "react";

function AnimationReplay({
  children,
  args,
}: {
  children: React.ReactNode;
  args: Record<string, unknown>;
}) {
  const [key, setKey] = useState(0);

  // Re-mount when args change so the animation replays with new values
  const argsKey = JSON.stringify(args);
  useEffect(() => {
    setKey((k) => k + 1);
  }, [argsKey]);

  const replay = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <>
      <div key={key}>{children}</div>
      <button
        onClick={replay}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: 40,
          padding: "0 16px",
          borderRadius: 9999,
          backgroundColor: "#171717",
          color: "#fff",
          fontSize: 13,
          fontWeight: 500,
          border: "none",
          cursor: "pointer",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
        }}
        aria-label="Replay animation"
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
        Replay
      </button>
    </>
  );
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <MotionProvider>
        <div style={{ padding: "2rem" }}>
          <AnimationReplay args={context.args}>
            <Story />
          </AnimationReplay>
        </div>
      </MotionProvider>
    ),
  ],
};

export default preview;
