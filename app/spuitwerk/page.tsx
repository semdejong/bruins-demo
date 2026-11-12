import type { Metadata } from "next";
import ProjectExcerpt from "@/components/ProjectExcerpt";
import ServiceEnd from "@/components/ServiceEnd";
import { content } from "@/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spuitwerk",
  description:
    "Muurverf spuiten geeft een gladder en egaler resultaat dan rollen, op wanden en plafonds. Bruins Schilderwerken, Rijssen.",
};

export default function SpuitwerkPage() {
  const film = content.projects.find((project) => project.slug === "muurverf-spuitwerk");
  const video = film && "video" in film ? film.video : undefined;

  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/wat-we-doen" className="text-link underline underline-offset-2">
            Wat wij doen
          </Link>
        </p>
        <h1 className="mt-3 font-display text-[2.6rem] leading-[1.05] sm:text-6xl">Spuitwerk</h1>
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
          Het opspuiten van muurverf geeft een mooier, egaler resultaat dan rollen.
        </p>
      </header>

      <section data-section="vergelijking" className="border-t border-inkt/15">
        <div className="grid lg:grid-cols-2">
          <article className="bg-vlak">
            <span aria-hidden="true" className="block h-[3px] bg-inkt" />
            <div className="px-5 py-10 sm:px-10">
              <h2 className="font-display text-3xl">Rollen</h2>
              <p className="mt-4 max-w-md">
                Het rollen laat altijd een structuur na. Juist wanneer wanden en plafonds mooi glad zijn gestuct, zou het
                zonde zijn als dat teniet wordt gedaan door de roller.
              </p>
            </div>
          </article>
          <article className="bg-wit">
            <span aria-hidden="true" className="block h-[5px] bg-cyaan" />
            <div className="px-5 py-10 sm:px-10">
              <h2 className="font-display text-3xl">Spuiten</h2>
              <p className="mt-4 max-w-md">
                Bij opspuiten hebt u van die structuur geen last. U krijgt gladde, egale en strakke wanden en plafonds.
                Bovendien neemt het minder tijd in beslag.
              </p>
            </div>
          </article>
        </div>
      </section>

      {video ? (
        <section className="bg-inkt text-wit">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <span aria-hidden="true" className="block h-[3px] w-24 bg-cyaan" />
            <h2 className="mt-6 font-display text-3xl">De film</h2>
            <p className="mt-4 max-w-2xl">
              Van het muurverf-spuitwerk in Rijssen is een film. Die opent op YouTube en speelt hier niet vanzelf af.
            </p>
            <p className="mt-6">
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border-t-[3px] border-t-cyaan bg-link px-4 font-medium text-wit"
              >
                Bekijk het spuitwerk op YouTube
              </a>
            </p>
          </div>
        </section>
      ) : null}

      <section data-section="uit-het-werk" className="mx-auto max-w-6xl px-5 pb-4">
        <h2 className="font-display text-3xl">Woning en kantoor</h2>
        <p className="mt-4 max-w-2xl">
          In Rijssen spoten wij muurverf voor een particulier. In Enschede spoten wij muren, kabelgoten en wanden van een
          kantoor van Akor Rijssen, voor een strak en net resultaat.
        </p>
        <ProjectExcerpt slug="muurverf-spuitwerk" />
        <ProjectExcerpt slug="opfrisbeurt-nodig-voor-uw-kantoor" />
      </section>
      <ServiceEnd current="spuitwerk" />
    </article>
  );
}
