// Sections
import { FAQS } from "@/sections/faqs";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { LatestGuides } from "@/sections/latest-guides";
import { LatestPosts } from "@/sections/latest-posts";

// CTA's
import { GuideCta } from "@/components/guides/guides-cta";
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
