// Hooks
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations("banner");

  return (
    <div className="bg-purple-700 text-white py-2 px-4 flex items-center justify-center">
      <p className="text-xs font-semibold tracking-wide text-center">
        {t("title")}
      </p>
    </div>
  );
}
