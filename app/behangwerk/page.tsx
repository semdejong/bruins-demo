import type { Metadata } from "next";
import ProjectExcerpt from "@/components/ProjectExcerpt";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behangwerk",
  description:
    "Diverse soorten behang en glasweefsel (glasvlies). Bruins Schilderwerken plakt ook fotobehang en akoestische afwerking.",
};

export default function BehangwerkPage() {
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.6rem] leading-[1.05] sm:text-6xl">Behangwerk</h1>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">{content.behangHook}</p>
      </header>

      <section className="bg-vlak">
        <div className="mx-auto grid max-w-6xl items-start gap-x-12 gap-y-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <span aria-hidden="true" className="block h-[5px] w-full bg-inkt" />
            <h2 className="mt-6 font-display text-3xl">Diverse soorten behang</h2>
            <p className="mt-4">
              Met het plakken van diverse soorten behang hebben wij ruime ervaring. In opdracht van onze partner
              Fotowand.nl plakten wij 250m2 fotobehang in Oosterhout.
            </p>
          </div>
          <div>
            <span aria-hidden="true" className="block h-[3px] w-full bg-magenta" />
            <h2 className="mt-6 font-display text-3xl">Glasweefsel</h2>
            <p className="mt-4">
              Daarnaast kunnen wij overweg met glasweefsel, ook wel glasvlies genoemd.
            </p>
          </div>
        </div>
      </section>

      <section data-section="uit-het-werk" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-display text-3xl">Twee behangprojecten</h2>
        <p className="mt-4 max-w-2xl">
          Een groot fotobehang in Oosterhout, en een akoestische plafondafwerking in een monumentale boerderij in Hengelo.
          Het materiaal van Vitrulan filtert 20% van de vervelende tonen uit de ruimte.
        </p>
        <ProjectExcerpt slug="250m2-fotobehang-plakken" />
        <ProjectExcerpt slug="monumentale-boerderij" />
      </section>
      <ServiceEnd current="behangwerk" />
    </article>
  );
}
