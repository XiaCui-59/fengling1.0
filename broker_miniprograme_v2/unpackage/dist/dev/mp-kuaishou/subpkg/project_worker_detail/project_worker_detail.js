(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/project_worker_detail/project_worker_detail"],{

/***/ 166:
/*!***********************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/main.js?{"page":"subpkg%2Fproject_worker_detail%2Fproject_worker_detail"} ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _project_worker_detail = _interopRequireDefault(__webpack_require__(/*! ./subpkg/project_worker_detail/project_worker_detail.vue */ 167));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_project_worker_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 167:
/*!****************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_worker_detail.vue?vue&type=template&id=366e1654&scoped=true& */ 168);
/* harmony import */ var _project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_worker_detail.vue?vue&type=script&lang=js& */ 170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_worker_detail.vue?vue&type=style&index=0&id=366e1654&lang=scss&scoped=true& */ 172);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "366e1654",
  null,
  false,
  _project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/project_worker_detail/project_worker_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/*!***********************************************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=template&id=366e1654&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_worker_detail.vue?vue&type=template&id=366e1654&scoped=true& */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_template_id_366e1654_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 169:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=template&id=366e1654&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.list, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = _vm.workerStatus.filter(function (el) {
      return el.value == item.status
    })
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 170:
/*!*****************************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_worker_detail.vue?vue&type=script&lang=js& */ 171);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _commonData = _interopRequireDefault(__webpack_require__(/*! @/common/commonData */ 50));
var customHeader = function customHeader() {
  __webpack_require__.e(/*! require.ensure | components/custom_header */ "components/custom_header").then((function () {
    return resolve(__webpack_require__(/*! @/components/custom_header.vue */ 237));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var app = getApp();
var _default = {
  data: function data() {
    return {
      imgUrl: app.globalData.baseImageUrl,
      pageName: "已报名",
      marginTop: 0,
      comValue: "",
      startTime: "",
      endTime: "",
      workerStatus: _commonData.default.workerStatus,
      list: [],
      scrollHeight: 0,
      headerHeight: 0,
      maskInnerTop: 0,
      id: "",
      type: "",
      currentPage: 1,
      pagination: {},
      refreshStatus: true,
      isPulling: false,
      status: [{
        value: "enrolled-signing-requests",
        text: "已报名",
        icon: "/broker/ic_sign_in.png"
      }, {
        value: "wait-signing-requests",
        text: "待报到",
        icon: "/broker/ic_checkin.png"
      }, {
        value: "check-in-signing-requests",
        text: "待签约",
        icon: "/broker/ic_sign_in.png"
      }, {
        value: "entry-signing-requests",
        text: "已在职",
        icon: "/broker/ic_sign_in.png"
      }, {
        value: "depart-signing-requests",
        text: "已离职",
        icon: "/broker/ic_depart.png"
      }]
    };
  },
  components: {
    customHeader: customHeader
  },
  onLoad: function onLoad(param) {
    this.id = param.id;
    this.type = param.type;
    this.pageName = this.status.filter(function (el) {
      return el.value == param.type;
    })[0].text;
    var _this = this;
    this.getMarginTop();
    setTimeout(function () {
      _this.getElementInfo();
      _this.getTopHeight();
    }, 500);
    this.getList();
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;
      if (!this.isPulling) {
        this.isPulling = true;
        this.refreshStatus = true;
        this.currentPage = 1;
        this.list = [];
        this.getList();
        setTimeout(function () {
          _this.refreshStatus = false;
          _this.isPulling = false;
        }, 1000);
      }
    },
    getMarginTop: function getMarginTop(e) {
      var menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      this.marginTop = menuButtonInfo.height + menuButtonInfo.top;
      this.maskInnerTop = this.marginTop + 20;
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
      var tabbarHeight = Math.floor(systemInfo.screenHeight * (46 / 844));
      console.log(tabbarHeight, "tabbar");
      _this.scrollHeight = systemInfo.screenHeight - _this.marginTop - tabbarHeight - 5;
    },
    getList: function getList() {
      var _this2 = this;
      var url = "/broker/mini/project/" + this.id + "/" + this.type + "?page=" + this.currentPage;
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this2.list = _this2.list.concat(res.data.list);
          _this2.pagination = res.data.pagination;
        }
      });
    },
    lower: function lower() {
      if (this.list.length < this.pagination.totalCount) {
        this.currentPage++;
        this.getList();
      } else {
        if (this.list.length >= this.pagination.totalCount) {
          uni.showToast({
            title: "已经到底啦~",
            icon: "none",
            duration: 2000
          });
        }
      }
    },
    pass: function pass(item, type) {
      var _this = this;
      var message = type ? "通过" : "拒绝";
      uni.showModal({
        title: "提示",
        content: "当前" + message + "的工人：" + item.worker_name,
        success: function success(respon) {
          if (respon.confirm) {
            var tips = type ? "已通过" : "已拒绝";
            var arr = [];
            arr.push(item.id);
            var data = {
              "relation_id": arr,
              // 选择数据ID
              "project_id": _this.id,
              // 项目ID
              "confirm": type,
              // true 审核 false 拒绝
              "remark": "" // 备注 （非必填）
            };

            _this.$request("/broker/mini/project/enroll-confirm", data, "POST").then(function (res) {
              if (res.code == 0) {
                uni.showModal({
                  title: tips,
                  showCancel: false
                });
                _this.list = [];
                _this.getList();
              }
            });
          }
        }
      });
    },
    checkIn: function checkIn(item, type) {
      var _this = this;
      var message = type ? "报到" : "失约";
      uni.showModal({
        title: "提示",
        content: "当前操作" + message + "的工人：" + item.worker_name,
        success: function success(respon) {
          if (respon.confirm) {
            var tips = type ? "已报到" : "已标记失约";
            var arr = [];
            arr.push(item.id);
            var data = {
              "relation_id": arr,
              // 选择数据ID
              "project_id": _this.id,
              // 项目ID
              "confirm": type,
              // true 审核 false 拒绝
              "remark": "" // 备注 （非必填）
            };

            _this.$request("/broker/mini/project/check-in", data, "POST").then(function (res) {
              if (res.code == 0) {
                uni.showModal({
                  title: tips,
                  showCancel: false
                });
                _this.list = [];
                _this.getList();
              }
            });
          }
        }
      });
    },
    toSign: function toSign(item, type) {
      var _this = this;
      var message = type ? "签约" : "未签";
      uni.showModal({
        title: "提示",
        content: "当前标记" + message + "的工人：" + item.worker_name,
        success: function success(respon) {
          if (respon.confirm) {
            var tips = type ? "已签约" : "已标记未约";
            var arr = [];
            arr.push(item.id);
            var data = {
              "relation_id": arr,
              // 选择数据ID
              "project_id": _this.id,
              // 项目ID
              "confirm": type,
              // true 审核 false 拒绝
              "remark": "" // 备注 （非必填）
            };

            _this.$request("/broker/mini/project/contract-confirm", data, "POST").then(function (res) {
              if (res.code == 0) {
                uni.showModal({
                  title: tips,
                  showCancel: false
                });
                _this.list = [];
                _this.getList();
              }
            });
          }
        }
      });
    },
    makePhoneCall: function makePhoneCall(mobile) {
      uni.makePhoneCall({
        phoneNumber: mobile
      });
    },
    depart: function depart(item) {
      var _this = this;
      var arr = [];
      arr.push(item.id);
      var data = {
        "relation_id": arr,
        // 选择数据ID
        "project_id": this.id,
        // 项目ID
        "remark": "" // 备注 （非必填）
      };

      uni.showModal({
        title: "离职操作",
        content: "当前离职正在办理离职的员工为：" + item.worker_name + "，是否确认离职？",
        success: function success(resp) {
          if (resp.confirm) {
            _this.$request("/broker/mini/project/confirm-depart-user", data, "POST").then(function (res) {
              if (res.code == 0) {
                uni.showModal({
                  title: "离职成功",
                  showCancel: false
                });
                _this.list = [];
                _this.getList();
              }
            });
          }
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-kuaishou/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 172:
/*!**************************************************************************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=style&index=0&id=366e1654&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_worker_detail.vue?vue&type=style&index=0&id=366e1654&lang=scss&scoped=true& */ 173);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_worker_detail_vue_vue_type_style_index_0_id_366e1654_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng5.8/release/broker_miniprograme_v2/subpkg/project_worker_detail/project_worker_detail.vue?vue&type=style&index=0&id=366e1654&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[166,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi/pobnnm67mlofku7YvbGFuZmVuZzUuOC9yZWxlYXNlL2Jyb2tlcl9taW5pcHJvZ3JhbWVfdjIvc3VicGtnL3Byb2plY3Rfd29ya2VyX2RldGFpbC9wcm9qZWN0X3dvcmtlcl9kZXRhaWwudnVlPzc2NzMiLCJ3ZWJwYWNrOi8vL0U6L+mhueebruaWh+S7ti9sYW5mZW5nNS44L3JlbGVhc2UvYnJva2VyX21pbmlwcm9ncmFtZV92Mi9zdWJwa2cvcHJvamVjdF93b3JrZXJfZGV0YWlsL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/NzIzOCIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9wcm9qZWN0X3dvcmtlcl9kZXRhaWwvcHJvamVjdF93b3JrZXJfZGV0YWlsLnZ1ZT82ZDg0IiwidW5pLWFwcDovLy9zdWJwa2cvcHJvamVjdF93b3JrZXJfZGV0YWlsL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0U6L+mhueebruaWh+S7ti9sYW5mZW5nNS44L3JlbGVhc2UvYnJva2VyX21pbmlwcm9ncmFtZV92Mi9zdWJwa2cvcHJvamVjdF93b3JrZXJfZGV0YWlsL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/Yzc2ZCIsIndlYnBhY2s6Ly8vRTov6aG555uu5paH5Lu2L2xhbmZlbmc1LjgvcmVsZWFzZS9icm9rZXJfbWluaXByb2dyYW1lX3YyL3N1YnBrZy9wcm9qZWN0X3dvcmtlcl9kZXRhaWwvcHJvamVjdF93b3JrZXJfZGV0YWlsLnZ1ZT84Njc3Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIiwiZGF0YSIsImltZ1VybCIsInBhZ2VOYW1lIiwibWFyZ2luVG9wIiwiY29tVmFsdWUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwid29ya2VyU3RhdHVzIiwibGlzdCIsInNjcm9sbEhlaWdodCIsImhlYWRlckhlaWdodCIsIm1hc2tJbm5lclRvcCIsImlkIiwidHlwZSIsImN1cnJlbnRQYWdlIiwicGFnaW5hdGlvbiIsInJlZnJlc2hTdGF0dXMiLCJpc1B1bGxpbmciLCJzdGF0dXMiLCJ2YWx1ZSIsInRleHQiLCJpY29uIiwiY29tcG9uZW50cyIsImN1c3RvbUhlYWRlciIsIm9uTG9hZCIsInNldFRpbWVvdXQiLCJfdGhpcyIsIm1ldGhvZHMiLCJyZWZyZXNoRGF0YSIsImdldE1hcmdpblRvcCIsImdldFRvcEhlaWdodCIsImdldEVsZW1lbnRJbmZvIiwiY29uc29sZSIsImdldExpc3QiLCJsb3dlciIsInVuaSIsInRpdGxlIiwiZHVyYXRpb24iLCJwYXNzIiwiY29udGVudCIsInN1Y2Nlc3MiLCJhcnIiLCJzaG93Q2FuY2VsIiwiY2hlY2tJbiIsInRvU2lnbiIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImRlcGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUhBO0FBQ0FBLEVBQUUsQ0FBQ0MsaUNBQWlDLEdBQUdDLG1CQUFtQjtBQUcxREMsVUFBVSxDQUFDQyw4QkFBSSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7QUNMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThJO0FBQzlJO0FBQ3lFO0FBQ0w7QUFDc0M7OztBQUcxRztBQUMySztBQUMzSyxnQkFBZ0Isb0xBQVU7QUFDMUIsRUFBRSwyRkFBTTtBQUNSLEVBQUUsNEdBQU07QUFDUixFQUFFLHFIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdIQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQTZvQixDQUFnQixrcUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0VqcUI7QUFBQTtFQUFBO0lBQUE7RUFBQTtBQUFBO0FBQ0E7QUFBQSxlQUNBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FGO1FBQ0FDO1FBQ0FDO01BQ0EsR0FDQTtRQUNBRjtRQUNBQztRQUNBQztNQUNBLEdBQ0E7UUFDQUY7UUFDQUM7UUFDQUM7TUFDQSxHQUNBO1FBQ0FGO1FBQ0FDO1FBQ0FDO01BQ0E7SUFFQTtFQUNBO0VBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBQztNQUNBQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0FIO1VBQ0FDO1VBQ0FBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FHO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO01BQ0FOO0lBQ0E7SUFDQU87TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7TUFDQTtRQUNBO1VBQ0FDO1lBQ0FDO1lBQ0FmO1lBQ0FnQjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBSDtRQUNBQztRQUNBRztRQUNBQztVQUNBO1lBQ0E7WUFDQTtZQUNBQztZQUNBO2NBQ0E7Y0FBQTtjQUNBO2NBQUE7Y0FDQTtjQUFBO2NBQ0E7WUFDQTs7WUFDQWY7Y0FDQTtnQkFDQVM7a0JBQ0FDO2tCQUNBTTtnQkFDQTtnQkFDQWhCO2dCQUNBQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtJQUNBaUI7TUFDQTtNQUNBO01BQ0FSO1FBQ0FDO1FBQ0FHO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBO1lBQ0FDO1lBQ0E7Y0FDQTtjQUFBO2NBQ0E7Y0FBQTtjQUNBO2NBQUE7Y0FDQTtZQUNBOztZQUNBZjtjQUNBO2dCQUNBUztrQkFDQUM7a0JBQ0FNO2dCQUNBO2dCQUNBaEI7Z0JBQ0FBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBQ0FrQjtNQUNBO01BQ0E7TUFDQVQ7UUFDQUM7UUFDQUc7UUFDQUM7VUFDQTtZQUNBO1lBQ0E7WUFDQUM7WUFDQTtjQUNBO2NBQUE7Y0FDQTtjQUFBO2NBQ0E7Y0FBQTtjQUNBO1lBQ0E7O1lBQ0FmO2NBQ0E7Z0JBQ0FTO2tCQUNBQztrQkFDQU07Z0JBQ0E7Z0JBQ0FoQjtnQkFDQUE7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBRUE7SUFDQW1CO01BQ0FWO1FBQ0FXO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQU47TUFDQTtRQUNBO1FBQUE7UUFDQTtRQUFBO1FBQ0E7TUFDQTs7TUFDQU47UUFDQUM7UUFDQUc7UUFDQUM7VUFDQTtZQUNBZDtjQUNBO2dCQUNBUztrQkFDQUM7a0JBQ0FNO2dCQUNBO2dCQUNBaEI7Z0JBQ0FBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0VBQ0E7QUFDQTtBQUFBLDJCOzs7Ozs7Ozs7Ozs7O0FDcFVBO0FBQUE7QUFBQTtBQUFBO0FBQXd1QyxDQUFnQixxc0NBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E1dkM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJzdWJwa2cvcHJvamVjdF93b3JrZXJfZGV0YWlsL3Byb2plY3Rfd29ya2VyX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vc3VicGtnL3Byb2plY3Rfd29ya2VyX2RldGFpbC9wcm9qZWN0X3dvcmtlcl9kZXRhaWwudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcHJvamVjdF93b3JrZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNjZlMTY1NCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcHJvamVjdF93b3JrZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2NmUxNjU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzY2ZTE2NTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3VicGtnL3Byb2plY3Rfd29ya2VyX2RldGFpbC9wcm9qZWN0X3dvcmtlcl9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNy0wIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9wcm9qZWN0X3dvcmtlcl9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM2NmUxNjU0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGwwID0gX3ZtLl9fbWFwKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB2YXIgJG9yaWcgPSBfdm0uX19nZXRfb3JpZyhpdGVtKVxuICAgIHZhciBnMCA9IF92bS53b3JrZXJTdGF0dXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsLnZhbHVlID09IGl0ZW0uc3RhdHVzXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgJG9yaWc6ICRvcmlnLFxuICAgICAgZzA6IGcwLFxuICAgIH1cbiAgfSlcbiAgX3ZtLiRtcC5kYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICB7XG4gICAgICAkcm9vdDoge1xuICAgICAgICBsMDogbDAsXG4gICAgICB9LFxuICAgIH1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEzLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8Y3VzdG9tSGVhZGVyIDp0aXRsZT1cInBhZ2VOYW1lXCIgOnNob3dCYWNrPVwidHJ1ZVwiIDpoZWFkSGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCI+PC9jdXN0b21IZWFkZXI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOm1hcmdpblRvcCsncHgnfVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJveFwiIDpzdHlsZT1cInt0b3A6bWFyZ2luVG9wKzEwKydweCcsYmFja2dyb3VuZDpsaXN0Lmxlbmd0aD09MD8nI2ZmZic6JyNGM0YzRjUnfVwiPlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyA6c2Nyb2xsLXRvcD1cInNjcm9sbFRvcFwiIHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwic2Nyb2xsLVlcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDpzY3JvbGxIZWlnaHQrJ3B4J31cIiByZWZyZXNoZXItZW5hYmxlZD1cInRydWVcIiA6cmVmcmVzaGVyLXRyaWdnZXJlZD1cInJlZnJlc2hTdGF0dXNcIlxyXG5cdFx0XHRcdFx0QHJlZnJlc2hlcnB1bGxpbmc9XCJyZWZyZXNoRGF0YVwiIEBzY3JvbGx0b2xvd2VyPVwibG93ZXJcIiBAc2Nyb2xsPVwic2Nyb2xsXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV90b3AgZmxleCBmbGV4X2J0d2VlblwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RhdHVzX2ljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaW1nVXJsKyB3b3JrZXJTdGF0dXMuZmlsdGVyKGVsID0+IHtyZXR1cm4gZWwudmFsdWUgPT0gaXRlbS5zdGF0dXN9KVswXS5pY29uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsZWZ0IGZsZXggZmxleC1zdGFydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLndvcmtlcl9hdmF0YXJcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5hbWVcIj57e2l0ZW0ud29ya2VyX25hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpZGNhcmRcIj57e2l0ZW0ud29ya2VyX2lkX2NhcmRfbnVtYmVyfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJzdGF0dXNcIiA6Y2xhc3M9XCJpdGVtLnN0YXR1c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3t3b3JrZXJTdGF0dXMuZmlsdGVyKGVsID0+IHtyZXR1cm4gZWwudmFsdWUgPT0gaXRlbS5zdGF0dXN9KVswXS50ZXh0fX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9taWRkbGUgZmxleCBmbGV4X2Fyb3VuZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWlkX2l0ZW1cIj57e2l0ZW0ud29ya2VyX2dlbmRlcj09XCJtYWxlXCI/XCLnlLdcIjpcIuWls1wifX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRfaXRlbVwiPnt7aXRlbS53b3JrZXJfbmF0aW9ufX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRfaXRlbVwiPnt7aXRlbS53b3JrZXJfYWdlfX08dGV4dCBjbGFzcz1cInBlcmlvZFwiPuWygTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtaWRfaXRlbVwiIHN0eWxlPVwiZm9udC1zaXplOiAwO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL2Jyb2tlci9waG9uZV9pY29uLnBuZydcIiBtb2RlPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibWFrZVBob25lQ2FsbChpdGVtLndvcmtlcl9tb2JpbGUpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX2JvdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZSBmbGV4IGZsZXhfYnR3ZWVuXCJcclxuXHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJ0eXBlID09ICdlbnJvbGxlZC1zaWduaW5nLXJlcXVlc3RzJyAmJiBpdGVtLnN0YXR1cyA9PSAnZW5yb2xsZWQnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wcmEgcmVmdXNlXCIgQGNsaWNrPVwicGFzcyhpdGVtLGZhbHNlKVwiPuaLkue7nTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3ByYSBwYXNzXCIgQGNsaWNrPVwicGFzcyhpdGVtLHRydWUpXCI+6YCa6L+HPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpbmUgZmxleCBmbGV4X2J0d2VlblwiXHJcblx0XHRcdFx0XHRcdFx0XHR2LWlmPVwidHlwZSA9PSAnd2FpdC1zaWduaW5nLXJlcXVlc3RzJyAmJiBpdGVtLnN0YXR1cyA9PSAnd2FpdF9jaGVja19pbidcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3ByYSByZWZ1c2VcIiBAY2xpY2s9XCJjaGVja0luKGl0ZW0sZmFsc2UpXCI+5aSx57qmPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcHJhIHBhc3NcIiBAY2xpY2s9XCJjaGVja0luKGl0ZW0sdHJ1ZSlcIj7miqXliLA8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGluZSBmbGV4IGZsZXhfYnR3ZWVuXCJcclxuXHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJ0eXBlID09ICdjaGVjay1pbi1zaWduaW5nLXJlcXVlc3RzJyAmJiBpdGVtLnN0YXR1cyA9PSAnY2hlY2tfaW4nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wcmEgcmVmdXNlXCIgQGNsaWNrPVwidG9TaWduKGl0ZW0sZmFsc2UpXCI+5pyq562+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcHJhIHBhc3NcIiBAY2xpY2s9XCJ0b1NpZ24oaXRlbSx0cnVlKVwiPuetvue6pjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaW5lIGZsZXggZmxleF9idHdlZW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0di1pZj1cInR5cGUgPT0gJ2VudHJ5LXNpZ25pbmctcmVxdWVzdHMnICYmIGl0ZW0uc3RhdHVzID09ICdlbnRyeSdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3ByYSBwYXNzXCIgQGNsaWNrPVwiZGVwYXJ0KGl0ZW0pXCI+56a76IGMPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZW1wdHlcIiB2LWlmPVwibGlzdC5sZW5ndGggPT0gMFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImltZ1VybCsnL2Jyb2tlci9lbXB0eS5wbmcnXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgY3VzdG9tSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvY3VzdG9tX2hlYWRlci52dWVcIlxyXG5cdGltcG9ydCBjb21tb25EYXRhIGZyb20gXCJAL2NvbW1vbi9jb21tb25EYXRhXCJcclxuXHRjb25zdCBhcHAgPSBnZXRBcHAoKVxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aW1nVXJsOiBhcHAuZ2xvYmFsRGF0YS5iYXNlSW1hZ2VVcmwsXHJcblx0XHRcdFx0cGFnZU5hbWU6IFwi5bey5oql5ZCNXCIsXHJcblx0XHRcdFx0bWFyZ2luVG9wOiAwLFxyXG5cdFx0XHRcdGNvbVZhbHVlOiBcIlwiLFxyXG5cdFx0XHRcdHN0YXJ0VGltZTogXCJcIixcclxuXHRcdFx0XHRlbmRUaW1lOiBcIlwiLFxyXG5cdFx0XHRcdHdvcmtlclN0YXR1czogY29tbW9uRGF0YS53b3JrZXJTdGF0dXMsXHJcblx0XHRcdFx0bGlzdDogW10sXHJcblx0XHRcdFx0c2Nyb2xsSGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGhlYWRlckhlaWdodDogMCxcclxuXHRcdFx0XHRtYXNrSW5uZXJUb3A6IDAsXHJcblx0XHRcdFx0aWQ6IFwiXCIsXHJcblx0XHRcdFx0dHlwZTogXCJcIixcclxuXHRcdFx0XHRjdXJyZW50UGFnZTogMSxcclxuXHRcdFx0XHRwYWdpbmF0aW9uOiB7fSxcclxuXHRcdFx0XHRyZWZyZXNoU3RhdHVzOiB0cnVlLFxyXG5cdFx0XHRcdGlzUHVsbGluZzogZmFsc2UsXHJcblx0XHRcdFx0c3RhdHVzOiBbe1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJlbnJvbGxlZC1zaWduaW5nLXJlcXVlc3RzXCIsXHJcblx0XHRcdFx0XHRcdHRleHQ6IFwi5bey5oql5ZCNXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwiL2Jyb2tlci9pY19zaWduX2luLnBuZ1wiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YWx1ZTogXCJ3YWl0LXNpZ25pbmctcmVxdWVzdHNcIixcclxuXHRcdFx0XHRcdFx0dGV4dDogXCLlvoXmiqXliLBcIixcclxuXHRcdFx0XHRcdFx0aWNvbjogXCIvYnJva2VyL2ljX2NoZWNraW4ucG5nXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBcImNoZWNrLWluLXNpZ25pbmctcmVxdWVzdHNcIixcclxuXHRcdFx0XHRcdFx0dGV4dDogXCLlvoXnrb7nuqZcIixcclxuXHRcdFx0XHRcdFx0aWNvbjogXCIvYnJva2VyL2ljX3NpZ25faW4ucG5nXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBcImVudHJ5LXNpZ25pbmctcmVxdWVzdHNcIixcclxuXHRcdFx0XHRcdFx0dGV4dDogXCLlt7LlnKjogYxcIixcclxuXHRcdFx0XHRcdFx0aWNvbjogXCIvYnJva2VyL2ljX3NpZ25faW4ucG5nXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiBcImRlcGFydC1zaWduaW5nLXJlcXVlc3RzXCIsXHJcblx0XHRcdFx0XHRcdHRleHQ6IFwi5bey56a76IGMXCIsXHJcblx0XHRcdFx0XHRcdGljb246IFwiL2Jyb2tlci9pY19kZXBhcnQucG5nXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGN1c3RvbUhlYWRlclxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChwYXJhbSkge1xyXG5cdFx0XHR0aGlzLmlkID0gcGFyYW0uaWRcclxuXHRcdFx0dGhpcy50eXBlID0gcGFyYW0udHlwZVxyXG5cdFx0XHR0aGlzLnBhZ2VOYW1lID0gdGhpcy5zdGF0dXMuZmlsdGVyKGVsID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZWwudmFsdWUgPT0gcGFyYW0udHlwZVxyXG5cdFx0XHR9KVswXS50ZXh0XHJcblx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0dGhpcy5nZXRNYXJnaW5Ub3AoKVxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF90aGlzLmdldEVsZW1lbnRJbmZvKClcclxuXHRcdFx0XHRfdGhpcy5nZXRUb3BIZWlnaHQoKVxyXG5cdFx0XHR9LCA1MDApXHJcblx0XHRcdHRoaXMuZ2V0TGlzdCgpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRyZWZyZXNoRGF0YSgpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzUHVsbGluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5pc1B1bGxpbmcgPSB0cnVlXHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRQYWdlID0gMVxyXG5cdFx0XHRcdFx0dGhpcy5saXN0ID0gW11cclxuXHRcdFx0XHRcdHRoaXMuZ2V0TGlzdCgpXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5yZWZyZXNoU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0X3RoaXMuaXNQdWxsaW5nID0gZmFsc2VcclxuXHRcdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TWFyZ2luVG9wKGUpIHtcclxuXHRcdFx0XHRsZXQgbWVudUJ1dHRvbkluZm8gPSB1bmkuZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0XHRcdFx0dGhpcy5tYXJnaW5Ub3AgPSBtZW51QnV0dG9uSW5mby5oZWlnaHQgKyBtZW51QnV0dG9uSW5mby50b3BcclxuXHRcdFx0XHR0aGlzLm1hc2tJbm5lclRvcCA9IHRoaXMubWFyZ2luVG9wICsgMjBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VG9wSGVpZ2h0KCkge1xyXG5cdFx0XHRcdGxldCBwZXJjZW50ID0gMjAwIC8gODQ0XHJcblx0XHRcdFx0bGV0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHRcdHRoaXMuaGVhZGVySGVpZ2h0ID0gTWF0aC5mbG9vcihzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAqIHBlcmNlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEVsZW1lbnRJbmZvKCkge1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRsZXQgdG9wSGVpZ2h0ID0gMDtcclxuXHRcdFx0XHRsZXQgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdFx0bGV0IHRhYmJhckhlaWdodCA9IE1hdGguZmxvb3Ioc3lzdGVtSW5mby5zY3JlZW5IZWlnaHQgKiAoNDYgLyA4NDQpKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRhYmJhckhlaWdodCwgXCJ0YWJiYXJcIilcclxuXHRcdFx0XHRfdGhpcy5zY3JvbGxIZWlnaHQgPSBzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodCAtIF90aGlzLm1hcmdpblRvcCAtIHRhYmJhckhlaWdodCAtIDVcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TGlzdCgpIHtcclxuXHRcdFx0XHRsZXQgdXJsID0gXCIvYnJva2VyL21pbmkvcHJvamVjdC9cIiArIHRoaXMuaWQgKyBcIi9cIiArIHRoaXMudHlwZSArIFwiP3BhZ2U9XCIgKyB0aGlzLmN1cnJlbnRQYWdlXHJcblx0XHRcdFx0dGhpcy4kcmVxdWVzdCh1cmwpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGlzdCA9IHRoaXMubGlzdC5jb25jYXQocmVzLmRhdGEubGlzdClcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdpbmF0aW9uID0gcmVzLmRhdGEucGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvd2VyKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxpc3QubGVuZ3RoIDwgdGhpcy5wYWdpbmF0aW9uLnRvdGFsQ291bnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFBhZ2UrK1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRMaXN0KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPj0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsQ291bnQpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5bey57uP5Yiw5bqV5ZWmflwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXNzKGl0ZW0sIHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSB0eXBlID8gXCLpgJrov4dcIiA6IFwi5ouS57udXCJcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIuaPkOekulwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLlvZPliY1cIiArIG1lc3NhZ2UgKyBcIueahOW3peS6uu+8mlwiICsgaXRlbS53b3JrZXJfbmFtZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzcG9uKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb24uY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCB0aXBzID0gdHlwZSA/IFwi5bey6YCa6L+HXCIgOiBcIuW3suaLkue7nVwiXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goaXRlbS5pZClcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFwicmVsYXRpb25faWRcIjogYXJyLCAvLyDpgInmi6nmlbDmja5JRFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJwcm9qZWN0X2lkXCI6IF90aGlzLmlkLCAvLyDpobnnm65JRFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb25maXJtXCI6IHR5cGUsIC8vIHRydWUg5a6h5qC4IGZhbHNlIOaLkue7nVxyXG5cdFx0XHRcdFx0XHRcdFx0XCJyZW1hcmtcIjogXCJcIiAvLyDlpIfms6gg77yI6Z2e5b+F5aGr77yJXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF90aGlzLiRyZXF1ZXN0KFwiL2Jyb2tlci9taW5pL3Byb2plY3QvZW5yb2xsLWNvbmZpcm1cIiwgZGF0YSwgXCJQT1NUXCIpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiB0aXBzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmxpc3QgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5nZXRMaXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGNoZWNrSW4oaXRlbSwgdHlwZSkge1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXNcclxuXHRcdFx0XHRsZXQgbWVzc2FnZSA9IHR5cGUgPyBcIuaKpeWIsFwiIDogXCLlpLHnuqZcIlxyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi5o+Q56S6XCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiBcIuW9k+WJjeaTjeS9nFwiICsgbWVzc2FnZSArIFwi55qE5bel5Lq677yaXCIgKyBpdGVtLndvcmtlcl9uYW1lLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXNwb24pIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3Bvbi5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHRpcHMgPSB0eXBlID8gXCLlt7LmiqXliLBcIiA6IFwi5bey5qCH6K6w5aSx57qmXCJcclxuXHRcdFx0XHRcdFx0XHRsZXQgYXJyID0gW11cclxuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChpdGVtLmlkKVxyXG5cdFx0XHRcdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XCJyZWxhdGlvbl9pZFwiOiBhcnIsIC8vIOmAieaLqeaVsOaNrklEXHJcblx0XHRcdFx0XHRcdFx0XHRcInByb2plY3RfaWRcIjogX3RoaXMuaWQsIC8vIOmhueebrklEXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbmZpcm1cIjogdHlwZSwgLy8gdHJ1ZSDlrqHmoLggZmFsc2Ug5ouS57udXHJcblx0XHRcdFx0XHRcdFx0XHRcInJlbWFya1wiOiBcIlwiIC8vIOWkh+azqCDvvIjpnZ7lv4XloavvvIlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHJlcXVlc3QoXCIvYnJva2VyL21pbmkvcHJvamVjdC9jaGVjay1pblwiLCBkYXRhLCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHRpcHMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMubGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmdldExpc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9TaWduKGl0ZW0sIHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSB0eXBlID8gXCLnrb7nuqZcIiA6IFwi5pyq562+XCJcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIuaPkOekulwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDogXCLlvZPliY3moIforrBcIiArIG1lc3NhZ2UgKyBcIueahOW3peS6uu+8mlwiICsgaXRlbS53b3JrZXJfbmFtZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzcG9uKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb24uY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCB0aXBzID0gdHlwZSA/IFwi5bey562+57qmXCIgOiBcIuW3suagh+iusOacque6plwiXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goaXRlbS5pZClcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFwicmVsYXRpb25faWRcIjogYXJyLCAvLyDpgInmi6nmlbDmja5JRFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJwcm9qZWN0X2lkXCI6IF90aGlzLmlkLCAvLyDpobnnm65JRFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb25maXJtXCI6IHR5cGUsIC8vIHRydWUg5a6h5qC4IGZhbHNlIOaLkue7nVxyXG5cdFx0XHRcdFx0XHRcdFx0XCJyZW1hcmtcIjogXCJcIiAvLyDlpIfms6gg77yI6Z2e5b+F5aGr77yJXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF90aGlzLiRyZXF1ZXN0KFwiL2Jyb2tlci9taW5pL3Byb2plY3QvY29udHJhY3QtY29uZmlybVwiLCBkYXRhLCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHRpcHMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMubGlzdCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdF90aGlzLmdldExpc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0bWFrZVBob25lQ2FsbChtb2JpbGUpIHtcclxuXHRcdFx0XHR1bmkubWFrZVBob25lQ2FsbCh7XHJcblx0XHRcdFx0XHRwaG9uZU51bWJlcjogbW9iaWxlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVwYXJ0KGl0ZW0pIHtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzXHJcblx0XHRcdFx0bGV0IGFyciA9IFtdXHJcblx0XHRcdFx0YXJyLnB1c2goaXRlbS5pZClcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFwicmVsYXRpb25faWRcIjogYXJyLCAvLyDpgInmi6nmlbDmja5JRFxyXG5cdFx0XHRcdFx0XCJwcm9qZWN0X2lkXCI6IHRoaXMuaWQsIC8vIOmhueebrklEXHJcblx0XHRcdFx0XHRcInJlbWFya1wiOiBcIlwiIC8vIOWkh+azqCDvvIjpnZ7lv4XloavvvIlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogXCLnprvogYzmk43kvZxcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwi5b2T5YmN56a76IGM5q2j5Zyo5Yqe55CG56a76IGM55qE5ZGY5bel5Li677yaXCIgKyBpdGVtLndvcmtlcl9uYW1lICsgXCLvvIzmmK/lkKbnoa7orqTnprvogYzvvJ9cIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzcCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcC5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuJHJlcXVlc3QoXCIvYnJva2VyL21pbmkvcHJvamVjdC9jb25maXJtLWRlcGFydC11c2VyXCIsIGRhdGEsIFwiUE9TVFwiKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnprvogYzmiJDlip9cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdGhpcy5saXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuZ2V0TGlzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQ6OnYtZGVlcCB7XHJcblx0XHQudW5pLXNlbGVjdCB7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0aGVpZ2h0OiA4OHJweDtcclxuXHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0cGFkZGluZzogMCA0MHJweDtcclxuXHRcdH1cclxuXHJcblx0XHQudW5pLWljb25zIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0XHQudW5pLXNlbGVjdF9faW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC51bmktZGF0ZS14LS1ib3JkZXIge1xyXG5cdFx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdFx0XHRsaW5lLWhlaWdodDogODhycHg7XHJcblx0XHRcdHBhZGRpbmc6IDAgNDBycHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0XHQudW5pLWRhdGV0aW1lLXBpY2tlci0tYnRuLFxyXG5cdFx0LnVuaS1jYWxlbmRhci1pdGVtX193ZWVrcy1ib3ggLnVuaS1jYWxlbmRhci1pdGVtLS1jaGVja2VkIHtcclxuXHRcdFx0YmFja2dyb3VuZDogI0Y3QkMwNTtcclxuXHRcdH1cclxuXHJcblx0XHQudW5pLWRhdGV0aW1lLXBpY2tlci1idG4tdGV4dCB7XHJcblx0XHRcdGNvbG9yOiAjRjdCQzA1O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm9wcmEge1xyXG5cdFx0d2lkdGg6IDE1NHJweDtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAyN3JweDtcclxuXHJcblx0XHQmLnJlZnVzZSB7XHJcblx0XHRcdGNvbG9yOiAjRkY1MzUzO1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjRkY1MzUzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCYucGFzcyB7XHJcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMyMTZGRjk7XHJcblx0XHRcdGNvbG9yOiAjMjE2RkY5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnRvcF9hcmVhIHtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA5NnJweCk7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiA0OHJweDtcclxuXHJcblx0XHQuc2VsZV9ib3gge1xyXG5cdFx0XHRtYXJnaW46IDAgMjBycHggMjBycHggMDtcclxuXHJcblx0XHRcdC50ZXh0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbWFnZSB7XHJcblx0XHRcdFx0d2lkdGg6IDM0cnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1yaWdodDogOHJweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJveCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gOTZycHgpO1xyXG5cdFx0bGVmdDogNDhycHg7XHJcblx0XHR6LWluZGV4OiAzO1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZycHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRcdC5pdGVtIHtcclxuXHRcdFx0cGFkZGluZzogNDBycHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDE2cnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDJycHggNnJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cclxuXHRcdFx0Lml0ZW1fdG9wIHtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogc3RhcnQ7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxOXJweDtcclxuXHJcblx0XHRcdFx0LnN0YXR1c19pY29uIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMDtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cclxuXHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDc0cnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDc0cnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxlZnQge1xyXG5cdFx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogODhycHg7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogODhycHg7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxOXJweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2NjYztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYmFzZSB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuXHRcdFx0XHRcdFx0Lm5hbWUge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMzNycHg7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5pZGNhcmQge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjdycHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5zdGF0dXMge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDZycHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMjE2RkY5O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHJweDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA0NnJweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblx0XHRcdFx0XHQmLmVudHJ5IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI0VBOTkwMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmLndhaXRfY2hlY2tfaW4ge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMkVENzc1O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCYuY2hlY2tfaW4ge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjRkZERTlGO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogI0VBOTkwMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmLmRlcGFydCB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNGRjUzNTM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuaXRlbV9taWRkbGUge1xyXG5cdFx0XHRcdG1hcmdpbjogMTlycHggMDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAycnB4IHNvbGlkICNFOUU5RTk7XHJcblx0XHRcdFx0aGVpZ2h0OiA3NnJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogNzZycHg7XHJcblxyXG5cdFx0XHRcdC5taWRfaXRlbSB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzMlO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyN3JweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdC5wZXJpb2Qge1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDIzcnB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogIzY4Njg2ODtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNnJweDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAycnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDM1cnB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjRTlFOUU5O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHRvcDogNTAlO1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMDtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdCY6bGFzdC1jaGlsZDo6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDUwcnB4O1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3Byb2plY3Rfd29ya2VyX2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNjZlMTY1NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRjpcXFxcYXBwc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUY6XFxcXGFwcHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxhcHBzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vcHJvamVjdF93b3JrZXJfZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM2NmUxNjU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MTUzMTI0ODYxMThcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRjovYXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIvXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9