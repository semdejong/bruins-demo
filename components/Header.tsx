"use client";

import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import LayerRule from "@/components/LayerRule";
import HonestImage from "@/components/HonestImage";
import SleadsBadge from "@/components/SleadsBadge";

function Caret({ open }: { open: boolean }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className={open ? "rotate-180" : ""}>
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const mobileId = useId();
  const primary = content.nav[0];
  const rest = content.nav.slice(1);
  const phoneHref = `tel:${content.contact.phoneTel}`;
  const [pathSeen, setPathSeen] = useState(pathname);
  if (pathname !== pathSeen) {
    setPathSeen(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;
    function onPointer(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const linkClass = "inline-flex min-h-11 items-center text-[1rem] font-medium whitespace-nowrap";

  return (
    <header data-section="header" className="sticky top-0 z-40 bg-papier">
      <div className="border-b border-inkt/15">
        <div className="mx-auto flex max-w-6xl justify-end px-4 min-[1100px]:px-6">
          <SleadsBadge />
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 min-[1100px]:gap-5 min-[1100px]:px-6">
        <Link href="/" className="shrink-0">
          <HonestImage
            src={content.company.logo}
            alt={content.company.name}
            width={content.company.logoWidth}
            height={content.company.logoHeight}
            lockHeight={40}
            priority
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="ml-4 hidden items-center gap-5 whitespace-nowrap min-[1100px]:flex">
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className={`${linkClass} gap-1.5`}
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              onClick={() => setServicesOpen((open) => !open)}
            >
              {primary.label}
              <Caret open={servicesOpen} />
            </button>
            {servicesOpen ? (
              <div id={menuId} className="absolute left-0 top-full z-50 mt-1 min-w-56 border border-inkt bg-wit py-1">
                <Link href={primary.href} className="block min-h-11 px-4 py-2.5 hover:bg-vlak">
                  Alles wat wij doen
                </Link>
                {primary.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    aria-current={pathname === child.href ? "page" : undefined}
                    className="block min-h-11 px-4 py-2.5 hover:bg-vlak aria-[current=page]:underline"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {rest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`${linkClass} aria-[current=page]:underline aria-[current=page]:underline-offset-8`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 whitespace-nowrap min-[1100px]:flex">
          <a href={phoneHref} data-cta={ctaType(phoneHref)} className={`${linkClass} text-link underline underline-offset-4`}>
            {content.contact.phoneDisplay}
          </a>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="inline-flex min-h-11 items-center border-t-[3px] border-t-cyaan bg-link px-4 text-[1rem] font-medium text-wit hover:border-t-magenta"
          >
            Offerte
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center border border-inkt px-3 text-[1rem] font-medium min-[1100px]:hidden"
          aria-expanded={mobileOpen}
          aria-controls={mobileId}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Sluit" : "Menu"}
        </button>
      </div>
      <LayerRule draw />

      {mobileOpen ? (
        <nav
          id={mobileId}
          aria-label="Mobiel menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-inkt/15 bg-papier px-4 py-3 pb-28 min-[1100px]:hidden"
        >
          <Link href={primary.href} className="flex min-h-11 items-center font-medium">
            {primary.label}
          </Link>
          <div className="mb-2 ml-3 border-l border-inkt/20 pl-3">
            {primary.children?.map((child) => (
              <Link key={child.href} href={child.href} className="flex min-h-11 items-center">
                {child.label}
              </Link>
            ))}
          </div>
          {rest.map((item) => (
            <Link key={item.href} href={item.href} className="flex min-h-11 items-center font-medium">
              {item.label}
            </Link>
          ))}
          <a href={phoneHref} data-cta={ctaType(phoneHref)} className="mt-2 flex min-h-11 items-center text-link underline">
            {content.contact.phoneDisplay}
          </a>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="mt-2 inline-flex min-h-11 items-center border-t-[3px] border-t-cyaan bg-link px-4 font-medium text-wit"
          >
            Offerte
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
