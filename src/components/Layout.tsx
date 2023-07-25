"use client";

import { Flex, FlexProps } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

type LayoutProps = FlexProps & {
  hasSidepanel?: boolean;
};

export const Layout = ({
  children,
  hasSidepanel = true,
  ...restProps
}: LayoutProps) => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      position="relative"
      minHeight="100vh"
      bgColor="gray.50"
      {...restProps}
    >
      <Flex direction="column">
        {hasSidepanel && <Navbar />}
        <Flex flex={1} padding={4}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
