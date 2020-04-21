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
        this.handleResponseStatus = function (status, isValid) {
            if (!isValid) {
                // console.warn(`statusCode: ${status}`)
                throw new Error("statusCode: " + status);
            }
            return isValid;
        };
        if (this.errConfig) {
            this.errConfig = __assign(__assign({}, exports.defaultErrConfig), this.errConfig);
        }
    }
    Object.defineProperty(ErrorHandler.prototype, "defaultErrMap", {
        get: function () {
            return this.errMap;
        },
        enumerable: true,
        configurable: true
    });
    ErrorHandler.create = function (errMap, config) {
        return new ErrorHandler(errMap, config);
    };
    ErrorHandler.prototype.handleErrResponse = function (res) {
        var resConfig = res.config;
        if (!this.errConfig)
            return res;
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
            var errMap = __assign(__assign({}, this.errMap), resConfig.errMap);
            if (!errMap[resCode]) {
                throw new Error(defaultMsg);
            }
            throw new Error(errMap[resCode]);
        }
        return res;
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FYSx3QkFBZ0IsR0FBdUI7SUFDbEQsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2QsVUFBVSxFQUFFLGtDQUFrQztDQUMvQztBQUNEO0lBQ0Usc0JBQ1UsTUFBcUIsRUFDckIsU0FBZ0Q7UUFEaEQsb0NBQXFCO1FBQ3JCLHdDQUFnQyx3QkFBZ0I7UUFEaEQsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUF1QztRQWdCMUQseUJBQW9CLEdBQTBCLFVBQUMsTUFBTSxFQUFFLE9BQU87WUFDNUQsSUFBRyxDQUFDLE9BQU8sRUFBRTtnQkFDWCx3Q0FBd0M7Z0JBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWUsTUFBUSxDQUFDO2FBQ3pDO1lBQ0QsT0FBTyxPQUFPO1FBQ2hCLENBQUM7UUFwQkMsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLHlCQUFPLHdCQUFnQixHQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDMUQ7SUFFSCxDQUFDO0lBRUQsc0JBQUksdUNBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNO1FBQ3BCLENBQUM7OztPQUFBO0lBRU0sbUJBQU0sR0FBYixVQUFjLE1BQWlCLEVBQUUsTUFBMkI7UUFDMUQsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFVRCx3Q0FBaUIsR0FBakIsVUFBa0IsR0FBa0I7UUFDbEMsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQW1DO1FBQ3pELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sR0FBRztRQUM5QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQW1CO1FBQ3BELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUztRQUMxQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQW9CO1FBQ3BELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDdkQsSUFBSSxPQUFPO1FBQ1gsSUFBRyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQStCLFNBQVMsTUFBRyxDQUFDO1NBQzdEO1FBRUQsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUN0QztRQUVELElBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRztZQUNsRSxPQUFPLEdBQUcsU0FBUyxLQUFLLE9BQU87U0FDaEM7UUFFRCxJQUFHLENBQUMsT0FBTyxFQUFFO1lBQ1gsSUFBTSxNQUFNLHlCQUFpQixJQUFJLENBQUMsTUFBTSxHQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUQsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDNUI7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUdELE9BQU8sR0FBRztJQUNaLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMiLCJmaWxlIjoiZXJySGFuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZXJyb3IudHNcIik7XG4iLCJpbXBvcnQgeyBFcnJvckhhbmRsZXJDb25maWcsIEVycm9yTWFwLCBFeHRlbmRzQXhpb3NSZXF1ZXN0Q29uZmlnLCBSZXNwb25zZVN0YXR1c0hhbmRsZXIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRFcnJDb25maWc6IEVycm9ySGFuZGxlckNvbmZpZyA9IHtcbiAgdGFyZ2V0S2V5OiBcImNvZGVcIixcbiAgdmFsaWRDb2RlOiBbMF0sXG4gIGRlZmF1bHRNc2c6ICcoe2NvZGV9KSBTb21ldGhpbmcgZ29lcyB3cm9uZy4uLidcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ySGFuZGxlcntcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVyck1hcDogRXJyb3JNYXAgPSB7fSxcbiAgICBwcml2YXRlIGVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0gZGVmYXVsdEVyckNvbmZpZ1xuICApIHtcbiAgICBpZih0aGlzLmVyckNvbmZpZykge1xuICAgICAgdGhpcy5lcnJDb25maWcgPSB7Li4uZGVmYXVsdEVyckNvbmZpZywgLi4udGhpcy5lcnJDb25maWd9XG4gICAgfVxuXG4gIH1cblxuICBnZXQgZGVmYXVsdEVyck1hcCgpOiBFcnJvck1hcCB7XG4gICAgcmV0dXJuIHRoaXMuZXJyTWFwXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGVyck1hcD86IEVycm9yTWFwLCBjb25maWc/OiBFcnJvckhhbmRsZXJDb25maWcpOiBFcnJvckhhbmRsZXJ7XG4gICAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIoZXJyTWFwLCBjb25maWcpXG4gIH1cblxuICBoYW5kbGVSZXNwb25zZVN0YXR1czogUmVzcG9uc2VTdGF0dXNIYW5kbGVyID0gKHN0YXR1cywgaXNWYWxpZCkgPT4ge1xuICAgIGlmKCFpc1ZhbGlkKSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oYHN0YXR1c0NvZGU6ICR7c3RhdHVzfWApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHN0YXR1c0NvZGU6ICR7c3RhdHVzfWApXG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkXG4gIH1cblxuICBoYW5kbGVFcnJSZXNwb25zZShyZXM6IEF4aW9zUmVzcG9uc2UpOiBBeGlvc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZXNDb25maWcgPSByZXMuY29uZmlnIGFzIEV4dGVuZHNBeGlvc1JlcXVlc3RDb25maWdcbiAgICBpZighdGhpcy5lcnJDb25maWcpIHJldHVybiByZXNcbiAgICBjb25zdCB0YXJnZXRLZXkgPSB0aGlzLmVyckNvbmZpZy50YXJnZXRLZXkgYXMgc3RyaW5nXG4gICAgY29uc3QgdmFsaWRDb2RlID0gdGhpcy5lcnJDb25maWcudmFsaWRDb2RlXG4gICAgbGV0IHJlc0NvZGUgPSByZXMuZGF0YVt0YXJnZXRLZXldXG4gICAgaWYoQXJyYXkuaXNBcnJheShyZXNDb2RlKSkge1xuICAgICAgcmVzQ29kZSA9IHJlc0NvZGVbMF1cbiAgICB9XG4gICAgbGV0IGRlZmF1bHRNc2cgPSB0aGlzLmVyckNvbmZpZy5kZWZhdWx0TXNnIGFzIHN0cmluZ1xuICAgIGRlZmF1bHRNc2cgPSBkZWZhdWx0TXNnLnJlcGxhY2UoL1xce2NvZGVcXH0vZ2ltLCByZXNDb2RlKVxuICAgIGxldCBpc1ZhbGlkXG4gICAgaWYocmVzQ29kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHRoZSB0YXJnZXRLZXk6ICcke3RhcmdldEtleX0nYClcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbGlkQ29kZSkpIHtcbiAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUuaW5jbHVkZXMocmVzQ29kZSlcbiAgICB9XG5cbiAgICBpZih0eXBlb2YgdmFsaWRDb2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsaWRDb2RlID09PSAnbnVtYmVyJyApIHtcbiAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUgPT09IHJlc0NvZGVcbiAgICB9XG5cbiAgICBpZighaXNWYWxpZCkge1xuICAgICAgY29uc3QgZXJyTWFwOiBFcnJvck1hcCA9IHsuLi50aGlzLmVyck1hcCwgLi4ucmVzQ29uZmlnLmVyck1hcH1cbiAgICAgIGlmKCFlcnJNYXBbcmVzQ29kZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlZmF1bHRNc2cpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTWFwW3Jlc0NvZGVdKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=