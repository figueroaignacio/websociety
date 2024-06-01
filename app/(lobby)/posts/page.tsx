"use client";

// React
import { useState } from "react";

// Components
import { PostCard } from "@/components/posts/post-card";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Content
import { posts } from "#site/content";

// Utils
import { PostsSearcher } from "@/components/posts/post-searcher";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";

const POSTS_PER_PAGE = 4;

interface PostsPageParams {
  searchParams: {
    page?: string;
  };
}

export default function PostsPage({ searchParams }: PostsPageParams) {
  const [searchTerm, setSearchTerm] = useState("");
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <section>
      <div className="flex flex-col gap-12 mt-24">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl lg:text-4xl">
            The ramblings of Front Society.
          </h1>
          <div className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {sortedTags.map((tag) => (
                  <Tag tag={tag} key={tag} count={tags[tag]} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        <PostsSearcher onSearch={handleSearch} />
        {displayPosts.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 ">
            {displayPosts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard
                    slug={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description ?? ""}
                    tags={post.tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <section className="py-36 text-center">
            <p className="text-xl">Nothing to see, try with another word</p>
          </section>
        )}
        <QueryPagination totalPages={totalPages} />
      </div>
    </section>
  );
}
