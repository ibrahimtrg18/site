"use client";

import { Flex } from "@chakra-ui/react";

import { useConfigurationContext } from "@/contexts/configuration";
import { evaluateSync } from "@/libs/mdx";

export const Maintenance = () => {
  const { maintenance } = useConfigurationContext();

  const MDXContent = evaluateSync(String(maintenance.description?.markdown));

  return (
    <Flex direction="column" px="1.25rem" py="1rem">
      <MDXContent />
    </Flex>
  );
};
