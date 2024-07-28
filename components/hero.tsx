"use client";

// Components
import Image from "next/image";
import { FadeUp } from "./framer/fade-up";
import { HeroBg } from "./layout/hero-bg";

// Images - Icons
import HeroCodeImageDark from "@/assets/images/home-hero-dark.svg";
import HeroCodeImageLight from "@/assets/images/home-hero-light.svg";

import { useTheme } from "next-themes";

// Constants
import { home } from "@/constants/home";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative">
      <HeroBg />
      <div className="py-28 md:py-44">
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-center">
            <FadeUp delay={0.4}>
              <span className="font-bold text-6xl lg:text-8xl">Welcome to</span>
            </FadeUp>
            <FadeUp delay={0.5}>
              <h1 className="font-bold text-6xl lg:text-8xl">
                <span className="gradient-text">{home.title}</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.6}>
              <p className="text-sm opacity-70">{home.description}</p>
            </FadeUp>
          </div>
        </div>
        <FadeUp delay={0.7}>
          <div className="w-full flex py-10 flex-col items-center gap-2 text-muted-foreground">
            <span>Scroll down</span>
            <FadeUp delay={0.8}>
              <ArrowDown className="border-[1px] border-border w-8 h-8 rounded-full p-1 animate-bounce" />
            </FadeUp>
          </div>
        </FadeUp>
        <div>
          <FadeUp delay={0.6}>
            <div className="block md:hidden border-[1px]">
              <Image
                src={theme === "dark" ? HeroCodeImageDark : HeroCodeImageLight}
                alt="Home hero code"
                width={0}
                height={0}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
