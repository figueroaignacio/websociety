// Module
import PostsSection from "@/components/sections/posts-section";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: postsMetadata.url,
    title: postsMetadata.title,
    description: postsMetadata.description,
    siteName: postsMetadata.title,
    images: [
      {
        url: postsMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: postsMetadata.title,
      },
    ],
  },
};

export default function PostsPage() {
  return <PostsSection />;
}
