// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { ArticleCard } from "./article-card";

// Content
import { blog as articles } from "@content";

interface RelatedPostsProps {
  currentPost: {
    locale: string;
    slug: string;
    categories: string[];
  };
}

export function RelatedArticles({ currentPost }: RelatedPostsProps) {
  const t = useTranslations();
  const locale = useLocale();

  const relatedPosts = articles
    .filter((article) => {
      const isSameLocale = article.locale === locale;
      const isNotCurrentArticle = article.slug !== currentPost.slug;
      const isRelatedCategory = (article.categories || []).some((category) =>
        currentPost.categories.includes(category)
      );
      return isSameLocale && isNotCurrentArticle && isRelatedCategory;
    })
    .slice(0, 4);

  return (
    <div className="rounded-lg mx-auto lg:overflow-y-auto my-8">
      <p className="font-semibold">{t("relatedPosts.title")}</p>
      <ul className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {relatedPosts.length > 0 ? (
          relatedPosts.map((relatedPost) => (
            <li key={relatedPost.slug}>
              <ArticleCard
                title={relatedPost.title}
                description={
                  relatedPost.description || "No description provided"
                }
                slug={relatedPost.slug}
                date={relatedPost.date}
                categories={relatedPost.categories}
              />
            </li>
          ))
        ) : (
          <p>No related articles by now.</p>
        )}
      </ul>
    </div>
  );
}
