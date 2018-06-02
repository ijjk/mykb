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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(10);

var urljoin = __webpack_require__(11);

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
/* harmony export (immutable) */ __webpack_exports__["e"] = doLogin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_getUrl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_getUrl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__util_getUrl__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



 // define action types

var SET_USER = 'SET_USER';
var LOGIN_PENDING = 'LOGIN_PENDING';
var LOGIN_FAILED = 'LOGIN_FAILED';
var LOGOUT = 'LOGOUT';
var setUser = function setUser(user) {
  __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
    type: SET_USER,
    data: user
  });
}; // setUser

var doLogout = function doLogout() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('jwt');
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';
  }

  __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
    type: LOGOUT
  });
}; // doLogout

function doLogin(_x, _x2, _x3) {
  return _doLogin.apply(this, arguments);
} // doLogin

function _doLogin() {
  _doLogin = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(creds, jwt, noPend) {
    var authReqOpts, authReqHead, authReqBody, authReq, authRes, error, _ref, accessToken, payload, _JSON$parse, userId, userReq, userRes;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            !noPend && __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
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
            authReq = new Request(__WEBPACK_IMPORTED_MODULE_3__util_getUrl___default()('auth'), _objectSpread({}, authReqOpts, authReqHead, authReqBody));
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(authReq).catch(function (err) {
              __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
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
            return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
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
            userReq = new Request(__WEBPACK_IMPORTED_MODULE_3__util_getUrl___default()("/users/".concat(userId)), {
              headers: {
                Authorization: accessToken
              }
            });
            _context.next = 29;
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(userReq);

          case 29:
            userRes = _context.sent;

            if (userRes.ok) {
              _context.next = 32;
              break;
            }

            return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch({
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

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var user = _ref.user;
  return {
    user: user
  };
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Spinner = function Spinner(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    className: "spinner"
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PaddedRow = function PaddedRow(_ref) {
  var children = _ref.children,
      amount = _ref.amount,
      vCenter = _ref.vCenter;
  amount = amount || 20;

  var PadItem = function PadItem() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", rowProps, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PadItem, null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column"
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PadItem, null));
};

/* harmony default export */ __webpack_exports__["a"] = (PaddedRow);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(15);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

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

if (false) {
  var logger = require('redux-logger').default;

  if (typeof window !== 'undefined') {
    middleware = applyMiddleware(logger);
  }
}

var reducers = Object(external__redux_["combineReducers"])({
  user: userRed
});
/* harmony default export */ var store = __webpack_exports__["a"] = (middleware ? Object(external__redux_["createStore"])(reducers, middleware) : Object(external__redux_["createStore"])(reducers));

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (req) {
  if (req) return req.jwt;

  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('jwt');
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(3);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./redux/actions/userAct.js
var userAct = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(16);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./util/getUrl.js
var getUrl = __webpack_require__(1);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);

// EXTERNAL MODULE: ./util/mapUser.js
var mapUser = __webpack_require__(4);

// CONCATENATED MODULE: ./comps/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Header_NavLink = function NavLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      active = _ref.active;
  var activeClass = active ? ' active' : '';
  return external__react__default.a.createElement(link__default.a, {
    href: href,
    as: getUrl_default()(href)
  }, external__react__default.a.createElement("a", {
    className: activeClass
  }, children));
};

var navItems = [['/', 'Home'], ['/new', 'New Doc'], ['/settings', 'Settings']];

var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref2;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref2 = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref2, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "hideNav", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleNav", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          open: !_this.state.open
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "isActive", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        return getUrl_default()(_this.props.router.pathname) === getUrl_default()(url);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "logout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.hideNav();

        Object(userAct["f" /* doLogout */])();
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var expandClass = this.state.open ? ' active' : '';
      var user = this.props.user;
      return external__react__default.a.createElement("nav", {
        className: "navbar",
        role: "navigation",
        "aria-label": "main navigation"
      }, external__react__default.a.createElement("div", {
        className: "navbar-brand"
      }, external__react__default.a.createElement(Header_NavLink, {
        href: "/"
      }, external__react__default.a.createElement("h3", {
        onClick: this.hideNav
      }, "MYKB"))), !user.email ? null : [external__react__default.a.createElement("div", {
        className: 'navbar-burger ' + expandClass,
        onClick: this.toggleNav,
        key: "burger"
      }, external__react__default.a.createElement("div", null), external__react__default.a.createElement("div", null), external__react__default.a.createElement("div", null)), external__react__default.a.createElement("div", {
        className: 'navbar-items' + expandClass,
        key: "items"
      }, navItems.map(function (item) {
        return external__react__default.a.createElement(Header_NavLink, {
          key: item[0],
          href: item[0],
          active: _this2.isActive(item[0])
        }, external__react__default.a.createElement("p", {
          className: "item",
          onClick: _this2.hideNav
        }, item[1]));
      }), external__react__default.a.createElement("a", {
        href: "/logout",
        onClick: this.logout
      }, external__react__default.a.createElement("p", {
        className: "item"
      }, "Logout")))]);
    }
  }]);

  return Header;
}(external__react_["Component"]);

