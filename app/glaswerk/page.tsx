import type { Metadata } from "next";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glaswerk",
  description:
    "Beglazing van enkelglas tot HR++, inclusief figuurglas en glas in lood. Bruins Schilderwerken uit Rijssen.",
};

export default function GlaswerkPage() {
  const service = content.services.items.find((item) => item.slug === "glaswerk");
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.5rem] leading-none sm:text-5xl">Glaswerk</h1>
        <p className="mt-5 max-w-2xl">{service?.text}</p>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-8">
        <h2 className="font-display text-3xl">Glassoorten</h2>
        <ul className="mt-6 max-w-xl border-t border-inkt">
          {content.glassTypes.map((soort) => (
            <li key={soort} className="border-b border-inkt/20 py-4 font-display text-2xl">
              {soort}
            </li>
          ))}
        </ul>
      </section>
      <ServiceEnd current="glaswerk" />
    </article>
  );
}
