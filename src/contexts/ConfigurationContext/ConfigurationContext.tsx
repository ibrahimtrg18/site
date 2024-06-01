import { createContext, useContext } from "react";

import {
  initialConfigurationState,
  useConfiguration,
} from "./useConfiguration.hook";
import { ConfigurationContextProviderProps } from "./ConfigurationContext.types";

const ConfigurationContext = createContext(initialConfigurationState);

export const ConfigurationContextProvider = ({
  children,
  configuration,
}: ConfigurationContextProviderProps) => {
  const value = useConfiguration(configuration);

  return (
    <ConfigurationContext.Provider value={value}>
      {children}
    </ConfigurationContext.Provider>
  );
};

export const useConfigurationContext = () => {
  const context = useContext(ConfigurationContext);

  if (!context) {
    throw new Error(
      "useConfigurationContext must be used within a ConfigurationContextProvider"
    );
  }

  return context;
};
