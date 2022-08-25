import { AxiosRequestConfig } from "axios";
declare module "axios" {
  export interface AxiosRequestConfig {
    _return_raw?: boolean; // 是否返回原始格式
  }
}
