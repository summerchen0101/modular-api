import { AxiosInstance } from 'axios';
import { StringIndex, ApiHubConfig, Module, ModuleHub, ModuleRoot, ErrorHandlerConfig, ErrorMap } from './types';
import Request from './request';
export default class ApiHub extends Request {
    private apiHubConfig;
    private moduleRoot;
    private errHandler?;
    private errStatusMap?;
    private constructor();
    static bind(axios: AxiosInstance, apiHubConfig?: ApiHubConfig): ApiHub;
    getModules(): ModuleRoot;
    registerModule(moduleName: string, module: Module, apiModuleConfig?: ApiHubConfig): void;
    createModule(module: Module, apiModuleConfig?: ApiHubConfig): ModuleHub;
    handleValidateStatus(status: number): boolean;
    setErrStatus(errStatusMap: ErrorMap): void;
    registerErrHandler(errMap?: ErrorMap, config?: ErrorHandlerConfig): void;
    toFormData(data: StringIndex): FormData;
}
