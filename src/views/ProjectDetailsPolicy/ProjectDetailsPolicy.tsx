"use client";

import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { evaluateSync } from "@/libs/mdx";
import { Project } from "@/types/Hygraph/models/Project";

type ProjectDetailModalProps = Project;

export const ProjectDetailsPolicy = ({
  privacyPolicy,
}: ProjectDetailModalProps) => {
  const MDXContent = evaluateSync(String(privacyPolicy?.text?.markdown));

  return (
    <Flex direction="column">
      <Flex height="inherit" direction="column" gap="2rem">
        <Flex direction="column" flex={1} gap="1rem">
          <Box>
            <MDXContent />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
