"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { IConfiguration } from "../app/api/configuration/route";
import { ConfigurationContextProvider } from "../app/contexts/configuration";
import { theme } from "../theme";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration: IConfiguration;
};

export const Providers = ({ children, configuration }: ProvidersProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ConfigurationContextProvider configuration={configuration.attributes}>
        {children}
      </ConfigurationContextProvider>
    </ChakraProvider>
  );
};
