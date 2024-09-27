import { Post } from "@content";

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });
}
