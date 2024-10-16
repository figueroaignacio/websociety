// Components
import { ArticleDetails } from "@/components/articles/article-details";
import { ArticlePagePagination } from "@/components/articles/article-page-pagination";
import { RelatedArticles } from "@/components/articles/related-articles";
import { ShareArticle } from "@/components/articles/share-article";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Toc } from "@/components/navigation/toc";
import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";

// Content
import { articles } from "@content";

// Utils
import { formatDate } from "@/utils/formatDate";
import { calculateReadingTime } from "@/utils/readingTime";
import { notFound } from "next/navigation";

// Icons
import { Calendar, TagIcon } from "lucide-react";

// Metadata
import { Metadata } from "next";

interface ArticlePageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getArticleFromParams(params: ArticlePageProps["params"]) {
  try {
    const slug = params?.slug.join("/");
    const locale = params.locale || "en";
    const article = articles.find(
      (article) => article.slugAsParams === slug && article.locale === locale
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

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug, locale = "en" } = params;

  try {
    const article = await getArticleFromParams({ slug, locale });
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

export async function generateStaticParams(): Promise<
  ArticlePageProps["params"][]
> {
  return articles.map((article) => ({ slug: article.slugAsParams.split("/") }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, locale = "en" } = params;
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
      <aside className="hidden lg:block lg:col-span-3">
        <ArticleDetails post={article} locale={locale} />
      </aside>
      <div className="lg:col-span-6">
        <div className="flex flex-col gap-2">
          <dl className="flex text-xs lg:hidden">
            <dt className="sr-only">Published at</dt>
            <dd className="flex items-center gap-2">
              <Calendar size={12} />
              <time dateTime={article.date}>
                {formatDate(article.date, locale)}
              </time>
            </dd>
          </dl>
          <h1 className="text-3xl font-bold ">{article.title}</h1>
          <p className="mb-4">{article.description}</p>
          <div className="flex items-center gap-2 mb-3 lg:hidden flex-wrap">
            <TagIcon size={16} />
            {article.categories?.map((tag, index) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <Separator className="mb-5" />
        <div id="content">
          <MDXContent code={article.body} />
        </div>
        <ArticlePagePagination
          previousPost={previousArticle}
          nextPost={nextArticle}
        />
        <div className="mt-8  ">
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
