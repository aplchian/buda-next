webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PreviewImage.tsx":
/*!*************************************!*\
  !*** ./components/PreviewImage.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! openseadragon */ \"./node_modules/openseadragon/build/openseadragon/openseadragon.js\");\n/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Icon */ \"./node_modules/@material-ui/core/esm/Icon/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_manifest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions/manifest */ \"./redux/actions/manifest.ts\");\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/index.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/aplchian/Documents/code/buda-next/components/PreviewImage.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // @ts-ignore\n\n\n\n\n\n\n\n\n\n\n\nvar getImageProps = function getImageProps(props) {\n  return {\n    zoom: props.pZoom,\n    center: {\n      x: props.pX,\n      y: props.pY\n    },\n    rotation: props.pRotation\n  };\n};\n\nvar PreviewImage = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PreviewImage, _React$Component);\n\n  var _super = _createSuper(PreviewImage);\n\n  function PreviewImage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, PreviewImage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      center: null,\n      zoom: null\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PreviewImage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var imageView = getImageProps(this.props);\n\n      if (this.props.iiif && true) {\n        var viewer = openseadragon__WEBPACK_IMPORTED_MODULE_8___default()({\n          id: \"openseadragon\".concat(this.props.i),\n          degrees: this.state.degrees,\n          defaultZoomLevel: this.props.zoom,\n          showRotationControl: true,\n          tileSources: [this.props.iiif]\n        });\n\n        if (imageView) {\n          viewer.addHandler('open', function () {\n            if (imageView.center.x) {\n              viewer.viewport.panTo(imageView.center, true);\n              viewer.viewport.zoomTo(imageView.zoom);\n              viewer.viewport.setRotation(imageView.rotation);\n            }\n          });\n        }\n\n        this.setState({\n          viewer: viewer\n        });\n      }\n    } // @ts-ignore\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var imageView = getImageProps(this.props);\n      var prevImage = getImageProps(prevProps);\n      var hasViewDiff = imageView.center.x !== prevImage.center.x || imageView.center.y !== prevImage.center.y || imageView.zoom !== prevImage.zoom || imageView.rotation !== prevImage.rotation;\n\n      if (imageView.center.x && hasViewDiff) {\n        this.state.viewer.viewport.panTo(imageView.center, true);\n        this.state.viewer.viewport.zoomTo(imageView.zoom);\n        this.state.viewer.viewport.setRotation(imageView.rotation);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this,\n          _s = $RefreshSig$();\n\n      var ImageMenu = function ImageMenu() {\n        _s();\n\n        var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n            _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n            anchorEl = _React$useState2[0],\n            setAnchorEl = _React$useState2[1];\n\n        var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__[\"useTranslation\"])(),\n            t = _useTranslation.t;\n\n        var handleClick = function handleClick(event) {\n          setAnchorEl(event.currentTarget);\n        };\n\n        var handleClose = function handleClose() {\n          setAnchorEl(null);\n        };\n\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          style: {\n            color: 'white',\n            position: 'absolute',\n            top: '0',\n            right: '0',\n            zIndex: 40\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            style: {\n              backgroundColor: 'black'\n            },\n            className: \"flex content-center justify-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n              \"aria-controls\": \"simple-menu\",\n              \"aria-haspopup\": \"true\",\n              onClick: handleClick,\n              style: {\n                color: 'white',\n                cursor: 'pointer'\n              },\n              children: \"more_vert\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 25\n            }, _this2)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 21\n          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            id: \"simple-menu\",\n            anchorEl: anchorEl,\n            keepMounted: true,\n            open: Boolean(anchorEl),\n            onClose: handleClose,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n              onClick: function onClick() {\n                var zoom = _this2.state.viewer.viewport.getZoom(true);\n\n                var center = _this2.state.viewer.viewport.getCenter(true);\n\n                var rotation = _this2.state.viewer.viewport.getRotation(true);\n\n                _this2.props.dispatch(Object(_redux_actions_manifest__WEBPACK_IMPORTED_MODULE_15__[\"setImageView\"])({\n                  zoom: zoom,\n                  center: center,\n                  rotation: rotation\n                }));\n              },\n              children: t('Set Preview')\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 25\n            }, _this2)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 21\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 17\n        }, _this2);\n      };\n\n      _s(ImageMenu, \"NOVqlIwyI7yTJlgQ8M7otJhkbTY=\", false, function () {\n        return [react_i18next__WEBPACK_IMPORTED_MODULE_13__[\"useTranslation\"]];\n      });\n\n      var ImageMenuOverlay = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__[\"withStyles\"])(function () {\n        return {\n          root: {\n            color: 'white'\n          }\n        };\n      })(ImageMenu);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        className: \"border-r border-gray-300 mr-2 w-1/2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          style: {\n            width: '100%',\n            height: '100%',\n            position: 'relative'\n          },\n          className: \"items-center flex justify-center mr-2\",\n          id: \"openseadragon\".concat(this.props.i),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n            style: {\n              height: '100%',\n              width: '100%',\n              backgroundColor: 'transparent',\n              position: 'absolute'\n            },\n            className: \"text-white\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(ImageMenuOverlay, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 194,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 176,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return PreviewImage;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var _pathOr = Object(ramda__WEBPACK_IMPORTED_MODULE_16__[\"pathOr\"])({\n    zoom: 0,\n    center: {\n      x: null,\n      y: null\n    },\n    rotation: 90\n  }, ['appData', 'bvmt', 'preview-image-view'], state.manifest),\n      zoom = _pathOr.zoom,\n      center = _pathOr.center,\n      rotation = _pathOr.rotation;\n\n  return {\n    pZoom: zoom,\n    pX: center.x,\n    pY: center.y,\n    pRotation: rotation\n  };\n}; // @ts-ignore\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__[\"connect\"])(mapStateToProps)(PreviewImage));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmV2aWV3SW1hZ2UudHN4PzlkNmEiXSwibmFtZXMiOlsiZ2V0SW1hZ2VQcm9wcyIsInByb3BzIiwiem9vbSIsInBab29tIiwiY2VudGVyIiwieCIsInBYIiwieSIsInBZIiwicm90YXRpb24iLCJwUm90YXRpb24iLCJQcmV2aWV3SW1hZ2UiLCJzdGF0ZSIsImltYWdlVmlldyIsImlpaWYiLCJ2aWV3ZXIiLCJPcGVuU2VhRHJhZ29uIiwiaWQiLCJpIiwiZGVncmVlcyIsImRlZmF1bHRab29tTGV2ZWwiLCJzaG93Um90YXRpb25Db250cm9sIiwidGlsZVNvdXJjZXMiLCJhZGRIYW5kbGVyIiwidmlld3BvcnQiLCJwYW5UbyIsInpvb21UbyIsInNldFJvdGF0aW9uIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcmV2SW1hZ2UiLCJoYXNWaWV3RGlmZiIsIkltYWdlTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsIkJvb2xlYW4iLCJnZXRab29tIiwiZ2V0Q2VudGVyIiwiZ2V0Um90YXRpb24iLCJkaXNwYXRjaCIsInNldEltYWdlVmlldyIsIkltYWdlTWVudU92ZXJsYXkiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwicGF0aE9yIiwibWFuaWZlc3QiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW9CQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBZ0I7QUFDbEMsU0FBTztBQUNIQyxRQUFJLEVBQUVELEtBQUssQ0FBQ0UsS0FEVDtBQUVIQyxVQUFNLEVBQUU7QUFDSkMsT0FBQyxFQUFFSixLQUFLLENBQUNLLEVBREw7QUFFSkMsT0FBQyxFQUFFTixLQUFLLENBQUNPO0FBRkwsS0FGTDtBQU1IQyxZQUFRLEVBQUVSLEtBQUssQ0FBQ1M7QUFOYixHQUFQO0FBUUgsQ0FURDs7SUFXTUMsWTs7Ozs7QUFDRix3QkFBWVYsS0FBWixFQUFxQztBQUFBOztBQUFBOztBQUNqQyw4QkFBTUEsS0FBTjtBQUNBLFVBQUtXLEtBQUwsR0FBYTtBQUNUUixZQUFNLEVBQUUsSUFEQztBQUVURixVQUFJLEVBQUU7QUFGRyxLQUFiO0FBRmlDO0FBTXBDOzs7O3dDQUNtQjtBQUNoQixVQUFNVyxTQUFTLEdBQUdiLGFBQWEsQ0FBQyxLQUFLQyxLQUFOLENBQS9COztBQUNBLFVBQUksS0FBS0EsS0FBTCxDQUFXYSxJQUFYLFFBQUosRUFBc0Q7QUFDbEQsWUFBTUMsTUFBTSxHQUFHQyxvREFBYSxDQUFDO0FBQ3pCQyxZQUFFLHlCQUFrQixLQUFLaEIsS0FBTCxDQUFXaUIsQ0FBN0IsQ0FEdUI7QUFFekJDLGlCQUFPLEVBQUUsS0FBS1AsS0FBTCxDQUFXTyxPQUZLO0FBR3pCQywwQkFBZ0IsRUFBRSxLQUFLbkIsS0FBTCxDQUFXQyxJQUhKO0FBSXpCbUIsNkJBQW1CLEVBQUUsSUFKSTtBQUt6QkMscUJBQVcsRUFBRSxDQUFDLEtBQUtyQixLQUFMLENBQVdhLElBQVo7QUFMWSxTQUFELENBQTVCOztBQVFBLFlBQUlELFNBQUosRUFBZTtBQUNYRSxnQkFBTSxDQUFDUSxVQUFQLENBQWtCLE1BQWxCLEVBQTBCLFlBQU07QUFDNUIsZ0JBQUlWLFNBQVMsQ0FBQ1QsTUFBVixDQUFpQkMsQ0FBckIsRUFBd0I7QUFDcEJVLG9CQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCWixTQUFTLENBQUNULE1BQWhDLEVBQXdDLElBQXhDO0FBQ0FXLG9CQUFNLENBQUNTLFFBQVAsQ0FBZ0JFLE1BQWhCLENBQXVCYixTQUFTLENBQUNYLElBQWpDO0FBQ0FhLG9CQUFNLENBQUNTLFFBQVAsQ0FBZ0JHLFdBQWhCLENBQTRCZCxTQUFTLENBQUNKLFFBQXRDO0FBQ0g7QUFDSixXQU5EO0FBT0g7O0FBRUQsYUFBS21CLFFBQUwsQ0FBYztBQUFFYixnQkFBTSxFQUFOQTtBQUFGLFNBQWQ7QUFDSDtBQUNKLEssQ0FFRDs7Ozt1Q0FDbUJjLFMsRUFNaEI7QUFDQyxVQUFNaEIsU0FBUyxHQUFHYixhQUFhLENBQUMsS0FBS0MsS0FBTixDQUEvQjtBQUNBLFVBQU02QixTQUFTLEdBQUc5QixhQUFhLENBQUM2QixTQUFELENBQS9CO0FBQ0EsVUFBTUUsV0FBVyxHQUNibEIsU0FBUyxDQUFDVCxNQUFWLENBQWlCQyxDQUFqQixLQUF1QnlCLFNBQVMsQ0FBQzFCLE1BQVYsQ0FBaUJDLENBQXhDLElBQ0FRLFNBQVMsQ0FBQ1QsTUFBVixDQUFpQkcsQ0FBakIsS0FBdUJ1QixTQUFTLENBQUMxQixNQUFWLENBQWlCRyxDQUR4QyxJQUVBTSxTQUFTLENBQUNYLElBQVYsS0FBbUI0QixTQUFTLENBQUM1QixJQUY3QixJQUdBVyxTQUFTLENBQUNKLFFBQVYsS0FBdUJxQixTQUFTLENBQUNyQixRQUpyQzs7QUFNQSxVQUFJSSxTQUFTLENBQUNULE1BQVYsQ0FBaUJDLENBQWpCLElBQXNCMEIsV0FBMUIsRUFBdUM7QUFDbkMsYUFBS25CLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlMsUUFBbEIsQ0FBMkJDLEtBQTNCLENBQWlDWixTQUFTLENBQUNULE1BQTNDLEVBQW1ELElBQW5EO0FBQ0EsYUFBS1EsS0FBTCxDQUFXRyxNQUFYLENBQWtCUyxRQUFsQixDQUEyQkUsTUFBM0IsQ0FBa0NiLFNBQVMsQ0FBQ1gsSUFBNUM7QUFDQSxhQUFLVSxLQUFMLENBQVdHLE1BQVgsQ0FBa0JTLFFBQWxCLENBQTJCRyxXQUEzQixDQUF1Q2QsU0FBUyxDQUFDSixRQUFqRDtBQUNIO0FBQ0o7Ozs2QkFFUTtBQUFBO0FBQUE7O0FBQ0wsVUFBTXVCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSw4QkFDWUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FEWjtBQUFBO0FBQUEsWUFDYkMsUUFEYTtBQUFBLFlBQ0hDLFdBREc7O0FBQUEsOEJBRU5DLHFFQUFjLEVBRlI7QUFBQSxZQUVaQyxDQUZZLG1CQUVaQSxDQUZZOztBQUlwQixZQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQW1DO0FBQ25ESixxQkFBVyxDQUFDSSxLQUFLLENBQUNDLGFBQVAsQ0FBWDtBQUNILFNBRkQ7O0FBSUEsWUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0Qk4scUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxTQUZEOztBQUdBLDRCQUNJO0FBQ0ksZUFBSyxFQUFFO0FBQ0hPLGlCQUFLLEVBQUUsT0FESjtBQUVIQyxvQkFBUSxFQUFFLFVBRlA7QUFHSEMsZUFBRyxFQUFFLEdBSEY7QUFJSEMsaUJBQUssRUFBRSxHQUpKO0FBS0hDLGtCQUFNLEVBQUU7QUFMTCxXQURYO0FBQUEsa0NBU0k7QUFDSSxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLEVBQUU7QUFBbkIsYUFEWDtBQUVJLHFCQUFTLEVBQUMsb0NBRmQ7QUFBQSxtQ0FJSSxxRUFBQywrREFBRDtBQUNJLCtCQUFjLGFBRGxCO0FBRUksK0JBQWMsTUFGbEI7QUFHSSxxQkFBTyxFQUFFVCxXQUhiO0FBSUksbUJBQUssRUFBRTtBQUFFSSxxQkFBSyxFQUFFLE9BQVQ7QUFBa0JNLHNCQUFNLEVBQUU7QUFBMUIsZUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEosZUFzQkkscUVBQUMsOERBQUQ7QUFDSSxjQUFFLEVBQUMsYUFEUDtBQUVJLG9CQUFRLEVBQUVkLFFBRmQ7QUFHSSx1QkFBVyxNQUhmO0FBSUksZ0JBQUksRUFBRWUsT0FBTyxDQUFDZixRQUFELENBSmpCO0FBS0ksbUJBQU8sRUFBRU8sV0FMYjtBQUFBLG1DQU9JLHFFQUFDLG1FQUFEO0FBQ0kscUJBQU8sRUFBRSxtQkFBTTtBQUNYLG9CQUFNeEMsSUFBSSxHQUFHLE1BQUksQ0FBQ1UsS0FBTCxDQUFXRyxNQUFYLENBQWtCUyxRQUFsQixDQUEyQjJCLE9BQTNCLENBQ1QsSUFEUyxDQUFiOztBQUdBLG9CQUFNL0MsTUFBTSxHQUFHLE1BQUksQ0FBQ1EsS0FBTCxDQUFXRyxNQUFYLENBQWtCUyxRQUFsQixDQUEyQjRCLFNBQTNCLENBQ1gsSUFEVyxDQUFmOztBQUdBLG9CQUFNM0MsUUFBUSxHQUFHLE1BQUksQ0FBQ0csS0FBTCxDQUFXRyxNQUFYLENBQWtCUyxRQUFsQixDQUEyQjZCLFdBQTNCLENBQ2IsSUFEYSxDQUFqQjs7QUFJQSxzQkFBSSxDQUFDcEQsS0FBTCxDQUFXcUQsUUFBWCxDQUNJQyw2RUFBWSxDQUFDO0FBQ1RyRCxzQkFBSSxFQUFKQSxJQURTO0FBRVRFLHdCQUFNLEVBQU5BLE1BRlM7QUFHVEssMEJBQVEsRUFBUkE7QUFIUyxpQkFBRCxDQURoQjtBQU9ILGVBbkJMO0FBQUEsd0JBcUJLNkIsQ0FBQyxDQUFDLGFBQUQ7QUFyQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQXdESCxPQW5FRDs7QUFESyxTQUNDTixTQUREO0FBQUEsZ0JBR2FLLDZEQUhiO0FBQUE7O0FBc0VMLFVBQU1tQixnQkFBZ0IsR0FBR0MscUVBQVUsQ0FBQztBQUFBLGVBQU87QUFDdkNDLGNBQUksRUFBRTtBQUNGZixpQkFBSyxFQUFFO0FBREw7QUFEaUMsU0FBUDtBQUFBLE9BQUQsQ0FBVixDQUlyQlgsU0FKcUIsQ0FBekI7QUFNQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUMscUNBQWY7QUFBQSwrQkFDSTtBQUNJLGVBQUssRUFBRTtBQUNIMkIsaUJBQUssRUFBRSxNQURKO0FBRUhDLGtCQUFNLEVBQUUsTUFGTDtBQUdIaEIsb0JBQVEsRUFBRTtBQUhQLFdBRFg7QUFNSSxtQkFBUyxFQUFDLHVDQU5kO0FBT0ksWUFBRSx5QkFBa0IsS0FBSzNDLEtBQUwsQ0FBV2lCLENBQTdCLENBUE47QUFBQSxpQ0FTSTtBQUNJLGlCQUFLLEVBQUU7QUFDSDBDLG9CQUFNLEVBQUUsTUFETDtBQUVIRCxtQkFBSyxFQUFFLE1BRko7QUFHSFgsNkJBQWUsRUFBRSxhQUhkO0FBSUhKLHNCQUFRLEVBQUU7QUFKUCxhQURYO0FBT0kscUJBQVMsRUFBQyxZQVBkO0FBQUEsbUNBU0kscUVBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBeUJIOzs7O0VBN0pzQlgsNENBQUssQ0FBQzRCLFM7O0FBZ0tqQyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNsRCxLQUFULEVBQXFCO0FBQUEsZ0JBQ05tRCxxREFBTSxDQUNyQztBQUNJN0QsUUFBSSxFQUFFLENBRFY7QUFFSUUsVUFBTSxFQUFFO0FBQ0pDLE9BQUMsRUFBRSxJQURDO0FBRUpFLE9BQUMsRUFBRTtBQUZDLEtBRlo7QUFNSUUsWUFBUSxFQUFFO0FBTmQsR0FEcUMsRUFTckMsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixvQkFBcEIsQ0FUcUMsRUFVckNHLEtBQUssQ0FBQ29ELFFBVitCLENBREE7QUFBQSxNQUNqQzlELElBRGlDLFdBQ2pDQSxJQURpQztBQUFBLE1BQzNCRSxNQUQyQixXQUMzQkEsTUFEMkI7QUFBQSxNQUNuQkssUUFEbUIsV0FDbkJBLFFBRG1COztBQWF6QyxTQUFPO0FBQ0hOLFNBQUssRUFBRUQsSUFESjtBQUVISSxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0MsQ0FGUjtBQUdIRyxNQUFFLEVBQUVKLE1BQU0sQ0FBQ0csQ0FIUjtBQUlIRyxhQUFTLEVBQUVEO0FBSlIsR0FBUDtBQU1ILENBbkJELEMsQ0FxQkE7OztBQUNld0QsMkhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCbkQsWUFBekIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJldmlld0ltYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBPcGVuU2VhRHJhZ29uIGZyb20gJ29wZW5zZWFkcmFnb24nXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51J1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbidcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNldEltYWdlVmlldyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvbWFuaWZlc3QnXG5pbXBvcnQgeyBwYXRoT3IgfSBmcm9tICdyYW1kYSdcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgZGVncmVlcz86IG51bWJlclxuICAgIGNlbnRlcjogbnVsbCB8IG51bWJlclxuICAgIHpvb206IG51bGwgfCBudW1iZXJcbiAgICB2aWV3ZXI/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaWlpZj86IHN0cmluZ1xuICAgIGk6IG51bWJlclxuICAgIGRlZ3JlZXM/OiBudW1iZXJcbiAgICB6b29tPzogbnVtYmVyXG4gICAgcFpvb206IG51bWJlclxuICAgIHBYOiBudW1iZXJcbiAgICBwWTogbnVtYmVyXG4gICAgZGlzcGF0Y2g6IGFueVxufVxuXG5jb25zdCBnZXRJbWFnZVByb3BzID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB6b29tOiBwcm9wcy5wWm9vbSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB4OiBwcm9wcy5wWCxcbiAgICAgICAgICAgIHk6IHByb3BzLnBZLFxuICAgICAgICB9LFxuICAgICAgICByb3RhdGlvbjogcHJvcHMucFJvdGF0aW9uLFxuICAgIH1cbn1cblxuY2xhc3MgUHJldmlld0ltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFJlYWRvbmx5PElQcm9wcz4pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IG51bGwsXG4gICAgICAgICAgICB6b29tOiBudWxsLFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBpbWFnZVZpZXcgPSBnZXRJbWFnZVByb3BzKHRoaXMucHJvcHMpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlpaWYgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlciA9IE9wZW5TZWFEcmFnb24oe1xuICAgICAgICAgICAgICAgIGlkOiBgb3BlbnNlYWRyYWdvbiR7dGhpcy5wcm9wcy5pfWAsXG4gICAgICAgICAgICAgICAgZGVncmVlczogdGhpcy5zdGF0ZS5kZWdyZWVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRab29tTGV2ZWw6IHRoaXMucHJvcHMuem9vbSxcbiAgICAgICAgICAgICAgICBzaG93Um90YXRpb25Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpbGVTb3VyY2VzOiBbdGhpcy5wcm9wcy5paWlmXSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChpbWFnZVZpZXcpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuYWRkSGFuZGxlcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlVmlldy5jZW50ZXIueCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyLnZpZXdwb3J0LnBhblRvKGltYWdlVmlldy5jZW50ZXIsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3ZXIudmlld3BvcnQuem9vbVRvKGltYWdlVmlldy56b29tKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyLnZpZXdwb3J0LnNldFJvdGF0aW9uKGltYWdlVmlldy5yb3RhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWV3ZXIgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiB7XG4gICAgICAgIGltYWdlVmlldzoge1xuICAgICAgICAgICAgY2VudGVyOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgICAgICAgICAgIHpvb206IG51bWJlclxuICAgICAgICAgICAgcm90YXRpb246IG51bWJlclxuICAgICAgICB9XG4gICAgfSkge1xuICAgICAgICBjb25zdCBpbWFnZVZpZXcgPSBnZXRJbWFnZVByb3BzKHRoaXMucHJvcHMpXG4gICAgICAgIGNvbnN0IHByZXZJbWFnZSA9IGdldEltYWdlUHJvcHMocHJldlByb3BzKVxuICAgICAgICBjb25zdCBoYXNWaWV3RGlmZiA9XG4gICAgICAgICAgICBpbWFnZVZpZXcuY2VudGVyLnggIT09IHByZXZJbWFnZS5jZW50ZXIueCB8fFxuICAgICAgICAgICAgaW1hZ2VWaWV3LmNlbnRlci55ICE9PSBwcmV2SW1hZ2UuY2VudGVyLnkgfHxcbiAgICAgICAgICAgIGltYWdlVmlldy56b29tICE9PSBwcmV2SW1hZ2Uuem9vbSB8fFxuICAgICAgICAgICAgaW1hZ2VWaWV3LnJvdGF0aW9uICE9PSBwcmV2SW1hZ2Uucm90YXRpb25cblxuICAgICAgICBpZiAoaW1hZ2VWaWV3LmNlbnRlci54ICYmIGhhc1ZpZXdEaWZmKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnZpZXdlci52aWV3cG9ydC5wYW5UbyhpbWFnZVZpZXcuY2VudGVyLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aWV3ZXIudmlld3BvcnQuem9vbVRvKGltYWdlVmlldy56b29tKVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS52aWV3ZXIudmlld3BvcnQuc2V0Um90YXRpb24oaW1hZ2VWaWV3LnJvdGF0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBJbWFnZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG4gICAgICAgICAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IHsgY3VycmVudFRhcmdldDogYW55IH0pID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBbmNob3JFbChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiA0MCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBjb250ZW50LWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZV92ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tID0gdGhpcy5zdGF0ZS52aWV3ZXIudmlld3BvcnQuZ2V0Wm9vbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLnN0YXRlLnZpZXdlci52aWV3cG9ydC5nZXRDZW50ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnN0YXRlLnZpZXdlci52aWV3cG9ydC5nZXRSb3RhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbWFnZVZpZXcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ1NldCBQcmV2aWV3Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBJbWFnZU1lbnVPdmVybGF5ID0gd2l0aFN0eWxlcygoKSA9PiAoe1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpKEltYWdlTWVudSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItciBib3JkZXItZ3JheS0zMDAgbXItMiB3LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2BvcGVuc2VhZHJhZ29uJHt0aGlzLnByb3BzLml9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZU1lbnVPdmVybGF5IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uKHN0YXRlOiBhbnkpIHtcbiAgICBjb25zdCB7IHpvb20sIGNlbnRlciwgcm90YXRpb24gfSA9IHBhdGhPcihcbiAgICAgICAge1xuICAgICAgICAgICAgem9vbTogMCxcbiAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgIHg6IG51bGwsXG4gICAgICAgICAgICAgICAgeTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByb3RhdGlvbjogOTAsXG4gICAgICAgIH0sXG4gICAgICAgIFsnYXBwRGF0YScsICdidm10JywgJ3ByZXZpZXctaW1hZ2UtdmlldyddLFxuICAgICAgICBzdGF0ZS5tYW5pZmVzdFxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgICBwWm9vbTogem9vbSxcbiAgICAgICAgcFg6IGNlbnRlci54LFxuICAgICAgICBwWTogY2VudGVyLnksXG4gICAgICAgIHBSb3RhdGlvbjogcm90YXRpb24sXG4gICAgfVxufVxuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJldmlld0ltYWdlKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PreviewImage.tsx\n");

/***/ }),

/***/ "./node_modules/openseadragon/build/openseadragon/openseadragon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/openseadragon/build/openseadragon/openseadragon.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ })

})