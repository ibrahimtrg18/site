import React from "react";

import { cn } from "@/utils/cn";

export type FlexProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  direction?: "row" | "column";
};

export const Flex = (props: FlexProps) => {
  const { as: Tag = "div", direction = "row", className, ...restProps } = props;

  return (
    <Tag
      className={cn("flex", direction === "column" && "flex-col", className)}
      {...restProps}
    />
  );
};
