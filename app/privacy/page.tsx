import type { Metadata } from "next";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring van dit concept voor Bruins Schilderwerken. Cookieloos meetscript, geen opgeslagen formulieren.",
};

export default function PrivacyPage() {
  const mail = `mailto:${content.contact.email}`;
  return (
    <article data-section="privacy" className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <h1 className="font-display text-[2.5rem] leading-none sm:text-5xl">{content.privacy.title}</h1>
      <div className="mt-6 space-y-4">
        {content.privacy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6">
        <a href={mail} data-cta="mailen" className="text-link underline underline-offset-2">
          {content.contact.email}
        </a>
      </p>
    </article>
  );
}
