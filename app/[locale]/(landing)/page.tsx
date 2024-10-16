import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { ParticleBackground } from "@/components/framer/particle-background";

// Sections
import { FAQS } from "@/sections/faqs";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { LatestArticles } from "@/sections/latest-articles";
import { LatestGuides } from "@/sections/latest-guides";
import { Resources } from "@/sections/resources";

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
        <div className="max-w-3xl mx-auto flex flex-col gap-24 mt-24">
          <Features />
          <LatestArticles />
          <ArticlesCta />
          <LatestGuides />
          <GuideCta />
          <Resources />
          <FAQS />
        </div>
      </section>
    </>
  );
}
