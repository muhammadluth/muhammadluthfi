import React from "react";
import dynamic from "next/dynamic";
import BreakLine from "@/lib/components/elements/BreakLine";

const Introduction = dynamic(() => import("@/lib/modules/home/Introduction"));

export default function Home() {
  return (
    <div>
      <Introduction />
      <BreakLine />
    </div>
  );
}
