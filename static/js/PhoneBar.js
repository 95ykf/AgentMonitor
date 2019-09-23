(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PhoneBar"] = factory();
	else
		root["PhoneBar"] = factory();
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/_core-js@2.6.9@core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/create.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/create.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-own-property-descriptor.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/set-prototype-of.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/_core-js@2.6.9@core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol/iterator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol/iterator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-own-property-descriptor.js");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/json/stringify.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/json/stringify.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/create.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/create.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-own-property-descriptor.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/get-prototype-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/object/set-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/object/set-prototype-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/promise.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/promise.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/_core-js@2.6.9@core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/_core-js@2.6.9@core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-instance.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_an-instance.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_array-includes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_array-includes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_classof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_classof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_defined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_defined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_dom-create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_dom-create.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_for-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_for-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/_core-js@2.6.9@core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_html.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_html.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_invoke.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_invoke.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iobject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iobject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array-iter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array-iter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-call.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-call.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-create.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-define.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-detect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-detect.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-step.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-step.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_meta.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_meta.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_microtask.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_microtask.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_new-promise-capability.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_new-promise-capability.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-create.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-create.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gops.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gpo.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-pie.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-pie.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-sap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_object-sap.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_perform.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_perform.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_promise-resolve.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_promise-resolve.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine-all.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine-all.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-proto.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_set-proto.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-species.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_set-species.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_shared-key.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_shared.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_species-constructor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_species-constructor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_string-at.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_string-at.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_task.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_task.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-integer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-integer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-length.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-length.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-primitive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_user-agent.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_user-agent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-define.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-define.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-ext.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.create.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.create.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-prototype-of.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.get-prototype-of.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.set-prototype-of.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.set-prototype-of.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.promise.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.promise.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.symbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.finally.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.finally.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.try.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es7.promise.try.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/_core-js@2.6.9@core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.9@core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/_core-js@2.6.9@core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.9@core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./src/AgentApi.js":
/*!*************************!*\
  !*** ./src/AgentApi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _model_Agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/Agent */ "./src/model/Agent.js");






/**
 * 坐席与CTI的操作API
 */

var AgentApi = function () {

    /**
     * @param agent {Agent} 坐席信息
     * @param agentConfig {AgentConfig} 坐席配置信息
     * @param linePool {LinePool} 线路信息
     * @param connection {CTIConnection} 服务器连接
     */
    function AgentApi(_ref) {
        var agent = _ref.agent,
            agentConfig = _ref.agentConfig,
            linePool = _ref.linePool,
            connection = _ref.connection;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AgentApi);

        this.agent = agent;
        this.agentConfig = agentConfig;
        this.linePool = linePool;
        this.connection = connection;
    }

    /**
     * 取消订阅
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AgentApi, [{
        key: "unsubscribe",
        value: function unsubscribe() {
            var data = { "messageId": 263, "thisDN": this.agent.thisDN };
            this.connection.send(data);
        }

        /**
         * 坐席登录
         */

    }, {
        key: "agentLogin",
        value: function agentLogin() {
            if (this.agentConfig.isPhoneTakeAlong) return;
            var data = {
                "messageId": 100,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "thisQueues": this.agent.thisQueues
            };
            this.connection.send(data);
        }

        /**
         * 坐席退出
         */

    }, {
        key: "agentLogout",
        value: function agentLogout() {
            if (this.agentConfig.isPhoneTakeAlong) return;
            var data = { "messageId": 103, "thisDN": this.agent.thisDN, "agentID": this.agent.agentID };
            this.connection.send(data);
        }

        /**
         * 坐席修改状态为非就绪状态
         *
         * @param reasonCode 非就绪原因码 NotReadyReason
         */

    }, {
        key: "agentNotReady",
        value: function agentNotReady(reasonCode) {
            if (this.agentConfig.isPhoneTakeAlong || reasonCode === 1 || reasonCode === 6) return;
            if (this.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_4__["default"].OFFLINE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('未登入，不能切换状态');
                return;
            }
            var data = {
                "messageId": 102,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "reasonCode": reasonCode
            };
            this.connection.send(data);
        }

        /**
         * 坐席设置为就绪状态
         */

    }, {
        key: "agentReady",
        value: function agentReady() {
            if (this.agentConfig.isPhoneTakeAlong) return;
            if (this.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_4__["default"].OFFLINE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('未登入，不能切换状态');
                return;
            }
            var data = {
                "messageId": 101,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID
            };
            this.connection.send(data);
        }

        /**
         * 手动拨号
         * @param dest
         * @param id
         * @param type 呼叫类型，参考CALLTYPE常量
         * @param module  手动回拨
         * @param call_id  原电话 callId
         * @param queue
         * @param newTransPara
         * @param taskId
         * @param numberId
         * @returns {boolean}
         */

    }, {
        key: "makeCall",
        value: function makeCall(dest, id, type, module, call_id, queue, newTransPara, taskId, numberId) {
            if (!dest) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("号码不能为空");
                return false;
            }
            if (dest.length === 9 && dest.charAt(0) === '1' && dest.indexOf(this.agent.tid) !== 0) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("号码不符合规范");
                return false;
            }
            if (this.agent.deviceState === _constants__WEBPACK_IMPORTED_MODULE_3__["DeviceState"].UNREGISTERED) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("请登陆SIP话机，并刷新坐席状态");
                return false;
            }
            if (this.agentConfig.isPhoneTakeAlong) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("手机随行下，不能在页面拨打电话");
                return false;
            }
            if (this.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_4__["default"].OFFLINE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前为登出状态，请先登入");
                return false;
            }
            if (this.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_4__["default"].READY) {
                this.agentNotReady(1);
            }
            if (this.linePool.getWorkingLineCount() !== 0) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前已在通话中！");
                return false;
            }

            if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].checkPhoneNumber(dest)) {
                dest = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].trim(dest);
                var data = {
                    "messageId": 200, "thisDN": this.agent.thisDN, "agentID": this.agent.agentID, "otherDN": dest,
                    "attachDatas": { "id": id, "type": type, "cti-agentID": this.agent.agentID }
                };
                if (queue != null) data["thisQueue"] = queue;
                if (module != null) data["attachDatas"]["module"] = module;
                if (call_id != null) data["attachDatas"]["member_uuid"] = call_id;
                if (queue != null) data["attachDatas"]["ocb_queue"] = queue;
                if (newTransPara != null) data["attachDatas"]["transPara"] = newTransPara;
                if (taskId != null) data["attachDatas"]["taskId"] = taskId;
                if (numberId != null) data["attachDatas"]["numberId"] = numberId;
                return this.connection.send(data);
            } else {
                return false;
            }
        }

        /**
         * 接听电话
         */

    }, {
        key: "answerCall",
        value: function answerCall() {
            var line = this.linePool.getCurrentLine();
            if (line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].RINGING && line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].DIALING) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("没有可接听的电话！");
                return false;
            } else {
                var data = {
                    "messageId": 201,
                    "thisDN": this.agent.thisDN,
                    "agentID": this.agent.agentID,
                    "callID": line.callId
                };
                this.connection.send(data);
            }
        }

        /**
         * 保持呼叫
         */

    }, {
        key: "holdCall",
        value: function holdCall() {
            var line = this.linePool.getCurrentLine();
            if (line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].TALKING) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前不在通话中，无法保持通话");
            } else {
                var data = {
                    "messageId": 204,
                    "thisDN": this.agent.thisDN,
                    "agentID": this.agent.agentID,
                    "callID": line.callId
                };
                this.connection.send(data);
            }
        }

        /**
         * 接回保持的呼叫
         * @returns {boolean}
         */

    }, {
        key: "retrieveCall",
        value: function retrieveCall() {
            var _this = this;

            var line = this.linePool.getCurrentLine();
            if (line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].HELD) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路非保持状态，无需接回");
                return false;
            }
            // 接回保持的通话前结束掉其他线路通话
            this.linePool.lines.forEach(function (otherLine) {
                if (otherLine.id !== line.id && otherLine.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].IDLE) {
                    _this.releaseCall(otherLine.id);
                }
            });

            this.connection.send({
                "messageId": 217,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "callID": line.callId
            });
        }

        /**
         * 挂断电话
         * @param lineId 要挂断的线路ID
         * @returns {boolean}
         */

    }, {
        key: "releaseCall",
        value: function releaseCall(lineId) {
            if (typeof lineId === 'undefined' || lineId == null) {
                lineId = this.linePool.getCurrentLineId();
            }
            var line = this.linePool.getLine(lineId);
            if (null == line) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("线路ID错误");
            } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].IDLE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路没有电话,无需挂断");
            } else {
                return this.connection.send({
                    "messageId": 203,
                    "thisDN": this.agent.thisDN,
                    "agentID": this.agent.agentID,
                    "callID": line.callId
                });
            }
        }

        // cti.forceReleaseCall() {
        //     var lineId = cti.LinePool.getInstance().getTalkingLineId();
        //     checkLineId(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var callId = line.callId;
        //     var callType = line.callType;
        //     var data = {"messageId":515,"thisDN":thisDN,"callID":callId,"callType":callType};
        //     cti.handleVoiceEvent(2, $.toJSON(data));
        // };
        // cti.redirectCall(lineId, targetDN) {
        //     checkLineId(lineId);
        //     if(checkPhoneNumber(targetDN)){
        //         targetDN = $.trim(targetDN);
        //         var thisDN = cti.Agent.getInstance().getThisDN();
        //         var line = cti.LinePool.getInstance().getLine(lineId);
        //         var callId = line.callId;
        //         var data = {"messageId":212,"thisDN":thisDN,"callID":callId,"otherDN":targetDN};
        //         cti.send(data);
        //     }
        // };

        /**
         * 两步转接-咨询
         * @param targetDN
         */

    }, {
        key: "consult",
        value: function consult(targetDN) {
            var line = this.linePool.getCurrentLine();
            if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].TALKING && (line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].INBOUND || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].OUTBOUND || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].ORDERCALLBACK || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].MANUALCALLBACK || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].PREDICT || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].PREVIEW)) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].checkPhoneNumber(targetDN)) {
                    var data = {
                        "messageId": 221,
                        "thisDN": this.agent.thisDN,
                        "agentID": this.agent.agentID,
                        "callID": line.callId,
                        "otherDN": targetDN,
                        "attachDatas": { "cti-agentID": this.agent.agentID }
                    };
                    this.connection.send(data);
                }
            } else if (line.callType !== _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].INBOUND) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路不是呼入，不能转接");
            } else {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路未在通话，不能转接");
            }
        }

        /**
         * 咨询后转出
         */

    }, {
        key: "completeTransfer",
        value: function completeTransfer() {
            var line = this.linePool.getCurrentLine();
            var consultLine = this.linePool.getConsultLine();
            if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].HELD) {
                var data = {
                    "messageId": 223,
                    "thisDN": this.agent.thisDN,
                    "agentID": this.agent.agentID,
                    "callID": consultLine.callId,
                    "consultCallID": line.callId
                };
                this.connection.send(data);
            }
        }
    }, {
        key: "singleStepTransfer",


        /**
         * 呼叫转移
         * @param targetDN {String} 目标坐席工号或者外线号码
         */
        value: function singleStepTransfer(targetDN) {
            var line = this.linePool.getCurrentLine();
            if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].TALKING && (line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].INBOUND || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].OUTBOUND || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].ORDERCALLBACK || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].MANUALCALLBACK || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].PREDICT || line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].PREVIEW)) {
                var phoneNumber = line.phoneNumber;
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].checkPhoneNumber(targetDN)) {
                    var data = {
                        "messageId": 215,
                        "thisDN": this.agent.thisDN,
                        "agentID": this.agent.agentID,
                        "callID": line.callId,
                        "otherDN": targetDN,
                        "phoneNumber": phoneNumber
                    };
                    this.connection.send(data);
                }
            } else if (line.callType !== _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].INBOUND) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路不是呼入，不能转接");
            } else {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路未在通话中，不能转接");
            }
        }

        // cti.initiateConference(lineId, targetDN) {
        //     checkLineId(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var callId = line.callId;
        //     var data = {"messageId":220,"thisDN":thisDN,"agentID":agentID,"callID":callId,"otherDN":targetDN};
        //     cti.send(data);
        // };
        // cti.completeConference() {
        //     var callId = "";//todo.
        //     var consultCallID = "";
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":222,"thisDN":thisDN,"agentID":agentID,"callID":callId,"consultCallID":consultCallID};
        //     cti.send(data);
        // };
        // cti.singleStepConference(lineId, targetDN) {
        //     checkLineId(lineId);
        //     if(checkPhoneNumber(targetDN)){
        //         targetDN = $.trim(targetDN);
        //         var thisDN = cti.Agent.getInstance().getThisDN();
        //         var agentID =  cti.Agent.getInstance().getAgentID();
        //         var line = cti.LinePool.getInstance().getLine(lineId);
        //         var callId = line.callId;
        //         var data = {"messageId":214,"thisDN":thisDN,"agentID":agentID,"callID":callId,"otherDN":targetDN};
        //         cti.send(data);
        //     }
        // };
        //

        /**
         * 三方通话
         * @param phoneNumber
         * @returns {boolean}
         */

    }, {
        key: "threeWayCall",
        value: function threeWayCall(phoneNumber) {
            var line = this.linePool.getCurrentLine();
            var thisExten = this.agent.thisDN.substring(5);

            if (phoneNumber.length > 12 || phoneNumber.length < 4 || phoneNumber.length === 9 && phoneNumber.charAt(0) === '1' && phoneNumber.indexOf(this.agent.tid) !== 0) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("号码不符合规范");
                return false;
            }
            if (phoneNumber.length === 4 && this.agent.tid !== '0') phoneNumber = this.agent.tid + phoneNumber;

            if (phoneNumber === line.phoneNumber) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage(phoneNumber + "\u5DF2\u7ECF\u5904\u4E8E" + thisExten + "\u7684\u4F1A\u8BAE\u4E2D");
            } else if (phoneNumber === thisExten) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("\u60A8\u5DF2\u7ECF\u5904\u4E8E" + thisExten + "\u7684\u4F1A\u8BAE\u4E2D");
            } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].TALKING && line.callType !== _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].THREEWAY) {
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].checkPhoneNumber(phoneNumber)) {
                    var data = {
                        "messageId": 225,
                        "thisDN": this.agent.thisDN,
                        "agentID": this.agent.agentID,
                        "callID": line.callId,
                        "otherDN": phoneNumber
                    };
                    this.connection.send(data);
                }
            } else if (line.callType === _constants__WEBPACK_IMPORTED_MODULE_3__["CallType"].THREEWAY) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("\u60A8\u5DF2\u7ECF\u5904\u4E8E\u4F1A\u8BAE" + line.phoneNumber + "\u4E2D");
            } else {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前线路未在通话中，不能会议");
            }
        }

        /**
         * 结束三方通话
         * @param callId
         */

    }, {
        key: "releaseThreeWayCall",
        value: function releaseThreeWayCall(callId) {
            var data = {
                "messageId": 226,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "callID": callId
            };
            this.connection.send(data);
        }
    }, {
        key: "startAgentsMonitoring",


        //
        // cti.sendDTMF(lineId, digit) {
        //     checkLineId(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var callId = line.callId;
        //     var data = {"messageId":250,"thisDN":thisDN,"callID":callId,"dtmfDigit":digit};
        //     cti.send(data);
        // };
        // cti.updateUserData(lineId, userDataKeys, userDataValues) {
        //     checkLineId(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var callId = line.callId;
        //     var userData = "";//todo.
        //     var data = {"messageId":232,"thisDN":thisDN,"callID":callId,"userData":userData};
        //     cti.send(data);
        // };
        // cti.deleteUserData(lineId, key) {
        //     checkLineId(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var callId = line.callId;
        //     var data = {"messageId":231,"thisDN":thisDN,"callID":callId,"key":key};
        //     cti.send(data);
        // };
        // cti.getUserData() {
        //     //todo.
        // };

        value: function startAgentsMonitoring(agentDNs) {
            var data = {
                "messageId": 266,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "agentDNS": agentDNs
            };
            this.connection.send(data);
        }
    }, {
        key: "stopAgentsMonitoring",
        value: function stopAgentsMonitoring(agentDNs) {
            var data = {
                "messageId": 267,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "agentDNS": agentDNs
            };
            this.connection.send(data);
        }
    }, {
        key: "agentReadyM",
        value: function agentReadyM(agentID) {
            var data = { "messageId": 101, "thisDN": this.agent.thisDN, "agentID": agentID };
            this.connection.send(data);
        }
    }, {
        key: "agentNotReadyM",
        value: function agentNotReadyM(agentID, reasonCode) {
            var data = { "messageId": 102, "thisDN": this.agent.thisDN, "agentID": agentID, "reasonCode": reasonCode };
            this.connection.send(data);
        }
    }, {
        key: "agentLogoutM",
        value: function agentLogoutM(agentID) {
            var data = { "messageId": 103, "thisDN": this.agent.thisDN, "agentID": agentID };
            this.connection.send(data);
        }
    }, {
        key: "agentLoginM",
        value: function agentLoginM(agentID) {
            var data = { "messageId": 100, "thisDN": this.agent.thisDN, "agentID": agentID };
            this.connection.send(data);
        }
        // cti.startOcbNumbersMonitoring(){
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":275,"thisDN":thisDN,"agentID":agentID};
        //     cti.send(data);
        // };
        // cti.stopOcbNumbersMonitoring(){
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":276,"thisDN":thisDN,"agentID":agentID};
        //     cti.send(data);
        // };
        //
        // cti.cancelOcbNumbers(nums){
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":277,"thisDN":thisDN,"agentID":agentID,"nums":nums};
        //     cti.send(data);
        // };
        // cti.digitCollections(ivr_id) {
        //     var lineId = cti.LinePool.getInstance().getCurrentLineId(),
        //         lineDt = cti.LinePool.getInstance().getLine(lineId),
        //         callId = lineDt.callId;
        //     if(callId==''){
        //         showMessage('当前线路不在通话中');
        //     }else{
        //         var thisDN = cti.Agent.getInstance().getThisDN(),
        //             agentID= cti.Agent.getInstance().getAgentID(),
        //             data   = {"messageId":227,"thisDN":thisDN,"agentID":agentID,"ivrID":ivr_id,"state":"begin","callID":callId};
        //         cti.send(data)
        //     }
        // };
        // cti.endCollections(ivr_id) {
        //     var lineId = cti.LinePool.getInstance().getCurrentLineId(),
        //         lineDt = cti.LinePool.getInstance().getLine(lineId),
        //         callId = lineDt.callId;
        //     if(callId==''){
        //         showMessage('当前线路不在通话中');
        //     }else{
        //         var thisDN = cti.Agent.getInstance().getThisDN(),
        //             agentID= cti.Agent.getInstance().getAgentID(),
        //             data   = {"messageId":227,"thisDN":thisDN,"agentID":agentID,"ivrID":ivr_id,"state":"end","callID":callId};
        //         cti.send(data)
        //     }
        // };

        /**
         * 监听
         * @param callId
         * @param targetDN
         */

    }, {
        key: "monitorCall",
        value: function monitorCall(callId, targetDN) {
            var data = {
                "messageId": 265,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "callID": callId,
                "otherDN": targetDN
            };
            this.connection.send(data);
        }

        /**
         * 强插
         * @param callId
         * @param targetDN
         */

    }, {
        key: "doInterruptCall",
        value: function doInterruptCall(callId, targetDN) {
            var line = this.linePool.getCurrentLine();
            if (line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].IDLE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前状态不能强插,请先挂断电话！");
            } else {
                var data = {
                    "messageId": 265,
                    "thisDN": this.agent.thisDN,
                    "agentID": this.agent.agentID,
                    "callID": callId,
                    "otherDN": targetDN,
                    "whisper": "1"
                };
                this.connection.send(data);
            }
        }

        /**
         * 拦截
         * @param callId
         * @param targetDN
         * @param phoneNumber
         */

    }, {
        key: "substitute",
        value: function substitute(callId, targetDN, phoneNumber) {
            var line = this.linePool.getCurrentLine();
            if (line.lineState !== _constants__WEBPACK_IMPORTED_MODULE_3__["LineState"].IDLE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage("当前状态不能拦截电话,请先挂断电话！");
            } else {
                var data = {
                    "messageId": 215,
                    "thisDN": targetDN,
                    "agentID": this.agent.agentID,
                    "otherDN": this.agent.thisDN,
                    "callID": callId,
                    "phoneNumber": phoneNumber
                };
                this.connection.send(data);
            }
        }

        /**
         * 挂断
         * @param callId
         * @param targetDN
         */

    }, {
        key: "releaseAgentCall",
        value: function releaseAgentCall(callId, targetDN) {
            var data = {
                "messageId": 203,
                "thisDN": targetDN,
                "agentID": this.agent.agentID,
                "callID": callId
            };
            this.connection.send(data);
        }
        // cti.startDialing(tenantID, outboundID, dialMode) {
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var data = {"messageId":1001,"agentID":agentID,"thisDN":thisDN,"tenantID":tenantID,"outboundID":outboundID,"dialMode":dialMode};
        //     cti.send(data);
        // };
        // cti.pauseDialing(tenantId, campaignId, dialMode) {
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var data = {"messageId":1002,"agentID":agentID,"thisDN":thisDN,"tenantID":tenantId,"outboundID":campaignId,"dialMode":dialMode};
        //     cti.send(data);
        // };
        // cti.stopDialing(tenantId, campaignId, dialMode) {
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var data = {"messageId":1003,"agentID":agentID,"thisDN":thisDN,"tenantID":tenantId,"outboundID":campaignId,"dialMode":dialMode};
        //     cti.send(data);
        // };
        // cti.updateCampaignRatio(tenantId,campaignId, ratio) {
        //     var agentID =  cti.Agent.getInstance().getAgentID();
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var data = {"messageId":1009,"agentID":agentID,"thisDN":thisDN,"tenantID":tenantId,"outboundID":campaignId,"ratio":ratio,"autoRatio":0};
        //     cti.send(data);
        // };
        // cti.playVoice =function(path) {
        //     var lineId = cti.LinePool.getInstance().getCurrentLineId();
        //     var line = cti.LinePool.getInstance().getLine(lineId);
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var data = {"messageId":301,"thisDN":thisDN,"uuid":line.callId, "filePath":path};
        //     cti.send(data);
        // };
        // cti.getStatisticAgent(reportType,startDate,endDate,agent_ids) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         'messageId':2000,
        //         'thisDN':thisDN,
        //         "agentID":agentID,
        //         'statisticMetric': {
        //             'filter': agent_ids,
        //             'statisticType': reportType,
        //             'timeRange': startDate,
        //             'timeRange2': endDate
        //         },
        //         'statisticObject': {
        //         }};
        //     cti.send(data);
        // };
        // cti.getStatisticMonth(reportType,month,agent_ids) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         'messageId':2002,
        //         'thisDN':thisDN,
        //         "agentID":agentID,
        //         'statisticMetric': {
        //             'filter': agent_ids,
        //             'statisticType': reportType,
        //             'timeRange': month,
        //             'timeRange2': month
        //         },
        //         'statisticObject': {
        //         }};
        //     cti.send(data);
        // };
        // cti.getStatisticForOutbound(startTime,endTime,filter,type) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         "messageId": 1011,
        //         "referenceID": 1000,
        //         "agentID":agentID,
        //         "statisticMetric": {
        //             "filter": filter,
        //             "statisticType": type,
        //             "timeProfile": "year",
        //             "timeRange": startTime,
        //             "timeRange2": endTime
        //         },
        //         "statisticObject": {
        //             "objectId": "kpi",
        //             "statisticObjectType": type,
        //             "tenantPassword": ""
        //         },
        //         "campaignId": 0,
        //         "thisDN": thisDN
        //     };
        //     cti.send(data);
        // };
        // cti.getStatisticHistoryDetail(reportType,startDate,endDate,filter,pageSize,currentPage) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         'messageId':2001,
        //         'thisDN':thisDN,
        //         'agentID':agentID,
        //         'statisticMetric': {
        //             'filter': filter,
        //             'statisticType': reportType,
        //             'timeRange': startDate,
        //             'timeRange2': endDate,
        //             'pageSize': pageSize,
        //             'currentPage': currentPage
        //         },
        //         'statisticObject': {
        //         }};
        //     cti.send(data);
        // };
        // cti.campaignLoadByFileName(campaignId,repeat) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":1012,"thisDN":thisDN,"agentID":agentID,"campaignId":campaignId,"repeat":repeat};
        //     cti.send(data);
        // };
        // cti.campaignLoadByCId(cId,campaignId,repeat) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":1018,"thisDN":thisDN,"agentID":agentID,"cId":cId,"campaignId":campaignId,"repeat":repeat};
        //     cti.send(data);
        // };
        // cti.retrieveCampaign(campaignId,retrieveCampaignId,retrieveType) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":1013,"thisDN":thisDN,"agentID":agentID,"campaignId":campaignId,"retrieveCampaignId":retrieveCampaignId,"retrieveType":retrieveType};
        //     cti.send(data);
        // };
        // cti.getCallLoss(startDate,endDate,filter,pageSize,currentPage) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         'messageId':1015,
        //         'thisDN':thisDN,
        //         'agentID':agentID,
        //         'filter': filter,
        //         'startDate': startDate,
        //         'endDate': endDate,
        //         'pageSize': pageSize,
        //         'currentPage': currentPage
        //     };
        //     cti.send(data);
        // };
        // cti.getRecordList(startDate,endDate,resultType,qc,agentIDs,dst,pageSize,currentPage) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {
        //         'messageId':3001,
        //         'thisDN':thisDN,
        //         'agentID':agentID,
        //         'attachDatas': {
        //             'resultType': resultType,
        //             'qc': qc,
        //             'agentIDs': agentIDs,
        //             'startTime': startDate,
        //             'endTime': endDate,
        //             'dst':dst,
        //             'page': currentPage,
        //             'offSet': pageSize
        //         }};
        //     cti.send(data);
        // }
        // cti.sysSettingsUpdate(destDN, eventName, msg) {
        //     var thisDN = cti.Agent.getInstance().getThisDN();
        //     var agentID = cti.Agent.getInstance().getAgentID();
        //     var data = {"messageId":300,"thisDN":thisDN,"agentID":agentID,"destDN":destDN,"eventName":eventName,"msg":msg};
        //     cti.send(data);
        // };

        /**
         * 获取可监控的坐席信息
         */

    }, {
        key: "requestMonitorMembers",
        value: function requestMonitorMembers() {
            var data = {
                "messageId": _constants__WEBPACK_IMPORTED_MODULE_3__["MessageID"].RequestMonitorAgentList,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID
            };
            this.connection.send(data);
        }
    }]);

    return AgentApi;
}();

