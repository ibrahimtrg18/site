"use client";

import React from "react";
import Link from "next/link";
import { Button, Flex } from "@chakra-ui/react";

import { useConfigurationContext } from "@/contexts/ConfigurationContext/ConfigurationContext";

const DownloadCV = () => {
  const { about } = useConfigurationContext();
  const { cv } = about;

  if (!cv) {
    return null;
  }

  return (
    <Flex ml="1rem">
      <Button fontSize="0.875rem" variant="ghost" as={Link} passHref href={cv}>
        Download CV
      </Button>
    </Flex>
  );
};

export default DownloadCV;
