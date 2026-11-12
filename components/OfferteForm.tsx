"use client";

import { content } from "@/content";
import { mailtoHref } from "@/lib/mail";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function OfferteForm() {
  const [error, setError] = useState("");
  const [href, setHref] = useState("");
  const { contact, offerte } = content;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const adres = String(data.get("adres") ?? "").trim();
    const toelichting = String(data.get("toelichting") ?? "").trim();
    const werk = data.getAll("werkzaamheden").map(String);

    if (werk.length === 0) {
      setError("Kies ten minste één soort werkzaamheden.");
      setHref("");
      return;
    }

    const body = [
      offerte.greeting,
      "",
      "Hierbij vraag ik een offerte aan via de website.",
      "",
      `Naam: ${naam}`,
      `Telefoon: ${telefoon}`,
      `E-mail: ${email}`,
      `Adres/plaats: ${adres || "niet ingevuld"}`,
      `Werkzaamheden: ${werk.join(", ")}`,
      "",
      "Toelichting:",
      toelichting || "geen",
    ].join("\n");

    const next = mailtoHref(contact.email, offerte.subject, body);
    setError("");
    setHref(next);
    window.location.href = next;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <p className="border-l-4 border-cyaan bg-vlak px-4 py-3">{offerte.intro}</p>
      <p>
        Liever direct contact? Bel{" "}
        <a href={`tel:${contact.phoneTel}`} data-cta="bellen" className="text-link underline underline-offset-2">
          {contact.phoneDisplay}
        </a>
        .
      </p>
      <p className="text-[1rem]">Velden met een sterretje zijn verplicht.</p>
      {error ? (
        <p role="alert" className="text-magenta-tekst">
          {error}
        </p>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="font-medium">Naam *</span>
          <input name="naam" required autoComplete="name" className="field mt-2" />
        </label>
        <label className="block">
          <span className="font-medium">Telefoon *</span>
          <input name="telefoon" type="tel" required autoComplete="tel" className="field mt-2" />
        </label>
        <label className="block md:col-span-2">
          <span className="font-medium">E-mail *</span>
          <input name="email" type="email" required autoComplete="email" className="field mt-2" />
        </label>
        <label className="block md:col-span-2">
          <span className="font-medium">Adres/plaats</span>
          <input name="adres" autoComplete="street-address" className="field mt-2" />
        </label>
      </div>

      <fieldset>
        <legend className="font-medium">Werkzaamheden *</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {offerte.workOptions.map((option) => (
            <label key={option} className="flex min-h-11 items-center gap-3 border border-inkt bg-wit px-3">
              <input type="checkbox" name="werkzaamheden" value={option} className="size-5 shrink-0 accent-inkt" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="font-medium">Toelichting</span>
        <textarea name="toelichting" className="field mt-2" />
      </label>

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
        data-cta="offerte"
        className="inline-flex min-h-12 items-center border-t-[3px] border-t-cyaan bg-link px-5 font-medium text-wit hover:border-t-magenta"
      >
        Verstuur offerteaanvraag
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
