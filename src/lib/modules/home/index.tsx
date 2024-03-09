import React from "react";
import BreakLine from "@/lib/components/elements/BreakLine";
import Resume from "@/lib/modules/home/Resume";
import Introduction from "@/lib/modules/home/Introduction";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Resume />
      <BreakLine />
    </div>
  );
}
