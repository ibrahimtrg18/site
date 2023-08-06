"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";

import { theme } from "../theme";

type ProvidersProps = React.HTMLProps<HTMLElement>;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </ChakraProvider>
  );
};
