import { Heading as ChakraHeading } from "@chakra-ui/react";
import { ComponentConfig } from "@measured/puck";

export const Heading: ComponentConfig = {
  fields: {
    children: {
      type: "text",
    },
    padding: {
      type: "text",
    },
  },
  defaultProps: {
    children: "Heading",
  },
  render: ChakraHeading,
};
