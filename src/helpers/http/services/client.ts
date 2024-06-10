import axiosClient, { AxiosInstance, AxiosRequestHeaders } from "axios";
import cookiesBrowser from "js-cookie";

import { HTTP_METHODS } from "@/constants/http";
import { TWENTY_SECONDS_IN_MS } from "@/constants/time";
import { envVarConfig } from "@/helpers/env/envVarConfig";

const AUTH_TOKEN_COOKIE_NAME = "AUTHENTICATION_TOKEN_V2";

const getAxiosClient = (): (() => AxiosInstance) => {
  let instance;

  return (): AxiosInstance => {
    instance =
      instance ||
      withAuthInterceptor(
        axiosClient.create({
          baseURL: envVarConfig.publicGqlApiUrl,
          method: HTTP_METHODS.POST,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: TWENTY_SECONDS_IN_MS,
        })
      );

    return instance;
  };
};

const withAuthInterceptor = (client: AxiosInstance) => {
  client.interceptors.request.use(
    async (config) => {
      if (!config.headers) {
        config.headers = {} as AxiosRequestHeaders;
      }

      const authToken = cookiesBrowser.get(AUTH_TOKEN_COOKIE_NAME);

      config.headers["Authorization"] = `Bearer ${authToken ? authToken : ""}`;

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return client;
};

export const getAxiosSingleton = getAxiosClient();
