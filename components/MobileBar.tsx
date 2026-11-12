import LayerRule from "@/components/LayerRule";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";

export default function MobileBar() {
  const phoneHref = `tel:${content.contact.phoneTel}`;
  return (
    <div data-section="mobiele-balk" className="fixed inset-x-0 bottom-0 z-40 min-[1100px]:hidden">
      <LayerRule />
      <div className="grid grid-cols-2 bg-papier">
        <a
          href={phoneHref}
          data-cta={ctaType(phoneHref)}
          className="inline-flex min-h-14 items-center justify-center border-r border-inkt/15 font-medium text-inkt"
        >
          Bellen
        </a>
        <Link
          href="/offerte"
          data-cta="offerte"
          className="inline-flex min-h-14 items-center justify-center bg-link font-medium text-wit"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
