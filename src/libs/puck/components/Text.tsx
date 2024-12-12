import { Text as _Text, TextProps } from "@chakra-ui/react";
import { ComponentConfig } from "@measured/puck";

export const Text: ComponentConfig<TextProps> = {
  fields: {
    children: {
      type: "text",
    },
    fontSize: {
      type: "text",
    },
  },
  defaultProps: {
    children: "Text",
  },
  render: _Text,
};
