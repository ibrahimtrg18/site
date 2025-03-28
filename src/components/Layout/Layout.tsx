"use client";

import { Suspense, useMemo } from "react";
import { Flex, FlexProps, Spinner } from "@chakra-ui/react";

import { Navbar } from "@/components";

type LayoutProps = FlexProps & {
  hasNavbar?: boolean;
  navbarHeight?: number;
};

export const Layout = (props: LayoutProps) => {
  const { children, hasNavbar = true, ...restProps } = props;

  const pt = [4, 5, 6].map((v) => `${v}rem`);

  const fallback = useMemo(
    () => (
      <Flex
        w="100%"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Flex>
    ),
    []
  );

  return (
    <Suspense fallback={fallback}>
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
    </Suspense>
  );
};
