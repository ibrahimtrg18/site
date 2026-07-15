import React from "react";

import { cn } from "@/utils/cn";

import { Slot } from "./slot";

export type ButtonVariant = "solid" | "ghost" | "navigation";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300",
  ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
  navigation:
    "relative bg-transparent px-2 hover:bg-neutral-100 dark:hover:bg-neutral-800",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-5 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      asChild,
      variant = "solid",
      size = "md",
      className,
      children,
      ...restProps
    } = props;

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
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
      <button ref={ref} className={classes} {...restProps}>
        {children}
      </button>
    );
  }
);
