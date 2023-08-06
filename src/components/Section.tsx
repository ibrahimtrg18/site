"use client";

import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

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
