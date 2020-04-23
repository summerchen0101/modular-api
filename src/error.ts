import { ErrorHandlerConfig, ErrorMap, ExtendsAxiosRequestConfig, StringIndex } from './types';
import { AxiosResponse, AxiosInstance} from 'axios'
import { transferStringTemplate, getValueByObjPath } from './utils';
import Request from './request';

export const defaultErrConfig: ErrorHandlerConfig = {
  targetKey: "code",
  validCode: [0],
  defaultMsg: '({code}) Something goes wrong...',
}
export default class ErrorHandler extends Request{
  private constructor(
    public axiosInstance: AxiosInstance,
    public errConfig: ErrorHandlerConfig = defaultErrConfig
  ) {
    super(axiosInstance)
    if(this.errConfig) {
      this.errConfig = {...defaultErrConfig, ...this.errConfig}
    }
    this.onResponse(res => this.handleErrResponse(res))
  }

  static create(
    axiosInstance: AxiosInstance,
    config?: ErrorHandlerConfig
  ): ErrorHandler {
    return new ErrorHandler(axiosInstance, config)
  }

  handleValidateStatus(status: number): boolean {
    return true
  }

  handleErrResponse(res: AxiosResponse): AxiosResponse {
    const resConfig = res.config as ExtendsAxiosRequestConfig
    if(!this.errConfig) return res
    // 處理回傳狀態
    const statusTarget = this.errConfig.statusMap?.[res.status]
    if(this.errConfig.statusMap?.[res.status]) {
      throw transferStringTemplate(statusTarget, {code: res.status})
    }
    // 處理回傳的錯誤代碼
    const targetKey = this.errConfig.targetKey
    const validCode = this.errConfig.validCode
    let resCode = targetKey && getValueByObjPath(targetKey, res.data) as string
    if(Array.isArray(resCode)) {
      resCode = resCode[0]
    }
    const defaultMsg = this.errConfig.defaultMsg as string

    let isValid

    if(resCode === undefined) {
      throw new Error(`The targetKey '${targetKey}' is not exist.`)
    }

    if(Array.isArray(validCode)) {
      isValid = validCode.includes(resCode)
    }else if(typeof validCode === 'string' || typeof validCode === 'number' ) {
      isValid = validCode === resCode
    }

    if(!isValid) {
      const errMap: ErrorMap = {...this.errConfig.errMap, ...resConfig.errMap}
      let msg = errMap[resCode] || defaultMsg
      const params: {code: string; msg?: string} = {
        code: resCode
      }
      msg = transferStringTemplate(msg, params)

      throw msg
    }


    return res
  }

}
