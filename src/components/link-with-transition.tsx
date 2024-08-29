"use client";

import type { pathnames } from "@/config/config";
import { Link } from "@/config/navigation";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export function LinkWithTransition<Pathname extends keyof typeof pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}