/* harmony default export */ __webpack_exports__["default"] = (AgentApi);

/***/ }),

/***/ "./src/CTIConnection.js":
/*!******************************!*\
  !*** ./src/CTIConnection.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _utils_Ajax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/Ajax */ "./src/utils/Ajax.js");
/* harmony import */ var _AgentApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AgentApi */ "./src/AgentApi.js");
/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/Log */ "./src/utils/Log.js");
/* harmony import */ var _WebSocketBaseClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WebSocketBaseClient */ "./src/WebSocketBaseClient.js");
/* harmony import */ var _model_Agent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/Agent */ "./src/model/Agent.js");














/**
 * 基于jWebSocket js库实现与话务平台的websocket通信
 * 定义了与消息服务器建立链接、关闭、监听消息（详细见文件中注释部分）.
 * WEB端请求的事件都在此向消息服务器请求，消息服务器返回和推送的事件也在这里处理。
 * @extends WebSocketBaseClient
 */

var CTIConnection = function (_WebSocketBaseClient) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CTIConnection, _WebSocketBaseClient);

    /**
     *
     * @param wsUrl {String}  websocket地址
     * @param agent {Agent}
     * @param agentConfig {AgentConfig}
     * @param linePool {LinePool}
     */
    function CTIConnection(_ref) {
        var _ref$wsUrl = _ref.wsUrl,
            wsUrl = _ref$wsUrl === undefined ? 'ws://127.0.0.1:8787/websocket' : _ref$wsUrl,
            agent = _ref.agent,
            agentConfig = _ref.agentConfig,
            linePool = _ref.linePool;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CTIConnection);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (CTIConnection.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(CTIConnection)).call(this, { 'url': wsUrl, automaticOpen: false }));

        _this.agent = agent;
        _this.linePool = linePool;
        _this.agentConfig = agentConfig;
        _this.agentApi = new _AgentApi__WEBPACK_IMPORTED_MODULE_9__["default"]({
            agent: agent,
            agentConfig: agentConfig,
            linePool: linePool,
            connection: _this
        });

        _this._loginTimeout = null;
        _this.loggedIn = false;
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CTIConnection, [{
        key: "login",
        value: function login() {
            var _this2 = this;

            // 定义一个定时器，当接收到消息后清除此任务，如果在20秒内没有清除，将触发connectTimeout事件
            this._loginTimeout = window.setTimeout(function () {
                if (_this2.agentConfig.isPhoneTakeAlong === false) {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage("网速过慢，软电话加载未成功，请刷新重试");
                }
            }, 20000);

            var data = this.loggedIn ? {
                "type": "ping",
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "messageId": ""
            } : {
                "messageId": 100,
                "thisDN": this.agent.thisDN,
                "agentID": this.agent.agentID,
                "thisQueues": this.agent.thisQueues,
                "defaultQueue": this.agent.defaultQueue
            };

            this.sendMessage({
                type: "login",
                thisDN: this.agent.thisDN,
                agentID: this.agent.agentID,
                message: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
            });
        }
    }, {
        key: "doClose",
        value: function doClose() {
            if (this.isOpened()) {
                this.stopKeepAlive();
                this.close();
            }
        }
    }, {
        key: "send",
        value: function send(data) {
            if (this.isOpened()) {
                var lToken = {
                    thisDN: this.agent.thisDN,
                    agentID: this.agent.agentID,
                    type: "request",
                    message: babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
                };
                _utils_Log__WEBPACK_IMPORTED_MODULE_10__["default"].log(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(lToken), 'input');
                this.sendMessage(lToken);
                return true;
            } else {
                _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage("没有与CTI服务器建立连接！");
                return false;
            }
        }

        /**
         * 覆写父类方法，当startKeepAlive时会默认调用此方法
         */

    }, {
        key: "ping",
        value: function ping() {
            if (this.isOpened()) {
                this.sendMessage({
                    type: "ping",
                    thisDN: this.agent.thisDN,
                    agentID: this.agent.agentID,
                    message: ""
                });
            }
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            this.stopKeepAlive();
        }
    }, {
        key: "onOpen",
        value: function onOpen(event) {
            var _this3 = this;

            this.startKeepAlive(false);
            //登录成功，且不在通话中，自动置闲(服务器响应为5S)
            if (this.agentConfig.autoIdleWhenLogin) {
                window.setTimeout(function () {
                    if (_this3.isOpened() && _this3.loggedIn && _constants__WEBPACK_IMPORTED_MODULE_7__["DeviceState"].REGISTERED === _this3.agent.deviceState && _model_Agent__WEBPACK_IMPORTED_MODULE_12__["default"].BUSY === _this3.agent.state) {
                        _this3.agentApi.agentReady();
                    }
                }, 5000);
            }

            this.sendMessage({
                type: "welcome",
                thisDN: "",
                agentID: "",
                message: ""
            });
        }

        /**
         * 协议消息转换
         * @param event  event.data是服务器返回数据，其中messageId代表消息类型与常量MessageID对应。
         *               坐席相关事件中event.data.deviceState与常量DeviceState对应。
         *
         */

    }, {
        key: "onMessage",
        value: function onMessage(event) {
            var _this4 = this;

            var data = JSON.parse(event.data);
            if (data == null) return;
            if (data.messageId !== _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventWelcome && data.messageId !== _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventPong) _utils_Log__WEBPACK_IMPORTED_MODULE_10__["default"].log(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data), 'output');
            // CTI握手成功
            if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventWelcome) {
                this.login();
            }
            if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentLogin) {
                window.clearTimeout(this._loginTimeout);
                this.loggedIn = true;
            }
            if (!this.loggedIn && data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentReady) {
                this.agentApi.agentLogout();
                _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage("异常就绪,已自动请求登出！");
                return;
            }

            this.emit(data.messageId.toString(), data);

            if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentLogin || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentNotReady || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentReady) {
                // 不处理通话和振铃事件，由LinePool监控这两种状态；其他状态当存在通话时收到通知不处理；
                if (data.reasonCode !== 1 && data.reasonCode !== 6 && this.linePool.getWorkingLineCount() === 0) {
                    this.agent.setAgentState(_model_Agent__WEBPACK_IMPORTED_MODULE_12__["default"].convertToLocalState(data.state, data.reasonCode));
                }
                this.agent.setDeviceState(data.deviceState);
            } else if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAgentLogout) {
                this.agent.setAgentState(_model_Agent__WEBPACK_IMPORTED_MODULE_12__["default"].convertToLocalState(data.state, data.reasonCode));
                this.agent.setDeviceState(data.deviceState);
                this.loggedIn = false;
                _utils_Ajax__WEBPACK_IMPORTED_MODULE_8__["default"].send({
                    url: '/application/is_pta/' + data.thisDN,
                    type: 'get'
                });
            } else if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventDialing || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventRinging || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventEstablished || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventReleased || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventHeld || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventRetrieved || data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventAbandoned) {
                this.linePool.updateLineDate(data);
            } else if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventError) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage(data.errorMessage);
            } else if (data.messageId === _constants__WEBPACK_IMPORTED_MODULE_7__["MessageID"].EventLinkDisconnected && data.reason === 1) {
                if (data.reason === 1) {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage("该坐席已经从其它地方登入，请退出!");
                    setTimeout(function () {
                        _this4.emit('linkDisconnected');
                    }, 3000);
                } else {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].showMessage("与服务器的连接已断开!");
                }
            }
        }
    }]);

    return CTIConnection;
}(_WebSocketBaseClient__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CTIConnection);

/***/ }),

/***/ "./src/SoftPhoneConnection.js":
/*!************************************!*\
  !*** ./src/SoftPhoneConnection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");









/**
 * 内置软电话交互JS
 */

var SoftPhoneConnection = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SoftPhoneConnection, _EventEmitter);

    function SoftPhoneConnection() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$urls = _ref.urls,
            urls = _ref$urls === undefined ? ['ws://127.0.0.1:57712', "ws://127.0.0.1:58823"] : _ref$urls,
            _ref$protocols = _ref.protocols,
            protocols = _ref$protocols === undefined ? [] : _ref$protocols,
            serverUrl = _ref.serverUrl,
            username = _ref.username,
            password = _ref.password,
            _ref$automaticOpen = _ref.automaticOpen,
            automaticOpen = _ref$automaticOpen === undefined ? false : _ref$automaticOpen,
            _ref$pingInterval = _ref.pingInterval,
            pingInterval = _ref$pingInterval === undefined ? 20000 : _ref$pingInterval;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SoftPhoneConnection);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (SoftPhoneConnection.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(SoftPhoneConnection)).call(this));

        _this.wsInfo = urls.map(function (v, i) {
            return { 'ws': null, 'url': v, 'enabled': true };
        });
        _this.protocols = protocols;

        _this.serverUrl = serverUrl;
        _this.username = username;
        _this.password = password;

        /** 实例化后是否自动打开 */
        _this.automaticOpen = automaticOpen;
        /** ping时间间隔 */
        _this.pingInterval = pingInterval;

        _this.currentWS = null;
        _this.sessionid = null;
        _this.pingcount = 0;
        _this.pingTimeHandler = null;

        if (_this.automaticOpen) {
            _this.open();
        }
        return _this;
    }

    /**
     * 获取第一个可用的wsInfo，如果无可用URL返回null
     *
     * @returns {*}
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SoftPhoneConnection, [{
        key: 'getFirstEnabledWSInfo',
        value: function getFirstEnabledWSInfo() {
            for (var i = 0, len = this.wsInfo.length; i < len; i++) {
                if (this.wsInfo[i].enabled) {
                    return this.wsInfo[i];
                }
            }
            return null;
        }

        /**
         * 获取url地址相同的wsInfo，如果无匹配结果返回null
         *
         * @returns {*}
         */

    }, {
        key: 'getWSInfoByPath',
        value: function getWSInfoByPath(path) {
            for (var i = 0, len = this.wsInfo.length; i < len; i++) {
                if (path.indexOf(this.wsInfo[i].url) > -1) {
                    return this.wsInfo[i];
                }
            }
            return null;
        }

        /**
         * 初始化
         */

    }, {
        key: 'open',
        value: function open() {
            var _this2 = this;

            var wsInfo = this.getFirstEnabledWSInfo();
            // 如果没有可用url，弹出提示并不在创建连接
            if (null == wsInfo) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].showMessage('内置话机异常,请检查本地服务是否被禁用，或重新安装软电话！');
                return false;
            }
            this.currentWS = null;
            this.currentWS = new WebSocket(wsInfo.url, this.protocols);
            this.currentWS.onopen = function (aEvent) {
                _this2.onOpen(aEvent, wsInfo);
            };
            this.currentWS.onclose = function (aEvent) {
                _this2.onDisconnected(aEvent, wsInfo);
            };
            this.currentWS.onmessage = function (aEvent) {
                _this2.onMessage(aEvent, wsInfo);
            };
            this.currentWS.onerror = function (aEvent) {
                _this2.onError(aEvent, wsInfo);
            };

            wsInfo.ws = this.currentWS;

            return this;
        }
    }, {
        key: 'onOpen',
        value: function onOpen(aEvent) {
            console.log(aEvent, 'sipphone onConnect', this.getFirstEnabledWSInfo());
            this.doLogin(this.serverUrl, this.username, this.password);
        }
    }, {
        key: 'onDisconnected',
        value: function onDisconnected(aEvent, wsInfo) {
            console.log('sipphone closed');
            this.stopPing();
            wsInfo.ws = null;
        }
    }, {
        key: 'onMessage',
        value: function onMessage(message) {
            var token = JSON.parse(message.data);
            if (token.action === 'ping') {
                this.pingcount = 0;
            } else if (token.action === 'login') {
                if (this.username === token.data.user && token.data.result === 1) {
                    this.sessionid = token.data.sid;
                    this.startPing();
                    this.emit('loginSuccess', token);
                } else {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].showMessage("软电话注册失败！");
                }
            } else if (token.action === "close" && token.data.user === this.username) {
                this.stopPing();
                _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].showMessage('软电话已退出！');
            }
            this.emit(token.action, token.data);
        }
    }, {
        key: 'onError',
        value: function onError(aEvent) {
            var wsInfo = this.getWSInfoByPath(aEvent.currentTarget.url);
            wsInfo.enabled = false;
            // 重试
            this.open();
        }
    }, {
        key: 'isOpened',
        value: function isOpened() {
            return this.currentWS && this.currentWS.readyState === WebSocket.OPEN;
        }
    }, {
        key: 'doClose',
        value: function doClose() {
            if (this.isOpened()) {
                this.send({
                    "action": "close",
                    "sid": this.sessionid,
                    "data": { "user": this.username }
                });
                this.currentWS.close();
            }
        }
    }, {
        key: 'send',
        value: function send(msg) {
            if (this.isOpened()) {
                this.sessionid || (msg['sid'] = this.sessionid);
                return this.currentWS.send(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(msg));
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        }
    }, {
        key: 'doLogin',
        value: function doLogin(addr, username, password) {
            if (this.isOpened()) {
                this.send({
                    'action': 'login',
                    'data': { 'addr': addr, 'user': username, 'password': password }
                });
            } else {
                this.open();
            }
        }

        /**
         * 发送ping消息
         */

    }, {
        key: 'sendPing',
        value: function sendPing() {
            this.send({
                'action': 'ping',
                'sid': this.sessionid
            });
            this.pingcount = this.pingcount + 1;
            if (this.pingcount > 3) {
                this.stopPing();
                console.log('reLoad');
                this.open();
            }
        }

        /**
         * 开始ping
         */

    }, {
        key: 'startPing',
        value: function startPing() {
            var _this3 = this;

            this.pingTimeHandler = setTimeout(function () {
                _this3.startPing();
            }, this.pingInterval);
            this.sendPing();
        }

        /**
         * 结束ping
         */

    }, {
        key: 'stopPing',
        value: function stopPing() {
            clearTimeout(this.pingTimeHandler);
            this.pingcount = 0;
        }
    }]);

    return SoftPhoneConnection;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (SoftPhoneConnection);

