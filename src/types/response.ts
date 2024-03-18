import { Apps } from "./Hygraph/models/App";
import { Configurations } from "./Hygraph/models/Configuration";
import { Project, Projects } from "./Hygraph/models/Project";
import { Technologies } from "./Hygraph/models/Technology";

export type ResponseGetApps = {
  apps: Apps;
};

export type ResponseGetConfigurations = {
  configurations: Configurations;
};

export type ResponseGetProjects = {
  projects: Projects;
};

export type ResponseGetProject = {
  project: Project;
};

export type ResponseGetTechnologies = {
  technologies: Technologies;
};
