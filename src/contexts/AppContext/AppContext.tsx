"use client";

import { createContext, useContext } from "react";

import { initialAppState, useApp } from "./useApp.hook";
import { AppProviderProps } from "./AppContext.types";

const AppContext = createContext(initialAppState);

export const AppProvider = ({ children, app }: AppProviderProps) => {
  const value = useApp(app);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
};
