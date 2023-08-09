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
  const ptMq = [0, 0, 4, 2, 3].map((v) => `${v + navbarHeight}rem`);

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
        pt={ptMq}
        bgColor="gray.50"
        overflowY="auto"
        {...restProps}
      >
        {children}
      </Flex>
    </>
  );
};
