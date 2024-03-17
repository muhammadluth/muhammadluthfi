import React from "react";
import Link from "next/link";
import { FiArrowLeftCircle as FiArrowLeftCircleIcon } from "react-icons/fi";

interface BackButtonProps {
  pathname: string;
}

export default function BackButton({ pathname }: Readonly<BackButtonProps>) {
  return (
    <div className="w-fit">
      <Link href={pathname}>
        <div className="flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer">
          <FiArrowLeftCircleIcon size={20} data-testid="back-icon" />
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
}
