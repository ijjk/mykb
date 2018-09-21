module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(16);

var urljoin = __webpack_require__(17);

module.exports = function (path, absolute) {
  var _ref = typeof window === 'undefined' ? app.get('kbConf') : window.kbConf,
      pathPrefix = _ref.pathPrefix;

  path = urljoin(pathPrefix, path);
  if (!absolute) return path; // absolute should only be used during ssr

  return url.format({
    hostname: app.get('host'),
    port: app.get('port'),
    pathname: path,
    protocol: 'http'
  });
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return doLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return doLogin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_util_getUrl__WEBPACK_IMPORTED_MODULE_3__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 // define action types

var SET_USER = 'SET_USER';
var LOGIN_PENDING = 'LOGIN_PENDING';
var LOGIN_FAILED = 'LOGIN_FAILED';
var LOGOUT = 'LOGOUT';
var setUser = function setUser(user) {
  _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
    type: SET_USER,
    data: user
  });
}; // setUser

var doLogout = function doLogout() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('jwt');
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
  }

  _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
    type: LOGOUT
  });
}; // doLogout

function doLogin(_x, _x2, _x3) {
  return _doLogin.apply(this, arguments);
} // doLogin

function _doLogin() {
  _doLogin = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(creds, jwt, noPend) {
    var authReqOpts, authReqHead, authReqBody, authReq, authRes, error, _ref, accessToken, payload, _JSON$parse, userId, userReq, userRes;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            !noPend && _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
              type: LOGIN_PENDING
            });
            authReqOpts = {
              method: 'POST',
              credentials: 'include'
            };
            authReqHead = {
              headers: jwt ? {
                Authorization: jwt
              } : {
                'Content-Type': 'application/json'
              }
            };
            authReqBody = jwt ? null : {
              body: JSON.stringify(_objectSpread({}, creds, {
                strategy: 'local'
              }))
            };
            authReq = new Request(_util_getUrl__WEBPACK_IMPORTED_MODULE_3___default()('auth'), _objectSpread({}, authReqOpts, authReqHead, authReqBody));
            _context.next = 7;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(authReq).catch(function (err) {
              _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
                type: LOGIN_FAILED,
                data: err.message
              });
            });

          case 7:
            authRes = _context.sent;

            if (authRes.ok) {
              _context.next = 20;
              break;
            }

            _context.prev = 9;
            _context.next = 12;
            return authRes.json();

          case 12:
            error = _context.sent;
            error = error.message;
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](9);
            error = authRes.status === 429 ? 'Max login attempts reached' : 'An error occurred during login';

          case 19:
            return _context.abrupt("return", _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
              type: LOGIN_FAILED,
              data: error
            }));

          case 20:
            _context.next = 22;
            return authRes.json();

          case 22:
            _ref = _context.sent;
            accessToken = _ref.accessToken;
            payload = accessToken.split('.')[1];
            _JSON$parse = JSON.parse(atob(payload)), userId = _JSON$parse.userId;
            userReq = new Request(_util_getUrl__WEBPACK_IMPORTED_MODULE_3___default()("/users/".concat(userId)), {
              headers: {
                Authorization: accessToken
              }
            });
            _context.next = 29;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(userReq);

          case 29:
            userRes = _context.sent;

            if (userRes.ok) {
              _context.next = 32;
              break;
            }

            return _context.abrupt("return", _store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].dispatch({
              type: LOGIN_FAILED,
              data: 'failed to get user'
            }));

          case 32:
            window.localStorage.setItem('jwt', accessToken);
            _context.t1 = setUser;
            _context.next = 36;
            return userRes.json();

          case 36:
            _context.t2 = _context.sent;
            (0, _context.t1)(_context.t2);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[9, 16]]);
  }));
  return _doLogin.apply(this, arguments);
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: ./redux/actions/userAct.js
var userAct = __webpack_require__(2);

// CONCATENATED MODULE: ./redux/reducers/userRed.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initState = {
  setup: false,
  _id: null,
  email: null,
  admin: null,
  pending: false,
  error: null
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case userAct["d" /* SET_USER */]:
      {
        return _objectSpread({}, initState, action.data);
      }

    case userAct["b" /* LOGIN_PENDING */]:
      {
        return _objectSpread({}, initState, {
          pending: true
        });
      }

    case userAct["a" /* LOGIN_FAILED */]:
      {
        return _objectSpread({}, state, {
          pending: false,
          error: action.data
        });
      }

    case userAct["c" /* LOGOUT */]:
      {
        return initState;
      }

    default:
      return state;
  }
}

