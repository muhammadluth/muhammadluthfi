import React, { Suspense } from "react";
import Loading from "@/lib/components/elements/Loading";
import Story from "@/lib/modules/about/Story";

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <Story />
    </Suspense>
  );
}
