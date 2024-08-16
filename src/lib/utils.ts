import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToSlug(text:string):string {
  return text
    .toLowerCase()                  // Convert to lowercase
    .trim()                         // Remove leading and trailing spaces
    .replace(/[^a-z0-9\s-]/g, '')   // Remove non-alphanumeric characters (except spaces and hyphens)
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Replace multiple hyphens with a single hyphen
}