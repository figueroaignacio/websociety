// Provider
import { ThemeProvider } from "@/providers/theme-provider";

// Components
import { BackButton } from "@/components/back-button";

// Icons
import { HelpCircle } from "lucide-react";

// Constants
import { notFound } from "@/config/errors";

export default function NotFound() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <section className="min-h-[90vh] flex justify-center items-center container">
        <div className="flex flex-col justify-center items-center gap-3 text-center border-2 rounded-md p-16 border-dashed">
          <div className="border-2 rounded-full p-3">
            <HelpCircle size="1.5rem" />
          </div>
          <div>{notFound.notFoundErrorCode}</div>
          <div>
            <p className="opacity-75">{notFound.notFoundDescription}</p>
          </div>
          <BackButton />
        </div>
      </section>
    </ThemeProvider>
  );
}
