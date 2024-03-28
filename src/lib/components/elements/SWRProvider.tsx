"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

const cacheProvider = () => new Map();

export function SWRProvider({ children }: any) {
  return <SWRConfig value={{}}>{children}</SWRConfig>;
}
