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

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _DesktopContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DesktopContact */ "./components/DesktopContact.js");
/* harmony import */ var _MobileContact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MobileContact */ "./components/MobileContact.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);














var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Contact, _React$Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      contacts: [],
      email: "",
      phone_number: ""
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "propTypes", {
      size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
        width: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired
      })
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://quotet-api.appspot.com/api/contacts/").then(function (res) {
        var contacts = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(res.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var contact = _step.value;

            if (contact.contact_type.toLowerCase() === "email") {
              var email_address = contact.link.replace("http://", "").toLowerCase();

              _this2.setState({
                email: email_address
              });
            } else if (contact.contact_type.toLowerCase() === "phone") {
              var phone_number = contact.link.replace("http://", "").toLowerCase();

              _this2.setState({
                phone_number: phone_number
              });
            } else {
              contacts.push(contact);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.setState({
          contacts: contacts
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Contact = this.props.width > 800 ? _DesktopContact__WEBPACK_IMPORTED_MODULE_8__["default"] : _MobileContact__WEBPACK_IMPORTED_MODULE_9__["default"];
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Contact, {
        email: this.state.email,
        contacts: this.state.contacts
      });
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields */ "./components/fields/index.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation */ "./validation/index.js");











var ContactForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactForm, _Component);

  function ContactForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      var handleSubmit = this.props.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        id: "question-section",
        onSubmit: handleSubmit,
        className: "jsx-2252508491"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2252508491" + " " + "user-info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "name",
        component: _fields__WEBPACK_IMPORTED_MODULE_8__["customInput"],
        type: "text",
        label: "Name:"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "email",
        component: _fields__WEBPACK_IMPORTED_MODULE_8__["customInput"],
        type: "text",
        label: "Email address:"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "phone",
        component: _fields__WEBPACK_IMPORTED_MODULE_8__["customInput"],
        type: "text",
        label: "Phone Number:"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "subject",
        component: _fields__WEBPACK_IMPORTED_MODULE_8__["customInput"],
        type: "text",
        label: "Subject:"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2252508491" + " " + "message"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: "message",
        component: _fields__WEBPACK_IMPORTED_MODULE_8__["customInput"],
        type: "textbox",
        label: "Your Message"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "jsx-2252508491"
      }, "Send "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2252508491"
      }, "#question-section{display:grid;}@media only screen and (min-width:950px){#question-section{grid-template-columns:1fr 1fr;grid-gap:3%;}}input:not([type=\"checkbox\"]){border-width:0;border-bottom:3px solid black;border-radius:0;}input:not([type=\"checkbox\"])+label{-webkit-transition:all 0.2s;transition:all 0.2s;}input:not([type=\"checkbox\"])+label{position:absolute;left:0;top:0;pointer-events:none;color:black;}input:not([type=\"checkbox\"]):focus+label,.dirty input:not([type=\"checkbox\"])+label{font-size:10px;top:-20px;color:red;}.flex-row-reverse{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}input{outline:0;padding:0;}input,label,button[type=\"submit\"]{font-size:22px;}select{height:30px;}label{font-size:16px;}.custom-input-container,.custom-select-container{position:relative;margin:0 0 25px 0;}select{display:block;}select,input:not([type=\"checkbox\"]),button[type=\"submit\"]{width:100%;}button[type=\"submit\"]{background-color:white;color:red;}.valid input{border-color:red;}.invalid input{border-color:white;}.error-text{background-color:white;color:darkorchid;margin-top:10px;position:relative;}.error-text::before{content:\"\";border-color:transparent transparent red transparent;width:0;height:0;border-style:solid;border-width:0 8px 8px 7px;position:absolute;left:20px;top:-8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRDJCLEFBRzBCLEFBSW1CLEFBbUJqQixBQU9LLEFBS0YsQUFXSCxBQU9GLEFBTUgsQUFPSyxBQUlILEFBSUcsQUFLRyxBQUtKLEFBTUgsQUFJWSxBQU1OLEFBSUUsQUFJSSxBQU9aLFVBdkRELENBK0JaLEFBeUJ1RCxDQTdDdkQsQ0F0RUEsQ0FvRkEsQ0E3RGdDLEFBdUJwQixBQW9CWixBQVFBLEVBMEJBLENBakVTLEFBNENXLENBeUJwQixDQTVDQSxHQWtDWSxBQWNPLEVBeEVYLEFBV0ksS0EzQ0ksQ0FpQ00sRUEwRHRCLEVBL0NBLENBZ0NBLElBNkJrQixFQXhHaEIsR0FtQmdCLEdBTWxCLEdBUWMsS0F3RU0sS0FyRnBCLEVBY0EsQ0E2RVUsUUFDQyxFQWhFcUIsQUEwRGhDLE9BT3FCLG1CQUNRLDJCQUNULGtCQUNSLFVBQ0QsU0FDWCx5QkFyRTZCLDZGQUM3QiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCB7IGN1c3RvbUlucHV0IH0gZnJvbSBcIi4vZmllbGRzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gXCIuLi92YWxpZGF0aW9uXCI7XG5cbmNsYXNzIENvbnRhY3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBpZD1cInF1ZXN0aW9uLXNlY3Rpb25cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWluZm9cIj5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Y3VzdG9tSW5wdXR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWU6XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtjdXN0b21JbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgYWRkcmVzczpcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e2N1c3RvbUlucHV0fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbGFiZWw9XCJQaG9uZSBOdW1iZXI6XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICBjb21wb25lbnQ9e2N1c3RvbUlucHV0fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbGFiZWw9XCJTdWJqZWN0OlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgY29tcG9uZW50PXtjdXN0b21JbnB1dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0Ym94XCJcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBNZXNzYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIDwvYnV0dG9uPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICNxdWVzdGlvbi1zZWN0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgICNxdWVzdGlvbi1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIENvc21ldGljIGZvcm0gc3R5bGVzICovXG4gICAgICAgICAgLyogYm9keSxcbiAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICB9ICovXG5cbiAgICAgICAgICAvKiBSZXN0cmljdCB0aGUgZm9ybSdzIG1heC13aWR0aCBmb3IgdGhlIHNha2Ugb2YgcmVzcG9uc2l2ZW5lc3M7IGNlbnRlciB0aGUgY29udGVudCAqL1xuICAgICAgICAgIC8qIGZvcm0ge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgfSAqL1xuXG4gICAgICAgICAgLyogVGhpY2sgYmxhY2sgYm90dG9tIGJvcmRlciBhcHBsaWVkIHRvIGFsbCB0ZXh0IGlucHV0cyAqL1xuICAgICAgICAgIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSB7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFRyYW5zaXRpb24gdGhlIHRleHQgaW5wdXQgbGFiZWwncyBmb250LXNpemUsIGNvbG9yLCBhbmQgcG9zaXRpb24gd2hlbiBpdCBtb3ZlcyAqL1xuICAgICAgICAgIGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSArIGxhYmVsIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFBvc2l0aW9uIHRoZSBsYWJlbCBzbyB0aGF0IGl0IGxvb2tzIGxpa2UgYSBwbGFjZWhvbGRlcjsgZGlzYWJsZSBjbGlja2luZy90YXBwaW5nICovXG4gICAgICAgICAgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pICsgbGFiZWwge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE1vdmUgdGhlIHRleHQgaW5wdXQgbGFiZWwgdXAgYWJvdmUgdGhlIGlucHV0IHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQgKi9cbiAgICAgICAgICAvKiBBbHNvLCBtb3ZlIHRoZSB0ZXh0IGlucHV0IGxhYmVsIGFib3ZlIHRoZSBpbnB1dCB3aGVuIHRoZXJlIGlzIGNvbnRlbnQgaW5zaWRlIHRoZSBpbnB1dCwgc28gdGhhdCB0aGUgbGFiZWwgZG9lc24ndCBvYnNjdXJlIHRoZSBjb250ZW50ICovXG4gICAgICAgICAgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pOmZvY3VzICsgbGFiZWwsXG4gICAgICAgICAgLmRpcnR5IGlucHV0Om5vdChbdHlwZT1cImNoZWNrYm94XCJdKSArIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFJldmVyc2UgdGhlIG9yZGVyIG9mIHRoZSBjaGVja2JveCBhbmQgaXRzIGxhYmVsLCBzbyB0aGF0IHRoZSBjaGVja2JveCBhcHBlYXJzIHRvIHRoZSByaWdodCBvZiB0aGUgbGFiZWwgd2l0aG91dCBoYXZpbmcgdG8gY2hhbmdlIHRoZSBtYXJrdXAgKi9cbiAgICAgICAgICAuZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY3VzdG9tLWlucHV0LWNvbnRhaW5lcixcbiAgICAgICAgICAuY3VzdG9tLXNlbGVjdC1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjVweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pLFxuICAgICAgICAgIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBWYWxpZGF0aW9uIHN0eWxlcyAqL1xuICAgICAgICAgIC52YWxpZCBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW52YWxpZCBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lcnJvci10ZXh0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IGRhcmtvcmNoaWQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lcnJvci10ZXh0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmVkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDhweCA4cHggN3B4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbkNvbnRhY3RGb3JtID0gcmVkdXhGb3JtKHtcbiAgZm9ybTogXCJyZWdpc3RlclwiLFxuICB2YWxpZGF0ZVxufSkoQ29udGFjdEZvcm0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTtcbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/ContactForm.js */"));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ContactForm = Object(redux_form__WEBPACK_IMPORTED_MODULE_7__["reduxForm"])({
  form: "register",
  validate: _validation__WEBPACK_IMPORTED_MODULE_9__["validate"]
})(ContactForm);
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/DesktopContact.js":
/*!**************************************!*\
  !*** ./components/DesktopContact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var DesktopContact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DesktopContact, _React$Component);

  function DesktopContact() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesktopContact);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopContact).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesktopContact, [{
    key: "render",
    value: function render() {
      var contacts = this.props.contacts;
      var email = this.props.email;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4044429900" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4044429900" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/events",
        className: "jsx-4044429900" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4044429900" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/contact",
        className: "jsx-4044429900" + " " + "header-link"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        className: "jsx-4044429900"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4044429900"
      }, ".head-contact.jsx-4044429900{margin-top:2.5%;float:right;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-4044429900 button.jsx-4044429900{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-4044429900{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-4044429900{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;-webkit-text-decoration:none;text-decoration:none;}a.jsx-4044429900:link{color:black;}a.jsx-4044429900:visited{color:black;-webkit-text-decoration:none;text-decoration:none;}a.jsx-4044429900:focus{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-4044429900:hover{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-4044429900:active{background:white;color:red;}.contact-channels.jsx-4044429900{margin-top:5%;width:90%;}.contact-channels.jsx-4044429900 a.jsx-4044429900{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;color:black;}@media only screen and (max-width:600px){}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBRzZCLEFBT0ssQUFLQSxBQU9BLEFBWVQsQUFJQSxBQUtZLEFBTUEsQUFNUCxBQUlILEFBSU8sWUE1QnZCLEFBSXVCLEVBcUJYLEVBeERFLENBb0RGLElBN0NhLEFBS1AsQUFPQSxBQXlDRixHQXBCSyxBQU1BLEFBV3JCLEdBSkEsQ0FwRFksT0E0REssRUFoREUsQUFPQSxDQWxCSixLQXVDRCxBQU1BLENBdkNLLE1Bc0RKLENBM0RpQixHQVdwQixBQU9PLENBcUJuQixBQU1BLE1BdkNBLENBMkJBLENBMkJnQyxDQWhEcEIsT0FPQSxHQU5aLE9BWkEsQUFtQm1CLFlBeUNBLEtBeENDLFlBeUNOLE1BeENLLE1BeUNuQixXQXhDc0Isb0JBQ0Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgRGVza3RvcENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLnByb3BzLmNvbnRhY3RzO1xuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5wcm9wcy5lbWFpbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtY29udGFjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkLWNvbnRhY3Qge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41JTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZC1jb250ZW50IGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZXZlbnRzLWxpbmsge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXItbGluayB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNSU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMDIwMTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzAyMDE0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY2hhbm5lbHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdC1jaGFubmVscyBhIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ1MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTEwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNrdG9wQ29udGFjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/DesktopContact.js */"));
    }
  }]);

  return DesktopContact;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DesktopContact);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sizeme */ "react-sizeme");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");













