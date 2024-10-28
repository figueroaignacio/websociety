// Components
import { BgBlur } from "@/components/shared/bg-blur";
import { Footer } from "@/components/shared/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/navigation/ui/app-sidebar";

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

export default function LocaleLayout({
  children,
  params: { locale },
}: LobbyLayoutProps) {
  setRequestLocale(locale);

  return (
    <>
      <BgBlur />
      <SidebarProvider>
        <AppSidebar />
        <main>
          <header className="pl-3 py-3 border-b sticky w-full top-0 left-0 backdrop-blur-md z-50 flex items-center">
            <SidebarTrigger />
          </header>
          <div className="container">{children}</div>
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}
