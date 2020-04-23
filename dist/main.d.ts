import { AxiosInstance } from 'axios';
import { StringIndex, ApiHubConfig, Module, MultiModuleConfig, ModuleHub, ModuleRoot, ErrorHandlerConfig } from './types';
import Request from './request';
export default class ApiHub extends Request {
    private apiHubConfig;
    private moduleRoot;
    private errHandlerInstance?;
    private constructor();
    static bind(axios: AxiosInstance, apiHubConfig?: ApiHubConfig): ApiHub;
    getModules(): ModuleRoot;
    registerMultiModule(modules: MultiModuleConfig, apiModuleConfig?: ApiHubConfig): void;
    registerModule(moduleName: string, module: Module, apiModuleConfig?: ApiHubConfig): void;
    createModule(module: Module, apiModuleConfig?: ApiHubConfig): ModuleHub;
    registerErrHandler(config?: ErrorHandlerConfig): void;
    toFormData(data: StringIndex): FormData;
}
