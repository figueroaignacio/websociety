import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { FramerWrapper } from "@/components/framer";
import { Sidebar } from "@/components/navigation/sidebar";

// Styles
import "@/styles/globals.css";

// Config
import { BgBlur } from "@/components/bg-blur";
import { Footer } from "@/components/footer";
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
    <>
      <BgBlur />
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <main className="lg:col-span-10 container md:contain-none lg:px-5 py-12">
          <FramerWrapper>{children}</FramerWrapper>
          <Footer />
        </main>
      </div>
    </>
  );
}
