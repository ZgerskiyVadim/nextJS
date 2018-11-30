module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/action_creators/posts/index.js":
/*!************************************************!*\
  !*** ./actions/action_creators/posts/index.js ***!
  \************************************************/
/*! exports provided: getPostsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsRequest", function() { return getPostsRequest; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./actions/index.js");

function getPostsRequest() {
  return {
    type: _index__WEBPACK_IMPORTED_MODULE_0__["GET_GROUPS_PENDING"]
  };
}

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: GET_GROUPS_PENDING, GET_GROUPS_SUCCESS, GET_GROUPS_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GROUPS_PENDING", function() { return GET_GROUPS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GROUPS_SUCCESS", function() { return GET_GROUPS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GROUPS_FAIL", function() { return GET_GROUPS_FAIL; });
var GET_GROUPS_PENDING = 'GET_GROUPS_PENDING';
var GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS';
var GET_GROUPS_FAIL = 'GET_GROUPS_FAIL';

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/Button/style.js");
var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/components/Button/index.js";



var Button = function Button(_ref) {
  var href = _ref.href,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_self",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Button/style.js":
/*!************************************!*\
  !*** ./components/Button/style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/components/Button/style.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "\n      .button {\n        background-color: #48d376;\n        border-radius: 0.2222222222222222rem;\n        border-width: 0rem;\n        box-shadow: 0rem 0.4444444444444444rem 0.7777777777777778rem -0.4444444444444444rem rgba(0,0,0,0.5);\n        border-style: solid;\n        cursor: pointer;\n        width: 300px;\n        height: 65px;\n        display: flex;\n        align-items: center;\n      }\n      .button:hover {\n      background-color: #1472ac;\n      }\n      .button a {\n        margin: 0 auto;\n        font-size: 1.5rem;\n        color: #ffffff;\n        border-radius: 0.2222222222222222rem;\n        text-decoration: none;\n      }\n    ");
});

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/Header/style.js");
var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/components/Header/index.js";




var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'navbar-inner',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'navbar-logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    title: "Lition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://www.lition.de/wp-content/uploads/2018/04/logo-sprite.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: 'navbar-nav',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Vorteile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Vision"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.lition.de/konzept",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Konzept"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://kundenportal.lition.de",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Kundenportal"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.lition.de/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\xDCber uns"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/style.js":
/*!************************************!*\
  !*** ./components/Header/style.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/components/Header/style.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, "\n        .header {\n        position: fixed;\n        padding-top: 1.6rem;\n        padding-bottom: 1.6rem;\n        width: 100%;\n        height: 3.88889rem;\n        position: absolute;\n        z-index: 120;\n    }\n        .container {\n        max-width: 1230px;\n        height: 100%;\n        width: auto;\n        margin-right: auto;\n        margin-left: auto;\n        padding: 0 1.66667rem;\n    }\n        .navbar-inner {\n        display: flex;\n        align-items: center;\n        height: 100%;\n        position: relative;\n        width: 100%;\n        max-width: 100%;\n        flex: 0 0 auto;\n        flex-basis: 100%;\n    }\n        .navbar-logo {\n        display: flex;\n        align-items: center;\n    }\n        .navbar-logo a {\n        text-decoration: none;\n        font-size: 1.22222rem;\n        color: #000;\n        height: 50px;\n        overflow: hidden;\n    }\n\n        .navbar-logo a img {\n        width: 11rem;\n    }\n        .navbar-nav {\n        display: flex;\n        align-items: center;\n        position: absolute;\n        height: 100%;\n        line-height: 1;\n        right: 0!important;\n        font-family: \"Roboto\", sans-serif;\n        font-weight: 500;\n        font-style: normal;\n    }\n        .navbar-nav .menu {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-end;\n        padding: 0;\n        height: 100%;\n        align-items: center;\n    }\n        .navbar-nav .menu .menu-item {\n        list-style: none;\n        font-size: 0.8888888888888888em;\n        line-height: 1.7777777777778;\n        letter-spacing: 0rem;\n        line-height: 0;\n        font-family: \"Montserrat\", sans-serif;\n        font-weight: 500;\n        font-style: normal;\n    }\n    .navbar-nav .menu .menu-item:first-child a {\n        padding-left: 0;\n        text-decoration: none;\n        color: #1573dd;\n    }\n        .navbar-nav .menu .menu-item a {\n        padding: 0 1.3888888888889rem;\n        text-decoration: none;\n        color: #1573dd;\n    }\n        .navbar-nav .menu .menu-item span {\n        color: #1472ac;\n        border-bottom-color: #ffffff;\n        color: #ffffff;\n    }\n        .navbar-nav .menu .menu-item span:hover {\n        color: #1472ac;\n    }\n    ");
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_action_creators_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../actions/action_creators/posts */ "./actions/action_creators/posts/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _styles_pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/pages */ "./styles/pages/index.js");

