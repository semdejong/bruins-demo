import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";

export default function CtaPair({ tone = "light" }: { tone?: "light" | "ink" }) {
  const phoneHref = `tel:${content.contact.phoneTel}`;
  const phoneClass =
    tone === "ink"
      ? "inline-flex min-h-11 items-center bg-wit px-4 font-medium text-inkt"
      : "inline-flex min-h-11 items-center border border-inkt bg-wit px-4 font-medium text-inkt";
  const offerClass =
    tone === "ink"
      ? "inline-flex min-h-11 items-center border border-papier border-t-[3px] border-t-cyaan px-4 font-medium text-papier hover:border-t-magenta"
      : "inline-flex min-h-11 items-center border-t-[3px] border-t-cyaan bg-link px-4 font-medium text-wit hover:border-t-magenta";

  return (
    <div className="flex flex-wrap gap-3">
      <a href={phoneHref} data-cta={ctaType(phoneHref)} className={phoneClass}>
        Bel {content.contact.phoneDisplay}
      </a>
      <Link href="/offerte" data-cta="offerte" className={offerClass}>
        Offerte
      </Link>
    </div>
  );
}
