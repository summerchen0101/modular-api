module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/error.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/error.ts":
/*!**********************!*\
  !*** ./src/error.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var request_1 = __importDefault(__webpack_require__(/*! ./request */ "./src/request.ts"));
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


/***/ }),

/***/ "./src/request.ts":
/*!************************!*\
  !*** ./src/request.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function transferStringTemplate(templateString, inserts) {
    return templateString === null || templateString === void 0 ? void 0 : templateString.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, function (v, val) {
        return inserts[val];
    });
}
exports.transferStringTemplate = transferStringTemplate;
function getValueByObjPath(objectPath, data) {
    return objectPath === null || objectPath === void 0 ? void 0 : objectPath.split('.').reduce(function (val, next) {
        return val[next];
    }, data);
}
exports.getValueByObjPath = getValueByObjPath;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBLG1FQUFvRTtBQUNwRSwwRkFBZ0M7QUFFbkIsd0JBQWdCLEdBQXVCO0lBQ2xELFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNkLFVBQVUsRUFBRSxrQ0FBa0M7Q0FDL0M7QUFDRDtJQUEwQyxnQ0FBTztJQUMvQyxzQkFDUyxhQUE0QixFQUM1QixTQUFnRDtRQUFoRCx3Q0FBZ0Msd0JBQWdCO1FBRnpELFlBSUUsa0JBQU0sYUFBYSxD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QUFFLFVBQUMsQ0FBQyxFQUFFLEdBQVc7UUFDM0UsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3JCLENBQUMsRUFBQztBQUNKLENBQUM7QUFKRCx3REFJQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFVBQWtCLEVBQUUsSUFBaUI7SUFDckUsT0FBTyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTtRQUM3QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQyxFQUFFLElBQUksRUFBQztBQUNWLENBQUM7QUFKRCw4Q0FJQyIsImZpbGUiOiJlcnJIYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lcnJvci50c1wiKTtcbiIsImltcG9ydCB7IEVycm9ySGFuZGxlckNvbmZpZywgRXJyb3JNYXAsIEV4dGVuZHNBeGlvc1JlcXVlc3RDb25maWcsIFN0cmluZ0luZGV4IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlLCBBeGlvc0luc3RhbmNlfSBmcm9tICdheGlvcydcbmltcG9ydCB7IHRyYW5zZmVyU3RyaW5nVGVtcGxhdGUsIGdldFZhbHVlQnlPYmpQYXRoIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0ge1xuICB0YXJnZXRLZXk6IFwiY29kZVwiLFxuICB2YWxpZENvZGU6IFswXSxcbiAgZGVmYXVsdE1zZzogJyh7Y29kZX0pIFNvbWV0aGluZyBnb2VzIHdyb25nLi4uJyxcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ySGFuZGxlciBleHRlbmRzIFJlcXVlc3R7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UsXG4gICAgcHVibGljIGVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0gZGVmYXVsdEVyckNvbmZpZ1xuICApIHtcbiAgICBzdXBlcihheGlvc0luc3RhbmNlKVxuICAgIGlmKHRoaXMuZXJyQ29uZmlnKSB7XG4gICAgICB0aGlzLmVyckNvbmZpZyA9IHsuLi5kZWZhdWx0RXJyQ29uZmlnLCAuLi50aGlzLmVyckNvbmZpZ31cbiAgICB9XG4gICAgdGhpcy5vblJlc3BvbnNlKHJlcyA9PiB0aGlzLmhhbmRsZUVyclJlc3BvbnNlKHJlcykpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKFxuICAgIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UsXG4gICAgY29uZmlnPzogRXJyb3JIYW5kbGVyQ29uZmlnXG4gICk6IEVycm9ySGFuZGxlciB7XG4gICAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIoYXhpb3NJbnN0YW5jZSwgY29uZmlnKVxuICB9XG5cbiAgaGFuZGxlVmFsaWRhdGVTdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFuZGxlRXJyUmVzcG9uc2UocmVzOiBBeGlvc1Jlc3BvbnNlKTogQXhpb3NSZXNwb25zZSB7XG4gICAgY29uc3QgcmVzQ29uZmlnID0gcmVzLmNvbmZpZyBhcyBFeHRlbmRzQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICAgaWYoIXRoaXMuZXJyQ29uZmlnKSByZXR1cm4gcmVzXG4gICAgLy8g6JmV55CG5Zue5YKz54uA5oWLXG4gICAgY29uc3Qgc3RhdHVzVGFyZ2V0ID0gdGhpcy5lcnJDb25maWcuc3RhdHVzTWFwPy5bcmVzLnN0YXR1c11cbiAgICBpZih0aGlzLmVyckNvbmZpZy5zdGF0dXNNYXA/LltyZXMuc3RhdHVzXSkge1xuICAgICAgdGhyb3cgdHJhbnNmZXJTdHJpbmdUZW1wbGF0ZShzdGF0dXNUYXJnZXQsIHtjb2RlOiByZXMuc3RhdHVzfSlcbiAgICB9XG4gICAgLy8g6JmV55CG5Zue5YKz55qE6Yyv6Kqk5Luj56K8XG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gdGhpcy5lcnJDb25maWcudGFyZ2V0S2V5XG4gICAgY29uc3QgdmFsaWRDb2RlID0gdGhpcy5lcnJDb25maWcudmFsaWRDb2RlXG4gICAgbGV0IHJlc0NvZGUgPSB0YXJnZXRLZXkgJiYgZ2V0VmFsdWVCeU9ialBhdGgodGFyZ2V0S2V5LCByZXMuZGF0YSkgYXMgc3RyaW5nXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZXNDb2RlKSkge1xuICAgICAgcmVzQ29kZSA9IHJlc0NvZGVbMF1cbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdE1zZyA9IHRoaXMuZXJyQ29uZmlnLmRlZmF1bHRNc2cgYXMgc3RyaW5nXG5cbiAgICBsZXQgaXNWYWxpZFxuXG4gICAgaWYocmVzQ29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0YXJnZXRLZXkgJyR7dGFyZ2V0S2V5fScgaXMgbm90IGV4aXN0LmApXG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheSh2YWxpZENvZGUpKSB7XG4gICAgICBpc1ZhbGlkID0gdmFsaWRDb2RlLmluY2x1ZGVzKHJlc0NvZGUpXG4gICAgfWVsc2UgaWYodHlwZW9mIHZhbGlkQ29kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbGlkQ29kZSA9PT0gJ251bWJlcicgKSB7XG4gICAgICBpc1ZhbGlkID0gdmFsaWRDb2RlID09PSByZXNDb2RlXG4gICAgfVxuXG4gICAgaWYoIWlzVmFsaWQpIHtcbiAgICAgIGNvbnN0IGVyck1hcDogRXJyb3JNYXAgPSB7Li4udGhpcy5lcnJDb25maWcuZXJyTWFwLCAuLi5yZXNDb25maWcuZXJyTWFwfVxuICAgICAgbGV0IG1zZyA9IGVyck1hcFtyZXNDb2RlXSB8fCBkZWZhdWx0TXNnXG4gICAgICBjb25zdCBwYXJhbXM6IHtjb2RlOiBzdHJpbmc7IG1zZz86IHN0cmluZ30gPSB7XG4gICAgICAgIGNvZGU6IHJlc0NvZGVcbiAgICAgIH1cbiAgICAgIG1zZyA9IHRyYW5zZmVyU3RyaW5nVGVtcGxhdGUobXNnLCBwYXJhbXMpXG5cbiAgICAgIHRocm93IG1zZ1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cbiIsImltcG9ydCB7QXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdHtcbiAgcHJvdGVjdGVkIHJlcUNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge31cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkge1xuICB9XG5cbiAgb25SZXF1ZXN0KGZuOiAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IEF4aW9zUmVxdWVzdENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoY29uZmlnID0+IGZuKGNvbmZpZykgfHwgY29uZmlnKVxuICB9XG5cbiAgb25SZXNwb25zZShmbjogKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiBBeGlvc1Jlc3BvbnNlKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4gZm4ocmVzcG9uc2UpIHx8IHJlc3BvbnNlKVxuICB9XG5cbiAgb25SZXF1ZXN0RXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uUmVzcG9uc2VFcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uRXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLm9uUmVxdWVzdEVycm9yKGZuKVxuICAgIHRoaXMub25SZXNwb25zZUVycm9yKGZuKVxuICB9XG5cblxufVxuXG5cblxuXG4iLCJpbXBvcnQgeyBTdHJpbmdJbmRleCB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2ZlclN0cmluZ1RlbXBsYXRlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcsIGluc2VydHM6IFN0cmluZ0luZGV4KTogc3RyaW5nIHtcbiAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nPy5yZXBsYWNlKC9cXHtcXHMqKFskI0BcXC1cXGRcXHddKylcXHMqXFx9L2dpbSwgKHYsIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGluc2VydHNbdmFsXVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeU9ialBhdGgob2JqZWN0UGF0aDogc3RyaW5nLCBkYXRhOiBTdHJpbmdJbmRleCk6IHVua25vd24ge1xuICByZXR1cm4gb2JqZWN0UGF0aD8uc3BsaXQoJy4nKS5yZWR1Y2UoKHZhbCwgbmV4dCkgPT4ge1xuICAgIHJldHVybiB2YWxbbmV4dF1cbiAgfSwgZGF0YSlcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9