import { AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { ReqConfig, StringIndex } from './types';
export default class Request {
    protected reqConfig: ReqConfig;
    protected axiosInstance: AxiosInstance;
    get axiosConfig(): AxiosRequestConfig;
    constructor(config?: ReqConfig);
    onRequest(fn: (config: AxiosRequestConfig) => AxiosRequestConfig): void;
    onResponse(fn: (response: AxiosResponse) => AxiosResponse): void;
    onRequestError(fn: (config: AxiosError) => AxiosError): void;
    onResponseError(fn: (config: AxiosError) => AxiosError): void;
    onError(fn: (config: AxiosError) => AxiosError): void;
    setConfig(config: ReqConfig): void;
    toFormData(data: StringIndex): FormData;
}
