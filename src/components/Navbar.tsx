"use client";

import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useRef, useState } from "react";

import { Container } from "./Container";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeStyles, setActiveStyles] = useState({});

  const menu = {
    HOME: {
      title: "Home",
      pathname: "/home",
      ref: useRef<HTMLButtonElement>(null),
    },
    BLOG: {
      title: "Blog",
      pathname: "/blog",
      ref: useRef<HTMLButtonElement>(null),
    },
    PROJECT: {
      title: "Project",
      pathname: "/project",
      ref: useRef<HTMLButtonElement>(null),
    },
  };

  const currentPathname = Object.keys(menu).find((key) => {
    const _key = key as keyof typeof menu;

    return menu[_key].pathname === pathname;
  }) as keyof typeof menu;

  const clientWidth = useMemo(
    () => menu[currentPathname].ref.current?.clientWidth + "px",
    [menu, currentPathname]
  );
  const offsetLeft = useMemo(
    () => menu[currentPathname].ref.current?.offsetLeft + "px",
    [menu, currentPathname]
  );

  React.useEffect(() => {
    setActiveStyles({ width: clientWidth, left: offsetLeft });
  }, [
    menu.HOME.ref.current,
    menu.BLOG.ref.current,
    menu.PROJECT.ref.current,
    clientWidth,
    offsetLeft,
  ]);

  return (
    <Container
      display="flex"
      maxW={["container.sm", "container.md", "container.lg", "container.xl"]}
      as="nav"
      position="absolute"
      top="0"
      left="0"
      right="0"
      w="100%"
      zIndex={1}
      minHeight="4rem"
      flex={1}
      justifyContent="center"
      px={4}
    >
      <Flex
        direction="row"
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Image
          width="2rem"
          height="2rem"
          loading="lazy"
          borderRadius="full"
          src="https://avatars.githubusercontent.com/u/41787706?s=400&u=fdb9f4fd5b4a0dd56a5fc2e148c23b5b0dc735b5&v=4"
          alt="Ibrahim Tarigan"
        />
        <Spacer />
        {/* Menu */}
        <Flex
          as="nav"
          position="relative"
          direction="row"
          gap="1rem"
          _after={{
            content: `""`,
            position: "absolute",
            bottom: "-4px",
            height: "2px",
            backgroundColor: "black",
            transition: "all 0.5s ease-in-out",
            ...activeStyles,
          }}
        >
          {Object.keys(menu).map((key) => {
            const _key = key as keyof typeof menu;

            return (
              <Button
                ref={menu[_key].ref}
                key={menu[_key].pathname}
                as={NextLink}
                href={{ pathname: menu[_key].pathname }}
                variant="navigation"
              >
                {menu[_key].title}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
};
