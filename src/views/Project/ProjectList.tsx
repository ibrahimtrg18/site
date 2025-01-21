"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Grid } from "@chakra-ui/react";

import { useProjectContext } from "@/contexts/ProjectContext/ProjectContext";
import { useNavigation } from "@/hooks/useNavigation";

import { ProjectItem } from "./ProjectItem";

export const ProjectList = () => {
  const { projects } = useProjectContext();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");
  const { removeQuery } = useNavigation();

  useEffect(() => {
    if (projects.findIndex((project) => project.id === projectId) >= 0) {
      return;
    }

    removeQuery("projectId");
  }, [projectId, projects, removeQuery]);

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
