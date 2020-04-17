import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'
import path from 'path'

const defaultConfig: ReqConfig = {
  type: 'json'
}

export default class ApiHub{
  private config: ReqConfig = defaultConfig
  private axiosInstance: AxiosInstance

  get axiosConfig(): AxiosRequestConfig {
    let config: AxiosRequestConfig = {
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

  onRequest(fn: (config: AxiosRequestConfig) => AxiosRequestConfig) {
    this.axiosInstance.interceptors.request.use(config => fn(config) || config)
  }

  onResponse(fn: (response: AxiosResponse) => AxiosResponse) {
    this.axiosInstance.interceptors.response.use(response => fn(response) || response)
  }
  onRequestError(fn: (config: AxiosError) => AxiosError) {
    this.axiosInstance.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error))
  }
  onResponseError(fn: (config: AxiosError) => AxiosError) {
    this.axiosInstance.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error))
  }
  onError(fn: (config: AxiosError) => AxiosError) {
    this.onRequestError(fn)
    this.onResponseError(fn)
  }

  setConfig(config: ReqConfig) {
    this.config = {...this.config, ...config}
  }
  static create(extendConfig?: ReqConfig) {
    return new ApiHub(extendConfig)
  }

  toFormData(data: StringIndex) {
    const formData = new FormData()
    for(let key in data) {
      formData.append(key, data[key])
    }
    return formData
  }

  createModule(name: string, module: Module, moduleConfig: ReqConfig = {}) {
    let modulehub: ModuleHub = {}
    for(const key in module.apis) {
      modulehub[key] = (reqData: ApiData, apiConfig: ReqConfig = {}) => {
        let url = '', query, data, config, api
        api = module.apis[key]

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
        config = {...this.config, ...moduleConfig, ...apiConfig}
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


interface ReqConfig extends AxiosRequestConfig {
  baseURL?: string
  type?: 'json' | 'form'
}

interface ApiData {
  params?: StringIndex
  query?: StringIndex
  data?: StringIndex
}
interface ApiLibItem {
  method: MethodType
  url: string
}
interface Module {
  base: string,
  apis: {
    [key: string]: ApiLibItem
  }
}

interface ModuleHub {
  [key: string]: (data: any, config?: ReqConfig) => Promise<ResponseData>
}

interface StringIndex {
  [key: string]: any
  [index: number]: any
}

type MethodType = "get" | 'post' | 'put' | 'delete'

type ResponseData = object

