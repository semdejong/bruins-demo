import { content } from "@/content";
import Link from "next/link";

/** Compacte inhoudsopgave: plaats, datum en titel, zonder fotomaat te rekken. */
export default function ProjectRegister() {
  return (
    <ol data-section="register">
      {content.projects.map((project) => (
        <li key={project.slug} className="border-t border-inkt/15">
          <Link
            href={`/projecten/${project.slug}`}
            className="grid min-h-14 gap-1 py-3 sm:grid-cols-[9rem_8rem_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-[0.78rem] tracking-wide">{project.date}</span>
            <span className="font-medium">{project.place}</span>
            <span className="font-display text-xl leading-tight">{project.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
