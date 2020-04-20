import { ReqConfig, Module, ModuleHub, ModuleRoot, ErrorHandlerConfig, ErrorMap } from './types';
import Request from './request';
export default class ApiHub extends Request {
    private moduleRoot;
    private errHandler?;
    private constructor();
    static create(extendConfig?: ReqConfig): ApiHub;
    getModules(): ModuleRoot;
    registerModule(moduleName: string, module: Module, moduleConfig?: ReqConfig): void;
    createModule(module: Module, moduleConfig?: ReqConfig): ModuleHub;
    registerErrHandler(errMap?: ErrorMap, config?: ErrorHandlerConfig): void;
}
