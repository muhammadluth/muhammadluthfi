"use client";
import React, { createContext, useContext, ReactNode, useMemo } from "react";
import { ProjectsUIContextProps } from "@/lib/types/projects";

interface ProjectsUIProviderProps {
  children: ReactNode;
}

const ProjectsUIContext = createContext<ProjectsUIContextProps | null>(
  {} as ProjectsUIContextProps
);

export const useProjectsUIContext = () => {
  const context = useContext(ProjectsUIContext) as ProjectsUIContextProps;
  if (context === undefined) {
    throw new Error("expected context value to be set");
  }
  return context;
};

export const ProjectsUIConsumer = ProjectsUIContext.Consumer;

export function ProjectsUIProvider({
  children,
}: Readonly<ProjectsUIProviderProps>) {
  const value: ProjectsUIContextProps = useMemo(() => {
    return {};
  }, []);
  return (
    <ProjectsUIContext.Provider value={value}>
      {children}
    </ProjectsUIContext.Provider>
  );
}
