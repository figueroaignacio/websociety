// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { GuideCard } from "@/modules/guides/components/guide-card";
import { NoGuidesMessage } from "@/modules/guides/components/no-guides-message";

// Content
import { guides } from "@content";

// Utils
import { sortGuides } from "@/modules/guides/utils/sortGuides";

export function LatestGuides() {
  const t = useTranslations("latest");
  const locale = useLocale();
  const latestGuides = sortGuides(guides)
    .filter((guide) => guide.locale === locale)
    .slice(0, 4);

  if (latestGuides.length < 0) {
    return <NoGuidesMessage />;
  }

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <div>
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
          {latestGuides.map((guide, index) => (
            <li key={index}>
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
