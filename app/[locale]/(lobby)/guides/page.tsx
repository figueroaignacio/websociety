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
  const t = useTranslations("curriculum");
  const lang = useLocale();

  const filteredGuides = guides.filter((guide) => guide.locale === lang);

  if (filteredGuides.length < 0) {
    return <NoGuidesMessage />;
  }

  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-purple-500 w-[calc(100%+2rem)] ml-[-1rem] h-[calc(12rem+2.5rem)] mt-[-1.25rem]"></div>
      <section className="relative -mt-20 flex flex-col justify-center items-center border py-6 sm:py-8 md:py-12 rounded-md shadow-sm bg-card mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 text-center">
          {t("title")}
        </h1>
        <p className="text-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-center max-w-2xl">
          {t("description")}
        </p>
        <ul className="grid gap-4 grid-cols-1 w-full">
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
      </section>
    </>
  );
}
