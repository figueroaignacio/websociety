// Hooks
import { useTranslations } from "next-intl";

// Components
import { ResourceCard } from "@/components/resources/resource-card";

// Icons

// Content
import { resources } from "@content";

// Utils
import { unstable_setRequestLocale } from "next-intl/server";

// Constants

// Types
import { MetadataParams } from "@/types/types";

export default function ResourcesPage({ params: { locale } }: MetadataParams) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("resources");

  return (
    <section className="flex flex-col top-12 relative">
      <div>
        <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
        <p className="text-foreground">{t("description")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 mt-12">
        <div className="hidden md:block md:col-span-3 dark:bg-gray-500/25 bg-gray-200 rounded-md"></div>
        <div className="col-span-10 md:col-span-7">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resources.map((resource, index) => (
              <li key={index}>
                <ResourceCard
                  pageUrl={resource.pageUrl}
                  description={resource.description}
                  title={resource.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
