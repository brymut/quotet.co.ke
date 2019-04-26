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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);












var DesktopContact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DesktopContact, _React$Component);

  function DesktopContact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DesktopContact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DesktopContact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      items: [],
      email: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DesktopContact, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var contacts = this.props.contacts;
      var email = this.props.email;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1522125601" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1522125601" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/events",
        className: "jsx-1522125601" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1522125601" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-1522125601" + " " + "header-link"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-1522125601"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1522125601" + " " + "contact-channels"
      }, email ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:".concat(email),
        className: "jsx-1522125601"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9___default.a, {
        src: "/static/outline-email-24px.svg",
        svgStyle: {
          fill: "#c02014",
          width: "30%",
          marginLeft: "15%"
        }
      }), email) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1522125601"
      }, "Loading..."), contacts && contacts.length > 0 ? contacts.map(function (contact) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-1522125601"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9___default.a, {
          src: "/static/instagram.svg",
          svgStyle: {
            fill: "#c02014",
            width: "30%",
            marginLeft: "15%"
          }
        }), contact.contact_type);
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1522125601"
      }, "Loading..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1522125601"
      }, ".head-contact.jsx-1522125601{margin-top:2.5%;float:right;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-1522125601 button.jsx-1522125601{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-1522125601{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-1522125601{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}a.jsx-1522125601:link{color:black;}a.jsx-1522125601:visited{color:black;-webkit-text-decoration:none;text-decoration:none;}a.jsx-1522125601:focus{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-1522125601:hover{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-1522125601:active{background:white;color:red;}.contact-channels.jsx-1522125601{margin-top:5%;width:90%;}.contact-channels.jsx-1522125601 a.jsx-1522125601{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;color:black;}@media only screen and (max-width:600px){}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RW9CLEFBRzZCLEFBT0ssQUFLQSxBQU9BLEFBV1QsQUFJQSxBQUtZLEFBTUEsQUFNUCxBQUlILEFBSU8sWUE1QnZCLEFBSXVCLEVBcUJYLEVBdkRFLENBbURGLElBNUNhLEFBS1AsQUFPQSxBQXdDRixHQXBCSyxBQU1BLEFBV3JCLEdBSkEsQ0FuRFksT0EyREssRUEvQ0UsQUFPQSxDQWxCSixLQXNDRCxBQU1BLENBdENLLE1BcURKLENBMURpQixHQVdwQixBQU9PLENBb0JuQixBQU1BLE1BdENBLENBMEJBLENBMkJnQyxDQS9DcEIsT0FPQSxHQU5aLE9BWkEsQUFtQm1CLFlBd0NBLEtBdkNDLFlBd0NOLE1BdkNLLE1Bd0NuQixXQXZDc0Isb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFNWRyBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNsYXNzIERlc2t0b3BDb250YWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy8gICBzdGF0ZSA9IHtcbiAgLy8gICAgIGdhbGxlcnlJdGVtczogdGhpcy5pdGVtcy5tYXAoaSA9PiA8aDIga2V5PXtpfT57aX08L2gyPilcbiAgLy8gICB9O1xuICBzdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZW1haWw6IFwiXCJcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRhY3RzID0gdGhpcy5wcm9wcy5jb250YWN0cztcbiAgICBjb25zdCBlbWFpbCA9IHRoaXMucHJvcHMuZW1haWw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkLWNvbnRhY3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiIGhyZWY9XCIvZXZlbnRzXCI+XG4gICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWNoYW5uZWxzXCI+XG4gICAgICAgICAgICB7ZW1haWwgPyAoXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT5cbiAgICAgICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvb3V0bGluZS1lbWFpbC0yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgICAgICBzdmdTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNjMDIwMTRcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTUlXCJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7ZW1haWx9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Y29udGFjdHMgJiYgY29udGFjdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgY29udGFjdHMubWFwKGNvbnRhY3QgPT4gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRhY3QubGlua30+XG4gICAgICAgICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbnN0YWdyYW0uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgc3ZnU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNjMDIwMTRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1JVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge2NvbnRhY3QuY29udGFjdF90eXBlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIm1haWx0bzpzYWxvbWVtdXRob25pMjZAZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvb3V0bGluZS1lbWFpbC0yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgICAgc3ZnU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2MwMjAxNFwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1JVwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgc2Fsb21lbXV0aG9uaTI2QGdtYWlsLmNvbVxuICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZC1jb250YWN0IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNSU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWQtY29udGVudCBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2V2ZW50cy1saW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyLWxpbmsge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41JTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmxpbmsge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzAyMDE0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MwMjAxNDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0LWNoYW5uZWxzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY2hhbm5lbHMgYSB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NTBweCkge1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExMHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzVweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/DesktopContact.js */"));
    }
  }]);

  return DesktopContact;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

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
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-on-screen */ "react-on-screen");
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");
/* harmony import */ var react_scroll_percentage__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll_percentage__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-sizeme */ "react-sizeme");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
















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
      size: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({
        width: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number.isRequired,
        height: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number.isRequired
      })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "animate", function (inView) {
      if (!inView) {
        var pageLoaded = _this.state.pageLoaded;

        if (pageLoaded === false) {
          // console.log("set");
          pageLoaded = true;
        } //   console.log("its gons");


        animejs__WEBPACK_IMPORTED_MODULE_11___default()({
          targets: ".logo5",
          translateY: "100%",
          duration: 800
        });

        _this.setState({
          pageLoaded: pageLoaded
        });
      } else {
        //   console.log("its hers");
        animejs__WEBPACK_IMPORTED_MODULE_11___default()({
          targets: ".logo5",
          translateY: "-30%",
          duration: 800
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scroll_percentage__WEBPACK_IMPORTED_MODULE_10___default.a, {
        onChange: function onChange(percentage, inView) {
          return _this2.animate(inView);
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "header",
        className: "jsx-2459207911"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2459207911" + " " + "logos"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/",
        className: "jsx-2459207911"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/Quotet_Handmade_Producers.png",
        alt: "quotet handmade producers logo",
        className: "jsx-2459207911" + " " + "logo1"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/",
        className: "jsx-2459207911"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/Quotet_Handmade_Producers.png",
        alt: "quotet handmade producers logo",
        className: "jsx-2459207911" + " " + "logo5"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
        width: this.props.size.width
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2459207911"
      }, "#header.jsx-2459207911{height:10%;width:100%;top:0;left:0;padding:0;margin:0;z-index:1;overflow-x:hidden;}#header.jsx-2459207911 h1.jsx-2459207911{color:white;font-size:24px;margin-left:45%;float:left;}.logos.jsx-2459207911{float:left;width:50%;}.logo1.jsx-2459207911{margin-left:5%;margin-top:5%;}.logo5.jsx-2459207911{margin-left:-21%;margin-top:-10%;position:fixed;background:white;border:solid #c02014;z-index:5;max-width:150px;}.head-content.jsx-2459207911{margin-top:2.5%;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-2459207911 button.jsx-2459207911{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-2459207911{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-2459207911{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}.contact-channels.jsx-2459207911{margin-top:5%;}.contact-channels.jsx-2459207911 a.jsx-2459207911{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;}@media only screen and (max-width:600px){#header.jsx-2459207911 h1.jsx-2459207911{margin-left:40%;}}@media only screen and (min-width:1450px){.logo5.jsx-2459207911{margin-left:-18%;margin-top:-8%;}}@media only screen and (max-width:1110px){.logo5.jsx-2459207911{margin-left:-27%;margin-top:-15%;width:17%;}}@media only screen and (max-width:940px){.logo1.jsx-2459207911{width:60%;margin-top:0%;margin-left:10%;}.logo5.jsx-2459207911{margin-left:-27%;margin-top:-15%;}}@media only screen and (max-width:815px){.logo5.jsx-2459207911{margin-left:-27%;margin-top:-20%;}}@media only screen and (max-width:615px){.logo1.jsx-2459207911{width:60%;}}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVzQixBQUcwQixBQVlDLEFBTUQsQUFJSSxBQUlFLEFBU0QsQUFNSyxBQUtBLEFBT0EsQUFXUCxBQUdPLEFBU0gsQUFLQyxBQU9BLEFBT1AsQUFLTyxBQU1BLEFBTVAsVUFoQkksQUFpQmhCLENBaEhXLEFBa0JELENBTkssRUFvRGpCLENBMUNnQixDQWFKLEFBeUNWLENBbERnQixBQXVEQyxBQU9DLEFBWUEsQUFNQSxJQXZGcEIsQUFzQnlCLEFBS1AsQUFPQSxBQWNGLENBakVSLEVBOEZZLEVBNURMLENBdkJHLENBVlQsQ0FvQlQsR0EyREUsQ0F2RGUsQUE4REgsQUFZWixBQU1BLEVBdkdVLEFBZ0VLLEVBckJFLEFBT0EsRUFqQmEsQ0E0RDlCLEdBbkZXLEFBNEVYLENBaERpQixDQXJDUixHQXVCUSxFQXlDSixJQS9ESCxBQVNaLEFBaUNZLEFBT08sT0FabkIsRUEyQmdDLENBL0RaLEFBMENSLENBcEJXLElBU3ZCLEVBa0JZLEdBTlosT0FPbUIsQ0FqRG5CLElBc0JZLE9BeUNPLEdBeENELEVBMkJFLFlBY3BCLEVBeENBLElBMkJtQixpQkFDRyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFja1Zpc2liaWxpdHkgZnJvbSBcInJlYWN0LW9uLXNjcmVlblwiO1xuaW1wb3J0IFNjcm9sbFBlcmNlbnRhZ2UgZnJvbSBcInJlYWN0LXNjcm9sbC1wZXJjZW50YWdlXCI7XG5pbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcbmltcG9ydCBzaXplTWUgZnJvbSBcInJlYWN0LXNpemVtZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vQ29udGFjdFwiO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwYWdlTG9hZGVkOiBmYWxzZVxuICB9O1xuICBwcm9wVHlwZXMgPSB7XG4gICAgc2l6ZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH07XG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgICBhbmltZSh7XG4gIC8vICAgICAgIHRhcmdldHM6IFwiLmxvZ28xXCIsXG4gIC8vICAgICAgIHRyYW5zbGF0ZVg6IDI1MCxcbiAgLy8gICAgICAgcm90YXRlOiBcIjF0dXJuXCIsXG4gIC8vICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCIsXG4gIC8vICAgICAgIGR1cmF0aW9uOiA4MDBcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cblxuICAvLyAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHByZXZQcm9wcyk7XG4gIC8vICAgfVxuXG4gIGFuaW1hdGUgPSBpblZpZXcgPT4ge1xuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBsZXQgcGFnZUxvYWRlZCA9IHRoaXMuc3RhdGUucGFnZUxvYWRlZDtcbiAgICAgIGlmIChwYWdlTG9hZGVkID09PSBmYWxzZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldFwiKTtcbiAgICAgICAgcGFnZUxvYWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaXRzIGdvbnNcIik7XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6IFwiLmxvZ281XCIsXG4gICAgICAgIHRyYW5zbGF0ZVk6IFwiMTAwJVwiLFxuICAgICAgICBkdXJhdGlvbjogODAwXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlTG9hZGVkIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaXRzIGhlcnNcIik7XG4gICAgICBhbmltZSh7XG4gICAgICAgIHRhcmdldHM6IFwiLmxvZ281XCIsXG4gICAgICAgIHRyYW5zbGF0ZVk6IFwiLTMwJVwiLFxuICAgICAgICBkdXJhdGlvbjogODAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U2Nyb2xsUGVyY2VudGFnZSBvbkNoYW5nZT17KHBlcmNlbnRhZ2UsIGluVmlldykgPT4gdGhpcy5hbmltYXRlKGluVmlldyl9PlxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvc1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvUXVvdGV0X0hhbmRtYWRlX1Byb2R1Y2Vycy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cInF1b3RldCBoYW5kbWFkZSBwcm9kdWNlcnMgbG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nbzFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvUXVvdGV0X0hhbmRtYWRlX1Byb2R1Y2Vycy5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cInF1b3RldCBoYW5kbWFkZSBwcm9kdWNlcnMgbG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nbzVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDb250YWN0IHdpZHRoPXt0aGlzLnByb3BzLnNpemUud2lkdGh9IC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNoZWFkZXIgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nb3Mge1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvMSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbzUge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIxJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWQtY29udGVudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNSU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkLWNvbnRlbnQgYnV0dG9uIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjZXZlbnRzLWxpbmsge1xuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRlci1saW5rIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0LWNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdC1jaGFubmVscyBhIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAjaGVhZGVyIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NTBweCkge1xuICAgICAgICAgICAgICAubG9nbzUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC04JTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTBweCkge1xuICAgICAgICAgICAgICAubG9nbzUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjclO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3JTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgICAgICAubG9nbzEge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubG9nbzUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjclO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODE1cHgpIHtcbiAgICAgICAgICAgICAgLmxvZ281IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI3JTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNXB4KSB7XG4gICAgICAgICAgICAgIC5sb2dvMSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgICAgICAubG9nbzEge1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2Nyb2xsUGVyY2VudGFnZT5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBzaXplTWUoeyBtb25pdG9yV2lkdGg6IHRydWUgfSkoSGVhZGVyKTtcbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Header.js */")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_12___default()({
  monitorWidth: true
})(Header));

/***/ }),

/***/ "./components/Info.js":
/*!****************************!*\
  !*** ./components/Info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Info = function Info(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3142132324" + " " + "info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3142132324" + " " + "text-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3142132324"
  }, "About"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "text-container",
    className: "jsx-3142132324"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "bx--front-line",
    className: "jsx-3142132324"
  }, "Quotet was founded in 2018 whose main objective is to preserve African culture while at the same time accessorizing the modern woman to give her confidence. We are driven by passion and desire to put a smile on the faces of others through uplifting their standards of living by empowering them economically. When the founder Salome Mwenda worked for the government of Kenya she travelled in many counties and met very many communities with diverse culture and skills. She was implementing the product development programme funded by the government of Kenya, the beneficiaries were Men, Women and youth who developed high quality products. After the completion of the programme she did a follow-up programme and the question that arose was, \u201Cthere is no market for my improved products and skills\u201D This left me thinking what I could do to complete the cycle. When the found left working for the government, she chose to do jewellery since she wanted to work with some of the artisans she trained so as to create a space for their skills and their products. Our labour and supply come from some of the artisans. Quotet is empowering these Artists economically and are therefore able to support their families."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3142132324" + " " + "text-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3142132324"
  }, "Mission"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3142132324"
  }, "To produce functional jewellery that suits the modern woman in every occasion and at the same time preserve the African culture.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3142132324" + " " + "text-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-3142132324"
  }, "Vision"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3142132324"
  }, "To Marry different African cultures and modern beauty to make functional accessories from beads."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3142132324"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3142132324"
  }, "To be the preferred alternative for accessories made in Africa"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3142132324"
  }, "To establish a store in one of the high end malls in the next three years"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3142132324"
  }, "To align ourselves with agenda four of 2018 and mostly the manufacturing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3142132324"
  }, "To align ourselves with agenda 2063 and in particular the 6th aspiration which states \u201CAn Africa which is people driven, relying on the potential offered by people especially its women and youth and caring for children."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3142132324"
  }, ".info{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2%;padding:2.5%;}.info h1{color:#c02014;}.text-section{border:solid #c02014;padding:2.5%;line-height:1.5;}.text-container{border:0;}.info ul{list-style:none;}.info ul li::before{content:\"\\2022\";color:#c02014;font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}.info li{margin-top:5%;}@media only screen and (max-width:800px){.info{grid-template-columns:1fr;width:90%;padding:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9JbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEdUIsQUFHc0IsQUFPQyxBQUdPLEFBS1osQUFVTyxBQVNBLEFBUUYsQUFJYyxTQTlCOUIsSUFmb0MsQ0FPcEMsQUFtQ0EsRUFqQkEsQUFTZ0IsS0F4QkQsS0FvQ0QsSUFYSyxJQXhCRCxFQW9DSCxXQTlDRCxBQW1DUyxBQVlyQixHQXBDRixTQVZlLFNBbUNILElBbENaLE1BbUNtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL0luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJbmZvID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2VjdGlvblwiPlxuICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICA8cCBjbGFzcz1cImJ4LS1mcm9udC1saW5lXCI+XG4gICAgICAgICAgUXVvdGV0IHdhcyBmb3VuZGVkIGluIDIwMTggd2hvc2UgbWFpbiBvYmplY3RpdmUgaXMgdG8gcHJlc2VydmUgQWZyaWNhblxuICAgICAgICAgIGN1bHR1cmUgd2hpbGUgYXQgdGhlIHNhbWUgdGltZSBhY2Nlc3Nvcml6aW5nIHRoZSBtb2Rlcm4gd29tYW4gdG8gZ2l2ZVxuICAgICAgICAgIGhlciBjb25maWRlbmNlLiBXZSBhcmUgZHJpdmVuIGJ5IHBhc3Npb24gYW5kIGRlc2lyZSB0byBwdXQgYSBzbWlsZSBvblxuICAgICAgICAgIHRoZSBmYWNlcyBvZiBvdGhlcnMgdGhyb3VnaCB1cGxpZnRpbmcgdGhlaXIgc3RhbmRhcmRzIG9mIGxpdmluZyBieVxuICAgICAgICAgIGVtcG93ZXJpbmcgdGhlbSBlY29ub21pY2FsbHkuIFdoZW4gdGhlIGZvdW5kZXIgU2Fsb21lIE13ZW5kYSB3b3JrZWRcbiAgICAgICAgICBmb3IgdGhlIGdvdmVybm1lbnQgb2YgS2VueWEgc2hlIHRyYXZlbGxlZCBpbiBtYW55IGNvdW50aWVzIGFuZCBtZXRcbiAgICAgICAgICB2ZXJ5IG1hbnkgY29tbXVuaXRpZXMgd2l0aCBkaXZlcnNlIGN1bHR1cmUgYW5kIHNraWxscy4gU2hlIHdhc1xuICAgICAgICAgIGltcGxlbWVudGluZyB0aGUgcHJvZHVjdCBkZXZlbG9wbWVudCBwcm9ncmFtbWUgZnVuZGVkIGJ5IHRoZVxuICAgICAgICAgIGdvdmVybm1lbnQgb2YgS2VueWEsIHRoZSBiZW5lZmljaWFyaWVzIHdlcmUgTWVuLCBXb21lbiBhbmQgeW91dGggd2hvXG4gICAgICAgICAgZGV2ZWxvcGVkIGhpZ2ggcXVhbGl0eSBwcm9kdWN0cy4gQWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgdGhlIHByb2dyYW1tZVxuICAgICAgICAgIHNoZSBkaWQgYSBmb2xsb3ctdXAgcHJvZ3JhbW1lIGFuZCB0aGUgcXVlc3Rpb24gdGhhdCBhcm9zZSB3YXMsIOKAnHRoZXJlXG4gICAgICAgICAgaXMgbm8gbWFya2V0IGZvciBteSBpbXByb3ZlZCBwcm9kdWN0cyBhbmQgc2tpbGxz4oCdIFRoaXMgbGVmdCBtZVxuICAgICAgICAgIHRoaW5raW5nIHdoYXQgSSBjb3VsZCBkbyB0byBjb21wbGV0ZSB0aGUgY3ljbGUuIFdoZW4gdGhlIGZvdW5kIGxlZnRcbiAgICAgICAgICB3b3JraW5nIGZvciB0aGUgZ292ZXJubWVudCwgc2hlIGNob3NlIHRvIGRvIGpld2VsbGVyeSBzaW5jZSBzaGUgd2FudGVkXG4gICAgICAgICAgdG8gd29yayB3aXRoIHNvbWUgb2YgdGhlIGFydGlzYW5zIHNoZSB0cmFpbmVkIHNvIGFzIHRvIGNyZWF0ZSBhIHNwYWNlXG4gICAgICAgICAgZm9yIHRoZWlyIHNraWxscyBhbmQgdGhlaXIgcHJvZHVjdHMuIE91ciBsYWJvdXIgYW5kIHN1cHBseSBjb21lIGZyb21cbiAgICAgICAgICBzb21lIG9mIHRoZSBhcnRpc2Fucy4gUXVvdGV0IGlzIGVtcG93ZXJpbmcgdGhlc2UgQXJ0aXN0cyBlY29ub21pY2FsbHlcbiAgICAgICAgICBhbmQgYXJlIHRoZXJlZm9yZSBhYmxlIHRvIHN1cHBvcnQgdGhlaXIgZmFtaWxpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zZWN0aW9uXCI+XG4gICAgICA8aDE+TWlzc2lvbjwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVG8gcHJvZHVjZSBmdW5jdGlvbmFsIGpld2VsbGVyeSB0aGF0IHN1aXRzIHRoZSBtb2Rlcm4gd29tYW4gaW4gZXZlcnlcbiAgICAgICAgb2NjYXNpb24gYW5kIGF0IHRoZSBzYW1lIHRpbWUgcHJlc2VydmUgdGhlIEFmcmljYW4gY3VsdHVyZS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2VjdGlvblwiPlxuICAgICAgPGgxPlZpc2lvbjwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgVG8gTWFycnkgZGlmZmVyZW50IEFmcmljYW4gY3VsdHVyZXMgYW5kIG1vZGVybiBiZWF1dHkgdG8gbWFrZSBmdW5jdGlvbmFsXG4gICAgICAgIGFjY2Vzc29yaWVzIGZyb20gYmVhZHMuXG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5UbyBiZSB0aGUgcHJlZmVycmVkIGFsdGVybmF0aXZlIGZvciBhY2Nlc3NvcmllcyBtYWRlIGluIEFmcmljYTwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBUbyBlc3RhYmxpc2ggYSBzdG9yZSBpbiBvbmUgb2YgdGhlIGhpZ2ggZW5kIG1hbGxzIGluIHRoZSBuZXh0IHRocmVlXG4gICAgICAgICAgeWVhcnNcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIFRvIGFsaWduIG91cnNlbHZlcyB3aXRoIGFnZW5kYSBmb3VyIG9mIDIwMTggYW5kIG1vc3RseSB0aGVcbiAgICAgICAgICBtYW51ZmFjdHVyaW5nXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBUbyBhbGlnbiBvdXJzZWx2ZXMgd2l0aCBhZ2VuZGEgMjA2MyBhbmQgaW4gcGFydGljdWxhciB0aGUgNnRoXG4gICAgICAgICAgYXNwaXJhdGlvbiB3aGljaCBzdGF0ZXMg4oCcQW4gQWZyaWNhIHdoaWNoIGlzIHBlb3BsZSBkcml2ZW4sIHJlbHlpbmcgb25cbiAgICAgICAgICB0aGUgcG90ZW50aWFsIG9mZmVyZWQgYnkgcGVvcGxlIGVzcGVjaWFsbHkgaXRzIHdvbWVuIGFuZCB5b3V0aCBhbmRcbiAgICAgICAgICBjYXJpbmcgZm9yIGNoaWxkcmVuLlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICB7Lyoge3Byb3BzLmNoaWxkcmVufSAqL31cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLmluZm8ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICBncmlkLWdhcDogMiU7XG4gICAgICAgIHBhZGRpbmc6IDIuNSU7XG4gICAgICB9XG5cbiAgICAgIC5pbmZvIGgxIHtcbiAgICAgICAgY29sb3I6ICNjMDIwMTQ7XG4gICAgICB9XG4gICAgICAudGV4dC1zZWN0aW9uIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICBwYWRkaW5nOiAyLjUlO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgfVxuICAgICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuXG4gICAgICAuYngtLWZyb250LWxpbmUge1xuICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmluZm8gdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgICAgLy8gLmluZm8gcCB7XG4gICAgICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIC8vICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAvLyAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAvLyB9XG5cbiAgICAgIC5pbmZvIHVsIGxpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcXFwyMDIyXCI7XG4gICAgICAgIGNvbG9yOiAjYzAyMDE0OyAvKiBDaGFuZ2UgdGhlIGNvbG9yICovXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBJZiB5b3Ugd2FudCBpdCB0byBiZSBib2xkICovXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogTmVlZGVkIHRvIGFkZCBzcGFjZSBiZXR3ZWVuIHRoZSBidWxsZXQgYW5kIHRoZSB0ZXh0ICovXG4gICAgICAgIHdpZHRoOiAxZW07IC8qIEFsc28gbmVlZGVkIGZvciBzcGFjZSAodHdlYWsgaWYgbmVlZGVkKSAqL1xuICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTsgLyogQWxzbyBuZWVkZWQgZm9yIHNwYWNlICh0d2VhayBpZiBuZWVkZWQpICovXG4gICAgICB9XG4gICAgICAuaW5mbyBsaSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvO1xuIl19 */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Info.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Info);

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Shell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shell */ "./components/Shell.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_11__);











 //export default

