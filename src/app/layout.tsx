// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// Utils
import { getMessages } from "next-intl/server";
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
  icons: [{ rel: "icon", url: "/icon.tsx" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const locales = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={`${onest.className}`}>
        <NextTopLoader color="#7c3aed" showSpinner={false} />
        <NextIntlClientProvider messages={locales}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
