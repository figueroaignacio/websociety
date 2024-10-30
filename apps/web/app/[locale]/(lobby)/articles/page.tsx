// Hooks
import { useLocale, useTranslations } from "next-intl";

// Components
import { FilterByCategory } from "@/components/shared/filter-by-category";
import { QueryPagination } from "@/components/shared/query-pagination";
import { ArticleCard } from "@/modules/articles/ui/article-card";
import { NoArticlesMessage } from "@/modules/articles/ui/no-articles-message";

// Content
import { articles } from "@content";

// Utils
import { articlesFilter } from "@/modules/articles/utils/articlesFilter";
import { sortArticles } from "@/modules/articles/utils/sortArticles";
import { getTranslations, setRequestLocale } from "next-intl/server";

const ARTICLES_PER_PAGE = 6;

// Types
import { MetadataParams } from "@/common/types";

export async function generateMetadata({ params }: MetadataParams) {
  const { locale } = await params;
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

interface ArticlesPageProps {
  searchParams: {
    page?: string;
    category?: string;
  };
  params: { locale: string };
}

interface ArticlesPageViewProps {
  page: number;
  category: string | null;
}

function ArticlesPageView({ page, category }: ArticlesPageViewProps) {
  const lang = useLocale();
  const t = useTranslations("posts");

  const filteredArticles = articles.filter(
    (post) => post.published && post.locale === lang
  );

  const categories = Array.from(
    new Set(filteredArticles.flatMap((post) => post.categories || []))
  );

  const { filteredArticles: filteredAndSortedArticles } = articlesFilter({
    categories,
    articles: filteredArticles,
    selectedCategory: category,
  });

  const sortedArticles = sortArticles(filteredAndSortedArticles);
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);

  const displayArticles = sortedArticles.slice(
    ARTICLES_PER_PAGE * (page - 1),
    ARTICLES_PER_PAGE * page
  );

  if (displayArticles.length < 1) {
    return <NoArticlesMessage />;
  }

  return (
    <section className="flex flex-col lg:py-12 py-4">
      <h1 className="font-bold text-5xl mb-2">{t("title")}</h1>
      <p className="text-foreground">{t("description")}</p>
      <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="lg:col-span-4">
          <FilterByCategory
            categories={categories}
            selectedCategory={category}
          />
        </div>
        <div className="lg:col-span-8">
          <ul className="grid-template-cols">
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

export default async function ArticlesPage({
  params,
  searchParams,
}: ArticlesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { page, category } = await searchParams;

  const currentPage = Number(page) || 1;
  const selectedCategory = category || null;

  return <ArticlesPageView page={currentPage} category={selectedCategory} />;
}
