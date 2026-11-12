import type { Metadata } from "next";
import CoatStack from "@/components/CoatStack";
import CtaPair from "@/components/CtaPair";
import LayerRule from "@/components/LayerRule";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Wat wij doen",
  description:
    "Schilderwerk, glaswerk, behangwerk en spuitwerk door Bruins Schilderwerken uit Rijssen. Ook onderhoud en renovatie.",
};

export default function WatWeDoenPage() {
  return (
    <>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <h1 className="max-w-3xl font-display text-[2.5rem] leading-[1.08] sm:text-5xl">{content.services.title}</h1>
        <p className="mt-5 max-w-2xl">{content.services.intro}</p>
      </header>
      <CoatStack full />
      <section className="bg-papier">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Onderhoud of renovatie</h2>
            <p className="mt-4">{content.onderhoud}</p>
            <p className="mt-4">{content.schilderHook}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Kleur en materiaal</h2>
            <p className="mt-4">{content.advice}</p>
            <h2 className="mt-10 font-display text-3xl">{content.about.regionTitle}</h2>
            <p className="mt-4">{content.about.region}</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <CtaPair />
        </div>
      </section>
      <LayerRule />
    </>
  );
}
