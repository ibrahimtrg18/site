import { Config } from "@measured/puck";

import "@measured/puck/puck.css";

import { components } from "./components";

// Create Puck component config
export const config: Config = {
  components: components,
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
    },
  },
};