var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props)); // This binding is necessary to make `this` work in the callback

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScrolling", function () {
      console.log("scrolling");
    });

    _this.handleScrolling = _this.handleScrolling.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2392219451"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        className: "jsx-2392219451"
      }, "Qoutet"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2392219451"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-2392219451"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Josefin+Sans",
        rel: "stylesheet",
        className: "jsx-2392219451"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "icon",
        href: "/static/Quotet_Handmade_Producers.png",
        className: "jsx-2392219451"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("script", {
        crossOrigin: "anonymous",
        src: "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry",
        className: "jsx-2392219451"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Shell__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onScroll: this.handleScrolling
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2392219451"
      }, "@import \"/static/alice-carousel.css\";html,body{overflow-x:scroll;}body{font-family:\"Josefin Sans\",sans-serif;-webkit-letter-spacing:0.05em;-moz-letter-spacing:0.05em;-ms-letter-spacing:0.05em;letter-spacing:0.05em;margin:0;background-color:white;}button{font-family:\"Josefin Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkMyQixBQUUrQyxBQUdoQixBQUdxQixBQU1BLGtCQVJ6QyxvQkFHd0IsQUFNeEIseUdBTFcsU0FDYyx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGVsbCBmcm9tIFwiLi9TaGVsbFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuLy9leHBvcnQgZGVmYXVsdFxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAvLyBUaGlzIGJpbmRpbmcgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgYHRoaXNgIHdvcmsgaW4gdGhlIGNhbGxiYWNrXG4gICAgdGhpcy5oYW5kbGVTY3JvbGxpbmcgPSB0aGlzLmhhbmRsZVNjcm9sbGluZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsaW5nID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsaW5nXCIpO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge31cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Rb3V0ZXQ8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Kb3NlZmluK1NhbnNcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvUXVvdGV0X0hhbmRtYWRlX1Byb2R1Y2Vycy5wbmdcIiAvPlxuXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wb2x5ZmlsbC5pby92My9wb2x5ZmlsbC5taW4uanM/ZmVhdHVyZXM9SW50ZXJzZWN0aW9uT2JzZXJ2ZXIlMkNJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICA8U2hlbGwgb25TY3JvbGw9e3RoaXMuaGFuZGxlU2Nyb2xsaW5nfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1NoZWxsPlxuXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgQGltcG9ydCBcIi9zdGF0aWMvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG4gICAgICAgICAgaHRtbCxcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DesktopContact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DesktopContact */ "./components/DesktopContact.js");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_10__);












var MobileContact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileContact, _React$Component);

  function MobileContact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileContact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileContact).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      open: false,
      item: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenModal", function () {
      _this.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      open: false,
      item: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileContact, [{
    key: "componentDidMount",
    value: function componentDidMount() {// axios
      //   .get(`https://quotet-api.appspot.com/api/items/${this.props.item.id}/`)
      //   .then(res => {
      //     const item = res.data;
      //     this.setState({ item });
      //   });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          item = _this$state.item,
          isLoading = _this$state.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-382017840" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-382017840" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/events",
        className: "jsx-382017840" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.onOpenModal,
        className: "jsx-382017840" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-382017840" + " " + "header-link"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
        open: this.state.open,
        onClose: this.onCloseModal,
        center: true
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "382017840"
      }, ".head-contact.jsx-382017840{height:150px;margin-top:4.5%;width:40%;display:grid;}#events-link.jsx-382017840{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-382017840{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}@media only screen and (max-width:370px){.head-contact.jsx-382017840{height:100px;}}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Nb2JpbGVDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHMEIsQUFPUSxBQU9BLEFBYU4sYUExQkMsQUEyQmhCLFFBcEJnQixBQU9BLFFBYk4sUUFPTyxBQU9BLEVBYkosYUFDZixFQU1ZLEFBT08sVUFOUCxPQU9BLEdBTlosT0FRbUIsaUJBQ0Msa0JBQ0QsaUJBQ0csb0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Nb2JpbGVDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlc2t0b3BDb250YWN0IGZyb20gXCIuL0Rlc2t0b3BDb250YWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtbW9kYWxcIjtcblxuY2xhc3MgTW9iaWxlQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGl0ZW06IHt9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGl0ZW06IHt9XG4gIH07XG5cbiAgb25PcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gYXhpb3NcbiAgICAvLyAgIC5nZXQoYGh0dHBzOi8vcXVvdGV0LWFwaS5hcHBzcG90LmNvbS9hcGkvaXRlbXMvJHt0aGlzLnByb3BzLml0ZW0uaWR9L2ApXG4gICAgLy8gICAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICBjb25zdCBpdGVtID0gcmVzLmRhdGE7XG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtIH0pO1xuICAgIC8vICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtLCBpc0xvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkLWNvbnRhY3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiIGhyZWY9XCIvZXZlbnRzXCI+XG4gICAgICAgICAgICBFdmVudHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBvbkNsaWNrPXt0aGlzLm9uT3Blbk1vZGFsfT5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiPkNvbnRhY3Q8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2VudGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaGVhZC1jb250YWN0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjUlO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI2V2ZW50cy1saW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyLWxpbmsge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgLyogcGFkZGluZzogMTAlOyAqL1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41JTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gICAgICAgICAgICAuaGVhZC1jb250YWN0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDUwcHgpIHtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNvbnN0IE1vYmlsZUNvbnRhY3QgPSBwcm9wcyA9PiAoXG5cbi8vICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUNvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/MobileContact.js */"));
    }
  }]);

  return MobileContact;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // const MobileContact = props => (
