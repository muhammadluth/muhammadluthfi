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

// export const SOCIAL_MEDIA: MenuItemProps[] = [
//   {
//     title: "Email",
//     link: "mailto:aulianza.dev@gmail.com",
//     icon: <EmailIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "Contact: Email",
//     className: "!bg-green-600 border border dark:border-neutral-700",
//     type: "Link",
//   },

//   {
//     title: "Linkedin",
//     link: "https://www.linkedin.com/in/aulianza/",
//     icon: <LinkedinIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "Social: Linkedin",
//     className: "!bg-blue-500 border border dark:border-neutral-700",
//     type: "Link",
//   },
//   {
//     title: "Twitter",
//     link: "https://twitter.com/aulianzaa",
//     icon: <TwitterIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "Social: Twitter",
//     className: "!bg-sky-500 border border dark:border-neutral-700",
//     type: "Link",
//   },
//   {
//     title: "Instagram",
//     link: "https://instagram.com/aulianza",
//     icon: <InstagramIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "Social: Instagram",
//     className: "!bg-orange-700 border border dark:border-neutral-700",
//     type: "Link",
//   },
//   {
//     title: "Github",
//     link: "https://github.com/aulianza",
//     icon: <GithubIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "Social: Github",
//     className: "!bg-black border border dark:border-neutral-700",
//     type: "Link",
//   },
// ];

// export const EXTERNAL_LINKS: MenuItemProps[] = [
//   {
//     title: "Analytics",
//     link: "https://analytics.aulianza.com/share/LK5kiRuosw9pORLa/aulianza.id",
//     icon: <AnalyticsIcon size={iconSize} />,
//     isShow: true,
//     isExternal: true,
//     eventName: "External Link: Analytics",
//     type: "Link",
//   },
// ];
