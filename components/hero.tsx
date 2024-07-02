"use client";

// Components
import Image from "next/image";

// Images - Icons
import HeroCodeImageDark from "@/assets/images/home-hero-dark.svg";
import HeroCodeImageLight from "@/assets/images/home-hero-light.svg";
import { ArrowDown } from "lucide-react";

import { useTheme } from "next-themes";

// Constants
import { home } from "@/constants/home";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="py-32">
      <div className="flex items-center gap-3 ">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-6xl">
            Welcome to <span className="gradient-text">{home.title}</span>
          </h1>
          <p className="text-sm opacity-70">{home.description}</p>
        </div>
        <div>
          <Image
            src={theme === "dark" ? HeroCodeImageDark : HeroCodeImageLight}
            alt="Home hero code"
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <ArrowDown className="border-zinc-950 border-1 animate-bounce" />
      </div>
    </section>
  );
}
