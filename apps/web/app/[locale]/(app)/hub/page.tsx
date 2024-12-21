// Components
import { LogoutButton } from "@/modules/auth/ui/logout-button";

// Config
import { auth } from "@/modules/auth/lib/auth";

interface HubPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function HubPage({ params }: HubPageProps) {
  const session = await auth();

  if (!session) {
    return <div>Not Authenticated</div>;
  }

  return (
    <div className="page-container flex justify-center items-center min-h-dvh flex-col">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div className="max-w-xl mx-auto">
        <LogoutButton />
      </div>
    </div>
  );
}
