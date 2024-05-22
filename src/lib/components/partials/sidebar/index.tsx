"use client";
import React, { useState, useEffect } from "react";
import { MenuUIProvider } from "@/lib/contexts/MenuUIContext";
import useWidth from "@/lib/hooks/useWidth";
import SidebarProfile from "@/lib/components/partials/sidebar/SidebarProfile";
import SidebarMenu from "@/lib/components/partials/sidebar/SidebarMenu";
import BreakLine from "@/lib/components/elements/BreakLine";

export default function Sidebar() {
  const { isMobile } = useWidth();
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
    <MenuUIProvider>
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
    </MenuUIProvider>
  );
}
