"use client";

// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { PostCard } from "@/components/posts/post-card";

// Content
import { posts } from "@content";

// Utils
import { sortPosts } from "@/utils/sortPosts";

// Animations
import { NoPostsMessage } from "@/components/posts/no-posts-message";
import "@/styles/animations.css";

export function LatestPosts() {
  const t = useTranslations("latestPosts");
  const locale = useLocale();
  const latestPosts = sortPosts(posts)
    .filter((post) => post.locale === locale)
    .slice(0, 4);

  if (latestPosts.length < 0) {
    return <NoPostsMessage />;
  }

  return (
    <section className="py-10 flex flex-col gap-7">
      <h2 className="font-bold text-3xl">{t("title")}</h2>
      <div>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {latestPosts.map((post) => {
            return (
              <li key={post.slug}>
                <PostCard
                  title={post.title}
                  date={post.date}
                  description={post.description ?? ""}
                  slug={post.slug}
                  categories={post.categories}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
