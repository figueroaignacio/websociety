// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { NoPostsMessage } from "@/components/posts/no-posts-message";
import { PostCard } from "@/components/posts/post-card";
import { QueryPagination } from "@/components/query-pagination";

// Content
import { posts } from "@content";

// Utils
import { postFilter } from "@/utils/postsFilter";
import { sortPosts } from "@/utils/sortPosts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Metadata
import { FilterByCategory } from "@/components/filter-by-category";
import { MetadataParams } from "@/types/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "postsConfig" });

  return {
    title: t("title"),
    description: t("description"),
    authors: [
      {
        name: t("author.name"),
        url: t("author.url"),
      },
    ],
    creator: t("creator"),
  };
}

const POSTS_PER_PAGE = 6;

interface PostsPageProps {
  searchParams: {
    page?: string;
    category?: string;
  };
  params: {
    locale: string;
  };
}

export default function PostsPage({
  searchParams,
  params: { locale },
}: PostsPageProps) {
  unstable_setRequestLocale(locale);
  const lang = useLocale();
  const t = useTranslations("posts");

  const currentPage = Number(searchParams?.page) || 1;
  const selectedCategory = searchParams?.category || null;

  const filteredPosts = posts.filter(
    (post) => post.published && post.locale === lang
  );

  const categories = Array.from(
    new Set(filteredPosts.flatMap((post) => post.categories || []))
  );

  const { filteredPosts: filteredAndSortedPosts } = postFilter({
    categories,
    posts: filteredPosts,
    selectedCategory,
  });

  const sortedPosts = sortPosts(filteredAndSortedPosts);
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  if (displayPosts.length < 1) {
    return <NoPostsMessage />;
  }

  return (
    <section className="flex flex-col top-12 relative">
      <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
      <p className="text-foreground mb-4">{t("description")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="sticky top-16 left-0">
            <FilterByCategory
              categories={categories}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <ul className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {displayPosts.map((post) => (
              <li key={post.slug}>
                <PostCard
                  slug={post.slug}
                  date={post.date}
                  title={post.title}
                  description={post.description ?? ""}
                  categories={post.categories}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <QueryPagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </section>
  );
}
