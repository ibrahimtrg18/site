"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

import { AppProvider } from "../contexts/AppContext/AppContext";
import { ConfigurationContextProvider } from "../contexts/configuration";
import { ApolloProvider } from "../libs/apollo/client";
import { theme } from "../theme";
import { MDXComponents } from "../theme/MDXComponents";
import { App } from "../types/App";
import { Configuration } from "../types/Configuration";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration: Configuration | null;
  app: App | null;
};

export const Providers = ({ children, configuration, app }: ProvidersProps) => {
  return (
    <ApolloProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <AppProvider app={app}>
            <ConfigurationContextProvider configuration={configuration}>
              {children}
            </ConfigurationContextProvider>
          </AppProvider>
        </MDXProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};
