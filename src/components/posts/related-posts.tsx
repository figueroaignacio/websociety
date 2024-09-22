// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { PostCard } from "./post-card";

// Content
import { posts } from "@content";

interface RelatedPostsProps {
  currentPost: {
    locale: string;
    slug: string;
    categories: string[];
  };
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const t = useTranslations();
  const locale = useLocale();

  const relatedPosts = posts
    .filter((post) => {
      const isSameLocale = post.locale === locale;
      const isNotCurrentPost = post.slug !== currentPost.slug;
      const isRelatedCategory = (post.categories || []).some((category) =>
        currentPost.categories.includes(category)
      );
      return isSameLocale && isNotCurrentPost && isRelatedCategory;
    })
    .slice(0, 4);

  return (
    <div className="rounded-lg mx-auto lg:overflow-y-auto my-8">
      <p className="font-semibold">{t("relatedPosts.title")}</p>
      <ul className="space-y-3 mt-5">
        {relatedPosts.length > 0 ? (
          relatedPosts.map((relatedPost) => (
            <li key={relatedPost.slug}>
              <PostCard
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
          <p>No related posts by now.</p>
        )}
      </ul>
    </div>
  );
}
