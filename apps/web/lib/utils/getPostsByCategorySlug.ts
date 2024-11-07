import { Blog } from "@content";
import { slug } from "github-slugger";

export function getPostsByCategorySlug(articles: Blog[], tag: string) {
  return articles.filter((article) => {
    if (!article) return false;
    const slugifiedTags = article.categories?.map((tag) => slug(tag));

    return slugifiedTags?.includes(tag);
  });
}
