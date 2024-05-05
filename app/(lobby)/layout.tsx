// Components
import { CircleBlur } from "@/components/circle-blur";
import { FootNote } from "@/components/foot-note";
import { Navbar } from "@/components/nav-bar";

// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { jost } from "@/font/jost";

// Global styles
import "../../styles/globals.css";

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} font-jost`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CircleBlur />
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
