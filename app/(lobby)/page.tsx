// Sections
import { Features } from "@/app/sections/Features";
import { Home } from "@/app/sections/Home";
import { LatestPosts } from "@/app/sections/LatestPosts";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Home />
      <Features />
      <LatestPosts />
    </section>
  );
}
