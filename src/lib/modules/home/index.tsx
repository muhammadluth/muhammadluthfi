import React, { Suspense } from "react";
import Loading from "@/lib/components/elements/Loading";
import BreakLine from "@/lib/components/elements/BreakLine";
import Resume from "@/lib/modules/home/Resume";
import Introduction from "@/lib/modules/home/Introduction";
import Career from "@/lib/modules/home/Career";
import Education from "@/lib/modules/home/Education";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Introduction />
      <Resume />
      <BreakLine className="my-8" />
      <Career />
      <BreakLine className="my-8" />
      <Education />
    </Suspense>
  );
}