var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      pageLoaded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "propTypes", {
      size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
        width: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
        height: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired
      })
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "header",
        className: "jsx-399442568"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-399442568" + " " + "logos"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/",
        className: "jsx-399442568"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/Quotet_Handmade_Producers.png",
        alt: "quotet handmade producers logo",
        className: "jsx-399442568" + " " + "logo1"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
        width: this.props.size.width
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "399442568"
      }, "#header.jsx-399442568{height:10%;width:100%;top:0;left:0;padding:0;margin:0;z-index:1;overflow-x:hidden;}#header.jsx-399442568 h1.jsx-399442568{color:white;font-size:24px;margin-left:45%;float:left;}.logos.jsx-399442568{float:left;width:50%;}.logo1.jsx-399442568{margin-left:5%;margin-top:5%;}.logo5.jsx-399442568{margin-left:-21%;margin-top:-10%;position:fixed;background:white;border:solid #c02014;z-index:5;max-width:150px;}.head-content.jsx-399442568{margin-top:2.5%;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-399442568 button.jsx-399442568{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-399442568{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-399442568{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}.contact-channels.jsx-399442568{margin-top:5%;}.contact-channels.jsx-399442568 a.jsx-399442568{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;}@media only screen and (max-width:600px){#header.jsx-399442568 h1.jsx-399442568{margin-left:40%;}}@media only screen and (min-width:1450px){.logo5.jsx-399442568{margin-left:-18%;margin-top:-8%;}}@media only screen and (max-width:1110px){.logo5.jsx-399442568{margin-left:-27%;margin-top:-15%;width:17%;}}@media only screen and (max-width:815px){.logo5.jsx-399442568{margin-left:-27%;margin-top:-20%;}}@media only screen and (max-width:615px){.logo1.jsx-399442568{width:60%;}}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJvQixBQUd3QixBQVlDLEFBTUQsQUFJSSxBQUlFLEFBU0QsQUFNSyxBQUtBLEFBT0EsQUFXUCxBQUdPLEFBU0gsQUFLQyxBQU9BLEFBT0EsQUFNUCxVQUNaLENBckdXLEFBa0JELENBTkssRUFvRGpCLENBMUNnQixDQWFKLEFBeUNWLENBbERnQixBQXVEQyxBQU9DLEFBT0EsSUE1RXBCLEFBc0J5QixBQUtQLEFBT0EsQUFjRixDQWpFUixJQWtDTyxDQXZCRyxDQVZULENBb0JULEdBMkRFLENBdkRlLEFBOERILEFBT1osRUE1RlUsQUFnRUssRUFyQkUsQUFPQSxFQWpCYSxJQXZCbkIsQUE0RVgsQ0FoRGlCLENBckNSLEdBdUJRLEVBeUNKLElBL0RILEFBU1osQUFpQ1ksQUFPTyxPQVpuQixFQTJCZ0MsQ0EvRFosQUEwQ1IsQ0FwQlcsSUFTdkIsRUFrQlksR0FOWixPQU9tQixDQWpEbkIsSUFzQlksT0F5Q08sR0F4Q0QsRUEyQkUsWUFjcEIsRUF4Q0EsSUEyQm1CLGlCQUNHLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNpemVNZSBmcm9tIFwicmVhY3Qtc2l6ZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBhZ2VMb2FkZWQ6IGZhbHNlXG4gIH07XG4gIHByb3BUeXBlcyA9IHtcbiAgICBzaXplOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfSlcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvc1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvUXVvdGV0X0hhbmRtYWRlX1Byb2R1Y2Vycy5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJxdW90ZXQgaGFuZG1hZGUgcHJvZHVjZXJzIGxvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb250YWN0IHdpZHRoPXt0aGlzLnByb3BzLnNpemUud2lkdGh9IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaGVhZGVyIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ29zIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28xIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nbzUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWQtY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjUlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkLWNvbnRlbnQgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNldmVudHMtbGluayB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlci1saW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNSU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY2hhbm5lbHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0LWNoYW5uZWxzIGEge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICNoZWFkZXIgaDEge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NTBweCkge1xuICAgICAgICAgICAgLmxvZ281IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOCU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTBweCkge1xuICAgICAgICAgICAgLmxvZ281IHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNyU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcbiAgICAgICAgICAgIC5sb2dvNSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjclO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XG4gICAgICAgICAgICAubG9nbzEge1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gICAgICAgICAgICAubG9nbzEge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaXplTWUoeyBtb25pdG9yV2lkdGg6IHRydWUgfSkoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_9___default()({
  monitorWidth: true
})(Header));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Shell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shell */ "./components/Shell.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_10__);










 //export default

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_ga__WEBPACK_IMPORTED_MODULE_10___default.a.initialize("UA-144271320-11");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1657891521"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: "jsx-1657891521"
      }, "Quotet"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-1657891521"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1657891521"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Josefin+Sans",
        rel: "stylesheet",
        className: "jsx-1657891521"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        href: "/static/Quotet_Handmade_Producers.png",
        className: "jsx-1657891521"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Shell__WEBPACK_IMPORTED_MODULE_7__["default"], null, this.props.children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1657891521"
      }, "@import \"/static/alice-carousel.css\";body{font-family:\"Josefin Sans\",sans-serif;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;margin:0;background-color:white;}button{font-family:\"Josefin Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0IyQixBQUUrQyxBQUdLLEFBTUEsc0NBTGpCLEFBTXhCLHlHQUxXLFNBQ2MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hlbGwgZnJvbSBcIi4vU2hlbGxcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcblxuLy9leHBvcnQgZGVmYXVsdFxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgUmVhY3RHQS5pbml0aWFsaXplKFwiVUEtMTQ0MjcxMzIwLTExXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlF1b3RldDwvdGl0bGU+XG5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL1F1b3RldF9IYW5kbWFkZV9Qcm9kdWNlcnMucG5nXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPFNoZWxsPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvU2hlbGw+XG5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBAaW1wb3J0IFwiL3N0YXRpYy9hbGljZS1jYXJvdXNlbC5jc3NcIjtcblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MobileContact.js":
