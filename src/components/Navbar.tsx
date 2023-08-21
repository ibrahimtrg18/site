"use client";

import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useRef, useState } from "react";

import { useConfigurationContext } from "../app/contexts/configuration";
import { Container } from "./Container";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeStyles, setActiveStyles] = useState({});
  const { menu = [] } = useConfigurationContext();

  const links = menu.map((menu) => ({
    ...menu,
    ref: useRef<HTMLButtonElement>(null),
  }));

  const activeLink = links.find((link) => {
    return link.pathname === pathname;
  });

  const clientWidth = useMemo(
    () => activeLink?.ref.current?.clientWidth + "px",
    [activeLink]
  );
  const offsetLeft = useMemo(
    () => activeLink?.ref.current?.offsetLeft + "px",
    [activeLink]
  );

  React.useEffect(() => {
    setActiveStyles({ width: clientWidth, left: offsetLeft });
  }, [clientWidth, offsetLeft]);

  return (
    <Container
      display="flex"
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
      as="nav"
      position="absolute"
      top="0"
      left="0"
      right="0"
      w="100%"
      zIndex={10}
      minHeight="4rem"
      flex={1}
      justifyContent="center"
      px={4}
    >
      <Flex
        direction="row"
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Image
          width="2rem"
          height="2rem"
          loading="lazy"
          borderRadius="full"
          src="https://avatars.githubusercontent.com/u/41787706?s=400&u=fdb9f4fd5b4a0dd56a5fc2e148c23b5b0dc735b5&v=4"
          alt="Ibrahim Tarigan"
        />
        <Spacer />
        {/* Menu */}
        <Flex
          as="nav"
          position="relative"
          direction="row"
          gap="1rem"
          _after={{
            content: `""`,
            position: "absolute",
            bottom: "-4px",
            height: "2px",
            backgroundColor: "black",
            transition: "all 0.5s ease-in-out",
            ...activeStyles,
          }}
        >
          {links.map((link) => {
            return (
              <Button
                ref={link.ref}
                key={link.pathname}
                as={NextLink}
                href={{ pathname: link.pathname }}
                variant="navigation"
              >
                {link.label}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};
