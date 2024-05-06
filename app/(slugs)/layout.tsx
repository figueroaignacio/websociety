// Components
import { BackButton } from "@/components/back-button";
import { Logo } from "@/components/trademark";

// Provider
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Font
import { quicksand } from "@/font/quicksand";

// Global styles
import "@/styles/globals.css";

export default function ArticleDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.className} font-quicksand`}>
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
              <Logo />
            </div>
            {children}
          </article>
        </ThemeProvider>
      </body>
    </html>
  );
}
