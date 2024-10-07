import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { FramerWrapper } from "@/components/framer";
import { Navbar } from "@/components/navigation/navbar";

// Styles
import "@/styles/globals.css";

// Config
import { locales } from "@/config/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LobbyLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LobbyLayout({
  children,
  params: { locale },
}: LobbyLayoutProps) {
  unstable_setRequestLocale(locale);
  return (
    <html suppressHydrationWarning>
      <body>
        <Banner />
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto] mx-auto">
          {/* <BgBlur /> */}
          <Navbar />
          <main className="container">
            <FramerWrapper>{children}</FramerWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
