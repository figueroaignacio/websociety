import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <section className="flex flex-col lg:py-12 py-4 page-container">
      <div className="border-b pb-12 ">
        <h1 className="font-bold text-5xl mb-2">{t("title")}</h1>
        <p className="text-foreground max-w-4xl">{t("description")}</p>
      </div>
    </section>
  );
}