/***/ }),

/***/ "./src/WebSocketBaseClient.js":
/*!************************************!*\
  !*** ./src/WebSocketBaseClient.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js");
/* harmony import */ var babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_js_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/js/reconnecting-websocket */ "./src/assets/js/reconnecting-websocket.js");
/* harmony import */ var _assets_js_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_js_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_7__);









/**
 * websocket客户端基础类，用于子类继承
 */

var WebSocketBaseClient = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WebSocketBaseClient, _EventEmitter);

    function WebSocketBaseClient() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$url = _ref.url,
            url = _ref$url === undefined ? 'ws://127.0.0.1:57712' : _ref$url,
            _ref$protocols = _ref.protocols,
            protocols = _ref$protocols === undefined ? [] : _ref$protocols,
            _ref$automaticOpen = _ref.automaticOpen,
            automaticOpen = _ref$automaticOpen === undefined ? true : _ref$automaticOpen,
            _ref$keepAliveInterva = _ref.keepAliveInterval,
            keepAliveInterval = _ref$keepAliveInterva === undefined ? 20000 : _ref$keepAliveInterva,
            _ref$debug = _ref.debug,
            debug = _ref$debug === undefined ? false : _ref$debug;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, WebSocketBaseClient);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (WebSocketBaseClient.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(WebSocketBaseClient)).call(this));

        _this.url = url;
        _this.protocols = protocols;

        /** 实例化后是否自动打开 */
        _this.automaticOpen = automaticOpen;
        /** 心跳包时间间隔 */
        _this.keepAliveInterval = keepAliveInterval;

        _this.ws = null;
        _this.status = _this.debug = debug;

        if (_this.automaticOpen) {
            _this.open();
        }
        return _this;
    }

    /**
     * 浏览器是否支持WebSocket
     * @returns {boolean} 是否支持
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(WebSocketBaseClient, [{
        key: 'open',


        /**
         * 初始化
         */
        value: function open() {
            var _this2 = this;

            if (!this.ws) {
                this.ws = new _assets_js_reconnecting_websocket__WEBPACK_IMPORTED_MODULE_7___default.a(this.url, this.protocols);
                this.ws.onopen = function (aEvent) {
                    _this2.onOpen(aEvent);
                };
                this.ws.onclose = function (aEvent) {
                    _this2.onClose(aEvent);
                };
                this.ws.onmessage = function (aEvent) {
                    _this2.onMessage(aEvent);
                };
                this.ws.onerror = function (aEvent) {
                    _this2.onError(aEvent);
                };
            }
        }
    }, {
        key: 'onOpen',
        value: function onOpen(aEvent) {}
    }, {
        key: 'onClose',
        value: function onClose(aEvent) {}
    }, {
        key: 'onMessage',
        value: function onMessage(message) {}
    }, {
        key: 'onError',
        value: function onError(aEvent) {}
    }, {
        key: 'isOpened',
        value: function isOpened() {
            return this.ws && this.ws.readyState === WebSocket.OPEN;
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.ws) {
                this.ws.close();
                this.ws = null;
            }
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(aToken) {
            if (this.ws) {
                return this.ws.send(babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(aToken));
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        }

        /**
         * 发送ping消息
         */

    }, {
        key: 'ping',
        value: function ping() {}

        /**
         * 开始一个连接保持定时器
         */

    }, {
        key: 'startKeepAlive',
        value: function startKeepAlive() {
            var _this3 = this;

            var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            // 如果有一个正在运行的定时器
            if (this.keepAliveTimeout) {
                this.stopKeepAlive();
            }
            // 如果没有open
            if (!this.isOpened()) {
                // TODO: 这里添加合理的返回结果
                return;
            }
            if (immediate) {
                // 如果立即执行，直接发送一次ping指令
                this.ping();
            }
            // 初始化一个定时器
            this.keepAliveTimeout = setInterval(function () {
                if (_this3.isOpened()) {
                    _this3.ping();
                } else {
                    _this3.stopKeepAlive();
                }
            }, this.keepAliveInterval);
        }

        /**
         * 结束一个连接保持定时器
         */

    }, {
        key: 'stopKeepAlive',
        value: function stopKeepAlive() {
            // TODO: 这里添加合理的返回结果
            if (this.keepAliveTimeout) {
                clearInterval(this.keepAliveTimeout);
                this.keepAliveTimeout = null;
            }
        }
    }], [{
        key: 'browserSupportsWebSockets',
        value: function browserSupportsWebSockets() {
            return window.WebSocket !== null && window.WebSocket !== undefined;
        }
    }]);

    return WebSocketBaseClient;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (WebSocketBaseClient);

/***/ }),

/***/ "./src/assets/js/ie9.js":
/*!******************************!*\
  !*** ./src/assets/js/ie9.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ie9兼容classList的add、remove、toggle、contains、item等方法
if (!("classList" in document.documentElement)) {
    Object.defineProperty(HTMLElement.prototype, 'classList', {
        get: function get() {
            var self = this;
            function update(fn) {
                return function (value) {
                    var classes = self.className.split(/\s+/g),
                        index = classes.indexOf(value);

                    fn(classes, index, value);
                    self.className = classes.join(" ");
                };
            }

            return {
                add: update(function (classes, index, value) {
                    if (!~index) classes.push(value);
                }),

                remove: update(function (classes, index) {
                    if (~index) classes.splice(index, 1);
                }),

                toggle: update(function (classes, index, value) {
                    if (~index) classes.splice(index, 1);else classes.push(value);
                }),

                contains: function contains(value) {
                    return !!~self.className.split(/\s+/g).indexOf(value);
                },

                item: function item(i) {
                    return self.className.split(/\s+/g)[i] || null;
                }
            };
        }
    });
}

/***/ }),

/***/ "./src/assets/js/reconnecting-websocket.js":
/*!*************************************************!*\
  !*** ./src/assets/js/reconnecting-websocket.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MIT License:
//
// Copyright (c) 2010-2012, Joe Walnes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This behaves like a WebSocket in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 *   ws = new WebSocket('ws://....');
 * you can replace with:
 *   ws = new ReconnectingWebSocket('ws://....');
 *
 * The event stream will typically look like:
 *  onconnecting
 *  onopen
 *  onmessage
 *  onmessage
 *  onclose // lost connection
 *  onconnecting
 *  onopen  // sometime later...
 *  onmessage
 *  onmessage
 *  etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 *
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 *
 * Latest version: https://github.com/joewalnes/reconnecting-websocket/
 * - Joe Walnes
 *
 * Syntax
 * ======
 * var socket = new ReconnectingWebSocket(url, protocols, options);
 *
 * Parameters
 * ==========
 * url - The url you are connecting to.
 * protocols - Optional string or array of protocols.
 * options - See below
 *
 * Options
 * =======
 * Options can either be passed upon instantiation or set after instantiation:
 *
 * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
 *
 * or
 *
 * var socket = new ReconnectingWebSocket(url);
 * socket.debug = true;
 * socket.reconnectInterval = 4000;
 *
 * debug
 * - Whether this instance should log debug messages. Accepts true or false. Default: false.
 *
 * automaticOpen
 * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
 *
 * reconnectInterval
 * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
 *
 * maxReconnectInterval
 * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
 *
 * reconnectDecay
 * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
 *
 * timeoutInterval
 * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
 *
 */
(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            /** The binary type, possible values 'blob' or 'arraybuffer', default 'blob'. */
            binaryType: 'blob'
        };
        if (!options) {
            options = {};
        }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open', function (event) {
            self.onopen(event);
        });
        eventTarget.addEventListener('close', function (event) {
            self.onclose(event);
        });
        eventTarget.addEventListener('connecting', function (event) {
            self.onconnecting(event);
        });
        eventTarget.addEventListener('message', function (event) {
            self.onmessage(event);
        });
        eventTarget.addEventListener('error', function (event) {
            self.onerror(event);
        });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(s, false, false, args);
            return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);
            ws.binaryType = this.binaryType;

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function () {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function (event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function (event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function () {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function (event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        };

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function (data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function (code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function () {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function (event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function (event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function (event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function (event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function (event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});

/***/ }),

/***/ "./src/constants/AgentState.js":
/*!*************************************!*\
  !*** ./src/constants/AgentState.js ***!
  \*************************************/
/*! exports provided: AgentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentState", function() { return AgentState; });
/**
 * 坐席状态常量
 */
var AgentState = {
    OFFLINE: 0,
    READY: 1,
    NOTREADY: 2
};

/***/ }),

/***/ "./src/constants/CallType.js":
/*!***********************************!*\
  !*** ./src/constants/CallType.js ***!
  \***********************************/
/*! exports provided: CallType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallType", function() { return CallType; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


var _CallType$dict;

/**
 * 表示电话的方向
 */
var CallType = {
    /*未知类型:电话方向未知，一般是程序出错导致*/
    UNKNOWN: 0,
    /*内部电话*/
    INTERNAL: 1,
    /*客户呼入:外部客户来电*/
    INBOUND: 2,
    /*手动呼出:坐席外拨去电*/
    OUTBOUND: 3,
    /*电话转接:坐席内部咨询电话*/
    CONSULT: 4,
    /*多方通话*/
    THREEWAY: 5,
    /*预约回呼*/
    ORDERCALLBACK: 6,
    /*电话回访*/
    MANUALCALLBACK: 7,
    /*预测外呼*/
    PREDICT: 8,
    /*精确预览:预览外呼*/
    PREVIEW: 9,
    /*网页电话:预留*/
    WEBCALL: 10,
    /*电话监听*/
    MONITOR: 11
};
/* 状态字典 */
CallType.dict = (_CallType$dict = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.UNKNOWN, '未知类型'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.INTERNAL, '内部通话'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.INBOUND, '客户呼入'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.OUTBOUND, '手动呼出'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.CONSULT, '电话转接'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.THREEWAY, '多方通话'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.ORDERCALLBACK, '预约回呼'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.MANUALCALLBACK, '电话回访'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.PREDICT, '预测外呼'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.PREVIEW, '精确预览'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.WEBCALL, '网页电话'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CallType$dict, CallType.MONITOR, '电话监听'), _CallType$dict);



/***/ }),

/***/ "./src/constants/DeviceState.js":
/*!**************************************!*\
  !*** ./src/constants/DeviceState.js ***!
  \**************************************/
/*! exports provided: DeviceState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceState", function() { return DeviceState; });
var DeviceState = {
    /*注册成功*/
    REGISTERED: 1,
    /*未注册*/
    UNREGISTERED: 2
};

/***/ }),

/***/ "./src/constants/LineState.js":
/*!************************************!*\
  !*** ./src/constants/LineState.js ***!
  \************************************/
/*! exports provided: LineState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineState", function() { return LineState; });
var LineState = {
    /*空闲*/
    IDLE: 'idle',
    /*外呼振铃*/
    DIALING: 'dialing',
    /*呼入响铃*/
    RINGING: 'ringing',
    /*通话*/
    TALKING: 'talking',
    /*保持*/
    HELD: 'held'
};

/***/ }),

/***/ "./src/constants/MessageID.js":
/*!************************************!*\
  !*** ./src/constants/MessageID.js ***!
  \************************************/
/*! exports provided: MessageID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageID", function() { return MessageID; });
/**
 * 话务平台通信消息类型常量
 */
var MessageID = {
    // 坐席状态变更指令
    RequestAgentLogin: 100,
    RequestAgentReady: 101,
    RequestAgentNotReady: 102,
    RequestAgentLogout: 103,
    // 电话控制指令
    RequestMakeCall: 200,
    RequestAnswerCall: 201,
    RequestReleaseCall: 203,
    RequestHoldCall: 204,
    RequestRedirectCall: 212,
    RequestClearCall: 213,
    RequestSingleStepConference: 214,
    RequestSingleStepTransfer: 215,
    RequestDeleteFromConference: 216,
    RequestRetrieveCall: 217,
    RequestInitiateConference: 220,
    RequestInitiateTransfer: 221,
    RequestCompleteConference: 222,
    RequestCompleteTransfer: 223,
    RequestTransferToIVR: 224,
    RequestSendDtmf: 250,
    RequestAttachUserData: 230,
    RequestDeleteUserData: 231,
    RequestUpdateUserData: 232,
    RequestRegisterAddress: 261,
    RequestUnregisterAddress: 263,
    RequestMonitorCall: 265,
    RequestQueryAgentStatus: 266,
    RequestQueueState: 270,
    RequestSysSettingsUpdate: 300,
    RequestRecordList: 3001,
    // 监控
    RequestMonitorAgentList: 3201,

    // 响应事件
    EventWelcome: 2,
    EventPong: 3,
    // 坐席状态变更事件
    EventAgentLogin: 580,
    EventAgentLogout: 581,
    EventAgentNotReady: 582,
    EventAgentReady: 583,
    // 电话控制事件
    EventQueued: 501,
    EventRinging: 503,
    EventAbandoned: 504,
    EventDialing: 505,
    EventEstablished: 506,
    EventAttachedDataChanged: 507,
    EventDtmfSent: 508,
    EventHeld: 509,
    EventPartyAdded: 510,
    EventPartyChanged: 511,
    EventPartyDeleted: 512,
    EventRetrieved: 513,
    EventReleased: 515,
    EventThreeWayEstablished: 519,
    EventThreeWayReleased: 518,
    EventOcbNumberInfo: 521,
    EventPartyInfo: 520,
    EventSysSettingsUpdate: 526,
    EventAgentInfo: 588,
    EventRegistered: 572,
    EventUnregistered: 574,
    EventLinkConnected: 590,
    EventLinkDisconnected: 4500,
    EventReportInfo: 2500,
    EventCampaignLoaded: 1500,
    EventCampaignUnloaded: 1501,
    EventDialingStarted: 1502,
    EventDialingStopped: 1503,
    EventUpdateTenantIP: 1504,
    EventCampaignRatio: 1507,
    EventOutboundInfo: 1509,
    EventCampaignLoadByFileName: 1510,
    EventRetrieveCampaign: 1511,
    EventCallLoss: 1512,
    EventCallLossDownCSV: 1513,
    EventCampaignContactDownCSV: 1514,
    EventCampaignLoadByCId: 1515,
    EventDownRecord: 3501,
    EventRecordList: 3502,
    EventTransferMenuList: 3101,
    EventConferenceMenuList: 3102,
    // 监控
    EventMonitorAgentList: 3202,
    // 错误事件
    EventError: 9999
};

/***/ }),

/***/ "./src/constants/NotReadyReason.js":
/*!*****************************************!*\
  !*** ./src/constants/NotReadyReason.js ***!
  \*****************************************/
/*! exports provided: NotReadyReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotReadyReason", function() { return NotReadyReason; });
/**
 * 坐席把状态至于NotReady的原因
 */
var NotReadyReason = {
    /*未知*/
    UNKNOWN: -1,
    /*整理中*/
    NEATENING: 0,
    /*通话中*/
    TALKING: 1,
    /*未注册,话机不可用*/
    DEVICE_UNAVAILABLE: 2,
    /*示忙*/
    BUSY: 3,
    /*暂时离开*/
    WALK_AWAY: 4,
    /*休息中*/
    RESTING: 5,
    /*振铃*/
    RINGING: 6
};

/***/ }),

/***/ "./src/constants/PartyRole.js":
/*!************************************!*\
  !*** ./src/constants/PartyRole.js ***!
  \************************************/
/*! exports provided: PartyRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyRole", function() { return PartyRole; });
var PartyRole = {
    /*发起方*/
    ORIGINATION: 1,
    /*目标方*/
    DESTINATION: 2,
    OBSERVER: 5,
    OBSERVABLE: 6
};

/***/ }),

/***/ "./src/constants/PartyState.js":
/*!*************************************!*\
  !*** ./src/constants/PartyState.js ***!
  \*************************************/
