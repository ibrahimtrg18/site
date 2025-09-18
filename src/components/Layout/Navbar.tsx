"use client";

import React, { useId } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

import { Container } from "@/components";
import { useAppContext } from "@/contexts/AppContext/AppContext";
import { useNavigation } from "@/hooks/useNavigation";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { menu: menus = [], icon } = useAppContext();
  const layoudId = useId();
  const { colorMode, toggleColorMode } = useColorMode();
  const { scrollY } = useScroll();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black");
  const boxShadow = useColorModeValue(
    "0 1px 2px 0 rgba(0, 0, 0, 0.10)",
    "0 1px 2px 0 rgba(255, 255, 255, 0.10)"
  );
  const { isNested } = useNavigation();

  const _boxShadow = useTransform(scrollY, [0, 10], ["none", boxShadow]);

  const handleGoBack = () => {
    router.back();
  };

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
          <Flex gap="1rem" alignItems="center">
            {isNested && (
              <IconButton
                icon={<i className="fa-solid fa-chevron-left"></i>}
                variant="ghost"
                onClick={handleGoBack}
                aria-label="Toggle Color Mode"
              />
            )}
            <Image
              width={32}
              height={32}
              loading="lazy"
              style={{ borderRadius: "9999px" }}
              src={String(icon)}
              alt="Avatar image picture"
            />
          </Flex>
          <Spacer />
          <Flex
            as="nav"
            position="relative"
            direction="row"
            gap="1rem"
            alignItems="center"
          >
            {menus.map((menu) => {
              return (
                <Button
                  key={menu?.pathname}
                  as={NextLink}
                  href={{ pathname: menu.pathname }}
                  variant="navigation"
                  fontSize="inherit"
                >
                  {menu.label}
                  {menu.pathname === pathname && (
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
              icon={
                colorMode === "dark" ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )
              }
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
