// Components
import { ParticleBackground } from "@/components/framer/particle-background";
import { ArticlesCta } from "@/modules/articles/components/articles-cta";
import { GuideCta } from "@/modules/guides/components/guides-cta";

// Sections
import { Hero } from "@/sections/hero";
import { LatestArticles } from "@/sections/latest-articles";
import { Resources } from "@/sections/resources";
import { Spotlights } from "@/sections/spotlights";

export function Landing() {
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
      ;
    </>
  );
}