// );


/* harmony default export */ __webpack_exports__["default"] = (MobileContact);

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
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
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_simple_img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-simple-img */ "react-simple-img");
/* harmony import */ var react_simple_img__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_simple_img__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! carbon-components-react */ "carbon-components-react");
/* harmony import */ var carbon_components_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react__WEBPACK_IMPORTED_MODULE_13__);















var Product =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Product, _React$Component);

  function Product(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Product).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      open: false,
      isLoading: true,
      item: {}
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOpenModal", function () {
      _this.setState({
        open: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCloseModal", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      open: false,
      isLoading: true,
      item: {}
    };
    return _this;
  } // handleImageErrored() {
  //   this.setState({ imageStatus: "failed to load" });
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Product, [{
    key: "handleImageLoaded",
    value: function handleImageLoaded() {
      console.log("done");
      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://quotet-api.appspot.com/api/items/".concat(this.props.item.id, "/")).then(function (res) {
        var item = res.data;

        _this2.setState({
          item: item
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          item = _this$state.item,
          isLoading = _this$state.isLoading;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2682479114"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: this.onOpenModal,
        className: "jsx-2682479114" + " " + "item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: item.image,
        alt: "",
        onLoad: this.handleImageLoaded.bind(this) // onError={this.handleImageErrored.bind(this)}
        ,
        className: "jsx-2682479114" + " " + "item-img"
      }), isLoading === true ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_11__["Spinner"], null) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-2682479114"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-2682479114"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2682479114" + " " + "item-name"
      }, item.name)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
        open: this.state.open,
        onClose: this.onCloseModal,
        center: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2682479114"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-2682479114"
      }, item.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2682479114"
      }, item.description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_simple_img__WEBPACK_IMPORTED_MODULE_10__["SimpleImg"], {
        placeholder: "red",
        className: "item-img",
        src: item.image
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2682479114"
      }, ".item{border:solid #c02014;padding:2.5%;margin:2.5%;max-width:400px;}.item-name{width:75%;text-align:center;margin:auto;}.item-desc{width:75%;text-align:center;margin:auto;}.item-img{display:block;margin-left:auto;margin-right:auto;width:90%;max-height:200px;}@media only screen and (max-width:600px){.item{padding:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFMkIsQUFHa0MsQUFNWCxBQUtBLEFBS0ksQUFRRCxVQWpCSyxBQUtBLENBYWxCLEdBUmlCLE9BaEJKLE9BT0QsQUFLQSxHQUtNLEdBaEJOLE1BT2QsQUFLQSxNQVhrQixHQWdCTixVQUNPLEdBaEJuQixjQWlCQSIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1tb2RhbFwiO1xuaW1wb3J0IHsgU2ltcGxlSW1nIH0gZnJvbSBcInJlYWN0LXNpbXBsZS1pbWdcIjtcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwiLi9TcGlubmVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBGaWxlVXBsb2FkZXJTa2VsZXRvbiB9IGZyb20gXCJjYXJib24tY29tcG9uZW50cy1yZWFjdFwiO1xuXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgaXRlbToge31cbiAgICB9O1xuICB9XG4gIC8vIGhhbmRsZUltYWdlRXJyb3JlZCgpIHtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VTdGF0dXM6IFwiZmFpbGVkIHRvIGxvYWRcIiB9KTtcbiAgLy8gfVxuXG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBpdGVtOiB7fVxuICB9O1xuXG4gIG9uT3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gIH07XG4gIGhhbmRsZUltYWdlTG9hZGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBheGlvc1xuICAgICAgLmdldChgaHR0cHM6Ly9xdW90ZXQtYXBpLmFwcHNwb3QuY29tL2FwaS9pdGVtcy8ke3RoaXMucHJvcHMuaXRlbS5pZH0vYClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSByZXMuZGF0YTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW0gfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGlzTG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPXt0aGlzLm9uT3Blbk1vZGFsfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1pbWdcIlxuICAgICAgICAgICAgb25Mb2FkPXt0aGlzLmhhbmRsZUltYWdlTG9hZGVkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAvLyBvbkVycm9yPXt0aGlzLmhhbmRsZUltYWdlRXJyb3JlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzTG9hZGluZyA9PT0gdHJ1ZSA/IDxTcGlubmVyIC8+IDogPGJyIC8+fVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJpdGVtLW5hbWVcIj57aXRlbS5uYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5zdGF0ZS5vcGVufSBvbkNsb3NlPXt0aGlzLm9uQ2xvc2VNb2RhbH0gY2VudGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPFNpbXBsZUltZ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0taW1nXCJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17dGhpcy5wcm9wcy5pdGVtLmltYWdlfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpdGVtLWltZ1wiIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNSU7XG4gICAgICAgICAgICBtYXJnaW46IDIuNSU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtLWRlc2Mge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW0taW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgc3RhdGUgPSB7XG4vLyAgICAgb3BlbjogZmFsc2Vcbi8vICAgfTtcblxuLy8gICBvbk9wZW5Nb2RhbCA9ICgpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbi8vICAgfTtcblxuLy8gICBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuLy8gICB9O1xuXG4vLyAgIHJlbmRlcigpIHt9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbi8vIC8vIEZpcnN0IHdheSB0byBpbXBvcnRcbi8vIGltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5cbi8vIGNvbnN0IG92ZXJyaWRlID0gY3NzYFxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIGJvcmRlci1jb2xvcjogcmVkO1xuLy8gYDtcblxuLy8gY2xhc3MgQXdlc29tZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgICBsb2FkaW5nOiB0cnVlXG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9J3N3ZWV0LWxvYWRpbmcnPlxuLy8gICAgICAgICA8Q2xpcExvYWRlclxuLy8gICAgICAgICAgIGNzcz17b3ZlcnJpZGV9XG4vLyAgICAgICAgICAgc2l6ZVVuaXQ9e1wicHhcIn1cbi8vICAgICAgICAgICBzaXplPXsxNTB9XG4vLyAgICAgICAgICAgY29sb3I9eycjMTIzYWJjJ31cbi8vICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Product.js */"));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // class ProductDetails extends React.Component {
