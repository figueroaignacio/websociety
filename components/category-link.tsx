import { Link } from "@/config/navigation";
import { buttonVariants } from "./ui/button";

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
      })}
    >
      {children}
    </Link>
  );
}
