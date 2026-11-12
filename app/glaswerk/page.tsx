import type { Metadata } from "next";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glaswerk",
  description:
    "Beglazing van enkelglas tot HR++, inclusief figuurglas en glas in lood. Bruins Schilderwerken uit Rijssen.",
};

const coats = ["h-[2px] bg-inkt", "h-[3px] bg-cyaan", "h-[3px] bg-magenta", "h-[4px] bg-inkt", "h-[5px] bg-cyaan"];

export default function GlaswerkPage() {
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-6 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl">Glaswerk</h1>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
          Rekening houdend met uw wensen komen wij met een passende en zo voordelig mogelijke oplossing voor uw glaswerk.
        </p>
        <p className="mt-5 max-w-2xl">
          Wij leveren alle glassoorten van normaal enkelglas tot en met het best isolerende HR++.
        </p>
      </header>

      <section data-section="glassoorten">
        {content.glassTypes.map((soort, index) => (
          <article key={soort.title} className={index % 2 ? "bg-vlak" : "bg-wit"}>
            <span aria-hidden="true" className={`block w-full ${coats[index]}`} />
            <div className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
              <h2 className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl">{soort.title}</h2>
              <p className="mt-3 max-w-2xl">{soort.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl">Samen met schilderwerk</h2>
        <p className="mt-4 max-w-2xl">
          Wij zijn thuis in de afwerking en het onderhoud van glas- en schilderwerken. Beglazing staat daarom niet los van
          het schilderwerk: bij nieuwbouw, onderhoud of renovatie bent u voor beide aan het juiste adres.
        </p>
        <p className="mt-4 max-w-2xl">{content.onderhoud}</p>
      </section>
      <ServiceEnd current="glaswerk" />
    </article>
  );
}
