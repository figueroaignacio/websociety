// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { FilterByCategory } from "@/components/shared/filter-by-category";
import { ResourceCard } from "@/modules/resources/ui/resource-card";
import { resourcesFilter } from "@/modules/resources/utils/resourcesFilter";

// Content
import { resources } from "@content";

// Utils
import { getTranslations, setRequestLocale } from "next-intl/server";

// Metadata
import { MetadataParams } from "@/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "resourcesConfig" });

  return {
    title: t("title"),
    description: t("description"),
    authors: [
      {
        name: t("author.name"),
        url: t("author.url"),
      },
    ],
    creator: t("creator"),
  };
}

interface ResourcesPageProps {
  params: { locale: string };
  searchParams: {
    page?: string;
    category?: string;
  };
}

export default function ResourcesPage({
  searchParams,
  params: { locale },
}: ResourcesPageProps) {
  setRequestLocale(locale);
  const t = useTranslations("resources");
  const lang = useLocale();

  const selectedCategory = searchParams?.category || null;

  const filteredResources = resources.filter(
    (resource) => resource.locale === lang
  );

  const categories = Array.from(
    new Set(filteredResources.flatMap((resource) => resource.categories || []))
  );

  const { filteredResources: filteredAndSortedPosts } = resourcesFilter({
    categories,
    resources: filteredResources,
    selectedCategory,
  });

  return (
    <section className="flex flex-col lg:px-5 lg:py-12 py-4">
      <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
      <p className="text-foreground">{t("description")}</p>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <FilterByCategory
          categories={categories}
          selectedCategory={selectedCategory}
        />
        <div className="col-span-10 md:col-span-9">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredAndSortedPosts.map((resource, index) => (
              <li key={index}>
                <ResourceCard
                  pageUrl={resource.pageUrl}
                  description={resource.description}
                  title={resource.title}
                  image={resource.img}
                  tags={resource.categories ?? []}
                  slug={resource.slug}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
