import { Stack as _Stack, StackProps as _StackProps } from "@chakra-ui/react";
import { ComponentConfig, DropZone } from "@measured/puck";

const options = [
  { label: "sm", value: "container.sm" },
  { label: "md", value: "container.md" },
  { label: "lg", value: "container.lg" },
  { label: "xl", value: "container.xl" },
  { label: "2xl", value: "container.2xl" },
];

export const Stack: ComponentConfig<
  _StackProps & { margin?: [{ [key: string]: string }] }
> = {
  fields: {
    margin: {
      type: "array",
      getItemSummary: (_, index) => `${options[index || 0].label}`,
      max: 5,
      arrayFields: {
        value: { type: "text" },
      },
    },
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
    },
  },
  render: ({ margin, ...restProps }) => {
    const margins = margin?.map((item) => item.value);

    return (
      <_Stack {...restProps} margin={margins}>
        <DropZone zone="stack" />
      </_Stack>
    );
  },
};
