import React from "react";

import { cn } from "@/utils/cn";

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeStyles = {
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-8 border-[3px]",
};

export const Spinner = ({ size = "md", className, ...props }: SpinnerProps) => (
  <div
    role="status"
    aria-label="Loading"
    className={cn(
      "animate-spin rounded-full border-current border-t-transparent",
      sizeStyles[size],
      className
    )}
    {...props}
  />
);
