// Components
import { GuideCard } from "@/components/guides/guide-card";

// Content
import { guides } from "#site/content";

// Constants / Config
import { guides as g, guidesConfig } from "@/constants/guides";

// Metadata
import { FramerDiv, FramerH1, FramerSection } from "@/components/framer";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from "@/constants/animations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: guidesConfig.title,
  description: guidesConfig.description,
};

export default function LearnPage() {
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
      className="flex flex-col gap-12 mt-24"
    >
      <FramerH1
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="font-bold text-2xl lg:text-4xl"
      >
        {g.title}
      </FramerH1>
      {guides.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {guides.map((path) => {
            return (
              <li key={path.slug}>
                <FramerDiv
                  variants={FADE_LEFT_ANIMATION_VARIANTS}
                  className="h-full"
                >
                  <GuideCard
                    slug={path.slug}
                    title={path.title}
                    description={path.description ?? ""}
                  />
                </FramerDiv>
              </li>
            );
          })}
        </ul>
      ) : (
        <section className="py-36 text-center">
          <p className="text-xl">{g.fallback}</p>
        </section>
      )}
    </FramerSection>
  );
}
