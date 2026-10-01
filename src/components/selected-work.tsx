import Image from "next/image";
import Link from "next/link";

// Figma node 749:2401. The rail scrolls horizontally and the card widths and
// heights vary per project — that uneven rhythm is the point of the layout,
// so the Figma pixel sizes are kept as an aspect ratio plus a width basis.
const PROJECTS = [
  {
    name: "OMOVO",
    discipline: "Electric Vehicle",
    year: "2026",
    src: "/work/omovo-6bb423be.jpg",
    href: "/work/omovo",
    width: 632,
    height: 791,
  },
  {
    name: "KCN Port Marunda",
    discipline: "Port & Logistics",
    year: "2026",
    src: "/work/kcn-port-marunda-6f5a9031.jpg",
    href: "/work/kcn-port-marunda",
    width: 662,
    height: 821,
  },
  {
    name: "KOL.LAB",
    discipline: "Creator Marketing",
    year: "2026",
    src: "/work/kol-lab-e4916a0d.jpg",
    href: "/work/kol-lab",
    width: 555,
    height: 695,
  },
  {
    name: "Jelly Bubble",
    discipline: "Make Up & Beauty",
    year: "2026",
    src: "/work/jelly-bubble-727ac388.jpg",
    href: "/work/jelly-bubble",
    width: 552,
    height: 548,
  },
  {
    name: "Three Point Jersey",
    discipline: "Sports & Apparel",
    year: "2025",
    src: "/work/three-point-jersey-35e95f9d.jpg",
    href: "/work/three-point-jersey",
    width: 562,
    height: 695,
  },
  {
    name: "Gadgetindo",
    discipline: "Gadget & Technology",
    year: "2025",
    src: "/work/gadgetindo-494c21b2.jpg",
    href: "/work/gadgetindo",
    width: 555,
    height: 692,
  },
  {
    name: "Lokahyang",
    discipline: "Arts Organization",
    year: "2025",
    src: "/work/lokahyang-418c00d3.jpg",
    href: "/work/lokahyang",
    width: 560,
    height: 555,
  },
  {
    name: "Kawan Kerja",
    discipline: "Web Development",
    year: "2024",
    src: "/work/kawan-kerja-341dfede.jpg",
    href: "/work/kawan-kerja",
    width: 563,
    height: 558,
  },
];

// The rail's tallest card sets the row height; each card's width then follows
// from its own aspect ratio, which reproduces the Figma stagger at any scale.
const TALLEST = Math.max(...PROJECTS.map((p) => p.height));

export function SelectedWork() {
  return (
    <section className="w-full bg-bone pt-5 pb-16 text-ink md:pb-28">
      <div className="border-b-[0.8px] border-ink/55 px-5 pb-[12.8px] md:px-9">
        <p className="font-mono text-label">Selected work</p>
      </div>

      <div className="grid gap-8 px-5 pt-12 pb-12 md:px-9 md:pt-[76.8px] md:pb-24 xl:grid-cols-[1fr_465px] xl:items-start">
        <h2 className="selected-work-title font-display display-leading uppercase">
          Selected
          <br />
          Work
        </h2>

        <p className="font-mono text-body font-light xl:max-w-[368px] xl:justify-self-end">
          A selection of identities, campaigns, and social systems built to carry a point of view.
        </p>
      </div>

      {/* Horizontal rail. Scroll-snap keeps the cards aligned when dragged. */}
      <ul className="work-rail flex items-end snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-9 [&::-webkit-scrollbar]:hidden">
        {PROJECTS.map((project) => (
          <li
            key={project.name}
            className="shrink-0 snap-start"
            style={{
              // Card height is its Figma height scaled against the tallest card;
              // width then follows from that same height so the aspect ratio —
              // and with it the Figma stagger — is preserved at any rail size.
              width: `calc(var(--rail-height) * ${project.width / TALLEST})`,
            }}
          >
            <Link href={project.href} className="group block">
              <div
                className="relative w-full overflow-hidden bg-ink/5"
                style={{ height: `calc(var(--rail-height) * ${project.height / TALLEST})` }}
              >
                <Image
                  src={project.src}
                  alt={`${project.name} — ${project.discipline}`}
                  fill
                  sizes="(max-width: 768px) 70vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col gap-0.5 pt-2 font-mono text-label md:flex-row md:items-baseline md:justify-between md:gap-3">
                <span>{project.name}</span>
                <span className="text-ink/70">
                  {project.discipline} {project.year}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
