import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).split("-").join(" ") || "";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
