import { defineStyle } from "@chakra-ui/react";

const nav = defineStyle({
  display: "flex",
  borderRadius: "8px",
  alignContent: "center",
  justifyContent: "center",
  px: "0.5rem",
  _hover: {
    bg: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 20%, rgba(0, 0, 0, 0.12) 100%)",
  },
});

export const Button = {
  variants: { nav },
};