/* harmony default export */ var comps_Header = (Object(router_["withRouter"])(Object(external__react_redux_["connect"])(mapUser["a" /* default */])(Header_Header)));
// EXTERNAL MODULE: ./util/keys.js
var keys = __webpack_require__(18);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./comps/KeyShortcuts.js
function KeyShortcuts__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KeyShortcuts__typeof = function _typeof(obj) { return typeof obj; }; } else { KeyShortcuts__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KeyShortcuts__typeof(obj); }

function KeyShortcuts__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KeyShortcuts__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KeyShortcuts__createClass(Constructor, protoProps, staticProps) { if (protoProps) KeyShortcuts__defineProperties(Constructor.prototype, protoProps); if (staticProps) KeyShortcuts__defineProperties(Constructor, staticProps); return Constructor; }

function KeyShortcuts__possibleConstructorReturn(self, call) { if (call && (KeyShortcuts__typeof(call) === "object" || typeof call === "function")) { return call; } return KeyShortcuts__assertThisInitialized(self); }

function KeyShortcuts__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function KeyShortcuts__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






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
  KeyShortcuts__inherits(KeyShortcuts, _Component);

  function KeyShortcuts() {
    var _ref;

    var _temp, _this;

    KeyShortcuts__classCallCheck(this, KeyShortcuts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return KeyShortcuts__possibleConstructorReturn(_this, (_temp = _this = KeyShortcuts__possibleConstructorReturn(this, (_ref = KeyShortcuts.__proto__ || Object.getPrototypeOf(KeyShortcuts)).call.apply(_ref, [this].concat(args))), Object.defineProperty(KeyShortcuts__assertThisInitialized(_this), "handleDown", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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
                router__default.a.push(url, getUrl_default()(url));
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
      }
    }), Object.defineProperty(KeyShortcuts__assertThisInitialized(_this), "render", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return null;
      }
    }), _temp));
  }

  KeyShortcuts__createClass(KeyShortcuts, [{
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
}(external__react_["Component"]);

/* harmony default export */ var comps_KeyShortcuts = (KeyShortcuts_KeyShortcuts);
// CONCATENATED MODULE: ./comps/Footer.js


var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("footer", {
    className: "footer"
  }, external__react__default.a.createElement("p", null, "Powered by", ' ', external__react__default.a.createElement("a", {
    href: "//github.com/ijjk/mykb",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "MYKB")));
};

/* harmony default export */ var comps_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./comps/Spinner.js
var Spinner = __webpack_require__(8);

// EXTERNAL MODULE: ./comps/PaddedRow.js
var PaddedRow = __webpack_require__(9);

// CONCATENATED MODULE: ./comps/Login.js
function Login__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Login__typeof = function _typeof(obj) { return typeof obj; }; } else { Login__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Login__typeof(obj); }

function Login__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Login__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Login__createClass(Constructor, protoProps, staticProps) { if (protoProps) Login__defineProperties(Constructor.prototype, protoProps); if (staticProps) Login__defineProperties(Constructor, staticProps); return Constructor; }

function Login__possibleConstructorReturn(self, call) { if (call && (Login__typeof(call) === "object" || typeof call === "function")) { return call; } return Login__assertThisInitialized(self); }

function Login__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Login__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Login_Login =
/*#__PURE__*/
function (_Component) {
  Login__inherits(Login, _Component);

  function Login() {
    var _ref;

    var _temp, _this;

    Login__classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Login__possibleConstructorReturn(_this, (_temp = _this = Login__possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Login__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        pass: ''
      }
    }), Object.defineProperty(Login__assertThisInitialized(_this), "updVal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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
      }
    }), Object.defineProperty(Login__assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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
      }
    }), _temp));
  }

  Login__createClass(Login, [{
    key: "render",
    value: function render() {
      var _props$user = this.props.user,
          pending = _props$user.pending,
          error = _props$user.error;
      return external__react__default.a.createElement("div", {
        className: "container content"
      }, external__react__default.a.createElement(PaddedRow["a" /* default */], {
        amount: 25,
        vCenter: true
      }, external__react__default.a.createElement("h4", null, "Please login to continue"), external__react__default.a.createElement("form", {
        noValidate: true
      }, external__react__default.a.createElement("fieldset", null, external__react__default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), external__react__default.a.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        autoFocus: true,
        placeholder: "John@deux.com",
        onChange: this.updVal
      }), external__react__default.a.createElement("label", {
        htmlFor: "pass"
      }, "Pass:"), external__react__default.a.createElement("input", {
        type: "password",
        id: "pass",
        name: "password",
        placeholder: "Super secret password...",
        onChange: this.updVal
      })), external__react__default.a.createElement("button", {
        className: 'float-right' + (pending ? ' disabled' : ''),
        onClick: this.submit
      }, pending ? external__react__default.a.createElement(Spinner["a" /* default */], null) : 'Submit'), !error ? null : external__react__default.a.createElement("p", null, error))));
    }
  }]);

  return Login;
}(external__react_["Component"]);

