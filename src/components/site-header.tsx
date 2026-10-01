import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4 md:px-9">
      <Link
        href="/"
        aria-label="Otherthan Studio, home"
        className="block transition-opacity hover:opacity-80"
      >
        {/* Round mark on mobile; the Figma desktop comp uses the solid
            rectangle, so it returns from the md breakpoint up. Ink, because
            the header sits on the red hero, where an orange mark vanishes. */}
        <span className="flex size-7 items-center justify-center rounded-full bg-ink md:hidden">
          {/* "O" for Otherthan — a ring, drawn with evenodd so the counter
              punches through rather than needing a second fill. */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-3.5 fill-signal"
          >
            <path
              fillRule="evenodd"
              d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z"
            />
          </svg>
        </span>
        <span className="hidden h-[46px] w-11 bg-ink md:block" />
      </Link>

      <nav aria-label="Primary">
        <ul className="flex items-center gap-4 md:items-start md:gap-[28.8px]">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-mono text-label text-ink transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
