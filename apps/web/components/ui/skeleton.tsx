import { cn } from "@/lib/utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-300 dark:bg-gray-700/20",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
