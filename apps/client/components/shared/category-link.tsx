import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/i18n/routing";
interface CategoryLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function CategoryLink({ href, isActive, children }: CategoryLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "default" : "outline",
        className: " justify-start",
        size: "sm",
      })}
    >
      {children}
    </Link>
  );
}
