"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { IConfiguration } from "../app/api/configuration/route";
import { ConfigurationContextProvider } from "../app/contexts/configuration";
import { ApolloProvider } from "../lib/ApolloProvider";
import { theme } from "../theme";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration: Partial<IConfiguration>;
};

export const Providers = ({ children, configuration }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ChakraProvider theme={theme}>
        <ConfigurationContextProvider configuration={configuration}>
          {children}
        </ConfigurationContextProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};
