import { content } from "@/content";
import Link from "next/link";

const coat: Record<string, { bar: string; height: string; pad: string }> = {
  schilderwerk: { bar: "bg-inkt", height: "h-[5px]", pad: "py-12 sm:py-16" },
  glaswerk: { bar: "bg-cyaan", height: "h-[4px]", pad: "py-10 sm:py-14" },
  behangwerk: { bar: "bg-magenta", height: "h-[3px]", pad: "py-8 sm:py-12" },
  spuitwerk: { bar: "bg-groen", height: "h-[3px]", pad: "py-7 sm:py-10" },
};

export default function CoatStack({ full = false }: { full?: boolean }) {
  return (
    <div data-section="diensten">
      {content.services.items.map((service, index) => {
        const style = coat[service.slug] ?? coat.schilderwerk;
        return (
          <Link
            key={service.slug}
            href={service.href}
            className={`group block ${index % 2 === 0 ? "bg-wit" : "bg-vlak"}`}
          >
            <span
              aria-hidden="true"
              className={`block w-full ${style.bar} ${style.height} motion-safe:transition-[height] motion-safe:duration-200 group-hover:h-2`}
            />
            <span className={`mx-auto block max-w-6xl px-5 ${style.pad}`}>
              <span className="block font-display text-[2rem] leading-none sm:text-4xl">{service.title}</span>
              <span className="mt-4 block max-w-2xl">{full ? service.text : service.short}</span>
              <span className="mt-5 block font-mono text-[0.78rem] tracking-[0.12em] text-link">
                Naar {service.title.toLowerCase()}
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
