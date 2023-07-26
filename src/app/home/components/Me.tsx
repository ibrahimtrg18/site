"use client";

import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { Section } from "../../../components/Section";
import { ResponseDataGetMeType } from "../../api/me/route";

type MeProps = ResponseDataGetMeType;

const Me = ({ me }: MeProps) => {
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
      <Flex direction="column" borderRadius="16px" gap="10px">
        {/* Intro */}
        <Text color="gray.700" fontSize="3rem" lineHeight="110%">
          {me.title}
        </Text>
        {me.body.split("\n").map((line) => (
          <Text key={line} color="gray.600" fontSize="2.5rem" lineHeight="110%">
            {line}
          </Text>
        ))}
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
