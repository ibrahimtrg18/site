"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import { useConfigurationContext } from "../app/contexts/configuration";

export const UnderMaintain = () => {
  const { maintain } = useConfigurationContext();

  console.log("maintain", maintain);
  return (
    <Flex direction="column" px="1.25rem" py="1rem">
      <Flex direction="column" gap="1.5rem">
        <Flex>
          <Image
            width={100}
            height={100}
            src="/images/wrench.png"
            alt="Maintaining logo"
          />
        </Flex>
        <Flex direction="column" gap="0.5rem">
          <Text as="h1" fontSize="2rem">
            {maintain?.title}
          </Text>
          <Text>{maintain?.description}</Text>
          <Text>{maintain?.farewell}</Text>
          <Text>{maintain?.signature}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
