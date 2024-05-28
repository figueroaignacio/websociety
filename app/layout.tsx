// Util
import NextTopLoader from "nextjs-toploader";

// Global styles
import "@/styles/globals.css";

// Font
import { onest } from "@/font/onest";

// Config
import { siteConfig } from "@/config/site";

// Metadata
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title} `,
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.creator,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className}`}>
        <NextTopLoader color="#7c3aed" />
        {children}
      </body>
    </html>
  );
}
