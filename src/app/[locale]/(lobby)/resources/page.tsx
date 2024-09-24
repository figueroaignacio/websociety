// Hooks
import { useTranslations } from "next-intl";

// Components
import { FramerH1, FramerParagraph, FramerSection } from "@/components/framer";
import { ResourceCard } from "@/components/resources/resource-card";

// Icons

// Content
import { resources } from "@content";

// Utils
import { unstable_setRequestLocale } from "next-intl/server";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants/animations";

// Types
import { MetadataParams } from "@/types/types";

export default function ResourcesPage({ params: { locale } }: MetadataParams) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("resources");

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
      className="flex flex-col top-12 relative"
    >
      <div>
        <FramerH1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="font-bold text-3xl mb-2"
        >
          {t("title")}
        </FramerH1>
        <FramerParagraph
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-foreground"
        >
          {t("description")}
        </FramerParagraph>
      </div>
      <div className="grid grid-cols-10 gap-6 mt-12">
        <div className="col-span-3 bg-slate-700"></div>
        <div className="col-span-7">
          <ul className="grid grid-cols-2 gap-3">
            {resources.map((resource, index) => (
              <li key={index}>
                <ResourceCard
                  description={resource.description}
                  title={resource.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FramerSection>
  );
}
