"use client";
import React, { JSX, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, Divider } from "@nextui-org/react";
import {
  HiOutlineHome,
  HiOutlineTerminal,
  HiOutlineUser,
  HiOutlinePresentationChartBar,
} from "react-icons/hi";
import { Each } from "@/lib/components/elements/Each";
import useIsMobile from "@/lib/hooks/useIsMobile";
import SidebarProfile from "@/lib/components/partials/sidebar/SidebarProfile";
import SidebarMenu from "@/lib/components/partials/sidebar/SidebarMenu";
import BreakLine from "@/lib/components/elements/BreakLine";

export default function Sidebar() {
  // const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="sidebar" className="lg:w-1/4">
      <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
        <SidebarProfile isScrolled={isScrolled} />
        {!isMobile && (
          <div>
            <BreakLine />
            <SidebarMenu />
          </div>
        )}
      </div>
    </div>
    // <div className="fixed h-screen bottom-0 left-0 top-0 z-50 w-56 border-r border-r-foreground-100 shadow-sm shadow-foreground-200">
    //   <div className="flex flex-col justify-center items-center mt-20">
    //     <Avatar
    //       isBordered
    //       radius="full"
    //       src="https://avatars.githubusercontent.com/u/32085686?v=4"
    //       className="w-20 h-20"
    //     />
    //     <Link href="/" className="mt-5">
    //       <span className="font-bold text-xl">Muhammad Luthfi</span>
    //     </Link>
    //     <Link href="/">
    //       <span className="font-bold text-sm">@muhammadluth</span>
    //     </Link>
    //   </div>
    //   <div className="mt-32 mb-10">
    //     <Divider />
    //   </div>
    //   <div className="flex flex-col justify-center items-center gap-3 px-3">
    //     <Each
    //       of={sidebarMenuList}
    //       render={(item) => (
    //         <Link
    //           key={item.id}
    //           className={`flex flex-row gap-2 rounded-md items-center hover:bg-foreground-100 w-full h-10 px-3 ${
    //             pathname === item.link && "bg-foreground-100"
    //           }`}
    //           href={item.link}
    //         >
    //           {item.icon}
    //           <span className="text-md capitalize">{item.name}</span>
    //         </Link>
    //       )}
    //     />
    //   </div>
    // </div>
  );
}
