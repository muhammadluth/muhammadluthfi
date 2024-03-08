import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  withMarginTop?: boolean;
}

export default function Container({
  children,
  className = "",
  withMarginTop = true,
  ...props
}: Readonly<ContainerProps>) {
  return (
    <div
      data-testid="container"
      className={`mt-20 mb-10 lg:mt-0 p-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