/*!*************************************!*\
  !*** ./components/MobileContact.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var MobileContact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileContact, _React$Component);

  function MobileContact() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileContact);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileContact).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileContact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3647488268" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3647488268" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/events",
        className: "jsx-3647488268" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3647488268" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/contact",
        className: "jsx-3647488268" + " " + "header-link"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3647488268"
      }, ".head-contact.jsx-3647488268{height:150px;margin-top:4.5%;width:40%;display:grid;}#events-link.jsx-3647488268{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-3647488268{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3647488268:link{color:black;}a.jsx-3647488268:visited{color:black;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3647488268:focus{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-3647488268:hover{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-3647488268:active{background:white;color:red;}@media only screen and (max-width:370px){.head-contact.jsx-3647488268{height:100px;}}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Nb2JpbGVDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNvQixBQUcwQixBQU9RLEFBT0EsQUFhVCxBQUlBLEFBS1ksQUFNQSxBQU1QLEFBS0YsWUF6QmpCLEFBSXVCLENBL0JMLEFBcURoQixJQUxVLElBekNNLEFBT0EsR0FzQkcsQUFNQSxHQU9yQixFQWhEWSxRQU9PLEFBT0EsRUFiSixJQW1DRCxBQU1BLFNBeENkLEVBTVksQUFPTyxDQXNCbkIsQUFNQSxPQVpBLEVBdEJZLE9BT0EsR0FOWixPQVFtQixpQkFDQyxrQkFDRCxpQkFDRyxvQkFDQyxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL01vYmlsZUNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb2JpbGVDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtY29udGFjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkLWNvbnRhY3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQuNSU7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjZXZlbnRzLWxpbmsge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXItbGluayB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAvKiBwYWRkaW5nOiAxMCU7ICovXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNSU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMDIwMTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzAyMDE0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgICAgICAgICAgLmhlYWQtY29udGFjdCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ1MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTEwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBjb25zdCBNb2JpbGVDb250YWN0ID0gcHJvcHMgPT4gKFxuXG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/MobileContact.js */"));
    }
  }]);

  return MobileContact;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // const MobileContact = props => (
