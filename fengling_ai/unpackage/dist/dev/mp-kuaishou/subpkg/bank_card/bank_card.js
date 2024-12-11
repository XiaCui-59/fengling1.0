(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/bank_card/bank_card"],{

/***/ 124:
/*!***************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/main.js?{"page":"subpkg%2Fbank_card%2Fbank_card"} ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _bank_card = _interopRequireDefault(__webpack_require__(/*! ./subpkg/bank_card/bank_card.vue */ 125));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_bank_card.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 125:
/*!********************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank_card.vue?vue&type=template&id=55609262&scoped=true& */ 126);
/* harmony import */ var _bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank_card.vue?vue&type=script&lang=js& */ 128);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank_card.vue?vue&type=style&index=0&id=55609262&lang=scss&scoped=true& */ 130);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55609262",
  null,
  false,
  _bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/bank_card/bank_card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/*!***************************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=template&id=55609262&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank_card.vue?vue&type=template&id=55609262&scoped=true& */ 127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_template_id_55609262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 127:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=template&id=55609262&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 128:
/*!*********************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank_card.vue?vue&type=script&lang=js& */ 129);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      pageName: "添加银行卡",
      marginTop: 0,
      scrollHeight: 0,
      boxTop: 0,
      headerHeight: 0,
      hasBank: false,
      showModify: false,
      bank_name: "",
      bank_num: "",
      name: "",
      info: {
        "account_holder_name": "",
        "bank_card_front_image": "",
        "bank_card_number": "",
        "bank_name": ""
      },
      bankCard: {
        key: "",
        url: ""
      }
    };
  },
  components: {
    customHeader: customHeader
  },
  onLoad: function onLoad() {
    var _this2 = this;
    var _this = this;
    this.getMarginTop();
    setTimeout(function () {
      _this.getElementInfo();
      _this.getTopHeight();
    }, 500);
    this.$request("/worker/have/bank").then(function (res) {
      if (res.code == 0) {
        if (res.data) {
          // 有银行卡
          _this2.hasBank = true;
          _this2.pageName = "银行卡信息";
          _this2.getInfo();
        } else {
          // 无银行卡
          _this2.pageName = "添加银行卡";
          _this2.hasBank = false;
        }
      }
    });
    this.name = uni.getStorageSync("userInfo").name;
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
    getElementInfo: function getElementInfo() {
      var _this = this;
      var topHeight = 0;
      var systemInfo = uni.getSystemInfoSync();
      var info = uni.createSelectorQuery().select(".top_area");
      info.boundingClientRect(function (data) {
        //data - 各种参数
        if (data) {
          topHeight = data.height; // 获取元素高度
          _this.boxTop = _this.marginTop + data.height;
        }
        _this.scrollHeight = systemInfo.screenHeight - _this.boxTop - 5;
      }).exec();
    },
    prevImage: function prevImage(url) {
      var arr = [];
      arr[0] = url;
      uni.previewImage({
        urls: arr,
        current: 0
      });
    },
    toModify: function toModify() {
      this.showModify = true;
    },
    cancel: function cancel() {
      this.showModify = false;
    },
    chooseImage: function chooseImage(type) {
      var _this3 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          // uni.showLoading({
          // 	title:"上传中，请稍后"
          // })
          _this3.loadimg(type, tempFilePaths[0]);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    loadimg: function loadimg(type, filePath) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this, header;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this = _this4;
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
                        _this.bankCard = response.data;
                        _this.$request("/worker/ocr/bank-card", {
                          key: response.data.key
                        }, "POST").then(function (res) {
                          if (res.code == 0) {
                            _this.bank_name = res.data.bank_name;
                            _this.bank_num = res.data.card_number;
                          }
                        });
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
    getInfo: function getInfo() {
      var _this5 = this;
      this.$request("/worker/bank-account").then(function (res) {
        if (res.code == 0) {
          _this5.info = res.data;
        }
      });
    },
    confirm: function confirm() {
      var _this6 = this;
      var data = {
        "bank_name": this.bank_name,
        "bank_card_number": this.bank_num,
        "account_holder_name": this.name,
        "bank_card_front_image": this.bankCard.key
      };
      this.$request("/worker/bank-account", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "保存成功",
            duration: 2000
          });
          _this6.hasBank = true;
          _this6.showModify = false;
          _this6.getInfo();
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 130:
/*!******************************************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=style&index=0&id=55609262&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bank_card.vue?vue&type=style&index=0&id=55609262&lang=scss&scoped=true& */ 131);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bank_card_vue_vue_type_style_index_0_id_55609262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 131:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/subpkg/bank_card/bank_card.vue?vue&type=style&index=0&id=55609262&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[124,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWU/N2I2MSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWU/NjFlMCIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWU/ZjgyYSIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmdlbmc1LjExL3JlbGVhc2UvZW1wbG95ZWVfbWluaXByb2dyYW1lX25ldy9zdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWU/NmQzZCIsInVuaS1hcHA6Ly8vc3VicGtnL2JhbmtfY2FyZC9iYW5rX2NhcmQudnVlIiwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3N1YnBrZy9iYW5rX2NhcmQvYmFua19jYXJkLnZ1ZT80MDU0Iiwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3N1YnBrZy9iYW5rX2NhcmQvYmFua19jYXJkLnZ1ZT81MDZkIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIiwiZGF0YSIsImltZ1VybCIsInBhZ2VOYW1lIiwibWFyZ2luVG9wIiwic2Nyb2xsSGVpZ2h0IiwiYm94VG9wIiwiaGVhZGVySGVpZ2h0IiwiaGFzQmFuayIsInNob3dNb2RpZnkiLCJiYW5rX25hbWUiLCJiYW5rX251bSIsIm5hbWUiLCJpbmZvIiwiYmFua0NhcmQiLCJrZXkiLCJ1cmwiLCJjb21wb25lbnRzIiwiY3VzdG9tSGVhZGVyIiwib25Mb2FkIiwic2V0VGltZW91dCIsIl90aGlzIiwibWV0aG9kcyIsImdldE1hcmdpblRvcCIsImdldFRvcEhlaWdodCIsImdldEVsZW1lbnRJbmZvIiwidG9wSGVpZ2h0IiwicHJldkltYWdlIiwiYXJyIiwidW5pIiwidXJscyIsImN1cnJlbnQiLCJ0b01vZGlmeSIsImNhbmNlbCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbnNvbGUiLCJsb2FkaW1nIiwiaGVhZGVyIiwiZmlsZVBhdGgiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21wbGV0ZSIsInJlc29sdmUiLCJnZXRJbmZvIiwiY29uZmlybSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBaUMsR0FBR0MsbUJBQW1CO0FBRzFEQyxVQUFVLENBQUNDLGtCQUFJLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ0xoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUNzQzs7O0FBRzlGO0FBQzJLO0FBQzNLLGdCQUFnQixvTEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBaW9CLENBQWdCLHNwQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0ZycEI7QUFBQSxlQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUE7SUFDQTtJQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBWjtRQUFBO1FBQ0E7VUFDQWE7VUFDQUw7UUFDQTtRQUNBQTtNQUNBO0lBRUE7SUFDQU07TUFDQTtNQUNBQztNQUNBQztRQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0FMO1FBQ0FNO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNBO1FBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0FwQjtnQkFDQXFCO2tCQUNBO2tCQUNBO2tCQUNBO2dCQUNBO2dCQUFBLGlDQUNBO2tCQUNBYjtvQkFDQWI7b0JBQ0EyQjtvQkFDQS9CO29CQUNBOEI7b0JBQ0FKO3NCQUNBO3NCQUNBO3dCQUNBVDswQkFDQWU7d0JBQ0E7d0JBQ0F2Qjt3QkFDQUE7MEJBQ0FOO3dCQUNBOzBCQUNBOzRCQUNBTTs0QkFDQUE7MEJBQ0E7d0JBQ0E7c0JBQ0E7d0JBQ0FROzBCQUNBZTswQkFDQUM7d0JBQ0E7c0JBQ0E7b0JBQ0E7b0JBQ0FDO3NCQUNBakI7b0JBQ0E7a0JBQ0E7a0JBQ0FrQjtnQkFDQTtjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQXBCO1lBQ0FlO1lBQ0FNO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkI7Ozs7Ozs7Ozs7Ozs7QUN6UUE7QUFBQTtBQUFBO0FBQUE7QUFBNHRDLENBQWdCLHlyQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWh2QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InN1YnBrZy9iYW5rX2NhcmQvYmFua19jYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuLy8gQHRzLWlnbm9yZVxud3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9zdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9iYW5rX2NhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1NjA5MjYyJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmFua19jYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYmFua19jYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9iYW5rX2NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTU2MDkyNjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NTYwOTI2MlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzdWJwa2cvYmFua19jYXJkL2JhbmtfY2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE3LTAhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZS5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2JhbmtfY2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTU2MDkyNjImc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2JhbmtfY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2JhbmtfY2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8Y3VzdG9tSGVhZGVyIDp0aXRsZT1cInBhZ2VOYW1lXCIgOnNob3dCYWNrPVwidHJ1ZVwiIDpoZWFkSGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCI+PC9jdXN0b21IZWFkZXI+XHJcblx0XHQ8IS0tIOacqua3u+WKoCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYm94XCIgdi1pZj1cIiFoYXNCYW5rIHx8IHNob3dNb2RpZnlcIiA6c3R5bGU9XCJ7dG9wOm1hcmdpblRvcCsncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImluZm9fYXJlYVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvd29ya2VyL2ljX2Jhb21pbmdfdGl0bGVfYmcucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dD7mt7vliqDpk7booYzljaE8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidXBsb2FkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmO1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1cF9pdGVtXCIgQGNsaWNrPVwiY2hvb3NlSW1hZ2UoJ2JhbmtfY2FyZF9mcm9udCcpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidG9wXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJiYW5rQ2FyZC51cmw/YmFua0NhcmQudXJsOmltZ1VybCsnL2Jyb2tlci9pY192ZXJpX2Zyb250LnBuZydcIiBtb2RlPVwid2lkdGhGaXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkX2ljb25cIiB2LWlmPVwiIWJhbmtDYXJkLnVybFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpbWdVcmwrJy93b3JrZXIvaWNfYXV0aF9hZGQucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm90XCI+5LiK5Lyg6ZO26KGM5Y2h54Wn54mHPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpcHNcIj7vvIjkuIrkvKDlkI7kuIvmlrnkv6Hmga/kvJroh6rliqjor4bliKvvvIzor7fku5Tnu4bmoLjlr7njgILvvIk8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0XCI+6ZO26KGM5Y2h5Y+377yaPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0X3dyYXBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiYmFua19udW1cIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemTtuihjOWNoeWPt1wiIGRpc2FibGVkIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZSBmbGV4IGZsZXgtc3RhcnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRcIj7pk7booYzlkI3np7DvvJo8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW5wdXRfd3JhcFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJiYW5rX25hbWVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeW8gOaIt+ihjOWQjeensFwiIGRpc2FibGVkIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJsaW5lIGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPuWnk+WQje+8mjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dF93cmFwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeW8gOaIt+S6uuWnk+WQjVwiIGRpc2FibGVkLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG5zIGZsZXggZmxleF9idHdlZW5cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0biBjYW5jZWxcIiBAY2xpY2s9XCJjYW5jZWxcIiB2LWlmPVwic2hvd01vZGlmeVwiPuaaguS4jeS/ruaUuTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIEBjbGljaz1cImNvbmZpcm1cIiA6c3R5bGU9XCJ7d2lkdGg6c2hvd01vZGlmeT8nNDklJzonMTAwJSd9XCI+XHJcblx0XHRcdFx0XHR7e3Nob3dNb2RpZnk/J+ehruiupOS/ruaUuSc6J+S/neWtmOmTtuihjOWNoeS/oeaBryd9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDlt7Lmt7vliqAgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJveFwiIHYtaWY9XCJoYXNCYW5rICYmICFzaG93TW9kaWZ5XCIgOnN0eWxlPVwie3RvcDptYXJnaW5Ub3ArJ3B4J31cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbmZvX2FyZWFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL3dvcmtlci9pY19iYW9taW5nX3RpdGxlX2JnLnBuZydcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQ+5b2T5YmN6ZO26KGM5Y2hPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwbG9hZFwiIHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZjtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXBfaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW5mby5iYW5rX2NhcmRfZnJvbnRfaW1hZ2VcIiBtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicHJldkltYWdlKGluZm8uYmFua19jYXJkX2Zyb250X2ltYWdlKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0XCI+6ZO26KGM5Y2h5Y+3PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0X3dyYXAgbm9ib3JkZXJcIj57e2luZm8uYmFua19jYXJkX251bWJlcn19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lIGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPumTtuihjOWQjeensDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dF93cmFwIG5vYm9yZGVyXCI+e3tpbmZvLmJhbmtfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4LXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0XCI+5aeT5ZCNPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImlucHV0X3dyYXAgbm9ib3JkZXJcIj57e2luZm8uYWNjb3VudF9ob2xkZXJfbmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG5cIiBAY2xpY2s9XCJ0b01vZGlmeVwiPuS/ruaUuTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBjdXN0b21IZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9jdXN0b21faGVhZGVyLnZ1ZVwiXHJcblx0Y29uc3QgYXBwID0gZ2V0QXBwKClcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGltZ1VybDogYXBwLmdsb2JhbERhdGEuYmFzZUltYWdlVXJsLFxyXG5cdFx0XHRcdHBhZ2VOYW1lOiBcIua3u+WKoOmTtuihjOWNoVwiLFxyXG5cdFx0XHRcdG1hcmdpblRvcDogMCxcclxuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6IDAsXHJcblx0XHRcdFx0Ym94VG9wOiAwLFxyXG5cdFx0XHRcdGhlYWRlckhlaWdodDogMCxcclxuXHRcdFx0XHRoYXNCYW5rOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93TW9kaWZ5OiBmYWxzZSxcclxuXHRcdFx0XHRiYW5rX25hbWU6IFwiXCIsXHJcblx0XHRcdFx0YmFua19udW06IFwiXCIsXHJcblx0XHRcdFx0bmFtZTogXCJcIixcclxuXHRcdFx0XHRpbmZvOiB7XHJcblx0XHRcdFx0XHRcImFjY291bnRfaG9sZGVyX25hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcdFwiYmFua19jYXJkX2Zyb250X2ltYWdlXCI6IFwiXCIsXHJcblx0XHRcdFx0XHRcImJhbmtfY2FyZF9udW1iZXJcIjogXCJcIixcclxuXHRcdFx0XHRcdFwiYmFua19uYW1lXCI6IFwiXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJhbmtDYXJkOiB7XHJcblx0XHRcdFx0XHRrZXk6IFwiXCIsXHJcblx0XHRcdFx0XHR1cmw6IFwiXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGN1c3RvbUhlYWRlclxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0bGV0IF90aGlzID0gdGhpc1xyXG5cdFx0XHR0aGlzLmdldE1hcmdpblRvcCgpXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3RoaXMuZ2V0RWxlbWVudEluZm8oKVxyXG5cdFx0XHRcdF90aGlzLmdldFRvcEhlaWdodCgpXHJcblx0XHRcdH0sIDUwMClcclxuXHRcdFx0dGhpcy4kcmVxdWVzdChcIi93b3JrZXIvaGF2ZS9iYW5rXCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5kYXRhKSB7XHJcblx0XHRcdFx0XHRcdC8vIOaciemTtuihjOWNoVxyXG5cdFx0XHRcdFx0XHR0aGlzLmhhc0JhbmsgPSB0cnVlXHJcblx0XHRcdFx0XHRcdHRoaXMucGFnZU5hbWUgPSBcIumTtuihjOWNoeS/oeaBr1wiXHJcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SW5mbygpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDml6Dpk7booYzljaFcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlTmFtZSA9IFwi5re75Yqg6ZO26KGM5Y2hXCJcclxuXHRcdFx0XHRcdFx0dGhpcy5oYXNCYW5rID0gZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMubmFtZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJJbmZvXCIpLm5hbWVcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldE1hcmdpblRvcChlKSB7XHJcblx0XHRcdFx0bGV0IG1lbnVCdXR0b25JbmZvID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdFx0XHRcdHRoaXMubWFyZ2luVG9wID0gbWVudUJ1dHRvbkluZm8uaGVpZ2h0ICsgbWVudUJ1dHRvbkluZm8udG9wICsgMTBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VG9wSGVpZ2h0KCkge1xyXG5cdFx0XHRcdGxldCBwZXJjZW50ID0gMjAwIC8gODQ0XHJcblx0XHRcdFx0bGV0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHRcdHRoaXMuaGVhZGVySGVpZ2h0ID0gTWF0aC5mbG9vcihzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAqIHBlcmNlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEVsZW1lbnRJbmZvKCkge1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdG9wSGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRsZXQgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdFx0bGV0IGluZm8gPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdChcIi50b3BfYXJlYVwiKTtcclxuXHRcdFx0XHRpbmZvLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbihkYXRhKSB7IC8vZGF0YSAtIOWQhOenjeWPguaVsFxyXG5cdFx0XHRcdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0dG9wSGVpZ2h0ID0gZGF0YS5oZWlnaHQgLy8g6I635Y+W5YWD57Sg6auY5bqmXHJcblx0XHRcdFx0XHRcdF90aGlzLmJveFRvcCA9IF90aGlzLm1hcmdpblRvcCArIGRhdGEuaGVpZ2h0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRfdGhpcy5zY3JvbGxIZWlnaHQgPSBzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAtIF90aGlzLmJveFRvcCAtIDVcclxuXHRcdFx0XHR9KS5leGVjKClcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZJbWFnZSh1cmwpIHtcclxuXHRcdFx0XHRsZXQgYXJyID0gW11cclxuXHRcdFx0XHRhcnJbMF0gPSB1cmxcclxuXHRcdFx0XHR1bmkucHJldmlld0ltYWdlKHtcclxuXHRcdFx0XHRcdHVybHM6IGFycixcclxuXHRcdFx0XHRcdGN1cnJlbnQ6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b01vZGlmeSgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dNb2RpZnkgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbmNlbCgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dNb2RpZnkgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaG9vc2VJbWFnZSh0eXBlKSB7XHJcblx0XHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRcdGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFtcIm9yaWdpbmFsXCIsIFwiY29tcHJlc3NlZFwiXSxcclxuXHRcdFx0XHRcdHNvdXJjZVR5cGU6IFtcImFsYnVtXCIsIFwiY2FtZXJhXCJdLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHM7XHJcblx0XHRcdFx0XHRcdC8vIHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6XCLkuIrkvKDkuK3vvIzor7fnqI3lkI5cIlxyXG5cdFx0XHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRpbWcodHlwZSwgdGVtcEZpbGVQYXRoc1swXSlcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgbG9hZGltZyh0eXBlLCBmaWxlUGF0aCkge1xyXG5cdFx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IGhlYWRlciA9IHtcclxuXHRcdFx0XHRcdFwiQXV0aG9yaXphdGlvblwiOiBcImJlYXJlciBcIiArIHVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpLFxyXG5cdFx0XHRcdFx0XCJhY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcblx0XHRcdFx0XHRcImNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGFwcC5nbG9iYWxEYXRhLmJhc2VVcmwgKyBcIi93b3JrZXIvdXBsb2FkL2ltYWdlP3R5cGU9XCIgKyB0eXBlLFxyXG5cdFx0XHRcdFx0XHRmaWxlUGF0aDogZmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiZmlsZVwiLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXNwKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLlm77niYfkuIrkvKDmiJDlip9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmJhbmtDYXJkID0gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuJHJlcXVlc3QoXCIvd29ya2VyL29jci9iYW5rLWNhcmRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk6IHJlc3BvbnNlLmRhdGEua2V5XHJcblx0XHRcdFx0XHRcdFx0XHR9LCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmJhbmtfbmFtZSA9IHJlcy5kYXRhLmJhbmtfbmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmJhbmtfbnVtID0gcmVzLmRhdGEuY2FyZF9udW1iZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuS4iuS8oOWksei0pVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXNwb25zZS5tc2dcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJlc29sdmUoX3RoaXMucmVwb25zZWZpbGVzKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEluZm8oKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVxdWVzdChcIi93b3JrZXIvYmFuay1hY2NvdW50XCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5mbyA9IHJlcy5kYXRhXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29uZmlybSgpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwiYmFua19uYW1lXCI6IHRoaXMuYmFua19uYW1lLFxyXG5cdFx0XHRcdFx0XCJiYW5rX2NhcmRfbnVtYmVyXCI6IHRoaXMuYmFua19udW0sXHJcblx0XHRcdFx0XHRcImFjY291bnRfaG9sZGVyX25hbWVcIjogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdFx0XCJiYW5rX2NhcmRfZnJvbnRfaW1hZ2VcIjogdGhpcy5iYW5rQ2FyZC5rZXlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kcmVxdWVzdChcIi93b3JrZXIvYmFuay1hY2NvdW50XCIsIGRhdGEsIFwiUE9TVFwiKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLkv53lrZjmiJDlip9cIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLmhhc0JhbmsgPSB0cnVlXHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGlmeSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuZ2V0SW5mbygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gOTZycHgpO1xyXG5cdFx0bGVmdDogNDhycHg7XHJcblx0XHR6LWluZGV4OiAzO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRcdC5pbmZvX2FyZWEge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogNDBycHg7XHJcblx0XHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZycHg7XHJcblx0XHR9XHJcblxyXG5cdFx0LnRpdGxlIHtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi93b3JrZXIvaWNfZGV0YWlsX3RpdGxlX2JnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRjb2xvcjogIzMzMztcclxuXHJcblx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHR3aWR0aDogMzJycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAzMnJweDtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDhycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQudXBsb2FkIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0XHQudXBfaXRlbSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudG9wIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDI4cnB4IDA7XHJcblxyXG5cdFx0XHRcdCY+aW1hZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDU1JTtcclxuXHRcdFx0XHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYWRkX2ljb24ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblx0XHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5ib3Qge1xyXG5cdFx0XHRcdGhlaWdodDogNTJycHg7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUycnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMzMsIDExMSwgMjQ5LCAuMSk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC50aXBzIHtcclxuXHRcdFx0Y29sb3I6ICNERDAwMDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdHBhZGRpbmc6IDAgNDBycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHR9XHJcblxyXG5cdFx0Lml0ZW0ge1xyXG5cdFx0XHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiA0MHJweDtcclxuXHRcdH1cclxuXHJcblx0XHQuYnRucyB7XHJcblx0XHRcdC5idG4ge1xyXG5cdFx0XHRcdHdpZHRoOiA0OSU7XHJcblxyXG5cdFx0XHRcdCYuY2FuY2VsIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdFx0XHRjb2xvcjogIzIxNkZGOTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5saW5lIHtcclxuXHRcdGhlaWdodDogODhycHg7XHJcblx0XHRsaW5lLWhlaWdodDogODhycHg7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjREZERkRGO1xyXG5cclxuXHRcdC50aXQge1xyXG5cdFx0XHRjb2xvcjogIzVBNUE1QTtcclxuXHRcdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdH1cclxuXHJcblx0XHQuaW5wdXRfd3JhcCB7XHJcblx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxNTBycHgpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Y29sb3I6ICMzMzMzMzM7XHJcblxyXG5cdFx0XHQmLmlucHV0X2NhcmQge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMjUwcnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcnB4IDAgNjBycHggMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lml0ZW0ge1xyXG5cdFx0XHRcdGhlaWdodDogMjUwcnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHRcdFx0Jj5pbWFnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiA1JTtcclxuXHRcdFx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHRcdFx0XHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmPi5zaG93IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kZWxlIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogMTZycHg7XHJcblx0XHRcdFx0XHRyaWdodDogMTZycHg7XHJcblx0XHRcdFx0XHR3aWR0aDogMjhycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cclxuXHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDI4cnB4O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRleHQge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMyNzlDRjQ7XHJcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cnB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhycHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnRuIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA4OHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4OHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQ6ICMyMTZGRjk7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjMjE2RkY5O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDFweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0XHRtYXJnaW4tdG9wOiA2MHJweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9iYW5rX2NhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTU2MDkyNjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2JhbmtfY2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NTYwOTI2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzE1NDE1OTg3NjczXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkY6L2FwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==