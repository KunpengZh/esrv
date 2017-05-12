webpackJsonp([1],Array(23).concat([
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeLayout__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomeLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_HomeLayout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Login__);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Login___default.a
  }, {
    path: '/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Login___default.a
  }, {
    path: '/home',
    name: 'HomeLayout',
    component: __WEBPACK_IMPORTED_MODULE_2__components_HomeLayout___default.a
  }]
}));

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ConfigDocument',
    props: ["options"],
    data: function () {
        return {
            currentCategory: "companySource",
            uplaodDialogTitle: "上传派工单位",
            newCreateDialogTitle: "新建派工单位",
            collabel: "派工单位",
            col2label: "所属公司",
            col3label: "定额工资",
            col4label: "所属类别",
            showlevel2: false,
            showlevel3: false,
            showlevel4: false,
            companySource: true,
            companyAdmin: false,
            companyEmployee: false,
            workItem: false,
            showWorkCategory: false,
            dialogFormVisible: false,
            createFormVisible: false,
            isCreateModel: false,
            isEditModel: false,
            ConfigDataSource: this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']),
            companyDataSource: this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']),
            workCategoryDataSource: this.buildConfigDataSource(this.$store.state.configdoc['workCategory']['data']),
            newTextInput: '',
            attr: '',
            workCategory: '',
            newTextInputList: [],
            originalText: ''
        };
    },
    mounted: function () {
        this.$nextTick(function () {});
    },
    methods: {
        handleCreate: function () {
            this.isCreateModel = true;
            this.isEditModel = false;
            this.createFormVisible = true;
            this.newCreateDialogTitle = "新建" + this.collabel;
        },
        handleImport: function (value) {
            this.dialogFormVisible = true;
        },
        handleCancelNew: function () {
            this.createFormVisible = false;
            this.newTextInput = "";
            this.attr = "";
            this.workCategory = "", this.newTextInputList = [];
            this.isCreateModel = false;
            this.isEditModel = false;
            this.originalText = '';
            // this.showlevel2 = false;
            // this.showlevel3 = false;
        },
        handleAddNew: function () {
            if (this.newTextInput === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '新建' + this.collabel + "不能为空"
                });
                return;
            }
            if (this.showlevel2 && this.attr === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '新建' + this.col2label + "不能为空"
                });
                return;
            }
            if (this.showlevel3 && this.attr === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '新建' + this.col3label + "不能为空"
                });
                return;
            }
            if (this.showlevel4 && this.workCategory === "") {
                this.$notify.error({
                    title: 'Error',
                    message: this.col4label + "不能为空"
                });
                return;
            }
            var obj = {
                "name": this.newTextInput,
                "attr": this.attr
            };
            if (this.showlevel4) {
                obj["workCategory"] = this.workCategory;
            }
            this.newTextInputList.push(obj);
            this.newTextInput = "";
            this.attr = "";
            this.workCategory = "";
        },
        handleConfirmSaveNew: function () {
            if (this.newTextInput !== "") {
                var obj = {
                    "name": this.newTextInput,
                    "attr": this.attr
                };
                if (this.showlevel4) {
                    obj["workCategory"] = this.workCategory;
                }
                this.newTextInputList.push(obj);
                this.newTextInput = "";
                this.attr = "";
            }
            if (this.newTextInputList.length === 0) {
                this.$notify.error({
                    title: 'Error',
                    message: '没有添加新数据'
                });
                return;
            }
            if (!this.$store.state.configdoc[this.currentCategory]['data']) {
                this.$store.state.configdoc[this.currentCategory]['data'] = [];
            }
            for (let i = 0; i < this.newTextInputList.length; i++) {
                this.$store.state.configdoc[this.currentCategory]['data'].push(this.newTextInputList[i]);
            }
            //console.log(this.$store.state.configdoc[this.currentCategory]['data']);
            this.updateConfigDoc(this.$store.state.configdoc[this.currentCategory]['data']);
            this.handleCancelNew();
        },
        buildConfigDataSource: function (obj) {
            var datasource = [];
            if (!obj) {
                return datasource;
            }
            for (let i = 0; i < obj.length; i++) {
                var newobj = {
                    id: i,
                    name: typeof obj[i] == "string" ? obj[i] : obj[i]["name"],
                    attr: typeof obj[i] == "string" ? "" : obj[i]["attr"]
                };
                if (this.showlevel4) {
                    newobj.workCategory = obj[i]["workCategory"] ? obj[i]["workCategory"] : "";
                }
                datasource.push(newobj);
            }
            return datasource;
        },
        switchView: function (viewname) {
            switch (viewname) {
                case "/companySource":
                    this.companySource = true;
                    this.companyAdmin = false;
                    this.companyEmployee = false;
                    this.workItem = false;
                    this.showWorkCategory = false;
                    this.currentCategory = "companySource";
                    this.uplaodDialogTitle = "上传派工单位";
                    this.collabel = "派工单位";
                    this.showlevel2 = false;
                    this.showlevel3 = false;
                    this.showlevel4 = false;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    //this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    break;
                case "/companyAdmin":
                    this.companySource = false;
                    this.companyAdmin = true;
                    this.companyEmployee = false;
                    this.workItem = false;
                    this.showWorkCategory = false;
                    this.currentCategory = "companyAdmin";
                    this.uplaodDialogTitle = "上传派工人员";
                    this.collabel = "派工人员";
                    this.showlevel2 = true;
                    this.showlevel3 = false;
                    this.showlevel4 = false;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companyAdmin']['data']);
                    this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    break;
                case "/companyEmployee":
                    this.companySource = false;
                    this.companyAdmin = false;
                    this.companyEmployee = true;
                    this.workItem = false;
                    this.showWorkCategory = false;
                    this.currentCategory = "companyEmployee";
                    this.uplaodDialogTitle = "上传工作人员";
                    this.collabel = "工作人员";
                    this.showlevel2 = true;
                    this.showlevel3 = false;
                    this.showlevel4 = false;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companyEmployee']['data']);
                    this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    break;
                case "/workItem":
                    this.companySource = false;
                    this.companyAdmin = false;
                    this.companyEmployee = false;
                    this.workItem = true;
                    this.showWorkCategory = false;
                    this.currentCategory = "workItem";
                    this.uplaodDialogTitle = "上传工作任务";
                    this.collabel = "工作任务";
                    this.showlevel2 = false;
                    this.showlevel3 = true;
                    this.showlevel4 = true;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['workItem']['data']);
                    //this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    this.workCategoryDataSource = this.buildConfigDataSource(this.$store.state.configdoc['workCategory']['data']);
                    break;
                case "/showWorkCategory":
                    this.companySource = false;
                    this.companyAdmin = false;
                    this.companyEmployee = false;
                    this.workItem = false;
                    this.showWorkCategory = true;
                    this.currentCategory = "workCategory";
                    this.uplaodDialogTitle = "上传工作定额";
                    this.collabel = "工作定额";
                    this.showlevel2 = false;
                    this.showlevel3 = false;
                    this.showlevel4 = false;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['workCategory']['data']);
                    //this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                    break;
                default:
                    this.companySource = true;
                    this.companyAdmin = false;
                    this.companyEmployee = false;
                    this.workItem = false;
                    this.showWorkCategory = false;
                    this.currentCategory = "companySource";
                    this.uplaodDialogTitle = "上传派工单位";
                    this.collabel = "派工单位";
                    this.showlevel2 = false;
                    this.showlevel3 = false;
                    this.showlevel4 = false;
                    this.ConfigDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
                //this.companyDataSource = this.buildConfigDataSource(this.$store.state.configdoc['companySource']['data']);
            }
        },
        beforeUpload: function (doc) {
            this.fullscreenLoading = true;
        },
        onSuccess: function (response) {
            this.fullscreenLoading = false;
            this.$emit('switchViewEvent', {
                data: response,
                "viewName": "ForcastTableView"
            });
        },
        handleEditSave: function () {
            if (this.newTextInput === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '新建' + this.collabel + "不能为空"
                });
                return;
            }
            if (this.showlevel2 || this.showlevel3) {
                if (this.attr === "") {
                    this.$notify.error({
                        title: 'Error',
                        message: '数据不能为空'
                    });
                    return;
                }
            }
            if (this.showlevel4 && this.workCategory === "") {
                this.$notify.error({
                    title: 'Error',
                    message: this.col4label + "不能为空"
                });
                return;
            }
            var curSource = this.$store.state.configdoc[this.currentCategory]['data'];
            var needupdate = false;
            for (let i = 0; i < curSource.length; i++) {
                if (curSource[i]["name"] === this.originalText) {
                    curSource[i]['name'] = this.newTextInput;
                    curSource[i]['attr'] = this.attr;
                    if (this.showlevel4) {
                        curSource[i]['workCategory'] = this.workCategory;
                    }
                    needupdate = true;
                    break;
                }
            }
            if (!needupdate) {
                this.$notify.info({
                    title: '无需更新',
                    message: '没有数据需要更新'
                });
                return;
            }
            this.updateConfigDoc(curSource);
            this.handleCancelNew();
        },
        updateConfigDoc: function (newdata) {
            this.$http.post("/esrvapi/updateconfigdoc", {
                "configCategory": {
                    "category": this.currentCategory
                },
                "configData": newdata
            }).then(function (res) {
                var result = res.body;
                if (result.message) {
                    this.$notify.error({
                        title: 'Error',
                        message: result.message
                    });
                } else {
                    this.$notify.info({
                        title: '更新成功',
                        message: '数据已经更新到服务器'
                    });
                    this.$store.state.configdoc[this.currentCategory]['data'] = newdata;
                    var newDataSource = this.buildConfigDataSource(newdata);
                    this.ConfigDataSource = newDataSource;
                    // this.$set(this.$store.state.configdoc[this.currentCategory]['data'], newdata);
                    // var newDataSource = this.buildConfigDataSource(newdata);
                    // this.$set(this.ConfigDataSource, newDataSource);
                }
            });
        },
        handleEdit: function (index, row) {
            this.newCreateDialogTitle = "编辑" + this.collabel;
            this.newTextInput = row.name;
            this.originalText = row.name;
            this.attr = row.attr;
            this.workCategory = row.workCategory;
            this.isCreateModel = false;
            this.isEditModel = true;
            this.createFormVisible = true;
        },
        handleDelete: function (index, row) {
            var curSource = this.$store.state.configdoc[this.currentCategory]['data'];
            var needupdate = false;
            for (let i = 0; i < curSource.length; i++) {
                if (curSource[i]["name"] === row.name) {
                    curSource.splice(i, 1);
                    needupdate = true;
                    break;
                }
            }
            if (!needupdate) {
                this.$notify.info({
                    title: '无需更新',
                    message: '没有数据需要更新'
                });
                return;
            }
            this.updateConfigDoc(curSource);
            this.handleCancelNew();
        }
    },
    computed: {
        uploadParam: function () {
            return {
                category: this.currentCategory
            };
        }
    }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'home',
    data: function () {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕',
                id: "0001"
            }, {
                value: '选项2',
                label: '双皮奶',
                id: "0002"
            }, {
                value: '选项3',
                label: '蚵仔煎',
                id: "0003"
            }, {
                value: '选项4',
                label: '龙须面',
                id: "0004"
            }, {
                value: '选项5',
                label: '北京烤鸭',
                id: "0005"
            }],
            value: "value1",
            brand: '',
            releaseDate: '',
            datePickerOptions: {},
            fullscreenLoading: false
        };
    },
    methods: {
        onselectchange: function (value) {
            console.log(value);
        }
    }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_LeftSideBar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_LeftSideBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_LeftSideBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UserManager__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_UserManager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_UserManager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ConfigDocument__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ConfigDocument___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ConfigDocument__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_WorkForm__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_WorkForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_WorkForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_WorkFormDetail__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_WorkFormDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_WorkFormDetail__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'homelayout',
    components: {
        leftSideBar: __WEBPACK_IMPORTED_MODULE_0__components_LeftSideBar___default.a,
        WorkFormDetail: __WEBPACK_IMPORTED_MODULE_6__components_WorkFormDetail___default.a,
        WorkForm: __WEBPACK_IMPORTED_MODULE_5__components_WorkForm___default.a
    },
    data: function () {
        return {
            fullscreenLoading: false,
            currentView: __WEBPACK_IMPORTED_MODULE_5__components_WorkForm___default.a,
            opt: {},
            menuitems: __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */].WorkForm,
            rightComponentClass: "animated bounceInDown"
        };
    },
    methods: {
        RightComponentEvent: function (options) {
            this.opt.data = options.data;
            this.rightComponentClass = options.class;
            this.currentView = options.viewName;
            if (options.menuitems) {
                this.menuitems = __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */][options.menuitems];
            }
        },
        LeftSideBarEvent: function (viewName) {
            var self = this;
            switch (viewName) {
                case "UserManager":
                    this.fullscreenLoading = true;
                    this.$http.get('/esrvadmin/allusers').then(response => {
                        var obj = {
                            viewName: 'UserManager',
                            data: response.body
                        };
                        self.switchViewEvent(obj);
                    }, response => {
                        this.$notify.error({
                            title: 'Error',
                            message: 'Loading data failed from ' + url
                        });
                    });
                    break;
                case "configdocument":
                    this.loadConfigData(function () {
                        self.switchViewEvent({
                            "viewName": "ConfigDocument"
                        });
                    });
                    break;
                case "workform":
                    this.switchViewEvent({
                        "viewName": "WorkForm"
                    });
                    break;
                default:
                    this.currentView = __WEBPACK_IMPORTED_MODULE_1__components_Home___default.a;
            }
        },
        switchViewEvent: function (options) {
            var self = this;
            switch (options.viewName) {
                case "UserManager":
                    if (!self.$store.state.configdoc.companySource || self.$store.state.configdoc.companySource.length <= 0) {
                        self.loadConfigData(function () {
                            self.opt.data = options.data;
                            self.currentView = __WEBPACK_IMPORTED_MODULE_2__components_UserManager___default.a;
                            self.fullscreenLoading = false;
                            self.menuitems = __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */].UserManager;
                        });
                    } else {
                        self.opt.data = options.data;
                        self.currentView = __WEBPACK_IMPORTED_MODULE_2__components_UserManager___default.a;
                        self.fullscreenLoading = false;
                        self.menuitems = __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */].UserManager;
                    }
                    break;
                case "ConfigDocument":
                    self.currentView = __WEBPACK_IMPORTED_MODULE_3__components_ConfigDocument___default.a;
                    self.fullscreenLoading = false;
                    self.menuitems = __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */].ConfigDocument;
                    break;
                case "WorkForm":
                    self.currentView = __WEBPACK_IMPORTED_MODULE_5__components_WorkForm___default.a;
                    self.fullscreenLoading = false;
                    self.menuitems = __WEBPACK_IMPORTED_MODULE_4__components_commondatasources__["a" /* default */].WorkForm;
                    break;
                default:
                    self.fullscreenLoading = false;
                    self.menuitems = [];
                    self.currentView = __WEBPACK_IMPORTED_MODULE_1__components_Home___default.a;
            }
        },
        buildConfigDataSource: function (obj) {
            var datasource = [];
            if (!obj) {
                return datasource;
            }
            for (let i = 0; i < obj.length; i++) {
                datasource.push({
                    id: i,
                    name: typeof obj[i] == "string" ? obj[i] : obj[i]["name"],
                    attr: typeof obj[i] == "string" ? "" : obj[i]["attr"]
                });
            }
            return datasource;
        },
        loadConfigData: function (callback) {
            this.$http.get('/esrvapi/getallconfigdoc').then(function (res) {
                var docList = res.body;
                for (var i = 0; i < docList.length; i++) {
                    var key = docList[i].category;
                    this.$store.state.configdoc[key] = docList[i];
                }
                if (callback) {
                    callback();
                }
            });
        },
        logout: function () {
            this.$http.get("/logout").then(function (res) {
                this.$router.push({
                    path: '/login'
                });
            });
        },
        triggerMenuEvent: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var pathname = e.target.pathname;
            for (var i = 0; i < this.menuitems.length; i++) {
                if (pathname === this.menuitems[i].pathname) {
                    this.$refs.rightComponent[this.menuitems[i].event](pathname);
                }
            }
        }
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'left-side-bar',
    data: function () {
        return {
            isAdmin: this.$store.state.curUser.isAdmin
        };
    },
    methods: {
        triggerEvent: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var pathname = e.target.pathname;
            switch (pathname) {
                case "/configdocument":
                    this.$emit('LeftSideBarEvent', 'configdocument');
                    break;
                case "/usermanager":
                    this.$emit('LeftSideBarEvent', 'UserManager');
                    break;
                case "/workform":
                    this.$emit('LeftSideBarEvent', 'workform');
                    break;
            }
        }
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'login',
    data: function () {
        return {
            username: '',
            password: '',
            errorMsg: ''
        };
    },
    methods: {
        onSubmit: function () {
            let options = { emulateJSON: true };
            this.$http.post("/login", { "username": this.username, "password": this.password }, options).then(function (response) {
                if (response.body && response.body.isAuthenticated) {
                    this.$store.state.curUser.username = response.body.user;
                    this.$store.state.curUser.isAuthenticated = response.body.isAuthenticated;
                    this.$store.state.curUser.role = response.body.role;
                    if (response.body.role === "Admin") {
                        this.$store.state.curUser.isAdmin = true;
                    } else {
                        this.$store.state.curUser.isAdmin = false;
                    }
                    this.$router.push({
                        path: '/home'
                    });
                } else if (response.body && response.body.message) {
                    this.errorMsg = response.body.message;
                }
            });
        }
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["options"],
    data() {
        var companySource = [];
        if (this.$store.state.configdoc.companySource && this.$store.state.configdoc.companySource.data) {
            companySource = this.$store.state.configdoc.companySource.data;
        }
        return {
            UserDataSource: this.options.data,
            dialogFormVisible: false,
            showResetPssword: false,
            isCreateModel: false,
            isEditModel: false,
            menuActiveIndex: '1',
            user: {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            },
            formLabelWidth: '120px',
            companySource: companySource,
            originUser: {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            }
        };
    },
    methods: {
        handleEdit: function (index, row) {
            this.isCreateModel = false, this.isEditModel = true, this.dialogFormVisible = true;
            this.showResetPssword = false;
            this.user.username = row.username;
            this.user.fullname = row.fullname ? row.fullname : row.username;
            this.user.role = row.role ? row.role : "";
            this.user.company = row.company ? row.company : "";
            this.user.password = '';
            this.originUser.fullname = row.fullname ? row.fullname : "";
            this.originUser.role = row.role ? row.role : "";
            this.originUser.company = row.company ? row.company : "";
            this.originUser.password = '';
        },
        handleDelete: function (index, row) {
            var deleteUser = {
                "condition": {
                    "username": row.username
                }
            };
            this.$http.post("/esrvadmin/deleteuser", deleteUser).then(function (res) {
                var result = res.body;
                if (result.ok === 1) {
                    if (result.n > 0) {
                        this.$notify.info({
                            title: 'User Deletion',
                            message: result.n + "'s user has been deleted."
                        });
                        var newUserSource = this.UserDataSource;
                        for (var i = 0; i < newUserSource.length; i++) {
                            if (newUserSource[i].username === row.username) {
                                newUserSource.splice(i, 1);
                                break;
                            }
                        }
                        this.$set(this.UserDataSource, newUserSource);
                    } else {
                        this.$notify.error({
                            title: 'Error',
                            message: "No User been deleted"
                        });
                    }
                } else {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Delete User function failed'
                    });
                }
            });
        },
        configmCreateNewUser: function () {
            if (this.user.username === "" || this.user.username.length < 6) {
                this.$notify.error({
                    title: 'Error',
                    message: '请填入用户登陆ID,不能少于6位'
                });
                return;
            }
            if (this.user.fullname === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '请填入用户全名'
                });
                return;
            }
            if (this.user.role === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '请填入用户角色'
                });
                return;
            }
            if (this.user.company === "") {
                this.$notify.error({
                    title: 'Error',
                    message: '请选择用户公司名称'
                });
                return;
            }
            if (this.user.password === "" || this.user.password.length < 8) {
                this.$notify.error({
                    title: 'Error',
                    message: '请输入用户密码，最少8位'
                });
                return;
            }
            var newUser = {
                "username": this.user.username,
                "fullname": this.user.fullname,
                "company": this.user.company,
                "role": this.user.role,
                "password": this.user.password
            };
            let options = { emulateJSON: true };
            this.$http.post("/login/signup", newUser, options).then(function (res) {
                var result = res.body;
                if (!result._id && result.message) {
                    this.$notify.error({
                        title: 'Error',
                        message: result.message
                    });
                } else {
                    this.UserDataSource.push(result);
                    this.$set(this.UserDataSource, this.UserDataSource);
                    this.isCreateModel = false, this.isEditModel = false, this.dialogFormVisible = false;
                    this.showResetPssword = false;
                }
            });
        },
        confirmUserDialog: function (params) {
            var updateUser = {
                condition: {
                    "username": this.user.username
                },
                data: {}
            };
            var needUpdate = false;
            if (this.user.fullname !== this.originUser.fullname) {
                updateUser.data.fullname = this.user.fullname;
                needUpdate = true;
            }
            if (this.user.role !== this.originUser.role) {
                updateUser.data.role = this.user.role;
                needUpdate = true;
            }
            if (this.user.company !== this.originUser.company) {
                updateUser.data.company = this.user.company;
                needUpdate = true;
            }
            if (this.user.password !== this.originUser.password) {
                if (this.user.password !== "" && this.user.password.length < 8) {
                    this.$notify.error({
                        title: 'Error',
                        message: '你输入的密码不符合最少8位的规则'
                    });
                    return;
                }
                updateUser.data.password = this.user.password;
                needUpdate = true;
            }
            if (needUpdate) {
                this.$http.post("/esrvadmin/updateuser", updateUser).then(function (res) {
                    if (!res.body.length > 0) {
                        console.log("no data returned");
                        this.$notify.info({
                            title: 'Info',
                            message: '没有用户被更新！'
                        });
                        return;
                    }
                    var newUserData = res.body[0];
                    for (var i = 0; i < this.UserDataSource.length; i++) {
                        if (this.UserDataSource[i]._id === newUserData._id) {
                            this.$set(this.UserDataSource, i, newUserData);
                            break;
                        }
                    }
                });
            }
            this.$notify.info({
                title: 'Info',
                message: '用户更新成功！'
            });
            this.dialogFormVisible = false;
            this.originUser = {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            };
            this.user = {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            };
        },
        cancelUserDialog: function () {
            this.dialogFormVisible = false;
            this.user = {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            };
        },
        handleCreateNewUser: function () {
            this.isCreateModel = true, this.isEditModel = false, this.user = {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            };
            this.originUser = {
                username: '',
                fullname: '',
                company: '',
                password: '',
                role: ""
            };
            this.dialogFormVisible = true;
            this.showResetPssword = true;
        }
    }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'WorkForm',
    props: ["options"],
    data() {
        return {
            WorkFormDataSource: [],
            dialogFormVisible: false,
            request: {
                label: {
                    formTitle: "献县供服公司工作派工单",
                    requestId: "编号:",
                    company: "派工单位",
                    requester: "派工人员",
                    creationtime: "派工时间",
                    workitem: "工作任务",
                    workCategory: "任务类别",
                    worklocation: "工作地点",
                    workers: "作业人员",
                    workersnumber: "工作人数",
                    workhour: "工时",
                    returntime: "返回时间"
                },
                data: {
                    requestId: "",
                    company: "",
                    requester: "",
                    creationtime: "",
                    workitem: "",
                    workCategory: "",
                    worklocation: "",
                    workers: [],
                    workersnumber: "",
                    workhour: {
                        text: "",
                        minutes: 0
                    },
                    returntime: "",
                    workcomments: "",
                    workdocument: [],
                    requestStatus: "New"
                },
                datasource: {
                    companySource: [],
                    companyAdmin: [],
                    companyEmployee: [],
                    workItem: [],
                    workCategory: []
                },
                previousValue: {
                    company: "",
                    workCategory: ""
                }
            }
        };
    },
    mounted: function () {
        this.$nextTick(function () {
            this.$http.get("/workformapi/getr").then(function (res) {
                this.WorkFormDataSource = res.body;
            });
        });
    },
    computed: {
        workersnumber: function () {
            return this.request.data.workers.length;
        }
    },
    methods: {
        handleCompanyChange: function (value) {
            if (value !== this.request.previousValue.company) {
                this.request.data.requester = "";
                this.request.data.workers = [];
                this.updateCompanyAdmin(value);
                this.updateCompanyEmployee(value);
                this.request.previousValue.company = value;
            }
        },
        updateCompanyAdmin: function (value) {
            var source = this.$store.state.configdoc["companyAdmin"]["data"];
            var companyAdminSource = [];
            for (var i = 0; i < source.length; i++) {
                if (source[i].attr === value) {
                    companyAdminSource.push(source[i]);
                }
            }
            this.$set(this.request.datasource, "companyAdmin", companyAdminSource);
        },
        updateCompanyEmployee: function (value) {
            var source = this.$store.state.configdoc["companyEmployee"]["data"];
            var companyEmployeeSource = [];
            for (var i = 0; i < source.length; i++) {
                if (source[i].attr === value) {
                    companyEmployeeSource.push(source[i]);
                }
            }
            this.$set(this.request.datasource, "companyEmployee", companyEmployeeSource);
        },
        handleWorkCategoryChange: function (value) {
            if (value !== this.request.previousValue.workCategory) {
                this.request.data.workitem = "";
                this.updateWorkItems(value);
                this.request.previousValue.workCategory = value;
            }
        },
        updateWorkItems: function (value) {
            var source = this.$store.state.configdoc["workItem"]["data"];
            var workItemSource = [];
            for (var i = 0; i < source.length; i++) {
                if (source[i].workCategory === value) {
                    workItemSource.push(source[i]);
                }
            }
            this.$set(this.request.datasource, "workItem", workItemSource);
        },
        handleEdit: function (index, row) {
            this.$emit('RightComponentEvent', {
                data: row,
                viewName: "WorkFormDetail",
                class: "animated bounceInRight",
                menuitems: "WorkFormDetail"
            });
        },
        saveAndCreateNew: function (index, row) {
            var self = this;
            this.saveRequest(function () {
                self.restoreRequestStatus();
                self.$http.get('/workformapi/requestid').then(function (res) {
                    var strbody = res.body;
                    if (!strbody.requestId || !strbody.strtime) {
                        this.$notify.error({
                            title: 'Error',
                            message: "未能从服务器取得派工单编号"
                        });
                        return;
                    }
                    self.request.data.creationtime = strbody.strtime;
                    self.request.data.requestId = strbody.requestId;
                });
            });
        },
        saveRequestForm: function () {
            var self = this;
            this.saveRequest(function () {
                self.cancel();
            });
        },
        saveRequest: function (callback) {
            this.request.data.workersnumber = this.workersnumber;
            if (!this.validateRequestForm()) {
                return;
            }
            this.$http.post("/workformapi/save", {
                data: this.request.data
            }).then(function (res) {
                if (res.status === 200 && res.body.requestId) {
                    this.$notify.info({
                        title: '保存成功',
                        message: "保存成功"
                    });
                    var tsource = this.WorkFormDataSource;
                    tsource.push(res.body);
                    this.$set(this.WorkFormDataSource, tsource);
                    if (callback) {
                        callback();
                    }
                } else {
                    this.$notify.error({
                        title: 'Error',
                        message: res.body
                    });
                    return;
                }
            });
        },
        restoreRequestStatus: function () {
            for (let key in this.request.data) {
                this.request.data[key] = '';
            }
            this.request.data.requestStatus = "New";
            this.request.data.workhour = {
                text: "",
                minutes: 0
            };
            this.request.datasource.companyAdmin = [];
            this.request.datasource.companyEmployee = [];
            this.request.datasource.workItem = [];
        },
        cancel: function () {
            this.dialogFormVisible = false;
            this.restoreRequestStatus();
        },
        switchView: function () {
            this.handleCreate();
        },
        handleCreate: function () {
            var self = this;
            if (this.$store.state.configdoc.companySource.length <= 0) {
                this.loadConfigData(function () {
                    self.$http.get('/workformapi/requestid').then(function (res) {
                        var strbody = res.body;
                        if (!strbody.requestId || !strbody.strtime) {
                            this.$notify.error({
                                title: 'Error',
                                message: "未能从服务器取得派工单编号"
                            });
                            return;
                        }
                        self.request.data.creationtime = strbody.strtime;
                        self.request.data.requestId = strbody.requestId;
                        self.dialogFormVisible = true;
                    });
                });
            } else {
                if (this.request.datasource.companySource.length <= 0) {
                    this.request.datasource.companySource = this.$store.state.configdoc["companySource"]["data"];
                    //this.request.datasource.companyAdmin = this.$store.state.configdoc["companyAdmin"]["data"];
                    //this.request.datasource.companyEmployee = this.$store.state.configdoc["companyEmployee"]["data"];
                    //this.request.datasource.workItem = this.$store.state.configdoc["workItem"]["data"];
                    this.request.datasource.workCategory = this.$store.state.configdoc["workCategory"]["data"];
                }
                self.$http.get('/workformapi/requestid').then(function (res) {
                    var strbody = res.body;
                    if (!strbody.requestId || !strbody.strtime) {
                        this.$notify.error({
                            title: 'Error',
                            message: "未能从服务器取得派工单编号"
                        });
                        return;
                    }
                    self.request.data.creationtime = strbody.strtime;
                    self.request.data.requestId = strbody.requestId;
                    self.dialogFormVisible = true;
                });
            }
        },
        loadConfigData: function (callback) {
            this.$http.get('/esrvapi/getallconfigdoc').then(function (res) {
                var docList = res.body;
                for (var i = 0; i < docList.length; i++) {
                    var key = docList[i].category;
                    this.$store.state.configdoc[key] = docList[i];
                }
                this.request.datasource.companySource = this.$store.state.configdoc["companySource"]["data"];
                //this.request.datasource.companyAdmin = this.$store.state.configdoc["companyAdmin"]["data"];
                //this.request.datasource.companyEmployee = this.$store.state.configdoc["companyEmployee"]["data"];
                //this.request.datasource.workItem = this.$store.state.configdoc["workItem"]["data"];
                this.request.datasource.workCategory = this.$store.state.configdoc["workCategory"]["data"];
                if (callback) {
                    callback();
                }
            });
        },
        validateRequestForm: function () {
            if (this.request.data.company === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "派工单位不能为空"
                });
                return false;
            }
            if (this.request.data.requester === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "派工人员不能为空"
                });
                return false;
            }
            if (this.request.data.workitem === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "工作任务不能为空"
                });
                return false;
            }
            if (this.request.data.worklocation === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "工作地点不能为空"
                });
                return false;
            }
            if (this.request.data.workers.length <= 0) {
                this.$notify.error({
                    title: 'Error',
                    message: "作业人员不能为空"
                });
                return false;
            }
            if (this.request.data.workCategory === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "任务类别不能为空"
                });
                return false;
            }
            // var returntime = this.request.data.returntime;
            // if (returntime !== "") {
            //     var returntimestamp = Date.parse(new Date(returntime)) / 1000 / 60;
            //     var createtimestamp = Date.parse(new Date(this.request.data.creationtime)) / 1000 / 60;
            //     if (returntimestamp <= createtimestamp) {
            //         this.$notify.error({
            //             title: 'Error',
            //             message: "返回时间不能早于派工时间"
            //         });
            //         return false;
            //     }
            // }
            return true;
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'WorkFormDetail',
    props: ["options"],
    data() {
        return {
            isWorkFormClosed: false,
            isEdithModel: true,
            dialogFormVisible: false,
            uplaodDialogTitle: "上传现场照片",
            request: {
                label: {
                    formTitle: "献县供服公司工作派工单",
                    requestId: "编号:",
                    company: "派工单位",
                    requester: "派工人员",
                    creationtime: "派工时间",
                    workitem: "工作任务",
                    workCategory: "任务类别",
                    worklocation: "工作地点",
                    workers: "作业人员",
                    workersnumber: "工作人数",
                    workhour: "工时",
                    returntime: "返回时间"
                },
                data: this.options.data,
                datasource: {
                    companySource: [],
                    companyAdmin: [],
                    companyEmployee: [],
                    workItem: [],
                    workCategory: []
                }
            },
            workdocuments: [],
            picdescription: ""
        };
    },
    mounted: function () {
        this.$nextTick(function () {
            var self = this;
            if (this.request.data.requestStatus === "Closed") {
                this.isWorkFormClosed = true;
            } else {
                this.isWorkFormClosed = false;
            }
            if (this.$store.state.configdoc.companySource.length <= 0) {
                this.loadConfigData(function () {

                    self.request.datasource.companySource = self.$store.state.configdoc["companySource"]["data"];
                    self.request.datasource.companyAdmin = self.$store.state.configdoc["companyAdmin"]["data"];
                    self.request.datasource.companyEmployee = self.$store.state.configdoc["companyEmployee"]["data"];
                    self.request.datasource.workItem = self.$store.state.configdoc["workItem"]["data"];
                    self.request.datasource.workCategory = self.$store.state.configdoc["workCategory"]["data"];
                    self.isEdithModel = true;
                });
            } else {
                if (this.request.datasource.companySource.length <= 0) {
                    this.request.datasource.companySource = this.$store.state.configdoc["companySource"]["data"];
                    this.request.datasource.companyAdmin = this.$store.state.configdoc["companyAdmin"]["data"];
                    this.request.datasource.companyEmployee = this.$store.state.configdoc["companyEmployee"]["data"];
                    this.request.datasource.workItem = this.$store.state.configdoc["workItem"]["data"];
                    this.request.datasource.workCategory = this.$store.state.configdoc["workCategory"]["data"];
                }
                this.isEdithModel = true;
            }
            this.calculateWorkDocuments(this.request.data.workdocument);
        });
    },
    computed: {
        workersnumber: function () {
            return this.request.data.workers.length;
        }
    },
    methods: {
        showUploadDialog: function () {
            this.dialogFormVisible = true;
        },
        completeRequestForm: function () {
            var self = this;
            if (!this.validateRequestForm()) {
                return;
            }
            if (this.request.data.returntime === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "请填写返回时间"
                });
                return;
            }
            this.request.data.requestStatus = "Closed";
            this.saveRequest();
        },
        calculateWorkHour: function (returntime) {
            if (returntime !== "") {
                var returntimestamp = Math.floor(Date.parse(new Date(returntime)) / 1000 / 60);
                var createtimestamp = Math.floor(Date.parse(new Date(this.request.data.creationtime)) / 1000 / 60);
                if (returntimestamp <= createtimestamp) {
                    this.$notify.error({
                        title: 'Error',
                        message: "返回时间不能早于派工时间:" + this.request.data.creationtime
                    });
                    this.request.data.returntime = "";
                    return;
                } else {
                    //this.request.data.workhour = Math.ceil((returntimestamp - createtimestamp) / 60);
                    this.request.data.workhour.text = Math.floor((returntimestamp - createtimestamp) / 60) + "小时 " + (returntimestamp - createtimestamp) % 60 + "分钟";
                    this.request.data.workhour.minutes = returntimestamp - createtimestamp;
                }
            }
        },
        saveRequest: function () {
            var self = this;
            this.request.data.workersnumber = this.workersnumber;
            if (!this.validateRequestForm()) {
                return;
            }
            this.$http.post("/workformapi/save", {
                data: this.request.data
            }).then(function (res) {
                if (res.status === 200 && res.body.requestId) {
                    this.$notify.info({
                        title: '保存成功',
                        message: "保存成功"
                    });
                    this.returnData(res.body);
                } else {
                    this.$notify.error({
                        title: 'Error',
                        message: res.body
                    });
                    return;
                }
            });
        },
        returnData: function (data) {
            this.$emit('RightComponentEvent', {
                data: data,
                viewName: "WorkForm",
                class: "animated bounceInLeft",
                menuitems: "WorkForm"
            });
        },
        loadConfigData: function (callback) {
            this.$http.get('/esrvapi/getallconfigdoc').then(function (res) {
                var docList = res.body;
                for (var i = 0; i < docList.length; i++) {
                    var key = docList[i].category;
                    this.$store.state.configdoc[key] = docList[i];
                }
                if (callback) {
                    callback();
                }
            });
        },
        switchView: function () {
            this.returnData();
        },
        validateRequestForm: function () {
            if (this.request.data.company === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "派工单位不能为空"
                });
                return false;
            }
            if (this.request.data.requester === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "派工人员不能为空"
                });
                return false;
            }
            if (this.request.data.workitem === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "工作任务不能为空"
                });
                return false;
            }
            if (this.request.data.worklocation === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "工作地点不能为空"
                });
                return false;
            }
            if (this.request.data.workers.length <= 0) {
                this.$notify.error({
                    title: 'Error',
                    message: "作业人员不能为空"
                });
                return false;
            }
            if (this.request.data.workCategory === "") {
                this.$notify.error({
                    title: 'Error',
                    message: "任务类别不能为空"
                });
                return false;
            }
            var returntime = this.request.data.returntime;
            if (returntime !== "") {
                var returntimestamp = Date.parse(new Date(returntime)) / 1000 / 60;
                var createtimestamp = Date.parse(new Date(this.request.data.creationtime)) / 1000 / 60;
                if (returntimestamp <= createtimestamp) {
                    this.$notify.error({
                        title: 'Error',
                        message: "返回时间不能早于派工时间"
                    });
                    return false;
                }
            }
            return true;
        },
        onSuccessUpload: function (res) {
            this.$refs.upload.uploadFiles = [];
            if (res.message) {
                this.$notify.error({
                    title: 'Error',
                    message: res.message
                });
            } else if (res.length > 0) {
                if (res[0]["workdocument"]) {
                    this.request.data.workdocument = res[0]["workdocument"];
                    // this.$set(this.request.data, "workdocument", res[0]["workdocument"]);
                    this.calculateWorkDocuments(this.request.data.workdocument);
                }
            }
        },
        calculateWorkDocuments: function (source) {
            if (!typeof source === 'Object') {
                console.log("only Array allowed for Work documents");
                return;
            }
            var newWorkdocuments = [];
            for (var i = 0; i < source.length; i++) {
                var filename = source[i].filename.replace("public", "");
                var doc = {
                    key: i,
                    filename: filename,
                    uploadtime: source[i].uploadtime,
                    description: source[i].description
                };
                newWorkdocuments.push(doc);
            }
            //console.log(newWorkdocuments);
            //this.$set(this.workdocuments,'workdocuments', newWorkdocuments);
            this.workdocuments = newWorkdocuments;
        },
        cancelUpload: function () {
            this.dialogFormVisible = false;
            this.picdescription = "";
        },
        submitUpload: function () {
            var uploadFiles = this.$refs.upload.uploadFiles;
            if (uploadFiles.length > 1) {
                this.$notify.error({
                    title: 'Error',
                    message: "每次只能上传一个文件"
                });
                return;
            }
            this.$refs.upload.submit();
        },
        uploadParam: function () {
            if (!this.request.data.workdocument) {
                this.request.data.workdocument = [];
            }
            return {
                requestId: this.request.data.requestId,
                description: this.picdescription
            };
        }
    }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  "UserManager": [{
    "id": "0001",
    "pathname": "/createNewUser",
    "menu": "新建用户",
    "event": "handleCreateNewUser"
  }],
  "ConfigDocument": [{
    "id": "0001",
    "pathname": "/serviceCompany",
    "menu": "派工单位",
    "event": "switchView"
  }, {
    "id": "0002",
    "pathname": "/companyAdmin",
    "menu": "派工人员",
    "event": "switchView"
  }, {
    "id": "0003",
    "pathname": "/companyEmployee",
    "menu": "工作人员",
    "event": "switchView"
  }, {
    "id": "0004",
    "pathname": "/showWorkCategory",
    "menu": "工作类别",
    "event": "switchView"
  }, {
    "id": "0005",
    "pathname": "/workItem",
    "menu": "工作任务",
    "event": "switchView"
  }],
  "WorkForm": [{
    "id": "0001",
    "pathname": "/createrequest",
    "menu": "新建派工单",
    "event": "switchView"
  }],
  "WorkFormDetail": [{
    "id": "0001",
    "pathname": "/goback",
    "menu": "  返回前页",
    "event": "switchView"
  }]
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_theme_default_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(29);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_element_ui___default.a, {
  locale: __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_locale_lang_en___default.a
});

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

