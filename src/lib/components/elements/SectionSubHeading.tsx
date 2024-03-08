import React, { ReactNode } from "react";

interface SectionSubHeadingProps {
  children?: ReactNode;
}

export default function SectionSubHeading({
  children,
}: Readonly<SectionSubHeadingProps>) {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
      {children}
    </div>
  );
}