// );


/* harmony default export */ __webpack_exports__["default"] = (MobileContact);

/***/ }),

/***/ "./components/Shell.js":
/*!*****************************!*\
  !*** ./components/Shell.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Shell = function Shell(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2853869446" + " " + "shell"
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2853869446"
  }, ".shell{margin-top:0%;margin-bottom:10%;}@media only screen and (max-width:600px){.item{padding:5%;}}@media only screen and (max-width:1410px){.shell{margin-top:0%;}}@media only screen and (max-width:1100px){.shell{margin-top:0%;}}@media only screen and (max-width:775px){.logo1{width:50%;}}@media only screen and (max-width:615px){.logo1{width:40%;}}@media only screen and (max-width:440px){.logo1{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9TaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIsQUFHdUIsQUFLRCxBQUtHLEFBTUEsQUFLSixBQUtBLEFBS0EsVUFUWixBQUtBLEFBS0EsQ0ExQkEsR0FMa0IsQUFVbEIsQUFNQSxrQkFmRiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvU2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGVsbCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzaGVsbFwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLnNoZWxsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MTBweCkge1xuICAgICAgICAuc2hlbGwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgIC5zaGVsbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc1cHgpIHtcbiAgICAgICAgLmxvZ28xIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XG4gICAgICAgIC5sb2dvMSB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAubG9nbzEge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hlbGw7XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Shell.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Shell);

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var SPINNER_SIZES = {
  small: 30,
  medium: 50,
  large: 70
};
var STROKE_WIDTHS = {
  small: 4,
  medium: 5,
  large: 6
};
var PATH_CLASS_NAMES = {
  small: "SmallSpinnerPath",
  medium: "MediumSpinnerPath",
  large: "LargeSpinnerPath"
};
function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["size"]);

  var baseSize = SPINNER_SIZES[size];
  var pathSize = baseSize / 2;
  var strokeWidth = STROKE_WIDTHS[size];
  var pathRadius = "".concat(baseSize / 2 - strokeWidth, "px");
  var className = PATH_CLASS_NAMES[size];
  var containerClassName = "SpinnerContainer SpinnerContainer-".concat(size, " ").concat(props.className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3424507002" + " " + (containerClassName || "")
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    width: baseSize,
    height: baseSize,
    viewBox: "0 0 ".concat(baseSize, " ").concat(baseSize),
    className: "jsx-3424507002" + " " + (className || "")
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    cx: pathSize,
    cy: pathSize,
    r: pathRadius,
    className: "jsx-3424507002" + " " + "SpinnerPath"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3424507002"
  }, ".Spinner.jsx-3424507002{-webkit-animation:rotate-jsx-3424507002 1.3s linear infinite;animation:rotate-jsx-3424507002 1.3s linear infinite;}.SpinnerContainer-large.jsx-3424507002{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@-webkit-keyframes rotate-jsx-3424507002{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}@keyframes rotate-jsx-3424507002{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}.SmallSpinnerPath.jsx-3424507002{stroke-dasharray:100;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:SmallDash-jsx-3424507002 1.3s ease-in-out infinite;animation:SmallDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes SmallDash-jsx-3424507002{0%{stroke-dashoffset:100;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:100;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes SmallDash-jsx-3424507002{0%{stroke-dashoffset:100;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:100;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}.MediumSpinnerPath.jsx-3424507002{stroke-dasharray:150;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:MediumDash-jsx-3424507002 1.3s ease-in-out infinite;animation:MediumDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes MediumDash-jsx-3424507002{0%{stroke-dashoffset:150;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:150;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes MediumDash-jsx-3424507002{0%{stroke-dashoffset:150;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:150;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}.LargeSpinnerPath.jsx-3424507002{stroke-dasharray:200;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:LargeDash-jsx-3424507002 1.3s ease-in-out infinite;animation:LargeDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes LargeDash-jsx-3424507002{0%{stroke-dashoffset:200;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:200;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes LargeDash-jsx-3424507002{0%{stroke-dashoffset:200;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:200;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEaUIsQUFHbUQsQUFJdkIsQUFRVSxBQUlFLEFBS04sQUFRRyxBQUlELEFBS0MsQUFNSCxBQVFHLEFBSUQsQUFLQyxBQU1ILEFBUUcsQUFJRCxBQUtDLGVBL0VoQixNQWlCWSxBQVlPLEFBV1AsQUFZTyxBQVdQLEFBWU8sQ0FsRDNCLEFBUzJCLEFBYzNCLEFBUzJCLEFBYzNCLEFBUzJCLENBL0VsQixTQUN1QixTQWdCUixBQXVCQSxBQXVCQSx3Q0F4RHhCLE1BSUEscUJBa0JBLEFBdUJBLEFBdUJBLENBekNBLEFBdUJBLEFBdUJBLEtBckZGLFdBdUJnRCxBQXVCQyxBQXVCRCxZQTlEaEQsc0hBaUJBLEFBOENBLEVBdkJBIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTUElOTkVSX1NJWkVTID0ge1xuICAgIHNtYWxsOiAzMCxcbiAgICBtZWRpdW06IDUwLFxuICAgIGxhcmdlOiA3MFxufTtcblxuY29uc3QgU1RST0tFX1dJRFRIUyA9IHtcbiAgICBzbWFsbDogNCxcbiAgICBtZWRpdW06IDUsXG4gICAgbGFyZ2U6IDZcbn07XG5cbmNvbnN0IFBBVEhfQ0xBU1NfTkFNRVMgPSB7XG4gICAgc21hbGw6IFwiU21hbGxTcGlubmVyUGF0aFwiLFxuICAgIG1lZGl1bTogXCJNZWRpdW1TcGlubmVyUGF0aFwiLFxuICAgIGxhcmdlOiBcIkxhcmdlU3Bpbm5lclBhdGhcIlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNwaW5uZXIoe3NpemUgPSBcInNtYWxsXCIsIC4uLnByb3BzfSkge1xuICAgIGNvbnN0IGJhc2VTaXplID0gU1BJTk5FUl9TSVpFU1tzaXplXTtcbiAgICBjb25zdCBwYXRoU2l6ZSA9IGJhc2VTaXplIC8gMjtcbiAgICBjb25zdCBzdHJva2VXaWR0aCA9IFNUUk9LRV9XSURUSFNbc2l6ZV07XG4gICAgY29uc3QgcGF0aFJhZGl1cyA9IGAke2Jhc2VTaXplIC8gMiAtIHN0cm9rZVdpZHRofXB4YDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBQQVRIX0NMQVNTX05BTUVTW3NpemVdO1xuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzTmFtZSA9IGBTcGlubmVyQ29udGFpbmVyIFNwaW5uZXJDb250YWluZXItJHtzaXplfSAke1xuICAgICAgICBwcm9wcy5jbGFzc05hbWVcbiAgICAgICAgfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17YmFzZVNpemV9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtiYXNlU2l6ZX1cbiAgICAgICAgICAgICAgICB2aWV3Qm94PXtgMCAwICR7YmFzZVNpemV9ICR7YmFzZVNpemV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNwaW5uZXJQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIGN4PXtwYXRoU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgY3k9e3BhdGhTaXplfVxuICAgICAgICAgICAgICAgICAgICByPXtwYXRoUmFkaXVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAuU3Bpbm5lciB7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxLjNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuU3Bpbm5lckNvbnRhaW5lci1sYXJnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5TbWFsbFNwaW5uZXJQYXRoIHtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEwMDtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBTbWFsbERhc2ggMS4zcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIFNtYWxsRGFzaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLk1lZGl1bVNwaW5uZXJQYXRoIHtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE1MDtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBNZWRpdW1EYXNoIDEuM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBNZWRpdW1EYXNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuTGFyZ2VTcGlubmVyUGF0aCB7XG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAyMDA7XG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogTGFyZ2VEYXNoIDEuM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBMYXJnZURhc2gge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNTA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMjAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Spinner.js */"));
}

