"use client";

import React from "react";
import { Box, Divider, Flex, ModalProps } from "@chakra-ui/react";

import { evaluateSync } from "@/libs/mdx";
import { Project } from "@/types/Hygraph/models/Project";
import { ProjectDetailImage } from "@/views/Project/ProjectDetailImage";

type ProjectDetailModalProps = Partial<ModalProps> & Project;

export const ProjectDetail = ({
  title,
  description,
  media,
}: ProjectDetailModalProps) => {
  const MDXContent = evaluateSync(description.markdown);

  return (
    <Flex direction="column">
      <Flex height="inherit" direction="column" gap="2rem">
        <ProjectDetailImage media={media} title={title} />

        <Divider orientation="horizontal" />

        <Flex direction="column" flex={1} gap="1rem">
          <Box>
            <MDXContent />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
