import { ErrorHandlerConfig } from './types';
import { AxiosResponse } from 'axios';
export declare class ErrorHandler {
    private response;
    private config;
    private targetValue;
    private isValidValue;
    private errMsg;
    private constructor();
    static register(response: AxiosResponse, config: ErrorHandlerConfig): ErrorHandler;
    getTargetValue(): string | number;
    handleErrorResponse(): void;
    getErrMsg(): string;
    getValueValidation(): boolean;
}
