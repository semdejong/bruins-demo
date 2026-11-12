import CtaPair from "@/components/CtaPair";
import HonestImage from "@/components/HonestImage";
import { content } from "@/content";
import { projectFrames } from "@/lib/frames";
import Link from "next/link";

export default function ServiceEnd({
  current,
  projectSlugs = [],
}: {
  current: string;
  projectSlugs?: string[];
}) {
  const others = content.services.items.filter((service) => service.slug !== current);
  const projects = projectSlugs
    .map((slug) => content.projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);

  return (
    <>
      {projects.length > 0 ? (
        <section data-section="projecten" className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-3xl">Projecten</h2>
          <ul className="mt-6 grid gap-8 sm:grid-cols-2">
            {projects.map((project) => {
              const cover = projectFrames(project)[0];
              return (
                <li key={project.slug}>
                  <Link href={`/projecten/${project.slug}`} className="block max-w-[520px]">
                    <HonestImage src={cover.src} alt={cover.alt} width={705} height={550} maxWidth={520} />
                    <span className="mt-3 block font-mono text-[0.75rem] tracking-wide">
                      {project.place} · {project.date}
                    </span>
                    <span className="mt-1 block font-display text-2xl">{project.title}</span>
                    <span className="mt-2 block text-[1rem] leading-relaxed">{project.summary}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/projecten" className="mt-6 inline-flex min-h-11 items-center text-link underline underline-offset-4">
            Alle projecten
          </Link>
        </section>
      ) : null}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <p>
          Ook voor{" "}
          {others.map((service, index) => (
            <span key={service.slug}>
              {index > 0 && index < others.length - 1 ? ", " : null}
              {index > 0 && index === others.length - 1 ? " en " : null}
              <Link href={service.href} className="text-link underline underline-offset-2">
                {service.title.toLowerCase()}
              </Link>
            </span>
          ))}
          .
        </p>
        <div className="mt-6">
          <CtaPair />
        </div>
      </section>
    </>
  );
}
