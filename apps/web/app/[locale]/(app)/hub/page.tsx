import { auth } from "@/modules/auth/lib/auth";
import { SignOutButton } from "@/modules/auth/ui/signout-button";
import { redirect } from "next/navigation";

interface HubPageProps {
  params: {
    locale: string;
  };
}

export default async function HubPage({ params }: HubPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="page-container flex justify-center items-center min-h-dvh flex-col">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div className="max-w-xl mx-auto">
        <SignOutButton />
      </div>
    </div>
  );
}
