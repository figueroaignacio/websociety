// Sections
import { HomeSection } from "@/components/Screens/HomeSection";
import { LatestArticlesSection } from "@/components/Screens/LatestArticlesSection";
import { LatestPostsSection } from "@/components/Screens/LatestPostsSection";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-12">
      <HomeSection />
      <LatestArticlesSection />
      <LatestPostsSection />
    </section>
  );
}
