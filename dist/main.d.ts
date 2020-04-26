import { AxiosInstance } from 'axios';
import { StringIndex, ApiHubConfig, Module, MultiModuleConfig, ModuleHub, ModuleRoot } from './types';
import Request from './request';
export * from './error';
export default class ApiHub extends Request {
    private apiHubConfig;
    private moduleRoot;
    private constructor();
    static bind(axios: AxiosInstance, apiHubConfig?: ApiHubConfig): ApiHub;
    getModules(): ModuleRoot;
    registerMultiModule(modules: MultiModuleConfig, apiModuleConfig?: ApiHubConfig): void;
    registerModule(moduleName: string, module: Module, apiModuleConfig?: ApiHubConfig): void;
    createModule(module: Module, apiModuleConfig?: ApiHubConfig): ModuleHub;
    toFormData(data: StringIndex): FormData;
}
