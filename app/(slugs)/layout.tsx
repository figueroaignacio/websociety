// Components
import { BackButton } from "@/components/BackButton";
import { Blur } from "@/components/Blur";
import { Logo } from "@/components/Logo";

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
            <div className="flex justify-between items-center">
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
