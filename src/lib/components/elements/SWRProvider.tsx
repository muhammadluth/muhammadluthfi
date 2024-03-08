"use client";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";

interface SWRProviderProps {
  children: ReactNode;
  fallback?: any;
}

export function SWRProvider({
  children,
  fallback,
}: Readonly<SWRProviderProps>) {
  return <SWRConfig value={{ fallback }}>{children}</SWRConfig>;
}
