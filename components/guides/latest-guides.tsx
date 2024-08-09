// Components
import { GuideCard } from "./guide-card";

// Content
import { guides } from "#site/content";

// Utils
import { sortGuides } from "@/utils/sortGuides";

export function LatestGuides() {
  const latestGuides = sortGuides(guides).slice(0, 4);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Latest Guides</h2>
      <div>
        {latestGuides?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 auto-rows-fr">
            {latestGuides.map((guide, index) => (
              <li key={guide.slug}>
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
