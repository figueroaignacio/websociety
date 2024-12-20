import { setRequestLocale } from "next-intl/server";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LandingPage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <div className="page-container">Landing Page</div>;
}
