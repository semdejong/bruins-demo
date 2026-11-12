import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";

export default function NotFound() {
  const phoneHref = `tel:${content.contact.phoneTel}`;
  return (
    <article data-section="niet-gevonden" className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="font-display text-4xl sm:text-5xl">Pagina niet gevonden</h1>
      <p className="mt-4">Deze pagina bestaat niet. Ga terug naar de homepage of bel ons.</p>
      <p className="mt-6 flex flex-wrap gap-4">
        <Link href="/" className="inline-flex min-h-11 items-center border border-inkt px-4 font-medium">
          Naar de homepage
        </Link>
        <a href={phoneHref} data-cta={ctaType(phoneHref)} className="inline-flex min-h-11 items-center text-link underline">
          Bel {content.contact.phoneDisplay}
        </a>
      </p>
    </article>
  );
}
