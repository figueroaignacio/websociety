// Sections
import { Features } from "@/sections/Features";
import { Home } from "@/sections/Home";
import { LatestPosts } from "@/sections/LatestPosts";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Home />
      <Features />
      <LatestPosts />
    </section>
  );
}
