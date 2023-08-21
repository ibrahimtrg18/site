"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

import { ConfigurationContextProvider } from "../contexts/configuration";
import { IConfiguration } from "../graphql/queries/configuration";
import { ApolloProvider } from "../lib/ApolloProvider";
import { theme } from "../theme";
import { MDXComponents } from "../theme/MDXComponents";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration: IConfiguration;
};

export const Providers = ({ children, configuration }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ChakraProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <ConfigurationContextProvider configuration={configuration}>
            {children}
          </ConfigurationContextProvider>
        </MDXProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};
