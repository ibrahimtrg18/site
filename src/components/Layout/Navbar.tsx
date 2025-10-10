"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Box, Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components";
import { useAppContext } from "@/contexts/AppContext/AppContext";
import { useNavigation } from "@/hooks/useNavigation";

import { ColorModeButton, useColorModeValue } from "../ui/color-mode";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { menu: menus = [], icon } = useAppContext();
  const layoudId = useId();
  const { scrollY } = useScroll();
  const color = useColorModeValue("black", "white");
  const bg = useColorModeValue("white", "black");
  const _boxShadow = useColorModeValue(
    "0 1px 2px 0 rgba(0, 0, 0, 0.10)",
    "0 1px 2px 0 rgba(255, 255, 255, 0.10)"
  );
  const { isNested } = useNavigation();

  const boxShadow = useTransform(scrollY, [0, 10], ["none", _boxShadow]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <motion.nav style={{ boxShadow }}>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        w="100%"
        zIndex={10}
        backgroundColor={bg}
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
                  variant="ghost"
                  onClick={handleGoBack}
                  aria-label="Toggle Color Mode"
                >
                  <i className="fa-solid fa-chevron-left" />
                </IconButton>
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
                    asChild
                    key={menu?.pathname}
                    fontSize="inherit"
                    variant={"navigation" as unknown as never}
                  >
                    <Link href={{ pathname: menu.pathname }}>
                      {menu.label}
                      {menu.pathname === pathname && (
                        <Box
                          asChild
                          position="absolute"
                          bottom="-1px"
                          left="0"
                          right="0"
                          height="1px"
                          background={color}
                        >
                          <motion.div layoutId={layoudId} />
                        </Box>
                      )}
                    </Link>
                  </Button>
                );
              })}
              <ColorModeButton />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </motion.nav>
  );
};
