"use client";

import { createContext, useContext } from "react";

import { initialProjectState, useProject } from "./useProject.hook";
import { ProjectProviderProps } from "./ProjectContext.types";

const ProjectContext = createContext(initialProjectState);

export const ProjectProvider = ({
  children,
  projects,
}: ProjectProviderProps) => {
  const value = useProject({ projects });

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }

  return context;
};
