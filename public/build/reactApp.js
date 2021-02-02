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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleShowCrop", payload => {
      console.log(payload);
      this.setState({
        showCrop: true,
        src: payload.src,
        upload: payload.upload
      });
    });

    _defineProperty(this, "handleCloseCrop", () => {
      this.setState({
        showCrop: false
      });
    });

    this.state = {
      showCrop: false,
      src: null,
      upload: null,
      idEdit: null,
      mobileView: false,
      showSidebar: true
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
    console.log(this);
    let containerClass = "d-flex";
    if (this.state.mobileView) containerClass = "container-fluid";
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showSidebar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_MobileSideBar__WEBPACK_IMPORTED_MODULE_13__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: containerClass
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/admin",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/orders",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Orders__WEBPACK_IMPORTED_MODULE_2__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/customer",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Customer__WEBPACK_IMPORTED_MODULE_3__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/product",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Product__WEBPACK_IMPORTED_MODULE_5__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/newproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
      path: "/formredux",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_12__.default, props)
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cropping__WEBPACK_IMPORTED_MODULE_8__.default, {
      showCrop: this.state.showCrop,
      closeCrop: this.handleCloseCrop,
      src: this.state.src,
      upload: this.state.upload
    })));
  }

}

/***/ }),

/***/ "./assets/react-app/Base.js":
/*!**********************************!*\
  !*** ./assets/react-app/Base.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./assets/react-app/App.js");
/* harmony import */ var _Mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mobile */ "./assets/react-app/Mobile.js");





function detectMob() {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem);
  });
}

class Base extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return detectMob() ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Mobile__WEBPACK_IMPORTED_MODULE_2__.default, null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_1__.default, null));
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
/* harmony export */   "default": () => (/* binding */ Cropping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-crop/dist/ReactCrop.css */ "./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var _crop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop.css */ "./assets/react-app/crop.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Cropping extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

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

    _defineProperty(this, "cancelLoad", () => {
      this.setState({
        loading: false,
        croppedImageUrl: null,
        imageBlob: null,
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

  showCropImage() {
    this.setState({
      showCropImage: true
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
      onClick: () => this.props.closeCrop()
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-times-circle fa-2x"
    }))), showCropImage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "p-5"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      alt: "Crop",
      style: {
        maxWidth: "100%"
      },
      src: croppedImageUrl
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary",
      onClick: () => this.setState({
        showCropImage: false
      })
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
      onClick: () => this.showCropImage()
    }, "Crop")))), this.props.showCrop && this.state.loading && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "crop "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "dialog col-8 mx-auto col-md-6 col-lg-4 p-5"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      animation: "border"
    }), " Uploading Image...."))));
  }

}

/***/ }),

/***/ "./assets/react-app/Mobile.js":
/*!************************************!*\
  !*** ./assets/react-app/Mobile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

class Mobile extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "UnderConstruction PLease use Desktop"));
  }

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
    }, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Registered On"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.email), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.firstname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.lastname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formatDate(x.createdAt)))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      animation: "border"
    }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Prev, {
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
      className: "container border rounded"
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");


class ProductAdd extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      onChange: e => this.setState({
        price: e.target.value
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
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
      xs: "12",
      md: "6",
      xl: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Product Description"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
      className: "form-control mb-3",
      onChange: e => this.setState({
        desc: e.target.value
      })
    }))));
  }

}

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
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.js");
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
        this.props.addImage(response.data); //todo this is sucess upload
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
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
      to: "/newproduct"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-plus-square fa-1x"
    }), " Add Product"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Image"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Product"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Category", " ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
      className: "btn btn-primary",
      to: "/category"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-edit"
    }), " Edit")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Stock"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Edit"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Remove"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: "/images/" + x.productImage,
      alt: "",
      style: {
        width: "50px",
        height: "50px"
      }
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productName), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.category ? x.category.name : ""), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productPrice), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.productStock), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
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
    })))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
      animation: "border"
    }))))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Prev, {
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./assets/react-app/component/product/reduxForm/store.js");
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
      store: _store__WEBPACK_IMPORTED_MODULE_1__.default
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

/***/ "./assets/react-app/component/product/reduxForm/store.js":
/*!***************************************************************!*\
  !*** ./assets/react-app/component/product/reduxForm/store.js ***!
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base */ "./assets/react-app/Base.js");




 // ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null)), document.getElementById("root"));

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
      sticky: "top",
      className: "navbar navbar-dark bg-dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "nav nav-pills"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/admin",
      exact: true,
      activeClassName: "active",
      className: "nav-link "
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-home"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/product",
      activeClassName: "active",
      className: "nav-link"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/orders",
      activeClassName: "active",
      className: "nav-link"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-shopping-cart"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/customer",
      activeClassName: "active",
      className: "nav-link"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-users"
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "nav-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
      to: "/formredux",
      activeClassName: "active",
      className: "nav-link"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
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
      className: "border sidebar-wrapper",
      style: {
        minheight: "100vh"
      }
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
      to: "/formredux",
      activeClassName: "active",
      className: "list-group-item list-group-item-action"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fas fa-boxes"
    }), " DevOps"))));
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


