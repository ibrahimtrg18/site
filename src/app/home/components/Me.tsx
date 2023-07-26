"use client";

import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { Section } from "../../../components/Section";

const Me = () => {
  return (
    <Section
      as="section"
      direction="column"
      width={{
        sm: "48rem",
        md: "48rem",
        base: "48rem",
        lg: "72rem",
        xl: "80rem",
      }}
      justifyContent="center"
      mx="auto"
      my="2rem"
      gap="1rem"
    >
      <Flex
        direction="column"
        // padding="24px 32px"
        borderRadius="16px"
        // backdropFilter="blur(1.5px)"
        // bgColor="rgba(255, 255, 255, 0.1)"
        // border="1px solid rgba(255, 255, 255, 0.4)"
        // boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        gap="10px"
      >
        {/* Intro */}
        <Text color="gray.700" fontSize="3rem" lineHeight="110%">
          {`Hello, I'm Ibrahim 👋🏼`}
        </Text>
        <Text color="gray.600" fontSize="2.5rem" lineHeight="110%">
          {`I'm a Software Engineer @ Delman Data Lab,`}
          <br />
          {`and Living in Indonesia, Tangerang.`}
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
        {/* <Text color="blackAlpha.600" fontSize="1.25rem">
          I using Javascript/Typescript/Node.js
        </Text> */}
      </Flex>
      <Flex gap="1rem">
        <IconButton
          as={Link}
          variant="ghost"
          icon={<IoLogoGithub />}
          href="https://github.com/ibrahimtrg18"
          passHref
          aria-label="Github"
          rounded="8px"
        />
        <IconButton
          as={Link}
          variant="ghost"
          icon={<IoLogoLinkedin />}
          href="https://www.linkedin.com/in/ibrahimtrg18/"
          passHref
          aria-label="LinkedIn"
          rounded="8px"
        />
      </Flex>
      <Flex gap="2rem">
        <Button colorScheme="black" variant="link">
          Download CV
        </Button>
      </Flex>
    </Section>
  );
};

export default Me;
