import React from "react";

import { cn } from "@/utils/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = (props: ContainerProps) => {
  const { children, className, ...restProps } = props;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-(--breakpoint-sm) px-4 sm:max-w-(--breakpoint-md) md:max-w-(--breakpoint-lg) lg:max-w-(--breakpoint-xl)",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
