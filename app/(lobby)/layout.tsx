// Components
import { FootNote } from "@/components/foot-note";
import { Navbar } from "@/components/nav-bar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { ubuntu } from "@/font/ubuntu";

// Global styles
import "../../styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} font-ubuntu`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen py-6 m-auto container max-w-6xl">
            {children}
            <FootNote />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
