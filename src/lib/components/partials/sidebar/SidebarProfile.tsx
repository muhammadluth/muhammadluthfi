"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { RiFocus2Fill as RiFocus2FillIcon } from "react-icons/ri";
import { useMenuUIContext } from "@/lib/contexts/MenuUIContext";
import useWidth from "@/lib/hooks/useWidth";
import ToggleThemeIcon from "@/lib/components/elements/ToggleThemeIcon";
import SidebarProfileHeader from "@/lib/components/partials/sidebar/SidebarProfileHeader";
import SidebarMobileMenuButton from "@/lib/components/partials/sidebar/SidebarMobileMenuButton";
import SidebarMobileMenu from "@/lib/components/partials/sidebar/SidebarMobileMenu";

interface SidebarProfileProps {
  isScrolled?: boolean;
}

export default function SidebarProfile({
  isScrolled = false,
}: Readonly<SidebarProfileProps>) {
  const { isMobile } = useWidth();
  const menuUIContext = useMenuUIContext();

  const { openMenu, setOpenMenu } = menuUIContext;

  const getImageSize = () => {
    let size = isMobile ? 40 : 100;
    if (!isMobile && isScrolled) {
      size = 80;
    }
    return size;
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <div
      className={clsx(
        "z-20 fixed shadow-sm sm:shadow-none lg:border-none border-b border-b-foreground-100 w-full p-5 lg:relative lg:p-0 bg-background text-foreground-900",
        openMenu && "pb-0"
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4 md:px-2">
        <SidebarProfileHeader openMenu={openMenu} imageSize={getImageSize()} />

        {!isMobile && (
          <div className="hidden lg:py-1 md:flex md:justify-between md:items-center gap-2">
            <RiFocus2FillIcon
              size={18}
              className="text-green-500 animate-ping absolute inline-flex opacity-75"
            />
            <RiFocus2FillIcon
              size={18}
              className="text-green-500 relative inline-flex"
            />
            <span className="text-sm">Open for collabs!</span>
            <ToggleThemeIcon />
          </div>
        )}

        {isMobile && (
          <div
            className={clsx(
              "flex lg:hidden items-center gap-5 mt-1",
              openMenu &&
                "!items-end flex-col-reverse justify-between h-[120px] mb-2"
            )}
          >
            <ToggleThemeIcon />
            <SidebarMobileMenuButton
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{openMenu && <SidebarMobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
