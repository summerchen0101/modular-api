import axios, {AxiosResponse, AxiosInstance, AxiosRequestConfig} from 'axios'
import path from 'path'

const defaultConfig: ReqConfig = {
}

export default class ApiHub{
  private config: ReqConfig = defaultConfig
  private axiosInstance: AxiosInstance

  get axiosConfig(): AxiosRequestConfig {
    return {
      baseURL: this.config.baseURL
    }
  }

  private constructor(config?: ReqConfig) {
    if(config) {
      this.config = {...this.config, ...config}
    }
    this.axiosInstance = axios.create(this.axiosConfig)
  }

  setConfig(config: ReqConfig) {
    this.config = {...this.config, ...config}
  }
  static create(extendConfig?: ReqConfig) {
    return new ApiHub(extendConfig)
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
        config = {...moduleConfig, ...apiConfig}

        const axiosConfig: AxiosRequestConfig = {
          method: api.method,
          url: path.join(module.baseUrl, url),
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


interface ReqConfig {
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
  baseUrl: string,
  apis: {
    [key: string]: ApiLibItem,
    getList: ApiLibItem
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

