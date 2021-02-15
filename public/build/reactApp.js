(self["webpackChunk"] = self["webpackChunk"] || []).push([["reactApp"],{

/***/ "./assets/react-app/App.js":
/*!*********************************!*\
  !*** ./assets/react-app/App.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _router_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/Sidebar */ "./assets/react-app/router/Sidebar.js");
/* harmony import */ var _router_Orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/Orders */ "./assets/react-app/router/Orders.js");
/* harmony import */ var _router_Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/Customer */ "./assets/react-app/router/Customer.js");
/* harmony import */ var _router_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router/Dashboard */ "./assets/react-app/router/Dashboard.js");
/* harmony import */ var _router_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/Product */ "./assets/react-app/router/Product.js");
/* harmony import */ var _component_product_Old_AddProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/product/Old/AddProduct */ "./assets/react-app/component/product/Old/AddProduct.js");
/* harmony import */ var _component_product_Old_Editing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/product/Old/Editing */ "./assets/react-app/component/product/Old/Editing.js");
/* harmony import */ var _Cropping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cropping */ "./assets/react-app/Cropping.js");
/* harmony import */ var _component_order_Order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/order/Order */ "./assets/react-app/component/order/Order.js");
/* harmony import */ var _component_product_Old_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/product/Old/CategoryEdit */ "./assets/react-app/component/product/Old/CategoryEdit.js");
/* harmony import */ var _component_product_reduxForm_FormRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/product/reduxForm/FormRedux */ "./assets/react-app/component/product/reduxForm/FormRedux.js");
/* harmony import */ var _component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/product/AddProducts/ProductAdd */ "./assets/react-app/component/product/AddProducts/ProductAdd.js");
/* harmony import */ var _router_MobileSideBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./router/MobileSideBar */ "./assets/react-app/router/MobileSideBar.js");
/* harmony import */ var _mobilecomp_MobileUpload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mobilecomp/MobileUpload */ "./assets/react-app/mobilecomp/MobileUpload.js");
/* harmony import */ var _mobilecomp_MobileDashboard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mobilecomp/MobileDashboard */ "./assets/react-app/mobilecomp/MobileDashboard.js");
/* harmony import */ var _mobilecomp_EasyCrop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mobilecomp/EasyCrop */ "./assets/react-app/mobilecomp/EasyCrop.js");
/* harmony import */ var _component_product_AddProducts_Cropperv2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/product/AddProducts/Cropperv2 */ "./assets/react-app/component/product/AddProducts/Cropperv2.js");
/* harmony import */ var _component_product_AddProducts_CategoryList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/product/AddProducts/CategoryList */ "./assets/react-app/component/product/AddProducts/CategoryList.js");
/* harmony import */ var _component_Visitor_Visitor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/Visitor/Visitor */ "./assets/react-app/component/Visitor/Visitor.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleShowCrop", payload => {
      this.setState({
        showCrop: true,
        src: payload.src,
        upload: payload.upload,
        showtopbar: false
      });
    });

    _defineProperty(this, "handleCloseCrop", () => {
      this.setState({
        showCrop: false,
        showtopbar: true
      });
    });

    _defineProperty(this, "handlecanceltopx", () => {
      this.setState({
        showCrop: false,
        src: null,
        upload: null
      });
    });

    this.state = {
      showCrop: false,
      src: null,
      upload: null,
      idEdit: null,
      mobileView: false,
      showSidebar: true,
      showtopbar: true,
      showEasyCropDialog: false
    };
    this.updateViewState = this.updateViewState.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  toggleSideBar() {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  }

  componentWillMount() {
    this.updateViewState();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateViewState);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState);
  }

  updateViewState() {
    if (!this.state.mobileView && document.documentElement.clientWidth < 1024) {
      this.setState({
        mobileView: true,
        showSidebar: false
      });
    } else if (document.documentElement.clientWidth > 1024) {
      this.setState({
        mobileView: false,
        showSidebar: true
      });
    }
  }

  render() {
    let containerClass = "d-flex";
    if (this.state.mobileView) containerClass = "container";
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showtopbar && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showSidebar ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_MobileSideBar__WEBPACK_IMPORTED_MODULE_13__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: containerClass
    }, this.state.showSidebar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/admin",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/orders",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Orders__WEBPACK_IMPORTED_MODULE_2__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/customer",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Customer__WEBPACK_IMPORTED_MODULE_3__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/product",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Product__WEBPACK_IMPORTED_MODULE_5__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/newproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/categories",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_CategoryList__WEBPACK_IMPORTED_MODULE_18__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/createproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_12__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Route, {
      path: "/visitor",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Visitor_Visitor__WEBPACK_IMPORTED_MODULE_19__.default, props)
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cropping__WEBPACK_IMPORTED_MODULE_8__.default, {
      showCrop: this.state.showCrop,
      src: this.state.src,
      upload: this.state.upload,
      canceltopx: this.handlecanceltopx
    })));
  }

}

/***/ }),

/***/ "./assets/react-app/Cropping.js":
/*!**************************************!*\
  !*** ./assets/react-app/Cropping.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cropping),
/* harmony export */   "dataURLtoFile": () => (/* binding */ dataURLtoFile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var _crop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop.css */ "./assets/react-app/crop.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Cropping extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onImageLoaded", image => {
      this.imageRef = image;
    });

    _defineProperty(this, "onCropComplete", crop => {
      this.makeClientCrop(crop);
    });

    _defineProperty(this, "onCropChange", crop => {
      this.setState({
        crop
      });
    });

    _defineProperty(this, "showCropImage", e => {});

    _defineProperty(this, "cancelLoad", () => {
      this.setState({
        loading: false,
        croppedImageUrl: null,
        imageBlob: null,
        showCropImage: false
      });
    });

    _defineProperty(this, "handleBackAction", e => {
      e.preventDefault();
      this.setState({
        showCropImage: false
      });
    });

    _defineProperty(this, "handleUpload", () => {
      this.setState({
        loading: true
      }, () => {
        this.props.upload(this.state.imageBlob, this.cancelLoad);
      });
    });

    _defineProperty(this, "handleShowCropImage", e => {
      e.preventDefault();
      this.setState({
        showCropImage: true
      });
    });

    _defineProperty(this, "handleCloseTopX", e => {
      e.preventDefault();
      this.cancelLoad(); //caution this is new

      this.props.canceltopx();
    });

    this.state = {
      src: null,
      crop: {
        x: 0,
        y: 0,
        width: 100,
        aspect: 1 / 1
      },
      croppedImageUrl: null,
      imageBlob: null,
      showCropImage: false,
      loading: false
    };
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, "newFile.jpeg");
      this.setState({
        croppedImageUrl
      });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }

        this.setState({
          imageBlob: blob
        });
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const {
      croppedImageUrl,
      showCropImage
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.props.showCrop && !this.state.loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "crop "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dialog col-8 mx-auto col-md-6 col-lg-4 p-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-dark",
      onClick: this.handleCloseTopX
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times-circle fa-2x"
    }))), showCropImage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-5"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "Crop",
      style: {
        width: "100%"
      },
      src: croppedImageUrl
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: this.handleBackAction
    }, "Back"), "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: this.handleUpload
    }, "Upload")) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_image_crop__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: this.props.src,
      crop: this.state.crop,
      onImageLoaded: this.onImageLoaded,
      onComplete: this.onCropComplete,
      onChange: this.onCropChange
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      disabled: croppedImageUrl ? false : true,
      onClick: this.handleShowCropImage
    }, "Crop")))), this.props.showCrop && this.state.loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "crop "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dialog col-8 mx-auto col-md-6 col-lg-4 p-5"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      animation: "border"
    }), " Uploading Image...."))));
  }

}
async function dataURLtoFile(dataUrl, fileName) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], fileName, {
    type: 'image/jpeg'
  });
}

/***/ }),

/***/ "./assets/react-app/component/Visitor/Visitor.js":
/*!*******************************************************!*\
  !*** ./assets/react-app/component/Visitor/Visitor.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Visitor)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");



function Visitor() {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [table, setTable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [dataname, setDataname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/admin/test/test").then(res => {
      setData(res.data);
      console.log(res.data);
    }).catch(e => console.log(e));
  }, []);

  function countObjs(arr) {
    // So the object doesn't inherit from Object.prototype and avoids property
    // name collisions
    var obj = Object.create(null);
    arr.forEach(function (item) {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });
    return obj;
  }

  const selectOnChange = e => {
    const target = e.target.value;

    if (target === "Country") {
      const country = data.map(ind => {
        return ind.Country;
      });
      const countCountry = countObjs(country);
      setDataname("Country");
      setTable(countCountry);
    } else if (target === "State") {
      const state = data.map(ind => {
        return ind.state;
      });
      const cstate = countObjs(state);
      setDataname("State");
      setTable(cstate);
    } else if (target === "City") {
      const city = data.map(ind => ind.city);
      const ccity = countObjs(city);
      setDataname("City");
      setTable(ccity);
    } else if (target === "IP") {
      const ips = data.map(dat => dat.ip);
      const ipd = countObjs(ips);
      setDataname("IP");
      setTable(ipd);
    }
  };

  if (data) {
    const state = data.map(ind => {
      return ind.state;
    });
    const Country = data.map(ind => {
      return ind.Country;
    });
    const visit = countObjs(state);
    const singledata = data[0];
    const name = Object.getOwnPropertyNames(singledata);
    console.log("name", name);
  }

  console.log(table);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "mt-3"
  }, data && react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Total Visitor : ", data.length), react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    className: "mb-2",
    onChange: selectOnChange
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "",
    defaultValue: true
  }, "Please select an Option"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "Country"
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "State"
  }, "State"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "City"
  }, "City"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IP"
  }, "IP")), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), table && dataname && react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
    striped: true,
    bordered: true,
    hover: true,
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, dataname), react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Count"))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, Object.getOwnPropertyNames(table).map((x, i) => {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, x), react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, table[x]));
  })))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null)));
}

/***/ }),