/* harmony default export */ var userRed = (user);
// CONCATENATED MODULE: ./redux/store.js


var middleware;

if (false) { var logger; }

var reducers = Object(external_redux_["combineReducers"])({
  user: userRed
});
/* harmony default export */ var store = __webpack_exports__["a"] = (middleware ? Object(external_redux_["createStore"])(reducers, middleware) : Object(external_redux_["createStore"])(reducers));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaddedRow = function PaddedRow(_ref) {
  var children = _ref.children,
      amount = _ref.amount,
      vCenter = _ref.vCenter;
  amount = amount || 20;

  var PadItem = function PadItem() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'column column-' + amount + ' nomob'
    });
  };

  var rowProps = {
    className: 'row'
  };
  if (vCenter) rowProps = {
    className: 'row v-center'
  };else rowProps = _objectSpread({}, rowProps, {
    style: {
      paddingTop: amount
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", rowProps, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PadItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PadItem, null));
};

/* harmony default export */ __webpack_exports__["a"] = (PaddedRow);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Spinner = function Spinner(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "spinner"
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  getKey: function getKey(e) {
    return e.which || e.keyCode;
  },
  isCtrlKey: function isCtrlKey(key) {
    return key === 91 || key === 93 || key === 17;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (req) {
  if (req) return req.jwt;

  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('jwt');
  }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(5);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(8);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./redux/actions/userAct.js
var userAct = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(14);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./util/getUrl.js
var getUrl = __webpack_require__(1);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);

// EXTERNAL MODULE: ./util/mapUser.js
var mapUser = __webpack_require__(6);

// CONCATENATED MODULE: ./comps/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Header_NavLink = function NavLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      active = _ref.active;
  var activeClass = active ? ' active' : '';
  return external_react_default.a.createElement(link_default.a, {
    href: href,
    as: getUrl_default()(href)
  }, external_react_default.a.createElement("a", {
    className: activeClass
  }, children));
};

var navItems = [['/', 'Home'], ['/new', 'New Doc'], ['/settings', 'Settings']];

var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hideNav", function () {
      return _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleNav", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isActive", function (url) {
      return getUrl_default()(_this.props.router.pathname) === getUrl_default()(url);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logout", function (e) {
      e.preventDefault();

      _this.hideNav();

      Object(userAct["f" /* doLogout */])();
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var expandClass = this.state.open ? ' active' : '';
      var user = this.props.user;
      return external_react_default.a.createElement("nav", {
        className: "navbar",
        role: "navigation",
        "aria-label": "main navigation"
      }, external_react_default.a.createElement("div", {
        className: "navbar-brand"
      }, external_react_default.a.createElement(Header_NavLink, {
        href: "/"
      }, external_react_default.a.createElement("h3", {
        onClick: this.hideNav
      }, "MYKB"))), !user.email ? null : [external_react_default.a.createElement("div", {
        className: 'navbar-burger ' + expandClass,
        onClick: this.toggleNav,
        key: "burger"
      }, external_react_default.a.createElement("div", null), external_react_default.a.createElement("div", null), external_react_default.a.createElement("div", null)), external_react_default.a.createElement("div", {
        className: 'navbar-items' + expandClass,
        key: "items"
      }, navItems.map(function (item) {
        return external_react_default.a.createElement(Header_NavLink, {
          key: item[0],
          href: item[0],
          active: _this2.isActive(item[0])
        }, external_react_default.a.createElement("p", {
          className: "item",
          onClick: _this2.hideNav
        }, item[1]));
      }), external_react_default.a.createElement("a", {
        href: "/logout",
        onClick: this.logout
      }, external_react_default.a.createElement("p", {
        className: "item"
      }, "Logout")))]);
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var comps_Header = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(mapUser["a" /* default */])(Header_Header)));
// EXTERNAL MODULE: ./util/keys.js
var keys = __webpack_require__(12);

// CONCATENATED MODULE: ./comps/KeyShortcuts.js
function KeyShortcuts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KeyShortcuts_typeof = function _typeof(obj) { return typeof obj; }; } else { KeyShortcuts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KeyShortcuts_typeof(obj); }

function KeyShortcuts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KeyShortcuts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KeyShortcuts_createClass(Constructor, protoProps, staticProps) { if (protoProps) KeyShortcuts_defineProperties(Constructor.prototype, protoProps); if (staticProps) KeyShortcuts_defineProperties(Constructor, staticProps); return Constructor; }

