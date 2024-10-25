// Hooks
import { useTranslations } from "next-intl";

import { setRequestLocale } from "next-intl/server";

interface FaqPageProps {
  params: { locale: string };
}

export default function FaqPage({ params: { locale } }: FaqPageProps) {
  setRequestLocale(locale);
  const t = useTranslations();
  const faqs = t.raw("faqs");

  return (
    <section className="container flex flex-col justify-center  max-w-3xl mx-auto py-5 gap-6">
      <div className="py-20 space-y-2">
        <h1 className="font-bold text-5xl">{t("faqPage.title")}</h1>
        <p>{t("faqPage.description")}</p>
      </div>
      <ul className="w-full flex flex-col gap-y-12">
        {faqs.map((item: any) => (
          <li value={item.value} key={item.value} className="space-y-7">
            <h2 className="font-semibold text-sm lg:text-2xl gradient-background inline p-2 rounded-md">
              {item.title}
            </h2>
            <p className="text-xs lg:text-sm text-foreground">{item.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
