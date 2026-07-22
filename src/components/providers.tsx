"use client";

import React from "react";
import { MDXProvider } from "@mdx-js/react";

import { AppProvider } from "@/contexts/app-context/app-context";
import { useMDXComponents } from "@/mdx-components";
import type { SiteConfig } from "@/studio/config";

import { ColorModeProvider } from "./ui/color-mode";

type ProvidersProps = React.HTMLProps<HTMLElement> & {
  site: SiteConfig;
};

export const Providers = ({ site, children }: ProvidersProps) => {
  const mdxComponents = useMDXComponents();

  return (
    <ColorModeProvider>
      <MDXProvider components={mdxComponents}>
        <AppProvider
          app={{
            icon: site.icon,
            menu: site.menu,
          }}
        >
          {children}
        </AppProvider>
      </MDXProvider>
    </ColorModeProvider>
  );
};
