import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      navigation: {
        position: "relative",
        display: "flex",
        borderRadius: "8px",
        alignContent: "center",
        justifyContent: "center",
        px: "0.5rem",
      },
    },
  },
});
