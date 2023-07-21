import { Flex } from "@chakra-ui/react";

import { Navbar } from "./Navbar";

type LayoutProps = React.HTMLProps<HTMLElement> & {
  hasNavbar?: boolean;
};

export const Layout = ({ children, hasNavbar = true }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      position="relative"
      minHeight="100vh"
      bgColor="gray.50"
    >
      {hasNavbar && <Navbar />}
      {children}
    </Flex>
  );
};
