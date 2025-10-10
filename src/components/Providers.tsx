"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { AppProvider } from "@/contexts/AppContext/AppContext";
import { useMDXComponents } from "@/mdx-components";

import { Provider } from "./ui/provider";

type ProvidersProps = React.HTMLProps<HTMLElement>;

export const Providers = ({ children }: ProvidersProps) => {
  const mdxComponents = useMDXComponents();

  return (
    <Provider>
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
    </Provider>
  );
};
