import Image from "next/image";
import Link from "next/link";

import { HERO_BLUR } from "./hero-blur";
import { HeroScene } from "./hero-scene";

// Figma 789:267 sets the headline as ONE nowrap line at 152px, clipped at both
// edges: a marquee. The sentence is rendered twice so a -50% translate loops
// without a visible seam; the second copy is hidden from assistive tech and the
// h1 carries a plain reading.
const HEADLINE = "Because there is always another way";

export function Hero() {
  return (
    <HeroScene className="hero-scene relative flex h-svh min-h-[560px] w-full flex-col overflow-hidden bg-ink px-5 pb-9 md:px-9">
      {/* Background: a soft red-to-black gradient image. It is a smooth
          blur, so upscaling it past its 1214px source costs no detail. The
          blur placeholder paints instantly; ink shows before either. */}
      <Image
        src="/hero/gradient-b72f0dfd.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="pointer-events-none object-cover"
        aria-hidden="true"
      />

      {/* Pointer-following torch that lifts the ground locally. */}
      <div
        className="hero-scene__torch pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative w-full flex-1">
        <h1 className="hero-scene__headline relative z-10 flex h-full flex-col justify-center">
          <span className="sr-only">{HEADLINE}</span>
          {/* Visual marquee. Blend and motion live in CSS (.hero-marquee). */}
          <span className="hero-marquee" aria-hidden="true">
            <span className="hero-marquee__track">
              <span className="hero-marquee__copy font-display uppercase">
                {HEADLINE}
              </span>
              <span className="hero-marquee__copy font-display uppercase">
                {HEADLINE}
              </span>
            </span>
          </span>
        </h1>
      </div>

      {/* Footer rail (Figma 789:287). Mobile stacks it: the two labels share a
          row, the paragraph drops underneath. Desktop keeps the three-column
          rail. */}
      <div className="relative z-10 border-t border-ink/35 pt-4 text-ink md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
        <div className="flex items-center justify-between gap-4 md:contents">
          <p className="font-mono text-label">Tangerang · ID</p>

          <Link
            href="/work"
            className="order-last font-mono text-label transition-opacity hover:opacity-60 md:col-start-3 md:justify-self-end md:text-right"
          >
            View our work
          </Link>
        </div>

        <p className="mt-8 text-center font-mono text-body font-light md:col-start-2 md:row-start-1 md:mt-0 md:w-[576px] md:max-w-[576px]">
          You&rsquo;re building a brand with something to say. We turn it into a
          visual language that is clear, expressive, and built to work across
          every context.
        </p>
      </div>
    </HeroScene>
  );
}
