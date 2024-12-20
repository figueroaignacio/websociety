import { Blog } from "@content";

interface ArticleFilterProps {
  categories: string[];
  articles: Blog[];
  selectedCategory: string | null;
}

export function articlesFilter({
  categories,
  articles,
  selectedCategory,
}: ArticleFilterProps) {
  const filteredArticles = selectedCategory
    ? articles.filter((article) =>
        article.categories?.includes(selectedCategory)
      )
    : articles;

  return { filteredArticles };
}
