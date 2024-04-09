// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { onest } from "@/font/onest";

// Global styles
import "../../styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${onest.className}`}>
        {" "}
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
