import { defineStyle } from "@chakra-ui/react";

const navigation = defineStyle({
  position: "relative",
  display: "flex",
  borderRadius: "8px",
  alignContent: "center",
  justifyContent: "center",
  px: "0.5rem",
  _after: {
    content: `""`,
    position: "absolute",
    bottom: "4px",
    border: "0px solid black",
    width: "0",
    transition: "all 0.25s ease-in",
  },
  _hover: {
    // bg: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.12) 100%)",
    _after: {
      width: "100%",
      border: "1px solid black",
    },
  },
});

export const Button = {
  variants: { navigation },
};
