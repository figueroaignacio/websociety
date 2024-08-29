// Components
import NextTopLoader from "nextjs-toploader";

// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// Utils
import { locales } from "@/config/config";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

// Font
import "@fontsource-variable/onest";

// Styles
import "@/styles/globals.css";

// Metadata
import { MetadataParams } from "@/types/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "siteConfig" });

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
    ),
    title: {
      default: t("title"),
      template: `%s - ${t("title")} `,
    },
    description: t("description"),
    authors: [
      {
        name: t("author.name"),
        url: t("author.url"),
      },
    ],
    creator: t("creator"),
    keywords: t("keywords"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
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
