import type { Metadata } from "next";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnen-, buiten- en onderhoudsschilderwerk door Bruins Schilderwerken in Rijssen. Nieuwbouw, onderhoud en renovatie.",
};

const lagen = ["Binnenschilderwerk", "Buitenschilderwerk", "Onderhoudsschilderwerk"];

export default function SchilderwerkPage() {
  const service = content.services.items.find((item) => item.slug === "schilderwerk");
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.5rem] leading-none sm:text-5xl">Schilderwerk</h1>
        <p className="mt-5 max-w-2xl">{service?.text}</p>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-8">
        <ul className="max-w-xl border-t border-inkt">
          {lagen.map((laag) => (
            <li key={laag} className="border-b border-inkt/20 py-4 font-display text-2xl">
              {laag}
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-3xl">Onderhoud of renovatie</h2>
        <p className="mt-4 max-w-2xl">{content.onderhoud}</p>
        <p className="mt-4 max-w-2xl">{content.schilderHook}</p>
        <h2 className="mt-12 font-display text-3xl">Kleur en materiaal</h2>
        <p className="mt-4 max-w-2xl">{content.advice}</p>
      </section>
      <ServiceEnd
        current="schilderwerk"
        projectSlugs={["keimwerk", "schilderen-woning-hendrik-jan-van-opstalstraat", "behandelen-aluminium-kozijnen"]}
      />
    </article>
  );
}
