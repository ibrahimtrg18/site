import { Heading } from "@chakra-ui/react";
import { Config } from "@measured/puck";

import { Navbar } from "@/components/Navbar";

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
    Navbar: {
      fields: {
        avatar: {
          type: "object",
          objectFields: {
            url: { type: "text" },
          },
        },
        hasNavbar: {
          type: "select",
          options: [
            { label: "false", value: false },
            { label: "true", value: true },
          ],
        },
      },
      render: Navbar,
    },
  },
};
