import React from "react";
import { MenuItems } from "@/lib/constants/menu";
import SidebarMenuItem from "@/lib/components/partials/sidebar/SidebarMenuItem";

export default function SidebarMenu() {
  const menuItems = MenuItems?.filter((item) => item?.isShow);
  return (
    <div>
      <div className="flex flex-col space-y-1">
        {menuItems?.map((item) => (
          <SidebarMenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
