"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useMenuUIContext } from "@/lib/contexts/MenuUIContext";
import useIsMobile from "@/lib/hooks/useIsMobile";
import DropdownSwitchTheme from "@/lib/components/elements/DropdownSwitchTheme";
import DropdownIconSwitchTheme from "@/lib/components/elements/DropdownIconSwitchTheme";
import SidebarProfileHeader from "@/lib/components/partials/sidebar/SidebarProfileHeader";
import SidebarMobileMenuButton from "@/lib/components/partials/sidebar/SidebarMobileMenuButton";
import SidebarMobileMenu from "@/lib/components/partials/sidebar/SidebarMobileMenu";

interface ISidebarProfile {
  isScrolled?: boolean;
}

export default function SidebarProfile({
  isScrolled = false,
}: Readonly<ISidebarProfile>) {
  const isMobile = useIsMobile();
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
        "z-20 fixed shadow-sm sm:shadow-none lg:border-none border-b border-b-foreground-100 w-full p-5 lg:relative lg:p-0 dark:bg-black bg-white",
        openMenu && "pb-0"
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4 md:px-2">
        <SidebarProfileHeader openMenu={openMenu} imageSize={getImageSize()} />

        {!isMobile && (
          <div className="hidden lg:py-[5px] md:flex md:justify-between md:items-center">
            <DropdownSwitchTheme />
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
            <DropdownIconSwitchTheme />
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
