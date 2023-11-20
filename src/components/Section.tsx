"use client";

import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

type SectionProps = FlexProps;

export const Section = ({ children, ...restProps }: SectionProps) => {
  return (
    <Flex
      as="section"
      direction="column"
      justifyContent="center"
      {...restProps}
    >
      {children}
    </Flex>
  );
};
