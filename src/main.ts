import { AxiosRequestConfig } from 'axios'
import { ReqConfig, Module, ModuleHub, ApiData, ResponseData, ModuleRoot, ErrorHandlerConfig, ErrorMap } from './types';
import path from 'path'
import Request from './request';
import ErrorHandler from './error';

export default class ApiHub extends Request{
  private moduleRoot: ModuleRoot = {}
  private errHandler: ErrorHandler | null = null

  private constructor(reqConfig?: ReqConfig) {
    super(reqConfig)
  }

  registerErrorHandler(errMap: ErrorMap, errHandlerConfig: ErrorHandlerConfig): void {
    this.errHandler = ErrorHandler.create(errHandlerConfig)
    const targetKey = this.errHandler.errTargetKey
    this.onResponse(res => {
      const targetValue = res.data[targetKey]
      if(targetValue === undefined) {
        throw new Error(`Cannot find the 'targetKey': ${targetKey}`)
      }
      const result = this.errHandler && this.errHandler.validateCode(targetValue)
      if(!result) {
        if(!errMap[targetValue]) {
          throw new Error(`Cannot find the message by error value: '${targetValue}'`)
        }
        throw new Error(errMap[targetValue])
      }
      return res
    })
  }

  static create(extendConfig?: ReqConfig): ApiHub {
    return new ApiHub(extendConfig)
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
        const reqConfig = {...moduleConfig, ...apiConfig}
        if(reqConfig.type === 'form') {
          data = data && this.toFormData(data)
        }

        const axiosConfig: AxiosRequestConfig = {
          method: api.method,
          url: path.join(module.base, url),
          params: query,
          data,
          ...reqConfig
        }
        return this.axiosInstance(axiosConfig)
      }
    }
    return modulehub

  }

}




