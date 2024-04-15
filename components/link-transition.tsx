import Link from "next/link";
import { useRouter } from "next/navigation";

export function LinkTransition(props: any) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document.startViewTransition) {
      return;
    } else {
      e.preventDefault();
      document.startViewTransition(() => {
        router.push(props.href);
      });
    }
  };

  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  );
}
