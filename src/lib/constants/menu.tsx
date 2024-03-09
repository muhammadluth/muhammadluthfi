import {
  HiOutlineHome as HiOutlineHomeIcon,
  HiOutlineTerminal as HiOutlineTerminalIcon,
  HiOutlineUser as HiOutlineUserIcon,
  HiOutlinePresentationChartBar as HiOutlinePresentationChartBarIcon,
} from "react-icons/hi";
import { MenuItemProps } from "@/lib/types/menu";

const iconSize = 20;

export const MenuItems: MenuItemProps[] = [
  {
    id: 1,
    name: "home",
    link: "/",
    icon: <HiOutlineHomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Home",
    type: "Pages",
  },
  {
    id: 2,
    name: "projects",
    link: "/projects",
    icon: <HiOutlineTerminalIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Projects",
    type: "Pages",
  },
  {
    id: 3,
    name: "about",
    link: "/about",
    icon: <HiOutlineUserIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: About",
    type: "Pages",
  },
  {
    id: 4,
    name: "dashboard",
    link: "/dashboard",
    icon: <HiOutlinePresentationChartBarIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: "Pages: Dashboard",
    type: "Pages",
  },
];
