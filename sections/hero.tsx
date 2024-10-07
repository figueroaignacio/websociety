"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Components
import Image from "next/image";
import { BgBorders } from "../components/bg-borders";
import {
  FramerDiv,
  FramerH1,
  FramerH2,
  FramerSection,
} from "../components/framer";

// Images - Icons
import HeroCodeImageDark from "@/assets/images/home-hero-dark.svg";
import HeroCodeImageLight from "@/assets/images/home-hero-light.svg";
import { ArrowDown } from "lucide-react";

// Constants
import { FADE_UP_ANIMATION_VARIANTS } from "../constants/animations";

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
    >
      <BgBorders />
      <div className="py-28 md:py-32">
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-center">
            <div className="border-b border-t border-dashed py-10">
              <FramerH1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="font-extrabold text-4xl lg:text-5xl"
              >
                <span>{t("title")}</span>{" "}
                <span className="gradient-text">{t("label")}</span>
              </FramerH1>
            </div>
            <FramerH2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-sm lg:text-lg text-muted-foreground mt-4 max-w-2xl text-center mx-auto"
            >
              {t("description")}
            </FramerH2>
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
          className="flex justify-center"
        >
          {isThemeResolved && (
            <Image
              src={theme === "dark" ? HeroCodeImageDark : HeroCodeImageLight}
              alt="Home hero code"
              width={0}
              height={0}
              className="rounded-md bg-card border"
              priority
            />
          )}
        </FramerDiv>
      </div>
    </FramerSection>
  );
}
