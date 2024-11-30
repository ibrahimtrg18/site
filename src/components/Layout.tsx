"use client";

import { Flex, FlexProps } from "@chakra-ui/react";

import { useAppContext } from "@/contexts/AppContext/AppContext";

import { Navbar } from "./Navbar";

type LayoutProps = FlexProps & {
  hasNavbar?: boolean;
  navbarHeight?: number;
};

export const Layout = ({
  children,
  hasNavbar = true,
  ...restProps
}: LayoutProps) => {
  const { menu: links = [], avatar } = useAppContext();

  const pt = [4, 5, 6].map((v) => `${v}rem`);

  return (
    <>
      {hasNavbar && <Navbar avatar={avatar} links={links} />}
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
