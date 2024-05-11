// Components
import { ArticleCardLoader } from "@/components/Articles/ArticleCardLoader";
import { BackdropBlur } from "@/components/BackdropBlur";
import { ArticleSearcher } from "./ArticleSearcher";

// Utils
import { allArticles } from "@/constants/articles";

export function AllArticlesLoader() {
  return (
    <div className="flex flex-col gap-2 py-10 min-h-[100vh]">
      <div className="flex flex-col gap-3 py-10">
        <h1 className="font-bold text-3xl">
          Read {allArticles.title} about coding
        </h1>
        <p className="text-xs lg:text-lg opacity-75">
          {allArticles.description}
        </p>
      </div>
      <div className="flex">
        <ArticleSearcher />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
        <ArticleCardLoader />
      </section>
      <BackdropBlur />
    </div>
  );
}
