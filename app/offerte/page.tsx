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
      <header data-section="pagina" className="mx-auto max-w-3xl px-5 pb-4 pt-12 sm:pt-16">
        <h1 className="font-display text-[2.5rem] leading-none sm:text-5xl">{content.offerte.title}</h1>
      </header>
      <div data-section="offerte" className="mx-auto max-w-3xl px-5 pb-16">
        <OfferteForm />
      </div>
    </article>
  );
}
