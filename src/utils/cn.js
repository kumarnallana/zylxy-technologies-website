import { clsx } from "clsx";
import { tailwindMerge } from "tailwind-merge";

export function cn(...inputs) {
  return tailwindMerge(clsx(inputs));
}
