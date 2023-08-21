import React, { createContext, useContext, useReducer } from "react";

type Maintenance = {
  title?: string;
  text?: string;
  farewell?: string;
  signature?: string;
};

type Menu = {
  id?: string;
  label?: string;
  pathname?: string;
  slug?: string;
  href?: string;
};

type ConfigurationState = {
  maintenance?: Partial<Maintenance>;
  menu?: Array<Partial<Menu>>;
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
  menu: [],
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
  const [{ maintenance, menu }, dispatch] = useReducer(
    configurationReducer,
    initialState
  );

  return {
    maintenance,
    menu,
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
