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
        className: "jsx-4156394702" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4156394702" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/events",
        className: "jsx-4156394702" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4156394702" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-4156394702" + " " + "header-link"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-4156394702"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4156394702" + " " + "contact-channels"
      }, email ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:".concat(email),
        className: "jsx-4156394702"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        src: "/static/outline-email-24px.svg",
        svgStyle: {
          fill: "#c02014",
          width: "30%",
          marginLeft: "15%"
        }
      }), email) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4156394702"
      }, "Loading..."), contacts && contacts.length > 0 ? contacts.map(function (contact) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-4156394702"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
          src: "/static/instagram.svg",
          svgStyle: {
            fill: "#c02014",
            width: "30%",
            marginLeft: "15%"
          }
        }), contact.contact_type);
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-4156394702"
      }, "Loading..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4156394702"
      }, ".head-contact.jsx-4156394702{margin-top:2.5%;float:right;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-4156394702 button.jsx-4156394702{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-4156394702{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-4156394702{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}a.jsx-4156394702:link{color:black;}a.jsx-4156394702:visited{color:black;-webkit-text-decoration:none;text-decoration:none;}a.jsx-4156394702:focus{border-bottom:1px solid;background:#c02014;}a.jsx-4156394702:hover{border-bottom:1px solid;background:#c02014;}a.jsx-4156394702:active{background:#265301;color:#cdfeaa;}.contact-channels.jsx-4156394702{margin-top:5%;width:90%;}.contact-channels.jsx-4156394702 a.jsx-4156394702{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;color:black;}@media only screen and (max-width:600px){}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RW9CLEFBRzZCLEFBT0ssQUFLQSxBQU9BLEFBV1QsQUFJQSxBQUtZLEFBS0EsQUFLTCxBQUlMLEFBSU8sWUExQnZCLEFBSXVCLEVBbUJYLEVBckRFLEdBaURFLEVBMUNTLEFBS1AsQUFPQSxBQXNDRixHQWxCSyxBQUtBLEFBVXJCLElBckRZLEtBaURaLEVBUWlCLEVBN0NFLEFBT0EsQ0FsQkosS0FzQ2YsQUFLQSxDQXJDbUIsTUFtREosQ0F4RGlCLEdBV3BCLEFBT08sT0FabkIsQ0EwQkEsQ0F5QmdDLENBN0NwQixPQU9BLEdBTlosT0FaQSxBQW1CbUIsWUFzQ0EsS0FyQ0MsWUFzQ04sTUFyQ0ssTUFzQ25CLFdBckNzQixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2JyeWFubXV0YWkvZnJlZWxhbmNlL3F1b3RldC5jby5rZS9jb21wb25lbnRzL0Rlc2t0b3BDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0U1ZHIGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgRGVza3RvcENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyAgIHN0YXRlID0ge1xuICAvLyAgICAgZ2FsbGVyeUl0ZW1zOiB0aGlzLml0ZW1zLm1hcChpID0+IDxoMiBrZXk9e2l9PntpfTwvaDI+KVxuICAvLyAgIH07XG4gIHN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbiAgICBlbWFpbDogXCJcIlxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFjdHMgPSB0aGlzLnByb3BzLmNvbnRhY3RzO1xuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5wcm9wcy5lbWFpbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtY29udGFjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCI+Q29udGFjdDwvYT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY2hhbm5lbHNcIj5cbiAgICAgICAgICAgIHtlbWFpbCA/IChcbiAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PlxuICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9vdXRsaW5lLWVtYWlsLTI0cHguc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHN2Z1N0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2MwMjAxNFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNSVcIlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtlbWFpbH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtjb250YWN0cyAmJiBjb250YWN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBjb250YWN0cy5tYXAoY29udGFjdCA9PiAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17Y29udGFjdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2luc3RhZ3JhbS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBzdmdTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2MwMjAxNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTUlXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7Y29udGFjdC5jb250YWN0X3R5cGV9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiA8YSBocmVmPVwibWFpbHRvOnNhbG9tZW11dGhvbmkyNkBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgPFJlYWN0U1ZHXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9vdXRsaW5lLWVtYWlsLTI0cHguc3ZnXCJcbiAgICAgICAgICAgICAgICBzdmdTdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZmlsbDogXCIjYzAyMDE0XCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMCVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTUlXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICBzYWxvbWVtdXRob25pMjZAZ21haWwuY29tXG4gICAgICAgICAgICA8L2E+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5oZWFkLWNvbnRhY3Qge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41JTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZC1jb250ZW50IGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZXZlbnRzLWxpbmsge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAjYzAyMDE0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXItbGluayB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMDIwMTQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzAyMDE0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNjUzMDE7XG4gICAgICAgICAgICBjb2xvcjogI2NkZmVhYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY2hhbm5lbHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdC1jaGFubmVscyBhIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ1MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTEwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/DesktopContact.js */"));
    }
  }]);

  return DesktopContact;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DesktopContact);

/***/ })

})
//# sourceMappingURL=index.js.d629f2e1d240f3758747.hot-update.js.map