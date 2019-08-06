webpackHotUpdate("static\\development\\pages\\class.js",{

/***/ "./pages/class.js":
/*!************************!*\
  !*** ./pages/class.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js-export-html */ "./node_modules/draft-js-export-html/esm/main.js");

var _jsxFileName = "D:\\contest\\shareboard\\front\\pages\\class.js";






function Class() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(draft_js__WEBPACK_IMPORTED_MODULE_3__["EditorState"].createEmpty()),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      editorState = _React$useState2[0],
      setEditorState = _React$useState2[1];

  var onSubmit = function onSubmit() {
    console.log(Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_5__["stateToHTML"])(editorState.getCurrentContent()));
  };

  var styleMap = {
    'STRIKETHROUGH': {
      textDecoration: 'line-through'
    },
    'Header-one': {
      fontSize: '40px'
    },
    'Header-two': {
      fontSize: '35px'
    },
    'Header-three': {
      fontSize: '30px'
    },
    'Header-four': {
      fontSize: '25px'
    }
  };

  var handleKeyCommand = function handleKeyCommand(command) {
    var newState = draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4102622983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4102622983",
    __self: this
  }, ".button-Wrapper.jsx-4102622983{width:100vw;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:cetner;-webkit-box-align:cetner;-ms-flex-align:cetner;align-items:cetner;}.text-Wrapper.jsx-4102622983{margin-left:300px;padding-top:20px;width:70vw;border-top:1px solid #ddd;margin-top:20px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb250ZXN0XFxzaGFyZWJvYXJkXFxmcm9udFxccGFnZXNcXGNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHcUMsQUFRTSxZQVBGLE1BUUMsVUFQSixPQVFGLFdBQ2UsMEJBQ1YsZ0JBQ0QsY0FWUSxDQVczQixrR0FWdUIsNkZBRXZCIiwiZmlsZSI6IkQ6XFxjb250ZXN0XFxzaGFyZWJvYXJkXFxmcm9udFxccGFnZXNcXGNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtFZGl0b3IsIEVkaXRvclN0YXRlLCBSaWNoVXRpbHN9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7c3RhdGVUb0hUTUx9IGZyb20gJ2RyYWZ0LWpzLWV4cG9ydC1odG1sJztcclxuZnVuY3Rpb24gQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgICAgIEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KClcclxuICAgICk7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZVRvSFRNTChlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZU1hcCA9IHtcclxuICAgICAgICAnU1RSSUtFVEhST1VHSCc6IHtcclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdIZWFkZXItb25lJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzQwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0hlYWRlci10d28nOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzVweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnSGVhZGVyLXRocmVlJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0hlYWRlci1mb3VyJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleUNvbW1hbmQgPSBjb21tYW5kID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFJpY2hVdGlscy5oYW5kbGVLZXlDb21tYW5kKFxyXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZSxcclxuICAgICAgICAgICAgY29tbWFuZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIHNldEVkaXRvclN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaGFuZGxlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJub3QtaGFuZGxlZFwiO1xyXG4gICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLVdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZXRuZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1XcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCcsIG1hcmdpbkxlZnQ6ICc0NTBweCd9fSBzaXplPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgXCJIZWFkZXItb25lXCIpKX0+PGkgY2xhc3M9XCJmYWQgZmEtaDFcIj48L2k+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJywgbWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiSGVhZGVyLXR3b1wiKSl9PkgyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJywgbWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiSGVhZGVyLXRocmVlXCIpKX0+SDM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnLCBtYXJnaW5MZWZ0OiAnMTBweCd9fSBzaXplPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgXCJIZWFkZXItZm91clwiKSl9Pkg0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJywgbWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiVU5ERVJMSU5FXCIpKX0+VUw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnLCBtYXJnaW5MZWZ0OiAnMTBweCd9fSBzaXplPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgXCJCT0xEXCIpKX0+Qm9sZDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCcsIG1hcmdpbkxlZnQ6ICcxMHB4J319IHNpemU9XCJkZWZhdWx0XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdG9yU3RhdGUoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKGVkaXRvclN0YXRlLCBcIklUQUxJQ1wiKSl9Pkl0YWxpYzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzQwMHB4J319IG9uQ2xpY2s9e29uU3VibWl0fT7soITshqE8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGVNYXA9e3N0eWxlTWFwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUtleUNvbW1hbmQ9e2hhbmRsZUtleUNvbW1hbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRFZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsYXNzO1xyXG4iXX0= */\n/*@ sourceURL=D:\\contest\\shareboard\\front\\pages\\class.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4102622983" + " " + "button-Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '450px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "Header-one"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    "class": "fad fa-h1",
    className: "jsx-4102622983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "Header-two"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "H2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "Header-three"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "H3"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "Header-four"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "H4"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "UNDERLINE"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "UL"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "BOLD"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Bold"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "link",
    style: {
      fontWeight: 'bold',
      marginLeft: '10px'
    },
    size: "default",
    onClick: function onClick() {
      return setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_3__["RichUtils"].toggleInlineStyle(editorState, "ITALIC"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Italic"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    style: {
      marginLeft: '400px'
    },
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uC804\uC1A1")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4102622983" + " " + "text-Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_3__["Editor"], {
    customStyleMap: styleMap,
    handleKeyCommand: handleKeyCommand,
    editorState: editorState,
    onChange: setEditorState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Class);

/***/ })

})
//# sourceMappingURL=class.js.75671e5ad5ead621e3fd.hot-update.js.map