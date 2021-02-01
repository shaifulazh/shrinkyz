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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: containerClass
    }, this.state.showSidebar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "d-flex justify-content-center"
    }, this.state.mobileView ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn btn-primary btn-sm ",
      onClick: this.toggleSideBar
    }, this.state.showSidebar ? "^" : "v", " ") : null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/admin",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/orders",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Orders__WEBPACK_IMPORTED_MODULE_2__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/customer",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Customer__WEBPACK_IMPORTED_MODULE_3__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/product",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Product__WEBPACK_IMPORTED_MODULE_5__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/newproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/formredux",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_12__.default, props)
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Cropping__WEBPACK_IMPORTED_MODULE_8__.default, {
      showCrop: this.state.showCrop,
      closeCrop: this.handleCloseCrop,
      src: this.state.src,
      upload: this.state.upload
    }));
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
0,[["./assets/react-app/react-app.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_popper_js_dist_esm_popper_js","vendors-node_modules_axios_index_js-node_modules_react-datepicker_dist_react-datepicker_css-n-787f91"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9Dcm9wcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9Qcm9kdWN0QWRkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0FkZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ3JvcERpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0Q2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0VkaXRQcm9kdWN0RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0aW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0ltYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Nb2RhbENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Nb2RhbFByb2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvVXBsb2FkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL0ZpZWxkQXJyYXlzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9Gb3JtUmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yZWFjdC1hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvQ3VzdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL09yZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9Qcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jcm9wLmNzcz84ODdmIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic2hvd0Nyb3AiLCJzcmMiLCJ1cGxvYWQiLCJzdGF0ZSIsImlkRWRpdCIsIm1vYmlsZVZpZXciLCJzaG93U2lkZWJhciIsInVwZGF0ZVZpZXdTdGF0ZSIsImJpbmQiLCJ0b2dnbGVTaWRlQmFyIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJlbmRlciIsImNvbnRhaW5lckNsYXNzIiwiaGFuZGxlU2hvd0Nyb3AiLCJoYW5kbGVDbG9zZUNyb3AiLCJkZXRlY3RNb2IiLCJ0b01hdGNoIiwic29tZSIsInRvTWF0Y2hJdGVtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJCYXNlIiwiQ3JvcHBpbmciLCJpbWFnZSIsImNyb3AiLCJpbWFnZVJlZiIsIm1ha2VDbGllbnRDcm9wIiwibG9hZGluZyIsImNyb3BwZWRJbWFnZVVybCIsImltYWdlQmxvYiIsInNob3dDcm9wSW1hZ2UiLCJjYW5jZWxMb2FkIiwieCIsInkiLCJ3aWR0aCIsImFzcGVjdCIsImhlaWdodCIsImdldENyb3BwZWRJbWciLCJmaWxlTmFtZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiYmxvYiIsImVycm9yIiwibmFtZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJjbG9zZUNyb3AiLCJtYXhXaWR0aCIsImhhbmRsZVVwbG9hZCIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsIk1vYmlsZSIsIlByb2R1Y3RMaXN0IiwiZGF0ZSIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImRhdGEiLCJsaW1pdCIsInJhbmdlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGUiLCJhY3RpdmUiLCJwYWdlIiwiaWQiLCJBeGlvcyIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJjYXRjaCIsImUiLCJyZWZzIiwiZW1haWwiLCJ2YWx1ZSIsImRlZmF1bHREYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGFnaW5hdGVEYXRhIiwiYXJyYXkiLCJwYWdlX3NpemUiLCJwYWdlX251bWJlciIsInNsaWNlIiwibW91bnRlZCIsImhhbmRsZUVkaXQiLCJlZGl0IiwiaXRlbXMiLCJudW1iZXIiLCJwdXNoIiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJtYXAiLCJpIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY2l0eSIsInBvc3Rjb2RlIiwiY291bnRyeSIsInBob25lTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsInBheXBhbCIsImFtb3VudCIsImN1cnJlbmN5IiwiaGFuZGxlUEVORElORyIsImhhbmRsZVByb2Nlc3NpbmciLCJoYW5kbGVEZWxpdmVyaW5nIiwiaGFuZGxlQ29tcGxldGVkIiwiUGFnaW5hdGVPcmRlciIsImFyciIsInF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJvcmRlcklkIiwiZ3JlYXRlciIsImxlc3MiLCJ1c2VyIiwiZ2V0VGltZSIsImRhdGVTYW1lIiwic2V0RGF0ZSIsIml0ZW0iLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJyZXMiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsIlByb2R1Y3RBZGQiLCJwcmljZSIsInN0b2NrIiwiZGVzYyIsIkFkZFByb2R1Y3QiLCJkZXRhaWxzIiwiaW1hZ2VpZCIsImNhdGVnb3J5SWQiLCJoaXN0b3J5IiwiZmlsZXMiLCJzaXplIiwiYWxlcnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImxvYWRlciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoYW5kbGVBZGRJbWFnZSIsInNhdmVCdXR0b24iLCJ2YWxpZGF0ZSIsImltYWdlSWQiLCJoYW5kbGVSZW1vdmVJbWFnZSIsImhhbmRsZURldGFpbE5hbWUiLCJvblNlbGVjdEZpbGUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJjYXRlZ29yeSIsImhhbmRsZUF4aW9zIiwic2VsZWN0ZWQiLCJoYW5kbGVDYXRlZ29yeSIsIkNhdGVnb3J5RWRpdCIsImhhbmRsZVJlbW92ZSIsIkNyb3BEaWFsb2ciLCJhZGRJbWFnZSIsImRlZmF1bHRJbWFnZSIsIkVkaXRDYXQiLCJldmVudCIsIkVkaXRQcm9kdWN0RGV0YWlscyIsImluZGV4IiwibmV3RGF0YSIsImRhdGFpbmRleCIsImRldGFpbG5hbWUiLCJkYXRhY2hhbmdlIiwiZGF0YWRlc2MiLCJjb25jYXQiLCJmb3JkZXRhaWxzIiwiaGFuZGxlRGV0YWlsQ2hhbmdlIiwiaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkRGV0YWlscyIsIkVkaXRpbmciLCJnb3RudWxsZGF0YSIsInNob3dBZGRJbWFnZSIsIm1lc3NhZ2UiLCJwcm9kdWN0U3RvY2siLCJwcm9kdWN0RGVzYyIsInByb2R1Y3REZXRhaWxzcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVEZXRhaWxzTnVsbCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0RGlhbG9nIiwiZGl2RGlhbG9nIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kIiwiSW1hZ2VMaXN0IiwiaW1hZ2VDbGlja2VkIiwiZmlsZW5hbWUiLCJNb2RhbFByb2QiLCJQcm9kdWN0RGV0YWlscyIsImlkeCIsImV2dCIsIm5ld1NoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVycyIsInNoYXJlaG9sZGVyIiwic2lkeCIsIm5ld1NoYXJlaG9sZGVyZGVzYyIsInJlbW92ZWQiLCJzIiwiZGV0YWlsbmFtZWhhc2lucHV0IiwiZGF0YWRlc2NoYXNpbnB1dCIsImhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSIsImhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZSIsImhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyIiwiaGFuZGxlQWRkU2hhcmVob2xkZXIiLCJwcm9kdWN0IiwicHJvZHVjdElucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInN0b2NrZ3JlYXQiLCJzdG9ja2dyZWF0SW5wdXQiLCJzdG9ja2xlc3MiLCJzdG9ja2xlc3NJbnB1dCIsImNhdGVnb3J5RmlsdGVyIiwiVXBsb2FkIiwiYXhpb3MiLCJhZGRpbWFnZSIsInJlbmRlckZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsInR5cGUiLCJtZXRhIiwidG91Y2hlZCIsInJlbmRlck1lbWJlcnMiLCJmaWVsZHMiLCJzdWJtaXRGYWlsZWQiLCJtZW1iZXIiLCJyZW1vdmUiLCJoYW5kbGVUZWthbiIsInBhcmFtcyIsIkZpZWxkQXJyYXlzRm9ybSIsImhhbmRsZVN1Ym1pdCIsInByaXN0aW5lIiwicmVzZXQiLCJzdWJtaXR0aW5nIiwicmVkdXhGb3JtIiwiZm9ybSIsIkZvcm1SZWR1eCIsInN0b3JlIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHV4Rm9ybVJlZHVjZXIiLCJkZXZUb29sc0V4dGVuc2lvbiIsImNyZWF0ZVN0b3JlIiwidmFsdWVzIiwiZXJyb3JzIiwibWVtYmVycyIsIl9lcnJvciIsIm1lbWJlcnNBcnJheUVycm9ycyIsImZvckVhY2giLCJtZW1iZXJJbmRleCIsIm1lbWJlckVycm9ycyIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJDdXN0b21lciIsIm5vdyIsIkRhc2hib2FyZCIsInN0YXJ0RGF0ZSIsImdldERhdGEiLCJoYW5kbGVNb250aCIsImhhbmRsZUNoYW5nZSIsInRleHRBbGlnbiIsInRvdGFsX3N1bSIsInRvRml4ZWQiLCJ1c2VycyIsInN1bSIsImNoYXJ0IiwidGl0bGUiLCJjb3VudCIsImhBeGlzIiwidkF4aXMiLCJPcmRlcnMiLCJQcm9kdWN0IiwiU2lkZWJhciIsIm1pbmhlaWdodCIsImxpc3RTdHlsZVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLGVBQVMsRUFBQztBQUFiLE1BTEYsYUFERixDQVhGLEVBb0JFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFNBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLGVBQVMsRUFBQztBQUFiLE1BTEYsV0FERixDQXBCRixFQThCRSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxXQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLGNBREYsQ0E5QkYsRUF1Q0UsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsWUFETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsZUFBUyxFQUFDO0FBQWIsTUFMRixZQURGLENBdkNGLENBREYsQ0FERjtBQXFERDs7QUF2RDRDLEM7Ozs7Ozs7Ozs7OztBQ0gvQyIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZ1wiO1xyXG5pbXBvcnQgQ3JvcHBpbmcgZnJvbSBcIi4vQ3JvcHBpbmdcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuL2NvbXBvbmVudC9vcmRlci9PcmRlclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlFZGl0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXRcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcbmltcG9ydCBQcm9kdWN0QWRkIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL1Byb2R1Y3RBZGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgICBpZEVkaXQ6IG51bGwsXHJcbiAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSA9IHRoaXMudXBkYXRlVmlld1N0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVNpZGVCYXIgPSB0aGlzLnRvZ2dsZVNpZGVCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcm9wID0gKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wOiB0cnVlLCBzcmM6IHBheWxvYWQuc3JjLCB1cGxvYWQ6IHBheWxvYWQudXBsb2FkIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQ3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2lkZUJhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93U2lkZWJhcjogIXRoaXMuc3RhdGUuc2hvd1NpZGViYXIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVWaWV3U3RhdGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXdTdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5tb2JpbGVWaWV3ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9iaWxlVmlldzogdHJ1ZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgbGV0IGNvbnRhaW5lckNsYXNzID0gXCJkLWZsZXhcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZVZpZXcpIGNvbnRhaW5lckNsYXNzID0gXCJjb250YWluZXItZmx1aWRcIjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dTaWRlYmFyID8gPFNpZGViYXIgLz4gOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vYmlsZVZpZXcgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVTaWRlQmFyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyBcIl5cIiA6IFwidlwifXtcIiBcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiByZW5kZXI9eyhwcm9wcykgPT4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvb3JkZXJzXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlcnMgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2N1c3RvbWVyXCIgcmVuZGVyPXsocHJvcHMpID0+IDxDdXN0b21lciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdFwiIHJlbmRlcj17KHByb3BzKSA9PiA8UHJvZHVjdCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgIHBhdGg9XCIvbmV3cHJvZHVjdFwiXHJcbiAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEFkZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLmhhbmRsZVNob3dDcm9wfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLmhhbmRsZUNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICBwYXRoPVwiL2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi92aWV3b3JkZXJcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVyIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxFZGl0aW5nIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgcGF0aD1cIi9mb3JtcmVkdXhcIlxyXG4gICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3RBZGQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICBzaG93Q3JvcD17dGhpcy5zdGF0ZS5zaG93Q3JvcH1cclxuICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5oYW5kbGVDbG9zZUNyb3B9XHJcbiAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgdXBsb2FkPXt0aGlzLnN0YXRlLnVwbG9hZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuL01vYmlsZVwiO1xyXG5cclxuZnVuY3Rpb24gZGV0ZWN0TW9iKCkge1xyXG4gIGNvbnN0IHRvTWF0Y2ggPSBbXHJcbiAgICAvQW5kcm9pZC9pLFxyXG4gICAgL3dlYk9TL2ksXHJcbiAgICAvaVBob25lL2ksXHJcbiAgICAvaVBhZC9pLFxyXG4gICAgL2lQb2QvaSxcclxuICAgIC9CbGFja0JlcnJ5L2ksXHJcbiAgICAvV2luZG93cyBQaG9uZS9pLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiB0b01hdGNoLnNvbWUoKHRvTWF0Y2hJdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh0b01hdGNoSXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBkZXRlY3RNb2IoKSA/IChcclxuICAgICAgPE1vYmlsZSAvPlxyXG4gICAgKSA6IChcclxuICAgICAgPFJvdXRlcj5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvUm91dGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3JvcC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgY3JvcDoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG5cclxuICAgICAgICBhc3BlY3Q6IDEgLyAxXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dDcm9wSW1hZ2UoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhbmNlbExvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVwbG9hZCh0aGlzLnN0YXRlLmltYWdlQmxvYiwgdGhpcy5jYW5jZWxMb2FkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcHBlZEltYWdlVXJsLCBzaG93Q3JvcEltYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7c2hvd0Nyb3BJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3BJbWFnZTogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JvcD17dGhpcy5zdGF0ZS5jcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Nyb3BwZWRJbWFnZVVybCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dDcm9wSW1hZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz4gVXBsb2FkaW5nIEltYWdlLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgIDxoMT5VbmRlckNvbnN0cnVjdGlvbiBQTGVhc2UgdXNlIERlc2t0b3A8L2gxPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKTtcclxuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGggKyAxfS0ke3llYXJ9YDtcclxuICB9O1xyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vY3VzdG9tZXJgKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDBcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IHBhZ2UgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZSh0aGlzLnN0YXRlLmFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG4gICAgdGhpcy5yZWZzLmVtYWlsLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IG51bGxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgIHggPT4geC5lbWFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZW1haWwudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGFjdGl2ZSwgcmFuZ2UsIHBhZ2luYXRpb24gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlcmVkIE9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmZpcnN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4Lmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJtb2RhbFwiICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJ9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5EZWxldGU8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBPcmRlciB7dGhpcy5wcm9wcy5pZH0/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XHJcbiAgICAgICAgICBcIm1vZGFsb3JkZXJcIiArIHRoaXMucHJvcHMubmFtZSArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57dGhpcy5wcm9wcy5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gT3JkZXIgU3RhdHVzIFdpbGwgQ2hhbmdlIHRvIHt0aGlzLnByb3BzLm5hbWV9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBSb3csIENvbCwgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsT3JkZXIgZnJvbSBcIi4vTW9kYWxPcmRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZGF0YTogbnVsbCwgc3RhdHVzOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBFTkRJTkcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIlBFTkRJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJQRU5ESU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVDb21wbGV0ZWQgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkNPTVBMRVRFRFwiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIkNPTVBMRVRFRFwiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlRGVsaXZlcmluZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiREVMSVZFUklOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQcm9jZXNzaW5nID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQUk9DRVNTSU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL29yZGVyc1wiPk9yZGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgIFZpZXcgT3JkZXJcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTMgbXQtM1wiPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoND5PcmRlciBMaXN0PC9oND5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+IzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3JkZXJkZXRhaWxzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyB4LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0UHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+e2RhdGEudG90YWx9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmRhdGEpfSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PkN1c3RvbWVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBZGRyZXNzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDaXR5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5jaXR5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0ZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3Muc3RhdGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBvc3Rjb2RlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5wb3N0Y29kZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ291bnRyeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY291bnRyeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5waG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5PcmRlciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIE9yZGVyIERhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5bWVudE1ldGhvZH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBzdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICB7LyogPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBVcGRhdGVkIEF0IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEudXBkYXRlX2F0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PlBheVBhbCBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFtb3VudCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEN1cnJlbmN5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5cGFsLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0dXMgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57c3RhdHVzICYmIGRhdGEucGF5cGFsLnN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5BY3Rpb248L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUEVORElORyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBFTkRJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlclBFTkRJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBFTkRJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVQRU5ESU5HfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJQRU5ESU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUHJvY2Vzc2luZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBST0NFU1NJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlclBST0NFU1NJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0NFU1NJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVQcm9jZXNzaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJQUk9DRVNTSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxpdmVyaW5nKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgREVMSVZFUklOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyREVMSVZFUklOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgREVMSVZFUklOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGl2ZXJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRFTElWRVJJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ29tcGxldGVkKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJDT01QTEVURURcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZUNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiQ09NUExFVEVEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBSb3csIENvbCwgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcjogbnVsbCxcclxuICAgICAgdG9EYXRlOiBudWxsLFxyXG4gICAgICBmcm9tRGF0ZTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL29yZGVyYClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmVzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlZmF1bHREYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2UgPSBwYWdlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVySXRlbXMgPSAoYXJyLCBxdWVyeSkgPT4ge1xyXG4gICAgcmV0dXJuIGFyci50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIH07XHJcblxyXG4gIGZvcm1hdERhdGUgPSBkYXRlID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG5cclxuICAgIC8vIGxldCB0b0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgLy8gbGV0IGZvcm1hdERhdGUgPVxyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXREYXRlKCkgK1xyXG4gICAgLy8gICBcIi1cIih0b0Zvcm1hdC5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcixcclxuICAgICAgZnJvbURhdGUsXHJcbiAgICAgIHRvRGF0ZSxcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZ3JlYXRlcixcclxuICAgICAgbGVzc1xyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgIHggPT4geC51c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XHJcbiAgICAgIGlmIChzdGF0dXNGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKHggPT4geC5zdGF0dXMgPT09IHN0YXR1c0ZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnJvbURhdGUgJiYgdG9EYXRlKSB7XHJcbiAgICAgIGlmIChuZXcgRGF0ZShmcm9tRGF0ZSkuZ2V0VGltZSgpID09PSBuZXcgRGF0ZSh0b0RhdGUpLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGxldCBkYXRlU2FtZSA9IG5ldyBEYXRlKHRvRGF0ZSk7XHJcbiAgICAgICAgZGF0ZVNhbWUuc2V0RGF0ZShkYXRlU2FtZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IGRhdGVTYW1lLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKHggPT4geC5pZCA9PT0gcGFyc2VJbnQob3JkZXJJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmVhdGVyKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHgudG90YWwgPiBwYXJzZUZsb2F0KGdyZWF0ZXIpKTtcclxuICAgIH1cclxuICAgIGlmIChsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHgudG90YWwgPCBwYXJzZUZsb2F0KGxlc3MpKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZSA9IHZhbHVlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL29yZGVycy8ke3ZhbHVlfWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgIT09IHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuc3RhdHVzLnZhbHVlID0gXCJOT05FXCI7XHJcbiAgICB0aGlzLnJlZnMub3JkZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmdyZWF0ZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmxlc3MudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICAgIGdyZWF0ZXI6IG51bGwsXHJcbiAgICAgIGxlc3M6IG51bGxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmFuZ2UsIGFjdGl2ZSwgcGFnaW5hdGlvbiwgc3RhdHVzRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzRmlsdGVyKTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShudW1iZXIpfVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXR1c0ZpbHRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRU5ESU5HXCI+UEVORElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFTElWRVJJTkdcIj5ERUxJVkVSSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPQ0VTU0lOR1wiPlBST0NFU1NJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT01QTEVURURcIj5DT01QTEVURUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNTdGFydFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyb21EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNFbmRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB0b0RhdGU6IGUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk9yZGVyIElkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBvcmRlcklkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImdyZWF0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JlYXRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGxlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgQ3JlYXRlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnVzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdmlld29yZGVyXCIsIHN0YXRlOiB7IGRhdGE6IHggfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW4tc3F1YXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsXCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gaWQ9e3guaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ29sLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7LyogVG9wIFJvdyAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZWlkOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIHNhdmVCdXR0b246IFwiZGlzYWJsZWRcIixcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIHZhbGlkYXRlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXRhaWxzKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoaW1hZ2VpZCAmJiBuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGNhdGVnb3J5SWQgJiYgZGVzYykge1xyXG4gICAgICBBeGlvcyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2NhdGVnb3J5SWR9YCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICAgIGltYWdlaWQ6IGltYWdlaWQsXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGRldGFpbHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0aGlzLnN0YXRlLmltYWdlaWR9L2ltYWdlYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogbnVsbCwgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGltYWdlSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChpbWFnZUlkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoaW1hZ2VCbG9iLCBsb2FkZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxOYW1lID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxOYW1lOiBcIiwgZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGhhbmRsZURldGFpbERlc2MgPSBlID0+e1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJmcm9tIFByb2R1Y3REZXRhaWxzLmpzIERldGFpbERlc2M6IFwiLCBlKVxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlIH0pXHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBzYXZlQnV0dG9uLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIHZhbGlkYXRlLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz4ge1wiPiBOZXcgUHJvZHVjdFwifVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMGVtXCIsIGhlaWdodDogXCI1ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsbmFtZT17dGhpcy5oYW5kbGVEZXRhaWxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IEltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmUgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPENhdGVnb3JpZXMgc2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VpZCAmJlxyXG4gICAgICAgICAgICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGRlc2MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZlIFByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRmlsbCBBbGwgRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge3N0b2NrIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgU3RvY2sgQW1vdW50IG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtwcmljZSA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHB1dCBwcmljZSBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjYXRlZ29yeURhdGE6IG51bGxcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCJhcGkvYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcmllc1wiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHNcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsIHNob3c6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCh0aGlzLnN0YXRlLmNhdGVnb3J5RGF0YS5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogXCJcIiwgZGV0YWlsczogXCJcIiwgc2hvdzogdHJ1ZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzaG93LCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhICYmIHNob3cgJiYgKFxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeURhdGEgPyBjYXRlZ29yeURhdGEuaWQgOiBudWxsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ICYmIChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5QbGVhc2UgU2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhICE9PSBudWxsICYmIHNob3cgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTE9BRElOR1wiPkxPQURJTkcuLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBDYXRlZ29yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPiBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IERldGFpbHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWwgQWRkIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhdGVnb3J5fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogeyFzaG93ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsQ2F0IGZyb20gXCIuLi9PbGQvTW9kYWxDYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2NhdGVnb3JpZXMvJHtpZH1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkNhdGVnb3J5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5kZXRhaWxzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3gubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3guZGV0YWlsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjY2F0ZWdvcnlcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDYXRcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICBhc3BlY3Q6IDEgLyAxLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBkZWZhdWx0SW1hZ2U6IHRydWUsXHJcbiAgICAgIGxvYWRpbmc6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcclxuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxyXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXHJcbiAgICAgICAgY3JvcCxcclxuICAgICAgICBcIm5ld0ZpbGUuanBlZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRpbmcuLi5cIik7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3JjLCBjcm9wLCBkZWZhdWx0SW1hZ2UsIGNyb3BwZWRJbWFnZVVybCwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlVwbG9hZGluZyAuLi4uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGg0PkNyb3AgYW5kIFVwbG9hZCBJbWFnZTwvaDQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG5cclxuICAgICAgICB7c3JjICYmIGRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyFkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRDYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMucHJvcHMuY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNhdGVnb3J5SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzIG9mIEVkaXRDYXRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoeCwgeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3l9IHZhbHVlPXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAge3gubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogdGhpcy5wcm9wcy5mb3JkZXRhaWxzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURldGFpbFZhbHVlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkRGV0YWlscyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiLCBpZDogXCJcIiB9LFxyXG4gICAgICBdKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7IGRldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcbiAgICAgICAge2RldGFpbHNcclxuICAgICAgICAgID8gZGV0YWlscy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJdGVtKGRhdGEuaWQgPyBkYXRhLmlkIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGV0YWlsc30gY2xhc3NOYW1lPVwic21hbGxcIj5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vRWRpdFByb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIGdvdG51bGxkYXRhIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG5hbWU6IGRhdGEucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgcHJpY2U6IGRhdGEucHJvZHVjdFByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnByb2R1Y3RTdG9jayxcclxuICAgICAgICBkZXNjOiBkYXRhLnByb2R1Y3REZXNjLFxyXG4gICAgICAgIGRldGFpbHMgOiBkYXRhLnByb2R1Y3REZXRhaWxzcyxcclxuICAgICAgICBnb3RudWxsZGF0YSA6IHRydWUsXHJcblxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkYXRhLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhLnByb2R1Y3RJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2U6IGRhdGEucHJvZHVjdEltYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcnlJZDogaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2ltYWdlcy8ke2RhdGEuaWR9L2ZpbGUvcHJvZHVjdGAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjLCBjYXRlZ29yeUlkLCBpbWFnZSAsIGRldGFpbHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBwcmljZSA9IGRhdGEucHJvZHVjdFByaWNlO1xyXG4gICAgfVxyXG4gICAgaWYoc3RvY2sgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgc3RvY2sgPSBkYXRhLnByb2R1Y3RTdG9jaztcclxuICAgIH1cclxuICAgIGlmKGRlc2MgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZGVzYyA9IGRhdGEucHJvZHVjdERlc2M7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcblxyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGRldGFpbHMgOiBkZXRhaWxzXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbHNOdWxsID0gZSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlICwgZ290bnVsbGRhdGEgOiBmYWxzZX0pXHJcbiAgfVxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUsIGdvdG51bGxkYXRhIDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSBlID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlLCBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSwgZGV0YWlscywgZ290bnVsbGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3RcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgeyAoZGV0YWlscyAmJiBnb3RudWxsZGF0YSkgPyA8RWRpdFByb2R1Y3REZXRhaWxzIGZvcmRldGFpbHM9e2RldGFpbHN9IGRhdGFjaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfS8+ICA6IDxQcm9kdWN0RGV0YWlscyBkZXRhaWxuYW1lPXt0aGlzLmhhbmRsZURldGFpbHNOdWxsfSAvPiB9ICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm8gSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17dGhpcy5oYW5kbGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0sXHJcbiAgICAgIGRldGFpbG5hbWVoYXNpbnB1dDogZmFsc2UsXHJcbiAgICAgIGRhdGFkZXNjaGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVycyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGV0YWlsbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJzIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoXHJcbiAgICAgIChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGF0YWRlc2M6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJkZXNjKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIgPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNoYXJlaG9sZGVyczogcmVtb3ZlZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxuYW1laGFzaW5wdXRcclxuICAgICAgICAgICAgICA/IFwiTmFtZSBvZiBkZXRhaWwgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIERhdGEgIyR7aWR4ICsgMX0gYH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhZGVzY2hhc2lucHV0ID8gXCJEZXRhaWwgZGF0YSBpcyByZXF1aXJlZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIoaWR4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFNoYXJlaG9sZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vT2xkL01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2dyZWF0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5zdG9ja2xlc3NJbnB1dCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RvY2tncmVhdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrbGVzcyA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkZWxldGVkIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZShhY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHRoaXMucHJvZHVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmNhdGVnb3J5KSB0aGlzLmNhdGVnb3J5SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tncmVhdCkgdGhpcy5zdG9ja2dyZWF0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuc3RvY2tsZXNzKSB0aGlzLnN0b2NrbGVzc0lucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdCwgY2F0ZWdvcnlGaWx0ZXIsIHN0b2NrZ3JlYXQsIHN0b2NrbGVzcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC5wcm9kdWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJvZHVjdC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIpIHtcclxuICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSBcIk5PTkVcIikge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5jYXRlZ29yeS5uYW1lID09PSBjYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdG9ja2dyZWF0KSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPiBwYXJzZUZsb2F0KHN0b2NrZ3JlYXQpKTtcclxuICAgIH1cclxuICAgIGlmIChzdG9ja2xlc3MpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA8IHBhcnNlRmxvYXQoc3RvY2tsZXNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGFjdGl2ZSwgcmFuZ2UsIHBhZ2luYXRpb24sIGNhdGVnb3J5RGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5DYXRlZ29yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeURhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlEYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2dyZWF0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2dyZWF0OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2sgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3RvY2tsZXNzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2tsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIHRvPVwiL25ld3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtc3F1YXJlIGZhLTF4XCIgLz4gQWRkIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlByb2R1Y3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5jYXRlZ29yeSA/IHguY2F0ZWdvcnkubmFtZSA6IFwiXCJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0UHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0U3RvY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRWRpdCh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXQgZmEtMXhcIiAvPiBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7IHBhdGhuYW1lOiBcIi9lZGl0XCIsIHN0YXRlOiB7IGlkOiB4LmlkIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz4ge1wiICBcIn1FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZSh4LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI3Byb2R1Y3RcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsUHJvZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17eC5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG4vLyBpbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc3JjOiBudWxsLFxyXG4gICAgY3JvcDoge1xyXG4gICAgICBhc3BlY3Q6IDEgLyAxXHJcbiAgICB9LFxyXG4gICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgaW1hZ2VCbG9iOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2hvd0Nyb3AodGhpcy5zdGF0ZS5zcmMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uaW1hZ2Vsb2FkXCIpO1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gY3JvcCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uY3JvcCBjb21wbGV0ZVwiKTtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uY3JvcGNoYW5nZVwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcclxuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxyXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXHJcbiAgICAgICAgY3JvcCxcclxuICAgICAgICBcIm5ld0ZpbGUuanBlZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWRkaW1hZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGFkZGltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAvL3RvZG8gdGhpcyBpcyBzdWNlc3MgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3AsIGNyb3BwZWRJbWFnZVVybCwgc3JjIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiB7c3JjICYmIChcclxuICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICA8cCAvPlxyXG4gICAgICAgICAgey8qIHtjcm9wcGVkSW1hZ2VVcmwgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRBcnJheSwgcmVkdXhGb3JtIH0gZnJvbSBcInJlZHV4LWZvcm1cIjtcclxuaW1wb3J0IHZhbGlkYXRlIGZyb20gXCIuL3ZhbGlkYXRlXCI7XHJcblxyXG5cclxuY29uc3QgcmVuZGVyRmllbGQgPSAoeyBpbnB1dCwgbGFiZWwsIHR5cGUsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgfSB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCB7Li4uaW5wdXR9IHR5cGU9e3R5cGV9IHBsYWNlaG9sZGVyPXtsYWJlbH0gLz5cclxuICAgICAge3RvdWNoZWQgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHJlbmRlck1lbWJlcnMgPSAoeyBmaWVsZHMsIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IsIHN1Ym1pdEZhaWxlZCB9IH0pID0+IChcclxuICA8dWw+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5wdXNoKHt9KX0+XHJcbiAgICAgICAgQWRkIE1lbWJlclxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgeyh0b3VjaGVkIHx8IHN1Ym1pdEZhaWxlZCkgJiYgZXJyb3IgJiYgPHNwYW4+e2Vycm9yfTwvc3Bhbj59XHJcbiAgICA8L2xpPlxyXG4gICAge2ZpZWxkcy5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcclxuICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJSZW1vdmUgTWVtYmVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpZWxkcy5yZW1vdmUoaW5kZXgpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDQ+TWVtYmVyICN7aW5kZXggKyAxfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPXtgJHttZW1iZXJ9LmZpcnN0TmFtZWB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PXtyZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT17YCR7bWVtYmVyfS5sYXN0TmFtZWB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PXtyZW5kZXJGaWVsZH1cclxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICkpfVxyXG4gIDwvdWw+XHJcbik7XHJcblxyXG5jb25zdCBoYW5kbGVUZWthbiA9IChwYXJhbXMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBGaWVsZEFycmF5c0Zvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcHJpc3RpbmUsIHJlc2V0LCBzdWJtaXR0aW5nIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxGaWVsZEFycmF5IG5hbWU9XCJtZW1iZXJzXCIgY29tcG9uZW50PXtyZW5kZXJNZW1iZXJzfSAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtwcmlzdGluZSB8fCBzdWJtaXR0aW5nfSBvbkNsaWNrPXtyZXNldH0+XHJcbiAgICAgICAgICBDbGVhciBWYWx1ZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVGVrYW59PlRla2FuPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1eEZvcm0oe1xyXG4gIGZvcm06IFwiZmllbGRBcnJheXNcIiwgLy8gYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyBmb3JtXHJcbiAgdmFsaWRhdGUsXHJcbn0pKEZpZWxkQXJyYXlzRm9ybSk7XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5pbXBvcnQgRmllbGRBcnJheXNGb3JtIGZyb20gXCIuL0ZpZWxkQXJyYXlzRm9ybVwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVJlZHV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICBhbGVydChlKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDE1IH19PlxyXG4gICAgICAgICAgICAgIDxoMj5TaW1wbGUgRm9ybTwvaDI+XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkQXJyYXlzRm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIGFzIHJlZHV4Rm9ybVJlZHVjZXIgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZvcm06IHJlZHV4Rm9ybVJlZHVjZXIsIC8vIG1vdW50ZWQgdW5kZXIgXCJmb3JtXCJcclxufSk7XHJcbmNvbnN0IHN0b3JlID0gKHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvblxyXG4gID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkoY3JlYXRlU3RvcmUpXHJcbiAgOiBjcmVhdGVTdG9yZSkocmVkdWNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG5cclxuICBpZiAoIXZhbHVlcy5tZW1iZXJzIHx8ICF2YWx1ZXMubWVtYmVycy5sZW5ndGgpIHtcclxuICAgIGVycm9ycy5tZW1iZXJzID0geyBfZXJyb3I6ICdBdCBsZWFzdCBvbmUgbWVtYmVyIG11c3QgYmUgZW50ZXJlZCcgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbWVtYmVyc0FycmF5RXJyb3JzID0gW107XHJcbiAgICB2YWx1ZXMubWVtYmVycy5mb3JFYWNoKChtZW1iZXIsIG1lbWJlckluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lbWJlckVycm9ycyA9IHt9O1xyXG4gICAgICBpZiAoIW1lbWJlciB8fCAhbWVtYmVyLmZpcnN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5maXJzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5sYXN0TmFtZSkge1xyXG4gICAgICAgIG1lbWJlckVycm9ycy5sYXN0TmFtZSA9ICdSZXF1aXJlZCc7XHJcbiAgICAgICAgbWVtYmVyc0FycmF5RXJyb3JzW21lbWJlckluZGV4XSA9IG1lbWJlckVycm9ycztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgaWYgKG1lbWJlcnNBcnJheUVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgZXJyb3JzLm1lbWJlcnMgPSBtZW1iZXJzQXJyYXlFcnJvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcnM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIjtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcihcclxuLy8gICA8Um91dGVyPlxyXG4vLyAgICAgPEFwcCAvPlxyXG4vLyAgIDwvUm91dGVyPixcclxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuLy8gKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8Um91dGVyPlxyXG4gICAgPEFwcCAvPlxyXG4gIDwvUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VzdG9tZXJMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvY3VzdG9tZXIvaW5kZXhcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cclxuICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICBDdXN0b21lclxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPEN1c3RvbWVyTGlzdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJyZWFjdC1nb29nbGUtY2hhcnRzXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldEZ1bGxZZWFyKCk7XHJcbmNvbnN0IG1vbnRoID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0TW9udGgoKSArIDE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHllYXI6IHllYXIsXHJcbiAgICBtb250aDogbW9udGgsXHJcbiAgICBzdGFydERhdGU6IG5ldyBEYXRlKERhdGUubm93KCkpXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vZGFzaGJvYXJkP3llYXI9JHt0aGlzLnN0YXRlLnllYXJ9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiByZXNwb25zZS5kYXRhIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSBkYXRlID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTW9udGgobW9udGgpIHtcclxuICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBcIkZlYnVhcnlcIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gXCJBcHJpbFwiO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIFwiTWF5XCI7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XHJcbiAgICAgIGNhc2UgNzpcclxuICAgICAgICByZXR1cm4gXCJKdWx5XCI7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICByZXR1cm4gXCJBdWd1c3RcIjtcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIHJldHVybiBcIk9ja3RvYmVyXCI7XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgcmV0dXJuIFwiTm92ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICByZXR1cm4gXCJEaXNlbWJlclwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGZvciBkYXNoYm9hcmRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIHllYXIsIG1vbnRoIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIHllYXIsIG1vbnRoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxoNj5DaGFuZ2UgTW9udGggYW5kIFllYXIgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb250aFllYXJQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChkYXRhLnRvdGFsX3N1bSA/IGRhdGEudG90YWxfc3VtIDogMCkudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlRvdGFsIFNhbGVzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyA8aDQ+e2RhdGEudXNlcnN9PC9oND4gOiA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+Q3VzdG9tZXJzPC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnN1bVt5ZWFyXSA/IGRhdGEuc3VtW3llYXJdIDogMC4wXHJcbiAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5ZZWFybHkgU2FsZXMgOiB7eWVhcn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5STSB7cGFyc2VGbG9hdChkYXRhLm1vbnRoW21vbnRoXSkudG9GaXhlZCgyKX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2Pk1vbnRseSBTYWxlcyA6IHt0aGlzLmhhbmRsZU1vbnRoKG1vbnRoKX08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcInNhbGVzXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEyXSldXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbCBkZXNpZ24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVG90YWwgU2FsZXMgQnkgTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHRlc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFByb3BzPXt7IFwiZGF0YS10ZXN0aWRcIjogXCIyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD1cIjhcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17XCI0MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJMaW5lQ2hhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJPcmRlciBDb3VudFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hcmNoXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFszXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXByXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs0XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWF5XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs1XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs2XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSnVsXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs3XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiQXVnXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs4XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiU2VwXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFs5XSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiT2N0XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk5vdlwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJEaXNcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEyXSldXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoQXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdkF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3JkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFnaW5hdGVPcmRlciBmcm9tIFwiLi4vY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJzXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQYWdpbmF0ZU9yZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Qcm9kdWN0TGlzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHNpZGViYXItd3JhcHBlclwiIHN0eWxlPXt7IG1pbmhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiwgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9hZG1pblwiXHJcbiAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz4gRGFzaGJvYXJkXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiBQcm9kdWN0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvb3JkZXJzXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz4gQ3VzdG9tZXJcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9mb3JtcmVkdXhcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4gRGV2T3BzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9