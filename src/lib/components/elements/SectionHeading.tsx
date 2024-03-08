import React, { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
  icon?: ReactNode;
}

export default function SectionHeading({
  title,
  icon,
  className = "",
}: Readonly<SectionHeadingProps>) {
  return (
    <div
      className={`flex items-center gap-1.5 text-xl font-medium ${className}`}
    >
      {icon && <>{icon}</>}
      <h2 className="capitalize">{title}</h2>
    </div>
  );
}
