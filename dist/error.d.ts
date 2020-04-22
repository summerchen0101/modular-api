import { ErrorHandlerConfig } from './types';
import { AxiosResponse, AxiosInstance } from 'axios';
import Request from './request';
export declare const defaultErrConfig: ErrorHandlerConfig;
export default class ErrorHandler extends Request {
    axiosInstance: AxiosInstance;
    errConfig: ErrorHandlerConfig;
    private constructor();
    static create(axiosInstance: AxiosInstance, config?: ErrorHandlerConfig): ErrorHandler;
    handleValidateStatus(status: number): boolean;
    handleErrResponse(res: AxiosResponse): AxiosResponse;
}
