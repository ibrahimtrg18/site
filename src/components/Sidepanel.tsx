"use client";

import { Button, Flex, Image } from "@chakra-ui/react";
import NextLink from "next/link";

export const Sidepanel = () => {
  return (
    <Flex
      zIndex="10"
      direction="column"
      height="inherit"
      flex={1}
      bgColor="transparent"
      justifyContent="center"
      py={4}
    >
      <Flex
        direction="column"
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Flex>
          <Image
            width="5rem"
            height="5rem"
            loading="lazy"
            borderRadius="full"
            src="https://avatars.githubusercontent.com/u/41787706?s=400&u=fdb9f4fd5b4a0dd56a5fc2e148c23b5b0dc735b5&v=4"
            alt="Ibrahim Tarigan"
          />
        </Flex>
        {/* Menu */}
        <Flex as="nav" w="100%" direction="column" gap="0.5rem">
          <Button as={NextLink} href={{ pathname: "/me" }} variant="nav">
            Me
          </Button>
          <Button as={NextLink} href={{ pathname: "/about" }} variant="nav">
            About
          </Button>
          <Button as={NextLink} href={{ pathname: "/resume" }} variant="nav">
            Resume
          </Button>
          <Button as={NextLink} href={{ pathname: "/project" }} variant="nav">
            Project
          </Button>
          <Button as={NextLink} href={{ pathname: "/contact" }} variant="nav">
            Contact
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
