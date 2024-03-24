"use client";
import { Suspense } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  Flex,
  Spinner,
} from "@chakra-ui/react";

type ContainerProps = ChakraContainerProps;

export const Container = (props: ContainerProps) => {
  const {
    children,
    maxW = ["container.sm", "container.md", "container.lg", "container.xl"],
    ...rest
  } = props;

  return (
    <Suspense
      fallback={
        <Flex
          w="100%"
          minHeight="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner />
        </Flex>
      }
    >
      <ChakraContainer maxW={maxW} {...rest}>
        {children}
      </ChakraContainer>
    </Suspense>
  );
};
