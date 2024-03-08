"use client";
import React, { JSX } from "react";
import { useTheme } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  RxMoon as RxMoonIcon,
  RxSun as RxSunIcon,
  RxDesktop as RxDesktopIcon,
} from "react-icons/rx";

interface ThemesProps {
  id: number;
  theme: string;
  icon: JSX.Element;
}

const themeList: ThemesProps[] = [
  {
    id: 1,
    theme: "system",
    icon: <RxDesktopIcon />,
  },
  {
    id: 2,
    theme: "light",
    icon: <RxSunIcon />,
  },
  {
    id: 3,
    theme: "dark",
    icon: <RxMoonIcon />,
  },
];

export default function DropdownSwitchTheme() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Setting Theme</Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="dropdown setting theme"
        selectionMode="single"
        selectedKeys={theme ? new Set([theme]) : "all"}
      >
        {themeList.map((item) => (
          <DropdownItem
            key={item.theme}
            onClick={() => handleTheme(item.theme)}
            startContent={item.icon}
            className="capitalize"
          >
            {item.theme}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
