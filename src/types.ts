import { AxiosRequestConfig } from 'axios'

export interface ReqConfig extends AxiosRequestConfig {
  baseURL?: string;
  type?: 'json' | 'form';
}

export interface ApiData {
  params?: StringIndex;
  query?: StringIndex;
  data?: StringIndex;
}
export interface ApiLibItem {
  method: MethodType;
  url: string;
}
export interface Module {
  base: string;
  apis: {
    [key: string]: ApiLibItem;
  };
}

export interface ModuleHub {
  [key: string]: (data: ApiData, config?: ReqConfig) => Promise<ResponseData>;
}

export interface StringIndex {
  [key: string]: any;
  [index: number]: any;
}

export type MethodType = "get" | 'post' | 'put' | 'delete'

export type ResponseData = object
