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

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(response, config) {
        this.response = response;
        this.config = config;
        this.targetValue = "";
        this.isValidValue = true;
        this.errMsg = "";
        this.handleErrorResponse();
    }
    ErrorHandler.register = function (response, config) {
        return new ErrorHandler(response, config);
    };
    ErrorHandler.prototype.getTargetValue = function () {
        var val = this.config.path && utils_1.getValueByObjPath(this.config.path, this.response);
        if (Array.isArray(val)) {
            return val === null || val === void 0 ? void 0 : val[0];
        }
        else if (!this.config.path && (typeof this.response === 'number' || typeof this.response === 'string')) {
            return this.response;
        }
        return val || "";
    };
    ErrorHandler.prototype.handleErrorResponse = function () {
        var _a, _b;
        this.targetValue = this.getTargetValue();
        this.errMsg = this.getErrMsg();
        this.isValidValue = this.getValueValidation();
        if (!this.isValidValue) {
            (_b = (_a = this.config).handleMsg) === null || _b === void 0 ? void 0 : _b.call(_a, this.errMsg, this.targetValue);
        }
    };
    ErrorHandler.prototype.getErrMsg = function () {
        var _a;
        var _b;
        var msg = ((_b = this.config.map) === null || _b === void 0 ? void 0 : _b[this.targetValue]) || this.config.defaultMsg
            || "Error occurred!";
        var params = (_a = {},
            _a[this.config.templateKey] = this.targetValue,
            _a);
        return utils_1.transferStringTemplate(msg, params);
    };
    ErrorHandler.prototype.getValueValidation = function () {
        var silentValue = this.config.silentValue;
        if (typeof silentValue === 'string' || typeof silentValue === 'number') {
            return silentValue === this.config.silentValue;
        }
        else if (Array.isArray(silentValue)) {
            return silentValue.includes(this.targetValue);
        }
        else if (typeof silentValue === 'function') {
            return silentValue(this.targetValue);
        }
        else if (typeof silentValue === 'undefined') {
            return !this.errMsg;
        }
        return true;
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;


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
        return val[next] || "";
    }, data);
}
exports.getValueByObjPath = getValueByObjPath;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBLG1FQUFvRTtBQUNwRTtJQUlFLHNCQUNVLFFBQXVCLEVBQ3ZCLE1BQTBCO1FBRDFCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFMNUIsZ0JBQVcsR0FBb0IsRUFBRTtRQUNqQyxpQkFBWSxHQUFHLElBQUk7UUFDbkIsV0FBTSxHQUFHLEVBQUU7UUFLakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFO0lBQzVCLENBQUM7SUFFTSxxQkFBUSxHQUFmLFVBQ0UsUUFBdUIsRUFDdkIsTUFBMEI7UUFFMUIsT0FBTyxJQUFJLFlBQVksQ0FBQyxR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LE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJO1FBQzdDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDeEIsQ0FBQyxFQUFFLElBQUksRUFBQztBQUNWLENBQUM7QUFKRCw4Q0FJQyIsImZpbGUiOiJlcnJIYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lcnJvci50c1wiKTtcbiIsImltcG9ydCB7IEVycm9ySGFuZGxlckNvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdHJhbnNmZXJTdHJpbmdUZW1wbGF0ZSwgZ2V0VmFsdWVCeU9ialBhdGggfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJ7XG4gIHByaXZhdGUgdGFyZ2V0VmFsdWU6IHN0cmluZyB8IG51bWJlciA9IFwiXCJcbiAgcHJpdmF0ZSBpc1ZhbGlkVmFsdWUgPSB0cnVlXG4gIHByaXZhdGUgZXJyTXNnID0gXCJcIlxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEVycm9ySGFuZGxlckNvbmZpZ1xuICApIHtcbiAgICB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UoKVxuICB9XG5cbiAgc3RhdGljIHJlZ2lzdGVyKFxuICAgIHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlLFxuICAgIGNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnXG4gICk6IEVycm9ySGFuZGxlciB7XG4gICAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIocmVzcG9uc2UsIGNvbmZpZylcbiAgfVxuXG4gIGdldFRhcmdldFZhbHVlKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5jb25maWcucGF0aCAmJiBnZXRWYWx1ZUJ5T2JqUGF0aCh0aGlzLmNvbmZpZy5wYXRoLCB0aGlzLnJlc3BvbnNlKVxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIHZhbD8uWzBdXG4gICAgfVxuICAgIGVsc2UgaWYoIXRoaXMuY29uZmlnLnBhdGggJiYgKHR5cGVvZiB0aGlzLnJlc3BvbnNlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5yZXNwb25zZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVxuICAgIH1cbiAgICByZXR1cm4gdmFsIHx8IFwiXCJcbiAgfVxuXG4gIGhhbmRsZUVycm9yUmVzcG9uc2UoKTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXRWYWx1ZSA9IHRoaXMuZ2V0VGFyZ2V0VmFsdWUoKVxuICAgIHRoaXMuZXJyTXNnID0gdGhpcy5nZXRFcnJNc2coKVxuICAgIHRoaXMuaXNWYWxpZFZhbHVlID0gdGhpcy5nZXRWYWx1ZVZhbGlkYXRpb24oKVxuICAgIGlmKCF0aGlzLmlzVmFsaWRWYWx1ZSkge1xuICAgICAgdGhpcy5jb25maWcuaGFuZGxlTXNnPy4odGhpcy5lcnJNc2csIHRoaXMudGFyZ2V0VmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBnZXRFcnJNc2coKTogc3RyaW5nIHtcbiAgICBjb25zdCBtc2cgPSB0aGlzLmNvbmZpZy5tYXA/Llt0aGlzLnRhcmdldFZhbHVlXVxuICAgICAgfHwgdGhpcy5jb25maWcuZGVmYXVsdE1zZ1xuICAgICAgfHwgYEVycm9yIG9jY3VycmVkIWBcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBbdGhpcy5jb25maWcudGVtcGxhdGVLZXkgYXMgc3RyaW5nXTogdGhpcy50YXJnZXRWYWx1ZVxuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmZXJTdHJpbmdUZW1wbGF0ZShtc2csIHBhcmFtcylcbiAgfVxuXG4gIGdldFZhbHVlVmFsaWRhdGlvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBzaWxlbnRWYWx1ZSA9IHRoaXMuY29uZmlnLnNpbGVudFZhbHVlXG4gICAgaWYodHlwZW9mIHNpbGVudFZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2lsZW50VmFsdWUgPT09ICdudW1iZXInICkge1xuICAgICAgcmV0dXJuIHNpbGVudFZhbHVlID09PSB0aGlzLmNvbmZpZy5zaWxlbnRWYWx1ZVxuICAgIH1cbiAgICBlbHNlIGlmKEFycmF5LmlzQXJyYXkoc2lsZW50VmFsdWUpKSB7XG4gICAgICByZXR1cm4gc2lsZW50VmFsdWUuaW5jbHVkZXModGhpcy50YXJnZXRWYWx1ZSlcbiAgICB9XG4gICAgZWxzZSBpZih0eXBlb2Ygc2lsZW50VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzaWxlbnRWYWx1ZSh0aGlzLnRhcmdldFZhbHVlKVxuICAgIH1cbiAgICBlbHNlIGlmKHR5cGVvZiBzaWxlbnRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAhdGhpcy5lcnJNc2dcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBTdHJpbmdJbmRleCB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2ZlclN0cmluZ1RlbXBsYXRlKHRlbXBsYXRlU3RyaW5nOiBzdHJpbmcsIGluc2VydHM6IFN0cmluZ0luZGV4KTogc3RyaW5nIHtcbiAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nPy5yZXBsYWNlKC9cXHtcXHMqKFskI0BcXC1cXGRcXHddKylcXHMqXFx9L2dpbSwgKHYsIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGluc2VydHNbdmFsXVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVCeU9ialBhdGgob2JqZWN0UGF0aDogc3RyaW5nLCBkYXRhOiBTdHJpbmdJbmRleCk6IGFueSB7XG4gIHJldHVybiBvYmplY3RQYXRoPy5zcGxpdCgnLicpLnJlZHVjZSgodmFsLCBuZXh0KSA9PiB7XG4gICAgcmV0dXJuIHZhbFtuZXh0XSB8fCBcIlwiXG4gIH0sIGRhdGEpXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==