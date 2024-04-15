// Modules
import { HomeSection } from "@/components/sections/home-section";
import { LatestArticlesSection } from "../../components/sections/latest-articles-section";
import { LatestPostsSection } from "../../components/sections/latest-posts-section";

// Components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <section>
      <HomeSection />
      <LatestArticlesSection />
      <Separator />
      <LatestPostsSection />
    </section>
  );
}
