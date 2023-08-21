import { defineStyle } from "@chakra-ui/react";

const defaultTextProps = defineStyle({
  color: "gray.700",
});

export const Text = {
  baseStyle: defaultTextProps,
  variants: {
    h1: {
      fontSize: "4xl",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "3xl",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "2xl",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "xl",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "lg",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "md",
      fontWeight: "bold",
    },
  },
};
