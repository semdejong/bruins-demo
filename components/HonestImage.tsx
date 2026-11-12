import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidth?: number;
  /** Vaste hoogte in px, breedte volgt de verhouding. Voor het logo. */
  lockHeight?: number;
  priority?: boolean;
  className?: string;
};

/** Toont een foto nooit groter dan het bronbestand. */
export default function HonestImage({
  src,
  alt,
  width,
  height,
  maxWidth,
  lockHeight,
  priority = false,
  className = "",
}: Props) {
  const cap = maxWidth ?? width;
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      sizes={`${cap}px`}
      className={className}
      style={
        lockHeight
          ? { height: lockHeight, width: "auto", maxHeight: lockHeight }
          : { width: "100%", height: "auto", maxWidth: cap }
      }
    />
  );
}
