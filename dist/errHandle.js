(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrConfig = {
    targetKey: "code",
    validCode: [0],
    defaultMsg: '({code}) Something goes wrong...'
};
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(errMap, errConfig) {
        if (errMap === void 0) { errMap = {}; }
        if (errConfig === void 0) { errConfig = exports.defaultErrConfig; }
        this.errMap = errMap;
        this.errConfig = errConfig;
        if (this.errConfig) {
            this.errConfig = __assign(__assign({}, exports.defaultErrConfig), this.errConfig);
        }
    }
    ErrorHandler.create = function (errMap, config) {
        return new ErrorHandler(errMap, config);
    };
    ErrorHandler.prototype.handleErrResponse = function (res) {
        if (!this.errConfig)
            return res;
        var targetKey = this.errConfig.targetKey;
        var validCode = this.errConfig.validCode;
        var resCode = res.data[targetKey];
        var defaultMsg = this.errConfig.defaultMsg;
        defaultMsg = defaultMsg.replace(/\{code\}/gim, resCode);
        var isValid;
        if (resCode === undefined) {
            throw new Error("Cannot find the 'targetKey': " + targetKey);
        }
        if (Array.isArray(validCode)) {
            isValid = validCode.includes(resCode);
        }
        if (typeof validCode === 'string' || typeof validCode === 'number') {
            isValid = validCode === resCode;
        }
        if (!isValid) {
            if (!this.errMap[resCode]) {
                throw new Error(defaultMsg);
            }
            throw new Error(this.errMap[resCode]);
        }
        return res;
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VhLHdCQUFnQixHQUF1QjtJQUNsRCxTQUFTLEVBQUUsTUFBTTtJQUNqQixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxVQUFVLEVBQUUsa0NBQWtDO0NBQy9DO0FBQ0Q7SUFDRSxzQkFDVSxNQUFxQixFQUNyQixTQUFnRDtRQURoRCxvQ0FBcUI7UUFDckIsd0NBQWdDLHdCQUFnQjtRQURoRCxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBRXhELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyx5QkFBTyx3QkFBZ0IsR0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFEO0lBRUgsQ0FBQztJQUVNLG1CQUFNLEdBQWIsVUFBYyxNQUFpQixFQUFFLE1BQTJCO1FBQzFELE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLEdBQWtCO1FBQ2xDLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sR0FBRztRQUM5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQW1CO1FBQ3BELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUztRQUMxQyxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQW9CO1FBQ3BELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDdkQsSUFBSSxPQUFPO1FBQ1QsSUFBRyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWdDLFNBQVcsQ0FBQztTQUM3RDtRQUVELElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDdEM7UUFFRCxJQUFHLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUc7WUFDbEUsT0FBTyxHQUFHLFNBQVMsS0FBSyxPQUFPO1NBQ2hDO1FBRUQsSUFBRyxDQUFDLE9BQU8sRUFBRTtZQUNYLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUM1QjtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztRQUdELE9BQU8sR0FBRztJQUNkLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMiLCJmaWxlIjoiZXJySGFuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZXJyb3IudHNcIik7XG4iLCJpbXBvcnQgeyBFcnJvckhhbmRsZXJDb25maWcsIEVycm9yTWFwIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0RXJyQ29uZmlnOiBFcnJvckhhbmRsZXJDb25maWcgPSB7XG4gIHRhcmdldEtleTogXCJjb2RlXCIsXG4gIHZhbGlkQ29kZTogWzBdLFxuICBkZWZhdWx0TXNnOiAnKHtjb2RlfSkgU29tZXRoaW5nIGdvZXMgd3JvbmcuLi4nXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckhhbmRsZXJ7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlcnJNYXA6IEVycm9yTWFwID0ge30sXG4gICAgcHJpdmF0ZSBlcnJDb25maWc6IEVycm9ySGFuZGxlckNvbmZpZyA9IGRlZmF1bHRFcnJDb25maWdcbiAgKSB7XG4gICAgaWYodGhpcy5lcnJDb25maWcpIHtcbiAgICAgIHRoaXMuZXJyQ29uZmlnID0gey4uLmRlZmF1bHRFcnJDb25maWcsIC4uLnRoaXMuZXJyQ29uZmlnfVxuICAgIH1cblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShlcnJNYXA/OiBFcnJvck1hcCwgY29uZmlnPzogRXJyb3JIYW5kbGVyQ29uZmlnKTogRXJyb3JIYW5kbGVye1xuICAgIHJldHVybiBuZXcgRXJyb3JIYW5kbGVyKGVyck1hcCwgY29uZmlnKVxuICB9XG5cbiAgaGFuZGxlRXJyUmVzcG9uc2UocmVzOiBBeGlvc1Jlc3BvbnNlKTogQXhpb3NSZXNwb25zZSB7XG4gICAgaWYoIXRoaXMuZXJyQ29uZmlnKSByZXR1cm4gcmVzXG4gICAgY29uc3QgdGFyZ2V0S2V5ID0gdGhpcy5lcnJDb25maWcudGFyZ2V0S2V5IGFzIHN0cmluZ1xuICAgIGNvbnN0IHZhbGlkQ29kZSA9IHRoaXMuZXJyQ29uZmlnLnZhbGlkQ29kZVxuICAgIGNvbnN0IHJlc0NvZGUgPSByZXMuZGF0YVt0YXJnZXRLZXldXG4gICAgbGV0IGRlZmF1bHRNc2cgPSB0aGlzLmVyckNvbmZpZy5kZWZhdWx0TXNnIGFzIHN0cmluZ1xuICAgIGRlZmF1bHRNc2cgPSBkZWZhdWx0TXNnLnJlcGxhY2UoL1xce2NvZGVcXH0vZ2ltLCByZXNDb2RlKVxuICAgIGxldCBpc1ZhbGlkXG4gICAgICBpZihyZXNDb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCB0aGUgJ3RhcmdldEtleSc6ICR7dGFyZ2V0S2V5fWApXG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsaWRDb2RlKSkge1xuICAgICAgICBpc1ZhbGlkID0gdmFsaWRDb2RlLmluY2x1ZGVzKHJlc0NvZGUpXG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiB2YWxpZENvZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWxpZENvZGUgPT09ICdudW1iZXInICkge1xuICAgICAgICBpc1ZhbGlkID0gdmFsaWRDb2RlID09PSByZXNDb2RlXG4gICAgICB9XG5cbiAgICAgIGlmKCFpc1ZhbGlkKSB7XG4gICAgICAgIGlmKCF0aGlzLmVyck1hcFtyZXNDb2RlXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkZWZhdWx0TXNnKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLmVyck1hcFtyZXNDb2RlXSlcbiAgICAgIH1cblxuXG4gICAgICByZXR1cm4gcmVzXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==