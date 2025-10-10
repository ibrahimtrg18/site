import { createSystem, defaultConfig } from "@chakra-ui/react";

import { buttonRecipe } from "./button";
import { textRecipe } from "./text";

export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
      Button: buttonRecipe,
      Text: textRecipe,
    },
    tokens: {
      fonts: {
        heading: { value: `'Geist', sans-serif` },
        body: { value: `'Geist', sans-serif` },
      },
    },
  },
});