/***/ "./assets/react-app/component/customer/index.js":
/*!******************************************************!*\
  !*** ./assets/react-app/component/customer/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "formatDate", date => {
      const year = new Date(date).getFullYear();
      const month = new Date(date).getMonth();
      const day = new Date(date).getDate();
      return `${day}-${month + 1}-${year}`;
    });

    _defineProperty(this, "paginateData", data => {
      console.log(data);
      const {
        limit
      } = this.state;
      const range = Math.ceil(data.length / limit);
      this.setState({
        pagination: this.paginate(data, limit, 0),
        data: data,
        range: range,
        active: 0
      });
    });

    _defineProperty(this, "handlePage", page => {
      this.setState({
        pagination: this.paginate(this.state.data, this.state.limit, page),
        active: page
      });
    });

    _defineProperty(this, "handleRemove", id => {
      console.log("handle remove", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/products/${id}`
      }).then(response => {
        console.log(response);
        this.handlePage(this.state.active);
      }).catch(e => console.log(e));
    });

    _defineProperty(this, "handleClear", () => {
      console.log("clearing");
      this.refs.email.value = "";
      this.setState({
        email: null
      });
    });

    _defineProperty(this, "handleSearch", () => {
      const {
        email
      } = this.state;
      let data = this.state.defaultData;

      if (email) {
        data = data.filter(x => x.email.toLowerCase().indexOf(email.toLowerCase()) !== -1);
      }

      this.paginateData(data);
    });

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      email: null
    };
  }

  paginate(array, page_size, page_number) {
    console.log(page_size); // --page_number; // because pages logically start with 1, but technically with 0

    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/customer`).then(response => {
      if (this.mounted) {
        const {
          data
        } = response;
        console.log(data);
        this.setState({
          defaultData: data
        });
        this.paginateData(data);
      }
    }).catch(e => console.log(e));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleEdit(id) {
    this.props.edit(id);
  }

  render() {
    console.log(this.props);
    const {
      data,
      active,
      range,
      pagination
    } = this.state;
    let items = [];

    if (range) {
      for (let number = 0; number < range; number++) {
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Item, {
          onClick: () => {
            this.handlePage(number);
          },
          key: number,
          active: number === active
        }, number + 1));
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2 border rounded mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Search"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "email",
      type: "text",
      onChange: e => this.setState({
        email: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-info",
      onClick: this.handleSearch
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-search"
    }), " ", "  ", " Search"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-secondary",
      onClick: this.handleClear
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-eraser"
    }), " ", "  ", " Clear"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "overflow-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Registered On"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.email), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.firstname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.lastname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formatDate(x.createdAt)))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      animation: "border"
    })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Prev, {
      onClick: () => this.handlePage(active - 1),
      disabled: active === 0
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, null, items), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Next, {
      onClick: () => this.handlePage(active + 1),
      disabled: active === range - 1
    })))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/order/Modal.js":
/*!***************************************************!*\
  !*** ./assets/react-app/component/order/Modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class Modal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal fade",
      id: "modal" + this.props.id // tabindex="-1"
      ,
      role: "dialog",
      "aria-labelledby": "modal" + this.props.id + "Label",
      "aria-hidden": "true"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-dialog",
      role: "document"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      style: {
        color: "black"
      }
    }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-body",
      style: {
        color: "black"
      }
    }, "Confirm Delete Order ", this.props.id, "?"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.props.delete(this.props.id),
      type: "button",
      className: "btn btn-danger",
      "data-dismiss": "modal"
    }, "Confirm")))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/order/ModalOrder.js":
/*!********************************************************!*\
  !*** ./assets/react-app/component/order/ModalOrder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class ModalOrder extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal fade",
      id: "modalorder" + this.props.name + this.props.id // tabindex="-1"
      ,
      role: "dialog",
      "aria-labelledby": "modalorder" + this.props.name + this.props.id + "Label",
      "aria-hidden": "true"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-dialog",
      role: "document"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      style: {
        color: "black"
      }
    }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-body",
      style: {
        color: "black"
      }
    }, "Confirm Order Status Will Change to ", this.props.name, "?"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.props.delete(this.props.id),
      type: "button",
      className: "btn btn-danger",
      "data-dismiss": "modal"
    }, "Confirm")))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/order/Order.js":
/*!***************************************************!*\
  !*** ./assets/react-app/component/order/Order.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalOrder */ "./assets/react-app/component/order/ModalOrder.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Order extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePENDING", id => {
      console.log("handle change is fired", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/admin/orders/${id}/status`, {
        status: "PENDING"
      }).then(response => {
        console.log("response", response);
        this.setState({
          status: "PENDING"
        });
      }).catch(e => {
        console.log(e);
      });
    });

    _defineProperty(this, "handleCompleted", id => {
      console.log("handle change is fired", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/admin/orders/${id}/status`, {
        status: "COMPLETED"
      }).then(response => {
        console.log("response", response);
        this.setState({
          status: "COMPLETED"
        });
      }).catch(e => {
        console.log(e);
      });
    });

    _defineProperty(this, "handleDelivering", id => {
      console.log("handle change is fired", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/admin/orders/${id}/status`, {
        status: "DELIVERING"
      }).then(response => {
        console.log("response", response);
        this.setState({
          status: "DELIVERING"
        });
      }).catch(e => {
        console.log(e);
      });
    });

    _defineProperty(this, "handleProcessing", id => {
      console.log("handle change is fired", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default().patch(`/api/admin/orders/${id}/status`, {
        status: "PROCESSING"
      }).then(response => {
        console.log("response", response);
        this.setState({
          status: "PROCESSING"
        });
      }).catch(e => {
        console.log(e);
      });
    });

    this.state = {
      data: null,
      status: null
    };
  }

  componentDidMount() {
    const {
      data
    } = this.props.location.state;
    this.setState({
      data: data,
      status: data.status
    });
  }

  render() {
    const {
      data,
      status
    } = this.state;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-shopping-cart"
    }), " ", "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/orders"
    }, "Order"), "   ", "> ", "   ", "View Order"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border rounded p-3 mt-3"
    }, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Order List"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      className: "table table-sm table-dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "#"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Item"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Price"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data.orderdetails.map(x => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: x.id
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/images/" + x.productImage,
      style: {
        width: "50px",
        height: "50px"
      }
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productName), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.qty), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productPrice))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Total"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, data.total))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Customer Details"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "First Name :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.firstName)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Last Name :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.lastName)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Address :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.address)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "City :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.city)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "State :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.state)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Postcode :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.postcode)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Country :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.country)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Phone Number :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.address.phoneNumber))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Order Details"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Order Date :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.createdAt)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Payment Method :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.paymentMethod)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Status :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-danger"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, status && status))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "PayPal Details"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Amount :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.paypal.amount)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Currency :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && data.paypal.currency)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, "Status :"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-danger"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, status && data.paypal.status))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Action"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-primary",
      "data-toggle": "modal",
      "data-target": "#modalorderPENDING" + data.id
    }, "PENDING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalOrder__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handlePENDING,
      id: data.id,
      name: "PENDING"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-toggle": "modal",
      "data-target": "#modalorderPROCESSING" + data.id
    }, "PROCESSING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalOrder__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleProcessing,
      id: data.id,
      name: "PROCESSING"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-info",
      "data-toggle": "modal",
      "data-target": "#modalorderDELIVERING" + data.id
    }, "DELIVERING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalOrder__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleDelivering,
      id: data.id,
      name: "DELIVERING"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      "data-toggle": "modal",
      "data-target": "#modalorderCOMPLETED" + data.id
    }, "COMPLETED"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ModalOrder__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleCompleted,
      id: data.id,
      name: "COMPLETED"
    }))))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/order/PaginateOrder.js":
/*!***********************************************************!*\
  !*** ./assets/react-app/component/order/PaginateOrder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaginateOrder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./assets/react-app/component/order/Modal.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PaginateOrder extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "paginateData", data => {
      console.log(data);
      const {
        limit
      } = this.state;
      const range = Math.ceil(data.length / limit);
      this.setState({
        pagination: this.paginate(data, limit, 0),
        data: data,
        range: range,
        active: 0
      });
    });

    _defineProperty(this, "handlePage", page => {
      this.setState({
        pagination: this.paginate(this.state.data, this.state.limit, page),
        active: page
      });
    });

    _defineProperty(this, "filterItems", (arr, query) => {
      return arr.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    _defineProperty(this, "formatDate", date => {
      const year = new Date(date).getFullYear();
      const month = new Date(date).getMonth();
      const day = new Date(date).getDate();
      return `${day}-${month + 1}-${year}`; // let toFormat = new Date(date);
      // let formatDate =
      //   toFormat.getDate() +
      //   "-"(toFormat.getMonth() + 1) +
      //   toFormat.getFullYear();
    });

    _defineProperty(this, "handleSearch", () => {
      const {
        email,
        statusFilter,
        fromDate,
        toDate,
        orderId,
        greater,
        less
      } = this.state;
      let data = this.state.defaultData;

      if (email) {
        data = data.filter(x => x.user.email.toLowerCase().indexOf(email.toLowerCase()) !== -1);
      }

      if (statusFilter) {
        if (statusFilter !== "NONE") {
          data = data.filter(x => x.status === statusFilter);
        }
      }

      if (fromDate && toDate) {
        if (new Date(fromDate).getTime() === new Date(toDate).getTime()) {
          let dateSame = new Date(toDate);
          dateSame.setDate(dateSame.getDate() + 1);
          data = data.filter(item => {
            return new Date(item.createdAt).getTime() >= new Date(fromDate).getTime() && new Date(item.createdAt).getTime() <= dateSame.getTime();
          });
        } else {
          data = data.filter(item => {
            return new Date(item.createdAt).getTime() >= new Date(fromDate).getTime() && new Date(item.createdAt).getTime() <= new Date(toDate).getTime();
          });
        }
      }

      if (orderId) {
        data = data.filter(x => x.id === parseInt(orderId));
      }

      if (greater) {
        data = data.filter(x => x.total > parseFloat(greater));
      }

      if (less) {
        data = data.filter(x => x.total < parseFloat(less));
      }

      this.paginateData(data);
    });

    _defineProperty(this, "handleDelete", value => {
      console.log(value);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/orders/${value}`
      }).then(res => {
        console.log(res);
        let {
          data,
          active
        } = this.state;
        let deleted = data.filter(x => x.id !== value);
        this.setState({
          data: deleted
        });
        this.handlePage(active);
      }).catch(e => console.log(e));
    });

    _defineProperty(this, "handleClear", () => {
      console.log("clearing");
      this.refs.email.value = "";
      this.refs.status.value = "NONE";
      this.refs.order.value = "";
      this.refs.greater.value = "";
      this.refs.less.value = "";
      this.setState({
        email: null,
        statusFilter: null,
        fromDate: null,
        toDate: null,
        orderId: null,
        greater: null,
        less: null
      });
    });

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      email: null,
      statusFilter: null,
      toDate: null,
      fromDate: null
    };
  }

  paginate(array, page_size, page_number) {
    console.log(page_size); // --page_number; // because pages logically start with 1, but technically with 0

    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/order`).then(response => {
      if (this.mounted) {
        const {
          data
        } = response;
        console.log("data res", data);
        this.setState({
          defaultData: data
        });
        this.paginateData(data);
      }
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    const {
      data,
      range,
      active,
      pagination,
      statusFilter
    } = this.state;
    console.log(statusFilter);
    let items = [];

    if (range) {
      for (let number = 0; number < range; number++) {
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Item, {
          onClick: () => this.handlePage(number),
          key: number,
          active: number === active
        }, number + 1));
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2 border rounded mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Search"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "email",
      type: "text",
      onChange: e => this.setState({
        email: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      ref: "status",
      onChange: e => this.setState({
        statusFilter: e.target.value
      }),
      className: "form-control",
      style: {
        width: "12em"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "NONE"
    }, "Filter By"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "PENDING"
    }, "PENDING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "DELIVERING"
    }, "DELIVERING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "PROCESSING"
    }, "PROCESSING"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "COMPLETED"
    }, "COMPLETED"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "From"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_6___default()), {
      style: {
        width: "12em"
      },
      selectsStart: true,
      className: "form-control",
      placeholderText: "Click to select a date",
      onChange: e => this.setState({
        fromDate: e
      }),
      selected: this.state.fromDate,
      startDate: this.state.fromDate,
      endDate: this.state.toDate,
      dateFormat: "dd/MM/yyyy",
      maxDate: this.state.toDate,
      isClearable: true
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "To"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_6___default()), {
      style: {
        width: "12em"
      },
      selectsEnd: true,
      className: "form-control",
      placeholderText: "Click to select a date",
      onChange: e => this.setState({
        toDate: e
      }),
      selected: this.state.toDate,
      startDate: this.state.fromDate,
      endDate: this.state.toDate,
      dateFormat: "dd/MM/yyyy",
      minDate: this.state.fromDate,
      isClearable: true
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-2 pb-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Order Id"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "order",
      onChange: e => this.setState({
        orderId: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-2 pb-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Total Greater Than"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "greater",
      onChange: e => this.setState({
        greater: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-2 pb-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Total Less Than"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: "less",
      onChange: e => this.setState({
        less: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-info",
      onClick: this.handleSearch
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-search"
    }), " ", "  ", " Search"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-secondary",
      onClick: this.handleClear
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-eraser"
    }), " ", "  ", " Clear"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container border rounded overflow-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "User Email"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Order Id"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Total"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Date Created"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Action"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Delete"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, i + 1), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.user.email), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.id), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.total), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.status), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formatDate(x.createdAt)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
      className: "btn btn-primary",
      to: {
        pathname: "/vieworder",
        state: {
          data: x
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-pen-square"
    }), "  ", "View")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      "data-toggle": "modal",
      "data-target": "#modal" + x.id
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-1x fa-trash-alt"
    }), " Delete"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleDelete,
      id: x.id
    }))))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      animation: "border"
    }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Prev, {
      onClick: () => this.handlePage(active - 1),
      disabled: active === 0
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, items), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Next, {
      onClick: () => this.handlePage(active + 1),
      disabled: active === range - 1
    }))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/CanvasCrop.js":
/*!**********************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/CanvasCrop.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasCrop)
/* harmony export */ });
const pica = __webpack_require__(/*! pica */ "./node_modules/pica/dist/pica.js")();

const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", error => reject(error));
  image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox

  image.src = url;
});

function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */


async function CanvasCrop(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context

  canvas.width = safeArea;
  canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

  ctx.putImageData(data, Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x), Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)); // As Base64 string
  // return canvas.toDataURL('image/jpeg');
  // As a blob

  return await pica.toBlob(canvas, "image/jpeg", 0.9).then(blob => {
    const load = {
      blob: blob,
      url: URL.createObjectURL(blob)
    };
    return load;
  }); // return new Promise((resolve) => {
  //   pica.toBlob(canvas, "image/jpeg", 0.9).then((blob) => {
  //     const load = { blob: blob, url: URL.createObjectURL(blob) };
  //     resolve(load);
  //   });
  // });
}

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/CategoryList.js":
/*!************************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/CategoryList.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryList)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function CategoryList(props) {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [subcategory, setsubcategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [subtwo, setsubtwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [delcat, setdelcat] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [delsub, setdelsub] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [delsubtwo, setdelsubtwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "GET",
      url: "/api/admin/product/allcategories"
    }).then(response => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  function onSelectCategory(params) {
    resetDeleteItem();
    let target = params.target.value;
    setsubtwo(null);
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "GET",
      url: `/api/admin/products/${target}/subcategories`
    }).then(response => {
      console.log(response.data);

      if (response.data.length < 1) {
        setdelcat(parseInt(target));
      } else {
        setdelcat(null);
      }

      setsubcategory(response.data);
    }).catch(e => console.log(e));
  }

  const resetDeleteItem = () => {
    setdelcat(null);
    setdelsub(null);
    setdelsubtwo(null);
  };

  const subCategorySelect = e => {
    resetDeleteItem();
    let target = e.target.value;
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "GET",
      url: `/api/admin/products/${target}/subtwocategories`
    }).then(response => {
      console.log(response.data);

      if (response.data.length < 1) {
        setdelsub(parseInt(target));
      } else {
        setdelsub(null);
      }

      setsubtwo(response.data);
    }).catch(e => console.log(e));
  };

  const subtwoCategorySelect = e => {
    resetDeleteItem();
    setdelsubtwo(parseInt(e.target.value));
    console.log(delsubtwo);
  };

  const deleteCategory = () => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "DELETE",
      url: `/api/admin/categories/${delcat}`
    }).then(res => console.log(res)).catch(err => console.log(err));
    const newcat = data.filter((s, i) => delcat !== s.id);
    console.log(newcat);
    setData(newcat);
  };

  const deleteSubCategory = () => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "DELETE",
      url: `/api/admin/subcategories/${delsub}`
    }).then(res => console.log(res)).catch(err => console.log(err));
    const newsub = subcategory.filter((s, i) => delsub !== s.id);
    console.log(newsub);
    setsubcategory(newsub);
  };

  const deleteSubtwoCategory = () => {
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "DELETE",
      url: `/api/admin/subtwocategories/${delsubtwo}`
    }).then(res => console.log(res)).catch(err => console.log(err));
    const newsubtwo = subtwo.filter((s, i) => delsubtwo !== s.id);
    setsubtwo(newsubtwo);
  };

  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "this is category list"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col"
  }, " ", react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: ""
  }, "Category"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    onChange: onSelectCategory,
    size: "20",
    style: {
      minWidth: "150px"
    }
  }, data && data.map((data, i) => {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: i,
      value: data.id
    }, data.name, " >");
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    disabled: delcat === null ? true : false,
    onClick: deleteCategory
  }, "Delete Category")), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: ""
  }, "Sub Category"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    size: "20",
    style: {
      minWidth: "150px"
    },
    onChange: subCategorySelect
  }, subcategory && subcategory.map((sub, is) => {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: is,
      value: sub.id
    }, sub.subcategoryname, " ", " >");
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    disabled: delsub === null ? true : false,
    onClick: deleteSubCategory
  }, "Delete Sub Category")), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "col"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: ""
  }, "SubTwo Category"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    size: "20",
    style: {
      minWidth: "150px"
    },
    onChange: subtwoCategorySelect
  }, subtwo && subtwo.map((subt, is) => {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: is,
      value: subt.id
    }, subt.subtwocategoryname);
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    disabled: delsubtwo === null ? true : false,
    onClick: deleteSubtwoCategory
  }, "Delete Subtwo Category"))));
}

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/Cropperv2.js":
/*!*********************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/Cropperv2.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cropperv2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-easy-crop */ "./node_modules/react-easy-crop/index.module.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony import */ var _CanvasCrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasCrop */ "./assets/react-app/component/product/AddProducts/CanvasCrop.js");




function Cropperv2(props) {
  const [crop, setCrop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [croppedImage, setCroppedImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const onCropComplete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  function CloseDialog() {
    props.closeDialog();
    clearState();
  }

  const showCroppedImage = async () => {
    try {
      const croppedImage = await (0,_CanvasCrop__WEBPACK_IMPORTED_MODULE_1__.default)(props.payload.src, croppedAreaPixels, rotation);
      console.log("donee", {
        croppedImage
      });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const UploadImage = () => {
    props.payload.upload(croppedImage.blob, clearState);
  };

  const clearState = () => {
    setCroppedImage(null);
    setZoom(1);
    setCrop({
      x: 0,
      y: 0
    });
    setRotation(0);
    setCroppedAreaPixels(null);
    console.log("uploaded");
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, croppedImage && props.showDialog ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: dialogStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerButtonStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: CloseDialog
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-3"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: UploadImage
  }, "Save"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerCropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: " container  ",
    style: cropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row justify-content-md-center"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: croppedImage.url,
    alt: "",
    className: "img-fluid",
    style: {
      width: "250px",
      height: "250px"
    }
  }))))))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.showDialog && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: dialogStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerButtonStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: CloseDialog
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-3"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: showCroppedImage
  }, "Crop"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerCropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: cropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_3__.default, {
    image: props.payload.src,
    crop: crop,
    zoom: zoom,
    aspect: 1,
    onCropChange: setCrop,
    onCropComplete: onCropComplete,
    onZoomChange: setZoom
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: sliderStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    style: {
      padding: "20px"
    }
  }, "Zoom"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_4__.default, {
    min: 1,
    max: 3,
    step: 0.1,
    value: zoom,
    onChange: (e, zoom) => setZoom(zoom)
  }), " ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    style: {
      padding: "20px"
    }
  }, "Rotate")))))));
}
const dialogStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgb(0, 0, 0.4)",
  zIndex: "5"
};
const divDialog = {
  background: "rgb(255, 255, 255)"
};
const containerStyle = {
  height: "100vh",
  width: "100vw"
};
const containerCropperStyle = {
  height: "90%",
  padding: "10px"
};
const cropperStyle = {
  height: "90%",
  position: "relative"
};
const sliderStyle = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "60%"
};
const containerButtonStyle = {
  // border: "1px solid #f5f5f5",
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const croppedImageStyle = {
  maxWidth: "50vw" // position: "relative",

};

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/MCategory.js":
/*!*********************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/MCategory.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MCategory)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MCategory extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddCategory", index => {
      const addcat = this.state.categories.find((datas, idx) => index === idx);
      console.log("kena cari", addcat);

      if (addcat !== undefined) {
        const newdatalist = this.state.datalist.filter((datalist, ix) => addcat.categoryname !== datalist.name);
        this.setState({
          datalist: newdatalist
        });
      }

      const newData = this.state.categories.map((post, idx) => {
        if (index !== idx) return post;

        if (addcat !== undefined) {
          //this return value if select
          return { ...post,
            disable: true
          };
        }
      });
      this.setState({
        categories: newData
      }, () => {
        this.setState({
          categories: [...this.state.categories, {
            categoryid: "",
            categoryname: "",
            disable: false
          }]
        });
      });
      this.props.changecategory(this.state.categories);
    });

    _defineProperty(this, "handleAddSubCategory", index => e => {
      e.preventDefault();
      const addsub = this.state.categories.map((cat, cati) => {
        if (index !== cati) return cat;
        return { ...cat,
          subcategory: [{
            subcategoryid: "",
            subcategoryname: "",
            disable: false
          }]
        };
      });
      console.log("add sub", addsub);
      this.setState({
        categories: addsub
      });
      this.props.changecategory(addsub);
    });

    _defineProperty(this, "handleAddsubtwocategory", (i, s) => e => {
      e.preventDefault();
      console.log("init addsub2", this.state.categories);
      const addsubtwo = this.state.categories.map((addsubtwocat, itwo) => {
        if (i !== itwo) return addsubtwocat;
        return { ...addsubtwocat,
          subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
            if (s !== adsti) return adst;
            return { ...adst,
              subtwocategory: [{
                subtwocategoryid: "",
                subtwocategoryname: ""
              }]
            };
          })
        };
      });
      console.log("add sub two", addsubtwo);
      this.setState({
        categories: addsubtwo
      });
      this.props.changecategory(addsubtwo);
    });

    _defineProperty(this, "handleAddMoreSub", butcat => e => {
      e.preventDefault();
      const addmoresub = this.state.categories.map((addmore, aidx) => {
        if (butcat !== aidx) return addmore;
        return { ...addmore,
          subcategory: [...addmore.subcategory, {
            subcategoryid: "",
            subcategoryname: ""
          }]
        };
      });
      console.log("addmoresub", addmoresub);
      this.setState({
        categories: addmoresub
      });
      this.props.changecategory(addmoresub);
    });

    _defineProperty(this, "handleAddMoreSubTwo", (addcat, butsub, subtwoindx) => e => {
      e.preventDefault();
      const addmoresubtwo = this.state.categories.map((addmoresub, amsi) => {
        if (addcat !== amsi) return addmoresub;
        return { ...addmoresub,
          subcategory: addmoresub.subcategory.map((subcatinit, scidx) => {
            if (butsub !== scidx) return subcatinit;
            return { ...subcatinit,
              subtwocategory: [...subcatinit.subtwocategory, {
                subtwocategoryid: "",
                subtwocategoryname: ""
              }]
            };
          })
        };
      });
      console.log(addmoresubtwo);
      this.setState({
        categories: addmoresubtwo
      });
      this.props.changecategory(addmoresubtwo);
    });

    _defineProperty(this, "handleRemoveCategory", index => e => {
      e.preventDefault();

      if (this.state.categories.length < 2) {
        const enable = this.state.categories.map((x, i) => {
          if (index === i) {
            return { ...x,
              disable: false
            };
          }
        });
        this.setState({
          categories: enable,
          datalist: this.state.data
        });
        return;
      }

      const removecat = this.state.categories.filter((a, i) => index !== i);
      this.setState({
        categories: removecat
      }, this.props.removecategory(removecat));
    });

    _defineProperty(this, "handleRemoveSubCategory", (cati, subi) => e => {
      e.preventDefault();
      const removed = this.state.categories.map((mod, modindx) => {
        if (cati !== modindx) return mod;

        if (cati === 0 && subi === 0) {
          return { ...mod,
            subcategory: ""
          };
        }

        return { ...mod,
          subcategory: mod.subcategory.filter((sub, isub) => subi !== isub)
        };
      });
      this.setState({
        categories: removed
      });
      this.props.removecategory(removed);
    });

    _defineProperty(this, "handleRemoveSubTwoCategory", (x, y, z) => e => {
      e.preventDefault();
      const removesubtwo = this.state.categories.map((addsubtwocat, itwo) => {
        if (x !== itwo) return addsubtwocat;
        return { ...addsubtwocat,
          subcategory: addsubtwocat.subcategory.map((adst, adsti) => {
            if (y !== adsti) return adst;
            return { ...adst,
              subtwocategory: adst.subtwocategory.filter((fil, ind) => z !== ind)
            };
          })
        };
      });
      this.setState({
        categories: removesubtwo
      });
      this.props.removecategory(removesubtwo);
    });

    _defineProperty(this, "handleInput", i => e => {
      console.log(e.target.value);
      const data = this.state.data.find((datas, idx) => e.target.value === datas.name);
      console.log("kena cari", data);
      const newData = this.state.categories.map((post, idx) => {
        if (i !== idx) return post;

        if (data !== undefined) {
          //this return value if select
          return { ...post,
            categoryname: data.name,
            categoryid: data.id
          };
        } else {
          //this return new value without select
          return { ...post,
            categoryname: e.target.value,
            categoryid: ""
          };
        }
      });
      console.log("new data : ", newData);
      this.setState({
        categories: newData
      });
      this.props.changecategory(newData);
    });

    _defineProperty(this, "handleSubInput", (catidx, subidx, categoryname) => e => {
      console.log("target subcat", e.target.value);
      console.log("target cat", categoryname);
      let subdata = null;
      const category = this.state.data.find((datas, id) => categoryname === datas.name);
      console.log(category);

      if (category) {
        subdata = category.subcategory.find((sub, ix) => sub.subcategoryname === e.target.value);
        console.log("data categori", subdata);
      }

      const modified = this.state.categories.map((mod, modindx) => {
        if (catidx !== modindx) return mod;
        return { ...mod,
          subcategory: mod.subcategory.map((sub, isub) => {
            if (subidx !== isub) return sub;

            if (subdata) {
              return { ...sub,
                subcategoryname: subdata.subcategoryname,
                subcategoryid: subdata.id
              };
            } else {
              return { ...sub,
                subcategoryname: e.target.value,
                subcategoryid: ""
              };
            }
          })
        };
      });
      console.log("modified :", modified);
      this.setState({
        categories: modified
      });
      this.props.changecategory(modified);
    });

    _defineProperty(this, "handleSubTwoInput", (incatindx, incatsubidx, incatsubtwoidx, categoryname, subcategoryname) => event => {
      let subtwodata = null;
      let subdata = null;
      const category = this.state.data.find((datas, id) => categoryname === datas.name);

      if (category) {
        subdata = category.subcategory.find((sub, ix) => sub.subcategoryname === subcategoryname);
        console.log("data categori", subdata);
      }

      if (subdata) {
        subtwodata = subdata.Subtwocategory.find((subtwo, sti) => subtwo.subtwocategoryname === event.target.value);
      }

      const subtwonew = this.state.categories.map((catsubtwo, catsubtwoidx) => {
        if (incatindx !== catsubtwoidx) return catsubtwo;
        return { ...catsubtwo,
          subcategory: catsubtwo.subcategory.map((catsub, catsubidx) => {
            if (incatsubidx !== catsubidx) return catsub;
            return { ...catsub,
              subtwocategory: catsub.subtwocategory.map((subtwo, subtwoidx) => {
                if (incatsubtwoidx !== subtwoidx) return subtwo;

                if (subtwodata) {
                  return { ...subtwo,
                    subtwocategoryname: event.target.value,
                    subtwocategoryid: subtwodata.id
                  };
                } else {
                  return { ...subtwo,
                    subtwocategoryname: event.target.value,
                    subtwocategoryid: ""
                  };
                }
              })
            };
          })
        };
      });
      console.log("subtwonew cat :", subtwonew);
      this.setState({
        categories: subtwonew
      });
      this.props.changecategory(subtwonew);
    });

    this.state = {
      categories: [{
        categoryid: "",
        categoryname: "",
        disable: false
      }],
      data: [],
      datalist: []
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/admin/product/categories").then(response => {
      if (this.mounted) {
        console.log(response.data);
        this.setState({
          data: response.data,
          datalist: response.data
        });
      }
    }).catch(error => console.log(error));
  }

  render() {
    console.log(this.state);
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: ""
    }, this.state.categories.map((data, index) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: index,
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, `Categori #${index + 1} - ${data.categoryname}`), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      list: `datalist${index}`,
      required: true,
      disabled: data.subcategory || data.disable ? true : false,
      size: "12",
      onChange: this.handleInput(index),
      placeholder: `Category #${index + 1}`
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("datalist", {
      id: `datalist${index}`
    }, this.state.datalist && this.state.datalist.map((item, key) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: key,
      value: item.name
    }))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleRemoveCategory(index),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "X"), !data.disable && react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, data.categoryname !== "" ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.handleAddCategory(index);
      },
      className: "btn btn-sm btn-primary btn-block mb-3"
    }, "Add Category") : null), data.subcategory ? data.subcategory.map((sub, subidx) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: subidx
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, `Sub Category ${sub.subcategoryname}#${subidx + 1} of Category ${data.categoryname} #${index + 1}`), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      size: "12",
      disabled: sub.subtwocategory ? true : false,
      list: `${data.categoryname}${data.categoryid}`,
      required: true // value={sub.subcategoryname}
      ,
      placeholder: `Sub Category#${subidx + 1}`,
      onChange: this.handleSubInput(index, subidx, data.categoryname)
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("datalist", {
      id: `${data.categoryname}${data.categoryid}`
    }, this.state.data.map((db, dbix) => {
      if (db.id === data.categoryid) {
        return db.subcategory.map((dbs, dbi) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
          key: dbi,
          value: dbs.subcategoryname
        }));
      }
    })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleRemoveSubCategory(index, subidx),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "X"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleAddMoreSub(index, subidx),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "Add More Sub Category"), sub.subtwocategory ? sub.subtwocategory.map((sub2, indtwo) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      key: indtwo
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, `Sub 2nd Category ${sub2.subtwocategoryname} #${indtwo + 1} Sub Category ${sub.subcategoryname}#${subidx + 1} of Category ${data.categoryname} #${index + 1}`), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      type: "text",
      size: "12",
      required: true,
      list: `${data.categoryname}${sub.subcategoryname}${sub.subcategoryid}`,
      placeholder: `Sub Two Category#${indtwo + 1}`,
      onChange: this.handleSubTwoInput(index, subidx, indtwo, data.categoryname, sub.subcategoryname)
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("datalist", {
      id: `${data.categoryname}${sub.subcategoryname}${sub.subcategoryid}`
    }, this.state.data.map((db, dbix) => {
      if (db.id === data.categoryid) {
        return db.subcategory.map((dbs, dbi) => {
          if (dbs.id === sub.subcategoryid) {
            return dbs.Subtwocategory.map((subtwo, sdbi) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
              key: sdbi,
              value: subtwo.subtwocategoryname
            }));
          }
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleRemoveSubTwoCategory(index, subidx, indtwo),
      className: "btn btn-sm btn-primary btn-sm p-2 m-2"
    }, "X"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleAddMoreSubTwo(index, subidx, indtwo),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "Add More Sub Two Category"))) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, sub.subcategoryname && react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleAddsubtwocategory(index, subidx),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "Add Sub Two Category")))) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, data.categoryname && react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: this.handleAddSubCategory(index),
      className: "btn btn-sm btn-primary  p-2 m-2"
    }, "Add Sub Category")))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/PDetails.js":
/*!********************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/PDetails.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PDetails)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PDetails extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAdd", () => {
      this.setState({
        details: this.state.details.concat([{
          detailname: "",
          datadesc: ""
        }])
      });
    });

    _defineProperty(this, "handleRemove", value => {
      if (this.state.details.length < 2) return;
      const remove = this.state.details.filter((data, index) => value !== index);
      this.setState({
        details: remove
      }, () => this.props.removedetail(remove));
    });

    _defineProperty(this, "handleChangeDetailName", id => event => {
      const newdetails = this.state.details.map((detail, index) => {
        if (id !== index) return detail;
        return { ...detail,
          detailname: event.target.value
        };
      });
      this.setState({
        details: newdetails
      }, () => this.props.newdetails(newdetails));
    });

    _defineProperty(this, "handleChangeDataDesc", id => event => {
      const newdetaildatadesc = this.state.details.map((detail, index) => {
        if (id !== index) return detail;
        return { ...detail,
          datadesc: event.target.value
        };
      });
      this.setState({
        details: newdetaildatadesc
      }, () => this.props.newdetails(newdetaildatadesc));
    });

    this.state = {
      details: [{
        detailname: "",
        datadesc: ""
      }],
      data: null
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/admin/product/details").then(response => {
      if (this.mounted) {
        console.log("From Details: ", response.data);
        this.setState({
          data: response.data
        });
      }
    }).catch(error => console.log(error));
  }

  render() {
    console.log(this.state.details);
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, this.state.details.map((data, index) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "ml-4",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      size: "15",
      className: "mr-2 mb-2",
      value: data.detailname,
      required: true,
      list: "name",
      type: "text",
      placeholder: `Detail Name #${index + 1}`,
      onChange: this.handleChangeDetailName(index)
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
      size: "15",
      required: true,
      value: data.datadesc,
      list: "desc",
      className: "mr-2 mb-2",
      type: "text",
      placeholder: `Details #${index}`,
      onChange: this.handleChangeDataDesc(index)
    }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.handleRemove(index);
      },
      className: "btn btn-primary  p-2 mt-2 mb-2 "
    }, "X"))))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("datalist", {
      id: "name"
    }, this.state.data && this.state.data.map((item, key) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: key,
      value: item.detailname
    }))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("datalist", {
      id: "desc"
    }, this.state.data && this.state.data.map((item, key) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
      key: key,
      value: item.datadesc
    }))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        this.handleAdd();
      },
      className: "btn btn-primary btn-sm btn-block mb-3 mt-3"
    }, "Add More Detail"));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/Picture.js":
/*!*******************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/Picture.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blueimp-load-image/js */ "./node_modules/blueimp-load-image/js/index.js");
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cropperv2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cropperv2 */ "./assets/react-app/component/product/AddProducts/Cropperv2.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const pica = __webpack_require__(/*! pica */ "./node_modules/pica/dist/pica.js")();

class Picture extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleImageAdd", () => {
      this.setState({
        picture: this.state.picture.concat([{
          imageid: "",
          imagename: ""
        }])
      });
    });

    _defineProperty(this, "handleRemoveImage", i => {
      if (this.state.picture.length < 2) return;
      if (this.fileInput) this.inputFile[i].value = "";
      const remove = this.state.picture.filter((s, fi) => i !== fi);
      const imagedel = this.state.picture.filter((image, idx) => i === idx);
      const pictureup = imagedel.find(x => x.imageid);

      if (typeof pictureup !== "undefined") {
        this.setState({
          message: "Deleting Image"
        });
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "DELETE",
          url: `/api/admin/products/${pictureup.imageid}/image`
        }).then(response => {
          console.log(response);
          this.setState({
            picture: remove,
            message: null
          }, this.props.removepicture(remove));
        }).catch(error => {
          console.log(error);
          this.setState({
            message: null
          });
          alert("Something Not Good i can feel it..");
        });
      } else {
        this.setState({
          picture: remove
        });
      }
    });

    _defineProperty(this, "onSelectFile", a => e => {
      console.log("ini a :", a);
      console.log("ini e :", e.target.files);

      if (e.target.files[0].size > 8388608) {
        alert("Image File too big.. Please Put less than 8mb");
        e.target.value = "";
        return;
      } //original i edit on 2/8/2021 code
      // if (e.target.files && e.target.files.length > 0) {
      //   this.setState({ targetimage: a });
      //   const reader = new FileReader();
      //   reader.addEventListener("load", () => {
      //     const payload = {
      //       src: reader.result,
      //       upload: this.handleUpload,
      //     };
      //     this.props.showCrop(payload);
      //   });
      //   reader.readAsDataURL(e.target.files[0]);
      // }


      if (e.target.files && e.target.files.length > 0) {
        this.setState({
          targetimage: a
        });
        blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2___default()(e.target.files[0], async img => {
          var pixel = img.height * img.width;

          if (pixel > 3145728) {
            var ratio = pixel > 5038848 ? 0.5 : 0.8;

            try {
              this.setState({
                message: "Please wait ..."
              });
              var imgcomp = await compressImage(img, ratio);
              var base64data = imgcomp.toDataURL(`image/jpeg`);
              const payload = {
                src: base64data,
                upload: this.handleUpload
              };
              this.setState({
                payload: payload,
                message: null,
                showEasyCrop: true
              });
            } catch (error) {
              this.setState({
                message: error
              }, () => {
                setTimeout(() => {
                  this.setState({
                    message: null
                  });
                }, 2000);
              });
            }
          } else {
            var base64data = img.toDataURL(`image/jpeg`);
            const payload = {
              src: base64data,
              upload: this.handleUpload
            };
            this.setState({
              payload: payload,
              message: null,
              showEasyCrop: true
            });
          }
        }, {
          orientation: true,
          canvas: true
        });
      }
    });

    _defineProperty(this, "handleUpload", (imageBlob, loader) => {
      const formData = new FormData();
      formData.append("image", imageBlob); //testing purpose
      // const file = dataURLtoFile("imageBlob", imageBlob)
      // console.log("image blob",file)

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "/api/admin/products/images",
        data: formData
      }).then(response => {
        console.log(response);
        this.handleAddImage(response.data);
        this.handleCloseEasyCrop();
        loader(); //this is uploads to reset all to null for upload
      }).catch(response => {
        console.log(response);
        this.handleCloseEasyCrop(); // this.props.closeCrop();

        loader();
      });
    });

    _defineProperty(this, "handleAddImage", e => {
      console.log("image upload", e);
      const imageUpload = this.state.picture.map((image, i) => {
        if (i !== this.state.targetimage) return image;
        return { ...image,
          imageid: e.id,
          imagename: e.image
        };
      });
      this.setState({
        picture: imageUpload
      }, () => {
        this.props.showPicture(imageUpload);
      });
    });

    _defineProperty(this, "handleShowEasyCrop", () => {
      this.setState({
        showEasyCrop: true
      });
    });

    _defineProperty(this, "handleCloseEasyCrop", () => {
      this.setState({
        showEasyCrop: false
      });
    });

    this.state = {
      picture: [{
        imageid: "",
        imagename: ""
      }],
      targetimage: null,
      showBlackScreen: false,
      message: null,
      showEasyCrop: false,
      payload: null
    };
    this.inputFile = [];

    this.fileInput = i => e => {
      this.inputFile[i] = e;
    };
  }

  render() {
    console.log(this.state.picture);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mt-3"
    }, this.state.picture.map((data, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i,
      className: "d-flex"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#",
      className: "btn btn-primary p-1 pt-1 mt-0.8 mr-1",
      onClick: e => {
        e.preventDefault();
        this.handleRemoveImage(i);
      }
    }, "X")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-1"
    }, i + 1 + "."), data.imagename ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "p-2",
      src: `/images/${data.imagename}`,
      alt: "",
      style: {
        width: "130px",
        height: "130px"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      key: i,
      ref: this.fileInput(i),
      className: "form-control-file m-1",
      type: "file",
      accept: "image/png, image/jpeg",
      onChange: this.onSelectFile(i)
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#",
      className: "btn  btn-primary btn-sm btn-block my-3",
      onClick: e => {
        e.preventDefault();
        this.handleImageAdd();
      }
    }, "Add More Picture"), this.state.message && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: submitDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-8 mx-auto col-md-6 col-lg-4 p-2",
      style: divDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, this.state.message))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cropperv2__WEBPACK_IMPORTED_MODULE_3__.default, {
      showDialog: this.state.showEasyCrop,
      closeDialog: this.handleCloseEasyCrop,
      payload: this.state.payload,
      upload: this.handleUpload
    }));
  }

}
const submitDialog = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)",
  zIndex: "1"
};
const divDialog = {
  background: "rgb(255, 255, 255)"
};

const compressImage = (img, crt) => {
  var offScreenCanvas = document.createElement("canvas");
  offScreenCanvas.width = img.width * crt;
  offScreenCanvas.height = img.height * crt;
  return pica.resize(img, offScreenCanvas).then(imageCCS => imageCCS).catch(e => e);
};

