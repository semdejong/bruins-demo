"use client";

import Lightbox from "@/components/Lightbox";
import { content } from "@/content";
import { projectFrames, type Frame } from "@/lib/frames";
import Link from "next/link";
import { useState } from "react";

type Open = { slug: string; index: number } | null;

export default function ProjectGallery() {
  const [open, setOpen] = useState<Open>(null);
  const active = open ? content.projects.find((project) => project.slug === open.slug) : undefined;
  const frames: Frame[] = active ? projectFrames(active) : [];

  return (
    <>
      <ul>
        {content.projects.map((project, index) => {
          const cover = projectFrames(project)[0];
          return (
            <li
              key={project.slug}
              className="grid items-center gap-6 border-t border-inkt/15 py-8 md:grid-cols-2 md:py-10"
            >
              <button
                type="button"
                className={`block w-full max-w-[705px] text-left ${index % 2 ? "md:order-2" : ""}`}
                onClick={() => setOpen({ slug: project.slug, index: 0 })}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover.src} alt={cover.alt} width={705} height={550} className="h-auto w-full" />
                <span className="mt-2 block font-mono text-[0.72rem] tracking-wide text-link">Vergroot foto</span>
              </button>
              <div className={index % 2 ? "md:order-1" : ""}>
                <p className="font-mono text-[0.78rem] tracking-wide">
                  {project.place} · {project.date}
                  {project.client ? ` · ${project.client}` : ""}
                </p>
                <h2 className="mt-2 font-display text-[1.85rem] leading-tight sm:text-4xl">
                  <Link href={`/projecten/${project.slug}`} className="underline-offset-4 hover:underline">
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-xl">{project.summary}</p>
                <Link
                  href={`/projecten/${project.slug}`}
                  className="mt-4 inline-flex min-h-11 items-center text-link underline underline-offset-4"
                >
                  Bekijk het project
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      {open && active ? (
        <Lightbox
          photos={frames}
          index={open.index}
          onClose={() => setOpen(null)}
          onIndex={(next) => setOpen({ slug: active.slug, index: next })}
        />
      ) : null}
    </>
  );
}
