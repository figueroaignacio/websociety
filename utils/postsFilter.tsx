import { Post } from "@content";

interface PostFilterProps {
  categories: string[];
  posts: Post[];
  selectedCategory: string | null;
}

export function postFilter({
  categories,
  posts,
  selectedCategory,
}: PostFilterProps) {
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories?.includes(selectedCategory))
    : posts;

  return { filteredPosts };
}
