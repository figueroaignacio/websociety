import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { FramerWrapper } from "@/components/framer";
import { Footer } from "@/components/layout/footer";
import { Gradient } from "@/components/layout/gradient";
import { Navbar } from "@/components/layout/navbar";

// Styles
import "@/styles/globals.css";

import { locales } from "@/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LobbyLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}
export default async function LobbyLayout({
  children,
  params: { locale },
}: LobbyLayoutProps) {
  unstable_setRequestLocale(locale);
  return (
    <html suppressHydrationWarning className="scroll-pt-[3.5rem]">
      <body>
        <Gradient />
        <Navbar />
        <main className="container">
          <FramerWrapper>{children}</FramerWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
