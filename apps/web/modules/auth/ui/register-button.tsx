import { Button } from "@/components/ui/button";
import { Link } from "@/config/i18n/routing";
import { UserPlus } from "lucide-react";

type RegisterButtonProps = {
  href?: string;
};

export function RegisterButton({
  href = "/auth/register",
}: RegisterButtonProps) {
  return (
    <Button variant="default" asChild>
      <Link href={href}>
        <UserPlus className="h-5 w-5 mr-2" />
        Register
      </Link>
    </Button>
  );
}
