// Sections
import { Features } from "@/components/Screens/Features";
import { HomeSection } from "@/components/Screens/HomeSection";
import { LatestArticlesSection } from "@/components/Screens/LatestArticlesSection";
import { LatestPostsSection } from "@/components/Screens/LatestPostsSection";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <HomeSection />
      <Features />
      <LatestArticlesSection />
      <LatestPostsSection />
    </section>
  );
}
