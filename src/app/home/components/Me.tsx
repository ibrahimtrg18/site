"use client";

import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import { useConfigurationContext } from "../../../contexts/configuration";

const Me = () => {
  const { about } = useConfigurationContext();

  const { greeting, whoiam, cv } = about;

  return (
    <Flex direction="column" gap="1rem">
      <Flex direction="column" borderRadius="16px" gap="0.625rem">
        {/* Intro */}
        <Text
          fontSize={["1.75rem", null, "2.5rem", null, "3rem"]}
          lineHeight="110%"
        >
          {greeting}
        </Text>
        {whoiam?.split("\\n").map((line) => (
          <Text
            key={line}
            fontSize={["1.5rem", null, "1.75rem", null, "2.5rem"]}
            lineHeight="110%"
          >
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
        <Button colorScheme="black" variant="link" as={Link} passHref href={cv}>
          Download CV
        </Button>
      </Flex>
    </Flex>
  );
};

export default Me;
