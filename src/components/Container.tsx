"use client";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";

type ContainerProps = ChakraContainerProps;

export const Container = (props: ContainerProps) => {
  const {
    children,
    maxW = ["container.sm", "container.md", "container.lg", "container.xl"],
    ...rest
  } = props;

  return (
    <ChakraContainer maxW={maxW} {...rest}>
      {children}
    </ChakraContainer>
  );
};
