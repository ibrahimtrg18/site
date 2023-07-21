import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      className="Navbar"
      direction="column"
      position="absolute"
      top="0px"
      left="0px"
      right="0px"
      w="100%"
      h="4rem"
      zIndex="10"
      bgColor="white"
      justifyContent="center"
    >
      <Flex
        direction="row"
        alignItems="center"
        px="0.825rem"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Flex>
          <Avatar
            size="md"
            src="https://avatars.githubusercontent.com/u/41787706?s=400&u=fdb9f4fd5b4a0dd56a5fc2e148c23b5b0dc735b5&v=4"
          />
        </Flex>
        {/* Menu */}
        <Flex alignItems="center" gap="1rem">
          <Button
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Me
          </Button>
          <Button
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            About
          </Button>
          <Button
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Resume
          </Button>
          <Button
            variant="unstyled"
            px="0.5rem"
            _hover={{ bgColor: "gray.200" }}
          >
            Project
          </Button>
          <Button
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
