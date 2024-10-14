import { Articles } from "@content";

export function sortArticles(articles: Articles[]) {
  return articles.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });
}
