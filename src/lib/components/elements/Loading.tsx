import React from "react";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-[30vh] flex justify-center items-center">
      <Spinner color="current" />
    </div>
  );
}
