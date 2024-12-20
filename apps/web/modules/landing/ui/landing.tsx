// Components
import { ArticlesCta } from "@/modules/articles/ui/articles-cta";

// Sections
import { Hero } from "@/modules/landing/views/hero";
import { LatestArticles } from "@/modules/landing/views/latest-articles";
import { Spotlights } from "@/modules/landing/views/spotlights";

export function Landing() {
  return (
    <section className="relative z-50 container">
      <Hero />
      <div className="max-w-4xl mx-auto flex flex-col gap-24 mt-24">
        <Spotlights />
        <LatestArticles />
        <ArticlesCta />
      </div>
    </section>
  );
}
