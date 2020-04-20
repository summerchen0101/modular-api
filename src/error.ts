import { ErrorHandlerConfig, ErrorMap, ExtendsAxiosRequestConfig } from './types';
import { AxiosResponse } from 'axios'

export const defaultErrConfig: ErrorHandlerConfig = {
  targetKey: "code",
  validCode: [0],
  defaultMsg: '({code}) Something goes wrong...'
}
export default class ErrorHandler{
  private constructor(
    private errMap: ErrorMap = {},
    private errConfig: ErrorHandlerConfig = defaultErrConfig
  ) {
    if(this.errConfig) {
      this.errConfig = {...defaultErrConfig, ...this.errConfig}
    }

  }

  get defaultErrMap(): ErrorMap {
    return this.errMap
  }

  static create(errMap?: ErrorMap, config?: ErrorHandlerConfig): ErrorHandler{
    return new ErrorHandler(errMap, config)
  }

  handleErrResponse(res: AxiosResponse): AxiosResponse {
    const resConfig = res.config as ExtendsAxiosRequestConfig
    if(!this.errConfig) return res
    const targetKey = this.errConfig.targetKey as string
    const validCode = this.errConfig.validCode
    let resCode = res.data[targetKey]
    if(Array.isArray(resCode)) {
      resCode = resCode[0]
    }
    let defaultMsg = this.errConfig.defaultMsg as string
    defaultMsg = defaultMsg.replace(/\{code\}/gim, resCode)
    let isValid
      if(resCode === undefined) {
        throw new Error(`Cannot find the 'targetKey': ${targetKey}`)
      }

      if(Array.isArray(validCode)) {
        isValid = validCode.includes(resCode)
      }

      if(typeof validCode === 'string' || typeof validCode === 'number' ) {
        isValid = validCode === resCode
      }

      if(!isValid) {
        const errMap: ErrorMap = {...this.errMap, ...resConfig.errMap}
        if(!errMap[resCode]) {
          throw new Error(defaultMsg)
        }
        throw new Error(errMap[resCode])
      }


      return res
  }

}
