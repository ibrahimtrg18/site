import React from "react";

import { cn } from "@/utils/cn";

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactElement;
};

/**
 * Merges props into the immediate child element, enabling the `asChild`
 * pattern (e.g. render a Button as a Link while keeping Button styles).
 */
export const Slot = ({ children, className, ...props }: SlotProps) => {
  if (!React.isValidElement(children)) return null;

  const childProps = children.props as Record<string, unknown>;

  return React.cloneElement(children, {
    ...props,
    ...childProps,
    className: cn(className, childProps.className as string),
  } as Record<string, unknown>);
};
