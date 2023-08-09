"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const UnderMaintain = () => {
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
            Under Maintenance.
          </Text>
          <Text>
            Apologies for the inconvenience. Our website is currently undergoing
            maintenance to make things even better for you. Some features might
            be temporarily unavailable, but rest assured, your data is safe with
            us. We&apos;re working hard to finish up, and we appreciate your
            patience. Please check back soon!
          </Text>
          <Text>Thank you,</Text>
          <Text>Ibrahim</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
