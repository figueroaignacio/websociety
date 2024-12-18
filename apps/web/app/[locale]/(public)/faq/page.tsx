// Componentes
import { Faqs } from "@/modules/landing/ui/faqs";
import { setRequestLocale } from "next-intl/server";

interface FaqPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Faqs />;
}
