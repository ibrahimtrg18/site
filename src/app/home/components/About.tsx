"use client";

import { Flex, Text } from "@chakra-ui/react";

import { IAbout } from "../../api/about/route";

type AboutProps = {
  about: IAbout;
};

const About = (props: AboutProps) => {
  const {
    about: {
      description: { text },
    },
  } = props;

  return (
    <Flex direction="column" gap="1rem">
      <Text as="h1" fontSize="1.5rem" fontWeight="bold">
        About
      </Text>
      <Text fontSize="1.25rem" textAlign="justify">
        {text}
      </Text>
    </Flex>
  );
};

export default About;
