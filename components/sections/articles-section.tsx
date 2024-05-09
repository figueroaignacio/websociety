"use client";

// Hooks
import { useState } from "react";

// Components
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleSearcher } from "@/components/ArticleSearcher";
import { AllArticlesLoader } from "@/components/loaders/AllArticlesLoader";

// Utils
import { allArticles } from "@/constants/articles";
import { useArticles } from "@/hooks/useArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

export default function AllArticlesSection() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <AllArticlesLoader />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const filteredPosts = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 py-20">
        <h1 className="font-bold text-3xl">
          Read {allArticles.title} about coding
        </h1>
        <p className="text-xs lg:text-lg opacity-75">
          {allArticles.description}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <ArticleSearcher onSearch={setSearchTerm} />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 justify-center items-center"
        id="all-articles"
      >
        {filteredPosts.length === 0 ? (
          <div className="col-span-4 py-52 lg:py-60">
            <p className="text-center">{allArticles.fallbackNoArticlesFound}</p>
          </div>
        ) : (
          filteredPosts.map((article: ArticleTypes) => (
            <div key={article._id}>
              <ArticleCard
                title={article.title}
                publishedAt={article.publishedAt}
                description={article.description}
                author={article.author}
                author_image={article.author_image}
                slug={article.slug}
                alt={article.author}
                categories={article.categories}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
