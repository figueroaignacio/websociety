// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { NoPostsMessage } from "@/components/articles/no-posts-message";
import { PostCard } from "@/components/articles/post-card";
import { FilterByCategory } from "@/components/filter-by-category";
import { QueryPagination } from "@/components/query-pagination";

// Content
import { articles } from "@content";

// Utils
import { postFilter } from "@/utils/postsFilter";
import { sortArticles } from "@/utils/sortArticles";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// Metadata
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

export default function ArticlesPage({
  searchParams,
  params: { locale },
}: PostsPageProps) {
  unstable_setRequestLocale(locale);
  const lang = useLocale();
  const t = useTranslations("posts");

  const currentPage = Number(searchParams?.page) || 1;
  const selectedCategory = searchParams?.category || null;

  const filteredArticles = articles.filter(
    (post) => post.published && post.locale === lang
  );

  const categories = Array.from(
    new Set(filteredArticles.flatMap((post) => post.categories || []))
  );

  const { filteredPosts: filteredAndSortedPosts } = postFilter({
    categories,
    posts: filteredArticles,
    selectedCategory,
  });

  const sortedPosts = sortArticles(filteredAndSortedPosts);
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
