// Sections
import { Features } from "@/components/sections/Features";
import { Home } from "@/components/sections/Home";
import { LatestPosts } from "@/components/sections/LatestPosts";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Home />
      <Features />
      <LatestPosts />
    </section>
  );
}
