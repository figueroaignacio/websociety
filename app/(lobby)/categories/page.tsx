// Components
import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";

// Posts
import { posts } from "#site/content";

// Metadata
import { Metadata } from "next";

// Utils
import { getAllCategories } from "../../../utils/getAllCategories";
import { sortCategoriesByCount } from "../../../utils/sortCategoriesByCount";

export const metadata: Metadata = {
  title: "Categories",
  description: "Topic I've written about",
};

export default async function CategoriesPage() {
  const tags = getAllCategories(posts);
  const sortedPosts = sortCategoriesByCount(tags);

  return (
    <section className="flex flex-col gap-12 mt-24 max-w-5xl mx-auto">
      <h1 className="font-bold text-2xl lg:text-4xl">Categories</h1>
      <Separator />
      <div className="flex flex-wrap gap-2">
        {sortedPosts.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </section>
  );
}
