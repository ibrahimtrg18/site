import { useReducer } from "react";

import { AppAction, AppState } from "./AppContext.types";

const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const initialAppState: AppState | undefined = {
  id: "",
  avatar: {},
  fullname: "",
  nickname: "",
  email: "",
  phoneNumber: "",
  about: {},
  greeting: {},
  menu: [],
  socials: [],
  technologies: [],
};

export const useApp = (initialApp: AppState | undefined = initialAppState) => {
  const [
    {
      id,
      avatar,
      fullname,
      nickname,
      email,
      phoneNumber,
      about,
      greeting,
      menu,
      socials,
      technologies,
    },
  ] = useReducer(appReducer, initialApp);

  return {
    id,
    avatar,
    fullname,
    nickname,
    email,
    phoneNumber,
    about,
    greeting,
    menu,
    socials,
    technologies,
  };
};
