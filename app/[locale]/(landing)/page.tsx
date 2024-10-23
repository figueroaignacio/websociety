import { unstable_setRequestLocale } from "next-intl/server";

import { Landing } from "@/modules/landing/components/landing";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  return <Landing />;
}
