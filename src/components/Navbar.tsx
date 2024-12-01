"use client";

import React, { Fragment, useId } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";

import { Container } from "@/components/Container";
import { Image } from "@/components/Image";
import { useConfigurationContext } from "@/contexts/ConfigurationContext/ConfigurationContext";
import { App } from "@/generated/graphql";

export type NavbarProps = {
  avatar: App["avatar"];
  links: App["menu"];
  hasNavbar?: boolean;
};

export const Navbar = (props: NavbarProps) => {
  const pathname = usePathname();
  const {
    links = [],
    avatar,
    hasNavbar = !pathname.endsWith("/editor"),
  } = props;
  const layoudId = useId();
  const { about } = useConfigurationContext();
  const { colorMode, toggleColorMode } = useColorMode();
  const { scrollY } = useScroll();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black");
  const boxShadow = useColorModeValue(
    "0 1px 2px 0 rgba(0, 0, 0, 0.10)",
    "0 1px 2px 0 rgba(255, 255, 255, 0.10)"
  );

  const _boxShadow = useTransform(scrollY, [0, 10], ["none", boxShadow]);

  if (!hasNavbar) {
    return <Fragment />;
  }

  return (
    <Box
      as={motion.nav}
      position="fixed"
      top="0"
      left="0"
      right="0"
      w="100%"
      zIndex={10}
      backgroundColor={bg}
      style={{ boxShadow: _boxShadow }}
      fontSize={["0.875rem", "1rem"]}
    >
      <Container
        display="flex"
        minHeight={["3rem", "4rem", "5rem"]}
        flex={1}
        justifyContent="center"
      >
        <Flex
          direction="row"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            width={32}
            height={32}
            loading="lazy"
            style={{ borderRadius: "9999px" }}
            src={avatar?.url}
            alt={about.fullName || "Avatar image picture"}
          />
          <Spacer />
          <Flex
            as="nav"
            position="relative"
            direction="row"
            gap="1rem"
            alignItems="center"
          >
            {links.map((link) => {
              return (
                <Button
                  key={link.pathname}
                  as={NextLink}
                  href={{ pathname: link.pathname }}
                  variant="navigation"
                  fontSize="inherit"
                >
                  {link.label}
                  {link.pathname === pathname && (
                    <Box
                      as={motion.div}
                      position="absolute"
                      bottom="-1px"
                      left="0"
                      right="0"
                      height="1px"
                      background={color}
                      layoutId={layoudId}
                    />
                  )}
                </Button>
              );
            })}
            <IconButton
              icon={colorMode === "dark" ? <IoSunny /> : <IoMoon />}
              variant="ghost"
              onClick={toggleColorMode}
              aria-label="Toggle Color Mode"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
