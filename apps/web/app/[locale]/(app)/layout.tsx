// Components
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

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="mx-auto">
        <header className="pl-3 py-2 border-b sticky w-full top-0 left-0 backdrop-blur-md z-50 flex items-center">
          <SidebarTrigger />
        </header>
        <div className="container">{children}</div>
        <Footer />
      </main>
    </SidebarProvider>
  );
}
