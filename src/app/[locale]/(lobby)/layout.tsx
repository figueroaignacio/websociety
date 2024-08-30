import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { FramerWrapper } from "@/components/framer";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

// Styles
import "@/styles/globals.css";

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
    <html suppressHydrationWarning className="scroll-pt-[3.5rem]">
      <body>
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto] mx-auto">
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
