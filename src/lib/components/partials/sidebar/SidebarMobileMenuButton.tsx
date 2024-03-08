import React from "react";
import clsx from "clsx";

interface SidebarMobileMenuButtonProps {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
}

export default function SidebarMobileMenuButton({
  openMenu,
  setOpenMenu,
}: Readonly<SidebarMobileMenuButtonProps>) {
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <button
      className="flex lg:hidden sidebar-mobile-menu-button"
      onClick={handleOpenMenu}
      aria-label="button setting theme"
      type="button"
    >
      {menuSpanData.map((item) => (
        <span
          key={item.index}
          className={clsx(
            "bg-neutral-950 dark:bg-neutral-100 sidebar-mobile-menu-button-content",
            openMenu && "active"
          )}
        />
      ))}
    </button>
  );
}
