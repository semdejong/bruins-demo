import type { Metadata } from "next";
import CtaPair from "@/components/CtaPair";
import HonestImage from "@/components/HonestImage";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Bruins Schilderwerken is een familiebedrijf uit Rijssen met 25 jaar ervaring. Werkzaam in heel Nederland, met name Overijssel, Twente en Salland.",
};

export default function OverOnsPage() {
  return (
    <article>
      <header data-section="pagina" className="mx-auto grid max-w-6xl items-end gap-10 px-5 pb-8 pt-12 sm:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h1 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl">{content.about.title}</h1>
          <p className="mt-4 font-medium">{content.about.kicker}</p>
          <p className="mt-4">{content.about.intro}</p>
          {content.about.text.map((paragraph) => (
            <p key={paragraph} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="lg:col-span-5 lg:col-start-8">
          <HonestImage
            src={content.about.photo}
            alt={content.about.photoAlt}
            width={640}
            height={545}
            maxWidth={480}
          />
          <figcaption className="mt-3">{content.about.photoCaption}</figcaption>
        </figure>
      </header>

      <section data-section="werkgebied" className="bg-vlak">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">{content.about.regionTitle}</h2>
            <p className="mt-4">{content.about.region}</p>
          </div>
          <div className="border-t-[3px] border-t-cyaan bg-inkt p-4">
            <HonestImage src={content.about.vans} alt={content.about.vansAlt} width={640} height={260} maxWidth={640} />
          </div>
        </div>
      </section>

      <section data-section="reviews" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-4xl">{content.reviews.title}</h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {content.reviews.items.map((quote) => (
            <li key={quote.name}>
              <figure className="border-t-2 border-inkt pt-4">
                <blockquote className="font-display text-[1.45rem] leading-snug">{quote.text}</blockquote>
                <figcaption className="mt-4 font-mono text-[0.75rem] tracking-wide">{quote.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaPair />
        </div>
      </section>
    </article>
  );
}
