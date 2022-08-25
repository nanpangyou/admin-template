import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import NProgress from "../nprogress";

export class Http {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });
  }
  request<R>(
    url: string,
    params?: Record<string, JSONValue>,
    data?: Record<string, JSONValue>,
    config?: AxiosRequestConfig
  ) {
    return new Promise((resolve, reject) => {
      this.instance
        .request<R>({ url, params, data, ...config })
        .then(res => {
          if (config?._return_raw) {
            resolve(res);
          } else {
            resolve(res.data);
          }
        })
        .catch(err => reject(err));
    });
  }
  get<R = unknown>(url: string, params?: Record<string, JSONValue>, config?: AxiosRequestConfig) {
    return this.request<R>(url, params, { method: "get", ...config });
  }
  post<R = unknown>(
    url: string,
    params?: Record<string, JSONValue>,
    data?: Record<string, JSONValue>,
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
  NProgress.start();
  return config;
});
http.instance.interceptors.response.use(response => {
  NProgress.done();
  return response;
});
