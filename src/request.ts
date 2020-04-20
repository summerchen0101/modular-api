import {AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'

export default class Request{
  protected reqConfig: AxiosRequestConfig = {}

  constructor(protected axiosInstance: AxiosInstance) {
  }

  onRequest(fn: (config: AxiosRequestConfig) => AxiosRequestConfig): void {
    this.axiosInstance.interceptors.request.use(config => fn(config) || config)
  }

  onResponse(fn: (response: AxiosResponse) => AxiosResponse): void {
    this.axiosInstance.interceptors.response.use(response => fn(response) || response)
  }

  onRequestError(fn: (config: AxiosError) => AxiosError): void {
    this.axiosInstance.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error))
  }

  onResponseError(fn: (config: AxiosError) => AxiosError): void {
    this.axiosInstance.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error))
  }

  onError(fn: (config: AxiosError) => AxiosError): void {
    this.onRequestError(fn)
    this.onResponseError(fn)
  }


}




