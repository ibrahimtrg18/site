"use client";

import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { Section } from "../../../components/Section";

const Me = () => {
  return (
    <Section>
      <Stack direction="row" alignItems="center" gap="2rem">
        {/* Intro */}
        <Flex direction="column" gap="0.5rem">
          <Text color="blackAlpha.800" fontSize="2rem" lineHeight="100%">
            Hi,
          </Text>
          <Text color="blackAlpha.800" fontSize="2rem" lineHeight="100%">
            I am Ibrahim,
          </Text>
          <Text color="blackAlpha.800" fontSize="2rem" lineHeight="100%">
            Fullstack Developer
          </Text>
          <Text color="blackAlpha.700" fontSize="1.5rem">
            Software Engineer with over 2 years of experience development
            applications also giving solutions for best development solution.
            Have a good understanding of Web and Mobile Design, have the ability
            to write clean code, debugging, and technical feasibility. I am also
            looking for ways to become a Good Software Engineer. Interested in
            the entire full-stack spectrum and working on ambitious projects
            with positive people. Loves cute animal, music, and game.
          </Text>
          <Text color="blackAlpha.600">
            I using Javascript/Typescript/Node.js
          </Text>
        </Flex>
      </Stack>
    </Section>
  );
};

export default Me;
