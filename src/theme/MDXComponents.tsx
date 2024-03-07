import { List, ListItem, Text } from "@chakra-ui/react";

export const MDXComponents = {
  h1: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h1" variant="h1">
      {children}
    </Text>
  ),
  h2: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h2" variant="h2">
      {children}
    </Text>
  ),
  h3: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h3" variant="h3">
      {children}
    </Text>
  ),
  h4: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h4" variant="h4">
      {children}
    </Text>
  ),
  h5: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h5" variant="h5">
      {children}
    </Text>
  ),
  h6: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Text as="h6" variant="h6">
      {children}
    </Text>
  ),
  p: Text,
  ul: List,
  li: ListItem,
};
