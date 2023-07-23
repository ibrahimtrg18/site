"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { theme } from "../theme";

type ProvidersProps = React.HTMLProps<HTMLElement>;

export const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
