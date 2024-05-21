// Components
import { PostCard } from "@/components/posts/post-card";

// Constants

// Content
import { posts } from "#site/content";

// Utils
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

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

  return (
    <section>
      <div className="flex flex-col gap-12 mt-24">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl lg:text-4xl">
            The ramblings of Front Society.
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
        <QueryPagination totalPages={totalPages} />
      </div>
    </section>
  );
}
