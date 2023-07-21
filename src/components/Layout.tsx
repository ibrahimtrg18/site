"use client";

import { Flex } from "@chakra-ui/react";

import { Sidepanel } from "./Sidepanel";

type LayoutProps = React.HTMLProps<HTMLElement> & {
  hasSidepanel?: boolean;
};

export const Layout = ({ children, hasSidepanel = true }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      position="relative"
      minHeight="100vh"
      bgColor="gray.50"
    >
      <Flex flex={1} direction="row">
        {hasSidepanel && <Sidepanel />}
        <Flex flex={11} padding={4}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
