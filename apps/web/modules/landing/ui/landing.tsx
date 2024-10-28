// Components
import { ParticleBackground } from "@/components/framer/particle-background";
import { ArticlesCta } from "@/modules/articles/ui/articles-cta";
import { GuideCta } from "@/modules/guides/ui/guides-cta";

// Sections
import { Hero } from "@/modules/landing/views/hero";
import { LatestArticles } from "@/modules/landing/views/latest-articles";
import { Resources } from "@/modules/landing/views/resources";
import { Spotlights } from "@/modules/landing/views/spotlights";

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
    </>
  );
}
