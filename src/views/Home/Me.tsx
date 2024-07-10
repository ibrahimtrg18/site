"use client";
import React from "react";
import Link from "next/link";
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import * as SocialIcon from "react-icons/io5";

import { useAppContext } from "@/contexts/AppContext/AppContext";
import { useConfigurationContext } from "@/contexts/ConfigurationContext/ConfigurationContext";

const Me = () => {
  const { about } = useConfigurationContext();
  const { socials } = useAppContext();

  const { greeting, whoami, cv } = about;

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
        {whoami?.split("\\n").map((line) => (
          <Text
            key={line}
            fontSize={["1.5rem", null, "1.75rem", null, "2.5rem"]}
            lineHeight="110%"
          >
            {line}
          </Text>
        ))}
      </Flex>
      {socials.length && (
        <Flex gap="1rem">
          {socials.map(({ id, icon, label: _label, link: _link }) => {
            const Icon = SocialIcon[icon as unknown as keyof typeof SocialIcon];
            const link = _link as string;
            const label = _label as string;

            return (
              <IconButton
                key={id}
                as={Link}
                variant="ghost"
                icon={<Icon />}
                href={link}
                passHref
                aria-label={label}
                rounded="8px"
              />
            );
          })}
        </Flex>
      )}
      {cv && (
        <Flex gap="2rem">
          <Button
            colorScheme="black"
            variant="link"
            as={Link}
            passHref
            href={cv}
          >
            Download CV
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Me;
