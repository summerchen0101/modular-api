"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(axiosInstance) {
        this.axiosInstance = axiosInstance;
        this.reqConfig = {};
    }
    Request.prototype.onRequest = function (fn) {
        this.axiosInstance.interceptors.request.use(function (config) { return fn(config) || config; });
    };
    Request.prototype.onResponse = function (fn) {
        this.axiosInstance.interceptors.response.use(function (response) { return fn(response) || response; });
    };
    Request.prototype.onRequestError = function (fn) {
        this.axiosInstance.interceptors.request.use(undefined, function (error) { return fn(error) || Promise.reject(error); });
    };
    Request.prototype.onResponseError = function (fn) {
        this.axiosInstance.interceptors.response.use(undefined, function (error) { return fn(error) || Promise.reject(error); });
    };
    Request.prototype.onError = function (fn) {
        this.onRequestError(fn);
        this.onResponseError(fn);
    };
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=request.js.map