/***/ }),

/***/ "./assets/react-app/component/product/AddProducts/ProductAdd.js":
/*!**********************************************************************!*\
  !*** ./assets/react-app/component/product/AddProducts/ProductAdd.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _MCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MCategory */ "./assets/react-app/component/product/AddProducts/MCategory.js");
/* harmony import */ var _PDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PDetails */ "./assets/react-app/component/product/AddProducts/PDetails.js");
/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Picture */ "./assets/react-app/component/product/AddProducts/Picture.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ProductAdd extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      console.log(this.state);
      const {
        name,
        price,
        stock,
        desc,
        images,
        categories,
        details
      } = this.state;
      this.setState({
        message: "Saving data.. Please Take Deep Breath .."
      });
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        method: "POST",
        url: `/api/admin/products`,
        data: {
          name: name,
          price: price,
          stock: stock,
          desc: desc,
          details: details,
          images: images,
          categories: categories
        }
      }, () => {
        console.log("sending data to server....");
      }).then(e => {
        console.log(e);
        alert("Product Saved!!");
        this.props.history.push("/product");
      }).catch(e => {
        this.setState({
          message: "Something Wrong..erorr please contact pulis",
          showbutton: true
        });
        console.log(e);
      });
    });

    _defineProperty(this, "handleUploaded", images => {
      this.setState({
        images: images
      });
    });

    _defineProperty(this, "handleRemovePicture", images => {
      this.setState({
        images: images
      });
    });

    _defineProperty(this, "handleChangeCategory", value => {
      this.setState({
        categories: value
      });
    });

    _defineProperty(this, "handleRemoveCategory", cat => {
      console.log(cat);
      this.setState({
        categories: cat
      });
    });

    _defineProperty(this, "handleNewDetails", e => {
      console.log(e);
      this.setState({
        details: e
      });
    });

    _defineProperty(this, "handleRemoveDetail", remove => {
      console.log(remove);
      this.setState({
        details: remove
      });
    });

    this.state = {
      images: [],
      details: [],
      categories: [],
      name: null,
      price: null,
      stock: null,
      desc: null,
      details: null,
      showbutton: false,
      showCropperDialog: false
    };
    this.handSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.state);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      type: "text",
      onChange: e => this.setState({
        name: e.target.value
      }),
      className: "form-control"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      type: "number",
      onChange: e => this.setState({
        price: e.target.value
      }),
      className: "form-control",
      style: {
        width: "10em"
      },
      min: "0"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Stock"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      style: {
        width: "10em"
      },
      type: "number",
      onChange: e => this.setState({
        stock: e.target.value
      }),
      className: "form-control",
      min: "0"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Description"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      required: true,
      className: "form-control mb-3",
      onChange: e => this.setState({
        desc: e.target.value
      })
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Picture__WEBPACK_IMPORTED_MODULE_3__.default, {
      showCrop: this.props.showCrop,
      showPicture: this.handleUploaded,
      closeCrop: this.props.closeCrop,
      removepicture: this.handleRemovePicture,
      showEasyCrop: this.props.showEasyCrop
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MCategory__WEBPACK_IMPORTED_MODULE_1__.default, {
      removecategory: this.handleRemoveCategory,
      changecategory: this.handleChangeCategory
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PDetails__WEBPACK_IMPORTED_MODULE_2__.default, {
      removedetail: this.handleRemoveDetail,
      newdetails: this.handleNewDetails
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary btn-sm btn-block",
      onClick: this.handleSaveButton
    }, "Save")))), this.state.message && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: submitDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-8 mx-auto col-md-6 col-lg-4 p-2",
      style: divDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, this.state.message), this.state.showbutton && react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.setState({
        message: null
      })
    }, "Close"))));
  }

}
const submitDialog = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)"
};
const divDialog = {
  background: "rgb(255, 255, 255)"
};

/***/ }),

/***/ "./assets/react-app/component/product/Old/AddProduct.js":
/*!**************************************************************!*\
  !*** ./assets/react-app/component/product/Old/AddProduct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ "./assets/react-app/component/product/Old/Categories.js");
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductDetails */ "./assets/react-app/component/product/Old/ProductDetails.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AddProduct extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddProduct", () => {
      console.log(this.state.details);
      const {
        imageid,
        name,
        price,
        stock,
        categoryId,
        desc,
        details
      } = this.state;

      if (imageid && name && price && stock && categoryId && desc) {
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: "POST",
          url: `/api/admin/products/${categoryId}`,
          data: {
            name: name,
            price: price,
            stock: stock,
            imageid: imageid,
            desc: desc,
            details: details
          }
        }, () => {
          console.log("sending data to server....");
        }).then(e => {
          if (this.mounted) {
            console.log(e);
            this.props.history.push("/product");
          }
        }).catch(e => console.log(e));
      }
    });

    _defineProperty(this, "handleRemoveImage", () => {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/products/${this.state.imageid}/image`
      }).then(response => {
        console.log(response);
        this.setState({
          imageid: null,
          image: null
        });
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handleAddImage", e => {
      console.log("image upload", e);
      this.setState({
        imageid: e.id,
        image: e.image
      });
    });

    _defineProperty(this, "handleSelect", value => {
      if (value === "false") {
        this.setState({
          categoryId: null
        });
      } else {
        console.log("show something here", value);
        this.setState({
          categoryId: value
        });
      }
    });

    _defineProperty(this, "onSelectFile", e => {
      if (e.target.files[0].size > 8388608) {
        alert("Image File too big.. Please Put less than 8mb");
        e.target.value = "";
        return;
      }

      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          const payload = {
            src: reader.result,
            upload: this.handleUpload
          };
          this.props.showCrop(payload);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    _defineProperty(this, "handleUpload", (imageBlob, loader) => {
      const formData = new FormData();
      formData.append("image", imageBlob);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "/api/admin/products/images",
        data: formData
      }).then(response => {
        console.log(response);
        this.handleAddImage(response.data);
        this.props.closeCrop();
        loader();
      }).catch(response => {
        console.log(response);
        this.props.closeCrop();
        loader();
      });
    });

    _defineProperty(this, "handleDetailName", e => {
      // console.log("from ProductDetails.js DetailName: ", e)
      this.setState({
        details: e
      });
    });

    this.state = {
      imageid: null,
      name: null,
      price: null,
      stock: null,
      saveButton: "disabled",
      categoryId: null,
      imageid: null,
      desc: null,
      details: [],
      validate: false
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    const {
      imageId
    } = this.state;
    this.mounted = false;

    if (imageId) {
      this.handleRemoveImage();
    }
  }

  // handleDetailDesc = e =>{
  //   console.log("from ProductDetails.js DetailDesc: ", e)
  //   this.setState({ details : e })
  // }
  render() {
    const {
      imageid,
      image,
      saveButton,
      categoryId,
      name,
      price,
      stock,
      desc,
      validate
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " ", "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/product"
    }, "Product List"), " ", "> New Product"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-4 border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      onChange: e => this.setState({
        name: e.target.value
      }),
      className: "form-control"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "number",
      onChange: e => this.setState({
        price: e.target.value
      }),
      className: "form-control",
      style: {
        width: "10em"
      },
      min: "0"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Stock"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: {
        width: "10em"
      },
      type: "number",
      onChange: e => this.setState({
        stock: e.target.value
      }),
      className: "form-control",
      min: "0"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Description"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      className: "form-control mb-3",
      onChange: e => this.setState({
        desc: e.target.value
      }),
      style: {
        width: "30em",
        height: "5em"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductDetails__WEBPACK_IMPORTED_MODULE_3__.default, {
      detailname: this.handleDetailName,
      validate: this.validate
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-4 border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, imageid === null ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "file",
      accept: "image/png, image/jpeg",
      onChange: this.onSelectFile
    })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "p-2",
      src: `/images/${image}`,
      alt: "",
      style: {
        width: "130px",
        height: "130px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-warning",
      onClick: this.handleRemoveImage
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-trash-alt"
    }), " Remove Image")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Categories__WEBPACK_IMPORTED_MODULE_2__.default, {
      selected: this.handleSelect
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, imageid && name && price && price >= 0 && stock && stock >= 0 && categoryId && desc ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary ",
      onClick: () => this.handleAddProduct()
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-save fa-2x "
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Save Product")) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary ",
      onClick: () => this.handleAddProduct(),
      disabled: saveButton
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-save fa-2x"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "alert alert-primary"
    }, "Please Fill All Fields")), stock < 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "alert alert-primary"
    }, "Please Enter Stock Amount more than 0"), price < 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "alert alert-primary"
    }, "Please put price more than 0")))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/Categories.js":
/*!**************************************************************!*\
  !*** ./assets/react-app/component/product/Old/Categories.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Categories extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      data: null,
      show: true,
      categoryData: null
    });

    _defineProperty(this, "handleCategory", () => {
      this.setState({
        data: null
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "api/admin/products/categories",
        data: {
          name: this.state.category,
          details: this.state.details
        }
      }).then(response => {
        console.log(response.data);
        this.setState({
          categoryData: response.data,
          show: true
        }, () => {
          this.handleAxios();
          this.props.selected(this.state.categoryData.id);
        }); // this.setState({ category: "", details: "", show: true });
      }).catch(error => console.log(error));
    });
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("api/admin/product/categories").then(response => {
      if (this.mounted) {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      }
    }).catch(error => console.log(error));
  }

  render() {
    const {
      data,
      show,
      categoryData
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && show && react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      onChange: e => this.props.selected(e.target.value),
      defaultValue: categoryData ? categoryData.id : null
    }, data !== null && show && react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "false"
    }, "Please Select A Category"), data !== null && show ? data.map(data => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: data.id,
      value: data.id
    }, data.name)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "LOADING"
    }, "LOADING..")), show ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: () => this.setState({
        show: false
      })
    }, "Add New Category"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      className: "btn btn-primary",
      to: "/category"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-edit"
    }), " Category List"))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      onChange: e => this.setState({
        category: e.target.value
      }),
      type: "text",
      placeholder: "Category Name"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      onChange: e => this.setState({
        details: e.target.value
      }),
      type: "text",
      placeholder: "Category Details"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.setState({
        show: true
      })
    }, "Cancel Add Category"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.handleCategory
    }, "Save"))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/CategoryEdit.js":
/*!****************************************************************!*\
  !*** ./assets/react-app/component/product/Old/CategoryEdit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Old_ModalCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Old/ModalCat */ "./assets/react-app/component/product/Old/ModalCat.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CategoryEdit extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleRemove", id => {
      console.log("removing ", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/categories/${id}`
      }).then(response => {
        console.log(response);
        this.handleAxios();
      }).catch(e => console.log(e));
    });

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleAxios() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("api/admin/product/categories").then(response => {
      if (this.mounted) {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      }
    }).catch(error => console.log(error));
  }

  render() {
    const {
      data
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " ", "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/product"
    }, "Product"), "   ", "> ", "   ", "Category List"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Category Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "details"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data ? data.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, i + 1), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.name), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.details), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      "data-toggle": "modal",
      "data-target": "#category" + x.id
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-1x fa-trash-alt"
    }), " Remove"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Old_ModalCat__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleRemove,
      id: x.id,
      name: x.name
    })))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      animation: "border"
    }))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/CropDialog.js":
/*!**************************************************************!*\
  !*** ./assets/react-app/component/product/Old/CropDialog.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CropDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.min.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CropDialog extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSelectFile", e => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => this.setState({
          src: reader.result
        }));
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    _defineProperty(this, "onImageLoaded", (image, crop) => {
      this.imageRef = image;
    });

    _defineProperty(this, "onCropComplete", crop => {
      this.makeClientCrop(crop);
    });

    _defineProperty(this, "onCropChange", crop => {
      this.setState({
        crop
      });
    });

    _defineProperty(this, "handleUpload", () => {
      console.log("uploading...");
      const {
        imageBlob
      } = this.state;
      const formData = new FormData();
      formData.append("image", imageBlob);
      this.setState({
        loading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_3___default()({
        method: "post",
        url: "/api/admin/products/images",
        data: formData
      }).then(response => {
        console.log(response);
        this.props.addImage(response.data);
      }).catch(response => {
        console.log(response);
      });
    });

    this.state = {
      src: null,
      crop: {
        aspect: 1 / 1,
        x: 0,
        y: 0,
        width: 100
      },
      croppedImageUrl: null,
      imageBlob: null,
      defaultImage: true,
      loading: null
    };
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, "newFile.jpeg");
      this.setState({
        croppedImageUrl
      });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }

        this.setState({
          imageBlob: blob
        });
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const {
      src,
      crop,
      defaultImage,
      croppedImageUrl,
      loading
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Uploading ....")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Crop and Upload Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "file",
      onChange: this.onSelectFile
    }), src && defaultImage && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_image_crop__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: src,
      crop: crop,
      onImageLoaded: this.onImageLoaded,
      onComplete: this.onCropComplete,
      onChange: this.onCropChange
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.setState({
        defaultImage: false
      })
    }, "Crop"))), !defaultImage && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "Crop",
      style: {
        maxWidth: "100%"
      },
      src: croppedImageUrl
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: this.handleUpload,
      className: "btn btn-primary"
    }, "Upload"))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/EditCat.js":
/*!***********************************************************!*\
  !*** ./assets/react-app/component/product/Old/EditCat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


class EditCat extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      categoryId: null
    };
  }

  componentDidMount() {
    this.mounted = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("api/admin/product/categories").then(response => {
      if (this.mounted) {
        console.log(response.data);
        this.setState({
          data: response.data,
          categoryId: this.props.categoryId
        });
      }
    }).catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {
      data,
      categoryId
    } = this.state;
    console.log("props of EditCat", this.props);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      onChange: event => this.props.handleCategory(event.target.value),
      defaultValue: categoryId
    }, data.map((x, y) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: y,
      value: x.id
    }, x.name)))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/EditProductDetails.js":
/*!**********************************************************************!*\
  !*** ./assets/react-app/component/product/Old/EditProductDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProductDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class EditProductDetails extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDetailChange", index => event => {
      const newData = this.state.details.map((data, dataindex) => {
        if (index !== dataindex) return data;
        return { ...data,
          detailname: event.target.value
        };
      });
      this.setState({
        details: newData
      }, () => {
        this.props.datachange(newData);
      });
    });

    _defineProperty(this, "handleDetailValueChange", index => event => {
      const newData = this.state.details.map((data, dataindex) => {
        if (index !== dataindex) return data;
        return { ...data,
          datadesc: event.target.value
        };
      });
      this.setState({
        details: newData
      }, () => {
        this.props.datachange(newData);
      });
    });

    _defineProperty(this, "handleRemoveItem", index => event => {
      console.log(index);
    });

    _defineProperty(this, "handleAddDetails", () => {
      this.setState({
        details: this.state.details.concat([{
          detailname: "",
          datadesc: "",
          id: ""
        }])
      });
    });

    this.state = {
      details: null
    };
  }

  componentDidMount() {
    this.setState({
      details: this.props.fordetails
    });
  }

  render() {
    console.log(this.state);
    const {
      details
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Product Detail(s)"), details ? details.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "shareholder",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      defaultValue: data.detailname,
      onChange: this.handleDetailChange(index)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      defaultValue: data.datadesc,
      onChange: this.handleDetailValueChange(index)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleRemoveItem(data.id ? data.id : null),
      className: "small"
    }, "-"))) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleAddDetails,
      className: "small"
    }, "Add Product Detail"));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/Editing.js":
/*!***********************************************************!*\
  !*** ./assets/react-app/component/product/Old/Editing.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Editing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCat */ "./assets/react-app/component/product/Old/EditCat.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ "./assets/react-app/component/product/Old/Categories.js");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Upload */ "./assets/react-app/component/product/Old/Upload.js");
/* harmony import */ var _ImageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageList */ "./assets/react-app/component/product/Old/ImageList.js");
/* harmony import */ var _CropDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CropDialog */ "./assets/react-app/component/product/Old/CropDialog.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _EditProductDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditProductDetails */ "./assets/react-app/component/product/Old/EditProductDetails.js");
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductDetails */ "./assets/react-app/component/product/Old/ProductDetails.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class Editing extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleCategory", id => {
      this.setState({
        categoryId: id
      });
    });

    _defineProperty(this, "handleRemoveImage", () => {
      const {
        image,
        data
      } = this.state;
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/images/${data.id}/file/product`,
        data: {
          image: image
        }
      }).then(response => {
        this.setState({
          image: null
        });
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handleSelect", value => {
      if (value === "false") {
        this.setState({
          categoryId: null
        });
      } else {
        // console.log("show something here", value);
        this.setState({
          categoryId: value
        });
      }
    });

    _defineProperty(this, "handleDetailsNull", e => {
      this.setState({
        details: e,
        gotnulldata: false
      });
    });

    _defineProperty(this, "handleDetailChange", e => {
      this.setState({
        details: e,
        gotnulldata: true
      });
    });

    _defineProperty(this, "handleAddImage", e => {
      // console.log(e);
      this.setState({
        imageid: e.id,
        image: e.image,
        showAddImage: false
      });
    });

    this.state = {
      data: null,
      name: null,
      price: null,
      stock: null,
      desc: null,
      categoryId: null,
      image: null,
      message: null,
      details: null,
      gotnulldata: false
    };
  }

  componentDidMount() {
    const {
      id
    } = this.props.location.state;
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      url: `/api/admin/products/${id}`
    }).then(response => {
      console.log(response);
      const {
        data
      } = response;
      this.setState({
        data: data,
        name: data.productName,
        price: data.productPrice,
        stock: data.productStock,
        desc: data.productDesc,
        details: data.productDetailss,
        gotnulldata: true
      });
    });
  }

  handleSave() {
    const {
      data,
      name,
      price,
      stock,
      desc
    } = this.state;
    console.log(data);

    if (name == null) {
      name = data.productName;
    }

    if (price == null) {
      price = data.productPrice;
    }

    if (stock == null) {
      stock = data.productStock;
    }

    if (desc == null) {
      desc = data.productDesc;
    }

    if (name && price && stock && desc) {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "PUT",
        url: `/api/admin/products/${data.id}`,
        data: {
          name: name,
          price: price,
          stock: stock,
          desc: desc
        }
      }).then(res => {
        console.log(res);
        this.setState({
          message: "Data Has Been Saved"
        });
      }).catch(e => {
        console.log(e);
        this.setState({
          message: `Data Not Save . Error : ${e}`
        });
      });
    } else {
      this.setState({
        message: "Data not save. Please Fill All requirement fields"
      });
    }
  }

  render() {
    const {
      data,
      message,
      categoryId,
      image,
      details,
      gotnulldata
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " ", "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
      to: "/product"
    }, "Product List"), "   ", "> ", "   ", "Edit Product"))), data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      animation: "border"
    })), data && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-4 border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      className: "form-control",
      defaultValue: data.productName,
      onChange: e => this.setState({
        name: e.target.value
      })
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "number",
      className: "form-control",
      style: {
        width: "10em"
      },
      min: "0",
      defaultValue: data.productPrice,
      onChange: e => {
        if (e.target.value < 0) {
          return;
        }

        this.setState({
          price: e.target.value
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Stock"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      style: {
        width: "10em"
      },
      type: "number",
      className: "form-control",
      min: "0",
      defaultValue: data.productStock,
      onChange: e => {
        if (e.target.value < 0) {
          return;
        }

        this.setState({
          stock: e.target.value
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Description"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      className: "form-control",
      style: {
        width: "30em",
        height: "10em"
      },
      defaultValue: data.productDesc,
      onChange: e => this.setState({
        desc: e.target.value
      })
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-4 border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: e => {
        e.preventDefault();
        this.handleSave();
      }
    }, "Save")))))), this.state.showAddImage && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: submitDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-8 mx-auto col-md-6 col-lg-4 p-2",
      style: divDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CropDialog__WEBPACK_IMPORTED_MODULE_6__.default, {
      addImage: this.handleAddImage
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.setState({
        showAddImage: false
      })
    }, "Close"))), message && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: submitDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-8 mx-auto col-md-6 col-lg-4 p-2",
      style: divDialog
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, message), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.setState({
        message: null
      })
    }, "Close"))));
  }

}
const submitDialog = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)"
};
const divDialog = {
  background: "rgb(255, 255, 255)"
};

/***/ }),

/***/ "./assets/react-app/component/product/Old/ImageList.js":
/*!*************************************************************!*\
  !*** ./assets/react-app/component/product/Old/ImageList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ImageList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "imageClicked", image => {
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/products/${image}/image`
      }).then(response => {
        console.log(response);
        this.setState({
          data: null
        }, () => {
          this.handleAxios();
        });
      }).catch(error => console.log(error));
    });

    this.state = {
      data: null
    };
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.handleAxios();
  }

  handleAxios() {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      url: "/api/admin/images/"
    }).then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  render() {
    const {
      data
    } = this.state;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Image List"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, data && data.map((x, y) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col p-2",
      key: y
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: e => {
        e.preventDefault;
        this.imageClicked(x.id);
      }
    }, "X"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/images/" + x.filename,
      style: {
        width: "50px",
        height: "50px"
      }
    })))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/ModalCat.js":
