import { defineStyle } from "@chakra-ui/react";

const nav = defineStyle({
  display: "flex",
  borderRadius: 0,
  alignContent: "center",
  justifyContent: "center",
  px: "0.5rem",
  _hover: {
    bg: "linear-gradient(to right, rgba(255, 255, 255, 0.2) 20%, rgba(0, 0, 0, 0.2)) 80%",
  },
});

export const Button = {
  variants: { nav },
};
