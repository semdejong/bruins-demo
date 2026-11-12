"use client";

import type { Frame } from "@/lib/frames";
import { useEffect, useRef } from "react";

type Props = {
  photos: Frame[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export default function Lightbox({ photos, index, onClose, onIndex }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const count = photos.length;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndex((index + 1) % count);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndex((index - 1 + count) % count);
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = [...panelRef.current.querySelectorAll<HTMLElement>("button")];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [count, index, onClose, onIndex]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-inkt/92 p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${photo.alt} Foto ${index + 1} van ${count}.`}
        className="max-h-[100dvh] w-full max-w-[760px] overflow-y-auto bg-papier p-3 sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[0.78rem] tracking-wide">
            {index + 1} / {count}
          </p>
          <button ref={closeRef} type="button" className="min-h-11 px-3 font-medium" onClick={onClose}>
            Sluiten
          </button>
        </div>
        {/* Eerlijke maat: niet groter dan 705×550. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="mx-auto mt-2 h-auto w-auto max-w-full"
          style={{ maxWidth: "min(92vw, 705px)", maxHeight: "min(58vh, 550px)" }}
        />
        <p className="mt-3 text-[1rem] leading-relaxed">{photo.alt}</p>
        {count > 1 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="min-h-11 border border-inkt px-4"
              onClick={() => onIndex((index - 1 + count) % count)}
            >
              Vorige
            </button>
            <button
              type="button"
              className="min-h-11 border border-inkt bg-inkt px-4 text-papier"
              onClick={() => onIndex((index + 1) % count)}
            >
              Volgende
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
