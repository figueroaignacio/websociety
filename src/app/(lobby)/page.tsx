// Sections
import { FAQS } from "@/components/faqs";
import { Features } from "@/components/features";
import { GuideCta } from "@/components/guides/guides-cta";
import { LatestGuides } from "@/components/guides/latest-guides";
import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/posts/latest-posts";
import { PostsCta } from "@/components/posts/posts-cta";

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className="max-w-5xl mx-auto flex flex-col gap-24 mt-24">
        <Features />
        <LatestPosts />
        <PostsCta />
        <LatestGuides />
        <GuideCta />
        <FAQS />
      </div>
    </section>
  );
}
