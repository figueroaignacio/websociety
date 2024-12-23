// Hooks
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import { Link } from "@/config/i18n/routing";

// Icons
import { UserPlus } from "lucide-react";

type RegisterButtonProps = {
  href?: string;
};

export function RegisterButton({
  href = "/auth/register",
}: RegisterButtonProps) {
  const t = useTranslations("actionButtons");

  return (
    <Button variant="default" asChild>
      <Link href={href}>
        {t("register")}
        <UserPlus className="h-5 w-5 ml-2" />
      </Link>
    </Button>
  );
}
