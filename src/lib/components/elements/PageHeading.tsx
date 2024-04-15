import React from "react";

interface PageHeadingProps {
  title: string;
  description?: string;
}

export default function PageHeading({
  title,
  description,
}: Readonly<PageHeadingProps>) {
  return (
    <>
      <h1 className="text-2xl font-medium font-sora">{title}</h1>
      <p className="mb-6 border-b border-dashed border-foreground-200 pt-2 pb-6 text-foreground-500">
        {description}
      </p>
    </>
  );
}
