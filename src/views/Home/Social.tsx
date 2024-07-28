"use client";

import React from "react";
import Link from "next/link";
import { Flex, IconButton } from "@chakra-ui/react";
import * as SocialIcon from "react-icons/io5";

import { useAppContext } from "@/contexts/AppContext/AppContext";

const Social = () => {
  const { socials } = useAppContext();

  if (!socials.length) {
    return null;
  }

  return (
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
  );
};

export default Social;
