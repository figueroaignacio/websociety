// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Global styles
import "@/styles/globals.css";

// Font
import { Gradient } from "@/components/gradient";
import { onest } from "@/font/onest";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Gradient />
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
