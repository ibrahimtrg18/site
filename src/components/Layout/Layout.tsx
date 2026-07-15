"use client";

import React, { Suspense } from "react";

import { Navbar } from "@/components";
import { Spinner } from "@/components/ui";
import { cn } from "@/utils/cn";

type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  hasNavbar?: boolean;
};

export const Layout = (props: LayoutProps) => {
  const { children, hasNavbar = true, className, ...restProps } = props;

  const fallback = (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );

  return (
    <Suspense fallback={fallback}>
      {hasNavbar && <Navbar />}
      <main
        className={cn(
          "relative z-[1] flex h-full min-h-screen w-full flex-col overflow-y-auto pt-16 sm:pt-20 md:pt-24",
          className
        )}
        {...restProps}
      >
        {children}
      </main>
    </Suspense>
  );
};
