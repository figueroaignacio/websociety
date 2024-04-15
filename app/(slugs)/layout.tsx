// Components
import { BackButton } from "@/components/back-button";
import { Blur } from "@/components/circle-blur";
import { Logo } from "@/components/trademark";

// Provider
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { onest } from "@/font/onest";

// Global styles
import "@/styles/globals.css";

export default function ArticleDetailsLayout({
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
          <Blur />
          <article className="min-h-screen py-6 m-auto container max-w-6xl">
            <div className="flex justify-between items-center pt-3">
              <BackButton title="Go Back" />
              <Logo />
            </div>
            {children}
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
