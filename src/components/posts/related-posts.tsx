// Hooks
import { useTranslations } from "next-intl";

// Components
import { RelatedPostCard } from "./related-post-card";

// Content
import { posts } from "#site/content";

interface RelatedPostsProps {
  currentPost: {
    slug: string;
    categories: string[];
  };
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const t = useTranslations();

  const relatedPosts = posts
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        (post.categories || []).some((category) =>
          currentPost.categories.includes(category)
        )
    )
    .slice(0, 4);

  return (
    <div className="sticky top-16 lg:h-[calc(100vh-121px)] left-0 space-y-3 rounded-lg mx-auto lg:overflow-y-auto lg:px-4">
      <p className="font-semibold text-sm">{t("relatedPosts.title")}</p>
      {relatedPosts.length > 0 ? (
        relatedPosts.map((relatedPost) => (
          <RelatedPostCard
            key={relatedPost.slug}
            title={relatedPost.title}
            slug={relatedPost.slug}
          />
        ))
      ) : (
        <p>No related posts by now.</p>
      )}
    </div>
  );
}
