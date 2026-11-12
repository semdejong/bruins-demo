import CoatStack from "@/components/CoatStack";
import CtaPair from "@/components/CtaPair";
import HonestImage from "@/components/HonestImage";
import LayerLegend from "@/components/LayerLegend";
import LayerRule from "@/components/LayerRule";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import { projectFrames } from "@/lib/frames";
import Link from "next/link";

export default function Home() {
  const featured = content.featured
    .map((slug) => content.projects.find((project) => project.slug === slug))
    .filter((project) => project !== undefined);
  const quotes = content.reviews.items.slice(0, 3);
  const phoneHref = `tel:${content.contact.phoneTel}`;
  const mailHref = `mailto:${content.contact.email}`;

  return (
    <>
      <section data-section="hero" className="bg-papier">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-[0.82rem] text-link">{content.about.kicker}</p>
            <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl">{content.hero.title}</h1>
            <p className="mt-6 max-w-xl">{content.hero.subtitle}</p>
            <div className="mt-8">
              <CtaPair />
            </div>
            <LayerLegend />
          </div>
          <div className="rise lg:col-span-5">
            <div className="border-t-[3px] border-t-cyaan bg-inkt p-4">
              <HonestImage
                src={content.hero.image}
                alt={content.about.vansAlt}
                width={640}
                height={260}
                maxWidth={640}
                priority
              />
            </div>
            <p className="mt-3 font-mono text-[0.75rem] tracking-wide">Werkbussen · Rijssen</p>
          </div>
        </div>
      </section>

      <LayerRule />

      <section data-section="feiten" className="bg-wit">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.facts.map((fact) => (
            <li key={fact} className="font-display text-[1.35rem] leading-snug">
              {fact}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-papier pt-14">
        <div className="mx-auto max-w-6xl px-5 pb-8">
          <h2 className="font-display text-4xl sm:text-5xl">{content.services.title}</h2>
          <p className="mt-4 max-w-2xl">{content.services.intro}</p>
        </div>
        <CoatStack />
      </section>

      <section data-section="projecten" className="bg-papier">
        <div className="mx-auto max-w-6xl px-5 pb-4 pt-16">
          <h2 className="font-display text-4xl sm:text-5xl">Projecten</h2>
          <p className="mt-4 max-w-2xl">Een selectie van opgeleverde projecten.</p>
        </div>
        <ul className="mx-auto max-w-6xl px-5">
          {featured.map((project, index) => {
            const cover = projectFrames(project)[0];
            return (
              <li key={project.slug} className="grid items-center gap-6 border-t border-inkt/15 py-8 md:grid-cols-2">
                <Link href={`/projecten/${project.slug}`} className={index % 2 ? "md:order-2" : ""}>
                  <HonestImage src={cover.src} alt={cover.alt} width={705} height={550} maxWidth={520} />
                </Link>
                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="font-mono text-[0.78rem] tracking-wide">
                    {project.place} · {project.date}
                    {project.client ? ` · ${project.client}` : ""}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-tight">{project.title}</h3>
                  <p className="mt-3">{project.summary}</p>
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
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <Link href="/projecten" className="inline-flex min-h-11 items-center font-medium text-link underline underline-offset-4">
            Alle projecten
          </Link>
        </div>
      </section>

      <LayerRule />

      <section data-section="reviews" className="bg-vlak">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl sm:text-5xl">{content.reviews.title}</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {quotes.map((quote) => (
              <li key={quote.name}>
                <figure className="border-t-2 border-inkt pt-4">
                  <blockquote className="font-display text-[1.45rem] leading-snug">{quote.text}</blockquote>
                  <figcaption className="mt-4 font-mono text-[0.75rem] tracking-wide">{quote.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-section="over-ons" className="bg-papier">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 py-16 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <HonestImage
              src={content.about.photo}
              alt={content.about.photoAlt}
              width={640}
              height={545}
              maxWidth={420}
            />
            <figcaption className="mt-3 max-w-sm text-[1rem]">{content.about.photoCaption}</figcaption>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-4xl sm:text-5xl">{content.about.title}</h2>
            <p className="mt-4 font-medium">{content.about.kicker}</p>
            <p className="mt-4">{content.about.text[0]}</p>
            <Link href="/over-ons" className="mt-6 inline-flex min-h-11 items-center text-link underline underline-offset-4">
              Meer over ons
            </Link>
          </div>
        </div>
      </section>

      <LayerRule />

      <section data-section="contact" className="bg-vlak">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Contact</h2>
            <p className="mt-4 max-w-md">{content.contact.text}</p>
            <p className="mt-6 font-display text-4xl leading-none">
              <a href={phoneHref} data-cta={ctaType(phoneHref)} className="underline-offset-4 hover:underline">
                {content.contact.phoneDisplay}
              </a>
            </p>
            <div className="mt-6">
              <CtaPair />
            </div>
          </div>
          <address className="not-italic">
            <p className="font-medium">{content.company.name}</p>
            <p className="mt-2">{content.contact.address}</p>
            <p>
              {content.contact.postalCode} {content.contact.city}
            </p>
            <p className="mt-4">
              <a href={mailHref} data-cta="mailen" className="text-link underline underline-offset-2">
                {content.contact.email}
              </a>
            </p>
            <p className="mt-4">
              <a
                href={content.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline underline-offset-2"
              >
                Route naar {content.contact.address}, {content.contact.city}
              </a>
            </p>
            <p className="mt-6 max-w-md text-[1rem]">{content.about.region}</p>
          </address>
        </div>
      </section>
    </>
  );
}
