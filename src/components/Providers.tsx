"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

import { AppProvider } from "@/contexts/AppContext/AppContext";
import { App } from "@/generated/graphql";
import { ApolloProvider } from "@/libs/apollo/client";
import { useMDXComponents } from "@/mdx-components";
import { theme } from "@/theme";
import { Configuration } from "@/types/Hygraph/models/Configuration";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  configuration?: Configuration | null;
  app?: App;
};

export const Providers = ({ children, app }: ProvidersProps) => {
  const mdxComponents = useMDXComponents();

  return (
    <ApolloProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <MDXProvider components={mdxComponents}>
          <AppProvider app={app}>{children}</AppProvider>
        </MDXProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
};
