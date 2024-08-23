import { unstable_setRequestLocale } from "next-intl/server";

// Sections
import { FAQS } from "@/sections/faqs";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { LatestGuides } from "@/sections/latest-guides";
import { LatestPosts } from "@/sections/latest-posts";

// CTA's
import { GuideCta } from "@/components/guides/guides-cta";
import { PostsCta } from "@/components/posts/posts-cta";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  return (
    <section>
      <Hero />
      <div className="max-w-4xl mx-auto flex flex-col gap-24 mt-24">
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
