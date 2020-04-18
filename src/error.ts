import { ErrorHandlerConfig } from './types';

const errorHandlerDefaultConfig: ErrorHandlerConfig = {
  targetKey: "code",
  validCode: [0]
}

export default class ErrorHandler{
  private errConfig: ErrorHandlerConfig = errorHandlerDefaultConfig
  private constructor(config?: ErrorHandlerConfig) {
    if(config) {
      this.errConfig = Object.assign({}, this.errConfig, config)
    }
  }

  static create(config?: ErrorHandlerConfig): ErrorHandler{
    return new ErrorHandler(config)
  }

  get errTargetKey(): string{
    return this.errConfig.targetKey || ''
  }

  validateCode(value: string | number): boolean {
    if(this.errConfig.validCode) {
      return this.errConfig.validCode.includes(value)
    }
    return false
  }

}
