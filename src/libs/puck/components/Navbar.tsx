import { ComponentConfig } from "@measured/puck";

import {
  Navbar as _Navbar,
  NavbarProps as _NavbarProps,
} from "@/components/Navbar";

export const Navbar: ComponentConfig<_NavbarProps> = {
  fields: {
    avatar: {
      type: "object",
      objectFields: {
        url: { type: "text" },
      },
    },
    links: {
      type: "array",
      arrayFields: {
        id: { type: "text" },
        label: { type: "text" },
        pathname: { type: "text" },
        stage: { type: "text" },
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
  render: _Navbar,
};
