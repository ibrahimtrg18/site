"use client";

import { Avatar, Button, Flex } from "@chakra-ui/react";

export const Sidepanel = () => {
  return (
    <Flex
      zIndex="10"
      direction="column"
      height="inherit"
      flex={1}
      bgColor="white"
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
          <Avatar
            size="lg"
            src="https://avatars.githubusercontent.com/u/41787706?s=400&u=fdb9f4fd5b4a0dd56a5fc2e148c23b5b0dc735b5&v=4"
          />
        </Flex>
        {/* Menu */}
        <Flex w="100%" direction="column" gap="0.5rem">
          <Button
            borderRadius={0}
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Me
          </Button>
          <Button
            borderRadius={0}
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            About
          </Button>
          <Button
            borderRadius={0}
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Resume
          </Button>
          <Button
            borderRadius={0}
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Project
          </Button>
          <Button
            borderRadius={0}
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Contact
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
