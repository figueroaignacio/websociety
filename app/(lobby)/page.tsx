// Modules
import { HomeSection } from "@/components/sections/home-section";
import { LatestArticlesSection } from "@/components/sections/latest-articles-section";
import { LatestPostsSection } from "@/components/sections/latest-posts-section";

// Components

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12">
      <HomeSection />
      <LatestArticlesSection />
      <LatestPostsSection />
    </section>
  );
}
