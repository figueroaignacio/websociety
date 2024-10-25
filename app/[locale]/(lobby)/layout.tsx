// Components
import { BgBlur } from "@/components/common/bg-blur";
import { Footer } from "@/components/common/footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/navigation/components/app-sidebar";

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
        <main className="container">
          <div className="fixed bottom-4 left-4 lg:hidden z-50 bg-card border rounded-md">
            <SidebarTrigger />
          </div>
          {children}
          <Footer />
        </main>
      </SidebarProvider>
    </>
  );
}
