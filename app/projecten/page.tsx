import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectRegister from "@/components/ProjectRegister";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Negen projecten van Bruins Schilderwerken: keimwerk, behang, spuitwerk, buitenschilderwerk en houtbescherming.",
};

export default function ProjectenPage() {
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <h1 className="font-display text-[2.5rem] leading-none sm:text-5xl">Projecten</h1>
        <p className="mt-5 max-w-2xl">
          Negen projecten, van keimwerk en behang tot spuitwerk en houtbescherming.
        </p>
      </header>
      <div className="mx-auto max-w-6xl px-5 pb-8">
        <ProjectRegister />
      </div>
      <div data-section="projectgalerij" className="mx-auto max-w-6xl px-5 pb-16">
        <ProjectGallery />
      </div>
    </article>
  );
}
