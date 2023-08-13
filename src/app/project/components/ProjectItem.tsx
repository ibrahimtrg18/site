"use client";

import { Flex } from "@chakra-ui/react";

import { IProject } from "../../../gql/project";

type ProjectItemProps = IProject;

export const ProjectItem = ({ title }: ProjectItemProps) => {
  return <Flex>{title}</Flex>;
};
