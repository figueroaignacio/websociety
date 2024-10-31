// Utils
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  onClick?: () => void;
  className?: string;
}

export function Tag({ tag, count, current, onClick, className }: TagProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        badgeVariants({
          variant: current ? "default" : "tag",
          className: cn(
            "cursor-pointer",
            current ? "bg-purple-700 text-white" : ""
          ),
        }),
        className,
        "focus:outline-none focus:ring-1 focus:ring-purple-700"
      )}
      tabIndex={0}
    >
      {tag}
      {count ? <span className="ml-1 text-sm">({count})</span> : null}
    </div>
  );
}
