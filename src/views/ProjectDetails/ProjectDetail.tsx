"use client";

import React from "react";
import { Box, Divider, Flex, ModalProps } from "@chakra-ui/react";

import { Project, ProjectComponent } from "@/generated/graphql";
import { evaluateSync } from "@/libs/mdx";
import { ProjectDetailImage } from "@/views/Project/ProjectDetailImage";

type ProjectDetailModalProps = Partial<ModalProps> & {
  content: Extract<Project["content"][number]["component"], ProjectComponent>;
};

export const ProjectDetail = ({ content }: ProjectDetailModalProps) => {
  const { title, media, description } = content;

  const MDXContent = evaluateSync(String(description?.markdown));

  return (
    <Flex direction="column">
      <Flex height="inherit" direction="column" gap="2rem">
        {media.length > 0 && <ProjectDetailImage media={media} title={title} />}

        {media.length > 0 && <Divider orientation="horizontal" />}

        <Flex direction="column" flex={1} gap="1rem">
          <Box>
            <MDXContent />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
