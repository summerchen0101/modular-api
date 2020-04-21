import { ErrorHandlerConfig, ErrorMap, ResponseStatusHandler } from './types';
import { AxiosResponse } from 'axios';
export declare const defaultErrConfig: ErrorHandlerConfig;
export default class ErrorHandler {
    private errMap;
    private errConfig;
    private constructor();
    get defaultErrMap(): ErrorMap;
    static create(errMap?: ErrorMap, config?: ErrorHandlerConfig): ErrorHandler;
    handleResponseStatus: ResponseStatusHandler;
    handleErrResponse(res: AxiosResponse): AxiosResponse;
}
