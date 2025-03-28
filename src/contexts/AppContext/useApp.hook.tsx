import { useReducer } from "react";

import { AppAction, AppState } from "./AppContext.types";

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const initialAppState: AppState | undefined = {
  icon: "",
  menu: [],
};

export const useApp = (initialApp: AppState | undefined = initialAppState) => {
  const [{ icon, menu }] = useReducer(appReducer, initialApp);

  return { icon, menu };
};
