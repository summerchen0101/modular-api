import { ErrorHandlerConfig, ErrorMap } from './types';
import { AxiosResponse, AxiosInstance } from 'axios';
import Request from './request';
export declare const defaultErrConfig: ErrorHandlerConfig;
export default class ErrorHandler extends Request {
    axiosInstance: AxiosInstance;
    private errMap;
    private errConfig;
    private constructor();
    get defaultErrMap(): ErrorMap;
    static create(axiosInstance: AxiosInstance, errMap?: ErrorMap, config?: ErrorHandlerConfig): ErrorHandler;
    handleErrResponse(res: AxiosResponse): AxiosResponse;
}
