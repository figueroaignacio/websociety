// Components

// Utils
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export function Tag({ tag, count, current }: TagProps) {
  return (
    <div
      className={badgeVariants({
        variant: current ? "default" : "tag",
        className: "no-underline rounded-md duration-100",
      })}
      // href={`/categories/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </div>
  );
}
