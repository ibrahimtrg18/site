import { extendTheme } from "@chakra-ui/react";

import { Button } from "./button";
import { Text } from "./text";

export const theme = extendTheme({
  components: { Button, Text },
});
