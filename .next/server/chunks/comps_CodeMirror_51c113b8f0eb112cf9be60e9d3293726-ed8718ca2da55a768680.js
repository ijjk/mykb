exports.ids = [0];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodeMirror; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_keys__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__util_keys__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





if (typeof window !== 'undefined') {
  __webpack_require__(27);
}

var CodeMirror =
/*#__PURE__*/
function (_Component) {
  _inherits(CodeMirror, _Component);

  function CodeMirror() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CodeMirror);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CodeMirror.__proto__ || Object.getPrototypeOf(CodeMirror)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (!_this.editor) return;

        var value = _this.editor.getValue();

        if (value !== _this.props.value) {
          _this.props.onChange && _this.props.onChange(value);

          if (_this.editor.getValue() !== _this.props.value) {
            if (_this.state.isControlled) {
              _this.editor.setValue(_this.props.value);
            } else {
              _this.props.value = value;
            }
          }
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "checkSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cm, e) {
        var key = Object(__WEBPACK_IMPORTED_MODULE_2__util_keys__["getKey"])(e);

        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_keys__["isCtrlKey"])(key)) {
          _this.ctrlKey = true;
        } else if (key === 13 && _this.ctrlKey) {
          _this.props.onSubmit();
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cm, e) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_keys__["isCtrlKey"])(Object(__WEBPACK_IMPORTED_MODULE_2__util_keys__["getKey"])(e))) _this.ctrlKey = false;
      }
    }), _temp));
  }

  _createClass(CodeMirror, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window === 'undefined') return;
      this.editor = __WEBPACK_IMPORTED_MODULE_1_codemirror___default.a.fromTextArea(this.textarea, this.props.options);
      this.editor.on('change', this.handleChange);

      if (typeof this.props.onSubmit === 'function') {
        this.editor.on('keydown', this.checkSubmit);
        this.editor.on('keyup', this.handleKeyUp);
        this.setupSubmitKey = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.setupSubmitKey) {
        this.editor.off('keydown', this.checkSubmit);
        this.editor.off('keyup', this.handleKeyUp);
        this.setupSubmitKey = false;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.editor || !this.props.value) return;

      if (this.editor.getValue() !== this.props.value) {
        this.editor.setValue(this.props.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          className = _props.className,
          onChange = _props.onChange;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: className
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", _extends({
        value: value,
        onChange: onChange
      }, {
        ref: function ref(el) {
          return _this2.textarea = el;
        }
      })));
    }
  }]);

  return CodeMirror;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

};;