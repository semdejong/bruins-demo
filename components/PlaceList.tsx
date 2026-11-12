import { content } from "@/content";

export default function PlaceList() {
  const [towns, regions = ""] = content.contact.footerPlaces.split(" — ");
  return (
    <div className="mt-4 max-w-md">
      <p className="leading-relaxed">{towns.split(", ").join(" · ")}</p>
      <p className="mt-2">{regions}</p>
    </div>
  );
}
