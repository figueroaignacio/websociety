"use client";

// Next
import { Link, useRouter } from "@/navigation";

interface LinkWithTransitionProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function LinkWithTransition({
  children,
  className,
  href,
}: LinkWithTransitionProps) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      return;
    } else {
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <Link onClick={handleClick} href={href} className={className}>
      {children}
    </Link>
  );
}
