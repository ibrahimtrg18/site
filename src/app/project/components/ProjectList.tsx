"use client";

import { Grid } from "@chakra-ui/react";

import { Projects } from "../../../types/Project";
import { ProjectItem } from "./ProjectItem";

type ProjectListProps = {
  projects: Projects;
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={6}
    >
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
    </Grid>
  );
};
