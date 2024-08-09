"use client";

import { Flex, Text } from "@chakra-ui/react";

import { useAppContext } from "@/contexts/AppContext/AppContext";
import { evaluateSync } from "@/libs/mdx";

const About = () => {
  const { about } = useAppContext();

  const MDXContent = evaluateSync(String(about?.markdown));

  return (
    <Flex direction="column" gap="1rem">
      <Text as="h1" fontSize="1.5rem" fontWeight="bold">
        About me
      </Text>
      <MDXContent
        components={{
          p: ({ children }) => (
            <Text fontSize="1.25rem" textAlign="justify">
              {children}
            </Text>
          ),
        }}
      />
    </Flex>
  );
};

export default About;
