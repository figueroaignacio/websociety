// Components
import { Blur } from "@/components/Blur";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { quicksand } from "@/font/quicksand";

// Global styles
import "@/styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className}`}>
        {" "}
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
