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
/* harmony import */ var _component_product_AddProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/product/AddProduct */ "./assets/react-app/component/product/AddProduct.js");
/* harmony import */ var _component_product_Editing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/product/Editing */ "./assets/react-app/component/product/Editing.js");
/* harmony import */ var _Cropping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Cropping */ "./assets/react-app/Cropping.js");
/* harmony import */ var _component_order_Order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/order/Order */ "./assets/react-app/component/order/Order.js");
/* harmony import */ var _component_product_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/product/CategoryEdit */ "./assets/react-app/component/product/CategoryEdit.js");
/* harmony import */ var _component_product_reduxForm_FormRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/product/reduxForm/FormRedux */ "./assets/react-app/component/product/reduxForm/FormRedux.js");
/* harmony import */ var _component_product_ProductDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/product/ProductDetails */ "./assets/react-app/component/product/ProductDetails.js");
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
      idEdit: null
    };
  }

  render() {
    console.log(this);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "flex"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
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
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _product_ModalProd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/ModalProd */ "./assets/react-app/component/product/ModalProd.js");
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
    }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      xs: "12",
      sm: "6",
      lg: "3"
    })), react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    }, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Registered On"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.email), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.firstname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.lastname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formatDate(x.createdAt)))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
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

/***/ "./assets/react-app/component/product/AddProduct.js":
/*!**********************************************************!*\
  !*** ./assets/react-app/component/product/AddProduct.js ***!
  \**********************************************************/
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
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Categories */ "./assets/react-app/component/product/Categories.js");
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductDetails */ "./assets/react-app/component/product/ProductDetails.js");
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
          console.log('sending data to server....');
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
      details: []
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
      desc
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
    }, "Product List"), " ", "> New Product"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
      detailname: this.handleDetailName
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
    }, "Please put price more than 0"))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/Categories.js":
/*!**********************************************************!*\
  !*** ./assets/react-app/component/product/Categories.js ***!
  \**********************************************************/
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

/***/ "./assets/react-app/component/product/CategoryEdit.js":
/*!************************************************************!*\
  !*** ./assets/react-app/component/product/CategoryEdit.js ***!
  \************************************************************/
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
/* harmony import */ var _product_ModalCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/ModalCat */ "./assets/react-app/component/product/ModalCat.js");
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
    }), " Remove"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_product_ModalCat__WEBPACK_IMPORTED_MODULE_2__.default, {
      delete: this.handleRemove,
      id: x.id,
      name: x.name
    })))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      animation: "border"
    }))))));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/CropDialog.js":
/*!**********************************************************!*\
  !*** ./assets/react-app/component/product/CropDialog.js ***!
  \**********************************************************/
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

/***/ "./assets/react-app/component/product/EditCat.js":
/*!*******************************************************!*\
  !*** ./assets/react-app/component/product/EditCat.js ***!
  \*******************************************************/
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

/***/ "./assets/react-app/component/product/EditProductDetails.js":
/*!******************************************************************!*\
  !*** ./assets/react-app/component/product/EditProductDetails.js ***!
  \******************************************************************/
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

/***/ "./assets/react-app/component/product/Editing.js":
/*!*******************************************************!*\
  !*** ./assets/react-app/component/product/Editing.js ***!
  \*******************************************************/
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
/* harmony import */ var _EditCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCat */ "./assets/react-app/component/product/EditCat.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ "./assets/react-app/component/product/Categories.js");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Upload */ "./assets/react-app/component/product/Upload.js");
/* harmony import */ var _ImageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageList */ "./assets/react-app/component/product/ImageList.js");
/* harmony import */ var _CropDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CropDialog */ "./assets/react-app/component/product/CropDialog.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _EditProductDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditProductDetails */ "./assets/react-app/component/product/EditProductDetails.js");
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductDetails */ "./assets/react-app/component/product/ProductDetails.js");
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

/***/ "./assets/react-app/component/product/ImageList.js":
/*!*********************************************************!*\
  !*** ./assets/react-app/component/product/ImageList.js ***!
  \*********************************************************/
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

/***/ "./assets/react-app/component/product/ModalCat.js":
/*!********************************************************!*\
  !*** ./assets/react-app/component/product/ModalCat.js ***!
  \********************************************************/
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

/***/ "./assets/react-app/component/product/ModalProd.js":
/*!*********************************************************!*\
  !*** ./assets/react-app/component/product/ModalProd.js ***!
  \*********************************************************/
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

/***/ "./assets/react-app/component/product/ProductDetails.js":
/*!**************************************************************!*\
  !*** ./assets/react-app/component/product/ProductDetails.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxForm_FormRedux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reduxForm/FormRedux */ "./assets/react-app/component/product/reduxForm/FormRedux.js");
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
      }]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Product Detail(s)"), this.state.shareholders.map((shareholder, idx) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "shareholder",
      key: idx
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: `Name Of Detail #${idx + 1}`,
      value: shareholder.detailname,
      onChange: this.handleShareholderNameChange(idx)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      type: "text",
      placeholder: `Detail Data #${idx + 1} `,
      value: shareholder.datadesc,
      onChange: this.handleShareholderDescChange(idx)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleRemoveShareholder(idx),
      className: "small"
    }, "-"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      type: "button",
      onClick: this.handleAddShareholder,
      className: "small"
    }, "Add Product Detail"));
  }

}

