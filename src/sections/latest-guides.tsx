// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { GuideCard } from "@/components/guides/guide-card";

// Content
import { guides } from "#site/content";

// Utils
import { sortGuides } from "@/utils/sortGuides";

export function LatestGuides() {
  const t = useTranslations("latestGuides");
  const locale = useLocale();
  const latestGuides = sortGuides(guides)
    .filter((guide) => guide.locale === locale)
    .slice(0, 4);

  if (latestGuides.length < 0) {
    return (
      <section className="py-36 text-center">
        <p className="text-xl">Nothing to see yet</p>
      </section>
    );
  }

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <div>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
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
      </div>
    </section>
  );
}
