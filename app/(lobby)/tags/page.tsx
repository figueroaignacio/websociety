// Components
import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";

// Posts
import { posts } from "#site/content";

// Metadata
import { Metadata } from "next";

// Utils
import { getAllTags, sortTagsByCount } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedPosts = sortTagsByCount(tags);

  return (
    <section className="flex flex-col gap-12 mt-24">
      <h1 className="font-bold text-2xl lg:text-4xl">Tags</h1>
      <Separator />
      <div className="flex flex-wrap gap-2">
        {sortedPosts.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
    </section>
  );
}
