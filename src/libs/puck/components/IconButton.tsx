import { IconButton as _IconButton, IconButtonProps } from "@chakra-ui/react";
import { ComponentConfig } from "@measured/puck";
import * as Icons from "react-icons/io5";

const iconOptions = Object.keys(Icons).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

type ComponentConfigProps = IconButtonProps & {
  iconOption: (typeof iconOptions)[number]["value"];
};

export const IconButton: ComponentConfig<ComponentConfigProps> = {
  fields: {
    "aria-label": { type: "text" },
    iconOption: {
      type: "select",
      options: iconOptions,
    },
  },
  defaultProps: {
    "aria-label": "icon-button",
    variant: "ghost",
    iconOption: iconOptions[0].value,
  },
  render: ({ iconOption, ...props }) => {
    const Icon = Icons[iconOption as unknown as keyof typeof Icons];

    return <_IconButton {...props} icon={<Icon />} />;
  },
};
