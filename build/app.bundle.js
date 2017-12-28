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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(11);

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
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
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
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
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
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
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
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
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
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(13);

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
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
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
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(14);
var buildURL = __webpack_require__(16);
var parseHeaders = __webpack_require__(17);
var isURLSameOrigin = __webpack_require__(18);
var createError = __webpack_require__(5);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(19);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
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
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

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
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(20);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

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
    if (config.withCredentials) {
      request.withCredentials = true;
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(15);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _app = __webpack_require__(28);

var _app2 = _interopRequireDefault(_app);

var _theatres = __webpack_require__(29);

var _theatres2 = _interopRequireDefault(_theatres);

var _film = __webpack_require__(30);

var _film2 = _interopRequireDefault(_film);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inTheatresBtn = document.querySelector('#in-theatres-btn');
inTheatresBtn.addEventListener('click', changeHash);

var logo = document.querySelector('.brand-logo');
logo.addEventListener('click', goToMain);

var listMovies = document.querySelector('.list-movies');
listMovies.addEventListener('click', identifyTarget);

function identifyTarget(event) {
	if (event.target.className.indexOf('link-more') !== -1) {
		var filmId = event.target.getAttribute('id');
		console.log(filmId);
		window.location.hash = '#?' + ('' + filmId);
	};
	loadData();
}

function goToMain() {
	window.location.hash = '#main';
	//	listMovies.innerHTML = '';
	loadData();
}

function changeHash() {
	window.location.hash = '#in-theatres';
	loadData();
}

function loadData() {
	if (window.location.hash === '') {
		window.location.hash = '#main';
	}

	if (window.location.hash === '#main') {
		(0, _app2.default)();
	} else if (window.location.hash === '#in-theatres') {
		(0, _theatres2.default)();
	} else if (window.location.href.indexOf('?')) {
		(0, _film2.default)();
	}
}

loadData();

//mainJS();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(12);
var defaults = __webpack_require__(1);

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
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(26);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(27);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(21);
var dispatchRequest = __webpack_require__(22);

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
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

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

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 15 */
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
  return error;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
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
      }

      if (!utils.isArray(val)) {
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
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

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

  if (!headers) {
    return parsed;
  }

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
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
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
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
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
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
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(23);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(24);
var combineURLs = __webpack_require__(25);

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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

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
/* 24 */
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
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 25 */
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
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// axios.get('http://www.myapifilms.com/imdb/top?token=ebfb7525-3b98-4d85-b1ed-e1796c3b0087&format=json&data=0')
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

function mainJS() {

	var tempData = { "data": { "movies": [{ "title": "The Shawshank Redemption", "originalTitle": "", "year": "1994", "releaseDate": "19941014", "directors": [{ "name": "Frank Darabont", "id": "nm0001104" }], "writers": [{ "name": "Stephen King", "id": "nm0000175" }, { "name": "Frank Darabont", "id": "nm0001104" }], "runtime": "142 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama"], "plot": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.", "simplePlot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "idIMDB": "tt0111161", "urlIMDB": "http://www.imdb.com/title/tt0111161", "rating": "9.3", "metascore": "80", "rated": "R", "votes": "1,888,463", "type": "Movie", "ranking": 1 }, { "title": "The Godfather", "originalTitle": "", "year": "1972", "releaseDate": "19720324", "directors": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }], "writers": [{ "name": "Mario Puzo", "id": "nm0701374" }, { "name": "Francis Ford Coppola", "id": "nm0000338" }], "runtime": "175 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian", "Latin"], "genres": ["Crime", "Drama"], "plot": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.", "simplePlot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "idIMDB": "tt0068646", "urlIMDB": "http://www.imdb.com/title/tt0068646", "rating": "9.2", "metascore": "100", "rated": "R", "votes": "1,289,375", "type": "Movie", "ranking": 2 }, { "title": "The Godfather: Part II", "originalTitle": "", "year": "1974", "releaseDate": "19741220", "directors": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }], "writers": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }, { "name": "Mario Puzo", "id": "nm0701374" }], "runtime": "202 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian", "Spanish", "Latin", "Sicilian"], "genres": ["Crime", "Drama"], "plot": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.", "simplePlot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", "idIMDB": "tt0071562", "urlIMDB": "http://www.imdb.com/title/tt0071562", "rating": "9.0", "metascore": "85", "rated": "R", "votes": "889,565", "type": "Movie", "ranking": 3 }, { "title": "The Dark Knight", "originalTitle": "", "year": "2008", "releaseDate": "20080718", "directors": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "writers": [{ "name": "Jonathan Nolan", "id": "nm0634300" }, { "name": "Christopher Nolan", "id": "nm0634240" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "UK"], "languages": ["English", "Mandarin"], "genres": ["Action", "Crime", "Drama", "Thriller"], "plot": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.", "simplePlot": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "idIMDB": "tt0468569", "urlIMDB": "http://www.imdb.com/title/tt0468569", "rating": "9.0", "metascore": "82", "rated": "PG-13", "votes": "1,864,101", "type": "Movie", "ranking": 4 }, { "title": "12 Angry Men", "originalTitle": "", "year": "1957", "releaseDate": "195704", "directors": [{ "name": "Sidney Lumet", "id": "nm0001486" }], "writers": [{ "name": "Reginald Rose", "id": "nm0741627" }, { "name": "Reginald Rose", "id": "nm0741627" }], "runtime": "96 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama"], "plot": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.", "simplePlot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", "idIMDB": "tt0050083", "urlIMDB": "http://www.imdb.com/title/tt0050083", "rating": "8.9", "metascore": "96", "rated": "NOT RATED", "votes": "518,411", "type": "Movie", "ranking": 5 }, { "title": "Schindler's List", "originalTitle": "", "year": "1993", "releaseDate": "19940204", "directors": [{ "name": "Steven Spielberg", "id": "nm0000229" }], "writers": [{ "name": "Thomas Keneally", "id": "nm0447745" }, { "name": "Steven Zaillian", "id": "nm0001873" }], "runtime": "195 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Hebrew", "German", "Polish"], "genres": ["Biography", "Drama", "History"], "plot": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.", "simplePlot": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", "idIMDB": "tt0108052", "urlIMDB": "http://www.imdb.com/title/tt0108052", "rating": "8.9", "metascore": "93", "rated": "R", "votes": "971,070", "type": "Movie", "ranking": 6 }, { "title": "Pulp Fiction", "originalTitle": "", "year": "1994", "releaseDate": "19941014", "directors": [{ "name": "Quentin Tarantino", "id": "nm0000233" }], "writers": [{ "name": "Quentin Tarantino", "id": "nm0000233" }, { "name": "Roger Avary", "id": "nm0000812" }], "runtime": "154 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Spanish", "French"], "genres": ["Crime", "Drama"], "plot": "Jules Winnfield () and Vincent Vega () are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (). Wallace has also asked Vincent to take his wife Mia () out a few days later when Wallace himself will be out of town. Butch Coolidge () is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.", "simplePlot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "idIMDB": "tt0110912", "urlIMDB": "http://www.imdb.com/title/tt0110912", "rating": "8.9", "metascore": "94", "rated": "R", "votes": "1,477,058", "type": "Movie", "ranking": 7 }, { "title": "The Lord of the Rings: The Return of the King", "originalTitle": "", "year": "2003", "releaseDate": "20031217", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "201 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "New Zealand"], "languages": ["English", "Quenya", "Old English", "Sindarin"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits: Frodo and Sam reach Mordor in their quest to destroy the \"one ring\", while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.", "simplePlot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", "idIMDB": "tt0167260", "urlIMDB": "http://www.imdb.com/title/tt0167260", "rating": "8.9", "metascore": "94", "rated": "PG-13", "votes": "1,349,380", "type": "Movie", "ranking": 8 }, { "title": "The Good, the Bad and the Ugly", "originalTitle": "Il buono, il brutto, il cattivo", "year": "1966", "releaseDate": "19671229", "directors": [{ "name": "Sergio Leone", "id": "nm0001466" }], "writers": [{ "name": "Luciano Vincenzoni", "id": "nm0898812" }, { "name": "Sergio Leone", "id": "nm0001466" }], "runtime": "178 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Italy", "Spain", "West Germany"], "languages": ["Italian"], "genres": ["Western"], "plot": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ...", "simplePlot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", "idIMDB": "tt0060196", "urlIMDB": "http://www.imdb.com/title/tt0060196", "rating": "8.9", "metascore": "90", "rated": "R", "votes": "559,440", "type": "Movie", "ranking": 9 }, { "title": "Fight Club", "originalTitle": "", "year": "1999", "releaseDate": "19991015", "directors": [{ "name": "David Fincher", "id": "nm0000399" }], "writers": [{ "name": "Chuck Palahniuk", "id": "nm0657333" }, { "name": "Jim Uhls", "id": "nm0880243" }], "runtime": "139 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Germany"], "languages": ["English"], "genres": ["Drama"], "plot": "A nameless first person narrator () attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler () he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.", "simplePlot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.", "idIMDB": "tt0137523", "urlIMDB": "http://www.imdb.com/title/tt0137523", "rating": "8.8", "metascore": "66", "rated": "R", "votes": "1,513,534", "type": "Movie", "ranking": 10 }, { "title": "The Lord of the Rings: The Fellowship of the Ring", "originalTitle": "", "year": "2001", "releaseDate": "20011219", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "178 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["New Zealand", "USA"], "languages": ["English", "Sindarin"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!", "simplePlot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.", "idIMDB": "tt0120737", "urlIMDB": "http://www.imdb.com/title/tt0120737", "rating": "8.8", "metascore": "92", "rated": "PG-13", "votes": "1,369,560", "type": "Movie", "ranking": 11 }, { "title": "Forrest Gump", "originalTitle": "", "year": "1994", "releaseDate": "19940706", "directors": [{ "name": "Robert Zemeckis", "id": "nm0000709" }], "writers": [{ "name": "Winston Groom", "id": "nm0343165" }, { "name": "Eric Roth", "id": "nm0744839" }], "runtime": "142 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama", "Romance"], "plot": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.", "simplePlot": "JFK, LBJ, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", "idIMDB": "tt0109830", "urlIMDB": "http://www.imdb.com/title/tt0109830", "rating": "8.8", "metascore": "82", "rated": "PG-13", "votes": "1,425,355", "type": "Movie", "ranking": 12 }, { "title": "Star Wars: Episode V - The Empire Strikes Back", "originalTitle": "", "year": "1980", "releaseDate": "19800620", "directors": [{ "name": "Irvin Kershner", "id": "nm0449984" }], "writers": [{ "name": "Leigh Brackett", "id": "nm0102824" }, { "name": "Lawrence Kasdan", "id": "nm0001410" }], "runtime": "124 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.", "simplePlot": "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.", "idIMDB": "tt0080684", "urlIMDB": "http://www.imdb.com/title/tt0080684", "rating": "8.8", "metascore": "81", "rated": "PG", "votes": "945,291", "type": "Movie", "ranking": 13 }, { "title": "Inception", "originalTitle": "", "year": "2010", "releaseDate": "20100716", "directors": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "writers": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "runtime": "148 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "UK"], "languages": ["English", "Japanese", "French"], "genres": ["Action", "Adventure", "Sci-Fi", "Thriller"], "plot": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.", "simplePlot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.", "idIMDB": "tt1375666", "urlIMDB": "http://www.imdb.com/title/tt1375666", "rating": "8.8", "metascore": "74", "rated": "PG-13", "votes": "1,652,959", "type": "Movie", "ranking": 14 }, { "title": "The Lord of the Rings: The Two Towers", "originalTitle": "", "year": "2002", "releaseDate": "20021218", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "179 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDY0NmI4ZjctN2VhZS00YzExLTkyZGItMTJhOTU5NTg4MDU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR1,0,182,268_AL_.jpg", "countries": ["USA", "New Zealand"], "languages": ["English", "Sindarin", "Old English"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.", "simplePlot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", "idIMDB": "tt0167261", "urlIMDB": "http://www.imdb.com/title/tt0167261", "rating": "8.7", "metascore": "88", "rated": "PG-13", "votes": "1,221,378", "type": "Movie", "ranking": 15 }, { "title": "One Flew Over the Cuckoo's Nest", "originalTitle": "", "year": "1975", "releaseDate": "19751119", "directors": [{ "name": "Milos Forman", "id": "nm0001232" }], "writers": [{ "name": "Lawrence Hauben", "id": "nm0369142" }, { "name": "Bo Goldman", "id": "nm0325743" }], "runtime": "133 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.", "simplePlot": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.", "idIMDB": "tt0073486", "urlIMDB": "http://www.imdb.com/title/tt0073486", "rating": "8.7", "metascore": "80", "rated": "R", "votes": "753,811", "type": "Movie", "ranking": 16 }, { "title": "Goodfellas", "originalTitle": "", "year": "1990", "releaseDate": "19900921", "directors": [{ "name": "Martin Scorsese", "id": "nm0000217" }], "writers": [{ "name": "Nicholas Pileggi", "id": "nm0683380" }, { "name": "Nicholas Pileggi", "id": "nm0683380" }], "runtime": "146 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian"], "genres": ["Biography", "Crime", "Drama"], "plot": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?", "simplePlot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his Mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.", "idIMDB": "tt0099685", "urlIMDB": "http://www.imdb.com/title/tt0099685", "rating": "8.7", "metascore": "89", "rated": "R", "votes": "813,718", "type": "Movie", "ranking": 17 }, { "title": "The Matrix", "originalTitle": "", "year": "1999", "releaseDate": "19990331", "directors": [{ "name": "Lana Wachowski", "id": "nm0905154" }, { "name": "Lilly Wachowski", "id": "nm0905152" }], "writers": [{ "name": "Lilly Wachowski", "id": "nm0905152" }, { "name": "Lana Wachowski", "id": "nm0905154" }], "runtime": "136 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Sci-Fi"], "plot": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.", "simplePlot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "idIMDB": "tt0133093", "urlIMDB": "http://www.imdb.com/title/tt0133093", "rating": "8.7", "metascore": "73", "rated": "R", "votes": "1,358,456", "type": "Movie", "ranking": 18 }, { "title": "Seven Samurai", "originalTitle": "Shichinin no samurai", "year": "1954", "releaseDate": "19561119", "directors": [{ "name": "Akira Kurosawa", "id": "nm0000041" }], "writers": [{ "name": "Akira Kurosawa", "id": "nm0000041" }, { "name": "Shinobu Hashimoto", "id": "nm0368074" }], "runtime": "207 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_UY268_CR4,0,182,268_AL_.jpg", "countries": ["Japan"], "languages": ["Japanese"], "genres": ["Adventure", "Drama"], "plot": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.", "simplePlot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.", "idIMDB": "tt0047478", "urlIMDB": "http://www.imdb.com/title/tt0047478", "rating": "8.7", "metascore": "98", "rated": "NOT RATED", "votes": "254,430", "type": "Movie", "ranking": 19 }, { "title": "Star Wars: Episode IV - A New Hope", "originalTitle": "Star Wars", "year": "1977", "releaseDate": "19770525", "directors": [{ "name": "George Lucas", "id": "nm0000184" }], "writers": [{ "name": "George Lucas", "id": "nm0000184" }], "runtime": "121 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.", "simplePlot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.", "idIMDB": "tt0076759", "urlIMDB": "http://www.imdb.com/title/tt0076759", "rating": "8.7", "metascore": "92", "rated": "PG", "votes": "1,017,491", "type": "Movie", "ranking": 20 }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/20 18:27:30" } };
	var dataInTheatres = { "data": { "inTheaters": [{ "openingThisWeek": "Opening This Week", "movies": [{ "title": "All the Money in the World", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Ridley Scott", "id": "nm0000631" }], "writers": [{ "name": "David Scarpa", "id": "nm0769227" }, { "name": "John Pearson", "id": "nm0669301" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery", "Thriller"], "plot": "Rome, 1973. Masked men kidnap a teenage boy named (Charlie Plummer). His grandfather, (Christopher Plummer), is the richest man in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.", "simplePlot": "The story of the kidnapping of 16-year-old and the desperate attempt by his devoted mother to convince his billionaire grandfather to pay the ransom.", "idIMDB": "tt5294550", "urlIMDB": "http://www.imdb.com/title/tt5294550", "rated": "R", "type": "Movie" }, { "title": "In the Fade", "originalTitle": "Aus dem Nichts", "year": "2017", "releaseDate": "20171227", "directors": [{ "name": "Fatih Akin", "id": "nm0015359" }], "writers": [{ "name": "Fatih Akin", "id": "nm0015359" }, { "name": "Hark Bohm", "id": "nm0006737" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2NTkyZjEtMTYxNC00YTJmLTgzZjMtNTVmOTZmNDBhMjQ5XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Germany", "France"], "languages": ["English", "German"], "genres": ["Crime", "Drama"], "plot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "simplePlot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "idIMDB": "tt5723272", "urlIMDB": "http://www.imdb.com/title/tt5723272", "rating": "7.1", "metascore": "61", "rated": "R", "votes": "1,418", "type": "Movie" }, { "title": "Molly's Game", "originalTitle": "", "year": "2017", "releaseDate": "20180105", "directors": [{ "name": "Aaron Sorkin", "id": "nm0815070" }], "writers": [{ "name": "Molly Bloom", "id": "nm6591098" }, { "name": "Aaron Sorkin", "id": "nm0815070" }], "runtime": "140 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM3NzcxMzQyNl5BMl5BanBnXkFtZTgwNzUyNzcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama"], "plot": "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.", "simplePlot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.", "idIMDB": "tt4209788", "urlIMDB": "http://www.imdb.com/title/tt4209788", "rating": "7.1", "metascore": "74", "rated": "R", "votes": "1,090", "type": "Movie" }, { "title": "Film Stars Don't Die in Liverpool", "originalTitle": "", "year": "2017", "releaseDate": "20171116", "directors": [{ "name": "Paul McGuigan", "id": "nm0006476" }], "writers": [{ "name": "Matt Greenhalgh", "id": "nm0339043" }, { "name": "Peter Turner", "id": "nm0877805" }], "runtime": "105 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTE0MDQxODg2NTJeQTJeQWpwZ15BbWU4MDIwODkyMjQz._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "Romance"], "plot": "A romance sparks between a young actor and a Hollywood leading lady.", "simplePlot": "A romance sparks between a young actor and a Hollywood leading lady.", "idIMDB": "tt5711148", "urlIMDB": "http://www.imdb.com/title/tt5711148", "rating": "6.8", "metascore": "72", "rated": "R", "votes": "574", "type": "Movie" }, { "title": "Phantom Thread", "originalTitle": "", "year": "2017", "releaseDate": "20171225", "directors": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "writers": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "runtime": "130 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "Set in the glamour of 1950's post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.", "simplePlot": "Set in 1950's London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.", "idIMDB": "tt5776858", "urlIMDB": "http://www.imdb.com/title/tt5776858", "rating": "9.0", "rated": "R", "votes": "152", "type": "Movie" }] }, { "inTheatersNow": "In Theaters Now", "movies": [{ "title": "Star Wars: The Last Jedi", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Rian Johnson", "id": "nm0426059" }], "writers": [{ "name": "Rian Johnson", "id": "nm0426059" }, { "name": "George Lucas", "id": "nm0000184" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "simplePlot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "idIMDB": "tt2527336", "urlIMDB": "http://www.imdb.com/title/tt2527336", "rated": "PG-13", "type": "Movie" }, { "title": "Pitch Perfect 3", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Trish Sie", "id": "nm2586324" }], "writers": [{ "name": "Kay Cannon", "id": "nm0134224" }, { "name": "Kay Cannon", "id": "nm0134224" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy", "Music"], "plot": "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.", "simplePlot": "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.", "idIMDB": "tt4765284", "urlIMDB": "http://www.imdb.com/title/tt4765284", "rated": "PG-13", "type": "Movie" }, { "title": "Ferdinand", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Carlos Saldanha", "id": "nm0757858" }], "writers": [{ "name": "Munro Leaf", "id": "nm0494943" }, { "name": "Robert Lawson", "id": "nm0493314" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "Ferdinand, is a a giant bull with a big heart. he is mistaken for a dangerous beast and is captured and torn from his home and family. Determined to return to his family, he rallies a misfit team for the ultimate adventure. Set in Spain, Ferdinand proves you can't judge a bull by its cover.", "simplePlot": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.", "idIMDB": "tt3411444", "urlIMDB": "http://www.imdb.com/title/tt3411444", "rated": "PG", "type": "Movie" }, { "title": "The Greatest Showman", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Michael Gracey", "id": "nm1243905" }], "writers": [{ "name": "Jenny Bicks", "id": "nm0081081" }, { "name": "Bill Condon", "id": "nm0174374" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "Musical"], "plot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "simplePlot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "idIMDB": "tt1485796", "urlIMDB": "http://www.imdb.com/title/tt1485796", "rated": "PG", "type": "Movie" }, { "title": "Jumanji: Welcome to the Jungle", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Jake Kasdan", "id": "nm0440458" }], "writers": [{ "name": "Chris McKenna", "id": "nm0571344" }, { "name": "Chris McKenna", "id": "nm0571344" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.", "simplePlot": "Four teenagers discover an old video game console and are literally drawn into the game's jungle setting becoming the adult avatars they chose.", "idIMDB": "tt2283362", "urlIMDB": "http://www.imdb.com/title/tt2283362", "rated": "PG-13", "type": "Movie" }, { "title": "Father Figures", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Lawrence Sher", "id": "nm0003394" }], "writers": [{ "name": "Justin Malen", "id": "nm3675159" }], "runtime": "113 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy"], "plot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "simplePlot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "idIMDB": "tt1966359", "urlIMDB": "http://www.imdb.com/title/tt1966359", "rated": "R", "type": "Movie" }, { "title": "Downsizing", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Alexander Payne", "id": "nm0668247" }], "writers": [{ "name": "Alexander Payne", "id": "nm0668247" }, { "name": "Jim Taylor", "id": "nm0852591" }], "runtime": "135 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Norway"], "languages": ["English", "Spanish"], "genres": ["Comedy", "Drama", "Sci-Fi"], "plot": "\"Downsizing\" follows a kindly occupational therapist who undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.", "simplePlot": "A social satire in which a guy realizes he would have a better life if he were to shrink himself.", "idIMDB": "tt1389072", "urlIMDB": "http://www.imdb.com/title/tt1389072", "rating": "6.3", "metascore": "74", "votes": "1,319", "type": "Movie" }, { "title": "Coco", "originalTitle": "", "year": "2017", "releaseDate": "20171121", "directors": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Adrian Molina", "id": "nm2937122" }], "writers": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Jason Katz", "id": "nm0441735" }], "runtime": "109 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Spanish"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical", "Mystery"], "plot": "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.", "simplePlot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to work out the mystery.", "idIMDB": "tt2380307", "urlIMDB": "http://www.imdb.com/title/tt2380307", "rating": "9.0", "metascore": "80", "rated": "PG", "votes": "19,347", "type": "Movie" }, { "title": "The Shape of Water", "originalTitle": "", "year": "2017", "releaseDate": "20180221", "directors": [{ "name": "Guillermo del Toro", "id": "nm0868219" }], "writers": [{ "name": "Guillermo del Toro", "id": "nm0868219" }, { "name": "Vanessa Taylor", "id": "nm0961827" }], "runtime": "123 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "American Sign Language", "Russian"], "genres": ["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Thriller"], "plot": "From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fable, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg and Doug Jones.", "simplePlot": "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.", "idIMDB": "tt5580390", "urlIMDB": "http://www.imdb.com/title/tt5580390", "rating": "7.7", "metascore": "85", "rated": "R", "votes": "2,675", "type": "Movie" }, { "title": "Darkest Hour", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Joe Wright", "id": "nm0942504" }], "writers": [{ "name": "Anthony McCarten", "id": "nm0565026" }], "runtime": "125 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNDkyMTgzMV5BMl5BanBnXkFtZTgwNTQwNjg2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "History", "War"], "plot": "Within days of becoming Prime Minister of Great Britain, Winston Churchill (Gary Oldman) must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.", "simplePlot": "During the early days of World War II, the fate of Western Europe hangs on the newly-appointed British Prime Minister Winston Churchill, who must decide whether to negotiate with Hitler, or fight on against incredible odds.", "idIMDB": "tt4555426", "urlIMDB": "http://www.imdb.com/title/tt4555426", "rating": "6.1", "metascore": "73", "rated": "PG-13", "votes": "1,484", "type": "Movie" }] }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/26 10:24:00" } };

	console.log('mainJS working', tempData);

	var listMovies = document.querySelector('.list-movies');
	var sortByNameBtn = document.querySelector('.sortByName');
	var search = document.querySelector('#search');
	var yearFrom = document.querySelector('.year-from');
	var yearTo = document.querySelector('.year-to');
	var filterByYearBtn = document.querySelector('.filterByYear');

	sortByNameBtn.addEventListener('click', sortByName);
	search.addEventListener('keyup', searchByName);
	filterByYearBtn.addEventListener('click', filterByYear);

	function filterByYear() {
		listMovies.innerHTML = '';
		var tempArray = tempData.data.movies;
		tempArray = tempArray.filter(function (film) {
			return film.year >= yearFrom.value && film.year <= yearTo.value;
		});
		renderList(tempArray);
	}

	function searchByName() {
		var _this = this;

		listMovies.innerHTML = '';
		var tempArray = [];
		if (window.location.hash === '#in-theatres') {
			tempArray = dataInTheatres.data.inTheaters[1].movies;
		} else {
			tempArray = tempData.data.movies;
		}
		tempArray = tempArray.filter(function (film) {
			return film.title.indexOf(_this.value) >= 0;
		});
		renderList(tempArray);
	}

	function sortByName() {
		listMovies.innerHTML = '';
		var tempArray = [];
		if (window.location.hash === '#in-theatres') {
			tempArray = dataInTheatres.data.inTheaters[1].movies;
		} else {
			tempArray = tempData.data.movies;
		}
		//let tempArray = tempData.data.movies;
		tempArray.sort(function (a, b) {
			return a.title > b.title ? 1 : -1;
		});
		renderList(tempArray);
	}

	function renderMovie(film) {
		var html = "\n\t\t<div class=\"movie col s4\">\n\t\t\t<img src=" + film.urlPoster + " alt=\"poster\">\n\t\t\t<h5>" + film.title + "</h5>\n\t\t\t<p>" + film.year + "</p>\n\t\t\t<button class=\"link-more btn\" id=" + film.idIMDB + ">Read more</button>\n\t\t</div>";
		listMovies.insertAdjacentHTML('beforeend', html);
	}

	function renderList(list) {
		listMovies.innerHTML = '';
		list.forEach(function (film) {
			renderMovie(film);
		});
	}

	renderList(tempData.data.movies);
};

exports.default = mainJS;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function theatresJS() {

	var dataInTheatres = { "data": { "inTheaters": [{ "openingThisWeek": "Opening This Week", "movies": [{ "title": "All the Money in the World", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Ridley Scott", "id": "nm0000631" }], "writers": [{ "name": "David Scarpa", "id": "nm0769227" }, { "name": "John Pearson", "id": "nm0669301" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery", "Thriller"], "plot": "Rome, 1973. Masked men kidnap a teenage boy named (Charlie Plummer). His grandfather, (Christopher Plummer), is the richest man in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.", "simplePlot": "The story of the kidnapping of 16-year-old and the desperate attempt by his devoted mother to convince his billionaire grandfather to pay the ransom.", "idIMDB": "tt5294550", "urlIMDB": "http://www.imdb.com/title/tt5294550", "rated": "R", "type": "Movie" }, { "title": "In the Fade", "originalTitle": "Aus dem Nichts", "year": "2017", "releaseDate": "20171227", "directors": [{ "name": "Fatih Akin", "id": "nm0015359" }], "writers": [{ "name": "Fatih Akin", "id": "nm0015359" }, { "name": "Hark Bohm", "id": "nm0006737" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2NTkyZjEtMTYxNC00YTJmLTgzZjMtNTVmOTZmNDBhMjQ5XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Germany", "France"], "languages": ["English", "German"], "genres": ["Crime", "Drama"], "plot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "simplePlot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "idIMDB": "tt5723272", "urlIMDB": "http://www.imdb.com/title/tt5723272", "rating": "7.1", "metascore": "61", "rated": "R", "votes": "1,418", "type": "Movie" }, { "title": "Molly's Game", "originalTitle": "", "year": "2017", "releaseDate": "20180105", "directors": [{ "name": "Aaron Sorkin", "id": "nm0815070" }], "writers": [{ "name": "Molly Bloom", "id": "nm6591098" }, { "name": "Aaron Sorkin", "id": "nm0815070" }], "runtime": "140 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM3NzcxMzQyNl5BMl5BanBnXkFtZTgwNzUyNzcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama"], "plot": "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.", "simplePlot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.", "idIMDB": "tt4209788", "urlIMDB": "http://www.imdb.com/title/tt4209788", "rating": "7.1", "metascore": "74", "rated": "R", "votes": "1,090", "type": "Movie" }, { "title": "Film Stars Don't Die in Liverpool", "originalTitle": "", "year": "2017", "releaseDate": "20171116", "directors": [{ "name": "Paul McGuigan", "id": "nm0006476" }], "writers": [{ "name": "Matt Greenhalgh", "id": "nm0339043" }, { "name": "Peter Turner", "id": "nm0877805" }], "runtime": "105 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTE0MDQxODg2NTJeQTJeQWpwZ15BbWU4MDIwODkyMjQz._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "Romance"], "plot": "A romance sparks between a young actor and a Hollywood leading lady.", "simplePlot": "A romance sparks between a young actor and a Hollywood leading lady.", "idIMDB": "tt5711148", "urlIMDB": "http://www.imdb.com/title/tt5711148", "rating": "6.8", "metascore": "72", "rated": "R", "votes": "574", "type": "Movie" }, { "title": "Phantom Thread", "originalTitle": "", "year": "2017", "releaseDate": "20171225", "directors": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "writers": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "runtime": "130 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "Set in the glamour of 1950's post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.", "simplePlot": "Set in 1950's London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.", "idIMDB": "tt5776858", "urlIMDB": "http://www.imdb.com/title/tt5776858", "rating": "9.0", "rated": "R", "votes": "152", "type": "Movie" }] }, { "inTheatersNow": "In Theaters Now", "movies": [{ "title": "Star Wars: The Last Jedi", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Rian Johnson", "id": "nm0426059" }], "writers": [{ "name": "Rian Johnson", "id": "nm0426059" }, { "name": "George Lucas", "id": "nm0000184" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "simplePlot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "idIMDB": "tt2527336", "urlIMDB": "http://www.imdb.com/title/tt2527336", "rated": "PG-13", "type": "Movie" }, { "title": "Pitch Perfect 3", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Trish Sie", "id": "nm2586324" }], "writers": [{ "name": "Kay Cannon", "id": "nm0134224" }, { "name": "Kay Cannon", "id": "nm0134224" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy", "Music"], "plot": "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.", "simplePlot": "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.", "idIMDB": "tt4765284", "urlIMDB": "http://www.imdb.com/title/tt4765284", "rated": "PG-13", "type": "Movie" }, { "title": "Ferdinand", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Carlos Saldanha", "id": "nm0757858" }], "writers": [{ "name": "Munro Leaf", "id": "nm0494943" }, { "name": "Robert Lawson", "id": "nm0493314" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "Ferdinand, is a a giant bull with a big heart. he is mistaken for a dangerous beast and is captured and torn from his home and family. Determined to return to his family, he rallies a misfit team for the ultimate adventure. Set in Spain, Ferdinand proves you can't judge a bull by its cover.", "simplePlot": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.", "idIMDB": "tt3411444", "urlIMDB": "http://www.imdb.com/title/tt3411444", "rated": "PG", "type": "Movie" }, { "title": "The Greatest Showman", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Michael Gracey", "id": "nm1243905" }], "writers": [{ "name": "Jenny Bicks", "id": "nm0081081" }, { "name": "Bill Condon", "id": "nm0174374" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "Musical"], "plot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "simplePlot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "idIMDB": "tt1485796", "urlIMDB": "http://www.imdb.com/title/tt1485796", "rated": "PG", "type": "Movie" }, { "title": "Jumanji: Welcome to the Jungle", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Jake Kasdan", "id": "nm0440458" }], "writers": [{ "name": "Chris McKenna", "id": "nm0571344" }, { "name": "Chris McKenna", "id": "nm0571344" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.", "simplePlot": "Four teenagers discover an old video game console and are literally drawn into the game's jungle setting becoming the adult avatars they chose.", "idIMDB": "tt2283362", "urlIMDB": "http://www.imdb.com/title/tt2283362", "rated": "PG-13", "type": "Movie" }, { "title": "Father Figures", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Lawrence Sher", "id": "nm0003394" }], "writers": [{ "name": "Justin Malen", "id": "nm3675159" }], "runtime": "113 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy"], "plot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "simplePlot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "idIMDB": "tt1966359", "urlIMDB": "http://www.imdb.com/title/tt1966359", "rated": "R", "type": "Movie" }, { "title": "Downsizing", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Alexander Payne", "id": "nm0668247" }], "writers": [{ "name": "Alexander Payne", "id": "nm0668247" }, { "name": "Jim Taylor", "id": "nm0852591" }], "runtime": "135 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Norway"], "languages": ["English", "Spanish"], "genres": ["Comedy", "Drama", "Sci-Fi"], "plot": "\"Downsizing\" follows a kindly occupational therapist who undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.", "simplePlot": "A social satire in which a guy realizes he would have a better life if he were to shrink himself.", "idIMDB": "tt1389072", "urlIMDB": "http://www.imdb.com/title/tt1389072", "rating": "6.3", "metascore": "74", "votes": "1,319", "type": "Movie" }, { "title": "Coco", "originalTitle": "", "year": "2017", "releaseDate": "20171121", "directors": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Adrian Molina", "id": "nm2937122" }], "writers": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Jason Katz", "id": "nm0441735" }], "runtime": "109 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Spanish"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical", "Mystery"], "plot": "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.", "simplePlot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to work out the mystery.", "idIMDB": "tt2380307", "urlIMDB": "http://www.imdb.com/title/tt2380307", "rating": "9.0", "metascore": "80", "rated": "PG", "votes": "19,347", "type": "Movie" }, { "title": "The Shape of Water", "originalTitle": "", "year": "2017", "releaseDate": "20180221", "directors": [{ "name": "Guillermo del Toro", "id": "nm0868219" }], "writers": [{ "name": "Guillermo del Toro", "id": "nm0868219" }, { "name": "Vanessa Taylor", "id": "nm0961827" }], "runtime": "123 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "American Sign Language", "Russian"], "genres": ["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Thriller"], "plot": "From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fable, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg and Doug Jones.", "simplePlot": "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.", "idIMDB": "tt5580390", "urlIMDB": "http://www.imdb.com/title/tt5580390", "rating": "7.7", "metascore": "85", "rated": "R", "votes": "2,675", "type": "Movie" }, { "title": "Darkest Hour", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Joe Wright", "id": "nm0942504" }], "writers": [{ "name": "Anthony McCarten", "id": "nm0565026" }], "runtime": "125 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNDkyMTgzMV5BMl5BanBnXkFtZTgwNTQwNjg2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "History", "War"], "plot": "Within days of becoming Prime Minister of Great Britain, Winston Churchill (Gary Oldman) must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.", "simplePlot": "During the early days of World War II, the fate of Western Europe hangs on the newly-appointed British Prime Minister Winston Churchill, who must decide whether to negotiate with Hitler, or fight on against incredible odds.", "idIMDB": "tt4555426", "urlIMDB": "http://www.imdb.com/title/tt4555426", "rating": "6.1", "metascore": "73", "rated": "PG-13", "votes": "1,484", "type": "Movie" }] }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/26 10:24:00" } };
	console.log('theatresJS working', dataInTheatres);

	var listMovies = document.querySelector('.list-movies');

	listMovies.innerHTML = '';

	function renderMovie(film) {
		var html = "\n\t\t<div class=\"movie col s4\">\n\t\t\t<img src=" + film.urlPoster + " alt=\"poster\">\n\t\t\t<h5>" + film.title + "</h5>\n\t\t\t<p>" + film.year + "</p>\n\t\t\t<button class=\"link-more btn\" id=" + film.idIMDB + ">Read more</button>\n\t\t</div>";
		listMovies.insertAdjacentHTML('beforeend', html);
	}

	function renderList(list) {
		list.forEach(function (film) {
			renderMovie(film);
		});
	}

	renderList(dataInTheatres.data.inTheaters[1].movies);
}

exports.default = theatresJS;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function filmJS() {

	var tempData = { "data": { "movies": [{ "title": "The Shawshank Redemption", "originalTitle": "", "year": "1994", "releaseDate": "19941014", "directors": [{ "name": "Frank Darabont", "id": "nm0001104" }], "writers": [{ "name": "Stephen King", "id": "nm0000175" }, { "name": "Frank Darabont", "id": "nm0001104" }], "runtime": "142 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama"], "plot": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.", "simplePlot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "idIMDB": "tt0111161", "urlIMDB": "http://www.imdb.com/title/tt0111161", "rating": "9.3", "metascore": "80", "rated": "R", "votes": "1,888,463", "type": "Movie", "ranking": 1 }, { "title": "The Godfather", "originalTitle": "", "year": "1972", "releaseDate": "19720324", "directors": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }], "writers": [{ "name": "Mario Puzo", "id": "nm0701374" }, { "name": "Francis Ford Coppola", "id": "nm0000338" }], "runtime": "175 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian", "Latin"], "genres": ["Crime", "Drama"], "plot": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.", "simplePlot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "idIMDB": "tt0068646", "urlIMDB": "http://www.imdb.com/title/tt0068646", "rating": "9.2", "metascore": "100", "rated": "R", "votes": "1,289,375", "type": "Movie", "ranking": 2 }, { "title": "The Godfather: Part II", "originalTitle": "", "year": "1974", "releaseDate": "19741220", "directors": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }], "writers": [{ "name": "Francis Ford Coppola", "id": "nm0000338" }, { "name": "Mario Puzo", "id": "nm0701374" }], "runtime": "202 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian", "Spanish", "Latin", "Sicilian"], "genres": ["Crime", "Drama"], "plot": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.", "simplePlot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", "idIMDB": "tt0071562", "urlIMDB": "http://www.imdb.com/title/tt0071562", "rating": "9.0", "metascore": "85", "rated": "R", "votes": "889,565", "type": "Movie", "ranking": 3 }, { "title": "The Dark Knight", "originalTitle": "", "year": "2008", "releaseDate": "20080718", "directors": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "writers": [{ "name": "Jonathan Nolan", "id": "nm0634300" }, { "name": "Christopher Nolan", "id": "nm0634240" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "UK"], "languages": ["English", "Mandarin"], "genres": ["Action", "Crime", "Drama", "Thriller"], "plot": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.", "simplePlot": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "idIMDB": "tt0468569", "urlIMDB": "http://www.imdb.com/title/tt0468569", "rating": "9.0", "metascore": "82", "rated": "PG-13", "votes": "1,864,101", "type": "Movie", "ranking": 4 }, { "title": "12 Angry Men", "originalTitle": "", "year": "1957", "releaseDate": "195704", "directors": [{ "name": "Sidney Lumet", "id": "nm0001486" }], "writers": [{ "name": "Reginald Rose", "id": "nm0741627" }, { "name": "Reginald Rose", "id": "nm0741627" }], "runtime": "96 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama"], "plot": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.", "simplePlot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", "idIMDB": "tt0050083", "urlIMDB": "http://www.imdb.com/title/tt0050083", "rating": "8.9", "metascore": "96", "rated": "NOT RATED", "votes": "518,411", "type": "Movie", "ranking": 5 }, { "title": "Schindler's List", "originalTitle": "", "year": "1993", "releaseDate": "19940204", "directors": [{ "name": "Steven Spielberg", "id": "nm0000229" }], "writers": [{ "name": "Thomas Keneally", "id": "nm0447745" }, { "name": "Steven Zaillian", "id": "nm0001873" }], "runtime": "195 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Hebrew", "German", "Polish"], "genres": ["Biography", "Drama", "History"], "plot": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.", "simplePlot": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", "idIMDB": "tt0108052", "urlIMDB": "http://www.imdb.com/title/tt0108052", "rating": "8.9", "metascore": "93", "rated": "R", "votes": "971,070", "type": "Movie", "ranking": 6 }, { "title": "Pulp Fiction", "originalTitle": "", "year": "1994", "releaseDate": "19941014", "directors": [{ "name": "Quentin Tarantino", "id": "nm0000233" }], "writers": [{ "name": "Quentin Tarantino", "id": "nm0000233" }, { "name": "Roger Avary", "id": "nm0000812" }], "runtime": "154 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Spanish", "French"], "genres": ["Crime", "Drama"], "plot": "Jules Winnfield () and Vincent Vega () are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (). Wallace has also asked Vincent to take his wife Mia () out a few days later when Wallace himself will be out of town. Butch Coolidge () is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.", "simplePlot": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "idIMDB": "tt0110912", "urlIMDB": "http://www.imdb.com/title/tt0110912", "rating": "8.9", "metascore": "94", "rated": "R", "votes": "1,477,058", "type": "Movie", "ranking": 7 }, { "title": "The Lord of the Rings: The Return of the King", "originalTitle": "", "year": "2003", "releaseDate": "20031217", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "201 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "New Zealand"], "languages": ["English", "Quenya", "Old English", "Sindarin"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits: Frodo and Sam reach Mordor in their quest to destroy the \"one ring\", while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.", "simplePlot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", "idIMDB": "tt0167260", "urlIMDB": "http://www.imdb.com/title/tt0167260", "rating": "8.9", "metascore": "94", "rated": "PG-13", "votes": "1,349,380", "type": "Movie", "ranking": 8 }, { "title": "The Good, the Bad and the Ugly", "originalTitle": "Il buono, il brutto, il cattivo", "year": "1966", "releaseDate": "19671229", "directors": [{ "name": "Sergio Leone", "id": "nm0001466" }], "writers": [{ "name": "Luciano Vincenzoni", "id": "nm0898812" }, { "name": "Sergio Leone", "id": "nm0001466" }], "runtime": "178 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Italy", "Spain", "West Germany"], "languages": ["Italian"], "genres": ["Western"], "plot": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ...", "simplePlot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.", "idIMDB": "tt0060196", "urlIMDB": "http://www.imdb.com/title/tt0060196", "rating": "8.9", "metascore": "90", "rated": "R", "votes": "559,440", "type": "Movie", "ranking": 9 }, { "title": "Fight Club", "originalTitle": "", "year": "1999", "releaseDate": "19991015", "directors": [{ "name": "David Fincher", "id": "nm0000399" }], "writers": [{ "name": "Chuck Palahniuk", "id": "nm0657333" }, { "name": "Jim Uhls", "id": "nm0880243" }], "runtime": "139 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Germany"], "languages": ["English"], "genres": ["Drama"], "plot": "A nameless first person narrator () attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler () he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.", "simplePlot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.", "idIMDB": "tt0137523", "urlIMDB": "http://www.imdb.com/title/tt0137523", "rating": "8.8", "metascore": "66", "rated": "R", "votes": "1,513,534", "type": "Movie", "ranking": 10 }, { "title": "The Lord of the Rings: The Fellowship of the Ring", "originalTitle": "", "year": "2001", "releaseDate": "20011219", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "178 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["New Zealand", "USA"], "languages": ["English", "Sindarin"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!", "simplePlot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.", "idIMDB": "tt0120737", "urlIMDB": "http://www.imdb.com/title/tt0120737", "rating": "8.8", "metascore": "92", "rated": "PG-13", "votes": "1,369,560", "type": "Movie", "ranking": 11 }, { "title": "Forrest Gump", "originalTitle": "", "year": "1994", "releaseDate": "19940706", "directors": [{ "name": "Robert Zemeckis", "id": "nm0000709" }], "writers": [{ "name": "Winston Groom", "id": "nm0343165" }, { "name": "Eric Roth", "id": "nm0744839" }], "runtime": "142 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama", "Romance"], "plot": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.", "simplePlot": "JFK, LBJ, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", "idIMDB": "tt0109830", "urlIMDB": "http://www.imdb.com/title/tt0109830", "rating": "8.8", "metascore": "82", "rated": "PG-13", "votes": "1,425,355", "type": "Movie", "ranking": 12 }, { "title": "Star Wars: Episode V - The Empire Strikes Back", "originalTitle": "", "year": "1980", "releaseDate": "19800620", "directors": [{ "name": "Irvin Kershner", "id": "nm0449984" }], "writers": [{ "name": "Leigh Brackett", "id": "nm0102824" }, { "name": "Lawrence Kasdan", "id": "nm0001410" }], "runtime": "124 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.", "simplePlot": "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.", "idIMDB": "tt0080684", "urlIMDB": "http://www.imdb.com/title/tt0080684", "rating": "8.8", "metascore": "81", "rated": "PG", "votes": "945,291", "type": "Movie", "ranking": 13 }, { "title": "Inception", "originalTitle": "", "year": "2010", "releaseDate": "20100716", "directors": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "writers": [{ "name": "Christopher Nolan", "id": "nm0634240" }], "runtime": "148 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "UK"], "languages": ["English", "Japanese", "French"], "genres": ["Action", "Adventure", "Sci-Fi", "Thriller"], "plot": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.", "simplePlot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.", "idIMDB": "tt1375666", "urlIMDB": "http://www.imdb.com/title/tt1375666", "rating": "8.8", "metascore": "74", "rated": "PG-13", "votes": "1,652,959", "type": "Movie", "ranking": 14 }, { "title": "The Lord of the Rings: The Two Towers", "originalTitle": "", "year": "2002", "releaseDate": "20021218", "directors": [{ "name": "Peter Jackson", "id": "nm0001392" }], "writers": [{ "name": "J.R.R. Tolkien", "id": "nm0866058" }, { "name": "Fran Walsh", "id": "nm0909638" }], "runtime": "179 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDY0NmI4ZjctN2VhZS00YzExLTkyZGItMTJhOTU5NTg4MDU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR1,0,182,268_AL_.jpg", "countries": ["USA", "New Zealand"], "languages": ["English", "Sindarin", "Old English"], "genres": ["Adventure", "Drama", "Fantasy"], "plot": "The continuing quest of Frodo and the Fellowship to destroy the One Ring. Frodo and Sam discover they are being followed by the mysterious Gollum. Aragorn, the Elf archer Legolas and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman's deadly spell.", "simplePlot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", "idIMDB": "tt0167261", "urlIMDB": "http://www.imdb.com/title/tt0167261", "rating": "8.7", "metascore": "88", "rated": "PG-13", "votes": "1,221,378", "type": "Movie", "ranking": 15 }, { "title": "One Flew Over the Cuckoo's Nest", "originalTitle": "", "year": "1975", "releaseDate": "19751119", "directors": [{ "name": "Milos Forman", "id": "nm0001232" }], "writers": [{ "name": "Lawrence Hauben", "id": "nm0369142" }, { "name": "Bo Goldman", "id": "nm0325743" }], "runtime": "133 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.", "simplePlot": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.", "idIMDB": "tt0073486", "urlIMDB": "http://www.imdb.com/title/tt0073486", "rating": "8.7", "metascore": "80", "rated": "R", "votes": "753,811", "type": "Movie", "ranking": 16 }, { "title": "Goodfellas", "originalTitle": "", "year": "1990", "releaseDate": "19900921", "directors": [{ "name": "Martin Scorsese", "id": "nm0000217" }], "writers": [{ "name": "Nicholas Pileggi", "id": "nm0683380" }, { "name": "Nicholas Pileggi", "id": "nm0683380" }], "runtime": "146 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Italian"], "genres": ["Biography", "Crime", "Drama"], "plot": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?", "simplePlot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his Mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.", "idIMDB": "tt0099685", "urlIMDB": "http://www.imdb.com/title/tt0099685", "rating": "8.7", "metascore": "89", "rated": "R", "votes": "813,718", "type": "Movie", "ranking": 17 }, { "title": "The Matrix", "originalTitle": "", "year": "1999", "releaseDate": "19990331", "directors": [{ "name": "Lana Wachowski", "id": "nm0905154" }, { "name": "Lilly Wachowski", "id": "nm0905152" }], "writers": [{ "name": "Lilly Wachowski", "id": "nm0905152" }, { "name": "Lana Wachowski", "id": "nm0905154" }], "runtime": "136 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Sci-Fi"], "plot": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.", "simplePlot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "idIMDB": "tt0133093", "urlIMDB": "http://www.imdb.com/title/tt0133093", "rating": "8.7", "metascore": "73", "rated": "R", "votes": "1,358,456", "type": "Movie", "ranking": 18 }, { "title": "Seven Samurai", "originalTitle": "Shichinin no samurai", "year": "1954", "releaseDate": "19561119", "directors": [{ "name": "Akira Kurosawa", "id": "nm0000041" }], "writers": [{ "name": "Akira Kurosawa", "id": "nm0000041" }, { "name": "Shinobu Hashimoto", "id": "nm0368074" }], "runtime": "207 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_UY268_CR4,0,182,268_AL_.jpg", "countries": ["Japan"], "languages": ["Japanese"], "genres": ["Adventure", "Drama"], "plot": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.", "simplePlot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.", "idIMDB": "tt0047478", "urlIMDB": "http://www.imdb.com/title/tt0047478", "rating": "8.7", "metascore": "98", "rated": "NOT RATED", "votes": "254,430", "type": "Movie", "ranking": 19 }, { "title": "Star Wars: Episode IV - A New Hope", "originalTitle": "Star Wars", "year": "1977", "releaseDate": "19770525", "directors": [{ "name": "George Lucas", "id": "nm0000184" }], "writers": [{ "name": "George Lucas", "id": "nm0000184" }], "runtime": "121 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.", "simplePlot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.", "idIMDB": "tt0076759", "urlIMDB": "http://www.imdb.com/title/tt0076759", "rating": "8.7", "metascore": "92", "rated": "PG", "votes": "1,017,491", "type": "Movie", "ranking": 20 }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/20 18:27:30" } };
	var dataComingSoon = { "data": { "comingSoon": [{ "date": "December 1 ", "movies": [{ "title": "Love Beats Rhymes", "originalTitle": "", "year": "2017", "releaseDate": "20171201", "directors": [{ "name": "RZA", "id": "nm0753526" }], "writers": [{ "name": "Nicole Asher", "id": "nm7357932" }, { "name": "Nicole Jefferson Asher", "id": "nm1777773" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjY2MzZjMDYtZmIzZS00MDliLWI2Y2ItN2E0ZWM0NDMwOWI4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama", "Musical"], "plot": "When struggling rapper Coco (Azealia Banks) enrolls in a poetry class, she thinks her rhymes will impress her teacher, Professor Dixon (Jill Scott). Instead, Dixon challenges Coco to seek real meaning in her lyrics, setting her on a journey of discovery that takes her through rap clubs and poetry slams, leading her to find her true voice - and true love - in this uplifting movie costarring Lucien Laviscount and Common.", "simplePlot": "When struggling rapper Coco (Azealia Banks) enrolls in a poetry class, she thinks her rhymes will impress her teacher, Professor Dixon (Jill Scott). Instead, Dixon challenges Coco to seek ... ", "idIMDB": "tt4686108", "urlIMDB": "http://www.imdb.com/title/tt4686108", "rating": "5.0", "metascore": "54", "rated": "R", "votes": "46", "type": "Movie" }, { "title": "Wonder Wheel", "originalTitle": "", "year": "2017", "releaseDate": "20171201", "directors": [{ "name": "Woody Allen", "id": "nm0000095" }], "writers": [{ "name": "Woody Allen", "id": "nm0000095" }], "runtime": "101 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NjAyMDIzMzleQTJeQWpwZ15BbWU4MDg1NTEwNjMy._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "On Coney Island in the 1950s, a lifeguard tells the story of a middle-aged carousel operator and his beleaguered wife.", "simplePlot": "On Coney Island in the 1950s, a lifeguard tells the story of a middle-aged carousel operator and his beleaguered wife.", "idIMDB": "tt5825380", "urlIMDB": "http://www.imdb.com/title/tt5825380", "rating": "6.0", "metascore": "49", "rated": "PG-13", "votes": "496", "type": "Movie" }, { "title": "The Tribes of Palos Verdes", "originalTitle": "", "year": "2017", "releaseDate": "20171201", "directors": [{ "name": "Brendan Malloy", "id": "nm0540139" }, { "name": "Emmett Malloy", "id": "nm0540148" }], "writers": [{ "name": "Karen Croner", "id": "nm0188733" }, { "name": "Karen Croner", "id": "nm0188733" }], "runtime": "104 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5NTMyNjUyM15BMl5BanBnXkFtZTgwMTQxODcwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "When the Mason family moves to idyllic Palos Verdes, Calif., the father, Phil, loves it but the mother, Sandy, feels out of place among the fake tans and tennis skirts. Phil and Sandy's daughter, Medina, is a loner and outcast at school, while her charismatic brother, Jim, is effortlessly popular. When Medina and Jim take up surfing, they must prove their right to share the waves with the tough Bayboys gang that monopolizes their stretch of beach.", "simplePlot": "When the situation at her idyllic Palos Verdes home turns volatile, young Medina attempts to surf her way to happiness.", "idIMDB": "tt1507571", "urlIMDB": "http://www.imdb.com/title/tt1507571", "rating": "5.8", "metascore": "52", "rated": "R", "votes": "90", "type": "Movie" }, { "title": "Gangster Land", "originalTitle": "In the Absence of Good Men", "year": "2017", "releaseDate": "201712", "directors": [{ "name": "Timothy Woodward Jr.", "id": "nm1914394" }], "writers": [{ "name": "Ian Patrick Williams", "id": "nm0930787" }], "runtime": "113 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTkzNzgzMGEtZjM1OS00MDVmLTk5ZmEtNjg0NjI1YWRlMGIwXkEyXkFqcGdeQXVyNDExMzMxNjE@._V1_UY268_CR5,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama"], "plot": "The story of America's most famous mobsters and their rise to power, GANGSTER LAND examines Al Capone's ascension through the eyes of his second in command, \"Machine Gun\" Jack McGurn. Once an amateur boxer, McGurn is lured into the Italian mafia after the murder of his stepfather. Upon joining, he rises swiftly through the ranks along with friend and eventual boss, Capone. As the Italian mob becomes the most lucrative criminal organization in the country, tensions build with \"Bugs\" Moran and the Irish mob which ignites a brutal gang war culminating with the St. Valentine's Day Massacre.", "simplePlot": "The story of America's most famous mobsters and their rise to power, GANGSTER LAND examines Al Capone's ascension through the eyes of his second in command, \"Machine Gun\" Jack McGurn. Once ... ", "idIMDB": "tt7241654", "urlIMDB": "http://www.imdb.com/title/tt7241654", "type": "Movie" }, { "title": "The Disaster Artist", "originalTitle": "", "year": "2017", "releaseDate": "20171208", "directors": [{ "name": "James Franco", "id": "nm0290556" }], "writers": [{ "name": "Scott Neustadter", "id": "nm2354099" }, { "name": "Michael H. Weber", "id": "nm2352210" }], "runtime": "103 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Comedy", "Drama"], "plot": "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.", "simplePlot": "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.", "idIMDB": "tt3521126", "urlIMDB": "http://www.imdb.com/title/tt3521126", "rating": "8.2", "metascore": "76", "rated": "R", "votes": "2,871", "type": "Movie" }, { "title": "The Shape of Water", "originalTitle": "", "year": "2017", "releaseDate": "20180221", "directors": [{ "name": "Guillermo del Toro", "id": "nm0868219" }], "writers": [{ "name": "Guillermo del Toro", "id": "nm0868219" }, { "name": "Vanessa Taylor", "id": "nm0961827" }], "runtime": "123 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "American Sign Language", "Russian"], "genres": ["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Thriller"], "plot": "From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fable, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg and Doug Jones.", "simplePlot": "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.", "idIMDB": "tt5580390", "urlIMDB": "http://www.imdb.com/title/tt5580390", "rating": "7.7", "metascore": "85", "rated": "R", "votes": "2,675", "type": "Movie" }, { "title": "Another WolfCop", "originalTitle": "", "year": "2017", "releaseDate": "20160925", "directors": [{ "name": "Lowell Dean", "id": "nm3366745" }], "writers": [{ "name": "Lowell Dean", "id": "nm3366745" }], "runtime": "82 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTdiOWMwYjMtOGMyZS00YTlhLWJjZDgtZTllYWY5MzBiZDg1XkEyXkFqcGdeQXVyMzExNTc4MDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Canada"], "languages": ["English"], "genres": ["Comedy", "Horror"], "plot": "Alcoholic werewolf cop Lou Garou springs into action when an eccentric businessman with evil intentions seduces Woodhaven's residents with a new brewery and hockey team in this outrageous horror-comedy sequel.", "simplePlot": "Alcoholic werewolf cop Lou Garou springs into action when an eccentric businessman with evil intentions seduces Woodhaven's residents with a new brewery and hockey team in this outrageous horror-comedy sequel.", "idIMDB": "tt4515762", "urlIMDB": "http://www.imdb.com/title/tt4515762", "rating": "5.0", "votes": "98", "type": "Movie" }, { "title": "Naples '44", "originalTitle": "", "year": "2016", "releaseDate": "20171129", "directors": [{ "name": "Francesco Patierno", "id": "nm1391054" }], "writers": [], "runtime": "80 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjFhNDQ1YzgtYzNlYy00MGJlLTg0YTctZDIxYzkwMDAwODIxXkEyXkFqcGdeQXVyNDY1NjM3OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["Italy"], "languages": ["Italian", "English"], "genres": ["Documentary", "War"], "plot": "A British Intelligence Officer in Naples at the end of World War II: Norman Lewis's acknowledged masterpiece about a war-torn city and its unforgettable humanity.", "simplePlot": "A British Intelligence Officer in Naples at the end of World War II: Norman Lewis's acknowledged masterpiece about a war-torn city and its unforgettable humanity.", "idIMDB": "tt3886508", "urlIMDB": "http://www.imdb.com/title/tt3886508", "rating": "6.6", "votes": "59", "type": "Movie" }, { "title": "Slumber", "originalTitle": "", "year": "2017", "releaseDate": "20171201", "directors": [{ "name": "Jonathan Hopkins", "id": "nm1721503" }], "writers": [{ "name": "Richard Hobley", "id": "nm5665420" }, { "name": "Jonathan Hopkins", "id": "nm1721503" }], "runtime": "84 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGJkYWRiODktZDk1Zi00YzE5LTg1YTEtNTlhNjEzNTYzYWM3XkEyXkFqcGdeQXVyODA4Nzc4MjQ@._V1_UY268_CR0,0,182,268_AL_.jpg", "countries": ["UK", "USA"], "languages": ["English"], "genres": ["Horror"], "plot": "A sleep doctor tries to protect a family from a demon that feeds on people in their nightmares.", "simplePlot": "A sleep doctor tries to protect a family from a demon that feeds on people in their nightmares.", "idIMDB": "tt5181852", "urlIMDB": "http://www.imdb.com/title/tt5181852", "rating": "5.0", "rated": "R", "votes": "171", "type": "Movie" }, { "title": "Drawing Home", "originalTitle": "", "year": "2016", "releaseDate": "20171201", "directors": [{ "name": "Markus Rupprecht", "id": "nm4338227" }], "writers": [{ "name": "Donna Logan", "id": "nm4731669" }, { "name": "Markus Rupprecht", "id": "nm4338227" }], "runtime": "112 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODkwMDgwNDA5OV5BMl5BanBnXkFtZTgwMTg4MjQzNDE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Canada", "USA"], "languages": ["English"], "genres": ["Adventure", "Drama", "Romance"], "plot": "Boston in the 1920s. A young East Coast debutante is dating the most eligible bachelor in the world, John D. Rockefeller III. Her future seems set: a dream life in the upper echelons of society. But when she least expects it, she meets a young painter from one of the most beautiful places on Earth, the Canadian Rocky Mountains. Their worlds are polar opposites. As their attraction turns their lives upside down, they soon face a universal question: Can you find \"home\" in another person? Inspired by a true story.", "simplePlot": "Boston in the 1920s. A young East Coast debutante is dating the most eligible bachelor in the world, John D. Rockefeller III. Her future seems set: a dream life in the upper echelons of ... ", "idIMDB": "tt2089664", "urlIMDB": "http://www.imdb.com/title/tt2089664", "rating": "6.3", "votes": "11", "type": "Movie" }, { "title": "Beauty and the Beast", "originalTitle": "", "year": "2017", "releaseDate": "20170317", "directors": [{ "name": "Bill Condon", "id": "nm0174374" }], "writers": [{ "name": "Stephen Chbosky", "id": "nm0154716" }, { "name": "Evan Spiliotopoulos", "id": "nm0818746" }], "runtime": "129 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Family", "Fantasy", "Musical", "Romance"], "plot": "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young prince, imprisoned in the form of a beast, can be freed only by true love. What may be his only opportunity arrives when he meets Belle, the only human girl to ever visit the castle since it was enchanted.", "simplePlot": "An adaptation of the fairy tale about a monstrous-looking prince and a young woman who fall in love.", "idIMDB": "tt2771200", "urlIMDB": "http://www.imdb.com/title/tt2771200", "rating": "7.3", "metascore": "65", "rated": "PG", "votes": "181,195", "type": "Movie" }, { "title": "Shadowman", "originalTitle": "", "year": "2017", "releaseDate": "20171201", "directors": [{ "name": "Oren Jacoby", "id": "nm0415007" }], "writers": [], "runtime": "81 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU0ZmZlMDEtY2M3ZC00MDI2LTliNTktN2IxZTA2ZWIyMDA1XkEyXkFqcGdeQXVyNjMwMjI2OTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Documentary", "Biography"], "plot": "Richard Hambleton was a founder of the street art movement before succumbing to drugs and homelessness. Rediscovered 20 years later, he gets a second chance. But will he take it?", "simplePlot": "Richard Hambleton was a founder of the street art movement before succumbing to drugs and homelessness. Rediscovered 20 years later, he gets a second chance. But will he take it?", "idIMDB": "tt6153962", "urlIMDB": "http://www.imdb.com/title/tt6153962", "rating": "7.3", "metascore": "77", "votes": "22", "type": "Movie" }] }, { "date": "December 8 ", "movies": [{ "title": "Just Getting Started", "originalTitle": "", "year": "2017", "releaseDate": "20171208", "directors": [{ "name": "Ron Shelton", "id": "nm0005421" }], "writers": [{ "name": "Ron Shelton", "id": "nm0005421" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NDdjNWEtMDVkMC00ODdiLTgyMmYtOWM0ZDRjOTU4MjJlXkEyXkFqcGdeQXVyNjM2MDMxMDk@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Comedy"], "plot": "A two-hander action comedy in the vein of Midnight Run (1988), about an ex-F.B.I. Agent (Tommy Lee Jones) and an ex-mob lawyer in the Witness Protection Program (Morgan Freeman) having to put aside their petty rivalry on the golf course to fend off a mob hit.", "simplePlot": "A two-hander action comedy in the vein of Midnight Run (1988), about an ex-F.B.I. Agent (Tommy Lee Jones) and an ex-mob lawyer in the Witness Protection Program (Morgan Freeman) having to put aside their petty rivalry on the golf course to fend off a mob hit.", "idIMDB": "tt5721088", "urlIMDB": "http://www.imdb.com/title/tt5721088", "rating": "5.0", "rated": "PG-13", "votes": "20", "type": "Movie" }, { "title": "Hollow in the Land", "originalTitle": "", "year": "2017", "releaseDate": "20171208", "directors": [{ "name": "Scooter Corkle", "id": "nm1785988" }], "writers": [{ "name": "Scooter Corkle", "id": "nm1785988" }], "runtime": "92 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDQ3MTAyZjMtZjVkMC00NzFmLWE2ZjYtZDkyYzlmZWU4NTAwXkEyXkFqcGdeQXVyMTg1MzYyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Canada"], "languages": ["English"], "genres": ["Drama", "Mystery", "Thriller"], "plot": "While the notorious Keith Miller remains locked behind bars for murder, his family is paying the price of a tainted name. High in these mountains, bad blood runs deep. A year after Keith's crime, a body is found in a nearby trailer park. Keith's son, Brandon, goes missing and becomes suspect number one. His headstrong sister Alison decides to take things into her own hands and track down her brother to clear his name before the cops get to him. Can she prove her brother's innocence when all the evidence suggests otherwise? The harder she looks, the more people turn up dead. And soon Alison becomes a suspect herself. In a town tucked away between a mountain range, secrets get buried deep. And if she's not careful, she'll get buried with them...", "simplePlot": "A woman with a troubled past sets out to find her missing brother.", "idIMDB": "tt4864624", "urlIMDB": "http://www.imdb.com/title/tt4864624", "rating": "7.1", "votes": "44", "type": "Movie" }, { "title": "I, Tonya", "originalTitle": "", "year": "2017", "releaseDate": "20171208", "directors": [{ "name": "Craig Gillespie", "id": "nm0318916" }], "writers": [{ "name": "Steven Rogers", "id": "nm0737216" }], "runtime": "119 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "Sport"], "plot": "Competitive ice skater rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.", "simplePlot": "Competitive ice skater rises amongst the ranks at the U.S. Figure Skating Championships, but her future in the activity is thrown into doubt when her ex-husband intervenes.", "idIMDB": "tt5580036", "urlIMDB": "http://www.imdb.com/title/tt5580036", "rating": "7.6", "metascore": "77", "rated": "R", "votes": "708", "type": "Movie" }, { "title": "November Criminals", "originalTitle": "", "year": "2017", "releaseDate": "20171107", "directors": [{ "name": "Sacha Gervasi", "id": "nm0315065" }], "writers": [{ "name": "Steven Knight", "id": "nm1140275" }, { "name": "Sacha Gervasi", "id": "nm0315065" }], "runtime": "85 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQwMzQ0MjYzMV5BMl5BanBnXkFtZTgwOTIwMTEwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery"], "plot": "The hero of the book is 18-year-old Addison Schacht, a Jewish high-school senior in Washington D.C.. The book is his response to the essay question, \"What are your best and worst qualities?\". He explains he has only bad qualities, as illustrated by the events of his senior year. They include collecting offensive jokes; dealing drugs to his classmates; and insulting teachers, fellow students, and his girlfriend's mother. But his classmate is killed, and he begins to investigate the death.", "simplePlot": "A teenager takes on his own investigation of a murder in Washington D.C.", "idIMDB": "tt3266284", "urlIMDB": "http://www.imdb.com/title/tt3266284", "rating": "5.3", "rated": "PG-13", "votes": "1,216", "type": "Movie" }, { "title": "The Shape of Water", "originalTitle": "", "year": "2017", "releaseDate": "20180221", "directors": [{ "name": "Guillermo del Toro", "id": "nm0868219" }], "writers": [{ "name": "Guillermo del Toro", "id": "nm0868219" }, { "name": "Vanessa Taylor", "id": "nm0961827" }], "runtime": "123 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "American Sign Language", "Russian"], "genres": ["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Thriller"], "plot": "From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fable, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg and Doug Jones.", "simplePlot": "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.", "idIMDB": "tt5580390", "urlIMDB": "http://www.imdb.com/title/tt5580390", "rating": "7.7", "metascore": "85", "rated": "R", "votes": "2,675", "type": "Movie" }, { "title": "Big Sonia", "originalTitle": "", "year": "2016", "releaseDate": "20161109", "directors": [{ "name": "Todd Soliday", "id": "nm3864927" }, { "name": "Leah Warshawski", "id": "nm2261681" }], "writers": [{ "name": "Eric Frith", "id": "nm1503477" }], "runtime": "93 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmFlNTg0MDctYWFjOC00ODIwLTgxYjktYmQzYTNkMzAzZmY4XkEyXkFqcGdeQXVyODA3NTE5MDU@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Documentary", "Family", "History"], "plot": "In the last store in a defunct shopping mall, 91-year-old Sonia Warshawski - great-grandmother, businesswoman, and Holocaust survivor - runs the tailor shop she's owned for more than thirty years. But when she's served an eviction notice, the specter of retirement prompts Sonia to revisit her harrowing past as a refugee and witness to genocide. A poignant story of generational trauma and healing, BIG SONIA also offers a laugh-out-loud-funny portrait of the power of love to triumph over bigotry, and the power of truth-telling to heal us all.", "simplePlot": "In the last store in a defunct shopping mall, 91-year-old Sonia Warshawski - great-grandmother, businesswoman, and Holocaust survivor - runs the tailor shop she's owned for more than thirty... ", "idIMDB": "tt3531176", "urlIMDB": "http://www.imdb.com/title/tt3531176", "rating": "7.6", "metascore": "68", "votes": "195", "type": "Movie" }, { "title": "The Disaster Artist", "originalTitle": "", "year": "2017", "releaseDate": "20171208", "directors": [{ "name": "James Franco", "id": "nm0290556" }], "writers": [{ "name": "Scott Neustadter", "id": "nm2354099" }, { "name": "Michael H. Weber", "id": "nm2352210" }], "runtime": "103 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Comedy", "Drama"], "plot": "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.", "simplePlot": "When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.", "idIMDB": "tt3521126", "urlIMDB": "http://www.imdb.com/title/tt3521126", "rating": "8.2", "metascore": "76", "rated": "R", "votes": "2,871", "type": "Movie" }] }, { "date": "December 15 ", "movies": [{ "title": "Ferdinand", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Carlos Saldanha", "id": "nm0757858" }], "writers": [{ "name": "Munro Leaf", "id": "nm0494943" }, { "name": "Robert Lawson", "id": "nm0493314" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "Ferdinand, is a a giant bull with a big heart. he is mistaken for a dangerous beast and is captured and torn from his home and family. Determined to return to his family, he rallies a misfit team for the ultimate adventure. Set in Spain, Ferdinand proves you can't judge a bull by its cover.", "simplePlot": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.", "idIMDB": "tt3411444", "urlIMDB": "http://www.imdb.com/title/tt3411444", "rated": "PG", "type": "Movie" }, { "title": "Star Wars: The Last Jedi", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Rian Johnson", "id": "nm0426059" }], "writers": [{ "name": "Rian Johnson", "id": "nm0426059" }, { "name": "George Lucas", "id": "nm0000184" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "simplePlot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "idIMDB": "tt2527336", "urlIMDB": "http://www.imdb.com/title/tt2527336", "rated": "PG-13", "type": "Movie" }, { "title": "Permanent", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Colette Burson", "id": "nm0123353" }], "writers": [{ "name": "Colette Burson", "id": "nm0123353" }], "runtime": "93 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjk4YzIzM2ItYWY0ZC00YmU0LTkwMTQtOTg0NTVjZTc5YTU2XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy"], "plot": "It's 1982, and the Dicksons (Jim, Jeanne, and Aurelie) move (are the new-comers) to a southern town where all the girls long for Farrah Fawcett-type curls (to match their back-woods accents/ and love to talk hair./ and obsess over their hair.) Pre-teen AURELIE begs her parents for a permanent, (known outside the south as a perm) hoping for life-changing curly waves but when they take her to a Beauty School instead of a salon to save money, disaster ensues. A bored Student-Beautician accidentally sets the timer for too long, and the perm ends up destroying Aurelie's already low-grade social life as well as her hair follicles. Aurelie is left as a gawky yet endearing young teenager trying to navigate junior high with what some kids call an afro, then throw things at her, from epithets to dodgeballs.", "simplePlot": "Permanent is a comedy about bad hair, adolescence, and socially awkward family members. It involves life-altering permanents and poorly-made toupees. Obstacles to daily survival ensue.", "idIMDB": "tt5933560", "urlIMDB": "http://www.imdb.com/title/tt5933560", "rating": "8.5", "rated": "PG-13", "votes": "96", "type": "Movie" }, { "title": "Beyond Skyline", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Liam O'Donnell", "id": "nm2880943" }], "writers": [{ "name": "Liam O'Donnell", "id": "nm2880943" }, { "name": "Liam O'Donnell", "id": "nm2880943" }], "runtime": "105 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMjM3MTA3NV5BMl5BanBnXkFtZTgwNDI0NjIzMzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Singapore", "Indonesia", "China", "UK", "Canada", "USA"], "languages": ["English", "Indonesian"], "genres": ["Action", "Adventure", "Horror", "Sci-Fi", "Thriller"], "plot": "A tough-as-nails detective embarks on a relentless pursuit to free his son from a nightmarish alien warship.", "simplePlot": "A tough-as-nails detective embarks on a relentless pursuit to free his son from a nightmarish alien warship.", "idIMDB": "tt1724970", "urlIMDB": "http://www.imdb.com/title/tt1724970", "rating": "5.9", "rated": "R", "votes": "637", "type": "Movie" }] }, { "date": "December 22 ", "movies": [{ "title": "The Greatest Showman", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Michael Gracey", "id": "nm1243905" }], "writers": [{ "name": "Jenny Bicks", "id": "nm0081081" }, { "name": "Bill Condon", "id": "nm0174374" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "Musical"], "plot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "simplePlot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "idIMDB": "tt1485796", "urlIMDB": "http://www.imdb.com/title/tt1485796", "rated": "PG", "type": "Movie" }, { "title": "Jumanji: Welcome to the Jungle", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Jake Kasdan", "id": "nm0440458" }], "writers": [{ "name": "Chris McKenna", "id": "nm0571344" }, { "name": "Chris McKenna", "id": "nm0571344" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.", "simplePlot": "Four teenagers discover an old video game console and are literally drawn into the game's jungle setting becoming the adult avatars they chose.", "idIMDB": "tt2283362", "urlIMDB": "http://www.imdb.com/title/tt2283362", "rated": "PG-13", "type": "Movie" }, { "title": "Pitch Perfect 3", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Trish Sie", "id": "nm2586324" }], "writers": [{ "name": "Kay Cannon", "id": "nm0134224" }, { "name": "Kay Cannon", "id": "nm0134224" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy", "Music"], "plot": "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.", "simplePlot": "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.", "idIMDB": "tt4765284", "urlIMDB": "http://www.imdb.com/title/tt4765284", "rated": "PG-13", "type": "Movie" }, { "title": "Downsizing", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Alexander Payne", "id": "nm0668247" }], "writers": [{ "name": "Alexander Payne", "id": "nm0668247" }, { "name": "Jim Taylor", "id": "nm0852591" }], "runtime": "135 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Norway"], "languages": ["English", "Spanish"], "genres": ["Comedy", "Drama", "Sci-Fi"], "plot": "\"Downsizing\" follows a kindly occupational therapist who undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.", "simplePlot": "A social satire in which a guy realizes he would have a better life if he were to shrink himself.", "idIMDB": "tt1389072", "urlIMDB": "http://www.imdb.com/title/tt1389072", "rating": "6.3", "metascore": "74", "votes": "1,319", "type": "Movie" }, { "title": "The Post", "originalTitle": "", "year": "2017", "releaseDate": "20180112", "directors": [{ "name": "Steven Spielberg", "id": "nm0000229" }], "writers": [{ "name": "Liz Hannah", "id": "nm2176283" }, { "name": "Josh Singer", "id": "nm1802857" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "History", "Thriller"], "plot": "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.", "simplePlot": "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.", "idIMDB": "tt6294822", "urlIMDB": "http://www.imdb.com/title/tt6294822", "rated": "PG-13", "type": "Movie" }, { "title": "Hostiles", "originalTitle": "", "year": "2017", "releaseDate": "20180105", "directors": [{ "name": "Scott Cooper", "id": "nm0178376" }], "writers": [{ "name": "Scott Cooper", "id": "nm0178376" }, { "name": "Donald E. Stewart", "id": "nm0829329" }], "runtime": "133 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTBlNGQ1NDctMjY0Yy00MjZlLWIxMzYtYjVmZmQzMTI5OTdiXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Cheyenne"], "genres": ["Adventure", "Drama", "Western"], "plot": "In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.", "simplePlot": "In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.", "idIMDB": "tt5478478", "urlIMDB": "http://www.imdb.com/title/tt5478478", "rating": "8.2", "metascore": "63", "rated": "R", "votes": "604", "type": "Movie" }, { "title": "Father Figures", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Lawrence Sher", "id": "nm0003394" }], "writers": [{ "name": "Justin Malen", "id": "nm3675159" }], "runtime": "113 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy"], "plot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "simplePlot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "idIMDB": "tt1966359", "urlIMDB": "http://www.imdb.com/title/tt1966359", "rated": "R", "type": "Movie" }, { "title": "Tiger Zinda Hai", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Ali Abbas Zafar", "id": "nm1804614" }], "writers": [{ "name": "Neelesh Misra", "id": "nm1305877" }, { "name": "Ali Abbas Zafar", "id": "nm1804614" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTk4OTA5N15BMl5BanBnXkFtZTgwMzUzNDIwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["India"], "languages": ["Hindi"], "genres": ["Action", "Adventure", "Thriller"], "plot": "Tiger & Zoya have been presumed dead by their respective countries. When all hell breaks lose in a foreign land which places civilian lives in harms way, Tiger & Zoya are called back into action for an impossible rescue mission to battle an international terrorist organisation. Will they succeed?", "simplePlot": "Indian agent Tiger and Pakistani agent Zoya join forces in the name of humanity, against the militant messiah Abu Usman. Tiger Zinda Hai is an espionage action drama that follows a daring rescue mission in Iraq.", "idIMDB": "tt5956100", "urlIMDB": "http://www.imdb.com/title/tt5956100", "type": "Movie" }, { "title": "Crooked House", "originalTitle": "", "year": "2017", "releaseDate": "20171121", "directors": [{ "name": "Gilles Paquet-Brenner", "id": "nm0660707" }], "writers": [{ "name": "Julian Fellowes", "id": "nm0271501" }, { "name": "Agatha Christie", "id": "nm0002005" }], "runtime": "115 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQ3NjI2MzU4OF5BMl5BanBnXkFtZTgwNTc5NDIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery"], "plot": "In Agatha Christie's most twisted tale, a spy-turned-private-detective is lured by his former lover to catch her grandfather's murderer before Scotland Yard exposes dark family secrets.", "simplePlot": "In Agatha Christie's most twisted tale, a spy-turned-private-detective is lured by his former lover to catch her grandfather's murderer before Scotland Yard exposes dark family secrets.", "idIMDB": "tt1869347", "urlIMDB": "http://www.imdb.com/title/tt1869347", "rating": "6.6", "rated": "PG-13", "votes": "2,209", "type": "Movie" }, { "title": "The Two of Us", "originalTitle": "Le vieil homme et l'enfant", "year": "1967", "releaseDate": "19680219", "directors": [{ "name": "Claude Berri", "id": "nm0001945" }], "writers": [{ "name": "Claude Berri", "id": "nm0001945" }, { "name": "Gérard Brach", "id": "nm0102722" }], "runtime": "90 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxOTAzMTQyOF5BMl5BanBnXkFtZTcwNTIyMTY0MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg", "countries": ["France"], "languages": ["French"], "genres": ["Comedy", "Drama"], "plot": "Claude is a Jew. Because of the risks of an arrest (France is occupied by the Nazis), his parents send him away to an elderly couple in the country. Pepe, the husband, is a Petain supporter and a anti-Semite, but he does not know about Claude's religion. The film is the story of their growing mutual affection.", "simplePlot": "Claude is a Jew. Because of the risks of an arrest (France is occupied by the Nazis), his parents send him away to an elderly couple in the country. Pepe, the husband, is a Petain supporter... ", "idIMDB": "tt0063771", "urlIMDB": "http://www.imdb.com/title/tt0063771", "rating": "7.8", "rated": "NOT RATED", "votes": "1,492", "type": "Movie" }, { "title": "Happy End", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Michael Haneke", "id": "nm0359734" }], "writers": [{ "name": "Michael Haneke", "id": "nm0359734" }], "runtime": "107 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOGUwYjU2NjEtMmRhYy00ODVmLWE1YmMtNzY1OGEzOWI4ZWRkXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["France", "Austria", "Germany"], "languages": ["French", "English"], "genres": ["Drama"], "plot": "Gradually succumbing to dementia, George Laurent, the octogenarian patriarch of the Laurents, an affluent upper-bourgeois family, is uncomfortably sharing his palatial manor in Calais, the heart of the infamous migrant jungle, with his twice-married son, Thomas, and Anne, his workaholic daughter who has taken over the family construction business. Divorced and frigid, Anne has to handle the impact of a disastrous workplace accident caused by her disappointing son Pierre's negligence, while at the same time, the urgent hospitalisation of Thomas' ex-wife from a mysterious poisoning, leads his sulky 13-year-old daughter, Ève, to live with her father and his new wife, Anais. Undoubtedly, in this family, everyone has a skeleton in the closet, and as the fates of the Laurents enmesh with insistent and ignoble desires, a peculiar and disturbing alliance will form. But in the end, some secrets are bigger than others.", "simplePlot": "A drama about a family set in Calais with the European refugee crisis as the backdrop.", "idIMDB": "tt5304464", "urlIMDB": "http://www.imdb.com/title/tt5304464", "rating": "7.0", "metascore": "75", "rated": "R", "votes": "2,393", "type": "Movie" }] }, { "date": "December 29 ", "movies": [{ "title": "All the Money in the World", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Ridley Scott", "id": "nm0000631" }], "writers": [{ "name": "David Scarpa", "id": "nm0769227" }, { "name": "John Pearson", "id": "nm0669301" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery", "Thriller"], "plot": "Rome, 1973. Masked men kidnap a teenage boy named (Charlie Plummer). His grandfather, (Christopher Plummer), is the richest man in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.", "simplePlot": "The story of the kidnapping of 16-year-old and the desperate attempt by his devoted mother to convince his billionaire grandfather to pay the ransom.", "idIMDB": "tt5294550", "urlIMDB": "http://www.imdb.com/title/tt5294550", "rated": "R", "type": "Movie" }, { "title": "In the Fade", "originalTitle": "Aus dem Nichts", "year": "2017", "releaseDate": "20171227", "directors": [{ "name": "Fatih Akin", "id": "nm0015359" }], "writers": [{ "name": "Fatih Akin", "id": "nm0015359" }, { "name": "Hark Bohm", "id": "nm0006737" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2NTkyZjEtMTYxNC00YTJmLTgzZjMtNTVmOTZmNDBhMjQ5XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Germany", "France"], "languages": ["English", "German"], "genres": ["Crime", "Drama"], "plot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "simplePlot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "idIMDB": "tt5723272", "urlIMDB": "http://www.imdb.com/title/tt5723272", "rating": "7.1", "metascore": "61", "rated": "R", "votes": "1,418", "type": "Movie" }, { "title": "Molly's Game", "originalTitle": "", "year": "2017", "releaseDate": "20180105", "directors": [{ "name": "Aaron Sorkin", "id": "nm0815070" }], "writers": [{ "name": "Molly Bloom", "id": "nm6591098" }, { "name": "Aaron Sorkin", "id": "nm0815070" }], "runtime": "140 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM3NzcxMzQyNl5BMl5BanBnXkFtZTgwNzUyNzcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama"], "plot": "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.", "simplePlot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.", "idIMDB": "tt4209788", "urlIMDB": "http://www.imdb.com/title/tt4209788", "rating": "7.1", "metascore": "74", "rated": "R", "votes": "1,090", "type": "Movie" }, { "title": "Phantom Thread", "originalTitle": "", "year": "2017", "releaseDate": "20171225", "directors": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "writers": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "runtime": "130 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "Set in the glamour of 1950's post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.", "simplePlot": "Set in 1950's London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.", "idIMDB": "tt5776858", "urlIMDB": "http://www.imdb.com/title/tt5776858", "rating": "9.0", "rated": "R", "votes": "152", "type": "Movie" }, { "title": "Film Stars Don't Die in Liverpool", "originalTitle": "", "year": "2017", "releaseDate": "20171116", "directors": [{ "name": "Paul McGuigan", "id": "nm0006476" }], "writers": [{ "name": "Matt Greenhalgh", "id": "nm0339043" }, { "name": "Peter Turner", "id": "nm0877805" }], "runtime": "105 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTE0MDQxODg2NTJeQTJeQWpwZ15BbWU4MDIwODkyMjQz._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "Romance"], "plot": "A romance sparks between a young actor and a Hollywood leading lady.", "simplePlot": "A romance sparks between a young actor and a Hollywood leading lady.", "idIMDB": "tt5711148", "urlIMDB": "http://www.imdb.com/title/tt5711148", "rating": "6.8", "metascore": "72", "rated": "R", "votes": "574", "type": "Movie" }] }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/26 10:18:38" } };
	var dataInTheatres = { "data": { "inTheaters": [{ "openingThisWeek": "Opening This Week", "movies": [{ "title": "All the Money in the World", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Ridley Scott", "id": "nm0000631" }], "writers": [{ "name": "David Scarpa", "id": "nm0769227" }, { "name": "John Pearson", "id": "nm0669301" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjY3Mjg0OTc1OF5BMl5BanBnXkFtZTgwNDU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Crime", "Drama", "Mystery", "Thriller"], "plot": "Rome, 1973. Masked men kidnap a teenage boy named (Charlie Plummer). His grandfather, (Christopher Plummer), is the richest man in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.", "simplePlot": "The story of the kidnapping of 16-year-old and the desperate attempt by his devoted mother to convince his billionaire grandfather to pay the ransom.", "idIMDB": "tt5294550", "urlIMDB": "http://www.imdb.com/title/tt5294550", "rated": "R", "type": "Movie" }, { "title": "In the Fade", "originalTitle": "Aus dem Nichts", "year": "2017", "releaseDate": "20171227", "directors": [{ "name": "Fatih Akin", "id": "nm0015359" }], "writers": [{ "name": "Fatih Akin", "id": "nm0015359" }, { "name": "Hark Bohm", "id": "nm0006737" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2NTkyZjEtMTYxNC00YTJmLTgzZjMtNTVmOTZmNDBhMjQ5XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["Germany", "France"], "languages": ["English", "German"], "genres": ["Crime", "Drama"], "plot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "simplePlot": "Katja's life collapses after the death of her husband and son in a bomb attack. After a time of mourning and injustice, Katja seeks revenge.", "idIMDB": "tt5723272", "urlIMDB": "http://www.imdb.com/title/tt5723272", "rating": "7.1", "metascore": "61", "rated": "R", "votes": "1,418", "type": "Movie" }, { "title": "Molly's Game", "originalTitle": "", "year": "2017", "releaseDate": "20180105", "directors": [{ "name": "Aaron Sorkin", "id": "nm0815070" }], "writers": [{ "name": "Molly Bloom", "id": "nm6591098" }, { "name": "Aaron Sorkin", "id": "nm0815070" }], "runtime": "140 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM3NzcxMzQyNl5BMl5BanBnXkFtZTgwNzUyNzcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama"], "plot": "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.", "simplePlot": "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.", "idIMDB": "tt4209788", "urlIMDB": "http://www.imdb.com/title/tt4209788", "rating": "7.1", "metascore": "74", "rated": "R", "votes": "1,090", "type": "Movie" }, { "title": "Film Stars Don't Die in Liverpool", "originalTitle": "", "year": "2017", "releaseDate": "20171116", "directors": [{ "name": "Paul McGuigan", "id": "nm0006476" }], "writers": [{ "name": "Matt Greenhalgh", "id": "nm0339043" }, { "name": "Peter Turner", "id": "nm0877805" }], "runtime": "105 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTE0MDQxODg2NTJeQTJeQWpwZ15BbWU4MDIwODkyMjQz._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "Romance"], "plot": "A romance sparks between a young actor and a Hollywood leading lady.", "simplePlot": "A romance sparks between a young actor and a Hollywood leading lady.", "idIMDB": "tt5711148", "urlIMDB": "http://www.imdb.com/title/tt5711148", "rating": "6.8", "metascore": "72", "rated": "R", "votes": "574", "type": "Movie" }, { "title": "Phantom Thread", "originalTitle": "", "year": "2017", "releaseDate": "20171225", "directors": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "writers": [{ "name": "Paul Thomas Anderson", "id": "nm0000759" }], "runtime": "130 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Drama"], "plot": "Set in the glamour of 1950's post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.", "simplePlot": "Set in 1950's London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.", "idIMDB": "tt5776858", "urlIMDB": "http://www.imdb.com/title/tt5776858", "rating": "9.0", "rated": "R", "votes": "152", "type": "Movie" }] }, { "inTheatersNow": "In Theaters Now", "movies": [{ "title": "Star Wars: The Last Jedi", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Rian Johnson", "id": "nm0426059" }], "writers": [{ "name": "Rian Johnson", "id": "nm0426059" }, { "name": "George Lucas", "id": "nm0000184" }], "runtime": "152 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Fantasy", "Sci-Fi"], "plot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "simplePlot": "Having taken her first steps into the Jedi world, Rey joins Luke Skywalker on an adventure with Leia, Finn and Poe that unlocks mysteries of the Force and secrets of the past.", "idIMDB": "tt2527336", "urlIMDB": "http://www.imdb.com/title/tt2527336", "rated": "PG-13", "type": "Movie" }, { "title": "Pitch Perfect 3", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Trish Sie", "id": "nm2586324" }], "writers": [{ "name": "Kay Cannon", "id": "nm0134224" }, { "name": "Kay Cannon", "id": "nm0134224" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy", "Music"], "plot": "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.", "simplePlot": "Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.", "idIMDB": "tt4765284", "urlIMDB": "http://www.imdb.com/title/tt4765284", "rated": "PG-13", "type": "Movie" }, { "title": "Ferdinand", "originalTitle": "", "year": "2017", "releaseDate": "20171215", "directors": [{ "name": "Carlos Saldanha", "id": "nm0757858" }], "writers": [{ "name": "Munro Leaf", "id": "nm0494943" }, { "name": "Robert Lawson", "id": "nm0493314" }], "runtime": "106 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "Ferdinand, is a a giant bull with a big heart. he is mistaken for a dangerous beast and is captured and torn from his home and family. Determined to return to his family, he rallies a misfit team for the ultimate adventure. Set in Spain, Ferdinand proves you can't judge a bull by its cover.", "simplePlot": "After Ferdinand, a bull with a big heart, is mistaken for a dangerous beast, he is captured and torn from his home. Determined to return to his family, he rallies a misfit team on the ultimate adventure.", "idIMDB": "tt3411444", "urlIMDB": "http://www.imdb.com/title/tt3411444", "rated": "PG", "type": "Movie" }, { "title": "The Greatest Showman", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Michael Gracey", "id": "nm1243905" }], "writers": [{ "name": "Jenny Bicks", "id": "nm0081081" }, { "name": "Bill Condon", "id": "nm0174374" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Biography", "Drama", "Musical"], "plot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "simplePlot": "Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.", "idIMDB": "tt1485796", "urlIMDB": "http://www.imdb.com/title/tt1485796", "rated": "PG", "type": "Movie" }, { "title": "Jumanji: Welcome to the Jungle", "originalTitle": "", "year": "2017", "releaseDate": "20171220", "directors": [{ "name": "Jake Kasdan", "id": "nm0440458" }], "writers": [{ "name": "Chris McKenna", "id": "nm0571344" }, { "name": "Chris McKenna", "id": "nm0571344" }], "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Action", "Adventure", "Comedy", "Family", "Fantasy"], "plot": "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.", "simplePlot": "Four teenagers discover an old video game console and are literally drawn into the game's jungle setting becoming the adult avatars they chose.", "idIMDB": "tt2283362", "urlIMDB": "http://www.imdb.com/title/tt2283362", "rated": "PG-13", "type": "Movie" }, { "title": "Father Figures", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Lawrence Sher", "id": "nm0003394" }], "writers": [{ "name": "Justin Malen", "id": "nm3675159" }], "runtime": "113 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English"], "genres": ["Comedy"], "plot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "simplePlot": "Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.", "idIMDB": "tt1966359", "urlIMDB": "http://www.imdb.com/title/tt1966359", "rated": "R", "type": "Movie" }, { "title": "Downsizing", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Alexander Payne", "id": "nm0668247" }], "writers": [{ "name": "Alexander Payne", "id": "nm0668247" }, { "name": "Jim Taylor", "id": "nm0852591" }], "runtime": "135 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA", "Norway"], "languages": ["English", "Spanish"], "genres": ["Comedy", "Drama", "Sci-Fi"], "plot": "\"Downsizing\" follows a kindly occupational therapist who undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.", "simplePlot": "A social satire in which a guy realizes he would have a better life if he were to shrink himself.", "idIMDB": "tt1389072", "urlIMDB": "http://www.imdb.com/title/tt1389072", "rating": "6.3", "metascore": "74", "votes": "1,319", "type": "Movie" }, { "title": "Coco", "originalTitle": "", "year": "2017", "releaseDate": "20171121", "directors": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Adrian Molina", "id": "nm2937122" }], "writers": [{ "name": "Lee Unkrich", "id": "nm0881279" }, { "name": "Jason Katz", "id": "nm0441735" }], "runtime": "109 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "Spanish"], "genres": ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical", "Mystery"], "plot": "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.", "simplePlot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to work out the mystery.", "idIMDB": "tt2380307", "urlIMDB": "http://www.imdb.com/title/tt2380307", "rating": "9.0", "metascore": "80", "rated": "PG", "votes": "19,347", "type": "Movie" }, { "title": "The Shape of Water", "originalTitle": "", "year": "2017", "releaseDate": "20180221", "directors": [{ "name": "Guillermo del Toro", "id": "nm0868219" }], "writers": [{ "name": "Guillermo del Toro", "id": "nm0868219" }, { "name": "Vanessa Taylor", "id": "nm0961827" }], "runtime": "123 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["USA"], "languages": ["English", "American Sign Language", "Russian"], "genres": ["Adventure", "Drama", "Fantasy", "Horror", "Romance", "Thriller"], "plot": "From master story teller, Guillermo del Toro, comes THE SHAPE OF WATER - an other-worldly fable, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg and Doug Jones.", "simplePlot": "An other-worldly fairy tale, set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment.", "idIMDB": "tt5580390", "urlIMDB": "http://www.imdb.com/title/tt5580390", "rating": "7.7", "metascore": "85", "rated": "R", "votes": "2,675", "type": "Movie" }, { "title": "Darkest Hour", "originalTitle": "", "year": "2017", "releaseDate": "20171222", "directors": [{ "name": "Joe Wright", "id": "nm0942504" }], "writers": [{ "name": "Anthony McCarten", "id": "nm0565026" }], "runtime": "125 min", "urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNDkyMTgzMV5BMl5BanBnXkFtZTgwNTQwNjg2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "countries": ["UK"], "languages": ["English"], "genres": ["Biography", "Drama", "History", "War"], "plot": "Within days of becoming Prime Minister of Great Britain, Winston Churchill (Gary Oldman) must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.", "simplePlot": "During the early days of World War II, the fate of Western Europe hangs on the newly-appointed British Prime Minister Winston Churchill, who must decide whether to negotiate with Hitler, or fight on against incredible odds.", "idIMDB": "tt4555426", "urlIMDB": "http://www.imdb.com/title/tt4555426", "rating": "6.1", "metascore": "73", "rated": "PG-13", "votes": "1,484", "type": "Movie" }] }] }, "about": { "version": "2.34.0", "serverTime": "2017/12/26 10:24:00" } };

	console.log('filmJS working', dataInTheatres);

	var body = document.querySelector('body');
	var listMovies = document.querySelector('.list-movies');
	listMovies.innerHTML = '';

	var url = window.location.href;
	console.log(url);
	var filmId = url.substring(url.indexOf('?') + 1);
	console.log(filmId);

	function hasFilm(film) {
		if (film.idIMDB == filmId) {
			return film;
		}
	}

	var tempArray = tempData.data.movies;

	if (!tempArray.some(hasFilm)) {
		tempArray = dataInTheatres.data.inTheaters[1].movies;
	}

	console.log('tempArray', tempArray);

	tempArray.forEach(function (film) {
		if (film.idIMDB == filmId) {
			renderFilm(film);
		}
	});

	function renderFilm(film) {
		var html = "\n\t\t<div class=\"film-info\">\n\t\t\t<img src=" + film.urlPoster + " alt=\"poster\">\n\t\t\t<h5>" + film.title + "</h5>\n\t\t\t<p>" + film.year + "</p>\n\t\t\t<p>Genre: " + film.genres.toString() + "</p>\n\t\t\t<p>Runtime: " + film.runtime + "</p>\n\t\t\t<p>Description: " + film.plot + "</p>\n\t\t</div>";
		listMovies.insertAdjacentHTML('beforeend', html);
	}
};

exports.default = filmJS;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map