import AllPosts from "@/components/posts/all-posts";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Explore, read and learn in high-quality posts in Frontend Society.",
};

export default function PostsPage() {
  return <AllPosts />;
}
