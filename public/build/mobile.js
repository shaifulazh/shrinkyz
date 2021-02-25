(self["webpackChunk"] = self["webpackChunk"] || []).push([["mobile"],{

/***/ "./assets/mobile-dash-app/Chart.js":
/*!*****************************************!*\
  !*** ./assets/mobile-dash-app/Chart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Label.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./assets/mobile-dash-app/Title.js");



 // Generate Sales Data

function createData(time, amount) {
  return {
    time,
    amount
  };
}

const data = [createData("00:00", 0), createData("03:00", 300), createData("06:00", 600), createData("09:00", 800), createData("12:00", 1500), createData("15:00", 2000), createData("18:00", 2400), createData("21:00", 2400), createData("24:00", undefined)];
function Chart() {
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)();
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__.default, null, "Today"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__.LineChart, {
    data: data,
    margin: {
      top: 16,
      right: 16,
      bottom: 0,
      left: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_5__.XAxis, {
    dataKey: "time",
    stroke: theme.palette.text.secondary
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {
    stroke: theme.palette.text.secondary
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__.Label, {
    angle: 270,
    position: "left",
    style: {
      textAnchor: "middle",
      fill: theme.palette.text.primary
    }
  }, "Sales ($)")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {
    type: "monotone",
    dataKey: "amount",
    stroke: theme.palette.primary.main,
    dot: false
  }))));
}

/***/ }),

/***/ "./assets/mobile-dash-app/DashboardMui.js":
/*!************************************************!*\
  !*** ./assets/mobile-dash-app/DashboardMui.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DashboardMui)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/Divider.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _listItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItems */ "./assets/mobile-dash-app/listItems.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart */ "./assets/mobile-dash-app/Chart.js");
/* harmony import */ var _Deposits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Deposits */ "./assets/mobile-dash-app/Deposits.js");
/* harmony import */ var _Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Orders */ "./assets/mobile-dash-app/Orders.js");

























function Copyright() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__.default, {
    color: "inherit",
    href: "https://material-ui.com/"
  }, "Your Website"), " ", new Date().getFullYear(), ".");
}

const drawerWidth = 240;
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.default)(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed

  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));
function DashboardMui() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.paper, classes.fixedHeight);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__.default, {
    position: "absolute",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.appBar, open && classes.appBarShift)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__.default, {
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__.default, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.menuButton, open && classes.menuButtonHidden)
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__.default, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__.default, {
    color: "inherit"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_14__.default, {
    badgeContent: 4,
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_15__.default, null))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_16__.default, {
    variant: "permanent",
    classes: {
      paper: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)(classes.drawerPaper, !open && classes.drawerPaperClose)
    },
    open: open
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.toolbarIcon
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__.default, {
    onClick: handleDrawerClose
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__.default, null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__.default, null, _listItems__WEBPACK_IMPORTED_MODULE_2__.mainListItems), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_19__.default, null, _listItems__WEBPACK_IMPORTED_MODULE_2__.secondaryListItems)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.appBarSpacer
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_20__.default, {
    maxWidth: "lg",
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__.default, {
    container: true,
    spacing: 3
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__.default, {
    item: true,
    xs: 12,
    md: 8,
    lg: 9
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__.default, {
    className: fixedHeightPaper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Chart__WEBPACK_IMPORTED_MODULE_3__.default, null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__.default, {
    item: true,
    xs: 12,
    md: 4,
    lg: 3
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__.default, {
    className: fixedHeightPaper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Deposits__WEBPACK_IMPORTED_MODULE_4__.default, null))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__.default, {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_22__.default, {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Orders__WEBPACK_IMPORTED_MODULE_5__.default, null)))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_23__.default, {
    pt: 4
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(Copyright, null)))));
}

/***/ }),

/***/ "./assets/mobile-dash-app/Deposits.js":
/*!********************************************!*\
  !*** ./assets/mobile-dash-app/Deposits.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deposits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./assets/mobile-dash-app/Title.js");






function preventDefault(event) {
  event.preventDefault();
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)({
  depositContext: {
    flex: 1
  }
});
function Deposits() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__.default, null, "Recent Deposits"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {
    component: "p",
    variant: "h4"
  }, "$3,024.00"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.default, {
    color: "textSecondary",
    className: classes.depositContext
  }, "on 15 March, 2019"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault
  }, "View balance")));
}

/***/ }),