/*! exports provided: PartyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyState", function() { return PartyState; });
var PartyState = {
    IDLE: 1,
    DIALING: 2,
    RINGING: 3,
    TALK: 4,
    HELD: 5
};

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: AgentState, CallType, MessageID, PartyRole, PartyState, LineState, DeviceState, NotReadyReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgentState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgentState */ "./src/constants/AgentState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgentState", function() { return _AgentState__WEBPACK_IMPORTED_MODULE_0__["AgentState"]; });

/* harmony import */ var _CallType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallType */ "./src/constants/CallType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallType", function() { return _CallType__WEBPACK_IMPORTED_MODULE_1__["CallType"]; });

/* harmony import */ var _MessageID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageID */ "./src/constants/MessageID.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageID", function() { return _MessageID__WEBPACK_IMPORTED_MODULE_2__["MessageID"]; });

/* harmony import */ var _PartyRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PartyRole */ "./src/constants/PartyRole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartyRole", function() { return _PartyRole__WEBPACK_IMPORTED_MODULE_3__["PartyRole"]; });

/* harmony import */ var _PartyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PartyState */ "./src/constants/PartyState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartyState", function() { return _PartyState__WEBPACK_IMPORTED_MODULE_4__["PartyState"]; });

/* harmony import */ var _LineState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineState */ "./src/constants/LineState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineState", function() { return _LineState__WEBPACK_IMPORTED_MODULE_5__["LineState"]; });

/* harmony import */ var _DeviceState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeviceState */ "./src/constants/DeviceState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeviceState", function() { return _DeviceState__WEBPACK_IMPORTED_MODULE_6__["DeviceState"]; });

/* harmony import */ var _NotReadyReason__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotReadyReason */ "./src/constants/NotReadyReason.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotReadyReason", function() { return _NotReadyReason__WEBPACK_IMPORTED_MODULE_7__["NotReadyReason"]; });










/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/css/dialog.css":
/*!****************************!*\
  !*** ./src/css/dialog.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/css/dialpad.css":
/*!*****************************!*\
  !*** ./src/css/dialpad.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/css/phonebar.css":
/*!******************************!*\
  !*** ./src/css/phonebar.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/common.css */ "./src/css/common.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_common_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_js_ie9__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/js/ie9 */ "./src/assets/js/ie9.js");
/* harmony import */ var _assets_js_ie9__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_js_ie9__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_Agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/Agent */ "./src/model/Agent.js");
/* harmony import */ var _CTIConnection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CTIConnection */ "./src/CTIConnection.js");
/* harmony import */ var _view_PhoneBarComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/PhoneBarComponent */ "./src/view/PhoneBarComponent.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _view_DialPad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/DialPad */ "./src/view/DialPad.js");
/* harmony import */ var _model_LinePool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/LinePool */ "./src/model/LinePool.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _view_ThreewayCallBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/ThreewayCallBox */ "./src/view/ThreewayCallBox.js");
/* harmony import */ var _model_AgentConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model/AgentConfig */ "./src/model/AgentConfig.js");
/* harmony import */ var _utils_Log__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/Log */ "./src/utils/Log.js");
/* harmony import */ var _SoftPhoneConnection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SoftPhoneConnection */ "./src/SoftPhoneConnection.js");





















var PhoneBar = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PhoneBar, _EventEmitter);

    /**
     * 构建电话条及核心业务
     * @param renderTo  页面元素id，渲染到指定元素内，默认追加到body内
     * @param proxyUrl  坐席代理服务地址
     * @param startupSoftPhone 是否自动启动软电话，如果自动启动必须配置SIP服务地址
     * @param sipServerUrl SIP服务地址
     * @param tid  租户ID
     * @param thisDN  分机号
     * @param pstnDN  PSTN号码，可以为null
     * @param agentID  坐席的工号，与分机号一致
     * @param password 密码
     * @param thisQueues  所在坐席组,类型Array数组(格式如：[100018000,100018001])
     * @param defaultQueue  默认/签入坐席组,所在技能组中的其中一个
     * @param tipTime  设置后每隔*分钟会自动提醒某一状态是否超时;默认0不提醒
     * @param maxAfterWorkTime  话后持续设置时间后会自动进入就绪状态;默认0不启用
     * @param autoIdleWhenLogin  登录后自动置闲
     * @param isPhoneTakeAlong  是否手机随行，即手机在线，默认为false
     * @param workPhone  随行手机号
     * @param autoAnswer  自动应答
     * @param onScreenPopup 弹屏事件
     * @param onRinging  呼入振铃事件
     * @param onTalking  接通事件
     * @param onHangup  挂机事件
     * @param onAgentStatusChange 坐席状态变更事件
     * @param onLinkDisconnected 连接被服务器断开事件
     */
    function PhoneBar(_ref) {
        var _ref$renderTo = _ref.renderTo,
            renderTo = _ref$renderTo === undefined ? '' : _ref$renderTo,
            _ref$proxyUrl = _ref.proxyUrl,
            proxyUrl = _ref$proxyUrl === undefined ? 'ws://127.0.0.1:8787/websocket' : _ref$proxyUrl,
            _ref$startupSoftPhone = _ref.startupSoftPhone,
            startupSoftPhone = _ref$startupSoftPhone === undefined ? false : _ref$startupSoftPhone,
            _ref$sipServerUrl = _ref.sipServerUrl,
            sipServerUrl = _ref$sipServerUrl === undefined ? '127.0.0.1:5188' : _ref$sipServerUrl,
            _ref$tid = _ref.tid,
            tid = _ref$tid === undefined ? '' : _ref$tid,
            _ref$thisDN = _ref.thisDN,
            thisDN = _ref$thisDN === undefined ? '' : _ref$thisDN,
            _ref$pstnDN = _ref.pstnDN,
            pstnDN = _ref$pstnDN === undefined ? '' : _ref$pstnDN,
            _ref$agentID = _ref.agentID,
            agentID = _ref$agentID === undefined ? '' : _ref$agentID,
            _ref$password = _ref.password,
            password = _ref$password === undefined ? '' : _ref$password,
            _ref$thisQueues = _ref.thisQueues,
            thisQueues = _ref$thisQueues === undefined ? [] : _ref$thisQueues,
            _ref$defaultQueue = _ref.defaultQueue,
            defaultQueue = _ref$defaultQueue === undefined ? '' : _ref$defaultQueue,
            _ref$tipTime = _ref.tipTime,
            tipTime = _ref$tipTime === undefined ? 0 : _ref$tipTime,
            _ref$maxAfterWorkTime = _ref.maxAfterWorkTime,
            maxAfterWorkTime = _ref$maxAfterWorkTime === undefined ? 0 : _ref$maxAfterWorkTime,
            _ref$autoIdleWhenLogi = _ref.autoIdleWhenLogin,
            autoIdleWhenLogin = _ref$autoIdleWhenLogi === undefined ? true : _ref$autoIdleWhenLogi,
            _ref$isPhoneTakeAlong = _ref.isPhoneTakeAlong,
            isPhoneTakeAlong = _ref$isPhoneTakeAlong === undefined ? false : _ref$isPhoneTakeAlong,
            _ref$workPhone = _ref.workPhone,
            workPhone = _ref$workPhone === undefined ? '' : _ref$workPhone,
            _ref$autoAnswer = _ref.autoAnswer,
            autoAnswer = _ref$autoAnswer === undefined ? false : _ref$autoAnswer,
            onScreenPopup = _ref.onScreenPopup,
            onRinging = _ref.onRinging,
            onTalking = _ref.onTalking,
            onHangup = _ref.onHangup,
            onAgentStatusChange = _ref.onAgentStatusChange,
            onLinkDisconnected = _ref.onLinkDisconnected;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PhoneBar);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (PhoneBar.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PhoneBar)).call(this));

        var options = _this.options = arguments[0];

        // 初始化线路信息
        _this.linePool = new _model_LinePool__WEBPACK_IMPORTED_MODULE_13__["default"]();
        // 初始化坐席配置
        _this.agentConfig = new _model_AgentConfig__WEBPACK_IMPORTED_MODULE_16__["default"](options);
        // 初始化坐席数据
        _this.agent = new _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"](options);

        // 初始化CTI服务websocket
        _this.connection = new _CTIConnection__WEBPACK_IMPORTED_MODULE_9__["default"]({
            wsUrl: options.proxyUrl,
            agent: _this.agent,
            agentConfig: _this.agentConfig,
            linePool: _this.linePool
        });
        // 初始化创建API
        _this.agentApi = _this.connection.agentApi;

        // 与软电话websocket
        _this.softPhoneConnection = new _SoftPhoneConnection__WEBPACK_IMPORTED_MODULE_18__["default"]({
            'serverUrl': sipServerUrl,
            'username': agentID, password: password
        });

        // 初始化ui
        _this.phoneBarComponent = new _view_PhoneBarComponent__WEBPACK_IMPORTED_MODULE_10__["default"]();

        _this.getComponent('agentState').on('agentStateSelected', _this._onAgentStateSelected.bind(_this));
        _this.getComponent('openDialPad').on('click', function () {
            _this._showDialPad({ btnName: '呼叫', onDynamicButtonClick: _this.makeCall.bind(_this, null) });
        });
        _this.getComponent('answer').on('click', function () {
            _this.agentApi.answerCall();
        });
        _this.getComponent('hangup').on('click', function () {
            _this.agentApi.releaseCall();
        });
        _this.getComponent('hold').on('click', function () {
            _this.agentApi.holdCall();
        });
        _this.getComponent('retrieve').on('click', function () {
            _this.agentApi.retrieveCall();
        });
        _this.getComponent('transfer').on('itemClick', _this.onTransferItemClick.bind(_this));
        _this.getComponent('rollout').on('click', function () {
            _this.agentApi.completeTransfer();
        });
        _this.getComponent('conference').on('itemClick', _this.onConferenceItemClick.bind(_this));

        // 三方通话缓存数据
        _this.threewayCallData = [];

        // 添加监听-------------------
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onScreenPopup) && _this.on('screenPopup', onScreenPopup);
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onRinging) && _this.on('ringing', onRinging);
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onTalking) && _this.on('talking', onTalking);
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onHangup) && _this.on('hangup', onHangup);
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onAgentStatusChange) && _this.agent.on('agentStateChange', onAgentStatusChange);
        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].isFunction(onLinkDisconnected) && _this.connection.on('linkDisconnected', onLinkDisconnected);

        _this.eventHandler();
        _this.initial();
        return _this;
    }

    /**
     * 事件处理
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PhoneBar, [{
        key: 'eventHandler',
        value: function eventHandler() {
            var _this2 = this;

            this.connection.on(_constants__WEBPACK_IMPORTED_MODULE_14__["MessageID"].EventThreeWayEstablished.toString(), function (data) {
                _this2.threewayCallData.push({ 'phoneNumber': data.otherDN, 'callID': data.callID });
                !_this2.threewayCallBox || _this2.threewayCallBox.join(data.otherDN, data.callID);
            });
            this.connection.on(_constants__WEBPACK_IMPORTED_MODULE_14__["MessageID"].EventThreeWayReleased.toString(), function (data) {
                _this2.threewayCallData = _this2.threewayCallData.filter(function (v) {
                    return v.phoneNumber !== data.otherDN;
                });
                !_this2.threewayCallBox || _this2.threewayCallBox.remove(data.otherDN);
                _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage(data.otherDN + ' \u5DF2\u9000\u51FA\u4F1A\u8BAE');
            });
            this.connection.on(_constants__WEBPACK_IMPORTED_MODULE_14__["MessageID"].EventTransferMenuList.toString(), function (data) {
                _this2.updateTransferMenu(data.menuList);
            });
            this.connection.on(_constants__WEBPACK_IMPORTED_MODULE_14__["MessageID"].EventConferenceMenuList.toString(), function (data) {
                _this2.updateConferenceMenu(data.menuList);
            });

            // 监听座席状态定时器
            this.agent.stateTimer.on('change', function (seconds, timerValue) {
                // 更新状态持续时长
                _this2.getComponent('agentState').setAgentStateTimer(timerValue);

                var _tipTime = _this2.agentConfig.tipTime;
                if (_tipTime > 0 && seconds > 0 && seconds % (_tipTime * 60) === 0 && _this2.agent.state !== _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].BUSY) {
                    var timeTips = '\u60A8\u5DF2\u4FDD\u6301"' + _this2.agent.getCurrentStateName() + '"\u72B6\u6001' + _this2.agent.stateTimer.format(['小时', '分钟', '秒']);
                    _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage(timeTips);
                }

                var _maxAfterWorkTime = _this2.agentConfig.maxAfterWorkTime;
                if (_maxAfterWorkTime > 0 && seconds >= _maxAfterWorkTime && (seconds - _maxAfterWorkTime) % 3 === 0) {
                    //当坐席处于整理状态，当坐席再次呼出的时候，state依然为notready，reason依然是0，此时，如果到了最大整理时长，坐席将会就绪，也就是会二次进线
                    if (_this2.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].NEATENING) {
                        if (_this2.linePool.getWorkingLineCount() === 0) {
                            _this2.agentApi.agentReady();
                        }
                    }
                }
            });

            // 坐席状态变更事件处理函数
            this.agent.on('agentStateChange', function (state) {
                _this2.getComponent('agentState').changeAgentState(state);

                if (_this2.agent.deviceState === _constants__WEBPACK_IMPORTED_MODULE_14__["DeviceState"].REGISTERED) {
                    if (state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].READY) {
                        _this2.phoneBarComponent.changeButtonWhenReady();
                    } else if (state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].BUSY || state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].RESTING || state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].NEATENING) {
                        _this2.phoneBarComponent.changeButtonWhenNotReady();
                    } else if (state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].OFFLINE) {
                        _this2.phoneBarComponent.changeButtonWhenLogout();
                    }
                }
            });
            // 设备状态变更事件处理函数
            this.agent.on('deviceStateChange', function (deviceState) {
                if (deviceState === _constants__WEBPACK_IMPORTED_MODULE_14__["DeviceState"].UNREGISTERED) {
                    _this2.phoneBarComponent.changeButtonSipNG();
                } else {
                    _this2.phoneBarComponent.changeButtonSipOK();
                }
            });
            // 线路状态变更事件处理
            this.linePool.on('lineDataChange', function (line, callInfo, data) {
                if (_this2.linePool.getCurrentLineId() === line.id) {
                    if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].IDLE) {
                        _this2.agentApi.agentNotReady(0);
                        _this2.phoneBarComponent.changeButtonWhenIdle();
                        _this2.emit('hangup', callInfo, data);
                    } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].DIALING) {
                        _this2.agent.setAgentState(_model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].RINGING);
                        _this2.phoneBarComponent.changeButtonWhenDialing(callInfo.callType);
                        _this2.emit('ringing', callInfo, data);
                    } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].RINGING) {
                        _this2.agent.setAgentState(_model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].RINGING);
                        _this2.phoneBarComponent.changeButtonWhenRinging();
                        _this2.emit('ringing', callInfo, data);
                    } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].HELD) {
                        _this2.phoneBarComponent.changeButtonWhenHold();
                    } else if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].TALKING) {
                        _this2.agent.setAgentState(_model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].TALKING);
                        _this2.phoneBarComponent.changeButtonWhenTalking(callInfo.callType);
                        _this2.emit('talking', callInfo, data);
                    }
                }

                // 两步转接
                if (callInfo.callType === _constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].CONSULT) {
                    // 两步转接第一步主叫方按钮状态：被叫方(被咨询方)坐席应答时按钮状态
                    if (data.partyState === _constants__WEBPACK_IMPORTED_MODULE_14__["PartyState"].TALK && data.thisRole === 1 && data.otherRole === 2 && (_this2.linePool.isExistLineByCallType(_constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].INBOUND) || _this2.linePool.isExistLineByCallType(_constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].OUTBOUND))) {
                        _this2.phoneBarComponent.changeButtonWhenDouble();
                    }
                    // 两步转接第一步被叫方(被咨询方)按钮状态：坐席应答时的按钮状态
                    if (data.partyState === _constants__WEBPACK_IMPORTED_MODULE_14__["PartyState"].TALK && data.thisRole === 2 && data.otherRole === 1) {
                        _this2.phoneBarComponent.changeButtonWhenDoubleCalled();
                    }
                    // 两步转被叫方挂断
                    if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].IDLE && callInfo.otherDN === data.sendBy && data.thirdDN === data.sendBy) {
                        _this2.phoneBarComponent.changeButtonWhenDoubleDiscon(); // 转出按钮置灰
                        if (data.sendBy.length === 9) {
                            _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('坐席 ' + data.sendBy + ' 已挂断！');
                        } else {
                            _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('外线 ' + data.sendBy + ' 已挂断！');
                        }
                    }
                }

                // 两步转接-客户挂断的按钮(需要先判断咨询线路是否还存在)
                if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].IDLE && _this2.linePool.isExistLineByCallType(_constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].CONSULT) && (callInfo.callType === _constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].INBOUND || callInfo.callType === _constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].OUTBOUND) && callInfo.otherDN === data.sendBy && data.thirdDN !== '') {
                    _this2.phoneBarComponent.changeButtonWhenCustomerDiscon();
                    // 转接用的线路提升为默认线路
                    _this2.linePool.setCurrentLineId(_this2.linePool.getConsultLine().id);
                }

                if (data.thisRole !== 5 && callInfo.callType !== _constants__WEBPACK_IMPORTED_MODULE_14__["CallType"].INTERNAL && data.attachDatas['variable_thirdPartyRole'] == null) {
                    _this2.emit('screenPopup', line.lineState, callInfo);
                }
            });
        }
    }, {
        key: 'initial',
        value: function initial() {
            var _this3 = this;

            // 是否自动拉起软电话
            if (this.options.startupSoftPhone === true) {
                // 与软电话建立连接
                this.softPhoneConnection.open();
                // 软电话登录成功后登录电话条
                this.softPhoneConnection.on('loginSuccess', function () {
                    return _this3.connection.open();
                });
            } else {
                this.connection.open();
            }

            // 创建Element
            this._rootNode = this.phoneBarComponent.rootNode;
            if (!this.options.renderTo) {
                document.body.appendChild(this._rootNode);
            } else {
                document.getElementById(this.options.renderTo).appendChild(this._rootNode);
            }
            this.phoneBarComponent.show();
        }

        /**
         * 根据名称获取组件
         * @param {String} componentName
         */

    }, {
        key: 'getComponent',
        value: function getComponent(componentName) {
            if (componentName) {
                return this.phoneBarComponent.getButtonComponent(componentName);
            }
            return null;
        }

        /**
         * 当坐席状态被选择时的事件处理方法
         * @param action
         * @returns {boolean}
         * @private
         */

    }, {
        key: '_onAgentStateSelected',
        value: function _onAgentStateSelected(action) {
            if (action !== 'logout' && action !== 'login' && this.agent.state === _model_Agent__WEBPACK_IMPORTED_MODULE_8__["default"].OFFLINE) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('未登入，不能切换状态');
                return false;
            }
            if (this.linePool.getWorkingLineCount() > 0) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('正在通话，禁止切换状态');
                return false;
            }

            if (action === 'ready') {
                this.agentApi.agentReady();
            } else if (action === 'login') {
                this.agentApi.agentLogin();
            } else if (action === 'logout') {
                this.agentApi.agentLogout();
            } else if (action === 'busy') {
                this.agentApi.agentNotReady(3);
            } else if (action === 'rest') {
                this.agentApi.agentNotReady(5);
            }
        }

        /**
         * 主动拨打呼叫
         */

    }, {
        key: 'makeCall',
        value: function makeCall(phoneNumber) {
            phoneNumber = phoneNumber || this.dialPad.getPhoneNumber();
            if (phoneNumber.length === 4 && this.agent.tid !== '0') phoneNumber = this.agent.tid + phoneNumber;
            var type = phoneNumber.length === 9 && phoneNumber.charAt(0) === '1' ? 1 : 3;
            this.agentApi.makeCall(phoneNumber, -1, type);
        }

        /**
         * 更新转移下拉菜单选项
         */

    }, {
        key: 'updateTransferMenu',
        value: function updateTransferMenu(data) {
            var transferComponent = this.getComponent('transfer');
            // 如果转外线号码清空子选项
            data && data.forEach(function (val) {
                if (val.type === 'transferOutLine') {
                    val['contacts'] = val.menu;
                    val.menu = [];
                }
            });
            transferComponent.updateMenuData(data);
        }

        /**
         * 当转移菜单的选项被选中时的事件处理函数
         * @param val
         */

    }, {
        key: 'onTransferItemClick',
        value: function onTransferItemClick(val) {
            if (val.type === 'transferOutLine') {
                // 转外线号码
                this._showDialPad({
                    'title': '转外线号码',
                    'contacts': val.contacts,
                    'btnName': '咨询',
                    onDynamicButtonClick: this._transferThis.bind(this)
                });
            } else if (val.type === "doublestep") {
                // 两步转接
                this.agentApi.consult(val.agentId);
            } else if (val.ivrId) {
                // 按键采集/转IVR
                this.agentApi.singleStepTransfer('ivr_' + val.ivrId);
            } else if (val.type === "singlestep") {
                // 单步转接
                this.agentApi.singleStepTransfer(val.agentId);
            }
        }

        /**
         * 更新会议下拉菜单选项
         */

    }, {
        key: 'updateConferenceMenu',
        value: function updateConferenceMenu(data) {
            var conferenceComponent = this.getComponent('conference');
            // 会议
            data && data.forEach(function (val) {
                if (val.type === 'only') {
                    val['contacts'] = val.menu;
                    val.menu = [];
                }
            });
            conferenceComponent.updateMenuData(data);
        }

        /**
         * 当会议菜单选项被点击时的事件处理函数
         * @param val 选中菜单的数据
         */

    }, {
        key: 'onConferenceItemClick',
        value: function onConferenceItemClick(val) {
            var _this4 = this;

            // 加入自定义电话/多方通话管理
            if (val.type === 'only') {
                if (val.id === 'user_defined') {
                    // 加入自定义电话
                    this._showDialPad({
                        'title': '加入自定义电话', 'contacts': val.contacts, 'btnName': '会议',
                        onDynamicButtonClick: function onDynamicButtonClick() {
                            _this4.agentApi.threeWayCall(_this4.dialPad.getPhoneNumber());
                        }
                    });
                } else if (val.id === 'conversation') {
                    //多方通话管理
                    this._showThreewayCallBox();
                }
            } else {
                this.agentApi.threeWayCall(val.agentId);
            }
        }

        /**
         * 转接时弹出拨号盘的拨号按钮控制
         * @private
         */

    }, {
        key: '_transferThis',
        value: function _transferThis() {
            var phoneNumber = this.dialPad.getPhoneNumber();
            var line = this.linePool.getCurrentLine();
            if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].HELD) {
                this.agentApi.completeTransfer();
                this.dynamicButton.title = '咨询';
                this.dynamicButton.innerText = '咨询';
            } else {
                var thisExten = this.agent.thisDN;
                if (line.phoneNumber === phoneNumber) {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('不能转接当前正在接通的号码');
                } else if (phoneNumber === thisExten) {
                    _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage('不能转接自己');
                } else {
                    if (line.lineState === _constants__WEBPACK_IMPORTED_MODULE_14__["LineState"].TALKING) {
                        this.agentApi.consult(phoneNumber);
                        // 延迟加载
                        this.dialPad.setPhoneNumber(phoneNumber);
                        this.dynamicButton.title = '转出';
                        this.dynamicButton.innerText = '转出';
                    } else {
                        _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"].showMessage("当前线路未在通话中，不能转接");
                    }
                }
            }
        }

        /**
         * 显示多方通话弹出框
         * @private
         */

    }, {
        key: '_showThreewayCallBox',
        value: function _showThreewayCallBox() {
            var _this5 = this;

            // 当存在则先显示此对话框
            if (this.threewayCallBox) {
                this.threewayCallBox.show();
            } else {
                this.threewayCallBox = new _view_ThreewayCallBox__WEBPACK_IMPORTED_MODULE_15__["default"]({
                    title: '多方通话管理',
                    onJoinButtonClick: function onJoinButtonClick(phoneNumber) {
                        _this5.agentApi.threeWayCall(phoneNumber);
                    },
                    onRemoveCallButtonClick: function onRemoveCallButtonClick(callId) {
                        _this5.agentApi.releaseThreeWayCall(callId);
                    },
                    onRemoveAllCallButtonClick: function onRemoveAllCallButtonClick() {
                        _this5.agentApi.releaseThreeWayCall('non_moderator');
                    }
                });
                // 初始化列表数据
                this.threewayCallData.forEach(function (callData) {
                    _this5.threewayCallBox.join(callData.phoneNumber, callData.callID);
                });
                this.threewayCallBox.show();
            }
        }

        /**
         * 显示拨号盘
         * @private
         */

    }, {
        key: '_showDialPad',
        value: function _showDialPad(_ref2) {
            var _this6 = this;

            var _ref2$title = _ref2.title,
                title = _ref2$title === undefined ? '拨号' : _ref2$title,
                _ref2$contacts = _ref2.contacts,
                contacts = _ref2$contacts === undefined ? [] : _ref2$contacts,
                btnName = _ref2.btnName,
                _ref2$onDynamicButton = _ref2.onDynamicButtonClick,
                onDynamicButtonClick = _ref2$onDynamicButton === undefined ? function () {} : _ref2$onDynamicButton;

            // 当存在则先关闭此对话框
            if (this.dialPad) {
                this.dialPad.destroy();
            }

            this.dynamicButton = _view_DialPad__WEBPACK_IMPORTED_MODULE_12__["default"].createButton({
                btnName: btnName,
                className: 'text-navy dialbtn',
                onClick: onDynamicButtonClick
            });

            this.dialPad = new _view_DialPad__WEBPACK_IMPORTED_MODULE_12__["default"]({
                'title': title,
                'contacts': contacts,
                'dynamicButton': this.dynamicButton,
                'onHangupButtonClick': function onHangupButtonClick() {
                    _this6.agentApi.releaseCall();
                }
            });
            this.dialPad.show();
        }

        /**
         * 该方法会删除页面上显示的电话条元素、绑定的事件和断开与CTI服务器的连接
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this._rootNode && this._rootNode.parentNode) {
                this._rootNode.parentNode.removeChild(this._rootNode);
            }
            if (this.dialPad) {
                this.dialPad.destroy();
            }
            if (this.threewayCallBox) {
                this.threewayCallBox.destroy();
            }

            this.agentApi.agentLogout();
            this.connection.doClose();
            !this.softPhoneConnection || this.softPhoneConnection.doClose();
        }
    }]);

    return PhoneBar;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_7___default.a);

PhoneBar.utils = _utils_utils__WEBPACK_IMPORTED_MODULE_11__["default"];
PhoneBar.Log = _utils_Log__WEBPACK_IMPORTED_MODULE_17__["default"];

/* harmony default export */ __webpack_exports__["default"] = (PhoneBar);

/***/ }),

