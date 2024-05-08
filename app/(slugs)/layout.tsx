// Components
import { BackButton } from "@/components/BackButton";
import { Wordmark } from "@/components/Wordmark";

// Provider
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { opensans } from "@/font/opensans";

// Global styles
import "@/styles/globals.css";

export default function ArticleDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${opensans.className}`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <article className="min-h-screen py-6 m-auto container max-w-6xl">
            <div className="flex justify-between items-center pt-3">
              <BackButton title="Go Back" />
              <Wordmark />
            </div>
            {children}
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
