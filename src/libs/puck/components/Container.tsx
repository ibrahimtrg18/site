/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentConfig, DropZone } from "@measured/puck";

import { Container as _Container } from "@/components";

const options = [
  { label: "sm", value: "container.sm" },
  { label: "md", value: "container.md" },
  { label: "lg", value: "container.lg" },
  { label: "xl", value: "container.xl" },
  { label: "2xl", value: "container.2xl" },
];

export const Container: ComponentConfig = {
  fields: {
    maxW: {
      type: "array",
      getItemSummary: (_, index) => `${options[index || 0].label}`,
      max: 5,
      arrayFields: {
        value: {
          type: "select",
          options: [
            { label: "container.sm", value: "container.sm" },
            { label: "container.md", value: "container.md" },
            { label: "container.lg", value: "container.lg" },
            { label: "container.xl", value: "container.xl" },
            { label: "container.2xl", value: "container.2xl" },
          ],
        },
      },
    },
  },
  defaultProps: {
    maxW: ["container.sm", "container.md", "container.lg", "container.xl"],
  },
  render: (props) => {
    return (
      <_Container {...props}>
        <DropZone zone={`components`} />
      </_Container>
    );
  },
};
