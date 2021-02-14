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
      setTable({
        Country: countCountry
      });
    } else if (target === "State") {
      const state = data.map(ind => {
        return ind.state;
      });
      const cstate = countObjs(state);
      setTable({
        State: cstate
      });
    } else if (target === "City") {
      const city = data.map(ind => ind.city);
      const ccity = countObjs(city);
      setTable({
        City: ccity
      });
    } else if (target === "IP") {}
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
    defaultValue: {
      label: 2002,
      value: 2002
    },
    onChange: selectOnChange
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "Country"
  }, "Country"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "State"
  }, "State"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "City"
  }, "City"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IP"
  }, "IP")), table && react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
    striped: true,
    bordered: true,
    hover: true,
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, Object.keys(table)[0]), react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Table"))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, table[Object.keys(table)[0]].map((x, i) => {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, x[Object.keys(x)[i]]);
  }))))), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null)));
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

      if (data.category) {
        this.setState({
          categoryId: data.category.id
        });
      }

      if (data.productImage) {
        this.setState({
          image: data.productImage
        });
      }
    });
  }

  handleSave() {
    const {
      data,
      name,
      price,
      stock,
      desc,
      categoryId,
      image,
      details
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
          desc: desc,
          image: image,
          category: categoryId,
          details: details
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
    }), details && gotnulldata ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditProductDetails__WEBPACK_IMPORTED_MODULE_7__.default, {
      fordetails: details,
      datachange: this.handleDetailChange
    }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductDetails__WEBPACK_IMPORTED_MODULE_8__.default, {
      detailname: this.handleDetailsNull
    })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-4 border rounded"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, image ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/images/" + image,
      style: {
        width: "130px",
        height: "130px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: this.handleRemoveImage
    }, "Remove Image"))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "No Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-3"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: () => this.setState({
        showAddImage: true
      })
    }, "Add Image")))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col"
    }, categoryId ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditCat__WEBPACK_IMPORTED_MODULE_2__.default, {
      categoryId: categoryId,
      handleCategory: this.handleCategory
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: () => this.setState({
        categoryId: null
      })
    }, "Remove Category")) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Categories__WEBPACK_IMPORTED_MODULE_3__.default, {
      selected: this.handleSelect
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
      if (this.category) this.categoryInput.value = "";
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

    this.state = {
      limit: 10,
      data: null,
      pagination: null,
      active: 0,
      product: null,
      categoryData: null,
      categoryFilter: null,
      stockgreat: null,
      stockless: null
    };
    this.productInput = null;
    this.categoryInput = null;
    this.stockgreatInput = null;
    this.stocklessInput = null;

    this.product = e => {
      this.productInput = e;
    };

    this.category = e => {
      this.categoryInput = e;
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
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Category"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
      ref: this.category,
      onChange: e => this.setState({
        categoryFilter: e.target.value
      }),
      className: "form-control",
      style: {
        width: "12em"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      value: "NONE"
    }, "Filter By"), categoryData && categoryData.map(data => react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: data.id,
      value: data.name
    }, data.name)))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
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
      className: "overflow-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
      class: "table table-dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "#"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Product"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
      scope: "col"
    }, "Category", " ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      className: "btn btn-primary",
      to: "/category"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-edit"
    }), " Edit")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
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
    }, i), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.pictures.map((a, b) => b === 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: b,
      src: "/images/" + a.filename,
      alt: "",
      style: {
        width: "50px",
        height: "50px"
      }
    }) : null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productName), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.category ? x.category.name : ""), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productPrice), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productStock), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
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
      className: "navbar navbar-dark bg-dark m-0 p-0 px-4"
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
      className: "container",
      style: {
        flex: 1,
        padding: "20px"
      }
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
      class: "fas fa-list-alt"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9GaWVsZEFycmF5c0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL1N0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL0JpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL3V0aWxzL2Nyb3BJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvRWFzeUNyb3AuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL01vYmlsZURhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvTW9iaWxlVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9jcm9wSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL2Nyb3BJbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvQXBwQ3JvcC9BcHAuY3NzPzc5M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL0FwcENyb3AvaW5kZXguY3NzPzY5NjYiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBheWxvYWQiLCJzZXRTdGF0ZSIsInNob3dDcm9wIiwic3JjIiwidXBsb2FkIiwic2hvd3RvcGJhciIsInN0YXRlIiwiaWRFZGl0IiwibW9iaWxlVmlldyIsInNob3dTaWRlYmFyIiwic2hvd0Vhc3lDcm9wRGlhbG9nIiwidXBkYXRlVmlld1N0YXRlIiwiYmluZCIsInRvZ2dsZVNpZGVCYXIiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmVuZGVyIiwiY29udGFpbmVyQ2xhc3MiLCJoYW5kbGVTaG93Q3JvcCIsImhhbmRsZUNsb3NlQ3JvcCIsImhhbmRsZWNhbmNlbHRvcHgiLCJDcm9wcGluZyIsImltYWdlIiwiaW1hZ2VSZWYiLCJjcm9wIiwibWFrZUNsaWVudENyb3AiLCJlIiwibG9hZGluZyIsImNyb3BwZWRJbWFnZVVybCIsImltYWdlQmxvYiIsInNob3dDcm9wSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbExvYWQiLCJjYW5jZWx0b3B4IiwieCIsInkiLCJ3aWR0aCIsImFzcGVjdCIsImhlaWdodCIsImdldENyb3BwZWRJbWciLCJmaWxlTmFtZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiYmxvYiIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJmaWxlVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xvc2VUb3BYIiwiaGFuZGxlQmFja0FjdGlvbiIsImhhbmRsZVVwbG9hZCIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsImhhbmRsZVNob3dDcm9wSW1hZ2UiLCJkYXRhVVJMdG9GaWxlIiwiZGF0YVVybCIsInJlcyIsImZldGNoIiwiRmlsZSIsInR5cGUiLCJWaXNpdG9yIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInRhYmxlIiwic2V0VGFibGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJsb2ciLCJjYXRjaCIsImNvdW50T2JqcyIsImFyciIsIm9iaiIsIk9iamVjdCIsImNyZWF0ZSIsImZvckVhY2giLCJpdGVtIiwic2VsZWN0T25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvdW50cnkiLCJtYXAiLCJpbmQiLCJDb3VudHJ5IiwiY291bnRDb3VudHJ5IiwiY3N0YXRlIiwiU3RhdGUiLCJjaXR5IiwiY2NpdHkiLCJDaXR5IiwidmlzaXQiLCJzaW5nbGVkYXRhIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImxlbmd0aCIsImxhYmVsIiwia2V5cyIsImkiLCJQcm9kdWN0TGlzdCIsImRhdGUiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJsaW1pdCIsInJhbmdlIiwiTWF0aCIsImNlaWwiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGUiLCJhY3RpdmUiLCJwYWdlIiwiaWQiLCJBeGlvcyIsIm1ldGhvZCIsInVybCIsInJlc3BvbnNlIiwiaGFuZGxlUGFnZSIsInJlZnMiLCJlbWFpbCIsImRlZmF1bHREYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGFnaW5hdGVEYXRhIiwiYXJyYXkiLCJwYWdlX3NpemUiLCJwYWdlX251bWJlciIsInNsaWNlIiwibW91bnRlZCIsImhhbmRsZUVkaXQiLCJlZGl0IiwiaXRlbXMiLCJudW1iZXIiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImZvcm1hdERhdGUiLCJjcmVhdGVkQXQiLCJNb2RhbCIsImNvbG9yIiwiZGVsZXRlIiwiTW9kYWxPcmRlciIsIk9yZGVyIiwic3RhdHVzIiwibG9jYXRpb24iLCJmbGV4IiwicGFkZGluZyIsIm9yZGVyZGV0YWlscyIsInByb2R1Y3RJbWFnZSIsInByb2R1Y3ROYW1lIiwicXR5IiwicHJvZHVjdFByaWNlIiwidG90YWwiLCJhZGRyZXNzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwb3N0Y29kZSIsInBob25lTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsInBheXBhbCIsImFtb3VudCIsImN1cnJlbmN5IiwiaGFuZGxlUEVORElORyIsImhhbmRsZVByb2Nlc3NpbmciLCJoYW5kbGVEZWxpdmVyaW5nIiwiaGFuZGxlQ29tcGxldGVkIiwiUGFnaW5hdGVPcmRlciIsInF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJvcmRlcklkIiwiZ3JlYXRlciIsImxlc3MiLCJ1c2VyIiwiZ2V0VGltZSIsImRhdGVTYW1lIiwic2V0RGF0ZSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImRlbGV0ZWQiLCJvcmRlciIsInBhdGhuYW1lIiwiaGFuZGxlRGVsZXRlIiwicGljYSIsInJlcXVpcmUiLCJjcmVhdGVJbWFnZSIsIkltYWdlIiwic2V0QXR0cmlidXRlIiwiZ2V0UmFkaWFuQW5nbGUiLCJkZWdyZWVWYWx1ZSIsIlBJIiwiQ2FudmFzQ3JvcCIsImltYWdlU3JjIiwicGl4ZWxDcm9wIiwicm90YXRpb24iLCJtYXhTaXplIiwibWF4Iiwic2FmZUFyZWEiLCJzcXJ0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiZ2V0SW1hZ2VEYXRhIiwicHV0SW1hZ2VEYXRhIiwicm91bmQiLCJsb2FkIiwiQ2F0ZWdvcnlMaXN0Iiwic3ViY2F0ZWdvcnkiLCJzZXRzdWJjYXRlZ29yeSIsInN1YnR3byIsInNldHN1YnR3byIsImRlbGNhdCIsInNldGRlbGNhdCIsImRlbHN1YiIsInNldGRlbHN1YiIsImRlbHN1YnR3byIsInNldGRlbHN1YnR3byIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJwYXJhbXMiLCJyZXNldERlbGV0ZUl0ZW0iLCJzdWJDYXRlZ29yeVNlbGVjdCIsInN1YnR3b0NhdGVnb3J5U2VsZWN0IiwiZGVsZXRlQ2F0ZWdvcnkiLCJlcnIiLCJuZXdjYXQiLCJzIiwiZGVsZXRlU3ViQ2F0ZWdvcnkiLCJuZXdzdWIiLCJkZWxldGVTdWJ0d29DYXRlZ29yeSIsIm5ld3N1YnR3byIsIm1pbldpZHRoIiwic3ViIiwiaXMiLCJzdWJjYXRlZ29yeW5hbWUiLCJzdWJ0Iiwic3VidHdvY2F0ZWdvcnluYW1lIiwiQ3JvcHBlcnYyIiwic2V0Q3JvcCIsInNldFJvdGF0aW9uIiwiem9vbSIsInNldFpvb20iLCJjcm9wcGVkSW1hZ2UiLCJzZXRDcm9wcGVkSW1hZ2UiLCJjcm9wcGVkQXJlYVBpeGVscyIsInNldENyb3BwZWRBcmVhUGl4ZWxzIiwidXNlQ2FsbGJhY2siLCJjcm9wcGVkQXJlYSIsIkNsb3NlRGlhbG9nIiwiY2xvc2VEaWFsb2ciLCJjbGVhclN0YXRlIiwic2hvd0Nyb3BwZWRJbWFnZSIsIlVwbG9hZEltYWdlIiwic2hvd0RpYWxvZyIsImRpYWxvZ1N0eWxlIiwiY29udGFpbmVyU3R5bGUiLCJjb250YWluZXJCdXR0b25TdHlsZSIsImNvbnRhaW5lckNyb3BwZXJTdHlsZSIsImNyb3BwZXJTdHlsZSIsInNsaWRlclN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZGl2RGlhbG9nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImNyb3BwZWRJbWFnZVN0eWxlIiwibWF4V2lkdGgiLCJNQ2F0ZWdvcnkiLCJpbmRleCIsImFkZGNhdCIsImNhdGVnb3JpZXMiLCJmaW5kIiwiZGF0YXMiLCJpZHgiLCJ1bmRlZmluZWQiLCJuZXdkYXRhbGlzdCIsImRhdGFsaXN0IiwiaXgiLCJjYXRlZ29yeW5hbWUiLCJuZXdEYXRhIiwicG9zdCIsImRpc2FibGUiLCJjYXRlZ29yeWlkIiwiY2hhbmdlY2F0ZWdvcnkiLCJhZGRzdWIiLCJjYXQiLCJjYXRpIiwic3ViY2F0ZWdvcnlpZCIsImFkZHN1YnR3byIsImFkZHN1YnR3b2NhdCIsIml0d28iLCJhZHN0IiwiYWRzdGkiLCJzdWJ0d29jYXRlZ29yeSIsInN1YnR3b2NhdGVnb3J5aWQiLCJidXRjYXQiLCJhZGRtb3Jlc3ViIiwiYWRkbW9yZSIsImFpZHgiLCJidXRzdWIiLCJzdWJ0d29pbmR4IiwiYWRkbW9yZXN1YnR3byIsImFtc2kiLCJzdWJjYXRpbml0Iiwic2NpZHgiLCJlbmFibGUiLCJyZW1vdmVjYXQiLCJhIiwicmVtb3ZlY2F0ZWdvcnkiLCJzdWJpIiwicmVtb3ZlZCIsIm1vZCIsIm1vZGluZHgiLCJpc3ViIiwieiIsInJlbW92ZXN1YnR3byIsImZpbCIsImNhdGlkeCIsInN1YmlkeCIsInN1YmRhdGEiLCJjYXRlZ29yeSIsIm1vZGlmaWVkIiwiaW5jYXRpbmR4IiwiaW5jYXRzdWJpZHgiLCJpbmNhdHN1YnR3b2lkeCIsImV2ZW50Iiwic3VidHdvZGF0YSIsIlN1YnR3b2NhdGVnb3J5Iiwic3RpIiwic3VidHdvbmV3IiwiY2F0c3VidHdvIiwiY2F0c3VidHdvaWR4IiwiY2F0c3ViIiwiY2F0c3ViaWR4Iiwic3VidHdvaWR4IiwiaGFuZGxlQXhpb3MiLCJoYW5kbGVJbnB1dCIsImtleSIsImhhbmRsZVJlbW92ZUNhdGVnb3J5IiwiaGFuZGxlQWRkQ2F0ZWdvcnkiLCJoYW5kbGVTdWJJbnB1dCIsImRiIiwiZGJpeCIsImRicyIsImRiaSIsImhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5IiwiaGFuZGxlQWRkTW9yZVN1YiIsInN1YjIiLCJpbmR0d28iLCJoYW5kbGVTdWJUd29JbnB1dCIsInNkYmkiLCJoYW5kbGVSZW1vdmVTdWJUd29DYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWJUd28iLCJoYW5kbGVBZGRzdWJ0d29jYXRlZ29yeSIsImhhbmRsZUFkZFN1YkNhdGVnb3J5IiwiUERldGFpbHMiLCJkZXRhaWxzIiwiY29uY2F0IiwiZGV0YWlsbmFtZSIsImRhdGFkZXNjIiwicmVtb3ZlIiwicmVtb3ZlZGV0YWlsIiwibmV3ZGV0YWlscyIsImRldGFpbCIsIm5ld2RldGFpbGRhdGFkZXNjIiwiaGFuZGxlQ2hhbmdlRGV0YWlsTmFtZSIsImhhbmRsZUNoYW5nZURhdGFEZXNjIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlQWRkIiwiUGljdHVyZSIsInBpY3R1cmUiLCJpbWFnZWlkIiwiaW1hZ2VuYW1lIiwiZmlsZUlucHV0IiwiaW5wdXRGaWxlIiwiZmkiLCJpbWFnZWRlbCIsInBpY3R1cmV1cCIsIm1lc3NhZ2UiLCJyZW1vdmVwaWN0dXJlIiwiYWxlcnQiLCJmaWxlcyIsInNpemUiLCJ0YXJnZXRpbWFnZSIsImxvYWRJbWFnZSIsImltZyIsInBpeGVsIiwicmF0aW8iLCJpbWdjb21wIiwiY29tcHJlc3NJbWFnZSIsImJhc2U2NGRhdGEiLCJ0b0RhdGFVUkwiLCJzaG93RWFzeUNyb3AiLCJzZXRUaW1lb3V0Iiwib3JpZW50YXRpb24iLCJsb2FkZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaGFuZGxlQWRkSW1hZ2UiLCJoYW5kbGVDbG9zZUVhc3lDcm9wIiwiaW1hZ2VVcGxvYWQiLCJzaG93UGljdHVyZSIsInNob3dCbGFja1NjcmVlbiIsImhhbmRsZVJlbW92ZUltYWdlIiwib25TZWxlY3RGaWxlIiwiaGFuZGxlSW1hZ2VBZGQiLCJzdWJtaXREaWFsb2ciLCJjcnQiLCJvZmZTY3JlZW5DYW52YXMiLCJyZXNpemUiLCJpbWFnZUNDUyIsIlByb2R1Y3RBZGQiLCJwcmljZSIsInN0b2NrIiwiZGVzYyIsImltYWdlcyIsImhpc3RvcnkiLCJzaG93YnV0dG9uIiwic2hvd0Nyb3BwZXJEaWFsb2ciLCJoYW5kU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlVXBsb2FkZWQiLCJjbG9zZUNyb3AiLCJoYW5kbGVSZW1vdmVQaWN0dXJlIiwiaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkiLCJoYW5kbGVSZW1vdmVEZXRhaWwiLCJoYW5kbGVOZXdEZXRhaWxzIiwiaGFuZGxlU2F2ZUJ1dHRvbiIsIkFkZFByb2R1Y3QiLCJjYXRlZ29yeUlkIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzYXZlQnV0dG9uIiwidmFsaWRhdGUiLCJpbWFnZUlkIiwiaGFuZGxlRGV0YWlsTmFtZSIsImhhbmRsZVNlbGVjdCIsImhhbmRsZUFkZFByb2R1Y3QiLCJDYXRlZ29yaWVzIiwic2hvdyIsImNhdGVnb3J5RGF0YSIsInNlbGVjdGVkIiwiaGFuZGxlQ2F0ZWdvcnkiLCJDYXRlZ29yeUVkaXQiLCJDcm9wRGlhbG9nIiwiYWRkSW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJFZGl0Q2F0IiwiRWRpdFByb2R1Y3REZXRhaWxzIiwiZGF0YWluZGV4IiwiZGF0YWNoYW5nZSIsImZvcmRldGFpbHMiLCJoYW5kbGVEZXRhaWxDaGFuZ2UiLCJoYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZSIsImhhbmRsZVJlbW92ZUl0ZW0iLCJoYW5kbGVBZGREZXRhaWxzIiwiRWRpdGluZyIsImdvdG51bGxkYXRhIiwic2hvd0FkZEltYWdlIiwicHJvZHVjdFN0b2NrIiwicHJvZHVjdERlc2MiLCJwcm9kdWN0RGV0YWlsc3MiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGV0YWlsc051bGwiLCJJbWFnZUxpc3QiLCJpbWFnZUNsaWNrZWQiLCJmaWxlbmFtZSIsIk1vZGFsUHJvZCIsIlByb2R1Y3REZXRhaWxzIiwiZXZ0IiwibmV3U2hhcmVob2xkZXJzIiwic2hhcmVob2xkZXJzIiwic2hhcmVob2xkZXIiLCJzaWR4IiwibmV3U2hhcmVob2xkZXJkZXNjIiwiZGV0YWlsbmFtZWhhc2lucHV0IiwiZGF0YWRlc2NoYXNpbnB1dCIsImhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSIsImhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZSIsImhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyIiwiaGFuZGxlQWRkU2hhcmVob2xkZXIiLCJwcm9kdWN0IiwicHJvZHVjdElucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInN0b2NrZ3JlYXQiLCJzdG9ja2dyZWF0SW5wdXQiLCJzdG9ja2xlc3MiLCJzdG9ja2xlc3NJbnB1dCIsImNhdGVnb3J5RmlsdGVyIiwicGljdHVyZXMiLCJiIiwiVXBsb2FkIiwiYWRkaW1hZ2UiLCJyZW5kZXJGaWVsZCIsImlucHV0IiwibWV0YSIsInRvdWNoZWQiLCJyZW5kZXJNZW1iZXJzIiwiZmllbGRzIiwic3VibWl0RmFpbGVkIiwibWVtYmVyIiwiaGFuZGxlVGVrYW4iLCJGaWVsZEFycmF5c0Zvcm0iLCJwcmlzdGluZSIsInJlc2V0Iiwic3VibWl0dGluZyIsInJlZHV4Rm9ybSIsImZvcm0iLCJGb3JtUmVkdXgiLCJzdG9yZSIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEZvcm1SZWR1Y2VyIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJjcmVhdGVTdG9yZSIsInZhbHVlcyIsImVycm9ycyIsIm1lbWJlcnMiLCJfZXJyb3IiLCJtZW1iZXJzQXJyYXlFcnJvcnMiLCJtZW1iZXJJbmRleCIsIm1lbWJlckVycm9ycyIsIkJpdGNoIiwiaW5wdXRSZWYiLCJSZWFjdCIsInRyaWdnZXJGaWxlU2VsZWN0UG9wdXAiLCJjdXJyZW50IiwiY2xpY2siLCJzZXRJbWFnZSIsInNldENyb3BwZWRBcmVhIiwiY3JvcHBlZEFyZWFQZXJjZW50YWdlIiwib25Eb3dubG9hZCIsImdlbmVyYXRlRG93bmxvYWQiLCJtYXJnaW5SaWdodCIsInByZXZpZXdVcmwiLCJhbmNob3IiLCJkb3dubG9hZCIsImhyZWYiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwic3BhY2luZyIsInRpdGxlIiwiRWFzeUNyb3AiLCJ1c2VSZWYiLCJjbGFzc2VzIiwicmF0aW9waXhlbCIsImltZ2NycyIsInVwbG9hZGZpbGUiLCJnZXRVcGxvYWQiLCJib3JkZXIiLCJNb2JpbGVEYXNoYm9hcmQiLCJNb2JpbGVVcGxvYWQiLCJzZXROYW1lIiwiY291bnQiLCJzZXRDb3VudCIsImhhbmRsZUNoYW5nZSIsImhhaGEiLCJmIiwicHJvbWlzZSIsImhhbmRsZUNsaWNrQ291bnQiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwiQ3VzdG9tZXIiLCJub3ciLCJEYXNoYm9hcmQiLCJzdGFydERhdGUiLCJnZXREYXRhIiwiaGFuZGxlTW9udGgiLCJ0ZXh0QWxpZ24iLCJ0b3RhbF9zdW0iLCJ0b0ZpeGVkIiwidXNlcnMiLCJzdW0iLCJjaGFydCIsImhBeGlzIiwidkF4aXMiLCJNb2JpbGVTaWRlQmFyIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtB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RixDQVhGLEVBb0JFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLGVBQVMsRUFBQztBQUFiLE1BTEYsV0FERixDQXBCRixFQThCRSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxXQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLGNBREYsQ0E5QkYsRUF1Q0UsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsYUFETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsV0FBSyxFQUFDO0FBQVQsTUFMRixnQkFERixDQXZDRixFQWdERSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsV0FBSyxFQUFDO0FBQVQsTUFMRixZQURGLENBaERGLEVBeURFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLFdBQUssRUFBQztBQUFULE1BTEYsYUFERixDQXpERixDQURGLENBREY7QUF1RUQ7O0FBekU0QyxDOzs7Ozs7Ozs7Ozs7QUNIL0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6InJlYWN0QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vcm91dGVyL1NpZGViYXJcIjtcclxuaW1wb3J0IE9yZGVycyBmcm9tIFwiLi9yb3V0ZXIvT3JkZXJzXCI7XHJcbmltcG9ydCBDdXN0b21lciBmcm9tIFwiLi9yb3V0ZXIvQ3VzdG9tZXJcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9yb3V0ZXIvRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL3JvdXRlci9Qcm9kdWN0XCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0XCI7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0aW5nXCI7XHJcbmltcG9ydCBDcm9wcGluZyBmcm9tIFwiLi9Dcm9wcGluZ1wiO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vY29tcG9uZW50L29yZGVyL09yZGVyXCI7XHJcbmltcG9ydCBDYXRlZ29yeUVkaXQgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3J5RWRpdFwiO1xyXG5pbXBvcnQgRm9ybVJlZHV4IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9Gb3JtUmVkdXhcIjtcclxuaW1wb3J0IFByb2R1Y3RBZGQgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZFwiO1xyXG5pbXBvcnQgTW9iaWxlU2lkZUJhciBmcm9tIFwiLi9yb3V0ZXIvTW9iaWxlU2lkZUJhclwiO1xyXG5pbXBvcnQgTW9iaWxlVXBsb2FkIGZyb20gXCIuL21vYmlsZWNvbXAvTW9iaWxlVXBsb2FkXCI7XHJcbmltcG9ydCBNb2JpbGVEYXNoYm9hcmQgZnJvbSBcIi4vbW9iaWxlY29tcC9Nb2JpbGVEYXNoYm9hcmRcIjtcclxuaW1wb3J0IEVhc3lDcm9wIGZyb20gXCIuL21vYmlsZWNvbXAvRWFzeUNyb3BcIjtcclxuaW1wb3J0IENyb3BwZXJ2MiBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9Dcm9wcGVydjJcIjtcclxuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYXRlZ29yeUxpc3RcIjtcclxuaW1wb3J0IFZpc2l0b3IgZnJvbSBcIi4vY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICAgIGlkRWRpdDogbnVsbCxcclxuICAgICAgbW9iaWxlVmlldzogZmFsc2UsXHJcbiAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICBzaG93dG9wYmFyOiB0cnVlLFxyXG4gICAgICBzaG93RWFzeUNyb3BEaWFsb2c6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlID0gdGhpcy51cGRhdGVWaWV3U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlU2lkZUJhciA9IHRoaXMudG9nZ2xlU2lkZUJhci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvd0Nyb3AgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wOiB0cnVlLFxyXG4gICAgICBzcmM6IHBheWxvYWQuc3JjLFxyXG4gICAgICB1cGxvYWQ6IHBheWxvYWQudXBsb2FkLFxyXG4gICAgICBzaG93dG9wYmFyOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQ3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogZmFsc2UsIHNob3d0b3BiYXI6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2lkZUJhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93U2lkZWJhcjogIXRoaXMuc3RhdGUuc2hvd1NpZGViYXIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZWNhbmNlbHRvcHggPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3A6IGZhbHNlLFxyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIHVwbG9hZDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVWaWV3U3RhdGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXdTdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5tb2JpbGVWaWV3ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9iaWxlVmlldzogdHJ1ZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBjb250YWluZXJDbGFzcyA9IFwiZC1mbGV4XCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGVWaWV3KSBjb250YWluZXJDbGFzcyA9IFwiY29udGFpbmVyXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3d0b3BiYXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5zaG93U2lkZWJhciA/IG51bGwgOiA8TW9iaWxlU2lkZUJhciAvPn08L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2lkZWJhciA/IDxTaWRlYmFyIC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIHJlbmRlcj17KHByb3BzKSA9PiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL29yZGVyc1wiIHJlbmRlcj17KHByb3BzKSA9PiA8T3JkZXJzIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q3VzdG9tZXIgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdFwiIHJlbmRlcj17KHByb3BzKSA9PiA8UHJvZHVjdCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QWRkUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLmhhbmRsZVNob3dDcm9wfVxyXG4gICAgICAgICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5RWRpdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi92aWV3b3JkZXJcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVyIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXRcIiByZW5kZXI9eyhwcm9wcykgPT4gPEVkaXRpbmcgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5TGlzdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8UHJvZHVjdEFkZCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlzaXRvclwiIHJlbmRlcj17KHByb3BzKSA9PiA8VmlzaXRvciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICA8Q3JvcHBpbmdcclxuICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuc3RhdGUuc2hvd0Nyb3B9XHJcbiAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5zcmN9XHJcbiAgICAgICAgICAgIHVwbG9hZD17dGhpcy5zdGF0ZS51cGxvYWR9XHJcbiAgICAgICAgICAgIGNhbmNlbHRvcHg9e3RoaXMuaGFuZGxlY2FuY2VsdG9weH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3JvcC5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wcGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBhc3BlY3Q6IDEgLyAxLFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UpID0+IHtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IChjcm9wKSA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IChjcm9wKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dDcm9wSW1hZ2UgPSAoZSkgPT4ge307XHJcbiAgY2FuY2VsTG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVCYWNrQWN0aW9uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcEltYWdlOiBmYWxzZSB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVwbG9hZCh0aGlzLnN0YXRlLmltYWdlQmxvYiwgdGhpcy5jYW5jZWxMb2FkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlU2hvd0Nyb3BJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlVG9wWCA9IChlKSA9PntcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jYW5jZWxMb2FkKCk7IC8vY2F1dGlvbiB0aGlzIGlzIG5ld1xyXG4gICAgICB0aGlzLnByb3BzLmNhbmNlbHRvcHgoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcHBlZEltYWdlVXJsLCBzaG93Q3JvcEltYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlVG9wWH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3Nob3dDcm9wSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3A9e3RoaXMuc3RhdGUuY3JvcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjcm9wcGVkSW1hZ2VVcmwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Q3JvcEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JvcFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2cgY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTVcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPiBVcGxvYWRpbmcgSW1hZ2UuLi4uXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRhdGFVUkx0b0ZpbGUoZGF0YVVybCwgZmlsZU5hbWUpIHtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGF0YVVybCk7XHJcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XHJcbiAgcmV0dXJuIG5ldyBGaWxlKFtibG9iXSwgZmlsZU5hbWUsIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpc2l0b3IoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJhcGkvYWRtaW4vdGVzdC90ZXN0XCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gY291bnRPYmpzKGFycikge1xyXG4gICAgLy8gU28gdGhlIG9iamVjdCBkb2Vzbid0IGluaGVyaXQgZnJvbSBPYmplY3QucHJvdG90eXBlIGFuZCBhdm9pZHMgcHJvcGVydHlcclxuICAgIC8vIG5hbWUgY29sbGlzaW9uc1xyXG4gICAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICBpZiAob2JqW2l0ZW1dKSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dID0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0T25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGFyZ2V0ID09PSBcIkNvdW50cnlcIikge1xyXG4gICAgICBjb25zdCBjb3VudHJ5ID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmQuQ291bnRyeTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50Q291bnRyeSA9IGNvdW50T2Jqcyhjb3VudHJ5KTtcclxuXHJcbiAgICAgIHNldFRhYmxlKHsgQ291bnRyeTogY291bnRDb3VudHJ5IH0pO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiU3RhdGVcIikge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5kLnN0YXRlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNzdGF0ZSA9IGNvdW50T2JqcyhzdGF0ZSk7XHJcbiAgICAgIHNldFRhYmxlKHsgU3RhdGU6IGNzdGF0ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBcIkNpdHlcIikge1xyXG4gICAgICBjb25zdCBjaXR5ID0gZGF0YS5tYXAoKGluZCkgPT4gaW5kLmNpdHkpO1xyXG4gICAgICBjb25zdCBjY2l0eSA9IGNvdW50T2JqcyhjaXR5KTtcclxuICAgICAgc2V0VGFibGUoeyBDaXR5OiBjY2l0eSB9KTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBcIklQXCIpIHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZGF0YSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbmQuc3RhdGU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IENvdW50cnkgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbmQuQ291bnRyeTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdmlzaXQgPSBjb3VudE9ianMoc3RhdGUpO1xyXG4gICAgY29uc3Qgc2luZ2xlZGF0YSA9IGRhdGFbMF07XHJcbiAgICBjb25zdCBuYW1lID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2luZ2xlZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5hbWVcIiwgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICB7ZGF0YSAmJiA8aDM+VG90YWwgVmlzaXRvciA6IHtkYXRhLmxlbmd0aH08L2gzPn1cclxuXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXt7IGxhYmVsOiAyMDAyLCB2YWx1ZTogMjAwMiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NlbGVjdE9uQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb3VudHJ5XCI+Q291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXRlXCI+U3RhdGU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaXR5XCI+Q2l0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklQXCI+SVA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAge3RhYmxlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPntPYmplY3Qua2V5cyh0YWJsZSlbMF19PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlRhYmxlPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWJsZVtPYmplY3Qua2V5cyh0YWJsZSlbMF1dLm1hcCgoeCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGg+e3hbT2JqZWN0LmtleXMoeClbaV1dfTwvdGg+O1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG4gIH07XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9jdXN0b21lcmApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZSh0aGlzLnN0YXRlLmFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUVkaXQoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuZWRpdChpZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcbiAgICB0aGlzLnJlZnMuZW1haWwudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXJlZCBPbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guZmlyc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJtb2RhbFwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gRGVsZXRlIE9yZGVyIHt0aGlzLnByb3BzLmlkfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsb3JkZXJcIiArIHRoaXMucHJvcHMubmFtZSArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcclxuICAgICAgICAgIFwibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBPcmRlciBTdGF0dXMgV2lsbCBDaGFuZ2UgdG8ge3RoaXMucHJvcHMubmFtZX0/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWxPcmRlciBmcm9tIFwiLi9Nb2RhbE9yZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBudWxsLCBzdGF0dXM6IG51bGwgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUEVORElORyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBFTkRJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNvbXBsZXRlZCA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVEZWxpdmVyaW5nID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiREVMSVZFUklOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2Nlc3NpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJQUk9DRVNTSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvb3JkZXJzXCI+T3JkZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgVmlldyBPcmRlclxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMyBtdC0zXCI+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pk9yZGVyIExpc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vcmRlcmRldGFpbHMubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHgucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5xdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS50b3RhbH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGF0YSl9ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+Q3VzdG9tZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFkZHJlc3MgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENpdHkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNpdHl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBvc3Rjb2RlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDb3VudHJ5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXIgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBob25lTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1Pk9yZGVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgT3JkZXIgRGF0ZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUGF5bWVudCBNZXRob2QgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXltZW50TWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0dXMgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57c3RhdHVzICYmIHN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZWQgQXQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS51cGRhdGVfYXR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+UGF5UGFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQW1vdW50IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5cGFsLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ3VycmVuY3kgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgZGF0YS5wYXlwYWwuc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PkFjdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQRU5ESU5HKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUEVORElOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVBFTkRJTkd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBFTkRJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQcm9jZXNzaW5nKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUFJPQ0VTU0lOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVByb2Nlc3Npbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBST0NFU1NJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGl2ZXJpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJERUxJVkVSSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlRGVsaXZlcmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiREVMSVZFUklOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDb21wbGV0ZWQoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckNPTVBMRVRFRFwiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlQ29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJDT01QTEVURURcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZU9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgc3RhdHVzRmlsdGVyOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL29yZGVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXNcIiwgZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdERhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGFyciwgcXVlcnkpID0+IHtcclxuICAgIHJldHVybiBhcnIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICB9O1xyXG5cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG5cclxuICAgIC8vIGxldCB0b0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgLy8gbGV0IGZvcm1hdERhdGUgPVxyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXREYXRlKCkgK1xyXG4gICAgLy8gICBcIi1cIih0b0Zvcm1hdC5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcixcclxuICAgICAgZnJvbURhdGUsXHJcbiAgICAgIHRvRGF0ZSxcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZ3JlYXRlcixcclxuICAgICAgbGVzcyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC51c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XHJcbiAgICAgIGlmIChzdGF0dXNGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmcm9tRGF0ZSAmJiB0b0RhdGUpIHtcclxuICAgICAgaWYgKG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgPT09IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgbGV0IGRhdGVTYW1lID0gbmV3IERhdGUodG9EYXRlKTtcclxuICAgICAgICBkYXRlU2FtZS5zZXREYXRlKGRhdGVTYW1lLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBkYXRlU2FtZS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkID09PSBwYXJzZUludChvcmRlcklkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyZWF0ZXIpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnRvdGFsID4gcGFyc2VGbG9hdChncmVhdGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPCBwYXJzZUZsb2F0KGxlc3MpKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vb3JkZXJzLyR7dmFsdWV9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGxldCB7IGRhdGEsIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZGVsZXRlZCA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuc3RhdHVzLnZhbHVlID0gXCJOT05FXCI7XHJcbiAgICB0aGlzLnJlZnMub3JkZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmdyZWF0ZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmxlc3MudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICAgIGdyZWF0ZXI6IG51bGwsXHJcbiAgICAgIGxlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHJhbmdlLCBhY3RpdmUsIHBhZ2luYXRpb24sIHN0YXR1c0ZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0ZpbHRlcik7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzRmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVORElOR1wiPlBFTkRJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERUxJVkVSSU5HXCI+REVMSVZFUklORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09NUExFVEVEXCI+Q09NUExFVEVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzU3RhcnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyb21EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNFbmRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRvRGF0ZTogZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JkZXIgSWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgb3JkZXJJZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJncmVhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JlYXRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbGVzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBFbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIENyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC51c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3ZpZXdvcmRlclwiLCBzdGF0ZTogeyBkYXRhOiB4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuLXNxdWFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifVZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGV9IGlkPXt4LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5jb25zdCBjcmVhdGVJbWFnZSA9ICh1cmwpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoaW1hZ2UpKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY3Jvc3NPcmlnaW5cIiwgXCJhbm9ueW1vdXNcIik7IC8vIG5lZWRlZCB0byBhdm9pZCBjcm9zcy1vcmlnaW4gaXNzdWVzIG9uIENvZGVTYW5kYm94XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBnZXRSYWRpYW5BbmdsZShkZWdyZWVWYWx1ZSkge1xyXG4gIHJldHVybiAoZGVncmVlVmFsdWUgKiBNYXRoLlBJKSAvIDE4MDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQ2FudmFzQ3JvcChpbWFnZVNyYywgcGl4ZWxDcm9wLCByb3RhdGlvbiA9IDApIHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IGNyZWF0ZUltYWdlKGltYWdlU3JjKTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gIGNvbnN0IG1heFNpemUgPSBNYXRoLm1heChpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICBjb25zdCBzYWZlQXJlYSA9IDIgKiAoKG1heFNpemUgLyAyKSAqIE1hdGguc3FydCgyKSk7XHJcblxyXG4gIC8vIHNldCBlYWNoIGRpbWVuc2lvbnMgdG8gZG91YmxlIGxhcmdlc3QgZGltZW5zaW9uIHRvIGFsbG93IGZvciBhIHNhZmUgYXJlYSBmb3IgdGhlXHJcbiAgLy8gaW1hZ2UgdG8gcm90YXRlIGluIHdpdGhvdXQgYmVpbmcgY2xpcHBlZCBieSBjYW52YXMgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHNhZmVBcmVhO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBzYWZlQXJlYTtcclxuXHJcbiAgLy8gdHJhbnNsYXRlIGNhbnZhcyBjb250ZXh0IHRvIGEgY2VudHJhbCBsb2NhdGlvbiBvbiBpbWFnZSB0byBhbGxvdyByb3RhdGluZyBhcm91bmQgdGhlIGNlbnRlci5cclxuICBjdHgudHJhbnNsYXRlKHNhZmVBcmVhIC8gMiwgc2FmZUFyZWEgLyAyKTtcclxuICBjdHgucm90YXRlKGdldFJhZGlhbkFuZ2xlKHJvdGF0aW9uKSk7XHJcbiAgY3R4LnRyYW5zbGF0ZSgtc2FmZUFyZWEgLyAyLCAtc2FmZUFyZWEgLyAyKTtcclxuXHJcbiAgLy8gZHJhdyByb3RhdGVkIGltYWdlIGFuZCBzdG9yZSBkYXRhLlxyXG4gIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICBpbWFnZSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLndpZHRoICogMC41LFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2UuaGVpZ2h0ICogMC41XHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpO1xyXG5cclxuICAvLyBzZXQgY2FudmFzIHdpZHRoIHRvIGZpbmFsIGRlc2lyZWQgY3JvcCBzaXplIC0gdGhpcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGNvbnRleHRcclxuICBjYW52YXMud2lkdGggPSBwaXhlbENyb3Aud2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHQ7XHJcblxyXG4gIC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuICBjdHgucHV0SW1hZ2VEYXRhKFxyXG4gICAgZGF0YSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngpLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnkpXHJcbiAgKTtcclxuXHJcbiAgLy8gQXMgQmFzZTY0IHN0cmluZ1xyXG4gIC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XHJcblxyXG4gIC8vIEFzIGEgYmxvYlxyXG4gIHJldHVybiBhd2FpdCBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gICAgcmV0dXJuIGxvYWQ7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIC8vICAgcGljYS50b0Jsb2IoY2FudmFzLCBcImltYWdlL2pwZWdcIiwgMC45KS50aGVuKChibG9iKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gIC8vICAgICByZXNvbHZlKGxvYWQpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVW5kb1JvdW5kZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5TGlzdChwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWJjYXRlZ29yeSwgc2V0c3ViY2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YnR3bywgc2V0c3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxjYXQsIHNldGRlbGNhdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3ViLCBzZXRkZWxzdWJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbHN1YnR3bywgc2V0ZGVsc3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3QvYWxsY2F0ZWdvcmllc1wiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2VsZWN0Q2F0ZWdvcnkocGFyYW1zKSB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0c3VidHdvKG51bGwpO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YmNhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsY2F0KHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YmNhdGVnb3J5KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0RGVsZXRlSXRlbSA9ICgpID0+IHtcclxuICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgIHNldGRlbHN1YihudWxsKTtcclxuICAgIHNldGRlbHN1YnR3byhudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJDYXRlZ29yeVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGFyZ2V0fS9zdWJ0d29jYXRlZ29yaWVzYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgIHNldGRlbHN1YihwYXJzZUludCh0YXJnZXQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRzdWJ0d28ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YnR3b0NhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgc2V0ZGVsc3VidHdvKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWxzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2RlbGNhdH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3Y2F0ID0gZGF0YS5maWx0ZXIoKHMsIGkpID0+IGRlbGNhdCAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdjYXQpO1xyXG4gICAgc2V0RGF0YShuZXdjYXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVN1YkNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vc3ViY2F0ZWdvcmllcy8ke2RlbHN1Yn1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3c3ViID0gc3ViY2F0ZWdvcnkuZmlsdGVyKChzLCBpKSA9PiBkZWxzdWIgIT09IHMuaWQpO1xyXG4gICAgY29uc29sZS5sb2cobmV3c3ViKTtcclxuICAgIHNldHN1YmNhdGVnb3J5KG5ld3N1Yik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3VidHdvQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJ0d29jYXRlZ29yaWVzLyR7ZGVsc3VidHdvfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWJ0d28gPSBzdWJ0d28uZmlsdGVyKChzLCBpKSA9PiBkZWxzdWJ0d28gIT09IHMuaWQpO1xyXG4gICAgc2V0c3VidHdvKG5ld3N1YnR3byk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPHA+dGhpcyBpcyBjYXRlZ29yeSBsaXN0PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDYXRlZ29yeX1cclxuICAgICAgICAgICAgc2l6ZT1cIjIwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAge1wiID5cIn1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGNhdCA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJDYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YmNhdGVnb3J5ICYmXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnkubWFwKChzdWIsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lfSB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3ViID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViVHdvIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJ0d29DYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnR3byAmJlxyXG4gICAgICAgICAgICAgIHN1YnR3by5tYXAoKHN1YnQsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWJ0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3VidC5zdWJ0d29jYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3VidHdvID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJ0d29DYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YnR3byBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtZWFzeS1jcm9wXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU2xpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1wiO1xyXG5pbXBvcnQgQ2FudmFzQ3JvcCBmcm9tIFwiLi9DYW52YXNDcm9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9wcGVydjIocHJvcHMpIHtcclxuICBjb25zdCBbY3JvcCwgc2V0Q3JvcF0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW3JvdGF0aW9uLCBzZXRSb3RhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3JvcHBlZEltYWdlLCBzZXRDcm9wcGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3BwZWRBcmVhUGl4ZWxzLCBzZXRDcm9wcGVkQXJlYVBpeGVsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSB1c2VDYWxsYmFjaygoY3JvcHBlZEFyZWEsIGNyb3BwZWRBcmVhUGl4ZWxzKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhjcm9wcGVkQXJlYVBpeGVscyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBDbG9zZURpYWxvZygpIHtcclxuICAgIHByb3BzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICBjbGVhclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93Q3JvcHBlZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlID0gYXdhaXQgQ2FudmFzQ3JvcChcclxuICAgICAgICBwcm9wcy5wYXlsb2FkLnNyYyxcclxuICAgICAgICBjcm9wcGVkQXJlYVBpeGVscyxcclxuICAgICAgICByb3RhdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVlXCIsIHsgY3JvcHBlZEltYWdlIH0pO1xyXG4gICAgICBzZXRDcm9wcGVkSW1hZ2UoY3JvcHBlZEltYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBVcGxvYWRJbWFnZSA9ICgpID0+IHtcclxuICAgIHByb3BzLnBheWxvYWQudXBsb2FkKGNyb3BwZWRJbWFnZS5ibG9iLCBjbGVhclN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclN0YXRlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEltYWdlKG51bGwpO1xyXG4gICAgc2V0Wm9vbSgxKTtcclxuICAgIHNldENyb3AoeyB4OiAwLCB5OiAwIH0pO1xyXG4gICAgc2V0Um90YXRpb24oMCk7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhudWxsKTtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjcm9wcGVkSW1hZ2UgJiYgcHJvcHMuc2hvd0RpYWxvZyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Q2xvc2VEaWFsb2d9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgIFwiIHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBoZWlnaHQ6IFwiMjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9wcy5zaG93RGlhbG9nICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0Nyb3BwZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMucGF5bG9hZC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENvbXBsZXRlPXtvbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17c2V0Wm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2xpZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5ab29tPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+Um90YXRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMCwgMCwgMC40KVwiLFxyXG4gIHpJbmRleDogXCI1XCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuY29uc3QgY29udGFpbmVyQ3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiOTAlXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiNjAlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJCdXR0b25TdHlsZSA9IHtcclxuICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkICNmNWY1ZjVcIixcclxuICBoZWlnaHQ6IFwiMTAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZWRJbWFnZVN0eWxlID0ge1xyXG4gIG1heFdpZHRoOiBcIjUwdndcIixcclxuXHJcbiAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuIiwiaW1wb3J0IHsgRmFjZVNoYXJwLCBUcmVuZGluZ1VwU2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUNhdGVnb3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIGRhdGFsaXN0OiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgZGF0YWxpc3Q6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRDYXRlZ29yeSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgYWRkY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbmQoKGRhdGFzLCBpZHgpID0+IGluZGV4ID09PSBpZHgpO1xyXG4gICAgY29uc29sZS5sb2coXCJrZW5hIGNhcmlcIiwgYWRkY2F0KTtcclxuXHJcbiAgICBpZiAoYWRkY2F0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmV3ZGF0YWxpc3QgPSB0aGlzLnN0YXRlLmRhdGFsaXN0LmZpbHRlcihcclxuICAgICAgICAoZGF0YWxpc3QsIGl4KSA9PiBhZGRjYXQuY2F0ZWdvcnluYW1lICE9PSBkYXRhbGlzdC5uYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGFsaXN0OiBuZXdkYXRhbGlzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHBvc3QsIGlkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gdmFsdWUgaWYgc2VsZWN0XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGRpc2FibGU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeSh0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gIH07XHJcbiAgaGFuZGxlQWRkU3ViQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWRkc3ViID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoY2F0LCBjYXRpKSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gY2F0aSkgcmV0dXJuIGNhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiLCBkaXNhYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YlwiLCBhZGRzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZHN1YiB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRzdWJ0d29jYXRlZ29yeSA9IChpLCBzKSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbml0IGFkZHN1YjJcIiwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzKTtcclxuICAgIGNvbnN0IGFkZHN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAocyAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IFt7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9XSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YiB0d29cIiwgYWRkc3VidHdvKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBhZGRzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViID0gKGJ1dGNhdCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZG1vcmVzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRtb3JlLCBhaWR4KSA9PiB7XHJcbiAgICAgIGlmIChidXRjYXQgIT09IGFpZHgpIHJldHVybiBhZGRtb3JlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZG1vcmUsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIC4uLmFkZG1vcmUuc3ViY2F0ZWdvcnksXHJcbiAgICAgICAgICB7IHN1YmNhdGVnb3J5aWQ6IFwiXCIsIHN1YmNhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkbW9yZXN1YlwiLCBhZGRtb3Jlc3ViKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiBhZGRtb3Jlc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViVHdvID0gKGFkZGNhdCwgYnV0c3ViLCBzdWJ0d29pbmR4KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmVzdWIsIGFtc2kpID0+IHtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gYW1zaSkgcmV0dXJuIGFkZG1vcmVzdWI7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZXN1YixcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkbW9yZXN1Yi5zdWJjYXRlZ29yeS5tYXAoKHN1YmNhdGluaXQsIHNjaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYnV0c3ViICE9PSBzY2lkeCkgcmV0dXJuIHN1YmNhdGluaXQ7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdWJjYXRpbml0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW1xyXG4gICAgICAgICAgICAgIC4uLnN1YmNhdGluaXQuc3VidHdvY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgeyBzdWJ0d29jYXRlZ29yeWlkOiBcIlwiLCBzdWJ0d29jYXRlZ29yeW5hbWU6IFwiXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFkZG1vcmVzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZG1vcmVzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkbW9yZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGNvbnN0IGVuYWJsZSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHgsIGkpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLngsIGRpc2FibGU6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcmllczogZW5hYmxlLFxyXG4gICAgICAgIGRhdGFsaXN0OiB0aGlzLnN0YXRlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbHRlcigoYSwgaSkgPT4gaW5kZXggIT09IGkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IHJlbW92ZWNhdCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVjYXQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5ID0gKGNhdGksIHN1YmkpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgobW9kLCBtb2RpbmR4KSA9PiB7XHJcbiAgICAgIGlmIChjYXRpICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICBpZiAoY2F0aSA9PT0gMCAmJiBzdWJpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubW9kLCBzdWJjYXRlZ29yeTogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubW9kLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBtb2Quc3ViY2F0ZWdvcnkuZmlsdGVyKChzdWIsIGlzdWIpID0+IHN1YmkgIT09IGlzdWIpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IHJlbW92ZWQgfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5ID0gKHgsIHksIHopID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVzdWJ0d28gPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRzdWJ0d29jYXQsIGl0d28pID0+IHtcclxuICAgICAgaWYgKHggIT09IGl0d28pIHJldHVybiBhZGRzdWJ0d29jYXQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkc3VidHdvY2F0LFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRzdWJ0d29jYXQuc3ViY2F0ZWdvcnkubWFwKChhZHN0LCBhZHN0aSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHkgIT09IGFkc3RpKSByZXR1cm4gYWRzdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFkc3QsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBhZHN0LnN1YnR3b2NhdGVnb3J5LmZpbHRlcigoZmlsLCBpbmQpID0+IHogIT09IGluZCksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3Zlc3VidHdvIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkeCkgPT4gZS50YXJnZXQudmFsdWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpZHgpIHJldHVybiBwb3N0O1xyXG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGRhdGEubmFtZSwgY2F0ZWdvcnlpZDogZGF0YS5pZCB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gbmV3IHZhbHVlIHdpdGhvdXQgc2VsZWN0XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgY2F0ZWdvcnluYW1lOiBlLnRhcmdldC52YWx1ZSwgY2F0ZWdvcnlpZDogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IGRhdGEgOiBcIiwgbmV3RGF0YSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJJbnB1dCA9IChjYXRpZHgsIHN1YmlkeCwgY2F0ZWdvcnluYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgc3ViY2F0XCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IGNhdFwiLCBjYXRlZ29yeW5hbWUpO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgY2F0ZWdvcmlcIiwgc3ViZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGlkeCAhPT0gbW9kaW5keCkgcmV0dXJuIG1vZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXN1YikgPT4ge1xyXG4gICAgICAgICAgaWYgKHN1YmlkeCAhPT0gaXN1YikgcmV0dXJuIHN1YjtcclxuXHJcbiAgICAgICAgICBpZiAoc3ViZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IHN1YmRhdGEuc3ViY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IHN1YmRhdGEuaWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1vZGlmaWVkIDpcIiwgbW9kaWZpZWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IG1vZGlmaWVkLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG1vZGlmaWVkKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJUd29JbnB1dCA9IChcclxuICAgIGluY2F0aW5keCxcclxuICAgIGluY2F0c3ViaWR4LFxyXG4gICAgaW5jYXRzdWJ0d29pZHgsXHJcbiAgICBjYXRlZ29yeW5hbWUsXHJcbiAgICBzdWJjYXRlZ29yeW5hbWVcclxuICApID0+IChldmVudCkgPT4ge1xyXG4gICAgbGV0IHN1YnR3b2RhdGEgPSBudWxsO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWQpID0+IGNhdGVnb3J5bmFtZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGlmIChjYXRlZ29yeSkge1xyXG4gICAgICBzdWJkYXRhID0gY2F0ZWdvcnkuc3ViY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3ViLCBpeCkgPT4gc3ViLnN1YmNhdGVnb3J5bmFtZSA9PT0gc3ViY2F0ZWdvcnluYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgIHN1YnR3b2RhdGEgPSBzdWJkYXRhLlN1YnR3b2NhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YnR3bywgc3RpKSA9PiBzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lID09PSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJ0d29uZXcgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXRzdWJ0d28sIGNhdHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5jYXRpbmR4ICE9PSBjYXRzdWJ0d29pZHgpIHJldHVybiBjYXRzdWJ0d287XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2F0c3VidHdvLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBjYXRzdWJ0d28uc3ViY2F0ZWdvcnkubWFwKChjYXRzdWIsIGNhdHN1YmlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluY2F0c3ViaWR4ICE9PSBjYXRzdWJpZHgpIHJldHVybiBjYXRzdWI7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jYXRzdWIsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBjYXRzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWJ0d28sIHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpbmNhdHN1YnR3b2lkeCAhPT0gc3VidHdvaWR4KSByZXR1cm4gc3VidHdvO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3VidHdvZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogc3VidHdvZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN1YnR3byxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnluYW1lOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1YnR3b25ldyBjYXQgOlwiLCBzdWJ0d29uZXcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IHN1YnR3b25ldyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShzdWJ0d29uZXcpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNT57YENhdGVnb3JpICMke2luZGV4ICsgMX0gLSAke2RhdGEuY2F0ZWdvcnluYW1lfWB9PC9oNT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxpc3Q9e2BkYXRhbGlzdCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRhLnN1YmNhdGVnb3J5IHx8IGRhdGEuZGlzYWJsZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0KGluZGV4KX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YENhdGVnb3J5ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRhdGFsaXN0IGlkPXtgZGF0YWxpc3Qke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFsaXN0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICB7IWRhdGEuZGlzYWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkQ2F0ZWdvcnkoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tYmxvY2sgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YS5zdWJjYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICBkYXRhLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBzdWJpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWJpZHh9PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWIuc3VidHdvY2F0ZWdvcnkgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtzdWIuc3ViY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU3ViIENhdGVnb3J5IyR7c3ViaWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YklucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7ZGF0YS5jYXRlZ29yeWlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGJpfSB2YWx1ZT17ZGJzLnN1YmNhdGVnb3J5bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWIoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3N1Yi5zdWJ0d29jYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICAgICAgICBzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWIyLCBpbmR0d28pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmR0d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2BTdWIgMm5kIENhdGVnb3J5ICR7c3ViMi5zdWJ0d29jYXRlZ29yeW5hbWV9ICMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gU3ViIENhdGVnb3J5ICR7c3ViLnN1YmNhdGVnb3J5bmFtZX0jJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9mIENhdGVnb3J5ICR7ZGF0YS5jYXRlZ29yeW5hbWV9ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeWlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgVHdvIENhdGVnb3J5IyR7aW5kdHdvICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YlR3b0lucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJjYXRlZ29yeW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGJzLmlkID09PSBzdWIuc3ViY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRicy5TdWJ0d29jYXRlZ29yeS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJ0d28sIHNkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NkYml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VidHdvLnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgYnRuLXNtIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWJUd28oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRzdWJ0d29jYXRlZ29yeShpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFN1YkNhdGVnb3J5KGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGV0YWlsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRldGFpbG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkYXRhZGVzYzogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2RldGFpbHNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIERldGFpbHM6IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUuZGV0YWlscy5maWx0ZXIoKGRhdGEsIGluZGV4KSA9PiB2YWx1ZSAhPT0gaW5kZXgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5yZW1vdmVkZXRhaWwocmVtb3ZlKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEZXRhaWxOYW1lID0gKGlkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld2RldGFpbHMgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGV0YWlsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxzLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLm5ld2RldGFpbHMobmV3ZGV0YWlscylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlRGF0YURlc2MgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlsZGF0YWRlc2MgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGF0YWRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogbmV3ZGV0YWlsZGF0YWRlc2MsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxkYXRhZGVzYylcclxuICAgICk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRldGFpbHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIE5hbWUgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEZXRhaWxOYW1lKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRhZGVzY31cclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERldGFpbHMgIyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURhdGFEZXNjKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5ICBwLTIgbXQtMiBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLmRldGFpbG5hbWV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImRlc2NcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGF0YWRlc2N9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbWItMyBtdC0zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgTW9yZSBEZXRhaWxcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBsb2FkSW1hZ2UgZnJvbSBcImJsdWVpbXAtbG9hZC1pbWFnZS9qc1wiO1xyXG5pbXBvcnQgQ3JvcHBlcnYyIGZyb20gXCIuL0Nyb3BwZXJ2MlwiO1xyXG5jb25zdCBwaWNhID0gcmVxdWlyZShcInBpY2FcIikoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGljdHVyZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlaWQ6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZW5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGFyZ2V0aW1hZ2U6IG51bGwsXHJcbiAgICAgIHNob3dCbGFja1NjcmVlbjogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIHNob3dFYXN5Q3JvcDogZmFsc2UsXHJcbiAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbnB1dEZpbGUgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZpbGVJbnB1dCA9IChpKSA9PiAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0RmlsZVtpXSA9IGU7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW1hZ2VBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGljdHVyZTogdGhpcy5zdGF0ZS5waWN0dXJlLmNvbmNhdChbeyBpbWFnZWlkOiBcIlwiLCBpbWFnZW5hbWU6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoaSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucGljdHVyZS5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHRoaXMuaW5wdXRGaWxlW2ldLnZhbHVlID0gXCJcIjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKHMsIGZpKSA9PiBpICE9PSBmaSk7XHJcbiAgICBjb25zdCBpbWFnZWRlbCA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKGltYWdlLCBpZHgpID0+IGkgPT09IGlkeCk7XHJcbiAgICBjb25zdCBwaWN0dXJldXAgPSBpbWFnZWRlbC5maW5kKCh4KSA9PiB4LmltYWdlaWQpO1xyXG4gICAgaWYgKHR5cGVvZiBwaWN0dXJldXAgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiRGVsZXRpbmcgSW1hZ2VcIiB9KTtcclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cGljdHVyZXVwLmltYWdlaWR9L2ltYWdlYCxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHsgcGljdHVyZTogcmVtb3ZlLCBtZXNzYWdlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlcGljdHVyZShyZW1vdmUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSk7XHJcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyBOb3QgR29vZCBpIGNhbiBmZWVsIGl0Li5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwaWN0dXJlOiByZW1vdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChhKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgYSA6XCIsIGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgZSA6XCIsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL29yaWdpbmFsIGkgZWRpdCBvbiAyLzgvMjAyMSBjb2RlXHJcblxyXG4gICAgLy8gaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldGltYWdlOiBhIH0pO1xyXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAvLyAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAvLyAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAgIGxvYWRJbWFnZShcclxuICAgICAgICBlLnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICBhc3luYyAoaW1nKSA9PiB7XHJcbiAgICAgICAgICB2YXIgcGl4ZWwgPSBpbWcuaGVpZ2h0ICogaW1nLndpZHRoO1xyXG5cclxuICAgICAgICAgIGlmIChwaXhlbCA+IDMxNDU3MjgpIHtcclxuICAgICAgICAgICAgdmFyIHJhdGlvID0gcGl4ZWwgPiA1MDM4ODQ4ID8gMC41IDogMC44O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJQbGVhc2Ugd2FpdCAuLi5cIiB9KTtcclxuICAgICAgICAgICAgICB2YXIgaW1nY29tcCA9IGF3YWl0IGNvbXByZXNzSW1hZ2UoaW1nLCByYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nY29tcC50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRkYXRhLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGVycm9yIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9IChpbWFnZUJsb2IsIGxvYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgLy90ZXN0aW5nIHB1cnBvc2VcclxuICAgIC8vIGNvbnN0IGZpbGUgPSBkYXRhVVJMdG9GaWxlKFwiaW1hZ2VCbG9iXCIsIGltYWdlQmxvYilcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImltYWdlIGJsb2JcIixmaWxlKVxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTsgLy90aGlzIGlzIHVwbG9hZHMgdG8gcmVzZXQgYWxsIHRvIG51bGwgZm9yIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgY29uc3QgaW1hZ2VVcGxvYWQgPSB0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChpbWFnZSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gdGhpcy5zdGF0ZS50YXJnZXRpbWFnZSkgcmV0dXJuIGltYWdlO1xyXG4gICAgICByZXR1cm4geyAuLi5pbWFnZSwgaW1hZ2VpZDogZS5pZCwgaW1hZ2VuYW1lOiBlLmltYWdlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwaWN0dXJlOiBpbWFnZVVwbG9hZCB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuc2hvd1BpY3R1cmUoaW1hZ2VVcGxvYWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2hvd0Vhc3lDcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlRWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5waWN0dXJlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwLTEgcHQtMSBtdC0wLjggbXItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj57aSArIDEgKyBcIi5cIn08L2Rpdj5cclxuICAgICAgICAgICAge2RhdGEuaW1hZ2VuYW1lID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7ZGF0YS5pbWFnZW5hbWV9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5maWxlSW5wdXQoaSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlIG0tMVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlKGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuICBidG4tcHJpbWFyeSBidG4tc20gYnRuLWJsb2NrIG15LTNcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIFBpY3R1cmVcclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q3JvcHBlcnYyXHJcbiAgICAgICAgICBzaG93RGlhbG9nPXt0aGlzLnN0YXRlLnNob3dFYXN5Q3JvcH1cclxuICAgICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3B9XHJcbiAgICAgICAgICBwYXlsb2FkPXt0aGlzLnN0YXRlLnBheWxvYWR9XHJcbiAgICAgICAgICB1cGxvYWQ9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gIHpJbmRleDogXCIxXCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29tcHJlc3NJbWFnZSA9IChpbWcsIGNydCkgPT4ge1xyXG4gIHZhciBvZmZTY3JlZW5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIG9mZlNjcmVlbkNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIGNydDtcclxuICBvZmZTY3JlZW5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIGNydDtcclxuICByZXR1cm4gcGljYVxyXG4gICAgLnJlc2l6ZShpbWcsIG9mZlNjcmVlbkNhbnZhcylcclxuICAgIC50aGVuKChpbWFnZUNDUykgPT4gaW1hZ2VDQ1MpXHJcbiAgICAuY2F0Y2goKGUpID0+IGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBNQ2F0ZWdvcnkgZnJvbSBcIi4vTUNhdGVnb3J5XCI7XHJcbmltcG9ydCBQRGV0YWlscyBmcm9tIFwiLi9QRGV0YWlsc1wiO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tIFwiLi9QaWN0dXJlXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIHNob3didXR0b246IGZhbHNlLFxyXG4gICAgICBzaG93Q3JvcHBlckRpYWxvZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiU2F2aW5nIGRhdGEuLiBQbGVhc2UgVGFrZSBEZWVwIEJyZWF0aCAuLlwiIH0pO1xyXG4gICAgQXhpb3MoXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHNgLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBTYXZlZCEhXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgV3JvbmcuLmVyb3JyIHBsZWFzZSBjb250YWN0IHB1bGlzXCIsXHJcbiAgICAgICAgICBzaG93YnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVVwbG9hZGVkID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUmVtb3ZlUGljdHVyZSA9IChpbWFnZXMpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZXM6IGltYWdlcyB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNoYW5nZUNhdGVnb3J5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoY2F0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGNhdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlTmV3RGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiBlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlRGV0YWlsID0gKHJlbW92ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVtb3ZlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiByZW1vdmUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgey8qIFRvcCBSb3cgKi99XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UGljdHVyZVxyXG4gICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMucHJvcHMuc2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICBzaG93UGljdHVyZT17dGhpcy5oYW5kbGVVcGxvYWRlZH1cclxuICAgICAgICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5wcm9wcy5jbG9zZUNyb3B9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVwaWN0dXJlPXt0aGlzLmhhbmRsZVJlbW92ZVBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A9e3RoaXMucHJvcHMuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8TUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICByZW1vdmVjYXRlZ29yeT17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWNhdGVnb3J5PXt0aGlzLmhhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UERldGFpbHNcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRldGFpbD17dGhpcy5oYW5kbGVSZW1vdmVEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICBuZXdkZXRhaWxzPXt0aGlzLmhhbmRsZU5ld0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93YnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXREaWFsb2cgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBzYXZlQnV0dG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IFtdLFxyXG4gICAgICB2YWxpZGF0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgZGVzYyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGltYWdlaWQgJiYgbmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBjYXRlZ29yeUlkICYmIGRlc2MpIHtcclxuICAgICAgQXhpb3MoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtjYXRlZ29yeUlkfWAsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBkYXRhIHRvIHNlcnZlci4uLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGhpcy5zdGF0ZS5pbWFnZWlkfS9pbWFnZWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IG51bGwsIGltYWdlOiBudWxsIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpbWFnZUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoaW1hZ2VJZCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUltYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHVwbG9hZFwiLCBlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWxlY3QgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0uc2l6ZSA+IDgzODg2MDgpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBGaWxlIHRvbyBiaWcuLiBQbGVhc2UgUHV0IGxlc3MgdGhhbiA4bWJcIik7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0Nyb3AocGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsTmFtZSA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsTmFtZTogXCIsIGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyBoYW5kbGVEZXRhaWxEZXNjID0gZSA9PntcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxEZXNjOiBcIiwgZSlcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbWFnZWlkLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICB2YWxpZGF0ZSxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+IHtcIj4gTmV3IFByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiNWVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbG5hbWU9e3RoaXMuaGFuZGxlRGV0YWlsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZWlkID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBJbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgJiZcclxuICAgICAgICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCAmJlxyXG4gICAgICAgICAgICAgICAgICBkZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEZpbGwgQWxsIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtzdG9jayA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIFN0b2NrIEFtb3VudCBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7cHJpY2UgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBwdXQgcHJpY2UgbW9yZSB0aGFuIDBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY2F0ZWdvcnlEYXRhOiBudWxsXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiYXBpL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLCBzaG93OiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS5jYXRlZ29yeURhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IFwiXCIsIGRldGFpbHM6IFwiXCIsIHNob3c6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc2hvdywgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiBzaG93ICYmIChcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZWxlY3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlEYXRhID8gY2F0ZWdvcnlEYXRhLmlkIDogbnVsbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UGxlYXNlIFNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPQURJTkdcIj5MT0FESU5HLi48L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBOYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXRlZ29yeX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIHshc2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbENhdCBmcm9tIFwiLi4vT2xkL01vZGFsQ2F0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIFwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgIENhdGVnb3J5IExpc3RcclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4LmRldGFpbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI2NhdGVnb3J5XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgZGVmYXVsdEltYWdlOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3JjLCBjcm9wLCBkZWZhdWx0SW1hZ2UsIGNyb3BwZWRJbWFnZVVybCwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlVwbG9hZGluZyAuLi4uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGg0PkNyb3AgYW5kIFVwbG9hZCBJbWFnZTwvaDQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG5cclxuICAgICAgICB7c3JjICYmIGRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyFkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRDYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMucHJvcHMuY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNhdGVnb3J5SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzIG9mIEVkaXRDYXRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoeCwgeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3l9IHZhbHVlPXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAge3gubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogdGhpcy5wcm9wcy5mb3JkZXRhaWxzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURldGFpbFZhbHVlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkRGV0YWlscyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiLCBpZDogXCJcIiB9LFxyXG4gICAgICBdKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7IGRldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcbiAgICAgICAge2RldGFpbHNcclxuICAgICAgICAgID8gZGV0YWlscy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJdGVtKGRhdGEuaWQgPyBkYXRhLmlkIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGV0YWlsc30gY2xhc3NOYW1lPVwic21hbGxcIj5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vRWRpdFByb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIGdvdG51bGxkYXRhIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG5hbWU6IGRhdGEucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgcHJpY2U6IGRhdGEucHJvZHVjdFByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnByb2R1Y3RTdG9jayxcclxuICAgICAgICBkZXNjOiBkYXRhLnByb2R1Y3REZXNjLFxyXG4gICAgICAgIGRldGFpbHMgOiBkYXRhLnByb2R1Y3REZXRhaWxzcyxcclxuICAgICAgICBnb3RudWxsZGF0YSA6IHRydWUsXHJcblxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkYXRhLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhLnByb2R1Y3RJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2U6IGRhdGEucHJvZHVjdEltYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcnlJZDogaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2ltYWdlcy8ke2RhdGEuaWR9L2ZpbGUvcHJvZHVjdGAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjLCBjYXRlZ29yeUlkLCBpbWFnZSAsIGRldGFpbHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBwcmljZSA9IGRhdGEucHJvZHVjdFByaWNlO1xyXG4gICAgfVxyXG4gICAgaWYoc3RvY2sgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgc3RvY2sgPSBkYXRhLnByb2R1Y3RTdG9jaztcclxuICAgIH1cclxuICAgIGlmKGRlc2MgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZGVzYyA9IGRhdGEucHJvZHVjdERlc2M7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcblxyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGRldGFpbHMgOiBkZXRhaWxzXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbHNOdWxsID0gZSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlICwgZ290bnVsbGRhdGEgOiBmYWxzZX0pXHJcbiAgfVxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUsIGdvdG51bGxkYXRhIDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSBlID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlLCBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSwgZGV0YWlscywgZ290bnVsbGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3RcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgeyAoZGV0YWlscyAmJiBnb3RudWxsZGF0YSkgPyA8RWRpdFByb2R1Y3REZXRhaWxzIGZvcmRldGFpbHM9e2RldGFpbHN9IGRhdGFjaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfS8+ICA6IDxQcm9kdWN0RGV0YWlscyBkZXRhaWxuYW1lPXt0aGlzLmhhbmRsZURldGFpbHNOdWxsfSAvPiB9ICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm8gSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17dGhpcy5oYW5kbGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0sXHJcbiAgICAgIGRldGFpbG5hbWVoYXNpbnB1dDogZmFsc2UsXHJcbiAgICAgIGRhdGFkZXNjaGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVycyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGV0YWlsbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJzIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoXHJcbiAgICAgIChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGF0YWRlc2M6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJkZXNjKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIgPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNoYXJlaG9sZGVyczogcmVtb3ZlZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxuYW1laGFzaW5wdXRcclxuICAgICAgICAgICAgICA/IFwiTmFtZSBvZiBkZXRhaWwgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIERhdGEgIyR7aWR4ICsgMX0gYH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhZGVzY2hhc2lucHV0ID8gXCJEZXRhaWwgZGF0YSBpcyByZXF1aXJlZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIoaWR4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFNoYXJlaG9sZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vT2xkL01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2dyZWF0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2xlc3NJbnB1dCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RvY2tncmVhdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrbGVzcyA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkZWxldGVkIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZShhY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHRoaXMucHJvZHVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmNhdGVnb3J5KSB0aGlzLmNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tncmVhdCkgdGhpcy5zdG9ja2dyZWF0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tsZXNzKSB0aGlzLnN0b2NrbGVzc0lucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgY2F0ZWdvcnlGaWx0ZXIsIHN0b2NrZ3JlYXQsIHN0b2NrbGVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJvZHVjdC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSBcIk5PTkVcIikge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5jYXRlZ29yeS5uYW1lID09PSBjYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdG9ja2dyZWF0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPiBwYXJzZUZsb2F0KHN0b2NrZ3JlYXQpKTtcclxuICAgIH1cclxuICAgIGlmIChzdG9ja2xlc3MpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA8IHBhcnNlRmxvYXQoc3RvY2tsZXNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGFjdGl2ZSwgcmFuZ2UsIHBhZ2luYXRpb24sIGNhdGVnb3J5RGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHBhZ2luYXRpb24gOiBcIiwgcGFnaW5hdGlvbik7XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUZpbHRlcjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPkZpbHRlciBCeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIEdyZWF0ZXIgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrZ3JlYXR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZ3JlYXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2xlc3N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9ja2xlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZGF0YS5sZW5ndGh9IHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgdG89XCIvY3JlYXRlcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1zcXVhcmUgZmEtMXhcIiAvPiBDcmVhdGUgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5FZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZW1vdmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3gucGljdHVyZXMubWFwKChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIGEuZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5jYXRlZ29yeSA/IHguY2F0ZWdvcnkubmFtZSA6IFwiXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0KHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdCBmYS0xeFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL2VkaXRcIiwgc3RhdGU6IHsgaWQ6IHguaWQgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz4ge1wiICBcIn1FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI3Byb2R1Y3RcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxQcm9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbi8vIGltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzcmM6IG51bGwsXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgIGFzcGVjdDogMSAvIDFcclxuICAgIH0sXHJcbiAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICBpbWFnZUJsb2I6IG51bGxcclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcCh0aGlzLnN0YXRlLnNyYyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25pbWFnZWxvYWRcIik7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wIGNvbXBsZXRlXCIpO1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wY2hhbmdlXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRpbWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgYWRkaW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICB7Lyoge2Nyb3BwZWRJbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZEFycmF5LCByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4vdmFsaWRhdGVcIjtcclxuXHJcblxyXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxyXG4gICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3Bhbj57ZXJyb3J9PC9zcGFuPn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgcmVuZGVyTWVtYmVycyA9ICh7IGZpZWxkcywgbWV0YTogeyB0b3VjaGVkLCBlcnJvciwgc3VibWl0RmFpbGVkIH0gfSkgPT4gKFxyXG4gIDx1bD5cclxuICAgIDxsaT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZmllbGRzLnB1c2goe30pfT5cclxuICAgICAgICBBZGQgTWVtYmVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7KHRvdWNoZWQgfHwgc3VibWl0RmFpbGVkKSAmJiBlcnJvciAmJiA8c3Bhbj57ZXJyb3J9PC9zcGFuPn1cclxuICAgIDwvbGk+XHJcbiAgICB7ZmllbGRzLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxyXG4gICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBNZW1iZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZmllbGRzLnJlbW92ZShpbmRleCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoND5NZW1iZXIgI3tpbmRleCArIDF9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0uZmlyc3ROYW1lYH1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPXtgJHttZW1iZXJ9Lmxhc3ROYW1lYH1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuXHJcbmNvbnN0IGhhbmRsZVRla2FuID0gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IEZpZWxkQXJyYXlzRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBwcmlzdGluZSwgcmVzZXQsIHN1Ym1pdHRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPEZpZWxkQXJyYXkgbmFtZT1cIm1lbWJlcnNcIiBjb21wb25lbnQ9e3JlbmRlck1lbWJlcnN9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9IG9uQ2xpY2s9e3Jlc2V0fT5cclxuICAgICAgICAgIENsZWFyIFZhbHVlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUZWthbn0+VGVrYW48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgZm9ybTogXCJmaWVsZEFycmF5c1wiLCAvLyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGZvcm1cclxuICB2YWxpZGF0ZSxcclxufSkoRmllbGRBcnJheXNGb3JtKTtcclxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcbmltcG9ydCBGaWVsZEFycmF5c0Zvcm0gZnJvbSBcIi4vRmllbGRBcnJheXNGb3JtXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUmVkdXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGFsZXJ0KGUpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTUgfX0+XHJcbiAgICAgICAgICAgICAgPGgyPlNpbXBsZSBGb3JtPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkQXJyYXlzRm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIGFzIHJlZHV4Rm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZvcm06IHJlZHV4Rm9ybVJlZHVjZXIsIC8vIG1vdW50ZWQgdW5kZXIgXCJmb3JtXCJcclxufSk7XHJcbmNvbnN0IHN0b3JlID0gKHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvblxyXG4gID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkoY3JlYXRlU3RvcmUpXHJcbiAgOiBjcmVhdGVTdG9yZSkocmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG5cclxuICBpZiAoIXZhbHVlcy5tZW1iZXJzIHx8ICF2YWx1ZXMubWVtYmVycy5sZW5ndGgpIHtcclxuICAgIGVycm9ycy5tZW1iZXJzID0geyBfZXJyb3I6ICdBdCBsZWFzdCBvbmUgbWVtYmVyIG11c3QgYmUgZW50ZXJlZCcgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbWVtYmVyc0FycmF5RXJyb3JzID0gW107XHJcbiAgICB2YWx1ZXMubWVtYmVycy5mb3JFYWNoKChtZW1iZXIsIG1lbWJlckluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lbWJlckVycm9ycyA9IHt9O1xyXG4gICAgICBpZiAoIW1lbWJlciB8fCAhbWVtYmVyLmZpcnN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5maXJzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5sYXN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5sYXN0TmFtZSA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgbWVtYmVyc0FycmF5RXJyb3JzW21lbWJlckluZGV4XSA9IG1lbWJlckVycm9ycztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgaWYgKG1lbWJlcnNBcnJheUVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgZXJyb3JzLm1lbWJlcnMgPSBtZW1iZXJzQXJyYXlFcnJvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVEb3dubG9hZCB9IGZyb20gXCIuL3V0aWxzL2Nyb3BJbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQml0Y2goKSB7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgdHJpZ2dlckZpbGVTZWxlY3RQb3B1cCA9ICgpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEFyZWEsIHNldENyb3BwZWRBcmVhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSAoY3JvcHBlZEFyZWFQZXJjZW50YWdlLCBjcm9wcGVkQXJlYVBpeGVscykgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEFyZWEoY3JvcHBlZEFyZWFQaXhlbHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0RmlsZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldEltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkSW1hZ2UoXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIChpbWcpID0+IHtcclxuICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBnZW5lcmF0ZURvd25sb2FkKGltYWdlLCBjcm9wcGVkQXJlYSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNyb3BwZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17c2V0Wm9vbX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENvbXBsZXRlPXtvbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXszfVxyXG4gICAgICAgICAgICAgICAgc3RlcD17MC4xfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3pvb219XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHpvb20pID0+IHNldFpvb20oem9vbSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1idXR0b25zXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RGaWxlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RyaWdnZXJGaWxlU2VsZWN0UG9wdXB9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDaG9vc2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uRG93bmxvYWR9PlxyXG4gICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEltYWdlKG51bGwpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlU3JjIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuXHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuXHRcdGltYWdlLnNyYyA9IHVybDtcclxuXHR9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcblx0cmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDcm9wcGVkSW1nKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG5cdGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblx0Y29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cdGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcblx0Ly8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuXHQvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcblx0Y2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcblx0Y2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuXHQvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG5cdGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG5cdGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuXHRjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuXHQvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcblx0Y3R4LmRyYXdJbWFnZShcclxuXHRcdGltYWdlLFxyXG5cdFx0c2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcblx0XHRzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuXHQpO1xyXG5cclxuXHRjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpO1xyXG5cclxuXHQvLyBzZXQgY2FudmFzIHdpZHRoIHRvIGZpbmFsIGRlc2lyZWQgY3JvcCBzaXplIC0gdGhpcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGNvbnRleHRcclxuXHRjYW52YXMud2lkdGggPSBwaXhlbENyb3Aud2lkdGg7XHJcblx0Y2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHQ7XHJcblxyXG5cdC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuXHRjdHgucHV0SW1hZ2VEYXRhKFxyXG5cdFx0ZGF0YSxcclxuXHRcdDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS53aWR0aCAqIDAuNSAtIHBpeGVsQ3JvcC54LFxyXG5cdFx0MCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLmhlaWdodCAqIDAuNSAtIHBpeGVsQ3JvcC55XHJcblx0KTtcclxuXHJcblx0Ly8gQXMgQmFzZTY0IHN0cmluZ1xyXG5cdC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiKTtcclxuXHRyZXR1cm4gY2FudmFzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEb3dubG9hZCA9IGFzeW5jIChpbWFnZVNyYywgY3JvcCkgPT4ge1xyXG5cdGlmICghY3JvcCB8fCAhaW1hZ2VTcmMpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNhbnZhcyA9IGF3YWl0IGdldENyb3BwZWRJbWcoaW1hZ2VTcmMsIGNyb3ApO1xyXG5cclxuXHRjYW52YXMudG9CbG9iKFxyXG5cdFx0KGJsb2IpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldmlld1VybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRcdFx0Y29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRcdGFuY2hvci5kb3dubG9hZCA9IFwiaW1hZ2UuanBlZ1wiO1xyXG5cdFx0XHRhbmNob3IuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblx0XHRcdGFuY2hvci5jbGljaygpO1xyXG5cclxuXHRcdFx0d2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwocHJldmlld1VybCk7XHJcblx0XHR9LFxyXG5cdFx0XCJpbWFnZS9qcGVnXCIsXHJcblx0XHQwLjY2XHJcblx0KTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtZWFzeS1jcm9wXCI7XHJcbmltcG9ydCBnZXRDcm9wcGVkSW1nIGZyb20gXCIuL2Nyb3BJbWFnZVwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBsb2FkSW1hZ2UgZnJvbSBcImJsdWVpbXAtbG9hZC1pbWFnZS9qc1wiO1xyXG5pbXBvcnQgZ2V0VXBsb2FkIGZyb20gXCIuL2Nyb3BJbWFnZVVwbG9hZFwiO1xyXG5pbXBvcnQgeyBCb3R0b21OYXZpZ2F0aW9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbi8vIGltcG9ydCBwaWNhIGZyb20gXCJwaWNhXCI7XHJcbmNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IGNvbXByZXNzSW1hZ2UgPSAoaW1nLCBjcnQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgdmFyIG9mZlNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBvZmZTY3JlZW5DYW52YXMud2lkdGggPSBpbWcud2lkdGggKiBjcnQ7XHJcbiAgICBvZmZTY3JlZW5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIGNydDtcclxuICAgIHBpY2FcclxuICAgICAgLnJlc2l6ZShpbWcsIG9mZlNjcmVlbkNhbnZhcylcclxuICAgICAgLnRoZW4oKGltYWdlQ0NTKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShpbWFnZUNDUyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gcmVqZWN0KGUpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVhc3lDcm9wKCkge1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjcm9wcGVkQXJlYVBpeGVscywgc2V0Q3JvcHBlZEFyZWFQaXhlbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3BwZWRJbWFnZSwgc2V0Q3JvcHBlZEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRyaWdnZXJGaWxlU2VsZWN0UG9wdXAgPSAoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JvcENvbXBsZXRlID0gdXNlQ2FsbGJhY2soKGNyb3BwZWRBcmVhLCBjcm9wcGVkQXJlYVBpeGVscykgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEFyZWFQaXhlbHMoY3JvcHBlZEFyZWFQaXhlbHMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0Nyb3BwZWRJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZSA9IGF3YWl0IGdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcHBlZEFyZWFQaXhlbHMsXHJcbiAgICAgICAgcm90YXRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkb25lZVwiLCB7IGNyb3BwZWRJbWFnZSB9KTtcclxuICAgICAgc2V0Q3JvcHBlZEltYWdlKGNyb3BwZWRJbWFnZS51cmwpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0RmlsZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkSW1hZ2UoXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIGFzeW5jIChpbWcpID0+IHtcclxuICAgICAgICAgIGxldCBwaXhlbCA9IGltZy5oZWlnaHQgKiBpbWcud2lkdGg7XHJcbiAgICAgICAgICBpZiAocGl4ZWwgPiAzMTQ1NzI4KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgLy8gYmV0dGVyIHRvIGhhdmUgbW9kYWwgb3IgbG9hZGluZyBzY3JlZW5cclxuICAgICAgICAgICAgICBsZXQgcmF0aW9waXhlbCA9IHBpeGVsID4gNTAzODg0OCA/IDAuNSA6IDAuODtcclxuICAgICAgICAgICAgICBjb25zdCBpbWdjcnMgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGltZywgcmF0aW9waXhlbCk7XHJcbiAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWdjcnMudG9EYXRhVVJMKGBpbWFnZS9qcGVnYCk7XHJcbiAgICAgICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICBjb25zdCBpbWdjcnMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgOTtcclxuICBjb25zdCB1cGxvYWRmaWxlID0gKCkgPT4ge1xyXG4gICAgZ2V0VXBsb2FkKGltYWdlLCBjcm9wcGVkQXJlYVBpeGVscywgcm90YXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RpY2t5XCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIE1lbnVcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAge2ltYWdlICYmICFjcm9wcGVkSW1hZ2UgPyAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgIG9uUm90YXRpb25DaGFuZ2U9e3NldFJvdGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NsaWRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3pvb219XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm90YXRpb259XHJcbiAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgbWF4PXszNjB9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIlJvdGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCByb3RhdGlvbikgPT4gc2V0Um90YXRpb24ocm90YXRpb24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2Nyb3BwZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2Nyb3BwZWRJbWFnZVN0eWxlfSBzcmM9e2Nyb3BwZWRJbWFnZX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGxvYWRmaWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0cmlnZ2VyRmlsZVNlbGVjdFBvcHVwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaG93Q3JvcHBlZEltYWdlfT5Dcm9wPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBjcm9wcGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcblxyXG5jb25zdCBzbGlkZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMjAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcIjYwJVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyQnV0dG9uU3R5bGUgPSB7XHJcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZjVmNWY1XCIsXHJcbiAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbn07XHJcblxyXG5jb25zdCBjcm9wcGVkSW1hZ2VTdHlsZSA9IHtcclxuICBtYXhXaWR0aDogXCI1MHZ3XCIsXHJcblxyXG4gIC8vIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJpdGNoIGZyb20gJy4vQXBwQ3JvcC9CaXRjaCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURhc2hib2FyZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJpdGNoLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlVXBsb2FkKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiS2FtYmluZ1wiKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vaXMgbGlrZSBjb21wb25lbnQgZGlkIG1vdW50XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFlvdSBoYXZhIGNsaWNrICR7Y291bnR9YDtcclxuICB9LCBbY291bnRdKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFoYSA9ICgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGYoKSB7XHJcbiAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmUhXCIpLCAxMDAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcHJvbWlzZTsgLy8gd2FpdCB1bnRpbCB0aGUgcHJvbWlzZSByZXNvbHZlcyAoKilcclxuXHJcbiAgICAgIGFsZXJ0KHJlc3VsdCk7IC8vIFwiZG9uZSFcIlxyXG4gICAgfVxyXG5cclxuICAgIGYoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0NvdW50ID0gKCkgPT4ge1xyXG4gICAgc2V0Q291bnQoY291bnQgKyAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGxhYmVsPntuYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDb3VudH0+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2UgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDcm9wcGVkSW1nKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gIGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuICAvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG4gIGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuICAvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltYWdlLFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApO1xyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIGF3YWl0IHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgICByZXR1cm4gbG9hZDtcclxuICB9KTtcclxuXHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAvLyAgICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgLy8gICAgIHJlc29sdmUobG9hZCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbiAgXHJcblxyXG5cclxuY29uc3QgY3JlYXRlSW1hZ2UgPSB1cmwgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHJlc29sdmUoaW1hZ2UpKVxyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKSAvLyBuZWVkZWQgdG8gYXZvaWQgY3Jvc3Mtb3JpZ2luIGlzc3VlcyBvbiBDb2RlU2FuZGJveFxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsXHJcbiAgfSlcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdhcyBhZGFwdGVkIGZyb20gdGhlIG9uZSBpbiB0aGUgUmVhZE1lIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb21pbmljVG9iaWFzL3JlYWN0LWltYWdlLWNyb3BcclxuICogQHBhcmFtIHtGaWxlfSBpbWFnZSAtIEltYWdlIEZpbGUgdXJsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwaXhlbENyb3AgLSBwaXhlbENyb3AgT2JqZWN0IHByb3ZpZGVkIGJ5IHJlYWN0LWVhc3ktY3JvcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gLSBvcHRpb25hbCByb3RhdGlvbiBwYXJhbWV0ZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFVwbG9hZChpbWFnZVNyYywgcGl4ZWxDcm9wLCByb3RhdGlvbiA9IDApIHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IGNyZWF0ZUltYWdlKGltYWdlU3JjKVxyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpXHJcbiAgY29uc3Qgc2FmZUFyZWEgPSAyICogKChtYXhTaXplIC8gMikgKiBNYXRoLnNxcnQoMikpXHJcblxyXG4gIC8vIHNldCBlYWNoIGRpbWVuc2lvbnMgdG8gZG91YmxlIGxhcmdlc3QgZGltZW5zaW9uIHRvIGFsbG93IGZvciBhIHNhZmUgYXJlYSBmb3IgdGhlXHJcbiAgLy8gaW1hZ2UgdG8gcm90YXRlIGluIHdpdGhvdXQgYmVpbmcgY2xpcHBlZCBieSBjYW52YXMgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHNhZmVBcmVhXHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhXHJcblxyXG4gIC8vIHRyYW5zbGF0ZSBjYW52YXMgY29udGV4dCB0byBhIGNlbnRyYWwgbG9jYXRpb24gb24gaW1hZ2UgdG8gYWxsb3cgcm90YXRpbmcgYXJvdW5kIHRoZSBjZW50ZXIuXHJcbiAgY3R4LnRyYW5zbGF0ZShzYWZlQXJlYSAvIDIsIHNhZmVBcmVhIC8gMilcclxuICBjdHgucm90YXRlKGdldFJhZGlhbkFuZ2xlKHJvdGF0aW9uKSlcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpXHJcblxyXG4gIC8vIGRyYXcgcm90YXRlZCBpbWFnZSBhbmQgc3RvcmUgZGF0YS5cclxuICBjdHguZHJhd0ltYWdlKFxyXG4gICAgaW1hZ2UsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS53aWR0aCAqIDAuNSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLmhlaWdodCAqIDAuNVxyXG4gIClcclxuICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpXHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aFxyXG4gIGNhbnZhcy5oZWlnaHQgPSBwaXhlbENyb3AuaGVpZ2h0XHJcblxyXG4gIC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuICBjdHgucHV0SW1hZ2VEYXRhKFxyXG4gICAgZGF0YSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngpLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnkpXHJcbiAgKVxyXG5cclxuICBcclxuXHJcbiAgLy8gQXMgQmFzZTY0IHN0cmluZ1xyXG4gIC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XHJcblxyXG4gIC8vIEFzIGEgYmxvYlxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBibG9iKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vdGhpcyBpcyB1cGxvYWRzIHRvIHJlc2V0IGFsbCB0byBudWxsIGZvciB1cGxvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIHJlc29sdmUoYmxvYilcclxuICAgIH0sICdpbWFnZS9qcGVnJylcclxuICB9KVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8QXBwIC8+XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tZXJMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvY3VzdG9tZXIvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cclxuICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPEN1c3RvbWVyTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IG1vbnRoID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0TW9udGgoKSArIDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHllYXI6IHllYXIsXHJcbiAgICBtb250aDogbW9udGgsXHJcbiAgICBzdGFydERhdGU6IG5ldyBEYXRlKERhdGUubm93KCkpLFxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2Rhc2hib2FyZD95ZWFyPSR7dGhpcy5zdGF0ZS55ZWFyfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiByZXNwb25zZS5kYXRhIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1vbnRoKG1vbnRoKSB7XHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJGZWJ1YXJ5XCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcIk1heVwiO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XHJcbiAgICAgIGNhc2UgOTpcclxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICByZXR1cm4gXCJPY2t0b2JlclwiO1xyXG4gICAgICBjYXNlIDExOlxyXG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIFwiRGlzZW1iZXJcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGZvciBkYXNoYm9hcmRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHllYXIsIG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIHllYXIsIG1vbnRoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxoNj5DaGFuZ2UgTW9udGggYW5kIFllYXIgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChkYXRhLnRvdGFsX3N1bSA/IGRhdGEudG90YWxfc3VtIDogMCkudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlRvdGFsIFNhbGVzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyA8aDQ+e2RhdGEudXNlcnN9PC9oND4gOiA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+Q3VzdG9tZXJzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnN1bVt5ZWFyXSA/IGRhdGEuc3VtW3llYXJdIDogMC4wXHJcbiAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5ZZWFybHkgU2FsZXMgOiB7eWVhcn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5STSB7cGFyc2VGbG9hdChkYXRhLm1vbnRoW21vbnRoXSkudG9GaXhlZCgyKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2Pk1vbnRseSBTYWxlcyA6IHt0aGlzLmhhbmRsZU1vbnRoKG1vbnRoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcInNhbGVzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgZGVzaWduIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRvdGFsIFNhbGVzIEJ5IE1vbnRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFByb3BzPXt7IFwiZGF0YS10ZXN0aWRcIjogXCIyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJMaW5lQ2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJPcmRlciBDb3VudFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hcmNoXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9udGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB2QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPcmRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjFcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZVNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsgbS0wIHAtMCBweC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xIFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTEgXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2luYXRlT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9vcmRlci9QYWdpbmF0ZU9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyc1xyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UGFnaW5hdGVPcmRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdExpc3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQcm9kdWN0TGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz4gRGFzaGJvYXJkXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz4gQ3VzdG9tZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaT4gQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdC1hbHRcIj48L2k+IERldm9wc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL3Zpc2l0b3JcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdC1hbHRcIj48L2k+IFZpc2l0b3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=