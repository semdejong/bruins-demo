import { content } from "@/content";

const order = ["04", "03", "02", "01"] as const;

const color: Record<(typeof order)[number], string> = {
  "04": content.colors.groen,
  "03": content.colors.magenta,
  "02": content.colors.cyaan,
  "01": content.colors.inkt,
};

const height: Record<(typeof order)[number], number> = {
  "04": 3,
  "03": 4,
  "02": 3,
  "01": 5,
};

const bands = order.map((key, index) => ({
  key,
  h: height[key],
  fill: color[key],
  y: order.slice(0, index).reduce((sum, previous) => sum + height[previous], 0),
}));

/** Onbenoemde laagopbouw: aflak boven, ondergrond onder. Samen 15 px. */
export default function LayerRule({ draw = false }: { draw?: boolean }) {
  return (
    <svg
      viewBox="0 0 1000 15"
      width="100%"
      height="15"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="block"
    >
      {bands.map((band, index) => (
        <rect
          key={band.key}
          x="0"
          y={band.y}
          width="1000"
          height={band.h}
          fill={band.fill}
          className={draw ? "coat-draw" : undefined}
          style={draw ? { animationDelay: `${index * 90}ms` } : undefined}
        />
      ))}
    </svg>
  );
}
