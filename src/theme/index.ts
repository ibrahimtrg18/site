import { ColorMode, extendTheme } from "@chakra-ui/react";

import { Button } from "./button";
import { Text } from "./text";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  components: { Button, Text },
  styles: {
    global: (props: { colorMode: ColorMode }) => ({
      body: {
        color: props.colorMode === "dark" ? "white" : "black",
        bg: props.colorMode === "dark" ? "black" : "white",
      },
    }),
  },
});
