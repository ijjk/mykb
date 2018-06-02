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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 8 */,
/* 9 */,
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
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_userAct__ = __webpack_require__(2);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // Don't load sass during ssr

if (!global.kbConf) {
  __webpack_require__(31);
}

var ssr = typeof window === 'undefined';

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          user = _props.user,
          setup = _props.setup;
      Object(__WEBPACK_IMPORTED_MODULE_5__redux_actions_userAct__["g" /* setUser */])(_objectSpread({}, user, {
        setup: setup
      }));

      if (!ssr && !user.email) {
        var jwt = window.localStorage.jwt;
        if (jwt) Object(__WEBPACK_IMPORTED_MODULE_5__redux_actions_userAct__["e" /* doLogin */])(null, jwt, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          Component = _props2.Component,
          pageProps = _props2.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["Provider"], {
        store: __WEBPACK_IMPORTED_MODULE_3__redux_store__["a" /* default */]
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, user, setup, pageProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                user = {};
                setup = false;

                if (ssr) {
                  user = ctx.req.user || {};
                  setup = ctx.req.doSetup || false;
                }

                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return Component.getInitialProps(ctx);

              case 8:
                pageProps = _context.sent;

              case 9:
                return _context.abrupt("return", {
                  Component: Component,
                  pageProps: pageProps,
                  user: user,
                  setup: setup
                });

              case 10:
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

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);