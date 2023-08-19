import { Text } from "@chakra-ui/react";

export const MDXComponents = {
  p: Text,
  h1: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h1">{children}</Text>
  ),
  h2: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h2">{children}</Text>
  ),
  h3: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h3">{children}</Text>
  ),
  h4: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h4">{children}</Text>
  ),
  h5: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h5">{children}</Text>
  ),
  h6: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h6">{children}</Text>
  ),
};
