// Module
import AllArticlesSection from "@/app/modules/articles-section";

// Constants
import { articlesMetadata } from "@/constants/articles";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  title: articlesMetadata.title,
  description: articlesMetadata.description,
};

export default function AllArticlesPage() {
  return <AllArticlesSection />;
}
