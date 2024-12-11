(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ 46:
/*!******************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 47));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 47:
/*!***********************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c&scoped=true& */ 48);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 52);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b237504c",
  null,
  false,
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/*!******************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c&scoped=true& */ 49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 49:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 50:
/*!************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 51);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 51:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();
var _default = {
  data: function data() {
    return {
      showMask: false,
      imgUrl: app.globalData.baseImageUrl,
      policyStatus: false,
      showOtherLogin: false,
      mobile: "",
      veri_code: "",
      password: "",
      currentTab: 0,
      getPhoneData: {},
      canSend: true,
      tipsText: "发送验证码",
      headHeight: app.globalData.loginHeadHeight,
      marginTop: app.globalData.marginTop,
      titleHeight: 0,
      headTop: 0,
      boxHeight: 0,
      loginAreaTop: app.globalData.loginAreaTop,
      btnBottom: app.globalData.btnBottom
    };
  },
  onLoad: function onLoad(param) {
    var _this = this;
    var menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.titleHeight = menuButtonInfo.height;
    this.headTop = menuButtonInfo.top;
    this.boxHeight = app.globalData.systemHeight - this.loginAreaTop - this.btnBottom;
  },
  methods: {
    showPolicy: function showPolicy() {
      this.showMask = true;
    },
    closeMask: function closeMask() {
      this.showMask = false;
    },
    changeTab: function changeTab(index) {
      this.currentTab = index;
    },
    checkPolicy: function checkPolicy() {
      this.policyStatus = !this.policyStatus;
    },
    chooseLoginMethod: function chooseLoginMethod() {
      this.showOtherLogin = !this.showOtherLogin;
    },
    checkTab: function checkTab(index) {
      this.currentTab = index;
    },
    handlePolicy: function handlePolicy() {
      // uni.navigateTo({
      // 	url:"/subpkg/work_detail/work_detail"
      // })
      if (!this.policyStatus) {
        uni.showToast({
          title: "请先勾选隐私协议",
          icon: "none",
          duration: 2000
        });
        return false;
      } else {
        return true;
      }
    },
    getOpenId: function getOpenId() {
      var _this2 = this;
      var _this = this;
      return new Promise(function (resolve) {
        uni.login({
          success: function success(res) {
            if (res.errMsg == 'login:ok') {
              var url = "";
              url = "/auth/worker/kuaishou/openid";
              _this2.$request(url, {
                code: res.code
              }, "POST").then(function (resp) {
                if (resp.code == 0) {
                  resolve(resp.data.open_id);
                }
              });
            }
          },
          fail: function fail() {
            uni.showModal({
              title: "登录失败",
              content: "授权登录失败，将无法使用部分功能",
              showCancel: false
            });
          }
        });
      });
    },
    getPhoneNumber: function getPhoneNumber(e) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var url, _this;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this3.handlePolicy()) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return");
              case 2:
                url = "";
                _this = _this3;
                console.log(e, "getPhoneNumber");
                _context.next = 7;
                return _this3.getOpenId();
              case 7:
                _this3.getPhoneData.open_id = _context.sent;
                uni.setStorage({
                  key: "openid",
                  data: _this3.getPhoneData.open_id
                });
                console.log(_this3.getPhoneData);
                if (e.detail.errMsg == 'getPhoneNumber:ok') {
                  _this3.getPhoneData.encrypted_data = e.detail.encryptedData;
                  _this3.getPhoneData.iv = e.detail.iv;
                  url = "/auth/worker/kuaishou/login";
                  _this.$request(url, _this3.getPhoneData, "POST").then(function (resp) {
                    if (resp.code == 0) {
                      uni.showToast({
                        title: "授权成功"
                      });
                      uni.setStorageSync("token", resp.data);
                      uni.navigateBack();
                    }
                  });
                }
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getMessageCode: function getMessageCode() {
      var _this4 = this;
      var _this = this;
      if (!this.canSend) {
        uni.showModal({
          title: "验证码已发送，请稍后重试",
          showCancel: false
        });
        return;
      }
      var data = {
        mobile: this.mobile
      };
      this.$request("/auth/send-sms-verify-code", data, "POST").then(function (res) {
        if (res.code == 0) {
          _this4.canSend = false;
          var count = 60;
          _this4.tipsText = count + "s";
          var t = setInterval(function () {
            if (count > 0) {
              count--;
              _this.tipsText = count + "s";
            } else {
              _this.canSend = true;
              _this.tipsText = "重新获取";
              clearInterval(t);
            }
          }, 1000);
        }
      });
    },
    codeLogin: function codeLogin() {
      var _this = this;
      if (!this.handlePolicy()) {
        return;
      }
      var data = {
        "mobile": this.mobile,
        "sms_verify_code": this.veri_code
      };
      this.$request("/auth/worker/login/sms", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "登录成功",
            duration: 2000
          });
          uni.setStorageSync("token", res.data.token);
          uni.navigateBack();
          // uni.switchTab({
          // 	url: "/pages/index/index"
          // })
        }
      });
    },
    passwordLogin: function passwordLogin() {
      var _this = this;
      if (!this.handlePolicy()) {
        return;
      }
      var data = {
        "mobile": this.mobile,
        "password": this.password
      };
      this.$request("/auth/worker/login/password", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "登录成功",
            duration: 2000
          });
          uni.setStorageSync("token", res.data.token);
          uni.navigateBack();
          // uni.switchTab({
          // 	url: "/pages/index/index"
          // })
        }
      });
    },
    back: function back() {
      uni.switchTab({
        url: "/pages/index/index"
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 52:
/*!*********************************************************************************************************************************************!*\
  !*** E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 53);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/langeng5.11/release/employee_miniprograme_new/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[46,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3BhZ2VzL2xvZ2luL2xvZ2luLnZ1ZT9kMzc0Iiwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3BhZ2VzL2xvZ2luL2xvZ2luLnZ1ZT9hNTEyIiwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZ2VuZzUuMTEvcmVsZWFzZS9lbXBsb3llZV9taW5pcHJvZ3JhbWVfbmV3L3BhZ2VzL2xvZ2luL2xvZ2luLnZ1ZT81Zjc3IiwidW5pLWFwcDovLy9wYWdlcy9sb2dpbi9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL0U6L+mhueebruaWh+S7ti9sYW5nZW5nNS4xMS9yZWxlYXNlL2VtcGxveWVlX21pbmlwcm9ncmFtZV9uZXcvcGFnZXMvbG9naW4vbG9naW4udnVlPzBmYzgiLCJ3ZWJwYWNrOi8vL0U6L+mhueebruaWh+S7ti9sYW5nZW5nNS4xMS9yZWxlYXNlL2VtcGxveWVlX21pbmlwcm9ncmFtZV9uZXcvcGFnZXMvbG9naW4vbG9naW4udnVlP2IzMGIiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiLCJkYXRhIiwic2hvd01hc2siLCJpbWdVcmwiLCJwb2xpY3lTdGF0dXMiLCJzaG93T3RoZXJMb2dpbiIsIm1vYmlsZSIsInZlcmlfY29kZSIsInBhc3N3b3JkIiwiY3VycmVudFRhYiIsImdldFBob25lRGF0YSIsImNhblNlbmQiLCJ0aXBzVGV4dCIsImhlYWRIZWlnaHQiLCJtYXJnaW5Ub3AiLCJ0aXRsZUhlaWdodCIsImhlYWRUb3AiLCJib3hIZWlnaHQiLCJsb2dpbkFyZWFUb3AiLCJidG5Cb3R0b20iLCJvbkxvYWQiLCJtZXRob2RzIiwic2hvd1BvbGljeSIsImNsb3NlTWFzayIsImNoYW5nZVRhYiIsImNoZWNrUG9saWN5IiwiY2hvb3NlTG9naW5NZXRob2QiLCJjaGVja1RhYiIsImhhbmRsZVBvbGljeSIsInVuaSIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0T3BlbklkIiwic3VjY2VzcyIsInVybCIsImNvZGUiLCJyZXNvbHZlIiwiZmFpbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiZ2V0UGhvbmVOdW1iZXIiLCJfdGhpcyIsImNvbnNvbGUiLCJrZXkiLCJnZXRNZXNzYWdlQ29kZSIsImNvdW50IiwiY2xlYXJJbnRlcnZhbCIsImNvZGVMb2dpbiIsInBhc3N3b3JkTG9naW4iLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBSEE7QUFDQUEsRUFBRSxDQUFDQyxpQ0FBaUMsR0FBR0MsbUJBQW1CO0FBRzFEQyxVQUFVLENBQUNDLGNBQUksQ0FBQyxDOzs7Ozs7Ozs7Ozs7O0FDTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4SDtBQUM5SDtBQUN5RDtBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDMks7QUFDM0ssZ0JBQWdCLG9MQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnR0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUE2bkIsQ0FBZ0Isa3BCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytLanBCO0FBQUEsZUFDQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBRUE7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQ0FKO1VBQ0FLO1lBQ0E7Y0FDQTtjQUtBQztjQUVBO2dCQUNBQztjQUNBO2dCQUNBO2tCQUNBQztnQkFDQTtjQUNBO1lBQ0E7VUFDQTtVQUNBQztZQUNBVDtjQUNBQztjQUNBUztjQUNBQztZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxJQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBR0FOO2dCQUNBTztnQkFDQUM7Z0JBQUE7Z0JBQUEsT0FDQTtjQUFBO2dCQUFBO2dCQUNBZDtrQkFDQWU7a0JBQ0EzQztnQkFDQTtnQkFDQTBDO2dCQUVBO2tCQU9BO2tCQUNBO2tCQUNBUjtrQkFFQU87b0JBQ0E7c0JBQ0FiO3dCQUNBQztzQkFDQTtzQkFDQUQ7c0JBQ0FBO29CQUNBO2tCQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQWdCO01BQUE7TUFDQTtNQUNBO1FBQ0FoQjtVQUNBQztVQUNBVTtRQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0FsQztNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1lBQ0E7Y0FDQXdDO2NBQ0FKO1lBQ0E7Y0FDQUE7Y0FDQUE7Y0FDQUs7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQW5CO1lBQ0FDO1lBQ0FFO1VBQ0E7VUFDQUg7VUFDQUE7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQW9CO01BQ0E7TUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQXBCO1lBQ0FDO1lBQ0FFO1VBQ0E7VUFDQUg7VUFDQUE7VUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQXFCO01BQ0FyQjtRQUNBTTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkI7Ozs7Ozs7Ozs7Ozs7QUN6WUE7QUFBQTtBQUFBO0FBQUE7QUFBd3RDLENBQWdCLHFyQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTV1QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2xvZ2luL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuLy8gQHRzLWlnbm9yZVxud3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjIzNzUwNGMmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iMjM3NTA0YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImIyMzc1MDRjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2xvZ2luL2xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTctMCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIyMzc1MDRjJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMy0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY3VzdG9tX2hlYWRlclwiIDpzdHlsZT1cIntoZWlnaHQ6aGVhZEhlaWdodCsncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCIgOnN0eWxlPVwie2xpbmVIZWlnaHQ6dGl0bGVIZWlnaHQrJ3B4JyxoZWlnaHQ6dGl0bGVIZWlnaHQrJ3B4JyxtYXJnaW5Ub3A6aGVhZFRvcCsncHgnfVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFja1wiIEBjbGljaz1cImJhY2tcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvYnJva2VyL2JhY2sucG5nJ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwidGV4dFwiPueZu+W9lXzms6jlhow8L3ZpZXc+IC0tPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWxsb1wiPmhlbGxv77yBPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGlwc1wiPuasoui/juadpeWIsOiTneWzsDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJib3hcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOmxvZ2luQXJlYVRvcCArICdweCcsaGVpZ2h0OmJveEhlaWdodCsncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYnMgZmxleCBmbGV4LXN0YXJ0XCIgOmNsYXNzPVwiY3VycmVudFRhYj09MD8nYmcxJzonYmcyJ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiXCIgOmNsYXNzPVwiY3VycmVudFRhYj09MD8nYWN0aXZlJzonJ1wiIEBjbGljaz1cImNoYW5nZVRhYigwKVwiPumqjOivgeeggeeZu+W9lTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiIDpjbGFzcz1cImN1cnJlbnRUYWI9PTE/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VUYWIoMSlcIj7lr4bnoIHnmbvlvZU8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJpbnB1dF9ib3hcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZV9pbm5lciBmbGV4IGZsZXhfYnR3ZWVuXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvd29ya2VyL2ljX3Bob25lLnBuZydcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibW9iaWxlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIlxyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLXN0eWxlPVwiZm9udC1zaXplOjI4cnB4O2NvbG9yOiM5RTlFOUU7XCIgLz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVfaW5uZXIgZmxleCBmbGV4X2J0d2VlblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxlZnQgZmxleCBmbGV4LXN0YXJ0XCIgOnN0eWxlPVwie3dpZHRoOmN1cnJlbnRUYWI9PTE/JzEwMCUnOidhdXRvJ31cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL3dvcmtlci9pY19sb2NrLnBuZydcIiBtb2RlPVwid2lkdGhGaXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDozNHJweDtoZWlnaHQ6NDBycHg7XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwidmVyaV9jb2RlXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpqozor4HnoIFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXItc3R5bGU9XCJmb250LXNpemU6MjhycHg7Y29sb3I6IzlFOUU5RTtcIiB2LWlmPVwiY3VycmVudFRhYj09MFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLXN0eWxlPVwiZm9udC1zaXplOjI4cnB4O2NvbG9yOiM5RTlFOUU7XCIgdi1pZj1cImN1cnJlbnRUYWI9PTFcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJsZWZ0IGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvd29ya2VyL2ljX2xvY2sucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInZlcmlfY29kZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6aqM6K+B56CBXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLXN0eWxlPVwiZm9udC1zaXplOjI4cnB4O2NvbG9yOiM5RTlFOUU7XCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJnZXRfY29kZVwiIDpjbGFzcz1cImNhblNlbmQ/Jyc6J2Rpc2FibGVkJ1wiIEBjbGljaz1cImdldE1lc3NhZ2VDb2RlXCJcclxuXHRcdFx0XHRcdFx0XHR2LWlmPVwiY3VycmVudFRhYj09MFwiPnt7dGlwc1RleHR9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwibGluZVwiIHYtaWY9XCJjdXJyZW50VGFiPT0xXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmVfaW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0IGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaW1nVXJsKycvd29ya2VyL2ljX2xvY2sucG5nJ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCJcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyLXN0eWxlPVwiZm9udC1zaXplOjI4cnB4O2NvbG9yOiM5RTlFOUU7XCIgLz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuX3dyYXBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ0blwiIHYtaWY9XCJjdXJyZW50VGFiID09IDBcIiBAY2xpY2s9XCJjb2RlTG9naW5cIj7nmbvlvZUv5rOo5YaMPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuXCIgdi1pZj1cImN1cnJlbnRUYWIgPT0gMVwiIEBjbGljaz1cInBhc3N3b3JkTG9naW5cIj7nmbvlvZUv5rOo5YaMPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiIGZsZXggZmxleF9hcm91bmRcIj5cclxuXHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJ2ZXJpXCIgdi1pZj1cIiFwb2xpY3lTdGF0dXNcIiBAY2xpY2s9XCJoYW5kbGVQb2xpY3lcIj7miYvmnLrlj7fkuIDplK7nmbvlvZU8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInZlcmlcIiBvcGVuLXR5cGU9XCJnZXRQaG9uZU51bWJlclwiIEBnZXRwaG9uZW51bWJlcj1cImdldFBob25lTnVtYmVyXCI+5omL5py65Y+35LiA6ZSu55m75b2VPC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpcHNcIj7ms6jvvJroi6Xml6DotKblj7fvvIznmbvlvZXlkI7lsIboh6rliqjliJvlu7rotKblj7fjgII8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9saWN5XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJwb2xpY3lTdGF0dXM/aW1nVXJsKycvd29ya2VyL2ljX2xvZ2luX2NoZWNrZWQucG5nJzppbWdVcmwrJy93b3JrZXIvaWNfbG9naW5fdW5jaGVjay5wbmcnXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cImNoZWNrUG9saWN5XCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJzaG93UG9saWN5XCI+6JOd6JyC55So5bel55So5oi36ZqQ56eB5Y2P6K6uPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIOmakOengeWNj+iuriAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWFza1wiIHYtaWY9XCJzaG93TWFza1wiIEBjbGljaz1cImNsb3NlTWFza1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImlubmVyXCIgQGNsaWNrLnN0b3A9XCJzaG93UG9saWN5XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPuiTneicgueUqOW3peeUqOaIt+makOengeWNj+iurjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImluZm9cIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx05bCK5pWs55qE5bmz5Y+w55So5oi3LOOAiumakOengeaUv+etluOAi+aYr+W5s+WPsOWNj+iurueahOmHjeimgee7hOaIkOmDqOWIhuOAguS+neaNruOAiuS4reWNjuS6uuawkeWFseWSjOWbveawkeazleWFuOOAi+OAgeOAiue9kee7nOWuieWFqOazleOAi+etieazleW+i+azleinhOWvueS4quS6uuS/oeaBr+S/neaKpOimgeaxgu+8jOW5s+WPsOS8muS7pVwi5ZCI5rOV44CB5q2j5b2T44CB5b+F6KaBXCLljp/liJnmlLbpm4bjgIHkvb/nlKjkuKrkurrkv6Hmga/vvIzlubbkvJrlr7nmgqjnmoTkuKrkurrkv6Hmga/kuKXmoLzkv53lr4bjgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+5LiA44CB5L+h5oGv55qE5pS26ZuGPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPuaCqOWQjOaEj+aOiOadg+W5s+WPsOaUtumbhuS7peS4i+S4juaCqOebuOWFs+eahOS/oeaBr++8mjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx077yIMe+8ieWcqOaCqOazqOWGjOi0puWPt+aXtuWhq+WGmeeahOS4quS6uuS/oeaBr++8jOWMheaLrOeUqOaIt+Wnk+WQjeOAgeeUteivneWPt+egge+8jOWktOWDj+OAgeaYteensOOAgeWcsOeQhuS9jee9ruS/oeaBr++8jOS4iui/sOS/oeaBr+S4u+imgeeUqOS6jumqjOivgeaCqOeahOi6q+S7veecn+WunuaAp+OAguWmguaenOaCqOS4jeaPkOS+m+S4iui/sOS/oeaBr++8jOW5s+WPsOWwhuaXoOazleWQkeaCqOaPkOS+m+mcgOWujOaIkOazqOWGjOWQjuaWueWPr+S9v+eUqOeahOacjeWKoeOAglxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPlxyXG5cdFx0XHRcdFx0XHTvvIgy77yJ5Zyo5oKo5L2/55So6ZyA6KaB6Lqr5Lu96K6k6K+B55qE5Yqf6IO95oiW55u45YWz5pyN5Yqh5pe277yM5qC55o2u55u45YWz5rOV5b6L5rOV6KeE77yM5Y+v6IO96ZyA6KaB5o+Q5L6b5oKo55qE55yf5a6e6Lqr5Lu95L+h5oGv77yM5YyF5ous55yf5a6e5aeT5ZCN44CB6Lqr5Lu96K+B5Y+356CB44CB55S16K+d5Y+356CB77yM5Lul5a6M5oiQ5a6e5ZCN6K6k6K+B44CC5aaC5oKo5LiN5o+Q5L6b5LiK6L+w5L+h5oGv77yM5bmz5Y+w5bCG5peg5rOV5ZCR5oKo5o+Q5L6b6ZyA5a6M5oiQ5a6e5ZCN6K6k6K+B5ZCO5pa55Y+v5L2/55So55qE5pyN5Yqh44CC5Zyo6YOo5YiG5Lia5Yqh5Zy65pmv5LiL77yM5Ye65LqO5rOV5b6L5rOV6KeE5oiW5a6J5YWo6aOO5o6n6KaB5rGC77yM5Y+v6IO95Lya5L2/55So5oKo55qE5Lq66IS45L+h5oGv6L+b6KGM5a6e5ZCN6K6k6K+B77yM5bmz5Y+w5Y+v6IO95Lya5bCG5oKo5o+Q5L6b55qE5a6e5ZCN6K6k6K+B5L+h5oGv5ZCR5ZCI5rOV55WZ5a2Y5oKo55qE5L+h5oGv55qE5Zu95a625py65YWz44CB6YeR6J6N5py65p6E44CB5LyB5LqL5Lia5Y2V5L2N6L+b6KGM5qC45a+577yM5Lul6aqM6K+B5oKo5o+Q5Lqk5L+h5oGv55qE55yf5a6e5oCn5LiO5YeG56Gu5oCn44CCXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDPvvInlvZPmgqjlnKjlubPlj7DkuK3kvb/nlKjnrKzkuInmlrnmj5DkvpvnmoTmnI3liqHml7bvvIznrKzkuInmlrnlj6/og73kvJrojrflj5bmgqjnmoTmmLXnp7DjgIHlpLTlg4/nrYnlhazlvIDkv6Hmga/vvJvlpoLmgqjlt7LmmI7npLrlkIzmhI/or6XnrKzkuInmlrnlj6/ku6Xojrflj5bmgqjnmoTlnLDnkIbkvY3nva7kv6Hmga/vvIzlubPlj7DlsIbmjojkuojor6XnrKzkuInmlrnojrflvpfnu4jnq6/lnLDnkIbkvY3nva7kv6Hmga/mjqXlj6PvvIzlhbblj6/ku6XpgJrov4for6XmjqXlj6PojrflvpfmgqjnmoTlhbfkvZPkvY3nva7kv6Hmga/vvJvlnKjnu4/ov4fmgqjnmoTmmI7npLrlkIzmhI/vvIznrKzkuInmlrnlj6/ojrflj5bmgqjnmoTmiYvmnLrlj7fnrYnkv6Hmga/vvJvlr7nkuo7mgqjlnKjkvb/nlKjnrKzkuInmlrnmj5DkvpvnmoTmnI3liqHml7bkuLvliqjmj5Dkvpvnu5nnrKzkuInmlrnnmoTnm7jlhbPkv6Hmga/vvIzlubPlj7DlsIbop4bkuLrmgqjlhYHorrjor6XnrKzkuInmlrnojrflj5bkuIrov7DmraTnsbvkv6Hmga/vvJvlr7nkuo7mgqjlnKjkvb/nlKjor6XnrKzkuInmlrnmnI3liqHml7bkuqfnlJ/nmoTkv6Hmga/vvIzlupTnlLHmgqjkuI7or6XnrKzkuInmlrnkvp3ms5XnuqblrprkuIrov7Dkv6Hmga/nmoTmlLbpm4blkozkvb/nlKjkuovpobnvvIzlubPlj7DkuI3kuLrlhbbku5bnvZHnq5nnmoTpmpDnp4HmnYPkv53miqTop4TlrprotJ/otKPjgILlpoLmgqjmi5Lnu53nrKzkuInmlrnlnKjmj5DkvpvmnI3liqHml7bmlLbpm4bjgIHkvb/nlKjmiJbogIXkvKDpgJLkuIrov7Dkv6Hmga/vvIzlsIblj6/og73kvJrlr7zoh7Tmgqjml6Dms5XlnKjlubPlj7DkuK3kvb/nlKjnrKzkuInmlrnnmoTnm7jlupTmnI3liqHvvIzkvYbov5nkuI3lvbHlk43mgqjkvb/nlKjlubPlj7DnmoTlhbbku5blip/og73jgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx077yINO+8ieWcqOmDqOWIhuS4muWKoeWcuuaZr+S4re+8jOWHuuS6jue7tOaKpOaCqOeahOS/oeaBr+OAgei0puaIt+aIlui1hOmHkeWuieWFqOaIluWfuuS6juazleW+i+azleinhOOAgeebkeeuoeinhOWumuimgeaxguW/hemhu+S6uuiEuOivhuWIq+eahO+8jOaIluWHuuS6juS4muWKoeeuoeeQhuaIlumjjumZqeaOp+WItuetiemcgOaxguWcuuaZr+aXtu+8jOaCqOmcgOimgemAmui/h+S6uuiEuOivhuWIq+mqjOivgeacjeWKoei/m+ihjOi6q+S7veeahOaguOmqjO+8jOWFt+S9k+aguOmqjOaWueW8j+S4uu+8mumAmui/h+aRhOWDj+WktOWvueaCqOeahOS6uuiEuOi/m+ihjOaLjeeFp+WPii/miJblvZXliLbpn7Pop4bpopHlnKjmtLvkvZPmo4DmtYvpgJrov4flkI7vvIzlubPlj7DlsIblvZPmrKHph4fpm4bnmoTkurrohLjkv6Hmga/kuI7ln7rlh4bkurrohLjkv6Hmga/ov5vooYzmr5Tlr7nvvIzlubbmoLnmja7mr5Tlr7nnu5PmnpzmmK/lkKbkuIDoh7TmnaXmoLjpqozmgqjnmoTnnJ/lrp7ouqvku73jgILlnKjlv4XopoHml7bvvIzlubPlj7Dov5jkvJrlsIbmgqjmj5DkuqTnmoTouqvku73kv6Hmga/lj4rkurrohLjnhafniYfkv6Hmga/mj5Dkvpvnu5nms5Xlvovms5Xop4TlhYHorrjmiJbmlL/lupzmnLrlhbPmjojmnYPnmoTmnYPlqIHmnLrmnoTvvIjljIXmi6zkvYbkuI3pmZDkuo7kuK3lm73kurrmsJHpk7booYzjgIHlhazlronpg6jlj4rlhbbmjojmnYPnmoTmnLrmnoTvvInku6Xpqozor4HmgqjnmoTouqvku73jgILlpoLmgqjmi5Lnu53mjojmnYPvvIzlubPlj7DlsIbml6Dms5XlkJHmgqjmj5DkvpvpnIDopoHpgJrov4fkurrohLjor4bliKvlrozmiJDlrp7lkI3orqTor4HlkI7mlrnlj6/kvb/nlKjnmoTmnI3liqHjgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIg177yJ5Zyo5oKo5L2/55So5bmz5Y+w5pyN5Yqh5pe277yM5Li65LqG57u05oqk5pyN5Yqh55qE5a6J5YWo56iz5a6a6L+Q6KGM44CC5bmz5Y+w6YCa6L+HY29va2llc+OAgXdlYmJlYWNvbuaIluWFtuS7luaWueW8j+iHquWKqOaUtumbhuebuOWFs+S/oeaBr+W5tuWtmOWCqOS4uuacjeWKoeaXpeW/l+S/oeaBr++8jOWMheaLrOiuvuWkh+Wei+WPt+OAgVxyXG5cdFx0XHRcdFx0XHRJUOWcsOWdgOOAgeaQnOe0ouS/oeaBr+OAgeafpeeci+S/oeaBr++8jOacjeWKoeaVhemanOS/oeaBr+OAgeW8leiNkOe9keWdgOS/oeaBr+OAgemAmuiur+aXpeW/l+S/oeaBr+OAglxyXG5cdFx0XHRcdFx0XHTvvIg277yJ5Zyo5oKo5L2/55So5LiO5L2N572u5pyJ5YWz55qE5pyN5Yqh5pe277yM5bmz5Y+w5Lya5Zyo5Y+W5b6X5oKo5o6I5p2D5ZCM5oSP55qE5YmN5o+Q5LiL5pS26ZuG6K6w5b2V5oKo6K6+5aSH5omA5Zyo55qE5L2N572u5L+h5oGv77yM6YCa6L+HSVDlnLDlnYDjgIFHUFPjgIFXaUZp5oiW5Z+656uZ6I635Y+W5oKo55qE5Zyw55CG5L2N572u5L+h5oGv5oiW5oKo5Zyo5L2/55So5bmz5Y+w5Lqn5ZOB5oiW5pyN5Yqh5pe25o+Q5L6b55qE5L+h5oGv5Lit5Y+v6IO95YyF5ZCr55qE5Zyw55CG5L2N572u5L+h5oGv44CCXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDbvvInlnKjmgqjkvb/nlKjkuI7kvY3nva7mnInlhbPnmoTmnI3liqHml7bvvIzlubPlj7DkvJrlnKjlj5blvpfmgqjmjojmnYPlkIzmhI/nmoTliY3mj5DkuIvmlLbpm4borrDlvZXmgqjorr7lpIfmiYDlnKjnmoTkvY3nva7kv6Hmga/vvIzpgJrov4dJUOWcsOWdgOOAgUdQU+OAgVdpRmnmiJbln7rnq5nojrflj5bmgqjnmoTlnLDnkIbkvY3nva7kv6Hmga/miJbmgqjlnKjkvb/nlKjlubPlj7Dkuqflk4HmiJbmnI3liqHml7bmj5DkvpvnmoTkv6Hmga/kuK3lj6/og73ljIXlkKvnmoTlnLDnkIbkvY3nva7kv6Hmga/jgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx077yIN++8ieWcqOaCqOS9v+eUqOacieWFs+ebuOacuu+8iOaRhOWDj+WktO+8ieacjeWKoeaXtu+8jOWmguWcqOaJq+S4gOaJq+OAgeWIt+iEuOi6q+S7vemqjOivgeOAgeaIkeimgeWPjemmiOWcuuaZr+S4re+8jOmcgOimgeaCqOW8gOWQr+aRhOWDj+WktO+8jOWwhuiOt+WPlueahOS6uuiEuOWbvuWDj+OAgeS4juS4quS6uuS/oeaBr+ebuOWFs+eahOWbvueJh+WSjOinhumikeaVsOaNruWKoOWvhuWQjuWtmOWCqOS6juezu+e7n+WQjuWPsOeahOaVsOaNruW6k+S4reOAglxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDjvvInlnKjmgqjkvb/nlKjmtojmga/mnI3liqHvvIzkuLrluK7liqnmgqjmm7Tlpb3lnLDlrp7njrDljbPml7bmsp/pgJrvvIzlubPlj7DpnIDopoHmlLbpm4bmgqjnmoTpn7PpopHjgIHop4bpopHjgIHnhafniYfjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDnvvInmgqjlj6/ku6XmnInpgInmi6nmgKflnLDlrozlloTmgKfliKvjgIHlh7rnlJ/ml6XmnJ/jgIHmiYDlsZ7lm73liKvjgIHlrrbluq3lnLDlnYDjgIHlrrbluq3nlLXor53jgIHkuKrkurrpgq7nrrHjgIHogYzliqHjgIHpg6jpl6jjgIHlhazlj7jlnLDlnYDjgIHlhazlj7jpgq7nrrHjgIHlhazlj7jnlLXor53ku6Xlj4rlhbbku5bkuKrkurrnroDljobkv6Hmga/vvIjku6XlubPlj7DlhbfkvZPorr7orqHkuLrlh4bvvInjgILov5nkupvkv6Hmga/lnYfkuLrpgInloavpobnvvIzmmK/lkKbpnIDopoHlhbfkvZPloavlhpnop4bmgqjkvb/nlKjlhbfkvZPkuJrliqHlip/og73nmoTmg4XlhrXogIzlrprjgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+5LqM44CB5L+h5oGv55qE5L2/55SoPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPuW5s+WPsOS8muWcqOS/neaKpOaCqOS4quS6uuS/oeaBr+WuieWFqOeahOWJjeaPkOS4i++8jOWcqOS7peS4i+aDheW9ouS4reS9v+eUqOaCqOeahOS/oeaBr++8mjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIgx77yJ5bmz5Y+w5Lya5qC55o2u5pys5pS/562W55qE57qm5a6a5bm25Li65a6e546w5bmz5Y+w5Lqn5ZOB5LiOL+aIluacjeWKoeWKn+iDveWvueaJgOaUtumbhueahOS4quS6uuS/oeaBr+i/m+ihjOS9v+eUqOOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIgy77yJ5Li65LqG5L+d6Zqc5pyN5Yqh55qE56iz5a6a5oCn44CB5a6J5YWo5oCn44CB5pyJ5pWI5oCn5ZKM5Y+v5omn6KGM5oCnLOW5s+WPsOS8muWwhuaCqOeahOS/oeaBr+eUqOS6jui6q+S7vemqjOivgeOAgeWuieWFqOmYsuiMg+OAgeiviOmql+ebkea1i+OAgemihOmYsuaIluemgeatoumdnuazlS/ov53op4TmtLvliqjjgIHpmY3kvY7po47pmanjgIHlrZjmoaPlkozlpIfku73nlKjpgJTnrYnjgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIgz77yJ5qC55o2u5rOV5b6L5rOV6KeE44CB55uR566h6KaB5rGC5oiW5Zu95a625pyJ5p2D5py65p6E6KaB5rGC5ZCR55u45YWz6YOo6Zeo6L+b6KGM5oql5ZGK44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDTvvInpgoDor7fmgqjlj4LkuI7lubPlj7Dkuqflk4HmiJbmnI3liqHmnInlhbPnmoTlrqLmiLfosIPnoJTjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yINe+8ieW5s+WPsOS8muWwhuaCqOeahOS/oeaBr+i/m+ihjOWOu+agh+ivhuWMluaIluWMv+WQjeWMluWQjui/m+ihjOe7vOWQiOe7n+iuoeOAgeWIhuaekOWKoOW3pSzku6Xkvr/luK7liqnlubPlj7Dor4TkvLDjgIHmlLnlloTmiJborr7orqHkuqflk4HjgIHmnI3liqHlj4rov5DokKXmtLvliqjnrYnjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDbvvInlubPlj7DkvJrlr7nkuqflk4HkuI4v5oiW5pyN5Yqh5L2/55So5oOF5Ya16L+b6KGM57uf6K6h77yM5bm25Y+v6IO95Lya5LiO5YWs5LyX5oiW56ys5LiJ5pa55YWx5Lqr6L+Z5Lqb57uf6K6h5L+h5oGv77yM5Lul5bGV56S65Lqn5ZOB5LiOL+aIluacjeWKoeeahOaVtOS9k+S9v+eUqOi2i+WKv+OAguS9hui/meS6m+e7n+iuoeS/oeaBr+WOn+WImeS4iuS4jea2ieWPiuaCqOeahOS4quS6uuS/oeaBr+OAguWmgua2ieWPiuaCqOeahOS4quS6uuS/oeaBryzlsIblnKjmgqjlkIzmhI/nmoTliY3mj5DkuIvkvb/nlKjjgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIg377yJ5bmz5Y+w5Y+v6IO95L2/55So5oKo5o+Q5L6b55qE5Liq5Lq65L+h5oGv5Lit55qE6IGU57O75pa55byP5LiO5oKo6YCa5L+h77yM5L6L5aaC6YCa55+l5oKo5pyJ5YWz5oKo55qE6LSm5oi344CB5a6J5YWo5oCn5pu05paw44CB5Lqn5ZOB5ZKM5pyN5Yqh5L+h5oGv77yM5ZCR5oKo5Y+K5pe25Y+R6YCB6YeN6KaB6YCa55+l77yM5aaC6L2v5Lu25pu05paw44CB5pys5Y2P6K6u5p2h5qy+55qE5Y+Y5pu044CCXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDjvvInkuLrkuobkvb/mgqjnn6Xmgonkvb/nlKjlubPlj7Dkuqflk4HmiJbmnI3liqHnmoTmg4XlhrXmiJbkvb/mgqjov5vkuIDmraXkuobop6PlubPlj7DmnI3liqHvvIzlubPlj7DkvJrlkJHmgqjlj5HpgIHmnI3liqHnirbmgIHpgJrnn6Xku6Xlj4rnm7jlhbPkuqflk4HmiJbmnI3liqHnmoTllYbkuJrmgKfkv6Hmga/vvIzlubPlj7DlsIblkJHmgqjmjqjojZDmgqjlj6/og73mhJ/lhbTotqPnmoTlhoXlrrks5YyF5ous5L2G5LiN6ZmQ5LqO6YCa6L+H57O757uf5ZCR5oKo5bGV56S65Liq5oCn5YyW55qE56ys5LiJ5pa55o6o5bm/5L+h5oGv77yM5oiW6ICF5Lya5qC55o2u5pys5p2h5qy+5LiO5bmz5Y+w55qE5ZCI5L2c5LyZ5Ly05YWx5Lqr5L+h5oGv5Lul5L6/5LuW5Lus5ZCR5oKo5Y+R6YCB5pyJ5YWz5YW25Lqn5ZOB5ZKM5pyN5Yqh55qE5L+h5oGv44CC6Iul5oKo5oOz5YWz6Zet5bmz5Y+w55qE5Liq5oCn5YyW5o6o6I2Q5YaF5a65LOWPr+WJjeW+gFwi5oiR55qEXCLnlYzpnaIs54K55Ye7XCLorr7nva5cIi3mtojmga/orr7nva5cIizmib7liLDkuKrmgKfljJbmjqjojZDmjInpkq7ov5vooYzlhbPpl63jgIJcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx077yIOe+8ieWcqOW5s+WPsOS4iuWIm+W7uueahOafkOS4gOWIhuexu+S/oeaBr+S6pOaYk+S4re+8jOWmguS6pOaYk+S7u+S9leS4gOaWueWxpeihjOaIlumDqOWIhuWxpeihjOS6huS6pOaYk+S5ieWKoeW5tuaPkOWHuuS/oeaBr+aMiemcsuivt+axgueahO+8jOW5s+WPsOacieadg+WPr+S7peWGs+WumuWQkeivpeaCqOaPkOS+m+WFtuS6pOaYk+WvueaWueeahOiBlOe7nOaWueW8j+etieW/heimgeS/oeaBr++8jOS7peS/g+aIkOS6pOaYk+eahOWujOaIkOaIlue6oOe6t+eahOino+WGs+OAglxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPlxyXG5cdFx0XHRcdFx0XHTvvIgxMO+8ieW5s+WPsOWPiuWFtuWQiOS9nOeahOesrOS4ieaWueaJv+ivuuS4peagvOmBteWuiOWbveWutuazleW+i+azleinhOinhOWumu+8jOW5tuS7heWPr+WfuuS6juacjeWKoeS6juacrOasoeS4muWKoeS5i+W/heimgeebrueahO+8jOafpeivouWSjOaUtumbhuacrOS6uueahOS/oeaBr+OAgumZpOmdnuagueaNruazleW+i+inhOWumuaIluacieadg+acuuWFs+imgeaxgu+8jOS4jeW+l+WQkeS7u+S9leS6uuaPkOS+m+OAgeazhOmcsuaIluWHuuWUruOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+5LiJ44CB5L+h5oGv5YWx5Lqr5LiO6L2s6K6pPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDHvvInpmaTpnZ7ojrflvpfmgqjnmoTmmI7noa7lkIzmhI/miJbmjojmnYPvvIzlubPlj7DkuI3kvJrlkJHlhbbku5bku7vkvZXlhazlj7jjgIHnu4Tnu4flkozkuKrkurrlhbHkuqvmiJbovazorqnmgqjnmoTkuKrkurrkv6Hmga/jgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+XHJcblx0XHRcdFx0XHRcdO+8iDLvvInlpoLkuJrliqHpnIDopoHlr7nlpJblhbHkuqvmiJbovazorqnmgqjnmoTkuKrkurrkv6Hmga/vvIzlubPlj7DkvJrlkJHmgqjlkYrnn6XlhbHkuqvmiJbovazorqnkuKrkurrkv6Hmga/nmoTnm67nmoTjgIHmlbDmja7mjqXmlLbmlrnnmoTnsbvlnoss5bm25b6B5b6X5oKo55qE5o6I5p2D5ZCM5oSP44CC5raJ5Y+K5pWP5oSf5L+h5oGv55qE77yM5bmz5Y+w6L+Y5Lya5ZGK55+l5pWP5oSf5L+h5oGv55qE57G75Z6L44CB5pWw5o2u5o6l5pS25pa555qE6Lqr5Lu95ZKM5pWw5o2u5a6J5YWo6IO95Yqb77yM5bm25b6B5b6X5oKo55qE5piO56S65o6I5p2D5ZCM5oSP44CCXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIM++8ieagueaNruazleW+i+azleinhOWSjOWVhuS4muaDr+S+i++8jOWcqOWQiOW5tuOAgeaUtui0reOAgei1hOS6p+i9rOiuqeetieexu+S8vOS6pOaYk+S4re+8jOWmgua2ieWPiuWIsOS4quS6uuS/oeaBr+i9rOiuqe+8jOW5s+WPsOS8muimgeaxguaWsOeahOaMgeacieaCqOS4quS6uuS/oeaBr+eahOWFrOWPuOOAgee7hOe7h+e7p+e7reWPl+acrOmakOengeaUv+etlueahOe6puadn+OAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+5Zub44CB5L+h5oGv5YWx5Lqr5YWN6LSj5oOF5Ya1PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPuW5s+WPsOS4jeS8mui2heWHuuaPkOS+m+acjeWKoeebrueahOS9v+eUqOaCqOeahOS/oeaBr++8jOS5n+S4jeS8muWQkeesrOS4ieaWueWFseS6q+aCqOeahOS/oeaBr+OAguS9huS7peS4i+aDheWGtemZpOWklu+8mjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIgx77yJ5oKo5ZCM5oSP6K6p56ys5LiJ5pa55YWx5Lqr6LWE5paZ44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDLvvInkuI7lm73lrrblronlhajjgIHlm73pmLLlronlhajnm7TmjqXnm7jlhbPnmoTjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIM++8ieS4juWFrOWFseWuieWFqOOAgeWFrOWFseWNq+eUn+OAgemHjeWkp+WFrOWFseWIqeebiuebtOaOpeebuOWFs+eahOOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIg077yJ5LiO54qv572q5L6m5p+l44CB6LW36K+J44CB5a6h5Yik5ZKM5Yik5Yaz5omn6KGM562J55u05o6l55u45YWz55qE44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDXvvInlh7rkuo7nu7TmiqTkuKrkurrkv6Hmga/kuLvkvZPmiJblhbbku5bkuKrkurrnmoTnlJ/lkb3jgIHotKLkuqfnrYnph43lpKflkIjms5XmnYPnm4rkvYblj4jpmr7ku6Xov4XpgJ/lvpfliLDmnKzkurrlkIzmhI/nmoTjgIIgPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDbvvInmiYDmlLbpm4bnmoTkuKrkurrkv6Hmga/mmK/kvaDoh6rooYzlkJHnpL7kvJrlhazkvJflhazlvIDnmoTjgIIgPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDfvvInku47lkIjms5XlhazlvIDmiqvpnLLnmoTkv6Hmga/kuK3mlLbpm4bnmoTkvaDnmoTkuKrkurrkv6Hmga/nmoTvvIzlpoLlkIjms5XnmoTmlrDpl7vmiqXpgZPjgIHmlL/lupzkv6Hmga/lhazlvIDnrYnmuKDpgZPjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIOO+8ieagueaNruS9oOeahOimgeaxguetvuiuouWSjOWxpeihjOWQiOWQjOaJgOW/hemcgOeahOOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIg577yJ55So5LqO57u05oqk5omA5o+Q5L6b55qE5Lqn5ZOB5oiW5pyN5Yqh55qE5a6J5YWo56iz5a6a6L+Q6KGM5omA5b+F6ZyA55qE77yM5L6L5aaC5Y+R546w44CB5aSE572u5Lqn5ZOB5oiW5pyN5Yqh55qE5pWF6Zqc44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDEw77yJ5Ye65LqO5YWs5YWx5Yip55uK5byA5bGV57uf6K6h5oiW5a2m5pyv56CU56m25omA5b+F6KaB77yM5LiU5a+55aSW5o+Q5L6b5a2m5pyv56CU56m25oiW5o+P6L+w55qE57uT5p6c5pe277yM5a+557uT5p6c5Lit5omA5YyF5ZCr55qE5Liq5Lq65L+h5oGv6L+b6KGM5Y675qCH6K+G5YyW5aSE55CG55qE44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDEx77yJ5rOV5b6L5rOV6KeE6KeE5a6a55qE5YW25LuW5oOF5b2i44CCPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0aXRcIj7kupTjgIHmnKzmlL/nrZblpoLkvZXmm7TmlrA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIMe+8ieaIkeS7rOeahOacjeWKoeWPkeeUn+S7peS4i+WPmOWMluaXtizmiJHku6zlsIblj4rml7blr7nmnKzjgIrpmpDnp4HmlL/nrZbjgIvov5vooYznm7jlupTnmoTkv67orqI6PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPuW5s+WPsOacjeWKoeaJgOa2ieS4muWKoeWKn+iDveWPkeeUn+WPmOabtCzlr7zoh7TlpITnkIbkuKrkurrkv6Hmga/nmoTnm67nmoQs57G75Z6L44CB5L2/55So5pa55byP5Y+R55Sf5Y+Y5pu077ybPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPuaCqOWPguS4juS4quS6uuS/oeaBr+WkhOeQhuaWuemdoueahOadg+WIqeWPiuWFtuihjOS9v+aWueW8j+WPkeeUn+mHjeWkp+WPmOWMlu+8mzwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7miJHku6zotJ/otKPlpITnkIbmgqjnmoTkuKrkurrkv6Hmga/lronlhajnmoTpg6jpl6jnmoTogZTnu5zmlrnlvI/lj5HnlJ/lj5jmm7TvvJs8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+5Y+R55Sf5YW25LuW5Y+v6IO95b2x5ZON55So5oi35Liq5Lq65L+h5oGv5a6J5YWo5oiW5b2x5ZON55So5oi36ZqQ56eB5p2D5Yip55qE5Y+Y5pu0562JPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDLvvInjgIrpmpDnp4HmlL/nrZbjgIvkv67orqLlkI7lubPlj7DmnI3liqHnm7jlhbPnlYzpnaLlj5HluIPmnIDmlrDniYjmnKzlubbku6XlvLnnqpfjgIHmjqjpgIHpgJrnn6XnrYnlkIjnkIbnmoTmlrnlvI/lkYrnn6XnlKjmiLfvvIzku6Xkvr/nlKjmiLflj4rml7bkuobop6PjgIrpmpDnp4HmlL/nrZbjgIvnmoTmnIDmlrDniYjmnKzjgII8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIM++8ieWmguaXoOeJueauiuivtOaYju+8jOS/ruiuouWQjueahOOAiumakOengeaUv+etluOAi+iHquWFrOW4g+S5i+aXpei1t+eUn+aViOOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3VidGl0XCI+5YWt44CB5rOV5b6L5paH5Lmm6YCB6L6+5Zyw5Z2A56Gu6K6kPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYVwiPu+8iDHvvInmgqjlnKjmraTnoa7orqTvvIzlj7jms5XmnLrlhbPvvIjljIXmi6zkvYbkuI3pmZDkuo7kurrmsJHms5XpmaIp5Y+v5Lul5omL5py655+t5L+h5oiW55S15a2Q6YKu5Lu2562J546w5Luj6YCa6K6v5pa55byP5oiW6YKu5a+E5pa55byP5ZCR5oKo6YCB6L6+5rOV5b6L5paH5LmmKOWMheaLrOivieiuvOaWh+S5pu+8ieOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj5cclxuXHRcdFx0XHRcdFx077yIMu+8ieaCqOehruiupOaCqOWQjOaEj+mCruWvhOWcsOWdgOS4uuaCqOi6q+S7veivgeaJgOekuuaIt+WPo+aJgOWcqOWcsO+8jOaCqOWcqOatpOehruiupOacrOWcsOWdgOecn+WunuOAgeacieaViOOAgeiLpeacrOWcsOWdgOWPkeeUn+WPmOabtOeahO+8jOaCqOW6lOivpeWPiuaXtumAmuefpeW5s+WPsOOAguiLpeaCqOaPkOS+m+eahOmAgei+vuWcsOWdgOS4jeecn+WunuOAgeS4jeWHhuehru+8jOaIluacquWPiuaXtuWQkeW5s+WPsOaIluWPuOazleacuuWFs+WRiuefpeWPmOabtOWQjueahOWcsOWdgO+8jOWvvOiHtOW5s+WPsOaIluWPuOazleacuuWFs+WQkeaCqOWPkemAgeeahOazleW+i+aWh+S5puacquiiq+WunumZheaOpeaUtueahO+8jOW5s+WPsOaIluWPuOazleacuuWFs+S7peWJjei/sOS7u+S4gOmAgei+vuWcsOWdgOWPkeWHuuazleW+i+aWh+S5puWdh+inhuS4uumAgei+vu+8jOaCqOW6lOivpeaJv+aLheeUseatpOS6p+eUn+eahOebuOW6lOazleW+i+WQjuaenOOAglxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdWJ0aXRcIj7kuIPjgIHlhbbku5Y8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhXCI+77yIMe+8ieWmguaenOaCqOiupOS4uuaIkeS7rOeahOS4quS6uuS/oeaBr+WkhOeQhuihjOS4uuaNn+Wus+S6huaCqOeahOWQiOazleadg+ebiu+8jOaCqOS5n+WPr+WQkeacieWFs+aUv+W6nOmDqOmXqOi/m+ihjOWPjeaYoOOAgjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFcIj7vvIgy77yJ5Zyo5bmz5Y+w5YWs5biD5pys44CK6ZqQ56eB5pS/562W44CL5oiW5ZCR5oKo5o+Q5L6b5pyN5Yqh5Z2H6KeG5Li65pys44CK6ZqQ56eB5pS/562W44CL55Sf5pWI44CC5bmz5Y+w5YGc5q2i6L+Q6JCl5oiW5rC45LmF5YGc5q2i5o+Q5L6b5pyN5Yqh5pe25pys44CK6ZqQ56eB5pS/562W44CL5aSx5pWI44CCPC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzaG93TWFzazogZmFsc2UsXHJcblx0XHRcdFx0aW1nVXJsOiBhcHAuZ2xvYmFsRGF0YS5iYXNlSW1hZ2VVcmwsXHJcblx0XHRcdFx0cG9saWN5U3RhdHVzOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93T3RoZXJMb2dpbjogZmFsc2UsXHJcblx0XHRcdFx0bW9iaWxlOiBcIlwiLFxyXG5cdFx0XHRcdHZlcmlfY29kZTogXCJcIixcclxuXHRcdFx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdFx0XHRjdXJyZW50VGFiOiAwLFxyXG5cdFx0XHRcdGdldFBob25lRGF0YToge30sXHJcblx0XHRcdFx0Y2FuU2VuZDogdHJ1ZSxcclxuXHRcdFx0XHR0aXBzVGV4dDogXCLlj5HpgIHpqozor4HnoIFcIixcclxuXHRcdFx0XHRoZWFkSGVpZ2h0OiBhcHAuZ2xvYmFsRGF0YS5sb2dpbkhlYWRIZWlnaHQsXHJcblx0XHRcdFx0bWFyZ2luVG9wOiBhcHAuZ2xvYmFsRGF0YS5tYXJnaW5Ub3AsXHJcblx0XHRcdFx0dGl0bGVIZWlnaHQ6IDAsXHJcblx0XHRcdFx0aGVhZFRvcDogMCxcclxuXHRcdFx0XHRib3hIZWlnaHQ6IDAsXHJcblx0XHRcdFx0bG9naW5BcmVhVG9wOiBhcHAuZ2xvYmFsRGF0YS5sb2dpbkFyZWFUb3AsXHJcblx0XHRcdFx0YnRuQm90dG9tOiBhcHAuZ2xvYmFsRGF0YS5idG5Cb3R0b20sXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKHBhcmFtKSB7XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0bGV0IG1lbnVCdXR0b25JbmZvID0gdW5pLmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdFx0XHR0aGlzLnRpdGxlSGVpZ2h0ID0gbWVudUJ1dHRvbkluZm8uaGVpZ2h0XHJcblx0XHRcdHRoaXMuaGVhZFRvcCA9IG1lbnVCdXR0b25JbmZvLnRvcFxyXG5cdFx0XHR0aGlzLmJveEhlaWdodCA9IGFwcC5nbG9iYWxEYXRhLnN5c3RlbUhlaWdodCAtIHRoaXMubG9naW5BcmVhVG9wIC0gdGhpcy5idG5Cb3R0b21cclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzaG93UG9saWN5KCkge1xyXG5cdFx0XHRcdHRoaXMuc2hvd01hc2sgPSB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlTWFzaygpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dNYXNrID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlVGFiKGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGFiID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tQb2xpY3koKSB7XHJcblx0XHRcdFx0dGhpcy5wb2xpY3lTdGF0dXMgPSAhdGhpcy5wb2xpY3lTdGF0dXNcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hvb3NlTG9naW5NZXRob2QoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93T3RoZXJMb2dpbiA9ICF0aGlzLnNob3dPdGhlckxvZ2luXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrVGFiKGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGFiID0gaW5kZXhcclxuXHRcdFx0fSxcclxuXHRcdFx0aGFuZGxlUG9saWN5KCkge1xyXG5cdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQvLyBcdHVybDpcIi9zdWJwa2cvd29ya19kZXRhaWwvd29ya19kZXRhaWxcIlxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0aWYgKCF0aGlzLnBvbGljeVN0YXR1cykge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+WFiOWLvumAiemakOengeWNj+iurlwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE9wZW5JZCgpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdFx0dW5pLmxvZ2luKHtcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuZXJyTXNnID09ICdsb2dpbjpvaycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1cmwgPSBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHRcdFx0XHR1cmwgPSBcIi9hdXRoL3dvcmtlci93ZWNoYXQvbWluaS9vcGVuaWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdFx0XHRcdHVybCA9IFwiL2F1dGgvd29ya2VyL2t1YWlzaG91L29wZW5pZFwiXHJcblx0XHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJHJlcXVlc3QodXJsLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvZGU6IHJlcy5jb2RlXHJcblx0XHRcdFx0XHRcdFx0XHR9LCBcIlBPU1RcIikudGhlbihyZXNwID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3AuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyZXNwLmRhdGEub3Blbl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWwoKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnmbvlvZXlpLHotKVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwi5o6I5p2D55m75b2V5aSx6LSl77yM5bCG5peg5rOV5L2/55So6YOo5YiG5Yqf6IO9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldFBob25lTnVtYmVyKGUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaGFuZGxlUG9saWN5KCkpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgdXJsID0gXCJcIlxyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLCBcImdldFBob25lTnVtYmVyXCIpXHJcblx0XHRcdFx0dGhpcy5nZXRQaG9uZURhdGEub3Blbl9pZCA9IGF3YWl0IHRoaXMuZ2V0T3BlbklkKCk7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdFx0a2V5OiBcIm9wZW5pZFwiLFxyXG5cdFx0XHRcdFx0ZGF0YTogdGhpcy5nZXRQaG9uZURhdGEub3Blbl9pZFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5nZXRQaG9uZURhdGEpXHJcblxyXG5cdFx0XHRcdGlmIChlLmRldGFpbC5lcnJNc2cgPT0gJ2dldFBob25lTnVtYmVyOm9rJykge1xyXG5cclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdHRoaXMuZ2V0UGhvbmVEYXRhLmNvZGUgPSBlLmRldGFpbC5jb2RlO1xyXG5cdFx0XHRcdFx0dXJsID0gXCIvYXV0aC93b3JrZXIvd2VjaGF0L21pbmkvbG9naW5cIlxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtS1VBSVNIT1VcclxuXHRcdFx0XHRcdHRoaXMuZ2V0UGhvbmVEYXRhLmVuY3J5cHRlZF9kYXRhID0gZS5kZXRhaWwuZW5jcnlwdGVkRGF0YTtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0UGhvbmVEYXRhLml2ID0gZS5kZXRhaWwuaXY7XHJcblx0XHRcdFx0XHR1cmwgPSBcIi9hdXRoL3dvcmtlci9rdWFpc2hvdS9sb2dpblwiXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdF90aGlzLiRyZXF1ZXN0KHVybCwgdGhpcy5nZXRQaG9uZURhdGEsIFwiUE9TVFwiKS50aGVuKHJlc3AgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcC5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaOiOadg+aIkOWKn1wiXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiLCByZXNwLmRhdGEpXHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRNZXNzYWdlQ29kZSgpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGlzLmNhblNlbmQpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLpqozor4HnoIHlt7Llj5HpgIHvvIzor7fnqI3lkI7ph43or5VcIixcclxuXHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0XHRtb2JpbGU6IHRoaXMubW9iaWxlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJHJlcXVlc3QoXCIvYXV0aC9zZW5kLXNtcy12ZXJpZnktY29kZVwiLCBkYXRhLCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYW5TZW5kID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0bGV0IGNvdW50ID0gNjBcclxuXHRcdFx0XHRcdFx0dGhpcy50aXBzVGV4dCA9IGNvdW50ICsgXCJzXCJcclxuXHRcdFx0XHRcdFx0bGV0IHQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY291bnQgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb3VudC0tXHJcblx0XHRcdFx0XHRcdFx0XHRfdGhpcy50aXBzVGV4dCA9IGNvdW50ICsgXCJzXCJcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuY2FuU2VuZCA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLnRpcHNUZXh0ID0gXCLph43mlrDojrflj5ZcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2RlTG9naW4oKSB7XHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpc1xyXG5cdFx0XHRcdGlmICghdGhpcy5oYW5kbGVQb2xpY3koKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJtb2JpbGVcIjogdGhpcy5tb2JpbGUsXHJcblx0XHRcdFx0XHRcInNtc192ZXJpZnlfY29kZVwiOiB0aGlzLnZlcmlfY29kZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRyZXF1ZXN0KFwiL2F1dGgvd29ya2VyL2xvZ2luL3Ntc1wiLCBkYXRhLCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi55m75b2V5oiQ5YqfXCIsXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pXHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdFx0XHQvLyB1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdFx0Ly8gXHR1cmw6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCJcclxuXHRcdFx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXNzd29yZExvZ2luKCkge1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRpZiAoIXRoaXMuaGFuZGxlUG9saWN5KCkpIHtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwibW9iaWxlXCI6IHRoaXMubW9iaWxlLFxyXG5cdFx0XHRcdFx0XCJwYXNzd29yZFwiOiB0aGlzLnBhc3N3b3JkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJHJlcXVlc3QoXCIvYXV0aC93b3JrZXIvbG9naW4vcGFzc3dvcmRcIiwgZGF0YSwgXCJQT1NUXCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIueZu+W9leaIkOWKn1wiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKVxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHRcdFx0Ly8gdW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHRcdC8vIFx0dXJsOiBcIi9wYWdlcy9pbmRleC9pbmRleFwiXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQubWFzayB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuXHJcblx0XHQuaW5uZXIge1xyXG5cdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRoZWlnaHQ6IDUwdmg7XHJcblx0XHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRwYWRkaW5nOiA0MHJweDtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTZycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuXHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaW5mbyB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyN3JweDtcclxuXHRcdFx0XHRjb2xvcjogIzMzMztcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNTBycHg7XHJcblxyXG5cdFx0XHRcdC5zdWJ0aXQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRtYXJnaW46IDIwcnB4IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5jdXN0b21faGVhZGVyIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQ6IHVybCgkYmFjay1ncm91bmQtdXJsK1wiL3dvcmtlci9sb2dpbl9oZWFkZXJfYmcucG5nXCIpIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHotaW5kZXg6IDI7XHJcblxyXG5cdFx0Jj5pbWFnZSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0ei1pbmRleDogMztcclxuXHRcdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHRcdH1cclxuXHJcblx0XHQudGl0bGUge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR6LWluZGV4OiAxMDtcclxuXHJcblx0XHRcdC5iYWNrIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0bGVmdDogNDhycHg7XHJcblx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdHdpZHRoOiA0NHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDQ0cnB4O1xyXG5cclxuXHRcdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDRycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ0cnB4O1xyXG5cdFx0XHRcdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuc3VidGl0IHtcclxuXHRcdFx0cGFkZGluZzogMCA0OHJweDtcclxuXHRcdFx0bWFyZ2luLXRvcDogMjRycHg7XHJcblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cclxuXHRcdFx0LmhlbGxvIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDcycnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMDBycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50aXBzIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA0NHJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJveCB7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gOTZycHgpO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdGJhY2tncm91bmQ6IHVybCgkYmFjay1ncm91bmQtdXJsK1wiL2Jyb2tlci9pY19sb2dpbl9iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRcdC50YWJzIHtcclxuXHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDEwcnB4KTtcclxuXHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiA4OHJweDtcclxuXHJcblx0XHRcdCYuYmcxIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi93b3JrZXIvaWNfbG9naW5fdGl0bGVfYmcxLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCYuYmcyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi93b3JrZXIvaWNfbG9naW5fdGl0bGVfYmcyLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50YWIge1xyXG5cdFx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdFx0aGVpZ2h0OiA4OHJweDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRcdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHQmLmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzIxNkZGOTtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ji5hY3RpdmU6OmFmdGVyIHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHR3aWR0aDogMjhycHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEwcnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdXJsKCRiYWNrLWdyb3VuZC11cmwrXCIvd29ya2VyL2Fycm93X2Rvd25fYmx1ZS5wbmdcIikgbm8tcmVwZWF0O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHRsZWZ0OiA1MCU7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmlucHV0X2JveCB7XHJcblx0XHRcdHBhZGRpbmc6IDAgMzZycHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDUwcnB4O1xyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuXHRcdFx0LmxpbmUge1xyXG5cdFx0XHRcdGhlaWdodDogMTIwcnB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNGOUY5Rjk7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDQwcnB4O1xyXG5cclxuXHRcdFx0XHQubGluZV9pbm5lciB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHJcblx0XHRcdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2OHJweCk7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdFx0XHQubGluZV9pbm5lciB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0LmxlZnQge1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuZ2V0X2NvZGUge1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzIxNkZGOTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzIxNkZGOTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzNHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMzBycHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDI0cnB4O1xyXG5cdFx0XHRcdFx0ZmxleC1zaHJpbms6IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmJ0bl93cmFwIHtcclxuXHRcdFx0bWFyZ2luLXRvcDogODBycHg7XHJcblx0XHRcdHBhZGRpbmc6IDAgMzZycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdFx0XHQuYnRuIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDk2cnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiA5NnJweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoJGJhY2stZ3JvdW5kLXVybCtcIi93b3JrZXIvaWNfbG9naW5fYnRuX2JnLnBuZ1wiKSBuby1yZXBlYXQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNDBycHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IGF1dG87XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cclxuXHRcdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQudmVyaSB7XHJcblx0XHRcdFx0d2lkdGg6IGF1dG87XHJcblx0XHRcdFx0aGVpZ2h0OiA1MHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjMjE2RkY5O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzIxNkZGOTtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdFx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC50aXBzIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0Y29sb3I6ICNGRkE4MDA7XHJcblx0XHRcdHBhZGRpbmc6IDAgMzZycHg7XHJcblx0XHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0LnBvbGljeSB7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTUwcnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGJvdHRvbTogNjBycHg7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuXHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGV4dCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRjb2xvcjogIzlFOUU5RTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gLmNvbnRlbnR7XHJcblx0Ly8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ly8gXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHQvLyBcdC5nZXRfY29kZXtcclxuXHQvLyBcdFx0cGFkZGluZzoxNnJweDtcclxuXHQvLyBcdFx0Zm9udC1zaXplOjI0cnB4O1xyXG5cdC8vIFx0XHRjb2xvcjokYmFzZS1jb2xvcjtcclxuXHQvLyBcdFx0Ym9yZGVyOjFweCBzb2xpZCAkYmFzZS1jb2xvcjtcclxuXHQvLyBcdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdC8vIFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdC8vIFx0XHQmLmRpc2FibGVke1xyXG5cdC8vIFx0XHRcdGNvbG9yOiM5OTk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH1cclxuXHQvLyBcdC50YWJze1xyXG5cdC8vIFx0XHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHQvLyBcdH1cclxuXHQvLyBcdC5iYWNre1xyXG5cdC8vIFx0XHRpbWFnZXtcclxuXHQvLyBcdFx0XHR3aWR0aDogNDBycHg7XHJcblx0Ly8gXHRcdFx0aGVpZ2h0OjQwcnB4O1xyXG5cdC8vIFx0XHRcdG1hcmdpbi1yaWdodDogMTBycHg7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0dGV4dHtcclxuXHQvLyBcdFx0XHRjb2xvcjokYmFzZS1jb2xvcjtcclxuXHQvLyBcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9XHJcblx0Ly8gXHQuYm94e1xyXG5cdC8vIFx0XHR3aWR0aDogODAlO1xyXG5cdC8vIFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ly8gXHRcdHRvcDo1MCU7XHJcblx0Ly8gXHRcdGxlZnQ6NTAlO1xyXG5cdC8vIFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cdC8vIFx0XHQubG9nb3tcclxuXHQvLyBcdFx0XHRtYXJnaW4tYm90dG9tOiA4MHJweDtcclxuXHQvLyBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ly8gXHRcdFx0aW1hZ2V7XHJcblx0Ly8gXHRcdFx0XHR3aWR0aDo4MCU7XHJcblx0Ly8gXHRcdFx0fVxyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHRcdC5idG5ze1xyXG5cdC8vIFx0XHRcdGJ1dHRvbntcclxuXHQvLyBcdFx0XHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHQvLyBcdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDA7XHJcblx0Ly8gXHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICRiYXNlLWNvbG9yO1xyXG5cdC8vIFx0XHRcdH1cclxuXHQvLyBcdFx0XHQuYnRue1xyXG5cdC8vIFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHQvLyBcdFx0XHRcdGhlaWdodDo4MHJweDtcclxuXHQvLyBcdFx0XHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHQvLyBcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQvLyBcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgJGJhc2UtY29sb3I7XHJcblx0Ly8gXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4MHJweDtcclxuXHQvLyBcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdC8vIFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQvLyBcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdC8vIFx0XHRcdFx0JjpudGgtY2hpbGQoMSl7XHJcblx0Ly8gXHRcdFx0XHRcdGJhY2tncm91bmQ6ICRiYXNlLWNvbG9yO1xyXG5cdC8vIFx0XHRcdFx0XHRjb2xvcjojZmZmO1xyXG5cdC8vIFx0XHRcdFx0fVxyXG5cdC8vIFx0XHRcdFx0JjpudGgtY2hpbGQoMil7XHJcblx0Ly8gXHRcdFx0XHRcdGNvbG9yOiRiYXNlLWNvbG9yO1xyXG5cdC8vIFx0XHRcdFx0fVxyXG5cdC8vIFx0XHRcdH1cclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0XHQub3RoZXJfbG9naW57XHJcblx0Ly8gXHRcdFx0LmxpbmV7XHJcblx0Ly8gXHRcdFx0XHRtYXJnaW4tYm90dG9tOjMwcnB4O1xyXG5cdC8vIFx0XHRcdFx0aW1hZ2V7XHJcblx0Ly8gXHRcdFx0XHRcdHdpZHRoOjUwcnB4O1xyXG5cdC8vIFx0XHRcdFx0XHRoZWlnaHQ6NTBycHg7XHJcblx0Ly8gXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTZycHg7XHJcblx0Ly8gXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0Ly8gXHRcdFx0XHR9XHJcblx0Ly8gXHRcdFx0XHRpbnB1dHtcclxuXHQvLyBcdFx0XHRcdFx0aGVpZ2h0OjgwcnB4O1xyXG5cdC8vIFx0XHRcdFx0XHR3aWR0aDpjYWxjKDEwMCUgLSA5NnJweCk7XHJcblx0Ly8gXHRcdFx0XHRcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkICRiYXNlLWNvbG9yO1xyXG5cdC8vIFx0XHRcdFx0XHRwYWRkaW5nOjAgMTBycHg7XHJcblx0Ly8gXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ly8gXHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0Ly8gXHRcdFx0XHR9XHJcblx0Ly8gXHRcdFx0fVxyXG5cdC8vIFx0XHRcdC5idG57XHJcblx0Ly8gXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdC8vIFx0XHRcdFx0aGVpZ2h0OjgwcnB4O1xyXG5cdC8vIFx0XHRcdFx0bGluZS1oZWlnaHQ6IDgwcnB4O1xyXG5cdC8vIFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC8vIFx0XHRcdFx0YmFja2dyb3VuZDokYmFzZS1jb2xvcjtcclxuXHQvLyBcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDgwcnB4O1xyXG5cdC8vIFx0XHRcdFx0bWFyZ2luLXRvcDogNTBycHg7XHJcblx0Ly8gXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC8vIFx0XHRcdFx0Y29sb3I6I2ZmZjtcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0LnBvbGljeXtcclxuXHQvLyBcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ly8gXHRcdFx0bWFyZ2luLXRvcDoxNTBycHg7XHJcblx0Ly8gXHRcdFx0aW1hZ2V7XHJcblx0Ly8gXHRcdFx0XHR3aWR0aDozMHJweDtcclxuXHQvLyBcdFx0XHRcdGhlaWdodDozMHJweDtcclxuXHQvLyBcdFx0XHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0Ly8gXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdC8vIFx0XHRcdH1cclxuXHQvLyBcdFx0XHR0ZXh0e1xyXG5cdC8vIFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHQvLyBcdFx0XHRcdGNvbG9yOiRiYXNlLWNvbG9yO1xyXG5cdC8vIFx0XHRcdH1cclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0fVxyXG5cdC8vIH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWIyMzc1MDRjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHNhc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iMjM3NTA0YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNzE1NDE2OTE5MDk3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkY6L2FwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==