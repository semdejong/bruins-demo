import type { Metadata } from "next";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spuitwerk",
  description:
    "Muurverf spuiten geeft een gladder en egaler resultaat dan rollen, op wanden en plafonds. Bruins Schilderwerken, Rijssen.",
};

export default function SpuitwerkPage() {
  const service = content.services.items.find((item) => item.slug === "spuitwerk");
  const film = content.projects.find((project) => project.slug === "muurverf-spuitwerk");
  const video = film && "video" in film ? film.video : undefined;

  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.5rem] leading-none sm:text-5xl">Spuitwerk</h1>
        <p className="mt-5 max-w-2xl">{service?.text}</p>
        {video ? (
          <p className="mt-5">
            <a href={video} target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">
              Bekijk het spuitwerk op YouTube
            </a>
            . De video speelt niet vanzelf af.
          </p>
        ) : null}
      </header>
      <ServiceEnd current="spuitwerk" projectSlugs={["muurverf-spuitwerk", "opfrisbeurt-nodig-voor-uw-kantoor"]} />
    </article>
  );
}
