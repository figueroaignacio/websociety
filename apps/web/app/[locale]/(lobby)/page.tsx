// Sections
import { Hero } from "@/modules/landing/sections/hero";
import { Spotlights } from "@/modules/landing/sections/spotlights";

// Utils
import { setRequestLocale } from "next-intl/server";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LandingPage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="page-container py-12">
      <Hero />
      <Spotlights />
    </main>
  );
}
