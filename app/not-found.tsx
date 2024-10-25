// Hooks
import { useTranslations } from "next-intl";

// Components
import { BackButton } from "@/components/common/back-button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <h1 className="text-8xl font-bold sm:text-9xl text-foreground">404</h1>
        <p className="max-w-md text-xl text-foreground sm:text-2xl">
          {t("description")}
        </p>
        <BackButton />
      </div>
    </section>
  );
}
