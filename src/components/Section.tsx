"use client";

import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

type SectionProps = FlexProps;

export const Section = ({ children, ...restProps }: SectionProps) => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      position="relative"
      padding="1rem"
      {...restProps}
    >
      {children}
    </Flex>
  );
};
