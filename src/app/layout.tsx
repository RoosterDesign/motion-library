import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/motion/MotionProvider";

export const metadata: Metadata = {
  title: "Motion Lab",
  description: "Animation playground",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
