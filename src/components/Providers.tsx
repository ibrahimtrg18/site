"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

import { ConfigurationContextProvider } from "../contexts/configuration";
import { ApolloProvider } from "../libs/apollo";
import { theme } from "../theme";
import { MDXComponents } from "../theme/MDXComponents";
import { Configuration } from "../types/Configuration";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration: Configuration | null;
};

export const Providers = ({ children, configuration }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