/* harmony default export */ var comps_Login = (Object(external__react_redux_["connect"])(mapUser["a" /* default */])(Login_Login));
// CONCATENATED MODULE: ./comps/Setup.js
function Setup__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Setup__typeof = function _typeof(obj) { return typeof obj; }; } else { Setup__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Setup__typeof(obj); }

function Setup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Setup__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Setup__createClass(Constructor, protoProps, staticProps) { if (protoProps) Setup__defineProperties(Constructor.prototype, protoProps); if (staticProps) Setup__defineProperties(Constructor, staticProps); return Constructor; }

function Setup__possibleConstructorReturn(self, call) { if (call && (Setup__typeof(call) === "object" || typeof call === "function")) { return call; } return Setup__assertThisInitialized(self); }

function Setup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Setup__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Setup_Setup =
/*#__PURE__*/
function (_Component) {
  Setup__inherits(Setup, _Component);

  function Setup() {
    var _ref;

    var _temp, _this;

    Setup__classCallCheck(this, Setup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Setup__possibleConstructorReturn(_this, (_temp = _this = Setup__possibleConstructorReturn(this, (_ref = Setup.__proto__ || Object.getPrototypeOf(Setup)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Setup__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        password: '',
        confirmPass: '',
        pending: false,
        error: null
      }
    }), Object.defineProperty(Setup__assertThisInitialized(_this), "updVal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var el = e.target;
        var key = 'email';
        if (el.id === 'pass') key = 'password';else if (el.id === 'pass2') key = 'confirmPass';
        var obj = {};
        obj[key] = el.value;

        _this.setState(obj);
      }
    }), Object.defineProperty(Setup__assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
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

          res.json().then(function (_ref2) {
            var message = _ref2.message;
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
      }
    }), _temp));
  }

  Setup__createClass(Setup, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          pending = _state.pending,
          error = _state.error;
      return external__react__default.a.createElement("div", {
        className: "container content"
      }, external__react__default.a.createElement(PaddedRow["a" /* default */], {
        amount: 25,
        vCenter: true
      }, external__react__default.a.createElement("div", {
        className: "column"
      }, external__react__default.a.createElement("h3", null, "Setup account"), external__react__default.a.createElement("form", {
        noValidate: true
      }, external__react__default.a.createElement("fieldset", null, external__react__default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), external__react__default.a.createElement("input", {
        type: "email",
        autoFocus: true,
        id: "email",
        placeholder: "Your email (does't have to be actual email)",
        onChange: this.updVal
      }), external__react__default.a.createElement("label", {
        htmlFor: "pass"
      }, "Password:"), external__react__default.a.createElement("input", {
        type: "password",
        id: "pass",
        maxLength: 512,
        placeholder: "A super secret password",
        onChange: this.updVal
      }), external__react__default.a.createElement("label", {
        htmlFor: "pass2"
      }, "Confirm Password:"), external__react__default.a.createElement("input", {
        type: "password",
        id: "pass2",
        maxLength: 512,
        placeholder: "Confirm your super secret password",
        onChange: this.updVal
      }), external__react__default.a.createElement("button", {
        className: "float-right",
        onClick: this.submit
      }, pending ? external__react__default.a.createElement(Spinner["a" /* default */], null) : 'Submit'), !error ? null : external__react__default.a.createElement("p", {
        className: "danger"
      }, error))))));
    }
  }]);

  return Setup;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./comps/Page.js









