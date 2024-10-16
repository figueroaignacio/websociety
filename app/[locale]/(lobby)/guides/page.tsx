// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { GuideCard } from "@/components/guides/guide-card";
import { NoGuidesMessage } from "@/components/guides/no-guides-message";

// Content
import { guides } from "@content";

// Utils
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Metadata
import { MetadataParams } from "@/types/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "guidesConfig" });

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

interface LearnPageProps {
  params: { locale: string };
}

export default function LearnPage({ params: { locale } }: LearnPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("guides");
  const lang = useLocale();

  const filteredGuides = guides.filter((guide) => guide.locale === lang);

  if (filteredGuides.length < 0) {
    return <NoGuidesMessage />;
  }

  return (
    <section className="flex flex-col">
      <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
      <p className="text-foreground mb-4">{t("description")}</p>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-3 bg-card rounded-md hidden lg:block">
          <p className="text-center mt-5">Filter goes here.</p>
        </div>
        <div className="lg:col-span-9 col-span-12">
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {filteredGuides.map((guide) => {
              return (
                <li className="h-full" key={guide.slug}>
                  <GuideCard
                    slug={guide.slug}
                    title={guide.title}
                    description={guide.description ?? ""}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
