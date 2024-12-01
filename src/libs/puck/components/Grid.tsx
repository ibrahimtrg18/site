/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid as _Grid, GridItem as _GridItem } from "@chakra-ui/react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { uniqueId } from "lodash";

export const Grid: ComponentConfig = {
  resolveData: ({ props }, { lastData }) => {
    if (lastData?.props.items.length === props.items.length) {
      return { props };
    }

    return {
      props: {
        ...props,
        items: props.items.map((item: any) => ({
          ...item,
          id: item.id ?? uniqueId(),
        })),
      },
    };
  },
  fields: {
    flexDirection: {
      type: "select",
      options: [
        { label: "row", value: "row" },
        { label: "column", value: "column" },
        { label: "row-reverse", value: "row-reverse" },
        { label: "column-reverse", value: "column-reverse" },
      ],
    },
    items: {
      type: "array",
      getItemSummary: (col) =>
        `Column (span ${
          col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"
        })`,
      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
          min: 0,
          max: 12,
        },
      },
    },
    gap: {
      type: "number",
      min: 0,
      max: 12,
    },
  },
  defaultProps: {
    items: [{}, {}],
    gap: 4,
  },
  render: ({ items, gap }) => {
    return (
      <_Grid gap={gap} gridTemplateColumns={`repeat(12, 1fr)`}>
        {items.map(({ span }: any, index: number) => (
          <_GridItem
            key={index}
            gridColumn={`span ${Math.max(Math.min(span, 12), 1)}`}
          >
            <DropZone zone={`column-${index}`} />
          </_GridItem>
        ))}
      </_Grid>
    );
  },
};
