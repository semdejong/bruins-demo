import type { Metadata } from "next";
import ProjectPhotos from "@/components/ProjectPhotos";
import CtaPair from "@/components/CtaPair";
import { content, getProject } from "@/content";
import { projectFrames } from "@/lib/frames";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const workHref: Record<string, string> = {
  Schilderwerk: "/schilderwerk",
  Glaswerk: "/glaswerk",
  Behangwerk: "/behangwerk",
};

export function generateStaticParams() {
  return content.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<p className="mx-auto max-w-6xl px-5 py-16 font-display text-3xl">Project</p>}>
      <ProjectBody params={params} />
    </Suspense>
  );
}

async function ProjectBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const frames = projectFrames(project);
  const video = "video" in project ? project.video : undefined;

  return (
    <article data-section="project">
      <header className="mx-auto max-w-6xl px-5 pb-6 pt-12 sm:pt-16">
        <p className="font-mono text-[0.78rem]">
          <Link href="/projecten" className="text-link underline underline-offset-2">
            Projecten
          </Link>
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-[2.4rem] leading-[1.08] text-balance sm:text-5xl">{project.title}</h1>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="label-mono">Plaats</dt>
            <dd className="mt-1">{project.place}</dd>
          </div>
          <div>
            <dt className="label-mono">Datum</dt>
            <dd className="mt-1">{project.date}</dd>
          </div>
          {project.client ? (
            <div>
              <dt className="label-mono">Opdrachtgever</dt>
              <dd className="mt-1">{project.client}</dd>
            </div>
          ) : null}
          <div>
            <dt className="label-mono">Werk</dt>
            <dd className="mt-1">
              {project.work.map((item, index) => (
                <span key={item}>
                  {index > 0 ? ", " : null}
                  {workHref[item] ? (
                    <Link href={workHref[item]} className="text-link underline underline-offset-2">
                      {item}
                    </Link>
                  ) : (
                    item
                  )}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {project.text.map((paragraph) => (
            <p key={paragraph} className="mt-4">
              {paragraph}
            </p>
          ))}
          {video ? (
            <p className="mt-6">
              <a href={video} target="_blank" rel="noopener noreferrer" className="text-link underline underline-offset-2">
                Bekijk het spuitwerk op YouTube
              </a>
              . De video speelt niet vanzelf af.
            </p>
          ) : null}
          <div className="mt-8">
            <CtaPair />
          </div>
        </div>
        <div className="lg:col-span-7">
          <ProjectPhotos photos={frames} />
        </div>
      </div>
    </article>
  );
}
