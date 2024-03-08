import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { IoLogoGithub as IoLogoGithubIcon } from "react-icons/io";
import { MdVerified as MdVerifiedIcon } from "react-icons/md";
import Image from "@/lib/components/elements/Image";

interface ISidebarProfileHeader {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

export default function SidebarProfileHeader({
  expandMenu,
  imageSize,
}: Readonly<ISidebarProfileHeader>) {
  return (
    <div
      className={clsx(
        "flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full",
        expandMenu && "flex-col !items-start"
      )}
    >
      <Image
        src="https://avatars.githubusercontent.com/u/32085686?v=4"
        alt="Muhammad Luthfi"
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105 border-2 border-neutral-400 dark:border-neutral-600 rotate-3"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-medium">
            Muhammad Luthfi
          </h2>
        </Link>
        <div>
          <MdVerifiedIcon size={18} className="text-blue-400" />
        </div>
      </div>
      <div className="hidden lg:flex text-sm  text-foreground-600 hover:text-foreground-700 dark:text-foreground-500 dark:hover:text-foreground-400 transition-all duration-300">
        <Link
          href="https://github.com/muhammadluth"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <IoLogoGithubIcon size={18} />
          @muhammadluth
        </Link>
      </div>
    </div>
  );
}
