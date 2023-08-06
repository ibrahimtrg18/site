"use client";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from "@chakra-ui/react";

type ContainerProps = ChakraContainerProps;

export const Container = (props: ContainerProps) => {
  const { children, ...rest } = props;

  return <ChakraContainer {...rest}>{children}</ChakraContainer>;
};
