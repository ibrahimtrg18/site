import React from "react";

import { cn } from "@/utils/cn";

import { Slot } from "./Slot";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export const Card = (props: CardProps) => {
  const { asChild, className, children, ...restProps } = props;

  const classes = cn(
    "flex flex-col rounded-md border border-neutral-200 bg-white shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950",
    className
  );

  if (asChild) {
    return (
      <Slot className={classes} {...restProps}>
        {children as React.ReactElement}
      </Slot>
    );
  }

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col", className)} {...props} />
);

export const CardBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1", className)} {...props} />
);
