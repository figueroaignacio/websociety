// Module
import PostsSection from "@/app/modules/posts-section";

// Constants
import { postsMetadata } from "@/constants/posts";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  title: postsMetadata.title,
  description: postsMetadata.description,
};

export default function PostsPage() {
  return <PostsSection />;
}
