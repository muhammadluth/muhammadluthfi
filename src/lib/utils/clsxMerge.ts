import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function clsxMerge(...props: ClassValue[]) {
  return twMerge(clsx(...props));
}
