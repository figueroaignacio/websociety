// Sections
import { FAQS } from "@/components/faqs";
import { Features } from "@/components/features";
import { GuideCta } from "@/components/guides/guides-cta";
import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/posts/latest-posts";
import { PostsCta } from "@/components/posts/posts-cta";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-24">
      <Hero />
      <Features />
      <LatestPosts />
      <PostsCta />
      <GuideCta />
      <FAQS />
    </section>
  );
}
