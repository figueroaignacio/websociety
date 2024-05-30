// Components
import { PostCard } from "@/components/posts/post-card";
import { Tag } from "@/components/tag";

// Content
import { posts } from "#site/content";

// Utils
import { QueryPagination } from "@/components/query-pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

interface PostsPageParams {
  searchParams: {
    page?: string;
  };
}

export default async function PostsPage({ searchParams }: PostsPageParams) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

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
        {displayPosts?.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
          <p>Nothing to see yet</p>
        )}
        <QueryPagination totalPages={totalPages} />
      </div>
    </section>
  );
}
