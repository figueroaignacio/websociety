// Components
import { PostCard } from "@/components/posts/post-card";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Content
import { posts } from "#site/content";

// Utils
import { getAllCategories } from "@/utils/getAllCategories";
import { sortCategoriesByCount } from "@/utils/sortCategoriesByCount";
import { sortPosts } from "@/utils/sortPosts";

// Constants / Config
import { allPosts, postsConfig } from "@/constants/posts";

// Metadata
import { FramerDiv, FramerH1, FramerSection } from "@/components/framer";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from "@/constants/animations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: postsConfig.title,
  description: postsConfig.description,
};

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllCategories(posts);
  const sortedTags = sortCategoriesByCount(tags);

  return (
    <FramerSection
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <div className="flex flex-col gap-12 mt-24">
        <div className="flex flex-col gap-3">
          <FramerH1
            variants={FADE_LEFT_ANIMATION_VARIANTS}
            className="font-bold text-2xl lg:text-4xl"
          >
            {allPosts.title}
          </FramerH1>
          <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS} className="mt-10">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {sortedTags.map((tag) => (
                  <Tag tag={tag} key={tag} count={tags[tag]} />
                ))}
              </CardContent>
            </Card>
          </FramerDiv>
        </div>
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          {displayPosts.length > 0 ? (
            <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {displayPosts.map((post) => {
                return (
                  <li key={post.slug}>
                    <PostCard
                      slug={post.slug}
                      date={post.date}
                      title={post.title}
                      description={post.description ?? ""}
                      categories={post.categories}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <section className="py-36 text-center">
              <p className="text-xl">{allPosts.fallback}</p>
            </section>
          )}
        </FramerDiv>
        <QueryPagination totalPages={totalPages} />
      </div>
    </FramerSection>
  );
}
