"use client";

import { Grid } from "@chakra-ui/react";

import { useProjectContext } from "../../contexts/ProjectContext/ProjectContext";

import { ProjectItem } from "./ProjectItem";

export const ProjectList = () => {
  const { projects } = useProjectContext();

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
