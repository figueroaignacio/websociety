// Components
import { PostCard } from "@/components/posts/post-card";

// Constants
import { allPosts } from "@/constants/posts";

// Content
import { posts } from "#site/content";

// Utils
import { sortPosts } from "@/lib/utils";

export async function Posts() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;
  return (
    <div>
      <div className="flex flex-col gap-3 py-20">
        <h1 className="font-bold text-2xl text-center lg:text-4xl">
          Read {allPosts.title} about coding
        </h1>
      </div>
      {displayPosts?.length > 0 ? (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostCard
                  slug={slug}
                  date={date}
                  title={title}
                  description={description ?? ""}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see yet</p>
      )}
    </div>
  );
}
