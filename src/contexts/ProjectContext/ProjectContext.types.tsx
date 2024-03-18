import { Project } from "@/types/Hygraph/models/Project";

export enum PROJECT_ACTION {
  SET_PROJECT_LIST = "SET_PROJECT_LIST",
}

export type ProjectAction = {
  type: PROJECT_ACTION;
  payload?: unknown;
};

export type ProjectState = {
  projects: Project[];
};

export type ProjectContext = {
  projects: Array<Project>;
};

export type ProjectProviderProps = React.ComponentPropsWithoutRef<"div"> &
  ProjectState;
