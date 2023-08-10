import React, { createContext, useContext, useReducer } from "react";

type Maintain = {
  title?: string;
  description?: string;
  farewell?: string;
  signature?: string;
};

type ConfigurationState = {
  maintain?: Partial<Maintain>;
};

type ConfigurationContextProviderProps = React.HTMLProps<HTMLElement> & {
  configuration: ConfigurationState;
};

type ConfigurationAction = {
  type: string;
  payload?: unknown;
};

const initialState: ConfigurationState = {
  maintain: {
    title: "",
    description: "",
    farewell: "",
    signature: "",
  },
};

const ConfigurationContext = createContext(initialState);

export const configurationReducer = (
  state: ConfigurationState,
  action: ConfigurationAction
) => {
  switch (action) {
    default:
      return state;
  }
};

export const useConfiguration = (initialState: ConfigurationState) => {
  const [{ maintain }, dispatch] = useReducer(
    configurationReducer,
    initialState
  );

  return {
    maintain,
    dispatch,
  };
};

export const useConfigurationContext = () => {
  const context = useContext(ConfigurationContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};

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
