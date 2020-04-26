import { AxiosRequestConfig } from 'axios'

export interface ExtendsAxiosRequestConfig extends AxiosRequestConfig {
  errMap?: {
    [key: string]: string;
  };
}

export type ErrorMap = StringIndex
export type StatusMap = StringIndex

export interface ResponseStatusHandler {
  (status: number, isValid: boolean): boolean;
}

export type ErrorHandlerTypes = 'code' | 'status' | 'params'

export type SilentValueFunc = (val: string | number) => boolean

export interface ErrorHandlerConfig {
  type?: ErrorHandlerTypes;
  templateKey?: string;
  path?: string;
  silentValue?: (string | number) | (string | number)[] | SilentValueFunc;
  map?: ErrorMap;
  defaultMsg?: string;
  handleMsg?: (msg: string, val: string | number) => void;
}
// export interface ErrorHandlerConfig {
//   targetKey?: string;
//   validCode?: (number | string) | (number | string)[];
//   defaultMsg?: string;
//   errMap?: ErrorMap;
//   statusMap?: StatusMap;
//   params?: StringIndex;
// }

export interface MultiModuleConfig {
  [moduleName: string]: Module;
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
  errMap?: {
    [key: string]: string;
  };
}
export interface Module {
  base: string;
  apis: {
    [key: string]: ApiLibItem;
  };
  errMap?: {
    [key: string]: string;
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
