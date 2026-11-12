/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed bottom-[5.25rem] left-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-[2px] border border-inkt/15 bg-wit px-3 text-[11px] font-medium text-inkt min-[1100px]:bottom-4 min-[1100px]:left-4 sm:text-xs print:hidden"
    >
      <span className="h-[3px] w-3 bg-cyaan" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