/***/ "./src/model/Agent.js":
/*!****************************!*\
  !*** ./src/model/Agent.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Timer */ "./src/model/Timer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");







var _Agent$stateDict;






/**
 * 坐席对象
 * 更新坐席状态时会触发坐席状态变更事件 'agentStateChange'，可以通过on或addListener监听事件变化
 * 'agentStateChange'事件默认抛出2个参数，第一个state当前状态，第二个state修改之前的值
 */

var Agent = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Agent, _EventEmitter);

    /**
     * @param tid  租户ID
     * @param thisDN  分机号
     * @param pstnDN  PSTN号码，可以为null
     * @param agentID  坐席的工号，与分机号一致
     * @param thisQueues  所在坐席组,类型Array数组(格式如：[100018000,100018001])
     * @param defaultQueue  默认/签入坐席组,所在技能组中的其中一个
     * @param state  坐席当前状态
     */
    function Agent(_ref) {
        var _ref$tid = _ref.tid,
            tid = _ref$tid === undefined ? '' : _ref$tid,
            _ref$thisDN = _ref.thisDN,
            thisDN = _ref$thisDN === undefined ? '' : _ref$thisDN,
            _ref$pstnDN = _ref.pstnDN,
            pstnDN = _ref$pstnDN === undefined ? null : _ref$pstnDN,
            _ref$agentID = _ref.agentID,
            agentID = _ref$agentID === undefined ? '' : _ref$agentID,
            _ref$thisQueues = _ref.thisQueues,
            thisQueues = _ref$thisQueues === undefined ? [] : _ref$thisQueues,
            _ref$defaultQueue = _ref.defaultQueue,
            defaultQueue = _ref$defaultQueue === undefined ? '' : _ref$defaultQueue;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Agent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Agent.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(Agent)).call(this));

        _this._tid = tid;
        _this._thisDN = thisDN;
        _this._pstnDN = pstnDN;
        _this._agentID = agentID;
        _this._thisQueues = thisQueues;
        _this._defaultQueue = defaultQueue;

        _this._state = Agent.OFFLINE;
        _this._deviceState = _constants__WEBPACK_IMPORTED_MODULE_9__["DeviceState"].REGISTERED;

        _this.stateTimer = new _Timer__WEBPACK_IMPORTED_MODULE_7__["default"]().start();
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Agent, [{
        key: "setAgentState",


        /**
         * 设置坐席状态
         * @param state
         */
        value: function setAgentState(state) {
            if (this._state !== state) {
                var beforeValue = this._state;
                this._state = state;
                this.stateTimer.restart();
                this.emit('agentStateChange', state, beforeValue);
            }
        }

        /**
         * 设置话机状态
         * @param deviceState
         */

    }, {
        key: "setDeviceState",
        value: function setDeviceState(deviceState) {
            if (deviceState === _constants__WEBPACK_IMPORTED_MODULE_9__["DeviceState"].UNREGISTERED) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_8__["default"].showMessage("请登陆SIP话机，并刷新坐席状态");
            } else if (this._deviceState !== deviceState && deviceState === _constants__WEBPACK_IMPORTED_MODULE_9__["DeviceState"].REGISTERED) {
                _utils_utils__WEBPACK_IMPORTED_MODULE_8__["default"].showMessage("SIP话机注册成功");
            }
            if (this._deviceState !== deviceState) {
                this._deviceState = deviceState;
                this.emit('deviceStateChange', deviceState);
            }
        }

        /**
         * 获得当前状态名称
         * @returns {*}
         */

    }, {
        key: "getCurrentStateName",
        value: function getCurrentStateName() {
            return Agent.getStateName(this._state);
        }
    }, {
        key: "tid",
        get: function get() {
            return this._tid;
        }
    }, {
        key: "thisDN",
        get: function get() {
            return this._thisDN;
        }
    }, {
        key: "pstnDN",
        get: function get() {
            return this._pstnDN;
        }
    }, {
        key: "agentID",
        get: function get() {
            return this._agentID;
        }
    }, {
        key: "thisQueues",
        get: function get() {
            return this._thisQueues;
        }
    }, {
        key: "defaultQueue",
        get: function get() {
            return this._defaultQueue;
        }
    }, {
        key: "state",
        get: function get() {
            return this._state;
        }
    }, {
        key: "deviceState",
        get: function get() {
            return this._deviceState;
        }
    }], [{
        key: "getStateName",
        value: function getStateName(state) {
            return Agent.stateDict[state] ? Agent.stateDict[state].name : '';
        }

        /**
         * 将服务器状态值转化为本系统可读的值
         *
         * @param rawState
         * @param reason  0 整理；1 通话；2 话机不可用；3 示忙；4 离开；5 休息；6 振铃
         * @returns {string}
         */

    }, {
        key: "convertToLocalState",
        value: function convertToLocalState(rawState, reason) {
            var state = Agent.OFFLINE;
            if (rawState === _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY) {
                switch (reason) {
                    case 0:
                        state = Agent.NEATENING;
                        break;
                    case 1:
                        state = Agent.TALKING;
                        break;
                    case 3:
                        state = Agent.BUSY;
                        break;
                    case 5:
                        state = Agent.RESTING;
                        break;
                    case 6:
                        state = Agent.RINGING;
                        break;
                    default:
                        state = Agent.BUSY;
                        break;
                }
            } else if (rawState === _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].READY) {
                state = Agent.READY;
            } else if (rawState === _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].OFFLINE) {
                state = Agent.OFFLINE;
            }
            return state;
        }

        /**
         * 将本地状态值转换为原始服务器状态值
         * @param state
         * @returns {*|null}
         */

    }, {
        key: "convertToRawState",
        value: function convertToRawState(state) {
            return Agent.stateDict[state] || null;
        }
    }]);

    return Agent;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

// 坐席本地状态常量


Agent.OFFLINE = 'offline';
Agent.READY = 'ready';
Agent.BUSY = 'busy';
Agent.RESTING = 'resting';
Agent.NEATENING = 'neatening';
Agent.TALKING = 'talking';
Agent.RINGING = 'ringing';
/* 状态字典 */
Agent.stateDict = (_Agent$stateDict = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.OFFLINE, { name: '离线', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].OFFLINE, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].UNKNOWN }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.READY, { name: '就绪', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].READY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].UNKNOWN }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.BUSY, { name: '示忙', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].BUSY }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.RESTING, { name: '休息中', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].RESTING }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.NEATENING, { name: '整理中', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].NEATENING }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.TALKING, { name: '通话中', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].TALKING }), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_Agent$stateDict, Agent.RINGING, { name: '振铃中', rawState: _constants__WEBPACK_IMPORTED_MODULE_9__["AgentState"].NOTREADY, reason: _constants__WEBPACK_IMPORTED_MODULE_9__["NotReadyReason"].RINGING }), _Agent$stateDict);

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/model/AgentConfig.js":
/*!**********************************!*\
  !*** ./src/model/AgentConfig.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_5__);







/**
 * 坐席设置纯数据对象
 */

var AgentConfig = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AgentConfig, _EventEmitter);

    /**
     * @param tipTime  设置后每隔*分钟会自动提醒某一状态是否超时;默认0不提醒
     * @param maxAfterWorkTime  话后持续设置时间后会自动进入就绪状态;默认0不启用
     * @param autoIdleWhenLogin  登录后自动置闲
     * @param isPhoneTakeAlong  是否手机随行，即手机在线，默认为false
     * @param workPhone  随行手机号
     * @param autoAnswer  自动应答
     */
    function AgentConfig(_ref) {
        var _ref$tipTime = _ref.tipTime,
            tipTime = _ref$tipTime === undefined ? 0 : _ref$tipTime,
            _ref$maxAfterWorkTime = _ref.maxAfterWorkTime,
            maxAfterWorkTime = _ref$maxAfterWorkTime === undefined ? 0 : _ref$maxAfterWorkTime,
            _ref$autoIdleWhenLogi = _ref.autoIdleWhenLogin,
            autoIdleWhenLogin = _ref$autoIdleWhenLogi === undefined ? false : _ref$autoIdleWhenLogi,
            _ref$isPhoneTakeAlong = _ref.isPhoneTakeAlong,
            isPhoneTakeAlong = _ref$isPhoneTakeAlong === undefined ? false : _ref$isPhoneTakeAlong,
            _ref$workPhone = _ref.workPhone,
            workPhone = _ref$workPhone === undefined ? '' : _ref$workPhone,
            _ref$autoAnswer = _ref.autoAnswer,
            autoAnswer = _ref$autoAnswer === undefined ? false : _ref$autoAnswer;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AgentConfig);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (AgentConfig.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(AgentConfig)).call(this));

        _this._tipTime = tipTime;
        _this._maxAfterWorkTime = maxAfterWorkTime;
        _this._autoIdleWhenLogin = autoIdleWhenLogin;
        _this._isPhoneTakeAlong = isPhoneTakeAlong;
        _this._workPhone = workPhone;
        _this._autoAnswer = autoAnswer;
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AgentConfig, [{
        key: 'set',
        value: function set(key, value) {
            if (this['_' + key] === value) {
                return;
            }
            this['_' + key] = value;
            this.emit('change', this, key, value);
        }
    }, {
        key: 'tipTime',
        get: function get() {
            return this._tipTime;
        },
        set: function set(value) {
            if (this._tipTime !== value) {
                this._tipTime = value;
                this.emit('change', this, 'tipTime', value);
            }
        }
    }, {
        key: 'maxAfterWorkTime',
        get: function get() {
            return this._maxAfterWorkTime;
        },
        set: function set(value) {
            if (this._maxAfterWorkTime !== value) {
                this._maxAfterWorkTime = value;
                this.emit('change', this, 'maxAfterWorkTime', value);
            }
        }
    }, {
        key: 'autoIdleWhenLogin',
        get: function get() {
            return this._autoIdleWhenLogin;
        },
        set: function set(value) {
            if (this._autoIdleWhenLogin !== value) {
                this._autoIdleWhenLogin = value;
                this.emit('change', this, 'autoIdleWhenLogin', value);
            }
        }
    }, {
        key: 'isPhoneTakeAlong',
        get: function get() {
            return this._isPhoneTakeAlong;
        },
        set: function set(value) {
            if (this._isPhoneTakeAlong !== value) {
                this._isPhoneTakeAlong = value;
                this.emit('change', this, 'isPhoneTakeAlong', value);
            }
        }
    }, {
        key: 'workPhone',
        get: function get() {
            return this._workPhone;
        },
        set: function set(value) {
            if (this._workPhone !== value) {
                this._workPhone = value;
                this.emit('change', this, 'workPhone', value);
            }
        }
    }, {
        key: 'autoAnswer',
        get: function get() {
            return this._autoAnswer;
        },
        set: function set(value) {
            if (this._autoAnswer !== value) {
                this._autoAnswer = value;
                this.emit('change', this, 'autoAnswer', value);
            }
        }
    }]);

    return AgentConfig;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_5___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AgentConfig);

