import { CreateAxiosDefaults, default as Axios } from "axios";

import { API_TOKEN, BASE_URL, STRAPI_URL } from "../contants";

const createAxios = (instance: CreateAxiosDefaults) => {
  return Axios.create(instance);
};

const strapi = createAxios({
  baseURL: STRAPI_URL,
  headers: {
    Authorization: "Bearer " + API_TOKEN,
  },
});

const axios = createAxios({
  baseURL: BASE_URL,
});

strapi.interceptors.response.use(function (response) {
  return response.data;
});

axios.interceptors.response.use(function (response) {
  return response.data;
});

export { axios, strapi };
