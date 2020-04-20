(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/default.ts":
/*!************************!*\
  !*** ./src/default.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'json'
};


/***/ }),

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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
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
var path_1 = __importDefault(__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"));
var request_1 = __importDefault(__webpack_require__(/*! ./request */ "./src/request.ts"));
var error_1 = __importDefault(__webpack_require__(/*! ./error */ "./src/error.ts"));
var ApiHub = /** @class */ (function (_super) {
    __extends(ApiHub, _super);
    function ApiHub(reqConfig) {
        var _this = _super.call(this, reqConfig) || this;
        _this.moduleRoot = {};
        return _this;
    }
    ApiHub.create = function (extendConfig) {
        return new ApiHub(extendConfig);
    };
    ApiHub.prototype.getModules = function () {
        return this.moduleRoot;
    };
    ApiHub.prototype.registerModule = function (moduleName, module, moduleConfig) {
        if (moduleConfig === void 0) { moduleConfig = {}; }
        this.moduleRoot[moduleName] = this.createModule(module, moduleConfig);
    };
    ApiHub.prototype.createModule = function (module, moduleConfig) {
        var _this = this;
        if (moduleConfig === void 0) { moduleConfig = {}; }
        var modulehub = {};
        var _loop_1 = function (key) {
            modulehub[key] = function (reqData, apiConfig) {
                if (apiConfig === void 0) { apiConfig = {}; }
                var api = module.apis[key];
                var url = api.url, query, data;
                if (typeof reqData === 'object') {
                    url = url.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, function (v, val) {
                        if ('params' in reqData) {
                            return reqData.params && reqData.params[val];
                        }
                        throw new Error("The params '" + val + "' do not have a assign value.");
                    });
                    if (reqData.query) {
                        query = reqData.query;
                    }
                    if (reqData.data) {
                        data = reqData.data;
                    }
                }
                var reqConfig = __assign(__assign({}, moduleConfig), apiConfig);
                if (reqConfig.type === 'form') {
                    data = data && _this.toFormData(data);
                }
                var axiosConfig = __assign({ method: api.method, url: path_1.default.join(module.base, url), params: query, data: data }, reqConfig);
                return _this.axiosInstance(axiosConfig);
            };
        };
        for (var key in module.apis) {
            _loop_1(key);
        }
        return modulehub;
    };
    ApiHub.prototype.registerErrHandler = function (errMap, config) {
        this.errHandler = error_1.default.create(errMap, config);
        this.onResponse(this.errHandler.handleErrResponse.bind(this.errHandler));
    };
    return ApiHub;
}(request_1.default));
exports.default = ApiHub;


/***/ }),

/***/ "./src/request.ts":
/*!************************!*\
  !*** ./src/request.ts ***!
  \************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
var default_1 = __importDefault(__webpack_require__(/*! ./default */ "./src/default.ts"));
var Request = /** @class */ (function () {
    function Request(config) {
        this.reqConfig = default_1.default;
        if (config) {
            this.reqConfig = __assign(__assign({}, this.reqConfig), config);
        }
        this.axiosInstance = axios_1.default.create(this.axiosConfig);
    }
    Object.defineProperty(Request.prototype, "axiosConfig", {
        get: function () {
            var config = {
                baseURL: this.reqConfig.baseURL,
            };
            return config;
        },
        enumerable: true,
        configurable: true
    });
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
    Request.prototype.setConfig = function (config) {
        this.reqConfig = __assign(__assign({}, this.reqConfig), config);
    };
    Request.prototype.toFormData = function (data) {
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return formData;
    };
    return Request;
}());
exports.default = Request;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0LnRz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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFjLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCwyQkFBUyxHQUFULFVBQVUsTUFBaUI7UUFDekIsSUFBSSxDQUFDLFNBQVMseUJBQU8sSUFBSSxDQUFDLFNBQVMsR0FBSyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxJQUFpQjtRQUMxQixJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMvQixLQUFJLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUNyQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLFFBQVE7SUFDakIsQ0FBQztJQUVILGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyBSZXFDb25maWcgfSBmcm9tICcuL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICdqc29uJ1xufSBhcyBSZXFDb25maWdcbiIsImltcG9ydCB7IEVycm9ySGFuZGxlckNvbmZpZywgRXJyb3JNYXAgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRFcnJDb25maWc6IEVycm9ySGFuZGxlckNvbmZpZyA9IHtcbiAgdGFyZ2V0S2V5OiBcImNvZGVcIixcbiAgdmFsaWRDb2RlOiBbMF0sXG4gIGRlZmF1bHRNc2c6ICcoe2NvZGV9KSBTb21ldGhpbmcgZ29lcyB3cm9uZy4uLidcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ySGFuZGxlcntcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVyck1hcDogRXJyb3JNYXAgPSB7fSxcbiAgICBwcml2YXRlIGVyckNvbmZpZzogRXJyb3JIYW5kbGVyQ29uZmlnID0gZGVmYXVsdEVyckNvbmZpZ1xuICApIHtcbiAgICBpZih0aGlzLmVyckNvbmZpZykge1xuICAgICAgdGhpcy5lcnJDb25maWcgPSB7Li4uZGVmYXVsdEVyckNvbmZpZywgLi4udGhpcy5lcnJDb25maWd9XG4gICAgfVxuXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGVyck1hcD86IEVycm9yTWFwLCBjb25maWc/OiBFcnJvckhhbmRsZXJDb25maWcpOiBFcnJvckhhbmRsZXJ7XG4gICAgcmV0dXJuIG5ldyBFcnJvckhhbmRsZXIoZXJyTWFwLCBjb25maWcpXG4gIH1cblxuICBoYW5kbGVFcnJSZXNwb25zZShyZXM6IEF4aW9zUmVzcG9uc2UpOiBBeGlvc1Jlc3BvbnNlIHtcbiAgICBpZighdGhpcy5lcnJDb25maWcpIHJldHVybiByZXNcbiAgICBjb25zdCB0YXJnZXRLZXkgPSB0aGlzLmVyckNvbmZpZy50YXJnZXRLZXkgYXMgc3RyaW5nXG4gICAgY29uc3QgdmFsaWRDb2RlID0gdGhpcy5lcnJDb25maWcudmFsaWRDb2RlXG4gICAgY29uc3QgcmVzQ29kZSA9IHJlcy5kYXRhW3RhcmdldEtleV1cbiAgICBsZXQgZGVmYXVsdE1zZyA9IHRoaXMuZXJyQ29uZmlnLmRlZmF1bHRNc2cgYXMgc3RyaW5nXG4gICAgZGVmYXVsdE1zZyA9IGRlZmF1bHRNc2cucmVwbGFjZSgvXFx7Y29kZVxcfS9naW0sIHJlc0NvZGUpXG4gICAgbGV0IGlzVmFsaWRcbiAgICAgIGlmKHJlc0NvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIHRoZSAndGFyZ2V0S2V5JzogJHt0YXJnZXRLZXl9YClcbiAgICAgIH1cblxuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWxpZENvZGUpKSB7XG4gICAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUuaW5jbHVkZXMocmVzQ29kZSlcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHZhbGlkQ29kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbGlkQ29kZSA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUgPT09IHJlc0NvZGVcbiAgICAgIH1cblxuICAgICAgaWYoIWlzVmFsaWQpIHtcbiAgICAgICAgaWYoIXRoaXMuZXJyTWFwW3Jlc0NvZGVdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRlZmF1bHRNc2cpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMuZXJyTWFwW3Jlc0NvZGVdKVxuICAgICAgfVxuXG5cbiAgICAgIHJldHVybiByZXNcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IFJlcUNvbmZpZywgTW9kdWxlLCBNb2R1bGVIdWIsIEFwaURhdGEsIFJlc3BvbnNlRGF0YSwgTW9kdWxlUm9vdCwgRXJyb3JIYW5kbGVyQ29uZmlnLCBFcnJvck1hcCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlIdWIgZXh0ZW5kcyBSZXF1ZXN0e1xuICBwcml2YXRlIG1vZHVsZVJvb3Q6IE1vZHVsZVJvb3QgPSB7fVxuICBwcml2YXRlIGVyckhhbmRsZXI/OiBFcnJvckhhbmRsZXJcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHJlcUNvbmZpZz86IFJlcUNvbmZpZykge1xuICAgIHN1cGVyKHJlcUNvbmZpZylcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoZXh0ZW5kQ29uZmlnPzogUmVxQ29uZmlnKTogQXBpSHViIHtcbiAgICByZXR1cm4gbmV3IEFwaUh1YihleHRlbmRDb25maWcpXG4gIH1cblxuICBnZXRNb2R1bGVzKCk6IE1vZHVsZVJvb3Qge1xuICAgIHJldHVybiB0aGlzLm1vZHVsZVJvb3RcbiAgfVxuXG4gIHJlZ2lzdGVyTW9kdWxlKG1vZHVsZU5hbWU6IHN0cmluZywgbW9kdWxlOiBNb2R1bGUsIG1vZHVsZUNvbmZpZzogUmVxQ29uZmlnID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLm1vZHVsZVJvb3RbbW9kdWxlTmFtZV0gPSB0aGlzLmNyZWF0ZU1vZHVsZShtb2R1bGUsIG1vZHVsZUNvbmZpZylcbiAgfVxuXG4gIGNyZWF0ZU1vZHVsZShtb2R1bGU6IE1vZHVsZSwgbW9kdWxlQ29uZmlnOiBSZXFDb25maWcgPSB7fSk6IE1vZHVsZUh1YiB7XG4gICAgY29uc3QgbW9kdWxlaHViOiBNb2R1bGVIdWIgPSB7fVxuICAgIGZvcihjb25zdCBrZXkgaW4gbW9kdWxlLmFwaXMpIHtcbiAgICAgIG1vZHVsZWh1YltrZXldID0gKHJlcURhdGE6IEFwaURhdGEsIGFwaUNvbmZpZzogUmVxQ29uZmlnID0ge30pOiBQcm9taXNlPFJlc3BvbnNlRGF0YT4gPT4ge1xuXG4gICAgICAgIGNvbnN0IGFwaSA9IG1vZHVsZS5hcGlzW2tleV1cbiAgICAgICAgbGV0IHVybCA9IGFwaS51cmwsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGRhdGFcblxuICAgICAgICBpZih0eXBlb2YgcmVxRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFx7XFxzKihbJCNAXFwtXFxkXFx3XSspXFxzKlxcfS9naW0sICh2LCB2YWw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYoJ3BhcmFtcycgaW4gcmVxRGF0YSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVxRGF0YS5wYXJhbXMgJiYgcmVxRGF0YS5wYXJhbXNbdmFsXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyYW1zICcke3ZhbH0nIGRvIG5vdCBoYXZlIGEgYXNzaWduIHZhbHVlLmApXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZihyZXFEYXRhLnF1ZXJ5KSB7XG4gICAgICAgICAgICBxdWVyeSA9IHJlcURhdGEucXVlcnlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVxRGF0YS5kYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gcmVxRGF0YS5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcUNvbmZpZyA9IHsuLi5tb2R1bGVDb25maWcsIC4uLmFwaUNvbmZpZ31cbiAgICAgICAgaWYocmVxQ29uZmlnLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgIGRhdGEgPSBkYXRhICYmIHRoaXMudG9Gb3JtRGF0YShkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXhpb3NDb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgICBtZXRob2Q6IGFwaS5tZXRob2QsXG4gICAgICAgICAgdXJsOiBwYXRoLmpvaW4obW9kdWxlLmJhc2UsIHVybCksXG4gICAgICAgICAgcGFyYW1zOiBxdWVyeSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIC4uLnJlcUNvbmZpZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF4aW9zSW5zdGFuY2UoYXhpb3NDb25maWcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2R1bGVodWJcblxuICB9XG4gIHJlZ2lzdGVyRXJySGFuZGxlcihlcnJNYXA/OiBFcnJvck1hcCwgY29uZmlnPzogRXJyb3JIYW5kbGVyQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5lcnJIYW5kbGVyID0gRXJyb3JIYW5kbGVyLmNyZWF0ZShlcnJNYXAsIGNvbmZpZylcbiAgICB0aGlzLm9uUmVzcG9uc2UodGhpcy5lcnJIYW5kbGVyLmhhbmRsZUVyclJlc3BvbnNlLmJpbmQodGhpcy5lcnJIYW5kbGVyKSlcbiAgfVxuXG59XG5cblxuXG5cbiIsImltcG9ydCBheGlvcywge0F4aW9zUmVzcG9uc2UsIEF4aW9zSW5zdGFuY2UsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NFcnJvcn0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBSZXFDb25maWcsIFN0cmluZ0luZGV4fSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgZGVmYXVsdENvbmZpZyBmcm9tICcuL2RlZmF1bHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3R7XG4gIHByb3RlY3RlZCByZXFDb25maWc6IFJlcUNvbmZpZyA9IGRlZmF1bHRDb25maWdcbiAgcHJvdGVjdGVkIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcblxuICBnZXQgYXhpb3NDb25maWcoKTogQXhpb3NSZXF1ZXN0Q29uZmlnIHtcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgIGJhc2VVUkw6IHRoaXMucmVxQ29uZmlnLmJhc2VVUkwsXG4gICAgfVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IFJlcUNvbmZpZykge1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgdGhpcy5yZXFDb25maWcgPSB7Li4udGhpcy5yZXFDb25maWcsIC4uLmNvbmZpZ31cbiAgICB9XG4gICAgdGhpcy5heGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHRoaXMuYXhpb3NDb25maWcpXG4gIH1cblxuICBvblJlcXVlc3QoZm46IChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4gQXhpb3NSZXF1ZXN0Q29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShjb25maWcgPT4gZm4oY29uZmlnKSB8fCBjb25maWcpXG4gIH1cblxuICBvblJlc3BvbnNlKGZuOiAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IEF4aW9zUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiBmbihyZXNwb25zZSkgfHwgcmVzcG9uc2UpXG4gIH1cblxuICBvblJlcXVlc3RFcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UodW5kZWZpbmVkLCBlcnJvciA9PiBmbihlcnJvcikgfHwgUHJvbWlzZS5yZWplY3QoZXJyb3IpKVxuICB9XG5cbiAgb25SZXNwb25zZUVycm9yKGZuOiAoY29uZmlnOiBBeGlvc0Vycm9yKSA9PiBBeGlvc0Vycm9yKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCBlcnJvciA9PiBmbihlcnJvcikgfHwgUHJvbWlzZS5yZWplY3QoZXJyb3IpKVxuICB9XG5cbiAgb25FcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMub25SZXF1ZXN0RXJyb3IoZm4pXG4gICAgdGhpcy5vblJlc3BvbnNlRXJyb3IoZm4pXG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSZXFDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLnJlcUNvbmZpZyA9IHsuLi50aGlzLnJlcUNvbmZpZywgLi4uY29uZmlnfVxuICB9XG5cbiAgdG9Gb3JtRGF0YShkYXRhOiBTdHJpbmdJbmRleCk6IEZvcm1EYXRhIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZm9yKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBkYXRhW2tleV0pXG4gICAgfVxuICAgIHJldHVybiBmb3JtRGF0YVxuICB9XG5cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./test/entry.js":
/*!***********************!*\
  !*** ./test/entry.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/main.js */ "./dist/main.js");
/* harmony import */ var _dist_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_main_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_api_site_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/api/site.json */ "./test/static/api/site.json");
var _static_api_site_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./static/api/site.json */ "./test/static/api/site.json", 1);



const options = {
  baseURL: '/api',
}

const errHandlerConfig = {
  // targetKey: 'code',
  validCode: ['0'],
  defaultMsg: '有個小錯誤, 錯誤代碼:{code}'
}

const errMap = {
  '10001': '人為錯誤',
  '10002': '輸入錯誤',
}


const ApiInstance = _dist_main_js__WEBPACK_IMPORTED_MODULE_0___default.a.create(options)

ApiInstance.registerErrHandler(errMap, errHandlerConfig)

// ApiInstance.onRequest(config => {
//   console.log(config)
// })
ApiInstance.onResponseError(err => {
  console.log(err)
})

const SiteModule = ApiInstance.createModule(_static_api_site_json__WEBPACK_IMPORTED_MODULE_1__)
SiteModule.getSiteInfo()


/***/ }),

/***/ "./test/static/api/site.json":
/*!***********************************!*\
  !*** ./test/static/api/site.json ***!
  \***********************************/
