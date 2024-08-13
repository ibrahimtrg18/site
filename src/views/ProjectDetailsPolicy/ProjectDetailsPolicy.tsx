"use client";

import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Project, ProjectComponent } from "@/generated/graphql";
import { evaluateSync } from "@/libs/mdx";

type ProjectDetailsPolicyProps = {
  content: Extract<Project["content"][number]["component"], ProjectComponent>;
};

export const ProjectDetailsPolicy = ({
  content,
}: ProjectDetailsPolicyProps) => {
  const MDXContent = evaluateSync(String(content?.privacyAndPolicy?.markdown));

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
