import { Articles } from "@content";

export function getAllCategories(articles: Articles[]) {
  const tags: Record<string, number> = {};

  articles.forEach((article) => {
    article.categories?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });

  return tags;
}
