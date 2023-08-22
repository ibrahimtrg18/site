"use client";

import { Flex, FlexProps } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

type LayoutProps = FlexProps & {
  hasNavbar?: boolean;
  navbarHeight?: number;
};

export const Layout = ({
  children,
  hasNavbar = true,
  navbarHeight = 4,
  ...restProps
}: LayoutProps) => {
  const pyMq = [0, 0, 4, 2, 3].map((v) => `${v + navbarHeight}rem`);

  return (
    <>
      {hasNavbar && <Navbar />}
      <Flex
        as="main"
        direction="column"
        w="100%"
        h="100%"
        minHeight="100vh"
        position="relative"
        py={pyMq}
        overflowY="auto"
        zIndex={1}
        {...restProps}
      >
        {children}
      </Flex>
    </>
  );
};
