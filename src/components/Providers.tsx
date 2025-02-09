"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

import { AppProvider } from "@/contexts/AppContext/AppContext";
import { useMDXComponents } from "@/mdx-components";
import { theme } from "@/theme";

type ProvidersProps = React.HTMLProps<HTMLElement>;

export const Providers = ({ children }: ProvidersProps) => {
  const mdxComponents = useMDXComponents();

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <MDXProvider components={mdxComponents}>
          <AppProvider
            app={{
              icon: "/assets/icon.png",
              menu: [
                { pathname: "/", label: "Home" },
                { pathname: "/projects", label: "Projects" },
              ],
            }}
          >
            {children}
          </AppProvider>
        </MDXProvider>
      </ChakraProvider>
    </>
  );
};
