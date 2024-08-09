// Utils
import NextTopLoader from "nextjs-toploader";

// Font
import "@fontsource-variable/onest";

// Global styles
import "@/styles/globals.css";

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
  icons: [{ rel: "icon", url: "/icon.tsx" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextTopLoader color="#7c3aed" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
