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
            throw statusTarget.replace(/\{code\}/gim, res.status);
        }
        // 處理回傳的錯誤代碼
        var targetKey = this.errConfig.targetKey;
        var validCode = this.errConfig.validCode;
        var resCode = targetKey === null || targetKey === void 0 ? void 0 : targetKey.split('.').reduce(function (val, next) {
            return val[next];
        }, res.data);
        if (Array.isArray(resCode)) {
            resCode = resCode[0];
        }
        var defaultMsg = this.errConfig.defaultMsg;
        defaultMsg = defaultMsg.replace(/\{code\}/gim, resCode);
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
            if (!errMap[resCode]) {
                throw defaultMsg;
            }
            throw errMap[resCode];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsMEZBQWdDO0FBRW5CLHdCQUFnQixHQUF1QjtJQUNsRCxTQUFTLEVBQUUsTUFBTTtJQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxVQUFVLEVBQUUsa0NBQWtDO0NBQy9DO0FBQ0Q7SUFBMEMsZ0NBQU87SUFDL0Msc0JBQ1MsYUFBNEIsRUFDNUIsU0FBZ0Q7UUFBaEQsd0NBQWdDLHdCQUFnQjtRQUZ6RCxZQUlFLGtCQUFNLGFBQWEsQ0FBQyxTQUtyQjtRQVJRLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGVBQVMsR0FBVCxTQUFTLENBQXVDO1FBR3ZELElBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixLQUFJLENBQUMsU0FBUyx5QkFBTyx3QkFBZ0IsR0FBSyxLQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFEO1FBQ0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFHLElBQUksWUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUFDOztJQUNyRCxDQUFDO0lBRU0sbUJBQU0sR0FBYixVQUNFLGFBQTRCLEVBQzVCLE1BQTJCO1FBRTNCLE9BQU8sSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHdDQUFpQixHQUFqQixVQUFrQixHQUFrQjs7UUFDbEMsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQW1DO1FBQ3pELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sR0FBRztRQUM5QixTQUFTO1FBQ1QsSUFBTSxZQUFZLFNBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLDBDQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDM0QsVUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsMENBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUN6QyxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDdEQ7UUFDRCxZQUFZO1FBQ1osSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1FBQzFDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUztRQUMxQyxJQUFJLE9BQU8sR0FBRyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTtZQUNuRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDWixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQW9CO1FBQ3BELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDdkQsSUFBSSxPQUFPO1FBRVgsSUFBRyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWtCLFNBQVMsb0JBQWlCLENBQUM7U0FDOUQ7UUFFRCxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQ3RDO2FBQUssSUFBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFHO1lBQ3hFLE9BQU8sR0FBRyxTQUFTLEtBQUssT0FBTztTQUNoQztRQUVELElBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDWCxJQUFNLE1BQU0seUJBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDeEUsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxVQUFVO2FBQ2pCO1lBQ0QsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBR0QsT0FBTyxHQUFHO0lBQ1osQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxDQWxFeUMsaUJBQU8sR0FrRWhEOzs7Ozs7Ozs7Ozs7Ozs7O0FDekVEO0lBR0UsaUJBQXNCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRnhDLGNBQVMsR0FBdUIsRUFBRTtJQUc1QyxDQUFDO0lBRUQsMkJBQVMsR0FBVCxVQUFVLEVBQXNEO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSxTQUFFLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxFQUFwQixDQUFvQixDQUFDO0lBQzdFLENBQUM7SUFFRCw0QkFBVSxHQUFWLFVBQVcsRUFBOEM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxJQUFJLFNBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLEVBQXhCLENBQXdCLENBQUM7SUFDcEYsQ0FBQztJQUVELGdDQUFjLEdBQWQsVUFBZSxFQUFzQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxlQUFLLElBQUksU0FBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDckcsQ0FBQztJQUVELGlDQUFlLEdBQWYsVUFBZ0IsRUFBc0M7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsZUFBSyxJQUFJLFNBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCx5QkFBTyxHQUFQLFVBQVEsRUFBc0M7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdILGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImVyckhhbmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Vycm9yLnRzXCIpO1xuIiwiaW1wb3J0IHsgRXJyb3JIYW5kbGVyQ29uZmlnLCBFcnJvck1hcCwgRXh0ZW5kc0F4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZX0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0ge1xuICB0YXJnZXRLZXk6IFwiY29kZVwiLFxuICB2YWxpZENvZGU6IFswXSxcbiAgZGVmYXVsdE1zZzogJyh7Y29kZX0pIFNvbWV0aGluZyBnb2VzIHdyb25nLi4uJ1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JIYW5kbGVyIGV4dGVuZHMgUmVxdWVzdHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSxcbiAgICBwdWJsaWMgZXJyQ29uZmlnOiBFcnJvckhhbmRsZXJDb25maWcgPSBkZWZhdWx0RXJyQ29uZmlnXG4gICkge1xuICAgIHN1cGVyKGF4aW9zSW5zdGFuY2UpXG4gICAgaWYodGhpcy5lcnJDb25maWcpIHtcbiAgICAgIHRoaXMuZXJyQ29uZmlnID0gey4uLmRlZmF1bHRFcnJDb25maWcsIC4uLnRoaXMuZXJyQ29uZmlnfVxuICAgIH1cbiAgICB0aGlzLm9uUmVzcG9uc2UocmVzID0+IHRoaXMuaGFuZGxlRXJyUmVzcG9uc2UocmVzKSlcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSxcbiAgICBjb25maWc/OiBFcnJvckhhbmRsZXJDb25maWdcbiAgKTogRXJyb3JIYW5kbGVyIHtcbiAgICByZXR1cm4gbmV3IEVycm9ySGFuZGxlcihheGlvc0luc3RhbmNlLCBjb25maWcpXG4gIH1cblxuICBoYW5kbGVWYWxpZGF0ZVN0YXR1cyhzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBoYW5kbGVFcnJSZXNwb25zZShyZXM6IEF4aW9zUmVzcG9uc2UpOiBBeGlvc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZXNDb25maWcgPSByZXMuY29uZmlnIGFzIEV4dGVuZHNBeGlvc1JlcXVlc3RDb25maWdcbiAgICBpZighdGhpcy5lcnJDb25maWcpIHJldHVybiByZXNcbiAgICAvLyDomZXnkIblm57lgrPni4DmhYtcbiAgICBjb25zdCBzdGF0dXNUYXJnZXQgPSB0aGlzLmVyckNvbmZpZy5zdGF0dXNNYXA/LltyZXMuc3RhdHVzXVxuICAgIGlmKHRoaXMuZXJyQ29uZmlnLnN0YXR1c01hcD8uW3Jlcy5zdGF0dXNdKSB7XG4gICAgICB0aHJvdyBzdGF0dXNUYXJnZXQucmVwbGFjZSgvXFx7Y29kZVxcfS9naW0sIHJlcy5zdGF0dXMpXG4gICAgfVxuICAgIC8vIOiZleeQhuWbnuWCs+eahOmMr+iqpOS7o+eivFxuICAgIGNvbnN0IHRhcmdldEtleSA9IHRoaXMuZXJyQ29uZmlnLnRhcmdldEtleVxuICAgIGNvbnN0IHZhbGlkQ29kZSA9IHRoaXMuZXJyQ29uZmlnLnZhbGlkQ29kZVxuICAgIGxldCByZXNDb2RlID0gdGFyZ2V0S2V5Py5zcGxpdCgnLicpLnJlZHVjZSgodmFsLCBuZXh0KSA9PiB7XG4gICAgICByZXR1cm4gdmFsW25leHRdXG4gICAgfSwgcmVzLmRhdGEpXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZXNDb2RlKSkge1xuICAgICAgcmVzQ29kZSA9IHJlc0NvZGVbMF1cbiAgICB9XG4gICAgbGV0IGRlZmF1bHRNc2cgPSB0aGlzLmVyckNvbmZpZy5kZWZhdWx0TXNnIGFzIHN0cmluZ1xuICAgIGRlZmF1bHRNc2cgPSBkZWZhdWx0TXNnLnJlcGxhY2UoL1xce2NvZGVcXH0vZ2ltLCByZXNDb2RlKVxuICAgIGxldCBpc1ZhbGlkXG5cbiAgICBpZihyZXNDb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHRhcmdldEtleSAnJHt0YXJnZXRLZXl9JyBpcyBub3QgZXhpc3QuYClcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbGlkQ29kZSkpIHtcbiAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUuaW5jbHVkZXMocmVzQ29kZSlcbiAgICB9ZWxzZSBpZih0eXBlb2YgdmFsaWRDb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsaWRDb2RlID09PSAnbnVtYmVyJyApIHtcbiAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUgPT09IHJlc0NvZGVcbiAgICB9XG5cbiAgICBpZighaXNWYWxpZCkge1xuICAgICAgY29uc3QgZXJyTWFwOiBFcnJvck1hcCA9IHsuLi50aGlzLmVyckNvbmZpZy5lcnJNYXAsIC4uLnJlc0NvbmZpZy5lcnJNYXB9XG4gICAgICBpZighZXJyTWFwW3Jlc0NvZGVdKSB7XG4gICAgICAgIHRocm93IGRlZmF1bHRNc2dcbiAgICAgIH1cbiAgICAgIHRocm93IGVyck1hcFtyZXNDb2RlXVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cbiIsImltcG9ydCB7QXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdHtcbiAgcHJvdGVjdGVkIHJlcUNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge31cblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZSkge1xuICB9XG5cbiAgb25SZXF1ZXN0KGZuOiAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IEF4aW9zUmVxdWVzdENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoY29uZmlnID0+IGZuKGNvbmZpZykgfHwgY29uZmlnKVxuICB9XG5cbiAgb25SZXNwb25zZShmbjogKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiBBeGlvc1Jlc3BvbnNlKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4gZm4ocmVzcG9uc2UpIHx8IHJlc3BvbnNlKVxuICB9XG5cbiAgb25SZXF1ZXN0RXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uUmVzcG9uc2VFcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHVuZGVmaW5lZCwgZXJyb3IgPT4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKSlcbiAgfVxuXG4gIG9uRXJyb3IoZm46IChjb25maWc6IEF4aW9zRXJyb3IpID0+IEF4aW9zRXJyb3IpOiB2b2lkIHtcbiAgICB0aGlzLm9uUmVxdWVzdEVycm9yKGZuKVxuICAgIHRoaXMub25SZXNwb25zZUVycm9yKGZuKVxuICB9XG5cblxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9