/***/ }),

/***/ "./src/model/Line.js":
/*!***************************!*\
  !*** ./src/model/Line.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");




/**
 * 线路信息数据对象
 */

var Line = function () {
    function Line(id) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Line);

        this._lineState = _constants__WEBPACK_IMPORTED_MODULE_2__["LineState"].IDLE;
        this._phoneNumber = '';
        this._callType = -1;
        this._callId = '';
        this._parties = [];
        this._id = id;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Line, [{
        key: 'reset',
        value: function reset() {
            this._lineState = _constants__WEBPACK_IMPORTED_MODULE_2__["LineState"].IDLE;
            this._phoneNumber = '';
            this._callType = -1;
            this._callId = '';
            this._parties = [];
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: 'lineState',
        get: function get() {
            return this._lineState;
        },
        set: function set(value) {
            this._lineState = value;
        }
    }, {
        key: 'phoneNumber',
        get: function get() {
            return this._phoneNumber;
        },
        set: function set(value) {
            this._phoneNumber = value;
        }
    }, {
        key: 'callType',
        get: function get() {
            return this._callType;
        },
        set: function set(value) {
            this._callType = value;
        }
    }, {
        key: 'callId',
        get: function get() {
            return this._callId;
        },
        set: function set(value) {
            this._callId = value;
        }
    }, {
        key: 'parties',
        get: function get() {
            return this._parties;
        },
        set: function set(value) {
            this._parties = value;
        }
    }]);

    return Line;
}();

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./src/model/LinePool.js":
/*!*******************************!*\
  !*** ./src/model/LinePool.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Line */ "./src/model/Line.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_7__);









/**
 * 线路池<br/>
 * 一个坐席默认2条线路，可以通过构造函数修改初始值大小<br/>
 * 0号线路默认为主线路，两步转接会用到第二条线路
 */

var LinePool = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LinePool, _EventEmitter);

    function LinePool() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$maxLines = _ref.maxLines,
            maxLines = _ref$maxLines === undefined ? 2 : _ref$maxLines;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LinePool);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LinePool.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(LinePool)).call(this));

        _this._maxLines = maxLines;
        _this._lineId = 0;
        _this._lines = new Array(_this._maxLines);

        _this.init();
        return _this;
    }

    /**
     * 初始化线路
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LinePool, [{
        key: "init",
        value: function init() {
            for (var index = 0; index < this._maxLines; index++) {
                // 数组下标即线路ID
                this._lines[index] = new _Line__WEBPACK_IMPORTED_MODULE_5__["default"](index);
            }
        }

        /**
         * 根据线路ID获取线路信息
         * @param lineId 线路ID
         * @returns {Line}  当lineId不存在则返回null
         */

    }, {
        key: "getLine",
        value: function getLine(lineId) {
            if (this.checkLineId(lineId)) {
                for (var index = 0; index < this._maxLines; index++) {
                    if (this._lines[index].id === lineId) {
                        return this._lines[index];
                    }
                }
            }
            return null;
        }

        /**
         * 获取一个空闲线路，优先使用当前所在线路
         * @returns {Line}  当线路不存在则返回null
         */

    }, {
        key: "getIdleLine",
        value: function getIdleLine() {
            if (this.getCurrentLine().lineState === _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].IDLE) {
                return this.getCurrentLine();
            } else {
                return this.getLineByState(_constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].IDLE);
            }
        }

        /**
         * 通话中的线路ID
         * @returns {Line}  当线路不存在则返回null
         */

    }, {
        key: "getTalkingLine",
        value: function getTalkingLine() {
            return this.getLineByState(_constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].TALKING);
        }

        /**
         * 根据状态获取线路
         *
         * @param state
         * @returns {Line}  当线路不存在则返回null
         */

    }, {
        key: "getLineByState",
        value: function getLineByState(state) {
            for (var index = 0; index < this._maxLines; index++) {
                if (this._lines[index].lineState === state) {
                    return this._lines[index];
                }
            }
            return null;
        }

        /**
         * 根据callId获取所在线路
         * @param callId
         * @returns {Line}  当线路不存在则返回null
         */

    }, {
        key: "getLineByCallId",
        value: function getLineByCallId(callId) {
            for (var index = 0; index < this._maxLines; index++) {
                if (this._lines[index].callId === callId) {
                    return this._lines[index];
                }
            }
            return null;
        }

        /**
         * 获取咨询线路
         *
         * @returns {Line}  当线路不存在则返回null
         */

    }, {
        key: "getConsultLine",
        value: function getConsultLine() {
            for (var index = 0; index < this._maxLines; index++) {
                if (this._lines[index].callType === _constants__WEBPACK_IMPORTED_MODULE_6__["CallType"].CONSULT) {
                    return this._lines[index];
                }
            }
            return null;
        }

        /**
         * 设置当前线路ID，用于切换主线路
         * @param lineId
         */

    }, {
        key: "setCurrentLineId",
        value: function setCurrentLineId(lineId) {
            if (this.checkLineId(lineId)) {
                this._lineId = lineId;
            }
        }

        /**
         * 获取当前线路
         * @returns {number|*}
         */

    }, {
        key: "getCurrentLineId",
        value: function getCurrentLineId() {
            return this._lineId;
        }

        /**
         * 获取当前线路信息
         * @returns {Line}
         */

    }, {
        key: "getCurrentLine",
        value: function getCurrentLine() {
            return this.getLine(this._lineId);
        }

        /**
         * 获取当前非空闲线路个数
         * @returns {number}
         */

    }, {
        key: "getWorkingLineCount",
        value: function getWorkingLineCount() {
            var workingLineCount = 0;
            for (var index = 0; index < this._maxLines; index++) {
                if (this._lines[index].lineState !== _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].IDLE) {
                    workingLineCount++;
                }
            }
            return workingLineCount;
        }

        /**
         * 是否存在该呼叫类型的线路
         * @param callType
         * @returns {boolean}
         */

    }, {
        key: "isExistLineByCallType",
        value: function isExistLineByCallType(callType) {
            for (var index = 0; index < this._maxLines; index++) {
                if (this._lines[index].callType === callType) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 验证线路是否合法
         * @param lineId
         */

    }, {
        key: "checkLineId",
        value: function checkLineId(lineId) {
            return null != lineId && lineId >= 0 && lineId < this._maxLines;
        }

        /**
         * 更新线路信息
         *
         * 拨号  MessageID.EventDialing: 505       呼出振铃
         * 振铃  MessageID.EventRinging: 503       呼入振铃
         * 接通  MessageID.EventEstablished: 506
         * 挂断  MessageID.EventReleased: 515
         * 保持  MessageID.EventHeld: 509
         * @param data
         */

    }, {
        key: "updateLineDate",
        value: function updateLineDate(data) {
            var event = data.messageId;
            var callInfo = this.parseCallInfo(data);

            var line = this.getLineByCallId(callInfo.callId);
            if (!line) {
                line = this.getCurrentLine();
            }
            // 当呼入振铃或者咨询时，选择一条空闲线路
            if (event === _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventRinging || event === _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventDialing && callInfo.callType === _constants__WEBPACK_IMPORTED_MODULE_6__["CallType"].CONSULT) {
                line = this.getIdleLine();
            }

            switch (event) {
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventReleased:
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventAbandoned:
                    line.reset();
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventDialing:
                    line.lineState = _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].DIALING;
                    line.phoneNumber = callInfo.phoneNumber;
                    line.callType = callInfo.callType;
                    line.callId = callInfo.callId;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventRinging:
                    line.lineState = _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].RINGING;
                    line.phoneNumber = callInfo.phoneNumber;
                    line.callType = callInfo.callType;
                    line.callId = callInfo.callId;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventEstablished:
                    if (callInfo.callId == null || callInfo.callId === '') break;
                    line.lineState = _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].TALKING;
                    line.phoneNumber = callInfo.phoneNumber;
                    line.callType = callInfo.callType;
                    line.callId = callInfo.callId;
                    line.parties = [callInfo.phoneNumber];
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventHeld:
                    line.lineState = _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].HELD;
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_6__["MessageID"].EventRetrieved:
                    line.lineState = _constants__WEBPACK_IMPORTED_MODULE_6__["LineState"].TALKING;
                    break;
                default:
                    break;
            }
            this.emit('lineDataChange', line, callInfo, data);
        }
    }, {
        key: "parseCallInfo",
        value: function parseCallInfo(data) {
            var callId = data.callID;
            var callType = data.callType;
            var phoneNumber = data.otherDN && data.otherDN !== "Unknown" ? data.otherDN : '';
            var attachDatas = data.attachDatas;
            var creationTime = data.creationTime;
            var querue = data.thisQueue;

            var dnis = data.dnis; //被叫号码
            var callSid = data.auuid; //呼叫唯一标识
            var cityCode = data.cityCode; //归属地

            return {
                callId: callId,
                callType: callType,
                phoneNumber: phoneNumber,
                attachDatas: attachDatas,
                creationTime: creationTime,
                querue: querue,
                dnis: dnis,
                callSid: callSid,
                cityCode: cityCode
            };
        }
    }, {
        key: "maxLines",
        get: function get() {
            return this._maxLines;
        },
        set: function set(value) {
            this._maxLines = value;
        }
    }, {
        key: "lines",
        get: function get() {
            return this._lines;
        },
        set: function set(value) {
            this._lines = value;
        }
    }]);

    return LinePool;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_7___default.a);

/* harmony default export */ __webpack_exports__["default"] = (LinePool);

/***/ }),

/***/ "./src/model/Timer.js":
/*!****************************!*\
  !*** ./src/model/Timer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_5__);







/**
 * 定时器
 */

var Timer = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Timer, _EventEmitter);

    function Timer() {
        var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Timer);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Timer.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Timer)).call(this));

        _this.seconds = seconds;
        _this.startTime = new Date().getTime() - seconds * 1000;
        _this.unexecutedTimeouts = [];
        return _this;
    }

    /**
     * 开始一个任务
     *
     * @returns {Timer} 当前对象
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Timer, [{
        key: 'start',
        value: function start() {
            var _this2 = this;

            this.seconds++;
            this._clearUnexecutedTimeouts();
            // 计算时间误差值
            var offset = new Date().getTime() - (this.startTime + this.seconds * 1000);
            var nextTime = 1000 > offset ? 1000 - offset : 0;
            this.unexecutedTimeouts.push(setTimeout(function () {
                _this2.start();
            }, nextTime));
            // 时间执行不阻塞计时任务
            setTimeout(function () {
                _this2.emit('change', _this2.seconds, _this2.format());
            });
            return this;
        }

        /**
         * 停止一个任务
         *
         * @returns {Timer} 当前对象
         */

    }, {
        key: 'stop',
        value: function stop() {
            this._clearUnexecutedTimeouts();
            this.seconds = 0;

            return this;
        }

        /**
         * 任务重启
         */

    }, {
        key: 'restart',
        value: function restart() {
            var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.stop();
            // 设置计时开始时间
            this.seconds = seconds;
            this.startTime = new Date().getTime() - seconds * 1000;
            this.start();
        }

        /**
         * 清除未执行的任务
         *
         * @private
         */

    }, {
        key: '_clearUnexecutedTimeouts',
        value: function _clearUnexecutedTimeouts() {
            this.unexecutedTimeouts.forEach(function (unexecuted) {
                clearTimeout(unexecuted);
            });
            this.unexecutedTimeouts = [];
        }
    }, {
        key: 'format',
        value: function format() {
            var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [':', ':', ''];

            var secondTime = this.seconds; // 秒
            var minuteTime = 0; // 分
            var hourTime = 0; // 小时
            if (secondTime > 60) {
                minuteTime = Math.floor(secondTime / 60);
                secondTime = Math.floor(secondTime % 60);
                if (minuteTime > 60) {
                    hourTime = Math.floor(minuteTime / 60);
                    minuteTime = Math.floor(minuteTime % 60);
                }
            }
            var result = "";
            if (hourTime > 0) {
                result += (hourTime < 10 ? '0' : '') + hourTime + separator[0];
            }
            result += (minuteTime < 10 ? '0' : '') + minuteTime + separator[1];
            result += (secondTime < 10 ? '0' : '') + secondTime + separator[2];
            return result;
        }
    }]);

    return Timer;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_5___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./src/utils/Ajax.js":
/*!***************************!*\
  !*** ./src/utils/Ajax.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js");
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.js");



/**
 * 检测原生XHR对象是否存在，如果存在刚返回它的新实例；
 * 如果不存在，则检测ActiveX对象;由于IE6的XMLHttpRequest对象是通过MSXML库中的一个ActiveX对象实现的。
 * 如果两个都不存在，就抛出一个错误。
 * @returns {*}
 */
function getXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        //遍历IE中不同版本的ActiveX对象
        var versions = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                return new ActiveXObject(versions[i]);
            } catch (ex) {
                //跳过
            }
        }
    }
}

function send(options) {

    var xhr = getXHR();

    var opt = {
        type: options.type || 'get',
        url: options.url || '',
        async: options.async || true,
        dataType: options.dataType || 'json',
        data: _utils__WEBPACK_IMPORTED_MODULE_1__["default"].parseParam(options.data) || ''
    };

    return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {

        xhr.open(opt.type, opt.url, opt.async);

        xhr.onreadystatechange = function () {
            // readyState: 0: init, 1: connect has set up, 2: recive request, 3: request.. , 4: request end, send response
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var contentType = xhr.getResponseHeader('Content-Type');
                    if (opt.dataType === 'json') {
                        var data = JSON.parse(xhr.responseText);
                        resolve(data);
                    }
                } else {
                    reject(new Error(xhr.status || 'Server is fail.'));
                }
            }
        };

        xhr.onerror = function () {
            reject(new Error(xhr.status || 'Server is fail.'));
        };

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(opt.data);
    });
}

var Ajax = {
    send: send
};

/* harmony default export */ __webpack_exports__["default"] = (Ajax);

/***/ }),

/***/ "./src/utils/Log.js":
/*!**************************!*\
  !*** ./src/utils/Log.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 日志打印类，用于用户复写后自定义显示
 */
var Log = function () {
    function Log() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Log);
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Log, null, [{
        key: "log",
        value: function log(message) {
            var _console;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            (_console = console).log.apply(_console, [message].concat(args));
        }
    }, {
        key: "info",
        value: function info(message) {
            var _console2;

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            (_console2 = console).info.apply(_console2, [message].concat(args));
        }
    }, {
        key: "error",
        value: function error(message) {
            var _console3;

            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }

            (_console3 = console).error.apply(_console3, [message].concat(args));
        }
    }]);

    return Log;
}();

/* harmony default export */ __webpack_exports__["default"] = (Log);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

var utils = {
    /**
     * 用户可以覆盖的弹窗方法
     *
     * 缺省插件以alert方式弹出
     * @param msg
     */
    showMessage: function showMessage(msg) {
        alert(msg);
    },

    /**
     * 验证号码是否合法
     * @param num
     * @returns {boolean}
     */
    checkPhoneNumber: function checkPhoneNumber(num) {
        if (num == null || num.length === 0) return false;else {
            var validNumber = "*#0123456789";
            num = this.trim(num);
            if (num.indexOf("ivr_") === 0) {
                return true;
            }
            for (var i = 0; i < num.length; i++) {
                var c = num.charAt(i);
                if (validNumber.indexOf(c) === -1) {
                    this.showMessage("输入的电话号码不符合规范,请检查是否含有空格或者其他非数字字符.");
                    return false;
                }
            }
            return true;
        }
    },

    /**
     * json转url参数
     * @param param
     * @returns {string}
     */
    parseParam: function parseParam(param) {
        var paramArray = [];
        if (param) {
            babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(param).forEach(function (value) {
                paramArray.push(encodeURIComponent(value) + "=" + encodeURIComponent(param[value]));
            });
        }
        return paramArray.join('&');
    },
    isFunction: function isFunction(f) {
        return typeof f === 'function';
    },
    firstUpperCase: function firstUpperCase(str) {
        return str.replace(/( |^)[a-z]/g, function (c) {
            return c.toUpperCase();
        });
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
};

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./src/view/AgentStateMenu.js":
/*!************************************!*\
  !*** ./src/view/AgentStateMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _model_Agent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Agent */ "./src/model/Agent.js");









var autoIncrementId = 0;

/**
 * 用户状态UI组件
 */

