import React from "react";

import { cn } from "@/utils/cn";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    className={cn(
      "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800",
      className
    )}
    {...props}
  />
);
