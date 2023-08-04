import { default as Axios } from "axios";

import { API_TOKEN, STRAPI_URL } from "../contants";

const axios = Axios.create({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
});

axios.interceptors.response.use(function (response) {
  return response.data;
});

export type IResponse<T, M = undefined> = {
  data: T;
  meta: M;
};

export { axios };
