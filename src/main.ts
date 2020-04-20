import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { StringIndex, ApiHubConfig, Module, ModuleHub, ApiData, ResponseData, ModuleRoot, ErrorHandlerConfig, ErrorMap } from './types';
import path from 'path'
import ErrorHandler from './error';
import Request from './request';
import defaultApiHubConfig from './default'

export default class ApiHub extends Request{
  private moduleRoot: ModuleRoot = {}
  private errHandler?: ErrorHandler

  private constructor(
    axiosInstance: AxiosInstance,
    private apiHubConfig: ApiHubConfig = defaultApiHubConfig)
  {
    super(axiosInstance)
  }

  static bind(axios: AxiosInstance, apiHubConfig?: ApiHubConfig): ApiHub {
    return new ApiHub(axios, apiHubConfig)
  }

  getModules(): ModuleRoot {
    return this.moduleRoot
  }

  registerModule(moduleName: string, module: Module, apiModuleConfig: ApiHubConfig = {}): void {
    this.moduleRoot[moduleName] = this.createModule(module, apiModuleConfig)
  }

  createModule(module: Module, apiModuleConfig: ApiHubConfig = {}): ModuleHub {
    const modulehub: ModuleHub = {}
    for(const key in module.apis) {
      modulehub[key] = (reqData: ApiData, apiConfig: ApiHubConfig = {}): Promise<ResponseData> => {

        const api = module.apis[key]
        let url = api.url,
            query,
            data

        if(typeof reqData === 'object') {
          url = url.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val: string) => {
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
        const reqConfig = {...this.apiHubConfig, ...apiModuleConfig, ...apiConfig}
        if(reqConfig.type === 'form') {
          data = data && this.toFormData(data)
        }

        const axiosConfig: AxiosRequestConfig = {
          method: api.method,
          url: path.join(module.base, url),
          params: query,
          data
        }
        return this.axiosInstance(axiosConfig)
      }
    }
    return modulehub

  }
  registerErrHandler(errMap?: ErrorMap, config?: ErrorHandlerConfig): void {
    this.errHandler = ErrorHandler.create(errMap, config)
    this.onResponse(this.errHandler.handleErrResponse.bind(this.errHandler))
  }

  toFormData(data: StringIndex): FormData {
    const formData = new FormData()
    for(const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

}




