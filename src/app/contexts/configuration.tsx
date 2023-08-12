import React, { createContext, useContext, useReducer } from "react";

type Maintenance = {
  title?: string;
  text?: string;
  farewell?: string;
  signature?: string;
};

type ConfigurationState = {
  maintenance?: Partial<Maintenance>;
};

type ConfigurationContextProviderProps = React.HTMLProps<HTMLElement> & {
  configuration: ConfigurationState;
};

type ConfigurationAction = {
  type: string;
  payload?: unknown;
};

const initialState: ConfigurationState = {
  maintenance: {
    title: "",
    text: "",
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
  const [{ maintenance }, dispatch] = useReducer(
    configurationReducer,
    initialState
  );

  return {
    maintenance,
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
