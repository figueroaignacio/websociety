// Components
import { CircleBlur } from "@/components/circle-blur";
import { FootNote } from "@/components/foot-note";
import { Navbar } from "@/components/nav-bar";

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
      <body className={`${onest.className} font-onest`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CircleBlur />
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            <Navbar />
            {children}
            <FootNote />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
