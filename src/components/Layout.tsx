"use client";

import { Flex, FlexProps } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

type LayoutProps = FlexProps & {
  hasNavbar?: boolean;
  navbarHeight?: number;
};

const Layout = (props: LayoutProps) => {
  const { children, hasNavbar = true, ...restProps } = props;

  const pt = [4, 5, 6].map((v) => `${v}rem`);

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
        pt={pt}
        overflowY="auto"
        zIndex={1}
        {...restProps}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