/***/ }),

/***/ "./components/fields/index.js":
/*!************************************!*\
  !*** ./components/fields/index.js ***!
  \************************************/
/*! exports provided: customInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customInput", function() { return customInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var getValidityClassName = function getValidityClassName(meta) {
  if (meta.active) {
    return;
  }

  if (meta.touched && meta.invalid) {
    return "invalid";
  }

  if (meta.touched && meta.valid) {
    return "valid";
  }
};

var customInput = function customInput(props) {
  var label = props.label,
      input = props.input,
      type = props.type,
      meta = props.meta;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3676981543" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("custom-input-container", {
      "flex-row-reverse": type === "checkbox"
    }, {
      dirty: meta.dirty
    }, getValidityClassName(meta)) || "")
  }, type === "textbox" ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
    className: "jsx-3676981543" + " " + (input.className != null && input.className || "")
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
    type: type,
    className: "jsx-3676981543" + " " + (input.className != null && input.className || "")
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: "jsx-3676981543"
  }, label), meta.error && meta.touched && !meta.active && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3676981543" + " " + "feedback-text error-text"
  }, meta.error), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3676981543"
  }, "textarea{width:100%;min-height:100px;border:3px solid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9maWVsZHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN5QixBQUdzQixXQUNNLGlCQUNBLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvZmllbGRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IGdldFZhbGlkaXR5Q2xhc3NOYW1lID0gbWV0YSA9PiB7XG4gIGlmIChtZXRhLmFjdGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobWV0YS50b3VjaGVkICYmIG1ldGEuaW52YWxpZCkge1xuICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgfVxuICBpZiAobWV0YS50b3VjaGVkICYmIG1ldGEudmFsaWQpIHtcbiAgICByZXR1cm4gXCJ2YWxpZFwiO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY3VzdG9tSW5wdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGlucHV0LCB0eXBlLCBtZXRhIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICBcImN1c3RvbS1pbnB1dC1jb250YWluZXJcIixcbiAgICAgICAgeyBcImZsZXgtcm93LXJldmVyc2VcIjogdHlwZSA9PT0gXCJjaGVja2JveFwiIH0sXG4gICAgICAgIHsgZGlydHk6IG1ldGEuZGlydHkgfSxcbiAgICAgICAgZ2V0VmFsaWRpdHlDbGFzc05hbWUobWV0YSlcbiAgICAgICl9XG4gICAgPlxuICAgICAge3R5cGUgPT09IFwidGV4dGJveFwiID8gKFxuICAgICAgICA8dGV4dGFyZWEgey4uLmlucHV0fSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gLz5cbiAgICAgICl9XG4gICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG4gICAgICB7bWV0YS5lcnJvciAmJiBtZXRhLnRvdWNoZWQgJiYgIW1ldGEuYWN0aXZlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkYmFjay10ZXh0IGVycm9yLXRleHRcIj57bWV0YS5lcnJvcn08L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/fields/index.js */"));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ContactForm */ "./components/ContactForm.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_18__);



















