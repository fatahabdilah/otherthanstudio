"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeroSceneProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Tracks the pointer and publishes it to CSS as custom properties on the
 * wrapper, so the photo, the spotlight and the headline can each respond in
 * their own way without a React re-render per frame:
 *
 *   --px / --py  pointer as -1..1 from the centre (parallax)
 *   --mx / --my  pointer as a percentage of the wrapper (spotlight centre)
 *   --spot       0..1, whether a pointer is present at all
 *
 * Values are eased every frame rather than written straight from the event,
 * so the scene glides after the cursor instead of snapping to it.
 */
export function HeroScene({ className, children }: HeroSceneProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No fine pointer (touch) or motion turned off: leave the static CSS
    // fallback in place and do nothing.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduced.matches || !finePointer.matches) return;

    const target = { px: 0, py: 0, mx: 50, my: 50, spot: 0 };
    const current = { ...target };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;

      target.mx = Math.min(100, Math.max(0, x * 100));
      target.my = Math.min(100, Math.max(0, y * 100));
      target.px = Math.min(1, Math.max(-1, x * 2 - 1));
      target.py = Math.min(1, Math.max(-1, y * 2 - 1));
      target.spot = inside ? 1 : 0;
    };

    const onLeave = () => {
      target.spot = 0;
      target.px = 0;
      target.py = 0;
    };

    const ease = (from: number, to: number, k: number) => from + (to - from) * k;

    const tick = () => {
      // The spotlight follows a touch faster than the parallax, which is what
      // makes the light feel attached to the hand while the room lags behind.
      current.mx = ease(current.mx, target.mx, 0.12);
      current.my = ease(current.my, target.my, 0.12);
      current.px = ease(current.px, target.px, 0.05);
      current.py = ease(current.py, target.py, 0.05);
      current.spot = ease(current.spot, target.spot, 0.08);

      const s = node.style;
      s.setProperty("--px", current.px.toFixed(4));
      s.setProperty("--py", current.py.toFixed(4));
      s.setProperty("--mx", `${current.mx.toFixed(2)}%`);
      s.setProperty("--my", `${current.my.toFixed(2)}%`);
      s.setProperty("--spot", current.spot.toFixed(3));

      frame = requestAnimationFrame(tick);
    };

    node.dataset.live = "true";
    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      delete node.dataset.live;
    };
  }, []);

  // Rendered as <section> so the hero keeps its landmark; this component
  // only ever wraps the hero.
  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
