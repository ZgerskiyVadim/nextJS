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
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/components/Button/index.js";



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
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/components/Button/style.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
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
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/components/Header/index.js";




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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: '/',
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
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/components/Header/style.js";

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_creators_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/action_creators/posts */ "./actions/action_creators/posts/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var _styles_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/pages */ "./styles/pages/index.js");
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/pages/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column head-top-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Kunden und Erzeuger.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), "Direkt verbunden."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Direktstrom durch Blockchain*."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column-content head-h4-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "100% \xD6kostrom\xA0zu g\xFCnstigen Preisen. Die Lition\xA0Energieb\xF6rse vernetzt Konsumenten und Erzeuger auf direktem Wege.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Dein Strom - Dein Kraftwerk - Du hast die Wahl!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), "Revolutioniere mit uns den Energiemarkt!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "column-content content-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        href: 'http://www.lition.de/tarif',
        title: 'Unser Tarif',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ce-image",
        "data-align": "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "is-content",
        src: "https://www.lition.de/wp-content/uploads/2018/03/180327-den-stage-illusration@3x.png",
        alt: "180327-den-stage-illusration@3x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_pages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      var isServer = !!req; // reduxStore.dispatch();

      return {};
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    posts: state.Posts.posts.data.comment_status
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_objectSpread({}, _actions_action_creators_posts__WEBPACK_IMPORTED_MODULE_3__), dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

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
var _jsxFileName = "/home/vadim/Documents/nextJS/nextJS/styles/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1804446917",
    css: "body{margin:0;font-size:18px;line-height:1.66667;font-family:'Open Sans',Arial,sans-serif;box-sizing:border-box;width:100%;min-height:100%;-webkit-font-smoothing:antialiased;overflow-y:scroll;overflow-x:hidden;}.section{padding-top:10rem;padding-bottom:8.055555555555555rem;background-image:url(https://www.lition.de/wp-content/uploads/2018/04/stage_bg-6.png);background-size:cover;background-position:0% 0%;background-attachment:scroll;background-color:transparent;}.section .container .row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.column-content{padding-top:0.5555555555555556rem;}.column-content span{color:rgb(255,255,255);}.column-content h1{margin:0;font-size:2.25rem;line-height:2.4rem;}.column-content h3{font-size:1.1rem;line-height:2rem;margin:0;}.column-content h3 span{color:#48d376;font-weight:500;}.column-content.head-h4-text{padding:1.1111111111111112rem 3.3333333333333335rem 0 0;}.column-content h4{font-size:1.49rem;line-height:1.49rem;margin:0 0 1.66667rem 0;}.column-content h4 span{font-size:16px;line-height:28px;font-weight:400;}img.is-content{max-width:100%;height:auto;}.column-content.content-button{padding:1.1rem 0 2.7rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhZGltL0RvY3VtZW50cy9uZXh0SlMvbmV4dEpTL3N0eWxlcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIsQUFHc0IsQUFZUyxBQVNULEFBR3FCLEFBR1QsQUFHcEIsQUFLUSxBQUtILEFBSTBDLEFBR2xDLEFBS1AsQUFLSSxBQUlXLFNBNURQLEFBOEJMLEtBVUYsQ0FZQyxBQUtELEVBdEJDLENBdkIyQixBQW1DeEIsS0FwQnBCLENBMUI0QixFQTRENUIsQ0E5Qm1CLEFBMkJuQixHQWpCQSxFQVlnQixFQTdCaEIsQUFZUyxJQVllLEtBWHhCLENBbkNpRCxFQThCakQsRUFzQkEsTUF6QzhGLEVBK0I5RixNQUtBLFlBNUJBLFdBbEI4QixzQkFDWCxXQUNLLGdCQUNtQixNQVFiLHNCQUNJLE9BUlIsa0JBQ0EsQ0FRVyxpQkFQckMsWUFRcUMsNkJBQ3JDIiwiZmlsZSI6Ii9ob21lL3ZhZGltL0RvY3VtZW50cy9uZXh0SlMvbmV4dEpTL3N0eWxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjY2Njc7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsQXJpYWwsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4LjA1NTU1NTU1NTU1NTU1NXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5saXRpb24uZGUvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDQvc3RhZ2VfYmctNi5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLnNlY3Rpb24gLmNvbnRhaW5lciAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNTU1NTU1NTU1NTU1NTU1NnJlbTtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50IHNwYW4ge1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50IGgze1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50IGgzIHNwYW4ge1xuICAgIGNvbG9yOiAjNDhkMzc2O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5jb2x1bW4tY29udGVudC5oZWFkLWg0LXRleHQge1xuICAgIHBhZGRpbmc6IDEuMTExMTExMTExMTExMTExMnJlbSAzLjMzMzMzMzMzMzMzMzMzMzVyZW0gMCAwO1xuICAgIH1cbiAgICAuY29sdW1uLWNvbnRlbnQgaDR7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40OXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40OXJlbTtcbiAgICBtYXJnaW46IDAgMCAxLjY2NjY3cmVtIDA7XG4gICAgfVxuICAgIC5jb2x1bW4tY29udGVudCBoNCBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgaW1nLmlzLWNvbnRlbnQge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgLmNvbHVtbi1jb250ZW50LmNvbnRlbnQtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMS4xcmVtIDAgMi43cmVtIDA7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbikiXX0= */\n/*@ sourceURL=/home/vadim/Documents/nextJS/nextJS/styles/pages/index.js */",
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