const vuex_store = new __WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */].Store({
  state: {
    curUser: {
      username: "",
      role: "",
      isAdmin: false,
      company: ""
    },
    configdoc: {
      companySource: [],
      companyAdmin: [],
      companyEmployee: [],
      workItem: [],
      workCategory: []
    }
  },
  mutations: {
    //   isAdmin:function(){
    //   return state.curUser.role==="Admin"
    // }
  }
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: vuex_store, //注入到vue
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_2__App___default.a
  },
  data: function () {
    this.$http.get('/login/isAuthenticated').then(response => {
      // success callback
      console.log(response.body);
      var isAuthenticated = false;
      if (response.body && response.body.isAuthenticated) {
        isAuthenticated = response.body.isAuthenticated;
      }
      if (isAuthenticated) {
        this.$store.state.curUser.username = response.body.user;
        this.$store.state.curUser.isAuthenticated = response.body.isAuthenticated;
        this.$store.state.curUser.role = response.body.role;
        this.$store.state.curUser.company = response.body.company;
        if (response.body.role === "Admin") {
          this.$store.state.curUser.isAdmin = true;
        } else {
          this.$store.state.curUser.isAdmin = false;
        }
        this.$router.push({
          path: '/home'
        });
      } else {
        this.$router.push({
          path: '/login'
        });
      }
    }, response => {
      // error callback
      console.log(response.body);
    });
    return {};
  }
});

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(80)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(81)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "oneui leftSideBar"
  }, [_c('h3', {
    staticClass: "paddingBottom"
  }, [_vm._v("工单生成")]), _vm._v(" "), _c('ul', {
    staticClass: "marginBottom"
  }, [_c('li', {
    staticClass: "paddingBottom"
  }, [_c('a', {
    attrs: {
      "href": "/workform"
    },
    on: {
      "click": _vm.triggerEvent
    }
  }, [_vm._v("\b工单派工")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('h3', {
    staticClass: "paddingBottom"
  }, [_vm._v("汇总查询")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', {
    staticClass: "paddingBottom"
  }, [_vm._v("汇总打印")]), _vm._v(" "), _vm._m(3), _vm._v(" "), (_vm.isAdmin) ? _c('h3', {
    staticClass: "paddingBottom"
  }, [_vm._v("管理员工具")]) : _vm._e(), _vm._v(" "), (_vm.isAdmin) ? _c('ul', {
    staticClass: "marginBottom"
  }, [_c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-upload"
    }
  }, [_c('a', {
    attrs: {
      "href": "/configdocument"
    },
    on: {
      "click": _vm.triggerEvent
    }
  }, [_vm._v("数据导入")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "/usermanager"
    },
    on: {
      "click": _vm.triggerEvent
    }
  }, [_vm._v("用户管理")])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "paddingBottom"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("完成工单")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "paddingBottom"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("工时计算")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "marginBottom"
  }, [_c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-upload"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("工单编号查询")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("派工单位查询")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("工作人员查询")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("县公司汇总查询")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "marginBottom"
  }, [_c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-upload"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("生成月报")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("生成年报")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("按派工单位月明细报表")])]), _vm._v(" "), _c('li', {
    staticClass: "paddingBottom",
    attrs: {
      "id": "bom-show"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("按派工单位年明细报表")])])])
}]}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "height": "700px",
      "padding": "20px"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.WorkFormDataSource,
      "border": "",
      "max-height": "650"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "requestId",
      "label": "工单编号",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "company",
      "label": "派工单位",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "requester",
      "label": "派工人员",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "creationtime",
      "label": "派工时间",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "returntime",
      "label": "返回时间",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "workitem",
      "label": "工作任务",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([
      ["default", function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")])]
      }]
    ])
  })], 1)], 1), _vm._v(" "), _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "v-modal",
    staticStyle: {
      "z-index": "2000"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "el-dialog__wrapper",
    staticStyle: {
      "z-index": "2001"
    }
  }, [_c('div', {
    staticClass: "el-dialog",
    staticStyle: {
      "padding": "25px",
      "padding-top": "40px"
    },
    attrs: {
      "id": "formdialog"
    }
  }, [_c('el-row', [_c('el-col', {
    staticStyle: {
      "text-align": "center",
      "padding-bottom": "5px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('span', {
    staticClass: "requestFormTitle"
  }, [_vm._v(_vm._s(_vm.request.label.formTitle))])])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    staticStyle: {
      "text-align": "right",
      "padding": "10px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.request.label.requestId))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.request.data.requestId))])])], 1), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.request
    }
  }, [_c('table', {
    staticClass: "bordered",
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.company))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "23%"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": ""
    },
    on: {
      "change": _vm.handleCompanyChange
    },
    model: {
      value: (_vm.request.data.company),
      callback: function($$v) {
        _vm.request.data.company = $$v
      },
      expression: "request.data.company"
    }
  }, _vm._l((_vm.request.datasource.companySource), function(company) {
    return _c('el-option', {
      key: company.name,
      attrs: {
        "label": company.name,
        "value": company.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.requester))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "22%"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.request.data.requester),
      callback: function($$v) {
        _vm.request.data.requester = $$v
      },
      expression: "request.data.requester"
    }
  }, _vm._l((_vm.request.datasource.companyAdmin), function(requester) {
    return _c('el-option', {
      key: requester.name,
      attrs: {
        "label": requester.name,
        "value": requester.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.creationtime))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "25%"
    }
  }, [_vm._v(_vm._s(_vm.request.data.creationtime))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.workers))]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "colspan": "3"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "filterable": "",
      "multiple": ""
    },
    model: {
      value: (_vm.request.data.workers),
      callback: function($$v) {
        _vm.request.data.workers = $$v
      },
      expression: "request.data.workers"
    }
  }, _vm._l((_vm.request.datasource.companyEmployee), function(workers) {
    return _c('el-option', {
      key: workers.name,
      attrs: {
        "label": workers.name,
        "value": workers.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workhour))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm.request.data.workhour.text) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.workCategory))]), _vm._v(" "), _c('td', [_c('el-select', {
    on: {
      "change": _vm.handleWorkCategoryChange
    },
    model: {
      value: (_vm.request.data.workCategory),
      callback: function($$v) {
        _vm.request.data.workCategory = $$v
      },
      expression: "request.data.workCategory"
    }
  }, _vm._l((_vm.request.datasource.workCategory), function(workcategory) {
    return _c('el-option', {
      key: workcategory.name,
      attrs: {
        "label": workcategory.name,
        "value": workcategory.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workitem))]), _vm._v(" "), _c('td', [_c('el-select', {
    model: {
      value: (_vm.request.data.workitem),
      callback: function($$v) {
        _vm.request.data.workitem = $$v
      },
      expression: "request.data.workitem"
    }
  }, _vm._l((_vm.request.datasource.workItem), function(workitem) {
    return _c('el-option', {
      key: workitem.name,
      attrs: {
        "label": workitem.name,
        "value": workitem.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workersnumber))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.workersnumber))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.worklocation))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入工作地点"
    },
    model: {
      value: (_vm.request.data.worklocation),
      callback: function($$v) {
        _vm.request.data.worklocation = $$v
      },
      expression: "request.data.worklocation"
    }
  })], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.returntime))]), _vm._v(" "), _c('td', [_c('el-date-picker', {
    attrs: {
      "disabled": true,
      "format": "yyyy-MM-dd HH:mm:ss",
      "align": "right",
      "type": "datetime",
      "placeholder": "选择返回时间"
    },
    model: {
      value: (_vm.request.data.returntime),
      callback: function($$v) {
        _vm.request.data.returntime = $$v
      },
      expression: "request.data.returntime"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "工作主要内容"
    },
    model: {
      value: (_vm.request.data.workcomments),
      callback: function($$v) {
        _vm.request.data.workcomments = $$v
      },
      expression: "request.data.workcomments"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer textAlignRight",
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.saveAndCreateNew()
      }
    }
  }, [_vm._v("保存并创建新单")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.saveRequestForm()
      }
    }
  }, [_vm._v("保存退出")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)])])])
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homediv"
  }, [_c('h1', [_vm._v("Welcome to Smart Supply Management")]), _vm._v(" "), _c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1)
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homediv"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 3,
      "offset": 2
    }
  }, [_c('div', {
    staticClass: "commentAvatarDivBig"
  }, [_c('img', {
    staticClass: "commentAvatarImageBig",
    attrs: {
      "src": "/imgs/icon.png"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('el-row', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('img', {
    staticStyle: {
      "width": "400px",
      "height": "80px"
    },
    attrs: {
      "src": "/imgs/tite1.png"
    }
  })])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 6
    }
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 18,
      "offset": 4
    }
  }, [_c('img', {
    staticStyle: {
      "width": "450px",
      "height": "70px"
    },
    attrs: {
      "src": "/imgs/tite2.png"
    }
  })])], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 8,
      "offset": 8
    }
  }, [_c('el-form', {
    ref: "loginForm",
    staticStyle: {
      "margin-top": "30px"
    },
    attrs: {
      "id": "loginForm",
      "label-width": "80px",
      "action": "/login",
      "method": "post"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名:"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入用户名"
    },
    model: {
      value: (_vm.username),
      callback: function($$v) {
        _vm.username = $$v
      },
      expression: "username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码:"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('label', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.errorMsg))])]), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("\b登陆")]), _vm._v(" "), _c('el-button', [_vm._v("取消")])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading.fullscreen.lock",
      value: (_vm.fullscreenLoading),
      expression: "fullscreenLoading",
      modifiers: {
        "fullscreen": true,
        "lock": true
      }
    }],
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "id": "homelayout"
    }
  }, [_c('el-row', {
    staticClass: "headerContainer"
  }, [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    staticClass: "commentAvatarDiv"
  }, [_c('img', {
    staticClass: "commentAvatarImage",
    attrs: {
      "src": "/imgs/elpower.png"
    }
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "appTitle"
  }, [_c('span', [_vm._v("\b献县供电派工单系统")])])]), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "60px"
    },
    attrs: {
      "span": 16
    }
  }, [_c('ul', {
    staticClass: "headerPrimaryActionsTrailing"
  }, _vm._l((_vm.menuitems), function(menuitem) {
    return _c('li', {
      key: menuitem.id,
      staticClass: "menuUser"
    }, [_c('div', {
      staticClass: "menuOptions"
    }, [_c('a', {
      staticStyle: {
        "color": "white"
      },
      attrs: {
        "href": menuitem.pathname
      },
      on: {
        "click": _vm.triggerMenuEvent
      }
    }, [_vm._v(_vm._s(menuitem.menu))])])])
  }))]), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "60px"
    },
    attrs: {
      "span": 2
    }
  }, [_c('div', {
    attrs: {
      "id": "logoutdiv"
    }
  }, [_c('el-button', {
    staticClass: "el-icon-menu",
    staticStyle: {
      "color": "white"
    },
    attrs: {
      "type": "text"
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("   退出")])], 1)])], 1), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple"
  }, [_c('left-side-bar', {
    on: {
      "LeftSideBarEvent": _vm.LeftSideBarEvent
    }
  })], 1)]), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "100%",
      "border-left": "1px solid lightgray"
    },
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light",
    staticStyle: {
      "height": "100%"
    }
  }, [_c(_vm.currentView, {
    ref: "rightComponent",
    tag: "component",
    class: _vm.rightComponentClass,
    attrs: {
      "options": _vm.opt
    },
    on: {
      "RightComponentEvent": _vm.RightComponentEvent
    }
  })], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "height": "700px",
      "padding": "20px"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.UserDataSource,
      "border": "",
      "max-height": "650"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "用户ID",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fullname",
      "label": "用户全名",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "role",
      "label": "用户角色",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "company",
      "label": "用户公司",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([
      ["default", function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("\n            编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }]
    ])
  })], 1)], 1), _vm._v(" "), _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "v-modal",
    staticStyle: {
      "z-index": "2000"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "el-dialog__wrapper",
    staticStyle: {
      "z-index": "2001"
    }
  }, [_c('div', {
    staticClass: "el-dialog",
    attrs: {
      "id": "userdialog"
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.user
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户ID",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off",
      "disabled": _vm.isEditModel
    },
    model: {
      value: (_vm.user.username),
      callback: function($$v) {
        _vm.user.username = $$v
      },
      expression: "user.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户全称",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.user.fullname),
      callback: function($$v) {
        _vm.user.fullname = $$v
      },
      expression: "user.fullname"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属公司",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择用户角色"
    },
    model: {
      value: (_vm.user.company),
      callback: function($$v) {
        _vm.user.company = $$v
      },
      expression: "user.company"
    }
  }, _vm._l((_vm.companySource), function(company) {
    return _c('el-option', {
      key: company.name,
      attrs: {
        "label": company.name,
        "value": company.name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户\b角色",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择用户角色"
    },
    model: {
      value: (_vm.user.role),
      callback: function($$v) {
        _vm.user.role = $$v
      },
      expression: "user.role"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "管理员",
      "value": "Admin"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "普通用户",
      "value": "User"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showResetPssword),
      expression: "showResetPssword"
    }],
    attrs: {
      "label": "用户密码",
      "label-width": _vm.formLabelWidth
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.user.password),
      callback: function($$v) {
        _vm.user.password = $$v
      },
      expression: "user.password"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer textAlignRight",
    slot: "footer"
  }, [_c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditModel),
      expression: "isEditModel"
    }],
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.showResetPssword = true
      }
    }
  }, [_vm._v("重置密码")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditModel),
      expression: "isEditModel"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.confirmUserDialog()
      }
    }
  }, [_vm._v("确 定")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCreateModel),
      expression: "isCreateModel"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.configmCreateNewUser()
      }
    }
  }, [_vm._v("保存用户")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.cancelUserDialog
    }
  }, [_vm._v("取 消")])], 1)], 1)])])])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('el-menu', {
    attrs: {
      "mode": "horizontal"
    }
  }, [_c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companySource),
      expression: "companySource"
    }],
    attrs: {
      "index": "1"
    },
    on: {
      "click": function($event) {
        _vm.handleCreate()
      }
    }
  }, [_vm._v("新建单位")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companySource),
      expression: "companySource"
    }],
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.handleImport()
      }
    }
  }, [_vm._v("导入派工单位")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companyAdmin),
      expression: "companyAdmin"
    }],
    attrs: {
      "index": "1"
    },
    on: {
      "click": function($event) {
        _vm.handleCreate()
      }
    }
  }, [_vm._v("新建派工人员")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companyAdmin),
      expression: "companyAdmin"
    }],
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.handleImport()
      }
    }
  }, [_vm._v("导入派工人员")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companyEmployee),
      expression: "companyEmployee"
    }],
    attrs: {
      "index": "1"
    },
    on: {
      "click": function($event) {
        _vm.handleCreate()
      }
    }
  }, [_vm._v("新建工作人员")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.companyEmployee),
      expression: "companyEmployee"
    }],
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.handleImport()
      }
    }
  }, [_vm._v("导入工作人员")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.workItem),
      expression: "workItem"
    }],
    attrs: {
      "index": "1"
    },
    on: {
      "click": function($event) {
        _vm.handleCreate()
      }
    }
  }, [_vm._v("新建工作任务")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.workItem),
      expression: "workItem"
    }],
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.handleImport()
      }
    }
  }, [_vm._v("导入工作任务")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showWorkCategory),
      expression: "showWorkCategory"
    }],
    attrs: {
      "index": "1"
    },
    on: {
      "click": function($event) {
        _vm.handleCreate()
      }
    }
  }, [_vm._v("新建工作类别")]), _vm._v(" "), _c('el-menu-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showWorkCategory),
      expression: "showWorkCategory"
    }],
    attrs: {
      "index": "2"
    },
    on: {
      "click": function($event) {
        _vm.handleImport()
      }
    }
  }, [_vm._v("导入工作类别")])], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "700px",
      "padding": "20px"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.ConfigDataSource,
      "border": "",
      "max-height": "650"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "行序号",
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": _vm.collabel,
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), (_vm.showlevel2) ? _c('el-table-column', {
    attrs: {
      "prop": "attr",
      "label": _vm.col2label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showlevel3) ? _c('el-table-column', {
    attrs: {
      "prop": "attr",
      "label": _vm.col3label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showlevel4) ? _c('el-table-column', {
    attrs: {
      "prop": "workCategory",
      "label": _vm.col4label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e(), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([
      ["default", function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }]
    ])
  })], 1)], 1), _vm._v(" "), _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.createFormVisible),
      expression: "createFormVisible"
    }],
    staticClass: "v-modal",
    staticStyle: {
      "z-index": "2000"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.createFormVisible),
      expression: "createFormVisible"
    }],
    staticClass: "el-dialog__wrapper",
    staticStyle: {
      "z-index": "2001"
    }
  }, [_c('div', {
    staticClass: "el-dialog configDialog",
    staticStyle: {
      "padding": "25px"
    },
    attrs: {
      "id": "createNewDialog"
    }
  }, [_c('span', {
    staticClass: "dialog-title dialogtitle",
    slot: "title"
  }, [_vm._v(_vm._s(_vm.newCreateDialogTitle))]), _vm._v(" "), _c('el-form', [_c('el-row', {
    staticStyle: {
      "margin": "10px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 7
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.collabel
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.newTextInput),
      callback: function($$v) {
        _vm.newTextInput = $$v
      },
      expression: "newTextInput"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showlevel2),
      expression: "showlevel2"
    }],
    attrs: {
      "span": 7,
      "offset": 1
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.col2label
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "所属公司"
    },
    model: {
      value: (_vm.attr),
      callback: function($$v) {
        _vm.attr = $$v
      },
      expression: "attr"
    }
  }, _vm._l((_vm.companyDataSource), function(company) {
    return _c('el-option', {
      key: company.id,
      attrs: {
        "label": company.name,
        "value": company.name
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showlevel3),
      expression: "showlevel3"
    }],
    attrs: {
      "span": 7,
      "offset": 1
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.col3label
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.attr),
      callback: function($$v) {
        _vm.attr = $$v
      },
      expression: "attr"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showlevel4),
      expression: "showlevel4"
    }],
    attrs: {
      "span": 7,
      "offset": 1
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.col4label
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "所属类别"
    },
    model: {
      value: (_vm.workCategory),
      callback: function($$v) {
        _vm.workCategory = $$v
      },
      expression: "workCategory"
    }
  }, _vm._l((_vm.workCategoryDataSource), function(category) {
    return _c('el-option', {
      key: category.id,
      attrs: {
        "label": category.name,
        "value": category.name
      }
    })
  }))], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "dialog-footer textAlignRight",
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCreateModel),
      expression: "isCreateModel"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleConfirmSaveNew()
      }
    }
  }, [_vm._v("\b保存到服务器")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCreateModel),
      expression: "isCreateModel"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleAddNew()
      }
    }
  }, [_vm._v("增 加")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditModel),
      expression: "isEditModel"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.handleEditSave()
      }
    }
  }, [_vm._v("保存修改")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.handleCancelNew()
      }
    }
  }, [_vm._v("取 消")])], 1)])], 1), _vm._v(" "), _c('el-row', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isCreateModel),
      expression: "isCreateModel"
    }]
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.newTextInputList,
      "max-height": "250"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": _vm.collabel,
      "label-class-name": "forcastHeader"
    }
  }), _vm._v(" "), (_vm.showlevel2) ? _c('el-table-column', {
    attrs: {
      "prop": "attr",
      "label": _vm.col2label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showlevel3) ? _c('el-table-column', {
    attrs: {
      "prop": "attr",
      "label": _vm.col3label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showlevel4) ? _c('el-table-column', {
    attrs: {
      "prop": "workCategory",
      "label": _vm.col4label,
      "label-class-name": "forcastHeader"
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)])]), _vm._v(" "), _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "v-modal",
    staticStyle: {
      "z-index": "2000"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "el-dialog__wrapper",
    staticStyle: {
      "z-index": "2001"
    }
  }, [_c('div', {
    staticClass: "el-dialog configDialog",
    staticStyle: {
      "padding": "25px"
    },
    attrs: {
      "id": "uploadDialog"
    }
  }, [_c('span', {
    staticClass: "dialog-title dialogtitle",
    slot: "title"
  }, [_vm._v(_vm._s(_vm.uplaodDialogTitle))]), _vm._v(" "), _c('el-row', {
    staticClass: "uplaodrow"
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-upload', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "drag": "",
      "on-success": _vm.onSuccess,
      "data": _vm.uploadParam,
      "before-upload": _vm.beforeUpload,
      "action": "/esrvapi/uploadconfigdoc"
    }
  }, [_c('i', {
    staticClass: "el-icon-upload"
  }), _vm._v(" "), _c('div', {
    staticClass: "el-upload__text"
  }, [_vm._v("Drag files here，or "), _c('em', [_vm._v("Click to Select files for upload")])]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    slot: "tip"
  }, [_vm._v("Only txt file allowed")])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer textAlignRight",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogFormVisible = false
      }
    }
  }, [_vm._v("取 消")])], 1)], 1)])])])
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding": "25px",
      "height": "700px"
    }
  }, [_c('el-row', [_c('el-col', {
    staticStyle: {
      "text-align": "center",
      "padding-bottom": "5px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('span', {
    staticClass: "requestFormTitle"
  }, [_vm._v(_vm._s(_vm.request.label.formTitle))])])], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    staticStyle: {
      "text-align": "right",
      "padding": "10px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.request.label.requestId))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.request.data.requestId))])])], 1), _vm._v(" "), _c('el-form', {
    attrs: {
      "model": _vm.request
    }
  }, [_c('table', {
    staticClass: "bordered",
    attrs: {
      "width": "100%"
    }
  }, [_c('tr', [_c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.company))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "23%"
    }
  }, [_c('el-select', {
    attrs: {
      "disabled": _vm.isEdithModel,
      "filterable": ""
    },
    model: {
      value: (_vm.request.data.company),
      callback: function($$v) {
        _vm.request.data.company = $$v
      },
      expression: "request.data.company"
    }
  }, _vm._l((_vm.request.datasource.companySource), function(company) {
    return _c('el-option', {
      key: company.name,
      attrs: {
        "label": company.name,
        "value": company.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.requester))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "22%"
    }
  }, [_c('el-select', {
    attrs: {
      "disabled": _vm.isEdithModel,
      "filterable": ""
    },
    model: {
      value: (_vm.request.data.requester),
      callback: function($$v) {
        _vm.request.data.requester = $$v
      },
      expression: "request.data.requester"
    }
  }, _vm._l((_vm.request.datasource.companyAdmin), function(requester) {
    return _c('el-option', {
      key: requester.name,
      attrs: {
        "label": requester.name,
        "value": requester.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', {
    attrs: {
      "width": "10%"
    }
  }, [_vm._v(_vm._s(_vm.request.label.creationtime))]), _vm._v(" "), _c('td', {
    attrs: {
      "width": "25%"
    }
  }, [_vm._v(_vm._s(_vm.request.data.creationtime))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.workers))]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "colspan": "3"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "disabled": _vm.isEdithModel,
      "filterable": "",
      "multiple": ""
    },
    model: {
      value: (_vm.request.data.workers),
      callback: function($$v) {
        _vm.request.data.workers = $$v
      },
      expression: "request.data.workers"
    }
  }, _vm._l((_vm.request.datasource.companyEmployee), function(workers) {
    return _c('el-option', {
      key: workers.name,
      attrs: {
        "label": workers.name,
        "value": workers.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workhour))]), _vm._v(" "), _c('td', [_vm._v("\n                    " + _vm._s(_vm.request.data.workhour.text) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.workCategory))]), _vm._v(" "), _c('td', [_c('el-select', {
    attrs: {
      "disabled": _vm.isEdithModel
    },
    model: {
      value: (_vm.request.data.workCategory),
      callback: function($$v) {
        _vm.request.data.workCategory = $$v
      },
      expression: "request.data.workCategory"
    }
  }, _vm._l((_vm.request.datasource.workCategory), function(workcategory) {
    return _c('el-option', {
      key: workcategory.name,
      attrs: {
        "label": workcategory.name,
        "value": workcategory.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workitem))]), _vm._v(" "), _c('td', [_c('el-select', {
    attrs: {
      "disabled": _vm.isEdithModel
    },
    model: {
      value: (_vm.request.data.workitem),
      callback: function($$v) {
        _vm.request.data.workitem = $$v
      },
      expression: "request.data.workitem"
    }
  }, _vm._l((_vm.request.datasource.workItem), function(workitem) {
    return _c('el-option', {
      key: workitem.name,
      attrs: {
        "label": workitem.name,
        "value": workitem.name
      }
    })
  }))], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.workersnumber))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.workersnumber))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.request.label.worklocation))]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": _vm.isWorkFormClosed,
      "placeholder": "请输入工作地点"
    },
    model: {
      value: (_vm.request.data.worklocation),
      callback: function($$v) {
        _vm.request.data.worklocation = $$v
      },
      expression: "request.data.worklocation"
    }
  })], 1), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.request.label.returntime))]), _vm._v(" "), _c('td', [_c('el-date-picker', {
    attrs: {
      "disabled": _vm.isWorkFormClosed || !_vm.isEdithModel,
      "format": "yyyy-MM-dd HH:mm:ss",
      "align": "right",
      "type": "datetime",
      "placeholder": "选择返回时间"
    },
    on: {
      "change": _vm.calculateWorkHour
    },
    model: {
      value: (_vm.request.data.returntime),
      callback: function($$v) {
        _vm.request.data.returntime = $$v
      },
      expression: "request.data.returntime"
    }
  })], 1)]), _vm._v(" "), _c('tr', [_c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "disabled": _vm.isWorkFormClosed,
      "rows": 2,
      "placeholder": "工作主要内容"
    },
    model: {
      value: (_vm.request.data.workcomments),
      callback: function($$v) {
        _vm.request.data.workcomments = $$v
      },
      expression: "request.data.workcomments"
    }
  })], 1)])])]), _vm._v(" "), _c('el-row', {
    staticClass: "textAlignRight"
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isWorkFormClosed),
      expression: "!isWorkFormClosed"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.showUploadDialog()
      }
    }
  }, [_vm._v("上传照片")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isWorkFormClosed),
      expression: "!isWorkFormClosed"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.saveRequest()
      }
    }
  }, [_vm._v("保存退出")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEdithModel && !_vm.isWorkFormClosed),
      expression: "isEdithModel && !isWorkFormClosed"
    }],
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.completeRequestForm()
      }
    }
  }, [_vm._v("完成工单")]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isWorkFormClosed),
      expression: "!isWorkFormClosed"
    }],
    attrs: {
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.returnData()
      }
    }
  }, [_vm._v("取 消")])], 1)], 1), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "border": "1px solid #ccc",
      "margin-top": "10px"
    }
  }, _vm._l((_vm.workdocuments), function(doc) {
    return _c('el-col', {
      key: doc.key,
      attrs: {
        "span": 8
      }
    }, [_c('el-card', {
      staticStyle: {
        "margin": "5px"
      },
      attrs: {
        "body-style": {
          padding: '10px'
        }
      }
    }, [_c('img', {
      staticClass: "image",
      attrs: {
        "src": doc.filename
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding": "14px"
      }
    }, [_c('span', [_vm._v(_vm._s(doc.description))]), _vm._v(" "), _c('div', {
      staticClass: "bottom clearfix"
    }, [_c('time', {
      staticClass: "time"
    }, [_vm._v(_vm._s(doc.uploadtime))])])])])], 1)
  })), _vm._v(" "), _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "v-modal",
    staticStyle: {
      "z-index": "2000"
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialogFormVisible),
      expression: "dialogFormVisible"
    }],
    staticClass: "el-dialog__wrapper",
    staticStyle: {
      "z-index": "2001"
    }
  }, [_c('div', {
    staticClass: "el-dialog configDialog",
    staticStyle: {
      "padding": "25px"
    },
    attrs: {
      "id": "uploadDialog"
    }
  }, [_c('span', {
    staticClass: "dialog-title dialogtitle",
    slot: "title"
  }, [_vm._v(_vm._s(_vm.uplaodDialogTitle))]), _vm._v(" "), _c('el-row', {
    staticClass: "uplaodrow"
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-upload', {
    ref: "upload",
    staticClass: "upload-demo",
    attrs: {
      "action": "/workformapi/upload",
      "auto-upload": false,
      "on-success": _vm.onSuccessUpload,
      "data": _vm.uploadParam()
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    },
    slot: "trigger"
  }, [_vm._v("选取文件")]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "size": "small",
      "type": "success"
    },
    on: {
      "click": _vm.submitUpload
    }
  }, [_vm._v("上传到服务器")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.cancelUpload()
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('div', {
    staticClass: "el-upload__tip",
    slot: "tip"
  }, [_vm._v("只能上传jpg/png文件，且不超过500kb")])], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-form', [_c('el-form-item', {
    attrs: {
      "label": "\b输入照片描述"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.picdescription),
      callback: function($$v) {
        _vm.picdescription = $$v
      },
      expression: "picdescription"
    }
  })], 1)], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    attrs: {
      "id": "data-content"
    }
  }, [_c('router-view', {
    attrs: {
      "id": "routerview"
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
]),[62]);
//# sourceMappingURL=app.9ea68000fa45b56d1e02.js.map