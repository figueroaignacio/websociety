// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Global styles
import "@/styles/globals.css";

// Font
import { jetbrains } from "@/font/jetbrains";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrains.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