var AgentStateMenu = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AgentStateMenu, _EventEmitter);

    function AgentStateMenu() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$visible = _ref.visible,
            visible = _ref$visible === undefined ? true : _ref$visible,
            _ref$enabled = _ref.enabled,
            enabled = _ref$enabled === undefined ? true : _ref$enabled,
            onAgentStateSelected = _ref.onAgentStateSelected;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AgentStateMenu);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (AgentStateMenu.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(AgentStateMenu)).call(this));

        _this.id = "agentState-" + autoIncrementId++;
        _this._selectedState = _model_Agent__WEBPACK_IMPORTED_MODULE_7__["default"].OFFLINE;
        _this._className = 'operation call';
        _this._textClassName = 'operation_text';
        _this._openClassName = 'open';

        /*
        * 所有可操作动作
        * */
        _this.actionList = [{ 'name': '就绪', 'value': 'ready', 'visible': true }, { 'name': '示忙', 'value': 'busy', 'visible': true }, { 'name': '休息', 'value': 'rest', 'visible': true }, { 'name': '离线', 'value': 'logout', 'visible': false }, { 'name': '登入', 'value': 'login', 'visible': true }];

        _this._visible = visible;
        _this._enabled = enabled;
        _this._disabledClassName = 'disabled';

        _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isFunction(onAgentStateSelected) && _this.on('agentStateSelected', onAgentStateSelected);

        _this.create();
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AgentStateMenu, [{
        key: "create",
        value: function create() {
            var _this2 = this;

            if (!this.rootNode) {
                var rootNode = this.rootNode = document.createElement('li');
                rootNode.id = this.id;
                rootNode.className = this._className;

                rootNode.appendChild(this.generateIconNode());
                rootNode.appendChild(this.generateTextNode());
                rootNode.appendChild(this._generateDropdownMenuNode());

                this._visible || this.hide();

                rootNode.onclick = function (e) {
                    _this2._toggleDropdownMenu(e);
                };
                document.addEventListener('click', this.onBodyClick = this._hideDropdownMenu.bind(this));
            }
        }
    }, {
        key: "generateIconNode",
        value: function generateIconNode() {
            var iconNode = this.agentStateIcon = document.createElement('span');
            iconNode.className = "agentstate-" + this._selectedState;
            return iconNode;
        }
    }, {
        key: "generateTextNode",
        value: function generateTextNode() {
            var textNode = document.createElement('div');
            textNode.className = this._textClassName;
            var agentStateText = this.agentStateText = document.createElement('span');
            agentStateText.innerText = _model_Agent__WEBPACK_IMPORTED_MODULE_7__["default"].getStateName(this._selectedState);
            var agentStateTimer = this.agentStateTimer = document.createElement('span');
            agentStateTimer.innerText = '00:00';
            textNode.appendChild(agentStateText);
            textNode.appendChild(agentStateTimer);

            return textNode;
        }
    }, {
        key: "_generateDropdownMenuNode",
        value: function _generateDropdownMenuNode() {
            var _this3 = this;

            var menuList = this._dropdownMenuNode = document.createElement('ul');
            menuList.className = 'dropdown-menu';
            menuList.style.display = 'none';

            this._actionElementMap = {};
            this.actionList.forEach(function (action) {
                var menu = document.createElement('li');
                // 默认是否显示
                if (!action.visible) {
                    menu.style.display = 'none';
                }
                // 选择后不直接更新显示结果，而是触发agentStateSelected事件，由监听控制修改。
                menu.onclick = function () {
                    _this3.emit('agentStateSelected', action.value);
                };

                var icon = document.createElement('i');
                icon.className = action.value;
                var textSpan = document.createElement('span');
                textSpan.innerText = action.name;

                menu.appendChild(icon);
                menu.appendChild(textSpan);
                menuList.appendChild(menu);
                _this3._actionElementMap[action.value] = menu;
            });

            return menuList;
        }
    }, {
        key: "_hideDropdownMenu",
        value: function _hideDropdownMenu() {
            var _visible = this._dropdownMenuNode.style.display !== 'none';
            if (_visible) {
                this._dropdownMenuNode.style.display = 'none';
                if (this.rootNode.classList.contains(this._openClassName)) {
                    this.rootNode.classList.remove(this._openClassName);
                }
            }
        }
    }, {
        key: "_toggleDropdownMenu",
        value: function _toggleDropdownMenu(e) {
            var _visible = this._dropdownMenuNode.style.display !== 'none';
            if (_visible) {
                this._hideDropdownMenu();
            } else {
                this._dropdownMenuNode.style.display = 'block';
                this.rootNode.classList.add(this._openClassName);
            }
            e.stopPropagation();
        }
    }, {
        key: "setAgentStateTimer",
        value: function setAgentStateTimer(timeValue) {
            this.agentStateTimer.innerText = timeValue;
        }
    }, {
        key: "changeAgentState",
        value: function changeAgentState(state) {
            this._selectedState = state;
            this.agentStateIcon.className = "agentstate-" + state;
            this.agentStateText.innerText = _model_Agent__WEBPACK_IMPORTED_MODULE_7__["default"].getStateName(state);

            // 当点击离线时隐藏离线选项，显示登入选项
            if (state === _model_Agent__WEBPACK_IMPORTED_MODULE_7__["default"].OFFLINE) {
                this._actionElementMap['logout'].style.display = 'none';
                this._actionElementMap['login'].style.display = 'block';
            } else if (state === _model_Agent__WEBPACK_IMPORTED_MODULE_7__["default"].BUSY) {
                this._actionElementMap['login'].style.display = 'none';
                this._actionElementMap['logout'].style.display = 'block';
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (this.rootNode && this.rootNode.parentNode) {
                this.rootNode.parentNode.removeChild(this.rootNode);
            }

            this.removeAllListeners('agentStateSelected');
            document.removeEventListener('click', this.onBodyClick);
        }
    }, {
        key: "show",
        value: function show() {
            this.rootNode.style.display = 'block';
            return this;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.rootNode.style.display = 'none';
            return this;
        }
    }]);

    return AgentStateMenu;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_5___default.a);

/* harmony default export */ __webpack_exports__["default"] = (AgentStateMenu);

/***/ }),

/***/ "./src/view/DialPad.js":
/*!*****************************!*\
  !*** ./src/view/DialPad.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_dialpad_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/dialpad.css */ "./src/css/dialpad.css");
/* harmony import */ var _css_dialpad_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_dialpad_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dialog */ "./src/view/Dialog.js");










/**
 * 拨号盘UI控件
 */

var DialPad = function (_Dialog) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DialPad, _Dialog);

    function DialPad(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            _ref$contacts = _ref.contacts,
            contacts = _ref$contacts === undefined ? [] : _ref$contacts,
            dynamicButton = _ref.dynamicButton,
            onHangupButtonClick = _ref.onHangupButtonClick;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DialPad);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (DialPad.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(DialPad)).call(this, { title: title }));

        _this._contacts = contacts;
        _this.dynamicButton = dynamicButton;
        _this.setContent(_this._generateContentNode());

        _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onHangupButtonClick) && _this.on('hangupButtonClick', onHangupButtonClick);
        return _this;
    }

    /**
     * 生成号码盘内容部分
     * @returns {HTMLDivElement}
     * @private
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DialPad, [{
        key: "_generateContentNode",
        value: function _generateContentNode() {
            var contentNode = document.createElement('div');
            contentNode.className = 'dialpad clearfloat';
            contentNode.onselectstart = function () {
                return false;
            };

            if (this._contacts.length > 0) {
                contentNode.appendChild(this._generateContactSelectNode());
            }
            contentNode.appendChild(this._generatePhoneNumberNode());
            contentNode.appendChild(this._generateNumberPadNode());
            contentNode.appendChild(this._generateCallControllerNode());
            return contentNode;
        }

        /**
         * 生成联系人选择框节点
         * @returns {HTMLSelectElement}
         * @private
         */

    }, {
        key: "_generateContactSelectNode",
        value: function _generateContactSelectNode() {
            var _this2 = this;

            var contactSelectNode = document.createElement('select');
            contactSelectNode.className = 'single-line select_width';
            var options = '<option value="">--请选择电话号码--</option>';
            this._contacts.forEach(function (_contact) {
                options += "<option value=\"" + _contact.agentId + "\">" + _contact.name + "</option>";
            });
            contactSelectNode.innerHTML = options;
            contactSelectNode.onchange = function () {
                contactSelectNode.value && _this2.setPhoneNumber(contactSelectNode.value);
            };
            return contactSelectNode;
        }

        /**
         * 生成电话号码输入栏
         * @returns {HTMLDivElement}
         * @private
         */

    }, {
        key: "_generatePhoneNumberNode",
        value: function _generatePhoneNumberNode() {
            var phoneNumberParentNode = document.createElement('div');
            phoneNumberParentNode.className = 'input-group';

            // 电话号码输入框
            var phoneNumberNode = document.createElement('div');
            phoneNumberNode.className = 'phoneNumber';
            var phoneNumberTextField = this._phoneNumberTextField = document.createElement('input');
            phoneNumberTextField.type = 'text';
            phoneNumberTextField.className = 'number';
            phoneNumberTextField.name = 'phoneNumber';
            phoneNumberNode.appendChild(phoneNumberTextField);

            // 号码盘显示隐藏切换按钮
            var slideDialPadBtn = document.createElement('button');
            slideDialPadBtn.type = 'button';
            slideDialPadBtn.className = 'cc-btn btn-white slidedialpad';
            slideDialPadBtn.title = '数字键盘';
            slideDialPadBtn.innerHTML = '<i class="icon-slidedialpad"></i>';
            slideDialPadBtn.onclick = this.toggleExpandNumberPad.bind(this);

            phoneNumberParentNode.appendChild(phoneNumberNode);
            phoneNumberParentNode.appendChild(slideDialPadBtn);
            return phoneNumberParentNode;
        }
    }, {
        key: "toggleExpandNumberPad",
        value: function toggleExpandNumberPad() {
            var _visible = this.numberPadNode.style.display !== "none";
            if (_visible) {
                this.numberPadNode.style.display = 'none';
            } else {
                this.numberPadNode.style.display = 'block';
            }
        }
    }, {
        key: "setPhoneNumber",
        value: function setPhoneNumber(phoneNmuber) {
            this._phoneNumberTextField.value = phoneNmuber;
        }
    }, {
        key: "getPhoneNumber",
        value: function getPhoneNumber() {
            return this._phoneNumberTextField.value || '';
        }

        /**
         * 生成数字号码盘节点
         * @returns {HTMLUListElement}
         * @private
         */

    }, {
        key: "_generateNumberPadNode",
        value: function _generateNumberPadNode() {
            var numberPadNode = this.numberPadNode = document.createElement('ul');
            numberPadNode.className = 'numberpad clearfloat';
            numberPadNode.style.display = 'none';

            for (var i = 1; i <= 12; i++) {
                var keyButton = document.createElement('li');
                switch (i) {
                    case 10:
                        keyButton.innerText = '*';
                        break;
                    case 11:
                        keyButton.innerText = 0;
                        break;
                    case 12:
                        keyButton.innerText = '#';
                        break;
                    default:
                        keyButton.innerText = i;
                        break;
                }
                keyButton.onclick = this._onKeyClick.bind(this, keyButton.innerText);
                numberPadNode.appendChild(keyButton);
            }

            return numberPadNode;
        }
    }, {
        key: "_onKeyClick",
        value: function _onKeyClick(number) {
            this.setPhoneNumber(this.getPhoneNumber() + number);
        }

        /**
         * 生成控制按钮，包含拨号、清除、挂断、咨询、转出
         * @returns {HTMLUListElement}
         * @private
         */

    }, {
        key: "_generateCallControllerNode",
        value: function _generateCallControllerNode() {
            var _this3 = this;

            var ctlBtnNode = document.createElement('ul');
            ctlBtnNode.className = 'clearfix';

            // 清除键
            var removeButton = document.createElement('li');
            removeButton.className = 'remove';
            removeButton.title = '清除';
            removeButton.innerText = '清除';
            removeButton.onclick = function () {
                var phoneNumber = _this3.getPhoneNumber();
                _this3.setPhoneNumber(phoneNumber.substr(0, phoneNumber.length - 1));
            };
            removeButton.ondblclick = function () {
                _this3.setPhoneNumber('');
            };

            // 挂机键
            var hangupButton = document.createElement('li');
            hangupButton.className = 'hangup';
            hangupButton.title = '挂断';
            hangupButton.innerHTML = '<i class="icon-hangup"></i>';
            hangupButton.onclick = function () {
                _this3.emit('hangupButtonClick');
            };

            if (this.dynamicButton) {
                ctlBtnNode.appendChild(this.dynamicButton);
            }
            ctlBtnNode.appendChild(removeButton);
            ctlBtnNode.appendChild(hangupButton);
            return ctlBtnNode;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(DialPad.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(DialPad.prototype), "destroy", this).call(this);
            this.removeAllListeners('hangupButtonClick');
        }
    }], [{
        key: "createButton",
        value: function createButton(_ref2) {
            var id = _ref2.id,
                _ref2$tagName = _ref2.tagName,
                tagName = _ref2$tagName === undefined ? 'li' : _ref2$tagName,
                btnName = _ref2.btnName,
                className = _ref2.className,
                onClick = _ref2.onClick;

            var button = document.createElement(tagName);
            id && (button.id = id);
            className && (button.className = className);
            btnName && (button.title = btnName);
            btnName && (button.innerText = btnName);
            _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onClick) && (button.onclick = onClick);
            return button;
        }
    }]);

    return DialPad;
}(_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DialPad);

/***/ }),

/***/ "./src/view/Dialog.js":
/*!****************************!*\
  !*** ./src/view/Dialog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_dialog_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/dialog.css */ "./src/css/dialog.css");
/* harmony import */ var _css_dialog_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_dialog_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);








var rootNodeClassName = 'cc-dialog';
var autoIncrementId = 0;

/**
 * 弹框组件
 */

var Dialog = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dialog, _EventEmitter);

    function Dialog(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Dialog.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(Dialog)).call(this));

        _this.id = 'dialog-' + autoIncrementId++;
        _this._title = title;

        _this.diffX = 0;
        _this.diffY = 0;

        _this.create();
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dialog, [{
        key: 'create',
        value: function create() {
            if (!this.rootNode) {
                var rootNode = this.rootNode = document.createElement('div');
                rootNode.id = this.id;
                rootNode.className = rootNodeClassName;

                var contentNode = this.contentNode = document.createElement('div');

                rootNode.appendChild(this._generateTitleNode());
                rootNode.appendChild(this._generateWindowControllerNode());
                rootNode.appendChild(contentNode);

                this.hide();
                document.body.appendChild(rootNode);
            }
        }

        /**
         * 生成头部节点
         * @private
         */

    }, {
        key: '_generateTitleNode',
        value: function _generateTitleNode() {
            var titleNode = this._titleNode = document.createElement('div');
            titleNode.className = 'title';
            titleNode.innerText = this._title;
            titleNode.addEventListener('mousedown', this.mouseHandler.bind(this));
            return titleNode;
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this._title = title;
            this._titleNode.innerText = title;
            return this;
        }

        /**
         * 生成窗口控制节点
         * @private
         */

    }, {
        key: '_generateWindowControllerNode',
        value: function _generateWindowControllerNode() {
            var ctlWinNode = document.createElement('div');
            ctlWinNode.className = 'ctlwin';

            var closeBtn = document.createElement('a');
            closeBtn.className = 'close';
            closeBtn.href = 'javascript:void(0);';
            closeBtn.onclick = this.onClose.bind(this);

            ctlWinNode.appendChild(closeBtn);
            return ctlWinNode;
        }
    }, {
        key: 'mouseHandler',
        value: function mouseHandler(e) {
            switch (e.type) {
                case 'mousedown':
                    this.draggingObj = e.target.offsetParent;
                    if (this.draggingObj != null) {
                        this.diffX = e.clientX - this.draggingObj.offsetLeft;
                        this.diffY = e.clientY - this.draggingObj.offsetTop;
                        document.addEventListener('mousemove', this.titleMouseMoveHandler = this.mouseHandler.bind(this));
                        document.addEventListener('mouseup', this.titleMouseUpHandler = this.mouseHandler.bind(this));
                    }
                    break;
                case 'mousemove':
                    if (this.draggingObj) {
                        this.draggingObj.style.left = e.clientX - this.diffX + 'px';
                        this.draggingObj.style.top = e.clientY - this.diffY + 'px';
                    }
                    break;
                case 'mouseup':
                    document.removeEventListener('mousemove', this.titleMouseMoveHandler);
                    document.removeEventListener('mouseup', this.titleMouseUpHandler);
                    this.draggingObj = null;
                    this.diffX = 0;
                    this.diffY = 0;
                    break;
            }
        }

        /**
         * 默认调用destroy方法，子类可以覆盖此方法用于定制自己的关闭事件。
         */

    }, {
        key: 'onClose',
        value: function onClose() {
            this.destroy();
        }
    }, {
        key: 'setContent',
        value: function setContent(content) {
            if (content instanceof String) {
                this.contentNode.innerHTML = content;
            } else if (content instanceof HTMLElement) {
                this.contentNode.innerHTML = '';
                this.contentNode.appendChild(content);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.rootNode && this.rootNode.parentNode) {
                this.rootNode.parentNode.removeChild(this.rootNode);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.rootNode.style.display = 'block';
            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.rootNode.style.display = 'none';
            return this;
        }
    }]);

    return Dialog;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./src/view/MultilevelMenu.js":
/*!************************************!*\
  !*** ./src/view/MultilevelMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhoneBarButton */ "./src/view/PhoneBarButton.js");









/**
 * 多级菜单组件
 * 当菜单被选点击时触发imteClick事件
 */

var MultilevelMenu = function (_PhoneBarButton) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MultilevelMenu, _PhoneBarButton);

    function MultilevelMenu(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            iconClassName = _ref.iconClassName,
            _ref$visible = _ref.visible,
            visible = _ref$visible === undefined ? true : _ref$visible,
            _ref$enabled = _ref.enabled,
            enabled = _ref$enabled === undefined ? false : _ref$enabled,
            menuData = _ref.menuData,
            onItemClick = _ref.onItemClick;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MultilevelMenu);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (MultilevelMenu.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(MultilevelMenu)).call(this, {
            title: title,
            className: 'operation multilevelMenu',
            iconClassName: iconClassName, visible: visible, enabled: enabled }));

        _this.menuData = menuData;
        _this._openClassName = 'open';

        _this.on('click', function (e) {
            _this._toggleMenu(e);
        });
        document.addEventListener('click', _this.onBodyClick = _this._hideMenu.bind(_this));
        _this.rootNode.onmouseleave = function () {
            _this._hideMenu();
        };

        _utils_utils__WEBPACK_IMPORTED_MODULE_6__["default"].isFunction(onItemClick) && _this.on('itemClick', onItemClick);

        _this.rootNode.appendChild(_this.generateMenu());
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MultilevelMenu, [{
        key: "generateMenu",
        value: function generateMenu() {
            var menuNode = this.menuNode = document.createElement('ul');
            menuNode.className = 'menu-list-box';
            menuNode.style.display = "none";
            menuNode.appendChild(this.generateSubMenu(this.menuData));
            return menuNode;
        }
    }, {
        key: "generateSubMenu",
        value: function generateSubMenu(data) {
            var _this2 = this;

            var fragment = document.createDocumentFragment();
            data && data.forEach(function (val) {
                var menu = document.createElement('li');
                if (val.menu.length > 0) {
                    var textNode = document.createElement('h3');
                    textNode.innerHTML = val.name + "<span class=\"list\"></span>";

                    var subMenu = document.createElement('ul');
                    subMenu.appendChild(_this2.generateSubMenu(val.menu));

                    menu.onmouseenter = function () {
                        subMenu.style.display = 'block';
                    };
                    menu.onmouseleave = function () {
                        subMenu.style.display = 'none';
                    };
                    menu.appendChild(textNode);
                    menu.appendChild(subMenu);
                } else {
                    var _textNode = document.createElement('h3');
                    _textNode.onclick = function () {
                        _this2.emit('itemClick', val);
                    };
                    _textNode.innerText = val.name;
                    menu.appendChild(_textNode);
                }
                fragment.appendChild(menu);
            });
            return fragment;
        }
    }, {
        key: "updateMenuData",
        value: function updateMenuData(menuData) {
            this.menuData = menuData;
            if (this.menuNode && this.menuNode.parentNode) {
                this.menuNode.parentNode.removeChild(this.menuNode);
            }
            this.rootNode.appendChild(this.generateMenu());
        }
    }, {
        key: "_hideMenu",
        value: function _hideMenu() {
            var _visible = this.menuNode.style.display !== "none";
            if (_visible) {
                this.menuNode.style.display = 'none';
                if (this.rootNode.classList.contains(this._openClassName)) {
                    this.rootNode.classList.remove(this._openClassName);
                }
            }
        }
    }, {
        key: "_toggleMenu",
        value: function _toggleMenu(e) {
            var _visible = this.menuNode.style.display !== "none";
            if (_visible) {
                this._hideMenu();
            } else {
                this.menuNode.style.display = 'block';
                this.rootNode.classList.add(this._openClassName);
            }
            e.stopPropagation();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(MultilevelMenu.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(MultilevelMenu.prototype), "destroy", this).call(this);
            this.removeAllListeners('itemClick');
        }
    }]);

    return MultilevelMenu;
}(_PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MultilevelMenu);

/***/ }),