/*! exports provided: base, apis, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base\":\"\",\"apis\":{\"getSubPageContent\":{\"method\":\"get\",\"url\":\"client/layout\"},\"getSiteInfo\":{\"method\":\"get\",\"url\":\"branch/client/info\"},\"getFaq\":{\"method\":\"get\",\"url\":\"faq/client\"},\"getFaqTotal\":{\"method\":\"get\",\"url\":\"faq/client/total\"}}}");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9kaXN0L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sYUFLSjtBQUNGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVE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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7OztBQUd0QyxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtB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QTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxvQkFBb0Isb0RBQUc7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQsNENBQTRDLGtEQUFRO0FBQ3BEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvZW50cnkuanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbGliL2F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9jb3JlL3NldHRsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiKTtcbnZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idWlsZFVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCIpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jb3JlL2J1aWxkRnVsbFBhdGggKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzXCIpO1xudmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIik7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiKTtcbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NvcmUvY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29va2llcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIik7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgQXhpb3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvQXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiKTtcbnZhciBtZXJnZUNvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29yZS9tZXJnZUNvbmZpZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWxUb2tlbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIik7XG5heGlvcy5pc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9zcHJlYWQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgYnVpbGRVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9oZWxwZXJzL2J1aWxkVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIik7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnRlcmNlcHRvck1hbmFnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIik7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kaXNwYXRjaFJlcXVlc3QgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIik7XG52YXIgbWVyZ2VDb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lcmdlQ29uZmlnICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIik7XG52YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9oZWxwZXJzL2NvbWJpbmVVUkxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBlbmhhbmNlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2VuaGFuY2VFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90cmFuc2Zvcm1EYXRhICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiKTtcbnZhciBpc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy94aHIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy9odHRwICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kZWZhdWx0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZGVmYXVsdC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdHlwZTogJ2pzb24nXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Vycm9yLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Vycm9yLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0RXJyQ29uZmlnID0ge1xuICAgIHRhcmdldEtleTogXCJjb2RlXCIsXG4gICAgdmFsaWRDb2RlOiBbMF0sXG4gICAgZGVmYXVsdE1zZzogJyh7Y29kZX0pIFNvbWV0aGluZyBnb2VzIHdyb25nLi4uJ1xufTtcbnZhciBFcnJvckhhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXJyb3JIYW5kbGVyKGVyck1hcCwgZXJyQ29uZmlnKSB7XG4gICAgICAgIGlmIChlcnJNYXAgPT09IHZvaWQgMCkgeyBlcnJNYXAgPSB7fTsgfVxuICAgICAgICBpZiAoZXJyQ29uZmlnID09PSB2b2lkIDApIHsgZXJyQ29uZmlnID0gZXhwb3J0cy5kZWZhdWx0RXJyQ29uZmlnOyB9XG4gICAgICAgIHRoaXMuZXJyTWFwID0gZXJyTWFwO1xuICAgICAgICB0aGlzLmVyckNvbmZpZyA9IGVyckNvbmZpZztcbiAgICAgICAgaWYgKHRoaXMuZXJyQ29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLmVyckNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBleHBvcnRzLmRlZmF1bHRFcnJDb25maWcpLCB0aGlzLmVyckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgRXJyb3JIYW5kbGVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChlcnJNYXAsIGNvbmZpZykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9ySGFuZGxlcihlcnJNYXAsIGNvbmZpZyk7XG4gICAgfTtcbiAgICBFcnJvckhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUVyclJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAoIXRoaXMuZXJyQ29uZmlnKVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgdmFyIHRhcmdldEtleSA9IHRoaXMuZXJyQ29uZmlnLnRhcmdldEtleTtcbiAgICAgICAgdmFyIHZhbGlkQ29kZSA9IHRoaXMuZXJyQ29uZmlnLnZhbGlkQ29kZTtcbiAgICAgICAgdmFyIHJlc0NvZGUgPSByZXMuZGF0YVt0YXJnZXRLZXldO1xuICAgICAgICB2YXIgZGVmYXVsdE1zZyA9IHRoaXMuZXJyQ29uZmlnLmRlZmF1bHRNc2c7XG4gICAgICAgIGRlZmF1bHRNc2cgPSBkZWZhdWx0TXNnLnJlcGxhY2UoL1xce2NvZGVcXH0vZ2ltLCByZXNDb2RlKTtcbiAgICAgICAgdmFyIGlzVmFsaWQ7XG4gICAgICAgIGlmIChyZXNDb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIHRoZSAndGFyZ2V0S2V5JzogXCIgKyB0YXJnZXRLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbGlkQ29kZSkpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWxpZENvZGUuaW5jbHVkZXMocmVzQ29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWxpZENvZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWxpZENvZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsaWRDb2RlID09PSByZXNDb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVyck1hcFtyZXNDb2RlXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihkZWZhdWx0TXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLmVyck1hcFtyZXNDb2RlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBFcnJvckhhbmRsZXI7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRXJyb3JIYW5kbGVyO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21haW4udHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYWluLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcGF0aCAqLyBcIi4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qc1wiKSk7XG52YXIgcmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcmVxdWVzdCAqLyBcIi4vc3JjL3JlcXVlc3QudHNcIikpO1xudmFyIGVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9lcnJvciAqLyBcIi4vc3JjL2Vycm9yLnRzXCIpKTtcbnZhciBBcGlIdWIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwaUh1YiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBcGlIdWIocmVxQ29uZmlnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHJlcUNvbmZpZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubW9kdWxlUm9vdCA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFwaUh1Yi5jcmVhdGUgPSBmdW5jdGlvbiAoZXh0ZW5kQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBpSHViKGV4dGVuZENvbmZpZyk7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLmdldE1vZHVsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZVJvb3Q7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZU5hbWUsIG1vZHVsZSwgbW9kdWxlQ29uZmlnKSB7XG4gICAgICAgIGlmIChtb2R1bGVDb25maWcgPT09IHZvaWQgMCkgeyBtb2R1bGVDb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLm1vZHVsZVJvb3RbbW9kdWxlTmFtZV0gPSB0aGlzLmNyZWF0ZU1vZHVsZShtb2R1bGUsIG1vZHVsZUNvbmZpZyk7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLmNyZWF0ZU1vZHVsZSA9IGZ1bmN0aW9uIChtb2R1bGUsIG1vZHVsZUNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobW9kdWxlQ29uZmlnID09PSB2b2lkIDApIHsgbW9kdWxlQ29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIG1vZHVsZWh1YiA9IHt9O1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG1vZHVsZWh1YltrZXldID0gZnVuY3Rpb24gKHJlcURhdGEsIGFwaUNvbmZpZykge1xuICAgICAgICAgICAgICAgIGlmIChhcGlDb25maWcgPT09IHZvaWQgMCkgeyBhcGlDb25maWcgPSB7fTsgfVxuICAgICAgICAgICAgICAgIHZhciBhcGkgPSBtb2R1bGUuYXBpc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBhcGkudXJsLCBxdWVyeSwgZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcURhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXHtcXHMqKFskI0BcXC1cXGRcXHddKylcXHMqXFx9L2dpbSwgZnVuY3Rpb24gKHYsIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdwYXJhbXMnIGluIHJlcURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxRGF0YS5wYXJhbXMgJiYgcmVxRGF0YS5wYXJhbXNbdmFsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXJhbXMgJ1wiICsgdmFsICsgXCInIGRvIG5vdCBoYXZlIGEgYXNzaWduIHZhbHVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXFEYXRhLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHJlcURhdGEucXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcURhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcURhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVxQ29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG1vZHVsZUNvbmZpZyksIGFwaUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcUNvbmZpZy50eXBlID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgJiYgX3RoaXMudG9Gb3JtRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGF4aW9zQ29uZmlnID0gX19hc3NpZ24oeyBtZXRob2Q6IGFwaS5tZXRob2QsIHVybDogcGF0aF8xLmRlZmF1bHQuam9pbihtb2R1bGUuYmFzZSwgdXJsKSwgcGFyYW1zOiBxdWVyeSwgZGF0YTogZGF0YSB9LCByZXFDb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5heGlvc0luc3RhbmNlKGF4aW9zQ29uZmlnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGUuYXBpcykge1xuICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGVodWI7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLnJlZ2lzdGVyRXJySGFuZGxlciA9IGZ1bmN0aW9uIChlcnJNYXAsIGNvbmZpZykge1xuICAgICAgICB0aGlzLmVyckhhbmRsZXIgPSBlcnJvcl8xLmRlZmF1bHQuY3JlYXRlKGVyck1hcCwgY29uZmlnKTtcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlKHRoaXMuZXJySGFuZGxlci5oYW5kbGVFcnJSZXNwb25zZS5iaW5kKHRoaXMuZXJySGFuZGxlcikpO1xuICAgIH07XG4gICAgcmV0dXJuIEFwaUh1Yjtcbn0ocmVxdWVzdF8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwaUh1YjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9yZXF1ZXN0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcmVxdWVzdC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiKSk7XG52YXIgZGVmYXVsdF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdCAqLyBcIi4vc3JjL2RlZmF1bHQudHNcIikpO1xudmFyIFJlcXVlc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVxdWVzdChjb25maWcpIHtcbiAgICAgICAgdGhpcy5yZXFDb25maWcgPSBkZWZhdWx0XzEuZGVmYXVsdDtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5yZXFDb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5yZXFDb25maWcpLCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXhpb3NJbnN0YW5jZSA9IGF4aW9zXzEuZGVmYXVsdC5jcmVhdGUodGhpcy5heGlvc0NvbmZpZyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1ZXN0LnByb3RvdHlwZSwgXCJheGlvc0NvbmZpZ1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBiYXNlVVJMOiB0aGlzLnJlcUNvbmZpZy5iYXNlVVJMLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFJlcXVlc3QucHJvdG90eXBlLm9uUmVxdWVzdCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHsgcmV0dXJuIGZuKGNvbmZpZykgfHwgY29uZmlnOyB9KTtcbiAgICB9O1xuICAgIFJlcXVlc3QucHJvdG90eXBlLm9uUmVzcG9uc2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiBmbihyZXNwb25zZSkgfHwgcmVzcG9uc2U7IH0pO1xuICAgIH07XG4gICAgUmVxdWVzdC5wcm90b3R5cGUub25SZXF1ZXN0RXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSh1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gZm4oZXJyb3IpIHx8IFByb21pc2UucmVqZWN0KGVycm9yKTsgfSk7XG4gICAgfTtcbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5vblJlc3BvbnNlRXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGZuKGVycm9yKSB8fCBQcm9taXNlLnJlamVjdChlcnJvcik7IH0pO1xuICAgIH07XG4gICAgUmVxdWVzdC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLm9uUmVxdWVzdEVycm9yKGZuKTtcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlRXJyb3IoZm4pO1xuICAgIH07XG4gICAgUmVxdWVzdC5wcm90b3R5cGUuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB0aGlzLnJlcUNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnJlcUNvbmZpZyksIGNvbmZpZyk7XG4gICAgfTtcbiAgICBSZXF1ZXN0LnByb3RvdHlwZS50b0Zvcm1EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBkYXRhW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9O1xuICAgIHJldHVybiBSZXF1ZXN0O1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlcXVlc3Q7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTloWkdGd2RHVnljeTk0YUhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTloZUdsdmN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOaGJtTmxiQzlEWVc1alpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5allXNWpaV3d2UTJGdVkyVnNWRzlyWlc0dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqWVc1alpXd3ZhWE5EWVc1alpXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMMEY0YVc5ekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOUpiblJsY21ObGNIUnZjazFoYm1GblpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMMkoxYVd4a1JuVnNiRkJoZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwyTnlaV0YwWlVWeWNtOXlMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdlkyOXlaUzlrYVhOd1lYUmphRkpsY1hWbGMzUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMMlZ1YUdGdVkyVkZjbkp2Y2k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdmJXVnlaMlZEYjI1bWFXY3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5amIzSmxMM05sZEhSc1pTNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJOdmNtVXZkSEpoYm5ObWIzSnRSR0YwWVM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMlJsWm1GMWJIUnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWFXNWtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVEM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZZMjl0WW1sdVpWVlNUSE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwyTnZiMnRwWlhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6UVdKemIyeDFkR1ZWVWt3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlvWld4d1pYSnpMMmx6VlZKTVUyRnRaVTl5YVdkcGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12WVhocGIzTXZiR2xpTDJobGJIQmxjbk12Ym05eWJXRnNhWHBsU0dWaFpHVnlUbUZ0WlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZjR0Z5YzJWSVpXRmtaWEp6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZhR1ZzY0dWeWN5OXpjSEpsWVdRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTkxZEdsc2N5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXViMlJsWDIxdlpIVnNaWE12Y0dGMGFDMWljbTkzYzJWeWFXWjVMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJSbFptRjFiSFF1ZEhNaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyVnljbTl5TG5Seklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXRZV2x1TG5Seklpd2lkMlZpY0dGamF6b3ZMeTh1TDNOeVl5OXlaWEYxWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8xRkRWa0U3VVVGRFFUczdVVUZGUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CTzFGQlEwRTdPenRSUVVkQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFTd3dRMEZCTUVNc1owTkJRV2RETzFGQlF6RkZPMUZCUTBFN08xRkJSVUU3VVVGRFFUdFJRVU5CTzFGQlEwRXNkMFJCUVhkRUxHdENRVUZyUWp0UlFVTXhSVHRSUVVOQkxHbEVRVUZwUkN4alFVRmpPMUZCUXk5RU96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVN4NVEwRkJlVU1zYVVOQlFXbERPMUZCUXpGRkxHZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdFJRVU55U1R0UlFVTkJPenRSUVVWQk8xRkJRMEU3VVVGRFFUdFJRVU5CTERKQ1FVRXlRaXd3UWtGQk1FSXNSVUZCUlR0UlFVTjJSQ3hwUTBGQmFVTXNaVUZCWlR0UlFVTm9SRHRSUVVOQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVN4elJFRkJjMFFzSzBSQlFTdEVPenRSUVVWeVNEdFJRVU5CT3pzN1VVRkhRVHRSUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFc2FVSkJRV2xDTEcxQ1FVRlBMRU5CUVVNc2MwUkJRV0VzUlRzN096czdPenM3T3pzN08wRkRRWHBDT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1R0QlFVTm9ReXhoUVVGaExHMUNRVUZQTEVOQlFVTXNhVVZCUVd0Q08wRkJRM1pETEdWQlFXVXNiVUpCUVU4c1EwRkJReXd5UlVGQmRVSTdRVUZET1VNc2IwSkJRVzlDTEcxQ1FVRlBMRU5CUVVNc05rVkJRWFZDTzBGQlEyNUVMRzFDUVVGdFFpeHRRa0ZCVHl4RFFVRkRMRzFHUVVFeVFqdEJRVU4wUkN4elFrRkJjMElzYlVKQlFVOHNRMEZCUXl4NVJrRkJPRUk3UVVGRE5VUXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNlVVZCUVhGQ096dEJRVVV2UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERSRFFVRTBRenRCUVVNMVF6czdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h2UWtGQmIwSXNiVUpCUVU4c1EwRkJReXg1UlVGQmMwSTdPMEZCUld4RU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3T3pzN096czdPenM3TzBGRGJreGhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4clJFRkJVenRCUVVNM1FpeFhRVUZYTEcxQ1FVRlBMRU5CUVVNc1owVkJRV2RDTzBGQlEyNURMRmxCUVZrc2JVSkJRVThzUTBGQlF5dzBSRUZCWXp0QlFVTnNReXhyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXgzUlVGQmIwSTdRVUZET1VNc1pVRkJaU3h0UWtGQlR5eERRVUZETEhkRVFVRlpPenRCUVVWdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeE5RVUZOTzBGQlEyeENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEdWQlFXVXNiVUpCUVU4c1EwRkJReXhyUlVGQmFVSTdRVUZEZUVNc2IwSkJRVzlDTEcxQ1FVRlBMRU5CUVVNc05FVkJRWE5DTzBGQlEyeEVMR2xDUVVGcFFpeHRRa0ZCVHl4RFFVRkRMSE5GUVVGdFFqczdRVUZGTlVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGxRVUZsTEcxQ1FVRlBMRU5CUVVNc2IwVkJRV3RDT3p0QlFVVjZRenM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRjRVJoT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTJ4Q1lUczdRVUZGWWl4aFFVRmhMRzFDUVVGUExFTkJRVU1zTWtSQlFWVTdPMEZCUlM5Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTNoRVlUczdRVUZGWWp0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5LWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN1FVRkRhRU1zWlVGQlpTeHRRa0ZCVHl4RFFVRkRMSGxGUVVGeFFqdEJRVU0xUXl4NVFrRkJlVUlzYlVKQlFVOHNRMEZCUXl4cFJrRkJjMEk3UVVGRGRrUXNjMEpCUVhOQ0xHMUNRVUZQTEVOQlFVTXNNa1ZCUVcxQ08wRkJRMnBFTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEcxRlFVRmxPenRCUVVWNlF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SRUZCWjBRN1FVRkRhRVE3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFJCUVdkRU8wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFTkJRVU03TzBGQlJVUTdPenM3T3pzN096czdPenM3UVVNM1JtRTdPMEZCUldJc1dVRkJXU3h0UWtGQlR5eERRVUZETEhGRVFVRlpPenRCUVVWb1F6dEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFRRVUZUTzBGQlEzQkNMRmRCUVZjc1UwRkJVenRCUVVOd1FqdEJRVU5CTEZsQlFWa3NUMEZCVHp0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCT3pzN096czdPenM3T3pzN08wRkRia1JoT3p0QlFVVmlMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMRzFHUVVFd1FqdEJRVU4wUkN4clFrRkJhMElzYlVKQlFVOHNRMEZCUXl3clJVRkJkMEk3TzBGQlJXeEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNUMEZCVHp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVDWVRzN1FVRkZZaXh0UWtGQmJVSXNiVUpCUVU4c1EwRkJReXh4UlVGQlowSTdPMEZCUlRORE8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnFRbUU3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaTzBGQlEyaERMRzlDUVVGdlFpeHRRa0ZCVHl4RFFVRkRMSFZGUVVGcFFqdEJRVU0zUXl4bFFVRmxMRzFDUVVGUExFTkJRVU1zZFVWQlFXOUNPMEZCUXpORExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4NVJFRkJZVHM3UVVGRmNFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzSzBKQlFTdENPMEZCUXk5Q0xIVkRRVUYxUXp0QlFVTjJRenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFZEJRVWM3UVVGRFNEczdPenM3T3pzN096czdPenRCUXpsRllUczdRVUZGWWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFMUJRVTA3UVVGRGFrSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1RVRkJUVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU42UTJFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMRzFFUVVGVk96dEJRVVU1UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hIUVVGSE96dEJRVVZJTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVONFJXRTdPMEZCUldJc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2JVVkJRV1U3TzBGQlJYcERPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWl4WFFVRlhMRk5CUVZNN1FVRkRjRUlzVjBGQlZ5eFBRVUZQTzBGQlEyeENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRlRUpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4alFVRmpPMEZCUTNwQ0xGZEJRVmNzVFVGQlRUdEJRVU5xUWl4WFFVRlhMR1ZCUVdVN1FVRkRNVUlzWVVGQllTeEZRVUZGTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVRzN096czdPenM3T3pzN096dEJRMjVDUVN3clEwRkJZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2EwUkJRVk03UVVGRE4wSXNNRUpCUVRCQ0xHMUNRVUZQTEVOQlFVTXNPRVpCUVN0Q096dEJRVVZxUlR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNiVUpCUVU4c1EwRkJReXhuUlVGQlowSTdRVUZEZEVNc1IwRkJSenRCUVVOSU8wRkJRMEVzWTBGQll5eHRRa0ZCVHl4RFFVRkRMR2xGUVVGcFFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhkRlFVRjNSVHRCUVVONFJUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVJFRkJkVVE3UVVGRGRrUTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUeXhaUVVGWk8wRkJRMjVDTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFT3pzN096czdPenM3T3pzN096dEJRMmhIWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRa0ZCYlVJc2FVSkJRV2xDTzBGQlEzQkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTldZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3TzBGQlJXaERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBc1MwRkJTenM3UVVGRlREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZEVWaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEySmhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxEQkRRVUV3UXp0QlFVTXhReXhUUVVGVE96dEJRVVZVTzBGQlEwRXNORVJCUVRSRUxIZENRVUYzUWp0QlFVTndSanRCUVVOQkxGTkJRVk03TzBGQlJWUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE96dEJRVVZNTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3REUVVGclF6dEJRVU5zUXl3clFrRkJLMElzWVVGQllTeEZRVUZGTzBGQlF6bERPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3T3pzN096czdPenM3T3pzN1FVTndSR0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMkpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXhQUVVGUE8wRkJRM0pDTEdkQ1FVRm5RanRCUVVOb1FqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFXTXNUMEZCVHp0QlFVTnlRaXhuUWtGQlowSXNVVUZCVVR0QlFVTjRRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPenRCUVVWTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N096czdPenM3T3pzN096czdRVU51UldFN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMRzFFUVVGVk96dEJRVVU1UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPenM3T3pzN096czdPenM3UVVOWVlUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zY1VSQlFWazdPMEZCUldoRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1pVRkJaVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzQkVZVHM3UVVGRllqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc0swSkJRU3RDTzBGQlF5OUNPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpGQ1lUczdRVUZGWWl4WFFVRlhMRzFDUVVGUExFTkJRVU1zWjBWQlFXZENPenRCUVVWdVF6czdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzWVVGQllUdEJRVU40UWl4WFFVRlhMRk5CUVZNN1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHMURRVUZ0UXl4UFFVRlBPMEZCUXpGRE8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSFZDUVVGMVFpeFRRVUZUTEVkQlFVY3NVMEZCVXp0QlFVTTFReXd5UWtGQk1rSTdRVUZETTBJN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUczdRVUZGUVN4MVEwRkJkVU1zVDBGQlR6dEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNUMEZCVHp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3c1owTkJRV2RETzBGQlEyaERMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNkVU5CUVhWRExFOUJRVTg3UVVGRE9VTTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096dEJRM1pXUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5RMEZCWjBNc1VVRkJVVHRCUVVONFF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVlVGQlZTeE5RVUZOTzBGQlEyaENPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNiME5CUVc5RExEaENRVUU0UWp0QlFVTnNSVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRlZCUVZVc2IwSkJRVzlDTzBGQlF6bENPMEZCUTBFN08wRkJSVUU3UVVGRFFTeFZRVUZWTEZWQlFWVTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xGbEJRVms3UVVGRE4wSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0Q1FVRXJRaXh6UWtGQmMwSTdRVUZEY2tRN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRa0ZCSzBJc1VVRkJVVHRCUVVOMlF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxESkNRVUV5UWl4UlFVRlJPMEZCUTI1RE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3RDUVVFclFpeFJRVUZSTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeGxRVUZsTzBGQlEyeERPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4clEwRkJhME03UVVGRGJFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlF6ZFRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkVUpCUVhWQ0xITkNRVUZ6UWp0QlFVTTNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRanRCUVVOeVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzY1VOQlFYRkRPenRCUVVWeVF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUUwUWl4VlFVRlZPenM3T3pzN096czdPenM3T3pzN1FVTnlUSFJETEd0Q1FVRmxPMGxCUTJJc1NVRkJTU3hGUVVGRkxFMUJRVTA3UTBGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkVSQ3gzUWtGQlowSXNSMEZCZFVJN1NVRkRiRVFzVTBGQlV5eEZRVUZGTEUxQlFVMDdTVUZEYWtJc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyUXNWVUZCVlN4RlFVRkZMR3REUVVGclF6dERRVU12UXp0QlFVTkVPMGxCUTBVc2MwSkJRMVVzVFVGQmNVSXNSVUZEY2tJc1UwRkJaMFE3VVVGRWFFUXNiME5CUVhGQ08xRkJRM0pDTEhkRFFVRm5ReXgzUWtGQlowSTdVVUZFYUVRc1YwRkJUU3hIUVVGT0xFMUJRVTBzUTBGQlpUdFJRVU55UWl4alFVRlRMRWRCUVZRc1UwRkJVeXhEUVVGMVF6dFJRVVY0UkN4SlFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRGFrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc2VVSkJRVThzZDBKQlFXZENMRWRCUVVzc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU14UkR0SlFVVklMRU5CUVVNN1NVRkZUU3h0UWtGQlRTeEhRVUZpTEZWQlFXTXNUVUZCYVVJc1JVRkJSU3hOUVVFeVFqdFJRVU14UkN4UFFVRlBMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTTdTVUZEZWtNc1EwRkJRenRKUVVWRUxIZERRVUZwUWl4SFFVRnFRaXhWUVVGclFpeEhRVUZyUWp0UlFVTnNReXhKUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTTdXVUZCUlN4UFFVRlBMRWRCUVVjN1VVRkRPVUlzU1VGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGdFFqdFJRVU53UkN4SlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTTdVVUZETVVNc1NVRkJUU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1VVRkRia01zU1VGQlNTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGdlFqdFJRVU53UkN4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNUMEZCVHl4RFFVRkRPMUZCUTNaRUxFbEJRVWtzVDBGQlR6dFJRVU5VTEVsQlFVY3NUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVONFFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR3REUVVGblF5eFRRVUZYTEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRNMElzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8xTkJRM1JETzFGQlJVUXNTVUZCUnl4UFFVRlBMRk5CUVZNc1MwRkJTeXhSUVVGUkxFbEJRVWtzVDBGQlR5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkhPMWxCUTJ4RkxFOUJRVThzUjBGQlJ5eFRRVUZUTEV0QlFVc3NUMEZCVHp0VFFVTm9RenRSUVVWRUxFbEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlR0blFrRkRlRUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNN1lVRkROVUk3V1VGRFJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEZEVNN1VVRkhSQ3hQUVVGUExFZEJRVWM3U1VGRFpDeERRVUZETzBsQlJVZ3NiVUpCUVVNN1FVRkJSQ3hEUVVGRE96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGNFUkVMSGxIUVVGMVFqdEJRVU4yUWl3d1JrRkJaME03UVVGRGFFTXNiMFpCUVcxRE8wRkJSVzVETzBsQlFXOURMREJDUVVGUE8wbEJTWHBETEdkQ1FVRnZRaXhUUVVGeFFqdFJRVUY2UXl4WlFVTkZMR3RDUVVGTkxGTkJRVk1zUTBGQlF5eFRRVU5xUWp0UlFVeFBMR2RDUVVGVkxFZEJRV1VzUlVGQlJUczdTVUZMYmtNc1EwRkJRenRKUVVWTkxHRkJRVTBzUjBGQllpeFZRVUZqTEZsQlFYZENPMUZCUTNCRExFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJDd3lRa0ZCVlN4SFFVRldPMUZCUTBVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZUdEpRVU40UWl4RFFVRkRPMGxCUlVRc0swSkJRV01zUjBGQlpDeFZRVUZsTEZWQlFXdENMRVZCUVVVc1RVRkJZeXhGUVVGRkxGbEJRVFJDTzFGQlFUVkNMR2RFUVVFMFFqdFJRVU0zUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGbEJRVmtzUTBGQlF6dEpRVU4yUlN4RFFVRkRPMGxCUlVRc05rSkJRVmtzUjBGQldpeFZRVUZoTEUxQlFXTXNSVUZCUlN4WlFVRTBRanRSUVVGNlJDeHBRa0Y1UTBNN1VVRjZRelJDTEdkRVFVRTBRanRSUVVOMlJDeEpRVUZOTEZOQlFWTXNSMEZCWXl4RlFVRkZPMmREUVVOeVFpeEhRVUZITzFsQlExZ3NVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGVkJRVU1zVDBGQlowSXNSVUZCUlN4VFFVRjVRanRuUWtGQmVrSXNNRU5CUVhsQ08yZENRVVV6UkN4SlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0blFrRkROVUlzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkRZaXhMUVVGTExFVkJRMHdzU1VGQlNUdG5Ra0ZGVWl4SlFVRkhMRTlCUVU4c1QwRkJUeXhMUVVGTExGRkJRVkVzUlVGQlJUdHZRa0ZET1VJc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNOa0pCUVRaQ0xFVkJRVVVzVlVGQlF5eERRVUZETEVWQlFVVXNSMEZCVnp0M1FrRkRPVVFzU1VGQlJ5eFJRVUZSTEVsQlFVa3NUMEZCVHl4RlFVRkZPelJDUVVOMFFpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdlVUpCUXpkRE8zZENRVU5FTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2FVSkJRV1VzUjBGQlJ5eHJRMEZCSzBJc1EwRkJRenR2UWtGRGNFVXNRMEZCUXl4RFFVRkRPMjlDUVVOR0xFbEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlR0M1FrRkRhRUlzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4TFFVRkxPM0ZDUVVOMFFqdHZRa0ZEUkN4SlFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3ZDBKQlEyWXNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSk8zRkNRVU53UWp0cFFrRkRSanRuUWtGRFJDeEpRVUZOTEZOQlFWTXNlVUpCUVU4c1dVRkJXU3hIUVVGTExGTkJRVk1zUTBGQlF6dG5Ra0ZEYWtRc1NVRkJSeXhUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEUxQlFVMHNSVUZCUlR0dlFrRkROVUlzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4TFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF6dHBRa0ZEY2tNN1owSkJSVVFzU1VGQlRTeFhRVUZYTEdOQlEyWXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRMnhDTEVkQlFVY3NSVUZCUlN4alFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUTJoRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlEySXNTVUZCU1N4VlFVTkVMRk5CUVZNc1EwRkRZanRuUWtGRFJDeFBRVUZQTEV0QlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJRM2hETEVOQlFVTTdPMUZCYmtOSUxFdEJRVWtzU1VGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrN2IwSkJRV3hDTEVkQlFVYzdVMEZ2UTFvN1VVRkRSQ3hQUVVGUExGTkJRVk03U1VGRmJFSXNRMEZCUXp0SlFVTkVMRzFEUVVGclFpeEhRVUZzUWl4VlFVRnRRaXhOUVVGcFFpeEZRVUZGTEUxQlFUSkNPMUZCUXk5RUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NaVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETzFGQlEzSkVMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRekZGTEVOQlFVTTdTVUZGU0N4aFFVRkRPMEZCUVVRc1EwRkJReXhEUVc1RmJVTXNhVUpCUVU4c1IwRnRSVEZET3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTjZSVVFzYVVkQlFYbEdPMEZCUjNwR0xEQkdRVUZ4UXp0QlFVVnlRenRKUVZkRkxHbENRVUZaTEUxQlFXdENPMUZCVm5CQ0xHTkJRVk1zUjBGQll5eHBRa0ZCWVR0UlFWYzFReXhKUVVGSExFMUJRVTBzUlVGQlJUdFpRVU5VTEVsQlFVa3NRMEZCUXl4VFFVRlRMSGxDUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVc3NUVUZCVFN4RFFVRkRPMU5CUTJoRU8xRkJRMFFzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4bFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZEY2tRc1EwRkJRenRKUVZwRUxITkNRVUZKTEdkRFFVRlhPMkZCUVdZN1dVRkRSU3hKUVVGTkxFMUJRVTBzUjBGQmRVSTdaMEpCUTJwRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4N1lVRkRhRU03V1VGRFJDeFBRVUZQTEUxQlFVMDdVVUZEWml4RFFVRkRPenM3VDBGQlFUdEpRVk5FTERKQ1FVRlRMRWRCUVZRc1ZVRkJWU3hGUVVGelJEdFJRVU01UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGTkxFbEJRVWtzVTBGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1JVRkJjRUlzUTBGQmIwSXNRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJSVVFzTkVKQlFWVXNSMEZCVml4VlFVRlhMRVZCUVRoRE8xRkJRM1pFTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNhMEpCUVZFc1NVRkJTU3hUUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RlFVRjRRaXhEUVVGM1FpeERRVUZETzBsQlEzQkdMRU5CUVVNN1NVRkZSQ3huUTBGQll5eEhRVUZrTEZWQlFXVXNSVUZCYzBNN1VVRkRia1FzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNaVUZCU3l4SlFVRkpMRk5CUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGc1F5eERRVUZyUXl4RFFVRkRPMGxCUTNKSExFTkJRVU03U1VGRlJDeHBRMEZCWlN4SFFVRm1MRlZCUVdkQ0xFVkJRWE5ETzFGQlEzQkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxHVkJRVXNzU1VGQlNTeFRRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCYkVNc1EwRkJhME1zUTBGQlF6dEpRVU4wUnl4RFFVRkRPMGxCUlVRc2VVSkJRVThzUjBGQlVDeFZRVUZSTEVWQlFYTkRPMUZCUXpWRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNaQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGRlJDd3lRa0ZCVXl4SFFVRlVMRlZCUVZVc1RVRkJhVUk3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc2VVSkJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCU3l4TlFVRk5MRU5CUVVNN1NVRkRha1FzUTBGQlF6dEpRVVZFTERSQ1FVRlZMRWRCUVZZc1ZVRkJWeXhKUVVGcFFqdFJRVU14UWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUlVGQlJUdFJRVU12UWl4TFFVRkpMRWxCUVUwc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJUdFpRVU55UWl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRhRU03VVVGRFJDeFBRVUZQTEZGQlFWRTdTVUZEYWtJc1EwRkJRenRKUVVWSUxHTkJRVU03UVVGQlJDeERRVUZESWl3aVptbHNaU0k2SW0xaGFXNHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdlMXh1WEhSY2RIWmhjaUJoSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJjZEdadmNpaDJZWElnYVNCcGJpQmhLU0FvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUQ4Z1pYaHdiM0owY3lBNklISnZiM1FwVzJsZElEMGdZVnRwWFR0Y2JseDBmVnh1ZlNrb2QybHVaRzkzTENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTl0WVdsdUxuUnpYQ0lwTzF4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMnhwWWk5aGVHbHZjeWNwT3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dWRtRnlJSE5sZEhSc1pTQTlJSEpsY1hWcGNtVW9KeTR2TGk0dlkyOXlaUzl6WlhSMGJHVW5LVHRjYm5aaGNpQmlkV2xzWkZWU1RDQTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVENjcE8xeHVkbUZ5SUdKMWFXeGtSblZzYkZCaGRHZ2dQU0J5WlhGMWFYSmxLQ2N1TGk5amIzSmxMMkoxYVd4a1JuVnNiRkJoZEdnbktUdGNiblpoY2lCd1lYSnpaVWhsWVdSbGNuTWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwyaGxiSEJsY25NdmNHRnljMlZJWldGa1pYSnpKeWs3WEc1MllYSWdhWE5WVWt4VFlXMWxUM0pwWjJsdUlEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJselZWSk1VMkZ0WlU5eWFXZHBiaWNwTzF4dWRtRnlJR055WldGMFpVVnljbTl5SUQwZ2NtVnhkV2x5WlNnbkxpNHZZMjl5WlM5amNtVmhkR1ZGY25KdmNpY3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUhob2NrRmtZWEIwWlhJb1kyOXVabWxuS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaUJrYVhOd1lYUmphRmhvY2xKbGNYVmxjM1FvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z0lDQWdkbUZ5SUhKbGNYVmxjM1JFWVhSaElEMGdZMjl1Wm1sbkxtUmhkR0U3WEc0Z0lDQWdkbUZ5SUhKbGNYVmxjM1JJWldGa1pYSnpJRDBnWTI5dVptbG5MbWhsWVdSbGNuTTdYRzVjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5HYjNKdFJHRjBZU2h5WlhGMVpYTjBSR0YwWVNrcElIdGNiaUFnSUNBZ0lHUmxiR1YwWlNCeVpYRjFaWE4wU0dWaFpHVnljMXNuUTI5dWRHVnVkQzFVZVhCbEoxMDdJQzh2SUV4bGRDQjBhR1VnWW5KdmQzTmxjaUJ6WlhRZ2FYUmNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdjbVZ4ZFdWemRDQTlJRzVsZHlCWVRVeElkSFJ3VW1WeGRXVnpkQ2dwTzF4dVhHNGdJQ0FnTHk4Z1NGUlVVQ0JpWVhOcFl5QmhkWFJvWlc1MGFXTmhkR2x2Ymx4dUlDQWdJR2xtSUNoamIyNW1hV2N1WVhWMGFDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhWelpYSnVZVzFsSUQwZ1kyOXVabWxuTG1GMWRHZ3VkWE5sY201aGJXVWdmSHdnSnljN1hHNGdJQ0FnSUNCMllYSWdjR0Z6YzNkdmNtUWdQU0JqYjI1bWFXY3VZWFYwYUM1d1lYTnpkMjl5WkNCOGZDQW5KenRjYmlBZ0lDQWdJSEpsY1hWbGMzUklaV0ZrWlhKekxrRjFkR2h2Y21sNllYUnBiMjRnUFNBblFtRnphV01nSnlBcklHSjBiMkVvZFhObGNtNWhiV1VnS3lBbk9pY2dLeUJ3WVhOemQyOXlaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUdaMWJHeFFZWFJvSUQwZ1luVnBiR1JHZFd4c1VHRjBhQ2hqYjI1bWFXY3VZbUZ6WlZWU1RDd2dZMjl1Wm1sbkxuVnliQ2s3WEc0Z0lDQWdjbVZ4ZFdWemRDNXZjR1Z1S0dOdmJtWnBaeTV0WlhSb2IyUXVkRzlWY0hCbGNrTmhjMlVvS1N3Z1luVnBiR1JWVWt3b1puVnNiRkJoZEdnc0lHTnZibVpwWnk1d1lYSmhiWE1zSUdOdmJtWnBaeTV3WVhKaGJYTlRaWEpwWVd4cGVtVnlLU3dnZEhKMVpTazdYRzVjYmlBZ0lDQXZMeUJUWlhRZ2RHaGxJSEpsY1hWbGMzUWdkR2x0Wlc5MWRDQnBiaUJOVTF4dUlDQWdJSEpsY1hWbGMzUXVkR2x0Wlc5MWRDQTlJR052Ym1acFp5NTBhVzFsYjNWME8xeHVYRzRnSUNBZ0x5OGdUR2x6ZEdWdUlHWnZjaUJ5WldGa2VTQnpkR0YwWlZ4dUlDQWdJSEpsY1hWbGMzUXViMjV5WldGa2VYTjBZWFJsWTJoaGJtZGxJRDBnWm5WdVkzUnBiMjRnYUdGdVpHeGxURzloWkNncElIdGNiaUFnSUNBZ0lHbG1JQ2doY21WeGRXVnpkQ0I4ZkNCeVpYRjFaWE4wTG5KbFlXUjVVM1JoZEdVZ0lUMDlJRFFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QlVhR1VnY21WeGRXVnpkQ0JsY25KdmNtVmtJRzkxZENCaGJtUWdkMlVnWkdsa2JpZDBJR2RsZENCaElISmxjM0J2Ym5ObExDQjBhR2x6SUhkcGJHd2dZbVZjYmlBZ0lDQWdJQzh2SUdoaGJtUnNaV1FnWW5rZ2IyNWxjbkp2Y2lCcGJuTjBaV0ZrWEc0Z0lDQWdJQ0F2THlCWGFYUm9JRzl1WlNCbGVHTmxjSFJwYjI0NklISmxjWFZsYzNRZ2RHaGhkQ0IxYzJsdVp5Qm1hV3hsT2lCd2NtOTBiMk52YkN3Z2JXOXpkQ0JpY205M2MyVnljMXh1SUNBZ0lDQWdMeThnZDJsc2JDQnlaWFIxY200Z2MzUmhkSFZ6SUdGeklEQWdaWFpsYmlCMGFHOTFaMmdnYVhRbmN5QmhJSE4xWTJObGMzTm1kV3dnY21WeGRXVnpkRnh1SUNBZ0lDQWdhV1lnS0hKbGNYVmxjM1F1YzNSaGRIVnpJRDA5UFNBd0lDWW1JQ0VvY21WeGRXVnpkQzV5WlhOd2IyNXpaVlZTVENBbUppQnlaWEYxWlhOMExuSmxjM0J2Ym5ObFZWSk1MbWx1WkdWNFQyWW9KMlpwYkdVNkp5a2dQVDA5SURBcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnVUhKbGNHRnlaU0IwYUdVZ2NtVnpjRzl1YzJWY2JpQWdJQ0FnSUhaaGNpQnlaWE53YjI1elpVaGxZV1JsY25NZ1BTQW5aMlYwUVd4c1VtVnpjRzl1YzJWSVpXRmtaWEp6SnlCcGJpQnlaWEYxWlhOMElEOGdjR0Z5YzJWSVpXRmtaWEp6S0hKbGNYVmxjM1F1WjJWMFFXeHNVbVZ6Y0c5dWMyVklaV0ZrWlhKektDa3BJRG9nYm5Wc2JEdGNiaUFnSUNBZ0lIWmhjaUJ5WlhOd2IyNXpaVVJoZEdFZ1BTQWhZMjl1Wm1sbkxuSmxjM0J2Ym5ObFZIbHdaU0I4ZkNCamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbElEMDlQU0FuZEdWNGRDY2dQeUJ5WlhGMVpYTjBMbkpsYzNCdmJuTmxWR1Y0ZENBNklISmxjWFZsYzNRdWNtVnpjRzl1YzJVN1hHNGdJQ0FnSUNCMllYSWdjbVZ6Y0c5dWMyVWdQU0I3WEc0Z0lDQWdJQ0FnSUdSaGRHRTZJSEpsYzNCdmJuTmxSR0YwWVN4Y2JpQWdJQ0FnSUNBZ2MzUmhkSFZ6T2lCeVpYRjFaWE4wTG5OMFlYUjFjeXhjYmlBZ0lDQWdJQ0FnYzNSaGRIVnpWR1Y0ZERvZ2NtVnhkV1Z6ZEM1emRHRjBkWE5VWlhoMExGeHVJQ0FnSUNBZ0lDQm9aV0ZrWlhKek9pQnlaWE53YjI1elpVaGxZV1JsY25Nc1hHNGdJQ0FnSUNBZ0lHTnZibVpwWnpvZ1kyOXVabWxuTEZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wT2lCeVpYRjFaWE4wWEc0Z0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNCelpYUjBiR1VvY21WemIyeDJaU3dnY21WcVpXTjBMQ0J5WlhOd2IyNXpaU2s3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z1SUhWd0lISmxjWFZsYzNSY2JpQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQXZMeUJJWVc1a2JHVWdZbkp2ZDNObGNpQnlaWEYxWlhOMElHTmhibU5sYkd4aGRHbHZiaUFvWVhNZ2IzQndiM05sWkNCMGJ5QmhJRzFoYm5WaGJDQmpZVzVqWld4c1lYUnBiMjRwWEc0Z0lDQWdjbVZ4ZFdWemRDNXZibUZpYjNKMElEMGdablZ1WTNScGIyNGdhR0Z1Wkd4bFFXSnZjblFvS1NCN1hHNGdJQ0FnSUNCcFppQW9JWEpsY1hWbGMzUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WldwbFkzUW9ZM0psWVhSbFJYSnliM0lvSjFKbGNYVmxjM1FnWVdKdmNuUmxaQ2NzSUdOdmJtWnBaeXdnSjBWRFQwNU9RVUpQVWxSRlJDY3NJSEpsY1hWbGMzUXBLVHRjYmx4dUlDQWdJQ0FnTHk4Z1EyeGxZVzRnZFhBZ2NtVnhkV1Z6ZEZ4dUlDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1MWJHdzdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lDOHZJRWhoYm1Sc1pTQnNiM2NnYkdWMlpXd2dibVYwZDI5eWF5Qmxjbkp2Y25OY2JpQWdJQ0J5WlhGMVpYTjBMbTl1WlhKeWIzSWdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVkZjbkp2Y2lncElIdGNiaUFnSUNBZ0lDOHZJRkpsWVd3Z1pYSnliM0p6SUdGeVpTQm9hV1JrWlc0Z1puSnZiU0IxY3lCaWVTQjBhR1VnWW5KdmQzTmxjbHh1SUNBZ0lDQWdMeThnYjI1bGNuSnZjaUJ6YUc5MWJHUWdiMjVzZVNCbWFYSmxJR2xtSUdsMEozTWdZU0J1WlhSM2IzSnJJR1Z5Y205eVhHNGdJQ0FnSUNCeVpXcGxZM1FvWTNKbFlYUmxSWEp5YjNJb0owNWxkSGR2Y21zZ1JYSnliM0luTENCamIyNW1hV2NzSUc1MWJHd3NJSEpsY1hWbGMzUXBLVHRjYmx4dUlDQWdJQ0FnTHk4Z1EyeGxZVzRnZFhBZ2NtVnhkV1Z6ZEZ4dUlDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1MWJHdzdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lDOHZJRWhoYm1Sc1pTQjBhVzFsYjNWMFhHNGdJQ0FnY21WeGRXVnpkQzV2Ym5ScGJXVnZkWFFnUFNCbWRXNWpkR2x2YmlCb1lXNWtiR1ZVYVcxbGIzVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIUnBiV1Z2ZFhSRmNuSnZjazFsYzNOaFoyVWdQU0FuZEdsdFpXOTFkQ0J2WmlBbklDc2dZMjl1Wm1sbkxuUnBiV1Z2ZFhRZ0t5QW5iWE1nWlhoalpXVmtaV1FuTzF4dUlDQWdJQ0FnYVdZZ0tHTnZibVpwWnk1MGFXMWxiM1YwUlhKeWIzSk5aWE56WVdkbEtTQjdYRzRnSUNBZ0lDQWdJSFJwYldWdmRYUkZjbkp2Y2sxbGMzTmhaMlVnUFNCamIyNW1hV2N1ZEdsdFpXOTFkRVZ5Y205eVRXVnpjMkZuWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGFtVmpkQ2hqY21WaGRHVkZjbkp2Y2loMGFXMWxiM1YwUlhKeWIzSk5aWE56WVdkbExDQmpiMjVtYVdjc0lDZEZRMDlPVGtGQ1QxSlVSVVFuTEZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wS1NrN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGdUlIVndJSEpsY1hWbGMzUmNiaUFnSUNBZ0lISmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0F2THlCQlpHUWdlSE55WmlCb1pXRmtaWEpjYmlBZ0lDQXZMeUJVYUdseklHbHpJRzl1YkhrZ1pHOXVaU0JwWmlCeWRXNXVhVzVuSUdsdUlHRWdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkQzVjYmlBZ0lDQXZMeUJUY0dWamFXWnBZMkZzYkhrZ2JtOTBJR2xtSUhkbEozSmxJR2x1SUdFZ2QyVmlJSGR2Y210bGNpd2diM0lnY21WaFkzUXRibUYwYVhabExseHVJQ0FnSUdsbUlDaDFkR2xzY3k1cGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRpZ3BLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1kyOXZhMmxsY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2YUdWc2NHVnljeTlqYjI5cmFXVnpKeWs3WEc1Y2JpQWdJQ0FnSUM4dklFRmtaQ0I0YzNKbUlHaGxZV1JsY2x4dUlDQWdJQ0FnZG1GeUlIaHpjbVpXWVd4MVpTQTlJQ2hqYjI1bWFXY3VkMmwwYUVOeVpXUmxiblJwWVd4eklIeDhJR2x6VlZKTVUyRnRaVTl5YVdkcGJpaG1kV3hzVUdGMGFDa3BJQ1ltSUdOdmJtWnBaeTU0YzNKbVEyOXZhMmxsVG1GdFpTQS9YRzRnSUNBZ0lDQWdJR052YjJ0cFpYTXVjbVZoWkNoamIyNW1hV2N1ZUhOeVprTnZiMnRwWlU1aGJXVXBJRHBjYmlBZ0lDQWdJQ0FnZFc1a1pXWnBibVZrTzF4dVhHNGdJQ0FnSUNCcFppQW9lSE55WmxaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JJWldGa1pYSnpXMk52Ym1acFp5NTRjM0ptU0dWaFpHVnlUbUZ0WlYwZ1BTQjRjM0ptVm1Gc2RXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRV1JrSUdobFlXUmxjbk1nZEc4Z2RHaGxJSEpsY1hWbGMzUmNiaUFnSUNCcFppQW9KM05sZEZKbGNYVmxjM1JJWldGa1pYSW5JR2x1SUhKbGNYVmxjM1FwSUh0Y2JpQWdJQ0FnSUhWMGFXeHpMbVp2Y2tWaFkyZ29jbVZ4ZFdWemRFaGxZV1JsY25Nc0lHWjFibU4wYVc5dUlITmxkRkpsY1hWbGMzUklaV0ZrWlhJb2RtRnNMQ0JyWlhrcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ5WlhGMVpYTjBSR0YwWVNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2EyVjVMblJ2VEc5M1pYSkRZWE5sS0NrZ1BUMDlJQ2RqYjI1MFpXNTBMWFI1Y0dVbktTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1VtVnRiM1psSUVOdmJuUmxiblF0Vkhsd1pTQnBaaUJrWVhSaElHbHpJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lDQWdJQ0FnSUdSbGJHVjBaU0J5WlhGMVpYTjBTR1ZoWkdWeWMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRTkwYUdWeWQybHpaU0JoWkdRZ2FHVmhaR1Z5SUhSdklIUm9aU0J5WlhGMVpYTjBYRzRnSUNBZ0lDQWdJQ0FnY21WeGRXVnpkQzV6WlhSU1pYRjFaWE4wU0dWaFpHVnlLR3RsZVN3Z2RtRnNLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJSGRwZEdoRGNtVmtaVzUwYVdGc2N5QjBieUJ5WlhGMVpYTjBJR2xtSUc1bFpXUmxaRnh1SUNBZ0lHbG1JQ2doZFhScGJITXVhWE5WYm1SbFptbHVaV1FvWTI5dVptbG5MbmRwZEdoRGNtVmtaVzUwYVdGc2N5a3BJSHRjYmlBZ0lDQWdJSEpsY1hWbGMzUXVkMmwwYUVOeVpXUmxiblJwWVd4eklEMGdJU0ZqYjI1bWFXY3VkMmwwYUVOeVpXUmxiblJwWVd4ek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRmtaQ0J5WlhOd2IyNXpaVlI1Y0dVZ2RHOGdjbVZ4ZFdWemRDQnBaaUJ1WldWa1pXUmNiaUFnSUNCcFppQW9ZMjl1Wm1sbkxuSmxjM0J2Ym5ObFZIbHdaU2tnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRDNXlaWE53YjI1elpWUjVjR1VnUFNCamIyNW1hV2N1Y21WemNHOXVjMlZVZVhCbE8xeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0F2THlCRmVIQmxZM1JsWkNCRVQwMUZlR05sY0hScGIyNGdkR2h5YjNkdUlHSjVJR0p5YjNkelpYSnpJRzV2ZENCamIyMXdZWFJwWW14bElGaE5URWgwZEhCU1pYRjFaWE4wSUV4bGRtVnNJREl1WEc0Z0lDQWdJQ0FnSUM4dklFSjFkQ3dnZEdocGN5QmpZVzRnWW1VZ2MzVndjSEpsYzNObFpDQm1iM0lnSjJwemIyNG5JSFI1Y0dVZ1lYTWdhWFFnWTJGdUlHSmxJSEJoY25ObFpDQmllU0JrWldaaGRXeDBJQ2QwY21GdWMyWnZjbTFTWlhOd2IyNXpaU2NnWm5WdVkzUnBiMjR1WEc0Z0lDQWdJQ0FnSUdsbUlDaGpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxJQ0U5UFNBbmFuTnZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElIQnliMmR5WlhOeklHbG1JRzVsWldSbFpGeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVabWxuTG05dVJHOTNibXh2WVdSUWNtOW5jbVZ6Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnY21WeGRXVnpkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R3Y205bmNtVnpjeWNzSUdOdmJtWnBaeTV2YmtSdmQyNXNiMkZrVUhKdlozSmxjM01wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUU1dmRDQmhiR3dnWW5KdmQzTmxjbk1nYzNWd2NHOXlkQ0IxY0d4dllXUWdaWFpsYm5SelhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2N1YjI1VmNHeHZZV1JRY205bmNtVnpjeUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJ5WlhGMVpYTjBMblZ3Ykc5aFpDa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNTFjR3h2WVdRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNISnZaM0psYzNNbkxDQmpiMjVtYVdjdWIyNVZjR3h2WVdSUWNtOW5jbVZ6Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpa2dlMXh1SUNBZ0lDQWdMeThnU0dGdVpHeGxJR05oYm1ObGJHeGhkR2x2Ymx4dUlDQWdJQ0FnWTI5dVptbG5MbU5oYm1ObGJGUnZhMlZ1TG5CeWIyMXBjMlV1ZEdobGJpaG1kVzVqZEdsdmJpQnZia05oYm1ObGJHVmtLR05oYm1ObGJDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lYSmxjWFZsYzNRcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wTG1GaWIzSjBLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGFtVmpkQ2hqWVc1alpXd3BPMXh1SUNBZ0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1FnUFNCdWRXeHNPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hKbGNYVmxjM1JFWVhSaElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUhKbGNYVmxjM1JFWVhSaElEMGdiblZzYkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCVFpXNWtJSFJvWlNCeVpYRjFaWE4wWEc0Z0lDQWdjbVZ4ZFdWemRDNXpaVzVrS0hKbGNYVmxjM1JFWVhSaEtUdGNiaUFnZlNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMM1YwYVd4ekp5azdYRzUyWVhJZ1ltbHVaQ0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5aWFXNWtKeWs3WEc1MllYSWdRWGhwYjNNZ1BTQnlaWEYxYVhKbEtDY3VMMk52Y21VdlFYaHBiM01uS1R0Y2JuWmhjaUJ0WlhKblpVTnZibVpwWnlBOUlISmxjWFZwY21Vb0p5NHZZMjl5WlM5dFpYSm5aVU52Ym1acFp5Y3BPMXh1ZG1GeUlHUmxabUYxYkhSeklEMGdjbVZ4ZFdseVpTZ25MaTlrWldaaGRXeDBjeWNwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlNCaGJpQnBibk4wWVc1alpTQnZaaUJCZUdsdmMxeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCa1pXWmhkV3gwUTI5dVptbG5JRlJvWlNCa1pXWmhkV3gwSUdOdmJtWnBaeUJtYjNJZ2RHaGxJR2x1YzNSaGJtTmxYRzRnS2lCQWNtVjBkWEp1SUh0QmVHbHZjMzBnUVNCdVpYY2dhVzV6ZEdGdVkyVWdiMllnUVhocGIzTmNiaUFxTDF4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsU1c1emRHRnVZMlVvWkdWbVlYVnNkRU52Ym1acFp5a2dlMXh1SUNCMllYSWdZMjl1ZEdWNGRDQTlJRzVsZHlCQmVHbHZjeWhrWldaaGRXeDBRMjl1Wm1sbktUdGNiaUFnZG1GeUlHbHVjM1JoYm1ObElEMGdZbWx1WkNoQmVHbHZjeTV3Y205MGIzUjVjR1V1Y21WeGRXVnpkQ3dnWTI5dWRHVjRkQ2s3WEc1Y2JpQWdMeThnUTI5d2VTQmhlR2x2Y3k1d2NtOTBiM1I1Y0dVZ2RHOGdhVzV6ZEdGdVkyVmNiaUFnZFhScGJITXVaWGgwWlc1a0tHbHVjM1JoYm1ObExDQkJlR2x2Y3k1d2NtOTBiM1I1Y0dVc0lHTnZiblJsZUhRcE8xeHVYRzRnSUM4dklFTnZjSGtnWTI5dWRHVjRkQ0IwYnlCcGJuTjBZVzVqWlZ4dUlDQjFkR2xzY3k1bGVIUmxibVFvYVc1emRHRnVZMlVzSUdOdmJuUmxlSFFwTzF4dVhHNGdJSEpsZEhWeWJpQnBibk4wWVc1alpUdGNibjFjYmx4dUx5OGdRM0psWVhSbElIUm9aU0JrWldaaGRXeDBJR2x1YzNSaGJtTmxJSFJ2SUdKbElHVjRjRzl5ZEdWa1hHNTJZWElnWVhocGIzTWdQU0JqY21WaGRHVkpibk4wWVc1alpTaGtaV1poZFd4MGN5azdYRzVjYmk4dklFVjRjRzl6WlNCQmVHbHZjeUJqYkdGemN5QjBieUJoYkd4dmR5QmpiR0Z6Y3lCcGJtaGxjbWwwWVc1alpWeHVZWGhwYjNNdVFYaHBiM01nUFNCQmVHbHZjenRjYmx4dUx5OGdSbUZqZEc5eWVTQm1iM0lnWTNKbFlYUnBibWNnYm1WM0lHbHVjM1JoYm1ObGMxeHVZWGhwYjNNdVkzSmxZWFJsSUQwZ1puVnVZM1JwYjI0Z1kzSmxZWFJsS0dsdWMzUmhibU5sUTI5dVptbG5LU0I3WEc0Z0lISmxkSFZ5YmlCamNtVmhkR1ZKYm5OMFlXNWpaU2h0WlhKblpVTnZibVpwWnloaGVHbHZjeTVrWldaaGRXeDBjeXdnYVc1emRHRnVZMlZEYjI1bWFXY3BLVHRjYm4wN1hHNWNiaTh2SUVWNGNHOXpaU0JEWVc1alpXd2dKaUJEWVc1alpXeFViMnRsYmx4dVlYaHBiM011UTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk5allXNWpaV3d2UTJGdVkyVnNKeWs3WEc1aGVHbHZjeTVEWVc1alpXeFViMnRsYmlBOUlISmxjWFZwY21Vb0p5NHZZMkZ1WTJWc0wwTmhibU5sYkZSdmEyVnVKeWs3WEc1aGVHbHZjeTVwYzBOaGJtTmxiQ0E5SUhKbGNYVnBjbVVvSnk0dlkyRnVZMlZzTDJselEyRnVZMlZzSnlrN1hHNWNiaTh2SUVWNGNHOXpaU0JoYkd3dmMzQnlaV0ZrWEc1aGVHbHZjeTVoYkd3Z1BTQm1kVzVqZEdsdmJpQmhiR3dvY0hKdmJXbHpaWE1wSUh0Y2JpQWdjbVYwZFhKdUlGQnliMjFwYzJVdVlXeHNLSEJ5YjIxcGMyVnpLVHRjYm4wN1hHNWhlR2x2Y3k1emNISmxZV1FnUFNCeVpYRjFhWEpsS0NjdUwyaGxiSEJsY25NdmMzQnlaV0ZrSnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZWGhwYjNNN1hHNWNiaTh2SUVGc2JHOTNJSFZ6WlNCdlppQmtaV1poZFd4MElHbHRjRzl5ZENCemVXNTBZWGdnYVc0Z1ZIbHdaVk5qY21sd2RGeHViVzlrZFd4bExtVjRjRzl5ZEhNdVpHVm1ZWFZzZENBOUlHRjRhVzl6TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNHZLaXBjYmlBcUlFRWdZRU5oYm1ObGJHQWdhWE1nWVc0Z2IySnFaV04wSUhSb1lYUWdhWE1nZEdoeWIzZHVJSGRvWlc0Z1lXNGdiM0JsY21GMGFXOXVJR2x6SUdOaGJtTmxiR1ZrTGx4dUlDcGNiaUFxSUVCamJHRnpjMXh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWM5ZlNCdFpYTnpZV2RsSUZSb1pTQnRaWE56WVdkbExseHVJQ292WEc1bWRXNWpkR2x2YmlCRFlXNWpaV3dvYldWemMyRm5aU2tnZTF4dUlDQjBhR2x6TG0xbGMzTmhaMlVnUFNCdFpYTnpZV2RsTzF4dWZWeHVYRzVEWVc1alpXd3VjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnZEc5VGRISnBibWNvS1NCN1hHNGdJSEpsZEhWeWJpQW5RMkZ1WTJWc0p5QXJJQ2gwYUdsekxtMWxjM05oWjJVZ1B5QW5PaUFuSUNzZ2RHaHBjeTV0WlhOellXZGxJRG9nSnljcE8xeHVmVHRjYmx4dVEyRnVZMlZzTG5CeWIzUnZkSGx3WlM1ZlgwTkJUa05GVEY5ZklEMGdkSEoxWlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkRZVzVqWld3N1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCRFlXNWpaV3dnUFNCeVpYRjFhWEpsS0NjdUwwTmhibU5sYkNjcE8xeHVYRzR2S2lwY2JpQXFJRUVnWUVOaGJtTmxiRlJ2YTJWdVlDQnBjeUJoYmlCdlltcGxZM1FnZEdoaGRDQmpZVzRnWW1VZ2RYTmxaQ0IwYnlCeVpYRjFaWE4wSUdOaGJtTmxiR3hoZEdsdmJpQnZaaUJoYmlCdmNHVnlZWFJwYjI0dVhHNGdLbHh1SUNvZ1FHTnNZWE56WEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmxlR1ZqZFhSdmNpQlVhR1VnWlhobFkzVjBiM0lnWm5WdVkzUnBiMjR1WEc0Z0tpOWNibVoxYm1OMGFXOXVJRU5oYm1ObGJGUnZhMlZ1S0dWNFpXTjFkRzl5S1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnWlhobFkzVjBiM0lnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RsZUdWamRYUnZjaUJ0ZFhOMElHSmxJR0VnWm5WdVkzUnBiMjR1SnlrN1hHNGdJSDFjYmx4dUlDQjJZWElnY21WemIyeDJaVkJ5YjIxcGMyVTdYRzRnSUhSb2FYTXVjSEp2YldselpTQTlJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1SUhCeWIyMXBjMlZGZUdWamRYUnZjaWh5WlhOdmJIWmxLU0I3WEc0Z0lDQWdjbVZ6YjJ4MlpWQnliMjFwYzJVZ1BTQnlaWE52YkhabE8xeHVJQ0I5S1R0Y2JseHVJQ0IyWVhJZ2RHOXJaVzRnUFNCMGFHbHpPMXh1SUNCbGVHVmpkWFJ2Y2lobWRXNWpkR2x2YmlCallXNWpaV3dvYldWemMyRm5aU2tnZTF4dUlDQWdJR2xtSUNoMGIydGxiaTV5WldGemIyNHBJSHRjYmlBZ0lDQWdJQzh2SUVOaGJtTmxiR3hoZEdsdmJpQm9ZWE1nWVd4eVpXRmtlU0JpWldWdUlISmxjWFZsYzNSbFpGeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJ2YTJWdUxuSmxZWE52YmlBOUlHNWxkeUJEWVc1alpXd29iV1Z6YzJGblpTazdYRzRnSUNBZ2NtVnpiMngyWlZCeWIyMXBjMlVvZEc5clpXNHVjbVZoYzI5dUtUdGNiaUFnZlNrN1hHNTlYRzVjYmk4cUtseHVJQ29nVkdoeWIzZHpJR0VnWUVOaGJtTmxiR0FnYVdZZ1kyRnVZMlZzYkdGMGFXOXVJR2hoY3lCaVpXVnVJSEpsY1hWbGMzUmxaQzVjYmlBcUwxeHVRMkZ1WTJWc1ZHOXJaVzR1Y0hKdmRHOTBlWEJsTG5Sb2NtOTNTV1pTWlhGMVpYTjBaV1FnUFNCbWRXNWpkR2x2YmlCMGFISnZkMGxtVW1WeGRXVnpkR1ZrS0NrZ2UxeHVJQ0JwWmlBb2RHaHBjeTV5WldGemIyNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCMGFHbHpMbkpsWVhOdmJqdGNiaUFnZlZ4dWZUdGNibHh1THlvcVhHNGdLaUJTWlhSMWNtNXpJR0Z1SUc5aWFtVmpkQ0IwYUdGMElHTnZiblJoYVc1eklHRWdibVYzSUdCRFlXNWpaV3hVYjJ0bGJtQWdZVzVrSUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ3dnZDJobGJpQmpZV3hzWldRc1hHNGdLaUJqWVc1alpXeHpJSFJvWlNCZ1EyRnVZMlZzVkc5clpXNWdMbHh1SUNvdlhHNURZVzVqWld4VWIydGxiaTV6YjNWeVkyVWdQU0JtZFc1amRHbHZiaUJ6YjNWeVkyVW9LU0I3WEc0Z0lIWmhjaUJqWVc1alpXdzdYRzRnSUhaaGNpQjBiMnRsYmlBOUlHNWxkeUJEWVc1alpXeFViMnRsYmlobWRXNWpkR2x2YmlCbGVHVmpkWFJ2Y2loaktTQjdYRzRnSUNBZ1kyRnVZMlZzSUQwZ1l6dGNiaUFnZlNrN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHOXJaVzQ2SUhSdmEyVnVMRnh1SUNBZ0lHTmhibU5sYkRvZ1kyRnVZMlZzWEc0Z0lIMDdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTmhibU5sYkZSdmEyVnVPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdselEyRnVZMlZzS0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlBaElTaDJZV3gxWlNBbUppQjJZV3gxWlM1ZlgwTkJUa05GVEY5ZktUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JuWmhjaUJpZFdsc1pGVlNUQ0E5SUhKbGNYVnBjbVVvSnk0dUwyaGxiSEJsY25NdlluVnBiR1JWVWt3bktUdGNiblpoY2lCSmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMMGx1ZEdWeVkyVndkRzl5VFdGdVlXZGxjaWNwTzF4dWRtRnlJR1JwYzNCaGRHTm9VbVZ4ZFdWemRDQTlJSEpsY1hWcGNtVW9KeTR2WkdsemNHRjBZMmhTWlhGMVpYTjBKeWs3WEc1MllYSWdiV1Z5WjJWRGIyNW1hV2NnUFNCeVpYRjFhWEpsS0NjdUwyMWxjbWRsUTI5dVptbG5KeWs3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdFZ2JtVjNJR2x1YzNSaGJtTmxJRzltSUVGNGFXOXpYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHbHVjM1JoYm1ObFEyOXVabWxuSUZSb1pTQmtaV1poZFd4MElHTnZibVpwWnlCbWIzSWdkR2hsSUdsdWMzUmhibU5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJRUY0YVc5ektHbHVjM1JoYm1ObFEyOXVabWxuS1NCN1hHNGdJSFJvYVhNdVpHVm1ZWFZzZEhNZ1BTQnBibk4wWVc1alpVTnZibVpwWnp0Y2JpQWdkR2hwY3k1cGJuUmxjbU5sY0hSdmNuTWdQU0I3WEc0Z0lDQWdjbVZ4ZFdWemREb2dibVYzSUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lncExGeHVJQ0FnSUhKbGMzQnZibk5sT2lCdVpYY2dTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlLQ2xjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCRWFYTndZWFJqYUNCaElISmxjWFZsYzNSY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWTI5dVptbG5JRlJvWlNCamIyNW1hV2NnYzNCbFkybG1hV01nWm05eUlIUm9hWE1nY21WeGRXVnpkQ0FvYldWeVoyVmtJSGRwZEdnZ2RHaHBjeTVrWldaaGRXeDBjeWxjYmlBcUwxeHVRWGhwYjNNdWNISnZkRzkwZVhCbExuSmxjWFZsYzNRZ1BTQm1kVzVqZEdsdmJpQnlaWEYxWlhOMEtHTnZibVpwWnlrZ2UxeHVJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdMeThnUVd4c2IzY2dabTl5SUdGNGFXOXpLQ2RsZUdGdGNHeGxMM1Z5YkNkYkxDQmpiMjVtYVdkZEtTQmhJR3hoSUdabGRHTm9JRUZRU1Z4dUlDQnBaaUFvZEhsd1pXOW1JR052Ym1acFp5QTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0JqYjI1bWFXY2dQU0JoY21kMWJXVnVkSE5iTVYwZ2ZId2dlMzA3WEc0Z0lDQWdZMjl1Wm1sbkxuVnliQ0E5SUdGeVozVnRaVzUwYzFzd1hUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjVtYVdjZ1BTQmpiMjVtYVdjZ2ZId2dlMzA3WEc0Z0lIMWNibHh1SUNCamIyNW1hV2NnUFNCdFpYSm5aVU52Ym1acFp5aDBhR2x6TG1SbFptRjFiSFJ6TENCamIyNW1hV2NwTzF4dVhHNGdJQzh2SUZObGRDQmpiMjVtYVdjdWJXVjBhRzlrWEc0Z0lHbG1JQ2hqYjI1bWFXY3ViV1YwYUc5a0tTQjdYRzRnSUNBZ1kyOXVabWxuTG0xbGRHaHZaQ0E5SUdOdmJtWnBaeTV0WlhSb2IyUXVkRzlNYjNkbGNrTmhjMlVvS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtUmxabUYxYkhSekxtMWxkR2h2WkNrZ2UxeHVJQ0FnSUdOdmJtWnBaeTV0WlhSb2IyUWdQU0IwYUdsekxtUmxabUYxYkhSekxtMWxkR2h2WkM1MGIweHZkMlZ5UTJGelpTZ3BPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR052Ym1acFp5NXRaWFJvYjJRZ1BTQW5aMlYwSnp0Y2JpQWdmVnh1WEc0Z0lDOHZJRWh2YjJzZ2RYQWdhVzUwWlhKalpYQjBiM0p6SUcxcFpHUnNaWGRoY21WY2JpQWdkbUZ5SUdOb1lXbHVJRDBnVzJScGMzQmhkR05vVW1WeGRXVnpkQ3dnZFc1a1pXWnBibVZrWFR0Y2JpQWdkbUZ5SUhCeWIyMXBjMlVnUFNCUWNtOXRhWE5sTG5KbGMyOXNkbVVvWTI5dVptbG5LVHRjYmx4dUlDQjBhR2x6TG1sdWRHVnlZMlZ3ZEc5eWN5NXlaWEYxWlhOMExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z2RXNXphR2xtZEZKbGNYVmxjM1JKYm5SbGNtTmxjSFJ2Y25Nb2FXNTBaWEpqWlhCMGIzSXBJSHRjYmlBZ0lDQmphR0ZwYmk1MWJuTm9hV1owS0dsdWRHVnlZMlZ3ZEc5eUxtWjFiR1pwYkd4bFpDd2dhVzUwWlhKalpYQjBiM0l1Y21WcVpXTjBaV1FwTzF4dUlDQjlLVHRjYmx4dUlDQjBhR2x6TG1sdWRHVnlZMlZ3ZEc5eWN5NXlaWE53YjI1elpTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlIQjFjMmhTWlhOd2IyNXpaVWx1ZEdWeVkyVndkRzl5Y3locGJuUmxjbU5sY0hSdmNpa2dlMXh1SUNBZ0lHTm9ZV2x1TG5CMWMyZ29hVzUwWlhKalpYQjBiM0l1Wm5Wc1ptbHNiR1ZrTENCcGJuUmxjbU5sY0hSdmNpNXlaV3BsWTNSbFpDazdYRzRnSUgwcE8xeHVYRzRnSUhkb2FXeGxJQ2hqYUdGcGJpNXNaVzVuZEdncElIdGNiaUFnSUNCd2NtOXRhWE5sSUQwZ2NISnZiV2x6WlM1MGFHVnVLR05vWVdsdUxuTm9hV1owS0Nrc0lHTm9ZV2x1TG5Ob2FXWjBLQ2twTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhCeWIyMXBjMlU3WEc1OU8xeHVYRzVCZUdsdmN5NXdjbTkwYjNSNWNHVXVaMlYwVlhKcElEMGdablZ1WTNScGIyNGdaMlYwVlhKcEtHTnZibVpwWnlrZ2UxeHVJQ0JqYjI1bWFXY2dQU0J0WlhKblpVTnZibVpwWnloMGFHbHpMbVJsWm1GMWJIUnpMQ0JqYjI1bWFXY3BPMXh1SUNCeVpYUjFjbTRnWW5WcGJHUlZVa3dvWTI5dVptbG5MblZ5YkN3Z1kyOXVabWxuTG5CaGNtRnRjeXdnWTI5dVptbG5MbkJoY21GdGMxTmxjbWxoYkdsNlpYSXBMbkpsY0d4aFkyVW9MMTVjWEQ4dkxDQW5KeWs3WEc1OU8xeHVYRzR2THlCUWNtOTJhV1JsSUdGc2FXRnpaWE1nWm05eUlITjFjSEJ2Y25SbFpDQnlaWEYxWlhOMElHMWxkR2h2WkhOY2JuVjBhV3h6TG1admNrVmhZMmdvV3lka1pXeGxkR1VuTENBbloyVjBKeXdnSjJobFlXUW5MQ0FuYjNCMGFXOXVjeWRkTENCbWRXNWpkR2x2YmlCbWIzSkZZV05vVFdWMGFHOWtUbTlFWVhSaEtHMWxkR2h2WkNrZ2UxeHVJQ0F2S21WemJHbHVkQ0JtZFc1akxXNWhiV1Z6T2pBcUwxeHVJQ0JCZUdsdmN5NXdjbTkwYjNSNWNHVmJiV1YwYUc5a1hTQTlJR1oxYm1OMGFXOXVLSFZ5YkN3Z1kyOXVabWxuS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVnhkV1Z6ZENoMWRHbHNjeTV0WlhKblpTaGpiMjVtYVdjZ2ZId2dlMzBzSUh0Y2JpQWdJQ0FnSUcxbGRHaHZaRG9nYldWMGFHOWtMRnh1SUNBZ0lDQWdkWEpzT2lCMWNteGNiaUFnSUNCOUtTazdYRzRnSUgwN1hHNTlLVHRjYmx4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjNCdmMzUW5MQ0FuY0hWMEp5d2dKM0JoZEdOb0oxMHNJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyaE5aWFJvYjJSWGFYUm9SR0YwWVNodFpYUm9iMlFwSUh0Y2JpQWdMeXBsYzJ4cGJuUWdablZ1WXkxdVlXMWxjem93S2k5Y2JpQWdRWGhwYjNNdWNISnZkRzkwZVhCbFcyMWxkR2h2WkYwZ1BTQm1kVzVqZEdsdmJpaDFjbXdzSUdSaGRHRXNJR052Ym1acFp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsY1hWbGMzUW9kWFJwYkhNdWJXVnlaMlVvWTI5dVptbG5JSHg4SUh0OUxDQjdYRzRnSUNBZ0lDQnRaWFJvYjJRNklHMWxkR2h2WkN4Y2JpQWdJQ0FnSUhWeWJEb2dkWEpzTEZ4dUlDQWdJQ0FnWkdGMFlUb2daR0YwWVZ4dUlDQWdJSDBwS1R0Y2JpQWdmVHRjYm4wcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUY0YVc5ek8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYm1aMWJtTjBhVzl1SUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lncElIdGNiaUFnZEdocGN5NW9ZVzVrYkdWeWN5QTlJRnRkTzF4dWZWeHVYRzR2S2lwY2JpQXFJRUZrWkNCaElHNWxkeUJwYm5SbGNtTmxjSFJ2Y2lCMGJ5QjBhR1VnYzNSaFkydGNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQm1kV3htYVd4c1pXUWdWR2hsSUdaMWJtTjBhVzl1SUhSdklHaGhibVJzWlNCZ2RHaGxibUFnWm05eUlHRWdZRkJ5YjIxcGMyVmdYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCeVpXcGxZM1JsWkNCVWFHVWdablZ1WTNScGIyNGdkRzhnYUdGdVpHeGxJR0J5WldwbFkzUmdJR1p2Y2lCaElHQlFjbTl0YVhObFlGeHVJQ3BjYmlBcUlFQnlaWFIxY200Z2UwNTFiV0psY24wZ1FXNGdTVVFnZFhObFpDQjBieUJ5WlcxdmRtVWdhVzUwWlhKalpYQjBiM0lnYkdGMFpYSmNiaUFxTDF4dVNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNTFjMlVnUFNCbWRXNWpkR2x2YmlCMWMyVW9ablZzWm1sc2JHVmtMQ0J5WldwbFkzUmxaQ2tnZTF4dUlDQjBhR2x6TG1oaGJtUnNaWEp6TG5CMWMyZ29lMXh1SUNBZ0lHWjFiR1pwYkd4bFpEb2dablZzWm1sc2JHVmtMRnh1SUNBZ0lISmxhbVZqZEdWa09pQnlaV3BsWTNSbFpGeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YUdGdVpHeGxjbk11YkdWdVozUm9JQzBnTVR0Y2JuMDdYRzVjYmk4cUtseHVJQ29nVW1WdGIzWmxJR0Z1SUdsdWRHVnlZMlZ3ZEc5eUlHWnliMjBnZEdobElITjBZV05yWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRPZFcxaVpYSjlJR2xrSUZSb1pTQkpSQ0IwYUdGMElIZGhjeUJ5WlhSMWNtNWxaQ0JpZVNCZ2RYTmxZRnh1SUNvdlhHNUpiblJsY21ObGNIUnZjazFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbVZxWldOMElEMGdablZ1WTNScGIyNGdaV3BsWTNRb2FXUXBJSHRjYmlBZ2FXWWdLSFJvYVhNdWFHRnVaR3hsY25OYmFXUmRLU0I3WEc0Z0lDQWdkR2hwY3k1b1lXNWtiR1Z5YzF0cFpGMGdQU0J1ZFd4c08xeHVJQ0I5WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWwwWlhKaGRHVWdiM1psY2lCaGJHd2dkR2hsSUhKbFoybHpkR1Z5WldRZ2FXNTBaWEpqWlhCMGIzSnpYRzRnS2x4dUlDb2dWR2hwY3lCdFpYUm9iMlFnYVhNZ2NHRnlkR2xqZFd4aGNteDVJSFZ6WldaMWJDQm1iM0lnYzJ0cGNIQnBibWNnYjNabGNpQmhibmxjYmlBcUlHbHVkR1Z5WTJWd2RHOXljeUIwYUdGMElHMWhlU0JvWVhabElHSmxZMjl0WlNCZ2JuVnNiR0FnWTJGc2JHbHVaeUJnWldwbFkzUmdMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1SUZSb1pTQm1kVzVqZEdsdmJpQjBieUJqWVd4c0lHWnZjaUJsWVdOb0lHbHVkR1Z5WTJWd2RHOXlYRzRnS2k5Y2JrbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVabTl5UldGamFDQTlJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyZ29abTRwSUh0Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNoMGFHbHpMbWhoYm1Sc1pYSnpMQ0JtZFc1amRHbHZiaUJtYjNKRllXTm9TR0Z1Wkd4bGNpaG9LU0I3WEc0Z0lDQWdhV1lnS0dnZ0lUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lHWnVLR2dwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNqdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlHbHpRV0p6YjJ4MWRHVlZVa3dnUFNCeVpYRjFhWEpsS0NjdUxpOW9aV3h3WlhKekwybHpRV0p6YjJ4MWRHVlZVa3duS1R0Y2JuWmhjaUJqYjIxaWFXNWxWVkpNY3lBOUlISmxjWFZwY21Vb0p5NHVMMmhsYkhCbGNuTXZZMjl0WW1sdVpWVlNUSE1uS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdibVYzSUZWU1RDQmllU0JqYjIxaWFXNXBibWNnZEdobElHSmhjMlZWVWt3Z2QybDBhQ0IwYUdVZ2NtVnhkV1Z6ZEdWa1ZWSk1MRnh1SUNvZ2IyNXNlU0IzYUdWdUlIUm9aU0J5WlhGMVpYTjBaV1JWVWt3Z2FYTWdibTkwSUdGc2NtVmhaSGtnWVc0Z1lXSnpiMngxZEdVZ1ZWSk1MbHh1SUNvZ1NXWWdkR2hsSUhKbGNYVmxjM1JWVWt3Z2FYTWdZV0p6YjJ4MWRHVXNJSFJvYVhNZ1puVnVZM1JwYjI0Z2NtVjBkWEp1Y3lCMGFHVWdjbVZ4ZFdWemRHVmtWVkpNSUhWdWRHOTFZMmhsWkM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWW1GelpWVlNUQ0JVYUdVZ1ltRnpaU0JWVWt4Y2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnlaWEYxWlhOMFpXUlZVa3dnUVdKemIyeDFkR1VnYjNJZ2NtVnNZWFJwZG1VZ1ZWSk1JSFJ2SUdOdmJXSnBibVZjYmlBcUlFQnlaWFIxY201eklIdHpkSEpwYm1kOUlGUm9aU0JqYjIxaWFXNWxaQ0JtZFd4c0lIQmhkR2hjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmlkV2xzWkVaMWJHeFFZWFJvS0dKaGMyVlZVa3dzSUhKbGNYVmxjM1JsWkZWU1RDa2dlMXh1SUNCcFppQW9ZbUZ6WlZWU1RDQW1KaUFoYVhOQlluTnZiSFYwWlZWU1RDaHlaWEYxWlhOMFpXUlZVa3dwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR052YldKcGJtVlZVa3h6S0dKaGMyVlZVa3dzSUhKbGNYVmxjM1JsWkZWU1RDazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjWFZsYzNSbFpGVlNURHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCbGJtaGhibU5sUlhKeWIzSWdQU0J5WlhGMWFYSmxLQ2N1TDJWdWFHRnVZMlZGY25KdmNpY3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoYmlCRmNuSnZjaUIzYVhSb0lIUm9aU0J6Y0dWamFXWnBaV1FnYldWemMyRm5aU3dnWTI5dVptbG5MQ0JsY25KdmNpQmpiMlJsTENCeVpYRjFaWE4wSUdGdVpDQnlaWE53YjI1elpTNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2JXVnpjMkZuWlNCVWFHVWdaWEp5YjNJZ2JXVnpjMkZuWlM1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmpiMjVtYVdjZ1ZHaGxJR052Ym1acFp5NWNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JiWTI5a1pWMGdWR2hsSUdWeWNtOXlJR052WkdVZ0tHWnZjaUJsZUdGdGNHeGxMQ0FuUlVOUFRrNUJRazlTVkVWRUp5a3VYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzNKbGNYVmxjM1JkSUZSb1pTQnlaWEYxWlhOMExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRnR5WlhOd2IyNXpaVjBnVkdobElISmxjM0J2Ym5ObExseHVJQ29nUUhKbGRIVnlibk1nZTBWeWNtOXlmU0JVYUdVZ1kzSmxZWFJsWkNCbGNuSnZjaTVjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQmpjbVZoZEdWRmNuSnZjaWh0WlhOellXZGxMQ0JqYjI1bWFXY3NJR052WkdVc0lISmxjWFZsYzNRc0lISmxjM0J2Ym5ObEtTQjdYRzRnSUhaaGNpQmxjbkp2Y2lBOUlHNWxkeUJGY25KdmNpaHRaWE56WVdkbEtUdGNiaUFnY21WMGRYSnVJR1Z1YUdGdVkyVkZjbkp2Y2lobGNuSnZjaXdnWTI5dVptbG5MQ0JqYjJSbExDQnlaWEYxWlhOMExDQnlaWE53YjI1elpTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1THk0dUwzVjBhV3h6SnlrN1hHNTJZWElnZEhKaGJuTm1iM0p0UkdGMFlTQTlJSEpsY1hWcGNtVW9KeTR2ZEhKaGJuTm1iM0p0UkdGMFlTY3BPMXh1ZG1GeUlHbHpRMkZ1WTJWc0lEMGdjbVZ4ZFdseVpTZ25MaTR2WTJGdVkyVnNMMmx6UTJGdVkyVnNKeWs3WEc1MllYSWdaR1ZtWVhWc2RITWdQU0J5WlhGMWFYSmxLQ2N1TGk5a1pXWmhkV3gwY3ljcE8xeHVYRzR2S2lwY2JpQXFJRlJvY205M2N5QmhJR0JEWVc1alpXeGdJR2xtSUdOaGJtTmxiR3hoZEdsdmJpQm9ZWE1nWW1WbGJpQnlaWEYxWlhOMFpXUXVYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUm9jbTkzU1daRFlXNWpaV3hzWVhScGIyNVNaWEYxWlhOMFpXUW9ZMjl1Wm1sbktTQjdYRzRnSUdsbUlDaGpiMjVtYVdjdVkyRnVZMlZzVkc5clpXNHBJSHRjYmlBZ0lDQmpiMjVtYVdjdVkyRnVZMlZzVkc5clpXNHVkR2h5YjNkSlpsSmxjWFZsYzNSbFpDZ3BPMXh1SUNCOVhHNTlYRzVjYmk4cUtseHVJQ29nUkdsemNHRjBZMmdnWVNCeVpYRjFaWE4wSUhSdklIUm9aU0J6WlhKMlpYSWdkWE5wYm1jZ2RHaGxJR052Ym1acFozVnlaV1FnWVdSaGNIUmxjaTVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdZMjl1Wm1sbklGUm9aU0JqYjI1bWFXY2dkR2hoZENCcGN5QjBieUJpWlNCMWMyVmtJR1p2Y2lCMGFHVWdjbVZ4ZFdWemRGeHVJQ29nUUhKbGRIVnlibk1nZTFCeWIyMXBjMlY5SUZSb1pTQlFjbTl0YVhObElIUnZJR0psSUdaMWJHWnBiR3hsWkZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR1JwYzNCaGRHTm9VbVZ4ZFdWemRDaGpiMjVtYVdjcElIdGNiaUFnZEdoeWIzZEpaa05oYm1ObGJHeGhkR2x2YmxKbGNYVmxjM1JsWkNoamIyNW1hV2NwTzF4dVhHNGdJQzh2SUVWdWMzVnlaU0JvWldGa1pYSnpJR1Y0YVhOMFhHNGdJR052Ym1acFp5NW9aV0ZrWlhKeklEMGdZMjl1Wm1sbkxtaGxZV1JsY25NZ2ZId2dlMzA3WEc1Y2JpQWdMeThnVkhKaGJuTm1iM0p0SUhKbGNYVmxjM1FnWkdGMFlWeHVJQ0JqYjI1bWFXY3VaR0YwWVNBOUlIUnlZVzV6Wm05eWJVUmhkR0VvWEc0Z0lDQWdZMjl1Wm1sbkxtUmhkR0VzWEc0Z0lDQWdZMjl1Wm1sbkxtaGxZV1JsY25Nc1hHNGdJQ0FnWTI5dVptbG5MblJ5WVc1elptOXliVkpsY1hWbGMzUmNiaUFnS1R0Y2JseHVJQ0F2THlCR2JHRjBkR1Z1SUdobFlXUmxjbk5jYmlBZ1kyOXVabWxuTG1obFlXUmxjbk1nUFNCMWRHbHNjeTV0WlhKblpTaGNiaUFnSUNCamIyNW1hV2N1YUdWaFpHVnljeTVqYjIxdGIyNGdmSHdnZTMwc1hHNGdJQ0FnWTI5dVptbG5MbWhsWVdSbGNuTmJZMjl1Wm1sbkxtMWxkR2h2WkYwZ2ZId2dlMzBzWEc0Z0lDQWdZMjl1Wm1sbkxtaGxZV1JsY25OY2JpQWdLVHRjYmx4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0Z4dUlDQWdJRnNuWkdWc1pYUmxKeXdnSjJkbGRDY3NJQ2RvWldGa0p5d2dKM0J2YzNRbkxDQW5jSFYwSnl3Z0ozQmhkR05vSnl3Z0oyTnZiVzF2YmlkZExGeHVJQ0FnSUdaMWJtTjBhVzl1SUdOc1pXRnVTR1ZoWkdWeVEyOXVabWxuS0cxbGRHaHZaQ2tnZTF4dUlDQWdJQ0FnWkdWc1pYUmxJR052Ym1acFp5NW9aV0ZrWlhKelcyMWxkR2h2WkYwN1hHNGdJQ0FnZlZ4dUlDQXBPMXh1WEc0Z0lIWmhjaUJoWkdGd2RHVnlJRDBnWTI5dVptbG5MbUZrWVhCMFpYSWdmSHdnWkdWbVlYVnNkSE11WVdSaGNIUmxjanRjYmx4dUlDQnlaWFIxY200Z1lXUmhjSFJsY2loamIyNW1hV2NwTG5Sb1pXNG9ablZ1WTNScGIyNGdiMjVCWkdGd2RHVnlVbVZ6YjJ4MWRHbHZiaWh5WlhOd2IyNXpaU2tnZTF4dUlDQWdJSFJvY205M1NXWkRZVzVqWld4c1lYUnBiMjVTWlhGMVpYTjBaV1FvWTI5dVptbG5LVHRjYmx4dUlDQWdJQzh2SUZSeVlXNXpabTl5YlNCeVpYTndiMjV6WlNCa1lYUmhYRzRnSUNBZ2NtVnpjRzl1YzJVdVpHRjBZU0E5SUhSeVlXNXpabTl5YlVSaGRHRW9YRzRnSUNBZ0lDQnlaWE53YjI1elpTNWtZWFJoTEZ4dUlDQWdJQ0FnY21WemNHOXVjMlV1YUdWaFpHVnljeXhjYmlBZ0lDQWdJR052Ym1acFp5NTBjbUZ1YzJadmNtMVNaWE53YjI1elpWeHVJQ0FnSUNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnY21WemNHOXVjMlU3WEc0Z0lIMHNJR1oxYm1OMGFXOXVJRzl1UVdSaGNIUmxjbEpsYW1WamRHbHZiaWh5WldGemIyNHBJSHRjYmlBZ0lDQnBaaUFvSVdselEyRnVZMlZzS0hKbFlYTnZiaWtwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNTV1pEWVc1alpXeHNZWFJwYjI1U1pYRjFaWE4wWldRb1kyOXVabWxuS1R0Y2JseHVJQ0FnSUNBZ0x5OGdWSEpoYm5ObWIzSnRJSEpsYzNCdmJuTmxJR1JoZEdGY2JpQWdJQ0FnSUdsbUlDaHlaV0Z6YjI0Z0ppWWdjbVZoYzI5dUxuSmxjM0J2Ym5ObEtTQjdYRzRnSUNBZ0lDQWdJSEpsWVhOdmJpNXlaWE53YjI1elpTNWtZWFJoSUQwZ2RISmhibk5tYjNKdFJHRjBZU2hjYmlBZ0lDQWdJQ0FnSUNCeVpXRnpiMjR1Y21WemNHOXVjMlV1WkdGMFlTeGNiaUFnSUNBZ0lDQWdJQ0J5WldGemIyNHVjbVZ6Y0c5dWMyVXVhR1ZoWkdWeWN5eGNiaUFnSUNBZ0lDQWdJQ0JqYjI1bWFXY3VkSEpoYm5ObWIzSnRVbVZ6Y0c5dWMyVmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1VISnZiV2x6WlM1eVpXcGxZM1FvY21WaGMyOXVLVHRjYmlBZ2ZTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNHZLaXBjYmlBcUlGVndaR0YwWlNCaGJpQkZjbkp2Y2lCM2FYUm9JSFJvWlNCemNHVmphV1pwWldRZ1kyOXVabWxuTENCbGNuSnZjaUJqYjJSbExDQmhibVFnY21WemNHOXVjMlV1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRGY25KdmNuMGdaWEp5YjNJZ1ZHaGxJR1Z5Y205eUlIUnZJSFZ3WkdGMFpTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeTVjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCYlkyOWtaVjBnVkdobElHVnljbTl5SUdOdlpHVWdLR1p2Y2lCbGVHRnRjR3hsTENBblJVTlBUazVCUWs5U1ZFVkVKeWt1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1czSmxjWFZsYzNSZElGUm9aU0J5WlhGMVpYTjBMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUZ0eVpYTndiMjV6WlYwZ1ZHaGxJSEpsYzNCdmJuTmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UwVnljbTl5ZlNCVWFHVWdaWEp5YjNJdVhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWlc1b1lXNWpaVVZ5Y205eUtHVnljbTl5TENCamIyNW1hV2NzSUdOdlpHVXNJSEpsY1hWbGMzUXNJSEpsYzNCdmJuTmxLU0I3WEc0Z0lHVnljbTl5TG1OdmJtWnBaeUE5SUdOdmJtWnBaenRjYmlBZ2FXWWdLR052WkdVcElIdGNiaUFnSUNCbGNuSnZjaTVqYjJSbElEMGdZMjlrWlR0Y2JpQWdmVnh1WEc0Z0lHVnljbTl5TG5KbGNYVmxjM1FnUFNCeVpYRjFaWE4wTzF4dUlDQmxjbkp2Y2k1eVpYTndiMjV6WlNBOUlISmxjM0J2Ym5ObE8xeHVJQ0JsY25KdmNpNXBjMEY0YVc5elJYSnliM0lnUFNCMGNuVmxPMXh1WEc0Z0lHVnljbTl5TG5SdlNsTlBUaUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0F2THlCVGRHRnVaR0Z5WkZ4dUlDQWdJQ0FnYldWemMyRm5aVG9nZEdocGN5NXRaWE56WVdkbExGeHVJQ0FnSUNBZ2JtRnRaVG9nZEdocGN5NXVZVzFsTEZ4dUlDQWdJQ0FnTHk4Z1RXbGpjbTl6YjJaMFhHNGdJQ0FnSUNCa1pYTmpjbWx3ZEdsdmJqb2dkR2hwY3k1a1pYTmpjbWx3ZEdsdmJpeGNiaUFnSUNBZ0lHNTFiV0psY2pvZ2RHaHBjeTV1ZFcxaVpYSXNYRzRnSUNBZ0lDQXZMeUJOYjNwcGJHeGhYRzRnSUNBZ0lDQm1hV3hsVG1GdFpUb2dkR2hwY3k1bWFXeGxUbUZ0WlN4Y2JpQWdJQ0FnSUd4cGJtVk9kVzFpWlhJNklIUm9hWE11YkdsdVpVNTFiV0psY2l4Y2JpQWdJQ0FnSUdOdmJIVnRiazUxYldKbGNqb2dkR2hwY3k1amIyeDFiVzVPZFcxaVpYSXNYRzRnSUNBZ0lDQnpkR0ZqYXpvZ2RHaHBjeTV6ZEdGamF5eGNiaUFnSUNBZ0lDOHZJRUY0YVc5elhHNGdJQ0FnSUNCamIyNW1hV2M2SUhSb2FYTXVZMjl1Wm1sbkxGeHVJQ0FnSUNBZ1kyOWtaVG9nZEdocGN5NWpiMlJsWEc0Z0lDQWdmVHRjYmlBZ2ZUdGNiaUFnY21WMGRYSnVJR1Z5Y205eU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTR2ZFhScGJITW5LVHRjYmx4dUx5b3FYRzRnS2lCRGIyNW1hV2N0YzNCbFkybG1hV01nYldWeVoyVXRablZ1WTNScGIyNGdkMmhwWTJnZ1kzSmxZWFJsY3lCaElHNWxkeUJqYjI1bWFXY3RiMkpxWldOMFhHNGdLaUJpZVNCdFpYSm5hVzVuSUhSM2J5QmpiMjVtYVdkMWNtRjBhVzl1SUc5aWFtVmpkSE1nZEc5blpYUm9aWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp6RmNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JqYjI1bWFXY3lYRzRnS2lCQWNtVjBkWEp1Y3lCN1QySnFaV04wZlNCT1pYY2diMkpxWldOMElISmxjM1ZzZEdsdVp5Qm1jbTl0SUcxbGNtZHBibWNnWTI5dVptbG5NaUIwYnlCamIyNW1hV2N4WEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdiV1Z5WjJWRGIyNW1hV2NvWTI5dVptbG5NU3dnWTI5dVptbG5NaWtnZTF4dUlDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNWNiaUFnWTI5dVptbG5NaUE5SUdOdmJtWnBaeklnZkh3Z2UzMDdYRzRnSUhaaGNpQmpiMjVtYVdjZ1BTQjdmVHRjYmx4dUlDQjJZWElnZG1Gc2RXVkdjbTl0UTI5dVptbG5Na3RsZVhNZ1BTQmJKM1Z5YkNjc0lDZHRaWFJvYjJRbkxDQW5jR0Z5WVcxekp5d2dKMlJoZEdFblhUdGNiaUFnZG1GeUlHMWxjbWRsUkdWbGNGQnliM0JsY25ScFpYTkxaWGx6SUQwZ1d5ZG9aV0ZrWlhKekp5d2dKMkYxZEdnbkxDQW5jSEp2ZUhrblhUdGNiaUFnZG1GeUlHUmxabUYxYkhSVWIwTnZibVpwWnpKTFpYbHpJRDBnVzF4dUlDQWdJQ2RpWVhObFZWSk1KeXdnSjNWeWJDY3NJQ2QwY21GdWMyWnZjbTFTWlhGMVpYTjBKeXdnSjNSeVlXNXpabTl5YlZKbGMzQnZibk5sSnl3Z0ozQmhjbUZ0YzFObGNtbGhiR2w2WlhJbkxGeHVJQ0FnSUNkMGFXMWxiM1YwSnl3Z0ozZHBkR2hEY21Wa1pXNTBhV0ZzY3ljc0lDZGhaR0Z3ZEdWeUp5d2dKM0psYzNCdmJuTmxWSGx3WlNjc0lDZDRjM0ptUTI5dmEybGxUbUZ0WlNjc1hHNGdJQ0FnSjNoemNtWklaV0ZrWlhKT1lXMWxKeXdnSjI5dVZYQnNiMkZrVUhKdlozSmxjM01uTENBbmIyNUViM2R1Ykc5aFpGQnliMmR5WlhOekp5eGNiaUFnSUNBbmJXRjRRMjl1ZEdWdWRFeGxibWQwYUNjc0lDZDJZV3hwWkdGMFpWTjBZWFIxY3ljc0lDZHRZWGhTWldScGNtVmpkSE1uTENBbmFIUjBjRUZuWlc1MEp5eGNiaUFnSUNBbmFIUjBjSE5CWjJWdWRDY3NJQ2RqWVc1alpXeFViMnRsYmljc0lDZHpiMk5yWlhSUVlYUm9KMXh1SUNCZE8xeHVYRzRnSUhWMGFXeHpMbVp2Y2tWaFkyZ29kbUZzZFdWR2NtOXRRMjl1Wm1sbk1rdGxlWE1zSUdaMWJtTjBhVzl1SUhaaGJIVmxSbkp2YlVOdmJtWnBaeklvY0hKdmNDa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZMjl1Wm1sbk1sdHdjbTl3WFNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJtWnBaMXR3Y205d1hTQTlJR052Ym1acFp6SmJjSEp2Y0YwN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0cxbGNtZGxSR1ZsY0ZCeWIzQmxjblJwWlhOTFpYbHpMQ0JtZFc1amRHbHZiaUJ0WlhKblpVUmxaWEJRY205d1pYSjBhV1Z6S0hCeWIzQXBJSHRjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5QWW1wbFkzUW9ZMjl1Wm1sbk1sdHdjbTl3WFNrcElIdGNiaUFnSUNBZ0lHTnZibVpwWjF0d2NtOXdYU0E5SUhWMGFXeHpMbVJsWlhCTlpYSm5aU2hqYjI1bWFXY3hXM0J5YjNCZExDQmpiMjVtYVdjeVczQnliM0JkS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY3lXM0J5YjNCZElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ1kyOXVabWxuVzNCeWIzQmRJRDBnWTI5dVptbG5NbHR3Y205d1hUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIVjBhV3h6TG1selQySnFaV04wS0dOdmJtWnBaekZiY0hKdmNGMHBLU0I3WEc0Z0lDQWdJQ0JqYjI1bWFXZGJjSEp2Y0YwZ1BTQjFkR2xzY3k1a1pXVndUV1Z5WjJVb1kyOXVabWxuTVZ0d2NtOXdYU2s3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdZMjl1Wm1sbk1WdHdjbTl3WFNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJtWnBaMXR3Y205d1hTQTlJR052Ym1acFp6RmJjSEp2Y0YwN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0dSbFptRjFiSFJVYjBOdmJtWnBaekpMWlhsekxDQm1kVzVqZEdsdmJpQmtaV1poZFd4MFZHOURiMjVtYVdjeUtIQnliM0FwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdOdmJtWnBaekpiY0hKdmNGMGdJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQmpiMjVtYVdkYmNISnZjRjBnUFNCamIyNW1hV2N5VzNCeWIzQmRPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlHTnZibVpwWnpGYmNISnZjRjBnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0JqYjI1bWFXZGJjSEp2Y0YwZ1BTQmpiMjVtYVdjeFczQnliM0JkTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2RtRnlJR0Y0YVc5elMyVjVjeUE5SUhaaGJIVmxSbkp2YlVOdmJtWnBaekpMWlhselhHNGdJQ0FnTG1OdmJtTmhkQ2h0WlhKblpVUmxaWEJRY205d1pYSjBhV1Z6UzJWNWN5bGNiaUFnSUNBdVkyOXVZMkYwS0dSbFptRjFiSFJVYjBOdmJtWnBaekpMWlhsektUdGNibHh1SUNCMllYSWdiM1JvWlhKTFpYbHpJRDBnVDJKcVpXTjBYRzRnSUNBZ0xtdGxlWE1vWTI5dVptbG5NaWxjYmlBZ0lDQXVabWxzZEdWeUtHWjFibU4wYVc5dUlHWnBiSFJsY2tGNGFXOXpTMlY1Y3loclpYa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmhlR2x2YzB0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNVHRjYmlBZ0lDQjlLVHRjYmx4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0c5MGFHVnlTMlY1Y3l3Z1puVnVZM1JwYjI0Z2IzUm9aWEpMWlhselJHVm1ZWFZzZEZSdlEyOXVabWxuTWlod2NtOXdLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJqYjI1bWFXY3lXM0J5YjNCZElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ1kyOXVabWxuVzNCeWIzQmRJRDBnWTI5dVptbG5NbHR3Y205d1hUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2N4VzNCeWIzQmRJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdZMjl1Wm1sblczQnliM0JkSUQwZ1kyOXVabWxuTVZ0d2NtOXdYVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJqYjI1bWFXYzdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnWTNKbFlYUmxSWEp5YjNJZ1BTQnlaWEYxYVhKbEtDY3VMMk55WldGMFpVVnljbTl5SnlrN1hHNWNiaThxS2x4dUlDb2dVbVZ6YjJ4MlpTQnZjaUJ5WldwbFkzUWdZU0JRY205dGFYTmxJR0poYzJWa0lHOXVJSEpsYzNCdmJuTmxJSE4wWVhSMWN5NWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQnlaWE52YkhabElFRWdablZ1WTNScGIyNGdkR2hoZENCeVpYTnZiSFpsY3lCMGFHVWdjSEp2YldselpTNWNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUhKbGFtVmpkQ0JCSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVZxWldOMGN5QjBhR1VnY0hKdmJXbHpaUzVjYmlBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCeVpYTndiMjV6WlNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2MyVjBkR3hsS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ3dnY21WemNHOXVjMlVwSUh0Y2JpQWdkbUZ5SUhaaGJHbGtZWFJsVTNSaGRIVnpJRDBnY21WemNHOXVjMlV1WTI5dVptbG5MblpoYkdsa1lYUmxVM1JoZEhWek8xeHVJQ0JwWmlBb0lYWmhiR2xrWVhSbFUzUmhkSFZ6SUh4OElIWmhiR2xrWVhSbFUzUmhkSFZ6S0hKbGMzQnZibk5sTG5OMFlYUjFjeWtwSUh0Y2JpQWdJQ0J5WlhOdmJIWmxLSEpsYzNCdmJuTmxLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WldwbFkzUW9ZM0psWVhSbFJYSnliM0lvWEc0Z0lDQWdJQ0FuVW1WeGRXVnpkQ0JtWVdsc1pXUWdkMmwwYUNCemRHRjBkWE1nWTI5a1pTQW5JQ3NnY21WemNHOXVjMlV1YzNSaGRIVnpMRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVZMjl1Wm1sbkxGeHVJQ0FnSUNBZ2JuVnNiQ3hjYmlBZ0lDQWdJSEpsYzNCdmJuTmxMbkpsY1hWbGMzUXNYRzRnSUNBZ0lDQnlaWE53YjI1elpWeHVJQ0FnSUNrcE8xeHVJQ0I5WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUx5NHVMM1YwYVd4ekp5azdYRzVjYmk4cUtseHVJQ29nVkhKaGJuTm1iM0p0SUhSb1pTQmtZWFJoSUdadmNpQmhJSEpsY1hWbGMzUWdiM0lnWVNCeVpYTndiMjV6WlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmRk4wY21sdVozMGdaR0YwWVNCVWFHVWdaR0YwWVNCMGJ5QmlaU0IwY21GdWMyWnZjbTFsWkZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ2FHVmhaR1Z5Y3lCVWFHVWdhR1ZoWkdWeWN5Qm1iM0lnZEdobElISmxjWFZsYzNRZ2IzSWdjbVZ6Y0c5dWMyVmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDhSblZ1WTNScGIyNTlJR1p1Y3lCQklITnBibWRzWlNCbWRXNWpkR2x2YmlCdmNpQkJjbkpoZVNCdlppQm1kVzVqZEdsdmJuTmNiaUFxSUVCeVpYUjFjbTV6SUhzcWZTQlVhR1VnY21WemRXeDBhVzVuSUhSeVlXNXpabTl5YldWa0lHUmhkR0ZjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMUVZWFJoS0dSaGRHRXNJR2hsWVdSbGNuTXNJR1p1Y3lrZ2UxeHVJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNobWJuTXNJR1oxYm1OMGFXOXVJSFJ5WVc1elptOXliU2htYmlrZ2UxeHVJQ0FnSUdSaGRHRWdQU0JtYmloa1lYUmhMQ0JvWldGa1pYSnpLVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUdSaGRHRTdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnZFhScGJITWdQU0J5WlhGMWFYSmxLQ2N1TDNWMGFXeHpKeWs3WEc1MllYSWdibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaU0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5dWIzSnRZV3hwZW1WSVpXRmtaWEpPWVcxbEp5azdYRzVjYm5aaGNpQkVSVVpCVlV4VVgwTlBUbFJGVGxSZlZGbFFSU0E5SUh0Y2JpQWdKME52Ym5SbGJuUXRWSGx3WlNjNklDZGhjSEJzYVdOaGRHbHZiaTk0TFhkM2R5MW1iM0p0TFhWeWJHVnVZMjlrWldRblhHNTlPMXh1WEc1bWRXNWpkR2x2YmlCelpYUkRiMjUwWlc1MFZIbHdaVWxtVlc1elpYUW9hR1ZoWkdWeWN5d2dkbUZzZFdVcElIdGNiaUFnYVdZZ0tDRjFkR2xzY3k1cGMxVnVaR1ZtYVc1bFpDaG9aV0ZrWlhKektTQW1KaUIxZEdsc2N5NXBjMVZ1WkdWbWFXNWxaQ2hvWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhTa3BJSHRjYmlBZ0lDQm9aV0ZrWlhKeld5ZERiMjUwWlc1MExWUjVjR1VuWFNBOUlIWmhiSFZsTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUkJaR0Z3ZEdWeUtDa2dlMXh1SUNCMllYSWdZV1JoY0hSbGNqdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCWVRVeElkSFJ3VW1WeGRXVnpkQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQXZMeUJHYjNJZ1luSnZkM05sY25NZ2RYTmxJRmhJVWlCaFpHRndkR1Z5WEc0Z0lDQWdZV1JoY0hSbGNpQTlJSEpsY1hWcGNtVW9KeTR2WVdSaGNIUmxjbk12ZUdoeUp5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhCeWIyTmxjM01nSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaHdjbTlqWlhOektTQTlQVDBnSjF0dlltcGxZM1FnY0hKdlkyVnpjMTBuS1NCN1hHNGdJQ0FnTHk4Z1JtOXlJRzV2WkdVZ2RYTmxJRWhVVkZBZ1lXUmhjSFJsY2x4dUlDQWdJR0ZrWVhCMFpYSWdQU0J5WlhGMWFYSmxLQ2N1TDJGa1lYQjBaWEp6TDJoMGRIQW5LVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdZV1JoY0hSbGNqdGNibjFjYmx4dWRtRnlJR1JsWm1GMWJIUnpJRDBnZTF4dUlDQmhaR0Z3ZEdWeU9pQm5aWFJFWldaaGRXeDBRV1JoY0hSbGNpZ3BMRnh1WEc0Z0lIUnlZVzV6Wm05eWJWSmxjWFZsYzNRNklGdG1kVzVqZEdsdmJpQjBjbUZ1YzJadmNtMVNaWEYxWlhOMEtHUmhkR0VzSUdobFlXUmxjbk1wSUh0Y2JpQWdJQ0J1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsS0dobFlXUmxjbk1zSUNkQlkyTmxjSFFuS1R0Y2JpQWdJQ0J1YjNKdFlXeHBlbVZJWldGa1pYSk9ZVzFsS0dobFlXUmxjbk1zSUNkRGIyNTBaVzUwTFZSNWNHVW5LVHRjYmlBZ0lDQnBaaUFvZFhScGJITXVhWE5HYjNKdFJHRjBZU2hrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkJjbkpoZVVKMVptWmxjaWhrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkNkV1ptWlhJb1pHRjBZU2tnZkh4Y2JpQWdJQ0FnSUhWMGFXeHpMbWx6VTNSeVpXRnRLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwWnBiR1VvWkdGMFlTa2dmSHhjYmlBZ0lDQWdJSFYwYVd4ekxtbHpRbXh2WWloa1lYUmhLVnh1SUNBZ0lDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0U3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5aGtZWFJoS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRXVZblZtWm1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RYUnBiSE11YVhOVlVreFRaV0Z5WTJoUVlYSmhiWE1vWkdGMFlTa3BJSHRjYmlBZ0lDQWdJSE5sZEVOdmJuUmxiblJVZVhCbFNXWlZibk5sZENob1pXRmtaWEp6TENBbllYQndiR2xqWVhScGIyNHZlQzEzZDNjdFptOXliUzExY214bGJtTnZaR1ZrTzJOb1lYSnpaWFE5ZFhSbUxUZ25LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmtZWFJoTG5SdlUzUnlhVzVuS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzA5aWFtVmpkQ2hrWVhSaEtTa2dlMXh1SUNBZ0lDQWdjMlYwUTI5dWRHVnVkRlI1Y0dWSlpsVnVjMlYwS0dobFlXUmxjbk1zSUNkaGNIQnNhV05oZEdsdmJpOXFjMjl1TzJOb1lYSnpaWFE5ZFhSbUxUZ25LVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQktVMDlPTG5OMGNtbHVaMmxtZVNoa1lYUmhLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdSaGRHRTdYRzRnSUgxZExGeHVYRzRnSUhSeVlXNXpabTl5YlZKbGMzQnZibk5sT2lCYlpuVnVZM1JwYjI0Z2RISmhibk5tYjNKdFVtVnpjRzl1YzJVb1pHRjBZU2tnZTF4dUlDQWdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWkdGMFlTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR1JoZEdFZ1BTQktVMDlPTG5CaGNuTmxLR1JoZEdFcE8xeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dleUF2S2lCSloyNXZjbVVnS2k4Z2ZWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdaR0YwWVR0Y2JpQWdmVjBzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUVnZEdsdFpXOTFkQ0JwYmlCdGFXeHNhWE5sWTI5dVpITWdkRzhnWVdKdmNuUWdZU0J5WlhGMVpYTjBMaUJKWmlCelpYUWdkRzhnTUNBb1pHVm1ZWFZzZENrZ1lWeHVJQ0FnS2lCMGFXMWxiM1YwSUdseklHNXZkQ0JqY21WaGRHVmtMbHh1SUNBZ0tpOWNiaUFnZEdsdFpXOTFkRG9nTUN4Y2JseHVJQ0I0YzNKbVEyOXZhMmxsVG1GdFpUb2dKMWhUVWtZdFZFOUxSVTRuTEZ4dUlDQjRjM0ptU0dWaFpHVnlUbUZ0WlRvZ0oxZ3RXRk5TUmkxVVQwdEZUaWNzWEc1Y2JpQWdiV0Y0UTI5dWRHVnVkRXhsYm1kMGFEb2dMVEVzWEc1Y2JpQWdkbUZzYVdSaGRHVlRkR0YwZFhNNklHWjFibU4wYVc5dUlIWmhiR2xrWVhSbFUzUmhkSFZ6S0hOMFlYUjFjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQnpkR0YwZFhNZ1BqMGdNakF3SUNZbUlITjBZWFIxY3lBOElETXdNRHRjYmlBZ2ZWeHVmVHRjYmx4dVpHVm1ZWFZzZEhNdWFHVmhaR1Z5Y3lBOUlIdGNiaUFnWTI5dGJXOXVPaUI3WEc0Z0lDQWdKMEZqWTJWd2RDYzZJQ2RoY0hCc2FXTmhkR2x2Ymk5cWMyOXVMQ0IwWlhoMEwzQnNZV2x1TENBcUx5b25YRzRnSUgxY2JuMDdYRzVjYm5WMGFXeHpMbVp2Y2tWaFkyZ29XeWRrWld4bGRHVW5MQ0FuWjJWMEp5d2dKMmhsWVdRblhTd2dablZ1WTNScGIyNGdabTl5UldGamFFMWxkR2h2WkU1dlJHRjBZU2h0WlhSb2IyUXBJSHRjYmlBZ1pHVm1ZWFZzZEhNdWFHVmhaR1Z5YzF0dFpYUm9iMlJkSUQwZ2UzMDdYRzU5S1R0Y2JseHVkWFJwYkhNdVptOXlSV0ZqYUNoYkozQnZjM1FuTENBbmNIVjBKeXdnSjNCaGRHTm9KMTBzSUdaMWJtTjBhVzl1SUdadmNrVmhZMmhOWlhSb2IyUlhhWFJvUkdGMFlTaHRaWFJvYjJRcElIdGNiaUFnWkdWbVlYVnNkSE11YUdWaFpHVnljMXR0WlhSb2IyUmRJRDBnZFhScGJITXViV1Z5WjJVb1JFVkdRVlZNVkY5RFQwNVVSVTVVWDFSWlVFVXBPMXh1ZlNrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdaR1ZtWVhWc2RITTdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnWW1sdVpDaG1iaXdnZEdocGMwRnlaeWtnZTF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2QzSmhjQ2dwSUh0Y2JpQWdJQ0IyWVhJZ1lYSm5jeUE5SUc1bGR5QkJjbkpoZVNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvS1R0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdGeVozTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdGeVozTmJhVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJtYmk1aGNIQnNlU2gwYUdselFYSm5MQ0JoY21kektUdGNiaUFnZlR0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dVpuVnVZM1JwYjI0Z1pXNWpiMlJsS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0haaGJDa3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUUXdMMmRwTENBblFDY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXpRUzluYVN3Z0p6b25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNalF2Wnl3Z0p5UW5LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNa012WjJrc0lDY3NKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVEl3TDJjc0lDY3JKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFZDTDJkcExDQW5XeWNwTGx4dUlDQWdJSEpsY0d4aFkyVW9MeVUxUkM5bmFTd2dKMTBuS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJDZFdsc1pDQmhJRlZTVENCaWVTQmhjSEJsYm1ScGJtY2djR0Z5WVcxeklIUnZJSFJvWlNCbGJtUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2RYSnNJRlJvWlNCaVlYTmxJRzltSUhSb1pTQjFjbXdnS0dVdVp5NHNJR2gwZEhBNkx5OTNkM2N1WjI5dloyeGxMbU52YlNsY2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmJjR0Z5WVcxelhTQlVhR1VnY0dGeVlXMXpJSFJ2SUdKbElHRndjR1Z1WkdWa1hHNGdLaUJBY21WMGRYSnVjeUI3YzNSeWFXNW5mU0JVYUdVZ1ptOXliV0YwZEdWa0lIVnliRnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHSjFhV3hrVlZKTUtIVnliQ3dnY0dGeVlXMXpMQ0J3WVhKaGJYTlRaWEpwWVd4cGVtVnlLU0I3WEc0Z0lDOHFaWE5zYVc1MElHNXZMWEJoY21GdExYSmxZWE56YVdkdU9qQXFMMXh1SUNCcFppQW9JWEJoY21GdGN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMWNtdzdYRzRnSUgxY2JseHVJQ0IyWVhJZ2MyVnlhV0ZzYVhwbFpGQmhjbUZ0Y3p0Y2JpQWdhV1lnS0hCaGNtRnRjMU5sY21saGJHbDZaWElwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWh3WVhKaGJYTXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIVjBhV3h6TG1selZWSk1VMlZoY21Ob1VHRnlZVzF6S0hCaGNtRnRjeWtwSUh0Y2JpQWdJQ0J6WlhKcFlXeHBlbVZrVUdGeVlXMXpJRDBnY0dGeVlXMXpMblJ2VTNSeWFXNW5LQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZG1GeUlIQmhjblJ6SUQwZ1cxMDdYRzVjYmlBZ0lDQjFkR2xzY3k1bWIzSkZZV05vS0hCaGNtRnRjeXdnWm5WdVkzUnBiMjRnYzJWeWFXRnNhWHBsS0haaGJDd2dhMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9kbUZzSUQwOVBTQnVkV3hzSUh4OElIUjVjR1Z2WmlCMllXd2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UVhKeVlYa29kbUZzS1NrZ2UxeHVJQ0FnSUNBZ0lDQnJaWGtnUFNCclpYa2dLeUFuVzEwbk8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RtRnNJRDBnVzNaaGJGMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFYwYVd4ekxtWnZja1ZoWTJnb2RtRnNMQ0JtZFc1amRHbHZiaUJ3WVhKelpWWmhiSFZsS0hZcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6UkdGMFpTaDJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWWdQU0IyTG5SdlNWTlBVM1J5YVc1bktDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZFhScGJITXVhWE5QWW1wbFkzUW9kaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJJRDBnU2xOUFRpNXpkSEpwYm1kcFpua29kaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NHRnlkSE11Y0hWemFDaGxibU52WkdVb2EyVjVLU0FySUNjOUp5QXJJR1Z1WTI5a1pTaDJLU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhObGNtbGhiR2w2WldSUVlYSmhiWE1nUFNCd1lYSjBjeTVxYjJsdUtDY21KeWs3WEc0Z0lIMWNibHh1SUNCcFppQW9jMlZ5YVdGc2FYcGxaRkJoY21GdGN5a2dlMXh1SUNBZ0lIWmhjaUJvWVhOb2JXRnlhMGx1WkdWNElEMGdkWEpzTG1sdVpHVjRUMllvSnlNbktUdGNiaUFnSUNCcFppQW9hR0Z6YUcxaGNtdEpibVJsZUNBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhWeWJDQTlJSFZ5YkM1emJHbGpaU2d3TENCb1lYTm9iV0Z5YTBsdVpHVjRLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjbXdnS3owZ0tIVnliQzVwYm1SbGVFOW1LQ2MvSnlrZ1BUMDlJQzB4SUQ4Z0p6OG5JRG9nSnlZbktTQXJJSE5sY21saGJHbDZaV1JRWVhKaGJYTTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkWEpzTzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1THlvcVhHNGdLaUJEY21WaGRHVnpJR0VnYm1WM0lGVlNUQ0JpZVNCamIyMWlhVzVwYm1jZ2RHaGxJSE53WldOcFptbGxaQ0JWVWt4elhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUdKaGMyVlZVa3dnVkdobElHSmhjMlVnVlZKTVhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdjbVZzWVhScGRtVlZVa3dnVkdobElISmxiR0YwYVhabElGVlNURnh1SUNvZ1FISmxkSFZ5Ym5NZ2UzTjBjbWx1WjMwZ1ZHaGxJR052YldKcGJtVmtJRlZTVEZ4dUlDb3ZYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR052YldKcGJtVlZVa3h6S0dKaGMyVlZVa3dzSUhKbGJHRjBhWFpsVlZKTUtTQjdYRzRnSUhKbGRIVnliaUJ5Wld4aGRHbDJaVlZTVEZ4dUlDQWdJRDhnWW1GelpWVlNUQzV5WlhCc1lXTmxLQzljWEM4ckpDOHNJQ2NuS1NBcklDY3ZKeUFySUhKbGJHRjBhWFpsVlZKTUxuSmxjR3hoWTJVb0wxNWNYQzhyTHl3Z0p5Y3BYRzRnSUNBZ09pQmlZWE5sVlZKTU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDaGNiaUFnZFhScGJITXVhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NBL1hHNWNiaUFnTHk4Z1UzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWnpJSE4xY0hCdmNuUWdaRzlqZFcxbGJuUXVZMjl2YTJsbFhHNGdJQ0FnS0daMWJtTjBhVzl1SUhOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIZHlhWFJsT2lCbWRXNWpkR2x2YmlCM2NtbDBaU2h1WVcxbExDQjJZV3gxWlN3Z1pYaHdhWEpsY3l3Z2NHRjBhQ3dnWkc5dFlXbHVMQ0J6WldOMWNtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdZMjl2YTJsbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29ibUZ0WlNBcklDYzlKeUFySUdWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoMllXeDFaU2twTzF4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6VG5WdFltVnlLR1Y0Y0dseVpYTXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjlyYVdVdWNIVnphQ2duWlhod2FYSmxjejBuSUNzZ2JtVjNJRVJoZEdVb1pYaHdhWEpsY3lrdWRHOUhUVlJUZEhKcGJtY29LU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIVjBhV3h6TG1selUzUnlhVzVuS0hCaGRHZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjlyYVdVdWNIVnphQ2duY0dGMGFEMG5JQ3NnY0dGMGFDazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hWMGFXeHpMbWx6VTNSeWFXNW5LR1J2YldGcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2RrYjIxaGFXNDlKeUFySUdSdmJXRnBiaWs3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tITmxZM1Z5WlNBOVBUMGdkSEoxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dmEybGxMbkIxYzJnb0ozTmxZM1Z5WlNjcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtTnZiMnRwWlNBOUlHTnZiMnRwWlM1cWIybHVLQ2M3SUNjcE8xeHVJQ0FnSUNBZ0lDQjlMRnh1WEc0Z0lDQWdJQ0FnSUhKbFlXUTZJR1oxYm1OMGFXOXVJSEpsWVdRb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJ0WVhSamFDQTlJR1J2WTNWdFpXNTBMbU52YjJ0cFpTNXRZWFJqYUNodVpYY2dVbVZuUlhod0tDY29Ybnc3WEZ4Y1hITXFLU2duSUNzZ2JtRnRaU0FySUNjcFBTaGJYanRkS2lrbktTazdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJQ2h0WVhSamFDQS9JR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2h0WVhSamFGc3pYU2tnT2lCdWRXeHNLVHRjYmlBZ0lDQWdJQ0FnZlN4Y2JseHVJQ0FnSUNBZ0lDQnlaVzF2ZG1VNklHWjFibU4wYVc5dUlISmxiVzkyWlNodVlXMWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTUzY21sMFpTaHVZVzFsTENBbkp5d2dSR0YwWlM1dWIzY29LU0F0SURnMk5EQXdNREF3S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOUtTZ3BJRHBjYmx4dUlDQXZMeUJPYjI0Z2MzUmhibVJoY21RZ1luSnZkM05sY2lCbGJuWWdLSGRsWWlCM2IzSnJaWEp6TENCeVpXRmpkQzF1WVhScGRtVXBJR3hoWTJzZ2JtVmxaR1ZrSUhOMWNIQnZjblF1WEc0Z0lDQWdLR1oxYm1OMGFXOXVJRzV2YmxOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIZHlhWFJsT2lCbWRXNWpkR2x2YmlCM2NtbDBaU2dwSUh0OUxGeHVJQ0FnSUNBZ0lDQnlaV0ZrT2lCbWRXNWpkR2x2YmlCeVpXRmtLQ2tnZXlCeVpYUjFjbTRnYm5Wc2JEc2dmU3hjYmlBZ0lDQWdJQ0FnY21WdGIzWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVW9LU0I3ZlZ4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0I5S1NncFhHNHBPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlhNZ2QyaGxkR2hsY2lCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVENCcGN5QmhZbk52YkhWMFpWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCMWNtd2dWR2hsSUZWU1RDQjBieUIwWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUIwYUdVZ2MzQmxZMmxtYVdWa0lGVlNUQ0JwY3lCaFluTnZiSFYwWlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhWE5CWW5OdmJIVjBaVlZTVENoMWNtd3BJSHRjYmlBZ0x5OGdRU0JWVWt3Z2FYTWdZMjl1YzJsa1pYSmxaQ0JoWW5OdmJIVjBaU0JwWmlCcGRDQmlaV2RwYm5NZ2QybDBhQ0JjSWp4elkyaGxiV1UrT2k4dlhDSWdiM0lnWENJdkwxd2lJQ2h3Y205MGIyTnZiQzF5Wld4aGRHbDJaU0JWVWt3cExseHVJQ0F2THlCU1JrTWdNems0TmlCa1pXWnBibVZ6SUhOamFHVnRaU0J1WVcxbElHRnpJR0VnYzJWeGRXVnVZMlVnYjJZZ1kyaGhjbUZqZEdWeWN5QmlaV2RwYm01cGJtY2dkMmwwYUNCaElHeGxkSFJsY2lCaGJtUWdabTlzYkc5M1pXUmNiaUFnTHk4Z1lua2dZVzU1SUdOdmJXSnBibUYwYVc5dUlHOW1JR3hsZEhSbGNuTXNJR1JwWjJsMGN5d2djR3gxY3l3Z2NHVnlhVzlrTENCdmNpQm9lWEJvWlc0dVhHNGdJSEpsZEhWeWJpQXZYaWhiWVMxNlhWdGhMWHBjWEdSY1hDdGNYQzFjWEM1ZEtqb3BQMXhjTDF4Y0x5OXBMblJsYzNRb2RYSnNLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lIVjBhV3h6TG1selUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa2dQMXh1WEc0Z0lDOHZJRk4wWVc1a1lYSmtJR0p5YjNkelpYSWdaVzUyY3lCb1lYWmxJR1oxYkd3Z2MzVndjRzl5ZENCdlppQjBhR1VnUVZCSmN5QnVaV1ZrWldRZ2RHOGdkR1Z6ZEZ4dUlDQXZMeUIzYUdWMGFHVnlJSFJvWlNCeVpYRjFaWE4wSUZWU1RDQnBjeUJ2WmlCMGFHVWdjMkZ0WlNCdmNtbG5hVzRnWVhNZ1kzVnljbVZ1ZENCc2IyTmhkR2x2Ymk1Y2JpQWdJQ0FvWm5WdVkzUnBiMjRnYzNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzF6YVdVZ1BTQXZLRzF6YVdWOGRISnBaR1Z1ZENrdmFTNTBaWE4wS0c1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RcE8xeHVJQ0FnSUNBZ2RtRnlJSFZ5YkZCaGNuTnBibWRPYjJSbElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbllTY3BPMXh1SUNBZ0lDQWdkbUZ5SUc5eWFXZHBibFZTVER0Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0tpQlFZWEp6WlNCaElGVlNUQ0IwYnlCa2FYTmpiM1psY2lCcGRDZHpJR052YlhCdmJtVnVkSE5jYmlBZ0lDQXFYRzRnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2RYSnNJRlJvWlNCVlVrd2dkRzhnWW1VZ2NHRnljMlZrWEc0Z0lDQWdLaUJBY21WMGRYSnVjeUI3VDJKcVpXTjBmVnh1SUNBZ0lDb3ZYRzRnSUNBZ0lDQm1kVzVqZEdsdmJpQnlaWE52YkhabFZWSk1LSFZ5YkNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYUhKbFppQTlJSFZ5YkR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYlhOcFpTa2dlMXh1SUNBZ0lDQWdJQ0F2THlCSlJTQnVaV1ZrY3lCaGRIUnlhV0oxZEdVZ2MyVjBJSFIzYVdObElIUnZJRzV2Y20xaGJHbDZaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUNBZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YzJWMFFYUjBjbWxpZFhSbEtDZG9jbVZtSnl3Z2FISmxaaWs3WEc0Z0lDQWdJQ0FnSUNBZ2FISmxaaUE5SUhWeWJGQmhjbk5wYm1kT2IyUmxMbWh5WldZN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IxY214UVlYSnphVzVuVG05a1pTNXpaWFJCZEhSeWFXSjFkR1VvSjJoeVpXWW5MQ0JvY21WbUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCMWNteFFZWEp6YVc1blRtOWtaU0J3Y205MmFXUmxjeUIwYUdVZ1ZYSnNWWFJwYkhNZ2FXNTBaWEptWVdObElDMGdhSFIwY0RvdkwzVnliQzV6Y0dWakxuZG9ZWFIzWnk1dmNtY3ZJM1Z5YkhWMGFXeHpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnYUhKbFpqb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFISmxaaXhjYmlBZ0lDQWdJQ0FnSUNCd2NtOTBiMk52YkRvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1Y0hKdmRHOWpiMndnUHlCMWNteFFZWEp6YVc1blRtOWtaUzV3Y205MGIyTnZiQzV5WlhCc1lXTmxLQzg2SkM4c0lDY25LU0E2SUNjbkxGeHVJQ0FnSUNBZ0lDQWdJR2h2YzNRNklIVnliRkJoY25OcGJtZE9iMlJsTG1odmMzUXNYRzRnSUNBZ0lDQWdJQ0FnYzJWaGNtTm9PaUIxY214UVlYSnphVzVuVG05a1pTNXpaV0Z5WTJnZ1B5QjFjbXhRWVhKemFXNW5UbTlrWlM1elpXRnlZMmd1Y21Wd2JHRmpaU2d2WGx4Y1B5OHNJQ2NuS1NBNklDY25MRnh1SUNBZ0lDQWdJQ0FnSUdoaGMyZzZJSFZ5YkZCaGNuTnBibWRPYjJSbExtaGhjMmdnUHlCMWNteFFZWEp6YVc1blRtOWtaUzVvWVhOb0xuSmxjR3hoWTJVb0wxNGpMeXdnSnljcElEb2dKeWNzWEc0Z0lDQWdJQ0FnSUNBZ2FHOXpkRzVoYldVNklIVnliRkJoY25OcGJtZE9iMlJsTG1odmMzUnVZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lIQnZjblE2SUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJ2Y25Rc1hHNGdJQ0FnSUNBZ0lDQWdjR0YwYUc1aGJXVTZJQ2gxY214UVlYSnphVzVuVG05a1pTNXdZWFJvYm1GdFpTNWphR0Z5UVhRb01Da2dQVDA5SUNjdkp5a2dQMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RYSnNVR0Z5YzJsdVowNXZaR1V1Y0dGMGFHNWhiV1VnT2x4dUlDQWdJQ0FnSUNBZ0lDQWdKeThuSUNzZ2RYSnNVR0Z5YzJsdVowNXZaR1V1Y0dGMGFHNWhiV1ZjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2IzSnBaMmx1VlZKTUlEMGdjbVZ6YjJ4MlpWVlNUQ2gzYVc1a2IzY3ViRzlqWVhScGIyNHVhSEpsWmlrN1hHNWNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDb2dSR1YwWlhKdGFXNWxJR2xtSUdFZ1ZWSk1JSE5vWVhKbGN5QjBhR1VnYzJGdFpTQnZjbWxuYVc0Z1lYTWdkR2hsSUdOMWNuSmxiblFnYkc5allYUnBiMjVjYmlBZ0lDQXFYRzRnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2NtVnhkV1Z6ZEZWU1RDQlVhR1VnVlZKTUlIUnZJSFJsYzNSY2JpQWdJQ0FxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUZWU1RDQnphR0Z5WlhNZ2RHaGxJSE5oYldVZ2IzSnBaMmx1TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlHbHpWVkpNVTJGdFpVOXlhV2RwYmloeVpYRjFaWE4wVlZKTUtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1lYSnpaV1FnUFNBb2RYUnBiSE11YVhOVGRISnBibWNvY21WeGRXVnpkRlZTVENrcElEOGdjbVZ6YjJ4MlpWVlNUQ2h5WlhGMVpYTjBWVkpNS1NBNklISmxjWFZsYzNSVlVrdzdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9jR0Z5YzJWa0xuQnliM1J2WTI5c0lEMDlQU0J2Y21sbmFXNVZVa3d1Y0hKdmRHOWpiMndnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJSEJoY25ObFpDNW9iM04wSUQwOVBTQnZjbWxuYVc1VlVrd3VhRzl6ZENrN1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgwcEtDa2dPbHh1WEc0Z0lDOHZJRTV2YmlCemRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRuTWdLSGRsWWlCM2IzSnJaWEp6TENCeVpXRmpkQzF1WVhScGRtVXBJR3hoWTJzZ2JtVmxaR1ZrSUhOMWNIQnZjblF1WEc0Z0lDQWdLR1oxYm1OMGFXOXVJRzV2YmxOMFlXNWtZWEprUW5KdmQzTmxja1Z1ZGlncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCcGMxVlNURk5oYldWUGNtbG5hVzRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlLU2dwWEc0cE8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2RYUnBiSE1nUFNCeVpYRjFhWEpsS0NjdUxpOTFkR2xzY3ljcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJRzV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VvYUdWaFpHVnljeXdnYm05eWJXRnNhWHBsWkU1aGJXVXBJSHRjYmlBZ2RYUnBiSE11Wm05eVJXRmphQ2hvWldGa1pYSnpMQ0JtZFc1amRHbHZiaUJ3Y205alpYTnpTR1ZoWkdWeUtIWmhiSFZsTENCdVlXMWxLU0I3WEc0Z0lDQWdhV1lnS0c1aGJXVWdJVDA5SUc1dmNtMWhiR2w2WldST1lXMWxJQ1ltSUc1aGJXVXVkRzlWY0hCbGNrTmhjMlVvS1NBOVBUMGdibTl5YldGc2FYcGxaRTVoYldVdWRHOVZjSEJsY2tOaGMyVW9LU2tnZTF4dUlDQWdJQ0FnYUdWaFpHVnljMXR1YjNKdFlXeHBlbVZrVG1GdFpWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lHUmxiR1YwWlNCb1pXRmtaWEp6VzI1aGJXVmRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JpOHZJRWhsWVdSbGNuTWdkMmh2YzJVZ1pIVndiR2xqWVhSbGN5QmhjbVVnYVdkdWIzSmxaQ0JpZVNCdWIyUmxYRzR2THlCakxtWXVJR2gwZEhCek9pOHZibTlrWldwekxtOXlaeTloY0drdmFIUjBjQzVvZEcxc0kyaDBkSEJmYldWemMyRm5aVjlvWldGa1pYSnpYRzUyWVhJZ2FXZHViM0psUkhWd2JHbGpZWFJsVDJZZ1BTQmJYRzRnSUNkaFoyVW5MQ0FuWVhWMGFHOXlhWHBoZEdsdmJpY3NJQ2RqYjI1MFpXNTBMV3hsYm1kMGFDY3NJQ2RqYjI1MFpXNTBMWFI1Y0dVbkxDQW5aWFJoWnljc1hHNGdJQ2RsZUhCcGNtVnpKeXdnSjJaeWIyMG5MQ0FuYUc5emRDY3NJQ2RwWmkxdGIyUnBabWxsWkMxemFXNWpaU2NzSUNkcFppMTFibTF2WkdsbWFXVmtMWE5wYm1ObEp5eGNiaUFnSjJ4aGMzUXRiVzlrYVdacFpXUW5MQ0FuYkc5allYUnBiMjRuTENBbmJXRjRMV1p2Y25kaGNtUnpKeXdnSjNCeWIzaDVMV0YxZEdodmNtbDZZWFJwYjI0bkxGeHVJQ0FuY21WbVpYSmxjaWNzSUNkeVpYUnllUzFoWm5SbGNpY3NJQ2QxYzJWeUxXRm5aVzUwSjF4dVhUdGNibHh1THlvcVhHNGdLaUJRWVhKelpTQm9aV0ZrWlhKeklHbHVkRzhnWVc0Z2IySnFaV04wWEc0Z0tseHVJQ29nWUdCZ1hHNGdLaUJFWVhSbE9pQlhaV1FzSURJM0lFRjFaeUF5TURFMElEQTRPalU0T2pRNUlFZE5WRnh1SUNvZ1EyOXVkR1Z1ZEMxVWVYQmxPaUJoY0hCc2FXTmhkR2x2Ymk5cWMyOXVYRzRnS2lCRGIyNXVaV04wYVc5dU9pQnJaV1Z3TFdGc2FYWmxYRzRnS2lCVWNtRnVjMlpsY2kxRmJtTnZaR2x1WnpvZ1kyaDFibXRsWkZ4dUlDb2dZR0JnWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR2hsWVdSbGNuTWdTR1ZoWkdWeWN5QnVaV1ZrYVc1bklIUnZJR0psSUhCaGNuTmxaRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgwZ1NHVmhaR1Z5Y3lCd1lYSnpaV1FnYVc1MGJ5QmhiaUJ2WW1wbFkzUmNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCd1lYSnpaVWhsWVdSbGNuTW9hR1ZoWkdWeWN5a2dlMXh1SUNCMllYSWdjR0Z5YzJWa0lEMGdlMzA3WEc0Z0lIWmhjaUJyWlhrN1hHNGdJSFpoY2lCMllXdzdYRzRnSUhaaGNpQnBPMXh1WEc0Z0lHbG1JQ2doYUdWaFpHVnljeWtnZXlCeVpYUjFjbTRnY0dGeWMyVmtPeUI5WEc1Y2JpQWdkWFJwYkhNdVptOXlSV0ZqYUNob1pXRmtaWEp6TG5Od2JHbDBLQ2RjWEc0bktTd2dablZ1WTNScGIyNGdjR0Z5YzJWeUtHeHBibVVwSUh0Y2JpQWdJQ0JwSUQwZ2JHbHVaUzVwYm1SbGVFOW1LQ2M2SnlrN1hHNGdJQ0FnYTJWNUlEMGdkWFJwYkhNdWRISnBiU2hzYVc1bExuTjFZbk4wY2lnd0xDQnBLU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNiaUFnSUNCMllXd2dQU0IxZEdsc2N5NTBjbWx0S0d4cGJtVXVjM1ZpYzNSeUtHa2dLeUF4S1NrN1hHNWNiaUFnSUNCcFppQW9hMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9jR0Z5YzJWa1cydGxlVjBnSmlZZ2FXZHViM0psUkhWd2JHbGpZWFJsVDJZdWFXNWtaWGhQWmloclpYa3BJRDQ5SURBcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLR3RsZVNBOVBUMGdKM05sZEMxamIyOXJhV1VuS1NCN1hHNGdJQ0FnSUNBZ0lIQmhjbk5sWkZ0clpYbGRJRDBnS0hCaGNuTmxaRnRyWlhsZElEOGdjR0Z5YzJWa1cydGxlVjBnT2lCYlhTa3VZMjl1WTJGMEtGdDJZV3hkS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhCaGNuTmxaRnRyWlhsZElEMGdjR0Z5YzJWa1cydGxlVjBnUHlCd1lYSnpaV1JiYTJWNVhTQXJJQ2NzSUNjZ0t5QjJZV3dnT2lCMllXdzdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdjR0Z5YzJWa08xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dUx5b3FYRzRnS2lCVGVXNTBZV04wYVdNZ2MzVm5ZWElnWm05eUlHbHVkbTlyYVc1bklHRWdablZ1WTNScGIyNGdZVzVrSUdWNGNHRnVaR2x1WnlCaGJpQmhjbkpoZVNCbWIzSWdZWEpuZFcxbGJuUnpMbHh1SUNwY2JpQXFJRU52YlcxdmJpQjFjMlVnWTJGelpTQjNiM1ZzWkNCaVpTQjBieUIxYzJVZ1lFWjFibU4wYVc5dUxuQnliM1J2ZEhsd1pTNWhjSEJzZVdBdVhHNGdLbHh1SUNvZ0lHQmdZR3B6WEc0Z0tpQWdablZ1WTNScGIyNGdaaWg0TENCNUxDQjZLU0I3ZlZ4dUlDb2dJSFpoY2lCaGNtZHpJRDBnV3pFc0lESXNJRE5kTzF4dUlDb2dJR1l1WVhCd2JIa29iblZzYkN3Z1lYSm5jeWs3WEc0Z0tpQWdZR0JnWEc0Z0tseHVJQ29nVjJsMGFDQmdjM0J5WldGa1lDQjBhR2x6SUdWNFlXMXdiR1VnWTJGdUlHSmxJSEpsTFhkeWFYUjBaVzR1WEc0Z0tseHVJQ29nSUdCZ1lHcHpYRzRnS2lBZ2MzQnlaV0ZrS0daMWJtTjBhVzl1S0hnc0lIa3NJSG9wSUh0OUtTaGJNU3dnTWl3Z00xMHBPMXh1SUNvZ0lHQmdZRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR05oYkd4aVlXTnJYRzRnS2lCQWNtVjBkWEp1Y3lCN1JuVnVZM1JwYjI1OVhHNGdLaTljYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYzNCeVpXRmtLR05oYkd4aVlXTnJLU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCM2NtRndLR0Z5Y2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJqWVd4c1ltRmpheTVoY0hCc2VTaHVkV3hzTENCaGNuSXBPMXh1SUNCOU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR0pwYm1RZ1BTQnlaWEYxYVhKbEtDY3VMMmhsYkhCbGNuTXZZbWx1WkNjcE8xeHVYRzR2S21kc2IySmhiQ0IwYjFOMGNtbHVaenAwY25WbEtpOWNibHh1THk4Z2RYUnBiSE1nYVhNZ1lTQnNhV0p5WVhKNUlHOW1JR2RsYm1WeWFXTWdhR1ZzY0dWeUlHWjFibU4wYVc5dWN5QnViMjR0YzNCbFkybG1hV01nZEc4Z1lYaHBiM05jYmx4dWRtRnlJSFJ2VTNSeWFXNW5JRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaenRjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCQmNuSmhlVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRUZ5Y21GNUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQmNuSmhlU2gyWVd3cElIdGNiaUFnY21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2RtRnNLU0E5UFQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QjFibVJsWm1sdVpXUmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMGFHVWdkbUZzZFdVZ2FYTWdkVzVrWldacGJtVmtMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlZibVJsWm1sdVpXUW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ2RtRnNJRDA5UFNBbmRXNWtaV1pwYm1Wa0p6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVKMVptWmxjbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdRblZtWm1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQ2RXWm1aWElvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIyWVd3Z0lUMDlJRzUxYkd3Z0ppWWdJV2x6Vlc1a1pXWnBibVZrS0haaGJDa2dKaVlnZG1Gc0xtTnZibk4wY25WamRHOXlJQ0U5UFNCdWRXeHNJQ1ltSUNGcGMxVnVaR1ZtYVc1bFpDaDJZV3d1WTI5dWMzUnlkV04wYjNJcFhHNGdJQ0FnSmlZZ2RIbHdaVzltSUhaaGJDNWpiMjV6ZEhKMVkzUnZjaTVwYzBKMVptWmxjaUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUIyWVd3dVkyOXVjM1J5ZFdOMGIzSXVhWE5DZFdabVpYSW9kbUZzS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhiaUJCY25KaGVVSjFabVpsY2x4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0IyWVd3Z1ZHaGxJSFpoYkhWbElIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVRblZtWm1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOQmNuSmhlVUoxWm1abGNpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbENkV1ptWlhKZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVadmNtMUVZWFJoWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZVzRnUm05eWJVUmhkR0VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFp2Y20xRVlYUmhLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdLSFI1Y0dWdlppQkdiM0p0UkdGMFlTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElDWW1JQ2gyWVd3Z2FXNXpkR0Z1WTJWdlppQkdiM0p0UkdGMFlTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1JHVjBaWEp0YVc1bElHbG1JR0VnZG1Gc2RXVWdhWE1nWVNCMmFXVjNJRzl1SUdGdUlFRnljbUY1UW5WbVptVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQjJhV1YzSUc5dUlHRnVJRUZ5Y21GNVFuVm1abVZ5TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5CY25KaGVVSjFabVpsY2xacFpYY29kbUZzS1NCN1hHNGdJSFpoY2lCeVpYTjFiSFE3WEc0Z0lHbG1JQ2dvZEhsd1pXOW1JRUZ5Y21GNVFuVm1abVZ5SUNFOVBTQW5kVzVrWldacGJtVmtKeWtnSmlZZ0tFRnljbUY1UW5WbVptVnlMbWx6Vm1sbGR5a3BJSHRjYmlBZ0lDQnlaWE4xYkhRZ1BTQkJjbkpoZVVKMVptWmxjaTVwYzFacFpYY29kbUZzS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCeVpYTjFiSFFnUFNBb2RtRnNLU0FtSmlBb2RtRnNMbUoxWm1abGNpa2dKaVlnS0haaGJDNWlkV1ptWlhJZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUZOMGNtbHVaMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdVM1J5YVc1bkxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5jM1J5YVc1bkp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUU1MWJXSmxjbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdUblZ0WW1WeUxDQnZkR2hsY25kcGMyVWdabUZzYzJWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOT2RXMWlaWElvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iblZ0WW1WeUp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoYmlCUFltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhiaUJQWW1wbFkzUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwOWlhbVZqZENoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhaaGJDQWhQVDBnYm5Wc2JDQW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iMkpxWldOMEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVSaGRHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFUmhkR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFJoZEdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVJoZEdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVacGJHVmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFWnBiR1VzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMFpwYkdVb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRVpwYkdWZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVKc2IySmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElFSnNiMklzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEpzYjJJb2RtRnNLU0I3WEc0Z0lISmxkSFZ5YmlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkNrZ1BUMDlJQ2RiYjJKcVpXTjBJRUpzYjJKZEp6dGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUVaMWJtTjBhVzl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZU0JHZFc1amRHbHZiaXdnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSblZ1WTNScGIyNG9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0haaGJDa2dQVDA5SUNkYmIySnFaV04wSUVaMWJtTjBhVzl1WFNjN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlHRWdkbUZzZFdVZ2FYTWdZU0JUZEhKbFlXMWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElGTjBjbVZoYlN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VTNSeVpXRnRLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdhWE5QWW1wbFkzUW9kbUZzS1NBbUppQnBjMFoxYm1OMGFXOXVLSFpoYkM1d2FYQmxLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCMllXeDFaU0JwY3lCaElGVlNURk5sWVhKamFGQmhjbUZ0Y3lCdlltcGxZM1JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRlZTVEZObFlYSmphRkJoY21GdGN5QnZZbXBsWTNRc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQlZVa3hUWldGeVkyaFFZWEpoYlhNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIWmhiQ0JwYm5OMFlXNWpaVzltSUZWU1RGTmxZWEpqYUZCaGNtRnRjenRjYm4xY2JseHVMeW9xWEc0Z0tpQlVjbWx0SUdWNFkyVnpjeUIzYUdsMFpYTndZV05sSUc5bVppQjBhR1VnWW1WbmFXNXVhVzVuSUdGdVpDQmxibVFnYjJZZ1lTQnpkSEpwYm1kY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYzNSeUlGUm9aU0JUZEhKcGJtY2dkRzhnZEhKcGJWeHVJQ29nUUhKbGRIVnlibk1nZTFOMGNtbHVaMzBnVkdobElGTjBjbWx1WnlCbWNtVmxaQ0J2WmlCbGVHTmxjM01nZDJocGRHVnpjR0ZqWlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUIwY21sdEtITjBjaWtnZTF4dUlDQnlaWFIxY200Z2MzUnlMbkpsY0d4aFkyVW9MMTVjWEhNcUx5d2dKeWNwTG5KbGNHeGhZMlVvTDF4Y2N5b2tMeXdnSnljcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQjNaU2R5WlNCeWRXNXVhVzVuSUdsdUlHRWdjM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkRnh1SUNwY2JpQXFJRlJvYVhNZ1lXeHNiM2R6SUdGNGFXOXpJSFJ2SUhKMWJpQnBiaUJoSUhkbFlpQjNiM0pyWlhJc0lHRnVaQ0J5WldGamRDMXVZWFJwZG1VdVhHNGdLaUJDYjNSb0lHVnVkbWx5YjI1dFpXNTBjeUJ6ZFhCd2IzSjBJRmhOVEVoMGRIQlNaWEYxWlhOMExDQmlkWFFnYm05MElHWjFiR3g1SUhOMFlXNWtZWEprSUdkc2IySmhiSE11WEc0Z0tseHVJQ29nZDJWaUlIZHZjbXRsY25NNlhHNGdLaUFnZEhsd1pXOW1JSGRwYm1SdmR5QXRQaUIxYm1SbFptbHVaV1JjYmlBcUlDQjBlWEJsYjJZZ1pHOWpkVzFsYm5RZ0xUNGdkVzVrWldacGJtVmtYRzRnS2x4dUlDb2djbVZoWTNRdGJtRjBhWFpsT2x4dUlDb2dJRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJQzArSUNkU1pXRmpkRTVoZEdsMlpTZGNiaUFxSUc1aGRHbDJaWE5qY21sd2RGeHVJQ29nSUc1aGRtbG5ZWFJ2Y2k1d2NtOWtkV04wSUMwK0lDZE9ZWFJwZG1WVFkzSnBjSFFuSUc5eUlDZE9VeWRjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnYm1GMmFXZGhkRzl5SUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlBb2JtRjJhV2RoZEc5eUxuQnliMlIxWTNRZ1BUMDlJQ2RTWldGamRFNWhkR2wyWlNjZ2ZIeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZWFpwWjJGMGIzSXVjSEp2WkhWamRDQTlQVDBnSjA1aGRHbDJaVk5qY21sd2RDY2dmSHhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVhacFoyRjBiM0l1Y0hKdlpIVmpkQ0E5UFQwZ0owNVRKeWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0IwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUpseHVJQ0FnSUhSNWNHVnZaaUJrYjJOMWJXVnVkQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDZGNiaUFnS1R0Y2JuMWNibHh1THlvcVhHNGdLaUJKZEdWeVlYUmxJRzkyWlhJZ1lXNGdRWEp5WVhrZ2IzSWdZVzRnVDJKcVpXTjBJR2x1ZG05cmFXNW5JR0VnWm5WdVkzUnBiMjRnWm05eUlHVmhZMmdnYVhSbGJTNWNiaUFxWEc0Z0tpQkpaaUJnYjJKcVlDQnBjeUJoYmlCQmNuSmhlU0JqWVd4c1ltRmpheUIzYVd4c0lHSmxJR05oYkd4bFpDQndZWE56YVc1blhHNGdLaUIwYUdVZ2RtRnNkV1VzSUdsdVpHVjRMQ0JoYm1RZ1kyOXRjR3hsZEdVZ1lYSnlZWGtnWm05eUlHVmhZMmdnYVhSbGJTNWNiaUFxWEc0Z0tpQkpaaUFuYjJKcUp5QnBjeUJoYmlCUFltcGxZM1FnWTJGc2JHSmhZMnNnZDJsc2JDQmlaU0JqWVd4c1pXUWdjR0Z6YzJsdVoxeHVJQ29nZEdobElIWmhiSFZsTENCclpYa3NJR0Z1WkNCamIyMXdiR1YwWlNCdlltcGxZM1FnWm05eUlHVmhZMmdnY0hKdmNHVnlkSGt1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjhRWEp5WVhsOUlHOWlhaUJVYUdVZ2IySnFaV04wSUhSdklHbDBaWEpoZEdWY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1p1SUZSb1pTQmpZV3hzWW1GamF5QjBieUJwYm5admEyVWdabTl5SUdWaFkyZ2dhWFJsYlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJtYjNKRllXTm9LRzlpYWl3Z1ptNHBJSHRjYmlBZ0x5OGdSRzl1SjNRZ1ltOTBhR1Z5SUdsbUlHNXZJSFpoYkhWbElIQnliM1pwWkdWa1hHNGdJR2xtSUNodlltb2dQVDA5SUc1MWJHd2dmSHdnZEhsd1pXOW1JRzlpYWlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JseHVJQ0F2THlCR2IzSmpaU0JoYmlCaGNuSmhlU0JwWmlCdWIzUWdZV3h5WldGa2VTQnpiMjFsZEdocGJtY2dhWFJsY21GaWJHVmNiaUFnYVdZZ0tIUjVjR1Z2WmlCdlltb2dJVDA5SUNkdlltcGxZM1FuS1NCN1hHNGdJQ0FnTHlwbGMyeHBiblFnYm04dGNHRnlZVzB0Y21WaGMzTnBaMjQ2TUNvdlhHNGdJQ0FnYjJKcUlEMGdXMjlpYWwwN1hHNGdJSDFjYmx4dUlDQnBaaUFvYVhOQmNuSmhlU2h2WW1vcEtTQjdYRzRnSUNBZ0x5OGdTWFJsY21GMFpTQnZkbVZ5SUdGeWNtRjVJSFpoYkhWbGMxeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzSUQwZ2IySnFMbXhsYm1kMGFEc2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJQ0FnWm00dVkyRnNiQ2h1ZFd4c0xDQnZZbXBiYVYwc0lHa3NJRzlpYWlrN1hHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUM4dklFbDBaWEpoZEdVZ2IzWmxjaUJ2WW1wbFkzUWdhMlY1YzF4dUlDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnZZbW9wSUh0Y2JpQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxTENCclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdadUxtTmhiR3dvYm5Wc2JDd2diMkpxVzJ0bGVWMHNJR3RsZVN3Z2IySnFLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1THlvcVhHNGdLaUJCWTJObGNIUnpJSFpoY21GeVozTWdaWGh3WldOMGFXNW5JR1ZoWTJnZ1lYSm5kVzFsYm5RZ2RHOGdZbVVnWVc0Z2IySnFaV04wTENCMGFHVnVYRzRnS2lCcGJXMTFkR0ZpYkhrZ2JXVnlaMlZ6SUhSb1pTQndjbTl3WlhKMGFXVnpJRzltSUdWaFkyZ2diMkpxWldOMElHRnVaQ0J5WlhSMWNtNXpJSEpsYzNWc2RDNWNiaUFxWEc0Z0tpQlhhR1Z1SUcxMWJIUnBjR3hsSUc5aWFtVmpkSE1nWTI5dWRHRnBiaUIwYUdVZ2MyRnRaU0JyWlhrZ2RHaGxJR3hoZEdWeUlHOWlhbVZqZENCcGJseHVJQ29nZEdobElHRnlaM1Z0Wlc1MGN5QnNhWE4wSUhkcGJHd2dkR0ZyWlNCd2NtVmpaV1JsYm1ObExseHVJQ3BjYmlBcUlFVjRZVzF3YkdVNlhHNGdLbHh1SUNvZ1lHQmdhbk5jYmlBcUlIWmhjaUJ5WlhOMWJIUWdQU0J0WlhKblpTaDdabTl2T2lBeE1qTjlMQ0I3Wm05dk9pQTBOVFo5S1R0Y2JpQXFJR052Ym5OdmJHVXViRzluS0hKbGMzVnNkQzVtYjI4cE95QXZMeUJ2ZFhSd2RYUnpJRFExTmx4dUlDb2dZR0JnWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzlpYWpFZ1QySnFaV04wSUhSdklHMWxjbWRsWEc0Z0tpQkFjbVYwZFhKdWN5QjdUMkpxWldOMGZTQlNaWE4xYkhRZ2IyWWdZV3hzSUcxbGNtZGxJSEJ5YjNCbGNuUnBaWE5jYmlBcUwxeHVablZ1WTNScGIyNGdiV1Z5WjJVb0x5b2diMkpxTVN3Z2IySnFNaXdnYjJKcU15d2dMaTR1SUNvdktTQjdYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQjdmVHRjYmlBZ1puVnVZM1JwYjI0Z1lYTnphV2R1Vm1Gc2RXVW9kbUZzTENCclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSEpsYzNWc2RGdHJaWGxkSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdjbVZ6ZFd4MFcydGxlVjBnUFNCdFpYSm5aU2h5WlhOMWJIUmJhMlY1WFN3Z2RtRnNLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwVzJ0bGVWMGdQU0IyWVd3N1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUd3Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBJRHdnYkRzZ2FTc3JLU0I3WEc0Z0lDQWdabTl5UldGamFDaGhjbWQxYldWdWRITmJhVjBzSUdGemMybG5ibFpoYkhWbEtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnpkV3gwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVoxYm1OMGFXOXVJR1Z4ZFdGc0lIUnZJRzFsY21kbElIZHBkR2dnZEdobElHUnBabVpsY21WdVkyVWdZbVZwYm1jZ2RHaGhkQ0J1YnlCeVpXWmxjbVZ1WTJWY2JpQXFJSFJ2SUc5eWFXZHBibUZzSUc5aWFtVmpkSE1nYVhNZ2EyVndkQzVjYmlBcVhHNGdLaUJBYzJWbElHMWxjbWRsWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IySnFNU0JQWW1wbFkzUWdkRzhnYldWeVoyVmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUZKbGMzVnNkQ0J2WmlCaGJHd2diV1Z5WjJVZ2NISnZjR1Z5ZEdsbGMxeHVJQ292WEc1bWRXNWpkR2x2YmlCa1pXVndUV1Z5WjJVb0x5b2diMkpxTVN3Z2IySnFNaXdnYjJKcU15d2dMaTR1SUNvdktTQjdYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQjdmVHRjYmlBZ1puVnVZM1JwYjI0Z1lYTnphV2R1Vm1Gc2RXVW9kbUZzTENCclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSEpsYzNWc2RGdHJaWGxkSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdkbUZzSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdjbVZ6ZFd4MFcydGxlVjBnUFNCa1pXVndUV1Z5WjJVb2NtVnpkV3gwVzJ0bGVWMHNJSFpoYkNrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnZG1Gc0lEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnY21WemRXeDBXMnRsZVYwZ1BTQmtaV1Z3VFdWeVoyVW9lMzBzSUhaaGJDazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGMzVnNkRnRyWlhsZElEMGdkbUZzTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTQThJR3c3SUdrckt5a2dlMXh1SUNBZ0lHWnZja1ZoWTJnb1lYSm5kVzFsYm5SelcybGRMQ0JoYzNOcFoyNVdZV3gxWlNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHVMeW9xWEc0Z0tpQkZlSFJsYm1SeklHOWlhbVZqZENCaElHSjVJRzExZEdGaWJIa2dZV1JrYVc1bklIUnZJR2wwSUhSb1pTQndjbTl3WlhKMGFXVnpJRzltSUc5aWFtVmpkQ0JpTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JoSUZSb1pTQnZZbXBsWTNRZ2RHOGdZbVVnWlhoMFpXNWtaV1JjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCaUlGUm9aU0J2WW1wbFkzUWdkRzhnWTI5d2VTQndjbTl3WlhKMGFXVnpJR1p5YjIxY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjBhR2x6UVhKbklGUm9aU0J2WW1wbFkzUWdkRzhnWW1sdVpDQm1kVzVqZEdsdmJpQjBiMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlNCVWFHVWdjbVZ6ZFd4MGFXNW5JSFpoYkhWbElHOW1JRzlpYW1WamRDQmhYRzRnS2k5Y2JtWjFibU4wYVc5dUlHVjRkR1Z1WkNoaExDQmlMQ0IwYUdselFYSm5LU0I3WEc0Z0lHWnZja1ZoWTJnb1lpd2dablZ1WTNScGIyNGdZWE56YVdkdVZtRnNkV1VvZG1Gc0xDQnJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjMEZ5WnlBbUppQjBlWEJsYjJZZ2RtRnNJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQmhXMnRsZVYwZ1BTQmlhVzVrS0haaGJDd2dkR2hwYzBGeVp5azdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdGYmEyVjVYU0E5SUhaaGJEdGNiaUFnSUNCOVhHNGdJSDBwTzF4dUlDQnlaWFIxY200Z1lUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNGdJR2x6UVhKeVlYazZJR2x6UVhKeVlYa3NYRzRnSUdselFYSnlZWGxDZFdabVpYSTZJR2x6UVhKeVlYbENkV1ptWlhJc1hHNGdJR2x6UW5WbVptVnlPaUJwYzBKMVptWmxjaXhjYmlBZ2FYTkdiM0p0UkdGMFlUb2dhWE5HYjNKdFJHRjBZU3hjYmlBZ2FYTkJjbkpoZVVKMVptWmxjbFpwWlhjNklHbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM0xGeHVJQ0JwYzFOMGNtbHVaem9nYVhOVGRISnBibWNzWEc0Z0lHbHpUblZ0WW1WeU9pQnBjMDUxYldKbGNpeGNiaUFnYVhOUFltcGxZM1E2SUdselQySnFaV04wTEZ4dUlDQnBjMVZ1WkdWbWFXNWxaRG9nYVhOVmJtUmxabWx1WldRc1hHNGdJR2x6UkdGMFpUb2dhWE5FWVhSbExGeHVJQ0JwYzBacGJHVTZJR2x6Um1sc1pTeGNiaUFnYVhOQ2JHOWlPaUJwYzBKc2IySXNYRzRnSUdselJuVnVZM1JwYjI0NklHbHpSblZ1WTNScGIyNHNYRzRnSUdselUzUnlaV0Z0T2lCcGMxTjBjbVZoYlN4Y2JpQWdhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTTZJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpMRnh1SUNCcGMxTjBZVzVrWVhKa1FuSnZkM05sY2tWdWRqb2dhWE5UZEdGdVpHRnlaRUp5YjNkelpYSkZibllzWEc0Z0lHWnZja1ZoWTJnNklHWnZja1ZoWTJnc1hHNGdJRzFsY21kbE9pQnRaWEpuWlN4Y2JpQWdaR1ZsY0UxbGNtZGxPaUJrWldWd1RXVnlaMlVzWEc0Z0lHVjRkR1Z1WkRvZ1pYaDBaVzVrTEZ4dUlDQjBjbWx0T2lCMGNtbHRYRzU5TzF4dUlpd2lMeThnTG1ScGNtNWhiV1VzSUM1aVlYTmxibUZ0WlN3Z1lXNWtJQzVsZUhSdVlXMWxJRzFsZEdodlpITWdZWEpsSUdWNGRISmhZM1JsWkNCbWNtOXRJRTV2WkdVdWFuTWdkamd1TVRFdU1TeGNiaTh2SUdKaFkydHdiM0owWldRZ1lXNWtJSFJ5WVc1emNHeHBkR1ZrSUhkcGRHZ2dRbUZpWld3c0lIZHBkR2dnWW1GamEzZGhjbVJ6TFdOdmJYQmhkQ0JtYVhobGMxeHVYRzR2THlCRGIzQjVjbWxuYUhRZ1NtOTVaVzUwTENCSmJtTXVJR0Z1WkNCdmRHaGxjaUJPYjJSbElHTnZiblJ5YVdKMWRHOXljeTVjYmk4dlhHNHZMeUJRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZVnh1THk4Z1kyOXdlU0J2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHUnZZM1Z0Wlc1MFlYUnBiMjRnWm1sc1pYTWdLSFJvWlZ4dUx5OGdYQ0pUYjJaMGQyRnlaVndpS1N3Z2RHOGdaR1ZoYkNCcGJpQjBhR1VnVTI5bWRIZGhjbVVnZDJsMGFHOTFkQ0J5WlhOMGNtbGpkR2x2Yml3Z2FXNWpiSFZrYVc1blhHNHZMeUIzYVhSb2IzVjBJR3hwYldsMFlYUnBiMjRnZEdobElISnBaMmgwY3lCMGJ5QjFjMlVzSUdOdmNIa3NJRzF2WkdsbWVTd2diV1Z5WjJVc0lIQjFZbXhwYzJnc1hHNHZMeUJrYVhOMGNtbGlkWFJsTENCemRXSnNhV05sYm5ObExDQmhibVF2YjNJZ2MyVnNiQ0JqYjNCcFpYTWdiMllnZEdobElGTnZablIzWVhKbExDQmhibVFnZEc4Z2NHVnliV2wwWEc0dkx5QndaWEp6YjI1eklIUnZJSGRvYjIwZ2RHaGxJRk52Wm5SM1lYSmxJR2x6SUdaMWNtNXBjMmhsWkNCMGJ5QmtieUJ6Ynl3Z2MzVmlhbVZqZENCMGJ5QjBhR1ZjYmk4dklHWnZiR3h2ZDJsdVp5QmpiMjVrYVhScGIyNXpPbHh1THk5Y2JpOHZJRlJvWlNCaFltOTJaU0JqYjNCNWNtbG5hSFFnYm05MGFXTmxJR0Z1WkNCMGFHbHpJSEJsY20xcGMzTnBiMjRnYm05MGFXTmxJSE5vWVd4c0lHSmxJR2x1WTJ4MVpHVmtYRzR2THlCcGJpQmhiR3dnWTI5d2FXVnpJRzl5SUhOMVluTjBZVzUwYVdGc0lIQnZjblJwYjI1eklHOW1JSFJvWlNCVGIyWjBkMkZ5WlM1Y2JpOHZYRzR2THlCVVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVFhHNHZMeUJQVWlCSlRWQk1TVVZFTENCSlRrTk1WVVJKVGtjZ1FsVlVJRTVQVkNCTVNVMUpWRVZFSUZSUElGUklSU0JYUVZKU1FVNVVTVVZUSUU5R1hHNHZMeUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NJRVpKVkU1RlUxTWdSazlTSUVFZ1VFRlNWRWxEVlV4QlVpQlFWVkpRVDFORklFRk9SQ0JPVDA1SlRrWlNTVTVIUlUxRlRsUXVJRWxPWEc0dkx5Qk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVWdRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTeGNiaTh2SUVSQlRVRkhSVk1nVDFJZ1QxUklSVklnVEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVbHh1THk4Z1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzSUU5VlZDQlBSaUJQVWlCSlRpQkRUMDVPUlVOVVNVOU9JRmRKVkVnZ1ZFaEZJRk5QUmxSWFFWSkZJRTlTSUZSSVJWeHVMeThnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9JRlJJUlNCVFQwWlVWMEZTUlM1Y2JseHVMeThnY21WemIyeDJaWE1nTGlCaGJtUWdMaTRnWld4bGJXVnVkSE1nYVc0Z1lTQndZWFJvSUdGeWNtRjVJSGRwZEdnZ1pHbHlaV04wYjNKNUlHNWhiV1Z6SUhSb1pYSmxYRzR2THlCdGRYTjBJR0psSUc1dklITnNZWE5vWlhNc0lHVnRjSFI1SUdWc1pXMWxiblJ6TENCdmNpQmtaWFpwWTJVZ2JtRnRaWE1nS0dNNlhGd3BJR2x1SUhSb1pTQmhjbkpoZVZ4dUx5OGdLSE52SUdGc2MyOGdibThnYkdWaFpHbHVaeUJoYm1RZ2RISmhhV3hwYm1jZ2MyeGhjMmhsY3lBdElHbDBJR1J2WlhNZ2JtOTBJR1JwYzNScGJtZDFhWE5vWEc0dkx5QnlaV3hoZEdsMlpTQmhibVFnWVdKemIyeDFkR1VnY0dGMGFITXBYRzVtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZCY25KaGVTaHdZWEowY3l3Z1lXeHNiM2RCWW05MlpWSnZiM1FwSUh0Y2JpQWdMeThnYVdZZ2RHaGxJSEJoZEdnZ2RISnBaWE1nZEc4Z1oyOGdZV0p2ZG1VZ2RHaGxJSEp2YjNRc0lHQjFjR0FnWlc1a2N5QjFjQ0ErSURCY2JpQWdkbUZ5SUhWd0lEMGdNRHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJSEJoY25SekxteGxibWQwYUNBdElERTdJR2tnUGowZ01Ec2dhUzB0S1NCN1hHNGdJQ0FnZG1GeUlHeGhjM1FnUFNCd1lYSjBjMXRwWFR0Y2JpQWdJQ0JwWmlBb2JHRnpkQ0E5UFQwZ0p5NG5LU0I3WEc0Z0lDQWdJQ0J3WVhKMGN5NXpjR3hwWTJVb2FTd2dNU2s3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hzWVhOMElEMDlQU0FuTGk0bktTQjdYRzRnSUNBZ0lDQndZWEowY3k1emNHeHBZMlVvYVN3Z01TazdYRzRnSUNBZ0lDQjFjQ3NyTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZFhBcElIdGNiaUFnSUNBZ0lIQmhjblJ6TG5Od2JHbGpaU2hwTENBeEtUdGNiaUFnSUNBZ0lIVndMUzA3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHk4Z2FXWWdkR2hsSUhCaGRHZ2dhWE1nWVd4c2IzZGxaQ0IwYnlCbmJ5QmhZbTkyWlNCMGFHVWdjbTl2ZEN3Z2NtVnpkRzl5WlNCc1pXRmthVzVuSUM0dWMxeHVJQ0JwWmlBb1lXeHNiM2RCWW05MlpWSnZiM1FwSUh0Y2JpQWdJQ0JtYjNJZ0tEc2dkWEF0TFRzZ2RYQXBJSHRjYmlBZ0lDQWdJSEJoY25SekxuVnVjMmhwWm5Rb0p5NHVKeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEJoY25Sek8xeHVmVnh1WEc0dkx5QndZWFJvTG5KbGMyOXNkbVVvVzJaeWIyMGdMaTR1WFN3Z2RHOHBYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYRzVsZUhCdmNuUnpMbkpsYzI5c2RtVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhKbGMyOXNkbVZrVUdGMGFDQTlJQ2NuTEZ4dUlDQWdJQ0FnY21WemIyeDJaV1JCWW5OdmJIVjBaU0E5SUdaaGJITmxPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F0TVNBbUppQWhjbVZ6YjJ4MlpXUkJZbk52YkhWMFpUc2dhUzB0S1NCN1hHNGdJQ0FnZG1GeUlIQmhkR2dnUFNBb2FTQStQU0F3S1NBL0lHRnlaM1Z0Wlc1MGMxdHBYU0E2SUhCeWIyTmxjM011WTNka0tDazdYRzVjYmlBZ0lDQXZMeUJUYTJsd0lHVnRjSFI1SUdGdVpDQnBiblpoYkdsa0lHVnVkSEpwWlhOY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhCaGRHZ2dJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXlaWE52YkhabElHMTFjM1FnWW1VZ2MzUnlhVzVuY3ljcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lYQmhkR2dwSUh0Y2JpQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzI5c2RtVmtVR0YwYUNBOUlIQmhkR2dnS3lBbkx5Y2dLeUJ5WlhOdmJIWmxaRkJoZEdnN1hHNGdJQ0FnY21WemIyeDJaV1JCWW5OdmJIVjBaU0E5SUhCaGRHZ3VZMmhoY2tGMEtEQXBJRDA5UFNBbkx5YzdYRzRnSUgxY2JseHVJQ0F2THlCQmRDQjBhR2x6SUhCdmFXNTBJSFJvWlNCd1lYUm9JSE5vYjNWc1pDQmlaU0J5WlhOdmJIWmxaQ0IwYnlCaElHWjFiR3dnWVdKemIyeDFkR1VnY0dGMGFDd2dZblYwWEc0Z0lDOHZJR2hoYm1Sc1pTQnlaV3hoZEdsMlpTQndZWFJvY3lCMGJ5QmlaU0J6WVdabElDaHRhV2RvZENCb1lYQndaVzRnZDJobGJpQndjbTlqWlhOekxtTjNaQ2dwSUdaaGFXeHpLVnh1WEc0Z0lDOHZJRTV2Y20xaGJHbDZaU0IwYUdVZ2NHRjBhRnh1SUNCeVpYTnZiSFpsWkZCaGRHZ2dQU0J1YjNKdFlXeHBlbVZCY25KaGVTaG1hV3gwWlhJb2NtVnpiMngyWldSUVlYUm9Mbk53YkdsMEtDY3ZKeWtzSUdaMWJtTjBhVzl1S0hBcElIdGNiaUFnSUNCeVpYUjFjbTRnSVNGd08xeHVJQ0I5S1N3Z0lYSmxjMjlzZG1Wa1FXSnpiMngxZEdVcExtcHZhVzRvSnk4bktUdGNibHh1SUNCeVpYUjFjbTRnS0NoeVpYTnZiSFpsWkVGaWMyOXNkWFJsSUQ4Z0p5OG5JRG9nSnljcElDc2djbVZ6YjJ4MlpXUlFZWFJvS1NCOGZDQW5MaWM3WEc1OU8xeHVYRzR2THlCd1lYUm9MbTV2Y20xaGJHbDZaU2h3WVhSb0tWeHVMeThnY0c5emFYZ2dkbVZ5YzJsdmJseHVaWGh3YjNKMGN5NXViM0p0WVd4cGVtVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYRzRnSUhaaGNpQnBjMEZpYzI5c2RYUmxJRDBnWlhod2IzSjBjeTVwYzBGaWMyOXNkWFJsS0hCaGRHZ3BMRnh1SUNBZ0lDQWdkSEpoYVd4cGJtZFRiR0Z6YUNBOUlITjFZbk4wY2lod1lYUm9MQ0F0TVNrZ1BUMDlJQ2N2Snp0Y2JseHVJQ0F2THlCT2IzSnRZV3hwZW1VZ2RHaGxJSEJoZEdoY2JpQWdjR0YwYUNBOUlHNXZjbTFoYkdsNlpVRnljbUY1S0dacGJIUmxjaWh3WVhSb0xuTndiR2wwS0Njdkp5a3NJR1oxYm1OMGFXOXVLSEFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdJU0Z3TzF4dUlDQjlLU3dnSVdselFXSnpiMngxZEdVcExtcHZhVzRvSnk4bktUdGNibHh1SUNCcFppQW9JWEJoZEdnZ0ppWWdJV2x6UVdKemIyeDFkR1VwSUh0Y2JpQWdJQ0J3WVhSb0lEMGdKeTRuTzF4dUlDQjlYRzRnSUdsbUlDaHdZWFJvSUNZbUlIUnlZV2xzYVc1blUyeGhjMmdwSUh0Y2JpQWdJQ0J3WVhSb0lDczlJQ2N2Snp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlBb2FYTkJZbk52YkhWMFpTQS9JQ2N2SnlBNklDY25LU0FySUhCaGRHZzdYRzU5TzF4dVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhHNWxlSEJ2Y25SekxtbHpRV0p6YjJ4MWRHVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYRzRnSUhKbGRIVnliaUJ3WVhSb0xtTm9ZWEpCZENnd0tTQTlQVDBnSnk4bk8xeHVmVHRjYmx4dUx5OGdjRzl6YVhnZ2RtVnljMmx2Ymx4dVpYaHdiM0owY3k1cWIybHVJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSFpoY2lCd1lYUm9jeUE5SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzV6YkdsalpTNWpZV3hzS0dGeVozVnRaVzUwY3l3Z01DazdYRzRnSUhKbGRIVnliaUJsZUhCdmNuUnpMbTV2Y20xaGJHbDZaU2htYVd4MFpYSW9jR0YwYUhNc0lHWjFibU4wYVc5dUtIQXNJR2x1WkdWNEtTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQndJQ0U5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUnpJSFJ2SUhCaGRHZ3VhbTlwYmlCdGRYTjBJR0psSUhOMGNtbHVaM01uS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIQTdYRzRnSUgwcExtcHZhVzRvSnk4bktTazdYRzU5TzF4dVhHNWNiaTh2SUhCaGRHZ3VjbVZzWVhScGRtVW9abkp2YlN3Z2RHOHBYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYRzVsZUhCdmNuUnpMbkpsYkdGMGFYWmxJRDBnWm5WdVkzUnBiMjRvWm5KdmJTd2dkRzhwSUh0Y2JpQWdabkp2YlNBOUlHVjRjRzl5ZEhNdWNtVnpiMngyWlNobWNtOXRLUzV6ZFdKemRISW9NU2s3WEc0Z0lIUnZJRDBnWlhod2IzSjBjeTV5WlhOdmJIWmxLSFJ2S1M1emRXSnpkSElvTVNrN1hHNWNiaUFnWm5WdVkzUnBiMjRnZEhKcGJTaGhjbklwSUh0Y2JpQWdJQ0IyWVhJZ2MzUmhjblFnUFNBd08xeHVJQ0FnSUdadmNpQW9PeUJ6ZEdGeWRDQThJR0Z5Y2k1c1pXNW5kR2c3SUhOMFlYSjBLeXNwSUh0Y2JpQWdJQ0FnSUdsbUlDaGhjbkpiYzNSaGNuUmRJQ0U5UFNBbkp5a2dZbkpsWVdzN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHVnVaQ0E5SUdGeWNpNXNaVzVuZEdnZ0xTQXhPMXh1SUNBZ0lHWnZjaUFvT3lCbGJtUWdQajBnTURzZ1pXNWtMUzBwSUh0Y2JpQWdJQ0FnSUdsbUlDaGhjbkpiWlc1a1hTQWhQVDBnSnljcElHSnlaV0ZyTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoemRHRnlkQ0ErSUdWdVpDa2djbVYwZFhKdUlGdGRPMXh1SUNBZ0lISmxkSFZ5YmlCaGNuSXVjMnhwWTJVb2MzUmhjblFzSUdWdVpDQXRJSE4wWVhKMElDc2dNU2s3WEc0Z0lIMWNibHh1SUNCMllYSWdabkp2YlZCaGNuUnpJRDBnZEhKcGJTaG1jbTl0TG5Od2JHbDBLQ2N2SnlrcE8xeHVJQ0IyWVhJZ2RHOVFZWEowY3lBOUlIUnlhVzBvZEc4dWMzQnNhWFFvSnk4bktTazdYRzVjYmlBZ2RtRnlJR3hsYm1kMGFDQTlJRTFoZEdndWJXbHVLR1p5YjIxUVlYSjBjeTVzWlc1bmRHZ3NJSFJ2VUdGeWRITXViR1Z1WjNSb0tUdGNiaUFnZG1GeUlITmhiV1ZRWVhKMGMweGxibWQwYUNBOUlHeGxibWQwYUR0Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUdsbUlDaG1jbTl0VUdGeWRITmJhVjBnSVQwOUlIUnZVR0Z5ZEhOYmFWMHBJSHRjYmlBZ0lDQWdJSE5oYldWUVlYSjBjMHhsYm1kMGFDQTlJR2s3WEc0Z0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQjJZWElnYjNWMGNIVjBVR0Z5ZEhNZ1BTQmJYVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJSE5oYldWUVlYSjBjMHhsYm1kMGFEc2dhU0E4SUdaeWIyMVFZWEowY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lHOTFkSEIxZEZCaGNuUnpMbkIxYzJnb0p5NHVKeWs3WEc0Z0lIMWNibHh1SUNCdmRYUndkWFJRWVhKMGN5QTlJRzkxZEhCMWRGQmhjblJ6TG1OdmJtTmhkQ2gwYjFCaGNuUnpMbk5zYVdObEtITmhiV1ZRWVhKMGMweGxibWQwYUNrcE8xeHVYRzRnSUhKbGRIVnliaUJ2ZFhSd2RYUlFZWEowY3k1cWIybHVLQ2N2SnlrN1hHNTlPMXh1WEc1bGVIQnZjblJ6TG5ObGNDQTlJQ2N2Snp0Y2JtVjRjRzl5ZEhNdVpHVnNhVzFwZEdWeUlEMGdKem9uTzF4dVhHNWxlSEJ2Y25SekxtUnBjbTVoYldVZ1BTQm1kVzVqZEdsdmJpQW9jR0YwYUNrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUhCaGRHZ2dJVDA5SUNkemRISnBibWNuS1NCd1lYUm9JRDBnY0dGMGFDQXJJQ2NuTzF4dUlDQnBaaUFvY0dGMGFDNXNaVzVuZEdnZ1BUMDlJREFwSUhKbGRIVnliaUFuTGljN1hHNGdJSFpoY2lCamIyUmxJRDBnY0dGMGFDNWphR0Z5UTI5a1pVRjBLREFwTzF4dUlDQjJZWElnYUdGelVtOXZkQ0E5SUdOdlpHVWdQVDA5SURRM0lDOHFMeW92TzF4dUlDQjJZWElnWlc1a0lEMGdMVEU3WEc0Z0lIWmhjaUJ0WVhSamFHVmtVMnhoYzJnZ1BTQjBjblZsTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnY0dGMGFDNXNaVzVuZEdnZ0xTQXhPeUJwSUQ0OUlERTdJQzB0YVNrZ2UxeHVJQ0FnSUdOdlpHVWdQU0J3WVhSb0xtTm9ZWEpEYjJSbFFYUW9hU2s3WEc0Z0lDQWdhV1lnS0dOdlpHVWdQVDA5SURRM0lDOHFMeW92S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doYldGMFkyaGxaRk5zWVhOb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWlc1a0lEMGdhVHRjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2SUZkbElITmhkeUIwYUdVZ1ptbHljM1FnYm05dUxYQmhkR2dnYzJWd1lYSmhkRzl5WEc0Z0lDQWdJQ0J0WVhSamFHVmtVMnhoYzJnZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUQwOVBTQXRNU2tnY21WMGRYSnVJR2hoYzFKdmIzUWdQeUFuTHljZ09pQW5MaWM3WEc0Z0lHbG1JQ2hvWVhOU2IyOTBJQ1ltSUdWdVpDQTlQVDBnTVNrZ2UxeHVJQ0FnSUM4dklISmxkSFZ5YmlBbkx5OG5PMXh1SUNBZ0lDOHZJRUpoWTJ0M1lYSmtjeTFqYjIxd1lYUWdabWw0T2x4dUlDQWdJSEpsZEhWeWJpQW5MeWM3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEJoZEdndWMyeHBZMlVvTUN3Z1pXNWtLVHRjYm4wN1hHNWNibVoxYm1OMGFXOXVJR0poYzJWdVlXMWxLSEJoZEdncElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCd1lYUm9JQ0U5UFNBbmMzUnlhVzVuSnlrZ2NHRjBhQ0E5SUhCaGRHZ2dLeUFuSnp0Y2JseHVJQ0IyWVhJZ2MzUmhjblFnUFNBd08xeHVJQ0IyWVhJZ1pXNWtJRDBnTFRFN1hHNGdJSFpoY2lCdFlYUmphR1ZrVTJ4aGMyZ2dQU0IwY25WbE8xeHVJQ0IyWVhJZ2FUdGNibHh1SUNCbWIzSWdLR2tnUFNCd1lYUm9MbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnTFMxcEtTQjdYRzRnSUNBZ2FXWWdLSEJoZEdndVkyaGhja052WkdWQmRDaHBLU0E5UFQwZ05EY2dMeW92S2k4cElIdGNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdjbVZoWTJobFpDQmhJSEJoZEdnZ2MyVndZWEpoZEc5eUlIUm9ZWFFnZDJGeklHNXZkQ0J3WVhKMElHOW1JR0VnYzJWMElHOW1JSEJoZEdoY2JpQWdJQ0FnSUNBZ0x5OGdjMlZ3WVhKaGRHOXljeUJoZENCMGFHVWdaVzVrSUc5bUlIUm9aU0J6ZEhKcGJtY3NJSE4wYjNBZ2JtOTNYRzRnSUNBZ0lDQWdJR2xtSUNnaGJXRjBZMmhsWkZOc1lYTm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUmhjblFnUFNCcElDc2dNVHRjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNCbGJITmxJR2xtSUNobGJtUWdQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQXZMeUJYWlNCellYY2dkR2hsSUdacGNuTjBJRzV2Ymkxd1lYUm9JSE5sY0dGeVlYUnZjaXdnYldGeWF5QjBhR2x6SUdGeklIUm9aU0JsYm1RZ2IyWWdiM1Z5WEc0Z0lDQWdJQ0F2THlCd1lYUm9JR052YlhCdmJtVnVkRnh1SUNBZ0lDQWdiV0YwWTJobFpGTnNZWE5vSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0JsYm1RZ1BTQnBJQ3NnTVR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUQwOVBTQXRNU2tnY21WMGRYSnVJQ2NuTzF4dUlDQnlaWFIxY200Z2NHRjBhQzV6YkdsalpTaHpkR0Z5ZEN3Z1pXNWtLVHRjYm4xY2JseHVMeThnVlhObGN5QmhJRzFwZUdWa0lHRndjSEp2WVdOb0lHWnZjaUJpWVdOcmQyRnlaSE10WTI5dGNHRjBhV0pwYkdsMGVTd2dZWE1nWlhoMElHSmxhR0YyYVc5eUlHTm9ZVzVuWldSY2JpOHZJR2x1SUc1bGR5Qk9iMlJsTG1weklIWmxjbk5wYjI1ekxDQnpieUJ2Ym14NUlHSmhjMlZ1WVcxbEtDa2dZV0p2ZG1VZ2FYTWdZbUZqYTNCdmNuUmxaQ0JvWlhKbFhHNWxlSEJ2Y25SekxtSmhjMlZ1WVcxbElEMGdablZ1WTNScGIyNGdLSEJoZEdnc0lHVjRkQ2tnZTF4dUlDQjJZWElnWmlBOUlHSmhjMlZ1WVcxbEtIQmhkR2dwTzF4dUlDQnBaaUFvWlhoMElDWW1JR1l1YzNWaWMzUnlLQzB4SUNvZ1pYaDBMbXhsYm1kMGFDa2dQVDA5SUdWNGRDa2dlMXh1SUNBZ0lHWWdQU0JtTG5OMVluTjBjaWd3TENCbUxteGxibWQwYUNBdElHVjRkQzVzWlc1bmRHZ3BPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQm1PMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NWxlSFJ1WVcxbElEMGdablZ1WTNScGIyNGdLSEJoZEdncElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCd1lYUm9JQ0U5UFNBbmMzUnlhVzVuSnlrZ2NHRjBhQ0E5SUhCaGRHZ2dLeUFuSnp0Y2JpQWdkbUZ5SUhOMFlYSjBSRzkwSUQwZ0xURTdYRzRnSUhaaGNpQnpkR0Z5ZEZCaGNuUWdQU0F3TzF4dUlDQjJZWElnWlc1a0lEMGdMVEU3WEc0Z0lIWmhjaUJ0WVhSamFHVmtVMnhoYzJnZ1BTQjBjblZsTzF4dUlDQXZMeUJVY21GamF5QjBhR1VnYzNSaGRHVWdiMllnWTJoaGNtRmpkR1Z5Y3lBb2FXWWdZVzU1S1NCM1pTQnpaV1VnWW1WbWIzSmxJRzkxY2lCbWFYSnpkQ0JrYjNRZ1lXNWtYRzRnSUM4dklHRm1kR1Z5SUdGdWVTQndZWFJvSUhObGNHRnlZWFJ2Y2lCM1pTQm1hVzVrWEc0Z0lIWmhjaUJ3Y21WRWIzUlRkR0YwWlNBOUlEQTdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQndZWFJvTG14bGJtZDBhQ0F0SURFN0lHa2dQajBnTURzZ0xTMXBLU0I3WEc0Z0lDQWdkbUZ5SUdOdlpHVWdQU0J3WVhSb0xtTm9ZWEpEYjJSbFFYUW9hU2s3WEc0Z0lDQWdhV1lnS0dOdlpHVWdQVDA5SURRM0lDOHFMeW92S1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhkbElISmxZV05vWldRZ1lTQndZWFJvSUhObGNHRnlZWFJ2Y2lCMGFHRjBJSGRoY3lCdWIzUWdjR0Z5ZENCdlppQmhJSE5sZENCdlppQndZWFJvWEc0Z0lDQWdJQ0FnSUM4dklITmxjR0Z5WVhSdmNuTWdZWFFnZEdobElHVnVaQ0J2WmlCMGFHVWdjM1J5YVc1bkxDQnpkRzl3SUc1dmQxeHVJQ0FnSUNBZ0lDQnBaaUFvSVcxaGRHTm9aV1JUYkdGemFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhOMFlYSjBVR0Z5ZENBOUlHa2dLeUF4TzF4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTnZiblJwYm5WbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUdsbUlDaGxibVFnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0F2THlCWFpTQnpZWGNnZEdobElHWnBjbk4wSUc1dmJpMXdZWFJvSUhObGNHRnlZWFJ2Y2l3Z2JXRnlheUIwYUdseklHRnpJSFJvWlNCbGJtUWdiMllnYjNWeVhHNGdJQ0FnSUNBdkx5QmxlSFJsYm5OcGIyNWNiaUFnSUNBZ0lHMWhkR05vWldSVGJHRnphQ0E5SUdaaGJITmxPMXh1SUNBZ0lDQWdaVzVrSUQwZ2FTQXJJREU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hqYjJSbElEMDlQU0EwTmlBdktpNHFMeWtnZTF4dUlDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJRzkxY2lCbWFYSnpkQ0JrYjNRc0lHMWhjbXNnYVhRZ1lYTWdkR2hsSUhOMFlYSjBJRzltSUc5MWNpQmxlSFJsYm5OcGIyNWNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYSjBSRzkwSUQwOVBTQXRNU2xjYmlBZ0lDQWdJQ0FnSUNCemRHRnlkRVJ2ZENBOUlHazdYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSEJ5WlVSdmRGTjBZWFJsSUNFOVBTQXhLVnh1SUNBZ0lDQWdJQ0FnSUhCeVpVUnZkRk4wWVhSbElEMGdNVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSE4wWVhKMFJHOTBJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdMeThnVjJVZ2MyRjNJR0VnYm05dUxXUnZkQ0JoYm1RZ2JtOXVMWEJoZEdnZ2MyVndZWEpoZEc5eUlHSmxabTl5WlNCdmRYSWdaRzkwTENCemJ5QjNaU0J6YUc5MWJHUmNiaUFnSUNBZ0lDOHZJR2hoZG1VZ1lTQm5iMjlrSUdOb1lXNWpaU0JoZENCb1lYWnBibWNnWVNCdWIyNHRaVzF3ZEhrZ1pYaDBaVzV6YVc5dVhHNGdJQ0FnSUNCd2NtVkViM1JUZEdGMFpTQTlJQzB4TzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpkR0Z5ZEVSdmRDQTlQVDBnTFRFZ2ZId2daVzVrSUQwOVBTQXRNU0I4ZkZ4dUlDQWdJQ0FnTHk4Z1YyVWdjMkYzSUdFZ2JtOXVMV1J2ZENCamFHRnlZV04wWlhJZ2FXMXRaV1JwWVhSbGJIa2dZbVZtYjNKbElIUm9aU0JrYjNSY2JpQWdJQ0FnSUhCeVpVUnZkRk4wWVhSbElEMDlQU0F3SUh4OFhHNGdJQ0FnSUNBdkx5QlVhR1VnS0hKcFoyaDBMVzF2YzNRcElIUnlhVzF0WldRZ2NHRjBhQ0JqYjIxd2IyNWxiblFnYVhNZ1pYaGhZM1JzZVNBbkxpNG5YRzRnSUNBZ0lDQndjbVZFYjNSVGRHRjBaU0E5UFQwZ01TQW1KaUJ6ZEdGeWRFUnZkQ0E5UFQwZ1pXNWtJQzBnTVNBbUppQnpkR0Z5ZEVSdmRDQTlQVDBnYzNSaGNuUlFZWEowSUNzZ01Ta2dlMXh1SUNBZ0lISmxkSFZ5YmlBbkp6dGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NHRjBhQzV6YkdsalpTaHpkR0Z5ZEVSdmRDd2daVzVrS1R0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUdacGJIUmxjaUFvZUhNc0lHWXBJSHRjYmlBZ0lDQnBaaUFvZUhNdVptbHNkR1Z5S1NCeVpYUjFjbTRnZUhNdVptbHNkR1Z5S0dZcE8xeHVJQ0FnSUhaaGNpQnlaWE1nUFNCYlhUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIaHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2htS0hoelcybGRMQ0JwTENCNGN5a3BJSEpsY3k1d2RYTm9LSGh6VzJsZEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsY3p0Y2JuMWNibHh1THk4Z1UzUnlhVzVuTG5CeWIzUnZkSGx3WlM1emRXSnpkSElnTFNCdVpXZGhkR2wyWlNCcGJtUmxlQ0JrYjI0bmRDQjNiM0pySUdsdUlFbEZPRnh1ZG1GeUlITjFZbk4wY2lBOUlDZGhZaWN1YzNWaWMzUnlLQzB4S1NBOVBUMGdKMkluWEc0Z0lDQWdQeUJtZFc1amRHbHZiaUFvYzNSeUxDQnpkR0Z5ZEN3Z2JHVnVLU0I3SUhKbGRIVnliaUJ6ZEhJdWMzVmljM1J5S0hOMFlYSjBMQ0JzWlc0cElIMWNiaUFnSUNBNklHWjFibU4wYVc5dUlDaHpkSElzSUhOMFlYSjBMQ0JzWlc0cElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYSjBJRHdnTUNrZ2MzUmhjblFnUFNCemRISXViR1Z1WjNSb0lDc2djM1JoY25RN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemRISXVjM1ZpYzNSeUtITjBZWEowTENCc1pXNHBPMXh1SUNBZ0lIMWNianRjYmlJc0lpOHZJSE5vYVcwZ1ptOXlJSFZ6YVc1bklIQnliMk5sYzNNZ2FXNGdZbkp2ZDNObGNseHVkbUZ5SUhCeWIyTmxjM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0OU8xeHVYRzR2THlCallXTm9aV1FnWm5KdmJTQjNhR0YwWlhabGNpQm5iRzlpWVd3Z2FYTWdjSEpsYzJWdWRDQnpieUIwYUdGMElIUmxjM1FnY25WdWJtVnljeUIwYUdGMElITjBkV0lnYVhSY2JpOHZJR1J2YmlkMElHSnlaV0ZySUhSb2FXNW5jeTRnSUVKMWRDQjNaU0J1WldWa0lIUnZJSGR5WVhBZ2FYUWdhVzRnWVNCMGNua2dZMkYwWTJnZ2FXNGdZMkZ6WlNCcGRDQnBjMXh1THk4Z2QzSmhjSEJsWkNCcGJpQnpkSEpwWTNRZ2JXOWtaU0JqYjJSbElIZG9hV05vSUdSdlpYTnVKM1FnWkdWbWFXNWxJR0Z1ZVNCbmJHOWlZV3h6TGlBZ1NYUW5jeUJwYm5OcFpHVWdZVnh1THk4Z1puVnVZM1JwYjI0Z1ltVmpZWFZ6WlNCMGNua3ZZMkYwWTJobGN5QmtaVzl3ZEdsdGFYcGxJR2x1SUdObGNuUmhhVzRnWlc1bmFXNWxjeTVjYmx4dWRtRnlJR05oWTJobFpGTmxkRlJwYldWdmRYUTdYRzUyWVhJZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWME8xeHVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBVMlYwVkdsdGIzVjBLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jMlYwVkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENBb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkamJHVmhjbFJwYldWdmRYUWdhR0Z6SUc1dmRDQmlaV1Z1SUdSbFptbHVaV1FuS1R0Y2JuMWNiaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJ6WlhSVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamJHVmhjbFJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUkRiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdmVnh1ZlNBb0tTbGNibVoxYm1OMGFXOXVJSEoxYmxScGJXVnZkWFFvWm5WdUtTQjdYRzRnSUNBZ2FXWWdLR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUhObGRGUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwSUh4OElDRmpZV05vWldSVFpYUlVhVzFsYjNWMEtTQW1KaUJ6WlhSVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0F2THlCM2FHVnVJSGRvWlc0Z2MyOXRaV0p2WkhrZ2FHRnpJSE5qY21WM1pXUWdkMmwwYUNCelpYUlVhVzFsYjNWMElHSjFkQ0J1YnlCSkxrVXVJRzFoWkdSdVpYTnpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENCMGNuVnpkQ0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0IzYUdWdUlHTmhiR3hsWkNCdWIzSnRZV3hzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1OVhHNW1kVzVqZEdsdmJpQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWTJ4bFlYSlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJQzh2SUdsbUlHTnNaV0Z5VkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZENCOGZDQWhZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLU0FtSmlCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMkZ0WlNCaGN5QmhZbTkyWlNCaWRYUWdkMmhsYmlCcGRDZHpJR0VnZG1WeWMybHZiaUJ2WmlCSkxrVXVJSFJvWVhRZ2JYVnpkQ0JvWVhabElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElHWnZjaUFuZEdocGN5Y3NJR2h2Y0daMWJHeDVJRzkxY2lCamIyNTBaWGgwSUdOdmNuSmxZM1FnYjNSb1pYSjNhWE5sSUdsMElIZHBiR3dnZEdoeWIzY2dZU0JuYkc5aVlXd2daWEp5YjNJdVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCVGIyMWxJSFpsY25OcGIyNXpJRzltSUVrdVJTNGdhR0YyWlNCa2FXWm1aWEpsYm5RZ2NuVnNaWE1nWm05eUlHTnNaV0Z5VkdsdFpXOTFkQ0IyY3lCelpYUlVhVzFsYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2RHaHBjeXdnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dVhHNWNibjFjYm5aaGNpQnhkV1YxWlNBOUlGdGRPMXh1ZG1GeUlHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNTJZWElnWTNWeWNtVnVkRkYxWlhWbE8xeHVkbUZ5SUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmx4dVpuVnVZM1JwYjI0Z1kyeGxZVzVWY0U1bGVIUlVhV05yS0NrZ2UxeHVJQ0FnSUdsbUlDZ2haSEpoYVc1cGJtY2dmSHdnSVdOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmpkWEp5Wlc1MFVYVmxkV1V1WTI5dVkyRjBLSEYxWlhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdaSEpoYVc1UmRXVjFaU2dwTzF4dUlDQWdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdaSEpoYVc1UmRXVjFaU2dwSUh0Y2JpQWdJQ0JwWmlBb1pISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2RHbHRaVzkxZENBOUlISjFibFJwYldWdmRYUW9ZMnhsWVc1VmNFNWxlSFJVYVdOcktUdGNiaUFnSUNCa2NtRnBibWx1WnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUhkb2FXeGxLR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCeGRXVjFaVHRjYmlBZ0lDQWdJQ0FnY1hWbGRXVWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmNYVmxkV1ZKYm1SbGVDQThJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpWdHhkV1YxWlVsdVpHVjRYUzV5ZFc0b0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJQ0FnSUNBZ0lHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNGdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdiblZzYkR0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1SUNBZ0lISjFia05zWldGeVZHbHRaVzkxZENoMGFXMWxiM1YwS1R0Y2JuMWNibHh1Y0hKdlkyVnpjeTV1WlhoMFZHbGpheUE5SUdaMWJtTjBhVzl1SUNobWRXNHBJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhjbWR6VzJrZ0xTQXhYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCeGRXVjFaUzV3ZFhOb0tHNWxkeUJKZEdWdEtHWjFiaXdnWVhKbmN5a3BPMXh1SUNBZ0lHbG1JQ2h4ZFdWMVpTNXNaVzVuZEdnZ1BUMDlJREVnSmlZZ0lXUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEoxYmxScGJXVnZkWFFvWkhKaGFXNVJkV1YxWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z2RqZ2diR2xyWlhNZ2NISmxaR2xqZEdsaWJHVWdiMkpxWldOMGMxeHVablZ1WTNScGIyNGdTWFJsYlNobWRXNHNJR0Z5Y21GNUtTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0Z1BTQm1kVzQ3WEc0Z0lDQWdkR2hwY3k1aGNuSmhlU0E5SUdGeWNtRjVPMXh1ZlZ4dVNYUmxiUzV3Y205MGIzUjVjR1V1Y25WdUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVMbUZ3Y0d4NUtHNTFiR3dzSUhSb2FYTXVZWEp5WVhrcE8xeHVmVHRjYm5CeWIyTmxjM011ZEdsMGJHVWdQU0FuWW5KdmQzTmxjaWM3WEc1d2NtOWpaWE56TG1KeWIzZHpaWElnUFNCMGNuVmxPMXh1Y0hKdlkyVnpjeTVsYm5ZZ1BTQjdmVHRjYm5CeWIyTmxjM011WVhKbmRpQTlJRnRkTzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1SUQwZ0p5YzdJQzh2SUdWdGNIUjVJSE4wY21sdVp5QjBieUJoZG05cFpDQnlaV2RsZUhBZ2FYTnpkV1Z6WEc1d2NtOWpaWE56TG5abGNuTnBiMjV6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQW9LU0I3ZlZ4dVhHNXdjbTlqWlhOekxtOXVJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVZV1JrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Ym1ObElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyWm1JRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFRHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZCYkd4TWFYTjBaVzVsY25NZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1bGJXbDBJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjSEpsY0dWdVpFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkU5dVkyVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNWNibkJ5YjJObGMzTXViR2x6ZEdWdVpYSnpJRDBnWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHNnY21WMGRYSnVJRnRkSUgxY2JseHVjSEp2WTJWemN5NWlhVzVrYVc1bklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNCeWIyTmxjM011WW1sdVpHbHVaeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVYRzV3Y205alpYTnpMbU4zWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2N2SnlCOU8xeHVjSEp2WTJWemN5NWphR1JwY2lBOUlHWjFibU4wYVc5dUlDaGthWElwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZMmhrYVhJZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYm5CeWIyTmxjM011ZFcxaGMyc2dQU0JtZFc1amRHbHZiaWdwSUhzZ2NtVjBkWEp1SURBN0lIMDdYRzRpTENKcGJYQnZjblFnZXlCU1pYRkRiMjVtYVdjZ2ZTQm1jbTl0SUNjdUwzUjVjR1Z6SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJSFI1Y0dVNklDZHFjMjl1SjF4dWZTQmhjeUJTWlhGRGIyNW1hV2RjYmlJc0ltbHRjRzl5ZENCN0lFVnljbTl5U0dGdVpHeGxja052Ym1acFp5d2dSWEp5YjNKTllYQWdmU0JtY205dElDY3VMM1I1Y0dWekp6dGNibWx0Y0c5eWRDQjdJRUY0YVc5elVtVnpjRzl1YzJVZ2ZTQm1jbTl0SUNkaGVHbHZjeWRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR1JsWm1GMWJIUkZjbkpEYjI1bWFXYzZJRVZ5Y205eVNHRnVaR3hsY2tOdmJtWnBaeUE5SUh0Y2JpQWdkR0Z5WjJWMFMyVjVPaUJjSW1OdlpHVmNJaXhjYmlBZ2RtRnNhV1JEYjJSbE9pQmJNRjBzWEc0Z0lHUmxabUYxYkhSTmMyYzZJQ2NvZTJOdlpHVjlLU0JUYjIxbGRHaHBibWNnWjI5bGN5QjNjbTl1Wnk0dUxpZGNibjFjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFVnljbTl5U0dGdVpHeGxjbnRjYmlBZ2NISnBkbUYwWlNCamIyNXpkSEoxWTNSdmNpaGNiaUFnSUNCd2NtbDJZWFJsSUdWeWNrMWhjRG9nUlhKeWIzSk5ZWEFnUFNCN2ZTeGNiaUFnSUNCd2NtbDJZWFJsSUdWeWNrTnZibVpwWnpvZ1JYSnliM0pJWVc1a2JHVnlRMjl1Wm1sbklEMGdaR1ZtWVhWc2RFVnlja052Ym1acFoxeHVJQ0FwSUh0Y2JpQWdJQ0JwWmloMGFHbHpMbVZ5Y2tOdmJtWnBaeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWxjbkpEYjI1bWFXY2dQU0I3TGk0dVpHVm1ZWFZzZEVWeWNrTnZibVpwWnl3Z0xpNHVkR2hwY3k1bGNuSkRiMjVtYVdkOVhHNGdJQ0FnZlZ4dVhHNGdJSDFjYmx4dUlDQnpkR0YwYVdNZ1kzSmxZWFJsS0dWeWNrMWhjRDg2SUVWeWNtOXlUV0Z3TENCamIyNW1hV2MvT2lCRmNuSnZja2hoYm1Sc1pYSkRiMjVtYVdjcE9pQkZjbkp2Y2toaGJtUnNaWEo3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJGY25KdmNraGhibVJzWlhJb1pYSnlUV0Z3TENCamIyNW1hV2NwWEc0Z0lIMWNibHh1SUNCb1lXNWtiR1ZGY25KU1pYTndiMjV6WlNoeVpYTTZJRUY0YVc5elVtVnpjRzl1YzJVcE9pQkJlR2x2YzFKbGMzQnZibk5sSUh0Y2JpQWdJQ0JwWmlnaGRHaHBjeTVsY25KRGIyNW1hV2NwSUhKbGRIVnliaUJ5WlhOY2JpQWdJQ0JqYjI1emRDQjBZWEpuWlhSTFpYa2dQU0IwYUdsekxtVnlja052Ym1acFp5NTBZWEpuWlhSTFpYa2dZWE1nYzNSeWFXNW5YRzRnSUNBZ1kyOXVjM1FnZG1Gc2FXUkRiMlJsSUQwZ2RHaHBjeTVsY25KRGIyNW1hV2N1ZG1Gc2FXUkRiMlJsWEc0Z0lDQWdZMjl1YzNRZ2NtVnpRMjlrWlNBOUlISmxjeTVrWVhSaFczUmhjbWRsZEV0bGVWMWNiaUFnSUNCc1pYUWdaR1ZtWVhWc2RFMXpaeUE5SUhSb2FYTXVaWEp5UTI5dVptbG5MbVJsWm1GMWJIUk5jMmNnWVhNZ2MzUnlhVzVuWEc0Z0lDQWdaR1ZtWVhWc2RFMXpaeUE5SUdSbFptRjFiSFJOYzJjdWNtVndiR0ZqWlNndlhGeDdZMjlrWlZ4Y2ZTOW5hVzBzSUhKbGMwTnZaR1VwWEc0Z0lDQWdiR1YwSUdselZtRnNhV1JjYmlBZ0lDQWdJR2xtS0hKbGMwTnZaR1VnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZRU5oYm01dmRDQm1hVzVrSUhSb1pTQW5kR0Z5WjJWMFMyVjVKem9nSkh0MFlYSm5aWFJMWlhsOVlDbGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lvUVhKeVlYa3VhWE5CY25KaGVTaDJZV3hwWkVOdlpHVXBLU0I3WEc0Z0lDQWdJQ0FnSUdselZtRnNhV1FnUFNCMllXeHBaRU52WkdVdWFXNWpiSFZrWlhNb2NtVnpRMjlrWlNsY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWW9kSGx3Wlc5bUlIWmhiR2xrUTI5a1pTQTlQVDBnSjNOMGNtbHVaeWNnZkh3Z2RIbHdaVzltSUhaaGJHbGtRMjlrWlNBOVBUMGdKMjUxYldKbGNpY2dLU0I3WEc0Z0lDQWdJQ0FnSUdselZtRnNhV1FnUFNCMllXeHBaRU52WkdVZ1BUMDlJSEpsYzBOdlpHVmNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lvSVdselZtRnNhV1FwSUh0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdVpYSnlUV0Z3VzNKbGMwTnZaR1ZkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHUmxabUYxYkhSTmMyY3BYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLSFJvYVhNdVpYSnlUV0Z3VzNKbGMwTnZaR1ZkS1Z4dUlDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCeVpYTmNiaUFnZlZ4dVhHNTlYRzRpTENKcGJYQnZjblFnZXlCQmVHbHZjMUpsY1hWbGMzUkRiMjVtYVdjZ2ZTQm1jbTl0SUNkaGVHbHZjeWRjYm1sdGNHOXlkQ0I3SUZKbGNVTnZibVpwWnl3Z1RXOWtkV3hsTENCTmIyUjFiR1ZJZFdJc0lFRndhVVJoZEdFc0lGSmxjM0J2Ym5ObFJHRjBZU3dnVFc5a2RXeGxVbTl2ZEN3Z1JYSnliM0pJWVc1a2JHVnlRMjl1Wm1sbkxDQkZjbkp2Y2sxaGNDQjlJR1p5YjIwZ0p5NHZkSGx3WlhNbk8xeHVhVzF3YjNKMElIQmhkR2dnWm5KdmJTQW5jR0YwYUNkY2JtbHRjRzl5ZENCU1pYRjFaWE4wSUdaeWIyMGdKeTR2Y21WeGRXVnpkQ2M3WEc1cGJYQnZjblFnUlhKeWIzSklZVzVrYkdWeUlHWnliMjBnSnk0dlpYSnliM0luTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJCY0dsSWRXSWdaWGgwWlc1a2N5QlNaWEYxWlhOMGUxeHVJQ0J3Y21sMllYUmxJRzF2WkhWc1pWSnZiM1E2SUUxdlpIVnNaVkp2YjNRZ1BTQjdmVnh1SUNCd2NtbDJZWFJsSUdWeWNraGhibVJzWlhJL09pQkZjbkp2Y2toaGJtUnNaWEpjYmx4dUlDQndjbWwyWVhSbElHTnZibk4wY25WamRHOXlLSEpsY1VOdmJtWnBaejg2SUZKbGNVTnZibVpwWnlrZ2UxeHVJQ0FnSUhOMWNHVnlLSEpsY1VOdmJtWnBaeWxjYmlBZ2ZWeHVYRzRnSUhOMFlYUnBZeUJqY21WaGRHVW9aWGgwWlc1a1EyOXVabWxuUHpvZ1VtVnhRMjl1Wm1sbktUb2dRWEJwU0hWaUlIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFRndhVWgxWWlobGVIUmxibVJEYjI1bWFXY3BYRzRnSUgxY2JseHVJQ0JuWlhSTmIyUjFiR1Z6S0NrNklFMXZaSFZzWlZKdmIzUWdlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTF2WkhWc1pWSnZiM1JjYmlBZ2ZWeHVYRzRnSUhKbFoybHpkR1Z5VFc5a2RXeGxLRzF2WkhWc1pVNWhiV1U2SUhOMGNtbHVaeXdnYlc5a2RXeGxPaUJOYjJSMWJHVXNJRzF2WkhWc1pVTnZibVpwWnpvZ1VtVnhRMjl1Wm1sbklEMGdlMzBwT2lCMmIybGtJSHRjYmlBZ0lDQjBhR2x6TG0xdlpIVnNaVkp2YjNSYmJXOWtkV3hsVG1GdFpWMGdQU0IwYUdsekxtTnlaV0YwWlUxdlpIVnNaU2h0YjJSMWJHVXNJRzF2WkhWc1pVTnZibVpwWnlsY2JpQWdmVnh1WEc0Z0lHTnlaV0YwWlUxdlpIVnNaU2h0YjJSMWJHVTZJRTF2WkhWc1pTd2diVzlrZFd4bFEyOXVabWxuT2lCU1pYRkRiMjVtYVdjZ1BTQjdmU2s2SUUxdlpIVnNaVWgxWWlCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrZFd4bGFIVmlPaUJOYjJSMWJHVklkV0lnUFNCN2ZWeHVJQ0FnSUdadmNpaGpiMjV6ZENCclpYa2dhVzRnYlc5a2RXeGxMbUZ3YVhNcElIdGNiaUFnSUNBZ0lHMXZaSFZzWldoMVlsdHJaWGxkSUQwZ0tISmxjVVJoZEdFNklFRndhVVJoZEdFc0lHRndhVU52Ym1acFp6b2dVbVZ4UTI5dVptbG5JRDBnZTMwcE9pQlFjbTl0YVhObFBGSmxjM0J2Ym5ObFJHRjBZVDRnUFQ0Z2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHRndhU0E5SUcxdlpIVnNaUzVoY0dselcydGxlVjFjYmlBZ0lDQWdJQ0FnYkdWMElIVnliQ0E5SUdGd2FTNTFjbXdzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnhkV1Z5ZVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdGY2JseHVJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdjbVZ4UkdGMFlTQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjFjbXdnUFNCMWNtd3VjbVZ3YkdGalpTZ3ZYRng3WEZ4ektpaGJKQ05BWEZ3dFhGeGtYRngzWFNzcFhGeHpLbHhjZlM5bmFXMHNJQ2gyTENCMllXdzZJSE4wY21sdVp5a2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvSjNCaGNtRnRjeWNnYVc0Z2NtVnhSR0YwWVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY21WeFJHRjBZUzV3WVhKaGJYTWdKaVlnY21WeFJHRjBZUzV3WVhKaGJYTmJkbUZzWFZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCVWFHVWdjR0Z5WVcxeklDY2tlM1poYkgwbklHUnZJRzV2ZENCb1lYWmxJR0VnWVhOemFXZHVJSFpoYkhWbExtQXBYRzRnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQnBaaWh5WlhGRVlYUmhMbkYxWlhKNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeGRXVnllU0E5SUhKbGNVUmhkR0V1Y1hWbGNubGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jbVZ4UkdGMFlTNWtZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaElEMGdjbVZ4UkdGMFlTNWtZWFJoWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR052Ym5OMElISmxjVU52Ym1acFp5QTlJSHN1TGk1dGIyUjFiR1ZEYjI1bWFXY3NJQzR1TG1Gd2FVTnZibVpwWjMxY2JpQWdJQ0FnSUNBZ2FXWW9jbVZ4UTI5dVptbG5MblI1Y0dVZ1BUMDlJQ2RtYjNKdEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdSaGRHRWdQU0JrWVhSaElDWW1JSFJvYVhNdWRHOUdiM0p0UkdGMFlTaGtZWFJoS1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lYaHBiM05EYjI1bWFXYzZJRUY0YVc5elVtVnhkV1Z6ZEVOdmJtWnBaeUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklHRndhUzV0WlhSb2IyUXNYRzRnSUNBZ0lDQWdJQ0FnZFhKc09pQndZWFJvTG1wdmFXNG9iVzlrZFd4bExtSmhjMlVzSUhWeWJDa3NYRzRnSUNBZ0lDQWdJQ0FnY0dGeVlXMXpPaUJ4ZFdWeWVTeGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJQzR1TG5KbGNVTnZibVpwWjF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbUY0YVc5elNXNXpkR0Z1WTJVb1lYaHBiM05EYjI1bWFXY3BYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ0YjJSMWJHVm9kV0pjYmx4dUlDQjlYRzRnSUhKbFoybHpkR1Z5UlhKeVNHRnVaR3hsY2lobGNuSk5ZWEEvT2lCRmNuSnZjazFoY0N3Z1kyOXVabWxuUHpvZ1JYSnliM0pJWVc1a2JHVnlRMjl1Wm1sbktUb2dkbTlwWkNCN1hHNGdJQ0FnZEdocGN5NWxjbkpJWVc1a2JHVnlJRDBnUlhKeWIzSklZVzVrYkdWeUxtTnlaV0YwWlNobGNuSk5ZWEFzSUdOdmJtWnBaeWxjYmlBZ0lDQjBhR2x6TG05dVVtVnpjRzl1YzJVb2RHaHBjeTVsY25KSVlXNWtiR1Z5TG1oaGJtUnNaVVZ5Y2xKbGMzQnZibk5sTG1KcGJtUW9kR2hwY3k1bGNuSklZVzVrYkdWeUtTbGNiaUFnZlZ4dVhHNTlYRzVjYmx4dVhHNWNiaUlzSW1sdGNHOXlkQ0JoZUdsdmN5d2dlMEY0YVc5elVtVnpjRzl1YzJVc0lFRjRhVzl6U1c1emRHRnVZMlVzSUVGNGFXOXpVbVZ4ZFdWemRFTnZibVpwWnl3Z1FYaHBiM05GY25KdmNuMGdabkp2YlNBbllYaHBiM01uWEc1cGJYQnZjblFnZXlCU1pYRkRiMjVtYVdjc0lGTjBjbWx1WjBsdVpHVjRmU0JtY205dElDY3VMM1I1Y0dWekoxeHVYRzVwYlhCdmNuUWdaR1ZtWVhWc2RFTnZibVpwWnlCbWNtOXRJQ2N1TDJSbFptRjFiSFFuWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkpsY1hWbGMzUjdYRzRnSUhCeWIzUmxZM1JsWkNCeVpYRkRiMjVtYVdjNklGSmxjVU52Ym1acFp5QTlJR1JsWm1GMWJIUkRiMjVtYVdkY2JpQWdjSEp2ZEdWamRHVmtJR0Y0YVc5elNXNXpkR0Z1WTJVNklFRjRhVzl6U1c1emRHRnVZMlZjYmx4dUlDQm5aWFFnWVhocGIzTkRiMjVtYVdjb0tUb2dRWGhwYjNOU1pYRjFaWE4wUTI5dVptbG5JSHRjYmlBZ0lDQmpiMjV6ZENCamIyNW1hV2M2SUVGNGFXOXpVbVZ4ZFdWemRFTnZibVpwWnlBOUlIdGNiaUFnSUNBZ0lHSmhjMlZWVWt3NklIUm9hWE11Y21WeFEyOXVabWxuTG1KaGMyVlZVa3dzWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCamIyNW1hV2RjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBjblZqZEc5eUtHTnZibVpwWno4NklGSmxjVU52Ym1acFp5a2dlMXh1SUNBZ0lHbG1LR052Ym1acFp5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1eVpYRkRiMjVtYVdjZ1BTQjdMaTR1ZEdocGN5NXlaWEZEYjI1bWFXY3NJQzR1TG1OdmJtWnBaMzFjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVoZUdsdmMwbHVjM1JoYm1ObElEMGdZWGhwYjNNdVkzSmxZWFJsS0hSb2FYTXVZWGhwYjNORGIyNW1hV2NwWEc0Z0lIMWNibHh1SUNCdmJsSmxjWFZsYzNRb1ptNDZJQ2hqYjI1bWFXYzZJRUY0YVc5elVtVnhkV1Z6ZEVOdmJtWnBaeWtnUFQ0Z1FYaHBiM05TWlhGMVpYTjBRMjl1Wm1sbktUb2dkbTlwWkNCN1hHNGdJQ0FnZEdocGN5NWhlR2x2YzBsdWMzUmhibU5sTG1sdWRHVnlZMlZ3ZEc5eWN5NXlaWEYxWlhOMExuVnpaU2hqYjI1bWFXY2dQVDRnWm00b1kyOXVabWxuS1NCOGZDQmpiMjVtYVdjcFhHNGdJSDFjYmx4dUlDQnZibEpsYzNCdmJuTmxLR1p1T2lBb2NtVnpjRzl1YzJVNklFRjRhVzl6VW1WemNHOXVjMlVwSUQwK0lFRjRhVzl6VW1WemNHOXVjMlVwT2lCMmIybGtJSHRjYmlBZ0lDQjBhR2x6TG1GNGFXOXpTVzV6ZEdGdVkyVXVhVzUwWlhKalpYQjBiM0p6TG5KbGMzQnZibk5sTG5WelpTaHlaWE53YjI1elpTQTlQaUJtYmloeVpYTndiMjV6WlNrZ2ZId2djbVZ6Y0c5dWMyVXBYRzRnSUgxY2JseHVJQ0J2YmxKbGNYVmxjM1JGY25KdmNpaG1iam9nS0dOdmJtWnBaem9nUVhocGIzTkZjbkp2Y2lrZ1BUNGdRWGhwYjNORmNuSnZjaWs2SUhadmFXUWdlMXh1SUNBZ0lIUm9hWE11WVhocGIzTkpibk4wWVc1alpTNXBiblJsY21ObGNIUnZjbk11Y21WeGRXVnpkQzUxYzJVb2RXNWtaV1pwYm1Wa0xDQmxjbkp2Y2lBOVBpQm1iaWhsY25KdmNpa2dmSHdnVUhKdmJXbHpaUzV5WldwbFkzUW9aWEp5YjNJcEtWeHVJQ0I5WEc1Y2JpQWdiMjVTWlhOd2IyNXpaVVZ5Y205eUtHWnVPaUFvWTI5dVptbG5PaUJCZUdsdmMwVnljbTl5S1NBOVBpQkJlR2x2YzBWeWNtOXlLVG9nZG05cFpDQjdYRzRnSUNBZ2RHaHBjeTVoZUdsdmMwbHVjM1JoYm1ObExtbHVkR1Z5WTJWd2RHOXljeTV5WlhOd2IyNXpaUzUxYzJVb2RXNWtaV1pwYm1Wa0xDQmxjbkp2Y2lBOVBpQm1iaWhsY25KdmNpa2dmSHdnVUhKdmJXbHpaUzV5WldwbFkzUW9aWEp5YjNJcEtWeHVJQ0I5WEc1Y2JpQWdiMjVGY25KdmNpaG1iam9nS0dOdmJtWnBaem9nUVhocGIzTkZjbkp2Y2lrZ1BUNGdRWGhwYjNORmNuSnZjaWs2SUhadmFXUWdlMXh1SUNBZ0lIUm9hWE11YjI1U1pYRjFaWE4wUlhKeWIzSW9abTRwWEc0Z0lDQWdkR2hwY3k1dmJsSmxjM0J2Ym5ObFJYSnliM0lvWm00cFhHNGdJSDFjYmx4dUlDQnpaWFJEYjI1bWFXY29ZMjl1Wm1sbk9pQlNaWEZEYjI1bWFXY3BPaUIyYjJsa0lIdGNiaUFnSUNCMGFHbHpMbkpsY1VOdmJtWnBaeUE5SUhzdUxpNTBhR2x6TG5KbGNVTnZibVpwWnl3Z0xpNHVZMjl1Wm1sbmZWeHVJQ0I5WEc1Y2JpQWdkRzlHYjNKdFJHRjBZU2hrWVhSaE9pQlRkSEpwYm1kSmJtUmxlQ2s2SUVadmNtMUVZWFJoSUh0Y2JpQWdJQ0JqYjI1emRDQm1iM0p0UkdGMFlTQTlJRzVsZHlCR2IzSnRSR0YwWVNncFhHNGdJQ0FnWm05eUtHTnZibk4wSUd0bGVTQnBiaUJrWVhSaEtTQjdYRzRnSUNBZ0lDQm1iM0p0UkdGMFlTNWhjSEJsYm1Rb2EyVjVMQ0JrWVhSaFcydGxlVjBwWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCbWIzSnRSR0YwWVZ4dUlDQjlYRzVjYm4xY2JseHVYRzVjYmx4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgQXBpIGZyb20gJy4uL2Rpc3QvbWFpbi5qcydcbmltcG9ydCBTaXRlQXBpcyBmcm9tICcuL3N0YXRpYy9hcGkvc2l0ZS5qc29uJ1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXNlVVJMOiAnL2FwaScsXG59XG5cbmNvbnN0IGVyckhhbmRsZXJDb25maWcgPSB7XG4gIC8vIHRhcmdldEtleTogJ2NvZGUnLFxuICB2YWxpZENvZGU6IFsnMCddLFxuICBkZWZhdWx0TXNnOiAn5pyJ5YCL5bCP6Yyv6KqkLCDpjK/oqqTku6Pnorw6e2NvZGV9J1xufVxuXG5jb25zdCBlcnJNYXAgPSB7XG4gICcxMDAwMSc6ICfkurrngrrpjK/oqqQnLFxuICAnMTAwMDInOiAn6Ly45YWl6Yyv6KqkJyxcbn1cblxuXG5jb25zdCBBcGlJbnN0YW5jZSA9IEFwaS5jcmVhdGUob3B0aW9ucylcblxuQXBpSW5zdGFuY2UucmVnaXN0ZXJFcnJIYW5kbGVyKGVyck1hcCwgZXJySGFuZGxlckNvbmZpZylcblxuLy8gQXBpSW5zdGFuY2Uub25SZXF1ZXN0KGNvbmZpZyA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGNvbmZpZylcbi8vIH0pXG5BcGlJbnN0YW5jZS5vblJlc3BvbnNlRXJyb3IoZXJyID0+IHtcbiAgY29uc29sZS5sb2coZXJyKVxufSlcblxuY29uc3QgU2l0ZU1vZHVsZSA9IEFwaUluc3RhbmNlLmNyZWF0ZU1vZHVsZShTaXRlQXBpcylcblNpdGVNb2R1bGUuZ2V0U2l0ZUluZm8oKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==