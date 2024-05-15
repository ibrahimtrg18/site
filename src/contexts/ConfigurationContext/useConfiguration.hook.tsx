import { useReducer } from "react";

import {
  ConfigurationAction,
  ConfigurationContextProviderValue,
  ConfigurationState,
} from "./ConfigurationContext.types";

export const initialConfigurationState: ConfigurationState = {
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
  avatar: {
    id: "",
    url: "",
  },
};

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
  const [{ id, about, maintenance, avatar }, dispatch] = useReducer(
    configurationReducer,
    state || initialConfigurationState
  );

  return {
    id,
    about,
    maintenance,
    avatar,
    dispatch,
  };
};
