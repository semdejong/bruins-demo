import { content } from "@/content";

const visual = [...content.layers].reverse();

const color: Record<string, string> = {
  "01": content.colors.inkt,
  "02": content.colors.cyaan,
  "03": content.colors.magenta,
  "04": content.colors.groen,
};

const thickness: Record<string, number> = {
  "01": 5,
  "02": 3,
  "03": 4,
  "04": 3,
};

/** Enige plek waar de vier laagnamen voluit staan. */
export default function LayerLegend() {
  return (
    <ol className="mt-6 max-w-md lg:mt-10" aria-label="Opbouw van een verflaag, van aflak naar ondergrond">
      {visual.map((layer, index) => {
        const h = thickness[layer.nr] ?? 3;
        return (
          <li key={layer.nr} className="grid grid-cols-[9.5rem_1fr] items-center gap-3 py-1">
            <span className="label-mono">
              {layer.nr} {layer.label}
            </span>
            <svg
              viewBox={`0 0 240 ${h}`}
              width="100%"
              height={h}
              preserveAspectRatio="none"
              aria-hidden="true"
              className="block"
            >
              <rect
                x="0"
                y="0"
                width="240"
                height={h}
                fill={color[layer.nr]}
                className="coat-draw"
                style={{ animationDelay: `${index * 90}ms` }}
              />
            </svg>
          </li>
        );
      })}
    </ol>
  );
}
