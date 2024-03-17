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

export default function DropdownIconSwitchTheme() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  const currentTheme = themeList.find((item) => item.theme === theme);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          isIconOnly
          size="sm"
          aria-label="button setting theme"
        >
          {currentTheme?.icon}
        </Button>
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
