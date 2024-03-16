import React from "react";
import { MenuItemsData } from "@/lib/constants/menu";
import SidebarMenuItem from "@/lib/components/partials/sidebar/SidebarMenuItem";

export default function SidebarMenu() {
  const menuItemsData = MenuItemsData?.filter((item) => item?.isShow);
  return (
    <div>
      <div className="flex flex-col space-y-1">
        {menuItemsData?.map((menu) => (
          <SidebarMenuItem key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
}
