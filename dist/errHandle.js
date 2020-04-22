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
var request_1 = __importDefault(__webpack_require__(/*! ./request */ "./src/request.ts"));
exports.defaultErrConfig = {
    targetKey: "code",
    validCode: [0],
    defaultMsg: '({code}) Something goes wrong...'
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
            throw new Error(statusTarget.replace(/\{code\}/gim, res.status));
        }
        // 處理回傳的錯誤代碼
        var targetKey = this.errConfig.targetKey;
        var validCode = this.errConfig.validCode;
        var resCode = res.data[targetKey];
        if (Array.isArray(resCode)) {
            resCode = resCode[0];
        }
        var defaultMsg = this.errConfig.defaultMsg;
        defaultMsg = defaultMsg.replace(/\{code\}/gim, resCode);
        var isValid;
        if (resCode === undefined) {
            throw new Error("Cannot find the targetKey: '" + targetKey + "'");
        }
        if (Array.isArray(validCode)) {
            isValid = validCode.includes(resCode);
        }
        if (typeof validCode === 'string' || typeof validCode === 'number') {
            isValid = validCode === resCode;
        }
        if (!isValid) {
            var errMap = __assign(__assign({}, this.errConfig.errMap), resConfig.errMap);
            if (!errMap[resCode]) {
                throw new Error(defaultMsg);
            }
            throw new Error(errMap[resCode]);
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsMEZBQWdDO0FBRW5CLHdCQUFnQixHQUF1QjtJQUNsRCxTQUFTLEVBQUUsTUFBTTtJQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxVQUFVLEVBQUUsa0NBQWtDO0NBQy9DO0FBQ0Q7SUFBMEMsZ0NBQU87SUFDL0Msc0JBQ1MsYUFBNEIsRUFDNUIsU0FBZ0Q7UUFBaEQsd0NBQWdDLHdCQUFnQjtRQUZ6RCxZQUlFLGtCQUFNLGFBQWEsQ0FBQyxTQUtyQjtRQVJRLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVC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QyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxJQUFJLFNBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQXBCLENBQW9CLENBQUM7SUFDN0UsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxFQUE4QztRQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGtCQUFRLElBQUksU0FBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQztJQUNwRixDQUFDO0lBRUQsZ0NBQWMsR0FBZCxVQUFlLEVBQXNDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGVBQUssSUFBSSxTQUFFLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUNyRyxDQUFDO0lBRUQsaUNBQWUsR0FBZixVQUFnQixFQUFzQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxlQUFLLElBQUksU0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDdEcsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxFQUFzQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBR0gsY0FBQztBQUFELENBQUMiLCJmaWxlIjoiZXJySGFuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZXJyb3IudHNcIik7XG4iLCJpbXBvcnQgeyBFcnJvckhhbmRsZXJDb25maWcsIEVycm9yTWFwLCBFeHRlbmRzQXhpb3NSZXF1ZXN0Q29uZmlnLCBSZXNwb25zZVN0YXR1c0hhbmRsZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UsIEF4aW9zSW5zdGFuY2V9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRFcnJDb25maWc6IEVycm9ySGFuZGxlckNvbmZpZyA9IHtcbiAgdGFyZ2V0S2V5OiBcImNvZGVcIixcbiAgdmFsaWRDb2RlOiBbMF0sXG4gIGRlZmF1bHRNc2c6ICcoe2NvZGV9KSBTb21ldGhpbmcgZ29lcyB3cm9uZy4uLidcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ySGFuZGxlciBleHRlbmRzIFJlcXVlc3R7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UsXG4gICAgcHVibGljIGVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0gZGVmYXVsdEVyckNvbmZpZ1xuICApIHtcbiAgICBzdXBlcihheGlvc0luc3RhbmNlKVxuICAgIGlmKHRoaXMuZXJyQ29uZmlnKSB7XG4gICAgICB0aGlzLmVyckNvbmZpZyA9IHsuLi5kZWZhdWx0RXJyQ29uZmlnLCAuLi50aGlzLmVyckNvbmZpZ31cbiAgICB9XG4gICAgdGhpcy5vblJlc3BvbnNlKHJlcyA9PiB0aGlzLmhhbmRsZUVyclJlc3BvbnNlKHJlcykpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKFxuICAgIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UsXG4gICAgY29uZmlnPzogRXJyb3JIYW5kbGVyQ29uZmlnXG4gICk6IEVycm9ySGFuZGxlciB7XG4gICAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIoYXhpb3NJbnN0YW5jZSwgY29uZmlnKVxuICB9XG5cbiAgaGFuZGxlVmFsaWRhdGVTdGF0dXMoc3RhdHVzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFuZGxlRXJyUmVzcG9uc2UocmVzOiBBeGlvc1Jlc3BvbnNlKTogQXhpb3NSZXNwb25zZSB7XG4gICAgY29uc3QgcmVzQ29uZmlnID0gcmVzLmNvbmZpZyBhcyBFeHRlbmRzQXhpb3NSZXF1ZXN0Q29uZmlnXG4gICAgaWYoIXRoaXMuZXJyQ29uZmlnKSByZXR1cm4gcmVzXG4gICAgLy8g6JmV55CG5Zue5YKz54uA5oWLXG4gICAgY29uc3Qgc3RhdHVzVGFyZ2V0ID0gdGhpcy5lcnJDb25maWcuc3RhdHVzTWFwPy5bcmVzLnN0YXR1c11cbiAgICBpZih0aGlzLmVyckNvbmZpZy5zdGF0dXNNYXA/LltyZXMuc3RhdHVzXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHN0YXR1c1RhcmdldC5yZXBsYWNlKC9cXHtjb2RlXFx9L2dpbSwgcmVzLnN0YXR1cykpXG4gICAgfVxuICAgIC8vIOiZleeQhuWbnuWCs+eahOmMr+iqpOS7o+eivFxuICAgIGNvbnN0IHRhcmdldEtleSA9IHRoaXMuZXJyQ29uZmlnLnRhcmdldEtleSBhcyBzdHJpbmdcbiAgICBjb25zdCB2YWxpZENvZGUgPSB0aGlzLmVyckNvbmZpZy52YWxpZENvZGVcbiAgICBsZXQgcmVzQ29kZSA9IHJlcy5kYXRhW3RhcmdldEtleV1cbiAgICBpZihBcnJheS5pc0FycmF5KHJlc0NvZGUpKSB7XG4gICAgICByZXNDb2RlID0gcmVzQ29kZVswXVxuICAgIH1cbiAgICBsZXQgZGVmYXVsdE1zZyA9IHRoaXMuZXJyQ29uZmlnLmRlZmF1bHRNc2cgYXMgc3RyaW5nXG4gICAgZGVmYXVsdE1zZyA9IGRlZmF1bHRNc2cucmVwbGFjZSgvXFx7Y29kZVxcfS9naW0sIHJlc0NvZGUpXG4gICAgbGV0IGlzVmFsaWRcbiAgICBpZihyZXNDb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgdGhlIHRhcmdldEtleTogJyR7dGFyZ2V0S2V5fSdgKVxuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsaWRDb2RlKSkge1xuICAgICAgaXNWYWxpZCA9IHZhbGlkQ29kZS5pbmNsdWRlcyhyZXNDb2RlKVxuICAgIH1cblxuICAgIGlmKHR5cGVvZiB2YWxpZENvZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWxpZENvZGUgPT09ICdudW1iZXInICkge1xuICAgICAgaXNWYWxpZCA9IHZhbGlkQ29kZSA9PT0gcmVzQ29kZVxuICAgIH1cblxuICAgIGlmKCFpc1ZhbGlkKSB7XG4gICAgICBjb25zdCBlcnJNYXA6IEVycm9yTWFwID0gey4uLnRoaXMuZXJyQ29uZmlnLmVyck1hcCwgLi4ucmVzQ29uZmlnLmVyck1hcH1cbiAgICAgIGlmKCFlcnJNYXBbcmVzQ29kZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlZmF1bHRNc2cpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTWFwW3Jlc0NvZGVdKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cbiIsImltcG9ydCB7QXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdHtcbiAgcHJvdGVjdGVkIHJlcUNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge31cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkge1xuICB9XG5cbiAgb25SZXF1ZXN0KGZuOiAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IEF4aW9zUmVxdWVzdENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoY29uZmlnID0+IGZuKGNvbmZpZykgfHwgY29uZmlnKVxuICB9XG5cbiAgb25SZXNwb25zZShmbjogKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiBBeGlvc1Jlc3BvbnNlKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4gZm4ocmVzcG9uc2UpIHx8IHJlc3BvbnNlKVxuICB9XG5cbiAgb25SZXF1ZXN0RXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uUmVzcG9uc2VFcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uRXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLm9uUmVxdWVzdEVycm9yKGZuKVxuICAgIHRoaXMub25SZXNwb25zZUVycm9yKGZuKVxuICB9XG5cblxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9