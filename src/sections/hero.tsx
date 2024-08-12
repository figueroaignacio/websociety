"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import {
  FramerDiv,
  FramerH1,
  FramerParagraph,
  FramerSection,
  FramerSpan,
} from "@/components/framer";
import { HeroBg } from "@/components/layout/hero-bg";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Images - Icons
import HeroCodeImageDark from "@/assets/images/home-hero-dark.svg";
import HeroCodeImageLight from "@/assets/images/home-hero-light.svg";
import { ArrowDown } from "lucide-react";

// Constants
import { FADE_UP_ANIMATION_VARIANTS } from "@/constants/animations";

export function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [isThemeResolved, setIsThemeResolved] = useState(false);

  const t = useTranslations("hero");

  useEffect(() => {
    setIsThemeResolved(true);
  }, [resolvedTheme]);

  return (
    <FramerSection
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="relative"
    >
      <HeroBg />
      <div className="py-28 md:py-44">
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-center">
            <FramerDiv variants={FADE_UP_ANIMATION_VARIANTS}>
              <Badge>Indev Version</Badge>
            </FramerDiv>
            <FramerSpan
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-bold text-5xl lg:text-8xl"
            >
              {t("subHeading")}
            </FramerSpan>
            <FramerH1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-bold text-5xl lg:text-8xl"
            >
              <span className="gradient-text">{t("title")}</span>
            </FramerH1>
            <FramerParagraph
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-sm opacity-70"
            >
              {t("description")}
            </FramerParagraph>
          </div>
        </div>
        <FramerDiv
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-full flex py-10 flex-col items-center gap-2 text-muted-foreground"
        >
          <span>Scroll down</span>
          <FramerDiv variants={FADE_UP_ANIMATION_VARIANTS}>
            <ArrowDown className="border-[1px] border-border w-8 h-8 rounded-full p-1 animate-bounce" />
          </FramerDiv>
        </FramerDiv>
        <FramerDiv
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex justify-center border-[1px] rounded-lg border-[#f5f5f510/5] border-x dark:border-purple-400/10 border-dashed p-6"
        >
          {isThemeResolved && (
            <Image
              src={theme === "dark" ? HeroCodeImageDark : HeroCodeImageLight}
              alt="Home hero code"
              width={0}
              height={0}
              className="rounded-md bg-card"
              priority
            />
          )}
        </FramerDiv>
      </div>
    </FramerSection>
  );
}
