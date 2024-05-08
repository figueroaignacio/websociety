// Components
import { BackButton } from "@/components/BackButton";

// Utils
import { notFound } from "@/constants/errors";

import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

export default async function NotFound() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <section className="flex flex-col justify-center items-start gap-5 min-h-screen m-auto container max-w-6xl">
        <h2 className="font-bold text-5xl lg:text-8xl inline-block bg-gradient-to-r text-transparent bg-clip-text dark:from-gray-400 dark:via-gray-700 dark:to-gray-950 from-gray-900 via-gray-600 to-gray-300">
          {notFound.notFoundErrorCode}
        </h2>
        <p className="text-2xl">{notFound.notFoundTitle}</p>
        <p className="text-sm opacity-75">{notFound.notFoundDescription}</p>
        <div className="flex items-center justify-center gap-4">
          <BackButton title="Back Home" />
        </div>
      </section>
    </ThemeProvider>
  );
}
