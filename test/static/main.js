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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
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
var path_1 = __importDefault(__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js"));
var default_1 = __importDefault(__webpack_require__(/*! ./default */ "./src/default.ts"));
var ApiHub = /** @class */ (function () {
    function ApiHub(config) {
        this.config = default_1.default;
        this.moduleRoot = {};
        if (config) {
            this.config = __assign(__assign({}, this.config), config);
        }
        this.axiosInstance = axios_1.default.create(this.axiosConfig);
    }
    Object.defineProperty(ApiHub.prototype, "axiosConfig", {
        get: function () {
            var config = {
                baseURL: this.config.baseURL,
            };
            return config;
        },
        enumerable: true,
        configurable: true
    });
    ApiHub.prototype.onRequest = function (fn) {
        this.axiosInstance.interceptors.request.use(function (config) { return fn(config) || config; });
    };
    ApiHub.prototype.onResponse = function (fn) {
        this.axiosInstance.interceptors.response.use(function (response) { return fn(response) || response; });
    };
    ApiHub.prototype.onRequestError = function (fn) {
        this.axiosInstance.interceptors.request.use(undefined, function (error) { return fn(error) || Promise.reject(error); });
    };
    ApiHub.prototype.onResponseError = function (fn) {
        this.axiosInstance.interceptors.response.use(undefined, function (error) { return fn(error) || Promise.reject(error); });
    };
    ApiHub.prototype.onError = function (fn) {
        this.onRequestError(fn);
        this.onResponseError(fn);
    };
    ApiHub.prototype.setConfig = function (config) {
        this.config = __assign(__assign({}, this.config), config);
    };
    ApiHub.create = function (extendConfig) {
        return new ApiHub(extendConfig);
    };
    ApiHub.prototype.toFormData = function (data) {
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return formData;
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
                var config = __assign(__assign(__assign({}, _this.config), moduleConfig), apiConfig);
                if (config.type === 'form') {
                    data = data && _this.toFormData(data);
                }
                var axiosConfig = __assign({ method: api.method, url: path_1.default.join(module.base, url), params: query, data: data }, config);
                return _this.axiosInstance(axiosConfig);
            };
        };
        for (var key in module.apis) {
            _loop_1(key);
        }
        return modulehub;
    };
    return ApiHub;
}());
exports.default = ApiHub;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyxzREFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBa0I7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBdUI7QUFDbkQsbUJBQW1CLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLHlGQUE4QjtBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLHlFQUFzQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNuTGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGtEQUFTO0FBQzdCLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLDREQUFjO0FBQ2xDLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFvQjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsd0RBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtFQUFpQjtBQUN4QyxvQkFBb0IsbUJBQU8sQ0FBQyw0RUFBc0I7QUFDbEQsaUJBQWlCLG1CQUFPLENBQUMsc0VBQW1COztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvRUFBa0I7O0FBRXpDOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywyREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERhOztBQUViO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxlQUFlLG1CQUFPLENBQUMseUVBQXFCO0FBQzVDLHlCQUF5QixtQkFBTyxDQUFDLGlGQUFzQjtBQUN2RCxzQkFBc0IsbUJBQU8sQ0FBQywyRUFBbUI7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuRGE7O0FBRWIsb0JBQW9CLG1CQUFPLENBQUMsbUZBQTBCO0FBQ3RELGtCQUFrQixtQkFBTyxDQUFDLCtFQUF3Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJhOztBQUViLG1CQUFtQixtQkFBTyxDQUFDLHFFQUFnQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsb0JBQW9CLG1CQUFPLENBQUMsdUVBQWlCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyx1RUFBb0I7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLHlEQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDOUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pDYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hFYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyxtRUFBZTs7QUFFekM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBLCtDQUFhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrREFBUztBQUM3QiwwQkFBMEIsbUJBQU8sQ0FBQyw4RkFBK0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdFQUFnQjtBQUN0QyxHQUFHO0FBQ0g7QUFDQSxjQUFjLG1CQUFPLENBQUMsaUVBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDO0FBQzFDLFNBQVM7O0FBRVQ7QUFDQSw0REFBNEQsd0JBQXdCO0FBQ3BGO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLCtCQUErQixhQUFhLEVBQUU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ3BEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ25FYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsbURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1hhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJhOztBQUViLFdBQVcsbUJBQU8sQ0FBQyxnRUFBZ0I7O0FBRW5DOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtB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O0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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R0FBSyxZQUFZLEdBQUssU0FBUyxDQUFDO2dCQUM5RCxJQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2lCQUNyQztnQkFFRCxJQUFNLFdBQVcsY0FDZixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFDbEIsR0FBRyxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFDaEMsTUFBTSxFQUFFLEtBQUssRUFDYixJQUFJLFVBQ0QsTUFBTSxDQUNWO2dCQUNELE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7WUFDeEMsQ0FBQzs7UUFuQ0gsS0FBSSxJQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSTtvQkFBbEIsR0FBRztTQW9DWjtRQUNELE9BQU8sU0FBUztJQUVsQixDQUFDO0lBRUgsYUFBQztBQUFELENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLFxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxuICAgICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJywgJ3NvY2tldFBhdGgnXG4gIF07XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcyKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBmdW5jdGlvbiBvdGhlcktleXNEZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFJlcUNvbmZpZyB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZTogJ2pzb24nXG59IGFzIFJlcUNvbmZpZ1xuIiwiaW1wb3J0IGF4aW9zLCB7QXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc0Vycm9yfSBmcm9tICdheGlvcydcbmltcG9ydCB7IFJlcUNvbmZpZywgU3RyaW5nSW5kZXgsIE1vZHVsZSwgTW9kdWxlSHViLCBBcGlEYXRhLCBSZXNwb25zZURhdGEsIE1vZHVsZVJvb3R9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi9kZWZhdWx0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaUh1YntcbiAgcHJpdmF0ZSBjb25maWc6IFJlcUNvbmZpZyA9IGRlZmF1bHRDb25maWdcbiAgcHJpdmF0ZSBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlXG4gIHByaXZhdGUgbW9kdWxlUm9vdDogTW9kdWxlUm9vdCA9IHt9XG5cbiAgZ2V0IGF4aW9zQ29uZmlnKCk6IEF4aW9zUmVxdWVzdENvbmZpZyB7XG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XG4gICAgICBiYXNlVVJMOiB0aGlzLmNvbmZpZy5iYXNlVVJMLFxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZz86IFJlcUNvbmZpZykge1xuICAgIGlmKGNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ31cbiAgICB9XG4gICAgdGhpcy5heGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHRoaXMuYXhpb3NDb25maWcpXG4gIH1cblxuICBvblJlcXVlc3QoZm46IChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4gQXhpb3NSZXF1ZXN0Q29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShjb25maWcgPT4gZm4oY29uZmlnKSB8fCBjb25maWcpXG4gIH1cblxuICBvblJlc3BvbnNlKGZuOiAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IEF4aW9zUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiBmbihyZXNwb25zZSkgfHwgcmVzcG9uc2UpXG4gIH1cblxuICBvblJlcXVlc3RFcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UodW5kZWZpbmVkLCBlcnJvciA9PiBmbihlcnJvcikgfHwgUHJvbWlzZS5yZWplY3QoZXJyb3IpKVxuICB9XG5cbiAgb25SZXNwb25zZUVycm9yKGZuOiAoY29uZmlnOiBBeGlvc0Vycm9yKSA9PiBBeGlvc0Vycm9yKTogdm9pZCB7XG4gICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCBlcnJvciA9PiBmbihlcnJvcikgfHwgUHJvbWlzZS5yZWplY3QoZXJyb3IpKVxuICB9XG5cbiAgb25FcnJvcihmbjogKGNvbmZpZzogQXhpb3NFcnJvcikgPT4gQXhpb3NFcnJvcik6IHZvaWQge1xuICAgIHRoaXMub25SZXF1ZXN0RXJyb3IoZm4pXG4gICAgdGhpcy5vblJlc3BvbnNlRXJyb3IoZm4pXG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSZXFDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShleHRlbmRDb25maWc/OiBSZXFDb25maWcpOiBBcGlIdWIge1xuICAgIHJldHVybiBuZXcgQXBpSHViKGV4dGVuZENvbmZpZylcbiAgfVxuXG4gIHRvRm9ybURhdGEoZGF0YTogU3RyaW5nSW5kZXgpOiBGb3JtRGF0YSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvcihjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgZGF0YVtrZXldKVxuICAgIH1cbiAgICByZXR1cm4gZm9ybURhdGFcbiAgfVxuXG4gIGdldE1vZHVsZXMoKTogTW9kdWxlUm9vdCB7XG4gICAgcmV0dXJuIHRoaXMubW9kdWxlUm9vdFxuICB9XG5cbiAgcmVnaXN0ZXJNb2R1bGUobW9kdWxlTmFtZTogc3RyaW5nLCBtb2R1bGU6IE1vZHVsZSwgbW9kdWxlQ29uZmlnOiBSZXFDb25maWcgPSB7fSk6IHZvaWQge1xuICAgIHRoaXMubW9kdWxlUm9vdFttb2R1bGVOYW1lXSA9IHRoaXMuY3JlYXRlTW9kdWxlKG1vZHVsZSwgbW9kdWxlQ29uZmlnKVxuICB9XG5cbiAgY3JlYXRlTW9kdWxlKG1vZHVsZTogTW9kdWxlLCBtb2R1bGVDb25maWc6IFJlcUNvbmZpZyA9IHt9KTogTW9kdWxlSHViIHtcbiAgICBjb25zdCBtb2R1bGVodWI6IE1vZHVsZUh1YiA9IHt9XG4gICAgZm9yKGNvbnN0IGtleSBpbiBtb2R1bGUuYXBpcykge1xuICAgICAgbW9kdWxlaHViW2tleV0gPSAocmVxRGF0YTogQXBpRGF0YSwgYXBpQ29uZmlnOiBSZXFDb25maWcgPSB7fSk6IFByb21pc2U8UmVzcG9uc2VEYXRhPiA9PiB7XG5cbiAgICAgICAgY29uc3QgYXBpID0gbW9kdWxlLmFwaXNba2V5XVxuICAgICAgICBsZXQgdXJsID0gYXBpLnVybCxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgZGF0YVxuXG4gICAgICAgIGlmKHR5cGVvZiByZXFEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXHtcXHMqKFskI0BcXC1cXGRcXHddKylcXHMqXFx9L2dpbSwgKHYsIHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZigncGFyYW1zJyBpbiByZXFEYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXFEYXRhLnBhcmFtcyAmJiByZXFEYXRhLnBhcmFtc1t2YWxdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJhbXMgJyR7dmFsfScgZG8gbm90IGhhdmUgYSBhc3NpZ24gdmFsdWUuYClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmKHJlcURhdGEucXVlcnkpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcmVxRGF0YS5xdWVyeVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXFEYXRhLmRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSByZXFEYXRhLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5tb2R1bGVDb25maWcsIC4uLmFwaUNvbmZpZ31cbiAgICAgICAgaWYoY29uZmlnLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgIGRhdGEgPSBkYXRhICYmIHRoaXMudG9Gb3JtRGF0YShkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXhpb3NDb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICAgICAgICBtZXRob2Q6IGFwaS5tZXRob2QsXG4gICAgICAgICAgdXJsOiBwYXRoLmpvaW4obW9kdWxlLmJhc2UsIHVybCksXG4gICAgICAgICAgcGFyYW1zOiBxdWVyeSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF4aW9zSW5zdGFuY2UoYXhpb3NDb25maWcpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2R1bGVodWJcblxuICB9XG5cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./test/entry.js":
/*!***********************!*\
  !*** ./test/entry.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import Api from '../../dist/main.js'
const Api = __webpack_require__(/*! ../dist/main.js */ "./dist/main.js").default
const SiteApis = __webpack_require__(/*! ./static/api/site.json */ "./test/static/api/site.json")

console.log(Api)

const options = {
  baseURL: '/api',
}


const ApiInstance = Api.create(options)

ApiInstance.onRequest(config => {
  console.log(config)
})
ApiInstance.onError(err => {
  console.log(err)
})

