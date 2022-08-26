import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import NProgress from "../nprogress";
import { getItem } from "../storage";

export class Http {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });
  }
  request<R = unknown>(
    url: string,
    params?: Record<string, JSONValue>,
    data?: Record<string, JSONValue>,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.request({ url, params, data, ...config });
  }

  get<R = unknown>(url: string, params?: Record<string, JSONValue>, config?: AxiosRequestConfig) {
    return this.request<R>(url, params, { method: "get", ...config });
  }
  post<R = unknown>(
    url: string,
    data?: Record<string, JSONValue>,
    params?: Record<string, JSONValue>,
    config?: AxiosRequestConfig
  ) {
    return this.request<R>(url, params, data, { method: "post", ...config });
  }
  put<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: AxiosRequestConfig) {
    return this.request<R>(url, data, { method: "put", ...config });
  }
  delete<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: AxiosRequestConfig) {
    return this.request<R>(url, data, { method: "delete", ...config });
  }
}

export const http = new Http(import.meta.env.VITE_PROXY_DOMAIN);

// 用于mock数据
export const MockHttp = new Http("");

http.instance.interceptors.request.use(config => {
  // 全局自动添加token
  const token = getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  NProgress.start();
  return config;
});
http.instance.interceptors.response.use(response => {
  NProgress.done();
  if (response.config._return_raw) {
    return response;
  } else {
    return response.data;
  }
});
