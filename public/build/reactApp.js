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



function Visitor() {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/admin/test/test").then(res => setData(res.data)).catch(e => console.log(e));
  }, []);
  console.log(data);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "kambing");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9GaWVsZEFycmF5c0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL1N0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL0JpdGNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9BcHBDcm9wL3V0aWxzL2Nyb3BJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvRWFzeUNyb3AuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL01vYmlsZURhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvTW9iaWxlVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvbW9iaWxlY29tcC9jcm9wSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL2Nyb3BJbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL21vYmlsZWNvbXAvQXBwQ3JvcC9BcHAuY3NzPzc5M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9tb2JpbGVjb21wL0FwcENyb3AvaW5kZXguY3NzPzY5NjYiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBheWxvYWQiLCJzZXRTdGF0ZSIsInNob3dDcm9wIiwic3JjIiwidXBsb2FkIiwic2hvd3RvcGJhciIsInN0YXRlIiwiaWRFZGl0IiwibW9iaWxlVmlldyIsInNob3dTaWRlYmFyIiwic2hvd0Vhc3lDcm9wRGlhbG9nIiwidXBkYXRlVmlld1N0YXRlIiwiYmluZCIsInRvZ2dsZVNpZGVCYXIiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmVuZGVyIiwiY29udGFpbmVyQ2xhc3MiLCJoYW5kbGVTaG93Q3JvcCIsImhhbmRsZUNsb3NlQ3JvcCIsImhhbmRsZWNhbmNlbHRvcHgiLCJDcm9wcGluZyIsImltYWdlIiwiaW1hZ2VSZWYiLCJjcm9wIiwibWFrZUNsaWVudENyb3AiLCJlIiwibG9hZGluZyIsImNyb3BwZWRJbWFnZVVybCIsImltYWdlQmxvYiIsInNob3dDcm9wSW1hZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImNhbmNlbExvYWQiLCJjYW5jZWx0b3B4IiwieCIsInkiLCJ3aWR0aCIsImFzcGVjdCIsImhlaWdodCIsImdldENyb3BwZWRJbWciLCJmaWxlTmFtZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiYmxvYiIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJmaWxlVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiaGFuZGxlQ2xvc2VUb3BYIiwiaGFuZGxlQmFja0FjdGlvbiIsImhhbmRsZVVwbG9hZCIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsImhhbmRsZVNob3dDcm9wSW1hZ2UiLCJkYXRhVVJMdG9GaWxlIiwiZGF0YVVybCIsInJlcyIsImZldGNoIiwiRmlsZSIsInR5cGUiLCJWaXNpdG9yIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsImNhdGNoIiwibG9nIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwibGltaXQiLCJyYW5nZSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicGFnaW5hdGlvbiIsInBhZ2luYXRlIiwiYWN0aXZlIiwicGFnZSIsImlkIiwiQXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJyZWZzIiwiZW1haWwiLCJ2YWx1ZSIsImRlZmF1bHREYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGFnaW5hdGVEYXRhIiwiYXJyYXkiLCJwYWdlX3NpemUiLCJwYWdlX251bWJlciIsInNsaWNlIiwibW91bnRlZCIsImhhbmRsZUVkaXQiLCJlZGl0IiwiaXRlbXMiLCJudW1iZXIiLCJwdXNoIiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJtYXAiLCJpIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY2l0eSIsInBvc3Rjb2RlIiwiY291bnRyeSIsInBob25lTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsInBheXBhbCIsImFtb3VudCIsImN1cnJlbmN5IiwiaGFuZGxlUEVORElORyIsImhhbmRsZVByb2Nlc3NpbmciLCJoYW5kbGVEZWxpdmVyaW5nIiwiaGFuZGxlQ29tcGxldGVkIiwiUGFnaW5hdGVPcmRlciIsImFyciIsInF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJvcmRlcklkIiwiZ3JlYXRlciIsImxlc3MiLCJ1c2VyIiwiZ2V0VGltZSIsImRhdGVTYW1lIiwic2V0RGF0ZSIsIml0ZW0iLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsInBpY2EiLCJyZXF1aXJlIiwiY3JlYXRlSW1hZ2UiLCJJbWFnZSIsInNldEF0dHJpYnV0ZSIsImdldFJhZGlhbkFuZ2xlIiwiZGVncmVlVmFsdWUiLCJQSSIsIkNhbnZhc0Nyb3AiLCJpbWFnZVNyYyIsInBpeGVsQ3JvcCIsInJvdGF0aW9uIiwibWF4U2l6ZSIsIm1heCIsInNhZmVBcmVhIiwic3FydCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInJvdW5kIiwibG9hZCIsIkNhdGVnb3J5TGlzdCIsInN1YmNhdGVnb3J5Iiwic2V0c3ViY2F0ZWdvcnkiLCJzdWJ0d28iLCJzZXRzdWJ0d28iLCJkZWxjYXQiLCJzZXRkZWxjYXQiLCJkZWxzdWIiLCJzZXRkZWxzdWIiLCJkZWxzdWJ0d28iLCJzZXRkZWxzdWJ0d28iLCJvblNlbGVjdENhdGVnb3J5IiwicGFyYW1zIiwicmVzZXREZWxldGVJdGVtIiwic3ViQ2F0ZWdvcnlTZWxlY3QiLCJzdWJ0d29DYXRlZ29yeVNlbGVjdCIsImRlbGV0ZUNhdGVnb3J5IiwiZXJyIiwibmV3Y2F0IiwicyIsImRlbGV0ZVN1YkNhdGVnb3J5IiwibmV3c3ViIiwiZGVsZXRlU3VidHdvQ2F0ZWdvcnkiLCJuZXdzdWJ0d28iLCJtaW5XaWR0aCIsInN1YiIsImlzIiwic3ViY2F0ZWdvcnluYW1lIiwic3VidCIsInN1YnR3b2NhdGVnb3J5bmFtZSIsIkNyb3BwZXJ2MiIsInNldENyb3AiLCJzZXRSb3RhdGlvbiIsInpvb20iLCJzZXRab29tIiwiY3JvcHBlZEltYWdlIiwic2V0Q3JvcHBlZEltYWdlIiwiY3JvcHBlZEFyZWFQaXhlbHMiLCJzZXRDcm9wcGVkQXJlYVBpeGVscyIsInVzZUNhbGxiYWNrIiwiY3JvcHBlZEFyZWEiLCJDbG9zZURpYWxvZyIsImNsb3NlRGlhbG9nIiwiY2xlYXJTdGF0ZSIsInNob3dDcm9wcGVkSW1hZ2UiLCJVcGxvYWRJbWFnZSIsInNob3dEaWFsb2ciLCJkaWFsb2dTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiY29udGFpbmVyQnV0dG9uU3R5bGUiLCJjb250YWluZXJDcm9wcGVyU3R5bGUiLCJjcm9wcGVyU3R5bGUiLCJzbGlkZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImRpdkRpYWxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJjcm9wcGVkSW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiTUNhdGVnb3J5IiwiaW5kZXgiLCJhZGRjYXQiLCJjYXRlZ29yaWVzIiwiZmluZCIsImRhdGFzIiwiaWR4IiwidW5kZWZpbmVkIiwibmV3ZGF0YWxpc3QiLCJkYXRhbGlzdCIsIml4IiwiY2F0ZWdvcnluYW1lIiwibmV3RGF0YSIsInBvc3QiLCJkaXNhYmxlIiwiY2F0ZWdvcnlpZCIsImNoYW5nZWNhdGVnb3J5IiwiYWRkc3ViIiwiY2F0IiwiY2F0aSIsInN1YmNhdGVnb3J5aWQiLCJhZGRzdWJ0d28iLCJhZGRzdWJ0d29jYXQiLCJpdHdvIiwiYWRzdCIsImFkc3RpIiwic3VidHdvY2F0ZWdvcnkiLCJzdWJ0d29jYXRlZ29yeWlkIiwiYnV0Y2F0IiwiYWRkbW9yZXN1YiIsImFkZG1vcmUiLCJhaWR4IiwiYnV0c3ViIiwic3VidHdvaW5keCIsImFkZG1vcmVzdWJ0d28iLCJhbXNpIiwic3ViY2F0aW5pdCIsInNjaWR4IiwiZW5hYmxlIiwicmVtb3ZlY2F0IiwiYSIsInJlbW92ZWNhdGVnb3J5Iiwic3ViaSIsInJlbW92ZWQiLCJtb2QiLCJtb2RpbmR4IiwiaXN1YiIsInoiLCJyZW1vdmVzdWJ0d28iLCJmaWwiLCJpbmQiLCJjYXRpZHgiLCJzdWJpZHgiLCJzdWJkYXRhIiwiY2F0ZWdvcnkiLCJtb2RpZmllZCIsImluY2F0aW5keCIsImluY2F0c3ViaWR4IiwiaW5jYXRzdWJ0d29pZHgiLCJldmVudCIsInN1YnR3b2RhdGEiLCJTdWJ0d29jYXRlZ29yeSIsInN0aSIsInN1YnR3b25ldyIsImNhdHN1YnR3byIsImNhdHN1YnR3b2lkeCIsImNhdHN1YiIsImNhdHN1YmlkeCIsInN1YnR3b2lkeCIsImhhbmRsZUF4aW9zIiwiaGFuZGxlSW5wdXQiLCJrZXkiLCJoYW5kbGVSZW1vdmVDYXRlZ29yeSIsImhhbmRsZUFkZENhdGVnb3J5IiwiaGFuZGxlU3ViSW5wdXQiLCJkYiIsImRiaXgiLCJkYnMiLCJkYmkiLCJoYW5kbGVSZW1vdmVTdWJDYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWIiLCJzdWIyIiwiaW5kdHdvIiwiaGFuZGxlU3ViVHdvSW5wdXQiLCJzZGJpIiwiaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkiLCJoYW5kbGVBZGRNb3JlU3ViVHdvIiwiaGFuZGxlQWRkc3VidHdvY2F0ZWdvcnkiLCJoYW5kbGVBZGRTdWJDYXRlZ29yeSIsIlBEZXRhaWxzIiwiZGV0YWlscyIsImNvbmNhdCIsImRldGFpbG5hbWUiLCJkYXRhZGVzYyIsInJlbW92ZSIsInJlbW92ZWRldGFpbCIsIm5ld2RldGFpbHMiLCJkZXRhaWwiLCJuZXdkZXRhaWxkYXRhZGVzYyIsImhhbmRsZUNoYW5nZURldGFpbE5hbWUiLCJoYW5kbGVDaGFuZ2VEYXRhRGVzYyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZUFkZCIsIlBpY3R1cmUiLCJwaWN0dXJlIiwiaW1hZ2VpZCIsImltYWdlbmFtZSIsImZpbGVJbnB1dCIsImlucHV0RmlsZSIsImZpIiwiaW1hZ2VkZWwiLCJwaWN0dXJldXAiLCJtZXNzYWdlIiwicmVtb3ZlcGljdHVyZSIsImFsZXJ0IiwiZmlsZXMiLCJzaXplIiwidGFyZ2V0aW1hZ2UiLCJsb2FkSW1hZ2UiLCJpbWciLCJwaXhlbCIsInJhdGlvIiwiaW1nY29tcCIsImNvbXByZXNzSW1hZ2UiLCJiYXNlNjRkYXRhIiwidG9EYXRhVVJMIiwic2hvd0Vhc3lDcm9wIiwic2V0VGltZW91dCIsIm9yaWVudGF0aW9uIiwibG9hZGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUFkZEltYWdlIiwiaGFuZGxlQ2xvc2VFYXN5Q3JvcCIsImltYWdlVXBsb2FkIiwic2hvd1BpY3R1cmUiLCJzaG93QmxhY2tTY3JlZW4iLCJoYW5kbGVSZW1vdmVJbWFnZSIsIm9uU2VsZWN0RmlsZSIsImhhbmRsZUltYWdlQWRkIiwic3VibWl0RGlhbG9nIiwiY3J0Iiwib2ZmU2NyZWVuQ2FudmFzIiwicmVzaXplIiwiaW1hZ2VDQ1MiLCJQcm9kdWN0QWRkIiwicHJpY2UiLCJzdG9jayIsImRlc2MiLCJpbWFnZXMiLCJoaXN0b3J5Iiwic2hvd2J1dHRvbiIsInNob3dDcm9wcGVyRGlhbG9nIiwiaGFuZFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVVwbG9hZGVkIiwiY2xvc2VDcm9wIiwiaGFuZGxlUmVtb3ZlUGljdHVyZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlUmVtb3ZlRGV0YWlsIiwiaGFuZGxlTmV3RGV0YWlscyIsImhhbmRsZVNhdmVCdXR0b24iLCJBZGRQcm9kdWN0IiwiY2F0ZWdvcnlJZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2F2ZUJ1dHRvbiIsInZhbGlkYXRlIiwiaW1hZ2VJZCIsImhhbmRsZURldGFpbE5hbWUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJzZWxlY3RlZCIsImhhbmRsZUNhdGVnb3J5IiwiQ2F0ZWdvcnlFZGl0IiwiQ3JvcERpYWxvZyIsImFkZEltYWdlIiwiZGVmYXVsdEltYWdlIiwiRWRpdENhdCIsIkVkaXRQcm9kdWN0RGV0YWlscyIsImRhdGFpbmRleCIsImRhdGFjaGFuZ2UiLCJmb3JkZXRhaWxzIiwiaGFuZGxlRGV0YWlsQ2hhbmdlIiwiaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkRGV0YWlscyIsIkVkaXRpbmciLCJnb3RudWxsZGF0YSIsInNob3dBZGRJbWFnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwicHJvZHVjdERldGFpbHNzIiwiaGFuZGxlU2F2ZSIsImhhbmRsZURldGFpbHNOdWxsIiwiSW1hZ2VMaXN0IiwiaW1hZ2VDbGlja2VkIiwiZmlsZW5hbWUiLCJNb2RhbFByb2QiLCJQcm9kdWN0RGV0YWlscyIsImV2dCIsIm5ld1NoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVyIiwic2lkeCIsIm5ld1NoYXJlaG9sZGVyZGVzYyIsImRldGFpbG5hbWVoYXNpbnB1dCIsImRhdGFkZXNjaGFzaW5wdXQiLCJoYW5kbGVTaGFyZWhvbGRlck5hbWVDaGFuZ2UiLCJoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UiLCJoYW5kbGVSZW1vdmVTaGFyZWhvbGRlciIsImhhbmRsZUFkZFNoYXJlaG9sZGVyIiwicHJvZHVjdCIsInByb2R1Y3RJbnB1dCIsImNhdGVnb3J5SW5wdXQiLCJzdG9ja2dyZWF0Iiwic3RvY2tncmVhdElucHV0Iiwic3RvY2tsZXNzIiwic3RvY2tsZXNzSW5wdXQiLCJjYXRlZ29yeUZpbHRlciIsInBpY3R1cmVzIiwiYiIsIlVwbG9hZCIsImFkZGltYWdlIiwicmVuZGVyRmllbGQiLCJpbnB1dCIsImxhYmVsIiwibWV0YSIsInRvdWNoZWQiLCJyZW5kZXJNZW1iZXJzIiwiZmllbGRzIiwic3VibWl0RmFpbGVkIiwibWVtYmVyIiwiaGFuZGxlVGVrYW4iLCJGaWVsZEFycmF5c0Zvcm0iLCJwcmlzdGluZSIsInJlc2V0Iiwic3VibWl0dGluZyIsInJlZHV4Rm9ybSIsImZvcm0iLCJGb3JtUmVkdXgiLCJzdG9yZSIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEZvcm1SZWR1Y2VyIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJjcmVhdGVTdG9yZSIsInZhbHVlcyIsImVycm9ycyIsIm1lbWJlcnMiLCJfZXJyb3IiLCJtZW1iZXJzQXJyYXlFcnJvcnMiLCJmb3JFYWNoIiwibWVtYmVySW5kZXgiLCJtZW1iZXJFcnJvcnMiLCJCaXRjaCIsImlucHV0UmVmIiwiUmVhY3QiLCJ0cmlnZ2VyRmlsZVNlbGVjdFBvcHVwIiwiY3VycmVudCIsImNsaWNrIiwic2V0SW1hZ2UiLCJzZXRDcm9wcGVkQXJlYSIsImNyb3BwZWRBcmVhUGVyY2VudGFnZSIsIm9uRG93bmxvYWQiLCJnZW5lcmF0ZURvd25sb2FkIiwibWFyZ2luUmlnaHQiLCJwcmV2aWV3VXJsIiwiYW5jaG9yIiwiZG93bmxvYWQiLCJocmVmIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsInNwYWNpbmciLCJ0aXRsZSIsIkVhc3lDcm9wIiwidXNlUmVmIiwiY2xhc3NlcyIsInJhdGlvcGl4ZWwiLCJpbWdjcnMiLCJ1cGxvYWRmaWxlIiwiZ2V0VXBsb2FkIiwiYm9yZGVyIiwiTW9iaWxlRGFzaGJvYXJkIiwiTW9iaWxlVXBsb2FkIiwic2V0TmFtZSIsImNvdW50Iiwic2V0Q291bnQiLCJoYW5kbGVDaGFuZ2UiLCJoYWhhIiwiZiIsInByb21pc2UiLCJoYW5kbGVDbGlja0NvdW50IiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsIkN1c3RvbWVyIiwibm93IiwiRGFzaGJvYXJkIiwic3RhcnREYXRlIiwiZ2V0RGF0YSIsImhhbmRsZU1vbnRoIiwidGV4dEFsaWduIiwidG90YWxfc3VtIiwidG9GaXhlZCIsInVzZXJzIiwic3VtIiwiY2hhcnQiLCJoQXhpcyIsInZBeGlzIiwiTW9iaWxlU2lkZUJhciIsIk9yZGVycyIsIlByb2R1Y3QiLCJTaWRlYmFyIiwibGlzdFN0eWxlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBbEIsQ0FBNEI7QUFDekNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDRD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QUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLGFBREYsQ0FYRixFQW9CRSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLFdBREYsQ0FwQkYsRUE4QkUsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsV0FETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsZUFBUyxFQUFDO0FBQWIsTUFMRixjQURGLENBOUJGLEVBdUNFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLGFBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLFdBQUssRUFBQztBQUFULE1BTEYsZ0JBREYsQ0F2Q0YsRUFnREUsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsZ0JBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLFdBQUssRUFBQztBQUFULE1BTEYsWUFERixDQWhERixFQXlERSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxVQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxXQUFLLEVBQUM7QUFBVCxNQUxGLGFBREYsQ0F6REYsQ0FERixDQURGO0FBdUVEOztBQXpFNEMsQzs7Ozs7Ozs7Ozs7O0FDSC9DOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZ1wiO1xyXG5pbXBvcnQgQ3JvcHBpbmcgZnJvbSBcIi4vQ3JvcHBpbmdcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuL2NvbXBvbmVudC9vcmRlci9PcmRlclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlFZGl0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXRcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcbmltcG9ydCBQcm9kdWN0QWRkIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL1Byb2R1Y3RBZGRcIjtcclxuaW1wb3J0IE1vYmlsZVNpZGVCYXIgZnJvbSBcIi4vcm91dGVyL01vYmlsZVNpZGVCYXJcIjtcclxuaW1wb3J0IE1vYmlsZVVwbG9hZCBmcm9tIFwiLi9tb2JpbGVjb21wL01vYmlsZVVwbG9hZFwiO1xyXG5pbXBvcnQgTW9iaWxlRGFzaGJvYXJkIGZyb20gXCIuL21vYmlsZWNvbXAvTW9iaWxlRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBFYXN5Q3JvcCBmcm9tIFwiLi9tb2JpbGVjb21wL0Vhc3lDcm9wXCI7XHJcbmltcG9ydCBDcm9wcGVydjIgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyXCI7XHJcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0XCI7XHJcbmltcG9ydCBWaXNpdG9yIGZyb20gXCIuL2NvbXBvbmVudC9WaXNpdG9yL1Zpc2l0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgICBpZEVkaXQ6IG51bGwsXHJcbiAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgc2hvd3RvcGJhcjogdHJ1ZSxcclxuICAgICAgc2hvd0Vhc3lDcm9wRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSA9IHRoaXMudXBkYXRlVmlld1N0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVNpZGVCYXIgPSB0aGlzLnRvZ2dsZVNpZGVCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcm9wID0gKHBheWxvYWQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93Q3JvcDogdHJ1ZSxcclxuICAgICAgc3JjOiBwYXlsb2FkLnNyYyxcclxuICAgICAgdXBsb2FkOiBwYXlsb2FkLnVwbG9hZCxcclxuICAgICAgc2hvd3RvcGJhcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3A6IGZhbHNlLCBzaG93dG9wYmFyOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVNpZGVCYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd1NpZGViYXI6ICF0aGlzLnN0YXRlLnNob3dTaWRlYmFyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVjYW5jZWx0b3B4ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3U3RhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubW9iaWxlVmlldyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IHRydWUsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyNCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb2JpbGVWaWV3OiBmYWxzZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyQ2xhc3MgPSBcImQtZmxleFwiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlVmlldykgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93dG9wYmFyICYmIChcclxuICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyBudWxsIDogPE1vYmlsZVNpZGVCYXIgLz59PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyA8U2lkZWJhciAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiByZW5kZXI9eyhwcm9wcykgPT4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RcIiByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3Qgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFkZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5oYW5kbGVTaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLmhhbmRsZUNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlld29yZGVyXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxFZGl0aW5nIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUxpc3Qgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3RBZGQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Zpc2l0b3JcIiByZW5kZXI9eyhwcm9wcykgPT4gPFZpc2l0b3Igey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLnN0YXRlLnNob3dDcm9wfVxyXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgICB1cGxvYWQ9e3RoaXMuc3RhdGUudXBsb2FkfVxyXG4gICAgICAgICAgICBjYW5jZWx0b3B4PXt0aGlzLmhhbmRsZWNhbmNlbHRvcHh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nyb3AuY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcHBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgfSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IGZhbHNlLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYixcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Q3JvcEltYWdlID0gKGUpID0+IHt9O1xyXG4gIGNhbmNlbExvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQmFja0FjdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3BJbWFnZTogZmFsc2UgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51cGxvYWQodGhpcy5zdGF0ZS5pbWFnZUJsb2IsIHRoaXMuY2FuY2VsTG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVNob3dDcm9wSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZVRvcFggPSAoZSkgPT57XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2FuY2VsTG9hZCgpOyAvL2NhdXRpb24gdGhpcyBpcyBuZXdcclxuICAgICAgdGhpcy5wcm9wcy5jYW5jZWx0b3B4KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3BwZWRJbWFnZVVybCwgc2hvd0Nyb3BJbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZVRvcFh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtzaG93Q3JvcEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja0FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICAgICAgICAgICAgICBjcm9wPXt0aGlzLnN0YXRlLmNyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3JvcHBlZEltYWdlVXJsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0Nyb3BJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz4gVXBsb2FkaW5nIEltYWdlLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRhVVJMdG9GaWxlKGRhdGFVcmwsIGZpbGVOYW1lKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRhdGFVcmwpO1xyXG4gIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xyXG4gIHJldHVybiBuZXcgRmlsZShbYmxvYl0sIGZpbGVOYW1lLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0RGVmYXVsdExvY2FsZSB9IGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNpdG9yKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiYXBpL2FkbWluL3Rlc3QvdGVzdFwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiBzZXREYXRhKHJlcy5kYXRhKSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIDxkaXY+a2FtYmluZzwvZGl2PjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG4gIH07XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9jdXN0b21lcmApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZSh0aGlzLnN0YXRlLmFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUVkaXQoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuZWRpdChpZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcbiAgICB0aGlzLnJlZnMuZW1haWwudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXJlZCBPbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guZmlyc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJtb2RhbFwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gRGVsZXRlIE9yZGVyIHt0aGlzLnByb3BzLmlkfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsb3JkZXJcIiArIHRoaXMucHJvcHMubmFtZSArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcclxuICAgICAgICAgIFwibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBPcmRlciBTdGF0dXMgV2lsbCBDaGFuZ2UgdG8ge3RoaXMucHJvcHMubmFtZX0/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWxPcmRlciBmcm9tIFwiLi9Nb2RhbE9yZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBudWxsLCBzdGF0dXM6IG51bGwgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUEVORElORyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBFTkRJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNvbXBsZXRlZCA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVEZWxpdmVyaW5nID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiREVMSVZFUklOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2Nlc3NpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJQUk9DRVNTSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvb3JkZXJzXCI+T3JkZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgVmlldyBPcmRlclxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMyBtdC0zXCI+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pk9yZGVyIExpc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vcmRlcmRldGFpbHMubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHgucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5xdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS50b3RhbH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGF0YSl9ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+Q3VzdG9tZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFkZHJlc3MgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENpdHkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNpdHl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBvc3Rjb2RlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDb3VudHJ5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXIgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBob25lTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1Pk9yZGVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgT3JkZXIgRGF0ZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUGF5bWVudCBNZXRob2QgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXltZW50TWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0dXMgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57c3RhdHVzICYmIHN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZWQgQXQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS51cGRhdGVfYXR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+UGF5UGFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQW1vdW50IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5cGFsLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ3VycmVuY3kgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgZGF0YS5wYXlwYWwuc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PkFjdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQRU5ESU5HKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUEVORElOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVBFTkRJTkd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBFTkRJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQcm9jZXNzaW5nKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUFJPQ0VTU0lOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVByb2Nlc3Npbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBST0NFU1NJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGl2ZXJpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJERUxJVkVSSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlRGVsaXZlcmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiREVMSVZFUklOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDb21wbGV0ZWQoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckNPTVBMRVRFRFwiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlQ29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJDT01QTEVURURcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZU9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgc3RhdHVzRmlsdGVyOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL29yZGVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXNcIiwgZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdERhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGFyciwgcXVlcnkpID0+IHtcclxuICAgIHJldHVybiBhcnIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICB9O1xyXG5cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG5cclxuICAgIC8vIGxldCB0b0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgLy8gbGV0IGZvcm1hdERhdGUgPVxyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXREYXRlKCkgK1xyXG4gICAgLy8gICBcIi1cIih0b0Zvcm1hdC5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcixcclxuICAgICAgZnJvbURhdGUsXHJcbiAgICAgIHRvRGF0ZSxcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZ3JlYXRlcixcclxuICAgICAgbGVzcyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC51c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XHJcbiAgICAgIGlmIChzdGF0dXNGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmcm9tRGF0ZSAmJiB0b0RhdGUpIHtcclxuICAgICAgaWYgKG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgPT09IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgbGV0IGRhdGVTYW1lID0gbmV3IERhdGUodG9EYXRlKTtcclxuICAgICAgICBkYXRlU2FtZS5zZXREYXRlKGRhdGVTYW1lLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBkYXRlU2FtZS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkID09PSBwYXJzZUludChvcmRlcklkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyZWF0ZXIpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnRvdGFsID4gcGFyc2VGbG9hdChncmVhdGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPCBwYXJzZUZsb2F0KGxlc3MpKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vb3JkZXJzLyR7dmFsdWV9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGxldCB7IGRhdGEsIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZGVsZXRlZCA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuc3RhdHVzLnZhbHVlID0gXCJOT05FXCI7XHJcbiAgICB0aGlzLnJlZnMub3JkZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmdyZWF0ZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmxlc3MudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICAgIGdyZWF0ZXI6IG51bGwsXHJcbiAgICAgIGxlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHJhbmdlLCBhY3RpdmUsIHBhZ2luYXRpb24sIHN0YXR1c0ZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0ZpbHRlcik7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzRmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVORElOR1wiPlBFTkRJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERUxJVkVSSU5HXCI+REVMSVZFUklORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09NUExFVEVEXCI+Q09NUExFVEVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzU3RhcnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyb21EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNFbmRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRvRGF0ZTogZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JkZXIgSWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgb3JkZXJJZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJncmVhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JlYXRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbGVzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBFbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIENyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC51c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3ZpZXdvcmRlclwiLCBzdGF0ZTogeyBkYXRhOiB4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuLXNxdWFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifVZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGV9IGlkPXt4LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5jb25zdCBjcmVhdGVJbWFnZSA9ICh1cmwpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoaW1hZ2UpKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY3Jvc3NPcmlnaW5cIiwgXCJhbm9ueW1vdXNcIik7IC8vIG5lZWRlZCB0byBhdm9pZCBjcm9zcy1vcmlnaW4gaXNzdWVzIG9uIENvZGVTYW5kYm94XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBnZXRSYWRpYW5BbmdsZShkZWdyZWVWYWx1ZSkge1xyXG4gIHJldHVybiAoZGVncmVlVmFsdWUgKiBNYXRoLlBJKSAvIDE4MDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQ2FudmFzQ3JvcChpbWFnZVNyYywgcGl4ZWxDcm9wLCByb3RhdGlvbiA9IDApIHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IGNyZWF0ZUltYWdlKGltYWdlU3JjKTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gIGNvbnN0IG1heFNpemUgPSBNYXRoLm1heChpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICBjb25zdCBzYWZlQXJlYSA9IDIgKiAoKG1heFNpemUgLyAyKSAqIE1hdGguc3FydCgyKSk7XHJcblxyXG4gIC8vIHNldCBlYWNoIGRpbWVuc2lvbnMgdG8gZG91YmxlIGxhcmdlc3QgZGltZW5zaW9uIHRvIGFsbG93IGZvciBhIHNhZmUgYXJlYSBmb3IgdGhlXHJcbiAgLy8gaW1hZ2UgdG8gcm90YXRlIGluIHdpdGhvdXQgYmVpbmcgY2xpcHBlZCBieSBjYW52YXMgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHNhZmVBcmVhO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBzYWZlQXJlYTtcclxuXHJcbiAgLy8gdHJhbnNsYXRlIGNhbnZhcyBjb250ZXh0IHRvIGEgY2VudHJhbCBsb2NhdGlvbiBvbiBpbWFnZSB0byBhbGxvdyByb3RhdGluZyBhcm91bmQgdGhlIGNlbnRlci5cclxuICBjdHgudHJhbnNsYXRlKHNhZmVBcmVhIC8gMiwgc2FmZUFyZWEgLyAyKTtcclxuICBjdHgucm90YXRlKGdldFJhZGlhbkFuZ2xlKHJvdGF0aW9uKSk7XHJcbiAgY3R4LnRyYW5zbGF0ZSgtc2FmZUFyZWEgLyAyLCAtc2FmZUFyZWEgLyAyKTtcclxuXHJcbiAgLy8gZHJhdyByb3RhdGVkIGltYWdlIGFuZCBzdG9yZSBkYXRhLlxyXG4gIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICBpbWFnZSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLndpZHRoICogMC41LFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2UuaGVpZ2h0ICogMC41XHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpO1xyXG5cclxuICAvLyBzZXQgY2FudmFzIHdpZHRoIHRvIGZpbmFsIGRlc2lyZWQgY3JvcCBzaXplIC0gdGhpcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGNvbnRleHRcclxuICBjYW52YXMud2lkdGggPSBwaXhlbENyb3Aud2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHQ7XHJcblxyXG4gIC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuICBjdHgucHV0SW1hZ2VEYXRhKFxyXG4gICAgZGF0YSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngpLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnkpXHJcbiAgKTtcclxuXHJcbiAgLy8gQXMgQmFzZTY0IHN0cmluZ1xyXG4gIC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XHJcblxyXG4gIC8vIEFzIGEgYmxvYlxyXG4gIHJldHVybiBhd2FpdCBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gICAgcmV0dXJuIGxvYWQ7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIC8vICAgcGljYS50b0Jsb2IoY2FudmFzLCBcImltYWdlL2pwZWdcIiwgMC45KS50aGVuKChibG9iKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gIC8vICAgICByZXNvbHZlKGxvYWQpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVW5kb1JvdW5kZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5TGlzdChwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWJjYXRlZ29yeSwgc2V0c3ViY2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YnR3bywgc2V0c3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxjYXQsIHNldGRlbGNhdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3ViLCBzZXRkZWxzdWJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbHN1YnR3bywgc2V0ZGVsc3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3QvYWxsY2F0ZWdvcmllc1wiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2VsZWN0Q2F0ZWdvcnkocGFyYW1zKSB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0c3VidHdvKG51bGwpO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YmNhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsY2F0KHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YmNhdGVnb3J5KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0RGVsZXRlSXRlbSA9ICgpID0+IHtcclxuICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgIHNldGRlbHN1YihudWxsKTtcclxuICAgIHNldGRlbHN1YnR3byhudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJDYXRlZ29yeVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGFyZ2V0fS9zdWJ0d29jYXRlZ29yaWVzYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgIHNldGRlbHN1YihwYXJzZUludCh0YXJnZXQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRzdWJ0d28ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YnR3b0NhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgc2V0ZGVsc3VidHdvKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWxzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2RlbGNhdH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3Y2F0ID0gZGF0YS5maWx0ZXIoKHMsIGkpID0+IGRlbGNhdCAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdjYXQpO1xyXG4gICAgc2V0RGF0YShuZXdjYXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVN1YkNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vc3ViY2F0ZWdvcmllcy8ke2RlbHN1Yn1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3c3ViID0gc3ViY2F0ZWdvcnkuZmlsdGVyKChzLCBpKSA9PiBkZWxzdWIgIT09IHMuaWQpO1xyXG4gICAgY29uc29sZS5sb2cobmV3c3ViKTtcclxuICAgIHNldHN1YmNhdGVnb3J5KG5ld3N1Yik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3VidHdvQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJ0d29jYXRlZ29yaWVzLyR7ZGVsc3VidHdvfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWJ0d28gPSBzdWJ0d28uZmlsdGVyKChzLCBpKSA9PiBkZWxzdWJ0d28gIT09IHMuaWQpO1xyXG4gICAgc2V0c3VidHdvKG5ld3N1YnR3byk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPHA+dGhpcyBpcyBjYXRlZ29yeSBsaXN0PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDYXRlZ29yeX1cclxuICAgICAgICAgICAgc2l6ZT1cIjIwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAge1wiID5cIn1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGNhdCA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJDYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YmNhdGVnb3J5ICYmXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnkubWFwKChzdWIsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lfSB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3ViID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViVHdvIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJ0d29DYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnR3byAmJlxyXG4gICAgICAgICAgICAgIHN1YnR3by5tYXAoKHN1YnQsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWJ0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3VidC5zdWJ0d29jYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3VidHdvID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJ0d29DYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YnR3byBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtZWFzeS1jcm9wXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU2xpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1wiO1xyXG5pbXBvcnQgQ2FudmFzQ3JvcCBmcm9tIFwiLi9DYW52YXNDcm9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9wcGVydjIocHJvcHMpIHtcclxuICBjb25zdCBbY3JvcCwgc2V0Q3JvcF0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW3JvdGF0aW9uLCBzZXRSb3RhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3JvcHBlZEltYWdlLCBzZXRDcm9wcGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3BwZWRBcmVhUGl4ZWxzLCBzZXRDcm9wcGVkQXJlYVBpeGVsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSB1c2VDYWxsYmFjaygoY3JvcHBlZEFyZWEsIGNyb3BwZWRBcmVhUGl4ZWxzKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhjcm9wcGVkQXJlYVBpeGVscyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBDbG9zZURpYWxvZygpIHtcclxuICAgIHByb3BzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICBjbGVhclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93Q3JvcHBlZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlID0gYXdhaXQgQ2FudmFzQ3JvcChcclxuICAgICAgICBwcm9wcy5wYXlsb2FkLnNyYyxcclxuICAgICAgICBjcm9wcGVkQXJlYVBpeGVscyxcclxuICAgICAgICByb3RhdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVlXCIsIHsgY3JvcHBlZEltYWdlIH0pO1xyXG4gICAgICBzZXRDcm9wcGVkSW1hZ2UoY3JvcHBlZEltYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBVcGxvYWRJbWFnZSA9ICgpID0+IHtcclxuICAgIHByb3BzLnBheWxvYWQudXBsb2FkKGNyb3BwZWRJbWFnZS5ibG9iLCBjbGVhclN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclN0YXRlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEltYWdlKG51bGwpO1xyXG4gICAgc2V0Wm9vbSgxKTtcclxuICAgIHNldENyb3AoeyB4OiAwLCB5OiAwIH0pO1xyXG4gICAgc2V0Um90YXRpb24oMCk7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhudWxsKTtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjcm9wcGVkSW1hZ2UgJiYgcHJvcHMuc2hvd0RpYWxvZyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Q2xvc2VEaWFsb2d9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgIFwiIHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBoZWlnaHQ6IFwiMjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9wcy5zaG93RGlhbG9nICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0Nyb3BwZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMucGF5bG9hZC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENvbXBsZXRlPXtvbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17c2V0Wm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2xpZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5ab29tPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+Um90YXRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMCwgMCwgMC40KVwiLFxyXG4gIHpJbmRleDogXCI1XCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuY29uc3QgY29udGFpbmVyQ3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiOTAlXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiNjAlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJCdXR0b25TdHlsZSA9IHtcclxuICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkICNmNWY1ZjVcIixcclxuICBoZWlnaHQ6IFwiMTAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZWRJbWFnZVN0eWxlID0ge1xyXG4gIG1heFdpZHRoOiBcIjUwdndcIixcclxuXHJcbiAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuIiwiaW1wb3J0IHsgRmFjZVNoYXJwLCBUcmVuZGluZ1VwU2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUNhdGVnb3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIGRhdGFsaXN0OiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgZGF0YWxpc3Q6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRDYXRlZ29yeSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgYWRkY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbmQoKGRhdGFzLCBpZHgpID0+IGluZGV4ID09PSBpZHgpO1xyXG4gICAgY29uc29sZS5sb2coXCJrZW5hIGNhcmlcIiwgYWRkY2F0KTtcclxuXHJcbiAgICBpZiAoYWRkY2F0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmV3ZGF0YWxpc3QgPSB0aGlzLnN0YXRlLmRhdGFsaXN0LmZpbHRlcihcclxuICAgICAgICAoZGF0YWxpc3QsIGl4KSA9PiBhZGRjYXQuY2F0ZWdvcnluYW1lICE9PSBkYXRhbGlzdC5uYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGFsaXN0OiBuZXdkYXRhbGlzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHBvc3QsIGlkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gdmFsdWUgaWYgc2VsZWN0XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGRpc2FibGU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeSh0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gIH07XHJcbiAgaGFuZGxlQWRkU3ViQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWRkc3ViID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoY2F0LCBjYXRpKSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gY2F0aSkgcmV0dXJuIGNhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiLCBkaXNhYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YlwiLCBhZGRzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZHN1YiB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRzdWJ0d29jYXRlZ29yeSA9IChpLCBzKSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbml0IGFkZHN1YjJcIiwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzKTtcclxuICAgIGNvbnN0IGFkZHN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAocyAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IFt7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9XSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YiB0d29cIiwgYWRkc3VidHdvKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBhZGRzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViID0gKGJ1dGNhdCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZG1vcmVzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRtb3JlLCBhaWR4KSA9PiB7XHJcbiAgICAgIGlmIChidXRjYXQgIT09IGFpZHgpIHJldHVybiBhZGRtb3JlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZG1vcmUsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIC4uLmFkZG1vcmUuc3ViY2F0ZWdvcnksXHJcbiAgICAgICAgICB7IHN1YmNhdGVnb3J5aWQ6IFwiXCIsIHN1YmNhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkbW9yZXN1YlwiLCBhZGRtb3Jlc3ViKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiBhZGRtb3Jlc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViVHdvID0gKGFkZGNhdCwgYnV0c3ViLCBzdWJ0d29pbmR4KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmVzdWIsIGFtc2kpID0+IHtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gYW1zaSkgcmV0dXJuIGFkZG1vcmVzdWI7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZXN1YixcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkbW9yZXN1Yi5zdWJjYXRlZ29yeS5tYXAoKHN1YmNhdGluaXQsIHNjaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYnV0c3ViICE9PSBzY2lkeCkgcmV0dXJuIHN1YmNhdGluaXQ7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdWJjYXRpbml0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW1xyXG4gICAgICAgICAgICAgIC4uLnN1YmNhdGluaXQuc3VidHdvY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgeyBzdWJ0d29jYXRlZ29yeWlkOiBcIlwiLCBzdWJ0d29jYXRlZ29yeW5hbWU6IFwiXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFkZG1vcmVzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZG1vcmVzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkbW9yZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGNvbnN0IGVuYWJsZSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHgsIGkpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLngsIGRpc2FibGU6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcmllczogZW5hYmxlLFxyXG4gICAgICAgIGRhdGFsaXN0OiB0aGlzLnN0YXRlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbHRlcigoYSwgaSkgPT4gaW5kZXggIT09IGkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IHJlbW92ZWNhdCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVjYXQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5ID0gKGNhdGksIHN1YmkpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgobW9kLCBtb2RpbmR4KSA9PiB7XHJcbiAgICAgIGlmIChjYXRpICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICBpZiAoY2F0aSA9PT0gMCAmJiBzdWJpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubW9kLCBzdWJjYXRlZ29yeTogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubW9kLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBtb2Quc3ViY2F0ZWdvcnkuZmlsdGVyKChzdWIsIGlzdWIpID0+IHN1YmkgIT09IGlzdWIpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IHJlbW92ZWQgfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5ID0gKHgsIHksIHopID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVzdWJ0d28gPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRzdWJ0d29jYXQsIGl0d28pID0+IHtcclxuICAgICAgaWYgKHggIT09IGl0d28pIHJldHVybiBhZGRzdWJ0d29jYXQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkc3VidHdvY2F0LFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRzdWJ0d29jYXQuc3ViY2F0ZWdvcnkubWFwKChhZHN0LCBhZHN0aSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHkgIT09IGFkc3RpKSByZXR1cm4gYWRzdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFkc3QsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBhZHN0LnN1YnR3b2NhdGVnb3J5LmZpbHRlcigoZmlsLCBpbmQpID0+IHogIT09IGluZCksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3Zlc3VidHdvIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkeCkgPT4gZS50YXJnZXQudmFsdWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpZHgpIHJldHVybiBwb3N0O1xyXG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGRhdGEubmFtZSwgY2F0ZWdvcnlpZDogZGF0YS5pZCB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gbmV3IHZhbHVlIHdpdGhvdXQgc2VsZWN0XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgY2F0ZWdvcnluYW1lOiBlLnRhcmdldC52YWx1ZSwgY2F0ZWdvcnlpZDogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IGRhdGEgOiBcIiwgbmV3RGF0YSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJJbnB1dCA9IChjYXRpZHgsIHN1YmlkeCwgY2F0ZWdvcnluYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgc3ViY2F0XCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IGNhdFwiLCBjYXRlZ29yeW5hbWUpO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgY2F0ZWdvcmlcIiwgc3ViZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGlkeCAhPT0gbW9kaW5keCkgcmV0dXJuIG1vZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXN1YikgPT4ge1xyXG4gICAgICAgICAgaWYgKHN1YmlkeCAhPT0gaXN1YikgcmV0dXJuIHN1YjtcclxuXHJcbiAgICAgICAgICBpZiAoc3ViZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IHN1YmRhdGEuc3ViY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IHN1YmRhdGEuaWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1vZGlmaWVkIDpcIiwgbW9kaWZpZWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IG1vZGlmaWVkLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG1vZGlmaWVkKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJUd29JbnB1dCA9IChcclxuICAgIGluY2F0aW5keCxcclxuICAgIGluY2F0c3ViaWR4LFxyXG4gICAgaW5jYXRzdWJ0d29pZHgsXHJcbiAgICBjYXRlZ29yeW5hbWUsXHJcbiAgICBzdWJjYXRlZ29yeW5hbWVcclxuICApID0+IChldmVudCkgPT4ge1xyXG4gICAgbGV0IHN1YnR3b2RhdGEgPSBudWxsO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWQpID0+IGNhdGVnb3J5bmFtZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGlmIChjYXRlZ29yeSkge1xyXG4gICAgICBzdWJkYXRhID0gY2F0ZWdvcnkuc3ViY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3ViLCBpeCkgPT4gc3ViLnN1YmNhdGVnb3J5bmFtZSA9PT0gc3ViY2F0ZWdvcnluYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgIHN1YnR3b2RhdGEgPSBzdWJkYXRhLlN1YnR3b2NhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YnR3bywgc3RpKSA9PiBzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lID09PSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJ0d29uZXcgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXRzdWJ0d28sIGNhdHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5jYXRpbmR4ICE9PSBjYXRzdWJ0d29pZHgpIHJldHVybiBjYXRzdWJ0d287XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2F0c3VidHdvLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBjYXRzdWJ0d28uc3ViY2F0ZWdvcnkubWFwKChjYXRzdWIsIGNhdHN1YmlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluY2F0c3ViaWR4ICE9PSBjYXRzdWJpZHgpIHJldHVybiBjYXRzdWI7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jYXRzdWIsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBjYXRzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWJ0d28sIHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpbmNhdHN1YnR3b2lkeCAhPT0gc3VidHdvaWR4KSByZXR1cm4gc3VidHdvO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3VidHdvZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogc3VidHdvZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN1YnR3byxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnluYW1lOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1YnR3b25ldyBjYXQgOlwiLCBzdWJ0d29uZXcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IHN1YnR3b25ldyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShzdWJ0d29uZXcpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNT57YENhdGVnb3JpICMke2luZGV4ICsgMX0gLSAke2RhdGEuY2F0ZWdvcnluYW1lfWB9PC9oNT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxpc3Q9e2BkYXRhbGlzdCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRhLnN1YmNhdGVnb3J5IHx8IGRhdGEuZGlzYWJsZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0KGluZGV4KX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YENhdGVnb3J5ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRhdGFsaXN0IGlkPXtgZGF0YWxpc3Qke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFsaXN0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICB7IWRhdGEuZGlzYWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkQ2F0ZWdvcnkoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tYmxvY2sgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YS5zdWJjYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICBkYXRhLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBzdWJpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWJpZHh9PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWIuc3VidHdvY2F0ZWdvcnkgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtzdWIuc3ViY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU3ViIENhdGVnb3J5IyR7c3ViaWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YklucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7ZGF0YS5jYXRlZ29yeWlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGJpfSB2YWx1ZT17ZGJzLnN1YmNhdGVnb3J5bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWIoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3N1Yi5zdWJ0d29jYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICAgICAgICBzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWIyLCBpbmR0d28pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmR0d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2BTdWIgMm5kIENhdGVnb3J5ICR7c3ViMi5zdWJ0d29jYXRlZ29yeW5hbWV9ICMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gU3ViIENhdGVnb3J5ICR7c3ViLnN1YmNhdGVnb3J5bmFtZX0jJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9mIENhdGVnb3J5ICR7ZGF0YS5jYXRlZ29yeW5hbWV9ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeWlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgVHdvIENhdGVnb3J5IyR7aW5kdHdvICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YlR3b0lucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJjYXRlZ29yeW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGJzLmlkID09PSBzdWIuc3ViY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRicy5TdWJ0d29jYXRlZ29yeS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJ0d28sIHNkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NkYml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VidHdvLnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgYnRuLXNtIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWJUd28oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRzdWJ0d29jYXRlZ29yeShpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFN1YkNhdGVnb3J5KGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGV0YWlsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRldGFpbG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkYXRhZGVzYzogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2RldGFpbHNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIERldGFpbHM6IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUuZGV0YWlscy5maWx0ZXIoKGRhdGEsIGluZGV4KSA9PiB2YWx1ZSAhPT0gaW5kZXgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5yZW1vdmVkZXRhaWwocmVtb3ZlKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEZXRhaWxOYW1lID0gKGlkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld2RldGFpbHMgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGV0YWlsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxzLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLm5ld2RldGFpbHMobmV3ZGV0YWlscylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlRGF0YURlc2MgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlsZGF0YWRlc2MgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGF0YWRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogbmV3ZGV0YWlsZGF0YWRlc2MsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxkYXRhZGVzYylcclxuICAgICk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRldGFpbHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIE5hbWUgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEZXRhaWxOYW1lKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRhZGVzY31cclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERldGFpbHMgIyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURhdGFEZXNjKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5ICBwLTIgbXQtMiBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLmRldGFpbG5hbWV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImRlc2NcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGF0YWRlc2N9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbWItMyBtdC0zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgTW9yZSBEZXRhaWxcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBsb2FkSW1hZ2UgZnJvbSBcImJsdWVpbXAtbG9hZC1pbWFnZS9qc1wiO1xyXG5pbXBvcnQgQ3JvcHBlcnYyIGZyb20gXCIuL0Nyb3BwZXJ2MlwiO1xyXG5jb25zdCBwaWNhID0gcmVxdWlyZShcInBpY2FcIikoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGljdHVyZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlaWQ6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZW5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGFyZ2V0aW1hZ2U6IG51bGwsXHJcbiAgICAgIHNob3dCbGFja1NjcmVlbjogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIHNob3dFYXN5Q3JvcDogZmFsc2UsXHJcbiAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbnB1dEZpbGUgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZpbGVJbnB1dCA9IChpKSA9PiAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0RmlsZVtpXSA9IGU7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW1hZ2VBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGljdHVyZTogdGhpcy5zdGF0ZS5waWN0dXJlLmNvbmNhdChbeyBpbWFnZWlkOiBcIlwiLCBpbWFnZW5hbWU6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoaSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucGljdHVyZS5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHRoaXMuaW5wdXRGaWxlW2ldLnZhbHVlID0gXCJcIjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKHMsIGZpKSA9PiBpICE9PSBmaSk7XHJcbiAgICBjb25zdCBpbWFnZWRlbCA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKGltYWdlLCBpZHgpID0+IGkgPT09IGlkeCk7XHJcbiAgICBjb25zdCBwaWN0dXJldXAgPSBpbWFnZWRlbC5maW5kKCh4KSA9PiB4LmltYWdlaWQpO1xyXG4gICAgaWYgKHR5cGVvZiBwaWN0dXJldXAgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiRGVsZXRpbmcgSW1hZ2VcIiB9KTtcclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cGljdHVyZXVwLmltYWdlaWR9L2ltYWdlYCxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHsgcGljdHVyZTogcmVtb3ZlLCBtZXNzYWdlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlcGljdHVyZShyZW1vdmUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSk7XHJcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyBOb3QgR29vZCBpIGNhbiBmZWVsIGl0Li5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwaWN0dXJlOiByZW1vdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChhKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgYSA6XCIsIGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgZSA6XCIsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL29yaWdpbmFsIGkgZWRpdCBvbiAyLzgvMjAyMSBjb2RlXHJcblxyXG4gICAgLy8gaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldGltYWdlOiBhIH0pO1xyXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAvLyAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAvLyAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAgIGxvYWRJbWFnZShcclxuICAgICAgICBlLnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICBhc3luYyAoaW1nKSA9PiB7XHJcbiAgICAgICAgICB2YXIgcGl4ZWwgPSBpbWcuaGVpZ2h0ICogaW1nLndpZHRoO1xyXG5cclxuICAgICAgICAgIGlmIChwaXhlbCA+IDMxNDU3MjgpIHtcclxuICAgICAgICAgICAgdmFyIHJhdGlvID0gcGl4ZWwgPiA1MDM4ODQ4ID8gMC41IDogMC44O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJQbGVhc2Ugd2FpdCAuLi5cIiB9KTtcclxuICAgICAgICAgICAgICB2YXIgaW1nY29tcCA9IGF3YWl0IGNvbXByZXNzSW1hZ2UoaW1nLCByYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nY29tcC50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRkYXRhLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGVycm9yIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9IChpbWFnZUJsb2IsIGxvYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgLy90ZXN0aW5nIHB1cnBvc2VcclxuICAgIC8vIGNvbnN0IGZpbGUgPSBkYXRhVVJMdG9GaWxlKFwiaW1hZ2VCbG9iXCIsIGltYWdlQmxvYilcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImltYWdlIGJsb2JcIixmaWxlKVxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTsgLy90aGlzIGlzIHVwbG9hZHMgdG8gcmVzZXQgYWxsIHRvIG51bGwgZm9yIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgY29uc3QgaW1hZ2VVcGxvYWQgPSB0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChpbWFnZSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gdGhpcy5zdGF0ZS50YXJnZXRpbWFnZSkgcmV0dXJuIGltYWdlO1xyXG4gICAgICByZXR1cm4geyAuLi5pbWFnZSwgaW1hZ2VpZDogZS5pZCwgaW1hZ2VuYW1lOiBlLmltYWdlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwaWN0dXJlOiBpbWFnZVVwbG9hZCB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuc2hvd1BpY3R1cmUoaW1hZ2VVcGxvYWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2hvd0Vhc3lDcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlRWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5waWN0dXJlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwLTEgcHQtMSBtdC0wLjggbXItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj57aSArIDEgKyBcIi5cIn08L2Rpdj5cclxuICAgICAgICAgICAge2RhdGEuaW1hZ2VuYW1lID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7ZGF0YS5pbWFnZW5hbWV9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5maWxlSW5wdXQoaSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlIG0tMVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlKGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuICBidG4tcHJpbWFyeSBidG4tc20gYnRuLWJsb2NrIG15LTNcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIFBpY3R1cmVcclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q3JvcHBlcnYyXHJcbiAgICAgICAgICBzaG93RGlhbG9nPXt0aGlzLnN0YXRlLnNob3dFYXN5Q3JvcH1cclxuICAgICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3B9XHJcbiAgICAgICAgICBwYXlsb2FkPXt0aGlzLnN0YXRlLnBheWxvYWR9XHJcbiAgICAgICAgICB1cGxvYWQ9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gIHpJbmRleDogXCIxXCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29tcHJlc3NJbWFnZSA9IChpbWcsIGNydCkgPT4ge1xyXG4gIHZhciBvZmZTY3JlZW5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIG9mZlNjcmVlbkNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIGNydDtcclxuICBvZmZTY3JlZW5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIGNydDtcclxuICByZXR1cm4gcGljYVxyXG4gICAgLnJlc2l6ZShpbWcsIG9mZlNjcmVlbkNhbnZhcylcclxuICAgIC50aGVuKChpbWFnZUNDUykgPT4gaW1hZ2VDQ1MpXHJcbiAgICAuY2F0Y2goKGUpID0+IGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBNQ2F0ZWdvcnkgZnJvbSBcIi4vTUNhdGVnb3J5XCI7XHJcbmltcG9ydCBQRGV0YWlscyBmcm9tIFwiLi9QRGV0YWlsc1wiO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tIFwiLi9QaWN0dXJlXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIHNob3didXR0b246IGZhbHNlLFxyXG4gICAgICBzaG93Q3JvcHBlckRpYWxvZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiU2F2aW5nIGRhdGEuLiBQbGVhc2UgVGFrZSBEZWVwIEJyZWF0aCAuLlwiIH0pO1xyXG4gICAgQXhpb3MoXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHNgLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBTYXZlZCEhXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgV3JvbmcuLmVyb3JyIHBsZWFzZSBjb250YWN0IHB1bGlzXCIsXHJcbiAgICAgICAgICBzaG93YnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVVwbG9hZGVkID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUmVtb3ZlUGljdHVyZSA9IChpbWFnZXMpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZXM6IGltYWdlcyB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNoYW5nZUNhdGVnb3J5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoY2F0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGNhdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlTmV3RGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiBlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlRGV0YWlsID0gKHJlbW92ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVtb3ZlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiByZW1vdmUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgey8qIFRvcCBSb3cgKi99XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UGljdHVyZVxyXG4gICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMucHJvcHMuc2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICBzaG93UGljdHVyZT17dGhpcy5oYW5kbGVVcGxvYWRlZH1cclxuICAgICAgICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5wcm9wcy5jbG9zZUNyb3B9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVwaWN0dXJlPXt0aGlzLmhhbmRsZVJlbW92ZVBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A9e3RoaXMucHJvcHMuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8TUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICByZW1vdmVjYXRlZ29yeT17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWNhdGVnb3J5PXt0aGlzLmhhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UERldGFpbHNcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRldGFpbD17dGhpcy5oYW5kbGVSZW1vdmVEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICBuZXdkZXRhaWxzPXt0aGlzLmhhbmRsZU5ld0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93YnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXREaWFsb2cgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBzYXZlQnV0dG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IFtdLFxyXG4gICAgICB2YWxpZGF0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgZGVzYyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGltYWdlaWQgJiYgbmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBjYXRlZ29yeUlkICYmIGRlc2MpIHtcclxuICAgICAgQXhpb3MoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtjYXRlZ29yeUlkfWAsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBkYXRhIHRvIHNlcnZlci4uLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGhpcy5zdGF0ZS5pbWFnZWlkfS9pbWFnZWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IG51bGwsIGltYWdlOiBudWxsIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpbWFnZUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoaW1hZ2VJZCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUltYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHVwbG9hZFwiLCBlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWxlY3QgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0uc2l6ZSA+IDgzODg2MDgpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBGaWxlIHRvbyBiaWcuLiBQbGVhc2UgUHV0IGxlc3MgdGhhbiA4bWJcIik7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0Nyb3AocGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsTmFtZSA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsTmFtZTogXCIsIGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyBoYW5kbGVEZXRhaWxEZXNjID0gZSA9PntcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxEZXNjOiBcIiwgZSlcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbWFnZWlkLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICB2YWxpZGF0ZSxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+IHtcIj4gTmV3IFByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiNWVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbG5hbWU9e3RoaXMuaGFuZGxlRGV0YWlsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZWlkID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBJbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgJiZcclxuICAgICAgICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCAmJlxyXG4gICAgICAgICAgICAgICAgICBkZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEZpbGwgQWxsIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtzdG9jayA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIFN0b2NrIEFtb3VudCBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7cHJpY2UgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBwdXQgcHJpY2UgbW9yZSB0aGFuIDBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY2F0ZWdvcnlEYXRhOiBudWxsXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiYXBpL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLCBzaG93OiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS5jYXRlZ29yeURhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IFwiXCIsIGRldGFpbHM6IFwiXCIsIHNob3c6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc2hvdywgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiBzaG93ICYmIChcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZWxlY3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlEYXRhID8gY2F0ZWdvcnlEYXRhLmlkIDogbnVsbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UGxlYXNlIFNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPQURJTkdcIj5MT0FESU5HLi48L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBOYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXRlZ29yeX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIHshc2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbENhdCBmcm9tIFwiLi4vT2xkL01vZGFsQ2F0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIFwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgIENhdGVnb3J5IExpc3RcclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4LmRldGFpbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI2NhdGVnb3J5XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgZGVmYXVsdEltYWdlOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3JjLCBjcm9wLCBkZWZhdWx0SW1hZ2UsIGNyb3BwZWRJbWFnZVVybCwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlVwbG9hZGluZyAuLi4uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGg0PkNyb3AgYW5kIFVwbG9hZCBJbWFnZTwvaDQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG5cclxuICAgICAgICB7c3JjICYmIGRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyFkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRDYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMucHJvcHMuY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNhdGVnb3J5SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzIG9mIEVkaXRDYXRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoeCwgeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3l9IHZhbHVlPXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAge3gubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogdGhpcy5wcm9wcy5mb3JkZXRhaWxzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURldGFpbFZhbHVlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkRGV0YWlscyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiLCBpZDogXCJcIiB9LFxyXG4gICAgICBdKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7IGRldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcbiAgICAgICAge2RldGFpbHNcclxuICAgICAgICAgID8gZGV0YWlscy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJdGVtKGRhdGEuaWQgPyBkYXRhLmlkIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGV0YWlsc30gY2xhc3NOYW1lPVwic21hbGxcIj5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vRWRpdFByb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIGdvdG51bGxkYXRhIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG5hbWU6IGRhdGEucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgcHJpY2U6IGRhdGEucHJvZHVjdFByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnByb2R1Y3RTdG9jayxcclxuICAgICAgICBkZXNjOiBkYXRhLnByb2R1Y3REZXNjLFxyXG4gICAgICAgIGRldGFpbHMgOiBkYXRhLnByb2R1Y3REZXRhaWxzcyxcclxuICAgICAgICBnb3RudWxsZGF0YSA6IHRydWUsXHJcblxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkYXRhLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhLnByb2R1Y3RJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2U6IGRhdGEucHJvZHVjdEltYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcnlJZDogaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2ltYWdlcy8ke2RhdGEuaWR9L2ZpbGUvcHJvZHVjdGAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjLCBjYXRlZ29yeUlkLCBpbWFnZSAsIGRldGFpbHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBwcmljZSA9IGRhdGEucHJvZHVjdFByaWNlO1xyXG4gICAgfVxyXG4gICAgaWYoc3RvY2sgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgc3RvY2sgPSBkYXRhLnByb2R1Y3RTdG9jaztcclxuICAgIH1cclxuICAgIGlmKGRlc2MgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZGVzYyA9IGRhdGEucHJvZHVjdERlc2M7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcblxyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGRldGFpbHMgOiBkZXRhaWxzXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbHNOdWxsID0gZSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlICwgZ290bnVsbGRhdGEgOiBmYWxzZX0pXHJcbiAgfVxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUsIGdvdG51bGxkYXRhIDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSBlID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlLCBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSwgZGV0YWlscywgZ290bnVsbGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3RcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgeyAoZGV0YWlscyAmJiBnb3RudWxsZGF0YSkgPyA8RWRpdFByb2R1Y3REZXRhaWxzIGZvcmRldGFpbHM9e2RldGFpbHN9IGRhdGFjaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfS8+ICA6IDxQcm9kdWN0RGV0YWlscyBkZXRhaWxuYW1lPXt0aGlzLmhhbmRsZURldGFpbHNOdWxsfSAvPiB9ICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm8gSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17dGhpcy5oYW5kbGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0sXHJcbiAgICAgIGRldGFpbG5hbWVoYXNpbnB1dDogZmFsc2UsXHJcbiAgICAgIGRhdGFkZXNjaGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVycyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGV0YWlsbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJzIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoXHJcbiAgICAgIChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGF0YWRlc2M6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJkZXNjKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIgPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNoYXJlaG9sZGVyczogcmVtb3ZlZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxuYW1laGFzaW5wdXRcclxuICAgICAgICAgICAgICA/IFwiTmFtZSBvZiBkZXRhaWwgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIERhdGEgIyR7aWR4ICsgMX0gYH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhZGVzY2hhc2lucHV0ID8gXCJEZXRhaWwgZGF0YSBpcyByZXF1aXJlZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIoaWR4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFNoYXJlaG9sZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vT2xkL01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2dyZWF0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2xlc3NJbnB1dCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RvY2tncmVhdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrbGVzcyA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkZWxldGVkIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZShhY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHRoaXMucHJvZHVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmNhdGVnb3J5KSB0aGlzLmNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tncmVhdCkgdGhpcy5zdG9ja2dyZWF0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tsZXNzKSB0aGlzLnN0b2NrbGVzc0lucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgY2F0ZWdvcnlGaWx0ZXIsIHN0b2NrZ3JlYXQsIHN0b2NrbGVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJvZHVjdC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSBcIk5PTkVcIikge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5jYXRlZ29yeS5uYW1lID09PSBjYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdG9ja2dyZWF0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPiBwYXJzZUZsb2F0KHN0b2NrZ3JlYXQpKTtcclxuICAgIH1cclxuICAgIGlmIChzdG9ja2xlc3MpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA8IHBhcnNlRmxvYXQoc3RvY2tsZXNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGFjdGl2ZSwgcmFuZ2UsIHBhZ2luYXRpb24sIGNhdGVnb3J5RGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHBhZ2luYXRpb24gOiBcIiwgcGFnaW5hdGlvbik7XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUZpbHRlcjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPkZpbHRlciBCeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIEdyZWF0ZXIgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrZ3JlYXR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZ3JlYXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2xlc3N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9ja2xlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZGF0YS5sZW5ndGh9IHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgdG89XCIvY3JlYXRlcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1zcXVhcmUgZmEtMXhcIiAvPiBDcmVhdGUgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5FZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZW1vdmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3gucGljdHVyZXMubWFwKChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIGEuZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5jYXRlZ29yeSA/IHguY2F0ZWdvcnkubmFtZSA6IFwiXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0KHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdCBmYS0xeFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL2VkaXRcIiwgc3RhdGU6IHsgaWQ6IHguaWQgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz4ge1wiICBcIn1FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI3Byb2R1Y3RcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxQcm9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbi8vIGltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzcmM6IG51bGwsXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgIGFzcGVjdDogMSAvIDFcclxuICAgIH0sXHJcbiAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICBpbWFnZUJsb2I6IG51bGxcclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcCh0aGlzLnN0YXRlLnNyYyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25pbWFnZWxvYWRcIik7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wIGNvbXBsZXRlXCIpO1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wY2hhbmdlXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRpbWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgYWRkaW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICB7Lyoge2Nyb3BwZWRJbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZEFycmF5LCByZWR1eEZvcm0gfSBmcm9tIFwicmVkdXgtZm9ybVwiO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4vdmFsaWRhdGVcIjtcclxuXHJcblxyXG5jb25zdCByZW5kZXJGaWVsZCA9ICh7IGlucHV0LCBsYWJlbCwgdHlwZSwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9IH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0IHsuLi5pbnB1dH0gdHlwZT17dHlwZX0gcGxhY2Vob2xkZXI9e2xhYmVsfSAvPlxyXG4gICAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3Bhbj57ZXJyb3J9PC9zcGFuPn1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgcmVuZGVyTWVtYmVycyA9ICh7IGZpZWxkcywgbWV0YTogeyB0b3VjaGVkLCBlcnJvciwgc3VibWl0RmFpbGVkIH0gfSkgPT4gKFxyXG4gIDx1bD5cclxuICAgIDxsaT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZmllbGRzLnB1c2goe30pfT5cclxuICAgICAgICBBZGQgTWVtYmVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7KHRvdWNoZWQgfHwgc3VibWl0RmFpbGVkKSAmJiBlcnJvciAmJiA8c3Bhbj57ZXJyb3J9PC9zcGFuPn1cclxuICAgIDwvbGk+XHJcbiAgICB7ZmllbGRzLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxyXG4gICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBNZW1iZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZmllbGRzLnJlbW92ZShpbmRleCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgWFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoND5NZW1iZXIgI3tpbmRleCArIDF9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0uZmlyc3ROYW1lYH1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPXtgJHttZW1iZXJ9Lmxhc3ROYW1lYH1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e3JlbmRlckZpZWxkfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgKSl9XHJcbiAgPC91bD5cclxuKTtcclxuXHJcbmNvbnN0IGhhbmRsZVRla2FuID0gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IEZpZWxkQXJyYXlzRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBwcmlzdGluZSwgcmVzZXQsIHN1Ym1pdHRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPEZpZWxkQXJyYXkgbmFtZT1cIm1lbWJlcnNcIiBjb21wb25lbnQ9e3JlbmRlck1lbWJlcnN9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9IG9uQ2xpY2s9e3Jlc2V0fT5cclxuICAgICAgICAgIENsZWFyIFZhbHVlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUZWthbn0+VGVrYW48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XHJcbiAgZm9ybTogXCJmaWVsZEFycmF5c1wiLCAvLyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIGZvcm1cclxuICB2YWxpZGF0ZSxcclxufSkoRmllbGRBcnJheXNGb3JtKTtcclxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL1N0b3JlXCI7XHJcbmltcG9ydCBGaWVsZEFycmF5c0Zvcm0gZnJvbSBcIi4vRmllbGRBcnJheXNGb3JtXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUmVkdXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIGFsZXJ0KGUpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTUgfX0+XHJcbiAgICAgICAgICAgICAgPGgyPlNpbXBsZSBGb3JtPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkQXJyYXlzRm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIGFzIHJlZHV4Rm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZvcm06IHJlZHV4Rm9ybVJlZHVjZXIsIC8vIG1vdW50ZWQgdW5kZXIgXCJmb3JtXCJcclxufSk7XHJcbmNvbnN0IHN0b3JlID0gKHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvblxyXG4gID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkoY3JlYXRlU3RvcmUpXHJcbiAgOiBjcmVhdGVTdG9yZSkocmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG5cclxuICBpZiAoIXZhbHVlcy5tZW1iZXJzIHx8ICF2YWx1ZXMubWVtYmVycy5sZW5ndGgpIHtcclxuICAgIGVycm9ycy5tZW1iZXJzID0geyBfZXJyb3I6ICdBdCBsZWFzdCBvbmUgbWVtYmVyIG11c3QgYmUgZW50ZXJlZCcgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbWVtYmVyc0FycmF5RXJyb3JzID0gW107XHJcbiAgICB2YWx1ZXMubWVtYmVycy5mb3JFYWNoKChtZW1iZXIsIG1lbWJlckluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lbWJlckVycm9ycyA9IHt9O1xyXG4gICAgICBpZiAoIW1lbWJlciB8fCAhbWVtYmVyLmZpcnN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5maXJzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5sYXN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5sYXN0TmFtZSA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgbWVtYmVyc0FycmF5RXJyb3JzW21lbWJlckluZGV4XSA9IG1lbWJlckVycm9ycztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgaWYgKG1lbWJlcnNBcnJheUVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgZXJyb3JzLm1lbWJlcnMgPSBtZW1iZXJzQXJyYXlFcnJvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgZ2VuZXJhdGVEb3dubG9hZCB9IGZyb20gXCIuL3V0aWxzL2Nyb3BJbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQml0Y2goKSB7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgdHJpZ2dlckZpbGVTZWxlY3RQb3B1cCA9ICgpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcclxuXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEFyZWEsIHNldENyb3BwZWRBcmVhXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IFJlYWN0LnVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSAoY3JvcHBlZEFyZWFQZXJjZW50YWdlLCBjcm9wcGVkQXJlYVBpeGVscykgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEFyZWEoY3JvcHBlZEFyZWFQaXhlbHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0RmlsZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldEltYWdlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkSW1hZ2UoXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIChpbWcpID0+IHtcclxuICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRG93bmxvYWQgPSAoKSA9PiB7XHJcbiAgICBnZW5lcmF0ZURvd25sb2FkKGltYWdlLCBjcm9wcGVkQXJlYSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SW1hZ2UobnVsbCk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNyb3BwZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17c2V0Wm9vbX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENvbXBsZXRlPXtvbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4PXszfVxyXG4gICAgICAgICAgICAgICAgc3RlcD17MC4xfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3pvb219XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHpvb20pID0+IHNldFpvb20oem9vbSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1idXR0b25zXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RGaWxlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RyaWdnZXJGaWxlU2VsZWN0UG9wdXB9XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDaG9vc2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uRG93bmxvYWR9PlxyXG4gICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEltYWdlKG51bGwpfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlU3JjIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuXHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuXHRcdGltYWdlLnNyYyA9IHVybDtcclxuXHR9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcblx0cmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDcm9wcGVkSW1nKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG5cdGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcblx0Y29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cdGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcblx0Ly8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuXHQvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcblx0Y2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcblx0Y2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuXHQvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG5cdGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG5cdGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuXHRjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuXHQvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcblx0Y3R4LmRyYXdJbWFnZShcclxuXHRcdGltYWdlLFxyXG5cdFx0c2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcblx0XHRzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuXHQpO1xyXG5cclxuXHRjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpO1xyXG5cclxuXHQvLyBzZXQgY2FudmFzIHdpZHRoIHRvIGZpbmFsIGRlc2lyZWQgY3JvcCBzaXplIC0gdGhpcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGNvbnRleHRcclxuXHRjYW52YXMud2lkdGggPSBwaXhlbENyb3Aud2lkdGg7XHJcblx0Y2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHQ7XHJcblxyXG5cdC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuXHRjdHgucHV0SW1hZ2VEYXRhKFxyXG5cdFx0ZGF0YSxcclxuXHRcdDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS53aWR0aCAqIDAuNSAtIHBpeGVsQ3JvcC54LFxyXG5cdFx0MCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLmhlaWdodCAqIDAuNSAtIHBpeGVsQ3JvcC55XHJcblx0KTtcclxuXHJcblx0Ly8gQXMgQmFzZTY0IHN0cmluZ1xyXG5cdC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiKTtcclxuXHRyZXR1cm4gY2FudmFzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEb3dubG9hZCA9IGFzeW5jIChpbWFnZVNyYywgY3JvcCkgPT4ge1xyXG5cdGlmICghY3JvcCB8fCAhaW1hZ2VTcmMpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNhbnZhcyA9IGF3YWl0IGdldENyb3BwZWRJbWcoaW1hZ2VTcmMsIGNyb3ApO1xyXG5cclxuXHRjYW52YXMudG9CbG9iKFxyXG5cdFx0KGJsb2IpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJldmlld1VybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRcdFx0Y29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRcdGFuY2hvci5kb3dubG9hZCA9IFwiaW1hZ2UuanBlZ1wiO1xyXG5cdFx0XHRhbmNob3IuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblx0XHRcdGFuY2hvci5jbGljaygpO1xyXG5cclxuXHRcdFx0d2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwocHJldmlld1VybCk7XHJcblx0XHR9LFxyXG5cdFx0XCJpbWFnZS9qcGVnXCIsXHJcblx0XHQwLjY2XHJcblx0KTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtZWFzeS1jcm9wXCI7XHJcbmltcG9ydCBnZXRDcm9wcGVkSW1nIGZyb20gXCIuL2Nyb3BJbWFnZVwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBsb2FkSW1hZ2UgZnJvbSBcImJsdWVpbXAtbG9hZC1pbWFnZS9qc1wiO1xyXG5pbXBvcnQgZ2V0VXBsb2FkIGZyb20gXCIuL2Nyb3BJbWFnZVVwbG9hZFwiO1xyXG5pbXBvcnQgeyBCb3R0b21OYXZpZ2F0aW9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcbi8vIGltcG9ydCBwaWNhIGZyb20gXCJwaWNhXCI7XHJcbmNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IGNvbXByZXNzSW1hZ2UgPSAoaW1nLCBjcnQpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgdmFyIG9mZlNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBvZmZTY3JlZW5DYW52YXMud2lkdGggPSBpbWcud2lkdGggKiBjcnQ7XHJcbiAgICBvZmZTY3JlZW5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIGNydDtcclxuICAgIHBpY2FcclxuICAgICAgLnJlc2l6ZShpbWcsIG9mZlNjcmVlbkNhbnZhcylcclxuICAgICAgLnRoZW4oKGltYWdlQ0NTKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShpbWFnZUNDUyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gcmVqZWN0KGUpKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVhc3lDcm9wKCkge1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjcm9wcGVkQXJlYVBpeGVscywgc2V0Q3JvcHBlZEFyZWFQaXhlbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3BwZWRJbWFnZSwgc2V0Q3JvcHBlZEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHRyaWdnZXJGaWxlU2VsZWN0UG9wdXAgPSAoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XHJcblxyXG4gIGNvbnN0IG9uQ3JvcENvbXBsZXRlID0gdXNlQ2FsbGJhY2soKGNyb3BwZWRBcmVhLCBjcm9wcGVkQXJlYVBpeGVscykgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEFyZWFQaXhlbHMoY3JvcHBlZEFyZWFQaXhlbHMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0Nyb3BwZWRJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZSA9IGF3YWl0IGdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgY3JvcHBlZEFyZWFQaXhlbHMsXHJcbiAgICAgICAgcm90YXRpb25cclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkb25lZVwiLCB7IGNyb3BwZWRJbWFnZSB9KTtcclxuICAgICAgc2V0Q3JvcHBlZEltYWdlKGNyb3BwZWRJbWFnZS51cmwpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU2VsZWN0RmlsZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsb2FkSW1hZ2UoXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIGFzeW5jIChpbWcpID0+IHtcclxuICAgICAgICAgIGxldCBwaXhlbCA9IGltZy5oZWlnaHQgKiBpbWcud2lkdGg7XHJcbiAgICAgICAgICBpZiAocGl4ZWwgPiAzMTQ1NzI4KSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgLy8gYmV0dGVyIHRvIGhhdmUgbW9kYWwgb3IgbG9hZGluZyBzY3JlZW5cclxuICAgICAgICAgICAgICBsZXQgcmF0aW9waXhlbCA9IHBpeGVsID4gNTAzODg0OCA/IDAuNSA6IDAuODtcclxuICAgICAgICAgICAgICBjb25zdCBpbWdjcnMgPSBhd2FpdCBjb21wcmVzc0ltYWdlKGltZywgcmF0aW9waXhlbCk7XHJcbiAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWdjcnMudG9EYXRhVVJMKGBpbWFnZS9qcGVnYCk7XHJcbiAgICAgICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICBjb25zdCBpbWdjcnMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgc2V0SW1hZ2UoYmFzZTY0ZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgOTtcclxuICBjb25zdCB1cGxvYWRmaWxlID0gKCkgPT4ge1xyXG4gICAgZ2V0VXBsb2FkKGltYWdlLCBjcm9wcGVkQXJlYVBpeGVscywgcm90YXRpb24pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RpY2t5XCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIE1lbnVcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAge2ltYWdlICYmICFjcm9wcGVkSW1hZ2UgPyAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgIG9uUm90YXRpb25DaGFuZ2U9e3NldFJvdGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NsaWRlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3pvb219XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm90YXRpb259XHJcbiAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgbWF4PXszNjB9XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIlJvdGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCByb3RhdGlvbikgPT4gc2V0Um90YXRpb24ocm90YXRpb24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2Nyb3BwZWRJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2Nyb3BwZWRJbWFnZVN0eWxlfSBzcmM9e2Nyb3BwZWRJbWFnZX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt1cGxvYWRmaWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0cmlnZ2VyRmlsZVNlbGVjdFBvcHVwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDaG9vc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaG93Q3JvcHBlZEltYWdlfT5Dcm9wPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBjcm9wcGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcblxyXG5jb25zdCBzbGlkZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMjAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiBcIjYwJVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyQnV0dG9uU3R5bGUgPSB7XHJcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZjVmNWY1XCIsXHJcbiAgaGVpZ2h0OiBcIjIwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbn07XHJcblxyXG5jb25zdCBjcm9wcGVkSW1hZ2VTdHlsZSA9IHtcclxuICBtYXhXaWR0aDogXCI1MHZ3XCIsXHJcblxyXG4gIC8vIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJpdGNoIGZyb20gJy4vQXBwQ3JvcC9CaXRjaCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURhc2hib2FyZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJpdGNoLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlVXBsb2FkKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiS2FtYmluZ1wiKTtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIC8vaXMgbGlrZSBjb21wb25lbnQgZGlkIG1vdW50XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFlvdSBoYXZhIGNsaWNrICR7Y291bnR9YDtcclxuICB9LCBbY291bnRdKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFoYSA9ICgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGYoKSB7XHJcbiAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmUhXCIpLCAxMDAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcHJvbWlzZTsgLy8gd2FpdCB1bnRpbCB0aGUgcHJvbWlzZSByZXNvbHZlcyAoKilcclxuXHJcbiAgICAgIGFsZXJ0KHJlc3VsdCk7IC8vIFwiZG9uZSFcIlxyXG4gICAgfVxyXG5cclxuICAgIGYoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0NvdW50ID0gKCkgPT4ge1xyXG4gICAgc2V0Q291bnQoY291bnQgKyAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGxhYmVsPntuYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tDb3VudH0+Y2xpY2s8L2J1dHRvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2UgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDcm9wcGVkSW1nKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gIGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuICAvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG4gIGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuICAvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltYWdlLFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApO1xyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIGF3YWl0IHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgICByZXR1cm4gbG9hZDtcclxuICB9KTtcclxuXHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAvLyAgICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgLy8gICAgIHJlc29sdmUobG9hZCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbiAgXHJcblxyXG5cclxuY29uc3QgY3JlYXRlSW1hZ2UgPSB1cmwgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHJlc29sdmUoaW1hZ2UpKVxyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKSAvLyBuZWVkZWQgdG8gYXZvaWQgY3Jvc3Mtb3JpZ2luIGlzc3VlcyBvbiBDb2RlU2FuZGJveFxyXG4gICAgaW1hZ2Uuc3JjID0gdXJsXHJcbiAgfSlcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdhcyBhZGFwdGVkIGZyb20gdGhlIG9uZSBpbiB0aGUgUmVhZE1lIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9Eb21pbmljVG9iaWFzL3JlYWN0LWltYWdlLWNyb3BcclxuICogQHBhcmFtIHtGaWxlfSBpbWFnZSAtIEltYWdlIEZpbGUgdXJsXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwaXhlbENyb3AgLSBwaXhlbENyb3AgT2JqZWN0IHByb3ZpZGVkIGJ5IHJlYWN0LWVhc3ktY3JvcFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb24gLSBvcHRpb25hbCByb3RhdGlvbiBwYXJhbWV0ZXJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFVwbG9hZChpbWFnZVNyYywgcGl4ZWxDcm9wLCByb3RhdGlvbiA9IDApIHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IGNyZWF0ZUltYWdlKGltYWdlU3JjKVxyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpXHJcbiAgY29uc3Qgc2FmZUFyZWEgPSAyICogKChtYXhTaXplIC8gMikgKiBNYXRoLnNxcnQoMikpXHJcblxyXG4gIC8vIHNldCBlYWNoIGRpbWVuc2lvbnMgdG8gZG91YmxlIGxhcmdlc3QgZGltZW5zaW9uIHRvIGFsbG93IGZvciBhIHNhZmUgYXJlYSBmb3IgdGhlXHJcbiAgLy8gaW1hZ2UgdG8gcm90YXRlIGluIHdpdGhvdXQgYmVpbmcgY2xpcHBlZCBieSBjYW52YXMgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHNhZmVBcmVhXHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhXHJcblxyXG4gIC8vIHRyYW5zbGF0ZSBjYW52YXMgY29udGV4dCB0byBhIGNlbnRyYWwgbG9jYXRpb24gb24gaW1hZ2UgdG8gYWxsb3cgcm90YXRpbmcgYXJvdW5kIHRoZSBjZW50ZXIuXHJcbiAgY3R4LnRyYW5zbGF0ZShzYWZlQXJlYSAvIDIsIHNhZmVBcmVhIC8gMilcclxuICBjdHgucm90YXRlKGdldFJhZGlhbkFuZ2xlKHJvdGF0aW9uKSlcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpXHJcblxyXG4gIC8vIGRyYXcgcm90YXRlZCBpbWFnZSBhbmQgc3RvcmUgZGF0YS5cclxuICBjdHguZHJhd0ltYWdlKFxyXG4gICAgaW1hZ2UsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS53aWR0aCAqIDAuNSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLmhlaWdodCAqIDAuNVxyXG4gIClcclxuICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpXHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aFxyXG4gIGNhbnZhcy5oZWlnaHQgPSBwaXhlbENyb3AuaGVpZ2h0XHJcblxyXG4gIC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuICBjdHgucHV0SW1hZ2VEYXRhKFxyXG4gICAgZGF0YSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngpLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnkpXHJcbiAgKVxyXG5cclxuICBcclxuXHJcbiAgLy8gQXMgQmFzZTY0IHN0cmluZ1xyXG4gIC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XHJcblxyXG4gIC8vIEFzIGEgYmxvYlxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBibG9iKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vdGhpcyBpcyB1cGxvYWRzIHRvIHJlc2V0IGFsbCB0byBudWxsIGZvciB1cGxvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIHJlc29sdmUoYmxvYilcclxuICAgIH0sICdpbWFnZS9qcGVnJylcclxuICB9KVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXI+XHJcbiAgICA8QXBwIC8+XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tZXJMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvY3VzdG9tZXIvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cclxuICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPEN1c3RvbWVyTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IG1vbnRoID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0TW9udGgoKSArIDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHllYXI6IHllYXIsXHJcbiAgICBtb250aDogbW9udGgsXHJcbiAgICBzdGFydERhdGU6IG5ldyBEYXRlKERhdGUubm93KCkpLFxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2Rhc2hib2FyZD95ZWFyPSR7dGhpcy5zdGF0ZS55ZWFyfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiByZXNwb25zZS5kYXRhIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1vbnRoKG1vbnRoKSB7XHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJGZWJ1YXJ5XCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcIk1heVwiO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XHJcbiAgICAgIGNhc2UgOTpcclxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICByZXR1cm4gXCJPY2t0b2JlclwiO1xyXG4gICAgICBjYXNlIDExOlxyXG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIFwiRGlzZW1iZXJcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGZvciBkYXNoYm9hcmRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHllYXIsIG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIHllYXIsIG1vbnRoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxoNj5DaGFuZ2UgTW9udGggYW5kIFllYXIgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChkYXRhLnRvdGFsX3N1bSA/IGRhdGEudG90YWxfc3VtIDogMCkudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlRvdGFsIFNhbGVzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyA8aDQ+e2RhdGEudXNlcnN9PC9oND4gOiA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+Q3VzdG9tZXJzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnN1bVt5ZWFyXSA/IGRhdGEuc3VtW3llYXJdIDogMC4wXHJcbiAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5ZZWFybHkgU2FsZXMgOiB7eWVhcn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5STSB7cGFyc2VGbG9hdChkYXRhLm1vbnRoW21vbnRoXSkudG9GaXhlZCgyKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2Pk1vbnRseSBTYWxlcyA6IHt0aGlzLmhhbmRsZU1vbnRoKG1vbnRoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcInNhbGVzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgZGVzaWduIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRvdGFsIFNhbGVzIEJ5IE1vbnRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFByb3BzPXt7IFwiZGF0YS10ZXN0aWRcIjogXCIyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJMaW5lQ2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJPcmRlciBDb3VudFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hcmNoXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9udGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB2QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPcmRlcnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjFcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZVNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmsgbS0wIHAtMCBweC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xIFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTEgXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2luYXRlT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9vcmRlci9QYWdpbmF0ZU9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyc1xyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UGFnaW5hdGVPcmRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdExpc3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQcm9kdWN0TGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxyXG4gICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz4gRGFzaGJvYXJkXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz4gQ3VzdG9tZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaT4gQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdC1hbHRcIj48L2k+IERldm9wc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL3Zpc2l0b3JcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdC1hbHRcIj48L2k+IFZpc2l0b3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=