function KeyShortcuts_possibleConstructorReturn(self, call) { if (call && (KeyShortcuts_typeof(call) === "object" || typeof call === "function")) { return call; } return KeyShortcuts_assertThisInitialized(self); }

function KeyShortcuts_getPrototypeOf(o) { KeyShortcuts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KeyShortcuts_getPrototypeOf(o); }

function KeyShortcuts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KeyShortcuts_setPrototypeOf(subClass, superClass); }

function KeyShortcuts_setPrototypeOf(o, p) { KeyShortcuts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KeyShortcuts_setPrototypeOf(o, p); }

function KeyShortcuts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KeyShortcuts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* - keyboard shortcuts
  g then h -> navigate home
  g then n -> navigate to new doc
  g then s -> navigate to settings
  g then l -> logout
  e (when on doc page) -> edit doc
  / (when on home page) -> focus search
  ctrl/cmd + enter -> submit new doc (handled in CodeMirror component)
*/

var keyToUrl = {
  72: '/',
  78: '/new',
  83: '/settings'
};
var keyToEl = {
  69: {
    sel: '#edit',
    func: 'click'
  },
  191: {
    sel: '.search',
    func: 'focus'
  }
};

var KeyShortcuts_KeyShortcuts =
/*#__PURE__*/
function (_Component) {
  KeyShortcuts_inherits(KeyShortcuts, _Component);

  function KeyShortcuts() {
    var _getPrototypeOf2;

    var _this;

    KeyShortcuts_classCallCheck(this, KeyShortcuts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = KeyShortcuts_possibleConstructorReturn(this, (_getPrototypeOf2 = KeyShortcuts_getPrototypeOf(KeyShortcuts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    KeyShortcuts_defineProperty(KeyShortcuts_assertThisInitialized(KeyShortcuts_assertThisInitialized(_this)), "handleDown", function (e) {
      var tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      var key = Object(keys["getKey"])(e);

      if (_this.prevKey === 71) {
        // prev key was g
        switch (key) {
          case 72:
          case 78:
          case 83:
            {
              var url = keyToUrl[key];
              router_default.a.push(url, getUrl_default()(url));
              break;
            }

          case 76:
            {
              setTimeout(userAct["f" /* doLogout */], 1);
              break;
            }

          default:
            break;
        }
      }

      switch (key) {
        case 69:
        case 191:
          {
            var _keyToEl$key = keyToEl[key],
                sel = _keyToEl$key.sel,
                func = _keyToEl$key.func;
            var el = document.querySelector(sel);
            if (el) setTimeout(function () {
              return el[func]();
            }, 1);
            break;
          }

        default:
          break;
      }

      _this.prevKey = key;
    });

    KeyShortcuts_defineProperty(KeyShortcuts_assertThisInitialized(KeyShortcuts_assertThisInitialized(_this)), "render", function () {
      return null;
    });

    return _this;
  }

  KeyShortcuts_createClass(KeyShortcuts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keydown', this.handleDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.handleDown);
    }
  }]);

  return KeyShortcuts;
}(external_react_["Component"]);

/* harmony default export */ var comps_KeyShortcuts = (KeyShortcuts_KeyShortcuts);
// CONCATENATED MODULE: ./comps/Footer.js


var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "footer"
  }, external_react_default.a.createElement("p", null, "Powered by", ' ', external_react_default.a.createElement("a", {
    href: "//github.com/ijjk/mykb",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "MYKB")));
};

/* harmony default export */ var comps_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./comps/Spinner.js
var Spinner = __webpack_require__(11);

// EXTERNAL MODULE: ./comps/PaddedRow.js
var PaddedRow = __webpack_require__(9);

// CONCATENATED MODULE: ./comps/Login.js
function Login_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Login_typeof = function _typeof(obj) { return typeof obj; }; } else { Login_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Login_typeof(obj); }

function Login_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Login_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Login_createClass(Constructor, protoProps, staticProps) { if (protoProps) Login_defineProperties(Constructor.prototype, protoProps); if (staticProps) Login_defineProperties(Constructor, staticProps); return Constructor; }

function Login_possibleConstructorReturn(self, call) { if (call && (Login_typeof(call) === "object" || typeof call === "function")) { return call; } return Login_assertThisInitialized(self); }

function Login_getPrototypeOf(o) { Login_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Login_getPrototypeOf(o); }

function Login_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Login_setPrototypeOf(subClass, superClass); }

function Login_setPrototypeOf(o, p) { Login_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Login_setPrototypeOf(o, p); }