/***/ }),

/***/ "./assets/react-app/component/product/ProductList.js":
/*!***********************************************************!*\
  !*** ./assets/react-app/component/product/ProductList.js ***!
  \***********************************************************/
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
/* harmony import */ var _product_ModalProd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/ModalProd */ "./assets/react-app/component/product/ModalProd.js");
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
    }), " Remove"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_product_ModalProd__WEBPACK_IMPORTED_MODULE_2__.default, {
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

/***/ "./assets/react-app/component/product/Upload.js":
/*!******************************************************!*\
  !*** ./assets/react-app/component/product/Upload.js ***!
  \******************************************************/
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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base */ "./assets/react-app/Base.js");




 // ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Base__WEBPACK_IMPORTED_MODULE_3__.default, null), document.getElementById("root"));

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
/* harmony import */ var _component_product_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/product/ProductList */ "./assets/react-app/component/product/ProductList.js");


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
    }), " Product"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_ProductList__WEBPACK_IMPORTED_MODULE_1__.default, null));
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
      className: "border",
      style: {
        height: "100vh"
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
    }), " reduxForm"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9Dcm9wcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0NhdGVnb3J5RWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9FZGl0Q2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvRWRpdFByb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0ltYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L01vZGFsQ2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvUHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9Qcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9GaWVsZEFycmF5c0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcmVhY3QtYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL0N1c3RvbWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNob3dDcm9wIiwic3JjIiwidXBsb2FkIiwic3RhdGUiLCJpZEVkaXQiLCJyZW5kZXIiLCJkaXNwbGF5IiwiaGFuZGxlU2hvd0Nyb3AiLCJoYW5kbGVDbG9zZUNyb3AiLCJkZXRlY3RNb2IiLCJ0b01hdGNoIiwic29tZSIsInRvTWF0Y2hJdGVtIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJCYXNlIiwiQ3JvcHBpbmciLCJpbWFnZSIsImNyb3AiLCJpbWFnZVJlZiIsIm1ha2VDbGllbnRDcm9wIiwibG9hZGluZyIsImNyb3BwZWRJbWFnZVVybCIsImltYWdlQmxvYiIsInNob3dDcm9wSW1hZ2UiLCJjYW5jZWxMb2FkIiwieCIsInkiLCJ3aWR0aCIsImFzcGVjdCIsImhlaWdodCIsImdldENyb3BwZWRJbWciLCJmaWxlTmFtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiZXJyb3IiLCJuYW1lIiwid2luZG93IiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiZmlsZVVybCIsImNyZWF0ZU9iamVjdFVSTCIsImNsb3NlQ3JvcCIsIm1heFdpZHRoIiwiaGFuZGxlVXBsb2FkIiwib25JbWFnZUxvYWRlZCIsIm9uQ3JvcENvbXBsZXRlIiwib25Dcm9wQ2hhbmdlIiwiTW9iaWxlIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiZGF0YSIsImxpbWl0IiwicmFuZ2UiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInBhZ2luYXRpb24iLCJwYWdpbmF0ZSIsImFjdGl2ZSIsInBhZ2UiLCJpZCIsIkF4aW9zIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlUGFnZSIsImNhdGNoIiwiZSIsInJlZnMiLCJlbWFpbCIsInZhbHVlIiwiZGVmYXVsdERhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwYWdpbmF0ZURhdGEiLCJhcnJheSIsInBhZ2Vfc2l6ZSIsInBhZ2VfbnVtYmVyIiwic2xpY2UiLCJjb21wb25lbnREaWRNb3VudCIsIm1vdW50ZWQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImhhbmRsZUVkaXQiLCJlZGl0IiwiaXRlbXMiLCJudW1iZXIiLCJwdXNoIiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlQ2xlYXIiLCJtYXAiLCJpIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiY2l0eSIsInBvc3Rjb2RlIiwiY291bnRyeSIsInBob25lTnVtYmVyIiwicGF5bWVudE1ldGhvZCIsInBheXBhbCIsImFtb3VudCIsImN1cnJlbmN5IiwiaGFuZGxlUEVORElORyIsImhhbmRsZVByb2Nlc3NpbmciLCJoYW5kbGVEZWxpdmVyaW5nIiwiaGFuZGxlQ29tcGxldGVkIiwiUGFnaW5hdGVPcmRlciIsImFyciIsInF1ZXJ5Iiwic3RhdHVzRmlsdGVyIiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJvcmRlcklkIiwiZ3JlYXRlciIsImxlc3MiLCJ1c2VyIiwiZ2V0VGltZSIsImRhdGVTYW1lIiwic2V0RGF0ZSIsIml0ZW0iLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJyZXMiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsIkFkZFByb2R1Y3QiLCJkZXRhaWxzIiwiaW1hZ2VpZCIsInByaWNlIiwic3RvY2siLCJjYXRlZ29yeUlkIiwiZGVzYyIsImhpc3RvcnkiLCJmaWxlcyIsInNpemUiLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImxvYWRlciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoYW5kbGVBZGRJbWFnZSIsInNhdmVCdXR0b24iLCJpbWFnZUlkIiwiaGFuZGxlUmVtb3ZlSW1hZ2UiLCJoYW5kbGVEZXRhaWxOYW1lIiwib25TZWxlY3RGaWxlIiwiaGFuZGxlU2VsZWN0IiwiaGFuZGxlQWRkUHJvZHVjdCIsIkNhdGVnb3JpZXMiLCJzaG93IiwiY2F0ZWdvcnlEYXRhIiwiY2F0ZWdvcnkiLCJoYW5kbGVBeGlvcyIsInNlbGVjdGVkIiwiaGFuZGxlQ2F0ZWdvcnkiLCJDYXRlZ29yeUVkaXQiLCJoYW5kbGVSZW1vdmUiLCJDcm9wRGlhbG9nIiwiYWRkSW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJFZGl0Q2F0IiwiZXZlbnQiLCJFZGl0UHJvZHVjdERldGFpbHMiLCJpbmRleCIsIm5ld0RhdGEiLCJkYXRhaW5kZXgiLCJkZXRhaWxuYW1lIiwiZGF0YWNoYW5nZSIsImRhdGFkZXNjIiwiY29uY2F0IiwiZm9yZGV0YWlscyIsImhhbmRsZURldGFpbENoYW5nZSIsImhhbmRsZURldGFpbFZhbHVlQ2hhbmdlIiwiaGFuZGxlUmVtb3ZlSXRlbSIsImhhbmRsZUFkZERldGFpbHMiLCJFZGl0aW5nIiwiZ290bnVsbGRhdGEiLCJzaG93QWRkSW1hZ2UiLCJtZXNzYWdlIiwicHJvZHVjdFN0b2NrIiwicHJvZHVjdERlc2MiLCJwcm9kdWN0RGV0YWlsc3MiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGV0YWlsc051bGwiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdERpYWxvZyIsImRpdkRpYWxvZyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsIkltYWdlTGlzdCIsImltYWdlQ2xpY2tlZCIsImZpbGVuYW1lIiwiTW9kYWxQcm9kIiwiUHJvZHVjdERldGFpbHMiLCJpZHgiLCJldnQiLCJuZXdTaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlciIsInNpZHgiLCJuZXdTaGFyZWhvbGRlcmRlc2MiLCJyZW1vdmVkIiwicyIsImhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSIsImhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZSIsImhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyIiwiaGFuZGxlQWRkU2hhcmVob2xkZXIiLCJwcm9kdWN0IiwicHJvZHVjdElucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInN0b2NrZ3JlYXQiLCJzdG9ja2dyZWF0SW5wdXQiLCJzdG9ja2xlc3MiLCJzdG9ja2xlc3NJbnB1dCIsImNhdGVnb3J5RmlsdGVyIiwiVXBsb2FkIiwiYXhpb3MiLCJhZGRpbWFnZSIsInJlbmRlckZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsInR5cGUiLCJtZXRhIiwidG91Y2hlZCIsInJlbmRlck1lbWJlcnMiLCJmaWVsZHMiLCJzdWJtaXRGYWlsZWQiLCJtZW1iZXIiLCJyZW1vdmUiLCJoYW5kbGVUZWthbiIsInBhcmFtcyIsIkZpZWxkQXJyYXlzRm9ybSIsImhhbmRsZVN1Ym1pdCIsInByaXN0aW5lIiwicmVzZXQiLCJzdWJtaXR0aW5nIiwicmVkdXhGb3JtIiwiZm9ybSIsInZhbGlkYXRlIiwiRm9ybVJlZHV4Iiwic3RvcmUiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdXhGb3JtUmVkdWNlciIsImRldlRvb2xzRXh0ZW5zaW9uIiwiY3JlYXRlU3RvcmUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJtZW1iZXJzIiwiX2Vycm9yIiwibWVtYmVyc0FycmF5RXJyb3JzIiwiZm9yRWFjaCIsIm1lbWJlckluZGV4IiwibWVtYmVyRXJyb3JzIiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsIkN1c3RvbWVyIiwibm93IiwiRGFzaGJvYXJkIiwic3RhcnREYXRlIiwiZ2V0RGF0YSIsImhhbmRsZU1vbnRoIiwiaGFuZGxlQ2hhbmdlIiwidGV4dEFsaWduIiwidG90YWxfc3VtIiwidG9GaXhlZCIsInVzZXJzIiwic3VtIiwiY2hhcnQiLCJ0aXRsZSIsImNvdW50IiwiaEF4aXMiLCJ2QXhpcyIsIk9yZGVycyIsIlByb2R1Y3QiLCJTaWRlYmFyIiwibGlzdFN0eWxlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBbEIsQ0FBNEI7QUFDekNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDRDQVdEQyxPQUFELElBQWE7QUFDNUJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0EsV0FBS0csUUFBTCxDQUFjO0FBQUVDLGdCQUFRLEVBQUUsSUFBWjtBQUFrQkMsV0FBRyxFQUFFTCxPQUFPLENBQUNLLEdBQS9CO0FBQW9DQyxjQUFNLEVBQUVOLE9BQU8sQ0FBQ007QUFBcEQsT0FBZDtBQUNELEtBZGtCOztBQUFBLDZDQWdCRCxNQUFNO0FBQ3RCLFdBQUtILFFB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LGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQUxGLGNBREYsQ0E5QkYsRUF3Q0UsNkRBQ0EsaURBQUMscURBQUQ7QUFDSSxRQUFFLEVBQUMsWUFEUDtBQUVJLHFCQUFlLEVBQUMsUUFGcEI7QUFHSSxlQUFTLEVBQUM7QUFIZCxPQUtJO0FBQUcsZUFBUyxFQUFDO0FBQWIsTUFMSixlQURBLENBeENGLENBREYsQ0FERjtBQXVERDs7QUF6RDRDLEM7Ozs7Ozs7Ozs7OztBQ0gvQyIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0XCI7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0VkaXRpbmdcIjtcclxuaW1wb3J0IENyb3BwaW5nIGZyb20gXCIuL0Nyb3BwaW5nXCI7XHJcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9jb21wb25lbnQvb3JkZXIvT3JkZXJcIjtcclxuaW1wb3J0IENhdGVnb3J5RWRpdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9DYXRlZ29yeUVkaXRcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICAgIGlkRWRpdDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Q3JvcCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogdHJ1ZSwgc3JjOiBwYXlsb2FkLnNyYywgdXBsb2FkOiBwYXlsb2FkLnVwbG9hZCB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3A6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIHJlbmRlcj17KHByb3BzKSA9PiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY3VzdG9tZXJcIiByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxQcm9kdWN0IHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICAgICAgICA8QWRkUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuaGFuZGxlU2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5RWRpdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZXdvcmRlclwiIHJlbmRlcj17KHByb3BzKSA9PiA8T3JkZXIgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXRcIiByZW5kZXI9eyhwcm9wcykgPT4gPEVkaXRpbmcgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9mb3JtcmVkdXhcIiByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3REZXRhaWxzIHsuLi5wcm9wc30gLz59IC8+ICovfVxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDxDcm9wcGluZ1xyXG4gICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuc3RhdGUuc2hvd0Nyb3B9XHJcbiAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLnNyY31cclxuICAgICAgICAgIHVwbG9hZD17dGhpcy5zdGF0ZS51cGxvYWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IE1vYmlsZSBmcm9tIFwiLi9Nb2JpbGVcIjtcclxuXHJcbmZ1bmN0aW9uIGRldGVjdE1vYigpIHtcclxuICBjb25zdCB0b01hdGNoID0gW1xyXG4gICAgL0FuZHJvaWQvaSxcclxuICAgIC93ZWJPUy9pLFxyXG4gICAgL2lQaG9uZS9pLFxyXG4gICAgL2lQYWQvaSxcclxuICAgIC9pUG9kL2ksXHJcbiAgICAvQmxhY2tCZXJyeS9pLFxyXG4gICAgL1dpbmRvd3MgUGhvbmUvaSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gdG9NYXRjaC5zb21lKCh0b01hdGNoSXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2godG9NYXRjaEl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gZGV0ZWN0TW9iKCkgPyAoXHJcbiAgICAgIDxNb2JpbGUgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgPEFwcCAvPlxyXG4gICAgICA8L1JvdXRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nyb3AuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wcGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuXHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Q3JvcEltYWdlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjYW5jZWxMb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51cGxvYWQodGhpcy5zdGF0ZS5pbWFnZUJsb2IsIHRoaXMuY2FuY2VsTG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3BwZWRJbWFnZVVybCwgc2hvd0Nyb3BJbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbG9zZUNyb3AoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3Nob3dDcm9wSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wSW1hZ2U6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3A9e3RoaXMuc3RhdGUuY3JvcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjcm9wcGVkSW1hZ2VVcmwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaG93Q3JvcEltYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JvcCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtNVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+IFVwbG9hZGluZyBJbWFnZS4uLi5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcblxyXG4gICAgICA8aDE+VW5kZXJDb25zdHJ1Y3Rpb24gUExlYXNlIHVzZSBEZXNrdG9wPC9oMT5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vcHJvZHVjdC9Nb2RhbFByb2RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgZm9ybWF0RGF0ZSA9IGRhdGUgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2N1c3RvbWVyYClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSBwYWdlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UodGhpcy5zdGF0ZS5hY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICB4ID0+IHguZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXJlZCBPbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLmZvcm1hdERhdGUoeC5jcmVhdGVkQXQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgT3JkZXIge3RoaXMucHJvcHMuaWR9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1xyXG4gICAgICAgICAgXCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIE9yZGVyIFN0YXR1cyBXaWxsIENoYW5nZSB0byB7dGhpcy5wcm9wcy5uYW1lfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbE9yZGVyIGZyb20gXCIuL01vZGFsT3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IG51bGwsIHN0YXR1czogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQRU5ESU5HID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQRU5ESU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ29tcGxldGVkID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJDT01QTEVURURcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJDT01QTEVURURcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURlbGl2ZXJpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvY2Vzc2luZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9vcmRlcnNcIj5PcmRlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBWaWV3IE9yZGVyXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0zIG10LTNcIj5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9yZGVyZGV0YWlscy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLnRvdGFsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhKX0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5DdXN0b21lciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ2l0eSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY2l0eX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0Y29kZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50cnkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlciA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlciBEYXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQYXltZW50IE1ldGhvZCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgVXBkYXRlZCBBdCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVwZGF0ZV9hdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5QYXlQYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDdXJyZW5jeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBkYXRhLnBheXBhbC5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+QWN0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBFTkRJTkcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQRU5ESU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUEVORElOR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUEVORElOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2Nlc3NpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQUk9DRVNTSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUFJPQ0VTU0lOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsaXZlcmluZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckRFTElWRVJJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxpdmVyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJERUxJVkVSSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvbXBsZXRlZChkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyQ09NUExFVEVEXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkNPTVBMRVRFRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9vcmRlcmApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJlc1wiLCBkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlID0gcGFnZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGFyciwgcXVlcnkpID0+IHtcclxuICAgIHJldHVybiBhcnIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICB9O1xyXG5cclxuICBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKTtcclxuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGggKyAxfS0ke3llYXJ9YDtcclxuXHJcbiAgICAvLyBsZXQgdG9Gb3JtYXQgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIC8vIGxldCBmb3JtYXREYXRlID1cclxuICAgIC8vICAgdG9Gb3JtYXQuZ2V0RGF0ZSgpICtcclxuICAgIC8vICAgXCItXCIodG9Gb3JtYXQuZ2V0TW9udGgoKSArIDEpICtcclxuICAgIC8vICAgdG9Gb3JtYXQuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXIsXHJcbiAgICAgIGZyb21EYXRlLFxyXG4gICAgICB0b0RhdGUsXHJcbiAgICAgIG9yZGVySWQsXHJcbiAgICAgIGdyZWF0ZXIsXHJcbiAgICAgIGxlc3NcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICB4ID0+IHgudXNlci5lbWFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZW1haWwudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1c0ZpbHRlcikge1xyXG4gICAgICBpZiAoc3RhdHVzRmlsdGVyICE9PSBcIk5PTkVcIikge1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHguc3RhdHVzID09PSBzdGF0dXNGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSA9PT0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBsZXQgZGF0ZVNhbWUgPSBuZXcgRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgIGRhdGVTYW1lLnNldERhdGUoZGF0ZVNhbWUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBkYXRlU2FtZS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBuZXcgRGF0ZSh0b0RhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcmRlcklkKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgPT09IHBhcnNlSW50KG9yZGVySWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JlYXRlcikge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4LnRvdGFsID4gcGFyc2VGbG9hdChncmVhdGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoeCA9PiB4LnRvdGFsIDwgcGFyc2VGbG9hdChsZXNzKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZWxldGUgPSB2YWx1ZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9vcmRlcnMvJHt2YWx1ZX1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoeCA9PiB4LmlkICE9PSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcbiAgICB0aGlzLnJlZnMuZW1haWwudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLnN0YXR1cy52YWx1ZSA9IFwiTk9ORVwiO1xyXG4gICAgdGhpcy5yZWZzLm9yZGVyLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5ncmVhdGVyLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5sZXNzLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgc3RhdHVzRmlsdGVyOiBudWxsLFxyXG4gICAgICBmcm9tRGF0ZTogbnVsbCxcclxuICAgICAgdG9EYXRlOiBudWxsLFxyXG4gICAgICBvcmRlcklkOiBudWxsLFxyXG4gICAgICBncmVhdGVyOiBudWxsLFxyXG4gICAgICBsZXNzOiBudWxsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHJhbmdlLCBhY3RpdmUsIHBhZ2luYXRpb24sIHN0YXR1c0ZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0ZpbHRlcik7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgcmVmPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVORElOR1wiPlBFTkRJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERUxJVkVSSU5HXCI+REVMSVZFUklORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09NUExFVEVEXCI+Q09NUExFVEVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzU3RhcnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBmcm9tRGF0ZTogZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5UbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzRW5kXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cIkNsaWNrIHRvIHNlbGVjdCBhIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgdG9EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmRlciBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgb3JkZXJJZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJncmVhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGdyZWF0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlRvdGFsIExlc3MgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwibGVzc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBFbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIENyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC51c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3ZpZXdvcmRlclwiLCBzdGF0ZTogeyBkYXRhOiB4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuLXNxdWFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifVZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGV9IGlkPXt4LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBzYXZlQnV0dG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHMgOiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXRhaWxzKVxyXG4gICAgY29uc3QgeyBpbWFnZWlkLCBuYW1lLCBwcmljZSwgc3RvY2ssIGNhdGVnb3J5SWQsIGRlc2MgLCBkZXRhaWxzfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoaW1hZ2VpZCAmJiBuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGNhdGVnb3J5SWQgJiYgZGVzYykge1xyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7Y2F0ZWdvcnlJZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICAgIGRldGFpbHMgOiBkZXRhaWxzXHJcbiAgICAgICAgfSxcclxuICAgICAgfSwoKT0+e2NvbnNvbGUubG9nKCdzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLicpfSlcclxuICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0aGlzLnN0YXRlLmltYWdlaWR9L2ltYWdlYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogbnVsbCwgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGltYWdlSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChpbWFnZUlkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoaW1hZ2VCbG9iLCBsb2FkZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxOYW1lID0gZSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsTmFtZTogXCIsIGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gaGFuZGxlRGV0YWlsRGVzYyA9IGUgPT57XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsRGVzYzogXCIsIGUpXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUgfSlcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgICAgXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdCBMaXN0PC9MaW5rPiB7XCI+IE5ldyBQcm9kdWN0XCJ9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjVlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzIGRldGFpbG5hbWU9e3RoaXMuaGFuZGxlRGV0YWlsTmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlaWQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcmllcyBzZWxlY3RlZD17dGhpcy5oYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIHtpbWFnZWlkICYmXHJcbiAgICAgICAgICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgICAgICBwcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgcHJpY2UgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgc3RvY2sgJiZcclxuICAgICAgICAgICAgICAgIHN0b2NrID49IDAgJiZcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQgJiZcclxuICAgICAgICAgICAgICAgIGRlc2MgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmUgZmEtMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRmlsbCBBbGwgRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtzdG9jayA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgU3RvY2sgQW1vdW50IG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtwcmljZSA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgcHV0IHByaWNlIG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY2F0ZWdvcnlEYXRhOiBudWxsXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiYXBpL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLCBzaG93OiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS5jYXRlZ29yeURhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IFwiXCIsIGRldGFpbHM6IFwiXCIsIHNob3c6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc2hvdywgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiBzaG93ICYmIChcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZWxlY3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlEYXRhID8gY2F0ZWdvcnlEYXRhLmlkIDogbnVsbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UGxlYXNlIFNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPQURJTkdcIj5MT0FESU5HLi48L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBOYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXRlZ29yeX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIHshc2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbENhdCBmcm9tIFwiLi4vcHJvZHVjdC9Nb2RhbENhdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1vdmluZyBcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2lkfWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Q2F0ZWdvcnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPmRldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57eC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57eC5kZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNjYXRlZ29yeVwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgY3JvcDoge1xyXG4gICAgICAgIGFzcGVjdDogMSAvIDEsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDBcclxuICAgICAgfSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIGRlZmF1bHRJbWFnZTogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwbG9hZGluZy4uLlwiKTtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgLy90b2RvIHRoaXMgaXMgc3VjZXNzIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzcmMsIGNyb3AsIGRlZmF1bHRJbWFnZSwgY3JvcHBlZEltYWdlVXJsLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VXBsb2FkaW5nIC4uLi48L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aDQ+Q3JvcCBhbmQgVXBsb2FkIEltYWdlPC9oND5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XHJcblxyXG4gICAgICAgIHtzcmMgJiYgZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0SW1hZ2U6IGZhbHNlIH0pfT5cclxuICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7IWRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdENhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5wcm9wcy5jYXRlZ29yeUlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgY2F0ZWdvcnlJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvcHMgb2YgRWRpdENhdFwiLCB0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17eX0gdmFsdWU9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0UHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICBkZXRhaWxzIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlscyA6IHRoaXMucHJvcHMuZm9yZGV0YWlsc30pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZURldGFpbENoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PntcclxuICAgICAgICBjb25zdCBuZXdEYXRhID10aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5kYXRhLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhICB9LCAoKT0+eyB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSkgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UgPSAoaW5kZXgpID0+IChldmVudCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPXRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRhdGEsIGRhdGFpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGRhdGFpbmRleCkgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmRhdGEsIGRhdGFkZXNjOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhICB9LCAoKT0+eyB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSkgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlbW92ZUl0ZW0gPSAoaW5kZXgpPT4gKGV2ZW50KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkRGV0YWlscyA9ICgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW3sgZGV0YWlsbmFtZTogXCJcIiAsIGRhdGFkZXNjOiBcIlwiICxpZCA6IFwiXCIgfV0pXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgY29uc3R7IGRldGFpbHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0PlByb2R1Y3QgRGV0YWlsKHMpPC9oND5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzID8gZGV0YWlscy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbFZhbHVlQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSXRlbShkYXRhLmlkID8gZGF0YS5pZCA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSk6IG51bGx9XHJcblxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGV0YWlsc31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vRWRpdFByb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIGdvdG51bGxkYXRhIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG5hbWU6IGRhdGEucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgcHJpY2U6IGRhdGEucHJvZHVjdFByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnByb2R1Y3RTdG9jayxcclxuICAgICAgICBkZXNjOiBkYXRhLnByb2R1Y3REZXNjLFxyXG4gICAgICAgIGRldGFpbHMgOiBkYXRhLnByb2R1Y3REZXRhaWxzcyxcclxuICAgICAgICBnb3RudWxsZGF0YSA6IHRydWUsXHJcblxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChkYXRhLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhLnByb2R1Y3RJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2U6IGRhdGEucHJvZHVjdEltYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcnlJZDogaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2ltYWdlcy8ke2RhdGEuaWR9L2ZpbGUvcHJvZHVjdGAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjLCBjYXRlZ29yeUlkLCBpbWFnZSAsIGRldGFpbHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBwcmljZSA9IGRhdGEucHJvZHVjdFByaWNlO1xyXG4gICAgfVxyXG4gICAgaWYoc3RvY2sgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgc3RvY2sgPSBkYXRhLnByb2R1Y3RTdG9jaztcclxuICAgIH1cclxuICAgIGlmKGRlc2MgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZGVzYyA9IGRhdGEucHJvZHVjdERlc2M7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcblxyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgIGRldGFpbHMgOiBkZXRhaWxzXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbHNOdWxsID0gZSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlICwgZ290bnVsbGRhdGEgOiBmYWxzZX0pXHJcbiAgfVxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUsIGdvdG51bGxkYXRhIDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSBlID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlLCBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSwgZGV0YWlscywgZ290bnVsbGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3RcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgeyAoZGV0YWlscyAmJiBnb3RudWxsZGF0YSkgPyA8RWRpdFByb2R1Y3REZXRhaWxzIGZvcmRldGFpbHM9e2RldGFpbHN9IGRhdGFjaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlfS8+ICA6IDxQcm9kdWN0RGV0YWlscyBkZXRhaWxuYW1lPXt0aGlzLmhhbmRsZURldGFpbHNOdWxsfSAvPiB9ICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm8gSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17dGhpcy5oYW5kbGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZvcm1SZWR1eCBmcm9tIFwiLi9yZWR1eEZvcm0vRm9ybVJlZHV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgXHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiAsIGRhdGFkZXNjOiBcIlwifV1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlID0gaWR4ID0+IGV2dCA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcnMgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoKHNoYXJlaG9sZGVyLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgcmV0dXJuIHsgLi4uc2hhcmVob2xkZXIsIGRldGFpbG5hbWU6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZWhvbGRlcnM6IG5ld1NoYXJlaG9sZGVycyAgfSwgKCk9PnsgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycykgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlID0gaWR4ID0+IGV2dCA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoKHNoYXJlaG9sZGVyLCBzaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgcmV0dXJuIHsgLi4uc2hhcmVob2xkZXIsIGRhdGFkZXNjOiBldnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCk9PiB7dGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVyZGVzYyl9KTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFt7IGRldGFpbG5hbWU6IFwiXCIgLCBkYXRhZGVzYzogXCJcIiB9XSlcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVNoYXJlaG9sZGVyID0gaWR4ID0+ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZWQgID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hhcmVob2xkZXJzOiByZW1vdmVkXHJcbiAgICB9LCgpPT57dGhpcy5wcm9wcy5kZXRhaWxuYW1lKHJlbW92ZWQpfSk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKHJlbW92ZWQpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGV0YWlsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgRGF0YSAjJHtpZHggKyAxfSBgfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVTaGFyZWhvbGRlcihpZHgpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRTaGFyZWhvbGRlcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vcHJvZHVjdC9Nb2RhbFByb2RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG4gICAgICBjYXRlZ29yeURhdGE6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrZ3JlYXQgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdG9ja2xlc3MgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHNgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGVmYXVsdERhdGE6IGRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB0aGlzLnByb2R1Y3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5jYXRlZ29yeSkgdGhpcy5jYXRlZ29yeUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrZ3JlYXQpIHRoaXMuc3RvY2tncmVhdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrbGVzcykgdGhpcy5zdG9ja2xlc3NJbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGNhdGVnb3J5RmlsdGVyLCBzdG9ja2dyZWF0LCBzdG9ja2xlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHgucHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb2R1Y3QudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5RmlsdGVyKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yeUZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguY2F0ZWdvcnkubmFtZSA9PT0gY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tncmVhdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrID4gcGFyc2VGbG9hdChzdG9ja2dyZWF0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPCBwYXJzZUZsb2F0KHN0b2NrbGVzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uLCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2sgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3RvY2tncmVhdH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tncmVhdDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIExlc3MgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrbGVzc31cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrbGVzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2Pk5vIHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiB0bz1cIi9uZXdwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLXNxdWFyZSBmYS0xeFwiIC8+IEFkZCBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgIENhdGVnb3J5e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5FZGl0PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHgucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guY2F0ZWdvcnkgPyB4LmNhdGVnb3J5Lm5hbWUgOiBcIlwifTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0IGZhLTF4XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvZWRpdFwiLCBzdGF0ZTogeyBpZDogeC5pZCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZWRpdFwiIC8+IHtcIiAgXCJ9RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNwcm9kdWN0XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFByb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuLy8gaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNyYzogbnVsbCxcclxuICAgIGNyb3A6IHtcclxuICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgfSxcclxuICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgIGltYWdlQmxvYjogbnVsbFxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHRoaXMuc3RhdGUuc3JjKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmltYWdlbG9hZFwiKTtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3AgY29tcGxldGVcIik7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3BjaGFuZ2VcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGFkZGltYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBhZGRpbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgLy90b2RvIHRoaXMgaXMgc3VjZXNzIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkSW1hZ2VVcmwsIHNyYyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3NyYyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPHAgLz5cclxuICAgICAgICAgIHsvKiB7Y3JvcHBlZEltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlbmRlckZpZWxkID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17bGFiZWx9IC8+XHJcbiAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCByZW5kZXJNZW1iZXJzID0gKHsgZmllbGRzLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yLCBzdWJtaXRGYWlsZWQgfSB9KSA9PiAoXHJcbiAgPHVsPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCh7fSl9PlxyXG4gICAgICAgIEFkZCBNZW1iZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHsodG91Y2hlZCB8fCBzdWJtaXRGYWlsZWQpICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9saT5cclxuICAgIHtmaWVsZHMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIE1lbWJlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucmVtb3ZlKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBYXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGg0Pk1lbWJlciAje2luZGV4ICsgMX08L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT17YCR7bWVtYmVyfS5maXJzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0ubGFzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuY29uc3QgaGFuZGxlVGVrYW4gPSAocGFyYW1zKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgRmllbGRBcnJheXNGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8RmllbGRBcnJheSBuYW1lPVwibWVtYmVyc1wiIGNvbXBvbmVudD17cmVuZGVyTWVtYmVyc30gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30gb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgQ2xlYXIgVmFsdWVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRla2FufT5UZWthbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICBmb3JtOiBcImZpZWxkQXJyYXlzXCIsIC8vIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgZm9ybVxyXG4gIHZhbGlkYXRlLFxyXG59KShGaWVsZEFycmF5c0Zvcm0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuaW1wb3J0IEZpZWxkQXJyYXlzRm9ybSBmcm9tIFwiLi9GaWVsZEFycmF5c0Zvcm1cIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cclxuICAgICAgICAgICAgICA8aDI+U2ltcGxlIEZvcm08L2gyPlxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZEFycmF5c0Zvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcmVkdWNlciBhcyByZWR1eEZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBmb3JtOiByZWR1eEZvcm1SZWR1Y2VyLCAvLyBtb3VudGVkIHVuZGVyIFwiZm9ybVwiXHJcbn0pO1xyXG5jb25zdCBzdG9yZSA9ICh3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb25cclxuICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpKGNyZWF0ZVN0b3JlKVxyXG4gIDogY3JlYXRlU3RvcmUpKHJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuICBjb25zdCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgaWYgKCF2YWx1ZXMubWVtYmVycyB8fCAhdmFsdWVzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICBlcnJvcnMubWVtYmVycyA9IHsgX2Vycm9yOiAnQXQgbGVhc3Qgb25lIG1lbWJlciBtdXN0IGJlIGVudGVyZWQnIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1lbWJlcnNBcnJheUVycm9ycyA9IFtdO1xyXG4gICAgdmFsdWVzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyLCBtZW1iZXJJbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBtZW1iZXJFcnJvcnMgPSB7fTtcclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5maXJzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMuZmlyc3ROYW1lID0gJ1JlcXVpcmVkJztcclxuICAgICAgICBtZW1iZXJzQXJyYXlFcnJvcnNbbWVtYmVySW5kZXhdID0gbWVtYmVyRXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghbWVtYmVyIHx8ICFtZW1iZXIubGFzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMubGFzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KTtcclxuICAgIGlmIChtZW1iZXJzQXJyYXlFcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgIGVycm9ycy5tZW1iZXJzID0gbWVtYmVyc0FycmF5RXJyb3JzO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCI7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgPFJvdXRlcj5cclxuLy8gICAgIDxBcHAgLz5cclxuLy8gICA8L1JvdXRlcj4sXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEJhc2UgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbWVyL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxDdXN0b21lckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ29sLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRGdWxsWWVhcigpO1xyXG5jb25zdCBtb250aCA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgbW9udGg6IG1vbnRoLFxyXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpKVxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2Rhc2hib2FyZD95ZWFyPSR7dGhpcy5zdGF0ZS55ZWFyfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1vbnRoKG1vbnRoKSB7XHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJGZWJ1YXJ5XCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcIk1heVwiO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XHJcbiAgICAgIGNhc2UgOTpcclxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICByZXR1cm4gXCJPY2t0b2JlclwiO1xyXG4gICAgICBjYXNlIDExOlxyXG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIFwiRGlzZW1iZXJcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dCA9IGUgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBmb3IgZGFzaGJvYXJkXCIsIHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCB5ZWFyLCBtb250aCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+Q2hhbmdlIE1vbnRoIGFuZCBZZWFyIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS50b3RhbF9zdW0gPyBkYXRhLnRvdGFsX3N1bSA6IDApLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Ub3RhbCBTYWxlczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gPGg0PntkYXRhLnVzZXJzfTwvaDQ+IDogPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PkN1c3RvbWVyczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW1beWVhcl0gPyBkYXRhLnN1bVt5ZWFyXSA6IDAuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+WWVhcmx5IFNhbGVzIDoge3llYXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+Uk0ge3BhcnNlRmxvYXQoZGF0YS5tb250aFttb250aF0pLnRvRml4ZWQoMil9PC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Nb250bHkgU2FsZXMgOiB7dGhpcy5oYW5kbGVNb250aChtb250aCl9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJCYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJzYWxlc1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgZGVzaWduIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRvdGFsIFNhbGVzIEJ5IE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMlwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwiT3JkZXIgQ291bnRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJjaFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjFcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2luYXRlT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9vcmRlci9QYWdpbmF0ZU9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyc1xyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UGFnaW5hdGVPcmRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvcHJvZHVjdC9Qcm9kdWN0TGlzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBDdXN0b21lclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvZm9ybXJlZHV4XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHJlZHV4Rm9ybVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcblxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=