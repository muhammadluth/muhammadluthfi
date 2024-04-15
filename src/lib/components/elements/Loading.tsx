import React from "react";
import { Spinner } from "@nextui-org/react";

interface LoadingProps {
  className?: string;
}

export default function Loading({
  className = "h-[30vh]",
}: Readonly<LoadingProps>) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Spinner color="current" />
    </div>
  );
}
