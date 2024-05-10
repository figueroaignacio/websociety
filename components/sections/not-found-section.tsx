// Provider
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Components
import { BackButton } from "@/components/BackButton";

// Icons
import { HelpCircle } from "lucide-react";

// Constants
import { notFound } from "@/constants/errors";

export function NotFoundSection() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <section className="min-h-[90vh] flex justify-center items-center container">
        <div className="flex flex-col justify-center items-center gap-3 text-center border-[.0625rem] rounded-md p-16 border-dashed">
          <div className="border-[1px] rounded-full p-3 border-dashed">
            <HelpCircle size={"1.5rem"} />
          </div>
          <div>{notFound.notFoundErrorCode}</div>
          <div>
            <p className="opacity-75">{notFound.notFoundDescription}</p>
          </div>
          <BackButton title="Go Back" />
        </div>
      </section>
    </ThemeProvider>
  );
}
