import { AxiosRequestConfig } from 'axios';
export declare type ErrorMap = StringIndex;
export interface ErrorHandlerConfig {
    targetKey?: string;
    validCode?: (number | string) | (number | string)[];
    defaultMsg?: string;
}
export interface ModuleRoot {
    [moduleName: string]: ModuleHub;
}
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
export declare type MethodType = "get" | 'post' | 'put' | 'delete';
export declare type ResponseData = object;