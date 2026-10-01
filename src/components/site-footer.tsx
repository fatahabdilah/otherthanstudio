import Link from "next/link";

// Figma node 749:2822. The ticker runs three statements on a loop; the copy is
// baked into flattened SVG in the comp, so it is set as live text here.
const TICKER = [
  "We turn ideas into visual languages that give brands a distinct point of view, moving between branding, visual identity, and social media.",
  "Otherthan translates brand moments into meaningful perspectives, flexing between moments of calm and the grit of the expressive.",
  "Good design is not only about how something looks, but how naturally it communicates. Every project starts with an idea and ends as a system.",
];

const FOOTER_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Behance", href: "https://behance.net/muhammafaqihh" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ilhamfaqih" },
];

export function SiteFooter() {
  // Text sits on the orange ground, so it uses the deeper ink: #222222 only
  // reaches 4.26:1 there, while #141414 clears AA at 4.93:1.
  return (
    <footer className="relative w-full overflow-hidden bg-signal pt-5 text-ink-deep">
      {/* Ticker rail */}
      <div className="flex overflow-hidden border-b-[0.8px] border-ink-deep pb-7">
        <div className="marquee flex w-max shrink-0">
          {/* Two identical halves. The animation shifts the track by exactly
              -50%, which only lands seamlessly if each half — trailing gap
              included — is the same width, so the spacing lives inside them. */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {TICKER.map((line) => (
                <span
                  key={line}
                  className="shrink-0 pr-14 font-mono text-label tracking-wide"
                >
                  {line}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Call to action + links */}
      <div className="grid gap-10 px-5 pt-12 md:grid-cols-[1fr_auto] md:px-9 md:pt-[60px]">
        <Link
          href="/contact"
          className="group flex flex-col items-start transition-opacity hover:opacity-70"
        >
          <span className="footer-cta font-display display-leading uppercase">
            Let&rsquo;s work
          </span>
          <span className="flex items-start gap-2">
            <span className="footer-cta font-display display-leading uppercase">
              together
            </span>
            <svg
              viewBox="0 0 45 45"
              aria-hidden="true"
              className="mt-2 size-6 shrink-0 fill-none stroke-ink-deep stroke-[3] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:size-[45px]"
            >
              <path d="M12 33 33 12M15 12h18v18" strokeLinecap="square" />
            </svg>
          </span>
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-start gap-x-12 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-label transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Oversized wordmark */}
      <div className="px-5 pt-16 md:px-9 md:pt-24">
        <p
          aria-hidden="true"
          className="footer-wordmark select-none font-display display-leading uppercase text-ink-deep"
        >
          Otherthan
        </p>
      </div>

      <div className="flex justify-end px-5 pb-5 md:px-9">
        <p className="font-mono text-label">©2026</p>
      </div>
    </footer>
  );
}
