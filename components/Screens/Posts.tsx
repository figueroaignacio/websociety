// Components
import { PostCard } from "@/components/Posts/PostCard";

// Constants
import { allPosts } from "@/constants/posts";

// Content
import { posts } from "#site/content";

export async function Posts() {
  const displayPosts = posts;
  return (
    <div>
      <div className="flex flex-col gap-3 py-20">
        <h1 className="font-bold text-3xl">
          Read {allPosts.title} about coding
        </h1>
        <p className="text-xs lg:text-lg opacity-75">{allPosts.description}</p>
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
                  description={description}
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
