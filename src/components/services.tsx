import Link from "next/link";

// Figma node 749:2297 — "What we do". Each row is a display-type link with a
// running number and a one-line description tucked to the right.
// Disciplines come from the studio portfolio deck.
const SERVICES = [
  {
    title: "Branding",
    number: "01",
    description: "Ideas become identity — marks built to feel clear and distinct.",
    href: "/work/branding",
  },
  {
    title: "Visual Identity",
    number: "02",
    description: "Identity beyond the logo: cohesive systems that flex in context.",
    href: "/work/visual-identity",
  },
  {
    title: "Social Media",
    number: "03",
    description: "Content that connects — brand stories built to stand out.",
    href: "/work/social-media",
  },
  {
    title: "Graphic Design",
    number: "04",
    description: "Decks, campaigns, and assets shaped with intent from concept to delivery.",
    href: "/work/graphic-design",
  },
];

export function Services() {
  return (
    <section className="w-full bg-bone px-5 pt-5 pb-24 text-ink md:px-9 md:pb-[199.68px]">
      <div className="flex items-start justify-between gap-4 pb-[12.8px]">
        <p className="font-mono text-label">What we do</p>
        <p className="font-mono text-label">Branding &amp; social media</p>
      </div>

      <ul className="pt-16 md:pt-[122.88px]">
        {SERVICES.map((service) => (
          <li key={service.title}>
            <Link
              href={service.href}
              aria-label={`View ${service.title} work`}
              className="group grid grid-cols-[1fr_auto] items-end gap-x-4 border-b border-ink/25 py-4 transition-opacity hover:opacity-60 xl:grid-cols-[1fr_40px_337px] xl:pt-[5.6px] xl:pb-[10.4px]"
            >
              <span className="service-line font-display display-leading uppercase xl:col-start-1">
                {service.title}
              </span>

              <span className="font-mono text-label xl:col-start-2 xl:self-end xl:pb-[3.2px]">
                {service.number}
              </span>

              <span className="col-span-2 font-mono text-label text-label-wrap xl:col-span-1 xl:col-start-3 xl:w-[338px] xl:self-end xl:pb-[3.2px]">
                {service.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
