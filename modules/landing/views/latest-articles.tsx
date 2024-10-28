"use client";

// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { ArticleCard } from "@/modules/articles/ui/article-card";
import { NoArticlesMessage } from "@/modules/articles/ui/no-articles-message";

// Content
import { articles } from "@content";

// Utils
import { sortArticles } from "@/modules/articles/utils/sortArticles";

// Animations
import "@/styles/animations.css";

export function LatestArticles() {
  const t = useTranslations("latestPosts");
  const locale = useLocale();
  const latestPosts = sortArticles(articles)
    .filter((post) => post.locale === locale)
    .slice(0, 4);

  if (latestPosts.length < 0) {
    return <NoArticlesMessage />;
  }

  return (
    <section className="py-10 flex flex-col gap-7">
      <h2 className="font-bold text-3xl">{t("title")}</h2>
      <div>
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {latestPosts.map((post) => {
            return (
              <li key={post.slug}>
                <ArticleCard
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
