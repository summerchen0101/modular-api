"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var utils_1 = require("./utils");
var request_1 = __importDefault(require("./request"));
exports.defaultErrConfig = {
    targetKey: "code",
    validCode: [0],
    defaultMsg: '({code}) Something goes wrong...',
};
var ErrorHandler = /** @class */ (function (_super) {
    __extends(ErrorHandler, _super);
    function ErrorHandler(axiosInstance, errConfig) {
        if (errConfig === void 0) { errConfig = exports.defaultErrConfig; }
        var _this = _super.call(this, axiosInstance) || this;
        _this.axiosInstance = axiosInstance;
        _this.errConfig = errConfig;
        if (_this.errConfig) {
            _this.errConfig = __assign(__assign({}, exports.defaultErrConfig), _this.errConfig);
        }
        _this.onResponse(function (res) { return _this.handleErrResponse(res); });
        return _this;
    }
    ErrorHandler.create = function (axiosInstance, config) {
        return new ErrorHandler(axiosInstance, config);
    };
    ErrorHandler.prototype.handleValidateStatus = function (status) {
        return true;
    };
    ErrorHandler.prototype.handleErrResponse = function (res) {
        var _a, _b;
        var resConfig = res.config;
        if (!this.errConfig)
            return res;
        // 處理回傳狀態
        var statusTarget = (_a = this.errConfig.statusMap) === null || _a === void 0 ? void 0 : _a[res.status];
        if ((_b = this.errConfig.statusMap) === null || _b === void 0 ? void 0 : _b[res.status]) {
            throw utils_1.transferStringTemplate(statusTarget, { code: res.status });
        }
        // 處理回傳的錯誤代碼
        var targetKey = this.errConfig.targetKey;
        var validCode = this.errConfig.validCode;
        var resCode = targetKey && utils_1.getValueByObjPath(targetKey, res.data);
        if (Array.isArray(resCode)) {
            resCode = resCode[0];
        }
        var defaultMsg = this.errConfig.defaultMsg;
        var isValid;
        if (resCode === undefined) {
            throw new Error("The targetKey '" + targetKey + "' is not exist.");
        }
        if (Array.isArray(validCode)) {
            isValid = validCode.includes(resCode);
        }
        else if (typeof validCode === 'string' || typeof validCode === 'number') {
            isValid = validCode === resCode;
        }
        if (!isValid) {
            var errMap = __assign(__assign({}, this.errConfig.errMap), resConfig.errMap);
            var msg = errMap[resCode] || defaultMsg;
            var params = {
                code: resCode
            };
            msg = utils_1.transferStringTemplate(msg, params);
            throw msg;
        }
        return res;
    };
    return ErrorHandler;
}(request_1.default));
exports.default = ErrorHandler;
//# sourceMappingURL=error.js.map