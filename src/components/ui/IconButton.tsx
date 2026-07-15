import React from "react";

import { cn } from "@/utils/cn";

import { Button, ButtonProps, ButtonSize } from "./Button";

export type IconButtonProps = ButtonProps;

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: "w-8 px-0",
  md: "w-10 px-0",
  lg: "w-12 px-0",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const { variant = "ghost", size = "md", className, ...restProps } = props;

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(iconSizeStyles[size], className)}
        {...restProps}
      />
    );
  }
);