/***/ })

},
0,[["./assets/react-app/react-app.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_popper_js_dist_esm_popper_js","vendors-node_modules_axios_index_js-node_modules_react-datepicker_dist_react-datepicker_css-n-879c36"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9Dcm9wcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9Qcm9kdWN0QWRkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0FkZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ3JvcERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0Q2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0VkaXRQcm9kdWN0RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0aW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0ltYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Nb2RhbENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Nb2RhbFByb2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL0ZpZWxkQXJyYXlzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9Gb3JtUmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yZWFjdC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL01vYmlsZVNpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvT3JkZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2Nyb3AuY3NzPzg4N2YiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzaG93Q3JvcCIsInNyYyIsInVwbG9hZCIsInN0YXRlIiwiaWRFZGl0IiwibW9iaWxlVmlldyIsInNob3dTaWRlYmFyIiwidXBkYXRlVmlld1N0YXRlIiwiYmluZCIsInRvZ2dsZVNpZGVCYXIiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwicmVuZGVyIiwiY29udGFpbmVyQ2xhc3MiLCJoYW5kbGVTaG93Q3JvcCIsImhhbmRsZUNsb3NlQ3JvcCIsImRldGVjdE1vYiIsInRvTWF0Y2giLCJzb21lIiwidG9NYXRjaEl0ZW0iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsIkJhc2UiLCJDcm9wcGluZyIsImltYWdlIiwiY3JvcCIsImltYWdlUmVmIiwibWFrZUNsaWVudENyb3AiLCJsb2FkaW5nIiwiY3JvcHBlZEltYWdlVXJsIiwiaW1hZ2VCbG9iIiwic2hvd0Nyb3BJbWFnZSIsImNhbmNlbExvYWQiLCJ4IiwieSIsIndpZHRoIiwiYXNwZWN0IiwiaGVpZ2h0IiwiZ2V0Q3JvcHBlZEltZyIsImZpbGVOYW1lIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiZXJyb3IiLCJuYW1lIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiZmlsZVVybCIsImNyZWF0ZU9iamVjdFVSTCIsImNsb3NlQ3JvcCIsIm1heFdpZHRoIiwiaGFuZGxlVXBsb2FkIiwib25JbWFnZUxvYWRlZCIsIm9uQ3JvcENvbXBsZXRlIiwib25Dcm9wQ2hhbmdlIiwiTW9iaWxlIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiZGF0YSIsImxpbWl0IiwicmFuZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhZ2luYXRpb24iLCJwYWdpbmF0ZSIsImFjdGl2ZSIsInBhZ2UiLCJpZCIsIkF4aW9zIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlUGFnZSIsImNhdGNoIiwiZSIsInJlZnMiLCJlbWFpbCIsInZhbHVlIiwiZGVmYXVsdERhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwYWdpbmF0ZURhdGEiLCJhcnJheSIsInBhZ2Vfc2l6ZSIsInBhZ2VfbnVtYmVyIiwic2xpY2UiLCJtb3VudGVkIiwiaGFuZGxlRWRpdCIsImVkaXQiLCJpdGVtcyIsIm51bWJlciIsInB1c2giLCJ0YXJnZXQiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGVhciIsIm1hcCIsImkiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImZvcm1hdERhdGUiLCJjcmVhdGVkQXQiLCJNb2RhbCIsImNvbG9yIiwiZGVsZXRlIiwiTW9kYWxPcmRlciIsIk9yZGVyIiwic3RhdHVzIiwibG9jYXRpb24iLCJmbGV4IiwicGFkZGluZyIsIm9yZGVyZGV0YWlscyIsInByb2R1Y3RJbWFnZSIsInByb2R1Y3ROYW1lIiwicXR5IiwicHJvZHVjdFByaWNlIiwidG90YWwiLCJhZGRyZXNzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjaXR5IiwicG9zdGNvZGUiLCJjb3VudHJ5IiwicGhvbmVOdW1iZXIiLCJwYXltZW50TWV0aG9kIiwicGF5cGFsIiwiYW1vdW50IiwiY3VycmVuY3kiLCJoYW5kbGVQRU5ESU5HIiwiaGFuZGxlUHJvY2Vzc2luZyIsImhhbmRsZURlbGl2ZXJpbmciLCJoYW5kbGVDb21wbGV0ZWQiLCJQYWdpbmF0ZU9yZGVyIiwiYXJyIiwicXVlcnkiLCJzdGF0dXNGaWx0ZXIiLCJmcm9tRGF0ZSIsInRvRGF0ZSIsIm9yZGVySWQiLCJncmVhdGVyIiwibGVzcyIsInVzZXIiLCJnZXRUaW1lIiwiZGF0ZVNhbWUiLCJzZXREYXRlIiwiaXRlbSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsInJlcyIsImRlbGV0ZWQiLCJvcmRlciIsInBhdGhuYW1lIiwiaGFuZGxlRGVsZXRlIiwiUHJvZHVjdEFkZCIsInByaWNlIiwic3RvY2siLCJkZXNjIiwiQWRkUHJvZHVjdCIsImRldGFpbHMiLCJpbWFnZWlkIiwiY2F0ZWdvcnlJZCIsImhpc3RvcnkiLCJmaWxlcyIsInNpemUiLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibG9hZGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUFkZEltYWdlIiwic2F2ZUJ1dHRvbiIsInZhbGlkYXRlIiwiaW1hZ2VJZCIsImhhbmRsZVJlbW92ZUltYWdlIiwiaGFuZGxlRGV0YWlsTmFtZSIsIm9uU2VsZWN0RmlsZSIsImhhbmRsZVNlbGVjdCIsImhhbmRsZUFkZFByb2R1Y3QiLCJDYXRlZ29yaWVzIiwic2hvdyIsImNhdGVnb3J5RGF0YSIsImNhdGVnb3J5IiwiaGFuZGxlQXhpb3MiLCJzZWxlY3RlZCIsImhhbmRsZUNhdGVnb3J5IiwiQ2F0ZWdvcnlFZGl0IiwiaGFuZGxlUmVtb3ZlIiwiQ3JvcERpYWxvZyIsImFkZEltYWdlIiwiZGVmYXVsdEltYWdlIiwiRWRpdENhdCIsImV2ZW50IiwiRWRpdFByb2R1Y3REZXRhaWxzIiwiaW5kZXgiLCJuZXdEYXRhIiwiZGF0YWluZGV4IiwiZGV0YWlsbmFtZSIsImRhdGFjaGFuZ2UiLCJkYXRhZGVzYyIsImNvbmNhdCIsImZvcmRldGFpbHMiLCJoYW5kbGVEZXRhaWxDaGFuZ2UiLCJoYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZSIsImhhbmRsZVJlbW92ZUl0ZW0iLCJoYW5kbGVBZGREZXRhaWxzIiwiRWRpdGluZyIsImdvdG51bGxkYXRhIiwic2hvd0FkZEltYWdlIiwibWVzc2FnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwicHJvZHVjdERldGFpbHNzIiwiaGFuZGxlU2F2ZSIsImhhbmRsZURldGFpbHNOdWxsIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXREaWFsb2ciLCJkaXZEaWFsb2ciLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImJhY2tncm91bmQiLCJJbWFnZUxpc3QiLCJpbWFnZUNsaWNrZWQiLCJmaWxlbmFtZSIsIk1vZGFsUHJvZCIsIlByb2R1Y3REZXRhaWxzIiwiaWR4IiwiZXZ0IiwibmV3U2hhcmVob2xkZXJzIiwic2hhcmVob2xkZXJzIiwic2hhcmVob2xkZXIiLCJzaWR4IiwibmV3U2hhcmVob2xkZXJkZXNjIiwicmVtb3ZlZCIsInMiLCJkZXRhaWxuYW1laGFzaW5wdXQiLCJkYXRhZGVzY2hhc2lucHV0IiwiaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlIiwiaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlIiwiaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIiLCJoYW5kbGVBZGRTaGFyZWhvbGRlciIsInByb2R1Y3QiLCJwcm9kdWN0SW5wdXQiLCJjYXRlZ29yeUlucHV0Iiwic3RvY2tncmVhdCIsInN0b2NrZ3JlYXRJbnB1dCIsInN0b2NrbGVzcyIsInN0b2NrbGVzc0lucHV0IiwiY2F0ZWdvcnlGaWx0ZXIiLCJVcGxvYWQiLCJheGlvcyIsImFkZGltYWdlIiwicmVuZGVyRmllbGQiLCJpbnB1dCIsImxhYmVsIiwidHlwZSIsIm1ldGEiLCJ0b3VjaGVkIiwicmVuZGVyTWVtYmVycyIsImZpZWxkcyIsInN1Ym1pdEZhaWxlZCIsIm1lbWJlciIsInJlbW92ZSIsImhhbmRsZVRla2FuIiwicGFyYW1zIiwiRmllbGRBcnJheXNGb3JtIiwiaGFuZGxlU3VibWl0IiwicHJpc3RpbmUiLCJyZXNldCIsInN1Ym1pdHRpbmciLCJyZWR1eEZvcm0iLCJmb3JtIiwiRm9ybVJlZHV4Iiwic3RvcmUiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdXhGb3JtUmVkdWNlciIsImRldlRvb2xzRXh0ZW5zaW9uIiwiY3JlYXRlU3RvcmUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJtZW1iZXJzIiwiX2Vycm9yIiwibWVtYmVyc0FycmF5RXJyb3JzIiwiZm9yRWFjaCIsIm1lbWJlckluZGV4IiwibWVtYmVyRXJyb3JzIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsIkN1c3RvbWVyIiwibm93IiwiRGFzaGJvYXJkIiwic3RhcnREYXRlIiwiZ2V0RGF0YSIsImhhbmRsZU1vbnRoIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFsaWduIiwidG90YWxfc3VtIiwidG9GaXhlZCIsInVzZXJzIiwic3VtIiwiY2hhcnQiLCJ0aXRsZSIsImNvdW50IiwiaEF4aXMiLCJ2QXhpcyIsIk1vYmlsZVNpZGVCYXIiLCJPcmRlcnMiLCJQcm9kdWN0IiwiU2lkZWJhciIsIm1pbmhlaWdodCIsImxpc3RTdHlsZVR5cGUi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O0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLGVBQVMsRUFBQztBQUFiLE1BTEYsYUFERixDQVhGLEVBb0JFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLGVBQVMsRUFBQztBQUFiLE1BTEYsV0FERixDQXBCRixFQThCRSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxXQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLGNBREYsQ0E5QkYsRUF1Q0UsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsWUFETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsZUFBUyxFQUFDO0FBQWIsTUFMRixZQURGLENBdkNGLENBREYsQ0FERjtBQXFERDs7QUF2RDRDLEM7Ozs7Ozs7Ozs7OztBQ0gvQyIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZ1wiO1xyXG5pbXBvcnQgQ3JvcHBpbmcgZnJvbSBcIi4vQ3JvcHBpbmdcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuL2NvbXBvbmVudC9vcmRlci9PcmRlclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlFZGl0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXRcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcbmltcG9ydCBQcm9kdWN0QWRkIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL1Byb2R1Y3RBZGRcIjtcclxuaW1wb3J0IE1vYmlsZVNpZGVCYXIgZnJvbSBcIi4vcm91dGVyL01vYmlsZVNpZGVCYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgICBpZEVkaXQ6IG51bGwsXHJcbiAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSA9IHRoaXMudXBkYXRlVmlld1N0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVNpZGVCYXIgPSB0aGlzLnRvZ2dsZVNpZGVCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcm9wID0gKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wOiB0cnVlLCBzcmM6IHBheWxvYWQuc3JjLCB1cGxvYWQ6IHBheWxvYWQudXBsb2FkIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQ3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2lkZUJhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93U2lkZWJhcjogIXRoaXMuc3RhdGUuc2hvd1NpZGViYXIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVWaWV3U3RhdGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXdTdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5tb2JpbGVWaWV3ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9iaWxlVmlldzogdHJ1ZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgbGV0IGNvbnRhaW5lckNsYXNzID0gXCJkLWZsZXhcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZVZpZXcpIGNvbnRhaW5lckNsYXNzID0gXCJjb250YWluZXItZmx1aWRcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dTaWRlYmFyID8gPFNpZGViYXIgLz4gOiA8TW9iaWxlU2lkZUJhciAvPn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vYmlsZVZpZXcgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVNpZGVCYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyBcIl5cIiA6IFwidlwifXtcIiBcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiByZW5kZXI9eyhwcm9wcykgPT4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RcIiByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3Qgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFkZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5oYW5kbGVTaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLmhhbmRsZUNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlld29yZGVyXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxFZGl0aW5nIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvZm9ybXJlZHV4XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3RBZGQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLnN0YXRlLnNob3dDcm9wfVxyXG4gICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgICB1cGxvYWQ9e3RoaXMuc3RhdGUudXBsb2FkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi9Nb2JpbGVcIjtcclxuXHJcbmZ1bmN0aW9uIGRldGVjdE1vYigpIHtcclxuICBjb25zdCB0b01hdGNoID0gW1xyXG4gICAgL0FuZHJvaWQvaSxcclxuICAgIC93ZWJPUy9pLFxyXG4gICAgL2lQaG9uZS9pLFxyXG4gICAgL2lQYWQvaSxcclxuICAgIC9pUG9kL2ksXHJcbiAgICAvQmxhY2tCZXJyeS9pLFxyXG4gICAgL1dpbmRvd3MgUGhvbmUvaSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gdG9NYXRjaC5zb21lKCh0b01hdGNoSXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2godG9NYXRjaEl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gZGV0ZWN0TW9iKCkgPyAoXHJcbiAgICAgIDxNb2JpbGUgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgPEFwcCAvPlxyXG4gICAgICA8L1JvdXRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nyb3AuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wcGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuXHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Q3JvcEltYWdlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjYW5jZWxMb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51cGxvYWQodGhpcy5zdGF0ZS5pbWFnZUJsb2IsIHRoaXMuY2FuY2VsTG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3BwZWRJbWFnZVVybCwgc2hvd0Nyb3BJbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbG9zZUNyb3AoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3Nob3dDcm9wSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wSW1hZ2U6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3A9e3RoaXMuc3RhdGUuY3JvcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjcm9wcGVkSW1hZ2VVcmwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaG93Q3JvcEltYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JvcCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtNVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+IFVwbG9hZGluZyBJbWFnZS4uLi5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICA8aDE+VW5kZXJDb25zdHJ1Y3Rpb24gUExlYXNlIHVzZSBEZXNrdG9wPC9oMT5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgZm9ybWF0RGF0ZSA9IGRhdGUgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2N1c3RvbWVyYClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSBwYWdlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UodGhpcy5zdGF0ZS5hY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICB4ID0+IHguZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXJlZCBPbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmZvcm1hdERhdGUoeC5jcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgT3JkZXIge3RoaXMucHJvcHMuaWR9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1xyXG4gICAgICAgICAgXCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIE9yZGVyIFN0YXR1cyBXaWxsIENoYW5nZSB0byB7dGhpcy5wcm9wcy5uYW1lfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbE9yZGVyIGZyb20gXCIuL01vZGFsT3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IG51bGwsIHN0YXR1czogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQRU5ESU5HID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQRU5ESU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ29tcGxldGVkID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJDT01QTEVURURcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJDT01QTEVURURcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURlbGl2ZXJpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvY2Vzc2luZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9vcmRlcnNcIj5PcmRlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBWaWV3IE9yZGVyXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0zIG10LTNcIj5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9yZGVyZGV0YWlscy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLnRvdGFsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhKX0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5DdXN0b21lciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ2l0eSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY2l0eX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0Y29kZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50cnkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlciA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlciBEYXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQYXltZW50IE1ldGhvZCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgVXBkYXRlZCBBdCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVwZGF0ZV9hdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5QYXlQYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDdXJyZW5jeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBkYXRhLnBheXBhbC5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+QWN0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBFTkRJTkcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQRU5ESU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUEVORElOR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUEVORElOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2Nlc3NpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQUk9DRVNTSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUFJPQ0VTU0lOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsaXZlcmluZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckRFTElWRVJJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxpdmVyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJERUxJVkVSSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvbXBsZXRlZChkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyQ09NUExFVEVEXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkNPTVBMRVRFRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9vcmRlcmApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJlc1wiLCBkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlID0gcGFnZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGFyciwgcXVlcnkpID0+IHtcclxuICAgIHJldHVybiBhcnIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICB9O1xyXG5cclxuICBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKTtcclxuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGggKyAxfS0ke3llYXJ9YDtcclxuXHJcbiAgICAvLyBsZXQgdG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIC8vIGxldCBmb3JtYXREYXRlID1cclxuICAgIC8vICAgdG9Gb3JtYXQuZ2V0RGF0ZSgpICtcclxuICAgIC8vICAgXCItXCIodG9Gb3JtYXQuZ2V0TW9udGgoKSArIDEpICtcclxuICAgIC8vICAgdG9Gb3JtYXQuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXIsXHJcbiAgICAgIGZyb21EYXRlLFxyXG4gICAgICB0b0RhdGUsXHJcbiAgICAgIG9yZGVySWQsXHJcbiAgICAgIGdyZWF0ZXIsXHJcbiAgICAgIGxlc3NcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICB4ID0+IHgudXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZW1haWwudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1c0ZpbHRlcikge1xyXG4gICAgICBpZiAoc3RhdHVzRmlsdGVyICE9PSBcIk5PTkVcIikge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHguc3RhdHVzID09PSBzdGF0dXNGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSA9PT0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBsZXQgZGF0ZVNhbWUgPSBuZXcgRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgIGRhdGVTYW1lLnNldERhdGUoZGF0ZVNhbWUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBkYXRlU2FtZS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0b0RhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcmRlcklkKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgPT09IHBhcnNlSW50KG9yZGVySWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JlYXRlcikge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4LnRvdGFsID4gcGFyc2VGbG9hdChncmVhdGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4LnRvdGFsIDwgcGFyc2VGbG9hdChsZXNzKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZWxldGUgPSB2YWx1ZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9vcmRlcnMvJHt2YWx1ZX1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoeCA9PiB4LmlkICE9PSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcbiAgICB0aGlzLnJlZnMuZW1haWwudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLnN0YXR1cy52YWx1ZSA9IFwiTk9ORVwiO1xyXG4gICAgdGhpcy5yZWZzLm9yZGVyLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5ncmVhdGVyLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5sZXNzLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgc3RhdHVzRmlsdGVyOiBudWxsLFxyXG4gICAgICBmcm9tRGF0ZTogbnVsbCxcclxuICAgICAgdG9EYXRlOiBudWxsLFxyXG4gICAgICBvcmRlcklkOiBudWxsLFxyXG4gICAgICBncmVhdGVyOiBudWxsLFxyXG4gICAgICBsZXNzOiBudWxsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHJhbmdlLCBhY3RpdmUsIHBhZ2luYXRpb24sIHN0YXR1c0ZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0ZpbHRlcik7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgcmVmPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVORElOR1wiPlBFTkRJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERUxJVkVSSU5HXCI+REVMSVZFUklORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09NUExFVEVEXCI+Q09NUExFVEVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzU3RhcnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBmcm9tRGF0ZTogZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5UbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzRW5kXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cIkNsaWNrIHRvIHNlbGVjdCBhIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgdG9EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmRlciBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgb3JkZXJJZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJncmVhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGdyZWF0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRvdGFsIExlc3MgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwibGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBFbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIENyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC51c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3ZpZXdvcmRlclwiLCBzdGF0ZTogeyBkYXRhOiB4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuLXNxdWFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifVZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGV9IGlkPXt4LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIFRvcCBSb3cgKi99XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBzYXZlQnV0dG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IFtdLFxyXG4gICAgICB2YWxpZGF0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgZGVzYyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGltYWdlaWQgJiYgbmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBjYXRlZ29yeUlkICYmIGRlc2MpIHtcclxuICAgICAgQXhpb3MoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtjYXRlZ29yeUlkfWAsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBkYXRhIHRvIHNlcnZlci4uLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGhpcy5zdGF0ZS5pbWFnZWlkfS9pbWFnZWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IG51bGwsIGltYWdlOiBudWxsIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpbWFnZUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoaW1hZ2VJZCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUltYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHVwbG9hZFwiLCBlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWxlY3QgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0uc2l6ZSA+IDgzODg2MDgpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBGaWxlIHRvbyBiaWcuLiBQbGVhc2UgUHV0IGxlc3MgdGhhbiA4bWJcIik7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0Nyb3AocGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsTmFtZSA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsTmFtZTogXCIsIGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyBoYW5kbGVEZXRhaWxEZXNjID0gZSA9PntcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxEZXNjOiBcIiwgZSlcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbWFnZWlkLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICB2YWxpZGF0ZSxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+IHtcIj4gTmV3IFByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiNWVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbG5hbWU9e3RoaXMuaGFuZGxlRGV0YWlsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZWlkID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBJbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgJiZcclxuICAgICAgICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCAmJlxyXG4gICAgICAgICAgICAgICAgICBkZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEZpbGwgQWxsIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtzdG9jayA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIFN0b2NrIEFtb3VudCBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7cHJpY2UgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBwdXQgcHJpY2UgbW9yZSB0aGFuIDBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY2F0ZWdvcnlEYXRhOiBudWxsXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiYXBpL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLCBzaG93OiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS5jYXRlZ29yeURhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IFwiXCIsIGRldGFpbHM6IFwiXCIsIHNob3c6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc2hvdywgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiBzaG93ICYmIChcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZWxlY3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlEYXRhID8gY2F0ZWdvcnlEYXRhLmlkIDogbnVsbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UGxlYXNlIFNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPQURJTkdcIj5MT0FESU5HLi48L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBOYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXRlZ29yeX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIHshc2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbENhdCBmcm9tIFwiLi4vT2xkL01vZGFsQ2F0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIFwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgIENhdGVnb3J5IExpc3RcclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4LmRldGFpbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI2NhdGVnb3J5XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgZGVmYXVsdEltYWdlOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAvL3RvZG8gdGhpcyBpcyBzdWNlc3MgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNyYywgY3JvcCwgZGVmYXVsdEltYWdlLCBjcm9wcGVkSW1hZ2VVcmwsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5VcGxvYWRpbmcgLi4uLjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoND5Dcm9wIGFuZCBVcGxvYWQgSW1hZ2U8L2g0PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuXHJcbiAgICAgICAge3NyYyAmJiBkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlZmF1bHRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ3JvcFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0Q2F0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLnByb3BzLmNhdGVnb3J5SWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjYXRlZ29yeUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9wcyBvZiBFZGl0Q2F0XCIsIHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMucHJvcHMuaGFuZGxlQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHgsIHkpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5fSB2YWx1ZT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXRhaWxzOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHRoaXMucHJvcHMuZm9yZGV0YWlscyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgZGF0YWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gZGF0YWluZGV4KSByZXR1cm4gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgZGV0YWlsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgZGF0YWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gZGF0YWluZGV4KSByZXR1cm4gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgZGF0YWRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogbmV3RGF0YSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGF0YWNoYW5nZShuZXdEYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUl0ZW0gPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZERldGFpbHMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzLmNvbmNhdChbXHJcbiAgICAgICAgeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiwgaWQ6IFwiXCIgfSxcclxuICAgICAgXSksXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3QgeyBkZXRhaWxzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG4gICAgICAgIHtkZXRhaWxzXHJcbiAgICAgICAgICA/IGRldGFpbHMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVob2xkZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5kYXRhZGVzY31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSXRlbShkYXRhLmlkID8gZGF0YS5pZCA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZERldGFpbHN9IGNsYXNzTmFtZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICBBZGQgUHJvZHVjdCBEZXRhaWxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBFZGl0Q2F0IGZyb20gXCIuL0VkaXRDYXRcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgVXBsb2FkIGZyb20gXCIuL1VwbG9hZFwiO1xyXG5pbXBvcnQgSW1hZ2VMaXN0IGZyb20gXCIuL0ltYWdlTGlzdFwiO1xyXG5pbXBvcnQgQ3JvcERpYWxvZyBmcm9tIFwiLi9Dcm9wRGlhbG9nXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRWRpdFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL0VkaXRQcm9kdWN0RGV0YWlsc1wiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICBkZXRhaWxzOiBudWxsLFxyXG4gICAgICBnb3RudWxsZGF0YSA6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YFxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBuYW1lOiBkYXRhLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgIHByaWNlOiBkYXRhLnByb2R1Y3RQcmljZSxcclxuICAgICAgICBzdG9jazogZGF0YS5wcm9kdWN0U3RvY2ssXHJcbiAgICAgICAgZGVzYzogZGF0YS5wcm9kdWN0RGVzYyxcclxuICAgICAgICBkZXRhaWxzIDogZGF0YS5wcm9kdWN0RGV0YWlsc3MsXHJcbiAgICAgICAgZ290bnVsbGRhdGEgOiB0cnVlLFxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGF0YS5jYXRlZ29yeSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY2F0ZWdvcnlJZDogZGF0YS5jYXRlZ29yeS5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZGF0YS5wcm9kdWN0SW1hZ2UpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlOiBkYXRhLnByb2R1Y3RJbWFnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gaWQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3J5SWQ6IGlkXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9pbWFnZXMvJHtkYXRhLmlkfS9maWxlL3Byb2R1Y3RgLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1hZ2U6IGltYWdlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNhdmUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIG5hbWUsIHByaWNlLCBzdG9jaywgZGVzYywgY2F0ZWdvcnlJZCwgaW1hZ2UgLCBkZXRhaWxzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZihuYW1lID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIG5hbWUgPSBkYXRhLnByb2R1Y3ROYW1lO1xyXG4gICAgfVxyXG4gICAgaWYocHJpY2UgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgcHJpY2UgPSBkYXRhLnByb2R1Y3RQcmljZTtcclxuICAgIH1cclxuICAgIGlmKHN0b2NrID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHN0b2NrID0gZGF0YS5wcm9kdWN0U3RvY2s7XHJcbiAgICB9XHJcbiAgICBpZihkZXNjID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGRlc2MgPSBkYXRhLnByb2R1Y3REZXNjO1xyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcblxyXG4gICAgaWYgKG5hbWUgJiYgcHJpY2UgJiYgc3RvY2sgJiYgZGVzYykge1xyXG5cclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7ZGF0YS5pZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgaW1hZ2U6IGltYWdlLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5SWQsXHJcbiAgICAgICAgICBkZXRhaWxzIDogZGV0YWlsc1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiRGF0YSBIYXMgQmVlbiBTYXZlZFwiIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogYERhdGEgTm90IFNhdmUgLiBFcnJvciA6ICR7ZX1gIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJEYXRhIG5vdCBzYXZlLiBQbGVhc2UgRmlsbCBBbGwgcmVxdWlyZW1lbnQgZmllbGRzXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWxlY3QgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvdyBzb21ldGhpbmcgaGVyZVwiLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxzTnVsbCA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSAsIGdvdG51bGxkYXRhIDogZmFsc2V9KVxyXG4gIH1cclxuICBoYW5kbGVEZXRhaWxDaGFuZ2UgPSBlID0+IHtcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlLCBnb3RudWxsZGF0YSA6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gZSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSwgc2hvd0FkZEltYWdlOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbWVzc2FnZSwgY2F0ZWdvcnlJZCwgaW1hZ2UsIGRldGFpbHMsIGdvdG51bGxkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgRWRpdCBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdFN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMGVtXCIsIGhlaWdodDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0RGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIHsgKGRldGFpbHMgJiYgZ290bnVsbGRhdGEpID8gPEVkaXRQcm9kdWN0RGV0YWlscyBmb3JkZXRhaWxzPXtkZXRhaWxzfSBkYXRhY2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZX0vPiAgOiA8UHJvZHVjdERldGFpbHMgZGV0YWlsbmFtZT17dGhpcy5oYW5kbGVEZXRhaWxzTnVsbH0gLz4gfSAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTMwcHhcIiwgaGVpZ2h0OiBcIjEzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmUgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vIEltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkSW1hZ2U6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdENhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ9e2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2F0ZWdvcnk9e3RoaXMuaGFuZGxlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogbnVsbCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmllcyBzZWxlY3RlZD17dGhpcy5oYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0FkZEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDcm9wRGlhbG9nIGFkZEltYWdlPXt0aGlzLmhhbmRsZUFkZEltYWdlfSAvPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7bWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL2ltYWdlcy9cIlxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiByZXMuZGF0YVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VDbGlja2VkID0gaW1hZ2UgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpbWFnZX0vaW1hZ2VgXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg0PkltYWdlIExpc3Q8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICBkYXRhLm1hcCgoeCwgeSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHAtMlwiIGtleT17eX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZUNsaWNrZWQoeC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHguZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1wiY2F0ZWdvcnlcIiArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJ9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5EZWxldGU8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBEZWxldGluZyB0aGlzIENhdGVnb3J5IHdpbGwgZGVsZXRlIGFsbCBwcm9kdWN0IGZvciB0aGlzIGNhdGVnb3J5LlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gRGVsZXRlIENhdGVnb3J5IFwie3RoaXMucHJvcHMubmFtZX1cIiA/IC5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxQcm9kIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wicHJvZHVjdFwiICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1wicHJvZHVjdFwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gRGVsZXRlIFByb2R1Y3QgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaGFyZWhvbGRlcnM6IFt7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH1dLFxyXG4gICAgICBkZXRhaWxuYW1laGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgICBkYXRhZGVzY2hhc2lucHV0OiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlck5hbWVDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcnMgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoKHNoYXJlaG9sZGVyLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgcmV0dXJuIHsgLi4uc2hhcmVob2xkZXIsIGRldGFpbG5hbWU6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZWhvbGRlcnM6IG5ld1NoYXJlaG9sZGVycyB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShuZXdTaGFyZWhvbGRlcnMpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlID0gKGlkeCkgPT4gKGV2dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U2hhcmVob2xkZXJkZXNjID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKFxyXG4gICAgICAoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgICBpZiAoaWR4ICE9PSBzaWR4KSByZXR1cm4gc2hhcmVob2xkZXI7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc2hhcmVob2xkZXIsIGRhdGFkZXNjOiBldnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJkZXNjIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVyZGVzYyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRTaGFyZWhvbGRlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaGFyZWhvbGRlcnM6IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLmNvbmNhdChbXHJcbiAgICAgICAgeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9LFxyXG4gICAgICBdKSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyID0gKGlkeCkgPT4gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVtb3ZlZCA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLmZpbHRlcigocywgc2lkeCkgPT4gaWR4ICE9PSBzaWR4KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBzaGFyZWhvbGRlcnM6IHJlbW92ZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKHJlbW92ZWQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg0PlByb2R1Y3QgRGV0YWlsKHMpPC9oND5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YE5hbWUgT2YgRGV0YWlsICMke2lkeCArIDF9YH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGV0YWlsbmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGFyZWhvbGRlck5hbWVDaGFuZ2UoaWR4KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGV0YWlsbmFtZWhhc2lucHV0XHJcbiAgICAgICAgICAgICAgPyBcIk5hbWUgb2YgZGV0YWlsIGlzIHJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERldGFpbCBEYXRhICMke2lkeCArIDF9IGB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NoYXJlaG9sZGVyLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YWRlc2NoYXNpbnB1dCA/IFwiRGV0YWlsIGRhdGEgaXMgcmVxdWlyZWRcIiA6IG51bGx9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyKGlkeCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRTaGFyZWhvbGRlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgUHJvZHVjdCBEZXRhaWxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBNb2RhbFByb2QgZnJvbSBcIi4uL09sZC9Nb2RhbFByb2RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG4gICAgICBjYXRlZ29yeURhdGE6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrZ3JlYXQgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdG9ja2xlc3MgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHNgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGVmYXVsdERhdGE6IGRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB0aGlzLnByb2R1Y3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5jYXRlZ29yeSkgdGhpcy5jYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrZ3JlYXQpIHRoaXMuc3RvY2tncmVhdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrbGVzcykgdGhpcy5zdG9ja2xlc3NJbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGNhdGVnb3J5RmlsdGVyLCBzdG9ja2dyZWF0LCBzdG9ja2xlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHgucHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb2R1Y3QudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5RmlsdGVyKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yeUZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguY2F0ZWdvcnkubmFtZSA9PT0gY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tncmVhdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrID4gcGFyc2VGbG9hdChzdG9ja2dyZWF0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPCBwYXJzZUZsb2F0KHN0b2NrbGVzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uLCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2sgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3RvY2tncmVhdH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tncmVhdDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIExlc3MgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrbGVzc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrbGVzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pk5vIHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiB0bz1cIi9uZXdwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLXNxdWFyZSBmYS0xeFwiIC8+IEFkZCBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHgucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guY2F0ZWdvcnkgPyB4LmNhdGVnb3J5Lm5hbWUgOiBcIlwifTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0IGZhLTF4XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvZWRpdFwiLCBzdGF0ZTogeyBpZDogeC5pZCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdFwiIC8+IHtcIiAgXCJ9RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNwcm9kdWN0XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFByb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuLy8gaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNyYzogbnVsbCxcclxuICAgIGNyb3A6IHtcclxuICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgfSxcclxuICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgIGltYWdlQmxvYjogbnVsbFxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHRoaXMuc3RhdGUuc3JjKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmltYWdlbG9hZFwiKTtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3AgY29tcGxldGVcIik7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3BjaGFuZ2VcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGFkZGltYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBhZGRpbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgLy90b2RvIHRoaXMgaXMgc3VjZXNzIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkSW1hZ2VVcmwsIHNyYyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3NyYyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPHAgLz5cclxuICAgICAgICAgIHsvKiB7Y3JvcHBlZEltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlbmRlckZpZWxkID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17bGFiZWx9IC8+XHJcbiAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCByZW5kZXJNZW1iZXJzID0gKHsgZmllbGRzLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yLCBzdWJtaXRGYWlsZWQgfSB9KSA9PiAoXHJcbiAgPHVsPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCh7fSl9PlxyXG4gICAgICAgIEFkZCBNZW1iZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHsodG91Y2hlZCB8fCBzdWJtaXRGYWlsZWQpICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9saT5cclxuICAgIHtmaWVsZHMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIE1lbWJlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucmVtb3ZlKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBYXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGg0Pk1lbWJlciAje2luZGV4ICsgMX08L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT17YCR7bWVtYmVyfS5maXJzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0ubGFzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuY29uc3QgaGFuZGxlVGVrYW4gPSAocGFyYW1zKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgRmllbGRBcnJheXNGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8RmllbGRBcnJheSBuYW1lPVwibWVtYmVyc1wiIGNvbXBvbmVudD17cmVuZGVyTWVtYmVyc30gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30gb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgQ2xlYXIgVmFsdWVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRla2FufT5UZWthbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICBmb3JtOiBcImZpZWxkQXJyYXlzXCIsIC8vIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgZm9ybVxyXG4gIHZhbGlkYXRlLFxyXG59KShGaWVsZEFycmF5c0Zvcm0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuaW1wb3J0IEZpZWxkQXJyYXlzRm9ybSBmcm9tIFwiLi9GaWVsZEFycmF5c0Zvcm1cIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cclxuICAgICAgICAgICAgICA8aDI+U2ltcGxlIEZvcm08L2gyPlxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZEFycmF5c0Zvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcmVkdWNlciBhcyByZWR1eEZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBmb3JtOiByZWR1eEZvcm1SZWR1Y2VyLCAvLyBtb3VudGVkIHVuZGVyIFwiZm9ybVwiXHJcbn0pO1xyXG5jb25zdCBzdG9yZSA9ICh3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb25cclxuICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpKGNyZWF0ZVN0b3JlKVxyXG4gIDogY3JlYXRlU3RvcmUpKHJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuICBjb25zdCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgaWYgKCF2YWx1ZXMubWVtYmVycyB8fCAhdmFsdWVzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICBlcnJvcnMubWVtYmVycyA9IHsgX2Vycm9yOiAnQXQgbGVhc3Qgb25lIG1lbWJlciBtdXN0IGJlIGVudGVyZWQnIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1lbWJlcnNBcnJheUVycm9ycyA9IFtdO1xyXG4gICAgdmFsdWVzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyLCBtZW1iZXJJbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBtZW1iZXJFcnJvcnMgPSB7fTtcclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5maXJzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMuZmlyc3ROYW1lID0gJ1JlcXVpcmVkJztcclxuICAgICAgICBtZW1iZXJzQXJyYXlFcnJvcnNbbWVtYmVySW5kZXhdID0gbWVtYmVyRXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghbWVtYmVyIHx8ICFtZW1iZXIubGFzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMubGFzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KTtcclxuICAgIGlmIChtZW1iZXJzQXJyYXlFcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgIGVycm9ycy5tZW1iZXJzID0gbWVtYmVyc0FycmF5RXJyb3JzO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCI7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgPFJvdXRlcj5cclxuLy8gICAgIDxBcHAgLz5cclxuLy8gICA8L1JvdXRlcj4sXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxBcHAgLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbWVyL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxDdXN0b21lckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ29sLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRGdWxsWWVhcigpO1xyXG5jb25zdCBtb250aCA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgbW9udGg6IG1vbnRoLFxyXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpKVxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2Rhc2hib2FyZD95ZWFyPSR7dGhpcy5zdGF0ZS55ZWFyfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1vbnRoKG1vbnRoKSB7XHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJGZWJ1YXJ5XCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcIk1heVwiO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XHJcbiAgICAgIGNhc2UgOTpcclxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICByZXR1cm4gXCJPY2t0b2JlclwiO1xyXG4gICAgICBjYXNlIDExOlxyXG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIFwiRGlzZW1iZXJcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dCA9IGUgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBmb3IgZGFzaGJvYXJkXCIsIHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCB5ZWFyLCBtb250aCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+Q2hhbmdlIE1vbnRoIGFuZCBZZWFyIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS50b3RhbF9zdW0gPyBkYXRhLnRvdGFsX3N1bSA6IDApLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Ub3RhbCBTYWxlczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gPGg0PntkYXRhLnVzZXJzfTwvaDQ+IDogPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PkN1c3RvbWVyczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW1beWVhcl0gPyBkYXRhLnN1bVt5ZWFyXSA6IDAuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+WWVhcmx5IFNhbGVzIDoge3llYXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+Uk0ge3BhcnNlRmxvYXQoZGF0YS5tb250aFttb250aF0pLnRvRml4ZWQoMil9PC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Nb250bHkgU2FsZXMgOiB7dGhpcy5oYW5kbGVNb250aChtb250aCl9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJCYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJzYWxlc1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgZGVzaWduIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRvdGFsIFNhbGVzIEJ5IE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMlwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwiT3JkZXIgQ291bnRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJjaFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjFcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZVNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgc3RpY2t5PVwidG9wXCIgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtcGlsbHNcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz4gXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL29yZGVyc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2Zvcm1yZWR1eFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2luYXRlT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9vcmRlci9QYWdpbmF0ZU9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyc1xyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UGFnaW5hdGVPcmRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdExpc3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQcm9kdWN0TGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBzaWRlYmFyLXdyYXBwZXJcIiBzdHlsZT17eyBtaW5oZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvYWRtaW5cIlxyXG4gICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+IERhc2hib2FyZFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4gUHJvZHVjdFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+IEN1c3RvbWVyXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvZm9ybXJlZHV4XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IERldk9wc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==