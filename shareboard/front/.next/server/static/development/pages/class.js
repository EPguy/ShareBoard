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

/***/ "./pages/class.js":
/*!************************!*\
  !*** ./pages/class.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js-export-html */ "draft-js-export-html");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\contest\\shareboard\\front\\pages\\class.js";






function Class() {
  const [editorState, setEditorState] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(draft_js__WEBPACK_IMPORTED_MODULE_2__["EditorState"].createEmpty());
  console.log(Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_4__["stateToHTML"])(editorState.getCurrentContent()));
  const styleMap = {
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

  const handleKeyCommand = command => {
    const newState = draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4102622983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4102622983",
    __self: this
  }, ".button-Wrapper.jsx-4102622983{width:100vw;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:cetner;-webkit-box-align:cetner;-ms-flex-align:cetner;align-items:cetner;}.text-Wrapper.jsx-4102622983{margin-left:300px;padding-top:20px;width:70vw;border-top:1px solid #ddd;margin-top:20px;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb250ZXN0XFxzaGFyZWJvYXJkXFxmcm9udFxccGFnZXNcXGNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDaUIsQUFHcUMsQUFRTSxZQVBGLE1BUUMsVUFQSixPQVFGLFdBQ2UsMEJBQ1YsZ0JBQ0QsY0FWUSxDQVczQixrR0FWdUIsNkZBRXZCIiwiZmlsZSI6IkQ6XFxjb250ZXN0XFxzaGFyZWJvYXJkXFxmcm9udFxccGFnZXNcXGNsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtFZGl0b3IsIEVkaXRvclN0YXRlLCBSaWNoVXRpbHN9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7c3RhdGVUb0hUTUx9IGZyb20gJ2RyYWZ0LWpzLWV4cG9ydC1odG1sJztcclxuZnVuY3Rpb24gQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKFxyXG4gICAgICAgIEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KClcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZVRvSFRNTChlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSk7XHJcbiAgICBjb25zdCBzdHlsZU1hcCA9IHtcclxuICAgICAgICAnU1RSSUtFVEhST1VHSCc6IHtcclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdIZWFkZXItb25lJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzQwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0hlYWRlci10d28nOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzVweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnSGVhZGVyLXRocmVlJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ0hlYWRlci1mb3VyJzoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUtleUNvbW1hbmQgPSBjb21tYW5kID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFJpY2hVdGlscy5oYW5kbGVLZXlDb21tYW5kKFxyXG4gICAgICAgICAgICBlZGl0b3JTdGF0ZSxcclxuICAgICAgICAgICAgY29tbWFuZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIHNldEVkaXRvclN0YXRlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaGFuZGxlZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJub3QtaGFuZGxlZFwiO1xyXG4gICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLVdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZXRuZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1XcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHNpemU9XCJkZWZhdWx0XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdG9yU3RhdGUoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKGVkaXRvclN0YXRlLCBcIkhlYWRlci1vbmVcIikpfT5IMTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiSGVhZGVyLXR3b1wiKSl9PkgyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCd9fSBzaXplPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgXCJIZWFkZXItdGhyZWVcIikpfT5IMzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiSGVhZGVyLWZvdXJcIikpfT5INDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnfX0gc2l6ZT1cImRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0b3JTdGF0ZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUoZWRpdG9yU3RhdGUsIFwiVU5ERVJMSU5FXCIpKX0+VUw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImxpbmtcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxMHB4J319IHNpemU9XCJkZWZhdWx0XCIgb25DbGljaz17KCkgPT4gc2V0RWRpdG9yU3RhdGUoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKGVkaXRvclN0YXRlLCBcIkJPTERcIikpfT5Cb2xkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTBweCd9fSBzaXplPVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IHNldEVkaXRvclN0YXRlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZShlZGl0b3JTdGF0ZSwgXCJJVEFMSUNcIikpfT5JdGFsaWM8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU3R5bGVNYXA9e3N0eWxlTWFwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUtleUNvbW1hbmQ9e2hhbmRsZUtleUNvbW1hbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRFZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsYXNzO1xyXG4iXX0= */\n/*@ sourceURL=D:\\contest\\shareboard\\front\\pages\\class.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4102622983" + " " + "button-Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "Header-one")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "H1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "Header-two")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "H2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "Header-three")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "H3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "Header-four")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "H4"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "UNDERLINE")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "UL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "BOLD")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Bold"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "link",
    style: {
      marginLeft: '10px'
    },
    size: "default",
    onClick: () => setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(editorState, "ITALIC")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Italic")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4102622983" + " " + "text-Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
    customStyleMap: styleMap,
    handleKeyCommand: handleKeyCommand,
    editorState: editorState,
    onChange: setEditorState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Class);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/class.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\contest\shareboard\front\pages\class.js */"./pages/class.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "draft-js-export-html":
/*!***************************************!*\
  !*** external "draft-js-export-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=class.js.map