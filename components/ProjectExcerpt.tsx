import HonestImage from "@/components/HonestImage";
import { content } from "@/content";
import { projectFrames } from "@/lib/frames";
import Link from "next/link";

export default function ProjectExcerpt({ slug }: { slug: string }) {
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) return null;
  const cover = projectFrames(project)[0];

  return (
    <article className="grid items-start gap-6 border-t border-inkt/15 py-8 md:grid-cols-12">
      <Link href={`/projecten/${project.slug}`} className="block max-w-[480px] md:col-span-5">
        <HonestImage src={cover.src} alt={cover.alt} width={705} height={550} maxWidth={480} />
      </Link>
      <div className="md:col-span-7">
        <p className="font-mono text-[0.78rem] tracking-wide">
          {project.place} · {project.date}
          {project.client ? ` · ${project.client}` : ""}
        </p>
        <h3 className="mt-2 font-display text-3xl leading-tight">
          <Link href={`/projecten/${project.slug}`} className="underline-offset-4 hover:underline">
            {project.title}
          </Link>
        </h3>
        <div className="mt-4 space-y-3">
          {project.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {"video" in project && project.video ? (
          <p className="mt-4">
            <a href={project.video} target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">
              Bekijk het spuitwerk op YouTube
            </a>
            . De video speelt niet vanzelf af.
          </p>
        ) : null}
      </div>
    </article>
  );
}
