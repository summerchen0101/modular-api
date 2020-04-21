import { AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
export default class Request {
    protected axiosInstance: AxiosInstance;
    protected reqConfig: AxiosRequestConfig;
    constructor(axiosInstance: AxiosInstance);
    onRequest(fn: (config: AxiosRequestConfig) => AxiosRequestConfig): void;
    onResponse(fn: (response: AxiosResponse) => AxiosResponse): void;
    onRequestError(fn: (config: AxiosError) => AxiosError): void;
    onResponseError(fn: (config: AxiosError) => AxiosError): void;
    onError(fn: (config: AxiosError) => AxiosError): void;
}