function Login_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Login_Login =
/*#__PURE__*/
function (_Component) {
  Login_inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Login_classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Login_possibleConstructorReturn(this, (_getPrototypeOf2 = Login_getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "state", {
      email: '',
      pass: ''
    });

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "updVal", function (e) {
      var el = e.target;
      var val = el.value;

      if (el.getAttribute('type') === 'email') {
        return _this.setState({
          email: val
        });
      }

      _this.setState({
        pass: val
      });
    });

    Login_defineProperty(Login_assertThisInitialized(Login_assertThisInitialized(_this)), "submit", function (e) {
      var pending = _this.props.user.pending;
      var _this$state = _this.state,
          email = _this$state.email,
          pass = _this$state.pass;
      email = email.trim();
      pass = pass.trim();
      e.preventDefault();

      if (pending || email.length === 0 || pass.length == 0) {
        return;
      }

      Object(userAct["e" /* doLogin */])({
        email: email,
        password: pass
      });
    });

    return _this;
  }

  Login_createClass(Login, [{
    key: "render",
    value: function render() {
      var _this$props$user = this.props.user,
          pending = _this$props$user.pending,
          error = _this$props$user.error;
      return external_react_default.a.createElement("div", {
        className: "container content"
      }, external_react_default.a.createElement(PaddedRow["a" /* default */], {
        amount: 25,
        vCenter: true
      }, external_react_default.a.createElement("h4", null, "Please login to continue"), external_react_default.a.createElement("form", {
        noValidate: true
      }, external_react_default.a.createElement("fieldset", null, external_react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), external_react_default.a.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        autoFocus: true,
        placeholder: "John@deux.com",
        onChange: this.updVal
      }), external_react_default.a.createElement("label", {
        htmlFor: "pass"
      }, "Pass:"), external_react_default.a.createElement("input", {
        type: "password",
        id: "pass",
        name: "password",
        placeholder: "Super secret password...",
        onChange: this.updVal
      })), external_react_default.a.createElement("button", {
        className: 'float-right' + (pending ? ' disabled' : ''),
        onClick: this.submit
      }, pending ? external_react_default.a.createElement(Spinner["a" /* default */], null) : 'Submit'), !error ? null : external_react_default.a.createElement("p", null, error))));
    }
  }]);

  return Login;
}(external_react_["Component"]);

/* harmony default export */ var comps_Login = (Object(external_react_redux_["connect"])(mapUser["a" /* default */])(Login_Login));
// CONCATENATED MODULE: ./comps/Setup.js
function Setup_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Setup_typeof = function _typeof(obj) { return typeof obj; }; } else { Setup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Setup_typeof(obj); }

function Setup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Setup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Setup_createClass(Constructor, protoProps, staticProps) { if (protoProps) Setup_defineProperties(Constructor.prototype, protoProps); if (staticProps) Setup_defineProperties(Constructor, staticProps); return Constructor; }

function Setup_possibleConstructorReturn(self, call) { if (call && (Setup_typeof(call) === "object" || typeof call === "function")) { return call; } return Setup_assertThisInitialized(self); }

function Setup_getPrototypeOf(o) { Setup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Setup_getPrototypeOf(o); }

function Setup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Setup_setPrototypeOf(subClass, superClass); }

function Setup_setPrototypeOf(o, p) { Setup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Setup_setPrototypeOf(o, p); }

