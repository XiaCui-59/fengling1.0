(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/authentication/authentication"],{

/***/ 84:
/*!*************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/main.js?{"page":"subpkg%2Fauthentication%2Fauthentication"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _authentication = _interopRequireDefault(__webpack_require__(/*! ./subpkg/authentication/authentication.vue */ 85));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_authentication.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 85:
/*!******************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.vue?vue&type=template&id=7c462e3a&scoped=true& */ 86);
/* harmony import */ var _authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.vue?vue&type=script&lang=js& */ 88);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.vue?vue&type=style&index=0&id=7c462e3a&lang=scss&scoped=true& */ 90);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c462e3a",
  null,
  false,
  _authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/authentication/authentication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/*!*************************************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=template&id=7c462e3a&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./authentication.vue?vue&type=template&id=7c462e3a&scoped=true& */ 87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_template_id_7c462e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 87:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=template&id=7c462e3a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 88:
/*!*******************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./authentication.vue?vue&type=script&lang=js& */ 89);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 89:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 29));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var customHeader = function customHeader() {
  __webpack_require__.e(/*! require.ensure | components/custom_header */ "components/custom_header").then((function () {
    return resolve(__webpack_require__(/*! @/components/custom_header.vue */ 178));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var _default = {
  data: function data() {
    return {
      imgUrl: app.globalData.baseImageUrl,
      pageName: "实名认证",
      marginTop: app.globalData.marginTop,
      tabMargin: app.globalData.tabMargin,
      scrollHeight: 0,
      boxTop: 0,
      headerHeight: app.globalData.topHeight,
      name: "",
      gender: "",
      idcardNumber: "",
      idcardDateline: "",
      nation: "",
      idcardFront: {
        key: "",
        url: ""
      },
      idcardBack: {
        key: "",
        url: ""
      }
    };
  },
  components: {
    customHeader: customHeader
  },
  onLoad: function onLoad() {
    var _this = this;
    this.scrollHeight = app.globalData.systemHeight - this.tabMargin - this.marginTop;
    // this.getMarginTop()
    // setTimeout(function() {
    // 	_this.getElementInfo()
    // 	_this.getTopHeight()
    // }, 500)
  },

  methods: {
    getMarginTop: function getMarginTop(e) {
      var menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      this.marginTop = menuButtonInfo.height + menuButtonInfo.top + 10;
    },
    getTopHeight: function getTopHeight() {
      var percent = 200 / 844;
      var systemInfo = uni.getSystemInfoSync();
      this.headerHeight = Math.floor(systemInfo.screenHeight * percent);
    },
    // getElementInfo() {
    // 	let _this = this
    // 	let topHeight = 0;
    // 	let systemInfo = uni.getSystemInfoSync()
    // 	let info = uni.createSelectorQuery().select(".top_area");
    // 	info.boundingClientRect(function(data) { //data - 各种参数
    // 		if (data) {
    // 			topHeight = data.height // 获取元素高度
    // 			_this.boxTop = _this.marginTop + data.height
    // 		}
    // 		_this.scrollHeight = systemInfo.screenHeight - _this.boxTop - 5
    // 	}).exec()
    // },
    chooseImage: function chooseImage(type) {
      var _this2 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          // uni.showLoading({
          // 	title:"上传中，请稍后"
          // })
          _this2.loadimg(type, tempFilePaths[0]);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    loadimg: function loadimg(type, filePath) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this, header;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this3;
                header = {
                  "Authorization": "bearer " + uni.getStorageSync("token"),
                  "accept": "application/json",
                  "content-type": "multipart/form-data"
                };
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  uni.uploadFile({
                    url: app.globalData.baseUrl + "/worker/upload/image?type=" + type,
                    filePath: filePath,
                    name: "file",
                    header: header,
                    success: function success(resp) {
                      var response = JSON.parse(resp.data);
                      if (response.code == 0) {
                        uni.showToast({
                          title: "图片上传成功"
                        });
                        if (type == "id_card_front") {
                          _this.idcardFront = response.data;
                          _this.$request("/worker/ocr/id-card", {
                            key: response.data.key
                          }, "POST").then(function (res) {
                            if (res.code == 0) {
                              _this.name = res.data.front.name;
                              _this.gender = res.data.front.sex;
                              _this.idcardNumber = res.data.front.id_number;
                              _this.nation = res.data.front.ethnicity;
                            }
                          });
                        }
                        if (type == "id_card_back") {
                          _this.idcardBack = response.data;
                          _this.$request("/worker/ocr/id-card", {
                            key: response.data.key
                          }, "POST").then(function (res) {
                            if (res.code == 0) {
                              _this.idcardDateline = res.data.back.valid_period;
                            }
                          });
                        }
                      } else {
                        uni.showModal({
                          title: "上传失败",
                          content: response.msg
                        });
                      }
                    },
                    complete: function complete() {
                      uni.hideLoading();
                    }
                  });
                  resolve(_this.reponsefiles);
                }));
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    confirm: function confirm() {
      var _this = this;
      var data = {
        "gender": this.gender == "男" ? "male" : "female",
        "name": this.name,
        "ethnicity": this.nation,
        "id_card_number": this.idcardNumber,
        "id_card_front": this.idcardFront.key,
        "id_card_back": this.idcardBack.key,
        "id_card_valid_period": this.idcardDateline
      };
      _this.$request("/worker/profile", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "提交成功",
            duration: 3000
          });
          setTimeout(function () {
            uni.navigateBack();
          }, 2000);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 90:
/*!****************************************************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=style&index=0&id=7c462e3a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./authentication.vue?vue&type=style&index=0&id=7c462e3a&lang=scss&scoped=true& */ 91);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_authentication_vue_vue_type_style_index_0_id_7c462e3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 91:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/authentication/authentication.vue?vue&type=style&index=0&id=7c462e3a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[84,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3N1YnBrZy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi52dWU/Y2QwNyIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24udnVlP2FkMDMiLCJ3ZWJwYWNrOi8vL0U6L+mhueebruaWh+S7ti9sYW5nZW5nNS4xMS9yZWxlYXNlL2VtcGxveWVlX21pbmlwcm9ncmFtZV9uZXcvc3VicGtnL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnZ1ZT9lOWQ0IiwidW5pLWFwcDovLy9zdWJwa2cvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24udnVlIiwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3N1YnBrZy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi52dWU/NjI1YSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24udnVlPzcxNzMiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiLCJkYXRhIiwiaW1nVXJsIiwicGFnZU5hbWUiLCJtYXJnaW5Ub3AiLCJ0YWJNYXJnaW4iLCJzY3JvbGxIZWlnaHQiLCJib3hUb3AiLCJoZWFkZXJIZWlnaHQiLCJuYW1lIiwiZ2VuZGVyIiwiaWRjYXJkTnVtYmVyIiwiaWRjYXJkRGF0ZWxpbmUiLCJuYXRpb24iLCJpZGNhcmRGcm9udCIsImtleSIsInVybCIsImlkY2FyZEJhY2siLCJjb21wb25lbnRzIiwiY3VzdG9tSGVhZGVyIiwib25Mb2FkIiwibWV0aG9kcyIsImdldE1hcmdpblRvcCIsImdldFRvcEhlaWdodCIsImNob29zZUltYWdlIiwidW5pIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbnNvbGUiLCJsb2FkaW1nIiwiX3RoaXMiLCJoZWFkZXIiLCJmaWxlUGF0aCIsInRpdGxlIiwiY29udGVudCIsImNvbXBsZXRlIiwicmVzb2x2ZSIsImNvbmZpcm0iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFIQTtBQUNBQSxFQUFFLENBQUNDLGlDQUFpQyxHQUFHQyxtQkFBbUI7QUFHMURDLFVBQVUsQ0FBQ0MsdUJBQUksQ0FBQyxDOzs7Ozs7Ozs7Ozs7O0FDTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1STtBQUN2STtBQUNrRTtBQUNMO0FBQ3NDOzs7QUFHbkc7QUFDMks7QUFDM0ssZ0JBQWdCLG9MQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHFHQUFNO0FBQ1IsRUFBRSw4R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5R0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFzb0IsQ0FBZ0IsMnBCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN1RjFwQjtBQUFBLGVBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztRQUNBQztRQUNBQztNQUNBO01BQ0FDO1FBQ0FGO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FFO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUVBOztFQUNBQztJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFBQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtRQUNBQztVQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBQztnQkFDQUM7a0JBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0E7Z0JBQUEsaUNBQ0E7a0JBQ0FUO29CQUNBVDtvQkFDQW1CO29CQUNBMUI7b0JBQ0F5QjtvQkFDQUw7c0JBQ0E7c0JBQ0E7d0JBQ0FKOzBCQUNBVzt3QkFDQTt3QkFDQTswQkFDQUg7MEJBQ0FBOzRCQUNBbEI7MEJBQ0E7NEJBQ0E7OEJBQ0FrQjs4QkFDQUE7OEJBQ0FBOzhCQUNBQTs0QkFDQTswQkFDQTt3QkFDQTt3QkFDQTswQkFDQUE7MEJBQ0FBOzRCQUNBbEI7MEJBQ0E7NEJBQ0E7OEJBQ0FrQjs0QkFDQTswQkFDQTt3QkFDQTtzQkFDQTt3QkFDQVI7MEJBQ0FXOzBCQUNBQzt3QkFDQTtzQkFDQTtvQkFDQTtvQkFDQUM7c0JBQ0FiO29CQUNBO2tCQUNBO2tCQUNBYztnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQVA7UUFDQTtVQUNBUjtZQUNBVztZQUNBSztVQUNBO1VBQ0FDO1lBQ0FqQjtVQUNBO1FBRUE7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCOzs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQUE7QUFBQTtBQUFBO0FBQWl1QyxDQUFnQiw4ckNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0FydkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJzdWJwa2cvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG4vLyBAdHMtaWdub3JlXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3N1YnBrZy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0NjJlM2Emc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzQ2MmUzYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjNDYyZTNhXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInN1YnBrZy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2F1dGhlbnRpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzQ2MmUzYSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTMtMSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vYXV0aGVudGljYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMy0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9hdXRoZW50aWNhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8Y3VzdG9tSGVhZGVyIDp0aXRsZT1cInBhZ2VOYW1lXCIgOnNob3dCYWNrPVwidHJ1ZVwiIDpoZWFkSGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCI+PC9jdXN0b21IZWFkZXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOm1hcmdpblRvcCsncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveFwiIDpzdHlsZT1cInt0b3A6bWFyZ2luVG9wK3RhYk1hcmdpbisncHgnfVwiPlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyA6c2Nyb2xsLXRvcD1cInNjcm9sbFRvcFwiIHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwic2Nyb2xsLVlcIiBAc2Nyb2xsdG91cHBlcj1cInVwcGVyXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIntoZWlnaHQ6c2Nyb2xsSGVpZ2h0KydweCd9XCIgQHNjcm9sbHRvbG93ZXI9XCJsb3dlclwiIEBzY3JvbGw9XCJzY3JvbGxcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlIGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvd29ya2VyL2ljX2Jhb21pbmdfdGl0bGVfYmcucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQ+5a6e5ZCN6K6k6K+BPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW1nX3dyYXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwbG9hZCBmbGV4IGZsZXhfYnR3ZWVuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cF9pdGVtXCIgQGNsaWNrPVwiY2hvb3NlSW1hZ2UoJ2lkX2NhcmRfZnJvbnQnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaWRjYXJkRnJvbnQudXJsP2lkY2FyZEZyb250LnVybDppbWdVcmwrJy9icm9rZXIvaWNfdmVyaV9mcm9udC5wbmcnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhZGRfaWNvblwiIHYtaWY9XCIhaWRjYXJkRnJvbnQudXJsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL3dvcmtlci9pY19hdXRoX2FkZC5wbmcnXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3RcIj7kuIrkvKDkurrlg4/pnaI8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwX2l0ZW1cIiBAY2xpY2s9XCJjaG9vc2VJbWFnZSgnaWRfY2FyZF9iYWNrJylcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImlkY2FyZEJhY2sudXJsP2lkY2FyZEJhY2sudXJsOmltZ1VybCsnL2Jyb2tlci9pY192ZXJpX2JhY2sucG5nJ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2ljb25cIiB2LWlmPVwiIWlkY2FyZEJhY2sudXJsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL3dvcmtlci9pY19hdXRoX2FkZC5wbmcnXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJib3RcIj7kuIrkvKDlm73lvr3pnaI8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlwc1wiPu+8iOS4iuS8oOWQjuS4i+aWueS/oeaBr+S8muiHquWKqOWhq+WFhe+8jOivt+S7lOe7huaguOWvueOAgu+8iTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZm9fd3JhcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lIGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPuWnk+WQje+8mjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWnk+WQjVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlci1zdHlsZT1cImZvbnQtc2l6ZToyOHJweDtcIiBkaXNhYmxlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0XCI+5oCn5Yir77yaPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZ2VuZGVyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmgKfliKtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXItc3R5bGU9XCJmb250LXNpemU6MjhycHg7XCIgZGlzYWJsZWQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lIGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPuawkeaXj++8mjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hdGlvblwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5rCR5pePXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLXN0eWxlPVwiZm9udC1zaXplOjI4cnB4O1wiIGRpc2FibGVkIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZSBmbGV4IGZsZXgtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRcIj7ouqvku73or4Hlj7fvvJo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJpZGNhcmROdW1iZXJcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpei6q+S7veivgeWPt1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlci1zdHlsZT1cImZvbnQtc2l6ZToyOHJweDtcIiBkaXNhYmxlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0XCI+5pyJ5pWI5pyf77yaPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiaWRjYXJkRGF0ZWxpbmVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeivgeS7tuacieaViOacn1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlci1zdHlsZT1cImZvbnQtc2l6ZToyOHJweDtcIiBkaXNhYmxlZCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5zXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwiY29uZmlybVwiPuaPkOS6pOiupOivgTwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY3VzdG9tSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvY3VzdG9tX2hlYWRlci52dWVcIlxyXG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbWdVcmw6IGFwcC5nbG9iYWxEYXRhLmJhc2VJbWFnZVVybCxcclxuXHRcdFx0XHRwYWdlTmFtZTogXCLlrp7lkI3orqTor4FcIixcclxuXHRcdFx0XHRtYXJnaW5Ub3A6IGFwcC5nbG9iYWxEYXRhLm1hcmdpblRvcCxcclxuXHRcdFx0XHR0YWJNYXJnaW46IGFwcC5nbG9iYWxEYXRhLnRhYk1hcmdpbixcclxuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6IDAsXHJcblx0XHRcdFx0Ym94VG9wOiAwLFxyXG5cdFx0XHRcdGhlYWRlckhlaWdodDogYXBwLmdsb2JhbERhdGEudG9wSGVpZ2h0LFxyXG5cdFx0XHRcdG5hbWU6IFwiXCIsXHJcblx0XHRcdFx0Z2VuZGVyOiBcIlwiLFxyXG5cdFx0XHRcdGlkY2FyZE51bWJlcjogXCJcIixcclxuXHRcdFx0XHRpZGNhcmREYXRlbGluZTogXCJcIixcclxuXHRcdFx0XHRuYXRpb246IFwiXCIsXHJcblx0XHRcdFx0aWRjYXJkRnJvbnQ6IHtcclxuXHRcdFx0XHRcdGtleTogXCJcIixcclxuXHRcdFx0XHRcdHVybDogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aWRjYXJkQmFjazoge1xyXG5cdFx0XHRcdFx0a2V5OiBcIlwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcIlwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Y3VzdG9tSGVhZGVyXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdHRoaXMuc2Nyb2xsSGVpZ2h0ID0gYXBwLmdsb2JhbERhdGEuc3lzdGVtSGVpZ2h0IC0gdGhpcy50YWJNYXJnaW4gLSB0aGlzLm1hcmdpblRvcFxyXG5cdFx0XHQvLyB0aGlzLmdldE1hcmdpblRvcCgpXHJcblx0XHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIFx0X3RoaXMuZ2V0RWxlbWVudEluZm8oKVxyXG5cdFx0XHQvLyBcdF90aGlzLmdldFRvcEhlaWdodCgpXHJcblx0XHRcdC8vIH0sIDUwMClcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRNYXJnaW5Ub3AoZSkge1xyXG5cdFx0XHRcdGxldCBtZW51QnV0dG9uSW5mbyA9IHVuaS5nZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHR0aGlzLm1hcmdpblRvcCA9IG1lbnVCdXR0b25JbmZvLmhlaWdodCArIG1lbnVCdXR0b25JbmZvLnRvcCArIDEwXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFRvcEhlaWdodCgpIHtcclxuXHRcdFx0XHRsZXQgcGVyY2VudCA9IDIwMCAvIDg0NFxyXG5cdFx0XHRcdGxldCBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0XHR0aGlzLmhlYWRlckhlaWdodCA9IE1hdGguZmxvb3Ioc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgKiBwZXJjZW50KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBnZXRFbGVtZW50SW5mbygpIHtcclxuXHRcdFx0Ly8gXHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdC8vIFx0bGV0IHRvcEhlaWdodCA9IDA7XHJcblx0XHRcdC8vIFx0bGV0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHQvLyBcdGxldCBpbmZvID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoXCIudG9wX2FyZWFcIik7XHJcblx0XHRcdC8vIFx0aW5mby5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24oZGF0YSkgeyAvL2RhdGEgLSDlkITnp43lj4LmlbBcclxuXHRcdFx0Ly8gXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdC8vIFx0XHRcdHRvcEhlaWdodCA9IGRhdGEuaGVpZ2h0IC8vIOiOt+WPluWFg+e0oOmrmOW6plxyXG5cdFx0XHQvLyBcdFx0XHRfdGhpcy5ib3hUb3AgPSBfdGhpcy5tYXJnaW5Ub3AgKyBkYXRhLmhlaWdodFxyXG5cdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHQvLyBcdFx0X3RoaXMuc2Nyb2xsSGVpZ2h0ID0gc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgLSBfdGhpcy5ib3hUb3AgLSA1XHJcblx0XHRcdC8vIFx0fSkuZXhlYygpXHJcblxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHRjaG9vc2VJbWFnZSh0eXBlKSB7XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFtcIm9yaWdpbmFsXCIsIFwiY29tcHJlc3NlZFwiXSxcclxuXHRcdFx0XHRcdHNvdXJjZVR5cGU6IFtcImFsYnVtXCIsIFwiY2FtZXJhXCJdLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6XCLkuIrkvKDkuK3vvIzor7fnqI3lkI5cIlxyXG5cdFx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRpbWcodHlwZSwgdGVtcEZpbGVQYXRoc1swXSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgbG9hZGltZyh0eXBlLCBmaWxlUGF0aCkge1xyXG5cdFx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IGhlYWRlciA9IHtcclxuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiBcImJlYXJlciBcIiArIHVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpLFxyXG5cdFx0XHRcdFx0XCJhY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0XHRcImNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGFwcC5nbG9iYWxEYXRhLmJhc2VVcmwgKyBcIi93b3JrZXIvdXBsb2FkL2ltYWdlP3R5cGU9XCIgKyB0eXBlLFxyXG5cdFx0XHRcdFx0XHRmaWxlUGF0aDogZmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiZmlsZVwiLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXNwKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLlm77niYfkuIrkvKDmiJDlip9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlID09IFwiaWRfY2FyZF9mcm9udFwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmlkY2FyZEZyb250ID0gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy4kcmVxdWVzdChcIi93b3JrZXIvb2NyL2lkLWNhcmRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleTogcmVzcG9uc2UuZGF0YS5rZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgXCJQT1NUXCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMubmFtZSA9IHJlcy5kYXRhLmZyb250Lm5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmdlbmRlciA9IHJlcy5kYXRhLmZyb250LnNleFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuaWRjYXJkTnVtYmVyID0gcmVzLmRhdGEuZnJvbnQuaWRfbnVtYmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5uYXRpb24gPSByZXMuZGF0YS5mcm9udC5ldGhuaWNpdHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZSA9PSBcImlkX2NhcmRfYmFja1wiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmlkY2FyZEJhY2sgPSByZXNwb25zZS5kYXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLiRyZXF1ZXN0KFwiL3dvcmtlci9vY3IvaWQtY2FyZFwiLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5OiByZXNwb25zZS5kYXRhLmtleVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5pZGNhcmREYXRlbGluZSA9IHJlcy5kYXRhLmJhY2sudmFsaWRfcGVyaW9kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5LiK5Lyg5aSx6LSlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlc3BvbnNlLm1zZ1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShfdGhpcy5yZXBvbnNlZmlsZXMpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29uZmlybSgpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRcImdlbmRlclwiOiB0aGlzLmdlbmRlciA9PSBcIueUt1wiID8gXCJtYWxlXCIgOiBcImZlbWFsZVwiLFxyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IHRoaXMubmFtZSxcclxuXHRcdFx0XHRcdFwiZXRobmljaXR5XCI6IHRoaXMubmF0aW9uLFxyXG5cdFx0XHRcdFx0XCJpZF9jYXJkX251bWJlclwiOiB0aGlzLmlkY2FyZE51bWJlcixcclxuXHRcdFx0XHRcdFwiaWRfY2FyZF9mcm9udFwiOiB0aGlzLmlkY2FyZEZyb250LmtleSxcclxuXHRcdFx0XHRcdFwiaWRfY2FyZF9iYWNrXCI6IHRoaXMuaWRjYXJkQmFjay5rZXksXHJcblx0XHRcdFx0XHRcImlkX2NhcmRfdmFsaWRfcGVyaW9kXCI6IHRoaXMuaWRjYXJkRGF0ZWxpbmVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3RoaXMuJHJlcXVlc3QoXCIvd29ya2VyL3Byb2ZpbGVcIiwgZGF0YSwgXCJQT1NUXCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaPkOS6pOaIkOWKn1wiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdFx0XHRcdH0sIDIwMDApXHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC50b3BfYXJlYSB7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gOTZycHgpO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogNDhycHg7XHJcblxyXG5cdFx0LnRhYnMge1xyXG5cdFx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogODhycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRcdGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdFx0cGFkZGluZzogMCA0MHJweDtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblxyXG5cdFx0XHQudGFiIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjOUU5RTlFO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRcdCYuYWN0aXZlIHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMyMTZGRjk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmLmZpbmlzaGVkIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ji5hY3RpdmU6OmFmdGVyIHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHR3aWR0aDogMjhycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwcnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKCRiYWNrLWdyb3VuZC11cmwrXCIvYnJva2VyL2Fycm93X2Rvd25feWVsbG93LnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGJvdHRvbTogOHJweDtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzNHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogMzJycHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC5ib3gge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDk2cnB4KTtcclxuXHRcdGxlZnQ6IDQ4cnB4O1xyXG5cdFx0ei1pbmRleDogMztcclxuXHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGJhY2tncm91bmQ6ICNGM0YzRjU7XHJcblx0fVxyXG5cclxuXHQuYnRucyB7XHJcblx0XHRtYXJnaW4tdG9wOiA2MHJweDtcclxuXHJcblx0XHQuYnRuIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA4OHJweDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMyMTZGRjk7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRcdGNvbG9yOiAjMjE2RkY5O1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lml0ZW0ge1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblxyXG5cdFx0LnRpdGxlIHtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi93b3JrZXIvaWNfZGV0YWlsX3RpdGxlX2JnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRjb2xvcjogIzMzMztcclxuXHJcblx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDhycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuaW1nX3dyYXAge1xyXG5cdFx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblxyXG5cdFx0XHQudGlwcyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0XHRjb2xvcjogI0REMDAwMDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMzRycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaW5mb193cmFwIHtcclxuXHRcdFx0XHQubGluZSB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI0RGREZERjtcclxuXHJcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC50aXQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTQwcnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzVBNUE1QTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQudGV4dCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBycHgpO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMzMzMztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5nZXRfY29kZSB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMyMTZGRjk7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDk5O1xyXG5cclxuXHRcdFx0XHRcdFx0XHQmLmRpc2FibGVkIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjY2NjO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnVwbG9hZCB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cclxuXHRcdFx0XHQudXBfaXRlbSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDklO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudG9wIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDI4cnB4IDA7XHJcblxyXG5cdFx0XHRcdFx0Jj5pbWFnZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA1NSU7XHJcblx0XHRcdFx0XHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LmFkZF9pY29uIHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblx0XHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmJvdCB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDUycnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDUycnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNDcsIDE4OCwgNSwgLjEpO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9hdXRoZW50aWNhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzQ2MmUzYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vYXV0aGVudGljYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2M0NjJlM2EmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTcxNTQxNzM5Njc5NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJGOi9hcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=