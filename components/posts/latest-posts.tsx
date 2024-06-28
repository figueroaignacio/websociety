"use client";

// Components
import { PostCard } from "@/components/posts/post-card";

// Content
import { posts } from "#site/content";

// Utils
import { sortPosts } from "@/utils/sortPosts";

// Animations
import "@/styles/animations.css";

export function LatestPosts() {
  const latestPosts = sortPosts(posts).slice(0, 4);

  return (
    <section className="py-10 flex flex-col gap-7">
      <h2 className="font-bold text-3xl">Latest Posts</h2>
      <div>
        {latestPosts?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {latestPosts.map((post) => {
              return (
                <li key={post.slug} className="fade">
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
        ) : (
          <p>Nothing to see yet</p>
        )}{" "}
      </div>
    </section>
  );
}
