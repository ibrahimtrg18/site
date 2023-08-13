"use client";

import { Flex } from "@chakra-ui/react";

import { IProjects } from "../../../gql/project";
import { ProjectItem } from "./ProjectItem";

type ProjectListProps = {
  projects: IProjects;
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Flex>
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
    </Flex>
  );
};
