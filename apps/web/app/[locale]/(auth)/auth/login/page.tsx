// Components
import { LoginForm } from "@/modules/auth/ui/login-form";

// Utils
import { setRequestLocale } from "next-intl/server";

interface LoginPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <LoginForm />
    </section>
  );
}
