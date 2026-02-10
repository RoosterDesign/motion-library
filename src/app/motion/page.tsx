import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { HoverCard } from "@/components/motion/HoverCard";
import { MotionButton } from "@/components/motion/MotionButton";
import { variantRegistry } from "@/motion/variantRegistry";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { TextImage } from "@/components/motion/TextImage";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Marquee } from "@/components/motion/Marquee";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { TextRotator } from "@/components/motion/TextRotator";
import { BlurReveal } from "@/components/motion/BlurReveal";
import { ScaleReveal } from "@/components/motion/ScaleReveal";
import { ExpandCards } from "@/components/motion/ExpandCards";
import { ReplayButton } from "@/components/debug/ReplayButton";
import Image from "next/image";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <RevealGroup className="space-y-4">
        <Reveal role="heading">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </Reveal>
        {description ? (
          <Reveal role="body">
            <p className="max-w-2xl text-gray-600">{description}</p>
          </Reveal>
        ) : null}
      </RevealGroup>
      {children}
    </section>
  );
}

export default function MotionPage() {
  return (
    <ReplayButton>
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <RevealGroup className="space-y-4">
          <Reveal role="heading">
            <h1 className="text-4xl font-semibold tracking-tight">Motion Gallery</h1>
          </Reveal>
          <Reveal role="body">
            <p className="max-w-2xl text-gray-600">
              Scroll to trigger reveals. This page demonstrates text variants, hoverable
              cards, and button hover patterns for Plus sites.
            </p>
          </Reveal>
        </RevealGroup>

        {/* Text animations */}
        <Section
          title="Text animations"
          description="Basic text reveals you can reuse across headings, paragraphs, labels, etc."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal variant={variantRegistry.fadeUp}>
              <div className="rounded-2xl border p-5">
                <div className="text-sm text-gray-500">fadeUp</div>
                <div className="mt-2 text-lg font-semibold">Fade up and in</div>
                <p className="mt-2 text-sm text-gray-600">
                  A safe default for most content.
                </p>
              </div>
            </Reveal>

            <Reveal variant={variantRegistry.fadeLeft}>
              <div className="rounded-2xl border p-5">
                <div className="text-sm text-gray-500">fadeLeft</div>
                <div className="mt-2 text-lg font-semibold">Fade in from left</div>
                <p className="mt-2 text-sm text-gray-600">
                  Nice for side-by-side layouts.
                </p>
              </div>
            </Reveal>

            <Reveal variant={variantRegistry.fadeRight}>
              <div className="rounded-2xl border p-5">
                <div className="text-sm text-gray-500">fadeRight</div>
                <div className="mt-2 text-lg font-semibold">Fade in from right</div>
                <p className="mt-2 text-sm text-gray-600">
                  Mirror of fadeLeft for balance.
                </p>
              </div>
            </Reveal>

            <Reveal variant={variantRegistry.slideUp}>
              <div className="rounded-2xl border p-5">
                <div className="text-sm text-gray-500">slideUp</div>
                <div className="mt-2 text-lg font-semibold">Slide up into place</div>
                <p className="mt-2 text-sm text-gray-600">
                  Position only — no opacity change.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Stagger Cards */}
        <Section
          title="Stagger Cards (hover image effects)"
          description="Card hovers are component-level motion: subtle lift + image zoom. Add rotate for a more playful premium feel."
        >
          <Stagger className="grid gap-6 md:grid-cols-3">
            <Reveal role="card">
              <HoverCard
                title="Zoom"
                description="Hover: image scales slightly."
                imageUrl="/demo/demo-1.jpg"
                hoverStyle="zoom"
              />
            </Reveal>

            <Reveal role="card">
              <HoverCard
                title="Zoom + rotate"
                description="Hover: image scales and rotates slightly."
                imageUrl="/demo/demo-2.jpg"
                hoverStyle="zoomRotate"
              />
            </Reveal>

            <Reveal role="card">
              <HoverCard
                title="Another card"
                description="Use consistent hover motion across all card types."
                imageUrl="/demo/demo-3.jpg"
                hoverStyle="zoom"
              />
            </Reveal>
            <Reveal role="card">
              <HoverCard
                title="Zoom"
                description="Hover: image scales slightly."
                imageUrl="/demo/demo-1.jpg"
                hoverStyle="zoom"
              />
            </Reveal>

            <Reveal role="card">
              <HoverCard
                title="Zoom + rotate"
                description="Hover: image scales and rotates slightly."
                imageUrl="/demo/demo-2.jpg"
                hoverStyle="zoomRotate"
              />
            </Reveal>

            <Reveal role="card">
              <HoverCard
                title="Another card"
                description="Use consistent hover motion across all card types."
                imageUrl="/demo/demo-3.jpg"
                hoverStyle="zoom"
              />
            </Reveal>
          </Stagger>

          <p className="text-sm text-gray-500">
            Put images in <code>/public/demo/</code> named <code>demo-1.jpg</code>,{" "}
            <code>demo-2.jpg</code>, <code>demo-3.jpg</code>.
          </p>
        </Section>

        {/* Buttons */}
        <Section
          title="Buttons (hover patterns)"
          description="Buttons should feel consistent across the site. The slot-machine effect is a good 'Plus' upgrade without feeling flashy."
        >
          <div className="flex flex-wrap gap-4">
            <Reveal>
              <MotionButton variant="standard">Standard hover</MotionButton>
            </Reveal>

            <Reveal>
              <MotionButton variant="slot">Slot machine label</MotionButton>
            </Reveal>
          </div>

          <Reveal role="body">
            <p className="text-sm text-gray-600">
              Tip: Keep the slot movement small and clipped so it reads as polish, not
              a gimmick.
            </p>
          </Reveal>
        </Section>

        {/* TextImage: default layout */}
        <Section
          title="Text + Image (rotate in)"
          description="Image rotates in from the side it sits on. Text staggers in via RevealGroup."
        >
          <TextImage
            heading="Default layout"
            body="Text on the left, image on the right. The image swings in from the right edge with a subtle rotation."
            imageUrl="/demo/demo-1.jpg"
            footer={<MotionButton variant="standard">Learn more</MotionButton>}
          />
        </Section>

        {/* TextImage: reversed layout */}
        <Section
          title="Text + Image reversed"
          description="Same component with reversed prop — image on the left, text on the right."
        >
          <TextImage
            heading="Reversed layout"
            body="Image on the left swings in from the left edge. The rotation mirrors automatically when reversed."
            imageUrl="/demo/demo-2.jpg"
            reversed
            footer={<MotionButton variant="standard">Learn more</MotionButton>}
          />
        </Section>

        {/* TextImage: slide in from right */}
        <Section
          title="Text + Image (slide in)"
          description="Image slides in from the side it sits on — no rotation, just a clean horizontal entrance."
        >
          <TextImage
            heading="Slide in from right"
            body="Text on the left, image slides in from the right. A simpler alternative to the rotate variant."
            imageUrl="/demo/demo-1.jpg"
            imageVariant="fadeLeft"
            footer={<MotionButton variant="standard">Learn more</MotionButton>}
          />
        </Section>

        {/* TextImage: slide in from left (reversed) */}
        <Section
          title="Text + Image slide reversed"
          description="Same slide effect with reversed prop — image slides in from the left."
        >
          <TextImage
            heading="Slide in from left"
            body="Image on the left slides in from the left edge. The direction mirrors automatically when using fadeRight with reversed."
            imageUrl="/demo/demo-2.jpg"
            reversed
            imageVariant="fadeRight"
            footer={<MotionButton variant="standard">Learn more</MotionButton>}
          />
        </Section>

        {/* Image Reveal: circle mask */}
        <Section
          title="Image reveal (circle mask)"
          description="A solid overlay with a small circle peek expands to reveal the full image. Great for hero sections and full-width imagery."
        >
          <ImageReveal
            imageUrl="/demo/demo-1.jpg"
            alt="Circle reveal demo"
            className="rounded-2xl"
          />
        </Section>

        {/* Image Reveal: diamond mask */}
        <Section
          title="Image reveal (diamond mask)"
          description="Same reveal mechanic but with a diamond-shaped clip path instead of a circle."
        >
          <ImageReveal
            imageUrl="/demo/demo-2.jpg"
            alt="Diamond reveal demo"
            shape="diamond"
            className="rounded-2xl"
          />
        </Section>

        {/* Image Reveal: custom bg colour */}
        <Section
          title="Image reveal (custom overlay)"
          description="Same effect with a dark overlay colour. Use triggerOnLoad for hero images at the top of a page."
        >
          <ImageReveal
            imageUrl="/demo/demo-3.jpg"
            alt="Dark overlay reveal demo"
            bgColor="#111111"
            className="rounded-2xl"
          />
        </Section>

        {/* Marquee: default (pause on hover) */}
        <Section
          title="Marquee (pause on hover)"
          description="An infinitely scrolling strip of images. Hover to pause. Great for logo strips and portfolio showcases."
        >
          <Marquee>
            {[1, 2, 3, 1, 2, 3].map((n, i) => (
              <div key={i} className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`/demo/demo-${n}.jpg`}
                  alt={`Demo ${n}`}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </Marquee>
        </Section>

        {/* Marquee: reversed + slow on hover */}
        <Section
          title="Marquee (reversed, slow on hover)"
          description="Same component scrolling right-to-left reversed. Hover slows down instead of pausing."
        >
          <Marquee direction="right" hoverBehaviour="slow">
            {[3, 2, 1, 3, 2, 1].map((n, i) => (
              <div key={i} className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={`/demo/demo-${n}.jpg`}
                  alt={`Demo ${n}`}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            ))}
          </Marquee>
        </Section>

        {/* Text Rotator */}
        <Section
          title="Text rotator (slot machine)"
          description="A word in the title cycles through alternatives with a vertical slide transition. Great for hero headlines."
        >
          <Reveal role="heading">
            <h2 className="text-4xl font-bold tracking-tight">
              <TextRotator
                before="We build"
                words={["amazing", "beautiful", "innovative", "powerful"]}
                after="products."
              />
            </h2>
          </Reveal>
        </Section>

        {/* Parallax image */}
        <Section
          title="Parallax image"
          description="The image shifts vertically as you scroll, creating a sense of depth. Great for hero banners and section dividers."
        >
          <ParallaxImage
            imageUrl="/demo/demo-1.jpg"
            alt="Parallax demo"
            className="rounded-2xl"
          />
        </Section>

        {/* Blur Reveal */}
        <Section
          title="Blur reveal"
          description="Image starts heavily blurred and comes into focus as you scroll towards it. Scroll-driven — no trigger threshold, just smooth continuous sharpening."
        >
          <BlurReveal
            imageUrl="/demo/demo-2.jpg"
            alt="Blur reveal demo"
            className="rounded-2xl"
          />
        </Section>

        {/* Scale Reveal */}
        <Section
          title="Scale reveal"
          description="Image starts slightly scaled down and grows to full size when scrolled into view. The container stays fixed so content below doesn't shift."
        >
          <ScaleReveal
            imageUrl="/demo/demo-3.jpg"
            alt="Scale reveal demo"
            className="rounded-2xl"
          />
        </Section>

        {/* Expand Cards */}
        <Section
          title="Expand cards"
          description="Hover one card to expand it while the other contracts. Text stays on one line so it doesn't reflow as the width changes."
        >
          <ExpandCards
            items={[
              {
                imageUrl: "/demo/demo-1.jpg",
                title: "First card",
                description: "Hover to expand this card.",
              },
              {
                imageUrl: "/demo/demo-2.jpg",
                title: "Second card",
                description: "The other card shrinks to make room.",
              },
            ]}
          />
        </Section>

        <div className="h-[30vh]" />
      </div>
    </main>
    </ReplayButton>
  );
}
