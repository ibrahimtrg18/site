"use client";

import { Suspense, useMemo } from "react";
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
  Flex,
  Spinner,
} from "@chakra-ui/react";

type ContainerProps = ChakraContainerProps;

const Container = (props: ContainerProps) => {
  const {
    children,
    maxW = ["container.sm", "container.md", "container.lg", "container.xl"],
    ...restProps
  } = props;

  const fallback = useMemo(
    () => (
      <Flex
        w="100%"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Flex>
    ),
    []
  );

  return (
    <Suspense fallback={fallback}>
      <ChakraContainer maxW={maxW} {...restProps}>
        {children}
      </ChakraContainer>
    </Suspense>
  );
};

export default Container;
