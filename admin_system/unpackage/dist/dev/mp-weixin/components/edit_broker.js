(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/edit_broker"],{

/***/ 145:
/*!***************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_broker.vue?vue&type=template&id=d4252a7a& */ 146);
/* harmony import */ var _edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_broker.vue?vue&type=script&lang=js& */ 148);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_broker.vue?vue&type=style&index=0&lang=scss& */ 150);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/edit_broker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/*!**********************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=template&id=d4252a7a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_broker.vue?vue&type=template&id=d4252a7a& */ 147);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_template_id_d4252a7a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 147:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=template&id=d4252a7a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 148:
/*!****************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_broker.vue?vue&type=script&lang=js& */ 149);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 149:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 96));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 98));
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

// import pickerAddress from '@/components/pickaddress.vue';
function getToday(parm) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (parm == "month") {
    return year + "-" + month;
  } else {
    return year + "-" + month + "-" + day;
  }
}
var app = getApp();
var _default = {
  name: "add_employer",
  props: ["header", "currentPage"],
  data: function data() {
    return {
      currentMainTab: 0,
      id: "",
      userInfo: {
        logo: {
          url: "",
          key: ""
        },
        business_license_image: {
          url: "",
          key: ""
        },
        company_name: "",
        company_address: "",
        city: "",
        unified_social_credit_code: "",
        company_type: "",
        legal_person_name: "",
        legal_person_mobile: "",
        human_resources_permit_image: {
          url: "",
          key: ""
        },
        labor_dispatch_permit_image: {
          url: "",
          key: ""
        }
      }
    };
  },
  created: function created() {
    var paramArr = [];
    if (location.href.indexOf("?") != -1) {
      paramArr = location.href.split("?")[1].split("&");
    }
    for (var i = 0; i < paramArr.length; i++) {
      if (paramArr[i].indexOf("id") != -1) {
        this.id = paramArr[i].split("=")[1];
      }
    }
  },
  components: {
    // pickerAddress
  },
  methods: {
    changeMainTab: function changeMainTab(index) {
      this.currentMainTab = index;
    },
    close: function close() {
      this.showViewBox = false;
    },
    toView: function toView(type) {
      this.showViewBox = true;
      console.log(type, this.yyzzImg.url);
      if (type == "yyzz") {
        this.currentView = this.yyzzImg.url;
      }
      if (type == "hasyyzz") {
        this.currentView = this.userInfo.business_license_image;
      }
    },
    changeTab: function changeTab(index) {
      this.currentIndex = index;
    },
    chooseComponyType: function chooseComponyType(type) {
      this.componyType = type;
    },
    changeType: function changeType(e) {
      console.log(e);
      console.log(this.comValue);
    },
    bindDateChange3: function bindDateChange3(e) {
      console.log(e);
      this.birthday = e.detail.value;
    },
    uploadImg: function uploadImg(type) {
      var _this2 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          uni.showLoading({
            title: "上传中，请稍后"
          });
          _this2.loadimg(type, tempFilePaths[0]);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    editBaseInfo: function editBaseInfo() {
      this.showEdit = true;
      this.editText = "重新提交";
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
                  "accept": "application/json"
                };
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  uni.uploadFile({
                    url: app.globalData.baseUrl + "/broker/upload/image?type=" + type,
                    filePath: filePath,
                    name: "file",
                    header: header,
                    success: function success(resp) {
                      var response = JSON.parse(resp.data);
                      if (response.code == 0) {
                        uni.showToast({
                          title: "图片上传成功"
                        });
                        if (_this.currentIndex == 2) {
                          // 法人信息
                          if (type == "id_card_back") {
                            _this.showidCardBack = true;
                            _this.idCardBack = response.data;
                            _this.$request("/broker/ocr/id-card", {
                              key: response.data.key
                            }, "POST").then(function (res) {
                              if (res.code == 0) {
                                _this.idCardDateline = res.data.back.valid_period;
                              }
                            });
                          }
                          if (type == "id_card_front") {
                            _this.showidCardFront = true;
                            _this.idCardFront = response.data;
                            _this.$request("/broker/ocr/id-card", {
                              key: response.data.key
                            }, "POST").then(function (res) {
                              if (res.code == 0) {
                                _this.name = res.data.front.name;
                                _this.idCard = res.data.front.id_number;
                                _this.gender = res.data.front.sex == "男" ? "male" : "female";
                              }
                            });
                          }
                        }
                        if (_this.currentIndex == 3) {
                          // 联系人信息
                          if (type == "id_card_back") {
                            _this.showconidCardBack = true;
                            _this.conidCardBack = response.data;
                            _this.$request("/broker/ocr/id-card", {
                              key: response.data.key
                            }, "POST").then(function (res) {
                              if (res.code == 0) {
                                _this.conidCardDateline = res.data.back.valid_period;
                              }
                            });
                          }
                          if (type == "id_card_front") {
                            _this.showconidCardFront = true;
                            _this.conidCardFront = response.data;
                            _this.$request("/broker/ocr/id-card", {
                              key: response.data.key
                            }, "POST").then(function (res) {
                              if (res.code == 0) {
                                _this.contactName = res.data.front.name;
                                _this.conidCard = res.data.front.id_number;
                                _this.congender = res.data.front.sex == "男" ? "male" : "female";
                              }
                            });
                          }
                        }
                        if (type == "business_license") {
                          _this.showyyzz = true;
                          _this.yyzzImg = response.data;
                          _this.$request("/broker/ocr/business-license", {
                            key: response.data.key
                          }, "POST").then(function (res) {
                            if (res.code == 0) {
                              _this.companyName = res.data.company_name;
                              _this.creditCode = res.data.credit_code;
                              _this.company_address = res.data.business_address;
                              _this.comValue = res.data.company_type.indexOf("有限责任公司") != -1 ? "limited_liability_company" : "self_employed";
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
    getMsgCode: function getMsgCode() {
      var _this = this;
      var data;
      if (this.currentIndex == 2) {
        if (!this.canSend) {
          uni.showModal({
            title: "验证码已发送，请1分钟后重试。",
            showCancel: false
          });
          return;
        }
        // 法人验证码
        if (this.showEdit) {
          // 验证法人
          data = {
            "mobile": this.userInfo.legal_person_mobile,
            "name": this.userInfo.legal_person_name,
            "id_card_number": this.userInfo.legal_person_id_card_number
          };
        } else {
          // 验证法人
          data = {
            "mobile": this.mobile,
            "name": this.name,
            "id_card_number": this.idCard
          };
        }
      } else if (this.currentIndex == 3) {
        if (!this.canSend2) {
          uni.showModal({
            title: "验证码已发送，请1分钟后重试。",
            showCancel: false
          });
          return;
        }
        // 联系人验证码
        if (this.showEdit) {
          // 验证联系人
          data = {
            "mobile": this.userInfo.contact_mobile,
            "name": this.userInfo.contact_name,
            "id_card_number": this.userInfo.contact_id_card_number
          };
        } else {
          data = {
            "mobile": this.contactMobile,
            "name": this.contactName,
            "id_card_number": this.conidCard
          };
        }
      }
      var url = "/auth/send-sms-verify-code"; //不验证
      // let url = "/broker/sms-verify-code"//验证三要素
      this.$request(url, data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: "验证码发送成功",
            duration: 2000
          });
          if (_this.currentIndex == 2) {
            _this.canSend = false;
            var count = 60;
            _this.codeText = count + "s";
            var t = setInterval(function () {
              if (count > 0) {
                count--;
                _this.codeText = count + "s";
              } else {
                _this.canSend = true;
                _this.codeText = "重新获取";
                clearInterval(t);
              }
            }, 1000);
          } else {
            _this.canSend2 = false;
            var _count = 60;
            _this.codeText2 = _count + "s";
            var _t = setInterval(function () {
              if (_count > 0) {
                _count--;
                _this.codeText2 = _count + "s";
              } else {
                _this.canSend2 = true;
                _this.codeText2 = "重新获取";
                clearInterval(_t);
              }
            }, 1000);
          }
        }
      });
    },
    handleBtn: function handleBtn() {
      var _this4 = this;
      var _this = this;
      if (this.currentIndex < 2) {
        this.currentIndex++;
        this.showBtn2 = true;
        if (this.currentIndex == 2) {
          if (this.showEdit) {
            this.btnText = "重新提审";
          } else {
            this.btnText = "提交审核";
          }
        }
      } else if (this.btnText == "提交审核") {
        uni.showModal({
          title: "温馨提示",
          content: '请仔细核实填写信息是否正确，确认无误请点击“确定”提交资料。',
          success: function success(resp) {
            if (resp.confirm) {
              var data = {
                "company_name": _this.companyName,
                "unified_social_credit_code": _this.creditCode,
                "company_type": _this.comValue,
                "business_license_image": _this.yyzzImg,
                "legal_person_id_card_number": _this.idCard,
                "legal_person_id_card_front_image": _this.idCardFront,
                "legal_person_id_card_back_image": _this.idCardBack,
                "legal_person_name": _this.name,
                "legal_person_gender": _this.gender,
                "legal_person_mobile": _this.mobile,
                "contact_mobile": _this.contactMobile,
                "contact_name": _this.contactName,
                "contact_email": _this.email,
                "business_address": _this.company_address,
                "legal_person_id_card_valid_period": _this.idCardDateline,
                "contact_id_card_valid_period": _this.conidCardDateline,
                "contact_id_card_number": _this.conidCard,
                "contact_id_card_front_image": _this.conidCardFront,
                "contact_id_card_back_image": _this.conidCardBack,
                "contact_sms_verify_code": _this.con_veri_code,
                "legal_person_sms_verify_code": _this.veri_code,
                "contact_gender": _this.congender
              };
              console.log(data);
              _this.$request("/broker/create", data, "POST").then(function (res) {
                if (res.code == 0) {
                  uni.showToast({
                    title: "提交成功，等待审核"
                  });
                  // 更新数据
                  _this.getInfo();
                }
              });
            }
          }
        });
      } else if (this.btnText == "重新提审") {
        console.log("重新提审");
        this.userInfo.contact_sms_verify_code = this.con_veri_code;
        this.userInfo.legal_person_sms_verify_code = this.veri_code;
        this.$request("/broker/update", this.userInfo, "POST").then(function (res) {
          if (res.code == 0) {
            uni.showToast({
              title: "提交成功，等待审核"
            });
            // 更新数据
            _this4.getInfo();
            _this4.showEdit = false;
          }
        });
      }
    },
    chooseGender: function chooseGender(option) {
      this.gender = option;
    },
    chooseLong: function chooseLong() {
      this.isLong = !this.isLong;
      if (this.isLong) {
        this.dateLine = "长期";
      }
    },
    chooseLong2: function chooseLong2() {
      this.isLong2 = !this.isLong2;
      if (this.isLong2) {
        this.dateLine2 = "长期";
      }
    },
    bindDateChange1: function bindDateChange1(e) {
      this.dateLine = e.detail.value;
      if (this.dateLine != "长期") {
        this.isLong = false;
      }
    },
    bindDateChange2: function bindDateChange2(e) {
      this.dateLine2 = e.detail.value;
      if (this.dateLine2 != "长期") {
        this.isLong2 = false;
      }
    },
    getInfo: function getInfo() {
      var _this5 = this;
      this.$request("/broker/info").then(function (res) {
        if (res.code == 0) {
          uni.setStorageSync("userInfo", res.data);
          _this5.userInfo = res.data;
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 150:
/*!*************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_broker.vue?vue&type=style&index=0&lang=scss& */ 151);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_broker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/edit_broker.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/edit_broker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/edit_broker-create-component',
    {
        'components/edit_broker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(145))
        })
    },
    [['components/edit_broker-create-component']]
]);
