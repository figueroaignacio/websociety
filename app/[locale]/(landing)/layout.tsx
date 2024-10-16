// Utils
import { locales } from "@/config/config";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

// Font
import "@fontsource-variable/onest";

// Styles
import { FramerWrapper } from "@/components/framer";
import "@/styles/globals.css";

// Metadata

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
export default async function LandingLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <main>
      <FramerWrapper>{children}</FramerWrapper>
    </main>
  );
}