/***/ "./src/view/PhoneBarButton.js":
/*!************************************!*\
  !*** ./src/view/PhoneBarButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");









var autoIncrementId = 0;

var PhoneBarButton = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(PhoneBarButton, _EventEmitter);

    function PhoneBarButton(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            _ref$className = _ref.className,
            className = _ref$className === undefined ? 'operation' : _ref$className,
            _ref$iconClassName = _ref.iconClassName,
            iconClassName = _ref$iconClassName === undefined ? '' : _ref$iconClassName,
            _ref$textClassName = _ref.textClassName,
            textClassName = _ref$textClassName === undefined ? 'operation_text' : _ref$textClassName,
            _ref$visible = _ref.visible,
            visible = _ref$visible === undefined ? true : _ref$visible,
            _ref$enabled = _ref.enabled,
            enabled = _ref$enabled === undefined ? false : _ref$enabled,
            onClick = _ref.onClick;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PhoneBarButton);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (PhoneBarButton.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PhoneBarButton)).call(this));

        _this.id = 'phoneBarButton-' + autoIncrementId++;
        _this._title = title;
        _this._className = className;
        _this._iconClassName = iconClassName;
        _this._textClassName = textClassName;

        _this._visible = visible;
        _this._enabled = enabled;
        _this._disabledClassName = 'disabled';

        _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onClick) && _this.on('click', onClick);

        _this.create();
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PhoneBarButton, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            if (!this.rootNode) {
                var rootNode = this.rootNode = document.createElement('li');
                rootNode.id = this.id;
                rootNode.className = this._className;
                rootNode.onclick = function (e) {
                    _this2.emit('click', e);
                };

                this._visible || this.hide();
                this._enabled || rootNode.classList.add(this._disabledClassName);

                rootNode.appendChild(this.generateIconNode());
                rootNode.appendChild(this.generateTextNode());
            }
            return this;
        }

        /**
         * 创建按钮图标
         * @returns {HTMLElement}
         */

    }, {
        key: 'generateIconNode',
        value: function generateIconNode() {
            var iconNode = document.createElement('em');
            iconNode.className = this._iconClassName;
            return iconNode;
        }
    }, {
        key: 'generateTextNode',
        value: function generateTextNode() {
            var textNode = document.createElement('span');
            textNode.className = this._textClassName;
            textNode.innerText = this._title;
            return textNode;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.rootNode && this.rootNode.parentNode) {
                this.rootNode.parentNode.removeChild(this.rootNode);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this._visible = true;
            this.rootNode.style.display = 'block';
            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this._visible = false;
            this.rootNode.style.display = 'none';
            return this;
        }
    }, {
        key: 'enable',
        value: function enable() {
            if (!this._enabled) {
                this._enabled = true;
                if (this.rootNode.classList.contains(this._disabledClassName)) {
                    this.rootNode.classList.remove(this._disabledClassName);
                }
            }
            return this;
        }
    }, {
        key: 'disable',
        value: function disable() {
            if (this._enabled) {
                this._enabled = false;
                this.rootNode.classList.add(this._disabledClassName);
            }
            return this;
        }
    }, {
        key: 'emit',
        value: function emit(event) {
            if (this._enabled) {
                var _get2;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return (_get2 = babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(PhoneBarButton.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PhoneBarButton.prototype), 'emit', this)).call.apply(_get2, [this, event].concat(args));
            } else {
                return false;
            }
        }
    }, {
        key: 'setTitle',
        value: function setTitle(value) {
            this._title = value;
        }
    }, {
        key: 'setDisabledClassName',
        value: function setDisabledClassName(value) {
            this._disabledClassName = value;
        }
    }]);

    return PhoneBarButton;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (PhoneBarButton);

/***/ }),

/***/ "./src/view/PhoneBarComponent.js":
/*!***************************************!*\
  !*** ./src/view/PhoneBarComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_phonebar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/phonebar.css */ "./src/css/phonebar.css");
/* harmony import */ var _css_phonebar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_phonebar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/_eventemitter3@3.1.2@eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PhoneBarButton */ "./src/view/PhoneBarButton.js");
/* harmony import */ var _AgentStateMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AgentStateMenu */ "./src/view/AgentStateMenu.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _MultilevelMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MultilevelMenu */ "./src/view/MultilevelMenu.js");












var autoIncrementId = 0;
var emptyFunction = function emptyFunction() {};

/**
 * 电话条控件
 */

var PhoneBarComponent = function (_EventEmitter) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PhoneBarComponent, _EventEmitter);

    function PhoneBarComponent() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PhoneBarComponent);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (PhoneBarComponent.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(PhoneBarComponent)).call(this));

        _this.id = 'phoneBar-' + autoIncrementId++;
        _this._rootNodeClassName = 'phonebar-nav';

        _this.buttonList = [{
            'name': 'agentState', 'component': new _AgentStateMenu__WEBPACK_IMPORTED_MODULE_8__["default"](), 'sort': '1'
        }, {
            'name': 'openDialPad', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '呼出',
                iconClassName: 'opendialpad'
            }), 'sort': 2
        }, {
            'name': 'answer', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '应答',
                iconClassName: 'answer'
            }), 'sort': 3
        }, {
            'name': 'hangup', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '挂断',
                iconClassName: 'hangup'
            }), 'sort': 4
        }, {
            'name': 'hold', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '保持',
                iconClassName: 'hold'
            }), 'sort': 5
        }, {
            'name': 'retrieve', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '接回',
                iconClassName: 'retrieve'
            }), 'sort': 6
        }, {
            'name': 'transfer', 'component': new _MultilevelMenu__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: '转接',
                iconClassName: 'transfer'
            }), 'sort': 7
        }, {
            'name': 'rollout', 'component': new _PhoneBarButton__WEBPACK_IMPORTED_MODULE_7__["default"]({
                title: '转出',
                iconClassName: 'rollout'
            }), 'sort': 8
        }, {
            'name': 'conference', 'component': new _MultilevelMenu__WEBPACK_IMPORTED_MODULE_10__["default"]({
                title: '会议',
                iconClassName: 'conference'
            }), 'sort': 9
        }];

        _this.create();
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PhoneBarComponent, [{
        key: 'create',
        value: function create() {
            if (!this.rootNode) {
                var rootNode = this.rootNode = document.createElement('ul');
                rootNode.id = this.id;
                rootNode.className = this._rootNodeClassName;

                this.buttonList.sort(function (a, b) {
                    return a.sort - b.sort;
                }).forEach(function (item) {
                    rootNode.appendChild(item.component.rootNode);
                });

                this.hide();
            }
        }

        /**
         * 根据名称获取组件对象
         * @param buttonName  按钮名称
         * @returns {null|Object}  查询结果组件对象或者null
         */

    }, {
        key: 'getButtonComponent',
        value: function getButtonComponent(buttonName) {
            for (var i = 0, len = this.buttonList.length; i < len; i++) {
                if (this.buttonList[i].name === buttonName) {
                    return this.buttonList[i].component;
                }
            }
            return null;
        }

        /**
         * SIP话机不可用
         */

    }, {
        key: 'changeButtonSipNG',
        value: function changeButtonSipNG() {
            console.log('changeButtonSipNG');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * SIP话机注册成功
         */

    }, {
        key: 'changeButtonSipOK',
        value: function changeButtonSipOK() {
            console.log('changeButtonSipOK');
            this.getButtonComponent("openDialPad").enable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 非就绪状态时按钮状态
         */

    }, {
        key: 'changeButtonWhenNotReady',
        value: function changeButtonWhenNotReady() {
            console.log('changeButtonWhenNotReady');
            this.getButtonComponent("openDialPad").enable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 就绪时的按钮状态
         */

    }, {
        key: 'changeButtonWhenReady',
        value: function changeButtonWhenReady() {
            console.log('changeButtonWhenReady');
            this.getButtonComponent("openDialPad").enable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 登出时的按钮状态
         */

    }, {
        key: 'changeButtonWhenLogout',
        value: function changeButtonWhenLogout() {
            console.log('changeButtonWhenLogout');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 呼入时的按钮状态
         */

    }, {
        key: 'changeButtonWhenRinging',
        value: function changeButtonWhenRinging() {
            console.log('changeButtonWhenRinging');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").enable();
            this.getButtonComponent("hangup").enable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 外呼时的按钮状态
         * @param callType  呼叫类型
         */

    }, {
        key: 'changeButtonWhenDialing',
        value: function changeButtonWhenDialing(callType) {
            console.log('changeButtonWhenDialing');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("hangup").enable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
            if (callType === _constants__WEBPACK_IMPORTED_MODULE_9__["CallType"].PREDICT || callType === _constants__WEBPACK_IMPORTED_MODULE_9__["CallType"].MONITOR) {
                this.getButtonComponent("answer").enable();
            } else {
                this.getButtonComponent("answer").disable();
            }
        }

        /**
         * 通话时的按钮状态
         * @param callType
         */

    }, {
        key: 'changeButtonWhenTalking',
        value: function changeButtonWhenTalking(callType) {
            console.log('changeButtonWhenTalking');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").enable();
            this.getButtonComponent("hold").enable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").enable();
            if (callType === _constants__WEBPACK_IMPORTED_MODULE_9__["CallType"].INTERNAL) {
                this.getButtonComponent("transfer").disable();
            } else if (callType === _constants__WEBPACK_IMPORTED_MODULE_9__["CallType"].CONSULT) {
                this.getButtonComponent("hold").disable();
                this.getButtonComponent("transfer").disable();
                this.getButtonComponent("conference").disable();
            } else {
                this.getButtonComponent("transfer").enable();
            }
        }
    }, {
        key: 'changeButtonWhenHold',


        /**
         * 通话保持时的按钮状态
         */
        value: function changeButtonWhenHold() {
            console.log('changeButtonWhenHold');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").enable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }
    }, {
        key: 'changeButtonWhenIdle',


        /**
         * 挂断电话时的按钮状态
         */
        value: function changeButtonWhenIdle() {
            console.log('changeButtonWhenIdle');
            this.getButtonComponent("openDialPad").enable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").disable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").disable();
            this.getButtonComponent("conference").disable();
        }
    }, {
        key: 'changeButtonWhenDouble',


        /**
         * 两步主叫=>转接时的按钮状态
         */
        value: function changeButtonWhenDouble() {
            console.log('changeButtonWhenDouble');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("answer").disable();
            this.getButtonComponent("hangup").disable();
            this.getButtonComponent("hold").disable();
            this.getButtonComponent("retrieve").enable();
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("rollout").enable();
            this.getButtonComponent("conference").disable();
        }

        /**
         * 两步被叫=>转接时的按钮状态
         */

    }, {
        key: 'changeButtonWhenDoubleCalled',
        value: function changeButtonWhenDoubleCalled() {
            console.log('changeButtonWhenDoubleCalled');
            this.getButtonComponent("transfer").disable();
            this.getButtonComponent("hold").disable();
        }

        /**
         * 两步转接-挂断的按钮状态
         */

    }, {
        key: 'changeButtonWhenDoubleDiscon',
        value: function changeButtonWhenDoubleDiscon() {
            console.log('changeButtonWhenDoubleDiscon');
            this.getButtonComponent("rollout").disable();
        }

        /**
         * 两步转接-未转出-客户挂断的按钮状态
         */

    }, {
        key: 'changeButtonWhenCustomerDiscon',
        value: function changeButtonWhenCustomerDiscon() {
            console.log('changeButtonWhenCustomerDiscon');
            this.getButtonComponent("openDialPad").disable();
            this.getButtonComponent("hangup").enable();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.rootNode && this.rootNode.parentNode) {
                this.rootNode.parentNode.removeChild(this.rootNode);
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.rootNode.style.display = 'block';
            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.rootNode.style.display = 'none';
            return this;
        }
    }]);

    return PhoneBarComponent;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_6___default.a);

/* harmony default export */ __webpack_exports__["default"] = (PhoneBarComponent);

/***/ }),

/***/ "./src/view/ThreewayCallBox.js":
/*!*************************************!*\
  !*** ./src/view/ThreewayCallBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/keys.js");
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js");
/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/get.js");
/* harmony import */ var babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dialog */ "./src/view/Dialog.js");










/**
 * 拨号盘UI控件
 */

var ThreewayCallBox = function (_Dialog) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ThreewayCallBox, _Dialog);

    function ThreewayCallBox(_ref) {
        var _ref$title = _ref.title,
            title = _ref$title === undefined ? '' : _ref$title,
            onJoinButtonClick = _ref.onJoinButtonClick,
            onRemoveCallButtonClick = _ref.onRemoveCallButtonClick,
            onRemoveAllCallButtonClick = _ref.onRemoveAllCallButtonClick;

        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ThreewayCallBox);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (ThreewayCallBox.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(ThreewayCallBox)).call(this, { title: title }));

        _this.phoneMap = {};
        _this.setContent(_this._generateContentNode());

        _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onJoinButtonClick) && _this.on('joinButtonClick', onJoinButtonClick);
        _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onRemoveCallButtonClick) && _this.on('removeCallButtonClick', onRemoveCallButtonClick);
        _utils_utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(onRemoveAllCallButtonClick) && _this.on('removeAllCallButtonClick', onRemoveAllCallButtonClick);
        return _this;
    }

    /**
     * 覆盖父类方法，默认隐藏窗口
     */


    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ThreewayCallBox, [{
        key: "onClose",
        value: function onClose() {
            this.hide();
        }

        /**
         * 生成号码盘内容部分
         * @returns {HTMLDivElement}
         * @private
         */

    }, {
        key: "_generateContentNode",
        value: function _generateContentNode() {
            var box = document.createElement('div');
            box.className = 'threewayCallBox';

            box.appendChild(this._generatePhoneNumberNode());

            var thirdPhoneNumberNode = this.thirdPhoneNumberNode = document.createElement('div');
            thirdPhoneNumberNode.className = 'calloption';
            box.appendChild(thirdPhoneNumberNode);

            box.appendChild(this._generateCallControllerNode());

            return box;
        }

        /**
         * 生成电话号码输入栏
         * @returns {HTMLDivElement}
         * @private
         */

    }, {
        key: "_generatePhoneNumberNode",
        value: function _generatePhoneNumberNode() {
            var _this2 = this;

            var phoneNumberParentNode = document.createElement('div');
            phoneNumberParentNode.className = 'row';

            // label
            var labelNode = document.createElement('label');
            labelNode.innerText = '加入指定电话或分机号';

            // 电话号码输入框
            var phoneNumberTextField = this._phoneNumberTextField = document.createElement('input');
            phoneNumberTextField.type = 'text';
            phoneNumberTextField.name = 'inputThreewayDN';

            // 号码盘显示隐藏切换按钮
            var joinBtn = document.createElement('button');
            joinBtn.type = 'button';
            joinBtn.innerText = '加入';
            joinBtn.title = '加入';
            joinBtn.onclick = function () {
                _this2.emit('joinButtonClick', phoneNumberTextField.value);
            };

            phoneNumberParentNode.appendChild(labelNode);
            phoneNumberParentNode.appendChild(phoneNumberTextField);
            phoneNumberParentNode.appendChild(joinBtn);
            return phoneNumberParentNode;
        }

        /**
         * 加入会议列表
         * @param phoneNumber
         * @param callID
         */

    }, {
        key: "join",
        value: function join(phoneNumber, callID) {
            // 只有会议列表中不存在才添加
            if (!this.phoneMap[phoneNumber]) {
                var labelNode = document.createElement('label');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = callID;
                labelNode.appendChild(checkbox);
                labelNode.appendChild(document.createTextNode(phoneNumber));
                this.phoneMap[phoneNumber] = labelNode;
                this.thirdPhoneNumberNode.appendChild(labelNode);
            }
        }

        /**
         * 踢出会议列表
         * @param phoneNumber
         */

    }, {
        key: "remove",
        value: function remove(phoneNumber) {
            var phoneNode = this.phoneMap[phoneNumber];
            if (phoneNode && phoneNode.parentNode) {
                phoneNode.parentNode.removeChild(phoneNode);
            }
        }

        /**
         * 生成控制按钮，包含全选、踢出选中、踢出所有、关闭
         * @returns {HTMLDivElement}
         * @private
         */

    }, {
        key: "_generateCallControllerNode",
        value: function _generateCallControllerNode() {
            var _this3 = this;

            var ctlBtnNode = document.createElement('div');
            ctlBtnNode.className = 'row';

            var leftBtnsNode = document.createElement('div');
            leftBtnsNode.className = 'pull-left';
            // 全选
            var checkAllLabel = document.createElement('label');
            var checkAllButton = this._checkAllButton = document.createElement('input');
            checkAllButton.type = 'checkbox';
            checkAllButton.className = 'checkAll';
            checkAllButton.onchange = function () {
                if (checkAllButton.checked === true) {
                    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this3.phoneMap).forEach(function (key) {
                        _this3.phoneMap[key].firstElementChild.checked = true;
                    });
                } else {
                    babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this3.phoneMap).forEach(function (key) {
                        _this3.phoneMap[key].firstElementChild.checked = false;
                    });
                }
            };
            checkAllLabel.appendChild(checkAllButton);
            checkAllLabel.appendChild(document.createTextNode('全选'));
            leftBtnsNode.appendChild(checkAllLabel);

            var rightBtnsNode = document.createElement('div');
            rightBtnsNode.className = 'pull-right';
            //踢出选中通话
            var removeSelectedButton = document.createElement('button');
            removeSelectedButton.type = 'button';
            removeSelectedButton.innerText = '踢出选中通话';
            removeSelectedButton.onclick = function () {
                babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this3.phoneMap).forEach(function (key) {
                    if (_this3.phoneMap[key] && _this3.phoneMap[key].firstElementChild.checked) {
                        _this3.emit('removeCallButtonClick', _this3.phoneMap[key].firstElementChild.value);
                    }
                });
            };
            //踢出全部通话
            var removeAllButton = document.createElement('button');
            removeAllButton.type = 'button';
            removeAllButton.innerText = '踢出全部通话';
            removeAllButton.onclick = function () {
                _this3.emit('removeAllCallButtonClick');
            };
            //关闭
            var closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.innerText = '关闭';
            closeButton.onclick = function () {
                _this3.onClose();
            };
            rightBtnsNode.appendChild(removeSelectedButton);
            rightBtnsNode.appendChild(removeAllButton);
            rightBtnsNode.appendChild(closeButton);

            ctlBtnNode.appendChild(leftBtnsNode);
            ctlBtnNode.appendChild(rightBtnsNode);
            return ctlBtnNode;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(ThreewayCallBox.prototype.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(ThreewayCallBox.prototype), "destroy", this).call(this);

            this.removeAllListeners('joinButtonClick');
            this.removeAllListeners('removeCallButtonClick');
            this.removeAllListeners('removeAllCallButtonClick');
        }
    }]);

    return ThreewayCallBox;
}(_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ThreewayCallBox);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=PhoneBar.js.map