"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowRightShort as BsArrowRightShortIcon } from "react-icons/bs";
import { MenuItem } from "@/lib/types/menu";
import { useMenuUIContext } from "@/lib/contexts/MenuUIContext";

export default function SidebarMenuItem({
  name,
  link,
  icon,
  className = "my-0.5",
  children,
  hideIcon = false,
  onClick,
}: Readonly<MenuItem>) {
  const menuUIContext = useMenuUIContext();
  const { setOpenMenu } = menuUIContext;

  const [isHovered, setIsHovered] = useState(false);
  const isExternalUrl = link?.includes("http");
  const isHashLink = link === "#";
  const pathname = usePathname();

  const activeClasses = `flex items-center gap-2 py-2 px-4 rounded-lg group ${
    pathname === link
      ? "bg-foreground-100"
      : "hover:lg:bg-foreground-100 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300"
  }`;

  const handleClick = () => {
    setOpenMenu(false);
    if (onClick) onClick();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const isActiveRoute = pathname === link;

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        {!hideIcon && (
          <div
            className={clsx(
              "group-hover:-rotate-12 transition-all duration-300",
              isActiveRoute && "-rotate-12"
            )}
          >
            {icon}
          </div>
        )}
        <div className="flex-grow ml-0.5 capitalize">{name}</div>
        {children && <>{children}</>}
        {isActiveRoute && (
          <BsArrowRightShortIcon size={22} className="animate-pulse" />
        )}
        {isExternalUrl && isHovered && (
          <BsArrowRightShortIcon
            size={22}
            className="-rotate-45 lg:transition-all lg:duration-300"
          />
        )}
      </div>
    );
  };

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link
      href={link}
      target={isExternalUrl ? "_blank" : ""}
      onClick={handleClick}
    >
      {itemComponent()}
    </Link>
  );
}
