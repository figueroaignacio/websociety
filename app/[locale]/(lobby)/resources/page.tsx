import { ResourceCard } from "@/components/resources/resource-card";
import { resourcesFilter } from "@/utils/resourcesFilter";
import { resources } from "@content";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Metadata
import { FilterByCategory } from "@/components/filter-by-category";
import { MetadataParams } from "@/types/types";

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
  unstable_setRequestLocale(locale);
  const t = useTranslations("resources");
  const lang = useLocale();

  // Obtener la categoría seleccionada de los searchParams
  const selectedCategory = searchParams?.category || null;

  // Filtrar los recursos por idioma
  const filteredResources = resources.filter(
    (resource) => resource.locale === lang
  );

  // Obtener las categorías únicas
  const categories = Array.from(
    new Set(filteredResources.flatMap((resource) => resource.categories || []))
  );

  // Filtrar los recursos según la categoría seleccionada
  const { filteredResources: filteredAndSortedPosts } = resourcesFilter({
    categories,
    resources: filteredResources,
    selectedCategory,
  });

  return (
    <section className="flex flex-col top-12 relative">
      <div>
        <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
        <p className="text-foreground">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
        <div className="sticky top-16 left-0 md:col-span-3">
          <FilterByCategory
            categories={categories}
            selectedCategory={selectedCategory}
          />
        </div>
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
