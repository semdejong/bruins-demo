"use client";

import { content } from "@/content";
import { mailtoHref } from "@/lib/mail";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [href, setHref] = useState("");
  const { contact, offerte } = content;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const body = [
      offerte.greeting,
      "",
      "Hierbij een bericht via de website.",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      `E-mail: ${email}`,
      "",
      "Bericht:",
      bericht || "geen",
    ].join("\n");
    const next = mailtoHref(contact.email, contact.mailSubject, body);
    setHref(next);
    window.location.href = next;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <p className="border-l-4 border-cyaan bg-vlak px-4 py-3">{offerte.intro}</p>
      <div className="grid gap-5">
        <label className="block">
          <span className="font-medium">Naam *</span>
          <input name="naam" required autoComplete="name" className="field mt-2" />
        </label>
        <label className="block">
          <span className="font-medium">Telefoon *</span>
          <input name="telefoon" type="tel" required autoComplete="tel" className="field mt-2" />
        </label>
        <label className="block">
          <span className="font-medium">E-mail *</span>
          <input name="email" type="email" required autoComplete="email" className="field mt-2" />
        </label>
        <label className="block">
          <span className="font-medium">Bericht</span>
          <textarea name="bericht" className="field mt-2" />
        </label>
      </div>
      <label className="flex min-h-11 items-start gap-3">
        <input type="checkbox" name="privacy" required className="mt-1 size-5 shrink-0 accent-inkt" />
        <span>
          Ik heb de{" "}
          <Link href="/privacy" className="text-link underline underline-offset-2">
            privacyverklaring
          </Link>{" "}
          gelezen. *
        </span>
      </label>
      <button
        type="submit"
        data-cta="mailen"
        className="inline-flex min-h-12 items-center border-t-[3px] border-t-cyaan bg-link px-5 font-medium text-wit hover:border-t-magenta"
      >
        Verstuur bericht
      </button>
      {href ? (
        <p>
          Uw mailprogramma zou nu moeten openen. Gebeurt dat niet, open het bericht dan zelf:{" "}
          <a href={href} data-cta="mailen" className="text-link underline underline-offset-2">
            Open het e-mailbericht
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
