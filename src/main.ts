import { AxiosInstance } from 'axios'
import { StringIndex, ApiHubConfig, Module, MultiModuleConfig, ModuleHub, ResponseData, ModuleRoot, ErrorHandlerConfig, ExtendsAxiosRequestConfig } from './types';
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

  registerMultiModule(modules: MultiModuleConfig, apiModuleConfig?: ApiHubConfig): void {
    Object.keys(modules).forEach(moduleName => {
      this.moduleRoot[moduleName] = this.createModule(modules[moduleName], apiModuleConfig)
    })
  }

  registerModule(moduleName: string, module: Module, apiModuleConfig?: ApiHubConfig): void {
    this.moduleRoot[moduleName] = this.createModule(module, apiModuleConfig)
  }

  createModule(module: Module, apiModuleConfig: ApiHubConfig = {}): ModuleHub {
    const modulehub: ModuleHub = {}
    for(const key in module.apis) {
      modulehub[key] = (...args): Promise<ResponseData> => {
        const api = module.apis[key]
        let data
        let query
        let inserts
        let config
        if(api.method === 'post' || api.method === 'put') {
          inserts = data = args?.[0]
          config = args?.[1]
        }else {
          inserts = query = args?.[0]
          config = args?.[1]
        }

        const url = path.join(module.base, this.transferUrlTemplate(api.url, inserts))

        const reqConfig = {...this.apiHubConfig, ...apiModuleConfig, ...config}
        if(reqConfig.type === 'form') {
          data = data && this.toFormData(data)
        }
        const axiosConfig: ExtendsAxiosRequestConfig = {
          method: api.method,
          url,
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

  transferUrlTemplate(url: string, inserts: StringIndex): string {
    return url.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val: string) => {
      return inserts[val]
    })
  }

}