/***/ "./assets/mobile-dash-app/Orders.js":
/*!******************************************!*\
  !*** ./assets/mobile-dash-app/Orders.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./assets/mobile-dash-app/Title.js");








 // Generate Order Data

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {
    id,
    date,
    name,
    shipTo,
    paymentMethod,
    amount
  };
}

const rows = [createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "VISA ⠀•••• 3719", 312.44), createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "VISA ⠀•••• 2574", 866.99), createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC ⠀•••• 1253", 100.81), createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "AMEX ⠀•••• 2000", 654.39), createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "VISA ⠀•••• 5919", 212.79)];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));
function Orders() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__.default, null, "Recent Orders"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__.default, {
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, "Date"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, "Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, "Ship To"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, "Payment Method"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
    align: "right"
  }, "Sale Amount"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_7__.default, null, rows.map(row => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__.default, {
    key: row.id
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, row.date), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, row.name), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, row.shipTo), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, null, row.paymentMethod), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__.default, {
    align: "right"
  }, row.amount))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.seeMore
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__.default, {
    color: "primary",
    href: "#",
    onClick: preventDefault
  }, "See more orders")));
}

/***/ }),

/***/ "./assets/mobile-dash-app/Title.js":
/*!*****************************************!*\
  !*** ./assets/mobile-dash-app/Title.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");



function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true
  }, props.children);
}
Title.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};

/***/ }),

/***/ "./assets/mobile-dash-app/index.js":
/*!*****************************************!*\
  !*** ./assets/mobile-dash-app/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _DashboardMui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardMui */ "./assets/mobile-dash-app/DashboardMui.js");





react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DashboardMui__WEBPACK_IMPORTED_MODULE_3__.default, null), document.getElementById("root"));

/***/ }),

/***/ "./assets/mobile-dash-app/listItems.js":
/*!*********************************************!*\
  !*** ./assets/mobile-dash-app/listItems.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainListItems": () => (/* binding */ mainListItems),
/* harmony export */   "secondaryListItems": () => (/* binding */ secondaryListItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "./node_modules/@material-ui/icons/BarChart.js");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Layers */ "./node_modules/@material-ui/icons/Layers.js");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "./node_modules/@material-ui/icons/Assignment.js");











const mainListItems = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_3__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Dashboard"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Orders"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Customers"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_7__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Reports"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_8__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Integrations"
})));
const secondaryListItems = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_9__.default, {
  inset: true
}, "Saved reports"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Current month"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Last quarter"
})), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__.default, {
  button: true
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_10__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__.default, {
  primary: "Year-end sale"
})));

