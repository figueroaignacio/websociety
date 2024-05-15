// Components
import { ArticleCard } from "@/components/Articles/ArticleCard";

// Content
import { posts } from "#site/content";

export default async function PostsPage() {
  const displayPosts = posts;
  return (
    <div>
      {displayPosts?.length > 0 ? (
        <ul>
          {displayPosts.map((post) => {
            const { slug, date, description, title } = post;
            return (
              <li key={slug}>
                <ArticleCard
                  title={title}
                  publishedAt={date}
                  description={description}
                  slug={slug}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see yet</p>
      )}{" "}
    </div>
  );
}
