import { Configuration } from "@/types/Hygraph/models/Configuration";

export type ConfigurationState = Configuration;

export type ConfigurationContextProviderValue = ConfigurationState | null;

export type ConfigurationContextProviderProps = React.HTMLProps<HTMLElement> & {
  configuration: ConfigurationState | null;
};

export type ConfigurationAction = {
  type: string;
  payload?: unknown;
};
