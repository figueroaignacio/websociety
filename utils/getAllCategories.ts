import { Post } from "@content";

export function getAllCategories(posts: Post[]) {
  const tags: Record<string, number> = {};

  posts.forEach((posts) => {
    posts.categories?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });

  return tags;
}