var Page_Page = function Page(_ref) {
  var user = _ref.user,
      children = _ref.children;
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(comps_Header, null), external__react__default.a.createElement(comps_KeyShortcuts, null), user.email ? external__react__default.a.createElement("div", {
    className: "container content"
  }, children) : user.setup ? external__react__default.a.createElement(Setup_Setup, null) : external__react__default.a.createElement(comps_Login, {
    user: user
  }), external__react__default.a.createElement(comps_Footer, null));
};

/* harmony default export */ var comps_Page = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapUser["a" /* default */])(Page_Page));

/***/ }),
/* 18 */
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(3);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-paginate"
var external__react_paginate_ = __webpack_require__(39);
var external__react_paginate__default = /*#__PURE__*/__webpack_require__.n(external__react_paginate_);

// EXTERNAL MODULE: external "url"
var external__url_ = __webpack_require__(10);
var external__url__default = /*#__PURE__*/__webpack_require__.n(external__url_);

// EXTERNAL MODULE: ./comps/Page.js + 5 modules
var Page = __webpack_require__(17);

// EXTERNAL MODULE: ./comps/PaddedRow.js
var PaddedRow = __webpack_require__(9);

// EXTERNAL MODULE: ./comps/Spinner.js
var Spinner = __webpack_require__(8);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(16);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./util/getUrl.js
var getUrl = __webpack_require__(1);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);

// CONCATENATED MODULE: ./comps/DocItem.js




var DocItem_DocItem = function DocItem(_ref) {
  var id = _ref.id,
      name = _ref.name,
      dir = _ref.dir,
      updated = _ref.updated;
  name = dir + (dir.length > 0 ? '/' : '') + name;
  var as = getUrl_default()('k/' + id);
  var href = {
    pathname: '/k',
    query: {
      id: id
    }
  };
  return external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement(link__default.a, {
    href: href,
    as: as
  }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("p", {
    className: "noMargin"
  }, name, external__react__default.a.createElement("span", {
    className: "float-right"
  }, new Date(updated).toLocaleDateString('en-US')))))));
};

/* harmony default export */ var comps_DocItem = (DocItem_DocItem);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(7);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./util/parseSort.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ var parseSort = (function (sort) {
  var key, ascDesc;

  switch (_typeof(sort)) {
    case 'object':
      {
        key = Object.keys(sort).pop();
        ascDesc = sort[key];
        break;
      }

    case 'string':
      {
        var parts = sort.split(':');
        key = parts[0];
        ascDesc = parts[1];
        break;
      }

    default:
      break;
  }

  return "$sort[".concat(key, "]=").concat(ascDesc);
});
// EXTERNAL MODULE: ./util/getJwt.js
var getJwt = __webpack_require__(14);

