// Hooks
import { useTranslations } from "next-intl";

// Components
import { BackButton } from "@/components/back-button";
import { FramerDiv, FramerSection } from "@/components/framer/index";
import { HeroBg } from "@/components/hero-bg";

// Icons
import { Rocket } from "lucide-react";

// Config - Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants/animations";

// Utils
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Metadata
import { MetadataParams } from "@/types/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "challengesConfig" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ChallengesPage({ params: { locale } }: MetadataParams) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("challenges");

  return (
    <FramerSection
      className="flex justify-center items-center min-h-[85dvh]"
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
    >
      <HeroBg />
      <div className="border-y border-dashed py-12 max-w-2xl">
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col justify-center items-center bg-card gap-3 text-center rounded-md p-16 border"
        >
          <div className="border-2 border-dashed rounded-full p-3">
            <Rocket size="1.5rem" />
          </div>
          <div>
            <h2>{t("fallbackTitle")}</h2>
          </div>
          <div>
            <p className="text-muted-foreground">{t("fallbackDescription")}</p>
          </div>
          <BackButton />
        </FramerDiv>
      </div>
    </FramerSection>
  );
}
