"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var default_1 = __importDefault(require("./default"));
var utils_1 = require("./utils");
var ApiHub = /** @class */ (function () {
    function ApiHub(axiosInstance, apiHubConfig) {
        if (apiHubConfig === void 0) { apiHubConfig = default_1.default; }
        this.axiosInstance = axiosInstance;
        this.apiHubConfig = apiHubConfig;
        this.moduleRoot = {};
    }
    ApiHub.bind = function (axios, apiHubConfig) {
        return new ApiHub(axios, apiHubConfig);
    };
    ApiHub.prototype.getModules = function () {
        return this.moduleRoot;
    };
    ApiHub.prototype.registerMultiModule = function (modules, apiModuleConfig) {
        var _this = this;
        Object.keys(modules).forEach(function (moduleName) {
            _this.moduleRoot[moduleName] = _this.createModule(modules[moduleName], apiModuleConfig);
        });
    };
    ApiHub.prototype.registerModule = function (moduleName, module, apiModuleConfig) {
        this.moduleRoot[moduleName] = this.createModule(module, apiModuleConfig);
    };
    ApiHub.prototype.createModule = function (module, apiModuleConfig) {
        var _this = this;
        if (apiModuleConfig === void 0) { apiModuleConfig = {}; }
        var modulehub = {};
        var _loop_1 = function (key) {
            modulehub[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var api = module.apis[key];
                var data;
                var query;
                var inserts;
                var config;
                if (api.method === 'post' || api.method === 'put') {
                    inserts = data = args === null || args === void 0 ? void 0 : args[0];
                    config = args === null || args === void 0 ? void 0 : args[1];
                }
                else {
                    inserts = query = args === null || args === void 0 ? void 0 : args[0];
                    config = args === null || args === void 0 ? void 0 : args[1];
                }
                var url = path_1.default.join(module.base, utils_1.transferStringTemplate(api.url, inserts));
                var reqConfig = __assign(__assign(__assign({}, _this.apiHubConfig), apiModuleConfig), config);
                if (reqConfig.type === 'form') {
                    data = data && _this.toFormData(data);
                }
                var axiosConfig = __assign({ method: api.method, url: url, params: query, data: data, errMap: Object.assign({}, module.errMap, api.errMap) }, reqConfig);
                return _this.axiosInstance(axiosConfig);
            };
        };
        for (var key in module.apis) {
            _loop_1(key);
        }
        return modulehub;
    };
    ApiHub.prototype.toFormData = function (data) {
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return formData;
    };
    return ApiHub;
}());
exports.default = ApiHub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4Q0FBdUI7QUFDdkIsc0RBQTJDO0FBQzNDLGlDQUFnRDtBQUVoRDtJQUdFLGdCQUNVLGFBQTRCLEVBQzVCLFlBQWdEO1FBQWhELDZCQUFBLEVBQUEsZUFBNkIsaUJBQW1CO1FBRGhELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFvQztRQUpsRCxlQUFVLEdBQWUsRUFBRSxDQUFBO0lBTW5DLENBQUM7SUFFTSxXQUFJLEdBQVgsVUFBWSxLQUFvQixFQUFFLFlBQTJCO1FBQzNELE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCwyQkFBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxvQ0FBbUIsR0FBbkIsVUFBb0IsT0FBMEIsRUFBRSxlQUE4QjtRQUE5RSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtZQUNyQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBQ3ZGLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtCQUFjLEdBQWQsVUFBZSxVQUFrQixFQUFFLE1BQWMsRUFBRSxlQUE4QjtRQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsTUFBYyxFQUFFLGVBQWtDO1FBQS9ELGlC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