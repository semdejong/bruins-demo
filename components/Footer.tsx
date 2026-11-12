import HonestImage from "@/components/HonestImage";
import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";

function links() {
  return content.nav.flatMap((item) =>
    "children" in item && item.children
      ? [{ label: item.label, href: item.href }, ...item.children]
      : [{ label: item.label, href: item.href }],
  );
}

export default function Footer() {
  const { contact, company } = content;
  const phoneHref = `tel:${contact.phoneTel}`;
  const mailHref = `mailto:${contact.email}`;

  return (
    <footer data-section="footer" className="on-ink bg-inkt text-papier">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 pb-28 min-[1100px]:grid-cols-12 min-[1100px]:pb-14">
        <div className="min-[1100px]:col-span-5">
          <p className="inline-block bg-wit px-2 py-1.5">
            <HonestImage
              src={company.logo}
              alt=""
              width={company.logoWidth}
              height={company.logoHeight}
              lockHeight={36}
            />
          </p>
          <p className="mt-5 font-display text-3xl leading-none">{company.name}</p>
          <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-papier/85">{company.tagline}</p>
        </div>

        <nav aria-label="Footer" className="min-[1100px]:col-span-3">
          <ul className="space-y-1">
            {links().map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                Offerte
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic min-[1100px]:col-span-4">
          <p>{contact.address}</p>
          <p>
            {contact.postalCode} {contact.city}
          </p>
          <p className="mt-3">
            <a href={phoneHref} data-cta={ctaType(phoneHref)} className="underline underline-offset-2">
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a href={mailHref} data-cta="mailen" className="break-all underline underline-offset-2">
              {contact.email}
            </a>
          </p>
          <p className="mt-6 text-[0.95rem]">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Concept door Sleads
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
}
