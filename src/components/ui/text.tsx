import React from "react";

import { cn } from "@/utils/cn";

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  as?: "p" | "span" | "div";
};

export const Text = (props: TextProps) => {
  const { as: Tag = "p", className, ...restProps } = props;

  return <Tag className={cn(className)} {...restProps} />;
};
