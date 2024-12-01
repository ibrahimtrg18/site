import { Stack as _Stack, StackProps as _StackProps } from "@chakra-ui/react";
import { ComponentConfig, DropZone } from "@measured/puck";

export const Stack: ComponentConfig<_StackProps> = {
  fields: {
    gap: {
      type: "text",
    },
    direction: {
      type: "object",
      objectFields: {
        base: { type: "text" },
        sm: { type: "text" },
        md: { type: "text" },
        lg: { type: "text" },
        xl: { type: "text" },
        "2xl": { type: "text" },
      },
    },
  },
  defaultProps: {
    direction: {
      base: "column",
      md: "row",
    },
  },
  render: (props) => {
    return (
      <_Stack {...props}>
        <DropZone zone="stack" />
      </_Stack>
    );
  },
};
