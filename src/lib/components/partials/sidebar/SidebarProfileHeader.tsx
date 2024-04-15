import React from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "@/lib/components/elements/Image";

interface SidebarProfileHeaderProps {
  openMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

export default function SidebarProfileHeader({
  openMenu,
  imageSize,
}: Readonly<SidebarProfileHeaderProps>) {
  return (
    <div
      className={clsx(
        "flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full",
        openMenu && "flex-col !items-start"
      )}
    >
      <Image
        priority
        src="/images/logo.webp"
        alt="Muhammad Luthfi"
        width={openMenu ? 80 : imageSize}
        height={openMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105 border-2 border-foreground-600"
      />
      <div className="flex gap-1 items-center lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-medium">
            Muhammad Luthfi
          </h2>
        </Link>
      </div>
      <div className="hidden lg:flex text-sm transition-all duration-300 hover:text-primary">
        <Link
          href="https://github.com/muhammadluth"
          target="_blank"
          rel="noopener noreferrer"
        >
          @muhammadluth
        </Link>
      </div>
    </div>
  );
}
