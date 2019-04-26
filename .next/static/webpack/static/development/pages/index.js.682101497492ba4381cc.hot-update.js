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
        className: "jsx-2737317869" + " " + "head-contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2737317869" + " " + "events"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/events",
        className: "jsx-2737317869" + " " + "header-link"
      }, "Events")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2737317869" + " " + "contact"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "jsx-2737317869" + " " + "header-link"
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        className: "jsx-2737317869"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2737317869" + " " + "contact-channels"
      }, email ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "mailto:".concat(email),
        className: "jsx-2737317869"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        src: "/static/outline-email-24px.svg",
        svgStyle: {
          fill: "#c02014",
          width: "30%",
          marginLeft: "15%"
        }
      }), email) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2737317869"
      }, "Loading..."), contacts && contacts.length > 0 ? contacts.map(function (contact) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: contact.link,
          className: "jsx-2737317869"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
          src: "/static/instagram.svg",
          svgStyle: {
            fill: "#c02014",
            width: "30%",
            marginLeft: "15%"
          }
        }), contact.contact_type);
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-2737317869"
      }, "Loading..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2737317869"
      }, ".head-contact.jsx-2737317869{margin-top:2.5%;float:right;width:50%;display:grid;grid-template-columns:1fr 1fr;}.head-content.jsx-2737317869 button.jsx-2737317869{border:solid #c02014;background-color:white;font-size:larger;}#events-link.jsx-2737317869{border:solid #c02014;margin-left:25%;margin-right:25%;width:50%;padding:0;}.header-link.jsx-2737317869{border:solid #c02014;margin-left:25%;margin-right:25%;margin-bottom:2%;width:50%;padding-left:10%;padding-right:10%;padding-top:1.5%;padding-bottom:1.5%;}a.jsx-2737317869:link{color:black;}a.jsx-2737317869:visited{color:black;-webkit-text-decoration:none;text-decoration:none;}a.jsx-2737317869:focus{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-2737317869:hover{border-bottom:1px solid;background:#c02014;color:white;}a.jsx-2737317869:active{background:white;color:#cdfeaa;}.contact-channels.jsx-2737317869{margin-top:5%;width:90%;}.contact-channels.jsx-2737317869 a.jsx-2737317869{border:solid #c02014;margin-top:2%;padding-top:2%;display:grid;grid-template-columns:1fr 4fr;line-height:20px;color:black;}@media only screen and (max-width:600px){}@media only screen and (min-width:1450px){}@media only screen and (max-width:1110px){}@media only screen and (max-width:940px){}@media only screen and (max-width:775px){}@media only screen and (max-width:615px){}@media only screen and (max-width:440px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnlhbm11dGFpL2ZyZWVsYW5jZS9xdW90ZXQuY28ua2UvY29tcG9uZW50cy9EZXNrdG9wQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RW9CLEFBRzZCLEFBT0ssQUFLQSxBQU9BLEFBV1QsQUFJQSxBQUtZLEFBTUEsQUFNUCxBQUlILEFBSU8sWUE1QnZCLEFBSXVCLEVBcUJYLEVBdkRFLENBbURFLElBNUNTLEFBS1AsQUFPQSxBQXdDRixHQXBCSyxBQU1BLEFBV3JCLElBdkRZLEdBbURaLElBUWlCLEVBL0NFLEFBT0EsQ0FsQkosS0FzQ0QsQUFNQSxDQXRDSyxNQXFESixDQTFEaUIsR0FXcEIsQUFPTyxDQW9CbkIsQUFNQSxNQXRDQSxDQTBCQSxDQTJCZ0MsQ0EvQ3BCLE9BT0EsR0FOWixPQVpBLEFBbUJtQixZQXdDQSxLQXZDQyxZQXdDTixNQXZDSyxNQXdDbkIsV0F2Q3NCLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvYnJ5YW5tdXRhaS9mcmVlbGFuY2UvcXVvdGV0LmNvLmtlL2NvbXBvbmVudHMvRGVza3RvcENvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RTVkcgZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jbGFzcyBEZXNrdG9wQ29udGFjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vICAgc3RhdGUgPSB7XG4gIC8vICAgICBnYWxsZXJ5SXRlbXM6IHRoaXMuaXRlbXMubWFwKGkgPT4gPGgyIGtleT17aX0+e2l9PC9oMj4pXG4gIC8vICAgfTtcbiAgc3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIGVtYWlsOiBcIlwiXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWN0cyA9IHRoaXMucHJvcHMuY29udGFjdHM7XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnByb3BzLmVtYWlsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZC1jb250YWN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiBocmVmPVwiL2V2ZW50c1wiPlxuICAgICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIj5Db250YWN0PC9hPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jaGFubmVsc1wiPlxuICAgICAgICAgICAge2VtYWlsID8gKFxuICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOiR7ZW1haWx9YH0+XG4gICAgICAgICAgICAgICAgPFJlYWN0U1ZHXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL291dGxpbmUtZW1haWwtMjRweC5zdmdcIlxuICAgICAgICAgICAgICAgICAgc3ZnU3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjYzAyMDE0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE1JVwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2VtYWlsfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NvbnRhY3RzICYmIGNvbnRhY3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIGNvbnRhY3RzLm1hcChjb250YWN0ID0+IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtjb250YWN0Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW5zdGFncmFtLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIHN2Z1N0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsbDogXCIjYzAyMDE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNSVcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtjb250YWN0LmNvbnRhY3RfdHlwZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJtYWlsdG86c2Fsb21lbXV0aG9uaTI2QGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL291dGxpbmUtZW1haWwtMjRweC5zdmdcIlxuICAgICAgICAgICAgICAgIHN2Z1N0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmaWxsOiBcIiNjMDIwMTRcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwJVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxNSVcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHNhbG9tZW11dGhvbmkyNkBnbWFpbC5jb21cbiAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhlYWQtY29udGFjdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjUlO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkLWNvbnRlbnQgYnV0dG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNldmVudHMtbGluayB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICNjMDIwMTQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlci1saW5rIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNSU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MwMjAxNDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjMDIwMTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogI2NkZmVhYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3QtY2hhbm5lbHMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdC1jaGFubmVscyBhIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgI2MwMjAxNDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ1MHB4KSB7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTEwcHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NXB4KSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjE1cHgpIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRGVza3RvcENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/bryanmutai/freelance/quotet.co.ke/components/DesktopContact.js */"));
    }
  }]);

  return DesktopContact;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DesktopContact);

/***/ })

})
//# sourceMappingURL=index.js.682101497492ba4381cc.hot-update.js.map