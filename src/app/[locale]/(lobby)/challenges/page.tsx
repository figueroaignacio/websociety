// Hooks
import { useTranslations } from "next-intl";

// Components
import { BackButton } from "@/components/back-button";
import { FramerDiv, FramerSection } from "@/components/framer/index";
import { HeroBg } from "@/components/layout/hero-bg";

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
      className="flex justify-center items-center min-h-[100dvh]"
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
      <div className="border-t border-b border-dashed py-12 max-w-2xl">
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col justify-center items-center bg-card gap-3 text-center rounded-md p-16"
        >
          <div className="border-2 rounded-full p-3">
            <Rocket size="1.5rem" />
          </div>
          <div>
            <p className="opacity-75">{t("fallback")}</p>
          </div>
          <BackButton />
        </FramerDiv>
      </div>
    </FramerSection>
  );
}
