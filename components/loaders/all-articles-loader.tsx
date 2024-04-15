// Components
import { ArticleSearch } from "@/components/article-search";
import { ArticleCardLoader } from "@/components/loaders/article-card-loader";

export function AllArticlesLoader() {
  return (
    <div className="flex flex-col gap-2 py-10">
      <div className="flex flex-col gap-3 justify-center py-52 lg:py-56">
        <h3 className="font-bold text-5xl lg:text-8xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300">
          Articles
        </h3>
        <p className="text-xs lg:text-sm opacity-75">
          In this section you are going to find articles about tech and coding.
          Check them!
        </p>
      </div>
      <div className="flex">
        <ArticleSearch />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
      </section>
    </div>
  );
}
