import { AxiosInstance } from 'axios'
import { StringIndex, ApiHubConfig, Module, MultiModuleConfig, ModuleHub, ResponseData, ModuleRoot, ExtendsAxiosRequestConfig } from './types';
import path from 'path'
import Request from './request';
import defaultApiHubConfig from './default'
import { transferStringTemplate } from './utils'
export * from './error'

export default class ApiHub extends Request{
  private moduleRoot: ModuleRoot = {}

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

        const url = path.join(module.base, transferStringTemplate(api.url, inserts))

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

        return this.axiosInstance(axiosConfig)
      }
    }
    return modulehub

  }

  toFormData(data: StringIndex): FormData {
    const formData = new FormData()
    for(const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

}




