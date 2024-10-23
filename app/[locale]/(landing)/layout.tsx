// Components
import { Footer } from "@/components/footer";
import { FramerWrapper } from "@/components/framer";
import { Navbar } from "@/modules/navigation/components/navbar";

// Utils
import { locales } from "@/config/config";
import { unstable_setRequestLocale } from "next-intl/server";

// Font
import "@fontsource-variable/onest";

// Styles
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LandingLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
export default async function LandingLayout({
  children,
  params: { locale },
}: LandingLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <FramerWrapper>{children}</FramerWrapper>
      <Footer />
    </main>
  );
}
