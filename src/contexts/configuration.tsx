import React, { createContext, useContext, useReducer } from "react";

import { Configuration } from "../types/Configuration";

type ConfigurationState = Configuration;

type ConfigurationContextProviderValue = ConfigurationState | null;

type ConfigurationContextProviderProps = React.HTMLProps<HTMLElement> & {
  configuration: ConfigurationState | null;
};

type ConfigurationAction = {
  type: string;
  payload?: unknown;
};

const initialState: ConfigurationState = {
  id: "",
  about: {
    firstName: "",
    lastName: "",
    fullName: "",
    shortName: "",
    initialName: "",
    email: "",
    phoneNumber: "",
    whoiam: "",
    greeting: "",
    description: {
      text: "",
    },
    cv: "",
    lat: null,
    lng: null,
    location: "",
  },
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

export const useConfiguration = (state: ConfigurationContextProviderValue) => {
  const [{ id, about, maintenance }, dispatch] = useReducer(
    configurationReducer,
    state || initialState
  );

  return {
    id,
    about,
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