/*!************************************************************!*\
  !*** ./assets/react-app/component/product/Old/ModalCat.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class Modal extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal fade",
      id: "category" + this.props.id // tabindex="-1"
      ,
      role: "dialog",
      "aria-labelledby": "category" + this.props.id + "Label",
      "aria-hidden": "true"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-dialog",
      role: "document"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      style: {
        color: "black"
      }
    }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-body",
      style: {
        color: "black"
      }
    }, "Deleting this Category will delete all product for this category. Confirm Delete Category \"", this.props.name, "\" ? ."), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.props.delete(this.props.id),
      type: "button",
      className: "btn btn-danger",
      "data-dismiss": "modal"
    }, "Confirm")))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/ModalProd.js":
/*!*************************************************************!*\
  !*** ./assets/react-app/component/product/Old/ModalProd.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalProd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class ModalProd extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal fade",
      id: "product" + this.props.id // tabindex="-1"
      ,
      role: "dialog",
      "aria-labelledby": "product" + this.props.id + "Label",
      "aria-hidden": "true"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-dialog",
      role: "document"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      style: {
        color: "black"
      }
    }, "Delete"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-body",
      style: {
        color: "black"
      }
    }, "Confirm Delete Product \"", this.props.name, "\" ?"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "modal-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-secondary",
      "data-dismiss": "modal"
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: () => this.props.delete(this.props.id),
      type: "button",
      className: "btn btn-danger",
      "data-dismiss": "modal"
    }, "Confirm")))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/ProductDetails.js":
/*!******************************************************************!*\
  !*** ./assets/react-app/component/product/Old/ProductDetails.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ProductDetails extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super();

    _defineProperty(this, "handleShareholderNameChange", idx => evt => {
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder,
          detailname: evt.target.value
        };
      });
      this.setState({
        shareholders: newShareholders
      }, () => {
        this.props.detailname(newShareholders);
      });
    });

    _defineProperty(this, "handleShareholderDescChange", idx => evt => {
      const newShareholderdesc = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return { ...shareholder,
          datadesc: evt.target.value
        };
      });
      this.setState({
        shareholders: newShareholderdesc
      }, () => {
        this.props.detailname(newShareholderdesc);
      });
    });

    _defineProperty(this, "handleAddShareholder", () => {
      this.setState({
        shareholders: this.state.shareholders.concat([{
          detailname: "",
          datadesc: ""
        }])
      });
    });

    _defineProperty(this, "handleRemoveShareholder", idx => () => {
      const removed = this.state.shareholders.filter((s, sidx) => idx !== sidx);
      this.setState({
        shareholders: removed
      }, () => {
        this.props.detailname(removed);
      });
      this.props.detailname(removed);
    });

    this.state = {
      shareholders: [{
        detailname: "",
        datadesc: ""
      }],
      detailnamehasinput: false,
      datadeschasinput: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Product Detail(s)"), this.state.shareholders.map((shareholder, idx) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "shareholder",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      size: "12",
      type: "text",
      placeholder: `Name Of Detail #${idx + 1}`,
      value: shareholder.detailname,
      onChange: this.handleShareholderNameChange(idx)
    }), this.state.detailnamehasinput ? "Name of detail is required" : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      required: true,
      size: "12",
      type: "text",
      placeholder: `Detail Data #${idx + 1} `,
      value: shareholder.datadesc,
      onChange: this.handleShareholderDescChange(idx)
    }), this.state.datadeschasinput ? "Detail data is required" : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleRemoveShareholder(idx),
      className: "small"
    }, "X"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleAddShareholder,
      className: "small"
    }, "Add Product Detail"));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/ProductList.js":
/*!***************************************************************!*\
  !*** ./assets/react-app/component/product/Old/ProductList.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _Old_ModalProd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Old/ModalProd */ "./assets/react-app/component/product/Old/ModalProd.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ProductList extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "paginateData", data => {
      console.log(data);
      const {
        limit
      } = this.state;
      const range = Math.ceil(data.length / limit);
      this.setState({
        pagination: this.paginate(data, limit, 0),
        data: data,
        range: range,
        active: 0
      });
    });

    _defineProperty(this, "handlePage", page => {
      this.setState({
        pagination: this.paginate(this.state.data, this.state.limit, page),
        active: page
      });
    });

    _defineProperty(this, "handleRemove", id => {
      console.log("handle remove", id);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "DELETE",
        url: `/api/admin/products/${id}`
      }).then(response => {
        console.log(response);
        let {
          data,
          active
        } = this.state;
        let deleted = data.filter(x => x.id !== id);
        this.setState({
          data: deleted
        });
        this.handlePage(active);
      }).catch(e => console.log(e));
    });

    _defineProperty(this, "handleClear", () => {
      console.log("clearing");
      if (this.product) this.productInput.value = "";
      if (this.stockgreat) this.stockgreatInput.value = "";
      if (this.stockless) this.stocklessInput.value = "";
      this.setState({
        product: null,
        categoryFilter: null,
        stockgreat: null,
        stockless: null
      });
    });

    _defineProperty(this, "handleSearch", () => {
      const {
        product,
        categoryFilter,
        stockgreat,
        stockless
      } = this.state;
      let data = this.state.defaultData;

      if (product) {
        data = data.filter(x => x.productName.toLowerCase().indexOf(product.toLowerCase()) !== -1);
      }

      if (categoryFilter) {
        if (categoryFilter !== "NONE") {
          data = data.filter(x => x.category.name === categoryFilter);
        }
      }

      if (stockgreat) {
        data = data.filter(x => x.productStock > parseFloat(stockgreat));
      }

      if (stockless) {
        data = data.filter(x => x.productStock < parseFloat(stockless));
      }

      this.paginateData(data);
    });

    _defineProperty(this, "handleSortView", e => {
      e.preventDefault();
      let list = this.state.data;

      if (this.state.toggled) {
        list.sort((a, b) => a.view - b.view);
        this.paginateData(list);
        this.setState({
          toggled: false
        });
      } else {
        list.sort((a, b) => b.view - a.view);
        this.paginateData(list);
        this.setState({
          toggled: true
        });
      }
    });

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      product: null,
      categoryData: null,
      categoryFilter: null,
      stockgreat: null,
      stockless: null,
      toggled: false
    };
    this.productInput = null;
    this.categoryInput = null;
    this.stockgreatInput = null;
    this.stocklessInput = null;

    this.product = e => {
      this.productInput = e;
    };

    this.stockgreat = e => {
      this.stockgreatInput = e;
    };

    this.stockless = e => {
      this.stocklessInput = e;
    };
  }

  paginate(array, page_size, page_number) {
    console.log(page_size); // --page_number; // because pages logically start with 1, but technically with 0

    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  componentDidMount() {
    this.mounted = true;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/products`).then(response => {
      if (this.mounted) {
        const {
          data
        } = response;
        console.log(data);
        this.setState({
          defaultData: data
        });
        this.paginateData(data);
      }
    }).catch(e => console.log(e));
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("api/admin/product/categories").then(response => {
      if (this.mounted) {
        this.setState({
          categoryData: response.data
        });
      }
    }).catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleEdit(id) {
    this.props.edit(id);
  }

  render() {
    console.log(this.props);
    const {
      data,
      active,
      range,
      pagination,
      categoryData
    } = this.state;
    let items = [];
    console.log("this is pagination : ", pagination);

    if (range) {
      for (let number = 0; number < range; number++) {
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Item, {
          onClick: () => {
            this.handlePage(number);
          },
          key: number,
          active: number === active
        }, number + 1));
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-2 border rounded mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Search"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: this.product,
      type: "text",
      onChange: e => this.setState({
        product: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Stock Greater Than"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: this.stockgreat,
      type: "number",
      onChange: e => this.setState({
        stockgreat: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Stock Less Than"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: this.stockless,
      type: "number",
      onChange: e => this.setState({
        stockless: e.target.value
      }),
      style: {
        width: "12em"
      },
      className: "form-control"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-info",
      onClick: this.handleSearch
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-search"
    }), " ", "  ", " Search"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-secondary",
      onClick: this.handleClear
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-eraser"
    }), " ", "  ", " Clear"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pt-3 pb-3"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "m-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      className: "btn btn-primary float-right",
      to: "/createproduct"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-plus-square fa-1x"
    }), " Create Product"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container overflow-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      class: "table table-bordered"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "#"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Product"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex"
    }, "Views", react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#",
      onClick: this.handleSortView
    }, this.state.toggled ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-sort-amount-down"
    }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-sort-amount-up"
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Price"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Stock"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "row"
    }, i + 1), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.pictures.map((a, b) => b === 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: b,
      src: "/images/" + a.filename,
      alt: "",
      style: {
        width: "50px",
        height: "50px"
      }
    }) : null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productName), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.view ? x.view : null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productPrice), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productStock), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      className: "btn btn-primary",
      to: {
        pathname: "/edit",
        state: {
          id: x.id
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-edit"
    }), " ", "  ", "Edit")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      className: "btn btn-warning",
      "data-toggle": "modal",
      "data-target": "#product" + x.id
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "far fa-1x fa-trash-alt"
    }), " Remove"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Old_ModalProd__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleRemove,
      id: x.id,
      name: x.productName
    })))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      animation: "border"
    })))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Prev, {
      onClick: () => this.handlePage(active - 1),
      disabled: active === 0
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, items), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Next, {
      onClick: () => this.handlePage(active + 1),
      disabled: active === range - 1
    })))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Old/Upload.js":
/*!**********************************************************!*\
  !*** ./assets/react-app/component/product/Old/Upload.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";


class Upload extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      src: null,
      crop: {
        aspect: 1 / 1
      },
      croppedImageUrl: null,
      imageBlob: null
    });

    _defineProperty(this, "onSelectFile", e => {
      if (e.target.files && e.target.files.length > 0) {
        const reader = new FileReader();
        reader.addEventListener("load", () => this.setState({
          src: reader.result
        }, () => {
          this.props.showCrop(this.state.src);
        }));
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    _defineProperty(this, "onImageLoaded", (image, crop) => {
      console.log("onimageload");
      this.imageRef = image;
    });

    _defineProperty(this, "onCropComplete", crop => {
      console.log("oncrop complete");
      this.makeClientCrop(crop);
    });

    _defineProperty(this, "onCropChange", crop => {
      console.log("oncropchange");
      this.setState({
        crop
      });
    });

    _defineProperty(this, "handleUpload", () => {
      const {
        imageBlob
      } = this.state;
      const formData = new FormData();
      formData.append("image", imageBlob);
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "post",
        url: "/api/admin/products/images",
        data: formData
      }).then(response => {
        const {
          addimage
        } = this.props;
        console.log(response);
        addimage(response.data); //todo this is sucess upload
      }).catch(response => {
        console.log(response);
      });
    });
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop, "newFile.jpeg");
      this.setState({
        croppedImageUrl
      });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }

        this.setState({
          imageBlob: blob
        });
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  render() {
    const {
      crop,
      croppedImageUrl,
      src
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "file",
      onChange: this.onSelectFile
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null)));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/reduxForm/FieldArraysForm.js":
/*!*************************************************************************!*\
  !*** ./assets/react-app/component/product/reduxForm/FieldArraysForm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/FieldArray.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ "./assets/react-app/component/product/reduxForm/validate.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, label), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({}, input, {
  type: type,
  placeholder: label
})), touched && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error)));

const renderMembers = ({
  fields,
  meta: {
    touched,
    error,
    submitFailed
  }
}) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
  type: "button",
  onClick: () => fields.push({})
}, "Add Member"), (touched || submitFailed) && error && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, error)), fields.map((member, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
  key: index
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
  type: "button",
  title: "Remove Member",
  onClick: () => fields.remove(index)
}, "X"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Member #", index + 1), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "row"
}, react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__.default, {
  name: `${member}.firstName`,
  type: "text",
  component: renderField,
  label: "First Name"
}), react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_2__.default, {
  name: `${member}.lastName`,
  type: "text",
  component: renderField,
  label: "Last Name"
})))));

const handleTekan = params => {
  console.log(params);
};

const FieldArraysForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__.default, {
    name: "members",
    component: renderMembers
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    disabled: submitting
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    disabled: pristine || submitting,
    onClick: reset
  }, "Clear Values"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    onChange: e => undefined.setState({
      name: e.target.value
    }),
    className: "form-control"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleTekan
  }, "Tekan")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_4__.default)({
  form: "fieldArrays",
  // a unique identifier for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_1__.default
})(FieldArraysForm));

/***/ }),

/***/ "./assets/react-app/component/product/reduxForm/FormRedux.js":
/*!*******************************************************************!*\
  !*** ./assets/react-app/component/product/reduxForm/FormRedux.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormRedux)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./assets/react-app/component/product/reduxForm/Store.js");
/* harmony import */ var _FieldArraysForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldArraysForm */ "./assets/react-app/component/product/reduxForm/FieldArraysForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FormRedux extends react__WEBPACK_IMPORTED_MODULE_3__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", e => {
      console.log(e);
      alert(e);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {
      store: _Store__WEBPACK_IMPORTED_MODULE_1__.default
    }, react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      style: {
        padding: 15
      }
    }, react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2", null, "Simple Form"), react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FieldArraysForm__WEBPACK_IMPORTED_MODULE_2__.default, {
      onSubmit: this.handleSubmit
    })))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/reduxForm/Store.js":
/*!***************************************************************!*\
  !*** ./assets/react-app/component/product/reduxForm/Store.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reducer.js");


const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__.default // mounted under "form"

});
const store = (window.devToolsExtension ? window.devToolsExtension()(redux__WEBPACK_IMPORTED_MODULE_0__.createStore) : redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./assets/react-app/component/product/reduxForm/validate.js":
/*!******************************************************************!*\
  !*** ./assets/react-app/component/product/reduxForm/validate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validate = values => {
  const errors = {};

  if (!values.members || !values.members.length) {
    errors.members = {
      _error: 'At least one member must be entered'
    };
  } else {
    const membersArrayErrors = [];
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {};

      if (!member || !member.firstName) {
        memberErrors.firstName = 'Required';
        membersArrayErrors[memberIndex] = memberErrors;
      }

      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required';
        membersArrayErrors[memberIndex] = memberErrors;
      }
    });

    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors;
    }
  }

  return errors;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./assets/react-app/mobilecomp/AppCrop/Bitch.js":
/*!******************************************************!*\
  !*** ./assets/react-app/mobilecomp/AppCrop/Bitch.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bitch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./assets/react-app/mobilecomp/AppCrop/App.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./assets/react-app/mobilecomp/AppCrop/index.css");
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blueimp-load-image/js */ "./node_modules/blueimp-load-image/js/index.js");
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-easy-crop */ "./node_modules/react-easy-crop/index.module.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _utils_cropImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/cropImage */ "./assets/react-app/mobilecomp/AppCrop/utils/cropImage.js");








function Bitch() {
  const inputRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [croppedArea, setCroppedArea] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const [crop, setCrop] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    x: 0,
    y: 0
  });
  const [zoom, setZoom] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = event => {
    // if (event.target.files && event.target.files.length > 0) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.addEventListener("load", () => {
    //     setImage(reader.result);
    //   });
    // }
    if (event.target.files && event.target.files.length > 0) {
      blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_3___default()(event.target.files[0], img => {
        var base64data = img.toDataURL(`image/jpeg`);
        setImage(base64data);
      }, {
        orientation: true,
        canvas: true
      });
    }
  };

  const onDownload = () => {
    (0,_utils_cropImage__WEBPACK_IMPORTED_MODULE_4__.generateDownload)(image, croppedArea);
    setTimeout(() => {
      setImage(null);
    }, 2000);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, image ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-cropper"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cropper"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_5__.default, {
    image: image,
    crop: crop,
    zoom: zoom,
    aspect: 1,
    onCropChange: setCrop,
    onZoomChange: setZoom,
    onCropComplete: onCropComplete
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slider"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_6__.default, {
    min: 1,
    max: 3,
    step: 0.1,
    value: zoom,
    onChange: (e, zoom) => setZoom(zoom)
  })))) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    accept: "image/*",
    ref: inputRef,
    onChange: onSelectFile,
    style: {
      display: "none"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "contained",
    color: "primary",
    onClick: triggerFileSelectPopup,
    style: {
      marginRight: "10px"
    }
  }, "Choose"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.default, {
    variant: "contained",
    color: "secondary",
    onClick: onDownload
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => setImage(null)
  }, "Close")));
}

/***/ }),

/***/ "./assets/react-app/mobilecomp/AppCrop/utils/cropImage.js":
/*!****************************************************************!*\
  !*** ./assets/react-app/mobilecomp/AppCrop/utils/cropImage.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCroppedImg),
/* harmony export */   "generateDownload": () => (/* binding */ generateDownload)
/* harmony export */ });
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} imageSrc - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", error => reject(error));
  image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox

  image.src = url;
});

function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}

async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context

  canvas.width = safeArea;
  canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

  ctx.putImageData(data, 0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x, 0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y); // As Base64 string
  // return canvas.toDataURL("image/jpeg");

  return canvas;
}
const generateDownload = async (imageSrc, crop) => {
  if (!crop || !imageSrc) {
    return;
  }

  const canvas = await getCroppedImg(imageSrc, crop);
  canvas.toBlob(blob => {
    const previewUrl = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = "image.jpeg";
    anchor.href = URL.createObjectURL(blob);
    anchor.click();
    window.URL.revokeObjectURL(previewUrl);
  }, "image/jpeg", 0.66);
};

/***/ }),

/***/ "./assets/react-app/mobilecomp/EasyCrop.js":
/*!*************************************************!*\
  !*** ./assets/react-app/mobilecomp/EasyCrop.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EasyCrop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-easy-crop */ "./node_modules/react-easy-crop/index.module.js");
/* harmony import */ var _cropImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cropImage */ "./assets/react-app/mobilecomp/cropImage.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blueimp-load-image/js */ "./node_modules/blueimp-load-image/js/index.js");
/* harmony import */ var blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cropImageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cropImageUpload */ "./assets/react-app/mobilecomp/cropImageUpload.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");













 // import pica from "pica";

const pica = __webpack_require__(/*! pica */ "./node_modules/pica/dist/pica.js")();

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const compressImage = (img, crt) => {
  return new Promise((resolve, reject) => {
    var offScreenCanvas = document.createElement("canvas");
    offScreenCanvas.width = img.width * crt;
    offScreenCanvas.height = img.height * crt;
    pica.resize(img, offScreenCanvas).then(imageCCS => {
      resolve(imageCCS);
    }).catch(e => reject(e));
  });
};

function EasyCrop() {
  const [crop, setCrop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [rotation, setRotation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [croppedImage, setCroppedImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const classes = useStyles();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const onCropComplete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = async () => {
    try {
      const croppedImage = await (0,_cropImage__WEBPACK_IMPORTED_MODULE_1__.default)(image, croppedAreaPixels, rotation);
      console.log("donee", {
        croppedImage
      });
      setCroppedImage(croppedImage.url);
    } catch (e) {
      console.error(e);
    }
  };

  const onSelectFile = event => {
    if (event.target.files && event.target.files.length > 0) {
      blueimp_load_image_js__WEBPACK_IMPORTED_MODULE_2___default()(event.target.files[0], async img => {
        let pixel = img.height * img.width;

        if (pixel > 3145728) {
          try {
            // better to have modal or loading screen
            let ratiopixel = pixel > 5038848 ? 0.5 : 0.8;
            const imgcrs = await compressImage(img, ratiopixel);
            var base64data = imgcrs.toDataURL(`image/jpeg`);
            setImage(base64data);
          } catch (error) {
            console.error(e);
            const imgcrs = null;
          }
        } else {
          var base64data = img.toDataURL(`image/jpeg`);
          setImage(base64data);
        }
      }, {
        orientation: true,
        canvas: true
      });
    }
  };

  9;

  const uploadfile = () => {
    (0,_cropImageUpload__WEBPACK_IMPORTED_MODULE_3__.default)(image, croppedAreaPixels, rotation);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__.default, {
    position: "sticky"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
    variant: "h6",
    className: classes.title
  }, "Menu"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
    color: "inherit"
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerStyle
  }, image && !croppedImage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerCropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: cropperStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_11__.default, {
    image: image,
    crop: crop,
    rotation: rotation,
    zoom: zoom,
    aspect: 1,
    onCropChange: setCrop,
    onRotationChange: setRotation,
    onCropComplete: onCropComplete,
    onZoomChange: setZoom
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: sliderStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.default, {
    min: 1,
    max: 3,
    step: 0.1,
    value: zoom,
    onChange: (e, zoom) => setZoom(zoom)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_12__.default, {
    value: rotation,
    min: 0,
    max: 360,
    step: 1,
    "aria-labelledby": "Rotation",
    onChange: (e, rotation) => setRotation(rotation)
  })))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, croppedImage && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: croppedImageStyle,
    src: croppedImage,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: uploadfile
  }, " ", "upload"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: containerButtonStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    ref: inputRef,
    accept: "image/jpeg",
    onChange: onSelectFile,
    style: {
      display: "none"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "contained",
    color: "primary",
    size: "large",
    onClick: triggerFileSelectPopup
  }, "Choose"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
    onClick: showCroppedImage
  }, "Crop"))));
}
const containerStyle = {
  height: "100vh",
  width: "100vw"
};
const containerCropperStyle = {
  height: "80%",
  padding: "10px"
};
const cropperStyle = {
  height: "80%",
  position: "relative"
};
const sliderStyle = {
  height: "20%",
  display: "flex",
  alignItems: "center",
  margin: "auto",
  width: "60%"
};
const containerButtonStyle = {
  border: "1px solid #f5f5f5",
  height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const croppedImageStyle = {
  maxWidth: "50vw" // position: "relative",

};

/***/ }),

/***/ "./assets/react-app/mobilecomp/MobileDashboard.js":
/*!********************************************************!*\
  !*** ./assets/react-app/mobilecomp/MobileDashboard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AppCrop_Bitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCrop/Bitch */ "./assets/react-app/mobilecomp/AppCrop/Bitch.js");


function MobileDashboard() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppCrop_Bitch__WEBPACK_IMPORTED_MODULE_1__.default, null));
}

/***/ }),

/***/ "./assets/react-app/mobilecomp/MobileUpload.js":
/*!*****************************************************!*\
  !*** ./assets/react-app/mobilecomp/MobileUpload.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileUpload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function MobileUpload() {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Kambing");
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); //is like component did mount

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.title = `You hava click ${count}`;
  }, [count]);

  const handleChange = e => {
    setName(e.target.value);
  };

  const haha = () => {
    async function f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
      });
      let result = await promise; // wait until the promise resolves (*)

      alert(result); // "done!"
    }

    f();
  };

  const handleClickCount = () => {
    setCount(count + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-xl"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dialog"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, name), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: name,
    type: "text",
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleClickCount
  }, "click"))));
}

/***/ }),

/***/ "./assets/react-app/mobilecomp/cropImage.js":
/*!**************************************************!*\
  !*** ./assets/react-app/mobilecomp/cropImage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCroppedImg)
/* harmony export */ });
const pica = __webpack_require__(/*! pica */ "./node_modules/pica/dist/pica.js")();

const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", error => reject(error));
  image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox

  image.src = url;
});

function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */


async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context

  canvas.width = safeArea;
  canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

  ctx.putImageData(data, Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x), Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)); // As Base64 string
  // return canvas.toDataURL('image/jpeg');
  // As a blob

  return await pica.toBlob(canvas, "image/jpeg", 0.9).then(blob => {
    const load = {
      blob: blob,
      url: URL.createObjectURL(blob)
    };
    return load;
  }); // return new Promise((resolve) => {
  //   pica.toBlob(canvas, "image/jpeg", 0.9).then((blob) => {
  //     const load = { blob: blob, url: URL.createObjectURL(blob) };
  //     resolve(load);
  //   });
  // });
}

/***/ }),

/***/ "./assets/react-app/mobilecomp/cropImageUpload.js":
/*!********************************************************!*\
  !*** ./assets/react-app/mobilecomp/cropImageUpload.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUpload)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener('load', () => resolve(image));
  image.addEventListener('error', error => reject(error));
  image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox

  image.src = url;
});

function getRadianAngle(degreeValue) {
  return degreeValue * Math.PI / 180;
}
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */


async function getUpload(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context

  canvas.width = safeArea;
  canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

  ctx.putImageData(data, Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x), Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)); // As Base64 string
  // return canvas.toDataURL('image/jpeg');
  // As a blob

  return new Promise(resolve => {
    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append("image", blob);
      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "/api/admin/products/images",
        data: formData
      }).then(response => {
        console.log(response); //this is uploads to reset all to null for upload
      }).catch(response => {
        console.log(response);
      });
      resolve(blob);
    }, 'image/jpeg');
  });
}

/***/ }),

/***/ "./assets/react-app/react-app.js":
/*!***************************************!*\
  !*** ./assets/react-app/react-app.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/react-app/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null)), document.getElementById("root"));

/***/ }),

/***/ "./assets/react-app/router/Customer.js":
/*!*********************************************!*\
  !*** ./assets/react-app/router/Customer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _component_customer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/customer/index */ "./assets/react-app/component/customer/index.js");


class Customer extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-users"
    }), "  ", "Customer"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_customer_index__WEBPACK_IMPORTED_MODULE_1__.default, null));
  }

}

/***/ }),

/***/ "./assets/react-app/router/Dashboard.js":
/*!**********************************************!*\
  !*** ./assets/react-app/router/Dashboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const year = new Date(Date.now()).getFullYear();
const month = new Date(Date.now()).getMonth() + 1;
class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      data: null,
      year: year,
      month: month,
      startDate: new Date(Date.now())
    });

    _defineProperty(this, "handleChange", date => {
      const year = new Date(date).getFullYear();
      const month = new Date(date).getMonth() + 1;
      this.setState({
        data: null,
        year: year,
        month: month,
        startDate: date
      }, () => this.getData());
    });

    _defineProperty(this, "handleInput", e => {
      const year = new Date(e.target.value).getFullYear();
      const month = new Date(e.target.value).getMonth() + 1;
      this.setState({
        data: null,
        year: year,
        month: month,
        startDate: date
      }, () => this.getData());
    });
  }

  componentDidMount() {
    this.mounted = true;
    this.getData();
  }

  getData() {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/dashboard?year=${this.state.year}`).then(response => {
      if (this.mounted) {
        this.setState(() => {
          return {
            data: response.data
          };
        });
      }
    }).catch(e => console.log(e));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleMonth(month) {
    switch (month) {
      case 1:
        return "January";

      case 2:
        return "Febuary";

      case 3:
        return "March";

      case 4:
        return "April";

      case 5:
        return "May";

      case 6:
        return "June";

      case 7:
        return "July";

      case 8:
        return "August";

      case 9:
        return "September";

      case 10:
        return "Ocktober";

      case 11:
        return "November";

      case 12:
        return "Disember";

      default:
        return "Error";
    }
  }

  render() {
    console.log("this for dashboard", this.props);
    const {
      data,
      year,
      month
    } = this.state;
    console.log(data, year, month);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        padding: "10px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "10px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-home"
    }), "  ", "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "float-right"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Change Month and Year "), react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_6___default()), {
      selected: this.state.startDate,
      onChange: this.handleChange,
      dateFormat: "MM/yyyy",
      showMonthYearPicker: true,
      className: "form-control"
    }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3",
      className: "my-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: "text-white bg-info"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-value",
      style: {
        textAlign: "center"
      }
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "RM", " ", parseFloat(data.total_sum ? data.total_sum : 0).toFixed(2)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "light"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Total Sales"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3",
      className: "my-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: "text-white bg-primary"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-value",
      style: {
        textAlign: "center"
      }
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, data.users) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "light"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Customers"))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3",
      className: "my-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: "text-white bg-secondary"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-value",
      style: {
        textAlign: "center"
      }
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "RM", " ", parseFloat(data.sum[year] ? data.sum[year] : 0.0).toFixed(2)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "light"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Yearly Sales : ", year))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3",
      className: "my-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: "text-white bg-success"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "text-value",
      style: {
        textAlign: "center"
      }
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "RM ", parseFloat(data.month[month]).toFixed(2)) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      color: "light"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "Montly Sales : ", this.handleMonth(month))))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        padding: "15px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      sm: "12",
      md: "8",
      lg: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_2__.Chart, {
      width: "400px",
      height: "320px",
      chartType: "Bar",
      loader: react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          width: "3rem",
          height: "3rem"
        }
      }),
      data: [["Month", "sales"], ["Jan", parseFloat(data.month[1])], ["Feb", parseFloat(data.month[2])], ["Mar", parseFloat(data.month[3])], ["Apr", parseFloat(data.month[4])], ["May", parseFloat(data.month[5])], ["Jun", parseFloat(data.month[6])], ["Jul", parseFloat(data.month[7])], ["Aug", parseFloat(data.month[8])], ["Sep", parseFloat(data.month[9])], ["Oct", parseFloat(data.month[10])], ["Nov", parseFloat(data.month[11])], ["Dis", parseFloat(data.month[12])]],
      options: {
        // Material design options
        chart: {
          title: "Total Sales By Month"
        }
      } // For tests
      ,
      rootProps: {
        "data-testid": "2"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      style: {
        width: "3rem",
        height: "3rem"
      }
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      sm: "12",
      md: "8",
      lg: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: ""
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "pb-0"
    }, data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_2__.Chart, {
      width: "400",
      height: "320px",
      chartType: "LineChart",
      loader: react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          width: "3rem",
          height: "3rem"
        }
      }),
      data: [["Month", "Order Count"], ["Jan", parseFloat(data.count[1])], ["Feb", parseFloat(data.count[2])], ["March", parseFloat(data.count[3])], ["Apr", parseFloat(data.count[4])], ["May", parseFloat(data.count[5])], ["Jun", parseFloat(data.count[6])], ["Jul", parseFloat(data.count[7])], ["Aug", parseFloat(data.count[8])], ["Sep", parseFloat(data.count[9])], ["Oct", parseFloat(data.count[10])], ["Nov", parseFloat(data.count[11])], ["Dis", parseFloat(data.count[12])]],
      options: {
        hAxis: {
          title: "Month"
        },
        vAxis: {
          title: "Orders"
        }
      },
      rootProps: {
        "data-testid": "1"
      }
    }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      style: {
        width: "3rem",
        height: "3rem"
      }
    }))))));
  }

}

