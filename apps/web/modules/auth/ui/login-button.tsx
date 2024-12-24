import { Button } from "@/components/ui/button";
import { Link } from "@/config/i18n/routing";
import { LogIn } from "lucide-react";

type LoginButtonProps = {
  href?: string;
};

export function LoginButton({ href = "/auth/login" }: LoginButtonProps) {
  return (
    <Button variant="outline" asChild>
      <Link href={href}>
        <LogIn className="h-5 w-5 mr-2" />
        Login
      </Link>
    </Button>
  );
}
