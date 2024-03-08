import React from "react";
import { motion } from "framer-motion";
import SidebarMenu from "@/lib/components/partials/sidebar/SidebarMenu";
import BreakLine from "@/lib/components/elements/BreakLine";

export default function SidebarMobileMenu() {
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <BreakLine className="mt-2" />
        <SidebarMenu />
      </div>
    </motion.div>
  );
}
