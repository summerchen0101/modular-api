import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'
import { ReqConfig, StringIndex, Module, ModuleHub, ApiData, ResponseData, ModuleRoot} from './types'
import path from 'path'
import defaultConfig from './default'


export default class ApiHub{
  private config: ReqConfig = defaultConfig
  private axiosInstance: AxiosInstance
  private moduleRoot: ModuleRoot = {}

  get axiosConfig(): AxiosRequestConfig {
    const config: AxiosRequestConfig = {
      baseURL: this.config.baseURL,
    }
    return config
  }

  private constructor(config?: ReqConfig) {
    if(config) {
      this.config = {...this.config, ...config}
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
    this.config = {...this.config, ...config}
  }

  static create(extendConfig?: ReqConfig): ApiHub {
    return new ApiHub(extendConfig)
  }

  toFormData(data: StringIndex): FormData {
    const formData = new FormData()
    for(const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

  getModules(): ModuleRoot {
    return this.moduleRoot
  }

  registerModule(moduleName: string, module: Module, moduleConfig: ReqConfig = {}): void {
    this.moduleRoot[moduleName] = this.createModule(module, moduleConfig)
  }

  createModule(module: Module, moduleConfig: ReqConfig = {}): ModuleHub {
    const modulehub: ModuleHub = {}
    for(const key in module.apis) {
      modulehub[key] = (reqData: ApiData, apiConfig: ReqConfig = {}): Promise<ResponseData> => {
        let url = '', query, data
        const api = module.apis[key]

        if(typeof reqData === 'object') {
          url = api.url.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val: string) => {
            if('params' in reqData) {
              return reqData.params && reqData.params[val]
            }
            throw new Error(`The params '${val}' do not have a assign value.`)
          })
          if(reqData.query) {
            query = reqData.query
          }
          if(reqData.data) {
            data = reqData.data
          }
        }
        const config = {...this.config, ...moduleConfig, ...apiConfig}
        if(config.type === 'form') {
          data = data && this.toFormData(data)
        }

        const axiosConfig: AxiosRequestConfig = {
          method: api.method,
          url: path.join(module.base, url),
          params: query,
          data,
          ...config
        }
        return this.axiosInstance(axiosConfig)
      }
    }
    return modulehub

  }

}




