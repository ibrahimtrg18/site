import { useReducer } from "react";

import { AppAction, AppState } from "./AppContext.types";

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const initialAppState: AppState = {
  menu: [],
  socials: [],
  page: {
    homePage: {
      show: false,
      reason: "normal",
    },
    projectPage: {
      show: false,
      reason: "normal",
    },
    blogPage: {
      show: false,
      reason: "normal",
    },
  },
};

export const useApp = (initialApp: AppState | null) => {
  const [{ menu, socials, page }] = useReducer(
    appReducer,
    initialApp || initialAppState
  );

  return {
    menu,
    socials,
    page,
  };
};
