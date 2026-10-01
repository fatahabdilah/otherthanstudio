import Link from "next/link";

// Figma node 749:2355. The comp sets each client as a logo lockup; only the
// campaign artwork was supplied, so the cells are set as wordmarks rather than
// inventing logo files for real companies.
const PARTNERS = [
  { name: "OMOVO", sector: "Electric Vehicle", href: "/work/omovo" },
  { name: "KCN Port Marunda", sector: "Port & Logistics", href: "/work/kcn-port-marunda" },
  { name: "KOL.LAB", sector: "Creator Marketing", href: "/work/kol-lab" },
  { name: "Jelly Bubble", sector: "Make Up & Beauty", href: "/work/jelly-bubble" },
  { name: "Three Point Jersey", sector: "Sports & Apparel", href: "/work/three-point-jersey" },
  { name: "Gadgetindo", sector: "Gadget & Technology", href: "/work/gadgetindo" },
  { name: "Lokahyang", sector: "Arts Organization", href: "/work/lokahyang" },
  { name: "Kawan Kerja", sector: "Web Development", href: "/work/kawan-kerja" },
];

export function Partners() {
  return (
    <section className="w-full bg-ink px-5 pt-5 pb-9 text-bone md:px-9">
      <div className="flex items-start justify-between gap-4 border-b-[0.8px] border-bone/38 pb-[12.8px]">
        <p className="font-mono text-label">Friends we&rsquo;ve worked with</p>
        <p className="font-mono text-label">Selected partners</p>
      </div>

      <h2 className="partners-title pt-16 font-display display-leading uppercase md:pt-[122.88px]">
        Good company.
        <br />
        Great stories.
      </h2>

      {/* 4x2 on desktop, 2x4 on mobile. Cell borders form the grid rules. */}
      <ul className="grid grid-cols-2 pt-16 md:pt-[122.88px] lg:grid-cols-4">
        {PARTNERS.map((partner) => (
          <li
            key={partner.name}
            className="flex min-h-[140px] items-center justify-center border-t-[0.8px] border-bone/25 p-5 md:min-h-[261px] md:p-8 [&:nth-child(2n)]:border-r-0 [&:not(:nth-child(2n))]:border-r-[0.8px] lg:[&:nth-child(2n)]:border-r-[0.8px] lg:[&:nth-child(4n)]:border-r-0"
          >
            <Link
              href={partner.href}
              aria-label={`View ${partner.name}: ${partner.sector}`}
              className="flex flex-col items-center gap-2 text-center opacity-[0.82] transition-opacity duration-300 hover:opacity-100"
            >
              <span className="partner-mark font-display display-leading text-balance uppercase">
                {partner.name}
              </span>
              <span className="font-mono text-label text-bone/60">
                {partner.sector}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
