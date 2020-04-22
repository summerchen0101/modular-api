import { AxiosInstance } from 'axios'
import { StringIndex, ApiHubConfig, Module, ModuleHub, ApiData, ResponseData, ModuleRoot, ErrorHandlerConfig, ExtendsAxiosRequestConfig } from './types';
import path from 'path'
import ErrorHandler from './error';
import Request from './request';
import defaultApiHubConfig from './default'

export default class ApiHub extends Request{
  private moduleRoot: ModuleRoot = {}
  private errHandlerInstance?: ErrorHandler

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
        const axiosConfig: ExtendsAxiosRequestConfig = {
          method: api.method,
          url: path.join(module.base, url),
          params: query,
          data,
          errMap: Object.assign({}, module.errMap, api.errMap),
          ...reqConfig
        }

        // 有設定statusMap才綁定handleValidateStatus
        if(this.errHandlerInstance?.errConfig.statusMap) {
          axiosConfig.validateStatus =
            this.errHandlerInstance.handleValidateStatus.bind(this.errHandlerInstance)
        }

        return this.axiosInstance(axiosConfig)
      }
    }
    return modulehub

  }

  registerErrHandler(config?: ErrorHandlerConfig): void {
    this.errHandlerInstance = ErrorHandler.create(this.axiosInstance, config)
  }

  toFormData(data: StringIndex): FormData {
    const formData = new FormData()
    for(const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

}




