"use client";

import { Flex, FlexProps } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

type LayoutProps = FlexProps & {
  hasNavbar?: boolean;
  navbarHeight?: string;
};

export const Layout = ({
  children,
  hasNavbar = true,
  navbarHeight = "64px",
  ...restProps
}: LayoutProps) => {
  return (
    <>
      {hasNavbar && <Navbar />}
      <Flex
        direction="column"
        w="100%"
        h="100%"
        minHeight={`calc(100vh - ${navbarHeight})`}
        position="relative"
        bgColor="gray.50"
        {...restProps}
      >
        {children}
      </Flex>
    </>
  );
};
