// Section
import { AllArticlesSection } from "@/components/Screens/ArticlesSection";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: articlesMetadata.url,
    title: articlesMetadata.title,
    description: articlesMetadata.description,
    siteName: articlesMetadata.title,
    images: [
      {
        url: articlesMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: articlesMetadata.title,
      },
    ],
  },
};

export default function AllArticlesPage() {
  return <AllArticlesSection />;
}
