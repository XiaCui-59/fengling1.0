(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/project_detail"],{

/***/ 117:
/*!******************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_detail.vue?vue&type=template&id=6989c6b2& */ 118);
/* harmony import */ var _project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_detail.vue?vue&type=script&lang=js& */ 120);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_detail.vue?vue&type=style&index=0&lang=scss& */ 122);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/project_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/*!*************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=template&id=6989c6b2& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_detail.vue?vue&type=template&id=6989c6b2& */ 119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_template_id_6989c6b2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 119:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=template&id=6989c6b2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniTable: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-table/uni-table */ "uni_modules/uni-table/components/uni-table/uni-table").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-table/uni-table.vue */ 201))
    },
    uniTr: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-tr/uni-tr */ "uni_modules/uni-table/components/uni-tr/uni-tr").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-tr/uni-tr.vue */ 208))
    },
    uniTh: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-th/uni-th */ "uni_modules/uni-table/components/uni-th/uni-th").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-th/uni-th.vue */ 215))
    },
    uniTd: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-td/uni-td */ "uni_modules/uni-table/components/uni-td/uni-td").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-td/uni-td.vue */ 222))
    },
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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 =
    _vm.currentMainTab == 0
      ? _vm.__map(_vm.list, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 =
            (_vm.currentTab.value == 1 ||
              _vm.currentTab.value == 2 ||
              _vm.currentTab.value == 3 ||
              _vm.currentTab.value == 4) &&
            item.status != "signing_expired" &&
            item.status != "rejected"
              ? _vm.selectedIds.indexOf(item.id)
              : null
          var g1 = new Date().getFullYear()
          var g2 = item.worker_birthday.slice(0, 4)
          return {
            $orig: $orig,
            g0: g0,
            g1: g1,
            g2: g2,
          }
        })
      : null
  var l1 =
    _vm.showMask && _vm.showFirst
      ? _vm.__map(_vm.waitDepartList, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g3 = new Date().getFullYear()
          var g4 = item.worker_birthday.slice(0, 4)
          return {
            $orig: $orig,
            g3: g3,
            g4: g4,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 120:
/*!*******************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_detail.vue?vue&type=script&lang=js& */ 121);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 121:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _commonData = _interopRequireDefault(__webpack_require__(/*! @/common/commonData.js */ 113));
var searchBox = function searchBox() {
  __webpack_require__.e(/*! require.ensure | components/search_box */ "components/search_box").then((function () {
    return resolve(__webpack_require__(/*! @/components/search_box.vue */ 240));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var pageBox = function pageBox() {
  __webpack_require__.e(/*! require.ensure | components/paging_box */ "components/paging_box").then((function () {
    return resolve(__webpack_require__(/*! @/components/paging_box.vue */ 247));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  name: "contract_list",
  data: function data() {
    return {
      currentMainTab: 1,
      timeStr: "报名",
      list: [],
      tabs: [{
        value: "all-signing-requests",
        text: "全部"
      }, {
        value: "pending-signing-requests",
        text: "已报名"
      }, {
        value: "contracted-signing-requests",
        text: "待报到"
      }, {
        value: "wait-signing-requests",
        text: "待签约"
      }, {
        value: "entry-signing-requests",
        text: "已入职"
      }, {
        value: "depart-signing-requests",
        text: "已离职"
      }],
      status: [{
        value: "pending",
        text: "待雇用"
      }, {
        value: "rejected",
        text: "已拒绝"
      }, {
        value: "signing_rejected",
        text: "报名拒绝"
      }, {
        value: "signing_expired",
        text: "已失效"
      }, {
        value: "approved",
        text: "待签约"
      }, {
        value: "worker_rejected",
        text: "工人拒绝"
      }, {
        value: "contracted",
        text: "待报到"
      }, {
        value: "contract_expired",
        text: "已失效"
      }, {
        value: "fail",
        text: "失约"
      }, {
        value: "entry",
        text: "已入职"
      }, {
        value: "end",
        text: "项目完结"
      }, {
        value: "depart",
        text: "已离职"
      }],
      pagination: {},
      showMask: false,
      showFirst: false,
      showSecond: false,
      showThird: false,
      seleAll: false,
      selectedIds: [],
      selectedIndex: [],
      currentTab: {
        value: "all-signing-requests",
        text: "全部"
      },
      currentPage: 1,
      id: "",
      currentInfo: {
        "broker_mobile": "",
        "broker_name": "",
        "code": "",
        "content": "",
        "id": "",
        "name": "",
        "work_address": "",
        "worker_salary": "",
        "worker_welfare": ""
      },
      waitDepartList: [],
      //待离职名单
      searEmployee: "",
      searStart: "",
      searEnd: "",
      currentWorker: {},
      currentWorkerInfo: {},
      workerCheckinList: [],
      workerProjectRecordList: [],
      workerSalaryList: [],
      currentSubTab: 0,
      checkStatus: [{
        value: "to_be_settled",
        text: "待结算"
      }, {
        value: "to_be_issued",
        text: "待发放"
      }, {
        value: "issued",
        text: "已发放"
      }, {
        value: "voided",
        text: "已作废"
      }],
      salaryHandlePeriod: _commonData.default.paySalaryPeriod,
      period: _commonData.default.periodList,
      showMoreInfo: false,
      moreText: "展开全部"
    };
  },
  components: {
    searchBox: searchBox,
    pageBox: pageBox
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
    // this.getList()
    this.getInfo();
  },
  methods: {
    back: function back() {
      this.setPageName({
        pageName: "project_list"
      }, "", "all");
      this.$emit("getPageName", {
        pageName: "project_list"
      });
    },
    changeMainTab: function changeMainTab(index) {
      this.currentMainTab = index;
    },
    showMore: function showMore() {
      var _this = this;
      this.showMoreInfo = !this.showMoreInfo;
      if (this.showMoreInfo) {
        this.moreText = "收起";
      } else {
        this.moreText = "展开全部";
      }
    },
    toNext: function toNext(e) {
      this.currentPage = e;
      this.resetSeleData();
      this.getList();
    },
    showWorkerDetail: function showWorkerDetail(item) {
      var _this2 = this;
      var url = "/broker/worker/" + item.id + "/info";
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this2.currentWorkerInfo = res.data;
          _this2.showMask = true;
          _this2.showThird = true;
          _this2.getWorkerProjectRecord(item.worker_id);
          _this2.getWorkerSalaryList(item.id);
        }
      });
    },
    getWorkerProjectRecord: function getWorkerProjectRecord(id) {
      var _this3 = this;
      var url = "/broker/worker/" + id + "/request/list";
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this3.workerProjectRecordList = res.data.list;
        }
      });
    },
    getWorkerSalaryList: function getWorkerSalaryList(id) {
      var _this4 = this;
      var url = "/broker/project/salary/" + id + "/list";
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this4.workerSalaryList = res.data.list;
        }
      });
    },
    changeTab: function changeTab(item) {
      this.currentTab.value = item.value;
      this.currentTab.text = item.text;
      this.getList();
      // this.resetSeleData()
    },
    resetSeleData: function resetSeleData() {
      this.selectedIds = [];
      this.selectedIndex = [];
      this.seleAll = false;
    },
    changeSubTab: function changeSubTab(index) {
      this.currentSubTab = index;
    },
    addToList: function addToList(ids) {
      var id = ids;
      console.log(id);
      // 如果存在就移除，不存在就push
      if (this.selectedIds.indexOf(id) == -1) {
        this.selectedIds.push(id);
      } else {
        this.selectedIds.splice(this.selectedIds.indexOf(id), 1);
      }
      if (this.selectedIds.length == this.list.length) {
        this.seleAll = true;
      } else {
        this.seleAll = false;
      }
      console.log(this.selectedIds);
    },
    checkAll: function checkAll() {
      this.seleAll = !this.seleAll;
      if (this.seleAll) {
        var len = this.list.length;
        var arr = [];
        var indexArr = [];
        for (var i = 0; i < len; i++) {
          arr.push(this.list[i].id);
          indexArr.push(i);
        }
        this.selectedIds = arr;
        this.selectedIndex = indexArr;
      } else {
        this.selectedIds = [];
        this.selectedIndex = [];
      }
    },
    navigate: function navigate(obj, id) {
      this.setPageName(obj, id);
    },
    getList: function getList() {
      var _this5 = this;
      var url = "/broker/project/" + this.id + "/" + this.currentTab.value + "?page=" + this.currentPage + "&worker_search=" + this.searEmployee + "&start_time=" + this.searStart + "&end_time=" + this.searEnd + "&page_size=15";
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this5.list = res.data.list;
          _this5.pagination = res.data.pagination;
        }
      });
    },
    showRecord: function showRecord(item) {
      var _this6 = this;
      this.currentWorker = item;
      var url = "/broker/attendance-record/" + this.id + "/" + item.worker_id;
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this6.showMask = true;
          _this6.showSecond = true;
          _this6.workerCheckinList = res.data;
        }
      });
    },
    getInfo: function getInfo() {
      var _this7 = this;
      var url = "/admin/project/" + this.id;
      this.$request(url).then(function (res) {
        if (res.code == 0) {
          _this7.currentInfo = res.data;
        }
      });
    },
    handleSearch: function handleSearch(e) {
      this.searEmployee = e.employeeName;
      this.searStart = e.startTime;
      this.searEnd = e.endTime;
      this.getList();
    },
    batchPass: function batchPass(id, confrimType) {
      var _this8 = this;
      var tips = confrimType ? "已通过" : "已拒绝";
      var arr = [];
      var data = {
        "relation_id": [],
        // 选择数据ID
        "project_id": this.id,
        // 项目ID
        "confirm": confrimType,
        // true 审核 false 拒绝
        "remark": "" // 备注 （非必填）
      };

      if (id) {
        arr.push(id);
        data.relation_id = arr;
      } else {
        data.relation_id = this.selectedIds;
      }
      this.$request("/broker/project/approve", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: tips,
            duration: 2000,
            icon: "none"
          });
          _this8.resetSeleData();
          _this8.getList();
        }
      });
    },
    batchCheckin: function batchCheckin(id, confrimType) {
      var _this9 = this;
      var tips = confrimType ? "已报到" : "已标记失约";
      var arr = [];
      var data = {
        "relation_id": [],
        // 选择数据ID
        "project_id": this.id,
        // 项目ID
        "confirm": confrimType,
        // true 审核 false 拒绝
        "remark": "" // 备注 （非必填）
      };

      if (id) {
        arr.push(id);
        data.relation_id = arr;
      } else {
        data.relation_id = this.selectedIds;
      }
      this.$request("/broker/project/confirm-entry", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: tips,
            duration: 4000,
            icon: "none"
          });
          _this9.resetSeleData();
          _this9.getList();
        }
      });
    },
    batchSign: function batchSign(id, confrimType) {
      var _this10 = this;
      var tips = confrimType ? "已签约" : "已标记未签";
      var arr = [];
      var data = {
        "relation_id": [],
        // 选择数据ID
        "project_id": this.id,
        // 项目ID
        "confirm": confrimType,
        // true 审核 false 拒绝
        "remark": "" // 备注 （非必填）
      };

      if (id) {
        arr.push(id);
        data.relation_id = arr;
      } else {
        data.relation_id = this.selectedIds;
      }
      this.$request("/broker/project/contract", data, "POST").then(function (res) {
        if (res.code == 0) {
          uni.showToast({
            title: tips,
            duration: 4000,
            icon: "none"
          });
          _this10.resetSeleData();
          _this10.getList();
        }
      });
    },
    close: function close() {
      this.showMask = false;
      this.showFirst = false;
      this.showSecond = false;
      this.showThird = false;
    },
    batchDepart: function batchDepart() {
      if (this.selectedIds.length == 0) {
        uni.showToast({
          title: "您还未选择数据",
          icon: "error",
          duration: 2000
        });
        return;
      }
      var arr = [];
      var len = this.list.length;
      var seleLen = this.selectedIds.length;
      console.log(this.list, this.selectedIds);
      for (var i = 0; i < len; i++) {
        for (var j = 0; j < seleLen; j++) {
          if (this.list[i].id == this.selectedIds[j]) {
            arr.push(this.list[i]);
          }
        }
      }
      this.waitDepartList = arr;
      this.showMask = true;
      this.showFirst = true;
    },
    deleteData: function deleteData(id) {
      this.selectedIds.splice(this.selectedIds.indexOf(id), 1);
      this.batchDepart();
      if (this.selectedIds == 0) {
        this.close();
        this.seleAll = false;
      }
    },
    sureDepart: function sureDepart() {
      var _this = this;
      uni.showModal({
        title: "正在提交离职申请",
        content: "请确认离职名单是否正确，提交后无法修改，是否确认提交离职申请？",
        success: function success(res) {
          if (res.confirm) {
            var data = {
              "ids": _this.selectedIds,
              // 已经选择数据ID
              "project_id": _this.id // 项目ID
            };

            _this.$request("/broker/project/add-depart-user", data, "POST").then(function (resp) {
              if (resp.code == 0) {
                _this.resetSeleData();
                _this.getList();
                _this.close();
                uni.showModal({
                  title: "申请已提交",
                  content: "离职申请已通过公众号通知项目经理，请联系项目经理尽快审核离职名单。",
                  showCancel: false
                });
              }
            });
          }
        }
      });
    },
    viewContract: function viewContract(id) {
      var url = "/broker/contract-signing-request/" + id + "/contract-detail-url";
      this.$request(url).then(function (resp) {
        if (resp.code == 0) {
          window.open(resp.data.contract_url);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 122:
/*!****************************************************************************************************************!*\
  !*** E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./project_detail.vue?vue&type=style&index=0&lang=scss& */ 123);
/* harmony import */ var _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_apps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_project_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 123:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/项目文件/lanfeng4.28/release/admin_system/components/project_detail.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/project_detail.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/project_detail-create-component',
    {
        'components/project_detail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(117))
        })
    },
    [['components/project_detail-create-component']]
]);
