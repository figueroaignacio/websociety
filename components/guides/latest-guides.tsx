import { guides } from "#site/content";
import { sortGuides } from "@/utils/sortGuides";
import { GuideCard } from "./guide-card";

export function LatestGuides() {
  const latestGuides = sortGuides(guides).slice(0, 4);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Latest Guides</h2>
      <div>
        {latestGuides?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-2 auto-rows-fr">
            {latestGuides.map((guide, index) => (
              <li
                key={guide.slug}
                className={`fade shadow-lg rounded-lg overflow-hidden ${
                  index === 0 ? "col-span-1" : "col-span-1"
                }`}
              >
                <GuideCard
                  title={guide.title}
                  description={guide.description ?? ""}
                  slug={guide.slug}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Nothing to see yet</p>
        )}
      </div>
    </section>
  );
}