//   state = {
//     open: false
//   };
//   onOpenModal = () => {
//     this.setState({ open: true });
//   };
//   onCloseModal = () => {
//     this.setState({ open: false });
//   };
//   render() {}
// }


/* harmony default export */ __webpack_exports__["default"] = (Product); // import React from 'react';
// import { css } from '@emotion/core';
// // First way to import
// import { ClipLoader } from 'react-spinners';
// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;
// class AwesomeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true
//     }
//   }
//   render() {
//     return (
//       <div className='sweet-loading'>
//         <ClipLoader
//           css={override}
//           sizeUnit={"px"}
//           size={150}
//           color={'#123abc'}
//           loading={this.state.loading}
//         />
//       </div>
//     )
//   }
// }

/***/ }),

/***/ "./components/ProductCorousel.js":
/*!***************************************!*\
  !*** ./components/ProductCorousel.js ***!
  \***************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-alice-carousel */ "react-alice-carousel");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-svg */ "react-svg");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);













 // const ProductCorousel = props => {
//   const handleOnDragStart = e => e.preventDefault();
// };
// const SomethingElse = props => ({
//   /* {props.children} */
// });

var ProductCorousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProductCorousel, _React$Component);

  function ProductCorousel() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductCorousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductCorousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      items: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "thumbItem", function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        key: item,
        onClick: function onClick() {
          return _this.Carousel._onDotClick(i);
        }
      }, "*", " ");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductCorousel, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("https://quotet-api.appspot.com/api/categories/".concat(this.props.category.id, "/items")).then(function (res) {
        var raw_items = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(res.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            raw_items.push(item);
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

        var items = raw_items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_12__["default"], {
            item: item
          });
        });

        _this2.setState({
          items: items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var items = this.state.items;
      var categoryName = this.props.category.name;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-881662669" + " " + "product-cont"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        className: "jsx-881662669" + " " + "product-cat"
      }, categoryName), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "carousel-cont",
        className: "jsx-881662669"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        id: "prev-button",
        onClick: function onClick() {
          return _this3.Carousel._slidePrev();
        },
        className: "jsx-881662669"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_11___default.a, {
        src: "/static/outline-chevron_left-24px.svg",
        svgStyle: {
          fill: "red"
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "carousel",
        className: "jsx-881662669"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_alice_carousel__WEBPACK_IMPORTED_MODULE_10___default.a, {
        items: items,
        dotsDisabled: true,
        buttonsDisabled: true,
        ref: function ref(el) {
          return _this3.Carousel = el;
        },
        mouseDragEnabled: true,
        responsive: this.props.responsive,
        stagePadding: this.props.stagePadding
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        id: "next-button",
        onClick: function onClick() {
          return _this3.Carousel._slideNext();
        },
        className: "jsx-881662669"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_11___default.a, {
        src: "/static/outline-chevron_right-24px.svg",
        svgStyle: {
          fill: "red"
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "881662669"
      }, ".product-cat{color:#c02014;margin-left:2.5%;margin-top:7.5%;}.child{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}#carousel-cont{position:relative;height:375px;width:90%;margin-left:6%;}#prev-button{position:absolute;top:50%;left:-3%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);float:left;border:0;}#next-button{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);float:left;border:0;}#carousel{width:100%;float:left;margin-left:0%;}@media only screen and (max-width:600px){#carousel-cont{width:80%;margin-left:10%;height:315px;}#prev-button{left:-8%;}}@media only screen and (min-width:1250px){#carousel-cont{height:315px;}}@media only screen and (max-width:1150px){#carousel-cont{height:285px;}}@media only screen and (max-width:1000px){#carousel-cont{height:255px;}}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){#prev-button{left:-10%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Qcm9kdWN0Q29yb3VzZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkUyQixBQUsyQixBQUtJLEFBS0EsQUFNQSxBQVFBLEFBT1AsQUFNQyxBQUtELEFBS0ksQUFNQSxBQUtBLEFBV0gsU0ExQlosQ0FMa0IsQUFnQ2xCLENBdENXLEVBZ0JYLEFBTUEsQUFLQSxDQTFEaUIsSUFLVCxBQUtLLEFBTUwsQUFRQSxJQVFPLElBMUJZLEFBV2xCLEFBUWtCLEFBYVosS0FyQ0MsQUFVTixJQU9pQixFQWU3QixFQU1FLEVBM0JlLE1BVmpCLFNBV0EsK0RBTkEsQUFtQmEsU0FQQSxFQVFGLFNBUEEsQUFRWCxTQVBBIiwiZmlsZSI6Ii9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9Qcm9kdWN0Q29yb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWxpY2VDYXJvdXNlbCBmcm9tIFwicmVhY3QtYWxpY2UtY2Fyb3VzZWxcIjtcbmltcG9ydCBSZWFjdFNWRyBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGNvbnN0IFByb2R1Y3RDb3JvdXNlbCA9IHByb3BzID0+IHtcbi8vICAgY29uc3QgaGFuZGxlT25EcmFnU3RhcnQgPSBlID0+IGUucHJldmVudERlZmF1bHQoKTtcbi8vIH07XG5cbi8vIGNvbnN0IFNvbWV0aGluZ0Vsc2UgPSBwcm9wcyA9PiAoe1xuLy8gICAvKiB7cHJvcHMuY2hpbGRyZW59ICovXG4vLyB9KTtcbmNsYXNzIFByb2R1Y3RDb3JvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vICAgc3RhdGUgPSB7XG4gIC8vICAgICBnYWxsZXJ5SXRlbXM6IHRoaXMuaXRlbXMubWFwKGkgPT4gPGgyIGtleT17aX0+e2l9PC9oMj4pXG4gIC8vICAgfTtcbiAgc3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdXG4gIH07XG5cbiAgdGh1bWJJdGVtID0gKGl0ZW0sIGkpID0+IChcbiAgICA8c3BhbiBrZXk9e2l0ZW19IG9uQ2xpY2s9eygpID0+IHRoaXMuQ2Fyb3VzZWwuX29uRG90Q2xpY2soaSl9PlxuICAgICAgKntcIiBcIn1cbiAgICA8L3NwYW4+XG4gICk7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9xdW90ZXQtYXBpLmFwcHNwb3QuY29tL2FwaS9jYXRlZ29yaWVzLyR7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jYXRlZ29yeS5pZFxuICAgICAgICB9L2l0ZW1zYFxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgcmF3X2l0ZW1zID0gW107XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzLmRhdGEpIHtcbiAgICAgICAgICByYXdfaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlbXMgPSByYXdfaXRlbXMubWFwKGl0ZW0gPT4gPFByb2R1Y3QgaXRlbT17aXRlbX0gLz4pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXMgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gdGhpcy5wcm9wcy5jYXRlZ29yeS5uYW1lO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9kdWN0LWNhdFwiPntjYXRlZ29yeU5hbWV9PC9oMT5cbiAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsLWNvbnRcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldi1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLkNhcm91c2VsLl9zbGlkZVByZXYoKX0+XG4gICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9vdXRsaW5lLWNoZXZyb25fbGVmdC0yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgIHN2Z1N0eWxlPXt7IGZpbGw6IFwicmVkXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBpZD1cImNhcm91c2VsXCI+XG4gICAgICAgICAgICA8QWxpY2VDYXJvdXNlbFxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgIGRvdHNEaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgYnV0dG9uc0Rpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLkNhcm91c2VsID0gZWwpfVxuICAgICAgICAgICAgICBtb3VzZURyYWdFbmFibGVkXG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3RoaXMucHJvcHMucmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgc3RhZ2VQYWRkaW5nPXt0aGlzLnByb3BzLnN0YWdlUGFkZGluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIm5leHQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5DYXJvdXNlbC5fc2xpZGVOZXh0KCl9PlxuICAgICAgICAgICAgPFJlYWN0U1ZHXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvb3V0bGluZS1jaGV2cm9uX3JpZ2h0LTI0cHguc3ZnXCJcbiAgICAgICAgICAgICAgc3ZnU3R5bGU9e3sgZmlsbDogXCJyZWRcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAucHJvZHVjdC1jb250IHtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtY2F0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3LjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hpbGQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJvdXNlbC1jb250IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogMzc1cHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcHJldi1idXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiAtMyU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI25leHQtYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjYXJvdXNlbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAjY2Fyb3VzZWwtY29udCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcHJldi1idXR0b24ge1xuICAgICAgICAgICAgICBsZWZ0OiAtOCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI1MHB4KSB7XG4gICAgICAgICAgICAjY2Fyb3VzZWwtY29udCB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgICAgICAgICAgICNjYXJvdXNlbC1jb250IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyODVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgICNjYXJvdXNlbC1jb250IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgICAgI3ByZXYtYnV0dG9uIHtcbiAgICAgICAgICAgICAgbGVmdDogLTEwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb3JvdXNlbDtcbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/ProductCorousel.js */"));
    }
  }]);

  return ProductCorousel;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductCorousel);

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
    className: "jsx-4042114478" + " " + "shell"
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4042114478"
  }, ".shell{margin-top:0%;overflow:hidden;}@media only screen and (max-width:600px){.item{padding:5%;}}@media only screen and (max-width:1410px){.shell{margin-top:0%;}}@media only screen and (max-width:1100px){.shell{margin-top:0%;}}@media only screen and (max-width:775px){.logo1{width:50%;}}@media only screen and (max-width:615px){.logo1{width:40%;}}@media only screen and (max-width:440px){.logo1{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9TaGVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHdUIsQUFHdUIsQUFLRCxBQUtHLEFBTUEsQUFLSixBQUtBLEFBS0EsVUFUWixBQUtBLEFBS0EsQ0ExQkEsR0FMZ0IsQUFVaEIsQUFNQSxnQkFmRiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvU2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGVsbCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzaGVsbFwiPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgLnNoZWxsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDEwcHgpIHtcbiAgICAgICAgLnNoZWxsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAuc2hlbGwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgIC5sb2dvMSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTVweCkge1xuICAgICAgICAubG9nbzEge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgICAgICAgLmxvZ28xIHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNoZWxsO1xuIl19 */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Shell.js */"));
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
  }, ".Spinner.jsx-3424507002{-webkit-animation:rotate-jsx-3424507002 1.3s linear infinite;animation:rotate-jsx-3424507002 1.3s linear infinite;}.SpinnerContainer-large.jsx-3424507002{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@-webkit-keyframes rotate-jsx-3424507002{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}@keyframes rotate-jsx-3424507002{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}}.SmallSpinnerPath.jsx-3424507002{stroke-dasharray:100;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:SmallDash-jsx-3424507002 1.3s ease-in-out infinite;animation:SmallDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes SmallDash-jsx-3424507002{0%{stroke-dashoffset:100;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:100;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes SmallDash-jsx-3424507002{0%{stroke-dashoffset:100;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:100;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}.MediumSpinnerPath.jsx-3424507002{stroke-dasharray:150;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:MediumDash-jsx-3424507002 1.3s ease-in-out infinite;animation:MediumDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes MediumDash-jsx-3424507002{0%{stroke-dashoffset:150;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:150;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes MediumDash-jsx-3424507002{0%{stroke-dashoffset:150;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:150;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}.LargeSpinnerPath.jsx-3424507002{stroke-dasharray:200;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:LargeDash-jsx-3424507002 1.3s ease-in-out infinite;animation:LargeDash-jsx-3424507002 1.3s ease-in-out infinite;}@-webkit-keyframes LargeDash-jsx-3424507002{0%{stroke-dashoffset:200;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:200;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}@keyframes LargeDash-jsx-3424507002{0%{stroke-dashoffset:200;}50%{stroke-dashoffset:50;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:200;-webkit-transform:rotate(450deg);-ms-transform:rotate(450deg);transform:rotate(450deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9TcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEUyxBQUdtRCxBQUl2QixBQVFVLEFBSUUsQUFLTixBQVFHLEFBSUQsQUFLQyxBQU1ILEFBUUcsQUFJRCxBQUtDLEFBTUgsQUFRRyxBQUlELEFBS0MsZUEvRWhCLE1BaUJZLEFBWU8sQUFXUCxBQVlPLEFBV1AsQUFZTyxDQWxEM0IsQUFTMkIsQUFjM0IsQUFTMkIsQUFjM0IsQUFTMkIsQ0EvRWxCLFNBQ3VCLFNBZ0JSLEFBdUJBLEFBdUJBLHdDQXhEeEIsTUFJQSxxQkFrQkEsQUF1QkEsQUF1QkEsQ0F6Q0EsQUF1QkEsQUF1QkEsS0FyRkYsV0F1QmdELEFBdUJDLEFBdUJELFlBOURoRCxzSEFpQkEsQUE4Q0EsRUF2QkEiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL1NwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNQSU5ORVJfU0laRVMgPSB7XG4gIHNtYWxsOiAzMCxcbiAgbWVkaXVtOiA1MCxcbiAgbGFyZ2U6IDcwXG59O1xuXG5jb25zdCBTVFJPS0VfV0lEVEhTID0ge1xuICBzbWFsbDogNCxcbiAgbWVkaXVtOiA1LFxuICBsYXJnZTogNlxufTtcblxuY29uc3QgUEFUSF9DTEFTU19OQU1FUyA9IHtcbiAgc21hbGw6IFwiU21hbGxTcGlubmVyUGF0aFwiLFxuICBtZWRpdW06IFwiTWVkaXVtU3Bpbm5lclBhdGhcIixcbiAgbGFyZ2U6IFwiTGFyZ2VTcGlubmVyUGF0aFwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU3Bpbm5lcih7IHNpemUgPSBcInNtYWxsXCIsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgYmFzZVNpemUgPSBTUElOTkVSX1NJWkVTW3NpemVdO1xuICBjb25zdCBwYXRoU2l6ZSA9IGJhc2VTaXplIC8gMjtcbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSBTVFJPS0VfV0lEVEhTW3NpemVdO1xuICBjb25zdCBwYXRoUmFkaXVzID0gYCR7YmFzZVNpemUgLyAyIC0gc3Ryb2tlV2lkdGh9cHhgO1xuICBjb25zdCBjbGFzc05hbWUgPSBQQVRIX0NMQVNTX05BTUVTW3NpemVdO1xuICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBgU3Bpbm5lckNvbnRhaW5lciBTcGlubmVyQ29udGFpbmVyLSR7c2l6ZX0gJHtcbiAgICBwcm9wcy5jbGFzc05hbWVcbiAgfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lfT5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHdpZHRoPXtiYXNlU2l6ZX1cbiAgICAgICAgaGVpZ2h0PXtiYXNlU2l6ZX1cbiAgICAgICAgdmlld0JveD17YDAgMCAke2Jhc2VTaXplfSAke2Jhc2VTaXplfWB9XG4gICAgICA+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJTcGlubmVyUGF0aFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgY3g9e3BhdGhTaXplfVxuICAgICAgICAgIGN5PXtwYXRoU2l6ZX1cbiAgICAgICAgICByPXtwYXRoUmFkaXVzfVxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5TcGlubmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDEuM3MgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5TcGlubmVyQ29udGFpbmVyLWxhcmdlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLlNtYWxsU3Bpbm5lclBhdGgge1xuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwO1xuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgICBhbmltYXRpb246IFNtYWxsRGFzaCAxLjNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgU21hbGxEYXNoIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuTWVkaXVtU3Bpbm5lclBhdGgge1xuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTUwO1xuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICAgICAgICBhbmltYXRpb246IE1lZGl1bURhc2ggMS4zcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIE1lZGl1bURhc2gge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTUwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNTA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTUwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5MYXJnZVNwaW5uZXJQYXRoIHtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIwMDtcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBMYXJnZURhc2ggMS4zcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIExhcmdlRGFzaCB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyMDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/Spinner.js */"));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Info */ "./components/Info.js");
