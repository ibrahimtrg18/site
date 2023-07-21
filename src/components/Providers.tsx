"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type ProvidersProps = React.HTMLProps<HTMLElement>;

export const Providers = ({ children }: ProvidersProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
