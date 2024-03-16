import { useReducer } from "react";

import { Project } from "@/types/Project";

import {
  PROJECT_ACTION,
  ProjectAction,
  ProjectState,
} from "./ProjectContext.types";

const projectReducer = (state: ProjectState, action: ProjectAction) => {
  switch (action.type) {
    case PROJECT_ACTION.SET_PROJECT_LIST:
      return { ...state };
    default:
      return { ...state };
  }
};

export const initialProjectState: ProjectState = {
  projects: [],
};

export const useProject = (
  initialProjects: ProjectState | undefined = initialProjectState
) => {
  const [{ projects }, dispatch] = useReducer(
    projectReducer,
    initialProjects || initialProjectState
  );

  const setProjectList = (projects: Project[]) => {
    dispatch({ type: PROJECT_ACTION.SET_PROJECT_LIST, payload: projects });
  };

  return {
    projects,
    setProjectList,
  };
};
