import { content } from "@/content";
import Link from "next/link";

/** Compacte inhoudsopgave: plaats, datum en titel, zonder fotomaat te rekken. */
export default function ProjectRegister() {
  return (
    <ol data-section="register" className="border-b border-inkt/15">
      {content.projects.map((project) => (
        <li key={project.slug} className="border-t border-inkt/15">
          <Link
            href={`/projecten/${project.slug}`}
            className="grid min-h-14 gap-1 py-3 sm:grid-cols-[9rem_8rem_1fr] sm:items-start sm:gap-6"
          >
            <span className="font-mono text-[0.78rem] tracking-wide">{project.date}</span>
            <span className="font-medium">{project.place}</span>
            <span>
              <span className="block font-display text-xl leading-tight">{project.title}</span>
              <span className="mt-1 block font-mono text-[0.72rem] tracking-wide">{project.work.join(" · ")}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
