"use client";

import { Suspense } from "react";
import { Flex, Grid, Spinner } from "@chakra-ui/react";

import { useProjectContext } from "@/contexts/ProjectContext/ProjectContext";

import { ProjectItem } from "./ProjectItem";

export const ProjectList = () => {
  const { projects } = useProjectContext();

  return (
    <Suspense
      fallback={
        <Flex
          w="100%"
          minHeight="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Flex>
      }
    >
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
    </Suspense>
  );
};
