import { Text as _Text, TextProps } from "@chakra-ui/react";
import { ComponentConfig } from "@measured/puck";

export const Text: ComponentConfig<TextProps> = {
  fields: {
    "aria-label": { type: "text" },
    variant: {
      type: "select",
      options: [{ label: "Body", value: "body" }],
    },
    size: {
      type: "select",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
  },
  defaultProps: {
    children: "Text",
  },
  render: _Text,
};
