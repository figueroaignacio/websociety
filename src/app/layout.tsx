// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// Utils
import { getLocale, getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";

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

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <NextTopLoader color="#7c3aed" showSpinner={false} />
        <NextIntlClientProvider messages={messages}>
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
