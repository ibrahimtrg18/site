"use client";

import { Flex, Text } from "@chakra-ui/react";

import { useConfigurationContext } from "@/contexts/ConfigurationContext/ConfigurationContext";

const About = () => {
  const { about } = useConfigurationContext();

  const { description } = about;

  return (
    <Flex direction="column" gap="1rem">
      <Text as="h1" fontSize="1.5rem" fontWeight="bold">
        About
      </Text>
      <Text fontSize="1.25rem" textAlign="justify">
        {description?.text}
      </Text>
    </Flex>
  );
};

export default About;
