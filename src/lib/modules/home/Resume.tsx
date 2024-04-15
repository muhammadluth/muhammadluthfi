import React from "react";
import Link from "next/link";
import { HiOutlineDownload as HiOutlineDownloadIcon } from "react-icons/hi";

export default function Resume() {
  return (
    <Link
      href="https://cms.muhammadluthfi.id/uploads/CV_Muhammad_Luthfi_99de9ceb90.pdf"
      target="_blank"
      passHref
      className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-foreground-900 hover:text-foreground-400 mt-6 border w-fit px-4 py-2.5 rounded-lg "
      data-umami-event="Download Resume"
    >
      <HiOutlineDownloadIcon />
      <span>Download Resume</span>
    </Link>
  );
}
