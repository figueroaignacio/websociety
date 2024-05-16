// Sections
import { Features } from "@/components/Screens/Features";
import { Home } from "@/components/Screens/Home";
import { LatestPosts } from "@/components/Screens/LatestPosts";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Home />
      <Features />
      <LatestPosts />
    </section>
  );
}
