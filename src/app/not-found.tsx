import Link from "next/link";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      flex={1}
      flexDirection="column"
      justifyContent="center"
      align="center"
      gap={3}
    >
      <Heading>Not Found</Heading>
      <Text>Could not find requested resource</Text>
      <Button
        variant="ghost"
        leftIcon={<i className="fa-solid fa-arrow-left"></i>}
        as={Link}
        href="/"
        passHref
      >
        Return Home
      </Button>
    </Flex>
  );
}
