"use client";

import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";

type ContainerProps = ChakraContainerProps;

export const Container = (props: ContainerProps) => {
  const {
    children,
    maxW = ["breakpoint-sm", "breakpoint-md", "breakpoint-lg", "breakpoint-xl"],
    ...restProps
  } = props;

  return (
    <ChakraContainer maxW={maxW} {...restProps}>
      {children}
    </ChakraContainer>
  );
};
