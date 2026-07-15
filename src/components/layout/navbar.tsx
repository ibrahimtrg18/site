"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container } from "@/components";
import { Button, IconButton } from "@/components/ui";
import { useAppContext } from "@/contexts/app-context/app-context";
import { useNavigation } from "@/hooks/useNavigation";

import { ColorModeButton, useColorModeValue } from "../ui/color-mode";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { menu: menus = [], icon } = useAppContext();
  const layoutId = useId();
  const { scrollY } = useScroll();
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
    <motion.nav
      style={{ boxShadow }}
      className="fixed inset-x-0 top-0 z-10 w-full bg-white text-sm dark:bg-black sm:text-base"
    >
      <Container className="flex min-h-12 justify-center sm:min-h-16 md:min-h-20">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-4">
            {isNested && (
              <IconButton
                variant="ghost"
                onClick={handleGoBack}
                aria-label="Go back"
              >
                <i className="fa-solid fa-chevron-left" />
              </IconButton>
            )}
            <Image
              width={32}
              height={32}
              loading="lazy"
              className="rounded-full"
              src={String(icon)}
              alt="Avatar image picture"
            />
          </div>
          <nav className="relative flex items-center gap-4">
            {menus.map((menu) => {
              return (
                <Button
                  asChild
                  key={menu?.pathname}
                  variant="navigation"
                  className="text-inherit"
                >
                  <Link href={{ pathname: menu.pathname }}>
                    {menu.label}
                    {menu.pathname === pathname && (
                      <motion.div
                        layoutId={layoutId}
                        className="absolute inset-x-0 -bottom-px h-px bg-black dark:bg-white"
                      />
                    )}
                  </Link>
                </Button>
              );
            })}
            <ColorModeButton />
          </nav>
        </div>
      </Container>
    </motion.nav>
  );
};
