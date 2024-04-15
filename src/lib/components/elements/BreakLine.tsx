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
      className={`border-t text-foreground-700 border-foreground-300 my-4 ${className}`}
      data-testid="breakline"
      {...props}
    />
  );
}
