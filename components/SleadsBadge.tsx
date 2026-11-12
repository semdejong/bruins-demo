/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="inline-flex min-h-11 items-center gap-2 text-[11px] font-medium text-inkt sm:text-xs print:hidden"
    >
      <span className="h-[3px] w-3 bg-cyaan" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
