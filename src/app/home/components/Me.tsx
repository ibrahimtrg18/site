"use client";

import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";

import { Section } from "../../../components/Section";

const Me = () => {
  return (
    <Section justifyContent="center" gap="1rem">
      <Flex w="fit-content" bgColor="rgba(255, 255, 255, 0.6)">
        <IconButton icon={<IoLogoGithub />} aria-label="github" rounded="8px" />
      </Flex>
      <Flex
        direction="column"
        w="fit-content"
        padding="24px 32px"
        borderRadius="16px"
        backdropFilter="blur(1.5px)"
        bgColor="rgba(255, 255, 255, 0.1)"
        border="1px solid rgba(255, 255, 255, 0.4)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        gap="10px"
      >
        {/* Intro */}
        <Text color="blackAlpha.800" fontSize="6rem" lineHeight="110%">
          Hi,
          <br />
          I am Ibrahim T.
          <br />
          Fullstack Developer
        </Text>
        {/* <Text color="blackAlpha.700" fontSize="1.5rem">
          Software Engineer with over 2 years of experience development
          applications also giving solutions for best development solution. Have
          a good understanding of Web and Mobile Design, have the ability to
          write clean code, debugging, and technical feasibility. I am also
          looking for ways to become a Good Software Engineer. Interested in the
          entire full-stack spectrum and working on ambitious projects with
          positive people. Loves cute animal, music, and game.
        </Text> */}
        <Text color="blackAlpha.600" fontSize="1.5rem">
          I using Javascript/Typescript/Node.js
        </Text>
      </Flex>
      <Flex gap="16px">
        <Button colorScheme="black" variant="link">
          Download CV
        </Button>
        <Button colorScheme="black" variant="link">
          Portfolio
        </Button>
      </Flex>
    </Section>
  );
};

export default Me;