// CONCATENATED MODULE: ./util/getDocs.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var $limit = 12; // number of docs per page

var getDocs_select = ['id', 'name', 'updated', 'dir'].map(function (f, i) {
  return _defineProperty({}, "$select[".concat(i, "]"), f);
});
var getDocs =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(q, jwt) {
    var docsRes, res, total, docs;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return external__isomorphic_unfetch__default()(getUrl_default()('docs', Boolean(jwt)) + q, {
              headers: {
                Authorization: jwt || Object(getJwt["a" /* default */])()
              }
            }).catch(function (_ref3) {
              var message = _ref3.message;
              return {
                ok: false,
                error: message
              };
            });

          case 2:
            docsRes = _context.sent;

            if (!docsRes.ok) {
              _context.next = 10;
              break;
            }

            _context.next = 6;
            return docsRes.json();

          case 6:
            res = _context.sent;
            total = res.total || 0;
            docs = res.data || [];
            return _context.abrupt("return", {
              docs: docs,
              total: total
            });

          case 10:
            return _context.abrupt("return", {
              total: 0,
              docs: [],
              error: docsRes.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDocs(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getDocs_buildQ = function buildQ(q) {
  if (!q.$search) delete q.$search;
  if (!q.$skip) delete q.$skip;else {
    q.$skip = (q.$skip - 1) * $limit;
  }
  var $sort = parseSort(q.$sort ? q.$sort : 'updated:-1');
  delete q.$sort;
  getDocs_select.forEach(function (sel) {
    return q = _objectSpread({}, q, sel);
  });
  q = _objectSpread({
    $limit: $limit
  }, q);
  var url = Object.keys(q).map(function (k) {
    return "".concat(k, "=").concat(encodeURIComponent(q[k]));
  }).join('&');
  url = "?".concat(url, "&").concat($sort);
  return url;
};
// EXTERNAL MODULE: ./util/mapUser.js
var mapUser = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function pages__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { pages__defineProperty(target, key, source[key]); }); } return target; }

function pages__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pages__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }















