// Sections
import { FAQS } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/posts/latest-posts";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Hero />
      <Features />
      <LatestPosts />
      <FAQS />
    </section>
  );
}
