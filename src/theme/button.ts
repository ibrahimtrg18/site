import { defineStyle } from "@chakra-ui/react";

const navigation = defineStyle({
  position: "relative",
  display: "flex",
  borderRadius: "8px",
  alignContent: "center",
  justifyContent: "center",
  px: "0.5rem",
});

export const Button = {
  variants: { navigation },
};
