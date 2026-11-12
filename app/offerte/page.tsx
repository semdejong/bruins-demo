import type { Metadata } from "next";
import OfferteForm from "@/components/OfferteForm";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description:
    "Vraag een offerte aan bij Bruins Schilderwerken. Het formulier opent uw eigen mailprogramma; er wordt niets automatisch verstuurd.",
};

export default function OffertePage() {
  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <h1 className="max-w-3xl font-display text-[2.5rem] leading-[1.05] sm:text-5xl">{content.offerte.title}</h1>
        <p className="mt-5 max-w-2xl">{content.offerte.aside}</p>
      </header>
      <div data-section="offerte" className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="font-display text-3xl">{content.company.name}</p>
          <p className="mt-4">
            <a href={`tel:${content.contact.phoneTel}`} data-cta="bellen" className="text-link underline underline-offset-2">
              {content.contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${content.contact.email}`} data-cta="mailen" className="text-link underline underline-offset-2">
              {content.contact.email}
            </a>
          </p>
          <p className="mt-4">
            {content.contact.address}
            <br />
            {content.contact.postalCode} {content.contact.city}
          </p>
        </aside>
        <div className="lg:col-span-8">
          <OfferteForm />
        </div>
      </div>
    </article>
  );
}