var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/pages/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.actions.getPostsRequest();
    }
  }, {
    key: "render",
    value: function render() {
      console.log('state', this.props.posts);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Lition"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column head-top-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Kunden und Erzeuger.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), "Direkt verbunden."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Direktstrom durch Blockchain*."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column-content head-h4-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "100% \xD6kostrom\xA0zu g\xFCnstigen Preisen. Die Lition\xA0Energieb\xF6rse vernetzt Konsumenten und Erzeuger auf direktem Wege.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Dein Strom - Dein Kraftwerk - Du hast die Wahl!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), "Revolutioniere mit uns den Energiemarkt!")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "column-content content-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        href: 'http://www.lition.de/tarif',
        title: 'Unser Tarif',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "ce-image",
        "data-align": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "is-content",
        src: "https://www.lition.de/wp-content/uploads/2018/03/180327-den-stage-illusration@3x.png",
        alt: "180327-den-stage-illusration@3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_pages__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var reduxStore, req, isServer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore, req = _ref.req;
                isServer = !!req;
                _context.next = 4;
                return setTimeout(function () {}, 2000);

              case 4:
                return _context.abrupt("return", {
                  hey: 'HEY'
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.Posts.posts.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_objectSpread({}, _actions_action_creators_posts__WEBPACK_IMPORTED_MODULE_5__), dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./styles/pages/index.js":
/*!*******************************!*\
  !*** ./styles/pages/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/styles/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "248328706",
    css: "body{margin:0;font-size:18px;line-height:1.66667;font-family:'Open Sans','Arial','sans-serif';box-sizing:border-box;width:100%;min-height:100%;-webkit-font-smoothing:antialiased;overflow-y:scroll;overflow-x:hidden;}.section{padding-top:10rem;padding-bottom:8.055555555555555rem;background-image:url(https://www.lition.de/wp-content/uploads/2018/04/stage_bg-6.png);background-size:cover;background-position:0% 0%;background-attachment:scroll;background-color:transparent;}.section .container .row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.column-content{padding-top:0.5555555555555556rem;}.column-content span{color:rgb(255,255,255);}.column-content h1{margin:0;font-size:2.25rem;line-height:2.4rem;}.column-content h3{font-size:1.1rem;line-height:2rem;margin:0;}.column-content h3 span{color:#48d376;font-weight:500;}.column-content.head-h4-text{padding:1.1111111111111112rem 3.3333333333333335rem 0 0;}.column-content h4{font-size:1.49rem;line-height:1.49rem;margin:0 0 1.66667rem 0;}.column-content h4 span{font-size:16px;line-height:28px;font-weight:400;}img.is-content{max-width:100%;height:auto;}.column-content.content-button{padding:1.1rem 0 2.7rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL0lOU1RJTkNUT09MUy9veHkvdmFkaW0vcHJvamVjdHMgZG9jdW1lbnRzL3dpdGgtcmVkdXgtYXBwL3N0eWxlcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHOEIsQUFHc0IsQUFZUyxBQVNULEFBR3FCLEFBR1QsQUFHcEIsQUFLUSxBQUtILEFBSTBDLEFBR2xDLEFBS1AsQUFLSSxBQUlXLFNBNURQLEFBOEJMLEtBVUYsQ0FZQyxBQUtELEVBdEJDLENBdkIyQixBQW1DeEIsS0FwQnBCLENBMUI0QixFQTRENUIsQ0E5Qm1CLEFBMkJuQixHQWpCQSxFQVlnQixFQTdCaEIsQUFZUyxJQVllLEtBWHhCLENBbkN1RCxFQThCdkQsRUFzQkEsTUF6QzhGLEVBK0I5RixNQUtBLFlBNUJBLGVBbEI4QixzQkFDWCxXQUNLLGdCQUNtQixFQVFiLHNCQUNJLFdBUlIsZUFTVyxHQVJYLGtCQUMxQixRQVFxQyw2QkFDckMiLCJmaWxlIjoiL2hvbWUvSU5TVElOQ1RPT0xTL294eS92YWRpbS9wcm9qZWN0cyBkb2N1bWVudHMvd2l0aC1yZWR1eC1hcHAvc3R5bGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gICAgPHN0eWxlIGpzeD1cInRydWVcIiBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42NjY2NztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0FyaWFsJywgJ3NhbnMtc2VyaWYnO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cbiAgICAgICAgLnNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDguMDU1NTU1NTU1NTU1NTU1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LmxpdGlvbi5kZS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNC9zdGFnZV9iZy02LnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2VjdGlvbiAuY29udGFpbmVyIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC41NTU1NTU1NTU1NTU1NTU2cmVtO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQgc3BhbiB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgfVxuICAgIC5jb2x1bW4tY29udGVudCBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQgaDN7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQgaDMgc3BhbiB7XG4gICAgY29sb3I6ICM0OGQzNzY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50LmhlYWQtaDQtdGV4dCB7XG4gICAgcGFkZGluZzogMS4xMTExMTExMTExMTExMTEycmVtIDMuMzMzMzMzMzMzMzMzMzMzNXJlbSAwIDA7XG4gICAgfVxuICAgIC5jb2x1bW4tY29udGVudCBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxLjQ5cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ5cmVtO1xuICAgIG1hcmdpbjogMCAwIDEuNjY2NjdyZW0gMDtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50IGg0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBpbWcuaXMtY29udGVudCB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQuY29udGVudC1idXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxLjFyZW0gMCAyLjdyZW0gMDtcbiAgICB9XG4gICAgYH08L3N0eWxlPlxuKSJdfQ== */\n/*@ sourceURL=/home/INSTINCTOOLS/oxy/vadim/projects documents/with-redux-app/styles/pages/index.js */",
    __self: this
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map