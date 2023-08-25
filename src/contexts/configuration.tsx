import React, { createContext, useContext, useReducer } from "react";

interface About {
  firstName: string;
  lastName: string;
  fullName: string;
  shortName: string;
  initialName: string;
  email: string;
  phoneNumber: string;
  whoiam: string;
  greeting: string;
  description: {
    text: string;
  };
  cv: string;
  lat: null | number;
  lng: null | number;
  location: string;
}

interface Maintenance {
  title: string;
  text: string;
  farewell: string;
  signature: string;
}

interface MenuItem {
  id: string;
  label: string;
  pathname: string;
  slug: string;
  href: string;
}

type ConfigurationState = {
  id: string;
  about: Partial<About>;
  maintenance: Partial<Maintenance>;
  menu: Partial<MenuItem>[];
};

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

export const useConfiguration = (state: ConfigurationContextProviderValue) => {
  const [{ id, about, maintenance, menu }, dispatch] = useReducer(
    configurationReducer,
    state || initialState
  );

  return {
    id,
    about,
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
