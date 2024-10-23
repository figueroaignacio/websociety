import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/config/navigation";

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
