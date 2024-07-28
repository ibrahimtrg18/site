"use client";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { useConfigurationContext } from "@/contexts/ConfigurationContext/ConfigurationContext";

const Me = () => {
  const { about } = useConfigurationContext();

  const { greeting, whoami } = about;

  return (
    <Flex direction="column" gap="1rem">
      <Flex direction="column" borderRadius="16px" gap="0.625rem">
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
    </Flex>
  );
};

export default Me;
