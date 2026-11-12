import { content } from "@/content";

export default function PlaceList() {
  const [towns, regions = ""] = content.contact.footerPlaces.split(" — ");
  return (
    <div className="mt-4 max-w-md">
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {towns.split(", ").map((place) => (
          <li key={place}>{place}</li>
        ))}
      </ul>
      <p className="mt-3">{regions}</p>
    </div>
  );
}
