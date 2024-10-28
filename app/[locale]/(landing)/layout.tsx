// Components
import { FramerWrapper } from "@/components/framer";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/modules/navigation/ui/navbar";

// Font
import "@fontsource-variable/onest";

// Styles
import "@/styles/globals.css";

// Config
import { routing } from "@/config/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LandingLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
export default async function LandingLayout({
  children,
  params: { locale },
}: LandingLayoutProps) {
  setRequestLocale(locale);

  return (
    <main className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <FramerWrapper>{children}</FramerWrapper>
      <Footer />
    </main>
  );
}