function Setup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Setup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Setup_Setup =
/*#__PURE__*/
function (_Component) {
  Setup_inherits(Setup, _Component);

  function Setup() {
    var _getPrototypeOf2;

    var _this;

    Setup_classCallCheck(this, Setup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Setup_possibleConstructorReturn(this, (_getPrototypeOf2 = Setup_getPrototypeOf(Setup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Setup_defineProperty(Setup_assertThisInitialized(Setup_assertThisInitialized(_this)), "state", {
      email: '',
      password: '',
      confirmPass: '',
      pending: false,
      error: null
    });

    Setup_defineProperty(Setup_assertThisInitialized(Setup_assertThisInitialized(_this)), "updVal", function (e) {
      var el = e.target;
      var key = 'email';
      if (el.id === 'pass') key = 'password';else if (el.id === 'pass2') key = 'confirmPass';
      var obj = {};
      obj[key] = el.value;

      _this.setState(obj);
    });

    Setup_defineProperty(Setup_assertThisInitialized(Setup_assertThisInitialized(_this)), "submit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password,
          confirmPass = _this$state.confirmPass,
          pending = _this$state.pending;
      if (pending) return;
      email = email.trim();
      password = password.trim();
      confirmPass = confirmPass.trim();
      var hasEmpty = [email, password, confirmPass].some(function (val) {
        return val.length === 0;
      });
      if (hasEmpty) return;

      if (password.toLowerCase() !== confirmPass.toLowerCase()) {
        return _this.setState({
          error: "Passwords don't match"
        });
      }

      _this.setState({
        pending: true,
        error: null
      });

      var defaultErr = 'Could not create account';
      fetch(getUrl_default()('users'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          admin: true
        })
      }).then(function (res) {
        if (res.ok) {
          return Object(userAct["e" /* doLogin */])({
            email: email,
            password: password
          }, null, true);
        }

        res.json().then(function (_ref) {
          var message = _ref.message;
          var error = message || defaultErr;

          _this.setState({
            pending: false,
            error: error
          });
        });
      }).catch(function (err) {
        var error = err.message || defaultErr;

        _this.setState({
          pending: false,
          error: error
        });
      });
    });

    return _this;
  }

  Setup_createClass(Setup, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          pending = _this$state2.pending,
          error = _this$state2.error;
      return external_react_default.a.createElement("div", {
        className: "container content"
      }, external_react_default.a.createElement(PaddedRow["a" /* default */], {
        amount: 25,
        vCenter: true
      }, external_react_default.a.createElement("div", {
        className: "column"
      }, external_react_default.a.createElement("h3", null, "Setup account"), external_react_default.a.createElement("form", {
        noValidate: true
      }, external_react_default.a.createElement("fieldset", null, external_react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), external_react_default.a.createElement("input", {
        type: "email",
        autoFocus: true,
        id: "email",
        placeholder: "Your email (does't have to be actual email)",
        onChange: this.updVal
      }), external_react_default.a.createElement("label", {
        htmlFor: "pass"
      }, "Password:"), external_react_default.a.createElement("input", {
        type: "password",
        id: "pass",
        maxLength: 512,
        placeholder: "A super secret password",
        onChange: this.updVal
      }), external_react_default.a.createElement("label", {
        htmlFor: "pass2"
      }, "Confirm Password:"), external_react_default.a.createElement("input", {
        type: "password",
        id: "pass2",
        maxLength: 512,
        placeholder: "Confirm your super secret password",
        onChange: this.updVal
      }), external_react_default.a.createElement("button", {
        className: "float-right",
        onClick: this.submit
      }, pending ? external_react_default.a.createElement(Spinner["a" /* default */], null) : 'Submit'), !error ? null : external_react_default.a.createElement("p", {
        className: "danger"
      }, error))))));
    }
  }]);

  return Setup;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./comps/Page.js









var Page_Page = function Page(_ref) {
  var user = _ref.user,
      children = _ref.children;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(comps_Header, null), external_react_default.a.createElement(comps_KeyShortcuts, null), function () {
    if (user.email) {
      return external_react_default.a.createElement("div", {
        className: "container content"
      }, children);
    }

    return user.setup ? external_react_default.a.createElement(Setup_Setup, null) : external_react_default.a.createElement(comps_Login, {
      user: user
    });
  }(), external_react_default.a.createElement(comps_Footer, null));
};

/* harmony default export */ var comps_Page = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapUser["a" /* default */])(Page_Page));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(18);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./util/freezeSSR.js


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var freezeSSR_freezeSSR = function freezeSSR(selector) {
  var FrozenSSR = function FrozenSSR() {
    var __html = '';
    var props = {};

    if (typeof document !== 'undefined') {
      var el = document.querySelector(selector);

      if (el) {
        __html = el.innerHTML;
        el.getAttributeNames().forEach(function (attr) {
          var attrKey = attr === 'class' ? 'className' : attr;
          props[attrKey] = el.getAttribute(attr);
        });
      }
    }

    return external_react_default.a.createElement("div", _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: __html
      }
    }));
  };

  return {
    loading: FrozenSSR
  };
};

/* harmony default export */ var util_freezeSSR = (freezeSSR_freezeSSR);
// CONCATENATED MODULE: ./comps/Markdown.js


function Markdown_extends() { Markdown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Markdown_extends.apply(this, arguments); }



var Markdown = dynamic_default()(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 26, 7)), util_freezeSSR('.Markdown'));

var Markdown_link = function link(props) {
  return external_react_default.a.createElement("a", Markdown_extends({}, props, {
    target: "_blank",
    rel: "noopener noreferrer"
  }));
};

