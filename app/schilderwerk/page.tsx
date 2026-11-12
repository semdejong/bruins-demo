import type { Metadata } from "next";
import ProjectExcerpt from "@/components/ProjectExcerpt";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Binnen-, buiten- en onderhoudsschilderwerk door Bruins Schilderwerken in Rijssen. Nieuwbouw, onderhoud en renovatie.",
};

const hairline = ["h-[5px] bg-inkt", "h-[4px] bg-cyaan", "h-[3px] bg-magenta"];

export default function SchilderwerkPage() {
  const service = content.services.items.find((item) => item.slug === "schilderwerk");
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.6rem] leading-[1.05] sm:text-6xl">Schilderwerk</h1>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">{content.voice.voorAlUwSchilderwerk}</p>
        <p className="mt-5 max-w-2xl">{service?.text}</p>
      </header>

      <section data-section="lagen">
        {content.schilderLagen.map((laag, index) => (
          <article key={laag.title} className={index % 2 ? "bg-vlak" : "bg-wit"}>
            <span aria-hidden="true" className={`block w-full ${hairline[index]}`} />
            <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
              <h2 className="font-display text-2xl sm:text-4xl">{laag.title}</h2>
              <p className="mt-4 max-w-2xl">{laag.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-papier">
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {content.voice.audiences.map((audience, index) => (
            <li key={audience} className="border-t border-inkt/15">
              <span aria-hidden="true" className={`block ${["h-[5px] bg-inkt", "h-[4px] bg-cyaan", "h-[3px] bg-magenta"][index]}`} />
              <p className="px-5 py-6 font-display text-xl leading-tight sm:text-[1.45rem]">{audience}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl">Kleur en materiaal</h2>
        <p className="mt-4 max-w-2xl">{content.voice.kleuren}</p>
        <p className="mt-4 max-w-2xl">{content.advice}</p>
      </section>

      <section data-section="uit-het-werk" className="mx-auto max-w-6xl px-5 pb-4">
        <h2 className="font-display text-3xl">Uit het werk</h2>
        <p className="mt-4 max-w-2xl">
          Keim op nieuwbouw, een laklaag op een woning, olie op buiten houtwerk en een coating op aluminium kozijnen.
        </p>
        <div className="mt-4">
          <ProjectExcerpt slug="keimwerk" />
          <ProjectExcerpt slug="schilderen-woning-hendrik-jan-van-opstalstraat" />
          <ProjectExcerpt slug="tuinhuis-optimaal-beschermen-tegen-het-nederlandse-weer" />
          <ProjectExcerpt slug="hottube-in-olie" />
          <ProjectExcerpt slug="behandelen-aluminium-kozijnen" />
        </div>
      </section>
      <ServiceEnd current="schilderwerk" />
    </article>
  );
}
