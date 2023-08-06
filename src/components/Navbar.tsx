"use client";

import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

import { Container } from "./Container";

export const Navbar = () => {
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
      zIndex={1}
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
        <Flex as="nav" direction="row" gap="1rem">
          <Button
            as={NextLink}
            href={{ pathname: "/home" }}
            variant="navigation"
          >
            Home
          </Button>
          <Button
            as={NextLink}
            href={{ pathname: "/blog" }}
            variant="navigation"
          >
            Blog
          </Button>
          <Button
            as={NextLink}
            href={{ pathname: "/project" }}
            variant="navigation"
          >
            Portfolio
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
