// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { ArticleCard } from "@/components/articles/article-card";
import { NoArticlesMessage } from "@/components/articles/no-articles-message";
import { FilterByCategory } from "@/components/filter-by-category";
import { QueryPagination } from "@/components/query-pagination";

// Content
import { articles } from "@content";

// Utils
import { articlesFilter } from "@/utils/articlesFilter";
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

const ARTICLES_PER_PAGE = 6;

interface ArticlesPageProps {
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
}: ArticlesPageProps) {
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

  const { filteredArticles: filteredAndSortedArticles } = articlesFilter({
    categories,
    articles: filteredArticles,
    selectedCategory,
  });

  const sortedArticles = sortArticles(filteredAndSortedArticles);
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);

  const displayArticles = sortedArticles.slice(
    ARTICLES_PER_PAGE * (currentPage - 1),
    ARTICLES_PER_PAGE * currentPage
  );

  if (displayArticles.length < 1) {
    return <NoArticlesMessage />;
  }

  return (
    <section className="flex flex-col lg:px-5 lg:py-12 py-4">
      <h1 className="font-bold text-3xl mb-2">{t("title")}</h1>
      <p className="text-foreground">{t("description")}</p>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="lg:col-span-4">
          <FilterByCategory
            categories={categories}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="lg:col-span-8">
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayArticles.map((post) => (
              <li key={post.slug}>
                <ArticleCard
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
