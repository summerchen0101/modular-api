import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'
import { ReqConfig, StringIndex} from './types'

import defaultConfig from './default'

export default class Request{
  protected reqConfig: ReqConfig = defaultConfig
  protected axiosInstance: AxiosInstance

  get axiosConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      baseURL: this.reqConfig.baseURL,
    }
    return config
  }

  constructor(config?: ReqConfig) {
    if(config) {
      this.reqConfig = {...this.reqConfig, ...config}
    }
    this.axiosInstance = axios.create(this.axiosConfig)
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

  setConfig(config: ReqConfig): void {
    this.reqConfig = {...this.reqConfig, ...config}
  }

  toFormData(data: StringIndex): FormData {
    const formData = new FormData()
    for(const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

}