var pages_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        $sort: 'updated:-1',
        $search: '',
        page: 1,
        pending: false,
        error: null,
        total: 0,
        docs: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "pushQuery", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(query) {
        return router__default.a.push({
          pathname: '/',
          query: query
        }, Object(external__url_["format"])({
          pathname: getUrl_default()('/'),
          query: query
        }));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "updDocs", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(time, doSearch) {
        clearTimeout(_this.docsTime);
        _this.docsTime = setTimeout(
        /*#__PURE__*/
        pages__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee() {
          var _this$state, $sort, $search, page, query, q, data;

          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$state = _this.state, $sort = _this$state.$sort, $search = _this$state.$search, page = _this$state.page;

                  if (doSearch) {
                    query = {
                      search: $search
                    };
                    if (!$search) delete query.search;

                    _this.pushQuery(query);
                  }

                  _this.setState({
                    error: null
                  });

                  _this.docsTime = setTimeout(function () {
                    _this.setState({
                      pending: true
                    });
                  }, 125);
                  q = getDocs_buildQ({
                    $search: $search,
                    $sort: $sort,
                    $skip: page
                  });
                  _context.next = 7;
                  return getDocs(q);

                case 7:
                  data = _context.sent;
                  clearTimeout(_this.docsTime);

                  _this.setState(pages__objectSpread({}, data, {
                    pending: false
                  }));

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })), time || 275);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "updQuery", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(pages__defineProperty({}, e.target.id, e.target.value));

        _this.updDocs(0, e.target.id === '$search');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handlePage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref3) {
        var selected = _ref3.selected;
        var $search = _this.state.$search;
        var page = selected + 1;
        var query = {};

        _this.setState({
          page: page
        });

        if (page > 1) query.page = page;
        if ($search) query.search = $search;

        _this.pushQuery(query);

        _this.updDocs(1);
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          user = _props.user,
          docs = _props.docs;
      if (prevProps.user.email === user.email) return;
      if (user.email && docs.length === 0) this.updDocs(1);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          $sort = _state.$sort,
          $search = _state.$search,
          pending = _state.pending,
          error = _state.error,
          docs = _state.docs,
          total = _state.total,
          page = _state.page;
      var pages = Math.ceil(total / $limit);
      return external__react__default.a.createElement(Page["a" /* default */], null, external__react__default.a.createElement(PaddedRow["a" /* default */], null, external__react__default.a.createElement("input", {
        type: "text",
        placeholder: "Search knowledge base...",
        maxLength: 128,
        value: $search,
        className: "search",
        id: "$search",
        onChange: this.updQuery
      })), external__react__default.a.createElement(PaddedRow["a" /* default */], null, external__react__default.a.createElement("div", {
        className: "inline",
        style: {
          width: '100%'
        }
      }, external__react__default.a.createElement("h4", {
        className: "noMargin"
      }, "Docs"), external__react__default.a.createElement("div", {
        className: "float-right inline"
      }, external__react__default.a.createElement("label", {
        htmlFor: "sort"
      }, "Sort: "), external__react__default.a.createElement("select", {
        id: "$sort",
        value: $sort,
        onChange: this.updQuery,
        style: {
          width: 150
        }
      }, external__react__default.a.createElement("option", {
        value: "updated:-1"
      }, 'Updated (new -> old)'), external__react__default.a.createElement("option", {
        value: "updated:1"
      }, 'Updated (old -> new)'), external__react__default.a.createElement("option", {
        value: "created:-1"
      }, 'Created (new -> old)'), external__react__default.a.createElement("option", {
        value: "created:1"
      }, 'Created (old -> new)'), external__react__default.a.createElement("option", {
        value: "dirName:1"
      }, 'Name (A -> Z)'), external__react__default.a.createElement("option", {
        value: "dirName:-1"
      }, 'Name (Z -> A)'))))), external__react__default.a.createElement(PaddedRow["a" /* default */], null, docs.length > 0 || error || pending ? null : external__react__default.a.createElement("p", null, "No docs found..."), !error ? null : external__react__default.a.createElement("p", null, error), !pending || error ? null : external__react__default.a.createElement(Spinner["a" /* default */], {
        style: {
          margin: '25px auto 0'
        }
      }), docs.length < 1 || pending || error ? null : external__react__default.a.createElement("div", null, external__react__default.a.createElement("table", null, external__react__default.a.createElement("thead", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("th", null, "Doc ", external__react__default.a.createElement("span", {
        className: "float-right"
      }, "Modified")))), external__react__default.a.createElement("tbody", null, docs.map(function (doc) {
        return external__react__default.a.createElement(comps_DocItem, _extends({}, doc, {
          key: doc.id
        }));
      }))), pages < 2 ? null : external__react__default.a.createElement(external__react_paginate__default.a, {
        pageCount: pages,
        containerClassName: "paginate",
        activeClassName: "active",
        onPageChange: this.handlePage,
        forcePage: page - 1
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = pages__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(_ref4) {
        var req, query, page, $search, jwt, q, data;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref4.req, query = _ref4.query;
                page = 1, $search = '';

                if (query) {
                  page = query.page || page;
                  $search = query.search || $search;
                }

                jwt = Object(getJwt["a" /* default */])(req);

                if (jwt) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  total: 0,
                  docs: []
                });

              case 6:
                q = getDocs_buildQ({
                  $search: $search,
                  $skip: page
                });
                _context2.next = 9;
                return getDocs(q, req ? jwt : false);

              case 9:
                data = _context2.sent;
                return _context2.abrupt("return", pages__objectSpread({}, data, {
                  page: page,
                  $search: $search
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var docs = nextProps.docs,
          total = nextProps.total,
          page = nextProps.page,
          $search = nextProps.$search;

      if (docs.length !== prevState.docs.length || page !== prevState.page || $search !== prevState.$search) {
        return {
          total: total,
          docs: docs,
          page: page,
          $search: $search,
          pending: false
        };
      }

      return null;
    }
  }]);

  return Index;
}(external__react_["Component"]);

/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (Object(external__react_redux_["connect"])(mapUser["a" /* default */])(pages_Index));

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ })
/******/ ]);