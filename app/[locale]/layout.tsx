// Components
import { FramerWrapper } from "@/components/framer";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// Utils
import { routing } from "@/config/i18n/routing";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

// Font
import "@fontsource-variable/onest";

// Styles
import "@/styles/globals.css";

// Metadata
import { MetadataParams } from "@/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "siteConfig" });

  const metadataBase =
    locale === "en"
      ? process.env.NEXT_PUBLIC_APP_URL_EN
      : process.env.NEXT_PUBLIC_APP_URL_ES;

  return {
    metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
    title: {
      default: t("titleDefault"),
      template: `%s - ${t("titleTemplate")} `,
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
  return routing.locales.map((locale) => ({ locale }));
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
  setRequestLocale(locale);

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
            <FramerWrapper>{children}</FramerWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
