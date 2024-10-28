// Components
import { Landing } from "@/modules/landing/ui/landing";

import { setRequestLocale } from "next-intl/server";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  setRequestLocale(locale);

  return <Landing />;
}
