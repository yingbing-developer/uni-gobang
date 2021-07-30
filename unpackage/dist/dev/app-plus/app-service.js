(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!****************************************!*\
  !*** D:/my-project/uni-gobang/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 27));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread(_objectSpread({},\n_App.default), {}, {\n  store: _store.default }));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwic3RvcmUiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLDRFOztBQUVBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFKO0FBQ0xHLFlBREs7QUFFWEcsT0FBSyxFQUFMQSxjQUZXLElBQVo7O0FBSUFELEdBQUcsQ0FBQ0UsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwLFxyXG5cdHN0b3JlXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** D:/my-project/uni-gobang/pages.json ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!******************************************************************!*\
  !*** D:/my-project/uni-gobang/pages/index/index.vue?mpType=page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZTg0YTNjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!************************************************************************************************************!*\
  !*** D:/my-project/uni-gobang/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    gapBar: __webpack_require__(/*! @/components/gap-bar/gap-bar.nvue */ 5).default,
    piece: __webpack_require__(/*! @/components/piece/piece.vue */ 11).default,
    popup: __webpack_require__(/*! @/components/popup/popup.vue */ 16).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("gap-bar", { attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "border"), attrs: { _i: 2 } },
        [
          _c("view", {
            staticClass: _vm._$s(3, "sc", "border-box border-top"),
            attrs: { _i: 3 }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "border-box border-bottom"),
            attrs: { _i: 4 }
          })
        ]
      ),
      _vm._$s(5, "i", _vm.ended)
        ? _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "title"), attrs: { _i: 5 } },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "title-text"),
                attrs: { _i: 6 }
              })
            ]
          )
        : _vm._e(),
      _vm._$s(7, "i", _vm.ended)
        ? _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "start"), attrs: { _i: 7 } },
            [
              _c("view", [
                _c("view", {
                  staticClass: _vm._$s(9, "sc", "btn"),
                  attrs: { _i: 9 },
                  on: { click: _vm.startGame }
                })
              ]),
              _c("view", [
                _c("view", {
                  staticClass: _vm._$s(11, "sc", "btn"),
                  attrs: { _i: 11 },
                  on: {
                    click: function($event) {
                      return _vm.$refs.setting.show()
                    }
                  }
                })
              ])
            ]
          )
        : _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "game-world"), attrs: { _i: 12 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(13, "sc", "top"), attrs: { _i: 13 } },
                [
                  _c("piece", { attrs: { type: _vm.nowPieceColor, _i: 14 } }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(15, "sc", "top-text"),
                      attrs: { _i: 15 }
                    },
                    [
                      _vm._v(
                        _vm._$s(15, "t0-0", _vm._s(_vm.winNums)) +
                          _vm._$s(15, "t0-1", _vm._s(_vm.failNums))
                      )
                    ]
                  ),
                  _c("piece", {
                    attrs: {
                      type: _vm.nowPieceColor == "white" ? "black" : "white",
                      _i: 16
                    }
                  })
                ],
                1
              ),
              _c(
                "view",
                { staticClass: _vm._$s(17, "sc", "top"), attrs: { _i: 17 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(18, "sc", "round"),
                      attrs: { _i: 18 }
                    },
                    [
                      _vm._$s(19, "i", _vm.nowRound == _vm.playerPieceRound)
                        ? _c("text", {
                            staticClass: _vm._$s(19, "sc", "round-text"),
                            attrs: { _i: 19 }
                          })
                        : _vm._e()
                    ]
                  ),
                  _c("text", {
                    staticClass: _vm._$s(20, "sc", "top-text"),
                    attrs: { _i: 20 }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(21, "sc", "round"),
                      attrs: { _i: 21 }
                    },
                    [
                      _vm._$s(22, "i", _vm.nowRound != _vm.playerPieceRound)
                        ? _c("text", {
                            staticClass: _vm._$s(22, "sc", "round-text"),
                            attrs: { _i: 22 }
                          })
                        : _vm._e()
                    ]
                  )
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(23, "sc", "board"), attrs: { _i: 23 } },
                [
                  _vm._l(
                    _vm._$s(24, "f", { forItems: _vm.worldData }),
                    function(item, index, $20, $30) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(24, "f", { forIndex: $20, key: index }),
                          staticClass: _vm._$s(
                            "24-" + $30,
                            "sc",
                            "lattice block"
                          ),
                          attrs: { _i: "24-" + $30 }
                        },
                        [
                          _c("view", {
                            staticClass: _vm._$s("25-" + $30, "sc", "circle"),
                            attrs: { _i: "25-" + $30 }
                          })
                        ]
                      )
                    }
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(26, "sc", "blocks"),
                      attrs: { _i: 26 }
                    },
                    _vm._l(
                      _vm._$s(27, "f", { forItems: _vm.worldData }),
                      function(item, index, $21, $31) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(27, "f", {
                              forIndex: $21,
                              key: index
                            }),
                            staticClass: _vm._$s("27-" + $31, "sc", "block"),
                            attrs: { _i: "27-" + $31 }
                          },
                          [
                            _vm._$s("28-" + $31, "i", _vm.cursorIndex == index)
                              ? _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      "28-" + $31,
                                      "sc",
                                      "cursor"
                                    ),
                                    attrs: { _i: "28-" + $31 }
                                  },
                                  [
                                    _c("view", {
                                      staticClass: _vm._$s(
                                        "29-" + $31,
                                        "sc",
                                        "cursor-line cursor-top"
                                      ),
                                      attrs: { _i: "29-" + $31 }
                                    }),
                                    _c("view", {
                                      staticClass: _vm._$s(
                                        "30-" + $31,
                                        "sc",
                                        "cursor-line cursor-bottom"
                                      ),
                                      attrs: { _i: "30-" + $31 }
                                    })
                                  ]
                                )
                              : _vm._e(),
                            _vm._$s("31-" + $31, "i", item > 0)
                              ? _c("piece", {
                                  attrs: {
                                    type: item == 1 ? "white" : "black",
                                    _i: "31-" + $31
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      }
                    ),
                    0
                  )
                ],
                2
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(32, "sc", "control"),
                  attrs: { _i: 32 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(33, "sc", "btns"),
                      attrs: { _i: 33 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(34, "sc", "btn"),
                        attrs: { _i: 34 },
                        on: { click: _vm.resetGame }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(35, "sc", "btn"),
                        attrs: { _i: 35 },
                        on: { click: _vm.endGame }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(36, "sc", "btn"),
                        attrs: { _i: 36 },
                        on: { click: _vm.regretChess }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(37, "sc", "btn"),
                        attrs: { _i: 37 },
                        on: {
                          click: function($event) {
                            return _vm.$refs.setting.show()
                          }
                        }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(38, "sc", "directions"),
                      attrs: { _i: 38 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          39,
                          "sc",
                          "direction direction-top"
                        ),
                        attrs: { _i: 39 },
                        on: {
                          click: function($event) {
                            return _vm.moveCursor(-15)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(
                          40,
                          "sc",
                          "direction direction-left"
                        ),
                        attrs: { _i: 40 },
                        on: {
                          click: function($event) {
                            return _vm.moveCursor(-1)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(
                          41,
                          "sc",
                          "direction direction-right"
                        ),
                        attrs: { _i: 41 },
                        on: {
                          click: function($event) {
                            return _vm.moveCursor(1)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(
                          42,
                          "sc",
                          "direction direction-bottom"
                        ),
                        attrs: { _i: 42 },
                        on: {
                          click: function($event) {
                            return _vm.moveCursor(15)
                          }
                        }
                      }),
                      _c("view", {
                        staticClass: _vm._$s(43, "sc", "confirm-btn"),
                        attrs: { _i: 43 },
                        on: {
                          click: function($event) {
                            return _vm.dropChess(_vm.playerPieceRound)
                          }
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          ),
      _c("popup", { ref: "setting", attrs: { _i: 44 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(45, "sc", "setting"), attrs: { _i: 45 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(46, "sc", "setting-piece"),
                attrs: { _i: 46 }
              },
              [
                _c("piece", { attrs: { type: "white", size: "60", _i: 47 } }),
                _c("piece", { attrs: { type: "black", size: "60", _i: 48 } })
              ],
              1
            ),
            _c("view", {
              staticClass: _vm._$s(49, "sc", "btn"),
              attrs: { _i: 49 },
              on: {
                click: function($event) {
                  return _vm.setPiece("white")
                }
              }
            }),
            _c("view", {
              staticClass: _vm._$s(50, "sc", "btn"),
              attrs: { _i: 50 },
              on: {
                click: function($event) {
                  return _vm.setPiece("black")
                }
              }
            })
          ]
        )
      ]),
      _vm._$s(51, "i", _vm.tipText)
        ? _c(
            "view",
            { staticClass: _vm._$s(51, "sc", "tip"), attrs: { _i: 51 } },
            [
              _c(
                "text",
                {
                  staticClass: _vm._$s(52, "sc", "tip-text"),
                  attrs: { _i: 52 }
                },
                [_vm._v(_vm._$s(52, "t0-0", _vm._s(_vm.tipText)))]
              ),
              _c("view", [
                _c("view", {
                  staticClass: _vm._$s(54, "sc", "btn"),
                  attrs: { _i: 54 },
                  on: { click: _vm.nextGame }
                })
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!****************************************************************!*\
  !*** D:/my-project/uni-gobang/components/gap-bar/gap-bar.nvue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gap-bar.nvue?vue&type=template&id=4009b9a0& */ 6);\n/* harmony import */ var _gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gap-bar.nvue?vue&type=script&lang=js& */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/gap-bar/gap-bar.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDs7O0FBR3ZEO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZ2FwLWJhci5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwMDliOWEwJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ2FwLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9nYXAtYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2dhcC1iYXIvZ2FwLWJhci5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/gap-bar/gap-bar.nvue?vue&type=template&id=4009b9a0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gap-bar.nvue?vue&type=template&id=4009b9a0& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_template_id_4009b9a0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/gap-bar/gap-bar.nvue?vue&type=template&id=4009b9a0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "bar"),
    style: _vm._$s(0, "s", {
      height: _vm.barHeight,
      "background-color": _vm.color
    }),
    attrs: { _i: 0 }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*****************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/gap-bar/gap-bar.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./gap-bar.nvue?vue&type=script&lang=js& */ 9);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_gap_bar_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixrbEJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9nYXAtYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ2FwLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/gap-bar/gap-bar.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\nvar _default =\n{\n  props: {\n    color: {\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      barHeight: '' };\n\n  },\n  created: function created() {var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {//根据状态栏高度, 进行导航栏顶部适配\n        _this.barHeight = \"\".concat(res.statusBarHeight + 4, \"px\");\n      } });\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9nYXAtYmFyL2dhcC1iYXIubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFEQSxFQURBOzs7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxtQkFEQTs7QUFHQSxHQVhBO0FBWUEsU0FaQSxxQkFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7O0FBS0EsR0FsQkEsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYmFyXCIgOnN0eWxlPVwieydoZWlnaHQnOiBiYXJIZWlnaHQsICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRjb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0YmFySGVpZ2h0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCAoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7Ly/moLnmja7nirbmgIHmoI/pq5jluqYsIOi/m+ihjOWvvOiIquagj+mhtumDqOmAgumFjVxyXG5cdFx0XHRcdFx0dGhpcy5iYXJIZWlnaHQgPSBgJHtyZXMuc3RhdHVzQmFySGVpZ2h0ICsgNH1weGA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!***********************************************************!*\
  !*** D:/my-project/uni-gobang/components/piece/piece.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.vue?vue&type=template&id=cf8767bc&scoped=true& */ 12);\n/* harmony import */ var _piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"cf8767bc\",\n  null,\n  false,\n  _piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/piece/piece.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BpZWNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjg3NjdiYyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BpZWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGllY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjZjg3NjdiY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3BpZWNlL3BpZWNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/piece/piece.vue?vue&type=template&id=cf8767bc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./piece.vue?vue&type=template&id=cf8767bc&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_template_id_cf8767bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/piece/piece.vue?vue&type=template&id=cf8767bc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "piece"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "piece-item"),
        class: _vm._$s(1, "c", {
          "white-piece": _vm.type == "white",
          "black-piece": _vm.type == "black"
        }),
        style: _vm._$s(1, "s", {
          width: _vm.size + "rpx",
          height: _vm.size + "rpx",
          "border-radius": _vm.size + "rpx"
        }),
        attrs: { _i: 1 }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/piece/piece.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./piece.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_piece_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwra0JBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGllY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpZWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/piece/piece.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    type: {\n      type: String,\n      default: 'white' },\n\n    size: {\n      type: String | Number,\n      default: 30 } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9waWVjZS9waWVjZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxzQkFGQSxFQURBOztBQUtBO0FBQ0EsMkJBREE7QUFFQSxpQkFGQSxFQUxBLEVBREEsRSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBpZWNlXCI+XHJcblx0XHQ8dmlld1xyXG5cdFx0Y2xhc3M9XCJwaWVjZS1pdGVtXCJcclxuXHRcdDpjbGFzcz1cInsnd2hpdGUtcGllY2UnOiB0eXBlID09ICd3aGl0ZScsICdibGFjay1waWVjZSc6IHR5cGUgPT0gJ2JsYWNrJ31cIlxyXG5cdFx0OnN0eWxlPVwie1xyXG5cdFx0XHR3aWR0aDogc2l6ZSArICdycHgnLFxyXG5cdFx0XHRoZWlnaHQ6IHNpemUgKyAncnB4JyxcclxuXHRcdFx0J2JvcmRlci1yYWRpdXMnOiBzaXplICsgJ3JweCdcclxuXHRcdH1cIlxyXG5cdFx0Pjwvdmlldz5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ3doaXRlJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaXplOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nIHwgTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDMwXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cclxuXHQucGllY2UtaXRlbSB7XHJcblx0XHRib3gtc2hhZG93OiAycnB4IDJycHggNXJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMikgaW5zZXQsIC0ycnB4IC0ycnB4IDVycHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpIGluc2V0LCAwIDAgMTBycHggcmdiYSgwLDAsMCwwLjMpO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHQucGllY2UtaXRlbTo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDMzJTtcclxuXHRcdGhlaWdodDogMTMlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTMlO1xyXG5cdFx0dG9wOiAyNCU7XHJcblx0XHRsZWZ0OiAxMyU7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVooLTQwZGVnKTtcclxuXHR9XHJcblx0LmJsYWNrLXBpZWNlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjZW50ZXIsICMxYTFkMWMsICMyMzI3MjYpO1xyXG5cdH1cclxuXHQuYmxhY2stcGllY2U6OmJlZm9yZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMC4zKSk7XHJcblx0fVxyXG5cdC53aGl0ZS1waWVjZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2VudGVyLCAjZTVlNWU1LCAjZjJmMGYwKTtcclxuXHR9XHJcblx0LndoaXRlLXBpZWNlOjpiZWZvcmUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwwLjgpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMykpO1xyXG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************************!*\
  !*** D:/my-project/uni-gobang/components/popup/popup.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.vue?vue&type=template&id=304119c4&scoped=true& */ 17);\n/* harmony import */ var _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"304119c4\",\n  null,\n  false,\n  _popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/popup/popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQ3dLO0FBQ3hLLGdCQUFnQixrTEFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDQxMTljNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzMDQxMTljNFwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3BvcHVwL3BvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!******************************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/popup/popup.vue?vue&type=template&id=304119c4&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=template&id=304119c4&scoped=true& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_template_id_304119c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 18 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/popup/popup.vue?vue&type=template&id=304119c4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._$s(0, "i", _vm.visiable)
    ? _c(
        "view",
        {
          staticClass: _vm._$s(0, "sc", "popup"),
          attrs: { _i: 0 },
          on: {
            touchmove: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
            }
          }
        },
        [
          _c("view", {
            staticClass: _vm._$s(1, "sc", "mask"),
            attrs: { _i: 1 },
            on: { click: _vm.hide }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "window"), attrs: { _i: 2 } },
            [
              _c("view", {
                staticClass: _vm._$s(3, "sc", "close"),
                attrs: { _i: 3 },
                on: { click: _vm.hide }
              }),
              _vm._t("default", null, { _i: 4 })
            ],
            2
          )
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 19 */
/*!************************************************************************************!*\
  !*** D:/my-project/uni-gobang/components/popup/popup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./popup.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFqQixDQUFnQiwra0JBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/components/popup/popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      visiable: false };\n\n  },\n  methods: {\n    show: function show() {\n      this.visiable = true;\n    },\n    hide: function hide() {\n      this.visiable = false;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9wb3B1cC9wb3B1cC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFXQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBOztBQUdBLEdBTEE7QUFNQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxRQUpBLGtCQUlBO0FBQ0E7QUFDQSxLQU5BLEVBTkEsRSIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBvcHVwXCIgdi1pZj1cInZpc2lhYmxlXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFza1wiIEB0YXA9XCJoaWRlXCI+PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ3aW5kb3dcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjbG9zZVwiIEB0YXA9XCJoaWRlXCI+PC92aWV3PlxyXG5cdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2aXNpYWJsZTogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2hvdyAoKSB7XHJcblx0XHRcdFx0dGhpcy52aXNpYWJsZSA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGUgKCkge1xyXG5cdFx0XHRcdHRoaXMudmlzaWFibGUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxyXG5cdEBrZXlmcmFtZXMgc2NhbGUgIHtcclxuXHQgIDAlIHtcclxuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcblx0ICB9XHJcblx0ICAxMDAlIHtcclxuXHQgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcblx0ICB9XHJcblx0fVxyXG5cdC5wb3B1cCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHR9XHJcblx0Lm1hc2sge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG5cdH1cclxuXHQud2luZG93IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHR3aWR0aDogNTAwcnB4O1xyXG5cdFx0bWF4LWhlaWdodDogNTAwcnB4O1xyXG5cdFx0bWluLWhlaWdodDogMzAwcnB4O1xyXG5cdFx0YW5pbWF0aW9uOiBzY2FsZSAuMnM7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdH1cclxuXHQuY2xvc2Uge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0cmlnaHQ6IC0yNXJweDtcclxuXHRcdHRvcDogLTI1cnB4O1xyXG5cdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwcnB4O1xyXG5cdFx0Ym9yZGVyOiAxMHJweCBzb2xpZCAjREQ1MjREO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMTBycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG5cdH1cclxuXHQuY2xvc2U6OmJlZm9yZSwgLmNsb3NlOjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0XHR3aWR0aDogOHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7XHJcblx0fVxyXG5cdC5jbG9zZTo6YWZ0ZXIge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlWig5MGRlZyk7XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!******************************************************************************************!*\
  !*** D:/my-project/uni-gobang/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdrQixDQUFnQiwwbEJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _gapBar = _interopRequireDefault(__webpack_require__(/*! @/components/gap-bar/gap-bar.nvue */ 5));\nvar _piece = _interopRequireDefault(__webpack_require__(/*! @/components/piece/piece.vue */ 11));\nvar _popup = _interopRequireDefault(__webpack_require__(/*! @/components/popup/popup.vue */ 16));\nvar _utils = __webpack_require__(/*! @/assets/js/utils.js */ 23);\nvar _vuex = __webpack_require__(/*! vuex */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\nvar boards = 15 * 15;\nvar Integers = {\n  'Five': 3000, //活五得分\n  'FFDL': 2900, //双活四得分\n  'FFSL': 2800, //活四冲四得分\n  'FTDL': 2700, //活四活三得分\n  'FL': 2600, //活四得分\n  'FFNL': 2500, //双冲四得分\n  'FTSL': 2400, //冲四活三得分\n  'TTDL': 2300, //双活三得分\n  'TTSL': 2200, //活三死三得分\n  'TDDL': 2100, //活三活二得分\n  'FN': 2000, //冲四得分\n  'TL': 2000, //活三得分\n  'TN': 1900, //死三得分\n  'DL': 1900 //活二得分\n};var _default =\n{\n  data: function data() {\n    return {\n      //棋盘数据\n      worldData: [],\n      //是否结束\n      ended: true,\n      //当前局玩家执棋子的颜色\n      nowPieceColor: '',\n      //光标索引\n      cursorIndex: 112,\n      //当前回合执行人 1 表示白棋, 2表示黑棋\n      nowRound: 2,\n      //玩家失败回数\n      failNums: 0,\n      //玩家赢的回数\n      winNums: 0,\n      //玩家最后落棋的位置\n      lastPlayerDropIndex: 0,\n      //对手最后落棋的位置\n      lastEnemyDropIndex: 0,\n      //提示\n      tipText: '' };\n\n  },\n  created: function created() {\n    this.init();\n  },\n  computed: _objectSpread(_objectSpread({},\n  (0, _vuex.mapGetters)(['getPieceColor'])), {}, {\n    playerPieceRound: function playerPieceRound() {\n      return this.nowPieceColor == 'white' ? 1 : 2;\n    } }),\n\n  methods: _objectSpread(_objectSpread({},\n  (0, _vuex.mapMutations)(['setPieceColor'])), {}, {\n    //初始化\n    init: function init() {\n      var worldData = [];\n      for (var i = 0; i < boards; i++) {\n        worldData.push(0);\n      }\n      this.worldData = (0, _utils.deepClone)(worldData);\n      this.nowPieceColor = this.getPieceColor;\n      this.nowRound = 2;\n      this.cursorIndex = 112;\n      this.lastPlayerDropIndex = 0;\n      this.lastEnemyDropIndex = 0;\n      this.tipText = '';\n    },\n    //开始游戏\n    startGame: function startGame() {\n      this.ended = false;\n      this.init();\n      //当玩家执白棋时，电脑先下棋\n      if (this.playerPieceRound == 1) {\n        this.computedWeight();\n      }\n    },\n    //结束游戏\n    endGame: function endGame() {\n      this.ended = true;\n      this.failNums = 0;\n      this.winNums = 0;\n      this.init();\n    },\n    //重玩游戏\n    resetGame: function resetGame() {\n      this.failNums = 0;\n      this.winNums = 0;\n      this.startGame();\n    },\n    //再来一局\n    nextGame: function nextGame() {\n      this.startGame();\n    },\n    //悔棋\n    regretChess: function regretChess() {\n      if (this.nowRound != this.playerPieceRound) {\n        return;\n      }\n      if (!this.lastPlayerDropIndex || !this.lastEnemyDropIndex) {\n        uni.showToast({\n          icon: 'none',\n          title: '不能再悔棋了' });\n\n        return;\n      }\n      this.$set(this.worldData, this.lastPlayerDropIndex, 0);\n      this.$set(this.worldData, this.lastEnemyDropIndex, 0);\n      this.cursorIndex = this.lastEnemyDropIndex;\n      this.lastPlayerDropIndex = 0;\n      this.lastEnemyDropIndex = 0;\n    },\n    //设置执棋颜色\n    setPiece: function setPiece(color) {\n      this.setPieceColor(color);\n      uni.showToast({\n        icon: 'none',\n        title: '设置棋子成功，将在下一局开始应用' });\n\n      this.$refs.setting.hide();\n    },\n    //移动光标\n    moveCursor: function moveCursor(value) {\n      if (this.nowRound != this.playerPieceRound) {\n        return;\n      }\n      var cursorIndex = 0;\n      if (value < 0) {\n        cursorIndex = this.cursorIndex + value >= 0 ? this.cursorIndex + value : this.cursorIndex + 14 * 15;\n      } else {\n        cursorIndex = this.cursorIndex + value < 225 ? this.cursorIndex + value : this.cursorIndex - 14 * 15;\n      }\n      this.cursorIndex = cursorIndex;\n    },\n    //落子\n    dropChess: function dropChess(round) {var _this = this;\n      if (this.nowRound != round) {\n        return;\n      }\n      if (this.worldData[this.cursorIndex] == 0) {\n        this.$set(this.worldData, this.cursorIndex, round);\n        //判断是否有五子连珠\n        var isWin = this.isWin(round);\n        if (isWin) {\n          this.tipText = round == this.playerPieceRound ? '你赢了' : '你输了';\n          if (round == this.playerPieceRound) {\n            this.winNums += 1;\n          } else {\n            this.failNums += 1;\n          }\n          return;\n        }\n        //判断棋盘有没有放满棋子\n        var isFull = this.worldData.every(function (item) {\n          return item > 0;\n        });\n        if (isFull) {\n          this.tipText = '平局';\n          return;\n        }\n\n        //更换当前下棋手\n        this.nowRound = round == 1 ? 2 : 1;\n        //记录玩家最后落子位置，用于悔棋\n        if (round == this.playerPieceRound) {\n          this.lastPlayerDropIndex = this.cursorIndex;\n          setTimeout(function () {\n            _this.computedWeight();\n          }, 300);\n        } else {\n          this.lastEnemyDropIndex = this.cursorIndex;\n        }\n      } else {\n        uni.showToast({\n          icon: 'none',\n          title: '不能在棋子上面落子' });\n\n      }\n    },\n    //判断当前是否有棋子五连珠\n    isWin: function isWin(round) {\n      var weights = this.getPosition(this.cursorIndex, round);\n      if (weights == 3000) {\n        return true;\n      }\n      return false;\n    },\n    //计算当前点的结构\n    getPosition: function getPosition(position, round) {\n      //计算当前点处于哪一行\n      var line = 0;\n      for (var i = 0; i < 15; i++) {\n        if (position >= i * 15 && position < (i + 1) * 15) {\n          line = i;\n        }\n      }\n      //当前点的连珠数量\n      var count = [0, 0, 0, 0];\n      //当前点连珠前方是否封闭 false 代表封闭, true 代表未封闭\n      var start = [false, false, false, false];\n      //当前点连珠后方是否封闭 false 代表封闭, true 代表未封闭\n      var end = [false, false, false, false];\n\n      //判断该点的横线，竖线，正斜线，反斜线上有多少连在一起的棋子，两边有无阻挡\n      for (var _i in count) {\n        //横线\n        if (_i == 0) {\n          for (var j = 1; j < 5; j++) {\n            var index = position - j;\n            if (index >= line * 15 && this.worldData[index] == round) {\n              count[_i]++;\n            } else {\n              if (index >= line * 15 && this.worldData[index] == 0) {\n                start[_i] = true;\n              } else {\n                start[_i] = false;\n              }\n              break;\n            }\n\n          }\n          for (var _j = 1; _j < 5; _j++) {\n            var _index = position + _j;\n            if (_index < (line + 1) * 15 && this.worldData[_index] == round) {\n              count[_i]++;\n            } else {\n              if (_index < (line + 1) * 15 && this.worldData[_index] == 0) {\n                end[_i] = true;\n              } else {\n                end[_i] = false;\n              }\n              break;\n            }\n          }\n        } else {\n          //竖线 正斜线 反斜线\n          for (var _j2 = 1; _j2 < 5; _j2++) {\n            var _index2 = _i == 1 ? position - _j2 * 15 : _i == 2 ? position - _j2 * 16 : position - _j2 * 14;\n            if (_index2 >= (line - _j2) * 15 && _index2 < (line - _j2 + 1) * 15 && _index2 >= 0 && this.worldData[_index2] == round) {\n              count[_i]++;\n            } else {\n              if (_index2 >= (line - _j2) * 15 && _index2 < (line - _j2 + 1) * 15 && _index2 >= 0 && this.worldData[_index2] == 0) {\n                start[_i] = true;\n              } else {\n                start[_i] = false;\n              }\n              break;\n            }\n          }\n          for (var _j3 = 1; _j3 < 5; _j3++) {\n            var _index3 = _i == 1 ? position + _j3 * 15 : _i == 2 ? position + _j3 * 16 : position + _j3 * 14;\n            if (_index3 >= (line + _j3) * 15 && _index3 < (line + _j3 + 1) * 15 && _index3 < boards && this.worldData[_index3] == round) {\n              count[_i]++;\n            } else {\n              if (_index3 >= (line + _j3) * 15 && _index3 < (line + _j3 + 1) * 15 && _index3 < boards && this.worldData[_index3] == 0) {\n                end[_i] = true;\n              } else {\n                end[_i] = false;\n              }\n              break;\n            }\n          }\n        }\n        count[_i]++;\n      }\n\n      //根据横线，竖线，正斜线，反斜线上的情况计算该点的分数\n      var types = [];\n      for (var _i2 in count) {\n        if (count[_i2] == 2) {\n          if (start[_i2] && end[_i2]) types.push('DL');\n        } else if (count[_i2] == 3) {\n          if (start[_i2] && end[_i2]) {\n            types.push('TL');\n          } else if (start[_i2] && !end[_i2] || !start[_i2] && end[_i2]) {\n            types.push('TN');\n          }\n        } else if (count[_i2] == 4) {\n          if (start[_i2] && end[_i2]) {\n            types.push('FL');\n          } else if (start[_i2] && !end[_i2] || !start[_i2] && end[_i2]) {\n            types.push('FN');\n          }\n        } else if (count[_i2] >= 5) {\n          types.push('Five');\n        }\n      }\n      if (types.indexOf('Five') > -1) {//活五得分\n        return Integers['Five'];\n      } else if ((0, _utils.countOf)(types, 'FL') > 1) {//双活四得分\n        return Integers['FFDL'];\n      } else if (types.indexOf('FL') > -1 && types.indexOf('FN') > -1) {//活四冲四得分\n        return Integers['FFSL'];\n      } else if (types.indexOf('FL') > -1 && types.indexOf('TL') > -1) {//活四活三得分\n        return Integers['FTDL'];\n      } else if (types.indexOf('FL') > -1) {//活四得分\n        return Integers['FL'];\n      } else if ((0, _utils.countOf)(types, 'FN') > 1) {//双冲四得分\n        return Integers['FFNL'];\n      } else if (types.indexOf('FN') > -1 && types.indexOf('TL') > -1) {//冲四活三得分\n        return Integers['FTSL'];\n      } else if ((0, _utils.countOf)(types, 'TL') > 1) {//双活三得分\n        return Integers['TTDL'];\n      } else if (types.indexOf('TL') > -1 && types.indexOf('TN') > -1) {//活三死三得分\n        return Integers['TTSL'];\n      } else if (types.indexOf('TL') > -1 && types.indexOf('DL') > -1) {//活三活二得分\n        return Integers['TDDL'];\n      } else if (types.indexOf('FN') > -1) {//冲四得分\n        return Integers['FN'];\n      } else if (types.indexOf('TL') > -1) {//活三得分\n        return Integers['TL'];\n      } else if (types.indexOf('TN') > -1) {//死三得分\n        return Integers['TN'];\n      } else if (types.indexOf('DL') > -1) {//活二得分\n        return Integers['DL'];\n      } else {//其余状况均为1分\n        return 1;\n      }\n    },\n    //计算权重\n    computedWeight: function computedWeight() {\n      var weights = [];\n      var round = this.playerPieceRound == 1 ? 2 : 1;\n      for (var i = 0; i < boards; i++) {\n        if (this.worldData[i] == 0) {\n          //计算电脑在这个位置上的权重\n          var weight1 = this.getPosition(i, round);\n          //计算玩家在这个位置上的权重\n          var weight2 = this.getPosition(i, this.playerPieceRound) - 1;\n          //谁的权重大存谁 玩家的权重要减1，比电脑的权重小点\n          weights.push(weight1 > weight2 ? weight1 : weight2);\n        } else {\n          //当此点已经有棋子时得分为零,表示不能下子\n          weights.push(0);\n        }\n      }\n      var index = -1;\n      for (var _i3 in Integers) {\n        if ((0, _utils.indexAllOf)(weights, Integers[_i3]).length > 0) {\n          index = (0, _utils.indexAllOf)(weights, Integers[_i3])[~~(Math.random() * (0, _utils.indexAllOf)(weights, Integers[_i3]).length)];\n          break;\n        }\n        if ((0, _utils.indexAllOf)(weights, Integers[_i3] - 1).length > 0) {\n          index = (0, _utils.indexAllOf)(weights, Integers[_i3] - 1)[~~(Math.random() * (0, _utils.indexAllOf)(weights, Integers[_i3] - 1).length)];\n          break;\n        }\n      }\n      if (index == -1) {\n        if (this.worldData[112] != 0) {\n          var arr = (0, _utils.indexAllOf)(this.worldData, 0);\n          index = arr[~~(Math.random() * arr.length)];\n        } else {\n          index = 112;\n        }\n      }\n      this.cursorIndex = index;\n      this.dropChess(round);\n    } }),\n\n  onBackPress: function onBackPress(event) {\n    if (event.from == 'backbutton') {\n      if (this.$refs.setting.visiable) {\n        this.$refs.setting.hide();\n        return true;\n      }\n    }\n    return false;\n  },\n  components: {\n    GapBar: _gapBar.default,\n    Piece: _piece.default,\n    Popup: _popup.default } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRDtBQUNBO0FBQ0E7QUFDQSxjQURBLEVBQ0E7QUFDQSxjQUZBLEVBRUE7QUFDQSxjQUhBLEVBR0E7QUFDQSxjQUpBLEVBSUE7QUFDQSxZQUxBLEVBS0E7QUFDQSxjQU5BLEVBTUE7QUFDQSxjQVBBLEVBT0E7QUFDQSxjQVJBLEVBUUE7QUFDQSxjQVRBLEVBU0E7QUFDQSxjQVZBLEVBVUE7QUFDQSxZQVhBLEVBV0E7QUFDQSxZQVpBLEVBWUE7QUFDQSxZQWJBLEVBYUE7QUFDQSxZQWRBLENBY0E7QUFkQSxFO0FBZ0JBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFGQTtBQUdBO0FBQ0EsaUJBSkE7QUFLQTtBQUNBLHVCQU5BO0FBT0E7QUFDQSxzQkFSQTtBQVNBO0FBQ0EsaUJBVkE7QUFXQTtBQUNBLGlCQVpBO0FBYUE7QUFDQSxnQkFkQTtBQWVBO0FBQ0EsNEJBaEJBO0FBaUJBO0FBQ0EsMkJBbEJBO0FBbUJBO0FBQ0EsaUJBcEJBOztBQXNCQSxHQXhCQTtBQXlCQSxTQXpCQSxxQkF5QkE7QUFDQTtBQUNBLEdBM0JBO0FBNEJBO0FBQ0EsMENBREE7QUFFQSxvQkFGQSw4QkFFQTtBQUNBO0FBQ0EsS0FKQSxHQTVCQTs7QUFrQ0E7QUFDQSw0Q0FEQTtBQUVBO0FBQ0EsUUFIQSxrQkFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0EsYUFqQkEsdUJBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkE7QUFDQSxXQTFCQSxxQkEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0JBO0FBZ0NBO0FBQ0EsYUFqQ0EsdUJBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQ0E7QUFzQ0E7QUFDQSxZQXZDQSxzQkF1Q0E7QUFDQTtBQUNBLEtBekNBO0FBMENBO0FBQ0EsZUEzQ0EseUJBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEseUJBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNEQTtBQTREQTtBQUNBLFlBN0RBLG9CQTZEQSxLQTdEQSxFQTZEQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0EsS0FwRUE7QUFxRUE7QUFDQSxjQXRFQSxzQkFzRUEsS0F0RUEsRUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpGQTtBQWtGQTtBQUNBLGFBbkZBLHFCQW1GQSxLQW5GQSxFQW1GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxHQUZBO0FBR0EsU0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBLE9BakNBLE1BaUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDRCQUZBOztBQUlBO0FBQ0EsS0E5SEE7QUErSEE7QUFDQSxTQWhJQSxpQkFnSUEsS0FoSUEsRUFnSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0SUE7QUF1SUE7QUFDQSxlQXhJQSx1QkF3SUEsUUF4SUEsRUF3SUEsS0F4SUEsRUF3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLGVBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsZUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBNUJBLE1BNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsZUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTFRQTtBQTJRQTtBQUNBLGtCQTVRQSw0QkE0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUEEsTUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBalRBLEdBbENBOztBQXFWQSxhQXJWQSx1QkFxVkEsS0FyVkEsRUFxVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBN1ZBO0FBOFZBO0FBQ0EsMkJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBLEVBOVZBLEUiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIj5cclxuXHRcdDwhLS0gI2lmbmRlZiBINSAtLT5cclxuXHRcdDxnYXAtYmFyPjwvZ2FwLWJhcj5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJib3JkZXJcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJib3JkZXItYm94IGJvcmRlci10b3BcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm9yZGVyLWJveCBib3JkZXItYm90dG9tXCI+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiIHYtaWY9XCJlbmRlZFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXRleHRcIj7liJ3nuqfkupTlrZDmo4s8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInN0YXJ0XCIgdi1pZj1cImVuZGVkXCI+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCIgQHRhcD1cInN0YXJ0R2FtZVwiPuW8gOWni+a4uOaIjzwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEB0YXA9XCIkcmVmcy5zZXR0aW5nLnNob3coKVwiPua4uOaIj+iuvue9rjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJnYW1lLXdvcmxkXCIgdi1lbHNlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdDxwaWVjZSA6dHlwZT1cIm5vd1BpZWNlQ29sb3JcIj48L3BpZWNlPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidG9wLXRleHRcIj57e3dpbk51bXN9fSA6IHt7ZmFpbE51bXN9fTwvdGV4dD5cclxuXHRcdFx0XHQ8cGllY2UgOnR5cGU9XCJub3dQaWVjZUNvbG9yID09ICd3aGl0ZScgPyAnYmxhY2snIDogJ3doaXRlJ1wiPjwvcGllY2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInJvdW5kXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJvdW5kLXRleHRcIiB2LWlmPVwibm93Um91bmQgPT0gcGxheWVyUGllY2VSb3VuZFwiPuKYmzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0b3AtdGV4dFwiPueOqeWutiBWUyDnlLXohJE8L3RleHQ+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyb3VuZC10ZXh0XCIgdi1pZj1cIm5vd1JvdW5kICE9IHBsYXllclBpZWNlUm91bmRcIj7imJo8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYm9hcmRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxhdHRpY2UgYmxvY2tcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gd29ybGREYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNpcmNsZVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJibG9ja3NcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmxvY2tcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gd29ybGREYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3Vyc29yXCIgdi1pZj1cImN1cnNvckluZGV4ID09IGluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdXJzb3ItbGluZSBjdXJzb3ItdG9wXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3Vyc29yLWxpbmUgY3Vyc29yLWJvdHRvbVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8cGllY2UgOnR5cGU9XCJpdGVtID09IDEgPyAnd2hpdGUnIDogJ2JsYWNrJ1wiIHYtaWY9XCJpdGVtID4gMFwiPjwvcGllY2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udHJvbFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIiBAdGFwPVwicmVzZXRHYW1lXCI+6YeN546pPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIiBAdGFwPVwiZW5kR2FtZVwiPue7k+adnzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCIgQHRhcD1cInJlZ3JldENoZXNzXCI+5oKU5qOLPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIiBAdGFwPVwiJHJlZnMuc2V0dGluZy5zaG93KClcIj7orr7nva48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlyZWN0aW9uc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXJlY3Rpb24gZGlyZWN0aW9uLXRvcFwiIEB0YXA9XCJtb3ZlQ3Vyc29yKC0xNSlcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRpcmVjdGlvbiBkaXJlY3Rpb24tbGVmdFwiIEB0YXA9XCJtb3ZlQ3Vyc29yKC0xKVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZGlyZWN0aW9uIGRpcmVjdGlvbi1yaWdodFwiIEB0YXA9XCJtb3ZlQ3Vyc29yKDEpXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkaXJlY3Rpb24gZGlyZWN0aW9uLWJvdHRvbVwiIEB0YXA9XCJtb3ZlQ3Vyc29yKDE1KVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29uZmlybS1idG5cIiBAdGFwPVwiZHJvcENoZXNzKHBsYXllclBpZWNlUm91bmQpXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHBvcHVwIHJlZj1cInNldHRpbmdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0aW5nXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZXR0aW5nLXBpZWNlXCI+XHJcblx0XHRcdFx0XHQ8cGllY2UgdHlwZT1cIndoaXRlXCIgc2l6ZT1cIjYwXCI+PC9waWVjZT5cclxuXHRcdFx0XHRcdDxwaWVjZSB0eXBlPVwiYmxhY2tcIiBzaXplPVwiNjBcIj48L3BpZWNlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEB0YXA9XCJzZXRQaWVjZSgnd2hpdGUnKVwiPuaIkeimgeaJp+eZveajizwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEB0YXA9XCJzZXRQaWVjZSgnYmxhY2snKVwiPuaIkeimgeaJp+m7keajizwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9wb3B1cD5cclxuXHRcdDx2aWV3IGNsYXNzPVwidGlwXCIgdi1pZj1cInRpcFRleHRcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXAtdGV4dFwiPnt7dGlwVGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEB0YXA9XCJuZXh0R2FtZVwiPuWGjeadpeS4gOWxgDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IEdhcEJhciBmcm9tICdAL2NvbXBvbmVudHMvZ2FwLWJhci9nYXAtYmFyLm52dWUnO1xyXG5cdGltcG9ydCBQaWVjZSBmcm9tICdAL2NvbXBvbmVudHMvcGllY2UvcGllY2UudnVlJztcclxuXHRpbXBvcnQgUG9wdXAgZnJvbSAnQC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLnZ1ZSc7XHJcblx0aW1wb3J0IHsgZGVlcENsb25lLCBjb3VudE9mLCBpbmRleEFsbE9mIH0gZnJvbSAnQC9hc3NldHMvanMvdXRpbHMuanMnO1xyXG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcE11dGF0aW9ucyB9IGZyb20gJ3Z1ZXgnO1xyXG5cdGNvbnN0IGJvYXJkcyA9IDE1ICogMTU7XHJcblx0Y29uc3QgSW50ZWdlcnMgPSB7XHJcblx0XHQnRml2ZSc6IDMwMDAsLy/mtLvkupTlvpfliIZcclxuXHRcdCdGRkRMJzogMjkwMCwvL+WPjOa0u+Wbm+W+l+WIhlxyXG5cdFx0J0ZGU0wnOiAyODAwLC8v5rS75Zub5Yay5Zub5b6X5YiGXHJcblx0XHQnRlRETCc6IDI3MDAsLy/mtLvlm5vmtLvkuInlvpfliIZcclxuXHRcdCdGTCc6IDI2MDAsLy/mtLvlm5vlvpfliIZcclxuXHRcdCdGRk5MJzogMjUwMCwvL+WPjOWGsuWbm+W+l+WIhlxyXG5cdFx0J0ZUU0wnOiAyNDAwLC8v5Yay5Zub5rS75LiJ5b6X5YiGXHJcblx0XHQnVFRETCc6IDIzMDAsLy/lj4zmtLvkuInlvpfliIZcclxuXHRcdCdUVFNMJzogMjIwMCwvL+a0u+S4ieatu+S4ieW+l+WIhlxyXG5cdFx0J1REREwnOiAyMTAwLC8v5rS75LiJ5rS75LqM5b6X5YiGXHJcblx0XHQnRk4nOiAyMDAwLC8v5Yay5Zub5b6X5YiGXHJcblx0XHQnVEwnOiAyMDAwLC8v5rS75LiJ5b6X5YiGXHJcblx0XHQnVE4nOiAxOTAwLC8v5q275LiJ5b6X5YiGXHJcblx0XHQnREwnOiAxOTAwLC8v5rS75LqM5b6X5YiGXHJcblx0fVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly/mo4vnm5jmlbDmja5cclxuXHRcdFx0XHR3b3JsZERhdGE6IFtdLFxyXG5cdFx0XHRcdC8v5piv5ZCm57uT5p2fXHJcblx0XHRcdFx0ZW5kZWQ6IHRydWUsXHJcblx0XHRcdFx0Ly/lvZPliY3lsYDnjqnlrrbmiafmo4vlrZDnmoTpopzoibJcclxuXHRcdFx0XHRub3dQaWVjZUNvbG9yOiAnJyxcclxuXHRcdFx0XHQvL+WFieagh+e0ouW8lVxyXG5cdFx0XHRcdGN1cnNvckluZGV4OiAxMTIsXHJcblx0XHRcdFx0Ly/lvZPliY3lm57lkIjmiafooYzkurogMSDooajnpLrnmb3mo4ssIDLooajnpLrpu5Hmo4tcclxuXHRcdFx0XHRub3dSb3VuZDogMixcclxuXHRcdFx0XHQvL+eOqeWutuWksei0peWbnuaVsFxyXG5cdFx0XHRcdGZhaWxOdW1zOiAwLFxyXG5cdFx0XHRcdC8v546p5a626LWi55qE5Zue5pWwXHJcblx0XHRcdFx0d2luTnVtczogMCxcclxuXHRcdFx0XHQvL+eOqeWutuacgOWQjuiQveaji+eahOS9jee9rlxyXG5cdFx0XHRcdGxhc3RQbGF5ZXJEcm9wSW5kZXg6IDAsXHJcblx0XHRcdFx0Ly/lr7nmiYvmnIDlkI7okL3mo4vnmoTkvY3nva5cclxuXHRcdFx0XHRsYXN0RW5lbXlEcm9wSW5kZXg6IDAsXHJcblx0XHRcdFx0Ly/mj5DnpLpcclxuXHRcdFx0XHR0aXBUZXh0OiAnJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Li4ubWFwR2V0dGVycyhbJ2dldFBpZWNlQ29sb3InXSksXHJcblx0XHRcdHBsYXllclBpZWNlUm91bmQgKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm5vd1BpZWNlQ29sb3IgPT0gJ3doaXRlJyA/IDEgOiAyO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQuLi5tYXBNdXRhdGlvbnMoWydzZXRQaWVjZUNvbG9yJ10pLFxyXG5cdFx0XHQvL+WIneWni+WMllxyXG5cdFx0XHRpbml0ICgpIHtcclxuXHRcdFx0XHRsZXQgd29ybGREYXRhID0gW11cclxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBib2FyZHM7IGkrKyApIHtcclxuXHRcdFx0XHRcdHdvcmxkRGF0YS5wdXNoKDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLndvcmxkRGF0YSA9IGRlZXBDbG9uZSh3b3JsZERhdGEpO1xyXG5cdFx0XHRcdHRoaXMubm93UGllY2VDb2xvciA9IHRoaXMuZ2V0UGllY2VDb2xvcjtcclxuXHRcdFx0XHR0aGlzLm5vd1JvdW5kID0yO1xyXG5cdFx0XHRcdHRoaXMuY3Vyc29ySW5kZXggPSAxMTI7XHJcblx0XHRcdFx0dGhpcy5sYXN0UGxheWVyRHJvcEluZGV4ID0gMDtcclxuXHRcdFx0XHR0aGlzLmxhc3RFbmVteURyb3BJbmRleCA9IDA7XHJcblx0XHRcdFx0dGhpcy50aXBUZXh0ID0gJyc7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5byA5aeL5ri45oiPXHJcblx0XHRcdHN0YXJ0R2FtZSAoKSB7XHJcblx0XHRcdFx0dGhpcy5lbmRlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0XHRcdC8v5b2T546p5a625omn55m95qOL5pe277yM55S16ISR5YWI5LiL5qOLXHJcblx0XHRcdFx0aWYgKCB0aGlzLnBsYXllclBpZWNlUm91bmQgPT0gMSApIHtcclxuXHRcdFx0XHRcdHRoaXMuY29tcHV0ZWRXZWlnaHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v57uT5p2f5ri45oiPXHJcblx0XHRcdGVuZEdhbWUgKCkge1xyXG5cdFx0XHRcdHRoaXMuZW5kZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZmFpbE51bXMgPSAwO1xyXG5cdFx0XHRcdHRoaXMud2luTnVtcyA9IDA7XHJcblx0XHRcdFx0dGhpcy5pbml0KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6YeN546p5ri45oiPXHJcblx0XHRcdHJlc2V0R2FtZSAoKSB7XHJcblx0XHRcdFx0dGhpcy5mYWlsTnVtcyA9IDA7XHJcblx0XHRcdFx0dGhpcy53aW5OdW1zID0gMDtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0R2FtZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WGjeadpeS4gOWxgFxyXG5cdFx0XHRuZXh0R2FtZSAoKSB7XHJcblx0XHRcdFx0dGhpcy5zdGFydEdhbWUoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mgpTmo4tcclxuXHRcdFx0cmVncmV0Q2hlc3MgKCkge1xyXG5cdFx0XHRcdGlmICggdGhpcy5ub3dSb3VuZCAhPSB0aGlzLnBsYXllclBpZWNlUm91bmQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICggIXRoaXMubGFzdFBsYXllckRyb3BJbmRleCB8fCAhdGhpcy5sYXN0RW5lbXlEcm9wSW5kZXggKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+S4jeiDveWGjeaClOaji+S6hidcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJHNldCh0aGlzLndvcmxkRGF0YSwgdGhpcy5sYXN0UGxheWVyRHJvcEluZGV4LCAwKTtcclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy53b3JsZERhdGEsIHRoaXMubGFzdEVuZW15RHJvcEluZGV4LCAwKTtcclxuXHRcdFx0XHR0aGlzLmN1cnNvckluZGV4ID0gdGhpcy5sYXN0RW5lbXlEcm9wSW5kZXg7XHJcblx0XHRcdFx0dGhpcy5sYXN0UGxheWVyRHJvcEluZGV4ID0gMDtcclxuXHRcdFx0XHR0aGlzLmxhc3RFbmVteURyb3BJbmRleCA9IDA7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6K6+572u5omn5qOL6aKc6ImyXHJcblx0XHRcdHNldFBpZWNlIChjb2xvcikge1xyXG5cdFx0XHRcdHRoaXMuc2V0UGllY2VDb2xvcihjb2xvcik7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+iuvue9ruaji+WtkOaIkOWKn++8jOWwhuWcqOS4i+S4gOWxgOW8gOWni+W6lOeUqCdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuJHJlZnMuc2V0dGluZy5oaWRlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v56e75Yqo5YWJ5qCHXHJcblx0XHRcdG1vdmVDdXJzb3IgKHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKCB0aGlzLm5vd1JvdW5kICE9IHRoaXMucGxheWVyUGllY2VSb3VuZCApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGN1cnNvckluZGV4ID0gMDtcclxuXHRcdFx0XHRpZiAoIHZhbHVlIDwgMCApIHtcclxuXHRcdFx0XHRcdGN1cnNvckluZGV4ID0gdGhpcy5jdXJzb3JJbmRleCArIHZhbHVlID49IDAgPyAodGhpcy5jdXJzb3JJbmRleCArIHZhbHVlICk6ICh0aGlzLmN1cnNvckluZGV4ICsgKDE0ICogMTUpKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjdXJzb3JJbmRleCA9IHRoaXMuY3Vyc29ySW5kZXggKyB2YWx1ZSA8IDIyNSA/ICh0aGlzLmN1cnNvckluZGV4ICsgdmFsdWUpIDogKHRoaXMuY3Vyc29ySW5kZXggLSAoMTQgKiAxNSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmN1cnNvckluZGV4ID0gY3Vyc29ySW5kZXg7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6JC95a2QXHJcblx0XHRcdGRyb3BDaGVzcyAocm91bmQpIHtcclxuXHRcdFx0XHRpZiAoIHRoaXMubm93Um91bmQgIT0gcm91bmQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICggdGhpcy53b3JsZERhdGFbdGhpcy5jdXJzb3JJbmRleF0gPT0gMCApIHtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLndvcmxkRGF0YSwgdGhpcy5jdXJzb3JJbmRleCAsIHJvdW5kKTtcclxuXHRcdFx0XHRcdC8v5Yik5pat5piv5ZCm5pyJ5LqU5a2Q6L+e54+gXHJcblx0XHRcdFx0XHRsZXQgaXNXaW4gPSB0aGlzLmlzV2luKHJvdW5kKTtcclxuXHRcdFx0XHRcdGlmICggaXNXaW4gKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGlwVGV4dCA9IHJvdW5kID09IHRoaXMucGxheWVyUGllY2VSb3VuZCA/ICfkvaDotaLkuoYnIDogJ+S9oOi+k+S6hic7XHJcblx0XHRcdFx0XHRcdGlmICggcm91bmQgPT0gdGhpcy5wbGF5ZXJQaWVjZVJvdW5kICkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMud2luTnVtcyArPSAxO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmFpbE51bXMgKz0gMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL+WIpOaWreaji+ebmOacieayoeacieaUvua7oeaji+WtkFxyXG5cdFx0XHRcdFx0bGV0IGlzRnVsbCA9IHRoaXMud29ybGREYXRhLmV2ZXJ5KChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtID4gMFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGlmICggaXNGdWxsICkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRpcFRleHQgPSAn5bmz5bGAJztcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL+abtOaNouW9k+WJjeS4i+aji+aJi1xyXG5cdFx0XHRcdFx0dGhpcy5ub3dSb3VuZCA9IHJvdW5kID09IDEgPyAyIDogMTtcclxuXHRcdFx0XHRcdC8v6K6w5b2V546p5a625pyA5ZCO6JC95a2Q5L2N572u77yM55So5LqO5oKU5qOLXHJcblx0XHRcdFx0XHRpZiAoIHJvdW5kID09IHRoaXMucGxheWVyUGllY2VSb3VuZCApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UGxheWVyRHJvcEluZGV4ID0gdGhpcy5jdXJzb3JJbmRleDtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb21wdXRlZFdlaWdodCgpO1xyXG5cdFx0XHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxhc3RFbmVteURyb3BJbmRleCA9IHRoaXMuY3Vyc29ySW5kZXg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5LiN6IO95Zyo5qOL5a2Q5LiK6Z2i6JC95a2QJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5Yik5pat5b2T5YmN5piv5ZCm5pyJ5qOL5a2Q5LqU6L+e54+gXHJcblx0XHRcdGlzV2luIChyb3VuZCkge1xyXG5cdFx0XHRcdGxldCB3ZWlnaHRzID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmN1cnNvckluZGV4LCByb3VuZCk7XHJcblx0XHRcdFx0aWYgKCB3ZWlnaHRzID09IDMwMDAgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6K6h566X5b2T5YmN54K555qE57uT5p6EXHJcblx0XHRcdGdldFBvc2l0aW9uIChwb3NpdGlvbiwgcm91bmQpIHtcclxuXHRcdFx0XHQvL+iuoeeul+W9k+WJjeeCueWkhOS6juWTquS4gOihjFxyXG5cdFx0XHRcdGxldCBsaW5lID0gMDtcclxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCAxNTsgaSsrICkge1xyXG5cdFx0XHRcdFx0aWYgKCBwb3NpdGlvbiA+PSBpICogMTUgJiYgcG9zaXRpb24gPCAoaSArIDEpICogMTUgKSB7XHJcblx0XHRcdFx0XHRcdGxpbmUgPSBpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8v5b2T5YmN54K555qE6L+e54+g5pWw6YePXHJcblx0XHRcdFx0bGV0IGNvdW50ID0gWzAsMCwwLDBdO1xyXG5cdFx0XHRcdC8v5b2T5YmN54K56L+e54+g5YmN5pa55piv5ZCm5bCB6ZetIGZhbHNlIOS7o+ihqOWwgemXrSwgdHJ1ZSDku6PooajmnKrlsIHpl61cclxuXHRcdFx0XHRsZXQgc3RhcnQgPSBbZmFsc2UsZmFsc2UsZmFsc2UsZmFsc2VdO1xyXG5cdFx0XHRcdC8v5b2T5YmN54K56L+e54+g5ZCO5pa55piv5ZCm5bCB6ZetIGZhbHNlIOS7o+ihqOWwgemXrSwgdHJ1ZSDku6PooajmnKrlsIHpl61cclxuXHRcdFx0XHRsZXQgZW5kID0gW2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL+WIpOaWreivpeeCueeahOaoque6v++8jOerlue6v++8jOato+aWnOe6v++8jOWPjeaWnOe6v+S4iuacieWkmuWwkei/nuWcqOS4gOi1t+eahOaji+WtkO+8jOS4pOi+ueacieaXoOmYu+aMoVxyXG5cdFx0XHRcdGZvciAoIGxldCBpIGluIGNvdW50ICkge1xyXG5cdFx0XHRcdFx0Ly/mqKrnur9cclxuXHRcdFx0XHRcdGlmICggaSA9PSAwICkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDE7IGogPCA1OyBqKysgKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gcG9zaXRpb24gLSBqO1xyXG5cdFx0XHRcdFx0XHRcdGlmICggaW5kZXggPj0gbGluZSAqIDE1ICYmIHRoaXMud29ybGREYXRhW2luZGV4XSA9PSByb3VuZCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50W2ldKys7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggaW5kZXggPj0gbGluZSAqIDE1ICYmIHRoaXMud29ybGREYXRhW2luZGV4XSA9PSAwICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFtpXSA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0W2ldID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDE7IGogPCA1OyBqKysgKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gcG9zaXRpb24gKyBqO1xyXG5cdFx0XHRcdFx0XHRcdGlmICggaW5kZXggPCAobGluZSArIDEpICogMTUgJiYgdGhpcy53b3JsZERhdGFbaW5kZXhdID09IHJvdW5kICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnRbaV0rKztcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8IChsaW5lICsgMSkgKiAxNSAmJiB0aGlzLndvcmxkRGF0YVtpbmRleF0gPT0gMCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kW2ldID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kW2ldID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly/nq5bnur8g5q2j5pac57q/IOWPjeaWnOe6v1xyXG5cdFx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDE7IGogPCA1OyBqKysgKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gaT09IDEgPyBwb3NpdGlvbiAtIChqICogMTUpIDogaSA9PSAyID8gcG9zaXRpb24gLSAoaiAqIDE2KSA6IHBvc2l0aW9uIC0gKGogKiAxNCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA+PSAobGluZSAtIGopICogMTUgJiYgaW5kZXggPCAobGluZSAtIGogKyAxKSAqIDE1ICYmIGluZGV4ID49IDAgJiYgdGhpcy53b3JsZERhdGFbaW5kZXhdID09IHJvdW5kICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y291bnRbaV0rKztcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA+PSAobGluZSAtIGopICogMTUgJiYgaW5kZXggPCAobGluZSAtIGogKyAxKSAqIDE1ICYmIGluZGV4ID49IDAgJiYgdGhpcy53b3JsZERhdGFbaW5kZXhdID09IDAgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0W2ldID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRbaV0gPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGZvciAoIGxldCBqID0gMTsgaiA8IDU7IGorKyApIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaW5kZXggPSBpID09IDEgPyBwb3NpdGlvbiArIChqICogMTUpIDogaSA9PSAyID8gcG9zaXRpb24gKyAoaiAqIDE2KSA6IHBvc2l0aW9uICsgKGogKiAxNCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA+PSAobGluZSArIGopICogMTUgJiYgaW5kZXggPCAobGluZSArIGogKyAxKSAqIDE1ICYmIGluZGV4IDwgYm9hcmRzICYmIHRoaXMud29ybGREYXRhW2luZGV4XSA9PSByb3VuZCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvdW50W2ldKys7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICggaW5kZXggPj0gKGxpbmUgKyBqKSAqIDE1ICYmIGluZGV4IDwgKGxpbmUgKyBqICsgMSkgKiAxNSAmJiBpbmRleCA8IGJvYXJkcyAmJiB0aGlzLndvcmxkRGF0YVtpbmRleF0gPT0gMCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kW2ldID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kW2ldID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y291bnRbaV0rK1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL+agueaNruaoque6v++8jOerlue6v++8jOato+aWnOe6v++8jOWPjeaWnOe6v+S4iueahOaDheWGteiuoeeul+ivpeeCueeahOWIhuaVsFxyXG5cdFx0XHRcdGxldCB0eXBlcyA9IFtdO1xyXG5cdFx0XHRcdGZvciAoIGxldCBpIGluIGNvdW50ICkge1xyXG5cdFx0XHRcdFx0aWYgKCBjb3VudFtpXSA9PSAyICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIHN0YXJ0W2ldICYmIGVuZFtpXSApIHR5cGVzLnB1c2goJ0RMJyk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb3VudFtpXSA9PSAzICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIHN0YXJ0W2ldICYmIGVuZFtpXSApIHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlcy5wdXNoKCdUTCcpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAoc3RhcnRbaV0gJiYgIWVuZFtpXSkgfHwgKCFzdGFydFtpXSAmJiBlbmRbaV0pICkge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGVzLnB1c2goJ1ROJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggY291bnRbaV0gPT0gNCApIHtcclxuXHRcdFx0XHRcdFx0aWYgKCBzdGFydFtpXSAmJiBlbmRbaV0gKSB7XHJcblx0XHRcdFx0XHRcdFx0dHlwZXMucHVzaCgnRkwnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggKHN0YXJ0W2ldICYmICFlbmRbaV0pIHx8ICghc3RhcnRbaV0gJiYgZW5kW2ldKSApIHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlcy5wdXNoKCdGTicpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIGNvdW50W2ldID49IDUgKSB7XHJcblx0XHRcdFx0XHRcdHR5cGVzLnB1c2goJ0ZpdmUnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCB0eXBlcy5pbmRleE9mKCdGaXZlJykgPiAtMSApIHsvL+a0u+S6lOW+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydGaXZlJ11cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3VudE9mKHR5cGVzLCAnRkwnKSA+IDEgKSB7Ly/lj4zmtLvlm5vlvpfliIZcclxuXHRcdFx0XHRcdHJldHVybiBJbnRlZ2Vyc1snRkZETCddXHJcblx0XHRcdFx0fSBlbHNlIGlmICggdHlwZXMuaW5kZXhPZignRkwnKSA+IC0xICYmIHR5cGVzLmluZGV4T2YoJ0ZOJykgPiAtMSApIHsvL+a0u+Wbm+WGsuWbm+W+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydGRlNMJ11cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlcy5pbmRleE9mKCdGTCcpID4gLTEgJiYgdHlwZXMuaW5kZXhPZignVEwnKSA+IC0xICkgey8v5rS75Zub5rS75LiJ5b6X5YiGXHJcblx0XHRcdFx0XHRyZXR1cm4gSW50ZWdlcnNbJ0ZUREwnXVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVzLmluZGV4T2YoJ0ZMJykgPiAtMSApIHsvL+a0u+Wbm+W+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydGTCddXHJcblx0XHRcdFx0fSBlbHNlIGlmICggY291bnRPZih0eXBlcywgJ0ZOJykgPiAxICkgey8v5Y+M5Yay5Zub5b6X5YiGXHJcblx0XHRcdFx0XHRyZXR1cm4gSW50ZWdlcnNbJ0ZGTkwnXVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVzLmluZGV4T2YoJ0ZOJykgPiAtMSAmJiB0eXBlcy5pbmRleE9mKCdUTCcpID4gLTEgKSB7Ly/lhrLlm5vmtLvkuInlvpfliIZcclxuXHRcdFx0XHRcdHJldHVybiBJbnRlZ2Vyc1snRlRTTCddXHJcblx0XHRcdFx0fSBlbHNlIGlmICggY291bnRPZih0eXBlcywgJ1RMJykgPiAxICkgey8v5Y+M5rS75LiJ5b6X5YiGXHJcblx0XHRcdFx0XHRyZXR1cm4gSW50ZWdlcnNbJ1RUREwnXVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVzLmluZGV4T2YoJ1RMJykgPiAtMSAmJiB0eXBlcy5pbmRleE9mKCdUTicpID4gLTEgKSB7Ly/mtLvkuInmrbvkuInlvpfliIZcclxuXHRcdFx0XHRcdHJldHVybiBJbnRlZ2Vyc1snVFRTTCddXHJcblx0XHRcdFx0fSBlbHNlIGlmICggdHlwZXMuaW5kZXhPZignVEwnKSA+IC0xICYmIHR5cGVzLmluZGV4T2YoJ0RMJykgPiAtMSApIHsvL+a0u+S4iea0u+S6jOW+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydURERMJ11cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlcy5pbmRleE9mKCdGTicpID4gLTEpIHsvL+WGsuWbm+W+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydGTiddXHJcblx0XHRcdFx0fSBlbHNlIGlmICggdHlwZXMuaW5kZXhPZignVEwnKSA+IC0xKSB7Ly/mtLvkuInlvpfliIZcclxuXHRcdFx0XHRcdHJldHVybiBJbnRlZ2Vyc1snVEwnXVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVzLmluZGV4T2YoJ1ROJykgPiAtMSkgey8v5q275LiJ5b6X5YiGXHJcblx0XHRcdFx0XHRyZXR1cm4gSW50ZWdlcnNbJ1ROJ11cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlcy5pbmRleE9mKCdETCcpID4gLTEpIHsvL+a0u+S6jOW+l+WIhlxyXG5cdFx0XHRcdFx0cmV0dXJuIEludGVnZXJzWydETCddXHJcblx0XHRcdFx0fSBlbHNlIHsvL+WFtuS9meeKtuWGteWdh+S4ujHliIZcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/orqHnrpfmnYPph41cclxuXHRcdFx0Y29tcHV0ZWRXZWlnaHQgKCkge1xyXG5cdFx0XHRcdGxldCB3ZWlnaHRzID0gW107XHJcblx0XHRcdFx0bGV0IHJvdW5kID0gdGhpcy5wbGF5ZXJQaWVjZVJvdW5kID09IDEgPyAyIDogMTtcclxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBib2FyZHM7IGkrKyApIHtcclxuXHRcdFx0XHRcdGlmICggdGhpcy53b3JsZERhdGFbaV0gPT0gMCApIHtcclxuXHRcdFx0XHRcdFx0Ly/orqHnrpfnlLXohJHlnKjov5nkuKrkvY3nva7kuIrnmoTmnYPph41cclxuXHRcdFx0XHRcdFx0bGV0IHdlaWdodDEgPSB0aGlzLmdldFBvc2l0aW9uKGksIHJvdW5kKTtcclxuXHRcdFx0XHRcdFx0Ly/orqHnrpfnjqnlrrblnKjov5nkuKrkvY3nva7kuIrnmoTmnYPph41cclxuXHRcdFx0XHRcdFx0bGV0IHdlaWdodDIgPSB0aGlzLmdldFBvc2l0aW9uKGksIHRoaXMucGxheWVyUGllY2VSb3VuZCkgLSAxO1xyXG5cdFx0XHRcdFx0XHQvL+iwgeeahOadg+mHjeWkp+WtmOiwgSDnjqnlrrbnmoTmnYPph43opoHlh48x77yM5q+U55S16ISR55qE5p2D6YeN5bCP54K5XHJcblx0XHRcdFx0XHRcdHdlaWdodHMucHVzaCh3ZWlnaHQxID4gd2VpZ2h0MiA/IHdlaWdodDEgOiB3ZWlnaHQyKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdC8v5b2T5q2k54K55bey57uP5pyJ5qOL5a2Q5pe25b6X5YiG5Li66Zu2LOihqOekuuS4jeiDveS4i+WtkFxyXG5cdFx0XHRcdFx0XHR3ZWlnaHRzLnB1c2goMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xyXG5cdFx0XHRcdGZvciAoIGxldCBpIGluIEludGVnZXJzICkge1xyXG5cdFx0XHRcdFx0aWYgKCBpbmRleEFsbE9mKHdlaWdodHMsIEludGVnZXJzW2ldKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4QWxsT2Yod2VpZ2h0cywgSW50ZWdlcnNbaV0pW35+KE1hdGgucmFuZG9tKCkgKiBpbmRleEFsbE9mKHdlaWdodHMsIEludGVnZXJzW2ldKS5sZW5ndGgpXTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIGluZGV4QWxsT2Yod2VpZ2h0cywgSW50ZWdlcnNbaV0gLSAxKS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IGluZGV4QWxsT2Yod2VpZ2h0cywgSW50ZWdlcnNbaV0gLSAxKVt+fihNYXRoLnJhbmRvbSgpICogaW5kZXhBbGxPZih3ZWlnaHRzLCBJbnRlZ2Vyc1tpXSAtIDEpLmxlbmd0aCldO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCBpbmRleCA9PSAtMSApIHtcclxuXHRcdFx0XHRcdGlmICggdGhpcy53b3JsZERhdGFbMTEyXSAhPSAwICkge1xyXG5cdFx0XHRcdFx0XHRsZXQgYXJyID0gaW5kZXhBbGxPZih0aGlzLndvcmxkRGF0YSwgMCk7XHJcblx0XHRcdFx0XHRcdGluZGV4ID0gYXJyW35+KE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpbmRleCA9IDExMjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jdXJzb3JJbmRleCA9IGluZGV4O1xyXG5cdFx0XHRcdHRoaXMuZHJvcENoZXNzKHJvdW5kKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQmFja1ByZXNzKGV2ZW50KSB7XHJcblx0XHRcdGlmICggZXZlbnQuZnJvbSA9PSAnYmFja2J1dHRvbicgKSB7XHJcblx0XHRcdFx0aWYgKCB0aGlzLiRyZWZzLnNldHRpbmcudmlzaWFibGUgKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnNldHRpbmcuaGlkZSgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0R2FwQmFyLFxyXG5cdFx0XHRQaWVjZSxcclxuXHRcdFx0UG9wdXBcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHRAaW1wb3J0IHVybChcIi4uLy4uL2Fzc2V0cy9jc3MvYm9keS5jc3NcIik7XHJcblx0QGltcG9ydCB1cmwoXCIuLi8uLi9hc3NldHMvY3NzL2JvYXJkLmNzc1wiKTtcclxuXHRAaW1wb3J0IHVybChcIi4uLy4uL2Fzc2V0cy9jc3MvYnV0dG9uLmNzc1wiKTtcclxuXHRAaW1wb3J0IHVybChcIi4uLy4uL2Fzc2V0cy9jc3MvY29udHJvbC5jc3NcIik7XHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjMmFiMjhhLCAjMTE4NTYzKTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmJvcmRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDMwcnB4O1xyXG5cdFx0bGVmdDogMzBycHg7XHJcblx0XHRyaWdodDogMzBycHg7XHJcblx0XHRib3R0b206IDMwcnB4O1xyXG5cdFx0Ym9yZGVyOiAycnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcclxuXHR9XHJcblx0LmJvcmRlci1ib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHR9XHJcblx0LmJvcmRlci1ib3g6OmJlZm9yZSwgLmJvcmRlci1ib3g6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGJvcmRlcjogMnJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTE4NTYzO1xyXG5cdH1cclxuXHQuYm9yZGVyLWJveDo6YmVmb3JlIHtcclxuXHRcdGxlZnQ6IC0xNXJweDtcclxuXHRcdHRvcDogMFxyXG5cdH1cclxuXHQuYm9yZGVyLWJveDo6YWZ0ZXIge1xyXG5cdFx0cmlnaHQ6IC0xNXJweDtcclxuXHRcdHRvcDogMDtcclxuXHR9XHJcblx0LmJvcmRlci10b3Age1xyXG5cdFx0dG9wOiAtMTVycHg7XHJcblx0fVxyXG5cdC5ib3JkZXItYm90dG9tIHtcclxuXHRcdGJvdHRvbTogLTE1cnB4O1xyXG5cdH1cclxuXHQudGl0bGUge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMzAwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiA5MHJweDtcclxuXHRcdGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcblx0XHRjb2xvcjogI2U2OGMwYztcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LnRpdGxlLXRleHQge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0ei1pbmRleDogMztcclxuXHR9XHJcblx0LnRpdGxlOjpiZWZvcmUsIC50aXRsZTo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ+WInee6p+S6lOWtkOajiyc7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogY2FsYyg1MCUgKyAycnB4KTtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlICsgMnJweCk7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR9XHJcblx0LnRpdGxlOjpiZWZvcmUge1xyXG5cdFx0Y29sb3I6ICM5ZjY0MTE7XHJcblx0fVxyXG5cdC50aXRsZTo6YWZ0ZXIge1xyXG5cdFx0Y29sb3I6ICM1YzM5MDc7XHJcblx0XHRmaWx0ZXI6IGJsdXIoM3JweCk7XHJcblx0fVxyXG5cdC5zdGFydCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdGxlZnQ6IDUwJTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuc3RhcnQgLmJ0biB7XHJcblx0XHRtaW4td2lkdGg6IDEyMHJweDtcclxuXHRcdG1hcmdpbjogMjBycHggMDtcclxuXHR9XHJcblx0LmdhbWUtd29ybGQge1xyXG5cdFx0bWFyZ2luLXRvcDogNTBycHg7XHJcblx0fVxyXG5cdC50b3Age1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogMTBycHggMCAwIDA7XHJcblx0fVxyXG5cdC5yb3VuZCB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5yb3VuZC10ZXh0IHtcclxuXHRcdGNvbG9yOiAjREQ1MjREO1xyXG5cdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHR9XHJcblx0LnRvcC10ZXh0IHtcclxuXHRcdGNvbG9yOiAjRjFGMUYxO1xyXG5cdFx0Zm9udC1zaXplOiAyNXJweDtcclxuXHRcdG1hcmdpbjogMCA0MHJweDtcclxuXHR9XHJcblx0LmJ0bnMge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuYnRucyAuYnRuIHtcclxuXHRcdG1hcmdpbjogMCAyMHJweDtcclxuXHR9XHJcblx0LnNldHRpbmcge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuc2V0dGluZy1waWVjZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0bWFyZ2luOiAwIDEzMHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDgwcnB4O1xyXG5cdH1cclxuXHQuc2V0dGluZyAuYnRuIHtcclxuXHRcdG1hcmdpbjogNDBycHggMjBycHg7XHJcblx0fVxyXG5cdC50aXAge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRcdGJvcmRlcjogNHJweCBzb2xpZCAjREQ1MjREO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG5cdFx0cGFkZGluZzogMTBycHggMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMjBycHggcmdiYSgwLDAsMCwwLjYpO1xyXG5cdH1cclxuXHQudGlwIC5idG4ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTBycHg7XHJcblx0fVxyXG5cdC50aXAtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0Y29sb3I6ICM1QzM5MDc7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!***************************************************!*\
  !*** D:/my-project/uni-gobang/assets/js/utils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.deepClone = deepClone;exports.indexOf = indexOf;exports.countOf = countOf;exports.indexAllOf = indexAllOf; /**\r\n                                                                                                                                                                                                 * 深度克隆\r\n                                                                                                                                                                                                 * @param {Object} obj 对象\r\n                                                                                                                                                                                                */\nfunction deepClone(obj) {\n  if (typeof obj !== \"object\" && typeof obj !== 'function') {\n    //原始类型直接返回\n    return obj;\n  }\n  var o = isArray(obj) ? [] : {};\n  for (var i in obj) {\n    if (obj.hasOwnProperty(i)) {\n      o[i] = typeof obj[i] === \"object\" ? deepClone(obj[i]) : obj[i];\n    }\n  }\n  return o;\n}\n\n/**\r\n   * 数组查找符合条件元素并返回下标\r\n   * @param {Array} arr 传入数组\r\n   * @param {String} value 条件元素\r\n   * @param {String} query 对比key值\r\n  */\nfunction indexOf(arr, query, value) {\n  var len = arr.length;\n  for (var i = 0; i < len; i++) {\n    if (arr[i][query] == value) {\n      return parseInt(i);\n    }\n  }\n  return -1;\n}\n\n/**\r\n   * 数组查找指定元素并返回个数\r\n   * @param {Array} arr 传入数组\r\n   * @param {String} value 条件元素值\r\n  */\nfunction countOf(arr, value) {\n  var len = arr.length;\n  var count = 0;\n  for (var i = 0; i < len; i++) {\n    if (arr[i] == value) {\n      count++;\n    }\n  }\n  return count;\n}\n\n/**\r\n   * 数组查找指定元素并返回全部下标\r\n   * @param {Array} arr 传入数组\r\n   * @param {String} value 条件元素值\r\n  */\nfunction indexAllOf(arr, value) {\n  var len = arr.length;\n  var index = [];\n  for (var i = 0; i < len; i++) {\n    if (arr[i] == value) {\n      index.push(i);\n    }\n  }\n  return index;\n}\n\n// 判断arr是否为一个数组，返回一个bool值\nfunction isArray(arr) {\n  return Object.prototype.toString.call(arr) === '[object Array]';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXNzZXRzL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbImRlZXBDbG9uZSIsIm9iaiIsIm8iLCJpc0FycmF5IiwiaSIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsImFyciIsInF1ZXJ5IiwidmFsdWUiLCJsZW4iLCJsZW5ndGgiLCJwYXJzZUludCIsImNvdW50T2YiLCJjb3VudCIsImluZGV4QWxsT2YiLCJpbmRleCIsInB1c2giLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiXSwibWFwcGluZ3MiOiJpTEFBQTs7OztBQUlPLFNBQVNBLFNBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQzlCLE1BQUcsT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBT0EsR0FBUCxLQUFlLFVBQTdDLEVBQXlEO0FBQzFEO0FBQ0ssV0FBT0EsR0FBUDtBQUNIO0FBQ0QsTUFBSUMsQ0FBQyxHQUFHQyxPQUFPLENBQUNGLEdBQUQsQ0FBUCxHQUFlLEVBQWYsR0FBb0IsRUFBNUI7QUFDQSxPQUFJLElBQUlHLENBQVIsSUFBYUgsR0FBYixFQUFrQjtBQUNkLFFBQUdBLEdBQUcsQ0FBQ0ksY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSCxFQUF5QjtBQUNyQkYsT0FBQyxDQUFDRSxDQUFELENBQUQsR0FBTyxPQUFPSCxHQUFHLENBQUNHLENBQUQsQ0FBVixLQUFrQixRQUFsQixHQUE2QkosU0FBUyxDQUFDQyxHQUFHLENBQUNHLENBQUQsQ0FBSixDQUF0QyxHQUFpREgsR0FBRyxDQUFDRyxDQUFELENBQTNEO0FBQ0g7QUFDSjtBQUNELFNBQU9GLENBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTU8sU0FBU0ksT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLEVBQThCQyxLQUE5QixFQUFzQztBQUM1QyxNQUFJQyxHQUFHLEdBQUdILEdBQUcsQ0FBQ0ksTUFBZDtBQUNBLE9BQU0sSUFBSVAsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR00sR0FBckIsRUFBMEJOLENBQUMsRUFBM0IsRUFBZ0M7QUFDL0IsUUFBS0csR0FBRyxDQUFDSCxDQUFELENBQUgsQ0FBT0ksS0FBUCxLQUFpQkMsS0FBdEIsRUFBOEI7QUFDN0IsYUFBT0csUUFBUSxDQUFDUixDQUFELENBQWY7QUFDQTtBQUNEO0FBQ0QsU0FBTyxDQUFDLENBQVI7QUFDQTs7QUFFRDs7Ozs7QUFLTyxTQUFTUyxPQUFULENBQWtCTixHQUFsQixFQUF1QkUsS0FBdkIsRUFBK0I7QUFDckMsTUFBSUMsR0FBRyxHQUFHSCxHQUFHLENBQUNJLE1BQWQ7QUFDQSxNQUFJRyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE9BQU0sSUFBSVYsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR00sR0FBckIsRUFBMEJOLENBQUMsRUFBM0IsRUFBZ0M7QUFDL0IsUUFBS0csR0FBRyxDQUFDSCxDQUFELENBQUgsSUFBVUssS0FBZixFQUF1QjtBQUN0QkssV0FBSztBQUNMO0FBQ0Q7QUFDRCxTQUFPQSxLQUFQO0FBQ0E7O0FBRUQ7Ozs7O0FBS08sU0FBU0MsVUFBVCxDQUFxQlIsR0FBckIsRUFBMEJFLEtBQTFCLEVBQWlDO0FBQ3ZDLE1BQUlDLEdBQUcsR0FBR0gsR0FBRyxDQUFDSSxNQUFkO0FBQ0EsTUFBSUssS0FBSyxHQUFHLEVBQVo7QUFDQSxPQUFNLElBQUlaLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUdNLEdBQXJCLEVBQTBCTixDQUFDLEVBQTNCLEVBQWdDO0FBQy9CLFFBQUtHLEdBQUcsQ0FBQ0gsQ0FBRCxDQUFILElBQVVLLEtBQWYsRUFBdUI7QUFDdEJPLFdBQUssQ0FBQ0MsSUFBTixDQUFXYixDQUFYO0FBQ0E7QUFDRDtBQUNELFNBQU9ZLEtBQVA7QUFDQTs7QUFFRDtBQUNBLFNBQVNiLE9BQVQsQ0FBa0JJLEdBQWxCLEVBQXVCO0FBQ25CLFNBQU9XLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCZCxHQUEvQixNQUF3QyxnQkFBL0M7QUFDSCIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gICAqIOa3seW6puWFi+mahlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmog5a+56LGhXHJcbiAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZSAob2JqKSB7XHJcbiAgaWYodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSB7XHJcblx0Ly/ljp/lp4vnsbvlnovnm7TmjqXov5Tlm55cclxuICAgICAgcmV0dXJuIG9iajtcclxuICB9XHJcbiAgdmFyIG8gPSBpc0FycmF5KG9iaikgPyBbXSA6IHt9O1xyXG4gIGZvcihsZXQgaSBpbiBvYmopIHtcclxuICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGkpKXtcclxuICAgICAgICAgIG9baV0gPSB0eXBlb2Ygb2JqW2ldID09PSBcIm9iamVjdFwiID8gZGVlcENsb25lKG9ialtpXSkgOiBvYmpbaV07XHJcbiAgICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlbDnu4Tmn6Xmib7nrKblkIjmnaHku7blhYPntKDlubbov5Tlm57kuIvmoIdcclxuICogQHBhcmFtIHtBcnJheX0gYXJyIOS8oOWFpeaVsOe7hFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUg5p2h5Lu25YWD57SgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSDlr7nmr5RrZXnlgLxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2YgKGFyciwgcXVlcnksIHZhbHVlICkge1xyXG5cdGxldCBsZW4gPSBhcnIubGVuZ3RoO1xyXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0aWYgKCBhcnJbaV1bcXVlcnldID09IHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoaSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOe7hOafpeaJvuaMh+WumuWFg+e0oOW5tui/lOWbnuS4quaVsFxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIg5Lyg5YWl5pWw57uEXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSDmnaHku7blhYPntKDlgLxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50T2YgKGFyciwgdmFsdWUgKSB7XHJcblx0bGV0IGxlbiA9IGFyci5sZW5ndGg7XHJcblx0bGV0IGNvdW50ID0gMDtcclxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdGlmICggYXJyW2ldID09IHZhbHVlICkge1xyXG5cdFx0XHRjb3VudCsrXHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBjb3VudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOe7hOafpeaJvuaMh+WumuWFg+e0oOW5tui/lOWbnuWFqOmDqOS4i+agh1xyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIg5Lyg5YWl5pWw57uEXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSDmnaHku7blhYPntKDlgLxcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4QWxsT2YgKGFyciwgdmFsdWUpIHtcclxuXHRsZXQgbGVuID0gYXJyLmxlbmd0aDtcclxuXHRsZXQgaW5kZXggPSBbXTtcclxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcclxuXHRcdGlmICggYXJyW2ldID09IHZhbHVlICkge1xyXG5cdFx0XHRpbmRleC5wdXNoKGkpXHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBpbmRleDtcclxufVxyXG5cclxuLy8g5Yik5patYXJy5piv5ZCm5Li65LiA5Liq5pWw57uE77yM6L+U5Zue5LiA5LiqYm9vbOWAvFxyXG5mdW5jdGlvbiBpc0FycmF5IChhcnIpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 25)))

/***/ }),
/* 25 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 27 */
/*!****************************************!*\
  !*** D:/my-project/uni-gobang/App.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDa0s7QUFDbEssZ0JBQWdCLGtMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*****************************************************************!*\
  !*** D:/my-project/uni-gobang/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../Tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJoQixDQUFnQiw2a0JBQUcsRUFBQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9Ub29sL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL1Rvb2wvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vVG9vbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/my-project/uni-gobang/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 31 */
/*!***********************************************!*\
  !*** D:/my-project/uni-gobang/store/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 26));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 24));\nvar _config = __webpack_require__(/*! @/assets/js/config.js */ 32);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    pieceColor: uni.getStorageSync(_config.PIECECOLOR) || 'white' //玩家执棋子颜色\n  },\n  getters: {\n    getPieceColor: function getPieceColor(state) {\n      return state.pieceColor;\n    } },\n\n  mutations: {\n    setPieceColor: function setPieceColor(state, color) {\n      state.pieceColor = color;\n      uni.setStorageSync(_config.PIECECOLOR, color);\n    },\n    clearHiscore: function clearHiscore(state) {\n      state.pieceColor = '';\n      uni.removeStorageSync(_config.PIECECOLOR);\n    } },\n\n  actions: {} });var _default =\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInBpZWNlQ29sb3IiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIlBJRUNFQ09MT1IiLCJnZXR0ZXJzIiwiZ2V0UGllY2VDb2xvciIsIm11dGF0aW9ucyIsInNldFBpZWNlQ29sb3IiLCJjb2xvciIsInNldFN0b3JhZ2VTeW5jIiwiY2xlYXJIaXNjb3JlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQTtBQUNBLG1FO0FBQ0FBLGFBQUlDLEdBQUosQ0FBUUMsYUFBUjtBQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRCxjQUFLRSxLQUFULENBQWU7QUFDekJDLE9BQUssRUFBRTtBQUNUQyxjQUFVLEVBQUVDLEdBQUcsQ0FBQ0MsY0FBSixDQUFtQkMsa0JBQW5CLEtBQWtDLE9BRHJDLENBQzhDO0FBRDlDLEdBRGtCO0FBSTVCQyxTQUFPLEVBQUU7QUFDUkMsaUJBRFEseUJBQ09OLEtBRFAsRUFDYztBQUNyQixhQUFPQSxLQUFLLENBQUNDLFVBQWI7QUFDQSxLQUhPLEVBSm1COztBQVN6Qk0sV0FBUyxFQUFFO0FBQ2JDLGlCQURhLHlCQUNFUixLQURGLEVBQ1NTLEtBRFQsRUFDZ0I7QUFDNUJULFdBQUssQ0FBQ0MsVUFBTixHQUFtQlEsS0FBbkI7QUFDQVAsU0FBRyxDQUFDUSxjQUFKLENBQW1CTixrQkFBbkIsRUFBK0JLLEtBQS9CO0FBQ0EsS0FKWTtBQUtiRSxnQkFMYSx3QkFLQ1gsS0FMRCxFQUtRO0FBQ3BCQSxXQUFLLENBQUNDLFVBQU4sR0FBbUIsRUFBbkI7QUFDQUMsU0FBRyxDQUFDVSxpQkFBSixDQUFzQlIsa0JBQXRCO0FBQ0EsS0FSWSxFQVRjOztBQW1CekJTLFNBQU8sRUFBRSxFQW5CZ0IsRUFBZixDQUFkLEM7O0FBcUJlZixLIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7IFBJRUNFQ09MT1IgfSBmcm9tICdAL2Fzc2V0cy9qcy9jb25maWcuanMnXHJcblZ1ZS51c2UoVnVleClcclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG5cdFx0cGllY2VDb2xvcjogdW5pLmdldFN0b3JhZ2VTeW5jKFBJRUNFQ09MT1IpIHx8ICd3aGl0ZScsIC8v546p5a625omn5qOL5a2Q6aKc6ImyXHJcblx0fSxcclxuXHRnZXR0ZXJzOiB7XHJcblx0XHRnZXRQaWVjZUNvbG9yIChzdGF0ZSkge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGUucGllY2VDb2xvclxyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuXHRcdHNldFBpZWNlQ29sb3IgKHN0YXRlLCBjb2xvcikge1xyXG5cdFx0XHRzdGF0ZS5waWVjZUNvbG9yID0gY29sb3I7XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhQSUVDRUNPTE9SLCBjb2xvcilcclxuXHRcdH0sXHJcblx0XHRjbGVhckhpc2NvcmUgKHN0YXRlKSB7XHJcblx0XHRcdHN0YXRlLnBpZWNlQ29sb3IgPSAnJztcclxuXHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFBJRUNFQ09MT1IpO1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICBhY3Rpb25zOiB7fVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************!*\
  !*** D:/my-project/uni-gobang/assets/js/config.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.PIECECOLOR = void 0;var PIECECOLOR = 'UNI_GOBANG_PIECE_COLOR';exports.PIECECOLOR = PIECECOLOR;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXNzZXRzL2pzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJQSUVDRUNPTE9SIl0sIm1hcHBpbmdzIjoiMEZBQU8sSUFBTUEsVUFBVSxHQUFHLHdCQUFuQixDIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFBJRUNFQ09MT1IgPSAnVU5JX0dPQkFOR19QSUVDRV9DT0xPUic7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ })
],[[0,"app-config"]]]);