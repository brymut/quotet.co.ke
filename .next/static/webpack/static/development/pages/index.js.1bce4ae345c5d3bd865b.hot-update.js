webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/es/react-svg.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
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

/***/ })

})
//# sourceMappingURL=index.js.1bce4ae345c5d3bd865b.hot-update.js.map