/***/ }),

/***/ "./assets/react-app/router/MobileSideBar.js":
/*!**************************************************!*\
  !*** ./assets/react-app/router/MobileSideBar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileSideBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");



class MobileSideBar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.default, {
      fixed: "bottom",
      bg: "dark",
      variant: "dark",
      className: "m-0 p-0 pl-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "nav nav-pills"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1 "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/admin",
      exact: true,
      activeClassName: "active",
      className: "nav-link p-1 m-1 "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-home"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/product",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/orders",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-shopping-cart"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/customer",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-users"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/categories",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-paw"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/createproduct",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-list-alt"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item p-1 m-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/visitor",
      activeClassName: "active",
      className: "nav-link p-1 m-1"
    }, " ", react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "far fa-eye"
    }))))));
  }

}

/***/ }),

/***/ "./assets/react-app/router/Orders.js":
/*!*******************************************!*\
  !*** ./assets/react-app/router/Orders.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _component_order_PaginateOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/order/PaginateOrder */ "./assets/react-app/component/order/PaginateOrder.js");


class Orders extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-shopping-cart"
    }), " Orders"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_PaginateOrder__WEBPACK_IMPORTED_MODULE_1__.default, null));
  }

}

/***/ }),

/***/ "./assets/react-app/router/Product.js":
/*!********************************************!*\
  !*** ./assets/react-app/router/Product.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _component_product_Old_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/product/Old/ProductList */ "./assets/react-app/component/product/Old/ProductList.js");


class Product extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " Product"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_ProductList__WEBPACK_IMPORTED_MODULE_1__.default, null));
  }

}

/***/ }),

/***/ "./assets/react-app/router/Sidebar.js":
/*!********************************************!*\
  !*** ./assets/react-app/router/Sidebar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "border"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      style: {
        listStyleType: "none",
        padding: 0
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/admin",
      exact: true,
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-home"
    }), " Dashboard")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/product",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " Product")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/orders",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-shopping-cart"
    }), " Order")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/customer",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-users"
    }), " Customer")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/categories",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-paw"
    }), " Categories")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/createproduct",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "fas fa-list-alt"
    }), " Devops")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
      to: "/visitor",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      class: "far fa-eye"
    }), " Visitor"))));
  }

}

/***/ }),