/* harmony import */ var _components_ProductCorousel_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProductCorousel.js */ "./components/ProductCorousel.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);














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
      categories: [],
      items: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "responsive", {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      },
      1400: {
        items: 5
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stagePadding", {
      paddingLeft: 0,
      // in pixels
      paddingRight: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://quotet-api.appspot.com/api/categories/").then(function (res) {
        var categories = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(res.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var category = _step.value;

            if (category.count > 0) {
              categories.push(category);
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
          categories: categories
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var categories = this.state.categories;
      var items = this.state.items;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Info__WEBPACK_IMPORTED_MODULE_10__["default"], null), categories && categories.length > 0 ? categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_ProductCorousel_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
          responsive: _this3.responsive,
          stagePadding: _this3.stagePadding,
          category: category
        });
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Loading..."));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bryanmutai/freelance/quotet.co.ke/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "carbon-components-react":
/*!******************************************!*\
  !*** external "carbon-components-react" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "react-alice-carousel":
/*!***************************************!*\
  !*** external "react-alice-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alice-carousel");

/***/ }),

/***/ "react-on-screen":
/*!**********************************!*\
  !*** external "react-on-screen" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-on-screen");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ "react-scroll-percentage":
/*!******************************************!*\
  !*** external "react-scroll-percentage" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-percentage");

/***/ }),

/***/ "react-simple-img":
/*!***********************************!*\
  !*** external "react-simple-img" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-img");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map