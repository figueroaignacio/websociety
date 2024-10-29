// Components
import { Landing } from "@/modules/landing/ui/landing";

import { setRequestLocale } from "next-intl/server";

interface HomePageProps {
  params: { locale: string };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Landing />;
}
