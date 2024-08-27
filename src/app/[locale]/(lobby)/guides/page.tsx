// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { FramerH1, FramerLi, FramerSection } from "@/components/framer";
import { GuideCard } from "@/components/guides/guide-card";

// Content
import { guides } from "#site/content";

// Constants / Config
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from "@/constants/animations";

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

  return (
    <FramerSection
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="flex flex-col gap-12 mt-24 max-w-4xl mx-auto"
    >
      <FramerH1
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="font-bold text-2xl lg:text-4xl text-center text-muted-foreground"
      >
        {t("title")}
      </FramerH1>
      {filteredGuides.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {filteredGuides.map((guide) => {
            return (
              <FramerLi
                variants={FADE_LEFT_ANIMATION_VARIANTS}
                className="h-full"
                key={guide.slug}
              >
                <GuideCard
                  slug={guide.slug}
                  title={guide.title}
                  description={guide.description ?? ""}
                />
              </FramerLi>
            );
          })}
        </ul>
      ) : (
        <section className="py-36 text-center">
          <p className="text-xl">xd</p>
        </section>
      )}
    </FramerSection>
  );
}
