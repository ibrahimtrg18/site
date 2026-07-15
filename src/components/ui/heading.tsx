import React from "react";

import { cn } from "@/utils/cn";

export type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: HeadingSize;
};

const sizeStyles: Record<HeadingSize, string> = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl",
};

export const Heading = (props: HeadingProps) => {
  const { as: Tag = "h2", size = "xl", className, ...restProps } = props;

  return (
    <Tag
      className={cn("font-bold tracking-tight", sizeStyles[size], className)}
      {...restProps}
    />
  );
};