/***/ })

},
0,[["./assets/mobile-dash-app/index.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-63cddb","vendors-node_modules_material-ui_core_esm_Badge_Badge_js-node_modules_material-ui_core_esm_Bo-399753"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlLWRhc2gtYXBwL0NoYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUtZGFzaC1hcHAvRGFzaGJvYXJkTXVpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUtZGFzaC1hcHAvRGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS1kYXNoLWFwcC9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vYmlsZS1kYXNoLWFwcC9UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9iaWxlLWRhc2gtYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tb2JpbGUtZGFzaC1hcHAvbGlzdEl0ZW1zLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURhdGEiLCJ0aW1lIiwiYW1vdW50IiwiZGF0YSIsInVuZGVmaW5lZCIsIkNoYXJ0IiwidGhlbWUiLCJ1c2VUaGVtZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidGV4dEFuY2hvciIsImZpbGwiLCJwcmltYXJ5IiwibWFpbiIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwidG9vbGJhciIsInBhZGRpbmdSaWdodCIsInRvb2xiYXJJY29uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyU2hpZnQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsIm1lbnVCdXR0b25IaWRkZW4iLCJ0aXRsZSIsImZsZXhHcm93IiwiZHJhd2VyUGFwZXIiLCJwb3NpdGlvbiIsIndoaXRlU3BhY2UiLCJkcmF3ZXJQYXBlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJhcHBCYXJTcGFjZXIiLCJjb250ZW50IiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJjb250YWluZXIiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInBhcGVyIiwiZmxleERpcmVjdGlvbiIsImZpeGVkSGVpZ2h0IiwiRGFzaGJvYXJkTXVpIiwiY2xhc3NlcyIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIm1haW5MaXN0SXRlbXMiLCJzZWNvbmRhcnlMaXN0SXRlbXMiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50IiwiZGVwb3NpdENvbnRleHQiLCJmbGV4IiwiRGVwb3NpdHMiLCJpZCIsImRhdGUiLCJuYW1lIiwic2hpcFRvIiwicGF5bWVudE1ldGhvZCIsInJvd3MiLCJzZWVNb3JlIiwibWFyZ2luVG9wIiwiT3JkZXJzIiwibWFwIiwicm93IiwiVGl0bGUiLCJwcm9wcyIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQVVBOztBQUNBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoQyxTQUFPO0FBQUVELFFBQUY7QUFBUUM7QUFBUixHQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsSUFBSSxHQUFHLENBQ1hILFVBQVUsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQURDLEVBRVhBLFVBQVUsQ0FBQyxPQUFE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QUFoQixHQUNFLGlEQUFDLG1FQUFELFFBQ0UsaURBQUMsOERBQUQsT0FERixDQURGLEVBSUUsaURBQUMsbUVBQUQ7QUFBYyxTQUFPLEVBQUM7QUFBdEIsRUFKRixDQWJGLEVBbUJFLGlEQUFDLCtEQUFEO0FBQVUsUUFBTTtBQUFoQixHQUNFLGlEQUFDLG1FQUFELFFBQ0UsaURBQUMsZ0VBQUQsT0FERixDQURGLEVBSUUsaURBQUMsbUVBQUQ7QUFBYyxTQUFPLEVBQUM7QUFBdEIsRUFKRixDQW5CRixFQXlCRSxpREFBQywrREFBRDtBQUFVLFFBQU07QUFBaEIsR0FDRSxpREFBQyxtRUFBRCxRQUNFLGlEQUFDLDhEQUFELE9BREYsQ0FERixFQUlFLGlEQUFDLG1FQUFEO0FBQWMsU0FBTyxFQUFDO0FBQXRCLEVBSkYsQ0F6QkYsQ0FESztBQW1DQSxNQUFNQyxrQkFBa0IsR0FDN0IsOERBQ0UsaURBQUMsb0VBQUQ7QUFBZSxPQUFLO0FBQXBCLG1CQURGLEVBRUUsaURBQUMsK0RBQUQ7QUFBVSxRQUFNO0FBQWhCLEdBQ0UsaURBQUMsbUVBQUQsUUFDRSxpREFBQyxtRUFBRCxPQURGLENBREYsRUFJRSxpREFBQyxtRUFBRDtBQUFjLFNBQU8sRUFBQztBQUF0QixFQUpGLENBRkYsRUFRRSxpREFBQywrREFBRDtBQUFVLFFBQU07QUFBaEIsR0FDRSxpREFBQyxtRUFBRCxRQUNFLGlEQUFDLG1FQUFELE9BREYsQ0FERixFQUlFLGlEQUFDLG1FQUFEO0FBQWMsU0FBTyxFQUFDO0FBQXRCLEVBSkYsQ0FSRixFQWNFLGlEQUFDLCtEQUFEO0FBQVUsUUFBTTtBQUFoQixHQUNFLGlEQUFDLG1FQUFELFFBQ0UsaURBQUMsbUVBQUQsT0FERixDQURGLEVBSUUsaURBQUMsbUVBQUQ7QUFBYyxTQUFPLEVBQUM7QUFBdEIsRUFKRixDQWRGLENBREssQyIsImZpbGUiOiJtb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIExpbmVDaGFydCxcclxuICBMaW5lLFxyXG4gIFhBeGlzLFxyXG4gIFlBeGlzLFxyXG4gIExhYmVsLFxyXG4gIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5cclxuLy8gR2VuZXJhdGUgU2FsZXMgRGF0YVxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKHRpbWUsIGFtb3VudCkge1xyXG4gIHJldHVybiB7IHRpbWUsIGFtb3VudCB9O1xyXG59XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIGNyZWF0ZURhdGEoXCIwMDowMFwiLCAwKSxcclxuICBjcmVhdGVEYXRhKFwiMDM6MDBcIiwgMzAwKSxcclxuICBjcmVhdGVEYXRhKFwiMDY6MDBcIiwgNjAwKSxcclxuICBjcmVhdGVEYXRhKFwiMDk6MDBcIiwgODAwKSxcclxuICBjcmVhdGVEYXRhKFwiMTI6MDBcIiwgMTUwMCksXHJcbiAgY3JlYXRlRGF0YShcIjE1OjAwXCIsIDIwMDApLFxyXG4gIGNyZWF0ZURhdGEoXCIxODowMFwiLCAyNDAwKSxcclxuICBjcmVhdGVEYXRhKFwiMjE6MDBcIiwgMjQwMCksXHJcbiAgY3JlYXRlRGF0YShcIjI0OjAwXCIsIHVuZGVmaW5lZCksXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFydCgpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5Ub2RheTwvVGl0bGU+XHJcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICBtYXJnaW49e3tcclxuICAgICAgICAgICAgdG9wOiAxNixcclxuICAgICAgICAgICAgcmlnaHQ6IDE2LFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDI0LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cInRpbWVcIiBzdHJva2U9e3RoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnl9IC8+XHJcbiAgICAgICAgICA8WUF4aXMgc3Ryb2tlPXt0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5fT5cclxuICAgICAgICAgICAgPExhYmVsXHJcbiAgICAgICAgICAgICAgYW5nbGU9ezI3MH1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbmNob3I6IFwibWlkZGxlXCIsIGZpbGw6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTYWxlcyAoJClcclxuICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgIDwvWUF4aXM+XHJcbiAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxyXG4gICAgICAgICAgICBkYXRhS2V5PVwiYW1vdW50XCJcclxuICAgICAgICAgICAgc3Ryb2tlPXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1cclxuICAgICAgICAgICAgZG90PXtmYWxzZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdFwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IG1haW5MaXN0SXRlbXMsIHNlY29uZGFyeUxpc3RJdGVtcyB9IGZyb20gXCIuL2xpc3RJdGVtc1wiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vQ2hhcnRcIjtcclxuaW1wb3J0IERlcG9zaXRzIGZyb20gXCIuL0RlcG9zaXRzXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vT3JkZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIHtcIkNvcHlyaWdodCDCqSBcIn1cclxuICAgICAgPExpbmsgY29sb3I9XCJpbmhlcml0XCIgaHJlZj1cImh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL1wiPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+e1wiIFwifVxyXG4gICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxyXG4gICAgICB7XCIuXCJ9XHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIHBhZGRpbmdSaWdodDogMjQsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICB9LFxyXG4gIHRvb2xiYXJJY29uOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgcGFkZGluZzogXCIwIDhweFwiLFxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBhcHBCYXJTaGlmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJ3aWR0aFwiLCBcIm1hcmdpblwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogMzYsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uSGlkZGVuOiB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGRyYXdlclBhcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXJDbG9zZToge1xyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFwcEJhclNwYWNlcjogdGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICB9LFxyXG4gIGZpeGVkSGVpZ2h0OiB7XHJcbiAgICBoZWlnaHQ6IDI0MCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRNdWkoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpeGVkSGVpZ2h0UGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuZml4ZWRIZWlnaHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCBvcGVuICYmIGNsYXNzZXMuYXBwQmFyU2hpZnQpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgIGNsYXNzZXMubWVudUJ1dHRvbixcclxuICAgICAgICAgICAgICBvcGVuICYmIGNsYXNzZXMubWVudUJ1dHRvbkhpZGRlblxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17NH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJQYXBlciwgIW9wZW4gJiYgY2xhc3Nlcy5kcmF3ZXJQYXBlckNsb3NlKSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFySWNvbn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PnttYWluTGlzdEl0ZW1zfTwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PntzZWNvbmRhcnlMaXN0SXRlbXN9PC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhclNwYWNlcn0gLz5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgICAgey8qIENoYXJ0ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxDaGFydCAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qIFJlY2VudCBEZXBvc2l0cyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEJveCBwdD17NH0+XHJcbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL1RpdGxlXCI7XHJcblxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGRlcG9zaXRDb250ZXh0OiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVwb3NpdHMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5SZWNlbnQgRGVwb3NpdHM8L1RpdGxlPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgJDMsMDI0LjAwXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcG9zaXRDb250ZXh0fT5cclxuICAgICAgICBvbiAxNSBNYXJjaCwgMjAxOVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJwcmltYXJ5XCIgaHJlZj1cIiNcIiBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdH0+XHJcbiAgICAgICAgICBWaWV3IGJhbGFuY2VcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5cclxuLy8gR2VuZXJhdGUgT3JkZXIgRGF0YVxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKGlkLCBkYXRlLCBuYW1lLCBzaGlwVG8sIHBheW1lbnRNZXRob2QsIGFtb3VudCkge1xyXG4gIHJldHVybiB7IGlkLCBkYXRlLCBuYW1lLCBzaGlwVG8sIHBheW1lbnRNZXRob2QsIGFtb3VudCB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoXHJcbiAgICAwLFxyXG4gICAgXCIxNiBNYXIsIDIwMTlcIixcclxuICAgIFwiRWx2aXMgUHJlc2xleVwiLFxyXG4gICAgXCJUdXBlbG8sIE1TXCIsXHJcbiAgICBcIlZJU0Eg4qCA4oCi4oCi4oCi4oCiIDM3MTlcIixcclxuICAgIDMxMi40NFxyXG4gICksXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDEsXHJcbiAgICBcIjE2IE1hciwgMjAxOVwiLFxyXG4gICAgXCJQYXVsIE1jQ2FydG5leVwiLFxyXG4gICAgXCJMb25kb24sIFVLXCIsXHJcbiAgICBcIlZJU0Eg4qCA4oCi4oCi4oCi4oCiIDI1NzRcIixcclxuICAgIDg2Ni45OVxyXG4gICksXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDIsXHJcbiAgICBcIjE2IE1hciwgMjAxOVwiLFxyXG4gICAgXCJUb20gU2Nob2x6XCIsXHJcbiAgICBcIkJvc3RvbiwgTUFcIixcclxuICAgIFwiTUMg4qCA4oCi4oCi4oCi4oCiIDEyNTNcIixcclxuICAgIDEwMC44MVxyXG4gICksXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDMsXHJcbiAgICBcIjE2IE1hciwgMjAxOVwiLFxyXG4gICAgXCJNaWNoYWVsIEphY2tzb25cIixcclxuICAgIFwiR2FyeSwgSU5cIixcclxuICAgIFwiQU1FWCDioIDigKLigKLigKLigKIgMjAwMFwiLFxyXG4gICAgNjU0LjM5XHJcbiAgKSxcclxuICBjcmVhdGVEYXRhKFxyXG4gICAgNCxcclxuICAgIFwiMTUgTWFyLCAyMDE5XCIsXHJcbiAgICBcIkJydWNlIFNwcmluZ3N0ZWVuXCIsXHJcbiAgICBcIkxvbmcgQnJhbmNoLCBOSlwiLFxyXG4gICAgXCJWSVNBIOKggOKAouKAouKAouKAoiA1OTE5XCIsXHJcbiAgICAyMTIuNzlcclxuICApLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBzZWVNb3JlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8VGl0bGU+UmVjZW50IE9yZGVyczwvVGl0bGU+XHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPkRhdGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5OYW1lPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+U2hpcCBUbzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPlBheW1lbnQgTWV0aG9kPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlNhbGUgQW1vdW50PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5kYXRlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5uYW1lfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5zaGlwVG99PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnBheW1lbnRNZXRob2R9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5hbW91bnR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VlTW9yZX0+XHJcbiAgICAgICAgPExpbmsgY29sb3I9XCJwcmltYXJ5XCIgaHJlZj1cIiNcIiBvbkNsaWNrPXtwcmV2ZW50RGVmYXVsdH0+XHJcbiAgICAgICAgICBTZWUgbW9yZSBvcmRlcnNcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcblxyXG5UaXRsZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IERhc2hib2FyZE11aSBmcm9tIFwiLi9EYXNoYm9hcmRNdWlcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8RGFzaGJvYXJkTXVpIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCI7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgUGVvcGxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiO1xyXG5pbXBvcnQgQmFyQ2hhcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnRcIjtcclxuaW1wb3J0IExheWVyc0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MYXllcnNcIjtcclxuaW1wb3J0IEFzc2lnbm1lbnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5MaXN0SXRlbXMgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3JkZXJzXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxQZW9wbGVJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDdXN0b21lcnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEJhckNoYXJ0SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmVwb3J0c1wiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGF5ZXJzSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW50ZWdyYXRpb25zXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5TGlzdEl0ZW1zID0gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGlzdFN1YmhlYWRlciBpbnNldD5TYXZlZCByZXBvcnRzPC9MaXN0U3ViaGVhZGVyPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1cnJlbnQgbW9udGhcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEFzc2lnbm1lbnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMYXN0IHF1YXJ0ZXJcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPEFzc2lnbm1lbnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJZZWFyLWVuZCBzYWxlXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=