import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { ParticleBackground } from "@/components/framer/particle-background";

// Sections
import { Hero } from "@/sections/hero";
import { LatestArticles } from "@/sections/latest-articles";
import { Resources } from "@/sections/resources";
import { Spotlights } from "@/sections/spotlights";

// CTA's
import { ArticlesCta } from "@/components/articles/articles-cta";
import { GuideCta } from "@/components/guides/guides-cta";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ParticleBackground />
      <section className="relative z-50 container">
        <Hero />
        <div className="max-w-4xl mx-auto flex flex-col gap-24 mt-24">
          <Spotlights />
          <LatestArticles />
          <ArticlesCta />
          <Resources />
          <GuideCta />
        </div>
      </section>
    </>
  );
}
