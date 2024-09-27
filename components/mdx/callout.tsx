// Utils
import { cn } from "../../lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 items-start p-4 w-full dark:max-w-none rounded-sm", {
        "bg-red-500 text-white": type === "danger",
        "bg-yellow-500 text-black": type === "warning",
      })}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
