import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bruins Schilderwerken, Kryptonstraat 39b-09, 7463 PB Rijssen. Bel 06-36 12 44 88 of mail info@bruinsschilderwerken.nl.",
};

export default function ContactPage() {
  const { contact, company } = content;
  const phoneHref = `tel:${contact.phoneTel}`;
  const mailHref = `mailto:${contact.email}`;

  return (
    <article>
      <header data-section="pagina" className="mx-auto max-w-6xl px-5 pb-4 pt-12 sm:pt-16">
        <h1 className="font-display text-[2.5rem] leading-none sm:text-5xl">Contact</h1>
        <p className="mt-5 max-w-2xl">{contact.text}</p>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 lg:grid-cols-12">
        <address className="not-italic lg:col-span-5">
          <p className="font-display text-3xl">{company.name}</p>
          <p className="mt-4">{contact.address}</p>
          <p>
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-4">
            <a href={phoneHref} data-cta={ctaType(phoneHref)} className="text-link underline underline-offset-2">
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={mailHref} data-cta="mailen" className="text-link underline underline-offset-2">
              {contact.email}
            </a>
          </p>
          <p className="mt-4">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link underline underline-offset-2"
            >
              Route naar {contact.address}, {contact.city}
            </a>
          </p>
          <p className="mt-6 max-w-md">{content.about.region}</p>
        </address>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
