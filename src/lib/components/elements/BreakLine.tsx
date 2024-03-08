import React from "react";

interface BreakLineProps {
  className?: string;
}

export default function BreakLine({
  className = "",
  ...props
}: Readonly<BreakLineProps>) {
  return (
    <hr
      className={`border-t dark:border-neutral-700 border-gray-300 my-4 ${className}`}
      data-testid="breakline"
      {...props}
    />
  );
}
