// Components
import { BgBlur } from "@/components/common/bg-blur";
import { Footer } from "@/components/common/footer";
import { FramerWrapper } from "@/components/framer";
import { Sidebar } from "@/modules/navigation/components/sidebar";

// Styles
import "@/styles/globals.css";

// Config
import { routing } from "@/config/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LobbyLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LobbyLayout({
  children,
  params: { locale },
}: LobbyLayoutProps) {
  setRequestLocale(locale);

  return (
    <>
      <BgBlur />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <main className="lg:col-span-10 container md:contain-none">
          <FramerWrapper>{children}</FramerWrapper>
          <Footer />
        </main>
      </div>
    </>
  );
}
