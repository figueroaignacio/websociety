// Font
import { onest } from "@/font/onest";

// Utils
import NextTopLoader from "nextjs-toploader";

// Global styles
import "@/styles/globals.css";

// Metadata
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} - %s`,
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.creator,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className} font-onest`}>
        <NextTopLoader color="rgb(75, 85, 99)" />
        {children}
      </body>
    </html>
  );
}
