import { AxiosRequestConfig } from 'axios'

export type ErrorMap = StringIndex

export interface ErrorHandlerConfig{
  targetKey?: string;
  validCode?: (number | string) | (number | string)[];
  defaultMsg?: string;
}

export interface ModuleRoot {
  [moduleName: string]: ModuleHub;
}

export interface ApiHubConfig {
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
  [key: string]: (data: ApiData, config?: ApiHubConfig) => Promise<ResponseData>;
}

export interface StringIndex {
  [key: string]: any;
  [index: number]: any;
}

export type MethodType = "get" | 'post' | 'put' | 'delete'

export type ResponseData = object
