import { Heading } from "@chakra-ui/react";
import { Config } from "@measured/puck";

import "@measured/puck/puck.css";

// Create Puck component config
export const config: Config = {
  components: {
    Heading: {
      fields: {
        children: {
          type: "text",
        },
        padding: {
          type: "text",
        },
      },
      render: Heading,
    },
  },
};
