"use client";
import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { useAppContext } from "@/contexts/AppContext/AppContext";
import { evaluateSync } from "@/libs/mdx";

const Me = () => {
  const { greeting } = useAppContext();

  const MDXContent = evaluateSync(String(greeting?.markdown));

  return (
    <Flex direction="column" gap="1rem">
      <Flex direction="column" borderRadius="16px" gap="0.625rem">
        <MDXContent
          components={{
            h1: Heading,
            h2: Heading,
            h3: Heading,
          }}
        />
      </Flex>
    </Flex>
  );
};

export default Me;
