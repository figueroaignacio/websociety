// Components
import { Blur } from "@/components/Common/Blur";
import { Footer } from "@/components/Layout/Footer";
import { Navbar } from "@/components/Layout/Navbar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Global styles
import "@/styles/globals.css";

// Font
import { roboto } from "@/font/roboto";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Blur />
          <Navbar />
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
