import NextImage from "next/image";
import {
  Box,
  Code,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <Heading as="h1" size="3xl" my={3} {...props} />,
    h2: (props) => <Heading as="h2" size="2xl" my={2.5} {...props} />,
    h3: (props) => <Heading as="h3" size="xl" my={2} {...props} />,
    h4: (props) => <Heading as="h4" size="lg" my={1.75} {...props} />,
    h5: (props) => <Heading as="h5" size="md" my={1.5} {...props} />,
    h6: (props) => <Heading as="h6" size="sm" my={1.5} {...props} />,
    p: (props) => <Text my={0.5} {...props} />,
    a: (props) => <Link color="teal.500" {...props} />,
    ul: (props) => <UnorderedList spacing={2} {...props} />,
    ol: (props) => <OrderedList spacing={2} {...props} />,
    li: (props) => <ListItem {...props} />,
    blockquote: (props) => (
      <Box
        as="blockquote"
        pl={4}
        borderLeft="4px solid"
        borderColor="gray.200"
        {...props}
      />
    ),
    code: (props) => <Code {...props} />,
    pre: (props) => (
      <Box as="pre" p={4} bg="gray.100" rounded="md" {...props} />
    ),
    table: (props) => <Table {...props} />,
    thead: (props) => <Thead {...props} />,
    tbody: (props) => <Tbody {...props} />,
    tr: (props) => <Tr {...props} />,
    th: (props) => <Th {...props} />,
    td: (props) => <Td {...props} />,
    img: (props) => <Image {...props} as={NextImage} alt="" />,
  };
}
