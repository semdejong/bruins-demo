import type { Metadata } from "next";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behangwerk",
  description:
    "Diverse soorten behang en glasweefsel (glasvlies). Bruins Schilderwerken plakt ook fotobehang en akoestische afwerking.",
};

export default function BehangwerkPage() {
  const service = content.services.items.find((item) => item.slug === "behangwerk");
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.5rem] leading-none sm:text-5xl">Behangwerk</h1>
        <p className="mt-5 max-w-2xl">{content.behangHook}</p>
        <p className="mt-4 max-w-2xl">{service?.text}</p>
      </header>
      <ServiceEnd current="behangwerk" projectSlugs={["250m2-fotobehang-plakken", "monumentale-boerderij"]} />
    </article>
  );
}
