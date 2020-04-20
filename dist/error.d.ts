import { ErrorHandlerConfig, ErrorMap } from './types';
import { AxiosResponse } from 'axios';
export declare const defaultErrConfig: ErrorHandlerConfig;
export default class ErrorHandler {
    private errMap;
    private errConfig;
    private constructor();
    static create(errMap?: ErrorMap, config?: ErrorHandlerConfig): ErrorHandler;
    handleErrResponse(res: AxiosResponse): AxiosResponse;
}