var renderers = {
  link: Markdown_link
};

var Markdown_AddRenderers = function AddRenderers(_ref) {
  var className = _ref.className,
      source = _ref.source;
  return external_react_default.a.createElement(Markdown, {
    className: className,
    source: source,
    renderers: renderers
  });
};

/* harmony default export */ var comps_Markdown = __webpack_exports__["a"] = (Markdown_AddRenderers);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_mapUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_util_getUrl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_getJwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var getDoc =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id, req) {
    var found, doc, jwt, docRes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            jwt = Object(_util_getJwt__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(req);

            if (jwt) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              found: found,
              doc: doc,
              id: id
            });

          case 3:
            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(_util_getUrl__WEBPACK_IMPORTED_MODULE_5___default()('docs/' + id, Boolean(req)), {
              method: 'GET',
              headers: {
                Authorization: jwt
              }
            });

          case 5:
            docRes = _context.sent;

            if (!docRes.ok) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return docRes.json();

          case 9:
            doc = _context.sent;
            found = true;

          case 11:
            return _context.abrupt("return", {
              found: found,
              doc: doc,
              id: id
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDoc(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var DocComp =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DocComp, _Component);

    function DocComp() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DocComp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocComp)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        found: false,
        id: null,
        doc: {}
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDoc",
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = _this;
                  _context2.next = 3;
                  return getDoc(id);

                case 3:
                  _context2.t1 = _context2.sent;

                  _context2.t0.setState.call(_context2.t0, _context2.t1);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());

      return _this;
    }

    _createClass(DocComp, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateDoc(this.props.id);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props = this.props,
            user = _this$props.user,
            found = _this$props.found,
            id = _this$props.id;
        if (prevProps.user.email === user.email || found) return;
        if (!user.email) return;
        this.updateDoc(id);
      }
    }, {
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ComposedComponent, this.state);
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref3) {
          var query, req;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  query = _ref3.query, req = _ref3.req;
                  _context3.next = 3;
                  return getDoc(query.id, req);

                case 3:
                  return _context3.abrupt("return", _context3.sent);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function getInitialProps(_x4) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }, {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var found = nextProps.found,
            id = nextProps.id,
            doc = nextProps.doc;

        if (prevState.found !== found && !prevState.didInit) {
          return {
            found: found,
            id: id,
            doc: doc,
            didInit: true
          };
        }

        return null;
      }
    }]);

    return DocComp;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(_util_mapUser__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DocComp);
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _comps_Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _comps_AddDoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _util_getUrl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_util_getUrl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_getJwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var k =
/*#__PURE__*/
function (_Component) {
  _inherits(k, _Component);

  function k() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, k);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(k)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "delete",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var sure, del, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sure = window.confirm('Are you sure you want to delete this doc? This can not be undone.');

              if (sure) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(_util_getUrl__WEBPACK_IMPORTED_MODULE_8___default()('docs/' + _this.props.id), {
                headers: {
                  Authorization: Object(_util_getJwt__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])()
                },
                method: 'DELETE'
              }).catch(function (_ref2) {
                var message = _ref2.message;
                return {
                  ok: false,
                  message: message
                };
              });

            case 5:
              del = _context.sent;

              if (!del.ok) {
                _context.next = 10;
                break;
              }

              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/', _util_getUrl__WEBPACK_IMPORTED_MODULE_8___default()('/'));
              _context.next = 16;
              break;

            case 10:
              if (del.message) {
                _context.next = 15;
                break;
              }

              _context.next = 13;
              return del.json();

            case 13:
              data = _context.sent;
              del.message = data.message;

            case 15:
              window.alert("Could not delete doc, ".concat(del.message));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(k, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          found = _this$props.found,
          id = _this$props.id,
          doc = _this$props.doc;
      if (!found) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Page__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Doc not found..."));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Page__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        style: {
          marginBottom: '1rem'
        }
      }, doc.dir, doc.dir.length > 0 ? '/' : '', doc.name, ' - ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        as: _util_getUrl__WEBPACK_IMPORTED_MODULE_8___default()('edit/' + id),
        href: {
          pathname: '/edit',
          query: {
            id: id
          }
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        id: "edit"
      }, "edit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "float-right",
        onClick: this.delete,
        style: {
          margin: '5px 0 0'
        }
      }, "Delete")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Markdown__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        source: doc.md,
        className: "Markdown"
      }));
    }
  }]);

  return k;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_comps_AddDoc__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(k));

/***/ })
/******/ ]);