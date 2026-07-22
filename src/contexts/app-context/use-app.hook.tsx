import { useReducer } from "react";

import { AppAction, AppState } from "./app-context.types";

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const initialAppState: AppState | undefined = {
  icon: "",
  name: "",
  menu: [],
};

export const useApp = (initialApp: AppState | undefined = initialAppState) => {
  const [{ icon, name, menu }] = useReducer(appReducer, initialApp);

  return { icon, name, menu };
};