/***/ "./assets/react-app/crop.css":
/*!***********************************!*\
  !*** ./assets/react-app/crop.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react-app/mobilecomp/AppCrop/App.css":
/*!*****************************************************!*\
  !*** ./assets/react-app/mobilecomp/AppCrop/App.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/react-app/mobilecomp/AppCrop/index.css":
/*!*******************************************************!*\
  !*** ./assets/react-app/mobilecomp/AppCrop/index.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/react-app/react-app.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-63cddb","vendors-node_modules_popper_js_dist_esm_popper_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-292055"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9GaWVsZEFycmF5c0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL1N0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL0JpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL3V0aWxzL2Nyb3BJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvRWFzeUNyb3AuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL01vYmlsZURhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvTW9iaWxlVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9jcm9wSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL2Nyb3BJbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvQXBwQ3JvcC9BcHAuY3NzPzc5M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL0FwcENyb3AvaW5kZXguY3NzPzY5NjYiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBheWxvYWQiLCJzZXRTdGF0ZSIsInNob3dDcm9wIiwic3JjIiwidXBsb2FkIiwic2hvd3RvcGJhciIsInN0YXRlIiwiaWRFZGl0IiwibW9iaWxlVmlldyIsInNob3dTaWRlYmFyIiwic2hvd0Vhc3lDcm9wRGlhbG9nIiwidXBkYXRlVmlld1N0YXRlIiwiYmluZCIsInRvZ2dsZVNpZGVCYXIiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmVuZGVyIiwiY29udGFpbmVyQ2xhc3MiLCJoYW5kbGVTaG93Q3JvcCIsImhhbmRsZUNsb3NlQ3JvcCIsImhhbmRsZWNhbmNlbHRvcHgiLCJDcm9wcGluZyIsImltYWdlIiwiaW1hZ2VSZWYiLCJjcm9wIiwibWFrZUNsaWVudENyb3AiLCJlIiwibG9hZGluZyIsImNyb3BwZWRJbWFnZVVybCIsImltYWdlQmxvYiIsInNob3dDcm9wSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbExvYWQiLCJjYW5jZWx0b3B4IiwieCIsInkiLCJ3aWR0aCIsImFzcGVjdCIsImhlaWdodCIsImdldENyb3BwZWRJbWciLCJmaWxlTmFtZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiYmxvYiIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJmaWxlVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xvc2VUb3BYIiwiaGFuZGxlQmFja0FjdGlvbiIsImhhbmRsZVVwbG9hZCIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsImhhbmRsZVNob3dDcm9wSW1hZ2UiLCJkYXRhVVJMdG9GaWxlIiwiZGF0YVVybCIsInJlcyIsImZldGNoIiwiRmlsZSIsInR5cGUiLCJWaXNpdG9yIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInRhYmxlIiwic2V0VGFibGUiLCJkYXRhbmFtZSIsInNldERhdGFuYW1lIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwibG9nIiwiY2F0Y2giLCJjb3VudE9ianMiLCJhcnIiLCJvYmoiLCJPYmplY3QiLCJjcmVhdGUiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdE9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjb3VudHJ5IiwibWFwIiwiaW5kIiwiQ291bnRyeSIsImNvdW50Q291bnRyeSIsImNzdGF0ZSIsImNpdHkiLCJjY2l0eSIsImlwcyIsImRhdCIsImlwIiwiaXBkIiwidmlzaXQiLCJzaW5nbGVkYXRhIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImxlbmd0aCIsImkiLCJQcm9kdWN0TGlzdCIsImRhdGUiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJsaW1pdCIsInJhbmdlIiwiTWF0aCIsImNlaWwiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGUiLCJhY3RpdmUiLCJwYWdlIiwiaWQiLCJBeGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiaGFuZGxlUGFnZSIsInJlZnMiLCJlbWFpbCIsImRlZmF1bHREYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGFnaW5hdGVEYXRhIiwiYXJyYXkiLCJwYWdlX3NpemUiLCJwYWdlX251bWJlciIsInNsaWNlIiwibW91bnRlZCIsImhhbmRsZUVkaXQiLCJlZGl0IiwiaXRlbXMiLCJudW1iZXIiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImZvcm1hdERhdGUiLCJjcmVhdGVkQXQiLCJNb2RhbCIsImNvbG9yIiwiZGVsZXRlIiwiTW9kYWxPcmRlciIsIk9yZGVyIiwic3RhdHVzIiwibG9jYXRpb24iLCJmbGV4IiwicGFkZGluZyIsIm9yZGVyZGV0YWlscyIsInByb2R1Y3RJbWFnZSIsInByb2R1Y3ROYW1lIiwicXR5IiwicHJvZHVjdFByaWNlIiwidG90YWwiLCJhZGRyZXNzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwb3N0Y29kZSIsInBob25lTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsInBheXBhbCIsImFtb3VudCIsImN1cnJlbmN5IiwiaGFuZGxlUEVORElORyIsImhhbmRsZVByb2Nlc3NpbmciLCJoYW5kbGVEZWxpdmVyaW5nIiwiaGFuZGxlQ29tcGxldGVkIiwiUGFnaW5hdGVPcmRlciIsInF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJvcmRlcklkIiwiZ3JlYXRlciIsImxlc3MiLCJ1c2VyIiwiZ2V0VGltZSIsImRhdGVTYW1lIiwic2V0RGF0ZSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImRlbGV0ZWQiLCJvcmRlciIsInBhdGhuYW1lIiwiaGFuZGxlRGVsZXRlIiwicGljYSIsInJlcXVpcmUiLCJjcmVhdGVJbWFnZSIsIkltYWdlIiwic2V0QXR0cmlidXRlIiwiZ2V0UmFkaWFuQW5nbGUiLCJkZWdyZWVWYWx1ZSIsIlBJIiwiQ2FudmFzQ3JvcCIsImltYWdlU3JjIiwicGl4ZWxDcm9wIiwicm90YXRpb24iLCJtYXhTaXplIiwibWF4Iiwic2FmZUFyZWEiLCJzcXJ0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwicm91bmQiLCJsb2FkIiwiQ2F0ZWdvcnlMaXN0Iiwic3ViY2F0ZWdvcnkiLCJzZXRzdWJjYXRlZ29yeSIsInN1YnR3byIsInNldHN1YnR3byIsImRlbGNhdCIsInNldGRlbGNhdCIsImRlbHN1YiIsInNldGRlbHN1YiIsImRlbHN1YnR3byIsInNldGRlbHN1YnR3byIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJwYXJhbXMiLCJyZXNldERlbGV0ZUl0ZW0iLCJzdWJDYXRlZ29yeVNlbGVjdCIsInN1YnR3b0NhdGVnb3J5U2VsZWN0IiwiZGVsZXRlQ2F0ZWdvcnkiLCJlcnIiLCJuZXdjYXQiLCJzIiwiZGVsZXRlU3ViQ2F0ZWdvcnkiLCJuZXdzdWIiLCJkZWxldGVTdWJ0d29DYXRlZ29yeSIsIm5ld3N1YnR3byIsIm1pbldpZHRoIiwic3ViIiwiaXMiLCJzdWJjYXRlZ29yeW5hbWUiLCJzdWJ0Iiwic3VidHdvY2F0ZWdvcnluYW1lIiwiQ3JvcHBlcnYyIiwic2V0Q3JvcCIsInNldFJvdGF0aW9uIiwiem9vbSIsInNldFpvb20iLCJjcm9wcGVkSW1hZ2UiLCJzZXRDcm9wcGVkSW1hZ2UiLCJjcm9wcGVkQXJlYVBpeGVscyIsInNldENyb3BwZWRBcmVhUGl4ZWxzIiwidXNlQ2FsbGJhY2siLCJjcm9wcGVkQXJlYSIsIkNsb3NlRGlhbG9nIiwiY2xvc2VEaWFsb2ciLCJjbGVhclN0YXRlIiwic2hvd0Nyb3BwZWRJbWFnZSIsIlVwbG9hZEltYWdlIiwic2hvd0RpYWxvZyIsImRpYWxvZ1N0eWxlIiwiY29udGFpbmVyU3R5bGUiLCJjb250YWluZXJCdXR0b25TdHlsZSIsImNvbnRhaW5lckNyb3BwZXJTdHlsZSIsImNyb3BwZXJTdHlsZSIsInNsaWRlclN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZGl2RGlhbG9nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImNyb3BwZWRJbWFnZVN0eWxlIiwibWF4V2lkdGgiLCJNQ2F0ZWdvcnkiLCJpbmRleCIsImFkZGNhdCIsImNhdGVnb3JpZXMiLCJmaW5kIiwiZGF0YXMiLCJpZHgiLCJ1bmRlZmluZWQiLCJuZXdkYXRhbGlzdCIsImRhdGFsaXN0IiwiaXgiLCJjYXRlZ29yeW5hbWUiLCJuZXdEYXRhIiwicG9zdCIsImRpc2FibGUiLCJjYXRlZ29yeWlkIiwiY2hhbmdlY2F0ZWdvcnkiLCJhZGRzdWIiLCJjYXQiLCJjYXRpIiwic3ViY2F0ZWdvcnlpZCIsImFkZHN1YnR3byIsImFkZHN1YnR3b2NhdCIsIml0d28iLCJhZHN0IiwiYWRzdGkiLCJzdWJ0d29jYXRlZ29yeSIsInN1YnR3b2NhdGVnb3J5aWQiLCJidXRjYXQiLCJhZGRtb3Jlc3ViIiwiYWRkbW9yZSIsImFpZHgiLCJidXRzdWIiLCJzdWJ0d29pbmR4IiwiYWRkbW9yZXN1YnR3byIsImFtc2kiLCJzdWJjYXRpbml0Iiwic2NpZHgiLCJlbmFibGUiLCJyZW1vdmVjYXQiLCJhIiwicmVtb3ZlY2F0ZWdvcnkiLCJzdWJpIiwicmVtb3ZlZCIsIm1vZCIsIm1vZGluZHgiLCJpc3ViIiwieiIsInJlbW92ZXN1YnR3byIsImZpbCIsImNhdGlkeCIsInN1YmlkeCIsInN1YmRhdGEiLCJjYXRlZ29yeSIsIm1vZGlmaWVkIiwiaW5jYXRpbmR4IiwiaW5jYXRzdWJpZHgiLCJpbmNhdHN1YnR3b2lkeCIsImV2ZW50Iiwic3VidHdvZGF0YSIsIlN1YnR3b2NhdGVnb3J5Iiwic3RpIiwic3VidHdvbmV3IiwiY2F0c3VidHdvIiwiY2F0c3VidHdvaWR4IiwiY2F0c3ViIiwiY2F0c3ViaWR4Iiwic3VidHdvaWR4IiwiaGFuZGxlQXhpb3MiLCJoYW5kbGVJbnB1dCIsImtleSIsImhhbmRsZVJlbW92ZUNhdGVnb3J5IiwiaGFuZGxlQWRkQ2F0ZWdvcnkiLCJoYW5kbGVTdWJJbnB1dCIsImRiIiwiZGJpeCIsImRicyIsImRiaSIsImhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5IiwiaGFuZGxlQWRkTW9yZVN1YiIsInN1YjIiLCJpbmR0d28iLCJoYW5kbGVTdWJUd29JbnB1dCIsInNkYmkiLCJoYW5kbGVSZW1vdmVTdWJUd29DYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWJUd28iLCJoYW5kbGVBZGRzdWJ0d29jYXRlZ29yeSIsImhhbmRsZUFkZFN1YkNhdGVnb3J5IiwiUERldGFpbHMiLCJkZXRhaWxzIiwiY29uY2F0IiwiZGV0YWlsbmFtZSIsImRhdGFkZXNjIiwicmVtb3ZlIiwicmVtb3ZlZGV0YWlsIiwibmV3ZGV0YWlscyIsImRldGFpbCIsIm5ld2RldGFpbGRhdGFkZXNjIiwiaGFuZGxlQ2hhbmdlRGV0YWlsTmFtZSIsImhhbmRsZUNoYW5nZURhdGFEZXNjIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlQWRkIiwiUGljdHVyZSIsInBpY3R1cmUiLCJpbWFnZWlkIiwiaW1hZ2VuYW1lIiwiZmlsZUlucHV0IiwiaW5wdXRGaWxlIiwiZmkiLCJpbWFnZWRlbCIsInBpY3R1cmV1cCIsIm1lc3NhZ2UiLCJyZW1vdmVwaWN0dXJlIiwiYWxlcnQiLCJmaWxlcyIsInNpemUiLCJ0YXJnZXRpbWFnZSIsImxvYWRJbWFnZSIsImltZyIsInBpeGVsIiwicmF0aW8iLCJpbWdjb21wIiwiY29tcHJlc3NJbWFnZSIsImJhc2U2NGRhdGEiLCJ0b0RhdGFVUkwiLCJzaG93RWFzeUNyb3AiLCJzZXRUaW1lb3V0Iiwib3JpZW50YXRpb24iLCJsb2FkZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGFuZGxlQWRkSW1hZ2UiLCJoYW5kbGVDbG9zZUVhc3lDcm9wIiwiaW1hZ2VVcGxvYWQiLCJzaG93UGljdHVyZSIsInNob3dCbGFja1NjcmVlbiIsImhhbmRsZVJlbW92ZUltYWdlIiwib25TZWxlY3RGaWxlIiwiaGFuZGxlSW1hZ2VBZGQiLCJzdWJtaXREaWFsb2ciLCJjcnQiLCJvZmZTY3JlZW5DYW52YXMiLCJyZXNpemUiLCJpbWFnZUNDUyIsIlByb2R1Y3RBZGQiLCJwcmljZSIsInN0b2NrIiwiZGVzYyIsImltYWdlcyIsImhpc3RvcnkiLCJzaG93YnV0dG9uIiwic2hvd0Nyb3BwZXJEaWFsb2ciLCJoYW5kU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlVXBsb2FkZWQiLCJjbG9zZUNyb3AiLCJoYW5kbGVSZW1vdmVQaWN0dXJlIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVSZW1vdmVEZXRhaWwiLCJoYW5kbGVOZXdEZXRhaWxzIiwiaGFuZGxlU2F2ZUJ1dHRvbiIsIkFkZFByb2R1Y3QiLCJjYXRlZ29yeUlkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzYXZlQnV0dG9uIiwidmFsaWRhdGUiLCJpbWFnZUlkIiwiaGFuZGxlRGV0YWlsTmFtZSIsImhhbmRsZVNlbGVjdCIsImhhbmRsZUFkZFByb2R1Y3QiLCJDYXRlZ29yaWVzIiwic2hvdyIsImNhdGVnb3J5RGF0YSIsInNlbGVjdGVkIiwiaGFuZGxlQ2F0ZWdvcnkiLCJDYXRlZ29yeUVkaXQiLCJDcm9wRGlhbG9nIiwiYWRkSW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJFZGl0Q2F0IiwiRWRpdFByb2R1Y3REZXRhaWxzIiwiZGF0YWluZGV4IiwiZGF0YWNoYW5nZSIsImZvcmRldGFpbHMiLCJoYW5kbGVEZXRhaWxDaGFuZ2UiLCJoYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZSIsImhhbmRsZVJlbW92ZUl0ZW0iLCJoYW5kbGVBZGREZXRhaWxzIiwiRWRpdGluZyIsImdvdG51bGxkYXRhIiwic2hvd0FkZEltYWdlIiwicHJvZHVjdFN0b2NrIiwicHJvZHVjdERlc2MiLCJwcm9kdWN0RGV0YWlsc3MiLCJoYW5kbGVTYXZlIiwiSW1hZ2VMaXN0IiwiaW1hZ2VDbGlja2VkIiwiZmlsZW5hbWUiLCJNb2RhbFByb2QiLCJQcm9kdWN0RGV0YWlscyIsImV2dCIsIm5ld1NoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVyIiwic2lkeCIsIm5ld1NoYXJlaG9sZGVyZGVzYyIsImRldGFpbG5hbWVoYXNpbnB1dCIsImRhdGFkZXNjaGFzaW5wdXQiLCJoYW5kbGVTaGFyZWhvbGRlck5hbWVDaGFuZ2UiLCJoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UiLCJoYW5kbGVSZW1vdmVTaGFyZWhvbGRlciIsImhhbmRsZUFkZFNoYXJlaG9sZGVyIiwicHJvZHVjdCIsInByb2R1Y3RJbnB1dCIsInN0b2NrZ3JlYXQiLCJzdG9ja2dyZWF0SW5wdXQiLCJzdG9ja2xlc3MiLCJzdG9ja2xlc3NJbnB1dCIsImNhdGVnb3J5RmlsdGVyIiwibGlzdCIsInRvZ2dsZWQiLCJzb3J0IiwiYiIsInZpZXciLCJjYXRlZ29yeUlucHV0IiwiaGFuZGxlU29ydFZpZXciLCJwaWN0dXJlcyIsIlVwbG9hZCIsImFkZGltYWdlIiwicmVuZGVyRmllbGQiLCJpbnB1dCIsImxhYmVsIiwibWV0YSIsInRvdWNoZWQiLCJyZW5kZXJNZW1iZXJzIiwiZmllbGRzIiwic3VibWl0RmFpbGVkIiwibWVtYmVyIiwiaGFuZGxlVGVrYW4iLCJGaWVsZEFycmF5c0Zvcm0iLCJwcmlzdGluZSIsInJlc2V0Iiwic3VibWl0dGluZyIsInJlZHV4Rm9ybSIsImZvcm0iLCJGb3JtUmVkdXgiLCJzdG9yZSIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEZvcm1SZWR1Y2VyIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJjcmVhdGVTdG9yZSIsInZhbHVlcyIsImVycm9ycyIsIm1lbWJlcnMiLCJfZXJyb3IiLCJtZW1iZXJzQXJyYXlFcnJvcnMiLCJtZW1iZXJJbmRleCIsIm1lbWJlckVycm9ycyIsIkJpdGNoIiwiaW5wdXRSZWYiLCJSZWFjdCIsInRyaWdnZXJGaWxlU2VsZWN0UG9wdXAiLCJjdXJyZW50IiwiY2xpY2siLCJzZXRJbWFnZSIsInNldENyb3BwZWRBcmVhIiwiY3JvcHBlZEFyZWFQZXJjZW50YWdlIiwib25Eb3dubG9hZCIsImdlbmVyYXRlRG93bmxvYWQiLCJtYXJnaW5SaWdodCIsInByZXZpZXdVcmwiLCJhbmNob3IiLCJkb3dubG9hZCIsImhyZWYiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwic3BhY2luZyIsInRpdGxlIiwiRWFzeUNyb3AiLCJ1c2VSZWYiLCJjbGFzc2VzIiwicmF0aW9waXhlbCIsImltZ2NycyIsInVwbG9hZGZpbGUiLCJnZXRVcGxvYWQiLCJib3JkZXIiLCJNb2JpbGVEYXNoYm9hcmQiLCJNb2JpbGVVcGxvYWQiLCJzZXROYW1lIiwiY291bnQiLCJzZXRDb3VudCIsImhhbmRsZUNoYW5nZSIsImhhaGEiLCJmIiwicHJvbWlzZSIsImhhbmRsZUNsaWNrQ291bnQiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwiQ3VzdG9tZXIiLCJub3ciLCJEYXNoYm9hcmQiLCJzdGFydERhdGUiLCJnZXREYXRhIiwiaGFuZGxlTW9udGgiLCJ0ZXh0QWxpZ24iLCJ0b3RhbF9zdW0iLCJ0b0ZpeGVkIiwidXNlcnMiLCJzdW0iLCJjaGFydCIsImhBeGlzIiwidkF4aXMiLCJNb2JpbGVTaWRlQmFyIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoi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QUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZ1wiO1xyXG5pbXBvcnQgQ3JvcHBpbmcgZnJvbSBcIi4vQ3JvcHBpbmdcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuL2NvbXBvbmVudC9vcmRlci9PcmRlclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlFZGl0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXRcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcbmltcG9ydCBQcm9kdWN0QWRkIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL1Byb2R1Y3RBZGRcIjtcclxuaW1wb3J0IE1vYmlsZVNpZGVCYXIgZnJvbSBcIi4vcm91dGVyL01vYmlsZVNpZGVCYXJcIjtcclxuaW1wb3J0IE1vYmlsZVVwbG9hZCBmcm9tIFwiLi9tb2JpbGVjb21wL01vYmlsZVVwbG9hZFwiO1xyXG5pbXBvcnQgTW9iaWxlRGFzaGJvYXJkIGZyb20gXCIuL21vYmlsZWNvbXAvTW9iaWxlRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBFYXN5Q3JvcCBmcm9tIFwiLi9tb2JpbGVjb21wL0Vhc3lDcm9wXCI7XHJcbmltcG9ydCBDcm9wcGVydjIgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyXCI7XHJcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0XCI7XHJcbmltcG9ydCBWaXNpdG9yIGZyb20gXCIuL2NvbXBvbmVudC9WaXNpdG9yL1Zpc2l0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgICBpZEVkaXQ6IG51bGwsXHJcbiAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgc2hvd3RvcGJhcjogdHJ1ZSxcclxuICAgICAgc2hvd0Vhc3lDcm9wRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSA9IHRoaXMudXBkYXRlVmlld1N0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVNpZGVCYXIgPSB0aGlzLnRvZ2dsZVNpZGVCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcm9wID0gKHBheWxvYWQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93Q3JvcDogdHJ1ZSxcclxuICAgICAgc3JjOiBwYXlsb2FkLnNyYyxcclxuICAgICAgdXBsb2FkOiBwYXlsb2FkLnVwbG9hZCxcclxuICAgICAgc2hvd3RvcGJhcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3A6IGZhbHNlLCBzaG93dG9wYmFyOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVNpZGVCYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd1NpZGViYXI6ICF0aGlzLnN0YXRlLnNob3dTaWRlYmFyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVjYW5jZWx0b3B4ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3U3RhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubW9iaWxlVmlldyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IHRydWUsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyNCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb2JpbGVWaWV3OiBmYWxzZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyQ2xhc3MgPSBcImQtZmxleFwiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlVmlldykgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93dG9wYmFyICYmIChcclxuICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyBudWxsIDogPE1vYmlsZVNpZGVCYXIgLz59PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyA8U2lkZWJhciAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiByZW5kZXI9eyhwcm9wcykgPT4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RcIiByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3Qgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFkZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5oYW5kbGVTaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLmhhbmRsZUNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlld29yZGVyXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxFZGl0aW5nIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUxpc3Qgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3RBZGQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Zpc2l0b3JcIiByZW5kZXI9eyhwcm9wcykgPT4gPFZpc2l0b3Igey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLnN0YXRlLnNob3dDcm9wfVxyXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgICB1cGxvYWQ9e3RoaXMuc3RhdGUudXBsb2FkfVxyXG4gICAgICAgICAgICBjYW5jZWx0b3B4PXt0aGlzLmhhbmRsZWNhbmNlbHRvcHh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nyb3AuY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcHBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgfSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IGZhbHNlLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYixcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Q3JvcEltYWdlID0gKGUpID0+IHt9O1xyXG4gIGNhbmNlbExvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQmFja0FjdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3BJbWFnZTogZmFsc2UgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51cGxvYWQodGhpcy5zdGF0ZS5pbWFnZUJsb2IsIHRoaXMuY2FuY2VsTG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVNob3dDcm9wSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZVRvcFggPSAoZSkgPT57XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2FuY2VsTG9hZCgpOyAvL2NhdXRpb24gdGhpcyBpcyBuZXdcclxuICAgICAgdGhpcy5wcm9wcy5jYW5jZWx0b3B4KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3BwZWRJbWFnZVVybCwgc2hvd0Nyb3BJbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZVRvcFh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtzaG93Q3JvcEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja0FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICAgICAgICAgICAgICBjcm9wPXt0aGlzLnN0YXRlLmNyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3JvcHBlZEltYWdlVXJsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0Nyb3BJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz4gVXBsb2FkaW5nIEltYWdlLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRhVVJMdG9GaWxlKGRhdGFVcmwsIGZpbGVOYW1lKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRhdGFVcmwpO1xyXG4gIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xyXG4gIHJldHVybiBuZXcgRmlsZShbYmxvYl0sIGZpbGVOYW1lLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNpdG9yKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RhdGFuYW1lLCBzZXREYXRhbmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJhcGkvYWRtaW4vdGVzdC90ZXN0XCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gY291bnRPYmpzKGFycikge1xyXG4gICAgLy8gU28gdGhlIG9iamVjdCBkb2Vzbid0IGluaGVyaXQgZnJvbSBPYmplY3QucHJvdG90eXBlIGFuZCBhdm9pZHMgcHJvcGVydHlcclxuICAgIC8vIG5hbWUgY29sbGlzaW9uc1xyXG4gICAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICBpZiAob2JqW2l0ZW1dKSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dID0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0T25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGFyZ2V0ID09PSBcIkNvdW50cnlcIikge1xyXG4gICAgICBjb25zdCBjb3VudHJ5ID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmQuQ291bnRyeTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50Q291bnRyeSA9IGNvdW50T2Jqcyhjb3VudHJ5KTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJDb3VudHJ5XCIpXHJcbiAgICAgIHNldFRhYmxlKGNvdW50Q291bnRyeSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gXCJTdGF0ZVwiKSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmQuc3RhdGU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY3N0YXRlID0gY291bnRPYmpzKHN0YXRlKTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJTdGF0ZVwiKVxyXG4gICAgICBzZXRUYWJsZShjc3RhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiQ2l0eVwiKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBkYXRhLm1hcCgoaW5kKSA9PiBpbmQuY2l0eSk7XHJcbiAgICAgIGNvbnN0IGNjaXR5ID0gY291bnRPYmpzKGNpdHkpO1xyXG4gICAgICBzZXREYXRhbmFtZShcIkNpdHlcIilcclxuICAgICAgc2V0VGFibGUoY2NpdHkpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiSVBcIikge1xyXG4gICAgICBjb25zdCBpcHMgPSBkYXRhLm1hcChkYXQ9PmRhdC5pcClcclxuICAgICAgY29uc3QgaXBkID0gY291bnRPYmpzKGlwcyk7XHJcbiAgICAgIHNldERhdGFuYW1lKFwiSVBcIilcclxuICAgICAgc2V0VGFibGUoaXBkKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgcmV0dXJuIGluZC5zdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgQ291bnRyeSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgcmV0dXJuIGluZC5Db3VudHJ5O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2aXNpdCA9IGNvdW50T2JqcyhzdGF0ZSk7XHJcbiAgICBjb25zdCBzaW5nbGVkYXRhID0gZGF0YVswXTtcclxuICAgIGNvbnN0IG5hbWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzaW5nbGVkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmFtZVwiLCBuYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgIHtkYXRhICYmIDxoMz5Ub3RhbCBWaXNpdG9yIDoge2RhdGEubGVuZ3RofTwvaDM+fVxyXG5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RPbkNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiICBkZWZhdWx0VmFsdWU+UGxlYXNlIHNlbGVjdCBhbiBPcHRpb248L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb3VudHJ5XCI+Q291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXRlXCI+U3RhdGU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaXR5XCI+Q2l0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklQXCI+SVA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICB7dGFibGUgJiYgZGF0YW5hbWUgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCIgID5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YW5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkNvdW50PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAge09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhYmxlKS5tYXAoKHgsIGkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4oIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eH08L3RkPjx0ZD57dGFibGVbeF19PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPilcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2N1c3RvbWVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKHRoaXMuc3RhdGUuYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHguZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlcmVkIE9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4Lmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgT3JkZXIge3RoaXMucHJvcHMuaWR9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1xyXG4gICAgICAgICAgXCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIE9yZGVyIFN0YXR1cyBXaWxsIENoYW5nZSB0byB7dGhpcy5wcm9wcy5uYW1lfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbE9yZGVyIGZyb20gXCIuL01vZGFsT3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IG51bGwsIHN0YXR1czogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQRU5ESU5HID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQRU5ESU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ29tcGxldGVkID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJDT01QTEVURURcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJDT01QTEVURURcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURlbGl2ZXJpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvY2Vzc2luZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9vcmRlcnNcIj5PcmRlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBWaWV3IE9yZGVyXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0zIG10LTNcIj5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9yZGVyZGV0YWlscy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLnRvdGFsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhKX0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5DdXN0b21lciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ2l0eSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY2l0eX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0Y29kZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50cnkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlciA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlciBEYXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQYXltZW50IE1ldGhvZCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgVXBkYXRlZCBBdCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVwZGF0ZV9hdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5QYXlQYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDdXJyZW5jeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBkYXRhLnBheXBhbC5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+QWN0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBFTkRJTkcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQRU5ESU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUEVORElOR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUEVORElOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2Nlc3NpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQUk9DRVNTSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUFJPQ0VTU0lOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsaXZlcmluZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckRFTElWRVJJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxpdmVyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJERUxJVkVSSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvbXBsZXRlZChkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyQ09NUExFVEVEXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkNPTVBMRVRFRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vb3JkZXJgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJlc1wiLCBkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVySXRlbXMgPSAoYXJyLCBxdWVyeSkgPT4ge1xyXG4gICAgcmV0dXJuIGFyci50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIH07XHJcblxyXG4gIGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcblxyXG4gICAgLy8gbGV0IHRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAvLyBsZXQgZm9ybWF0RGF0ZSA9XHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldERhdGUoKSArXHJcbiAgICAvLyAgIFwiLVwiKHRvRm9ybWF0LmdldE1vbnRoKCkgKyAxKSArXHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgc3RhdHVzRmlsdGVyLFxyXG4gICAgICBmcm9tRGF0ZSxcclxuICAgICAgdG9EYXRlLFxyXG4gICAgICBvcmRlcklkLFxyXG4gICAgICBncmVhdGVyLFxyXG4gICAgICBsZXNzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcclxuICAgICAgaWYgKHN0YXR1c0ZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguc3RhdHVzID09PSBzdGF0dXNGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSA9PT0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBsZXQgZGF0ZVNhbWUgPSBuZXcgRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgIGRhdGVTYW1lLnNldERhdGUoZGF0ZVNhbWUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IGRhdGVTYW1lLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj1cclxuICAgICAgICAgICAgICBuZXcgRGF0ZShmcm9tRGF0ZSkuZ2V0VGltZSgpICYmXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3JkZXJJZCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgPT09IHBhcnNlSW50KG9yZGVySWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JlYXRlcikge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPiBwYXJzZUZsb2F0KGdyZWF0ZXIpKTtcclxuICAgIH1cclxuICAgIGlmIChsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC50b3RhbCA8IHBhcnNlRmxvYXQobGVzcykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGVsZXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9vcmRlcnMvJHt2YWx1ZX1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG4gICAgdGhpcy5yZWZzLmVtYWlsLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5zdGF0dXMudmFsdWUgPSBcIk5PTkVcIjtcclxuICAgIHRoaXMucmVmcy5vcmRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuZ3JlYXRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMubGVzcy52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcjogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgb3JkZXJJZDogbnVsbCxcclxuICAgICAgZ3JlYXRlcjogbnVsbCxcclxuICAgICAgbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmFuZ2UsIGFjdGl2ZSwgcGFnaW5hdGlvbiwgc3RhdHVzRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzRmlsdGVyKTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShudW1iZXIpfVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRU5ESU5HXCI+UEVORElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFTElWRVJJTkdcIj5ERUxJVkVSSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPQ0VTU0lOR1wiPlBST0NFU1NJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT01QTEVURURcIj5DT01QTEVURUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNTdGFydFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZnJvbURhdGU6IGUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+VG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0c0VuZFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdG9EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmRlciBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBvcmRlcklkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImdyZWF0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBncmVhdGVyOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgQ3JlYXRlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnVzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdmlld29yZGVyXCIsIHN0YXRlOiB7IGRhdGE6IHggfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW4tc3F1YXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsXCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gaWQ9e3guaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2UgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBDYW52YXNDcm9wKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gIGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuICAvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG4gIGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuICAvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltYWdlLFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApO1xyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIGF3YWl0IHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgICByZXR1cm4gbG9hZDtcclxuICB9KTtcclxuXHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAvLyAgICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgLy8gICAgIHJlc29sdmUobG9hZCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBVbmRvUm91bmRlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YmNhdGVnb3J5LCBzZXRzdWJjYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VidHdvLCBzZXRzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbGNhdCwgc2V0ZGVsY2F0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxzdWIsIHNldGRlbHN1Yl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3VidHdvLCBzZXRkZWxzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdC9hbGxjYXRlZ29yaWVzXCIsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShwYXJhbXMpIHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IHBhcmFtcy50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRzdWJ0d28obnVsbCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3RhcmdldH0vc3ViY2F0ZWdvcmllc2AsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQocGFyc2VJbnQodGFyZ2V0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0c3ViY2F0ZWdvcnkocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXREZWxldGVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0ZGVsY2F0KG51bGwpO1xyXG4gICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgc2V0ZGVsc3VidHdvKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YkNhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YnR3b2NhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxzdWIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YnR3byhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VidHdvQ2F0ZWdvcnlTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgcmVzZXREZWxldGVJdGVtKCk7XHJcbiAgICBzZXRkZWxzdWJ0d28ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIGNvbnNvbGUubG9nKGRlbHN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7ZGVsY2F0fWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdjYXQgPSBkYXRhLmZpbHRlcigocywgaSkgPT4gZGVsY2F0ICE9PSBzLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld2NhdCk7XHJcbiAgICBzZXREYXRhKG5ld2NhdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3ViQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJjYXRlZ29yaWVzLyR7ZGVsc3VifWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWIgPSBzdWJjYXRlZ29yeS5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YiAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdzdWIpO1xyXG4gICAgc2V0c3ViY2F0ZWdvcnkobmV3c3ViKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVTdWJ0d29DYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3N1YnR3b2NhdGVnb3JpZXMvJHtkZWxzdWJ0d299YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIGNvbnN0IG5ld3N1YnR3byA9IHN1YnR3by5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YnR3byAhPT0gcy5pZCk7XHJcbiAgICBzZXRzdWJ0d28obmV3c3VidHdvKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8cD50aGlzIGlzIGNhdGVnb3J5IGxpc3Q8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENhdGVnb3J5fVxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsY2F0ID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWIgQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YkNhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3ViY2F0ZWdvcnkgJiZcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1Yi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWV9IHtcIiA+XCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWIgPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YkNhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3ViIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWJUd28gQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YnR3b0NhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidHdvICYmXHJcbiAgICAgICAgICAgICAgc3VidHdvLm1hcCgoc3VidCwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1YnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJ0LnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWJ0d28gPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YnR3b0NhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3VidHdvIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBTbGlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvXCI7XHJcbmltcG9ydCBDYW52YXNDcm9wIGZyb20gXCIuL0NhbnZhc0Nyb3BcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3BwZXJ2Mihwcm9wcykge1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjcm9wcGVkSW1hZ2UsIHNldENyb3BwZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEFyZWFQaXhlbHMsIHNldENyb3BwZWRBcmVhUGl4ZWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNyb3BDb21wbGV0ZSA9IHVzZUNhbGxiYWNrKChjcm9wcGVkQXJlYSwgY3JvcHBlZEFyZWFQaXhlbHMpID0+IHtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKGNyb3BwZWRBcmVhUGl4ZWxzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIENsb3NlRGlhbG9nKCkge1xyXG4gICAgcHJvcHMuY2xvc2VEaWFsb2coKTtcclxuICAgIGNsZWFyU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dDcm9wcGVkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBDYW52YXNDcm9wKFxyXG4gICAgICAgIHByb3BzLnBheWxvYWQuc3JjLFxyXG4gICAgICAgIGNyb3BwZWRBcmVhUGl4ZWxzLFxyXG4gICAgICAgIHJvdGF0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZWVcIiwgeyBjcm9wcGVkSW1hZ2UgfSk7XHJcbiAgICAgIHNldENyb3BwZWRJbWFnZShjcm9wcGVkSW1hZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFVwbG9hZEltYWdlID0gKCkgPT4ge1xyXG4gICAgcHJvcHMucGF5bG9hZC51cGxvYWQoY3JvcHBlZEltYWdlLmJsb2IsIGNsZWFyU3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkSW1hZ2UobnVsbCk7XHJcbiAgICBzZXRab29tKDEpO1xyXG4gICAgc2V0Q3JvcCh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgICBzZXRSb3RhdGlvbigwKTtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRlZFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2Nyb3BwZWRJbWFnZSAmJiBwcm9wcy5zaG93RGlhbG9nID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17VXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQ3JvcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRhaW5lciAgXCIgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGhlaWdodDogXCIyNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3Byb3BzLnNob3dEaWFsb2cgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0Nsb3NlRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93Q3JvcHBlZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5wYXlsb2FkLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXNwZWN0PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ2hhbmdlPXtzZXRDcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzbGlkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19Plpvb208L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1heD17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB6b29tKSA9PiBzZXRab29tKHpvb20pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5Sb3RhdGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYigwLCAwLCAwLjQpXCIsXHJcbiAgekluZGV4OiBcIjVcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB3aWR0aDogXCIxMDB2d1wiLFxyXG59O1xyXG5jb25zdCBjb250YWluZXJDcm9wcGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjkwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICB3aWR0aDogXCI2MCVcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckJ1dHRvblN0eWxlID0ge1xyXG4gIC8vIGJvcmRlcjogXCIxcHggc29saWQgI2Y1ZjVmNVwiLFxyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlZEltYWdlU3R5bGUgPSB7XHJcbiAgbWF4V2lkdGg6IFwiNTB2d1wiLFxyXG5cclxuICAvLyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBGYWNlU2hhcnAsIFRyZW5kaW5nVXBTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNQ2F0ZWdvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeW5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgZGF0YWxpc3Q6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhbGlzdDogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZENhdGVnb3J5ID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBhZGRjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmluZCgoZGF0YXMsIGlkeCkgPT4gaW5kZXggPT09IGlkeCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBhZGRjYXQpO1xyXG5cclxuICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuZXdkYXRhbGlzdCA9IHRoaXMuc3RhdGUuZGF0YWxpc3QuZmlsdGVyKFxyXG4gICAgICAgIChkYXRhbGlzdCwgaXgpID0+IGFkZGNhdC5jYXRlZ29yeW5hbWUgIT09IGRhdGFsaXN0Lm5hbWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YWxpc3Q6IG5ld2RhdGFsaXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gaWR4KSByZXR1cm4gcG9zdDtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgZGlzYWJsZTogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHRoaXMuc3RhdGUuY2F0ZWdvcmllcyk7XHJcbiAgfTtcclxuICBoYW5kbGVBZGRTdWJDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhZGRzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXQsIGNhdGkpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBjYXRpKSByZXR1cm4gY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgeyBzdWJjYXRlZ29yeWlkOiBcIlwiLCBzdWJjYXRlZ29yeW5hbWU6IFwiXCIsIGRpc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViXCIsIGFkZHN1Yik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogYWRkc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5ID0gKGksIHMpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaXQgYWRkc3ViMlwiLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gICAgY29uc3QgYWRkc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkc3VidHdvY2F0LCBpdHdvKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpdHdvKSByZXR1cm4gYWRkc3VidHdvY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZHN1YnR3b2NhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkc3VidHdvY2F0LnN1YmNhdGVnb3J5Lm1hcCgoYWRzdCwgYWRzdGkpID0+IHtcclxuICAgICAgICAgIGlmIChzICE9PSBhZHN0aSkgcmV0dXJuIGFkc3Q7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hZHN0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW3sgc3VidHdvY2F0ZWdvcnlpZDogXCJcIiwgc3VidHdvY2F0ZWdvcnluYW1lOiBcIlwiIH1dLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViIHR3b1wiLCBhZGRzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZHN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWIgPSAoYnV0Y2F0KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YiA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmUsIGFpZHgpID0+IHtcclxuICAgICAgaWYgKGJ1dGNhdCAhPT0gYWlkeCkgcmV0dXJuIGFkZG1vcmU7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZSxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgLi4uYWRkbW9yZS5zdWJjYXRlZ29yeSxcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRtb3Jlc3ViXCIsIGFkZG1vcmVzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZG1vcmVzdWIgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KGFkZG1vcmVzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWJUd28gPSAoYWRkY2F0LCBidXRzdWIsIHN1YnR3b2luZHgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBhZGRtb3Jlc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkbW9yZXN1YiwgYW1zaSkgPT4ge1xyXG4gICAgICBpZiAoYWRkY2F0ICE9PSBhbXNpKSByZXR1cm4gYWRkbW9yZXN1YjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRtb3Jlc3ViLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRtb3Jlc3ViLnN1YmNhdGVnb3J5Lm1hcCgoc3ViY2F0aW5pdCwgc2NpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChidXRzdWIgIT09IHNjaWR4KSByZXR1cm4gc3ViY2F0aW5pdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN1YmNhdGluaXQsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBbXHJcbiAgICAgICAgICAgICAgLi4uc3ViY2F0aW5pdC5zdWJ0d29jYXRlZ29yeSxcclxuICAgICAgICAgICAgICB7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYWRkbW9yZXN1YnR3byk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogYWRkbW9yZXN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgY29uc3QgZW5hYmxlID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoeCwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ueCwgZGlzYWJsZTogZmFsc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBlbmFibGUsXHJcbiAgICAgICAgZGF0YWxpc3Q6IHRoaXMuc3RhdGUuZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKChhLCBpKSA9PiBpbmRleCAhPT0gaSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogcmVtb3ZlY2F0LFxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWNhdClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkgPSAoY2F0aSwgc3ViaSkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGkgIT09IG1vZGluZHgpIHJldHVybiBtb2Q7XHJcbiAgICAgIGlmIChjYXRpID09PSAwICYmIHN1YmkgPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5tb2QsIHN1YmNhdGVnb3J5OiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5maWx0ZXIoKHN1YiwgaXN1YikgPT4gc3ViaSAhPT0gaXN1YiksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3ZlZCB9KTtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlY2F0ZWdvcnkocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkgPSAoeCwgeSwgeikgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoeCAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoeSAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGFkc3Quc3VidHdvY2F0ZWdvcnkuZmlsdGVyKChmaWwsIGluZCkgPT4geiAhPT0gaW5kKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiByZW1vdmVzdWJ0d28gfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXQgPSAoaSkgPT4gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWR4KSA9PiBlLnRhcmdldC52YWx1ZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwia2VuYSBjYXJpXCIsIGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChwb3N0LCBpZHgpID0+IHtcclxuICAgICAgaWYgKGkgIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvL3RoaXMgcmV0dXJuIHZhbHVlIGlmIHNlbGVjdFxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGNhdGVnb3J5bmFtZTogZGF0YS5uYW1lLCBjYXRlZ29yeWlkOiBkYXRhLmlkIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiBuZXcgdmFsdWUgd2l0aG91dCBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLCBjYXRlZ29yeWlkOiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXcgZGF0YSA6IFwiLCBuZXdEYXRhKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YklucHV0ID0gKGNhdGlkeCwgc3ViaWR4LCBjYXRlZ29yeW5hbWUpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzdWJjYXRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgY2F0XCIsIGNhdGVnb3J5bmFtZSk7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkKSA9PiBjYXRlZ29yeW5hbWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgc3ViZGF0YSA9IGNhdGVnb3J5LnN1YmNhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YiwgaXgpID0+IHN1Yi5zdWJjYXRlZ29yeW5hbWUgPT09IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RpZmllZCA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKG1vZCwgbW9kaW5keCkgPT4ge1xyXG4gICAgICBpZiAoY2F0aWR4ICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLm1vZCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogbW9kLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBpc3ViKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3ViaWR4ICE9PSBpc3ViKSByZXR1cm4gc3ViO1xyXG5cclxuICAgICAgICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogc3ViZGF0YS5zdWJjYXRlZ29yeW5hbWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogc3ViZGF0YS5pZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibW9kaWZpZWQgOlwiLCBtb2RpZmllZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbW9kaWZpZWQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkobW9kaWZpZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YlR3b0lucHV0ID0gKFxyXG4gICAgaW5jYXRpbmR4LFxyXG4gICAgaW5jYXRzdWJpZHgsXHJcbiAgICBpbmNhdHN1YnR3b2lkeCxcclxuICAgIGNhdGVnb3J5bmFtZSxcclxuICAgIHN1YmNhdGVnb3J5bmFtZVxyXG4gICkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgc3VidHdvZGF0YSA9IG51bGw7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBzdWJjYXRlZ29yeW5hbWVcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGNhdGVnb3JpXCIsIHN1YmRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1YmRhdGEpIHtcclxuICAgICAgc3VidHdvZGF0YSA9IHN1YmRhdGEuU3VidHdvY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3VidHdvLCBzdGkpID0+IHN1YnR3by5zdWJ0d29jYXRlZ29yeW5hbWUgPT09IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1YnR3b25ldyA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGNhdHN1YnR3bywgY2F0c3VidHdvaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmNhdGluZHggIT09IGNhdHN1YnR3b2lkeCkgcmV0dXJuIGNhdHN1YnR3bztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXRzdWJ0d28sXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGNhdHN1YnR3by5zdWJjYXRlZ29yeS5tYXAoKGNhdHN1YiwgY2F0c3ViaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5jYXRzdWJpZHggIT09IGNhdHN1YmlkeCkgcmV0dXJuIGNhdHN1YjtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNhdHN1YixcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGNhdHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YnR3bywgc3VidHdvaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGluY2F0c3VidHdvaWR4ICE9PSBzdWJ0d29pZHgpIHJldHVybiBzdWJ0d287XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzdWJ0d29kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdWJ0d28sXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeWlkOiBzdWJ0d29kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwic3VidHdvbmV3IGNhdCA6XCIsIHN1YnR3b25ldyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogc3VidHdvbmV3LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHN1YnR3b25ldyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1PntgQ2F0ZWdvcmkgIyR7aW5kZXggKyAxfSAtICR7ZGF0YS5jYXRlZ29yeW5hbWV9YH08L2g1PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGlzdD17YGRhdGFsaXN0JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RhdGEuc3ViY2F0ZWdvcnkgfHwgZGF0YS5kaXNhYmxlID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQ2F0ZWdvcnkgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2BkYXRhbGlzdCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YWxpc3QgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YWxpc3QubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeShpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIHshZGF0YS5kaXNhYmxlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnluYW1lICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRDYXRlZ29yeShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhLnN1YmNhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEuc3ViY2F0ZWdvcnkubWFwKChzdWIsIHN1YmlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YmlkeH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICB7YFN1YiBDYXRlZ29yeSAke3N1Yi5zdWJjYXRlZ29yeW5hbWV9IyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSBvZiBDYXRlZ29yeSAke2RhdGEuY2F0ZWdvcnluYW1lfSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Yi5zdWJ0d29jYXRlZ29yeSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke2RhdGEuY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3N1Yi5zdWJjYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgQ2F0ZWdvcnkjJHtzdWJpZHggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYml9IHZhbHVlPXtkYnMuc3ViY2F0ZWdvcnluYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YihpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c3ViLnN1YnR3b2NhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YjIsIGluZHR3bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZHR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YFN1YiAybmQgQ2F0ZWdvcnkgJHtzdWIyLnN1YnR3b2NhdGVnb3J5bmFtZX0gIyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFN1YiBUd28gQ2F0ZWdvcnkjJHtpbmR0d28gKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViVHdvSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnN1YmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYnMuaWQgPT09IHN1Yi5zdWJjYXRlZ29yeWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGJzLlN1YnR3b2NhdGVnb3J5Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YnR3bywgc2RiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2RiaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tc20gcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YlR3byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkU3ViQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXRhaWxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGV0YWlsbmFtZTogXCJcIixcclxuICAgICAgICAgIGRhdGFkZXNjOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvZGV0YWlsc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gRGV0YWlsczogXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzLmNvbmNhdChbeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5kZXRhaWxzLmZpbHRlcigoZGF0YSwgaW5kZXgpID0+IHZhbHVlICE9PSBpbmRleCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogcmVtb3ZlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnJlbW92ZWRldGFpbChyZW1vdmUpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZURldGFpbE5hbWUgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlscyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IG5ld2RldGFpbHMsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxzKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEYXRhRGVzYyA9IChpZCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdkZXRhaWxkYXRhZGVzYyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxkYXRhZGVzYyxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5uZXdkZXRhaWxzKG5ld2RldGFpbGRhdGFkZXNjKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGlzdD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgTmFtZSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURldGFpbE5hbWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgbGlzdD1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlscyAjJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF0YURlc2MoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgIHAtMiBtdC0yIG1iLTIgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGV0YWlsbmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwiZGVzY1wiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17aXRlbS5kYXRhZGVzY30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9jayBtYi0zIG10LTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIERldGFpbFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBDcm9wcGVydjIgZnJvbSBcIi4vQ3JvcHBlcnYyXCI7XHJcbmNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGljdHVyZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwaWN0dXJlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2VpZDogXCJcIixcclxuICAgICAgICAgIGltYWdlbmFtZTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0YXJnZXRpbWFnZTogbnVsbCxcclxuICAgICAgc2hvd0JsYWNrU2NyZWVuOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmlucHV0RmlsZSA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmlsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWxlW2ldID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbWFnZUFkZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwaWN0dXJlOiB0aGlzLnN0YXRlLnBpY3R1cmUuY29uY2F0KFt7IGltYWdlaWQ6IFwiXCIsIGltYWdlbmFtZTogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9IChpKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5waWN0dXJlLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGlmICh0aGlzLmZpbGVJbnB1dCkgdGhpcy5pbnB1dEZpbGVbaV0udmFsdWUgPSBcIlwiO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigocywgZmkpID0+IGkgIT09IGZpKTtcclxuICAgIGNvbnN0IGltYWdlZGVsID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigoaW1hZ2UsIGlkeCkgPT4gaSA9PT0gaWR4KTtcclxuICAgIGNvbnN0IHBpY3R1cmV1cCA9IGltYWdlZGVsLmZpbmQoKHgpID0+IHguaW1hZ2VpZCk7XHJcbiAgICBpZiAodHlwZW9mIHBpY3R1cmV1cCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEZWxldGluZyBJbWFnZVwiIH0pO1xyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwaWN0dXJldXAuaW1hZ2VpZH0vaW1hZ2VgLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgeyBwaWN0dXJlOiByZW1vdmUsIG1lc3NhZ2U6IG51bGwgfSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVwaWN0dXJlKHJlbW92ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIE5vdCBHb29kIGkgY2FuIGZlZWwgaXQuLlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBpY3R1cmU6IHJlbW92ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGEpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBhIDpcIiwgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBlIDpcIiwgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdLnNpemUgPiA4Mzg4NjA4KSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgRmlsZSB0b28gYmlnLi4gUGxlYXNlIFB1dCBsZXNzIHRoYW4gOG1iXCIpO1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vb3JpZ2luYWwgaSBlZGl0IG9uIDIvOC8yMDIxIGNvZGVcclxuXHJcbiAgICAvLyBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgIC8vICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCxcclxuICAgIC8vICAgICAgIHVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHBheWxvYWQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRpbWFnZTogYSB9KTtcclxuICAgICAgbG9hZEltYWdlKFxyXG4gICAgICAgIGUudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIGFzeW5jIChpbWcpID0+IHtcclxuICAgICAgICAgIHZhciBwaXhlbCA9IGltZy5oZWlnaHQgKiBpbWcud2lkdGg7XHJcblxyXG4gICAgICAgICAgaWYgKHBpeGVsID4gMzE0NTcyOCkge1xyXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBwaXhlbCA+IDUwMzg4NDggPyAwLjUgOiAwLjg7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIlBsZWFzZSB3YWl0IC4uLlwiIH0pO1xyXG4gICAgICAgICAgICAgIHZhciBpbWdjb21wID0gYXdhaXQgY29tcHJlc3NJbWFnZShpbWcsIHJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWdjb21wLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZXJyb3IgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgIHNyYzogYmFzZTY0ZGF0YSxcclxuICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb3JpZW50YXRpb246IHRydWUsIGNhbnZhczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICAvL3Rlc3RpbmcgcHVycG9zZVxyXG4gICAgLy8gY29uc3QgZmlsZSA9IGRhdGFVUkx0b0ZpbGUoXCJpbWFnZUJsb2JcIiwgaW1hZ2VCbG9iKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgYmxvYlwiLGZpbGUpXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpOyAvL3RoaXMgaXMgdXBsb2FkcyB0byByZXNldCBhbGwgdG8gbnVsbCBmb3IgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZUVhc3lDcm9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSB1cGxvYWRcIiwgZSk7XHJcbiAgICBjb25zdCBpbWFnZVVwbG9hZCA9IHRoaXMuc3RhdGUucGljdHVyZS5tYXAoKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSB0aGlzLnN0YXRlLnRhcmdldGltYWdlKSByZXR1cm4gaW1hZ2U7XHJcbiAgICAgIHJldHVybiB7IC4uLmltYWdlLCBpbWFnZWlkOiBlLmlkLCBpbWFnZW5hbWU6IGUuaW1hZ2UgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBpY3R1cmU6IGltYWdlVXBsb2FkIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5zaG93UGljdHVyZShpbWFnZVVwbG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaG93RWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VFYXN5Q3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93RWFzeUNyb3A6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBpY3R1cmUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUucGljdHVyZS5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHAtMSBwdC0xIG10LTAuOCBtci0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJbWFnZShpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMVwiPntpICsgMSArIFwiLlwifTwvZGl2PlxyXG4gICAgICAgICAgICB7ZGF0YS5pbWFnZW5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtkYXRhLmltYWdlbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZpbGVJbnB1dChpKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGUgbS0xXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGUoaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbXktM1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW1hZ2VBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE1vcmUgUGljdHVyZVxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxDcm9wcGVydjJcclxuICAgICAgICAgIHNob3dEaWFsb2c9e3RoaXMuc3RhdGUuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcH1cclxuICAgICAgICAgIHBheWxvYWQ9e3RoaXMuc3RhdGUucGF5bG9hZH1cclxuICAgICAgICAgIHVwbG9hZD17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgekluZGV4OiBcIjFcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb21wcmVzc0ltYWdlID0gKGltZywgY3J0KSA9PiB7XHJcbiAgdmFyIG9mZlNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgb2ZmU2NyZWVuQ2FudmFzLndpZHRoID0gaW1nLndpZHRoICogY3J0O1xyXG4gIG9mZlNjcmVlbkNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogY3J0O1xyXG4gIHJldHVybiBwaWNhXHJcbiAgICAucmVzaXplKGltZywgb2ZmU2NyZWVuQ2FudmFzKVxyXG4gICAgLnRoZW4oKGltYWdlQ0NTKSA9PiBpbWFnZUNDUylcclxuICAgIC5jYXRjaCgoZSkgPT4gZSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1DYXRlZ29yeSBmcm9tIFwiLi9NQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFBEZXRhaWxzIGZyb20gXCIuL1BEZXRhaWxzXCI7XHJcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuL1BpY3R1cmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBkZXRhaWxzOiBbXSxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgICAgc2hvd2J1dHRvbjogZmFsc2UsXHJcbiAgICAgIHNob3dDcm9wcGVyRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJTYXZpbmcgZGF0YS4uIFBsZWFzZSBUYWtlIERlZXAgQnJlYXRoIC4uXCIgfSk7XHJcbiAgICBBeGlvcyhcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0c2AsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZGF0YSB0byBzZXJ2ZXIuLi4uXCIpO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgYWxlcnQoXCJQcm9kdWN0IFNhdmVkISFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBXcm9uZy4uZXJvcnIgcGxlYXNlIGNvbnRhY3QgcHVsaXNcIixcclxuICAgICAgICAgIHNob3didXR0b246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlVXBsb2FkZWQgPSAoaW1hZ2VzKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VzOiBpbWFnZXMgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVSZW1vdmVQaWN0dXJlID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChjYXQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogY2F0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVOZXdEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVEZXRhaWwgPSAocmVtb3ZlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICB7LyogVG9wIFJvdyAqL31cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxQaWN0dXJlXHJcbiAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5wcm9wcy5zaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgIHNob3dQaWN0dXJlPXt0aGlzLmhhbmRsZVVwbG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLnByb3BzLmNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIHJlbW92ZXBpY3R1cmU9e3RoaXMuaGFuZGxlUmVtb3ZlUGljdHVyZX1cclxuICAgICAgICAgICAgICAgIHNob3dFYXN5Q3JvcD17dGhpcy5wcm9wcy5zaG93RWFzeUNyb3B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxNQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIHJlbW92ZWNhdGVnb3J5PXt0aGlzLmhhbmRsZVJlbW92ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlY2F0ZWdvcnk9e3RoaXMuaGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxQRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZGV0YWlsPXt0aGlzLmhhbmRsZVJlbW92ZURldGFpbH1cclxuICAgICAgICAgICAgICAgIG5ld2RldGFpbHM9e3RoaXMuaGFuZGxlTmV3RGV0YWlsc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3didXR0b24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG59O1xyXG5jb25zdCBkaXZEaWFsb2cgPSB7XHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZWlkOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIHNhdmVCdXR0b246IFwiZGlzYWJsZWRcIixcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIHZhbGlkYXRlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXRhaWxzKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoaW1hZ2VpZCAmJiBuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGNhdGVnb3J5SWQgJiYgZGVzYykge1xyXG4gICAgICBBeGlvcyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2NhdGVnb3J5SWR9YCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICAgIGltYWdlaWQ6IGltYWdlaWQsXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGRldGFpbHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0aGlzLnN0YXRlLmltYWdlaWR9L2ltYWdlYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogbnVsbCwgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGltYWdlSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChpbWFnZUlkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoaW1hZ2VCbG9iLCBsb2FkZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxOYW1lID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxOYW1lOiBcIiwgZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGhhbmRsZURldGFpbERlc2MgPSBlID0+e1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJmcm9tIFByb2R1Y3REZXRhaWxzLmpzIERldGFpbERlc2M6IFwiLCBlKVxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlIH0pXHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBzYXZlQnV0dG9uLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIHZhbGlkYXRlLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz4ge1wiPiBOZXcgUHJvZHVjdFwifVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMGVtXCIsIGhlaWdodDogXCI1ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsbmFtZT17dGhpcy5oYW5kbGVEZXRhaWxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IEltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmUgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPENhdGVnb3JpZXMgc2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VpZCAmJlxyXG4gICAgICAgICAgICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGRlc2MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZlIFByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRmlsbCBBbGwgRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge3N0b2NrIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgU3RvY2sgQW1vdW50IG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtwcmljZSA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHB1dCBwcmljZSBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjYXRlZ29yeURhdGE6IG51bGxcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCJhcGkvYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcmllc1wiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHNcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsIHNob3c6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCh0aGlzLnN0YXRlLmNhdGVnb3J5RGF0YS5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogXCJcIiwgZGV0YWlsczogXCJcIiwgc2hvdzogdHJ1ZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzaG93LCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhICYmIHNob3cgJiYgKFxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeURhdGEgPyBjYXRlZ29yeURhdGEuaWQgOiBudWxsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ICYmIChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5QbGVhc2UgU2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhICE9PSBudWxsICYmIHNob3cgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTE9BRElOR1wiPkxPQURJTkcuLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBDYXRlZ29yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPiBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IERldGFpbHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWwgQWRkIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhdGVnb3J5fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogeyFzaG93ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsQ2F0IGZyb20gXCIuLi9PbGQvTW9kYWxDYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2NhdGVnb3JpZXMvJHtpZH1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkNhdGVnb3J5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5kZXRhaWxzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3gubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3guZGV0YWlsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjY2F0ZWdvcnlcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDYXRcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICBhc3BlY3Q6IDEgLyAxLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBkZWZhdWx0SW1hZ2U6IHRydWUsXHJcbiAgICAgIGxvYWRpbmc6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcclxuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxyXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXHJcbiAgICAgICAgY3JvcCxcclxuICAgICAgICBcIm5ld0ZpbGUuanBlZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRpbmcuLi5cIik7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzcmMsIGNyb3AsIGRlZmF1bHRJbWFnZSwgY3JvcHBlZEltYWdlVXJsLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VXBsb2FkaW5nIC4uLi48L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aDQ+Q3JvcCBhbmQgVXBsb2FkIEltYWdlPC9oND5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XHJcblxyXG4gICAgICAgIHtzcmMgJiYgZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0SW1hZ2U6IGZhbHNlIH0pfT5cclxuICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7IWRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdENhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5wcm9wcy5jYXRlZ29yeUlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgY2F0ZWdvcnlJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvcHMgb2YgRWRpdENhdFwiLCB0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17eX0gdmFsdWU9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0UHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiB0aGlzLnByb3BzLmZvcmRldGFpbHMgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXRhaWxDaGFuZ2UgPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRhdGEsIGRhdGFpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGRhdGFpbmRleCkgcmV0dXJuIGRhdGE7XHJcbiAgICAgIHJldHVybiB7IC4uLmRhdGEsIGRldGFpbG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogbmV3RGF0YSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGF0YWNoYW5nZShuZXdEYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UgPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRhdGEsIGRhdGFpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGRhdGFpbmRleCkgcmV0dXJuIGRhdGE7XHJcbiAgICAgIHJldHVybiB7IC4uLmRhdGEsIGRhdGFkZXNjOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJdGVtID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGREZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW1xyXG4gICAgICAgIHsgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIsIGlkOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIGNvbnN0IHsgZGV0YWlscyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg0PlByb2R1Y3QgRGV0YWlsKHMpPC9oND5cclxuICAgICAgICB7ZGV0YWlsc1xyXG4gICAgICAgICAgPyBkZXRhaWxzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuZGV0YWlsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbFZhbHVlQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUl0ZW0oZGF0YS5pZCA/IGRhdGEuaWQgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGREZXRhaWxzfSBjbGFzc05hbWU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3QgRGV0YWlsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRWRpdENhdCBmcm9tIFwiLi9FZGl0Q2F0XCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IFVwbG9hZCBmcm9tIFwiLi9VcGxvYWRcIjtcclxuaW1wb3J0IEltYWdlTGlzdCBmcm9tIFwiLi9JbWFnZUxpc3RcIjtcclxuaW1wb3J0IENyb3BEaWFsb2cgZnJvbSBcIi4vQ3JvcERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEVkaXRQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9FZGl0UHJvZHVjdERldGFpbHNcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL1Byb2R1Y3REZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBkZXNjOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsLFxyXG4gICAgICBpbWFnZTogbnVsbCxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgICAgZ290bnVsbGRhdGEgOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWBcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbmFtZTogZGF0YS5wcm9kdWN0TmFtZSxcclxuICAgICAgICBwcmljZTogZGF0YS5wcm9kdWN0UHJpY2UsXHJcbiAgICAgICAgc3RvY2s6IGRhdGEucHJvZHVjdFN0b2NrLFxyXG4gICAgICAgIGRlc2M6IGRhdGEucHJvZHVjdERlc2MsXHJcbiAgICAgICAgZGV0YWlscyA6IGRhdGEucHJvZHVjdERldGFpbHNzLFxyXG4gICAgICAgIGdvdG51bGxkYXRhIDogdHJ1ZSxcclxuXHJcblxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gaWQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3J5SWQ6IGlkXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9pbWFnZXMvJHtkYXRhLmlkfS9maWxlL3Byb2R1Y3RgLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1hZ2U6IGltYWdlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNhdmUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIG5hbWUsIHByaWNlLCBzdG9jaywgZGVzY30gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgaWYobmFtZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBuYW1lID0gZGF0YS5wcm9kdWN0TmFtZTtcclxuICAgIH1cclxuICAgIGlmKHByaWNlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHByaWNlID0gZGF0YS5wcm9kdWN0UHJpY2U7XHJcbiAgICB9XHJcbiAgICBpZihzdG9jayA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBzdG9jayA9IGRhdGEucHJvZHVjdFN0b2NrO1xyXG4gICAgfVxyXG4gICAgaWYoZGVzYyA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBkZXNjID0gZGF0YS5wcm9kdWN0RGVzYztcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG5cclxuICAgIGlmIChuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGRlc2MpIHtcclxuXHJcbiAgICAgIEF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2RhdGEuaWR9YCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgZGVzYzogZGVzYyxcclxuICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIkRhdGEgSGFzIEJlZW4gU2F2ZWRcIiB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGBEYXRhIE5vdCBTYXZlIC4gRXJyb3IgOiAke2V9YCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiRGF0YSBub3Qgc2F2ZS4gUGxlYXNlIEZpbGwgQWxsIHJlcXVpcmVtZW50IGZpZWxkc1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0ID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsc051bGwgPSBlID0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUgLCBnb3RudWxsZGF0YSA6IGZhbHNlfSlcclxuICB9XHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSwgZ290bnVsbGRhdGEgOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IGUgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogZS5pZCwgaW1hZ2U6IGUuaW1hZ2UsIHNob3dBZGRJbWFnZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIG1lc3NhZ2UsIGNhdGVnb3J5SWQsIGltYWdlLCBkZXRhaWxzLCBnb3RudWxsZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdCBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgUHJvZHVjdFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RTdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dBZGRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JvcERpYWxvZyBhZGRJbWFnZT17dGhpcy5oYW5kbGVBZGRJbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnttZXNzYWdlfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXREaWFsb2cgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIlxyXG59O1xyXG5jb25zdCBkaXZEaWFsb2cgPSB7XHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9pbWFnZXMvXCJcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogcmVzLmRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGltYWdlQ2xpY2tlZCA9IGltYWdlID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aW1hZ2V9L2ltYWdlYFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5JbWFnZSBMaXN0PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgZGF0YS5tYXAoKHgsIHkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTJcIiBrZXk9e3l9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDbGlja2VkKHguaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyB4LmZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wiY2F0ZWdvcnlcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgRGVsZXRpbmcgdGhpcyBDYXRlZ29yeSB3aWxsIGRlbGV0ZSBhbGwgcHJvZHVjdCBmb3IgdGhpcyBjYXRlZ29yeS5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBDYXRlZ29yeSBcInt0aGlzLnByb3BzLm5hbWV9XCIgPyAuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsUHJvZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcInByb2R1Y3RcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcInByb2R1Y3RcIiArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJ9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5EZWxldGU8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBQcm9kdWN0IFwie3RoaXMucHJvcHMubmFtZX1cIiA/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hhcmVob2xkZXJzOiBbeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9XSxcclxuICAgICAgZGV0YWlsbmFtZWhhc2lucHV0OiBmYWxzZSxcclxuICAgICAgZGF0YWRlc2NoYXNpbnB1dDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlID0gKGlkeCkgPT4gKGV2dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U2hhcmVob2xkZXJzID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICBpZiAoaWR4ICE9PSBzaWR4KSByZXR1cm4gc2hhcmVob2xkZXI7XHJcbiAgICAgIHJldHVybiB7IC4uLnNoYXJlaG9sZGVyLCBkZXRhaWxuYW1lOiBldnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcnMgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJzKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVyZGVzYyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcChcclxuICAgICAgKHNoYXJlaG9sZGVyLCBzaWR4KSA9PiB7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnNoYXJlaG9sZGVyLCBkYXRhZGVzYzogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZWhvbGRlcnM6IG5ld1NoYXJlaG9sZGVyZGVzYyB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShuZXdTaGFyZWhvbGRlcmRlc2MpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkU2hhcmVob2xkZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hhcmVob2xkZXJzOiB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5jb25jYXQoW1xyXG4gICAgICAgIHsgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfSxcclxuICAgICAgXSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVTaGFyZWhvbGRlciA9IChpZHgpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5maWx0ZXIoKHMsIHNpZHgpID0+IGlkeCAhPT0gc2lkeCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hhcmVob2xkZXJzOiByZW1vdmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKHJlbW92ZWQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoKHNoYXJlaG9sZGVyLCBpZHgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVob2xkZXJcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BOYW1lIE9mIERldGFpbCAjJHtpZHggKyAxfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NoYXJlaG9sZGVyLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbG5hbWVoYXNpbnB1dFxyXG4gICAgICAgICAgICAgID8gXCJOYW1lIG9mIGRldGFpbCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgRGF0YSAjJHtpZHggKyAxfSBgfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kYXRhZGVzY31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UoaWR4KX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFkZXNjaGFzaW5wdXQgPyBcIkRldGFpbCBkYXRhIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVTaGFyZWhvbGRlcihpZHgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkU2hhcmVob2xkZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3QgRGV0YWlsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTW9kYWxQcm9kIGZyb20gXCIuLi9PbGQvTW9kYWxQcm9kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlEYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgICB0b2dnbGVkIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdElucHV0ID0gZTtcclxuICAgIH07XHJcbiBcclxuICAgIHRoaXMuc3RvY2tncmVhdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrbGVzcyA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkZWxldGVkIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZShhY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHRoaXMucHJvZHVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrZ3JlYXQpIHRoaXMuc3RvY2tncmVhdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrbGVzcykgdGhpcy5zdG9ja2xlc3NJbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGNhdGVnb3J5RmlsdGVyLCBzdG9ja2dyZWF0LCBzdG9ja2xlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHgucHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb2R1Y3QudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5RmlsdGVyKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yeUZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguY2F0ZWdvcnkubmFtZSA9PT0gY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tncmVhdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrID4gcGFyc2VGbG9hdChzdG9ja2dyZWF0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPCBwYXJzZUZsb2F0KHN0b2NrbGVzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNvcnRWaWV3PSAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBsaXN0ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvZ2dsZWQpe1xyXG4gICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGEudmlldyAtIGIudmlldylcclxuICAgICAgdGhpcy5wYWdpbmF0ZURhdGEobGlzdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZ2dsZWQgOiBmYWxzZX0pXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4gYi52aWV3IC0gYS52aWV3KVxyXG4gICAgICB0aGlzLnBhZ2luYXRlRGF0YShsaXN0KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlZCA6IHRydWV9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uLCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBwYWdpbmF0aW9uIDogXCIsIHBhZ2luYXRpb24pO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIEdyZWF0ZXIgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrZ3JlYXR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZ3JlYXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2xlc3N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9ja2xlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZGF0YS5sZW5ndGh9IHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgdG89XCIvY3JlYXRlcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1zcXVhcmUgZmEtMXhcIiAvPiBDcmVhdGUgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlld3M8YSBocmVmPVwiI1wiICAgb25DbGljaz17dGhpcy5oYW5kbGVTb3J0Vmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZ2dsZWQgPyAgPGkgY2xhc3M9XCJmYXMgZmEtc29ydC1hbW91bnQtZG93blwiPjwvaT4gOjxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtYW1vdW50LXVwXCI+PC9pPiB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2krMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3gucGljdHVyZXMubWFwKChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIGEuZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC52aWV3ID8geC52aWV3IDogbnVsbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0U3RvY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0IGZhLTF4XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvZWRpdFwiLCBzdGF0ZTogeyBpZDogeC5pZCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiAvPiB7XCIgIFwifUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjcHJvZHVjdFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFByb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuLy8gaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNyYzogbnVsbCxcclxuICAgIGNyb3A6IHtcclxuICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgfSxcclxuICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgIGltYWdlQmxvYjogbnVsbFxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHRoaXMuc3RhdGUuc3JjKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmltYWdlbG9hZFwiKTtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3AgY29tcGxldGVcIik7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3BjaGFuZ2VcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGFkZGltYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBhZGRpbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgLy90b2RvIHRoaXMgaXMgc3VjZXNzIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkSW1hZ2VVcmwsIHNyYyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3NyYyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPHAgLz5cclxuICAgICAgICAgIHsvKiB7Y3JvcHBlZEltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlbmRlckZpZWxkID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17bGFiZWx9IC8+XHJcbiAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCByZW5kZXJNZW1iZXJzID0gKHsgZmllbGRzLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yLCBzdWJtaXRGYWlsZWQgfSB9KSA9PiAoXHJcbiAgPHVsPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCh7fSl9PlxyXG4gICAgICAgIEFkZCBNZW1iZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHsodG91Y2hlZCB8fCBzdWJtaXRGYWlsZWQpICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9saT5cclxuICAgIHtmaWVsZHMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIE1lbWJlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucmVtb3ZlKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBYXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGg0Pk1lbWJlciAje2luZGV4ICsgMX08L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT17YCR7bWVtYmVyfS5maXJzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0ubGFzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuY29uc3QgaGFuZGxlVGVrYW4gPSAocGFyYW1zKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgRmllbGRBcnJheXNGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8RmllbGRBcnJheSBuYW1lPVwibWVtYmVyc1wiIGNvbXBvbmVudD17cmVuZGVyTWVtYmVyc30gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30gb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgQ2xlYXIgVmFsdWVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRla2FufT5UZWthbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICBmb3JtOiBcImZpZWxkQXJyYXlzXCIsIC8vIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgZm9ybVxyXG4gIHZhbGlkYXRlLFxyXG59KShGaWVsZEFycmF5c0Zvcm0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vU3RvcmVcIjtcclxuaW1wb3J0IEZpZWxkQXJyYXlzRm9ybSBmcm9tIFwiLi9GaWVsZEFycmF5c0Zvcm1cIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cclxuICAgICAgICAgICAgICA8aDI+U2ltcGxlIEZvcm08L2gyPlxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRBcnJheXNGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHJlZHVjZXIgYXMgcmVkdXhGb3JtUmVkdWNlciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZm9ybTogcmVkdXhGb3JtUmVkdWNlciwgLy8gbW91bnRlZCB1bmRlciBcImZvcm1cIlxyXG59KTtcclxuY29uc3Qgc3RvcmUgPSAod2luZG93LmRldlRvb2xzRXh0ZW5zaW9uXHJcbiAgPyB3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb24oKShjcmVhdGVTdG9yZSlcclxuICA6IGNyZWF0ZVN0b3JlKShyZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJjb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcblxyXG4gIGlmICghdmFsdWVzLm1lbWJlcnMgfHwgIXZhbHVlcy5tZW1iZXJzLmxlbmd0aCkge1xyXG4gICAgZXJyb3JzLm1lbWJlcnMgPSB7IF9lcnJvcjogJ0F0IGxlYXN0IG9uZSBtZW1iZXIgbXVzdCBiZSBlbnRlcmVkJyB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBtZW1iZXJzQXJyYXlFcnJvcnMgPSBbXTtcclxuICAgIHZhbHVlcy5tZW1iZXJzLmZvckVhY2goKG1lbWJlciwgbWVtYmVySW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbWVtYmVyRXJyb3JzID0ge307XHJcbiAgICAgIGlmICghbWVtYmVyIHx8ICFtZW1iZXIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgbWVtYmVyRXJyb3JzLmZpcnN0TmFtZSA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgbWVtYmVyc0FycmF5RXJyb3JzW21lbWJlckluZGV4XSA9IG1lbWJlckVycm9ycztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIW1lbWJlciB8fCAhbWVtYmVyLmxhc3ROYW1lKSB7XHJcbiAgICAgICAgbWVtYmVyRXJyb3JzLmxhc3ROYW1lID0gJ1JlcXVpcmVkJztcclxuICAgICAgICBtZW1iZXJzQXJyYXlFcnJvcnNbbWVtYmVySW5kZXhdID0gbWVtYmVyRXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICBpZiAobWVtYmVyc0FycmF5RXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICBlcnJvcnMubWVtYmVycyA9IG1lbWJlcnNBcnJheUVycm9ycztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9ycztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgbG9hZEltYWdlIGZyb20gXCJibHVlaW1wLWxvYWQtaW1hZ2UvanNcIjtcclxuaW1wb3J0IENyb3BwZXIgZnJvbSBcInJlYWN0LWVhc3ktY3JvcFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBnZW5lcmF0ZURvd25sb2FkIH0gZnJvbSBcIi4vdXRpbHMvY3JvcEltYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaXRjaCgpIHtcclxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG5cclxuICBjb25zdCB0cmlnZ2VyRmlsZVNlbGVjdFBvcHVwID0gKCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xyXG5cclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjcm9wcGVkQXJlYSwgc2V0Q3JvcHBlZEFyZWFdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3AsIHNldENyb3BdID0gUmVhY3QudXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBvbkNyb3BDb21wbGV0ZSA9IChjcm9wcGVkQXJlYVBlcmNlbnRhZ2UsIGNyb3BwZWRBcmVhUGl4ZWxzKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkQXJlYShjcm9wcGVkQXJlYVBpeGVscyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TZWxlY3RGaWxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAvLyAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW1hZ2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxvYWRJbWFnZShcclxuICAgICAgICBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgKGltZykgPT4ge1xyXG4gICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWcudG9EYXRhVVJMKGBpbWFnZS9qcGVnYCk7XHJcbiAgICAgICAgICBzZXRJbWFnZShiYXNlNjRkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb3JpZW50YXRpb246IHRydWUsIGNhbnZhczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25Eb3dubG9hZCA9ICgpID0+IHtcclxuICAgIGdlbmVyYXRlRG93bmxvYWQoaW1hZ2UsIGNyb3BwZWRBcmVhKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZShudWxsKTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtpbWFnZSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3JvcHBlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wcGVyXCI+XHJcbiAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgYXNwZWN0PXsxfVxyXG4gICAgICAgICAgICAgICAgb25Dcm9wQ2hhbmdlPXtzZXRDcm9wfVxyXG4gICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17em9vbX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWJ1dHRvbnNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17dHJpZ2dlckZpbGVTZWxlY3RQb3B1cH1cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENob29zZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25Eb3dubG9hZH0+XHJcbiAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW1hZ2UobnVsbCl9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2VTcmMgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5cclxuY29uc3QgY3JlYXRlSW1hZ2UgPSAodXJsKSA9PlxyXG5cdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGltYWdlKSk7XHJcblx0XHRpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcclxuXHRcdGltYWdlLnNldEF0dHJpYnV0ZShcImNyb3NzT3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpOyAvLyBuZWVkZWQgdG8gYXZvaWQgY3Jvc3Mtb3JpZ2luIGlzc3VlcyBvbiBDb2RlU2FuZGJveFxyXG5cdFx0aW1hZ2Uuc3JjID0gdXJsO1xyXG5cdH0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFkaWFuQW5nbGUoZGVncmVlVmFsdWUpIHtcclxuXHRyZXR1cm4gKGRlZ3JlZVZhbHVlICogTWF0aC5QSSkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldENyb3BwZWRJbWcoaW1hZ2VTcmMsIHBpeGVsQ3JvcCwgcm90YXRpb24gPSAwKSB7XHJcblx0Y29uc3QgaW1hZ2UgPSBhd2FpdCBjcmVhdGVJbWFnZShpbWFnZVNyYyk7XHJcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuXHRjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcblx0Y29uc3Qgc2FmZUFyZWEgPSAyICogKChtYXhTaXplIC8gMikgKiBNYXRoLnNxcnQoMikpO1xyXG5cclxuXHQvLyBzZXQgZWFjaCBkaW1lbnNpb25zIHRvIGRvdWJsZSBsYXJnZXN0IGRpbWVuc2lvbiB0byBhbGxvdyBmb3IgYSBzYWZlIGFyZWEgZm9yIHRoZVxyXG5cdC8vIGltYWdlIHRvIHJvdGF0ZSBpbiB3aXRob3V0IGJlaW5nIGNsaXBwZWQgYnkgY2FudmFzIGNvbnRleHRcclxuXHRjYW52YXMud2lkdGggPSBzYWZlQXJlYTtcclxuXHRjYW52YXMuaGVpZ2h0ID0gc2FmZUFyZWE7XHJcblxyXG5cdC8vIHRyYW5zbGF0ZSBjYW52YXMgY29udGV4dCB0byBhIGNlbnRyYWwgbG9jYXRpb24gb24gaW1hZ2UgdG8gYWxsb3cgcm90YXRpbmcgYXJvdW5kIHRoZSBjZW50ZXIuXHJcblx0Y3R4LnRyYW5zbGF0ZShzYWZlQXJlYSAvIDIsIHNhZmVBcmVhIC8gMik7XHJcblx0Y3R4LnJvdGF0ZShnZXRSYWRpYW5BbmdsZShyb3RhdGlvbikpO1xyXG5cdGN0eC50cmFuc2xhdGUoLXNhZmVBcmVhIC8gMiwgLXNhZmVBcmVhIC8gMik7XHJcblxyXG5cdC8vIGRyYXcgcm90YXRlZCBpbWFnZSBhbmQgc3RvcmUgZGF0YS5cclxuXHRjdHguZHJhd0ltYWdlKFxyXG5cdFx0aW1hZ2UsXHJcblx0XHRzYWZlQXJlYSAvIDIgLSBpbWFnZS53aWR0aCAqIDAuNSxcclxuXHRcdHNhZmVBcmVhIC8gMiAtIGltYWdlLmhlaWdodCAqIDAuNVxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG5cdC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG5cdGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuXHRjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcblx0Ly8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG5cdGN0eC5wdXRJbWFnZURhdGEoXHJcblx0XHRkYXRhLFxyXG5cdFx0MCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngsXHJcblx0XHQwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnlcclxuXHQpO1xyXG5cclxuXHQvLyBBcyBCYXNlNjQgc3RyaW5nXHJcblx0Ly8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpO1xyXG5cdHJldHVybiBjYW52YXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZURvd25sb2FkID0gYXN5bmMgKGltYWdlU3JjLCBjcm9wKSA9PiB7XHJcblx0aWYgKCFjcm9wIHx8ICFpbWFnZVNyYykge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2FudmFzID0gYXdhaXQgZ2V0Q3JvcHBlZEltZyhpbWFnZVNyYywgY3JvcCk7XHJcblxyXG5cdGNhbnZhcy50b0Jsb2IoXHJcblx0XHQoYmxvYikgPT4ge1xyXG5cdFx0XHRjb25zdCBwcmV2aWV3VXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdFx0XHRjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdFx0YW5jaG9yLmRvd25sb2FkID0gXCJpbWFnZS5qcGVnXCI7XHJcblx0XHRcdGFuY2hvci5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHRcdFx0YW5jaG9yLmNsaWNrKCk7XHJcblxyXG5cdFx0XHR3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChwcmV2aWV3VXJsKTtcclxuXHRcdH0sXHJcblx0XHRcImltYWdlL2pwZWdcIixcclxuXHRcdDAuNjZcclxuXHQpO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IGdldENyb3BwZWRJbWcgZnJvbSBcIi4vY3JvcEltYWdlXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBnZXRVcGxvYWQgZnJvbSBcIi4vY3JvcEltYWdlVXBsb2FkXCI7XHJcbmltcG9ydCB7IEJvdHRvbU5hdmlnYXRpb24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuLy8gaW1wb3J0IHBpY2EgZnJvbSBcInBpY2FcIjtcclxuY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgY29tcHJlc3NJbWFnZSA9IChpbWcsIGNydCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB2YXIgb2ZmU2NyZWVuQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIG9mZlNjcmVlbkNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIGNydDtcclxuICAgIG9mZlNjcmVlbkNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogY3J0O1xyXG4gICAgcGljYVxyXG4gICAgICAucmVzaXplKGltZywgb2ZmU2NyZWVuQ2FudmFzKVxyXG4gICAgICAudGhlbigoaW1hZ2VDQ1MpID0+IHtcclxuICAgICAgICByZXNvbHZlKGltYWdlQ0NTKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiByZWplY3QoZSkpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWFzeUNyb3AoKSB7XHJcbiAgY29uc3QgW2Nyb3AsIHNldENyb3BdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xyXG4gIGNvbnN0IFtyb3RhdGlvbiwgc2V0Um90YXRpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2Nyb3BwZWRBcmVhUGl4ZWxzLCBzZXRDcm9wcGVkQXJlYVBpeGVsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEltYWdlLCBzZXRDcm9wcGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgdHJpZ2dlckZpbGVTZWxlY3RQb3B1cCA9ICgpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSB1c2VDYWxsYmFjaygoY3JvcHBlZEFyZWEsIGNyb3BwZWRBcmVhUGl4ZWxzKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhjcm9wcGVkQXJlYVBpeGVscyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93Q3JvcHBlZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlID0gYXdhaXQgZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBjcm9wcGVkQXJlYVBpeGVscyxcclxuICAgICAgICByb3RhdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVlXCIsIHsgY3JvcHBlZEltYWdlIH0pO1xyXG4gICAgICBzZXRDcm9wcGVkSW1hZ2UoY3JvcHBlZEltYWdlLnVybCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TZWxlY3RGaWxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxvYWRJbWFnZShcclxuICAgICAgICBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgYXN5bmMgKGltZykgPT4ge1xyXG4gICAgICAgICAgbGV0IHBpeGVsID0gaW1nLmhlaWdodCAqIGltZy53aWR0aDtcclxuICAgICAgICAgIGlmIChwaXhlbCA+IDMxNDU3MjgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvLyBiZXR0ZXIgdG8gaGF2ZSBtb2RhbCBvciBsb2FkaW5nIHNjcmVlblxyXG4gICAgICAgICAgICAgIGxldCByYXRpb3BpeGVsID0gcGl4ZWwgPiA1MDM4ODQ4ID8gMC41IDogMC44O1xyXG4gICAgICAgICAgICAgIGNvbnN0IGltZ2NycyA9IGF3YWl0IGNvbXByZXNzSW1hZ2UoaW1nLCByYXRpb3BpeGVsKTtcclxuICAgICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZ2Nycy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgICBzZXRJbWFnZShiYXNlNjRkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGltZ2NycyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICBzZXRJbWFnZShiYXNlNjRkYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb3JpZW50YXRpb246IHRydWUsIGNhbnZhczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICA5O1xyXG4gIGNvbnN0IHVwbG9hZGZpbGUgPSAoKSA9PiB7XHJcbiAgICBnZXRVcGxvYWQoaW1hZ2UsIGNyb3BwZWRBcmVhUGl4ZWxzLCByb3RhdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVudVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgTWVudVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICB7aW1hZ2UgJiYgIWNyb3BwZWRJbWFnZSA/IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj17cm90YXRpb259XHJcbiAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgYXNwZWN0PXsxfVxyXG4gICAgICAgICAgICAgICAgb25Dcm9wQ2hhbmdlPXtzZXRDcm9wfVxyXG4gICAgICAgICAgICAgICAgb25Sb3RhdGlvbkNoYW5nZT17c2V0Um90YXRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNyb3BDb21wbGV0ZT17b25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICBvblpvb21DaGFuZ2U9e3NldFpvb219XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2xpZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgIG1heD17M31cclxuICAgICAgICAgICAgICAgICAgc3RlcD17MC4xfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB6b29tKSA9PiBzZXRab29tKHpvb20pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3RhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9ezM2MH1cclxuICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiUm90YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHJvdGF0aW9uKSA9PiBzZXRSb3RhdGlvbihyb3RhdGlvbil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y3JvcHBlZEltYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17Y3JvcHBlZEltYWdlU3R5bGV9IHNyYz17Y3JvcHBlZEltYWdlfSBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZGZpbGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgdXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RGaWxlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RyaWdnZXJGaWxlU2VsZWN0UG9wdXB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENob29zZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dDcm9wcGVkSW1hZ2V9PkNyb3A8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB3aWR0aDogXCIxMDB2d1wiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyQ3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI4MCVcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIyMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiNjAlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJCdXR0b25TdHlsZSA9IHtcclxuICBib3JkZXI6IFwiMXB4IHNvbGlkICNmNWY1ZjVcIixcclxuICBoZWlnaHQ6IFwiMjAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZWRJbWFnZVN0eWxlID0ge1xyXG4gIG1heFdpZHRoOiBcIjUwdndcIixcclxuXHJcbiAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQml0Y2ggZnJvbSAnLi9BcHBDcm9wL0JpdGNoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlRGFzaGJvYXJkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Qml0Y2gvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVVcGxvYWQoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJLYW1iaW5nXCIpO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgLy9pcyBsaWtlIGNvbXBvbmVudCBkaWQgbW91bnRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgWW91IGhhdmEgY2xpY2sgJHtjb3VudH1gO1xyXG4gIH0sIFtjb3VudF0pO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYWhhID0gKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZigpIHtcclxuICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZSFcIiksIDEwMDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBwcm9taXNlOyAvLyB3YWl0IHVudGlsIHRoZSBwcm9taXNlIHJlc29sdmVzICgqKVxyXG5cclxuICAgICAgYWxlcnQocmVzdWx0KTsgLy8gXCJkb25lIVwiXHJcbiAgICB9XHJcblxyXG4gICAgZigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrQ291bnQgPSAoKSA9PiB7XHJcbiAgICBzZXRDb3VudChjb3VudCArIDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgICA8bGFiZWw+e25hbWV9PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0NvdW50fT5jbGljazwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJjb25zdCBwaWNhID0gcmVxdWlyZShcInBpY2FcIikoKTtcclxuY29uc3QgY3JlYXRlSW1hZ2UgPSAodXJsKSA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGltYWdlKSk7XHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImNyb3NzT3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpOyAvLyBuZWVkZWQgdG8gYXZvaWQgY3Jvc3Mtb3JpZ2luIGlzc3VlcyBvbiBDb2RlU2FuZGJveFxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gIH0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFkaWFuQW5nbGUoZGVncmVlVmFsdWUpIHtcclxuICByZXR1cm4gKGRlZ3JlZVZhbHVlICogTWF0aC5QSSkgLyAxODA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdhcyBhZGFwdGVkIGZyb20gdGhlIG9uZSBpbiB0aGUgUmVhZE1lIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb21pbmljVG9iaWFzL3JlYWN0LWltYWdlLWNyb3BcclxuICogQHBhcmFtIHtGaWxlfSBpbWFnZSAtIEltYWdlIEZpbGUgdXJsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwaXhlbENyb3AgLSBwaXhlbENyb3AgT2JqZWN0IHByb3ZpZGVkIGJ5IHJlYWN0LWVhc3ktY3JvcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gLSBvcHRpb25hbCByb3RhdGlvbiBwYXJhbWV0ZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldENyb3BwZWRJbWcoaW1hZ2VTcmMsIHBpeGVsQ3JvcCwgcm90YXRpb24gPSAwKSB7XHJcbiAgY29uc3QgaW1hZ2UgPSBhd2FpdCBjcmVhdGVJbWFnZShpbWFnZVNyYyk7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICBjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgY29uc3Qgc2FmZUFyZWEgPSAyICogKChtYXhTaXplIC8gMikgKiBNYXRoLnNxcnQoMikpO1xyXG5cclxuICAvLyBzZXQgZWFjaCBkaW1lbnNpb25zIHRvIGRvdWJsZSBsYXJnZXN0IGRpbWVuc2lvbiB0byBhbGxvdyBmb3IgYSBzYWZlIGFyZWEgZm9yIHRoZVxyXG4gIC8vIGltYWdlIHRvIHJvdGF0ZSBpbiB3aXRob3V0IGJlaW5nIGNsaXBwZWQgYnkgY2FudmFzIGNvbnRleHRcclxuICBjYW52YXMud2lkdGggPSBzYWZlQXJlYTtcclxuICBjYW52YXMuaGVpZ2h0ID0gc2FmZUFyZWE7XHJcblxyXG4gIC8vIHRyYW5zbGF0ZSBjYW52YXMgY29udGV4dCB0byBhIGNlbnRyYWwgbG9jYXRpb24gb24gaW1hZ2UgdG8gYWxsb3cgcm90YXRpbmcgYXJvdW5kIHRoZSBjZW50ZXIuXHJcbiAgY3R4LnRyYW5zbGF0ZShzYWZlQXJlYSAvIDIsIHNhZmVBcmVhIC8gMik7XHJcbiAgY3R4LnJvdGF0ZShnZXRSYWRpYW5BbmdsZShyb3RhdGlvbikpO1xyXG4gIGN0eC50cmFuc2xhdGUoLXNhZmVBcmVhIC8gMiwgLXNhZmVBcmVhIC8gMik7XHJcblxyXG4gIC8vIGRyYXcgcm90YXRlZCBpbWFnZSBhbmQgc3RvcmUgZGF0YS5cclxuICBjdHguZHJhd0ltYWdlKFxyXG4gICAgaW1hZ2UsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS53aWR0aCAqIDAuNSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLmhlaWdodCAqIDAuNVxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2FmZUFyZWEsIHNhZmVBcmVhKTtcclxuXHJcbiAgLy8gc2V0IGNhbnZhcyB3aWR0aCB0byBmaW5hbCBkZXNpcmVkIGNyb3Agc2l6ZSAtIHRoaXMgd2lsbCBjbGVhciBleGlzdGluZyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gcGl4ZWxDcm9wLndpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBwaXhlbENyb3AuaGVpZ2h0O1xyXG5cclxuICAvLyBwYXN0ZSBnZW5lcmF0ZWQgcm90YXRlIGltYWdlIHdpdGggY29ycmVjdCBvZmZzZXRzIGZvciB4LHkgY3JvcCB2YWx1ZXMuXHJcbiAgY3R4LnB1dEltYWdlRGF0YShcclxuICAgIGRhdGEsXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS53aWR0aCAqIDAuNSAtIHBpeGVsQ3JvcC54KSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLmhlaWdodCAqIDAuNSAtIHBpeGVsQ3JvcC55KVxyXG4gICk7XHJcblxyXG4gIC8vIEFzIEJhc2U2NCBzdHJpbmdcclxuICAvLyByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpO1xyXG5cclxuICAvLyBBcyBhIGJsb2JcclxuICByZXR1cm4gYXdhaXQgcGljYS50b0Jsb2IoY2FudmFzLCBcImltYWdlL2pwZWdcIiwgMC45KS50aGVuKChibG9iKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkID0geyBibG9iOiBibG9iLCB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgfTtcclxuICAgIHJldHVybiBsb2FkO1xyXG4gIH0pO1xyXG5cclxuICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAvLyAgIHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gIC8vICAgICBjb25zdCBsb2FkID0geyBibG9iOiBibG9iLCB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikgfTtcclxuICAvLyAgICAgcmVzb2x2ZShsb2FkKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuICBcclxuXHJcblxyXG5jb25zdCBjcmVhdGVJbWFnZSA9IHVybCA9PlxyXG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZShpbWFnZSkpXHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yID0+IHJlamVjdChlcnJvcikpXHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2Nyb3NzT3JpZ2luJywgJ2Fub255bW91cycpIC8vIG5lZWRlZCB0byBhdm9pZCBjcm9zcy1vcmlnaW4gaXNzdWVzIG9uIENvZGVTYW5kYm94XHJcbiAgICBpbWFnZS5zcmMgPSB1cmxcclxuICB9KVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFkaWFuQW5nbGUoZGVncmVlVmFsdWUpIHtcclxuICByZXR1cm4gKGRlZ3JlZVZhbHVlICogTWF0aC5QSSkgLyAxODBcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VXBsb2FkKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpXHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICBjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodClcclxuICBjb25zdCBzYWZlQXJlYSA9IDIgKiAoKG1heFNpemUgLyAyKSAqIE1hdGguc3FydCgyKSlcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWFcclxuICBjYW52YXMuaGVpZ2h0ID0gc2FmZUFyZWFcclxuXHJcbiAgLy8gdHJhbnNsYXRlIGNhbnZhcyBjb250ZXh0IHRvIGEgY2VudHJhbCBsb2NhdGlvbiBvbiBpbWFnZSB0byBhbGxvdyByb3RhdGluZyBhcm91bmQgdGhlIGNlbnRlci5cclxuICBjdHgudHJhbnNsYXRlKHNhZmVBcmVhIC8gMiwgc2FmZUFyZWEgLyAyKVxyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKVxyXG4gIGN0eC50cmFuc2xhdGUoLXNhZmVBcmVhIC8gMiwgLXNhZmVBcmVhIC8gMilcclxuXHJcbiAgLy8gZHJhdyByb3RhdGVkIGltYWdlIGFuZCBzdG9yZSBkYXRhLlxyXG4gIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICBpbWFnZSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLndpZHRoICogMC41LFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2UuaGVpZ2h0ICogMC41XHJcbiAgKVxyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSlcclxuXHJcbiAgLy8gc2V0IGNhbnZhcyB3aWR0aCB0byBmaW5hbCBkZXNpcmVkIGNyb3Agc2l6ZSAtIHRoaXMgd2lsbCBjbGVhciBleGlzdGluZyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gcGl4ZWxDcm9wLndpZHRoXHJcbiAgY2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHRcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApXHJcblxyXG4gIFxyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGJsb2IpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy90aGlzIGlzIHVwbG9hZHMgdG8gcmVzZXQgYWxsIHRvIG51bGwgZm9yIHVwbG9hZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgcmVzb2x2ZShibG9iKVxyXG4gICAgfSwgJ2ltYWdlL2pwZWcnKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxBcHAgLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXN0b21lckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21lci9pbmRleFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPlxyXG4gICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8Q3VzdG9tZXJMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgbW9udGggPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNb250aCgpICsgMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgeWVhcjogeWVhcixcclxuICAgIG1vbnRoOiBtb250aCxcclxuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSksXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vZGFzaGJvYXJkP3llYXI9JHt0aGlzLnN0YXRlLnllYXJ9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTW9udGgobW9udGgpIHtcclxuICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBcIkZlYnVhcnlcIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gXCJBcHJpbFwiO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIFwiTWF5XCI7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XHJcbiAgICAgIGNhc2UgNzpcclxuICAgICAgICByZXR1cm4gXCJKdWx5XCI7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICByZXR1cm4gXCJBdWd1c3RcIjtcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIHJldHVybiBcIk9ja3RvYmVyXCI7XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgcmV0dXJuIFwiTm92ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICByZXR1cm4gXCJEaXNlbWJlclwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyBkYXRhOiBudWxsLCB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIHN0YXJ0RGF0ZTogZGF0ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmdldERhdGEoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgZm9yIGRhc2hib2FyZFwiLCB0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgeWVhciwgbW9udGggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSwgeWVhciwgbW9udGgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PkNoYW5nZSBNb250aCBhbmQgWWVhciA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWluZm9cIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KGRhdGEudG90YWxfc3VtID8gZGF0YS50b3RhbF9zdW0gOiAwKS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+VG90YWwgU2FsZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IDxoND57ZGF0YS51c2Vyc308L2g0PiA6IDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5DdXN0b21lcnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VtW3llYXJdID8gZGF0YS5zdW1beWVhcl0gOiAwLjBcclxuICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlllYXJseSBTYWxlcyA6IHt5ZWFyfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlJNIHtwYXJzZUZsb2F0KGRhdGEubW9udGhbbW9udGhdKS50b0ZpeGVkKDIpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+TW9udGx5IFNhbGVzIDoge3RoaXMuaGFuZGxlTW9udGgobW9udGgpfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19IC8+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiQmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwic2FsZXNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbCBkZXNpZ24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVG90YWwgU2FsZXMgQnkgTW9udGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGVzdHNcclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcIk9yZGVyIENvdW50XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyY2hcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoQXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNb250aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhciBmaXhlZD1cImJvdHRvbVwiIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibS0wIHAtMCBwbC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xIFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTEgXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL3Zpc2l0b3JcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID4gPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdpbmF0ZU9yZGVyIGZyb20gXCIuLi9jb21wb25lbnQvb3JkZXIvUGFnaW5hdGVPcmRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlcnNcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFBhZ2luYXRlT3JkZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBDdXN0b21lclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pPiBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT4gRGV2b3BzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvdmlzaXRvclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1leWVcIj48L2k+IFZpc2l0b3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=