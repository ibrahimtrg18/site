import { Config } from "@measured/puck";

import "@measured/puck/puck.css";

import { components } from "./components";

// Create Puck component config
export const config: Config = {
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
    },
  },
  categories: {
    layout: {
      components: ["Container", "Grid", "Stack"],
    },
    typography: {
      components: ["Heading", "Text"],
    },
    actions: {
      components: ["IconButton"],
    },
  },
  components: components,
};
