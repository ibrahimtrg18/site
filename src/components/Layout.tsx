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
        minHeight="100vh"
        position="relative"
        pt={navbarHeight}
        bgColor="gray.50"
        {...restProps}
      >
        {children}
      </Flex>
    </>
  );
};
