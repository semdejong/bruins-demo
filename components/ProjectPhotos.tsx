"use client";

import Lightbox from "@/components/Lightbox";
import type { Frame } from "@/lib/frames";
import { useState } from "react";

export default function ProjectPhotos({ photos }: { photos: Frame[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {photos.map((photo, photoIndex) => (
          <li key={photo.src} className={photos.length === 1 ? "sm:col-span-2" : undefined}>
            <button type="button" className="block w-full max-w-[705px] text-left" onClick={() => setIndex(photoIndex)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="h-auto w-full" />
              <span className="mt-2 block font-mono text-[0.72rem] tracking-wide text-link">Vergroot foto</span>
            </button>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <Lightbox photos={photos} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
      ) : null}
    </>
  );
}
