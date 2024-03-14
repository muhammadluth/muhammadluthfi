import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Luthfi | Projects",
  description: "My projects menu",
};

interface ProjectsLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({
  children,
}: Readonly<ProjectsLayoutProps>) {
  return <div>{children}</div>;
}