const SiteModule = ApiInstance.createModule(SiteApis)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9kaXN0L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sYUFLSjtBQUNGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVE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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7OztBQUd0QyxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUVBQXVFLDZCQUE2QixFQUFFO0FBQ3RHO0FBQ0E7QUFDQSwwRUFBMEUsaUNBQWlDLEVBQUU7QUFDN0c7QUFDQTtBQUNBLGlGQUFpRiwyQ0FBMkMsRUFBRTtBQUM5SDtBQUNBO0FBQ0Esa0ZBQWtGLDJDQUEyQyxFQUFFO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzQkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDRGQUE0RjtBQUN4STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVAsVUFBVTtBQUNWLENBQUM7QUFDRCwyQ0FBMkMsY0FBYyxtdzFHOzs7Ozs7Ozs7OztBQ3BnRnpEO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLHVDQUFpQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQywyREFBd0I7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3QvZW50cnkuanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbGliL2F4aW9zICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgc2V0dGxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9jb3JlL3NldHRsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1wiKTtcbnZhciBidWlsZFVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9idWlsZFVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzXCIpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9jb3JlL2J1aWxkRnVsbFBhdGggKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzXCIpO1xudmFyIHBhcnNlSGVhZGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIik7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiKTtcbnZhciBjcmVhdGVFcnJvciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NvcmUvY3JlYXRlRXJyb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJztcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2hlbHBlcnMvY29va2llcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcIik7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlcnMvYmluZCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIik7XG52YXIgQXhpb3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvcmUvQXhpb3MgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1wiKTtcbnZhciBtZXJnZUNvbmZpZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29yZS9tZXJnZUNvbmZpZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzXCIpO1xudmFyIGRlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhbmNlbC9DYW5jZWxUb2tlbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanNcIik7XG5heGlvcy5pc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2FuY2VsL2lzQ2FuY2VsICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1wiKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9zcHJlYWQgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBDYW5jZWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXCIpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgYnVpbGRVUkwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9oZWxwZXJzL2J1aWxkVVJMICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcIik7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9JbnRlcmNlcHRvck1hbmFnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanNcIik7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kaXNwYXRjaFJlcXVlc3QgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIik7XG52YXIgbWVyZ2VDb25maWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lcmdlQ29uZmlnICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIik7XG52YXIgY29tYmluZVVSTHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9oZWxwZXJzL2NvbWJpbmVVUkxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcIik7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBlbmhhbmNlRXJyb3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2VuaGFuY2VFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1wiKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90cmFuc2Zvcm1EYXRhICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qc1wiKTtcbnZhciBpc0NhbmNlbCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL2NhbmNlbC9pc0NhbmNlbCAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanNcIik7XG52YXIgZGVmYXVsdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9kZWZhdWx0cyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNyZWF0ZUVycm9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVFcnJvciAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzXCIpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5cbnZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcIik7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy94aHIgKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzXCIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hZGFwdGVycy9odHRwICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qc1wiKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiKSkpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIHV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi91dGlscyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVycy9iaW5kICovIFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qc1wiKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kZWZhdWx0LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZGVmYXVsdC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdHlwZTogJ2pzb24nXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21haW4udHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYWluLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBheGlvcyAqLyBcIi4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXCIpKTtcbnZhciBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgcGF0aCAqLyBcIi4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qc1wiKSk7XG52YXIgZGVmYXVsdF8xID0gX19pbXBvcnREZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVmYXVsdCAqLyBcIi4vc3JjL2RlZmF1bHQudHNcIikpO1xudmFyIEFwaUh1YiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcGlIdWIoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdF8xLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMubW9kdWxlUm9vdCA9IHt9O1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmNvbmZpZyksIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlID0gYXhpb3NfMS5kZWZhdWx0LmNyZWF0ZSh0aGlzLmF4aW9zQ29uZmlnKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwaUh1Yi5wcm90b3R5cGUsIFwiYXhpb3NDb25maWdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYmFzZVVSTDogdGhpcy5jb25maWcuYmFzZVVSTCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBcGlIdWIucHJvdG90eXBlLm9uUmVxdWVzdCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHsgcmV0dXJuIGZuKGNvbmZpZykgfHwgY29uZmlnOyB9KTtcbiAgICB9O1xuICAgIEFwaUh1Yi5wcm90b3R5cGUub25SZXNwb25zZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIGZuKHJlc3BvbnNlKSB8fCByZXNwb25zZTsgfSk7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLm9uUmVxdWVzdEVycm9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHRoaXMuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UodW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGZuKGVycm9yKSB8fCBQcm9taXNlLnJlamVjdChlcnJvcik7IH0pO1xuICAgIH07XG4gICAgQXBpSHViLnByb3RvdHlwZS5vblJlc3BvbnNlRXJyb3IgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGZuKGVycm9yKSB8fCBQcm9taXNlLnJlamVjdChlcnJvcik7IH0pO1xuICAgIH07XG4gICAgQXBpSHViLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHRoaXMub25SZXF1ZXN0RXJyb3IoZm4pO1xuICAgICAgICB0aGlzLm9uUmVzcG9uc2VFcnJvcihmbik7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5jb25maWcpLCBjb25maWcpO1xuICAgIH07XG4gICAgQXBpSHViLmNyZWF0ZSA9IGZ1bmN0aW9uIChleHRlbmRDb25maWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcGlIdWIoZXh0ZW5kQ29uZmlnKTtcbiAgICB9O1xuICAgIEFwaUh1Yi5wcm90b3R5cGUudG9Gb3JtRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgZGF0YVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLmdldE1vZHVsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZVJvb3Q7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gKG1vZHVsZU5hbWUsIG1vZHVsZSwgbW9kdWxlQ29uZmlnKSB7XG4gICAgICAgIGlmIChtb2R1bGVDb25maWcgPT09IHZvaWQgMCkgeyBtb2R1bGVDb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLm1vZHVsZVJvb3RbbW9kdWxlTmFtZV0gPSB0aGlzLmNyZWF0ZU1vZHVsZShtb2R1bGUsIG1vZHVsZUNvbmZpZyk7XG4gICAgfTtcbiAgICBBcGlIdWIucHJvdG90eXBlLmNyZWF0ZU1vZHVsZSA9IGZ1bmN0aW9uIChtb2R1bGUsIG1vZHVsZUNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAobW9kdWxlQ29uZmlnID09PSB2b2lkIDApIHsgbW9kdWxlQ29uZmlnID0ge307IH1cbiAgICAgICAgdmFyIG1vZHVsZWh1YiA9IHt9O1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIG1vZHVsZWh1YltrZXldID0gZnVuY3Rpb24gKHJlcURhdGEsIGFwaUNvbmZpZykge1xuICAgICAgICAgICAgICAgIGlmIChhcGlDb25maWcgPT09IHZvaWQgMCkgeyBhcGlDb25maWcgPSB7fTsgfVxuICAgICAgICAgICAgICAgIHZhciBhcGkgPSBtb2R1bGUuYXBpc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBhcGkudXJsLCBxdWVyeSwgZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcURhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXHtcXHMqKFskI0BcXC1cXGRcXHddKylcXHMqXFx9L2dpbSwgZnVuY3Rpb24gKHYsIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdwYXJhbXMnIGluIHJlcURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxRGF0YS5wYXJhbXMgJiYgcmVxRGF0YS5wYXJhbXNbdmFsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXJhbXMgJ1wiICsgdmFsICsgXCInIGRvIG5vdCBoYXZlIGEgYXNzaWduIHZhbHVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXFEYXRhLnF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHJlcURhdGEucXVlcnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcURhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcURhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLmNvbmZpZyksIG1vZHVsZUNvbmZpZyksIGFwaUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy50eXBlID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgJiYgX3RoaXMudG9Gb3JtRGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGF4aW9zQ29uZmlnID0gX19hc3NpZ24oeyBtZXRob2Q6IGFwaS5tZXRob2QsIHVybDogcGF0aF8xLmRlZmF1bHQuam9pbihtb2R1bGUuYmFzZSwgdXJsKSwgcGFyYW1zOiBxdWVyeSwgZGF0YTogZGF0YSB9LCBjb25maWcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5heGlvc0luc3RhbmNlKGF4aW9zQ29uZmlnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGUuYXBpcykge1xuICAgICAgICAgICAgX2xvb3BfMShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGVodWI7XG4gICAgfTtcbiAgICByZXR1cm4gQXBpSHViO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwaUh1YjtcblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWhaR0Z3ZEdWeWN5OTRhSEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWhlR2x2Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk5oYm1ObGJDOURZVzVqWld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqWVc1alpXd3ZRMkZ1WTJWc1ZHOXJaVzR1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpZVzVqWld3dmFYTkRZVzVqWld3dWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwwRjRhVzl6TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OWhlR2x2Y3k5c2FXSXZZMjl5WlM5SmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwySjFhV3hrUm5Wc2JGQmhkR2d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOWpiM0psTDJOeVpXRjBaVVZ5Y205eUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2WTI5eVpTOWthWE53WVhSamFGSmxjWFZsYzNRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwyVnVhR0Z1WTJWRmNuSnZjaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyTnZjbVV2YldWeVoyVkRiMjVtYVdjdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmJtOWtaVjl0YjJSMWJHVnpMMkY0YVc5ekwyeHBZaTlqYjNKbEwzTmxkSFJzWlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMk52Y21VdmRISmhibk5tYjNKdFJHRjBZUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyUmxabUYxYkhSekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpYVc1a0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwyNXZaR1ZmYlc5a2RXeGxjeTloZUdsdmN5OXNhV0l2YUdWc2NHVnljeTlpZFdsc1pGVlNUQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdlkyOXRZbWx1WlZWU1RITXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDJGNGFXOXpMMnhwWWk5b1pXeHdaWEp6TDJOdmIydHBaWE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpRV0p6YjJ4MWRHVlZVa3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOW9aV3h3WlhKekwybHpWVkpNVTJGdFpVOXlhV2RwYmk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZZWGhwYjNNdmJHbGlMMmhsYkhCbGNuTXZibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl1YjJSbFgyMXZaSFZzWlhNdllYaHBiM012YkdsaUwyaGxiSEJsY25NdmNHRnljMlZJWldGa1pYSnpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMjV2WkdWZmJXOWtkV3hsY3k5aGVHbHZjeTlzYVdJdmFHVnNjR1Z5Y3k5emNISmxZV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwyRjRhVzl6TDJ4cFlpOTFkR2xzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZjR0YwYUMxaWNtOTNjMlZ5YVdaNUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMlJsWm1GMWJIUXVkSE1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDIxaGFXNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdVVU5XUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHM3VVVGRlFUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdVVUZEUVR0UlFVTkJMREJEUVVFd1F5eG5RMEZCWjBNN1VVRkRNVVU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3gzUkVGQmQwUXNhMEpCUVd0Q08xRkJRekZGTzFGQlEwRXNhVVJCUVdsRUxHTkJRV003VVVGREwwUTdPMUZCUlVFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIbERRVUY1UXl4cFEwRkJhVU03VVVGRE1VVXNaMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMUZCUTNKSk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01rSkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8xRkJRM1pFTEdsRFFVRnBReXhsUVVGbE8xRkJRMmhFTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQkxITkVRVUZ6UkN3clJFRkJLMFE3TzFGQlJYSklPMUZCUTBFN096dFJRVWRCTzFGQlEwRTdPenM3T3pzN096czdPenRCUTJ4R1FTeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eHpSRUZCWVN4Rk96czdPenM3T3pzN096czdRVU5CZWtJN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk8wRkJRMmhETEdGQlFXRXNiVUpCUVU4c1EwRkJReXhwUlVGQmEwSTdRVUZEZGtNc1pVRkJaU3h0UWtGQlR5eERRVUZETERKRlFVRjFRanRCUVVNNVF5eHZRa0ZCYjBJc2JVSkJRVThzUTBGQlF5dzJSVUZCZFVJN1FVRkRia1FzYlVKQlFXMUNMRzFDUVVGUExFTkJRVU1zYlVaQlFUSkNPMEZCUTNSRUxITkNRVUZ6UWl4dFFrRkJUeXhEUVVGRExIbEdRVUU0UWp0QlFVTTFSQ3hyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXg1UlVGQmNVSTdPMEZCUlM5RE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc05FTkJRVFJETzBGQlF6VkRPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEc5Q1FVRnZRaXh0UWtGQlR5eERRVUZETEhsRlFVRnpRanM3UVVGRmJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3T3pzN096czdPenM3T3pzN1FVTnVUR0U3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExHdEVRVUZUTzBGQlF6ZENMRmRCUVZjc2JVSkJRVThzUTBGQlF5eG5SVUZCWjBJN1FVRkRia01zV1VGQldTeHRRa0ZCVHl4RFFVRkRMRFJFUVVGak8wRkJRMnhETEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEhkRlFVRnZRanRCUVVNNVF5eGxRVUZsTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVms3TzBGQlJXNURPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WlFVRlpMRTFCUVUwN1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1pVRkJaU3h0UWtGQlR5eERRVUZETEd0RlFVRnBRanRCUVVONFF5eHZRa0ZCYjBJc2JVSkJRVThzUTBGQlF5dzBSVUZCYzBJN1FVRkRiRVFzYVVKQlFXbENMRzFDUVVGUExFTkJRVU1zYzBWQlFXMUNPenRCUVVVMVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR1ZCUVdVc2JVSkJRVThzUTBGQlF5eHZSVUZCYTBJN08wRkJSWHBET3p0QlFVVkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU53UkdFN08wRkJSV0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenM3T3pzN096czdPenM3TzBGRGJFSmhPenRCUVVWaUxHRkJRV0VzYlVKQlFVOHNRMEZCUXl3eVJFRkJWVHM3UVVGRkwwSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGTkJRVk03UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN096czdPenM3TzBGRGVFUmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTBwaE96dEJRVVZpTEZsQlFWa3NiVUpCUVU4c1EwRkJReXh4UkVGQldUdEJRVU5vUXl4bFFVRmxMRzFDUVVGUExFTkJRVU1zZVVWQlFYRkNPMEZCUXpWRExIbENRVUY1UWl4dFFrRkJUeXhEUVVGRExHbEdRVUZ6UWp0QlFVTjJSQ3h6UWtGQmMwSXNiVUpCUVU4c1EwRkJReXd5UlVGQmJVSTdRVUZEYWtRc2EwSkJRV3RDTEcxQ1FVRlBMRU5CUVVNc2JVVkJRV1U3TzBGQlJYcERPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEVzUjBGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RFUVVGblJEdEJRVU5vUkR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzUTBGQlF6czdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUkVGQlowUTdRVUZEYUVRN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHM3T3pzN096czdPenM3T3p0QlF6ZEdZVHM3UVVGRllpeFpRVUZaTEcxQ1FVRlBMRU5CUVVNc2NVUkJRVms3TzBGQlJXaERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRk5CUVZNN1FVRkRjRUlzVjBGQlZ5eFRRVUZUTzBGQlEzQkNPMEZCUTBFc1dVRkJXU3hQUVVGUE8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVTBGQlV6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdPMEZCUlVFN096czdPenM3T3pzN096czdRVU51UkdFN08wRkJSV0lzYjBKQlFXOUNMRzFDUVVGUExFTkJRVU1zYlVaQlFUQkNPMEZCUTNSRUxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExDdEZRVUYzUWpzN1FVRkZiRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYmtKaE96dEJRVVZpTEcxQ1FVRnRRaXh0UWtGQlR5eERRVUZETEhGRlFVRm5RanM3UVVGRk0wTTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRTFCUVUwN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMnBDWVRzN1FVRkZZaXhaUVVGWkxHMUNRVUZQTEVOQlFVTXNjVVJCUVZrN1FVRkRhRU1zYjBKQlFXOUNMRzFDUVVGUExFTkJRVU1zZFVWQlFXbENPMEZCUXpkRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4MVJVRkJiMEk3UVVGRE0wTXNaVUZCWlN4dFFrRkJUeXhEUVVGRExIbEVRVUZoT3p0QlFVVndRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3clFrRkJLMEk3UVVGREwwSXNkVU5CUVhWRE8wRkJRM1pETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPenM3T3pzN096czdPenM3TzBGRE9VVmhPenRCUVVWaU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUVUZCVFR0QlFVTnFRaXhYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTNwRFlUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zYlVSQlFWVTdPMEZCUlRsQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6czdRVUZGVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVkQlFVYzdPMEZCUlVnN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzaEZZVHM3UVVGRllpeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5eHRSVUZCWlRzN1FVRkZla003UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VFFVRlRPMEZCUTNCQ0xGZEJRVmNzVTBGQlV6dEJRVU53UWl4WFFVRlhMRTlCUVU4N1FVRkRiRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU40UW1FN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk96dEJRVVZvUXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExHTkJRV003UVVGRGVrSXNWMEZCVnl4TlFVRk5PMEZCUTJwQ0xGZEJRVmNzWlVGQlpUdEJRVU14UWl4aFFVRmhMRVZCUVVVN1FVRkRaanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYmtKQkxDdERRVUZoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHJSRUZCVXp0QlFVTTNRaXd3UWtGQk1FSXNiVUpCUVU4c1EwRkJReXc0UmtGQkswSTdPMEZCUldwRk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXh0UWtGQlR5eERRVUZETEdkRlFVRm5RanRCUVVOMFF5eEhRVUZITzBGQlEwZzdRVUZEUVN4alFVRmpMRzFDUVVGUExFTkJRVU1zYVVWQlFXbENPMEZCUTNaRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2QwVkJRWGRGTzBGQlEzaEZPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkVRVUYxUkR0QlFVTjJSRHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTEZsQlFWazdRVUZEYmtJN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN096czdPenM3T3pzN096czdPMEZEYUVkaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeHBRa0ZCYVVJN1FVRkRjRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMVpoT3p0QlFVVmlMRmxCUVZrc2JVSkJRVThzUTBGQlF5eHhSRUZCV1RzN1FVRkZhRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQkxFZEJRVWM3UVVGRFNEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVDeExRVUZMT3p0QlFVVk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOMFJXRTdPMEZCUldJN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEU5QlFVODdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRZbUU3TzBGQlJXSXNXVUZCV1N4dFFrRkJUeXhEUVVGRExIRkVRVUZaT3p0QlFVVm9RenRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNRU5CUVRCRE8wRkJRekZETEZOQlFWTTdPMEZCUlZRN1FVRkRRU3cwUkVGQk5FUXNkMEpCUVhkQ08wRkJRM0JHTzBGQlEwRXNVMEZCVXpzN1FVRkZWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdPMEZCUlV3N1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBOQlFXdERPMEZCUTJ4RExDdENRVUVyUWl4aFFVRmhMRVZCUVVVN1FVRkRPVU03UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVERzN096czdPenM3T3pzN096dEJRM0JFWVRzN1FVRkZZanRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEWW1FN08wRkJSV0lzV1VGQldTeHRRa0ZCVHl4RFFVRkRMSEZFUVVGWk96dEJRVVZvUXp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGpRVUZqTEU5QlFVODdRVUZEY2tJc1owSkJRV2RDTzBGQlEyaENPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1kwRkJZeXhQUVVGUE8wRkJRM0pDTEdkQ1FVRm5RaXhSUVVGUk8wRkJRM2hDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3TzBGQlJVdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREczdPenM3T3pzN096czdPenRCUTI1RllUczdRVUZGWWl4WlFVRlpMRzFDUVVGUExFTkJRVU1zYlVSQlFWVTdPMEZCUlRsQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3T3pzN096czdPenM3T3p0QlExaGhPenRCUVVWaUxGbEJRVmtzYlVKQlFVOHNRMEZCUXl4eFJFRkJXVHM3UVVGRmFFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEU5QlFVODdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR2xDUVVGcFFpeGxRVUZsT3p0QlFVVm9RenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenM3UVVGRlNEdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRjRVJoT3p0QlFVVmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3JRa0ZCSzBJN1FVRkRMMEk3UVVGRFFUdEJRVU5CTEZkQlFWY3NVMEZCVXp0QlFVTndRaXhoUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRE1VSmhPenRCUVVWaUxGZEJRVmNzYlVKQlFVOHNRMEZCUXl4blJVRkJaMEk3TzBGQlJXNURPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeGhRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTEdGQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNZVUZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWl4aFFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMR0ZCUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhoUVVGaExGRkJRVkU3UVVGRGNrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4aFFVRmhPMEZCUTNoQ0xGZEJRVmNzVTBGQlV6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNiVU5CUVcxRExFOUJRVTg3UVVGRE1VTTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMRk5CUVZNc1IwRkJSeXhUUVVGVE8wRkJRelZETERKQ1FVRXlRanRCUVVNelFqdEJRVU5CTzBGQlEwRXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQkxIVkRRVUYxUXl4UFFVRlBPMEZCUXpsRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEU5QlFVODdRVUZEYkVJc1lVRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFRDeG5RMEZCWjBNN1FVRkRhRU1zUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3gxUTBGQmRVTXNUMEZCVHp0QlFVTTVRenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFOUJRVTg3UVVGRGJFSXNWMEZCVnl4UFFVRlBPMEZCUTJ4Q0xGZEJRVmNzVDBGQlR6dEJRVU5zUWl4WlFVRlpMRTlCUVU4N1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPMEZEZGxaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2REUVVGblF5eFJRVUZSTzBGQlEzaERPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4VlFVRlZMRTFCUVUwN1FVRkRhRUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h2UTBGQmIwTXNPRUpCUVRoQ08wRkJRMnhGT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVlVGQlZTeHZRa0ZCYjBJN1FVRkRPVUk3UVVGRFFUczdRVUZGUVR0QlFVTkJMRlZCUVZVc1ZVRkJWVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNXVUZCV1R0QlFVTTNRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc0swSkJRU3RDTEhOQ1FVRnpRanRCUVVOeVJEdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMQ3RDUVVFclFpeFJRVUZSTzBGQlEzWkRPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNa0pCUVRKQ0xGRkJRVkU3UVVGRGJrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzSzBKQlFTdENMRkZCUVZFN1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMR1ZCUVdVN1FVRkRiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHdERRVUZyUXp0QlFVTnNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkROMU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenRCUVVsQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUWtGQmRVSXNjMEpCUVhOQ08wRkJRemRETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVSkJRWEZDTzBGQlEzSkNPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFEwRkJjVU03TzBGQlJYSkRPMEZCUTBFN1FVRkRRVHM3UVVGRlFTd3lRa0ZCTWtJN1FVRkRNMEk3UVVGRFFUdEJRVU5CTzBGQlEwRXNORUpCUVRSQ0xGVkJRVlU3T3pzN096czdPenM3T3pzN096dEJRM0pNZEVNc2EwSkJRV1U3U1VGRFlpeEpRVUZKTEVWQlFVVXNUVUZCVFR0RFFVTkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBwa0xHbEhRVUY1Ump0QlFVVjZSaXg1UjBGQmRVSTdRVUZEZGtJc01FWkJRWEZETzBGQlIzSkRPMGxCV1VVc1owSkJRVzlDTEUxQlFXdENPMUZCV0RsQ0xGZEJRVTBzUjBGQll5eHBRa0ZCWVR0UlFVVnFReXhsUVVGVkxFZEJRV1VzUlVGQlJUdFJRVlZxUXl4SlFVRkhMRTFCUVUwc1JVRkJSVHRaUVVOVUxFbEJRVWtzUTBGQlF5eE5RVUZOTEhsQ1FVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVXNzVFVGQlRTeERRVUZETzFOQlF6RkRPMUZCUTBRc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eGxRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGNrUXNRMEZCUXp0SlFWcEVMSE5DUVVGSkxDdENRVUZYTzJGQlFXWTdXVUZEUlN4SlFVRk5MRTFCUVUwc1IwRkJkVUk3WjBKQlEycERMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVODdZVUZETjBJN1dVRkRSQ3hQUVVGUExFMUJRVTA3VVVGRFppeERRVUZET3pzN1QwRkJRVHRKUVZORUxEQkNRVUZUTEVkQlFWUXNWVUZCVlN4RlFVRnpSRHRSUVVNNVJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEdkQ1FVRk5MRWxCUVVrc1UwRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSVUZCY0VJc1EwRkJiMElzUTBGQlF6dEpRVU0zUlN4RFFVRkRPMGxCUlVRc01rSkJRVlVzUjBGQlZpeFZRVUZYTEVWQlFUaERPMUZCUTNaRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zYTBKQlFWRXNTVUZCU1N4VFFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeEZRVUY0UWl4RFFVRjNRaXhEUVVGRE8wbEJRM0JHTEVOQlFVTTdTVUZGUkN3clFrRkJZeXhIUVVGa0xGVkJRV1VzUlVGQmMwTTdVVUZEYmtRc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzWlVGQlN5eEpRVUZKTEZOQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRnNReXhEUVVGclF5eERRVUZETzBsQlEzSkhMRU5CUVVNN1NVRkZSQ3huUTBGQlpTeEhRVUZtTEZWQlFXZENMRVZCUVhORE8xRkJRM0JFTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZMR1ZCUVVzc1NVRkJTU3hUUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQmJFTXNRMEZCYTBNc1EwRkJRenRKUVVOMFJ5eERRVUZETzBsQlJVUXNkMEpCUVU4c1IwRkJVQ3hWUVVGUkxFVkJRWE5ETzFGQlF6VkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEzWkNMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJTeERRVUZETzBsQlF6RkNMRU5CUVVNN1NVRkZSQ3d3UWtGQlV5eEhRVUZVTEZWQlFWVXNUVUZCYVVJN1VVRkRla0lzU1VGQlNTeERRVUZETEUxQlFVMHNlVUpCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlN5eE5RVUZOTEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWTkxHRkJRVTBzUjBGQllpeFZRVUZqTEZsQlFYZENPMUZCUTNCRExFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJDd3lRa0ZCVlN4SFFVRldMRlZCUVZjc1NVRkJhVUk3VVVGRE1VSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFVkJRVVU3VVVGREwwSXNTMEZCU1N4SlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRGNrSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTJoRE8xRkJRMFFzVDBGQlR5eFJRVUZSTzBsQlEycENMRU5CUVVNN1NVRkZSQ3d5UWtGQlZTeEhRVUZXTzFGQlEwVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1ZVRkJWVHRKUVVONFFpeERRVUZETzBsQlJVUXNLMEpCUVdNc1IwRkJaQ3hWUVVGbExGVkJRV3RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRmxCUVRSQ08xRkJRVFZDTEdkRVFVRTBRanRSUVVNM1JTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmxCUVZrc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlJVUXNOa0pCUVZrc1IwRkJXaXhWUVVGaExFMUJRV01zUlVGQlJTeFpRVUUwUWp0UlFVRjZSQ3hwUWtGNVEwTTdVVUY2UXpSQ0xHZEVRVUUwUWp0UlFVTjJSQ3hKUVVGTkxGTkJRVk1zUjBGQll5eEZRVUZGTzJkRFFVTnlRaXhIUVVGSE8xbEJRMWdzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVVNc1QwRkJaMElzUlVGQlJTeFRRVUY1UWp0blFrRkJla0lzTUVOQlFYbENPMmRDUVVVelJDeEpRVUZOTEVkQlFVY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dG5Ra0ZETlVJc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZEWWl4TFFVRkxMRVZCUTB3c1NVRkJTVHRuUWtGRlVpeEpRVUZITEU5QlFVOHNUMEZCVHl4TFFVRkxMRkZCUVZFc1JVRkJSVHR2UWtGRE9VSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zTmtKQlFUWkNMRVZCUVVVc1ZVRkJReXhEUVVGRExFVkJRVVVzUjBGQlZ6dDNRa0ZET1VRc1NVRkJSeXhSUVVGUkxFbEJRVWtzVDBGQlR5eEZRVUZGT3pSQ1FVTjBRaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03ZVVKQlF6ZERPM2RDUVVORUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhVUpCUVdVc1IwRkJSeXhyUTBGQkswSXNRMEZCUXp0dlFrRkRjRVVzUTBGQlF5eERRVUZETzI5Q1FVTkdMRWxCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJUdDNRa0ZEYUVJc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eExRVUZMTzNGQ1FVTjBRanR2UWtGRFJDeEpRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVN2QwSkJRMllzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpPM0ZDUVVOd1FqdHBRa0ZEUmp0blFrRkRSQ3hKUVVGTkxFMUJRVTBzYTBOQlFVOHNTMEZCU1N4RFFVRkRMRTFCUVUwc1IwRkJTeXhaUVVGWkxFZEJRVXNzVTBGQlV5eERRVUZETzJkQ1FVTTVSQ3hKUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEV0QlFVc3NUVUZCVFN4RlFVRkZPMjlDUVVONlFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SlFVRkpMRXRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETzJsQ1FVTnlRenRuUWtGRlJDeEpRVUZOTEZkQlFWY3NZMEZEWml4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGRGJFSXNSMEZCUnl4RlFVRkZMR05CUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkRhRU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZEWWl4SlFVRkpMRlZCUTBRc1RVRkJUU3hEUVVOV08yZENRVU5FTEU5QlFVOHNTMEZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGVFTXNRMEZCUXpzN1VVRnVRMGdzUzBGQlNTeEpRVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTVHR2UWtGQmJFSXNSMEZCUnp0VFFXOURXanRSUVVORUxFOUJRVThzVTBGQlV6dEpRVVZzUWl4RFFVRkRPMGxCUlVnc1lVRkJRenRCUVVGRUxFTkJRVU1pTENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQjdYRzVjZEZ4MGRtRnlJR0VnUFNCbVlXTjBiM0o1S0NrN1hHNWNkRngwWm05eUtIWmhjaUJwSUdsdUlHRXBJQ2gwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnUHlCbGVIQnZjblJ6SURvZ2NtOXZkQ2xiYVYwZ1BTQmhXMmxkTzF4dVhIUjlYRzU5S1NoM2FXNWtiM2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0JjSWk0dmMzSmpMMjFoYVc0dWRITmNJaWs3WEc0aUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDJGNGFXOXpKeWs3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1MllYSWdjMlYwZEd4bElEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5amIzSmxMM05sZEhSc1pTY3BPMXh1ZG1GeUlHSjFhV3hrVlZKTUlEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5b1pXeHdaWEp6TDJKMWFXeGtWVkpNSnlrN1hHNTJZWElnWW5WcGJHUkdkV3hzVUdGMGFDQTlJSEpsY1hWcGNtVW9KeTR1TDJOdmNtVXZZblZwYkdSR2RXeHNVR0YwYUNjcE8xeHVkbUZ5SUhCaGNuTmxTR1ZoWkdWeWN5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmFHVnNjR1Z5Y3k5d1lYSnpaVWhsWVdSbGNuTW5LVHRjYm5aaGNpQnBjMVZTVEZOaGJXVlBjbWxuYVc0Z1BTQnlaWEYxYVhKbEtDY3VMeTR1TDJobGJIQmxjbk12YVhOVlVreFRZVzFsVDNKcFoybHVKeWs3WEc1MllYSWdZM0psWVhSbFJYSnliM0lnUFNCeVpYRjFhWEpsS0NjdUxpOWpiM0psTDJOeVpXRjBaVVZ5Y205eUp5azdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnZUdoeVFXUmhjSFJsY2loamIyNW1hV2NwSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVJR1JwYzNCaGRHTm9XR2h5VW1WeGRXVnpkQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJSHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRVJoZEdFZ1BTQmpiMjVtYVdjdVpHRjBZVHRjYmlBZ0lDQjJZWElnY21WeGRXVnpkRWhsWVdSbGNuTWdQU0JqYjI1bWFXY3VhR1ZoWkdWeWN6dGNibHh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMFp2Y20xRVlYUmhLSEpsY1hWbGMzUkVZWFJoS1NrZ2UxeHVJQ0FnSUNBZ1pHVnNaWFJsSUhKbGNYVmxjM1JJWldGa1pYSnpXeWREYjI1MFpXNTBMVlI1Y0dVblhUc2dMeThnVEdWMElIUm9aU0JpY205M2MyVnlJSE5sZENCcGRGeHVJQ0FnSUgxY2JseHVJQ0FnSUhaaGNpQnlaWEYxWlhOMElEMGdibVYzSUZoTlRFaDBkSEJTWlhGMVpYTjBLQ2s3WEc1Y2JpQWdJQ0F2THlCSVZGUlFJR0poYzJsaklHRjFkR2hsYm5ScFkyRjBhVzl1WEc0Z0lDQWdhV1lnS0dOdmJtWnBaeTVoZFhSb0tTQjdYRzRnSUNBZ0lDQjJZWElnZFhObGNtNWhiV1VnUFNCamIyNW1hV2N1WVhWMGFDNTFjMlZ5Ym1GdFpTQjhmQ0FuSnp0Y2JpQWdJQ0FnSUhaaGNpQndZWE56ZDI5eVpDQTlJR052Ym1acFp5NWhkWFJvTG5CaGMzTjNiM0prSUh4OElDY25PMXh1SUNBZ0lDQWdjbVZ4ZFdWemRFaGxZV1JsY25NdVFYVjBhRzl5YVhwaGRHbHZiaUE5SUNkQ1lYTnBZeUFuSUNzZ1luUnZZU2gxYzJWeWJtRnRaU0FySUNjNkp5QXJJSEJoYzNOM2IzSmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWm5Wc2JGQmhkR2dnUFNCaWRXbHNaRVoxYkd4UVlYUm9LR052Ym1acFp5NWlZWE5sVlZKTUxDQmpiMjVtYVdjdWRYSnNLVHRjYmlBZ0lDQnlaWEYxWlhOMExtOXdaVzRvWTI5dVptbG5MbTFsZEdodlpDNTBiMVZ3Y0dWeVEyRnpaU2dwTENCaWRXbHNaRlZTVENobWRXeHNVR0YwYUN3Z1kyOXVabWxuTG5CaGNtRnRjeXdnWTI5dVptbG5MbkJoY21GdGMxTmxjbWxoYkdsNlpYSXBMQ0IwY25WbEtUdGNibHh1SUNBZ0lDOHZJRk5sZENCMGFHVWdjbVZ4ZFdWemRDQjBhVzFsYjNWMElHbHVJRTFUWEc0Z0lDQWdjbVZ4ZFdWemRDNTBhVzFsYjNWMElEMGdZMjl1Wm1sbkxuUnBiV1Z2ZFhRN1hHNWNiaUFnSUNBdkx5Qk1hWE4wWlc0Z1ptOXlJSEpsWVdSNUlITjBZWFJsWEc0Z0lDQWdjbVZ4ZFdWemRDNXZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVWdQU0JtZFc1amRHbHZiaUJvWVc1a2JHVk1iMkZrS0NrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0Z5WlhGMVpYTjBJSHg4SUhKbGNYVmxjM1F1Y21WaFpIbFRkR0YwWlNBaFBUMGdOQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklGUm9aU0J5WlhGMVpYTjBJR1Z5Y205eVpXUWdiM1YwSUdGdVpDQjNaU0JrYVdSdUozUWdaMlYwSUdFZ2NtVnpjRzl1YzJVc0lIUm9hWE1nZDJsc2JDQmlaVnh1SUNBZ0lDQWdMeThnYUdGdVpHeGxaQ0JpZVNCdmJtVnljbTl5SUdsdWMzUmxZV1JjYmlBZ0lDQWdJQzh2SUZkcGRHZ2diMjVsSUdWNFkyVndkR2x2YmpvZ2NtVnhkV1Z6ZENCMGFHRjBJSFZ6YVc1bklHWnBiR1U2SUhCeWIzUnZZMjlzTENCdGIzTjBJR0p5YjNkelpYSnpYRzRnSUNBZ0lDQXZMeUIzYVd4c0lISmxkSFZ5YmlCemRHRjBkWE1nWVhNZ01DQmxkbVZ1SUhSb2IzVm5hQ0JwZENkeklHRWdjM1ZqWTJWemMyWjFiQ0J5WlhGMVpYTjBYRzRnSUNBZ0lDQnBaaUFvY21WeGRXVnpkQzV6ZEdGMGRYTWdQVDA5SURBZ0ppWWdJU2h5WlhGMVpYTjBMbkpsYzNCdmJuTmxWVkpNSUNZbUlISmxjWFZsYzNRdWNtVnpjRzl1YzJWVlVrd3VhVzVrWlhoUFppZ25abWxzWlRvbktTQTlQVDBnTUNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJRY21Wd1lYSmxJSFJvWlNCeVpYTndiMjV6WlZ4dUlDQWdJQ0FnZG1GeUlISmxjM0J2Ym5ObFNHVmhaR1Z5Y3lBOUlDZG5aWFJCYkd4U1pYTndiMjV6WlVobFlXUmxjbk1uSUdsdUlISmxjWFZsYzNRZ1B5QndZWEp6WlVobFlXUmxjbk1vY21WeGRXVnpkQzVuWlhSQmJHeFNaWE53YjI1elpVaGxZV1JsY25Nb0tTa2dPaUJ1ZFd4c08xeHVJQ0FnSUNBZ2RtRnlJSEpsYzNCdmJuTmxSR0YwWVNBOUlDRmpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxJSHg4SUdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVZ1BUMDlJQ2QwWlhoMEp5QS9JSEpsY1hWbGMzUXVjbVZ6Y0c5dWMyVlVaWGgwSURvZ2NtVnhkV1Z6ZEM1eVpYTndiMjV6WlR0Y2JpQWdJQ0FnSUhaaGNpQnlaWE53YjI1elpTQTlJSHRjYmlBZ0lDQWdJQ0FnWkdGMFlUb2djbVZ6Y0c5dWMyVkVZWFJoTEZ4dUlDQWdJQ0FnSUNCemRHRjBkWE02SUhKbGNYVmxjM1F1YzNSaGRIVnpMRnh1SUNBZ0lDQWdJQ0J6ZEdGMGRYTlVaWGgwT2lCeVpYRjFaWE4wTG5OMFlYUjFjMVJsZUhRc1hHNGdJQ0FnSUNBZ0lHaGxZV1JsY25NNklISmxjM0J2Ym5ObFNHVmhaR1Z5Y3l4Y2JpQWdJQ0FnSUNBZ1kyOXVabWxuT2lCamIyNW1hV2NzWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1E2SUhKbGNYVmxjM1JjYmlBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUhObGRIUnNaU2h5WlhOdmJIWmxMQ0J5WldwbFkzUXNJSEpsYzNCdmJuTmxLVHRjYmx4dUlDQWdJQ0FnTHk4Z1EyeGxZVzRnZFhBZ2NtVnhkV1Z6ZEZ4dUlDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1MWJHdzdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lDOHZJRWhoYm1Sc1pTQmljbTkzYzJWeUlISmxjWFZsYzNRZ1kyRnVZMlZzYkdGMGFXOXVJQ2hoY3lCdmNIQnZjMlZrSUhSdklHRWdiV0Z1ZFdGc0lHTmhibU5sYkd4aGRHbHZiaWxjYmlBZ0lDQnlaWEYxWlhOMExtOXVZV0p2Y25RZ1BTQm1kVzVqZEdsdmJpQm9ZVzVrYkdWQlltOXlkQ2dwSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hjbVZ4ZFdWemRDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWduVW1WeGRXVnpkQ0JoWW05eWRHVmtKeXdnWTI5dVptbG5MQ0FuUlVOUFRrNUJRazlTVkVWRUp5d2djbVZ4ZFdWemRDa3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElHeHZkeUJzWlhabGJDQnVaWFIzYjNKcklHVnljbTl5YzF4dUlDQWdJSEpsY1hWbGMzUXViMjVsY25KdmNpQTlJR1oxYm1OMGFXOXVJR2hoYm1Sc1pVVnljbTl5S0NrZ2UxeHVJQ0FnSUNBZ0x5OGdVbVZoYkNCbGNuSnZjbk1nWVhKbElHaHBaR1JsYmlCbWNtOXRJSFZ6SUdKNUlIUm9aU0JpY205M2MyVnlYRzRnSUNBZ0lDQXZMeUJ2Ym1WeWNtOXlJSE5vYjNWc1pDQnZibXg1SUdacGNtVWdhV1lnYVhRbmN5QmhJRzVsZEhkdmNtc2daWEp5YjNKY2JpQWdJQ0FnSUhKbGFtVmpkQ2hqY21WaGRHVkZjbkp2Y2lnblRtVjBkMjl5YXlCRmNuSnZjaWNzSUdOdmJtWnBaeXdnYm5Wc2JDd2djbVZ4ZFdWemRDa3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGJHVmhiaUIxY0NCeVpYRjFaWE4wWEc0Z0lDQWdJQ0J5WlhGMVpYTjBJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ0x5OGdTR0Z1Wkd4bElIUnBiV1Z2ZFhSY2JpQWdJQ0J5WlhGMVpYTjBMbTl1ZEdsdFpXOTFkQ0E5SUdaMWJtTjBhVzl1SUdoaGJtUnNaVlJwYldWdmRYUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2RHbHRaVzkxZEVWeWNtOXlUV1Z6YzJGblpTQTlJQ2QwYVcxbGIzVjBJRzltSUNjZ0t5QmpiMjVtYVdjdWRHbHRaVzkxZENBcklDZHRjeUJsZUdObFpXUmxaQ2M3WEc0Z0lDQWdJQ0JwWmlBb1kyOXVabWxuTG5ScGJXVnZkWFJGY25KdmNrMWxjM05oWjJVcElIdGNiaUFnSUNBZ0lDQWdkR2x0Wlc5MWRFVnljbTl5VFdWemMyRm5aU0E5SUdOdmJtWnBaeTUwYVcxbGIzVjBSWEp5YjNKTlpYTnpZV2RsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WcVpXTjBLR055WldGMFpVVnljbTl5S0hScGJXVnZkWFJGY25KdmNrMWxjM05oWjJVc0lHTnZibVpwWnl3Z0owVkRUMDVPUVVKUFVsUkZSQ2NzWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1FwS1R0Y2JseHVJQ0FnSUNBZ0x5OGdRMnhsWVc0Z2RYQWdjbVZ4ZFdWemRGeHVJQ0FnSUNBZ2NtVnhkV1Z6ZENBOUlHNTFiR3c3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJQzh2SUVGa1pDQjRjM0ptSUdobFlXUmxjbHh1SUNBZ0lDOHZJRlJvYVhNZ2FYTWdiMjVzZVNCa2IyNWxJR2xtSUhKMWJtNXBibWNnYVc0Z1lTQnpkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBMbHh1SUNBZ0lDOHZJRk53WldOcFptbGpZV3hzZVNCdWIzUWdhV1lnZDJVbmNtVWdhVzRnWVNCM1pXSWdkMjl5YTJWeUxDQnZjaUJ5WldGamRDMXVZWFJwZG1VdVhHNGdJQ0FnYVdZZ0tIVjBhV3h6TG1selUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1MktDa3BJSHRjYmlBZ0lDQWdJSFpoY2lCamIyOXJhV1Z6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTlvWld4d1pYSnpMMk52YjJ0cFpYTW5LVHRjYmx4dUlDQWdJQ0FnTHk4Z1FXUmtJSGh6Y21ZZ2FHVmhaR1Z5WEc0Z0lDQWdJQ0IyWVhJZ2VITnlabFpoYkhWbElEMGdLR052Ym1acFp5NTNhWFJvUTNKbFpHVnVkR2xoYkhNZ2ZId2dhWE5WVWt4VFlXMWxUM0pwWjJsdUtHWjFiR3hRWVhSb0tTa2dKaVlnWTI5dVptbG5Mbmh6Y21aRGIyOXJhV1ZPWVcxbElEOWNiaUFnSUNBZ0lDQWdZMjl2YTJsbGN5NXlaV0ZrS0dOdmJtWnBaeTU0YzNKbVEyOXZhMmxsVG1GdFpTa2dPbHh1SUNBZ0lDQWdJQ0IxYm1SbFptbHVaV1E3WEc1Y2JpQWdJQ0FnSUdsbUlDaDRjM0ptVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkRWhsWVdSbGNuTmJZMjl1Wm1sbkxuaHpjbVpJWldGa1pYSk9ZVzFsWFNBOUlIaHpjbVpXWVd4MVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJaR1FnYUdWaFpHVnljeUIwYnlCMGFHVWdjbVZ4ZFdWemRGeHVJQ0FnSUdsbUlDZ25jMlYwVW1WeGRXVnpkRWhsWVdSbGNpY2dhVzRnY21WeGRXVnpkQ2tnZTF4dUlDQWdJQ0FnZFhScGJITXVabTl5UldGamFDaHlaWEYxWlhOMFNHVmhaR1Z5Y3l3Z1puVnVZM1JwYjI0Z2MyVjBVbVZ4ZFdWemRFaGxZV1JsY2loMllXd3NJR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSEpsY1hWbGMzUkVZWFJoSUQwOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCclpYa3VkRzlNYjNkbGNrTmhjMlVvS1NBOVBUMGdKMk52Ym5SbGJuUXRkSGx3WlNjcElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCU1pXMXZkbVVnUTI5dWRHVnVkQzFVZVhCbElHbG1JR1JoZEdFZ2FYTWdkVzVrWldacGJtVmtYRzRnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSEpsY1hWbGMzUklaV0ZrWlhKelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdUM1JvWlhKM2FYTmxJR0ZrWkNCb1pXRmtaWElnZEc4Z2RHaGxJSEpsY1hWbGMzUmNiaUFnSUNBZ0lDQWdJQ0J5WlhGMVpYTjBMbk5sZEZKbGNYVmxjM1JJWldGa1pYSW9hMlY1TENCMllXd3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCQlpHUWdkMmwwYUVOeVpXUmxiblJwWVd4eklIUnZJSEpsY1hWbGMzUWdhV1lnYm1WbFpHVmtYRzRnSUNBZ2FXWWdLQ0YxZEdsc2N5NXBjMVZ1WkdWbWFXNWxaQ2hqYjI1bWFXY3VkMmwwYUVOeVpXUmxiblJwWVd4ektTa2dlMXh1SUNBZ0lDQWdjbVZ4ZFdWemRDNTNhWFJvUTNKbFpHVnVkR2xoYkhNZ1BTQWhJV052Ym1acFp5NTNhWFJvUTNKbFpHVnVkR2xoYkhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJSEpsYzNCdmJuTmxWSGx3WlNCMGJ5QnlaWEYxWlhOMElHbG1JRzVsWldSbFpGeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWNtVnpjRzl1YzJWVWVYQmxLU0I3WEc0Z0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMExuSmxjM0J2Ym5ObFZIbHdaU0E5SUdOdmJtWnBaeTV5WlhOd2IyNXpaVlI1Y0dVN1hHNGdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUVWNGNHVmpkR1ZrSUVSUFRVVjRZMlZ3ZEdsdmJpQjBhSEp2ZDI0Z1lua2dZbkp2ZDNObGNuTWdibTkwSUdOdmJYQmhkR2xpYkdVZ1dFMU1TSFIwY0ZKbGNYVmxjM1FnVEdWMlpXd2dNaTVjYmlBZ0lDQWdJQ0FnTHk4Z1FuVjBMQ0IwYUdseklHTmhiaUJpWlNCemRYQndjbVZ6YzJWa0lHWnZjaUFuYW5OdmJpY2dkSGx3WlNCaGN5QnBkQ0JqWVc0Z1ltVWdjR0Z5YzJWa0lHSjVJR1JsWm1GMWJIUWdKM1J5WVc1elptOXliVkpsYzNCdmJuTmxKeUJtZFc1amRHbHZiaTVjYmlBZ0lDQWdJQ0FnYVdZZ0tHTnZibVpwWnk1eVpYTndiMjV6WlZSNWNHVWdJVDA5SUNkcWMyOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QklZVzVrYkdVZ2NISnZaM0psYzNNZ2FXWWdibVZsWkdWa1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamIyNW1hV2N1YjI1RWIzZHViRzloWkZCeWIyZHlaWE56SUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM0J5YjJkeVpYTnpKeXdnWTI5dVptbG5MbTl1Ukc5M2JteHZZV1JRY205bmNtVnpjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVG05MElHRnNiQ0JpY205M2MyVnljeUJ6ZFhCd2IzSjBJSFZ3Ykc5aFpDQmxkbVZ1ZEhOY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdOdmJtWnBaeTV2YmxWd2JHOWhaRkJ5YjJkeVpYTnpJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JSEpsY1hWbGMzUXVkWEJzYjJGa0tTQjdYRzRnSUNBZ0lDQnlaWEYxWlhOMExuVndiRzloWkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nkd2NtOW5jbVZ6Y3ljc0lHTnZibVpwWnk1dmJsVndiRzloWkZCeWIyZHlaWE56S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyOXVabWxuTG1OaGJtTmxiRlJ2YTJWdUtTQjdYRzRnSUNBZ0lDQXZMeUJJWVc1a2JHVWdZMkZ1WTJWc2JHRjBhVzl1WEc0Z0lDQWdJQ0JqYjI1bWFXY3VZMkZ1WTJWc1ZHOXJaVzR1Y0hKdmJXbHpaUzUwYUdWdUtHWjFibU4wYVc5dUlHOXVRMkZ1WTJWc1pXUW9ZMkZ1WTJWc0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGNtVnhkV1Z6ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1F1WVdKdmNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WcVpXTjBLR05oYm1ObGJDazdYRzRnSUNBZ0lDQWdJQzh2SUVOc1pXRnVJSFZ3SUhKbGNYVmxjM1JjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1MWJHdzdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvY21WeGRXVnpkRVJoZEdFZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnY21WeGRXVnpkRVJoZEdFZ1BTQnVkV3hzTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUZObGJtUWdkR2hsSUhKbGNYVmxjM1JjYmlBZ0lDQnlaWEYxWlhOMExuTmxibVFvY21WeGRXVnpkRVJoZEdFcE8xeHVJQ0I5S1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZkWFJwYkhNbktUdGNiblpoY2lCaWFXNWtJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDJKcGJtUW5LVHRjYm5aaGNpQkJlR2x2Y3lBOUlISmxjWFZwY21Vb0p5NHZZMjl5WlM5QmVHbHZjeWNwTzF4dWRtRnlJRzFsY21kbFEyOXVabWxuSUQwZ2NtVnhkV2x5WlNnbkxpOWpiM0psTDIxbGNtZGxRMjl1Wm1sbkp5azdYRzUyWVhJZ1pHVm1ZWFZzZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMlJsWm1GMWJIUnpKeWs3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdGdUlHbHVjM1JoYm1ObElHOW1JRUY0YVc5elhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdSbFptRjFiSFJEYjI1bWFXY2dWR2hsSUdSbFptRjFiSFFnWTI5dVptbG5JR1p2Y2lCMGFHVWdhVzV6ZEdGdVkyVmNiaUFxSUVCeVpYUjFjbTRnZTBGNGFXOXpmU0JCSUc1bGR5QnBibk4wWVc1alpTQnZaaUJCZUdsdmMxeHVJQ292WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZKYm5OMFlXNWpaU2hrWldaaGRXeDBRMjl1Wm1sbktTQjdYRzRnSUhaaGNpQmpiMjUwWlhoMElEMGdibVYzSUVGNGFXOXpLR1JsWm1GMWJIUkRiMjVtYVdjcE8xeHVJQ0IyWVhJZ2FXNXpkR0Z1WTJVZ1BTQmlhVzVrS0VGNGFXOXpMbkJ5YjNSdmRIbHdaUzV5WlhGMVpYTjBMQ0JqYjI1MFpYaDBLVHRjYmx4dUlDQXZMeUJEYjNCNUlHRjRhVzl6TG5CeWIzUnZkSGx3WlNCMGJ5QnBibk4wWVc1alpWeHVJQ0IxZEdsc2N5NWxlSFJsYm1Rb2FXNXpkR0Z1WTJVc0lFRjRhVzl6TG5CeWIzUnZkSGx3WlN3Z1kyOXVkR1Y0ZENrN1hHNWNiaUFnTHk4Z1EyOXdlU0JqYjI1MFpYaDBJSFJ2SUdsdWMzUmhibU5sWEc0Z0lIVjBhV3h6TG1WNGRHVnVaQ2hwYm5OMFlXNWpaU3dnWTI5dWRHVjRkQ2s3WEc1Y2JpQWdjbVYwZFhKdUlHbHVjM1JoYm1ObE8xeHVmVnh1WEc0dkx5QkRjbVZoZEdVZ2RHaGxJR1JsWm1GMWJIUWdhVzV6ZEdGdVkyVWdkRzhnWW1VZ1pYaHdiM0owWldSY2JuWmhjaUJoZUdsdmN5QTlJR055WldGMFpVbHVjM1JoYm1ObEtHUmxabUYxYkhSektUdGNibHh1THk4Z1JYaHdiM05sSUVGNGFXOXpJR05zWVhOeklIUnZJR0ZzYkc5M0lHTnNZWE56SUdsdWFHVnlhWFJoYm1ObFhHNWhlR2x2Y3k1QmVHbHZjeUE5SUVGNGFXOXpPMXh1WEc0dkx5QkdZV04wYjNKNUlHWnZjaUJqY21WaGRHbHVaeUJ1WlhjZ2FXNXpkR0Z1WTJWelhHNWhlR2x2Y3k1amNtVmhkR1VnUFNCbWRXNWpkR2x2YmlCamNtVmhkR1VvYVc1emRHRnVZMlZEYjI1bWFXY3BJSHRjYmlBZ2NtVjBkWEp1SUdOeVpXRjBaVWx1YzNSaGJtTmxLRzFsY21kbFEyOXVabWxuS0dGNGFXOXpMbVJsWm1GMWJIUnpMQ0JwYm5OMFlXNWpaVU52Ym1acFp5a3BPMXh1ZlR0Y2JseHVMeThnUlhod2IzTmxJRU5oYm1ObGJDQW1JRU5oYm1ObGJGUnZhMlZ1WEc1aGVHbHZjeTVEWVc1alpXd2dQU0J5WlhGMWFYSmxLQ2N1TDJOaGJtTmxiQzlEWVc1alpXd25LVHRjYm1GNGFXOXpMa05oYm1ObGJGUnZhMlZ1SUQwZ2NtVnhkV2x5WlNnbkxpOWpZVzVqWld3dlEyRnVZMlZzVkc5clpXNG5LVHRjYm1GNGFXOXpMbWx6UTJGdVkyVnNJRDBnY21WeGRXbHlaU2duTGk5allXNWpaV3d2YVhORFlXNWpaV3duS1R0Y2JseHVMeThnUlhod2IzTmxJR0ZzYkM5emNISmxZV1JjYm1GNGFXOXpMbUZzYkNBOUlHWjFibU4wYVc5dUlHRnNiQ2h3Y205dGFYTmxjeWtnZTF4dUlDQnlaWFIxY200Z1VISnZiV2x6WlM1aGJHd29jSEp2YldselpYTXBPMXh1ZlR0Y2JtRjRhVzl6TG5Od2NtVmhaQ0E5SUhKbGNYVnBjbVVvSnk0dmFHVnNjR1Z5Y3k5emNISmxZV1FuS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmhlR2x2Y3p0Y2JseHVMeThnUVd4c2IzY2dkWE5sSUc5bUlHUmxabUYxYkhRZ2FXMXdiM0owSUhONWJuUmhlQ0JwYmlCVWVYQmxVMk55YVhCMFhHNXRiMlIxYkdVdVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1lYaHBiM003WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFLbHh1SUNvZ1FTQmdRMkZ1WTJWc1lDQnBjeUJoYmlCdlltcGxZM1FnZEdoaGRDQnBjeUIwYUhKdmQyNGdkMmhsYmlCaGJpQnZjR1Z5WVhScGIyNGdhWE1nWTJGdVkyVnNaV1F1WEc0Z0tseHVJQ29nUUdOc1lYTnpYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaejE5SUcxbGMzTmhaMlVnVkdobElHMWxjM05oWjJVdVhHNGdLaTljYm1aMWJtTjBhVzl1SUVOaGJtTmxiQ2h0WlhOellXZGxLU0I3WEc0Z0lIUm9hWE11YldWemMyRm5aU0E5SUcxbGMzTmhaMlU3WEc1OVhHNWNia05oYm1ObGJDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY2dQU0JtZFc1amRHbHZiaUIwYjFOMGNtbHVaeWdwSUh0Y2JpQWdjbVYwZFhKdUlDZERZVzVqWld3bklDc2dLSFJvYVhNdWJXVnpjMkZuWlNBL0lDYzZJQ2NnS3lCMGFHbHpMbTFsYzNOaFoyVWdPaUFuSnlrN1hHNTlPMXh1WEc1RFlXNWpaV3d1Y0hKdmRHOTBlWEJsTGw5ZlEwRk9RMFZNWDE4Z1BTQjBjblZsTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFTmhibU5sYkR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUVOaGJtTmxiQ0E5SUhKbGNYVnBjbVVvSnk0dlEyRnVZMlZzSnlrN1hHNWNiaThxS2x4dUlDb2dRU0JnUTJGdVkyVnNWRzlyWlc1Z0lHbHpJR0Z1SUc5aWFtVmpkQ0IwYUdGMElHTmhiaUJpWlNCMWMyVmtJSFJ2SUhKbGNYVmxjM1FnWTJGdVkyVnNiR0YwYVc5dUlHOW1JR0Z1SUc5d1pYSmhkR2x2Ymk1Y2JpQXFYRzRnS2lCQVkyeGhjM05jYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHVjRaV04xZEc5eUlGUm9aU0JsZUdWamRYUnZjaUJtZFc1amRHbHZiaTVjYmlBcUwxeHVablZ1WTNScGIyNGdRMkZ1WTJWc1ZHOXJaVzRvWlhobFkzVjBiM0lwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJsZUdWamRYUnZjaUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMlY0WldOMWRHOXlJRzExYzNRZ1ltVWdZU0JtZFc1amRHbHZiaTRuS1R0Y2JpQWdmVnh1WEc0Z0lIWmhjaUJ5WlhOdmJIWmxVSEp2YldselpUdGNiaUFnZEdocGN5NXdjbTl0YVhObElEMGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRnY0hKdmJXbHpaVVY0WldOMWRHOXlLSEpsYzI5c2RtVXBJSHRjYmlBZ0lDQnlaWE52YkhabFVISnZiV2x6WlNBOUlISmxjMjlzZG1VN1hHNGdJSDBwTzF4dVhHNGdJSFpoY2lCMGIydGxiaUE5SUhSb2FYTTdYRzRnSUdWNFpXTjFkRzl5S0daMWJtTjBhVzl1SUdOaGJtTmxiQ2h0WlhOellXZGxLU0I3WEc0Z0lDQWdhV1lnS0hSdmEyVnVMbkpsWVhOdmJpa2dlMXh1SUNBZ0lDQWdMeThnUTJGdVkyVnNiR0YwYVc5dUlHaGhjeUJoYkhKbFlXUjVJR0psWlc0Z2NtVnhkV1Z6ZEdWa1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkRzlyWlc0dWNtVmhjMjl1SUQwZ2JtVjNJRU5oYm1ObGJDaHRaWE56WVdkbEtUdGNiaUFnSUNCeVpYTnZiSFpsVUhKdmJXbHpaU2gwYjJ0bGJpNXlaV0Z6YjI0cE8xeHVJQ0I5S1R0Y2JuMWNibHh1THlvcVhHNGdLaUJVYUhKdmQzTWdZU0JnUTJGdVkyVnNZQ0JwWmlCallXNWpaV3hzWVhScGIyNGdhR0Z6SUdKbFpXNGdjbVZ4ZFdWemRHVmtMbHh1SUNvdlhHNURZVzVqWld4VWIydGxiaTV3Y205MGIzUjVjR1V1ZEdoeWIzZEpabEpsY1hWbGMzUmxaQ0E5SUdaMWJtTjBhVzl1SUhSb2NtOTNTV1pTWlhGMVpYTjBaV1FvS1NCN1hHNGdJR2xtSUNoMGFHbHpMbkpsWVhOdmJpa2dlMXh1SUNBZ0lIUm9jbTkzSUhSb2FYTXVjbVZoYzI5dU8xeHVJQ0I5WEc1OU8xeHVYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdZVzRnYjJKcVpXTjBJSFJvWVhRZ1kyOXVkR0ZwYm5NZ1lTQnVaWGNnWUVOaGJtTmxiRlJ2YTJWdVlDQmhibVFnWVNCbWRXNWpkR2x2YmlCMGFHRjBMQ0IzYUdWdUlHTmhiR3hsWkN4Y2JpQXFJR05oYm1ObGJITWdkR2hsSUdCRFlXNWpaV3hVYjJ0bGJtQXVYRzRnS2k5Y2JrTmhibU5sYkZSdmEyVnVMbk52ZFhKalpTQTlJR1oxYm1OMGFXOXVJSE52ZFhKalpTZ3BJSHRjYmlBZ2RtRnlJR05oYm1ObGJEdGNiaUFnZG1GeUlIUnZhMlZ1SUQwZ2JtVjNJRU5oYm1ObGJGUnZhMlZ1S0daMWJtTjBhVzl1SUdWNFpXTjFkRzl5S0dNcElIdGNiaUFnSUNCallXNWpaV3dnUFNCak8xeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCMGIydGxiam9nZEc5clpXNHNYRzRnSUNBZ1kyRnVZMlZzT2lCallXNWpaV3hjYmlBZ2ZUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1EyRnVZMlZzVkc5clpXNDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYVhORFlXNWpaV3dvZG1Gc2RXVXBJSHRjYmlBZ2NtVjBkWEp1SUNFaEtIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlEwRk9RMFZNWDE4cE8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJSFYwYVd4eklEMGdjbVZ4ZFdseVpTZ25MaTh1TGk5MWRHbHNjeWNwTzF4dWRtRnlJR0oxYVd4a1ZWSk1JRDBnY21WeGRXbHlaU2duTGk0dmFHVnNjR1Z5Y3k5aWRXbHNaRlZTVENjcE8xeHVkbUZ5SUVsdWRHVnlZMlZ3ZEc5eVRXRnVZV2RsY2lBOUlISmxjWFZwY21Vb0p5NHZTVzUwWlhKalpYQjBiM0pOWVc1aFoyVnlKeWs3WEc1MllYSWdaR2x6Y0dGMFkyaFNaWEYxWlhOMElEMGdjbVZ4ZFdseVpTZ25MaTlrYVhOd1lYUmphRkpsY1hWbGMzUW5LVHRjYm5aaGNpQnRaWEpuWlVOdmJtWnBaeUE5SUhKbGNYVnBjbVVvSnk0dmJXVnlaMlZEYjI1bWFXY25LVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCdVpYY2dhVzV6ZEdGdVkyVWdiMllnUVhocGIzTmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2FXNXpkR0Z1WTJWRGIyNW1hV2NnVkdobElHUmxabUYxYkhRZ1kyOXVabWxuSUdadmNpQjBhR1VnYVc1emRHRnVZMlZjYmlBcUwxeHVablZ1WTNScGIyNGdRWGhwYjNNb2FXNXpkR0Z1WTJWRGIyNW1hV2NwSUh0Y2JpQWdkR2hwY3k1a1pXWmhkV3gwY3lBOUlHbHVjM1JoYm1ObFEyOXVabWxuTzF4dUlDQjBhR2x6TG1sdWRHVnlZMlZ3ZEc5eWN5QTlJSHRjYmlBZ0lDQnlaWEYxWlhOME9pQnVaWGNnU1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5S0Nrc1hHNGdJQ0FnY21WemNHOXVjMlU2SUc1bGR5QkpiblJsY21ObGNIUnZjazFoYm1GblpYSW9LVnh1SUNCOU8xeHVmVnh1WEc0dktpcGNiaUFxSUVScGMzQmhkR05vSUdFZ2NtVnhkV1Z6ZEZ4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JqYjI1bWFXY2dWR2hsSUdOdmJtWnBaeUJ6Y0dWamFXWnBZeUJtYjNJZ2RHaHBjeUJ5WlhGMVpYTjBJQ2h0WlhKblpXUWdkMmwwYUNCMGFHbHpMbVJsWm1GMWJIUnpLVnh1SUNvdlhHNUJlR2x2Y3k1d2NtOTBiM1I1Y0dVdWNtVnhkV1Z6ZENBOUlHWjFibU4wYVc5dUlISmxjWFZsYzNRb1kyOXVabWxuS1NCN1hHNGdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQXZMeUJCYkd4dmR5Qm1iM0lnWVhocGIzTW9KMlY0WVcxd2JHVXZkWEpzSjFzc0lHTnZibVpwWjEwcElHRWdiR0VnWm1WMFkyZ2dRVkJKWEc0Z0lHbG1JQ2gwZVhCbGIyWWdZMjl1Wm1sbklEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR052Ym1acFp5QTlJR0Z5WjNWdFpXNTBjMXN4WFNCOGZDQjdmVHRjYmlBZ0lDQmpiMjVtYVdjdWRYSnNJRDBnWVhKbmRXMWxiblJ6V3pCZE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHTnZibVpwWnlBOUlHTnZibVpwWnlCOGZDQjdmVHRjYmlBZ2ZWeHVYRzRnSUdOdmJtWnBaeUE5SUcxbGNtZGxRMjl1Wm1sbktIUm9hWE11WkdWbVlYVnNkSE1zSUdOdmJtWnBaeWs3WEc1Y2JpQWdMeThnVTJWMElHTnZibVpwWnk1dFpYUm9iMlJjYmlBZ2FXWWdLR052Ym1acFp5NXRaWFJvYjJRcElIdGNiaUFnSUNCamIyNW1hV2N1YldWMGFHOWtJRDBnWTI5dVptbG5MbTFsZEdodlpDNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEhNdWJXVjBhRzlrS1NCN1hHNGdJQ0FnWTI5dVptbG5MbTFsZEdodlpDQTlJSFJvYVhNdVpHVm1ZWFZzZEhNdWJXVjBhRzlrTG5SdlRHOTNaWEpEWVhObEtDazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdZMjl1Wm1sbkxtMWxkR2h2WkNBOUlDZG5aWFFuTzF4dUlDQjlYRzVjYmlBZ0x5OGdTRzl2YXlCMWNDQnBiblJsY21ObGNIUnZjbk1nYldsa1pHeGxkMkZ5WlZ4dUlDQjJZWElnWTJoaGFXNGdQU0JiWkdsemNHRjBZMmhTWlhGMVpYTjBMQ0IxYm1SbFptbHVaV1JkTzF4dUlDQjJZWElnY0hKdmJXbHpaU0E5SUZCeWIyMXBjMlV1Y21WemIyeDJaU2hqYjI1bWFXY3BPMXh1WEc0Z0lIUm9hWE11YVc1MFpYSmpaWEIwYjNKekxuSmxjWFZsYzNRdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlCMWJuTm9hV1owVW1WeGRXVnpkRWx1ZEdWeVkyVndkRzl5Y3locGJuUmxjbU5sY0hSdmNpa2dlMXh1SUNBZ0lHTm9ZV2x1TG5WdWMyaHBablFvYVc1MFpYSmpaWEIwYjNJdVpuVnNabWxzYkdWa0xDQnBiblJsY21ObGNIUnZjaTV5WldwbFkzUmxaQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lIUm9hWE11YVc1MFpYSmpaWEIwYjNKekxuSmxjM0J2Ym5ObExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z2NIVnphRkpsYzNCdmJuTmxTVzUwWlhKalpYQjBiM0p6S0dsdWRHVnlZMlZ3ZEc5eUtTQjdYRzRnSUNBZ1kyaGhhVzR1Y0hWemFDaHBiblJsY21ObGNIUnZjaTVtZFd4bWFXeHNaV1FzSUdsdWRHVnlZMlZ3ZEc5eUxuSmxhbVZqZEdWa0tUdGNiaUFnZlNrN1hHNWNiaUFnZDJocGJHVWdLR05vWVdsdUxteGxibWQwYUNrZ2UxeHVJQ0FnSUhCeWIyMXBjMlVnUFNCd2NtOXRhWE5sTG5Sb1pXNG9ZMmhoYVc0dWMyaHBablFvS1N3Z1kyaGhhVzR1YzJocFpuUW9LU2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY0hKdmJXbHpaVHRjYm4wN1hHNWNia0Y0YVc5ekxuQnliM1J2ZEhsd1pTNW5aWFJWY21rZ1BTQm1kVzVqZEdsdmJpQm5aWFJWY21rb1kyOXVabWxuS1NCN1hHNGdJR052Ym1acFp5QTlJRzFsY21kbFEyOXVabWxuS0hSb2FYTXVaR1ZtWVhWc2RITXNJR052Ym1acFp5azdYRzRnSUhKbGRIVnliaUJpZFdsc1pGVlNUQ2hqYjI1bWFXY3VkWEpzTENCamIyNW1hV2N1Y0dGeVlXMXpMQ0JqYjI1bWFXY3VjR0Z5WVcxelUyVnlhV0ZzYVhwbGNpa3VjbVZ3YkdGalpTZ3ZYbHhjUHk4c0lDY25LVHRjYm4wN1hHNWNiaTh2SUZCeWIzWnBaR1VnWVd4cFlYTmxjeUJtYjNJZ2MzVndjRzl5ZEdWa0lISmxjWFZsYzNRZ2JXVjBhRzlrYzF4dWRYUnBiSE11Wm05eVJXRmphQ2hiSjJSbGJHVjBaU2NzSUNkblpYUW5MQ0FuYUdWaFpDY3NJQ2R2Y0hScGIyNXpKMTBzSUdaMWJtTjBhVzl1SUdadmNrVmhZMmhOWlhSb2IyUk9iMFJoZEdFb2JXVjBhRzlrS1NCN1hHNGdJQzhxWlhOc2FXNTBJR1oxYm1NdGJtRnRaWE02TUNvdlhHNGdJRUY0YVc5ekxuQnliM1J2ZEhsd1pWdHRaWFJvYjJSZElEMGdablZ1WTNScGIyNG9kWEpzTENCamIyNW1hV2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpYRjFaWE4wS0hWMGFXeHpMbTFsY21kbEtHTnZibVpwWnlCOGZDQjdmU3dnZTF4dUlDQWdJQ0FnYldWMGFHOWtPaUJ0WlhSb2IyUXNYRzRnSUNBZ0lDQjFjbXc2SUhWeWJGeHVJQ0FnSUgwcEtUdGNiaUFnZlR0Y2JuMHBPMXh1WEc1MWRHbHNjeTVtYjNKRllXTm9LRnNuY0c5emRDY3NJQ2R3ZFhRbkxDQW5jR0YwWTJnblhTd2dablZ1WTNScGIyNGdabTl5UldGamFFMWxkR2h2WkZkcGRHaEVZWFJoS0cxbGRHaHZaQ2tnZTF4dUlDQXZLbVZ6YkdsdWRDQm1kVzVqTFc1aGJXVnpPakFxTDF4dUlDQkJlR2x2Y3k1d2NtOTBiM1I1Y0dWYmJXVjBhRzlrWFNBOUlHWjFibU4wYVc5dUtIVnliQ3dnWkdGMFlTd2dZMjl1Wm1sbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZ4ZFdWemRDaDFkR2xzY3k1dFpYSm5aU2hqYjI1bWFXY2dmSHdnZTMwc0lIdGNiaUFnSUNBZ0lHMWxkR2h2WkRvZ2JXVjBhRzlrTEZ4dUlDQWdJQ0FnZFhKc09pQjFjbXdzWEc0Z0lDQWdJQ0JrWVhSaE9pQmtZWFJoWEc0Z0lDQWdmU2twTzF4dUlDQjlPMXh1ZlNrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdRWGhwYjNNN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1Wm5WdVkzUnBiMjRnU1c1MFpYSmpaWEIwYjNKTllXNWhaMlZ5S0NrZ2UxeHVJQ0IwYUdsekxtaGhibVJzWlhKeklEMGdXMTA3WEc1OVhHNWNiaThxS2x4dUlDb2dRV1JrSUdFZ2JtVjNJR2x1ZEdWeVkyVndkRzl5SUhSdklIUm9aU0J6ZEdGamExeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWjFiR1pwYkd4bFpDQlVhR1VnWm5WdVkzUnBiMjRnZEc4Z2FHRnVaR3hsSUdCMGFHVnVZQ0JtYjNJZ1lTQmdVSEp2YldselpXQmNiaUFxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUhKbGFtVmpkR1ZrSUZSb1pTQm1kVzVqZEdsdmJpQjBieUJvWVc1a2JHVWdZSEpsYW1WamRHQWdabTl5SUdFZ1lGQnliMjFwYzJWZ1hHNGdLbHh1SUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlNCQmJpQkpSQ0IxYzJWa0lIUnZJSEpsYlc5MlpTQnBiblJsY21ObGNIUnZjaUJzWVhSbGNseHVJQ292WEc1SmJuUmxjbU5sY0hSdmNrMWhibUZuWlhJdWNISnZkRzkwZVhCbExuVnpaU0E5SUdaMWJtTjBhVzl1SUhWelpTaG1kV3htYVd4c1pXUXNJSEpsYW1WamRHVmtLU0I3WEc0Z0lIUm9hWE11YUdGdVpHeGxjbk11Y0hWemFDaDdYRzRnSUNBZ1puVnNabWxzYkdWa09pQm1kV3htYVd4c1pXUXNYRzRnSUNBZ2NtVnFaV04wWldRNklISmxhbVZqZEdWa1hHNGdJSDBwTzF4dUlDQnlaWFIxY200Z2RHaHBjeTVvWVc1a2JHVnljeTVzWlc1bmRHZ2dMU0F4TzF4dWZUdGNibHh1THlvcVhHNGdLaUJTWlcxdmRtVWdZVzRnYVc1MFpYSmpaWEIwYjNJZ1puSnZiU0IwYUdVZ2MzUmhZMnRjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdhV1FnVkdobElFbEVJSFJvWVhRZ2QyRnpJSEpsZEhWeWJtVmtJR0o1SUdCMWMyVmdYRzRnS2k5Y2JrbHVkR1Z5WTJWd2RHOXlUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVaV3BsWTNRZ1BTQm1kVzVqZEdsdmJpQmxhbVZqZENocFpDa2dlMXh1SUNCcFppQW9kR2hwY3k1b1lXNWtiR1Z5YzF0cFpGMHBJSHRjYmlBZ0lDQjBhR2x6TG1oaGJtUnNaWEp6VzJsa1hTQTlJRzUxYkd3N1hHNGdJSDFjYm4wN1hHNWNiaThxS2x4dUlDb2dTWFJsY21GMFpTQnZkbVZ5SUdGc2JDQjBhR1VnY21WbmFYTjBaWEpsWkNCcGJuUmxjbU5sY0hSdmNuTmNiaUFxWEc0Z0tpQlVhR2x6SUcxbGRHaHZaQ0JwY3lCd1lYSjBhV04xYkdGeWJIa2dkWE5sWm5Wc0lHWnZjaUJ6YTJsd2NHbHVaeUJ2ZG1WeUlHRnVlVnh1SUNvZ2FXNTBaWEpqWlhCMGIzSnpJSFJvWVhRZ2JXRjVJR2hoZG1VZ1ltVmpiMjFsSUdCdWRXeHNZQ0JqWVd4c2FXNW5JR0JsYW1WamRHQXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHWjFibU4wYVc5dUlIUnZJR05oYkd3Z1ptOXlJR1ZoWTJnZ2FXNTBaWEpqWlhCMGIzSmNiaUFxTDF4dVNXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNW1iM0pGWVdOb0lEMGdablZ1WTNScGIyNGdabTl5UldGamFDaG1iaWtnZTF4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0hSb2FYTXVhR0Z1Wkd4bGNuTXNJR1oxYm1OMGFXOXVJR1p2Y2tWaFkyaElZVzVrYkdWeUtHZ3BJSHRjYmlBZ0lDQnBaaUFvYUNBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ1ptNG9hQ2s3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1NXNTBaWEpqWlhCMGIzSk5ZVzVoWjJWeU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2FYTkJZbk52YkhWMFpWVlNUQ0E5SUhKbGNYVnBjbVVvSnk0dUwyaGxiSEJsY25NdmFYTkJZbk52YkhWMFpWVlNUQ2NwTzF4dWRtRnlJR052YldKcGJtVlZVa3h6SUQwZ2NtVnhkV2x5WlNnbkxpNHZhR1ZzY0dWeWN5OWpiMjFpYVc1bFZWSk1jeWNwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnVlZKTUlHSjVJR052YldKcGJtbHVaeUIwYUdVZ1ltRnpaVlZTVENCM2FYUm9JSFJvWlNCeVpYRjFaWE4wWldSVlVrd3NYRzRnS2lCdmJteDVJSGRvWlc0Z2RHaGxJSEpsY1hWbGMzUmxaRlZTVENCcGN5QnViM1FnWVd4eVpXRmtlU0JoYmlCaFluTnZiSFYwWlNCVlVrd3VYRzRnS2lCSlppQjBhR1VnY21WeGRXVnpkRlZTVENCcGN5QmhZbk52YkhWMFpTd2dkR2hwY3lCbWRXNWpkR2x2YmlCeVpYUjFjbTV6SUhSb1pTQnlaWEYxWlhOMFpXUlZVa3dnZFc1MGIzVmphR1ZrTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JpWVhObFZWSk1JRlJvWlNCaVlYTmxJRlZTVEZ4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlISmxjWFZsYzNSbFpGVlNUQ0JCWW5OdmJIVjBaU0J2Y2lCeVpXeGhkR2wyWlNCVlVrd2dkRzhnWTI5dFltbHVaVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UzTjBjbWx1WjMwZ1ZHaGxJR052YldKcGJtVmtJR1oxYkd3Z2NHRjBhRnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHSjFhV3hrUm5Wc2JGQmhkR2dvWW1GelpWVlNUQ3dnY21WeGRXVnpkR1ZrVlZKTUtTQjdYRzRnSUdsbUlDaGlZWE5sVlZKTUlDWW1JQ0ZwYzBGaWMyOXNkWFJsVlZKTUtISmxjWFZsYzNSbFpGVlNUQ2twSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZMjl0WW1sdVpWVlNUSE1vWW1GelpWVlNUQ3dnY21WeGRXVnpkR1ZrVlZKTUtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnhkV1Z6ZEdWa1ZWSk1PMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUdWdWFHRnVZMlZGY25KdmNpQTlJSEpsY1hWcGNtVW9KeTR2Wlc1b1lXNWpaVVZ5Y205eUp5azdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0Z1SUVWeWNtOXlJSGRwZEdnZ2RHaGxJSE53WldOcFptbGxaQ0J0WlhOellXZGxMQ0JqYjI1bWFXY3NJR1Z5Y205eUlHTnZaR1VzSUhKbGNYVmxjM1FnWVc1a0lISmxjM0J2Ym5ObExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCdFpYTnpZV2RsSUZSb1pTQmxjbkp2Y2lCdFpYTnpZV2RsTGx4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHTnZibVpwWnlCVWFHVWdZMjl1Wm1sbkxseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnRqYjJSbFhTQlVhR1VnWlhKeWIzSWdZMjlrWlNBb1ptOXlJR1Y0WVcxd2JHVXNJQ2RGUTA5T1RrRkNUMUpVUlVRbktTNWNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0JiY21WeGRXVnpkRjBnVkdobElISmxjWFZsYzNRdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdXM0psYzNCdmJuTmxYU0JVYUdVZ2NtVnpjRzl1YzJVdVhHNGdLaUJBY21WMGRYSnVjeUI3UlhKeWIzSjlJRlJvWlNCamNtVmhkR1ZrSUdWeWNtOXlMbHh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlHTnlaV0YwWlVWeWNtOXlLRzFsYzNOaFoyVXNJR052Ym1acFp5d2dZMjlrWlN3Z2NtVnhkV1Z6ZEN3Z2NtVnpjRzl1YzJVcElIdGNiaUFnZG1GeUlHVnljbTl5SUQwZ2JtVjNJRVZ5Y205eUtHMWxjM05oWjJVcE8xeHVJQ0J5WlhSMWNtNGdaVzVvWVc1alpVVnljbTl5S0dWeWNtOXlMQ0JqYjI1bWFXY3NJR052WkdVc0lISmxjWFZsYzNRc0lISmxjM0J2Ym5ObEtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2TGk0dmRYUnBiSE1uS1R0Y2JuWmhjaUIwY21GdWMyWnZjbTFFWVhSaElEMGdjbVZ4ZFdseVpTZ25MaTkwY21GdWMyWnZjbTFFWVhSaEp5azdYRzUyWVhJZ2FYTkRZVzVqWld3Z1BTQnlaWEYxYVhKbEtDY3VMaTlqWVc1alpXd3ZhWE5EWVc1alpXd25LVHRjYm5aaGNpQmtaV1poZFd4MGN5QTlJSEpsY1hWcGNtVW9KeTR1TDJSbFptRjFiSFJ6SnlrN1hHNWNiaThxS2x4dUlDb2dWR2h5YjNkeklHRWdZRU5oYm1ObGJHQWdhV1lnWTJGdVkyVnNiR0YwYVc5dUlHaGhjeUJpWldWdUlISmxjWFZsYzNSbFpDNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2RHaHliM2RKWmtOaGJtTmxiR3hoZEdsdmJsSmxjWFZsYzNSbFpDaGpiMjVtYVdjcElIdGNiaUFnYVdZZ0tHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpa2dlMXh1SUNBZ0lHTnZibVpwWnk1allXNWpaV3hVYjJ0bGJpNTBhSEp2ZDBsbVVtVnhkV1Z6ZEdWa0tDazdYRzRnSUgxY2JuMWNibHh1THlvcVhHNGdLaUJFYVhOd1lYUmphQ0JoSUhKbGNYVmxjM1FnZEc4Z2RHaGxJSE5sY25abGNpQjFjMmx1WnlCMGFHVWdZMjl1Wm1sbmRYSmxaQ0JoWkdGd2RHVnlMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQmpiMjVtYVdjZ1ZHaGxJR052Ym1acFp5QjBhR0YwSUdseklIUnZJR0psSUhWelpXUWdabTl5SUhSb1pTQnlaWEYxWlhOMFhHNGdLaUJBY21WMGRYSnVjeUI3VUhKdmJXbHpaWDBnVkdobElGQnliMjFwYzJVZ2RHOGdZbVVnWm5Wc1ptbHNiR1ZrWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdaR2x6Y0dGMFkyaFNaWEYxWlhOMEtHTnZibVpwWnlrZ2UxeHVJQ0IwYUhKdmQwbG1RMkZ1WTJWc2JHRjBhVzl1VW1WeGRXVnpkR1ZrS0dOdmJtWnBaeWs3WEc1Y2JpQWdMeThnUlc1emRYSmxJR2hsWVdSbGNuTWdaWGhwYzNSY2JpQWdZMjl1Wm1sbkxtaGxZV1JsY25NZ1BTQmpiMjVtYVdjdWFHVmhaR1Z5Y3lCOGZDQjdmVHRjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY21WeGRXVnpkQ0JrWVhSaFhHNGdJR052Ym1acFp5NWtZWFJoSUQwZ2RISmhibk5tYjNKdFJHRjBZU2hjYmlBZ0lDQmpiMjVtYVdjdVpHRjBZU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5Y3l4Y2JpQWdJQ0JqYjI1bWFXY3VkSEpoYm5ObWIzSnRVbVZ4ZFdWemRGeHVJQ0FwTzF4dVhHNGdJQzh2SUVac1lYUjBaVzRnYUdWaFpHVnljMXh1SUNCamIyNW1hV2N1YUdWaFpHVnljeUE5SUhWMGFXeHpMbTFsY21kbEtGeHVJQ0FnSUdOdmJtWnBaeTVvWldGa1pYSnpMbU52YlcxdmJpQjhmQ0I3ZlN4Y2JpQWdJQ0JqYjI1bWFXY3VhR1ZoWkdWeWMxdGpiMjVtYVdjdWJXVjBhRzlrWFNCOGZDQjdmU3hjYmlBZ0lDQmpiMjVtYVdjdWFHVmhaR1Z5YzF4dUlDQXBPMXh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvWEc0Z0lDQWdXeWRrWld4bGRHVW5MQ0FuWjJWMEp5d2dKMmhsWVdRbkxDQW5jRzl6ZENjc0lDZHdkWFFuTENBbmNHRjBZMmduTENBblkyOXRiVzl1SjEwc1hHNGdJQ0FnWm5WdVkzUnBiMjRnWTJ4bFlXNUlaV0ZrWlhKRGIyNW1hV2NvYldWMGFHOWtLU0I3WEc0Z0lDQWdJQ0JrWld4bGRHVWdZMjl1Wm1sbkxtaGxZV1JsY25OYmJXVjBhRzlrWFR0Y2JpQWdJQ0I5WEc0Z0lDazdYRzVjYmlBZ2RtRnlJR0ZrWVhCMFpYSWdQU0JqYjI1bWFXY3VZV1JoY0hSbGNpQjhmQ0JrWldaaGRXeDBjeTVoWkdGd2RHVnlPMXh1WEc0Z0lISmxkSFZ5YmlCaFpHRndkR1Z5S0dOdmJtWnBaeWt1ZEdobGJpaG1kVzVqZEdsdmJpQnZia0ZrWVhCMFpYSlNaWE52YkhWMGFXOXVLSEpsYzNCdmJuTmxLU0I3WEc0Z0lDQWdkR2h5YjNkSlprTmhibU5sYkd4aGRHbHZibEpsY1hWbGMzUmxaQ2hqYjI1bWFXY3BPMXh1WEc0Z0lDQWdMeThnVkhKaGJuTm1iM0p0SUhKbGMzQnZibk5sSUdSaGRHRmNiaUFnSUNCeVpYTndiMjV6WlM1a1lYUmhJRDBnZEhKaGJuTm1iM0p0UkdGMFlTaGNiaUFnSUNBZ0lISmxjM0J2Ym5ObExtUmhkR0VzWEc0Z0lDQWdJQ0J5WlhOd2IyNXpaUzVvWldGa1pYSnpMRnh1SUNBZ0lDQWdZMjl1Wm1sbkxuUnlZVzV6Wm05eWJWSmxjM0J2Ym5ObFhHNGdJQ0FnS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5WlhOd2IyNXpaVHRjYmlBZ2ZTd2dablZ1WTNScGIyNGdiMjVCWkdGd2RHVnlVbVZxWldOMGFXOXVLSEpsWVhOdmJpa2dlMXh1SUNBZ0lHbG1JQ2doYVhORFlXNWpaV3dvY21WaGMyOXVLU2tnZTF4dUlDQWdJQ0FnZEdoeWIzZEpaa05oYm1ObGJHeGhkR2x2YmxKbGNYVmxjM1JsWkNoamIyNW1hV2NwTzF4dVhHNGdJQ0FnSUNBdkx5QlVjbUZ1YzJadmNtMGdjbVZ6Y0c5dWMyVWdaR0YwWVZ4dUlDQWdJQ0FnYVdZZ0tISmxZWE52YmlBbUppQnlaV0Z6YjI0dWNtVnpjRzl1YzJVcElIdGNiaUFnSUNBZ0lDQWdjbVZoYzI5dUxuSmxjM0J2Ym5ObExtUmhkR0VnUFNCMGNtRnVjMlp2Y20xRVlYUmhLRnh1SUNBZ0lDQWdJQ0FnSUhKbFlYTnZiaTV5WlhOd2IyNXpaUzVrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJSEpsWVhOdmJpNXlaWE53YjI1elpTNW9aV0ZrWlhKekxGeHVJQ0FnSUNBZ0lDQWdJR052Ym1acFp5NTBjbUZ1YzJadmNtMVNaWE53YjI1elpWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGFtVmpkQ2h5WldGemIyNHBPMXh1SUNCOUtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFLbHh1SUNvZ1ZYQmtZWFJsSUdGdUlFVnljbTl5SUhkcGRHZ2dkR2hsSUhOd1pXTnBabWxsWkNCamIyNW1hV2NzSUdWeWNtOXlJR052WkdVc0lHRnVaQ0J5WlhOd2IyNXpaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMFZ5Y205eWZTQmxjbkp2Y2lCVWFHVWdaWEp5YjNJZ2RHOGdkWEJrWVhSbExseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp5QlVhR1VnWTI5dVptbG5MbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0amIyUmxYU0JVYUdVZ1pYSnliM0lnWTI5a1pTQW9abTl5SUdWNFlXMXdiR1VzSUNkRlEwOU9Ua0ZDVDFKVVJVUW5LUzVjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCYmNtVnhkV1Z6ZEYwZ1ZHaGxJSEpsY1hWbGMzUXVYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzNKbGMzQnZibk5sWFNCVWFHVWdjbVZ6Y0c5dWMyVXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1JYSnliM0o5SUZSb1pTQmxjbkp2Y2k1Y2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJsYm1oaGJtTmxSWEp5YjNJb1pYSnliM0lzSUdOdmJtWnBaeXdnWTI5a1pTd2djbVZ4ZFdWemRDd2djbVZ6Y0c5dWMyVXBJSHRjYmlBZ1pYSnliM0l1WTI5dVptbG5JRDBnWTI5dVptbG5PMXh1SUNCcFppQW9ZMjlrWlNrZ2UxeHVJQ0FnSUdWeWNtOXlMbU52WkdVZ1BTQmpiMlJsTzF4dUlDQjlYRzVjYmlBZ1pYSnliM0l1Y21WeGRXVnpkQ0E5SUhKbGNYVmxjM1E3WEc0Z0lHVnljbTl5TG5KbGMzQnZibk5sSUQwZ2NtVnpjRzl1YzJVN1hHNGdJR1Z5Y205eUxtbHpRWGhwYjNORmNuSnZjaUE5SUhSeWRXVTdYRzVjYmlBZ1pYSnliM0l1ZEc5S1UwOU9JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQzh2SUZOMFlXNWtZWEprWEc0Z0lDQWdJQ0J0WlhOellXZGxPaUIwYUdsekxtMWxjM05oWjJVc1hHNGdJQ0FnSUNCdVlXMWxPaUIwYUdsekxtNWhiV1VzWEc0Z0lDQWdJQ0F2THlCTmFXTnliM052Wm5SY2JpQWdJQ0FnSUdSbGMyTnlhWEIwYVc5dU9pQjBhR2x6TG1SbGMyTnlhWEIwYVc5dUxGeHVJQ0FnSUNBZ2JuVnRZbVZ5T2lCMGFHbHpMbTUxYldKbGNpeGNiaUFnSUNBZ0lDOHZJRTF2ZW1sc2JHRmNiaUFnSUNBZ0lHWnBiR1ZPWVcxbE9pQjBhR2x6TG1acGJHVk9ZVzFsTEZ4dUlDQWdJQ0FnYkdsdVpVNTFiV0psY2pvZ2RHaHBjeTVzYVc1bFRuVnRZbVZ5TEZ4dUlDQWdJQ0FnWTI5c2RXMXVUblZ0WW1WeU9pQjBhR2x6TG1OdmJIVnRiazUxYldKbGNpeGNiaUFnSUNBZ0lITjBZV05yT2lCMGFHbHpMbk4wWVdOckxGeHVJQ0FnSUNBZ0x5OGdRWGhwYjNOY2JpQWdJQ0FnSUdOdmJtWnBaem9nZEdocGN5NWpiMjVtYVdjc1hHNGdJQ0FnSUNCamIyUmxPaUIwYUdsekxtTnZaR1ZjYmlBZ0lDQjlPMXh1SUNCOU8xeHVJQ0J5WlhSMWNtNGdaWEp5YjNJN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMaTkxZEdsc2N5Y3BPMXh1WEc0dktpcGNiaUFxSUVOdmJtWnBaeTF6Y0dWamFXWnBZeUJ0WlhKblpTMW1kVzVqZEdsdmJpQjNhR2xqYUNCamNtVmhkR1Z6SUdFZ2JtVjNJR052Ym1acFp5MXZZbXBsWTNSY2JpQXFJR0o1SUcxbGNtZHBibWNnZEhkdklHTnZibVpwWjNWeVlYUnBiMjRnYjJKcVpXTjBjeUIwYjJkbGRHaGxjaTVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdZMjl1Wm1sbk1WeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR052Ym1acFp6SmNiaUFxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5SUU1bGR5QnZZbXBsWTNRZ2NtVnpkV3gwYVc1bklHWnliMjBnYldWeVoybHVaeUJqYjI1bWFXY3lJSFJ2SUdOdmJtWnBaekZjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnRaWEpuWlVOdmJtWnBaeWhqYjI1bWFXY3hMQ0JqYjI1bWFXY3lLU0I3WEc0Z0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTF3WVhKaGJTMXlaV0Z6YzJsbmJseHVJQ0JqYjI1bWFXY3lJRDBnWTI5dVptbG5NaUI4ZkNCN2ZUdGNiaUFnZG1GeUlHTnZibVpwWnlBOUlIdDlPMXh1WEc0Z0lIWmhjaUIyWVd4MVpVWnliMjFEYjI1bWFXY3lTMlY1Y3lBOUlGc25kWEpzSnl3Z0oyMWxkR2h2WkNjc0lDZHdZWEpoYlhNbkxDQW5aR0YwWVNkZE8xeHVJQ0IyWVhJZ2JXVnlaMlZFWldWd1VISnZjR1Z5ZEdsbGMwdGxlWE1nUFNCYkoyaGxZV1JsY25NbkxDQW5ZWFYwYUNjc0lDZHdjbTk0ZVNkZE8xeHVJQ0IyWVhJZ1pHVm1ZWFZzZEZSdlEyOXVabWxuTWt0bGVYTWdQU0JiWEc0Z0lDQWdKMkpoYzJWVlVrd25MQ0FuZFhKc0p5d2dKM1J5WVc1elptOXliVkpsY1hWbGMzUW5MQ0FuZEhKaGJuTm1iM0p0VW1WemNHOXVjMlVuTENBbmNHRnlZVzF6VTJWeWFXRnNhWHBsY2ljc1hHNGdJQ0FnSjNScGJXVnZkWFFuTENBbmQybDBhRU55WldSbGJuUnBZV3h6Snl3Z0oyRmtZWEIwWlhJbkxDQW5jbVZ6Y0c5dWMyVlVlWEJsSnl3Z0ozaHpjbVpEYjI5cmFXVk9ZVzFsSnl4Y2JpQWdJQ0FuZUhOeVpraGxZV1JsY2s1aGJXVW5MQ0FuYjI1VmNHeHZZV1JRY205bmNtVnpjeWNzSUNkdmJrUnZkMjVzYjJGa1VISnZaM0psYzNNbkxGeHVJQ0FnSUNkdFlYaERiMjUwWlc1MFRHVnVaM1JvSnl3Z0ozWmhiR2xrWVhSbFUzUmhkSFZ6Snl3Z0oyMWhlRkpsWkdseVpXTjBjeWNzSUNkb2RIUndRV2RsYm5RbkxGeHVJQ0FnSUNkb2RIUndjMEZuWlc1MEp5d2dKMk5oYm1ObGJGUnZhMlZ1Snl3Z0ozTnZZMnRsZEZCaGRHZ25YRzRnSUYwN1hHNWNiaUFnZFhScGJITXVabTl5UldGamFDaDJZV3gxWlVaeWIyMURiMjVtYVdjeVMyVjVjeXdnWm5WdVkzUnBiMjRnZG1Gc2RXVkdjbTl0UTI5dVptbG5NaWh3Y205d0tTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjeVczQnliM0JkSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnWTI5dVptbG5XM0J5YjNCZElEMGdZMjl1Wm1sbk1sdHdjbTl3WFR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvYldWeVoyVkVaV1Z3VUhKdmNHVnlkR2xsYzB0bGVYTXNJR1oxYm1OMGFXOXVJRzFsY21kbFJHVmxjRkJ5YjNCbGNuUnBaWE1vY0hKdmNDa2dlMXh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMDlpYW1WamRDaGpiMjVtYVdjeVczQnliM0JkS1NrZ2UxeHVJQ0FnSUNBZ1kyOXVabWxuVzNCeWIzQmRJRDBnZFhScGJITXVaR1ZsY0UxbGNtZGxLR052Ym1acFp6RmJjSEp2Y0Ywc0lHTnZibVpwWnpKYmNISnZjRjBwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JR052Ym1acFp6SmJjSEp2Y0YwZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNCamIyNW1hV2RiY0hKdmNGMGdQU0JqYjI1bWFXY3lXM0J5YjNCZE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RYUnBiSE11YVhOUFltcGxZM1FvWTI5dVptbG5NVnR3Y205d1hTa3BJSHRjYmlBZ0lDQWdJR052Ym1acFoxdHdjbTl3WFNBOUlIVjBhV3h6TG1SbFpYQk5aWEpuWlNoamIyNW1hV2N4VzNCeWIzQmRLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQmpiMjVtYVdjeFczQnliM0JkSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnWTI5dVptbG5XM0J5YjNCZElEMGdZMjl1Wm1sbk1WdHdjbTl3WFR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvWkdWbVlYVnNkRlJ2UTI5dVptbG5Na3RsZVhNc0lHWjFibU4wYVc5dUlHUmxabUYxYkhSVWIwTnZibVpwWnpJb2NISnZjQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWTI5dVptbG5NbHR3Y205d1hTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibVpwWjF0d2NtOXdYU0E5SUdOdmJtWnBaekpiY0hKdmNGMDdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ1kyOXVabWxuTVZ0d2NtOXdYU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJR052Ym1acFoxdHdjbTl3WFNBOUlHTnZibVpwWnpGYmNISnZjRjA3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCMllYSWdZWGhwYjNOTFpYbHpJRDBnZG1Gc2RXVkdjbTl0UTI5dVptbG5Na3RsZVhOY2JpQWdJQ0F1WTI5dVkyRjBLRzFsY21kbFJHVmxjRkJ5YjNCbGNuUnBaWE5MWlhsektWeHVJQ0FnSUM1amIyNWpZWFFvWkdWbVlYVnNkRlJ2UTI5dVptbG5Na3RsZVhNcE8xeHVYRzRnSUhaaGNpQnZkR2hsY2t0bGVYTWdQU0JQWW1wbFkzUmNiaUFnSUNBdWEyVjVjeWhqYjI1bWFXY3lLVnh1SUNBZ0lDNW1hV3gwWlhJb1puVnVZM1JwYjI0Z1ptbHNkR1Z5UVhocGIzTkxaWGx6S0d0bGVTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHRjRhVzl6UzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhPMXh1SUNBZ0lIMHBPMXh1WEc0Z0lIVjBhV3h6TG1admNrVmhZMmdvYjNSb1pYSkxaWGx6TENCbWRXNWpkR2x2YmlCdmRHaGxja3RsZVhORVpXWmhkV3gwVkc5RGIyNW1hV2N5S0hCeWIzQXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR052Ym1acFp6SmJjSEp2Y0YwZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNCamIyNW1hV2RiY0hKdmNGMGdQU0JqYjI1bWFXY3lXM0J5YjNCZE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdOdmJtWnBaekZiY0hKdmNGMGdJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQmpiMjVtYVdkYmNISnZjRjBnUFNCamIyNW1hV2N4VzNCeWIzQmRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJR052Ym1acFp6dGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJqY21WaGRHVkZjbkp2Y2lBOUlISmxjWFZwY21Vb0p5NHZZM0psWVhSbFJYSnliM0luS1R0Y2JseHVMeW9xWEc0Z0tpQlNaWE52YkhabElHOXlJSEpsYW1WamRDQmhJRkJ5YjIxcGMyVWdZbUZ6WldRZ2IyNGdjbVZ6Y0c5dWMyVWdjM1JoZEhWekxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlISmxjMjlzZG1VZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhKbGMyOXNkbVZ6SUhSb1pTQndjbTl0YVhObExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnY21WcVpXTjBJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQnlaV3BsWTNSeklIUm9aU0J3Y205dGFYTmxMbHh1SUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUhKbGMzQnZibk5sSUZSb1pTQnlaWE53YjI1elpTNWNiaUFxTDF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCelpYUjBiR1VvY21WemIyeDJaU3dnY21WcVpXTjBMQ0J5WlhOd2IyNXpaU2tnZTF4dUlDQjJZWElnZG1Gc2FXUmhkR1ZUZEdGMGRYTWdQU0J5WlhOd2IyNXpaUzVqYjI1bWFXY3VkbUZzYVdSaGRHVlRkR0YwZFhNN1hHNGdJR2xtSUNnaGRtRnNhV1JoZEdWVGRHRjBkWE1nZkh3Z2RtRnNhV1JoZEdWVGRHRjBkWE1vY21WemNHOXVjMlV1YzNSaGRIVnpLU2tnZTF4dUlDQWdJSEpsYzI5c2RtVW9jbVZ6Y0c5dWMyVXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsYW1WamRDaGpjbVZoZEdWRmNuSnZjaWhjYmlBZ0lDQWdJQ2RTWlhGMVpYTjBJR1poYVd4bFpDQjNhWFJvSUhOMFlYUjFjeUJqYjJSbElDY2dLeUJ5WlhOd2IyNXpaUzV6ZEdGMGRYTXNYRzRnSUNBZ0lDQnlaWE53YjI1elpTNWpiMjVtYVdjc1hHNGdJQ0FnSUNCdWRXeHNMRnh1SUNBZ0lDQWdjbVZ6Y0c5dWMyVXVjbVZ4ZFdWemRDeGNiaUFnSUNBZ0lISmxjM0J2Ym5ObFhHNGdJQ0FnS1NrN1hHNGdJSDFjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dkxpNHZkWFJwYkhNbktUdGNibHh1THlvcVhHNGdLaUJVY21GdWMyWnZjbTBnZEdobElHUmhkR0VnWm05eUlHRWdjbVZ4ZFdWemRDQnZjaUJoSUhKbGMzQnZibk5sWEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjhVM1J5YVc1bmZTQmtZWFJoSUZSb1pTQmtZWFJoSUhSdklHSmxJSFJ5WVc1elptOXliV1ZrWEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCb1pXRmtaWEp6SUZSb1pTQm9aV0ZrWlhKeklHWnZjaUIwYUdVZ2NtVnhkV1Z6ZENCdmNpQnlaWE53YjI1elpWeHVJQ29nUUhCaGNtRnRJSHRCY25KaGVYeEdkVzVqZEdsdmJuMGdabTV6SUVFZ2MybHVaMnhsSUdaMWJtTjBhVzl1SUc5eUlFRnljbUY1SUc5bUlHWjFibU4wYVc5dWMxeHVJQ29nUUhKbGRIVnlibk1nZXlwOUlGUm9aU0J5WlhOMWJIUnBibWNnZEhKaGJuTm1iM0p0WldRZ1pHRjBZVnh1SUNvdlhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUlIUnlZVzV6Wm05eWJVUmhkR0VvWkdGMFlTd2dhR1ZoWkdWeWN5d2dabTV6S1NCN1hHNGdJQzhxWlhOc2FXNTBJRzV2TFhCaGNtRnRMWEpsWVhOemFXZHVPakFxTDF4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0dadWN5d2dablZ1WTNScGIyNGdkSEpoYm5ObWIzSnRLR1p1S1NCN1hHNGdJQ0FnWkdGMFlTQTlJR1p1S0dSaGRHRXNJR2hsWVdSbGNuTXBPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnWkdGMFlUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUIxZEdsc2N5QTlJSEpsY1hWcGNtVW9KeTR2ZFhScGJITW5LVHRjYm5aaGNpQnViM0p0WVd4cGVtVklaV0ZrWlhKT1lXMWxJRDBnY21WeGRXbHlaU2duTGk5b1pXeHdaWEp6TDI1dmNtMWhiR2w2WlVobFlXUmxjazVoYldVbktUdGNibHh1ZG1GeUlFUkZSa0ZWVEZSZlEwOU9WRVZPVkY5VVdWQkZJRDBnZTF4dUlDQW5RMjl1ZEdWdWRDMVVlWEJsSnpvZ0oyRndjR3hwWTJGMGFXOXVMM2d0ZDNkM0xXWnZjbTB0ZFhKc1pXNWpiMlJsWkNkY2JuMDdYRzVjYm1aMWJtTjBhVzl1SUhObGRFTnZiblJsYm5SVWVYQmxTV1pWYm5ObGRDaG9aV0ZrWlhKekxDQjJZV3gxWlNrZ2UxeHVJQ0JwWmlBb0lYVjBhV3h6TG1selZXNWtaV1pwYm1Wa0tHaGxZV1JsY25NcElDWW1JSFYwYVd4ekxtbHpWVzVrWldacGJtVmtLR2hsWVdSbGNuTmJKME52Ym5SbGJuUXRWSGx3WlNkZEtTa2dlMXh1SUNBZ0lHaGxZV1JsY25OYkowTnZiblJsYm5RdFZIbHdaU2RkSUQwZ2RtRnNkV1U3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RFRmtZWEIwWlhJb0tTQjdYRzRnSUhaaGNpQmhaR0Z3ZEdWeU8xeHVJQ0JwWmlBb2RIbHdaVzltSUZoTlRFaDBkSEJTWlhGMVpYTjBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDOHZJRVp2Y2lCaWNtOTNjMlZ5Y3lCMWMyVWdXRWhTSUdGa1lYQjBaWEpjYmlBZ0lDQmhaR0Z3ZEdWeUlEMGdjbVZ4ZFdseVpTZ25MaTloWkdGd2RHVnljeTk0YUhJbktUdGNiaUFnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnY0hKdlkyVnpjeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaeTVqWVd4c0tIQnliMk5sYzNNcElEMDlQU0FuVzI5aWFtVmpkQ0J3Y205alpYTnpYU2NwSUh0Y2JpQWdJQ0F2THlCR2IzSWdibTlrWlNCMWMyVWdTRlJVVUNCaFpHRndkR1Z5WEc0Z0lDQWdZV1JoY0hSbGNpQTlJSEpsY1hWcGNtVW9KeTR2WVdSaGNIUmxjbk12YUhSMGNDY3BPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVnh1WEc1MllYSWdaR1ZtWVhWc2RITWdQU0I3WEc0Z0lHRmtZWEIwWlhJNklHZGxkRVJsWm1GMWJIUkJaR0Z3ZEdWeUtDa3NYRzVjYmlBZ2RISmhibk5tYjNKdFVtVnhkV1Z6ZERvZ1cyWjFibU4wYVc5dUlIUnlZVzV6Wm05eWJWSmxjWFZsYzNRb1pHRjBZU3dnYUdWaFpHVnljeWtnZTF4dUlDQWdJRzV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VvYUdWaFpHVnljeXdnSjBGalkyVndkQ2NwTzF4dUlDQWdJRzV2Y20xaGJHbDZaVWhsWVdSbGNrNWhiV1VvYUdWaFpHVnljeXdnSjBOdmJuUmxiblF0Vkhsd1pTY3BPMXh1SUNBZ0lHbG1JQ2gxZEdsc2N5NXBjMFp2Y20xRVlYUmhLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwRnljbUY1UW5WbVptVnlLR1JoZEdFcElIeDhYRzRnSUNBZ0lDQjFkR2xzY3k1cGMwSjFabVpsY2loa1lYUmhLU0I4ZkZ4dUlDQWdJQ0FnZFhScGJITXVhWE5UZEhKbFlXMG9aR0YwWVNrZ2ZIeGNiaUFnSUNBZ0lIVjBhV3h6TG1selJtbHNaU2hrWVhSaEtTQjhmRnh1SUNBZ0lDQWdkWFJwYkhNdWFYTkNiRzlpS0dSaGRHRXBYRzRnSUNBZ0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pHRjBZVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFYwYVd4ekxtbHpRWEp5WVhsQ2RXWm1aWEpXYVdWM0tHUmhkR0VwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWkdGMFlTNWlkV1ptWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMWRHbHNjeTVwYzFWU1RGTmxZWEpqYUZCaGNtRnRjeWhrWVhSaEtTa2dlMXh1SUNBZ0lDQWdjMlYwUTI5dWRHVnVkRlI1Y0dWSlpsVnVjMlYwS0dobFlXUmxjbk1zSUNkaGNIQnNhV05oZEdsdmJpOTRMWGQzZHkxbWIzSnRMWFZ5YkdWdVkyOWtaV1E3WTJoaGNuTmxkRDExZEdZdE9DY3BPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHUmhkR0V1ZEc5VGRISnBibWNvS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hWMGFXeHpMbWx6VDJKcVpXTjBLR1JoZEdFcEtTQjdYRzRnSUNBZ0lDQnpaWFJEYjI1MFpXNTBWSGx3WlVsbVZXNXpaWFFvYUdWaFpHVnljeXdnSjJGd2NHeHBZMkYwYVc5dUwycHpiMjQ3WTJoaGNuTmxkRDExZEdZdE9DY3BPMXh1SUNBZ0lDQWdjbVYwZFhKdUlFcFRUMDR1YzNSeWFXNW5hV1o1S0dSaGRHRXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWkdGMFlUdGNiaUFnZlYwc1hHNWNiaUFnZEhKaGJuTm1iM0p0VW1WemNHOXVjMlU2SUZ0bWRXNWpkR2x2YmlCMGNtRnVjMlp2Y20xU1pYTndiMjV6WlNoa1lYUmhLU0I3WEc0Z0lDQWdMeXBsYzJ4cGJuUWdibTh0Y0dGeVlXMHRjbVZoYzNOcFoyNDZNQ292WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJrWVhSaElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdaR0YwWVNBOUlFcFRUMDR1Y0dGeWMyVW9aR0YwWVNrN1hHNGdJQ0FnSUNCOUlHTmhkR05vSUNobEtTQjdJQzhxSUVsbmJtOXlaU0FxTHlCOVhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQmtZWFJoTzF4dUlDQjlYU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRU0IwYVcxbGIzVjBJR2x1SUcxcGJHeHBjMlZqYjI1a2N5QjBieUJoWW05eWRDQmhJSEpsY1hWbGMzUXVJRWxtSUhObGRDQjBieUF3SUNoa1pXWmhkV3gwS1NCaFhHNGdJQ0FxSUhScGJXVnZkWFFnYVhNZ2JtOTBJR055WldGMFpXUXVYRzRnSUNBcUwxeHVJQ0IwYVcxbGIzVjBPaUF3TEZ4dVhHNGdJSGh6Y21aRGIyOXJhV1ZPWVcxbE9pQW5XRk5TUmkxVVQwdEZUaWNzWEc0Z0lIaHpjbVpJWldGa1pYSk9ZVzFsT2lBbldDMVlVMUpHTFZSUFMwVk9KeXhjYmx4dUlDQnRZWGhEYjI1MFpXNTBUR1Z1WjNSb09pQXRNU3hjYmx4dUlDQjJZV3hwWkdGMFpWTjBZWFIxY3pvZ1puVnVZM1JwYjI0Z2RtRnNhV1JoZEdWVGRHRjBkWE1vYzNSaGRIVnpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlITjBZWFIxY3lBK1BTQXlNREFnSmlZZ2MzUmhkSFZ6SUR3Z016QXdPMXh1SUNCOVhHNTlPMXh1WEc1a1pXWmhkV3gwY3k1b1pXRmtaWEp6SUQwZ2UxeHVJQ0JqYjIxdGIyNDZJSHRjYmlBZ0lDQW5RV05qWlhCMEp6b2dKMkZ3Y0d4cFkyRjBhVzl1TDJwemIyNHNJSFJsZUhRdmNHeGhhVzRzSUNvdktpZGNiaUFnZlZ4dWZUdGNibHh1ZFhScGJITXVabTl5UldGamFDaGJKMlJsYkdWMFpTY3NJQ2RuWlhRbkxDQW5hR1ZoWkNkZExDQm1kVzVqZEdsdmJpQm1iM0pGWVdOb1RXVjBhRzlrVG05RVlYUmhLRzFsZEdodlpDa2dlMXh1SUNCa1pXWmhkV3gwY3k1b1pXRmtaWEp6VzIxbGRHaHZaRjBnUFNCN2ZUdGNibjBwTzF4dVhHNTFkR2xzY3k1bWIzSkZZV05vS0ZzbmNHOXpkQ2NzSUNkd2RYUW5MQ0FuY0dGMFkyZ25YU3dnWm5WdVkzUnBiMjRnWm05eVJXRmphRTFsZEdodlpGZHBkR2hFWVhSaEtHMWxkR2h2WkNrZ2UxeHVJQ0JrWldaaGRXeDBjeTVvWldGa1pYSnpXMjFsZEdodlpGMGdQU0IxZEdsc2N5NXRaWEpuWlNoRVJVWkJWVXhVWDBOUFRsUkZUbFJmVkZsUVJTazdYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmtaV1poZFd4MGN6dGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJpYVc1a0tHWnVMQ0IwYUdselFYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlCM2NtRndLQ2tnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnYm1WM0lFRnljbUY1S0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhKbmN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWVhKbmMxdHBYU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJR1p1TG1Gd2NHeDVLSFJvYVhOQmNtY3NJR0Z5WjNNcE8xeHVJQ0I5TzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlIVjBhV3h6SUQwZ2NtVnhkV2x5WlNnbkxpOHVMaTkxZEdsc2N5Y3BPMXh1WEc1bWRXNWpkR2x2YmlCbGJtTnZaR1VvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZG1Gc0tTNWNiaUFnSUNCeVpYQnNZV05sS0M4bE5EQXZaMmtzSUNkQUp5a3VYRzRnSUNBZ2NtVndiR0ZqWlNndkpUTkJMMmRwTENBbk9pY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXlOQzluTENBbkpDY3BMbHh1SUNBZ0lISmxjR3hoWTJVb0x5VXlReTluYVN3Z0p5d25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxNakF2Wnl3Z0p5c25LUzVjYmlBZ0lDQnlaWEJzWVdObEtDOGxOVUl2WjJrc0lDZGJKeWt1WEc0Z0lDQWdjbVZ3YkdGalpTZ3ZKVFZFTDJkcExDQW5YU2NwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRUoxYVd4a0lHRWdWVkpNSUdKNUlHRndjR1Z1WkdsdVp5QndZWEpoYlhNZ2RHOGdkR2hsSUdWdVpGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCMWNtd2dWR2hsSUdKaGMyVWdiMllnZEdobElIVnliQ0FvWlM1bkxpd2dhSFIwY0RvdkwzZDNkeTVuYjI5bmJHVXVZMjl0S1Z4dUlDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlGdHdZWEpoYlhOZElGUm9aU0J3WVhKaGJYTWdkRzhnWW1VZ1lYQndaVzVrWldSY2JpQXFJRUJ5WlhSMWNtNXpJSHR6ZEhKcGJtZDlJRlJvWlNCbWIzSnRZWFIwWldRZ2RYSnNYRzRnS2k5Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z1luVnBiR1JWVWt3b2RYSnNMQ0J3WVhKaGJYTXNJSEJoY21GdGMxTmxjbWxoYkdsNlpYSXBJSHRjYmlBZ0x5cGxjMnhwYm5RZ2JtOHRjR0Z5WVcwdGNtVmhjM05wWjI0Nk1Db3ZYRzRnSUdsbUlDZ2hjR0Z5WVcxektTQjdYRzRnSUNBZ2NtVjBkWEp1SUhWeWJEdGNiaUFnZlZ4dVhHNGdJSFpoY2lCelpYSnBZV3hwZW1Wa1VHRnlZVzF6TzF4dUlDQnBaaUFvY0dGeVlXMXpVMlZ5YVdGc2FYcGxjaWtnZTF4dUlDQWdJSE5sY21saGJHbDZaV1JRWVhKaGJYTWdQU0J3WVhKaGJYTlRaWEpwWVd4cGVtVnlLSEJoY21GdGN5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RYUnBiSE11YVhOVlVreFRaV0Z5WTJoUVlYSmhiWE1vY0dGeVlXMXpLU2tnZTF4dUlDQWdJSE5sY21saGJHbDZaV1JRWVhKaGJYTWdQU0J3WVhKaGJYTXVkRzlUZEhKcGJtY29LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ2NHRnlkSE1nUFNCYlhUdGNibHh1SUNBZ0lIVjBhV3h6TG1admNrVmhZMmdvY0dGeVlXMXpMQ0JtZFc1amRHbHZiaUJ6WlhKcFlXeHBlbVVvZG1Gc0xDQnJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3dnUFQwOUlHNTFiR3dnZkh3Z2RIbHdaVzltSUhaaGJDQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5CY25KaGVTaDJZV3dwS1NCN1hHNGdJQ0FnSUNBZ0lHdGxlU0E5SUd0bGVTQXJJQ2RiWFNjN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMllXd2dQU0JiZG1Gc1hUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkWFJwYkhNdVptOXlSV0ZqYUNoMllXd3NJR1oxYm1OMGFXOXVJSEJoY25ObFZtRnNkV1VvZGlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5FWVhSbEtIWXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RpQTlJSFl1ZEc5SlUwOVRkSEpwYm1jb0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gxZEdsc2N5NXBjMDlpYW1WamRDaDJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWWdQU0JLVTA5T0xuTjBjbWx1WjJsbWVTaDJLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCd1lYSjBjeTV3ZFhOb0tHVnVZMjlrWlNoclpYa3BJQ3NnSnowbklDc2daVzVqYjJSbEtIWXBLVHRjYmlBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsWkZCaGNtRnRjeUE5SUhCaGNuUnpMbXB2YVc0b0p5WW5LVHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpaWEpwWVd4cGVtVmtVR0Z5WVcxektTQjdYRzRnSUNBZ2RtRnlJR2hoYzJodFlYSnJTVzVrWlhnZ1BTQjFjbXd1YVc1a1pYaFBaaWduSXljcE8xeHVJQ0FnSUdsbUlDaG9ZWE5vYldGeWEwbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZFhKc0lEMGdkWEpzTG5Oc2FXTmxLREFzSUdoaGMyaHRZWEpyU1c1a1pYZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIVnliQ0FyUFNBb2RYSnNMbWx1WkdWNFQyWW9KejhuS1NBOVBUMGdMVEVnUHlBblB5Y2dPaUFuSmljcElDc2djMlZ5YVdGc2FYcGxaRkJoY21GdGN6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjFjbXc3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ1ZWSk1JR0o1SUdOdmJXSnBibWx1WnlCMGFHVWdjM0JsWTJsbWFXVmtJRlZTVEhOY2JpQXFYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnWW1GelpWVlNUQ0JVYUdVZ1ltRnpaU0JWVWt4Y2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQnlaV3hoZEdsMlpWVlNUQ0JVYUdVZ2NtVnNZWFJwZG1VZ1ZWSk1YRzRnS2lCQWNtVjBkWEp1Y3lCN2MzUnlhVzVuZlNCVWFHVWdZMjl0WW1sdVpXUWdWVkpNWEc0Z0tpOWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdZMjl0WW1sdVpWVlNUSE1vWW1GelpWVlNUQ3dnY21Wc1lYUnBkbVZWVWt3cElIdGNiaUFnY21WMGRYSnVJSEpsYkdGMGFYWmxWVkpNWEc0Z0lDQWdQeUJpWVhObFZWSk1MbkpsY0d4aFkyVW9MMXhjTHlza0x5d2dKeWNwSUNzZ0p5OG5JQ3NnY21Wc1lYUnBkbVZWVWt3dWNtVndiR0ZqWlNndlhseGNMeXN2TENBbkp5bGNiaUFnSUNBNklHSmhjMlZWVWt3N1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdkWFJwYkhNZ1BTQnlaWEYxYVhKbEtDY3VMeTR1TDNWMGFXeHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ0tGeHVJQ0IxZEdsc2N5NXBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUQ5Y2JseHVJQ0F2THlCVGRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRuTWdjM1Z3Y0c5eWRDQmtiMk4xYldWdWRDNWpiMjlyYVdWY2JpQWdJQ0FvWm5WdVkzUnBiMjRnYzNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2QzSnBkR1U2SUdaMWJtTjBhVzl1SUhkeWFYUmxLRzVoYldVc0lIWmhiSFZsTENCbGVIQnBjbVZ6TENCd1lYUm9MQ0JrYjIxaGFXNHNJSE5sWTNWeVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmpiMjlyYVdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnSUNCamIyOXJhV1V1Y0hWemFDaHVZVzFsSUNzZ0p6MG5JQ3NnWlc1amIyUmxWVkpKUTI5dGNHOXVaVzUwS0haaGJIVmxLU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5PZFcxaVpYSW9aWGh3YVhKbGN5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2RsZUhCcGNtVnpQU2NnS3lCdVpYY2dSR0YwWlNobGVIQnBjbVZ6S1M1MGIwZE5WRk4wY21sdVp5Z3BLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2RYUnBiSE11YVhOVGRISnBibWNvY0dGMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiMnRwWlM1d2RYTm9LQ2R3WVhSb1BTY2dLeUJ3WVhSb0tUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZFhScGJITXVhWE5UZEhKcGJtY29aRzl0WVdsdUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXZhMmxsTG5CMWMyZ29KMlJ2YldGcGJqMG5JQ3NnWkc5dFlXbHVLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2MyVmpkWEpsSUQwOVBTQjBjblZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI5cmFXVXVjSFZ6YUNnbmMyVmpkWEpsSnlrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVkyOXZhMmxsSUQwZ1kyOXZhMmxsTG1wdmFXNG9KenNnSnlrN1hHNGdJQ0FnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJQ0FnY21WaFpEb2dablZ1WTNScGIyNGdjbVZoWkNodVlXMWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJRzFoZEdOb0lEMGdaRzlqZFcxbGJuUXVZMjl2YTJsbExtMWhkR05vS0c1bGR5QlNaV2RGZUhBb0p5aGVmRHRjWEZ4Y2N5b3BLQ2NnS3lCdVlXMWxJQ3NnSnlrOUtGdGVPMTBxS1NjcEtUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRzFoZEdOb0lEOGdaR1ZqYjJSbFZWSkpRMjl0Y0c5dVpXNTBLRzFoZEdOb1d6TmRLU0E2SUc1MWJHd3BPMXh1SUNBZ0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbmR5YVhSbEtHNWhiV1VzSUNjbkxDQkVZWFJsTG01dmR5Z3BJQzBnT0RZME1EQXdNREFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgwcEtDa2dPbHh1WEc0Z0lDOHZJRTV2YmlCemRHRnVaR0Z5WkNCaWNtOTNjMlZ5SUdWdWRpQW9kMlZpSUhkdmNtdGxjbk1zSUhKbFlXTjBMVzVoZEdsMlpTa2diR0ZqYXlCdVpXVmtaV1FnYzNWd2NHOXlkQzVjYmlBZ0lDQW9ablZ1WTNScGIyNGdibTl1VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2QzSnBkR1U2SUdaMWJtTjBhVzl1SUhkeWFYUmxLQ2tnZTMwc1hHNGdJQ0FnSUNBZ0lISmxZV1E2SUdaMWJtTjBhVzl1SUhKbFlXUW9LU0I3SUhKbGRIVnliaUJ1ZFd4c095QjlMRnh1SUNBZ0lDQWdJQ0J5WlcxdmRtVTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpTZ3BJSHQ5WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDBwS0NsY2JpazdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsY3lCM2FHVjBhR1Z5SUhSb1pTQnpjR1ZqYVdacFpXUWdWVkpNSUdseklHRmljMjlzZFhSbFhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUhWeWJDQlVhR1VnVlZKTUlIUnZJSFJsYzNSY2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JVY25WbElHbG1JSFJvWlNCemNHVmphV1pwWldRZ1ZWSk1JR2x6SUdGaWMyOXNkWFJsTENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnBjMEZpYzI5c2RYUmxWVkpNS0hWeWJDa2dlMXh1SUNBdkx5QkJJRlZTVENCcGN5QmpiMjV6YVdSbGNtVmtJR0ZpYzI5c2RYUmxJR2xtSUdsMElHSmxaMmx1Y3lCM2FYUm9JRndpUEhOamFHVnRaVDQ2THk5Y0lpQnZjaUJjSWk4dlhDSWdLSEJ5YjNSdlkyOXNMWEpsYkdGMGFYWmxJRlZTVENrdVhHNGdJQzh2SUZKR1F5QXpPVGcySUdSbFptbHVaWE1nYzJOb1pXMWxJRzVoYldVZ1lYTWdZU0J6WlhGMVpXNWpaU0J2WmlCamFHRnlZV04wWlhKeklHSmxaMmx1Ym1sdVp5QjNhWFJvSUdFZ2JHVjBkR1Z5SUdGdVpDQm1iMnhzYjNkbFpGeHVJQ0F2THlCaWVTQmhibmtnWTI5dFltbHVZWFJwYjI0Z2IyWWdiR1YwZEdWeWN5d2daR2xuYVhSekxDQndiSFZ6TENCd1pYSnBiMlFzSUc5eUlHaDVjR2hsYmk1Y2JpQWdjbVYwZFhKdUlDOWVLRnRoTFhwZFcyRXRlbHhjWkZ4Y0sxeGNMVnhjTGwwcU9pay9YRnd2WEZ3dkwya3VkR1Z6ZENoMWNtd3BPMXh1ZlR0Y2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUhWMGFXeHpJRDBnY21WeGRXbHlaU2duTGk4dUxpOTFkR2xzY3ljcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJQ2hjYmlBZ2RYUnBiSE11YVhOVGRHRnVaR0Z5WkVKeWIzZHpaWEpGYm5Zb0tTQS9YRzVjYmlBZ0x5OGdVM1JoYm1SaGNtUWdZbkp2ZDNObGNpQmxiblp6SUdoaGRtVWdablZzYkNCemRYQndiM0owSUc5bUlIUm9aU0JCVUVseklHNWxaV1JsWkNCMGJ5QjBaWE4wWEc0Z0lDOHZJSGRvWlhSb1pYSWdkR2hsSUhKbGNYVmxjM1FnVlZKTUlHbHpJRzltSUhSb1pTQnpZVzFsSUc5eWFXZHBiaUJoY3lCamRYSnlaVzUwSUd4dlkyRjBhVzl1TGx4dUlDQWdJQ2htZFc1amRHbHZiaUJ6ZEdGdVpHRnlaRUp5YjNkelpYSkZibllvS1NCN1hHNGdJQ0FnSUNCMllYSWdiWE5wWlNBOUlDOG9iWE5wWlh4MGNtbGtaVzUwS1M5cExuUmxjM1FvYm1GMmFXZGhkRzl5TG5WelpYSkJaMlZ1ZENrN1hHNGdJQ0FnSUNCMllYSWdkWEpzVUdGeWMybHVaMDV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NkaEp5azdYRzRnSUNBZ0lDQjJZWElnYjNKcFoybHVWVkpNTzF4dVhHNGdJQ0FnSUNBdktpcGNiaUFnSUNBcUlGQmhjbk5sSUdFZ1ZWSk1JSFJ2SUdScGMyTnZkbVZ5SUdsMEozTWdZMjl0Y0c5dVpXNTBjMXh1SUNBZ0lDcGNiaUFnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCMWNtd2dWR2hsSUZWU1RDQjBieUJpWlNCd1lYSnpaV1JjYmlBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlYRzRnSUNBZ0tpOWNiaUFnSUNBZ0lHWjFibU4wYVc5dUlISmxjMjlzZG1WVlVrd29kWEpzS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJvY21WbUlEMGdkWEpzTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0YzJsbEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUVsRklHNWxaV1J6SUdGMGRISnBZblYwWlNCelpYUWdkSGRwWTJVZ2RHOGdibTl5YldGc2FYcGxJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSUNCMWNteFFZWEp6YVc1blRtOWtaUzV6WlhSQmRIUnlhV0oxZEdVb0oyaHlaV1luTENCb2NtVm1LVHRjYmlBZ0lDQWdJQ0FnSUNCb2NtVm1JRDBnZFhKc1VHRnljMmx1WjA1dlpHVXVhSEpsWmp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFZ5YkZCaGNuTnBibWRPYjJSbExuTmxkRUYwZEhKcFluVjBaU2duYUhKbFppY3NJR2h5WldZcE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUhWeWJGQmhjbk5wYm1kT2IyUmxJSEJ5YjNacFpHVnpJSFJvWlNCVmNteFZkR2xzY3lCcGJuUmxjbVpoWTJVZ0xTQm9kSFJ3T2k4dmRYSnNMbk53WldNdWQyaGhkSGRuTG05eVp5OGpkWEpzZFhScGJITmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0JvY21WbU9pQjFjbXhRWVhKemFXNW5UbTlrWlM1b2NtVm1MRnh1SUNBZ0lDQWdJQ0FnSUhCeWIzUnZZMjlzT2lCMWNteFFZWEp6YVc1blRtOWtaUzV3Y205MGIyTnZiQ0EvSUhWeWJGQmhjbk5wYm1kT2IyUmxMbkJ5YjNSdlkyOXNMbkpsY0d4aFkyVW9Mem9rTHl3Z0p5Y3BJRG9nSnljc1hHNGdJQ0FnSUNBZ0lDQWdhRzl6ZERvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUc5emRDeGNiaUFnSUNBZ0lDQWdJQ0J6WldGeVkyZzZJSFZ5YkZCaGNuTnBibWRPYjJSbExuTmxZWEpqYUNBL0lIVnliRkJoY25OcGJtZE9iMlJsTG5ObFlYSmphQzV5WlhCc1lXTmxLQzllWEZ3L0x5d2dKeWNwSURvZ0p5Y3NYRzRnSUNBZ0lDQWdJQ0FnYUdGemFEb2dkWEpzVUdGeWMybHVaMDV2WkdVdWFHRnphQ0EvSUhWeWJGQmhjbk5wYm1kT2IyUmxMbWhoYzJndWNtVndiR0ZqWlNndlhpTXZMQ0FuSnlrZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnSUNCb2IzTjBibUZ0WlRvZ2RYSnNVR0Z5YzJsdVowNXZaR1V1YUc5emRHNWhiV1VzWEc0Z0lDQWdJQ0FnSUNBZ2NHOXlkRG9nZFhKc1VHRnljMmx1WjA1dlpHVXVjRzl5ZEN4Y2JpQWdJQ0FnSUNBZ0lDQndZWFJvYm1GdFpUb2dLSFZ5YkZCaGNuTnBibWRPYjJSbExuQmhkR2h1WVcxbExtTm9ZWEpCZENnd0tTQTlQVDBnSnk4bktTQS9YRzRnSUNBZ0lDQWdJQ0FnSUNCMWNteFFZWEp6YVc1blRtOWtaUzV3WVhSb2JtRnRaU0E2WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5MeWNnS3lCMWNteFFZWEp6YVc1blRtOWtaUzV3WVhSb2JtRnRaVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCdmNtbG5hVzVWVWt3Z1BTQnlaWE52YkhabFZWSk1LSGRwYm1SdmR5NXNiMk5oZEdsdmJpNW9jbVZtS1R0Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0tpQkVaWFJsY20xcGJtVWdhV1lnWVNCVlVrd2djMmhoY21WeklIUm9aU0J6WVcxbElHOXlhV2RwYmlCaGN5QjBhR1VnWTNWeWNtVnVkQ0JzYjJOaGRHbHZibHh1SUNBZ0lDcGNiaUFnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCeVpYRjFaWE4wVlZKTUlGUm9aU0JWVWt3Z2RHOGdkR1Z6ZEZ4dUlDQWdJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnVlZKTUlITm9ZWEpsY3lCMGFHVWdjMkZ0WlNCdmNtbG5hVzRzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNBZ0lDb3ZYRzRnSUNBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z2FYTlZVa3hUWVcxbFQzSnBaMmx1S0hKbGNYVmxjM1JWVWt3cElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCaGNuTmxaQ0E5SUNoMWRHbHNjeTVwYzFOMGNtbHVaeWh5WlhGMVpYTjBWVkpNS1NrZ1B5QnlaWE52YkhabFZWSk1LSEpsY1hWbGMzUlZVa3dwSURvZ2NtVnhkV1Z6ZEZWU1REdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaHdZWEp6WldRdWNISnZkRzlqYjJ3Z1BUMDlJRzl5YVdkcGJsVlNUQzV3Y205MGIyTnZiQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdjR0Z5YzJWa0xtaHZjM1FnUFQwOUlHOXlhV2RwYmxWU1RDNW9iM04wS1R0Y2JpQWdJQ0FnSUgwN1hHNGdJQ0FnZlNrb0tTQTZYRzVjYmlBZ0x5OGdUbTl1SUhOMFlXNWtZWEprSUdKeWIzZHpaWElnWlc1MmN5QW9kMlZpSUhkdmNtdGxjbk1zSUhKbFlXTjBMVzVoZEdsMlpTa2diR0ZqYXlCdVpXVmtaV1FnYzNWd2NHOXlkQzVjYmlBZ0lDQW9ablZ1WTNScGIyNGdibTl1VTNSaGJtUmhjbVJDY205M2MyVnlSVzUyS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUdselZWSk1VMkZ0WlU5eWFXZHBiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMHBLQ2xjYmlrN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCMWRHbHNjeUE5SUhKbGNYVnBjbVVvSnk0dUwzVjBhV3h6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdibTl5YldGc2FYcGxTR1ZoWkdWeVRtRnRaU2hvWldGa1pYSnpMQ0J1YjNKdFlXeHBlbVZrVG1GdFpTa2dlMXh1SUNCMWRHbHNjeTVtYjNKRllXTm9LR2hsWVdSbGNuTXNJR1oxYm1OMGFXOXVJSEJ5YjJObGMzTklaV0ZrWlhJb2RtRnNkV1VzSUc1aGJXVXBJSHRjYmlBZ0lDQnBaaUFvYm1GdFpTQWhQVDBnYm05eWJXRnNhWHBsWkU1aGJXVWdKaVlnYm1GdFpTNTBiMVZ3Y0dWeVEyRnpaU2dwSUQwOVBTQnViM0p0WVd4cGVtVmtUbUZ0WlM1MGIxVndjR1Z5UTJGelpTZ3BLU0I3WEc0Z0lDQWdJQ0JvWldGa1pYSnpXMjV2Y20xaGJHbDZaV1JPWVcxbFhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ1pHVnNaWFJsSUdobFlXUmxjbk5iYm1GdFpWMDdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JuMDdYRzRpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQjFkR2xzY3lBOUlISmxjWFZwY21Vb0p5NHZMaTR2ZFhScGJITW5LVHRjYmx4dUx5OGdTR1ZoWkdWeWN5QjNhRzl6WlNCa2RYQnNhV05oZEdWeklHRnlaU0JwWjI1dmNtVmtJR0o1SUc1dlpHVmNiaTh2SUdNdVppNGdhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMkZ3YVM5b2RIUndMbWgwYld3amFIUjBjRjl0WlhOellXZGxYMmhsWVdSbGNuTmNiblpoY2lCcFoyNXZjbVZFZFhCc2FXTmhkR1ZQWmlBOUlGdGNiaUFnSjJGblpTY3NJQ2RoZFhSb2IzSnBlbUYwYVc5dUp5d2dKMk52Ym5SbGJuUXRiR1Z1WjNSb0p5d2dKMk52Ym5SbGJuUXRkSGx3WlNjc0lDZGxkR0ZuSnl4Y2JpQWdKMlY0Y0dseVpYTW5MQ0FuWm5KdmJTY3NJQ2RvYjNOMEp5d2dKMmxtTFcxdlpHbG1hV1ZrTFhOcGJtTmxKeXdnSjJsbUxYVnViVzlrYVdacFpXUXRjMmx1WTJVbkxGeHVJQ0FuYkdGemRDMXRiMlJwWm1sbFpDY3NJQ2RzYjJOaGRHbHZiaWNzSUNkdFlYZ3RabTl5ZDJGeVpITW5MQ0FuY0hKdmVIa3RZWFYwYUc5eWFYcGhkR2x2Ymljc1hHNGdJQ2R5WldabGNtVnlKeXdnSjNKbGRISjVMV0ZtZEdWeUp5d2dKM1Z6WlhJdFlXZGxiblFuWEc1ZE8xeHVYRzR2S2lwY2JpQXFJRkJoY25ObElHaGxZV1JsY25NZ2FXNTBieUJoYmlCdlltcGxZM1JjYmlBcVhHNGdLaUJnWUdCY2JpQXFJRVJoZEdVNklGZGxaQ3dnTWpjZ1FYVm5JREl3TVRRZ01EZzZOVGc2TkRrZ1IwMVVYRzRnS2lCRGIyNTBaVzUwTFZSNWNHVTZJR0Z3Y0d4cFkyRjBhVzl1TDJwemIyNWNiaUFxSUVOdmJtNWxZM1JwYjI0NklHdGxaWEF0WVd4cGRtVmNiaUFxSUZSeVlXNXpabVZ5TFVWdVkyOWthVzVuT2lCamFIVnVhMlZrWEc0Z0tpQmdZR0JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdhR1ZoWkdWeWN5QklaV0ZrWlhKeklHNWxaV1JwYm1jZ2RHOGdZbVVnY0dGeWMyVmtYRzRnS2lCQWNtVjBkWEp1Y3lCN1QySnFaV04wZlNCSVpXRmtaWEp6SUhCaGNuTmxaQ0JwYm5SdklHRnVJRzlpYW1WamRGeHVJQ292WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUhCaGNuTmxTR1ZoWkdWeWN5aG9aV0ZrWlhKektTQjdYRzRnSUhaaGNpQndZWEp6WldRZ1BTQjdmVHRjYmlBZ2RtRnlJR3RsZVR0Y2JpQWdkbUZ5SUhaaGJEdGNiaUFnZG1GeUlHazdYRzVjYmlBZ2FXWWdLQ0ZvWldGa1pYSnpLU0I3SUhKbGRIVnliaUJ3WVhKelpXUTdJSDFjYmx4dUlDQjFkR2xzY3k1bWIzSkZZV05vS0dobFlXUmxjbk11YzNCc2FYUW9KMXhjYmljcExDQm1kVzVqZEdsdmJpQndZWEp6WlhJb2JHbHVaU2tnZTF4dUlDQWdJR2tnUFNCc2FXNWxMbWx1WkdWNFQyWW9Kem9uS1R0Y2JpQWdJQ0JyWlhrZ1BTQjFkR2xzY3k1MGNtbHRLR3hwYm1VdWMzVmljM1J5S0RBc0lHa3BLUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVJQ0FnSUhaaGJDQTlJSFYwYVd4ekxuUnlhVzBvYkdsdVpTNXpkV0p6ZEhJb2FTQXJJREVwS1R0Y2JseHVJQ0FnSUdsbUlDaHJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaHdZWEp6WldSYmEyVjVYU0FtSmlCcFoyNXZjbVZFZFhCc2FXTmhkR1ZQWmk1cGJtUmxlRTltS0d0bGVTa2dQajBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9hMlY1SUQwOVBTQW5jMlYwTFdOdmIydHBaU2NwSUh0Y2JpQWdJQ0FnSUNBZ2NHRnljMlZrVzJ0bGVWMGdQU0FvY0dGeWMyVmtXMnRsZVYwZ1B5QndZWEp6WldSYmEyVjVYU0E2SUZ0ZEtTNWpiMjVqWVhRb1czWmhiRjBwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY0dGeWMyVmtXMnRsZVYwZ1BTQndZWEp6WldSYmEyVjVYU0EvSUhCaGNuTmxaRnRyWlhsZElDc2dKeXdnSnlBcklIWmhiQ0E2SUhaaGJEdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEp6WldRN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc0dktpcGNiaUFxSUZONWJuUmhZM1JwWXlCemRXZGhjaUJtYjNJZ2FXNTJiMnRwYm1jZ1lTQm1kVzVqZEdsdmJpQmhibVFnWlhod1lXNWthVzVuSUdGdUlHRnljbUY1SUdadmNpQmhjbWQxYldWdWRITXVYRzRnS2x4dUlDb2dRMjl0Ylc5dUlIVnpaU0JqWVhObElIZHZkV3hrSUdKbElIUnZJSFZ6WlNCZ1JuVnVZM1JwYjI0dWNISnZkRzkwZVhCbExtRndjR3g1WUM1Y2JpQXFYRzRnS2lBZ1lHQmdhbk5jYmlBcUlDQm1kVzVqZEdsdmJpQm1LSGdzSUhrc0lIb3BJSHQ5WEc0Z0tpQWdkbUZ5SUdGeVozTWdQU0JiTVN3Z01pd2dNMTA3WEc0Z0tpQWdaaTVoY0hCc2VTaHVkV3hzTENCaGNtZHpLVHRjYmlBcUlDQmdZR0JjYmlBcVhHNGdLaUJYYVhSb0lHQnpjSEpsWVdSZ0lIUm9hWE1nWlhoaGJYQnNaU0JqWVc0Z1ltVWdjbVV0ZDNKcGRIUmxiaTVjYmlBcVhHNGdLaUFnWUdCZ2FuTmNiaUFxSUNCemNISmxZV1FvWm5WdVkzUnBiMjRvZUN3Z2VTd2dlaWtnZTMwcEtGc3hMQ0F5TENBelhTazdYRzRnS2lBZ1lHQmdYRzRnS2x4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFxSUVCeVpYUjFjbTV6SUh0R2RXNWpkR2x2Ym4xY2JpQXFMMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUJ6Y0hKbFlXUW9ZMkZzYkdKaFkyc3BJSHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUhkeVlYQW9ZWEp5S1NCN1hHNGdJQ0FnY21WMGRYSnVJR05oYkd4aVlXTnJMbUZ3Y0d4NUtHNTFiR3dzSUdGeWNpazdYRzRnSUgwN1hHNTlPMXh1SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1MllYSWdZbWx1WkNBOUlISmxjWFZwY21Vb0p5NHZhR1ZzY0dWeWN5OWlhVzVrSnlrN1hHNWNiaThxWjJ4dlltRnNJSFJ2VTNSeWFXNW5PblJ5ZFdVcUwxeHVYRzR2THlCMWRHbHNjeUJwY3lCaElHeHBZbkpoY25rZ2IyWWdaMlZ1WlhKcFl5Qm9aV3h3WlhJZ1puVnVZM1JwYjI1eklHNXZiaTF6Y0dWamFXWnBZeUIwYnlCaGVHbHZjMXh1WEc1MllYSWdkRzlUZEhKcGJtY2dQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5PMXh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0Z1SUVGeWNtRjVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lXNGdRWEp5WVhrc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkRzlUZEhKcGJtY3VZMkZzYkNoMllXd3BJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklIVnVaR1ZtYVc1bFpGeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhSb1pTQjJZV3gxWlNCcGN5QjFibVJsWm1sdVpXUXNJRzkwYUdWeWQybHpaU0JtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxVnVaR1ZtYVc1bFpDaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkMWJtUmxabWx1WldRbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUW5WbVptVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQkNkV1ptWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBKMVptWmxjaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFpoYkNBaFBUMGdiblZzYkNBbUppQWhhWE5WYm1SbFptbHVaV1FvZG1Gc0tTQW1KaUIyWVd3dVkyOXVjM1J5ZFdOMGIzSWdJVDA5SUc1MWJHd2dKaVlnSVdselZXNWtaV1pwYm1Wa0tIWmhiQzVqYjI1emRISjFZM1J2Y2lsY2JpQWdJQ0FtSmlCMGVYQmxiMllnZG1Gc0xtTnZibk4wY25WamRHOXlMbWx6UW5WbVptVnlJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JSFpoYkM1amIyNXpkSEoxWTNSdmNpNXBjMEoxWm1abGNpaDJZV3dwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRVJsZEdWeWJXbHVaU0JwWmlCaElIWmhiSFZsSUdseklHRnVJRUZ5Y21GNVFuVm1abVZ5WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSFpoYkNCVWFHVWdkbUZzZFdVZ2RHOGdkR1Z6ZEZ4dUlDb2dRSEpsZEhWeWJuTWdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbUZzZFdVZ2FYTWdZVzRnUVhKeVlYbENkV1ptWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzBGeWNtRjVRblZtWm1WeUtIWmhiQ2tnZTF4dUlDQnlaWFIxY200Z2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd3cElEMDlQU0FuVzI5aWFtVmpkQ0JCY25KaGVVSjFabVpsY2wwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm05eWJVUmhkR0ZjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhiaUJHYjNKdFJHRjBZU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSbTl5YlVSaGRHRW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQW9kSGx3Wlc5bUlFWnZjbTFFWVhSaElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ0ppWWdLSFpoYkNCcGJuTjBZVzVqWlc5bUlFWnZjbTFFWVhSaEtUdGNibjFjYmx4dUx5b3FYRzRnS2lCRVpYUmxjbTFwYm1VZ2FXWWdZU0IyWVd4MVpTQnBjeUJoSUhacFpYY2diMjRnWVc0Z1FYSnlZWGxDZFdabVpYSmNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2RtRnNJRlJvWlNCMllXeDFaU0IwYnlCMFpYTjBYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1ZISjFaU0JwWmlCMllXeDFaU0JwY3lCaElIWnBaWGNnYjI0Z1lXNGdRWEp5WVhsQ2RXWm1aWElzSUc5MGFHVnlkMmx6WlNCbVlXeHpaVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNVFuVm1abVZ5Vm1sbGR5aDJZV3dwSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkRHRjYmlBZ2FXWWdLQ2gwZVhCbGIyWWdRWEp5WVhsQ2RXWm1aWElnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0FtSmlBb1FYSnlZWGxDZFdabVpYSXVhWE5XYVdWM0tTa2dlMXh1SUNBZ0lISmxjM1ZzZENBOUlFRnljbUY1UW5WbVptVnlMbWx6Vm1sbGR5aDJZV3dwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGMzVnNkQ0E5SUNoMllXd3BJQ1ltSUNoMllXd3VZblZtWm1WeUtTQW1KaUFvZG1Gc0xtSjFabVpsY2lCcGJuTjBZVzVqWlc5bUlFRnljbUY1UW5WbVptVnlLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnVTNSeWFXNW5YRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQlRkSEpwYm1jc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzFOMGNtbHVaeWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHpkSEpwYm1jbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnVG5WdFltVnlYRzRnS2x4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIWmhiQ0JVYUdVZ2RtRnNkV1VnZEc4Z2RHVnpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2RtRnNkV1VnYVhNZ1lTQk9kVzFpWlhJc0lHOTBhR1Z5ZDJselpTQm1ZV3h6WlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJwYzA1MWJXSmxjaWgyWVd3cElIdGNiaUFnY21WMGRYSnVJSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHVkVzFpWlhJbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0Z1SUU5aWFtVmpkRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRnVJRTlpYW1WamRDd2diM1JvWlhKM2FYTmxJR1poYkhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdselQySnFaV04wS0haaGJDa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc0lDRTlQU0J1ZFd4c0lDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUkdGMFpWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1JHRjBaU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSR0YwWlNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdSR0YwWlYwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm1sc1pWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1JtbHNaU3dnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpSbWxzWlNoMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdSbWxzWlYwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUW14dllseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1FteHZZaXdnYjNSb1pYSjNhWE5sSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpRbXh2WWloMllXd3BJSHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29kbUZzS1NBOVBUMGdKMXR2WW1wbFkzUWdRbXh2WWwwbk8xeHVmVnh1WEc0dktpcGNiaUFxSUVSbGRHVnliV2x1WlNCcFppQmhJSFpoYkhWbElHbHpJR0VnUm5WdVkzUnBiMjVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdkbUZzSUZSb1pTQjJZV3gxWlNCMGJ5QjBaWE4wWEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdWSEoxWlNCcFppQjJZV3gxWlNCcGN5QmhJRVoxYm1OMGFXOXVMQ0J2ZEdobGNuZHBjMlVnWm1Gc2MyVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpaDJZV3dwSUh0Y2JpQWdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc0tTQTlQVDBnSjF0dlltcGxZM1FnUm5WdVkzUnBiMjVkSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJFWlhSbGNtMXBibVVnYVdZZ1lTQjJZV3gxWlNCcGN5QmhJRk4wY21WaGJWeHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCMllXd2dWR2hsSUhaaGJIVmxJSFJ2SUhSbGMzUmNiaUFxSUVCeVpYUjFjbTV6SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhaaGJIVmxJR2x6SUdFZ1UzUnlaV0Z0TENCdmRHaGxjbmRwYzJVZ1ptRnNjMlZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5UZEhKbFlXMG9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQnBjMDlpYW1WamRDaDJZV3dwSUNZbUlHbHpSblZ1WTNScGIyNG9kbUZzTG5CcGNHVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFUmxkR1Z5YldsdVpTQnBaaUJoSUhaaGJIVmxJR2x6SUdFZ1ZWSk1VMlZoY21Ob1VHRnlZVzF6SUc5aWFtVmpkRnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQjJZV3dnVkdobElIWmhiSFZsSUhSdklIUmxjM1JjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlVjblZsSUdsbUlIWmhiSFZsSUdseklHRWdWVkpNVTJWaGNtTm9VR0Z5WVcxeklHOWlhbVZqZEN3Z2IzUm9aWEozYVhObElHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VlZKTVUyVmhjbU5vVUdGeVlXMXpLSFpoYkNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlGVlNURk5sWVhKamFGQmhjbUZ0Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2RtRnNJR2x1YzNSaGJtTmxiMllnVlZKTVUyVmhjbU5vVUdGeVlXMXpPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGUnlhVzBnWlhoalpYTnpJSGRvYVhSbGMzQmhZMlVnYjJabUlIUm9aU0JpWldkcGJtNXBibWNnWVc1a0lHVnVaQ0J2WmlCaElITjBjbWx1WjF4dUlDcGNiaUFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J6ZEhJZ1ZHaGxJRk4wY21sdVp5QjBieUIwY21sdFhHNGdLaUJBY21WMGRYSnVjeUI3VTNSeWFXNW5mU0JVYUdVZ1UzUnlhVzVuSUdaeVpXVmtJRzltSUdWNFkyVnpjeUIzYUdsMFpYTndZV05sWEc0Z0tpOWNibVoxYm1OMGFXOXVJSFJ5YVcwb2MzUnlLU0I3WEc0Z0lISmxkSFZ5YmlCemRISXVjbVZ3YkdGalpTZ3ZYbHhjY3lvdkxDQW5KeWt1Y21Wd2JHRmpaU2d2WEZ4ektpUXZMQ0FuSnlrN1hHNTlYRzVjYmk4cUtseHVJQ29nUkdWMFpYSnRhVzVsSUdsbUlIZGxKM0psSUhKMWJtNXBibWNnYVc0Z1lTQnpkR0Z1WkdGeVpDQmljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBYRzRnS2x4dUlDb2dWR2hwY3lCaGJHeHZkM01nWVhocGIzTWdkRzhnY25WdUlHbHVJR0VnZDJWaUlIZHZjbXRsY2l3Z1lXNWtJSEpsWVdOMExXNWhkR2wyWlM1Y2JpQXFJRUp2ZEdnZ1pXNTJhWEp2Ym0xbGJuUnpJSE4xY0hCdmNuUWdXRTFNU0hSMGNGSmxjWFZsYzNRc0lHSjFkQ0J1YjNRZ1puVnNiSGtnYzNSaGJtUmhjbVFnWjJ4dlltRnNjeTVjYmlBcVhHNGdLaUIzWldJZ2QyOXlhMlZ5Y3pwY2JpQXFJQ0IwZVhCbGIyWWdkMmx1Wkc5M0lDMCtJSFZ1WkdWbWFXNWxaRnh1SUNvZ0lIUjVjR1Z2WmlCa2IyTjFiV1Z1ZENBdFBpQjFibVJsWm1sdVpXUmNiaUFxWEc0Z0tpQnlaV0ZqZEMxdVlYUnBkbVU2WEc0Z0tpQWdibUYyYVdkaGRHOXlMbkJ5YjJSMVkzUWdMVDRnSjFKbFlXTjBUbUYwYVhabEoxeHVJQ29nYm1GMGFYWmxjMk55YVhCMFhHNGdLaUFnYm1GMmFXZGhkRzl5TG5CeWIyUjFZM1FnTFQ0Z0owNWhkR2wyWlZOamNtbHdkQ2NnYjNJZ0owNVRKMXh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaWdwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUNodVlYWnBaMkYwYjNJdWNISnZaSFZqZENBOVBUMGdKMUpsWVdOMFRtRjBhWFpsSnlCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhkbWxuWVhSdmNpNXdjbTlrZFdOMElEMDlQU0FuVG1GMGFYWmxVMk55YVhCMEp5QjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoZG1sbllYUnZjaTV3Y205a2RXTjBJRDA5UFNBblRsTW5LU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbVhHNGdJQ0FnZEhsd1pXOW1JR1J2WTNWdFpXNTBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0oxeHVJQ0FwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWwwWlhKaGRHVWdiM1psY2lCaGJpQkJjbkpoZVNCdmNpQmhiaUJQWW1wbFkzUWdhVzUyYjJ0cGJtY2dZU0JtZFc1amRHbHZiaUJtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JR0J2WW1wZ0lHbHpJR0Z1SUVGeWNtRjVJR05oYkd4aVlXTnJJSGRwYkd3Z1ltVWdZMkZzYkdWa0lIQmhjM05wYm1kY2JpQXFJSFJvWlNCMllXeDFaU3dnYVc1a1pYZ3NJR0Z1WkNCamIyMXdiR1YwWlNCaGNuSmhlU0JtYjNJZ1pXRmphQ0JwZEdWdExseHVJQ3BjYmlBcUlFbG1JQ2R2WW1vbklHbHpJR0Z1SUU5aWFtVmpkQ0JqWVd4c1ltRmpheUIzYVd4c0lHSmxJR05oYkd4bFpDQndZWE56YVc1blhHNGdLaUIwYUdVZ2RtRnNkV1VzSUd0bGVTd2dZVzVrSUdOdmJYQnNaWFJsSUc5aWFtVmpkQ0JtYjNJZ1pXRmphQ0J3Y205d1pYSjBlUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIeEJjbkpoZVgwZ2IySnFJRlJvWlNCdlltcGxZM1FnZEc4Z2FYUmxjbUYwWlZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdabTRnVkdobElHTmhiR3hpWVdOcklIUnZJR2x1ZG05clpTQm1iM0lnWldGamFDQnBkR1Z0WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1p2Y2tWaFkyZ29iMkpxTENCbWJpa2dlMXh1SUNBdkx5QkViMjRuZENCaWIzUm9aWElnYVdZZ2JtOGdkbUZzZFdVZ2NISnZkbWxrWldSY2JpQWdhV1lnS0c5aWFpQTlQVDBnYm5Wc2JDQjhmQ0IwZVhCbGIyWWdiMkpxSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dVhHNGdJQzh2SUVadmNtTmxJR0Z1SUdGeWNtRjVJR2xtSUc1dmRDQmhiSEpsWVdSNUlITnZiV1YwYUdsdVp5QnBkR1Z5WVdKc1pWeHVJQ0JwWmlBb2RIbHdaVzltSUc5aWFpQWhQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0F2S21WemJHbHVkQ0J1Ynkxd1lYSmhiUzF5WldGemMybG5iam93S2k5Y2JpQWdJQ0J2WW1vZ1BTQmJiMkpxWFR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hwYzBGeWNtRjVLRzlpYWlrcElIdGNiaUFnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnWVhKeVlYa2dkbUZzZFdWelhHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJR3dnUFNCdlltb3ViR1Z1WjNSb095QnBJRHdnYkRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JtYmk1allXeHNLRzUxYkd3c0lHOWlhbHRwWFN3Z2FTd2diMkpxS1R0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk4Z1NYUmxjbUYwWlNCdmRtVnlJRzlpYW1WamRDQnJaWGx6WEc0Z0lDQWdabTl5SUNoMllYSWdhMlY1SUdsdUlHOWlhaWtnZTF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbW9zSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnWm00dVkyRnNiQ2h1ZFd4c0xDQnZZbXBiYTJWNVhTd2dhMlY1TENCdlltb3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRUZqWTJWd2RITWdkbUZ5WVhKbmN5QmxlSEJsWTNScGJtY2daV0ZqYUNCaGNtZDFiV1Z1ZENCMGJ5QmlaU0JoYmlCdlltcGxZM1FzSUhSb1pXNWNiaUFxSUdsdGJYVjBZV0pzZVNCdFpYSm5aWE1nZEdobElIQnliM0JsY25ScFpYTWdiMllnWldGamFDQnZZbXBsWTNRZ1lXNWtJSEpsZEhWeWJuTWdjbVZ6ZFd4MExseHVJQ3BjYmlBcUlGZG9aVzRnYlhWc2RHbHdiR1VnYjJKcVpXTjBjeUJqYjI1MFlXbHVJSFJvWlNCellXMWxJR3RsZVNCMGFHVWdiR0YwWlhJZ2IySnFaV04wSUdsdVhHNGdLaUIwYUdVZ1lYSm5kVzFsYm5SeklHeHBjM1FnZDJsc2JDQjBZV3RsSUhCeVpXTmxaR1Z1WTJVdVhHNGdLbHh1SUNvZ1JYaGhiWEJzWlRwY2JpQXFYRzRnS2lCZ1lHQnFjMXh1SUNvZ2RtRnlJSEpsYzNWc2RDQTlJRzFsY21kbEtIdG1iMjg2SURFeU0zMHNJSHRtYjI4NklEUTFObjBwTzF4dUlDb2dZMjl1YzI5c1pTNXNiMmNvY21WemRXeDBMbVp2YnlrN0lDOHZJRzkxZEhCMWRITWdORFUyWEc0Z0tpQmdZR0JjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiMkpxTVNCUFltcGxZM1FnZEc4Z2JXVnlaMlZjYmlBcUlFQnlaWFIxY201eklIdFBZbXBsWTNSOUlGSmxjM1ZzZENCdlppQmhiR3dnYldWeVoyVWdjSEp2Y0dWeWRHbGxjMXh1SUNvdlhHNW1kVzVqZEdsdmJpQnRaWEpuWlNndktpQnZZbW94TENCdlltb3lMQ0J2WW1vekxDQXVMaTRnS2k4cElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlIdDlPMXh1SUNCbWRXNWpkR2x2YmlCaGMzTnBaMjVXWVd4MVpTaDJZV3dzSUd0bGVTa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6ZFd4MFcydGxlVjBnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUcxbGNtZGxLSEpsYzNWc2RGdHJaWGxkTENCMllXd3BPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYTjFiSFJiYTJWNVhTQTlJSFpoYkR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkNBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQm1iM0pGWVdOb0tHRnlaM1Z0Wlc1MGMxdHBYU3dnWVhOemFXZHVWbUZzZFdVcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc1OVhHNWNiaThxS2x4dUlDb2dSblZ1WTNScGIyNGdaWEYxWVd3Z2RHOGdiV1Z5WjJVZ2QybDBhQ0IwYUdVZ1pHbG1abVZ5Wlc1alpTQmlaV2x1WnlCMGFHRjBJRzV2SUhKbFptVnlaVzVqWlZ4dUlDb2dkRzhnYjNKcFoybHVZV3dnYjJKcVpXTjBjeUJwY3lCclpYQjBMbHh1SUNwY2JpQXFJRUJ6WldVZ2JXVnlaMlZjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCdlltb3hJRTlpYW1WamRDQjBieUJ0WlhKblpWeHVJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDBnVW1WemRXeDBJRzltSUdGc2JDQnRaWEpuWlNCd2NtOXdaWEowYVdWelhHNGdLaTljYm1aMWJtTjBhVzl1SUdSbFpYQk5aWEpuWlNndktpQnZZbW94TENCdlltb3lMQ0J2WW1vekxDQXVMaTRnS2k4cElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlIdDlPMXh1SUNCbWRXNWpkR2x2YmlCaGMzTnBaMjVXWVd4MVpTaDJZV3dzSUd0bGVTa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjbVZ6ZFd4MFcydGxlVjBnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWE4xYkhSYmEyVjVYU0E5SUdSbFpYQk5aWEpuWlNoeVpYTjFiSFJiYTJWNVhTd2dkbUZzS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUmJhMlY1WFNBOUlHUmxaWEJOWlhKblpTaDdmU3dnZG1Gc0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WemRXeDBXMnRsZVYwZ1BTQjJZV3c3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR3dnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ1ptOXlSV0ZqYUNoaGNtZDFiV1Z1ZEhOYmFWMHNJR0Z6YzJsbmJsWmhiSFZsS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WemRXeDBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFVjRkR1Z1WkhNZ2IySnFaV04wSUdFZ1lua2diWFYwWVdKc2VTQmhaR1JwYm1jZ2RHOGdhWFFnZEdobElIQnliM0JsY25ScFpYTWdiMllnYjJKcVpXTjBJR0l1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR0VnVkdobElHOWlhbVZqZENCMGJ5QmlaU0JsZUhSbGJtUmxaRnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdJZ1ZHaGxJRzlpYW1WamRDQjBieUJqYjNCNUlIQnliM0JsY25ScFpYTWdabkp2YlZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIUm9hWE5CY21jZ1ZHaGxJRzlpYW1WamRDQjBieUJpYVc1a0lHWjFibU4wYVc5dUlIUnZYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5SUZSb1pTQnlaWE4xYkhScGJtY2dkbUZzZFdVZ2IyWWdiMkpxWldOMElHRmNiaUFxTDF4dVpuVnVZM1JwYjI0Z1pYaDBaVzVrS0dFc0lHSXNJSFJvYVhOQmNtY3BJSHRjYmlBZ1ptOXlSV0ZqYUNoaUxDQm1kVzVqZEdsdmJpQmhjM05wWjI1V1lXeDFaU2gyWVd3c0lHdGxlU2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpRWEpuSUNZbUlIUjVjR1Z2WmlCMllXd2dQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lHRmJhMlY1WFNBOUlHSnBibVFvZG1Gc0xDQjBhR2x6UVhKbktUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWVZ0clpYbGRJRDBnZG1Gc08xeHVJQ0FnSUgxY2JpQWdmU2s3WEc0Z0lISmxkSFZ5YmlCaE8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2JpQWdhWE5CY25KaGVUb2dhWE5CY25KaGVTeGNiaUFnYVhOQmNuSmhlVUoxWm1abGNqb2dhWE5CY25KaGVVSjFabVpsY2l4Y2JpQWdhWE5DZFdabVpYSTZJR2x6UW5WbVptVnlMRnh1SUNCcGMwWnZjbTFFWVhSaE9pQnBjMFp2Y20xRVlYUmhMRnh1SUNCcGMwRnljbUY1UW5WbVptVnlWbWxsZHpvZ2FYTkJjbkpoZVVKMVptWmxjbFpwWlhjc1hHNGdJR2x6VTNSeWFXNW5PaUJwYzFOMGNtbHVaeXhjYmlBZ2FYTk9kVzFpWlhJNklHbHpUblZ0WW1WeUxGeHVJQ0JwYzA5aWFtVmpkRG9nYVhOUFltcGxZM1FzWEc0Z0lHbHpWVzVrWldacGJtVmtPaUJwYzFWdVpHVm1hVzVsWkN4Y2JpQWdhWE5FWVhSbE9pQnBjMFJoZEdVc1hHNGdJR2x6Um1sc1pUb2dhWE5HYVd4bExGeHVJQ0JwYzBKc2IySTZJR2x6UW14dllpeGNiaUFnYVhOR2RXNWpkR2x2YmpvZ2FYTkdkVzVqZEdsdmJpeGNiaUFnYVhOVGRISmxZVzA2SUdselUzUnlaV0Z0TEZ4dUlDQnBjMVZTVEZObFlYSmphRkJoY21GdGN6b2dhWE5WVWt4VFpXRnlZMmhRWVhKaGJYTXNYRzRnSUdselUzUmhibVJoY21SQ2NtOTNjMlZ5Ulc1Mk9pQnBjMU4wWVc1a1lYSmtRbkp2ZDNObGNrVnVkaXhjYmlBZ1ptOXlSV0ZqYURvZ1ptOXlSV0ZqYUN4Y2JpQWdiV1Z5WjJVNklHMWxjbWRsTEZ4dUlDQmtaV1Z3VFdWeVoyVTZJR1JsWlhCTlpYSm5aU3hjYmlBZ1pYaDBaVzVrT2lCbGVIUmxibVFzWEc0Z0lIUnlhVzA2SUhSeWFXMWNibjA3WEc0aUxDSXZMeUF1WkdseWJtRnRaU3dnTG1KaGMyVnVZVzFsTENCaGJtUWdMbVY0ZEc1aGJXVWdiV1YwYUc5a2N5QmhjbVVnWlhoMGNtRmpkR1ZrSUdaeWIyMGdUbTlrWlM1cWN5QjJPQzR4TVM0eExGeHVMeThnWW1GamEzQnZjblJsWkNCaGJtUWdkSEpoYm5Od2JHbDBaV1FnZDJsMGFDQkNZV0psYkN3Z2QybDBhQ0JpWVdOcmQyRnlaSE10WTI5dGNHRjBJR1pwZUdWelhHNWNiaTh2SUVOdmNIbHlhV2RvZENCS2IzbGxiblFzSUVsdVl5NGdZVzVrSUc5MGFHVnlJRTV2WkdVZ1kyOXVkSEpwWW5WMGIzSnpMbHh1THk5Y2JpOHZJRkJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhYRzR2THlCamIzQjVJRzltSUhSb2FYTWdjMjltZEhkaGNtVWdZVzVrSUdGemMyOWphV0YwWldRZ1pHOWpkVzFsYm5SaGRHbHZiaUJtYVd4bGN5QW9kR2hsWEc0dkx5QmNJbE52Wm5SM1lYSmxYQ0lwTENCMGJ5QmtaV0ZzSUdsdUlIUm9aU0JUYjJaMGQyRnlaU0IzYVhSb2IzVjBJSEpsYzNSeWFXTjBhVzl1TENCcGJtTnNkV1JwYm1kY2JpOHZJSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6SUhSdklIVnpaU3dnWTI5d2VTd2diVzlrYVdaNUxDQnRaWEpuWlN3Z2NIVmliR2x6YUN4Y2JpOHZJR1JwYzNSeWFXSjFkR1VzSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUIwYUdVZ1UyOW1kSGRoY21Vc0lHRnVaQ0IwYnlCd1pYSnRhWFJjYmk4dklIQmxjbk52Ym5NZ2RHOGdkMmh2YlNCMGFHVWdVMjltZEhkaGNtVWdhWE1nWm5WeWJtbHphR1ZrSUhSdklHUnZJSE52TENCemRXSnFaV04wSUhSdklIUm9aVnh1THk4Z1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZYRzR2TDF4dUx5OGdWR2hsSUdGaWIzWmxJR052Y0hseWFXZG9kQ0J1YjNScFkyVWdZVzVrSUhSb2FYTWdjR1Z5YldsemMybHZiaUJ1YjNScFkyVWdjMmhoYkd3Z1ltVWdhVzVqYkhWa1pXUmNiaTh2SUdsdUlHRnNiQ0JqYjNCcFpYTWdiM0lnYzNWaWMzUmhiblJwWVd3Z2NHOXlkR2x2Ym5NZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTGx4dUx5OWNiaTh2SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFOY2JpOHZJRTlTSUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBaY2JpOHZJRTFGVWtOSVFVNVVRVUpKVEVsVVdTd2dSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTVjYmk4dklFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJTQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxGeHVMeThnUkVGTlFVZEZVeUJQVWlCUFZFaEZVaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNYRzR2THlCUFZFaEZVbGRKVTBVc0lFRlNTVk5KVGtjZ1JsSlBUU3dnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRlhHNHZMeUJWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNGdWRWhGSUZOUFJsUlhRVkpGTGx4dVhHNHZMeUJ5WlhOdmJIWmxjeUF1SUdGdVpDQXVMaUJsYkdWdFpXNTBjeUJwYmlCaElIQmhkR2dnWVhKeVlYa2dkMmwwYUNCa2FYSmxZM1J2Y25rZ2JtRnRaWE1nZEdobGNtVmNiaTh2SUcxMWMzUWdZbVVnYm04Z2MyeGhjMmhsY3l3Z1pXMXdkSGtnWld4bGJXVnVkSE1zSUc5eUlHUmxkbWxqWlNCdVlXMWxjeUFvWXpwY1hDa2dhVzRnZEdobElHRnljbUY1WEc0dkx5QW9jMjhnWVd4emJ5QnVieUJzWldGa2FXNW5JR0Z1WkNCMGNtRnBiR2x1WnlCemJHRnphR1Z6SUMwZ2FYUWdaRzlsY3lCdWIzUWdaR2x6ZEdsdVozVnBjMmhjYmk4dklISmxiR0YwYVhabElHRnVaQ0JoWW5OdmJIVjBaU0J3WVhSb2N5bGNibVoxYm1OMGFXOXVJRzV2Y20xaGJHbDZaVUZ5Y21GNUtIQmhjblJ6TENCaGJHeHZkMEZpYjNabFVtOXZkQ2tnZTF4dUlDQXZMeUJwWmlCMGFHVWdjR0YwYUNCMGNtbGxjeUIwYnlCbmJ5QmhZbTkyWlNCMGFHVWdjbTl2ZEN3Z1lIVndZQ0JsYm1SeklIVndJRDRnTUZ4dUlDQjJZWElnZFhBZ1BTQXdPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdjR0Z5ZEhNdWJHVnVaM1JvSUMwZ01Uc2dhU0ErUFNBd095QnBMUzBwSUh0Y2JpQWdJQ0IyWVhJZ2JHRnpkQ0E5SUhCaGNuUnpXMmxkTzF4dUlDQWdJR2xtSUNoc1lYTjBJRDA5UFNBbkxpY3BJSHRjYmlBZ0lDQWdJSEJoY25SekxuTndiR2xqWlNocExDQXhLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3hoYzNRZ1BUMDlJQ2N1TGljcElIdGNiaUFnSUNBZ0lIQmhjblJ6TG5Od2JHbGpaU2hwTENBeEtUdGNiaUFnSUNBZ0lIVndLeXM3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gxY0NrZ2UxeHVJQ0FnSUNBZ2NHRnlkSE11YzNCc2FXTmxLR2tzSURFcE8xeHVJQ0FnSUNBZ2RYQXRMVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCcFppQjBhR1VnY0dGMGFDQnBjeUJoYkd4dmQyVmtJSFJ2SUdkdklHRmliM1psSUhSb1pTQnliMjkwTENCeVpYTjBiM0psSUd4bFlXUnBibWNnTGk1elhHNGdJR2xtSUNoaGJHeHZkMEZpYjNabFVtOXZkQ2tnZTF4dUlDQWdJR1p2Y2lBb095QjFjQzB0T3lCMWNDa2dlMXh1SUNBZ0lDQWdjR0Z5ZEhNdWRXNXphR2xtZENnbkxpNG5LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjR0Z5ZEhNN1hHNTlYRzVjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNibVY0Y0c5eWRITXVjbVZ6YjJ4MlpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQjJZWElnY21WemIyeDJaV1JRWVhSb0lEMGdKeWNzWEc0Z0lDQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJQzB4SUNZbUlDRnlaWE52YkhabFpFRmljMjlzZFhSbE95QnBMUzBwSUh0Y2JpQWdJQ0IyWVhJZ2NHRjBhQ0E5SUNocElENDlJREFwSUQ4Z1lYSm5kVzFsYm5SelcybGRJRG9nY0hKdlkyVnpjeTVqZDJRb0tUdGNibHh1SUNBZ0lDOHZJRk5yYVhBZ1pXMXdkSGtnWVc1a0lHbHVkbUZzYVdRZ1pXNTBjbWxsYzF4dUlDQWdJR2xtSUNoMGVYQmxiMllnY0dGMGFDQWhQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owRnlaM1Z0Wlc1MGN5QjBieUJ3WVhSb0xuSmxjMjlzZG1VZ2JYVnpkQ0JpWlNCemRISnBibWR6SnlrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGNHRjBhQ2tnZTF4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6YjJ4MlpXUlFZWFJvSUQwZ2NHRjBhQ0FySUNjdkp5QXJJSEpsYzI5c2RtVmtVR0YwYUR0Y2JpQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnY0dGMGFDNWphR0Z5UVhRb01Da2dQVDA5SUNjdkp6dGNiaUFnZlZ4dVhHNGdJQzh2SUVGMElIUm9hWE1nY0c5cGJuUWdkR2hsSUhCaGRHZ2djMmh2ZFd4a0lHSmxJSEpsYzI5c2RtVmtJSFJ2SUdFZ1puVnNiQ0JoWW5OdmJIVjBaU0J3WVhSb0xDQmlkWFJjYmlBZ0x5OGdhR0Z1Wkd4bElISmxiR0YwYVhabElIQmhkR2h6SUhSdklHSmxJSE5oWm1VZ0tHMXBaMmgwSUdoaGNIQmxiaUIzYUdWdUlIQnliMk5sYzNNdVkzZGtLQ2tnWm1GcGJITXBYRzVjYmlBZ0x5OGdUbTl5YldGc2FYcGxJSFJvWlNCd1lYUm9YRzRnSUhKbGMyOXNkbVZrVUdGMGFDQTlJRzV2Y20xaGJHbDZaVUZ5Y21GNUtHWnBiSFJsY2loeVpYTnZiSFpsWkZCaGRHZ3VjM0JzYVhRb0p5OG5LU3dnWm5WdVkzUnBiMjRvY0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVhBN1hHNGdJSDBwTENBaGNtVnpiMngyWldSQlluTnZiSFYwWlNrdWFtOXBiaWduTHljcE8xeHVYRzRnSUhKbGRIVnliaUFvS0hKbGMyOXNkbVZrUVdKemIyeDFkR1VnUHlBbkx5Y2dPaUFuSnlrZ0t5QnlaWE52YkhabFpGQmhkR2dwSUh4OElDY3VKenRjYm4wN1hHNWNiaTh2SUhCaGRHZ3VibTl5YldGc2FYcGxLSEJoZEdncFhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhHNWxlSEJ2Y25SekxtNXZjbTFoYkdsNlpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNiaUFnZG1GeUlHbHpRV0p6YjJ4MWRHVWdQU0JsZUhCdmNuUnpMbWx6UVdKemIyeDFkR1VvY0dGMGFDa3NYRzRnSUNBZ0lDQjBjbUZwYkdsdVoxTnNZWE5vSUQwZ2MzVmljM1J5S0hCaGRHZ3NJQzB4S1NBOVBUMGdKeThuTzF4dVhHNGdJQzh2SUU1dmNtMWhiR2w2WlNCMGFHVWdjR0YwYUZ4dUlDQndZWFJvSUQwZ2JtOXliV0ZzYVhwbFFYSnlZWGtvWm1sc2RHVnlLSEJoZEdndWMzQnNhWFFvSnk4bktTd2dablZ1WTNScGIyNG9jQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhJWEE3WEc0Z0lIMHBMQ0FoYVhOQlluTnZiSFYwWlNrdWFtOXBiaWduTHljcE8xeHVYRzRnSUdsbUlDZ2hjR0YwYUNBbUppQWhhWE5CWW5OdmJIVjBaU2tnZTF4dUlDQWdJSEJoZEdnZ1BTQW5MaWM3WEc0Z0lIMWNiaUFnYVdZZ0tIQmhkR2dnSmlZZ2RISmhhV3hwYm1kVGJHRnphQ2tnZTF4dUlDQWdJSEJoZEdnZ0t6MGdKeThuTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUNocGMwRmljMjlzZFhSbElEOGdKeThuSURvZ0p5Y3BJQ3NnY0dGMGFEdGNibjA3WEc1Y2JpOHZJSEJ2YzJsNElIWmxjbk5wYjI1Y2JtVjRjRzl5ZEhNdWFYTkJZbk52YkhWMFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNiaUFnY21WMGRYSnVJSEJoZEdndVkyaGhja0YwS0RBcElEMDlQU0FuTHljN1hHNTlPMXh1WEc0dkx5QndiM05wZUNCMlpYSnphVzl1WEc1bGVIQnZjblJ6TG1wdmFXNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhCaGRHaHpJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtTmhiR3dvWVhKbmRXMWxiblJ6TENBd0tUdGNiaUFnY21WMGRYSnVJR1Y0Y0c5eWRITXVibTl5YldGc2FYcGxLR1pwYkhSbGNpaHdZWFJvY3l3Z1puVnVZM1JwYjI0b2NDd2dhVzVrWlhncElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIQWdJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXFiMmx1SUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2NEdGNiaUFnZlNrdWFtOXBiaWduTHljcEtUdGNibjA3WEc1Y2JseHVMeThnY0dGMGFDNXlaV3hoZEdsMlpTaG1jbTl0TENCMGJ5bGNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNibVY0Y0c5eWRITXVjbVZzWVhScGRtVWdQU0JtZFc1amRHbHZiaWhtY205dExDQjBieWtnZTF4dUlDQm1jbTl0SUQwZ1pYaHdiM0owY3k1eVpYTnZiSFpsS0daeWIyMHBMbk4xWW5OMGNpZ3hLVHRjYmlBZ2RHOGdQU0JsZUhCdmNuUnpMbkpsYzI5c2RtVW9kRzhwTG5OMVluTjBjaWd4S1R0Y2JseHVJQ0JtZFc1amRHbHZiaUIwY21sdEtHRnljaWtnZTF4dUlDQWdJSFpoY2lCemRHRnlkQ0E5SURBN1hHNGdJQ0FnWm05eUlDZzdJSE4wWVhKMElEd2dZWEp5TG14bGJtZDBhRHNnYzNSaGNuUXJLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljbHR6ZEdGeWRGMGdJVDA5SUNjbktTQmljbVZoYXp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ1pXNWtJRDBnWVhKeUxteGxibWQwYUNBdElERTdYRzRnSUNBZ1ptOXlJQ2c3SUdWdVpDQStQU0F3T3lCbGJtUXRMU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljbHRsYm1SZElDRTlQU0FuSnlrZ1luSmxZV3M3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hOMFlYSjBJRDRnWlc1a0tTQnlaWFIxY200Z1cxMDdYRzRnSUNBZ2NtVjBkWEp1SUdGeWNpNXpiR2xqWlNoemRHRnlkQ3dnWlc1a0lDMGdjM1JoY25RZ0t5QXhLVHRjYmlBZ2ZWeHVYRzRnSUhaaGNpQm1jbTl0VUdGeWRITWdQU0IwY21sdEtHWnliMjB1YzNCc2FYUW9KeThuS1NrN1hHNGdJSFpoY2lCMGIxQmhjblJ6SUQwZ2RISnBiU2gwYnk1emNHeHBkQ2duTHljcEtUdGNibHh1SUNCMllYSWdiR1Z1WjNSb0lEMGdUV0YwYUM1dGFXNG9abkp2YlZCaGNuUnpMbXhsYm1kMGFDd2dkRzlRWVhKMGN5NXNaVzVuZEdncE8xeHVJQ0IyWVhJZ2MyRnRaVkJoY25SelRHVnVaM1JvSUQwZ2JHVnVaM1JvTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHWnliMjFRWVhKMGMxdHBYU0FoUFQwZ2RHOVFZWEowYzF0cFhTa2dlMXh1SUNBZ0lDQWdjMkZ0WlZCaGNuUnpUR1Z1WjNSb0lEMGdhVHRjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIWmhjaUJ2ZFhSd2RYUlFZWEowY3lBOUlGdGRPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdjMkZ0WlZCaGNuUnpUR1Z1WjNSb095QnBJRHdnWm5KdmJWQmhjblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2IzVjBjSFYwVUdGeWRITXVjSFZ6YUNnbkxpNG5LVHRjYmlBZ2ZWeHVYRzRnSUc5MWRIQjFkRkJoY25SeklEMGdiM1YwY0hWMFVHRnlkSE11WTI5dVkyRjBLSFJ2VUdGeWRITXVjMnhwWTJVb2MyRnRaVkJoY25SelRHVnVaM1JvS1NrN1hHNWNiaUFnY21WMGRYSnVJRzkxZEhCMWRGQmhjblJ6TG1wdmFXNG9KeThuS1R0Y2JuMDdYRzVjYm1WNGNHOXlkSE11YzJWd0lEMGdKeThuTzF4dVpYaHdiM0owY3k1a1pXeHBiV2wwWlhJZ1BTQW5PaWM3WEc1Y2JtVjRjRzl5ZEhNdVpHbHlibUZ0WlNBOUlHWjFibU4wYVc5dUlDaHdZWFJvS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnY0dGMGFDQWhQVDBnSjNOMGNtbHVaeWNwSUhCaGRHZ2dQU0J3WVhSb0lDc2dKeWM3WEc0Z0lHbG1JQ2h3WVhSb0xteGxibWQwYUNBOVBUMGdNQ2tnY21WMGRYSnVJQ2N1Snp0Y2JpQWdkbUZ5SUdOdlpHVWdQU0J3WVhSb0xtTm9ZWEpEYjJSbFFYUW9NQ2s3WEc0Z0lIWmhjaUJvWVhOU2IyOTBJRDBnWTI5a1pTQTlQVDBnTkRjZ0x5b3ZLaTg3WEc0Z0lIWmhjaUJsYm1RZ1BTQXRNVHRjYmlBZ2RtRnlJRzFoZEdOb1pXUlRiR0Z6YUNBOUlIUnlkV1U3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0J3WVhSb0xteGxibWQwYUNBdElERTdJR2tnUGowZ01Uc2dMUzFwS1NCN1hHNGdJQ0FnWTI5a1pTQTlJSEJoZEdndVkyaGhja052WkdWQmRDaHBLVHRjYmlBZ0lDQnBaaUFvWTI5a1pTQTlQVDBnTkRjZ0x5b3ZLaThwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z0WVhSamFHVmtVMnhoYzJncElIdGNiaUFnSUNBZ0lDQWdJQ0JsYm1RZ1BTQnBPMXh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdMeThnVjJVZ2MyRjNJSFJvWlNCbWFYSnpkQ0J1YjI0dGNHRjBhQ0J6WlhCaGNtRjBiM0pjYmlBZ0lDQWdJRzFoZEdOb1pXUlRiR0Z6YUNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaGxibVFnUFQwOUlDMHhLU0J5WlhSMWNtNGdhR0Z6VW05dmRDQS9JQ2N2SnlBNklDY3VKenRjYmlBZ2FXWWdLR2hoYzFKdmIzUWdKaVlnWlc1a0lEMDlQU0F4S1NCN1hHNGdJQ0FnTHk4Z2NtVjBkWEp1SUNjdkx5YzdYRzRnSUNBZ0x5OGdRbUZqYTNkaGNtUnpMV052YlhCaGRDQm1hWGc2WEc0Z0lDQWdjbVYwZFhKdUlDY3ZKenRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjR0YwYUM1emJHbGpaU2d3TENCbGJtUXBPMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdZbUZ6Wlc1aGJXVW9jR0YwYUNrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUhCaGRHZ2dJVDA5SUNkemRISnBibWNuS1NCd1lYUm9JRDBnY0dGMGFDQXJJQ2NuTzF4dVhHNGdJSFpoY2lCemRHRnlkQ0E5SURBN1hHNGdJSFpoY2lCbGJtUWdQU0F0TVR0Y2JpQWdkbUZ5SUcxaGRHTm9aV1JUYkdGemFDQTlJSFJ5ZFdVN1hHNGdJSFpoY2lCcE8xeHVYRzRnSUdadmNpQW9hU0E5SUhCaGRHZ3ViR1Z1WjNSb0lDMGdNVHNnYVNBK1BTQXdPeUF0TFdrcElIdGNiaUFnSUNCcFppQW9jR0YwYUM1amFHRnlRMjlrWlVGMEtHa3BJRDA5UFNBME55QXZLaThxTHlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQnlaV0ZqYUdWa0lHRWdjR0YwYUNCelpYQmhjbUYwYjNJZ2RHaGhkQ0IzWVhNZ2JtOTBJSEJoY25RZ2IyWWdZU0J6WlhRZ2IyWWdjR0YwYUZ4dUlDQWdJQ0FnSUNBdkx5QnpaWEJoY21GMGIzSnpJR0YwSUhSb1pTQmxibVFnYjJZZ2RHaGxJSE4wY21sdVp5d2djM1J2Y0NCdWIzZGNiaUFnSUNBZ0lDQWdhV1lnS0NGdFlYUmphR1ZrVTJ4aGMyZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCemRHRnlkQ0E5SUdrZ0t5QXhPMXh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dWdVpDQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDOHZJRmRsSUhOaGR5QjBhR1VnWm1seWMzUWdibTl1TFhCaGRHZ2djMlZ3WVhKaGRHOXlMQ0J0WVhKcklIUm9hWE1nWVhNZ2RHaGxJR1Z1WkNCdlppQnZkWEpjYmlBZ0lDQWdJQzh2SUhCaGRHZ2dZMjl0Y0c5dVpXNTBYRzRnSUNBZ0lDQnRZWFJqYUdWa1UyeGhjMmdnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJR1Z1WkNBOUlHa2dLeUF4TzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaGxibVFnUFQwOUlDMHhLU0J5WlhSMWNtNGdKeWM3WEc0Z0lISmxkSFZ5YmlCd1lYUm9Mbk5zYVdObEtITjBZWEowTENCbGJtUXBPMXh1ZlZ4dVhHNHZMeUJWYzJWeklHRWdiV2w0WldRZ1lYQndjbTloWTJnZ1ptOXlJR0poWTJ0M1lYSmtjeTFqYjIxd1lYUnBZbWxzYVhSNUxDQmhjeUJsZUhRZ1ltVm9ZWFpwYjNJZ1kyaGhibWRsWkZ4dUx5OGdhVzRnYm1WM0lFNXZaR1V1YW5NZ2RtVnljMmx2Ym5Nc0lITnZJRzl1YkhrZ1ltRnpaVzVoYldVb0tTQmhZbTkyWlNCcGN5QmlZV05yY0c5eWRHVmtJR2hsY21WY2JtVjRjRzl5ZEhNdVltRnpaVzVoYldVZ1BTQm1kVzVqZEdsdmJpQW9jR0YwYUN3Z1pYaDBLU0I3WEc0Z0lIWmhjaUJtSUQwZ1ltRnpaVzVoYldVb2NHRjBhQ2s3WEc0Z0lHbG1JQ2hsZUhRZ0ppWWdaaTV6ZFdKemRISW9MVEVnS2lCbGVIUXViR1Z1WjNSb0tTQTlQVDBnWlhoMEtTQjdYRzRnSUNBZ1ppQTlJR1l1YzNWaWMzUnlLREFzSUdZdWJHVnVaM1JvSUMwZ1pYaDBMbXhsYm1kMGFDazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHWTdYRzU5TzF4dVhHNWxlSEJ2Y25SekxtVjRkRzVoYldVZ1BTQm1kVzVqZEdsdmJpQW9jR0YwYUNrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUhCaGRHZ2dJVDA5SUNkemRISnBibWNuS1NCd1lYUm9JRDBnY0dGMGFDQXJJQ2NuTzF4dUlDQjJZWElnYzNSaGNuUkViM1FnUFNBdE1UdGNiaUFnZG1GeUlITjBZWEowVUdGeWRDQTlJREE3WEc0Z0lIWmhjaUJsYm1RZ1BTQXRNVHRjYmlBZ2RtRnlJRzFoZEdOb1pXUlRiR0Z6YUNBOUlIUnlkV1U3WEc0Z0lDOHZJRlJ5WVdOcklIUm9aU0J6ZEdGMFpTQnZaaUJqYUdGeVlXTjBaWEp6SUNocFppQmhibmtwSUhkbElITmxaU0JpWldadmNtVWdiM1Z5SUdacGNuTjBJR1J2ZENCaGJtUmNiaUFnTHk4Z1lXWjBaWElnWVc1NUlIQmhkR2dnYzJWd1lYSmhkRzl5SUhkbElHWnBibVJjYmlBZ2RtRnlJSEJ5WlVSdmRGTjBZWFJsSUQwZ01EdGNiaUFnWm05eUlDaDJZWElnYVNBOUlIQmhkR2d1YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F3T3lBdExXa3BJSHRjYmlBZ0lDQjJZWElnWTI5a1pTQTlJSEJoZEdndVkyaGhja052WkdWQmRDaHBLVHRjYmlBZ0lDQnBaaUFvWTI5a1pTQTlQVDBnTkRjZ0x5b3ZLaThwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2NtVmhZMmhsWkNCaElIQmhkR2dnYzJWd1lYSmhkRzl5SUhSb1lYUWdkMkZ6SUc1dmRDQndZWEowSUc5bUlHRWdjMlYwSUc5bUlIQmhkR2hjYmlBZ0lDQWdJQ0FnTHk4Z2MyVndZWEpoZEc5eWN5QmhkQ0IwYUdVZ1pXNWtJRzltSUhSb1pTQnpkSEpwYm1jc0lITjBiM0FnYm05M1hHNGdJQ0FnSUNBZ0lHbG1JQ2doYldGMFkyaGxaRk5zWVhOb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSaGNuUlFZWEowSUQwZ2FTQXJJREU3WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnYVdZZ0tHVnVaQ0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQzh2SUZkbElITmhkeUIwYUdVZ1ptbHljM1FnYm05dUxYQmhkR2dnYzJWd1lYSmhkRzl5TENCdFlYSnJJSFJvYVhNZ1lYTWdkR2hsSUdWdVpDQnZaaUJ2ZFhKY2JpQWdJQ0FnSUM4dklHVjRkR1Z1YzJsdmJseHVJQ0FnSUNBZ2JXRjBZMmhsWkZOc1lYTm9JRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQmxibVFnUFNCcElDc2dNVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR052WkdVZ1BUMDlJRFEySUM4cUxpb3ZLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdiM1Z5SUdacGNuTjBJR1J2ZEN3Z2JXRnlheUJwZENCaGN5QjBhR1VnYzNSaGNuUWdiMllnYjNWeUlHVjRkR1Z1YzJsdmJseHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGNuUkViM1FnUFQwOUlDMHhLVnh1SUNBZ0lDQWdJQ0FnSUhOMFlYSjBSRzkwSUQwZ2FUdGNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9jSEpsUkc5MFUzUmhkR1VnSVQwOUlERXBYRzRnSUNBZ0lDQWdJQ0FnY0hKbFJHOTBVM1JoZEdVZ1BTQXhPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9jM1JoY25SRWIzUWdJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQXZMeUJYWlNCellYY2dZU0J1YjI0dFpHOTBJR0Z1WkNCdWIyNHRjR0YwYUNCelpYQmhjbUYwYjNJZ1ltVm1iM0psSUc5MWNpQmtiM1FzSUhOdklIZGxJSE5vYjNWc1pGeHVJQ0FnSUNBZ0x5OGdhR0YyWlNCaElHZHZiMlFnWTJoaGJtTmxJR0YwSUdoaGRtbHVaeUJoSUc1dmJpMWxiWEIwZVNCbGVIUmxibk5wYjI1Y2JpQWdJQ0FnSUhCeVpVUnZkRk4wWVhSbElEMGdMVEU3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tITjBZWEowUkc5MElEMDlQU0F0TVNCOGZDQmxibVFnUFQwOUlDMHhJSHg4WEc0Z0lDQWdJQ0F2THlCWFpTQnpZWGNnWVNCdWIyNHRaRzkwSUdOb1lYSmhZM1JsY2lCcGJXMWxaR2xoZEdWc2VTQmlaV1p2Y21VZ2RHaGxJR1J2ZEZ4dUlDQWdJQ0FnY0hKbFJHOTBVM1JoZEdVZ1BUMDlJREFnZkh4Y2JpQWdJQ0FnSUM4dklGUm9aU0FvY21sbmFIUXRiVzl6ZENrZ2RISnBiVzFsWkNCd1lYUm9JR052YlhCdmJtVnVkQ0JwY3lCbGVHRmpkR3g1SUNjdUxpZGNiaUFnSUNBZ0lIQnlaVVJ2ZEZOMFlYUmxJRDA5UFNBeElDWW1JSE4wWVhKMFJHOTBJRDA5UFNCbGJtUWdMU0F4SUNZbUlITjBZWEowUkc5MElEMDlQU0J6ZEdGeWRGQmhjblFnS3lBeEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjbk8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd1lYUm9Mbk5zYVdObEtITjBZWEowUkc5MExDQmxibVFwTzF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnWm1sc2RHVnlJQ2g0Y3l3Z1ppa2dlMXh1SUNBZ0lHbG1JQ2g0Y3k1bWFXeDBaWElwSUhKbGRIVnliaUI0Y3k1bWFXeDBaWElvWmlrN1hHNGdJQ0FnZG1GeUlISmxjeUE5SUZ0ZE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2VITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1lvZUhOYmFWMHNJR2tzSUhoektTa2djbVZ6TG5CMWMyZ29lSE5iYVYwcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjbVZ6TzF4dWZWeHVYRzR2THlCVGRISnBibWN1Y0hKdmRHOTBlWEJsTG5OMVluTjBjaUF0SUc1bFoyRjBhWFpsSUdsdVpHVjRJR1J2YmlkMElIZHZjbXNnYVc0Z1NVVTRYRzUyWVhJZ2MzVmljM1J5SUQwZ0oyRmlKeTV6ZFdKemRISW9MVEVwSUQwOVBTQW5ZaWRjYmlBZ0lDQS9JR1oxYm1OMGFXOXVJQ2h6ZEhJc0lITjBZWEowTENCc1pXNHBJSHNnY21WMGRYSnVJSE4wY2k1emRXSnpkSElvYzNSaGNuUXNJR3hsYmlrZ2ZWeHVJQ0FnSURvZ1puVnVZM1JwYjI0Z0tITjBjaXdnYzNSaGNuUXNJR3hsYmlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGNuUWdQQ0F3S1NCemRHRnlkQ0E5SUhOMGNpNXNaVzVuZEdnZ0t5QnpkR0Z5ZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMGNpNXpkV0p6ZEhJb2MzUmhjblFzSUd4bGJpazdYRzRnSUNBZ2ZWeHVPMXh1SWl3aUx5OGdjMmhwYlNCbWIzSWdkWE5wYm1jZ2NISnZZMlZ6Y3lCcGJpQmljbTkzYzJWeVhHNTJZWElnY0hKdlkyVnpjeUE5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTMwN1hHNWNiaTh2SUdOaFkyaGxaQ0JtY205dElIZG9ZWFJsZG1WeUlHZHNiMkpoYkNCcGN5QndjbVZ6Wlc1MElITnZJSFJvWVhRZ2RHVnpkQ0J5ZFc1dVpYSnpJSFJvWVhRZ2MzUjFZaUJwZEZ4dUx5OGdaRzl1SjNRZ1luSmxZV3NnZEdocGJtZHpMaUFnUW5WMElIZGxJRzVsWldRZ2RHOGdkM0poY0NCcGRDQnBiaUJoSUhSeWVTQmpZWFJqYUNCcGJpQmpZWE5sSUdsMElHbHpYRzR2THlCM2NtRndjR1ZrSUdsdUlITjBjbWxqZENCdGIyUmxJR052WkdVZ2QyaHBZMmdnWkc5bGMyNG5kQ0JrWldacGJtVWdZVzU1SUdkc2IySmhiSE11SUNCSmRDZHpJR2x1YzJsa1pTQmhYRzR2THlCbWRXNWpkR2x2YmlCaVpXTmhkWE5sSUhSeWVTOWpZWFJqYUdWeklHUmxiM0IwYVcxcGVtVWdhVzRnWTJWeWRHRnBiaUJsYm1kcGJtVnpMbHh1WEc1MllYSWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWREdGNiblpoY2lCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRN1hHNWNibVoxYm1OMGFXOXVJR1JsWm1GMWJIUlRaWFJVYVcxdmRYUW9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHpaWFJVYVcxbGIzVjBJR2hoY3lCdWIzUWdZbVZsYmlCa1pXWnBibVZrSnlrN1hHNTlYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwSUNncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjJOc1pXRnlWR2x0Wlc5MWRDQm9ZWE1nYm05MElHSmxaVzRnWkdWbWFXNWxaQ2NwTzF4dWZWeHVLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JSE5sZEZScGJXVnZkWFFnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQnpaWFJVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlHUmxabUYxYkhSVFpYUlVhVzF2ZFhRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobEtTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBPMXh1SUNBZ0lIMWNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdOc1pXRnlWR2x0Wlc5MWRDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1kyeGxZWEpVYVcxbGIzVjBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQjlYRzU5SUNncEtWeHVablZ1WTNScGIyNGdjblZ1VkdsdFpXOTFkQ2htZFc0cElIdGNiaUFnSUNCcFppQW9ZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlQVDBnYzJWMFZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMMjV2Y20xaGJDQmxiblpwY205dFpXNTBjeUJwYmlCellXNWxJSE5wZEhWaGRHbHZibk5jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE5sZEZScGJXVnZkWFFvWm5WdUxDQXdLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdhV1lnYzJWMFZHbHRaVzkxZENCM1lYTnVKM1FnWVhaaGFXeGhZbXhsSUdKMWRDQjNZWE1nYkdGMGRHVnlJR1JsWm1sdVpXUmNiaUFnSUNCcFppQW9LR05oWTJobFpGTmxkRlJwYldWdmRYUWdQVDA5SUdSbFptRjFiSFJUWlhSVWFXMXZkWFFnZkh3Z0lXTmhZMmhsWkZObGRGUnBiV1Z2ZFhRcElDWW1JSE5sZEZScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkMmhsYmlCemIyMWxZbTlrZVNCb1lYTWdjMk55WlhkbFpDQjNhWFJvSUhObGRGUnBiV1Z2ZFhRZ1luVjBJRzV2SUVrdVJTNGdiV0ZrWkc1bGMzTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRb1puVnVMQ0F3S1R0Y2JpQWdJQ0I5SUdOaGRHTm9LR1VwZTF4dUlDQWdJQ0FnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWMmhsYmlCM1pTQmhjbVVnYVc0Z1NTNUZMaUJpZFhRZ2RHaGxJSE5qY21sd2RDQm9ZWE1nWW1WbGJpQmxkbUZzWldRZ2MyOGdTUzVGTGlCa2IyVnpiaWQwSUhSeWRYTjBJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJSGRvWlc0Z1kyRnNiR1ZrSUc1dmNtMWhiR3g1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrVTJWMFZHbHRaVzkxZEM1allXeHNLRzUxYkd3c0lHWjFiaXdnTUNrN1hHNGdJQ0FnSUNBZ0lIMGdZMkYwWTJnb1pTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QnpZVzFsSUdGeklHRmliM1psSUdKMWRDQjNhR1Z1SUdsMEozTWdZU0IyWlhKemFXOXVJRzltSUVrdVJTNGdkR2hoZENCdGRYTjBJR2hoZG1VZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ1ptOXlJQ2QwYUdsekp5d2dhRzl3Wm5Wc2JIa2diM1Z5SUdOdmJuUmxlSFFnWTI5eWNtVmpkQ0J2ZEdobGNuZHBjMlVnYVhRZ2QybHNiQ0IwYUhKdmR5QmhJR2RzYjJKaGJDQmxjbkp2Y2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRdVkyRnNiQ2gwYUdsekxDQm1kVzRzSURBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzVjYm4xY2JtWjFibU4wYVc5dUlISjFia05zWldGeVZHbHRaVzkxZENodFlYSnJaWElwSUh0Y2JpQWdJQ0JwWmlBb1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMDlQU0JqYkdWaGNsUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdMeTl1YjNKdFlXd2daVzUyYVhKdmJXVnVkSE1nYVc0Z2MyRnVaU0J6YVhSMVlYUnBiMjV6WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnYVdZZ1kyeGxZWEpVYVcxbGIzVjBJSGRoYzI0bmRDQmhkbUZwYkdGaWJHVWdZblYwSUhkaGN5QnNZWFIwWlhJZ1pHVm1hVzVsWkZ4dUlDQWdJR2xtSUNnb1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMDlQU0JrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwSUh4OElDRmpZV05vWldSRGJHVmhjbFJwYldWdmRYUXBJQ1ltSUdOc1pXRnlWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCamJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2QyaGxiaUIzYUdWdUlITnZiV1ZpYjJSNUlHaGhjeUJ6WTNKbGQyVmtJSGRwZEdnZ2MyVjBWR2x0Wlc5MWRDQmlkWFFnYm04Z1NTNUZMaUJ0WVdSa2JtVnpjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTbDdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFHVnVJSGRsSUdGeVpTQnBiaUJKTGtVdUlHSjFkQ0IwYUdVZ2MyTnlhWEIwSUdoaGN5QmlaV1Z1SUdWMllXeGxaQ0J6YnlCSkxrVXVJR1J2WlhOdUozUWdJSFJ5ZFhOMElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElIZG9aVzRnWTJGc2JHVmtJRzV2Y20xaGJHeDVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTG1OaGJHd29iblZzYkN3Z2JXRnlhMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QnpZVzFsSUdGeklHRmliM1psSUdKMWRDQjNhR1Z1SUdsMEozTWdZU0IyWlhKemFXOXVJRzltSUVrdVJTNGdkR2hoZENCdGRYTjBJR2hoZG1VZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ1ptOXlJQ2QwYUdsekp5d2dhRzl3Wm5Wc2JIa2diM1Z5SUdOdmJuUmxlSFFnWTI5eWNtVmpkQ0J2ZEdobGNuZHBjMlVnYVhRZ2QybHNiQ0IwYUhKdmR5QmhJR2RzYjJKaGJDQmxjbkp2Y2k1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZOdmJXVWdkbVZ5YzJsdmJuTWdiMllnU1M1RkxpQm9ZWFpsSUdScFptWmxjbVZ1ZENCeWRXeGxjeUJtYjNJZ1kyeGxZWEpVYVcxbGIzVjBJSFp6SUhObGRGUnBiV1Z2ZFhSY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUXVZMkZzYkNoMGFHbHpMQ0J0WVhKclpYSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1Y2JseHVmVnh1ZG1GeUlIRjFaWFZsSUQwZ1cxMDdYRzUyWVhJZ1pISmhhVzVwYm1jZ1BTQm1ZV3h6WlR0Y2JuWmhjaUJqZFhKeVpXNTBVWFZsZFdVN1hHNTJZWElnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1WEc1bWRXNWpkR2x2YmlCamJHVmhibFZ3VG1WNGRGUnBZMnNvS1NCN1hHNGdJQ0FnYVdZZ0tDRmtjbUZwYm1sdVp5QjhmQ0FoWTNWeWNtVnVkRkYxWlhWbEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNGdJQ0FnWkhKaGFXNXBibWNnUFNCbVlXeHpaVHRjYmlBZ0lDQnBaaUFvWTNWeWNtVnVkRkYxWlhWbExteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQnhkV1YxWlNBOUlHTjFjbkpsYm5SUmRXVjFaUzVqYjI1allYUW9jWFZsZFdVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEYxWlhWbExteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQmtjbUZwYmxGMVpYVmxLQ2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmtjbUZwYmxGMVpYVmxLQ2tnZTF4dUlDQWdJR2xtSUNoa2NtRnBibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJSFpoY2lCMGFXMWxiM1YwSUQwZ2NuVnVWR2x0Wlc5MWRDaGpiR1ZoYmxWd1RtVjRkRlJwWTJzcE8xeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ2RISjFaVHRjYmx4dUlDQWdJSFpoY2lCc1pXNGdQU0J4ZFdWMVpTNXNaVzVuZEdnN1hHNGdJQ0FnZDJocGJHVW9iR1Z1S1NCN1hHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaU0E5SUhGMVpYVmxPMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpTQTlJRnRkTzF4dUlDQWdJQ0FnSUNCM2FHbHNaU0FvS3l0eGRXVjFaVWx1WkdWNElEd2diR1Z1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZGMVpYVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRkYxWlhWbFczRjFaWFZsU1c1a1pYaGRMbkoxYmlncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2JHVnVJRDBnY1hWbGRXVXViR1Z1WjNSb08xeHVJQ0FnSUgxY2JpQWdJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnVkV3hzTzF4dUlDQWdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2NuVnVRMnhsWVhKVWFXMWxiM1YwS0hScGJXVnZkWFFwTzF4dWZWeHVYRzV3Y205alpYTnpMbTVsZUhSVWFXTnJJRDBnWm5WdVkzUnBiMjRnS0daMWJpa2dlMXh1SUNBZ0lIWmhjaUJoY21keklEMGdibVYzSUVGeWNtRjVLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4S1R0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlERTdJR2tnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnlaM05iYVNBdElERmRJRDBnWVhKbmRXMWxiblJ6VzJsZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhGMVpYVmxMbkIxYzJnb2JtVjNJRWwwWlcwb1puVnVMQ0JoY21kektTazdYRzRnSUNBZ2FXWWdLSEYxWlhWbExteGxibWQwYUNBOVBUMGdNU0FtSmlBaFpISmhhVzVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjblZ1VkdsdFpXOTFkQ2hrY21GcGJsRjFaWFZsS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2THlCMk9DQnNhV3RsY3lCd2NtVmthV04wYVdKc1pTQnZZbXBsWTNSelhHNW1kVzVqZEdsdmJpQkpkR1Z0S0daMWJpd2dZWEp5WVhrcElIdGNiaUFnSUNCMGFHbHpMbVoxYmlBOUlHWjFianRjYmlBZ0lDQjBhR2x6TG1GeWNtRjVJRDBnWVhKeVlYazdYRzU5WEc1SmRHVnRMbkJ5YjNSdmRIbHdaUzV5ZFc0Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkR2hwY3k1bWRXNHVZWEJ3Ykhrb2JuVnNiQ3dnZEdocGN5NWhjbkpoZVNrN1hHNTlPMXh1Y0hKdlkyVnpjeTUwYVhSc1pTQTlJQ2RpY205M2MyVnlKenRjYm5CeWIyTmxjM011WW5KdmQzTmxjaUE5SUhSeWRXVTdYRzV3Y205alpYTnpMbVZ1ZGlBOUlIdDlPMXh1Y0hKdlkyVnpjeTVoY21kMklEMGdXMTA3WEc1d2NtOWpaWE56TG5abGNuTnBiMjRnUFNBbkp6c2dMeThnWlcxd2RIa2djM1J5YVc1bklIUnZJR0YyYjJsa0lISmxaMlY0Y0NCcGMzTjFaWE5jYm5CeWIyTmxjM011ZG1WeWMybHZibk1nUFNCN2ZUdGNibHh1Wm5WdVkzUnBiMjRnYm05dmNDZ3BJSHQ5WEc1Y2JuQnliMk5sYzNNdWIyNGdQU0J1YjI5d08xeHVjSEp2WTJWemN5NWhaR1JNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbTl1WTJVZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1dlptWWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXlaVzF2ZG1WTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5KbGJXOTJaVUZzYkV4cGMzUmxibVZ5Y3lBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG1WdGFYUWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXdjbVZ3Wlc1a1RHbHpkR1Z1WlhJZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1d2NtVndaVzVrVDI1alpVeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JseHVjSEp2WTJWemN5NXNhWE4wWlc1bGNuTWdQU0JtZFc1amRHbHZiaUFvYm1GdFpTa2dleUJ5WlhSMWNtNGdXMTBnZlZ4dVhHNXdjbTlqWlhOekxtSnBibVJwYm1jZ1BTQm1kVzVqZEdsdmJpQW9ibUZ0WlNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduY0hKdlkyVnpjeTVpYVc1a2FXNW5JR2x6SUc1dmRDQnpkWEJ3YjNKMFpXUW5LVHRjYm4wN1hHNWNibkJ5YjJObGMzTXVZM2RrSUQwZ1puVnVZM1JwYjI0Z0tDa2dleUJ5WlhSMWNtNGdKeThuSUgwN1hHNXdjbTlqWlhOekxtTm9aR2x5SUQwZ1puVnVZM1JwYjI0Z0tHUnBjaWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jSEp2WTJWemN5NWphR1JwY2lCcGN5QnViM1FnYzNWd2NHOXlkR1ZrSnlrN1hHNTlPMXh1Y0hKdlkyVnpjeTUxYldGemF5QTlJR1oxYm1OMGFXOXVLQ2tnZXlCeVpYUjFjbTRnTURzZ2ZUdGNiaUlzSW1sdGNHOXlkQ0I3SUZKbGNVTnZibVpwWnlCOUlHWnliMjBnSnk0dmRIbHdaWE1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdkSGx3WlRvZ0oycHpiMjRuWEc1OUlHRnpJRkpsY1VOdmJtWnBaMXh1SWl3aWFXMXdiM0owSUdGNGFXOXpMQ0I3UVhocGIzTlNaWE53YjI1elpTd2dRWGhwYjNOSmJuTjBZVzVqWlN3Z1FYaHBiM05TWlhGMVpYTjBRMjl1Wm1sbkxDQkJlR2x2YzBWeWNtOXlmU0JtY205dElDZGhlR2x2Y3lkY2JtbHRjRzl5ZENCN0lGSmxjVU52Ym1acFp5d2dVM1J5YVc1blNXNWtaWGdzSUUxdlpIVnNaU3dnVFc5a2RXeGxTSFZpTENCQmNHbEVZWFJoTENCU1pYTndiMjV6WlVSaGRHRXNJRTF2WkhWc1pWSnZiM1I5SUdaeWIyMGdKeTR2ZEhsd1pYTW5YRzVwYlhCdmNuUWdjR0YwYUNCbWNtOXRJQ2R3WVhSb0oxeHVhVzF3YjNKMElHUmxabUYxYkhSRGIyNW1hV2NnWm5KdmJTQW5MaTlrWldaaGRXeDBKMXh1WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUZ3YVVoMVludGNiaUFnY0hKcGRtRjBaU0JqYjI1bWFXYzZJRkpsY1VOdmJtWnBaeUE5SUdSbFptRjFiSFJEYjI1bWFXZGNiaUFnY0hKcGRtRjBaU0JoZUdsdmMwbHVjM1JoYm1ObE9pQkJlR2x2YzBsdWMzUmhibU5sWEc0Z0lIQnlhWFpoZEdVZ2JXOWtkV3hsVW05dmREb2dUVzlrZFd4bFVtOXZkQ0E5SUh0OVhHNWNiaUFnWjJWMElHRjRhVzl6UTI5dVptbG5LQ2s2SUVGNGFXOXpVbVZ4ZFdWemRFTnZibVpwWnlCN1hHNGdJQ0FnWTI5dWMzUWdZMjl1Wm1sbk9pQkJlR2x2YzFKbGNYVmxjM1JEYjI1bWFXY2dQU0I3WEc0Z0lDQWdJQ0JpWVhObFZWSk1PaUIwYUdsekxtTnZibVpwWnk1aVlYTmxWVkpNTEZ4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z1kyOXVabWxuWEc0Z0lIMWNibHh1SUNCd2NtbDJZWFJsSUdOdmJuTjBjblZqZEc5eUtHTnZibVpwWno4NklGSmxjVU52Ym1acFp5a2dlMXh1SUNBZ0lHbG1LR052Ym1acFp5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1amIyNW1hV2NnUFNCN0xpNHVkR2hwY3k1amIyNW1hV2NzSUM0dUxtTnZibVpwWjMxY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1aGVHbHZjMGx1YzNSaGJtTmxJRDBnWVhocGIzTXVZM0psWVhSbEtIUm9hWE11WVhocGIzTkRiMjVtYVdjcFhHNGdJSDFjYmx4dUlDQnZibEpsY1hWbGMzUW9abTQ2SUNoamIyNW1hV2M2SUVGNGFXOXpVbVZ4ZFdWemRFTnZibVpwWnlrZ1BUNGdRWGhwYjNOU1pYRjFaWE4wUTI5dVptbG5LVG9nZG05cFpDQjdYRzRnSUNBZ2RHaHBjeTVoZUdsdmMwbHVjM1JoYm1ObExtbHVkR1Z5WTJWd2RHOXljeTV5WlhGMVpYTjBMblZ6WlNoamIyNW1hV2NnUFQ0Z1ptNG9ZMjl1Wm1sbktTQjhmQ0JqYjI1bWFXY3BYRzRnSUgxY2JseHVJQ0J2YmxKbGMzQnZibk5sS0dadU9pQW9jbVZ6Y0c5dWMyVTZJRUY0YVc5elVtVnpjRzl1YzJVcElEMCtJRUY0YVc5elVtVnpjRzl1YzJVcE9pQjJiMmxrSUh0Y2JpQWdJQ0IwYUdsekxtRjRhVzl6U1c1emRHRnVZMlV1YVc1MFpYSmpaWEIwYjNKekxuSmxjM0J2Ym5ObExuVnpaU2h5WlhOd2IyNXpaU0E5UGlCbWJpaHlaWE53YjI1elpTa2dmSHdnY21WemNHOXVjMlVwWEc0Z0lIMWNibHh1SUNCdmJsSmxjWFZsYzNSRmNuSnZjaWhtYmpvZ0tHTnZibVpwWnpvZ1FYaHBiM05GY25KdmNpa2dQVDRnUVhocGIzTkZjbkp2Y2lrNklIWnZhV1FnZTF4dUlDQWdJSFJvYVhNdVlYaHBiM05KYm5OMFlXNWpaUzVwYm5SbGNtTmxjSFJ2Y25NdWNtVnhkV1Z6ZEM1MWMyVW9kVzVrWldacGJtVmtMQ0JsY25KdmNpQTlQaUJtYmlobGNuSnZjaWtnZkh3Z1VISnZiV2x6WlM1eVpXcGxZM1FvWlhKeWIzSXBLVnh1SUNCOVhHNWNiaUFnYjI1U1pYTndiMjV6WlVWeWNtOXlLR1p1T2lBb1kyOXVabWxuT2lCQmVHbHZjMFZ5Y205eUtTQTlQaUJCZUdsdmMwVnljbTl5S1RvZ2RtOXBaQ0I3WEc0Z0lDQWdkR2hwY3k1aGVHbHZjMGx1YzNSaGJtTmxMbWx1ZEdWeVkyVndkRzl5Y3k1eVpYTndiMjV6WlM1MWMyVW9kVzVrWldacGJtVmtMQ0JsY25KdmNpQTlQaUJtYmlobGNuSnZjaWtnZkh3Z1VISnZiV2x6WlM1eVpXcGxZM1FvWlhKeWIzSXBLVnh1SUNCOVhHNWNiaUFnYjI1RmNuSnZjaWhtYmpvZ0tHTnZibVpwWnpvZ1FYaHBiM05GY25KdmNpa2dQVDRnUVhocGIzTkZjbkp2Y2lrNklIWnZhV1FnZTF4dUlDQWdJSFJvYVhNdWIyNVNaWEYxWlhOMFJYSnliM0lvWm00cFhHNGdJQ0FnZEdocGN5NXZibEpsYzNCdmJuTmxSWEp5YjNJb1ptNHBYRzRnSUgxY2JseHVJQ0J6WlhSRGIyNW1hV2NvWTI5dVptbG5PaUJTWlhGRGIyNW1hV2NwT2lCMmIybGtJSHRjYmlBZ0lDQjBhR2x6TG1OdmJtWnBaeUE5SUhzdUxpNTBhR2x6TG1OdmJtWnBaeXdnTGk0dVkyOXVabWxuZlZ4dUlDQjlYRzVjYmlBZ2MzUmhkR2xqSUdOeVpXRjBaU2hsZUhSbGJtUkRiMjVtYVdjL09pQlNaWEZEYjI1bWFXY3BPaUJCY0dsSWRXSWdlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dRWEJwU0hWaUtHVjRkR1Z1WkVOdmJtWnBaeWxjYmlBZ2ZWeHVYRzRnSUhSdlJtOXliVVJoZEdFb1pHRjBZVG9nVTNSeWFXNW5TVzVrWlhncE9pQkdiM0p0UkdGMFlTQjdYRzRnSUNBZ1kyOXVjM1FnWm05eWJVUmhkR0VnUFNCdVpYY2dSbTl5YlVSaGRHRW9LVnh1SUNBZ0lHWnZjaWhqYjI1emRDQnJaWGtnYVc0Z1pHRjBZU2tnZTF4dUlDQWdJQ0FnWm05eWJVUmhkR0V1WVhCd1pXNWtLR3RsZVN3Z1pHRjBZVnRyWlhsZEtWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdabTl5YlVSaGRHRmNiaUFnZlZ4dVhHNGdJR2RsZEUxdlpIVnNaWE1vS1RvZ1RXOWtkV3hsVW05dmRDQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXViVzlrZFd4bFVtOXZkRnh1SUNCOVhHNWNiaUFnY21WbmFYTjBaWEpOYjJSMWJHVW9iVzlrZFd4bFRtRnRaVG9nYzNSeWFXNW5MQ0J0YjJSMWJHVTZJRTF2WkhWc1pTd2diVzlrZFd4bFEyOXVabWxuT2lCU1pYRkRiMjVtYVdjZ1BTQjdmU2s2SUhadmFXUWdlMXh1SUNBZ0lIUm9hWE11Ylc5a2RXeGxVbTl2ZEZ0dGIyUjFiR1ZPWVcxbFhTQTlJSFJvYVhNdVkzSmxZWFJsVFc5a2RXeGxLRzF2WkhWc1pTd2diVzlrZFd4bFEyOXVabWxuS1Z4dUlDQjlYRzVjYmlBZ1kzSmxZWFJsVFc5a2RXeGxLRzF2WkhWc1pUb2dUVzlrZFd4bExDQnRiMlIxYkdWRGIyNW1hV2M2SUZKbGNVTnZibVpwWnlBOUlIdDlLVG9nVFc5a2RXeGxTSFZpSUh0Y2JpQWdJQ0JqYjI1emRDQnRiMlIxYkdWb2RXSTZJRTF2WkhWc1pVaDFZaUE5SUh0OVhHNGdJQ0FnWm05eUtHTnZibk4wSUd0bGVTQnBiaUJ0YjJSMWJHVXVZWEJwY3lrZ2UxeHVJQ0FnSUNBZ2JXOWtkV3hsYUhWaVcydGxlVjBnUFNBb2NtVnhSR0YwWVRvZ1FYQnBSR0YwWVN3Z1lYQnBRMjl1Wm1sbk9pQlNaWEZEYjI1bWFXY2dQU0I3ZlNrNklGQnliMjFwYzJVOFVtVnpjRzl1YzJWRVlYUmhQaUE5UGlCN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lYQnBJRDBnYlc5a2RXeGxMbUZ3YVhOYmEyVjVYVnh1SUNBZ0lDQWdJQ0JzWlhRZ2RYSnNJRDBnWVhCcExuVnliQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIRjFaWEo1TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR0YwWVZ4dVhHNGdJQ0FnSUNBZ0lHbG1LSFI1Y0dWdlppQnlaWEZFWVhSaElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIVnliQ0E5SUhWeWJDNXlaWEJzWVdObEtDOWNYSHRjWEhNcUtGc2tJMEJjWEMxY1hHUmNYSGRkS3lsY1hITXFYRng5TDJkcGJTd2dLSFlzSUhaaGJEb2djM1J5YVc1bktTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWduY0dGeVlXMXpKeUJwYmlCeVpYRkVZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhGRVlYUmhMbkJoY21GdGN5QW1KaUJ5WlhGRVlYUmhMbkJoY21GdGMxdDJZV3hkWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUZSb1pTQndZWEpoYlhNZ0p5UjdkbUZzZlNjZ1pHOGdibTkwSUdoaGRtVWdZU0JoYzNOcFoyNGdkbUZzZFdVdVlDbGNiaUFnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lHbG1LSEpsY1VSaGRHRXVjWFZsY25rcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhGMVpYSjVJRDBnY21WeFJHRjBZUzV4ZFdWeWVWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppaHlaWEZFWVhSaExtUmhkR0VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFZ1BTQnlaWEZFWVhSaExtUmhkR0ZjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1kyOXVabWxuSUQwZ2V5NHVMblJvYVhNdVkyOXVabWxuTENBdUxpNXRiMlIxYkdWRGIyNW1hV2NzSUM0dUxtRndhVU52Ym1acFozMWNiaUFnSUNBZ0lDQWdhV1lvWTI5dVptbG5MblI1Y0dVZ1BUMDlJQ2RtYjNKdEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdSaGRHRWdQU0JrWVhSaElDWW1JSFJvYVhNdWRHOUdiM0p0UkdGMFlTaGtZWFJoS1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lYaHBiM05EYjI1bWFXYzZJRUY0YVc5elVtVnhkV1Z6ZEVOdmJtWnBaeUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQnRaWFJvYjJRNklHRndhUzV0WlhSb2IyUXNYRzRnSUNBZ0lDQWdJQ0FnZFhKc09pQndZWFJvTG1wdmFXNG9iVzlrZFd4bExtSmhjMlVzSUhWeWJDa3NYRzRnSUNBZ0lDQWdJQ0FnY0dGeVlXMXpPaUJ4ZFdWeWVTeGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJQzR1TG1OdmJtWnBaMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtRjRhVzl6U1c1emRHRnVZMlVvWVhocGIzTkRiMjVtYVdjcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnRiMlIxYkdWb2RXSmNibHh1SUNCOVhHNWNibjFjYmx4dVhHNWNibHh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIi8vIGltcG9ydCBBcGkgZnJvbSAnLi4vLi4vZGlzdC9tYWluLmpzJ1xuY29uc3QgQXBpID0gcmVxdWlyZSgnLi4vZGlzdC9tYWluLmpzJykuZGVmYXVsdFxuY29uc3QgU2l0ZUFwaXMgPSByZXF1aXJlKCcuL3N0YXRpYy9hcGkvc2l0ZS5qc29uJylcblxuY29uc29sZS5sb2coQXBpKVxuXG5jb25zdCBvcHRpb25zID0ge1xuICBiYXNlVVJMOiAnL2FwaScsXG59XG5cblxuY29uc3QgQXBpSW5zdGFuY2UgPSBBcGkuY3JlYXRlKG9wdGlvbnMpXG5cbkFwaUluc3RhbmNlLm9uUmVxdWVzdChjb25maWcgPT4ge1xuICBjb25zb2xlLmxvZyhjb25maWcpXG59KVxuQXBpSW5zdGFuY2Uub25FcnJvcihlcnIgPT4ge1xuICBjb25zb2xlLmxvZyhlcnIpXG59KVxuXG5jb25zdCBTaXRlTW9kdWxlID0gQXBpSW5zdGFuY2UuY3JlYXRlTW9kdWxlKFNpdGVBcGlzKVxuU2l0ZU1vZHVsZS5nZXRTaXRlSW5mbygpXG4iXSwic291cmNlUm9vdCI6IiJ9