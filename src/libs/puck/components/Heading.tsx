import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/react";
import { ComponentConfig } from "@measured/puck";

export const Heading: ComponentConfig<HeadingProps> = {
  fields: {
    children: {
      type: "text",
    },
    as: {
      type: "text",
    },
    fontSize: {
      type: "text",
    },
    padding: {
      type: "text",
    },
  },
  defaultProps: {
    children: "Heading",
    as: "h1",
  },
  render: ChakraHeading,
};