var reducers = {
  form: redux_form__WEBPACK_IMPORTED_MODULE_17__["reducer"]
};
var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_16__["combineReducers"])(reducers);
var store = Object(redux__WEBPACK_IMPORTED_MODULE_16__["createStore"])(reducer //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      contacts: [],
      items: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("https://quotet-api.appspot.com/api/contacts/").then(function (res) {
        var contacts = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(res.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var contact = _step.value;
            contacts.push(contact);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.setState({
          contacts: contacts
        });
      });
      react_ga__WEBPACK_IMPORTED_MODULE_18___default.a.pageview(window.location.pathname + window.location.search);
    }
  }, {
    key: "render",
    value: function render() {
      var contacts = this.state.contacts;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-4121630498" + " " + "contacts"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "jsx-4121630498" + " " + "contact-list"
      }, contacts && contacts.length > 0 ? contacts.map(function (contact) {
        return contact.contact_type.toLowerCase() === "email" ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          className: "jsx-4121630498" + " " + "contact"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "mailto:".concat(contact.link.replace("http://", "").toLowerCase()),
          className: "jsx-4121630498"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-logo"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_13___default.a, {
          src: "/static/outline-email-24px.svg",
          svgStyle: {
            fill: "#c02014",
            width: "30px",
            marginTop: "10px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-info"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "jsx-4121630498"
        }, "".concat(contact.link.replace("http://", "").toLowerCase()))))) : contact.contact_type.toLowerCase() === "instagram" ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          className: "jsx-4121630498" + " " + "contact"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-4121630498"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-logo"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_13___default.a, {
          src: "/static/instagram.svg",
          svgStyle: {
            fill: "#c02014",
            width: "25px",
            marginTop: "10px",
            marginLeft: "2px;"
          }
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-info"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "jsx-4121630498"
        }, contact.contact_type)))) : contact.contact_type.toLowerCase() === "facebook" ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          className: "jsx-4121630498" + " " + "contact"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-4121630498"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-logo"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_13___default.a, {
          src: "/static/facebook.svg",
          svgStyle: {
            fill: "#c02014",
            width: "25px",
            marginTop: "10px",
            marginLeft: "2px;"
          }
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "jsx-4121630498" + " " + "contact-info"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          className: "jsx-4121630498"
        }, contact.contact_type)))) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
          className: "jsx-4121630498" + " " + "contact"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-4121630498"
        }, contact.contact_type));
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], null))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "jsx-4121630498" + " " + "contact-form"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ContactForm__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4121630498"
      }, ".contact-list{display:grid;grid-template-rows:repeat(auto-fit,48px);grid-gap:2%;padding:2.5%;list-style-type:none;width:33%;}.contact-logo{float:left;width:35%;}.contact-info{float:left;width:65%;}@media only screen and (max-width:800px){.info{grid-template-columns:1fr;width:90%;padding:5%;}}.contacts{margin-left:10%;margin-right:auto;marigin-bottom:auto;min-width:300px;width:65%;max-width:320px;padding-top:3%;padding-inline-end:3%;padding-inline-start:3%;padding-bottom:3%;}.contact-form{margin-left:10%;margin-right:auto;marigin-bottom:auto;min-width:250px;width:65%;max-width:320px;border:3px solid #c02014 !important;padding-top:3%;padding-inline-end:3%;padding-inline-start:3%;padding-bottom:3%;}@media only screen and (min-width:1024px){.contacts{margin-left:5%;}.contact-form{margin-left:5%;}}@media only screen and (min-width:950px){.contacts{margin-left:5%;}.contact-form{margin-left:5%;margin-right:5%;width:80%;max-width:1200px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SGEsQUFHOEIsQUFRRixBQUlBLEFBTWlCLEFBTVosQUFhQSxBQWVDLEFBR0EsQUFLQSxBQUdBLFdBdERQLEFBSUEsRUFaZ0MsRUFvRDFDLEFBR0EsQUFLQSxBQUdrQixDQXZDQSxBQWFBLEtBNUJwQixBQUlBLEtBS2MsS0E4Q0EsR0F2Q1EsQUFhQSxFQW5CUCxLQThDTSxNQTdDbkIsT0FuQlksQUF5QkksQUFhQSxJQTJCaEIsUUFoRWEsSUEwQkgsQUFhQSxTQXRDVyxDQTBCTCxBQWFBLGdCQVpELEFBYXFCLElBdkMxQixVQUNaLENBMEJ3QixxQkFhUCxDQVpTLGNBYUYsVUFaSixZQWFNLE1BWjFCLGtCQWFvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9wYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQuanNcIjtcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcblxuaW1wb3J0IFJlYWN0U1ZHIGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm1SZWR1Y2VyIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuXG5jb25zdCByZWR1Y2VycyA9IHtcbiAgZm9ybTogZm9ybVJlZHVjZXJcbn07XG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyXG4gIC8vICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjb250YWN0czogW10sXG4gICAgaXRlbXM6IFtdXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KGBodHRwczovL3F1b3RldC1hcGkuYXBwc3BvdC5jb20vYXBpL2NvbnRhY3RzL2ApLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhY3RzID0gW107XG4gICAgICBmb3IgKGxldCBjb250YWN0IG9mIHJlcy5kYXRhKSB7XG4gICAgICAgIGNvbnRhY3RzLnB1c2goY29udGFjdCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udGFjdHMgfSk7XG4gICAgfSk7XG4gICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWN0cyA9IHRoaXMuc3RhdGUuY29udGFjdHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RzXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFjdC1saXN0XCI+XG4gICAgICAgICAgICAgIHtjb250YWN0cyAmJiBjb250YWN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzLm1hcChjb250YWN0ID0+XG4gICAgICAgICAgICAgICAgICBjb250YWN0LmNvbnRhY3RfdHlwZS50b0xvd2VyQ2FzZSgpID09PSBcImVtYWlsXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BtYWlsdG86JHtjb250YWN0LmxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9vdXRsaW5lLWVtYWlsLTI0cHguc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmdTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjYzAyMDE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Ake2NvbnRhY3QubGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpfWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSA6IGNvbnRhY3QuY29udGFjdF90eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5zdGFncmFtXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y29udGFjdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW5zdGFncmFtLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2MwMjAxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMnB4O1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbnRhY3QuY29udGFjdF90eXBlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkgOiBjb250YWN0LmNvbnRhY3RfdHlwZS50b0xvd2VyQ2FzZSgpID09PSBcImZhY2Vib29rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y29udGFjdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvZmFjZWJvb2suc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmdTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjYzAyMDE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIycHg7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29udGFjdC5jb250YWN0X3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb250YWN0Lmxpbmt9Pntjb250YWN0LmNvbnRhY3RfdHlwZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxTcGlubmVyPjwvU3Bpbm5lcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIHsvKiA8Q29udGFjdCBpbmZvPXtjb250YWN0fSAvPiAqL31cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5jb250YWN0LWxpc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDQ4cHgpO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAyJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLjUlO1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb250YWN0LWxvZ28ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRhY3QtaW5mbyB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRhY3RzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJpZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMyU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDMlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJpZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2MwMjAxNCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDMlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAuY29udGFjdHMge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NTBweCkge1xuICAgICAgICAgICAgICAgIC5jb250YWN0cyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/pages/contact.js */")));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ }),

/***/ "./validation/index.js":
/*!*****************************!*\
  !*** ./validation/index.js ***!
  \*****************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
var validate = function validate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = "A name is required";
  }

  if (!values.email) {
    errors.anthem = "An email address is required";
  }

  if (!values.message) {
    errors.dreamdate = "Please provide information about what you would like help with";
  }

  return errors;
};

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bryanmutai/freelance/quotet.co.ke/pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-sizeme":
/*!*******************************!*\
  !*** external "react-sizeme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),

/***/ "react-svg":
/*!****************************!*\
  !*** external "react-svg" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map