import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <main className="relative flex-1">
        <SiteHeader />
        <Hero />
        <SelectedWork />
        <Services />
        <Partners />
      </main>
      <SiteFooter />
    </>
  );
}
