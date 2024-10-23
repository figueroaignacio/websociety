// Hooks
import { useTranslations } from "next-intl";

// Icons
import { FileWarning } from "lucide-react";

export function NoArticlesMessage() {
  const t = useTranslations("noPostsMessage");

  return (
    <section className="py-36 text-center rounded-md flex flex-col justify-center items-center gap-3">
      <FileWarning size={64} />
      <h3 className="text-2xl">{t("title")}</h3>
      <p className="text-sm text-muted-foreground">{t("description")}</p>
    </section>
  );
}
