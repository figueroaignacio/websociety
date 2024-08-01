import { Post } from "#site/content";
import { slug } from "github-slugger";

export function getPostsByCategorySlug(posts: Post[], tag: string) {
  return posts.filter((post) => {
    if (!post) return false;
    const slugifiedTags = post.categories?.map((tag) => slug(tag));

    return slugifiedTags?.includes(tag);
  });
}
