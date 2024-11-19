// Components
import { MDXContent } from "@/components/mdx/mdx-components";
import { Separator } from "@/components/ui/separator";
import { ArticleDetails } from "@/modules/articles/ui/article-details";
import { ArticlePagePagination } from "@/modules/articles/ui/article-page-pagination";
import { RelatedArticles } from "@/modules/articles/ui/related-articles";
import { ShareArticle } from "@/modules/articles/ui/share-article";
import { Toc } from "@/modules/navigation/ui/toc";

// Content
import { blog as articles } from "@content";

// Utils
import { calculateReadingTime } from "@/lib/utils/readingTime";
import { notFound } from "next/navigation";

// Metadata
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale = "en" } = await params;

  try {
    const article = await getArticleFromParams(params);
    if (!article) return {};

    const ogSearchParams = new URLSearchParams({ title: article.title });

    const metadataBase =
      locale === "en"
        ? process.env.NEXT_PUBLIC_APP_URL_EN
        : process.env.NEXT_PUBLIC_APP_URL_ES;

    return {
      metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
      title: article.title,
      description: article.description,
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        url: article.slug,
        images: [
          {
            url: `/api/og?${ogSearchParams.toString()}`,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

interface ArticlePageProps {
  params: Promise<{
    slug: string[];
    locale?: string;
  }>;
}

async function getArticleFromParams(params: ArticlePageProps["params"]) {
  try {
    const { slug, locale } = await params;
    const articleSlug = slug.join("/");
    const articleLocale = locale || "en";
    const article = articles.find(
      (article) =>
        article.slugAsParams === articleSlug && article.locale === articleLocale
    );
    if (article) {
      const readingTime = calculateReadingTime(article.body);
      return {
        ...article,
        categories: article.categories || [],
        readingTime,
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting article from params:", error);
    return null;
  }
}

async function getPreviousArticle(currentArticleSlug: string, locale: string) {
  const localeArticles = articles.filter(
    (article) => article.locale === locale
  );
  const currentIndex = localeArticles.findIndex(
    (article) => article.slugAsParams === currentArticleSlug
  );
  if (currentIndex > 0) {
    return localeArticles[currentIndex - 1];
  }
  return null;
}

async function getNextArticle(currentArticleSlug: string, locale: string) {
  const localeArticle = articles.filter((article) => article.locale === locale);
  const currentIndex = localeArticle.findIndex(
    (article) => article.slugAsParams === currentArticleSlug
  );
  if (currentIndex < localeArticle.length - 1) {
    return localeArticle[currentIndex + 1];
  }
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return articles.map((article) => ({ slug: article.slugAsParams.split("/") }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, locale = "en" } = await params;
  const articleSlug = slug.join("/");

  const article = await getArticleFromParams(params);

  if (!article || !article.published) {
    notFound();
  }

  const previousArticle = await getPreviousArticle(
    article.slugAsParams,
    locale
  );
  const nextArticle = await getNextArticle(article.slugAsParams, locale);

  return (
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 sm:py-8 md:py-12">
      <div className="lg:col-span-9">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{article.title}</h1>
          <p className="mb-4">{article.description}</p>
          <ArticleDetails post={article} locale={locale} />
        </div>
        <Separator className="mb-5" />
        <div id="content">
          <MDXContent code={article.body} />
        </div>
        <ArticlePagePagination
          previousPost={previousArticle}
          nextPost={nextArticle}
        />
        <div className="mt-8">
          <ShareArticle slug={articleSlug} locale={locale} />
        </div>
        <Separator className="my-8" />
        <RelatedArticles
          currentPost={{
            slug: article.slug,
            categories: article.categories,
            locale: article.locale,
          }}
        />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}

/*     			
      `    ``               `
        ``  _ `      `       ``
      `   |_| `  `` ``    `  `
      ``  -___-_` `   ` --------------
    ``   /      )      | Sometimes I have no idea what I'm doing, but I enjoy it. |`
  `____/| (0) (0)_()  |/-------------  `
  /|   | |   ^____)      ``      ``
  ||   |_|    \_//     Uɔ````   `` ``
  ||    || |    |    ========`  ``  ``
  ||    || |    |      ||     ``   `
  ||     \\_\   |\     ||   ```    `
  =========||====||    ||  ``       `
    || ||   \Ɔ || \Ɔ   ||   ``    ``
    || ||      ||      ||  `     ``
  */
