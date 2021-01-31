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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/admin",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/orders",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Orders__WEBPACK_IMPORTED_MODULE_2__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/customer",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Customer__WEBPACK_IMPORTED_MODULE_3__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/product",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Product__WEBPACK_IMPORTED_MODULE_5__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/newproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
      path: "/formredux",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_reduxForm_FormRedux__WEBPACK_IMPORTED_MODULE_11__.default, props)
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
/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductDetails__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AddProduct extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddProduct", () => {
      const {
        imageid,
        name,
        price,
        stock,
        categoryId,
        desc
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
            desc: desc
          }
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

    this.state = {
      imageid: null,
      name: null,
      price: null,
      stock: null,
      saveButton: "disabled",
      categoryId: null,
      imageid: null,
      desc: null
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
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement((_ProductDetails__WEBPACK_IMPORTED_MODULE_3___default()), null)))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    console.log(this.state);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditCat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCat */ "./assets/react-app/component/product/EditCat.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ "./assets/react-app/component/product/Categories.js");
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Upload */ "./assets/react-app/component/product/Upload.js");
/* harmony import */ var _ImageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageList */ "./assets/react-app/component/product/ImageList.js");
/* harmony import */ var _CropDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CropDialog */ "./assets/react-app/component/product/CropDialog.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
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
        // console.log(response);
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
      message: null
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
        desc: data.productDesc
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
      image
    } = this.state;
    console.log(data);

    if (name == null) {
      name = data.productName;
    }

    if (price == null) {
      name = data.productPrice;
    }

    if (stock == null) {
      name = data.productStock;
    }

    if (desc == null) {
      name = data.productDesc;
    }

    if (name && price && stock && desc) {
      // console.log("saving...");
      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "PUT",
        url: `/api/admin/products/${data.id}`,
        data: {
          name: name,
          price: price,
          stock: stock,
          desc: desc,
          image: image,
          category: categoryId
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
    console.log(this.state);
    const {
      data,
      message,
      categoryId,
      image
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
    }), " ", "  ", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      to: "/product"
    }, "Product List"), "   ", "> ", "   ", "Edit Product"))), data ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Project\\finalyearproject\\assets\\react-app\\component\\product\\ProductDetails.js: Unexpected token, expected \",\" (82:29)\n\n\u001b[0m \u001b[90m 80 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 81 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 82 | \u001b[39m      {formdata \u001b[33m?\u001b[39m  ({formdata\u001b[33m.\u001b[39mmap( (form\u001b[33m,\u001b[39mi) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 83 | \u001b[39m            \u001b[36mconst\u001b[39m { data } \u001b[33m=\u001b[39m form\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 84 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 85 | \u001b[39m            type\u001b[33m=\u001b[39m\u001b[32m\"text\"\u001b[39m\u001b[0m\n    at Object._raise (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Object.raiseWithData (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Object.raise (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.unexpected (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Object.expect (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:9087:28)\n    at Object.parseObjectLike (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:10923:14)\n    at Object.parseExprAtom (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:10491:23)\n    at Object.parseExprAtom (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:4763:20)\n    at Object.parseExprSubscripts (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Object.parseUpdate (D:\\Project\\finalyearproject\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)");

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/fn/reflect'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/FieldArray.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ "./assets/react-app/component/product/reduxForm/validate.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, label), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", _extends({}, input, {
  type: type,
  placeholder: label
})), touched && error && react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, error)));

const renderMembers = ({
  fields,
  meta: {
    touched,
    error,
    submitFailed
  }
}) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
  type: "button",
  onClick: () => fields.push({})
}, "Add Member"), (touched || submitFailed) && error && react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, error)), fields.map((member, index) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
  key: index
}, react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
  type: "button",
  title: "Remove Member",
  onClick: () => fields.remove(index)
}, "X"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", null, "Member #", index + 1), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: "row"
}, react__WEBPACK_IMPORTED_MODULE_1__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__.default, {
  name: `${member}.firstName`,
  type: "text",
  component: renderField,
  label: "First Name"
}), react__WEBPACK_IMPORTED_MODULE_1__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_3__.default, {
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
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(redux_form__WEBPACK_IMPORTED_MODULE_4__.default, {
    name: "members",
    component: renderMembers
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit",
    disabled: submitting
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "button",
    disabled: pristine || submitting,
    onClick: reset
  }, "Clear Values"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, "Name"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    onChange: e => undefined.setState({
      name: e.target.value
    }),
    className: "form-control"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: handleTekan
  }, "Tekan")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_5__.default)({
  form: "fieldArrays",
  // a unique identifier for this form
  validate: _validate__WEBPACK_IMPORTED_MODULE_2__.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9Dcm9wcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL01vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0NhdGVnb3J5RWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9FZGl0Q2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L0ltYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L01vZGFsQ2F0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvUHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9yZWR1eEZvcm0vRmllbGRBcnJheXNGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL0Zvcm1SZWR1eC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L3JlZHV4Rm9ybS92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvT3JkZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvcm91dGVyL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2Nyb3AuY3NzPzg4N2YiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzaG93Q3JvcCIsInNyYyIsInVwbG9hZCIsInN0YXRlIiwiaWRFZGl0IiwicmVuZGVyIiwiZGlzcGxheSIsImhhbmRsZVNob3dDcm9wIiwiaGFuZGxlQ2xvc2VDcm9wIiwiZGV0ZWN0TW9iIiwidG9NYXRjaCIsInNvbWUiLCJ0b01hdGNoSXRlbSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwiQmFzZSIsIkNyb3BwaW5nIiwiaW1hZ2UiLCJjcm9wIiwiaW1hZ2VSZWYiLCJtYWtlQ2xpZW50Q3JvcCIsImxvYWRpbmciLCJjcm9wcGVkSW1hZ2VVcmwiLCJpbWFnZUJsb2IiLCJzaG93Q3JvcEltYWdlIiwiY2FuY2VsTG9hZCIsIngiLCJ5Iiwid2lkdGgiLCJhc3BlY3QiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY2FsZVgiLCJuYXR1cmFsV2lkdGgiLCJzY2FsZVkiLCJuYXR1cmFsSGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9CbG9iIiwiYmxvYiIsImVycm9yIiwibmFtZSIsIndpbmRvdyIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJjbG9zZUNyb3AiLCJtYXhXaWR0aCIsImhhbmRsZVVwbG9hZCIsIm9uSW1hZ2VMb2FkZWQiLCJvbkNyb3BDb21wbGV0ZSIsIm9uQ3JvcENoYW5nZSIsIk1vYmlsZSIsIlByb2R1Y3RMaXN0IiwiZGF0ZSIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImRhdGEiLCJsaW1pdCIsInJhbmdlIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGUiLCJhY3RpdmUiLCJwYWdlIiwiaWQiLCJBeGlvcyIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJjYXRjaCIsImUiLCJyZWZzIiwiZW1haWwiLCJ2YWx1ZSIsImRlZmF1bHREYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwicGFnaW5hdGVEYXRhIiwiYXJyYXkiLCJwYWdlX3NpemUiLCJwYWdlX251bWJlciIsInNsaWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJtb3VudGVkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJoYW5kbGVFZGl0IiwiZWRpdCIsIml0ZW1zIiwibnVtYmVyIiwicHVzaCIsInRhcmdldCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsZWFyIiwibWFwIiwiaSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZm9ybWF0RGF0ZSIsImNyZWF0ZWRBdCIsIk1vZGFsIiwiY29sb3IiLCJkZWxldGUiLCJNb2RhbE9yZGVyIiwiT3JkZXIiLCJzdGF0dXMiLCJsb2NhdGlvbiIsImZsZXgiLCJwYWRkaW5nIiwib3JkZXJkZXRhaWxzIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdE5hbWUiLCJxdHkiLCJwcm9kdWN0UHJpY2UiLCJ0b3RhbCIsImFkZHJlc3MiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJwb3N0Y29kZSIsImNvdW50cnkiLCJwaG9uZU51bWJlciIsInBheW1lbnRNZXRob2QiLCJwYXlwYWwiLCJhbW91bnQiLCJjdXJyZW5jeSIsImhhbmRsZVBFTkRJTkciLCJoYW5kbGVQcm9jZXNzaW5nIiwiaGFuZGxlRGVsaXZlcmluZyIsImhhbmRsZUNvbXBsZXRlZCIsIlBhZ2luYXRlT3JkZXIiLCJhcnIiLCJxdWVyeSIsInN0YXR1c0ZpbHRlciIsImZyb21EYXRlIiwidG9EYXRlIiwib3JkZXJJZCIsImdyZWF0ZXIiLCJsZXNzIiwidXNlciIsImdldFRpbWUiLCJkYXRlU2FtZSIsInNldERhdGUiLCJpdGVtIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwicmVzIiwiZGVsZXRlZCIsIm9yZGVyIiwicGF0aG5hbWUiLCJoYW5kbGVEZWxldGUiLCJBZGRQcm9kdWN0IiwiaW1hZ2VpZCIsInByaWNlIiwic3RvY2siLCJjYXRlZ29yeUlkIiwiZGVzYyIsImhpc3RvcnkiLCJmaWxlcyIsInNpemUiLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImxvYWRlciIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoYW5kbGVBZGRJbWFnZSIsInNhdmVCdXR0b24iLCJpbWFnZUlkIiwiaGFuZGxlUmVtb3ZlSW1hZ2UiLCJvblNlbGVjdEZpbGUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJjYXRlZ29yeSIsImRldGFpbHMiLCJoYW5kbGVBeGlvcyIsInNlbGVjdGVkIiwiaGFuZGxlQ2F0ZWdvcnkiLCJDYXRlZ29yeUVkaXQiLCJoYW5kbGVSZW1vdmUiLCJDcm9wRGlhbG9nIiwiYWRkSW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJFZGl0Q2F0IiwiZXZlbnQiLCJFZGl0aW5nIiwic2hvd0FkZEltYWdlIiwibWVzc2FnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwiaGFuZGxlU2F2ZSIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0RGlhbG9nIiwiZGl2RGlhbG9nIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kIiwiSW1hZ2VMaXN0IiwiaW1hZ2VDbGlja2VkIiwiZmlsZW5hbWUiLCJNb2RhbFByb2QiLCJwcm9kdWN0IiwicHJvZHVjdElucHV0IiwiY2F0ZWdvcnlJbnB1dCIsInN0b2NrZ3JlYXQiLCJzdG9ja2dyZWF0SW5wdXQiLCJzdG9ja2xlc3MiLCJzdG9ja2xlc3NJbnB1dCIsImNhdGVnb3J5RmlsdGVyIiwiVXBsb2FkIiwiYXhpb3MiLCJhZGRpbWFnZSIsInJlbmRlckZpZWxkIiwiaW5wdXQiLCJsYWJlbCIsInR5cGUiLCJtZXRhIiwidG91Y2hlZCIsInJlbmRlck1lbWJlcnMiLCJmaWVsZHMiLCJzdWJtaXRGYWlsZWQiLCJtZW1iZXIiLCJpbmRleCIsInJlbW92ZSIsImhhbmRsZVRla2FuIiwicGFyYW1zIiwiRmllbGRBcnJheXNGb3JtIiwiaGFuZGxlU3VibWl0IiwicHJpc3RpbmUiLCJyZXNldCIsInN1Ym1pdHRpbmciLCJyZWR1eEZvcm0iLCJmb3JtIiwidmFsaWRhdGUiLCJGb3JtUmVkdXgiLCJzdG9yZSIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1eEZvcm1SZWR1Y2VyIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJjcmVhdGVTdG9yZSIsInZhbHVlcyIsImVycm9ycyIsIm1lbWJlcnMiLCJfZXJyb3IiLCJtZW1iZXJzQXJyYXlFcnJvcnMiLCJmb3JFYWNoIiwibWVtYmVySW5kZXgiLCJtZW1iZXJFcnJvcnMiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwiQ3VzdG9tZXIiLCJub3ciLCJEYXNoYm9hcmQiLCJzdGFydERhdGUiLCJnZXREYXRhIiwiaGFuZGxlTW9udGgiLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ0b3RhbF9zdW0iLCJ0b0ZpeGVkIiwidXNlcnMiLCJzdW0iLCJjaGFydCIsInRpdGxlIiwiY291bnQiLCJoQXhpcyIsInZBeGlzIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEdBQU4sU0FBa0JDLDRDQUFsQixD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QSxDQXhDRixDQURGLENBREY7QUF1REQ7O0FBekQ0QyxDOzs7Ozs7Ozs7Ozs7QUNIL0MiLCJmaWxlIjoicmVhY3RBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9yb3V0ZXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gXCIuL3JvdXRlci9PcmRlcnNcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gXCIuL3JvdXRlci9DdXN0b21lclwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL3JvdXRlci9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vcm91dGVyL1Byb2R1Y3RcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9FZGl0aW5nXCI7XHJcbmltcG9ydCBDcm9wcGluZyBmcm9tIFwiLi9Dcm9wcGluZ1wiO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vY29tcG9uZW50L29yZGVyL09yZGVyXCI7XHJcbmltcG9ydCBDYXRlZ29yeUVkaXQgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQ2F0ZWdvcnlFZGl0XCI7XHJcbmltcG9ydCBGb3JtUmVkdXggZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvcmVkdXhGb3JtL0Zvcm1SZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICAgIGlkRWRpdDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Q3JvcCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogdHJ1ZSwgc3JjOiBwYXlsb2FkLnNyYywgdXBsb2FkOiBwYXlsb2FkLnVwbG9hZCB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3A6IGZhbHNlIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIHJlbmRlcj17KHByb3BzKSA9PiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY3VzdG9tZXJcIiByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxQcm9kdWN0IHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICAgICAgICA8QWRkUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuaGFuZGxlU2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5RWRpdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZXdvcmRlclwiIHJlbmRlcj17KHByb3BzKSA9PiA8T3JkZXIgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXRcIiByZW5kZXI9eyhwcm9wcykgPT4gPEVkaXRpbmcgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Zvcm1yZWR1eFwiIHJlbmRlcj17KHByb3BzKSA9PiA8Rm9ybVJlZHV4IHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICBzaG93Q3JvcD17dGhpcy5zdGF0ZS5zaG93Q3JvcH1cclxuICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5oYW5kbGVDbG9zZUNyb3B9XHJcbiAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgdXBsb2FkPXt0aGlzLnN0YXRlLnVwbG9hZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5pbXBvcnQgTW9iaWxlIGZyb20gXCIuL01vYmlsZVwiO1xyXG5cclxuZnVuY3Rpb24gZGV0ZWN0TW9iKCkge1xyXG4gIGNvbnN0IHRvTWF0Y2ggPSBbXHJcbiAgICAvQW5kcm9pZC9pLFxyXG4gICAgL3dlYk9TL2ksXHJcbiAgICAvaVBob25lL2ksXHJcbiAgICAvaVBhZC9pLFxyXG4gICAgL2lQb2QvaSxcclxuICAgIC9CbGFja0JlcnJ5L2ksXHJcbiAgICAvV2luZG93cyBQaG9uZS9pLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiB0b01hdGNoLnNvbWUoKHRvTWF0Y2hJdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh0b01hdGNoSXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBkZXRlY3RNb2IoKSA/IChcclxuICAgICAgPE1vYmlsZSAvPlxyXG4gICAgKSA6IChcclxuICAgICAgPFJvdXRlcj5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvUm91dGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3JvcC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgY3JvcDoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG5cclxuICAgICAgICBhc3BlY3Q6IDEgLyAxXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dDcm9wSW1hZ2UoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhbmNlbExvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVwbG9hZCh0aGlzLnN0YXRlLmltYWdlQmxvYiwgdGhpcy5jYW5jZWxMb2FkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcHBlZEltYWdlVXJsLCBzaG93Q3JvcEltYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7c2hvd0Nyb3BJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3BJbWFnZTogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JvcD17dGhpcy5zdGF0ZS5jcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Nyb3BwZWRJbWFnZVVybCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dDcm9wSW1hZ2UoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz4gVXBsb2FkaW5nIEltYWdlLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuXHJcbiAgICAgIDxoMT5VbmRlckNvbnN0cnVjdGlvbiBQTGVhc2UgdXNlIERlc2t0b3A8L2gxPlxyXG4gICAgPC9kaXY+O1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTW9kYWxQcm9kIGZyb20gXCIuLi9wcm9kdWN0L01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKTtcclxuICAgIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUpLmdldERhdGUoKTtcclxuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGggKyAxfS0ke3llYXJ9YDtcclxuICB9O1xyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vY3VzdG9tZXJgKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDBcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IHBhZ2UgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZSh0aGlzLnN0YXRlLmFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG4gICAgdGhpcy5yZWZzLmVtYWlsLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IG51bGxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgIHggPT4geC5lbWFpbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZW1haWwudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGFjdGl2ZSwgcmFuZ2UsIHBhZ2luYXRpb24gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlcmVkIE9uPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmZpcnN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4Lmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJtb2RhbFwiICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJ9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5EZWxldGU8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBPcmRlciB7dGhpcy5wcm9wcy5pZH0/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XHJcbiAgICAgICAgICBcIm1vZGFsb3JkZXJcIiArIHRoaXMucHJvcHMubmFtZSArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57dGhpcy5wcm9wcy5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gT3JkZXIgU3RhdHVzIFdpbGwgQ2hhbmdlIHRvIHt0aGlzLnByb3BzLm5hbWV9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBSb3csIENvbCwgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsT3JkZXIgZnJvbSBcIi4vTW9kYWxPcmRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZGF0YTogbnVsbCwgc3RhdHVzOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBzdGF0dXM6IGRhdGEuc3RhdHVzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBFTkRJTkcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIlBFTkRJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJQRU5ESU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVDb21wbGV0ZWQgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkNPTVBMRVRFRFwiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIkNPTVBMRVRFRFwiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlRGVsaXZlcmluZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiREVMSVZFUklOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQcm9jZXNzaW5nID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQUk9DRVNTSU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL29yZGVyc1wiPk9yZGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgIFZpZXcgT3JkZXJcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTMgbXQtM1wiPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoND5PcmRlciBMaXN0PC9oND5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+IzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEub3JkZXJkZXRhaWxzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyB4LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0UHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+e2RhdGEudG90YWx9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmRhdGEpfSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PkN1c3RvbWVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBZGRyZXNzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDaXR5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5jaXR5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0ZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3Muc3RhdGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBvc3Rjb2RlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5wb3N0Y29kZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ291bnRyeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY291bnRyeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5waG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5PcmRlciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIE9yZGVyIERhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5jcmVhdGVkQXR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgTWV0aG9kIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5bWVudE1ldGhvZH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBzdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICB7LyogPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBVcGRhdGVkIEF0IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEudXBkYXRlX2F0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PlBheVBhbCBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFtb3VudCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEN1cnJlbmN5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5cGFsLmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0dXMgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57c3RhdHVzICYmIGRhdGEucGF5cGFsLnN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5BY3Rpb248L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUEVORElORyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBFTkRJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlclBFTkRJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBFTkRJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVQRU5ESU5HfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJQRU5ESU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUHJvY2Vzc2luZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFBST0NFU1NJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlclBST0NFU1NJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST0NFU1NJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVQcm9jZXNzaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJQUk9DRVNTSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxpdmVyaW5nKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgREVMSVZFUklOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyREVMSVZFUklOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgREVMSVZFUklOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGl2ZXJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkRFTElWRVJJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ29tcGxldGVkKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJDT01QTEVURURcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZUNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiQ09NUExFVEVEXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBSb3csIENvbCwgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGVPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcjogbnVsbCxcclxuICAgICAgdG9EYXRlOiBudWxsLFxyXG4gICAgICBmcm9tRGF0ZTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL29yZGVyYClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmVzXCIsIGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlZmF1bHREYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2UgPSBwYWdlID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVySXRlbXMgPSAoYXJyLCBxdWVyeSkgPT4ge1xyXG4gICAgcmV0dXJuIGFyci50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIH07XHJcblxyXG4gIGZvcm1hdERhdGUgPSBkYXRlID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG5cclxuICAgIC8vIGxldCB0b0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgLy8gbGV0IGZvcm1hdERhdGUgPVxyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXREYXRlKCkgK1xyXG4gICAgLy8gICBcIi1cIih0b0Zvcm1hdC5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcixcclxuICAgICAgZnJvbURhdGUsXHJcbiAgICAgIHRvRGF0ZSxcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZ3JlYXRlcixcclxuICAgICAgbGVzc1xyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgIHggPT4geC51c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XHJcbiAgICAgIGlmIChzdGF0dXNGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKHggPT4geC5zdGF0dXMgPT09IHN0YXR1c0ZpbHRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnJvbURhdGUgJiYgdG9EYXRlKSB7XHJcbiAgICAgIGlmIChuZXcgRGF0ZShmcm9tRGF0ZSkuZ2V0VGltZSgpID09PSBuZXcgRGF0ZSh0b0RhdGUpLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGxldCBkYXRlU2FtZSA9IG5ldyBEYXRlKHRvRGF0ZSk7XHJcbiAgICAgICAgZGF0ZVNhbWUuc2V0RGF0ZShkYXRlU2FtZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IGRhdGVTYW1lLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKHggPT4geC5pZCA9PT0gcGFyc2VJbnQob3JkZXJJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChncmVhdGVyKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHgudG90YWwgPiBwYXJzZUZsb2F0KGdyZWF0ZXIpKTtcclxuICAgIH1cclxuICAgIGlmIChsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcih4ID0+IHgudG90YWwgPCBwYXJzZUZsb2F0KGxlc3MpKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZSA9IHZhbHVlID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL29yZGVycy8ke3ZhbHVlfWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgIT09IHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuc3RhdHVzLnZhbHVlID0gXCJOT05FXCI7XHJcbiAgICB0aGlzLnJlZnMub3JkZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmdyZWF0ZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmxlc3MudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICAgIGdyZWF0ZXI6IG51bGwsXHJcbiAgICAgIGxlc3M6IG51bGxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmFuZ2UsIGFjdGl2ZSwgcGFnaW5hdGlvbiwgc3RhdHVzRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzRmlsdGVyKTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShudW1iZXIpfVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXR1c0ZpbHRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRU5ESU5HXCI+UEVORElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFTElWRVJJTkdcIj5ERUxJVkVSSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPQ0VTU0lOR1wiPlBST0NFU1NJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT01QTEVURURcIj5DT01QTEVURUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNTdGFydFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyb21EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNFbmRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB0b0RhdGU6IGUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcGItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk9yZGVyIElkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBvcmRlcklkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImdyZWF0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JlYXRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGxlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgQ3JlYXRlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnVzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdmlld29yZGVyXCIsIHN0YXRlOiB7IGRhdGE6IHggfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW4tc3F1YXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsXCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gaWQ9e3guaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZWlkOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIHNhdmVCdXR0b246IFwiZGlzYWJsZWRcIixcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZWlkLCBuYW1lLCBwcmljZSwgc3RvY2ssIGNhdGVnb3J5SWQsIGRlc2MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoaW1hZ2VpZCAmJiBuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGNhdGVnb3J5SWQgJiYgZGVzYykge1xyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7Y2F0ZWdvcnlJZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9wcm9kdWN0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3RoaXMuc3RhdGUuaW1hZ2VpZH0vaW1hZ2VgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBudWxsLCBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaW1hZ2VJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKGltYWdlSWQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJbWFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSB1cGxvYWRcIiwgZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogZS5pZCwgaW1hZ2U6IGUuaW1hZ2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VsZWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBzb21ldGhpbmcgaGVyZVwiLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdLnNpemUgPiA4Mzg4NjA4KSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgRmlsZSB0b28gYmlnLi4gUGxlYXNlIFB1dCBsZXNzIHRoYW4gOG1iXCIpO1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCxcclxuICAgICAgICAgIHVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHBheWxvYWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9IChpbWFnZUJsb2IsIGxvYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+IHtcIj4gTmV3IFByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiNWVtXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdERldGFpbHMgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIHtpbWFnZWlkID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IEltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7aW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPENhdGVnb3JpZXMgc2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VpZCAmJlxyXG4gICAgICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgcHJpY2UgJiZcclxuICAgICAgICAgICAgICAgIHByaWNlID49IDAgJiZcclxuICAgICAgICAgICAgICAgIHN0b2NrICYmXHJcbiAgICAgICAgICAgICAgICBzdG9jayA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkICYmXHJcbiAgICAgICAgICAgICAgICBkZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmUgZmEtMnggXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNhdmUgUHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEZpbGwgQWxsIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7c3RvY2sgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIFN0b2NrIEFtb3VudCBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJpY2UgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHB1dCBwcmljZSBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNhdGVnb3J5RGF0YTogbnVsbFxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9KTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcImFwaS9hZG1pbi9wcm9kdWN0cy9jYXRlZ29yaWVzXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlsc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RGF0YTogcmVzcG9uc2UuZGF0YSwgc2hvdzogdHJ1ZSB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkKHRoaXMuc3RhdGUuY2F0ZWdvcnlEYXRhLmlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5OiBcIlwiLCBkZXRhaWxzOiBcIlwiLCBzaG93OiB0cnVlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBzaG93LCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhICYmIHNob3cgJiYgKFxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeURhdGEgPyBjYXRlZ29yeURhdGEuaWQgOiBudWxsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ICYmIChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5QbGVhc2UgU2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhICE9PSBudWxsICYmIHNob3cgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTE9BRElOR1wiPkxPQURJTkcuLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBDYXRlZ29yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPiBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IERldGFpbHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWwgQWRkIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhdGVnb3J5fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogeyFzaG93ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsQ2F0IGZyb20gXCIuLi9wcm9kdWN0L01vZGFsQ2F0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIFwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgIENhdGVnb3J5IExpc3RcclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4LmRldGFpbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI2NhdGVnb3J5XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgZGVmYXVsdEltYWdlOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAvL3RvZG8gdGhpcyBpcyBzdWNlc3MgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNyYywgY3JvcCwgZGVmYXVsdEltYWdlLCBjcm9wcGVkSW1hZ2VVcmwsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5VcGxvYWRpbmcgLi4uLjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoND5Dcm9wIGFuZCBVcGxvYWQgSW1hZ2U8L2g0PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuXHJcbiAgICAgICAge3NyYyAmJiBkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlZmF1bHRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ3JvcFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0Q2F0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLnByb3BzLmNhdGVnb3J5SWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjYXRlZ29yeUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9wcyBvZiBFZGl0Q2F0XCIsIHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMucHJvcHMuaGFuZGxlQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHgsIHkpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5fSB2YWx1ZT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBkZXNjOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsLFxyXG4gICAgICBpbWFnZTogbnVsbCxcclxuICAgICAgbWVzc2FnZTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YFxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBuYW1lOiBkYXRhLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgIHByaWNlOiBkYXRhLnByb2R1Y3RQcmljZSxcclxuICAgICAgICBzdG9jazogZGF0YS5wcm9kdWN0U3RvY2ssXHJcbiAgICAgICAgZGVzYzogZGF0YS5wcm9kdWN0RGVzY1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGRhdGEuY2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnkuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGRhdGEucHJvZHVjdEltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5wcm9kdWN0SW1hZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9IGlkID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yeUlkOiBpZFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlLCBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vaW1hZ2VzLyR7ZGF0YS5pZH0vZmlsZS9wcm9kdWN0YCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGltYWdlOiBpbWFnZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjLCBjYXRlZ29yeUlkLCBpbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBuYW1lID0gZGF0YS5wcm9kdWN0UHJpY2U7XHJcbiAgICB9XHJcbiAgICBpZihzdG9jayA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBuYW1lID0gZGF0YS5wcm9kdWN0U3RvY2s7XHJcbiAgICB9XHJcbiAgICBpZihkZXNjID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIG5hbWUgPSBkYXRhLnByb2R1Y3REZXNjO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2F2aW5nLi4uXCIpO1xyXG5cclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7ZGF0YS5pZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgaW1hZ2U6IGltYWdlLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5SWRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gZSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSwgc2hvd0FkZEltYWdlOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdCBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgUHJvZHVjdFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RTdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm8gSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlJZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0Q2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZD17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXRlZ29yeT17dGhpcy5oYW5kbGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBNb2RhbFByb2QgZnJvbSBcIi4uL3Byb2R1Y3QvTW9kYWxQcm9kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlEYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvZHVjdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuY2F0ZWdvcnlJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdG9ja2dyZWF0ID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5zdG9ja2dyZWF0SW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc3RvY2tsZXNzID0gKGUpID0+IHtcclxuICAgICAgdGhpcy5zdG9ja2xlc3NJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL3Byb2R1Y3RzYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG5cclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5RGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIGxldCB7IGRhdGEsIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZGVsZXRlZCA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBpZCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUVkaXQoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuZWRpdChpZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvZHVjdCkgdGhpcy5wcm9kdWN0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnkpIHRoaXMuY2F0ZWdvcnlJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2dyZWF0KSB0aGlzLnN0b2NrZ3JlYXRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2xlc3MpIHRoaXMuc3RvY2tsZXNzSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCBjYXRlZ29yeUZpbHRlciwgc3RvY2tncmVhdCwgc3RvY2tsZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnByb2R1Y3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9kdWN0LnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYXRlZ29yeUZpbHRlcikge1xyXG4gICAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmNhdGVnb3J5Lm5hbWUgPT09IGNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrZ3JlYXQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA+IHBhcnNlRmxvYXQoc3RvY2tncmVhdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrbGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrIDwgcGFyc2VGbG9hdChzdG9ja2xlc3MpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiwgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMucHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUZpbHRlcjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPkZpbHRlciBCeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIEdyZWF0ZXIgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrZ3JlYXR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZ3JlYXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2xlc3N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9ja2xlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZGF0YS5sZW5ndGh9IHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgdG89XCIvbmV3cHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1zcXVhcmUgZmEtMXhcIiAvPiBBZGQgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+SW1hZ2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICBDYXRlZ29yeXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPiBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+U3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyB4LnByb2R1Y3RJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmNhdGVnb3J5ID8geC5jYXRlZ29yeS5uYW1lIDogXCJcIn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RTdG9ja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0KHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdCBmYS0xeFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL2VkaXRcIiwgc3RhdGU6IHsgaWQ6IHguaWQgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiAvPiB7XCIgIFwifUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjcHJvZHVjdFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxQcm9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbi8vIGltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzcmM6IG51bGwsXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgIGFzcGVjdDogMSAvIDFcclxuICAgIH0sXHJcbiAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICBpbWFnZUJsb2I6IG51bGxcclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcCh0aGlzLnN0YXRlLnNyYyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25pbWFnZWxvYWRcIik7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wIGNvbXBsZXRlXCIpO1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wY2hhbmdlXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRpbWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgYWRkaW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICB7Lyoge2Nyb3BwZWRJbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3QgfSBmcm9tIFwiY29yZS1qcy9mbi9yZWZsZWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQXJyYXksIHJlZHV4Rm9ybSB9IGZyb20gXCJyZWR1eC1mb3JtXCI7XHJcbmltcG9ydCB2YWxpZGF0ZSBmcm9tIFwiLi92YWxpZGF0ZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJlbmRlckZpZWxkID0gKHsgaW5wdXQsIGxhYmVsLCB0eXBlLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yIH0gfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXQgey4uLmlucHV0fSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17bGFiZWx9IC8+XHJcbiAgICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCByZW5kZXJNZW1iZXJzID0gKHsgZmllbGRzLCBtZXRhOiB7IHRvdWNoZWQsIGVycm9yLCBzdWJtaXRGYWlsZWQgfSB9KSA9PiAoXHJcbiAgPHVsPlxyXG4gICAgPGxpPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucHVzaCh7fSl9PlxyXG4gICAgICAgIEFkZCBNZW1iZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHsodG91Y2hlZCB8fCBzdWJtaXRGYWlsZWQpICYmIGVycm9yICYmIDxzcGFuPntlcnJvcn08L3NwYW4+fVxyXG4gICAgPC9saT5cclxuICAgIHtmaWVsZHMubWFwKChtZW1iZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIE1lbWJlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWVsZHMucmVtb3ZlKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBYXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGg0Pk1lbWJlciAje2luZGV4ICsgMX08L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT17YCR7bWVtYmVyfS5maXJzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake21lbWJlcn0ubGFzdE5hbWVgfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17cmVuZGVyRmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuY29uc3QgaGFuZGxlVGVrYW4gPSAocGFyYW1zKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgRmllbGRBcnJheXNGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8RmllbGRBcnJheSBuYW1lPVwibWVtYmVyc1wiIGNvbXBvbmVudD17cmVuZGVyTWVtYmVyc30gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3VibWl0dGluZ30+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30gb25DbGljaz17cmVzZXR9PlxyXG4gICAgICAgICAgQ2xlYXIgVmFsdWVzXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRla2FufT5UZWthbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXhGb3JtKHtcclxuICBmb3JtOiBcImZpZWxkQXJyYXlzXCIsIC8vIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgZm9ybVxyXG4gIHZhbGlkYXRlLFxyXG59KShGaWVsZEFycmF5c0Zvcm0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuaW1wb3J0IEZpZWxkQXJyYXlzRm9ybSBmcm9tIFwiLi9GaWVsZEFycmF5c0Zvcm1cIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWR1eCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgYWxlcnQoZSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cclxuICAgICAgICAgICAgICA8aDI+U2ltcGxlIEZvcm08L2gyPlxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZEFycmF5c0Zvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcmVkdWNlciBhcyByZWR1eEZvcm1SZWR1Y2VyIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBmb3JtOiByZWR1eEZvcm1SZWR1Y2VyLCAvLyBtb3VudGVkIHVuZGVyIFwiZm9ybVwiXHJcbn0pO1xyXG5jb25zdCBzdG9yZSA9ICh3aW5kb3cuZGV2VG9vbHNFeHRlbnNpb25cclxuICA/IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpKGNyZWF0ZVN0b3JlKVxyXG4gIDogY3JlYXRlU3RvcmUpKHJlZHVjZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuICBjb25zdCBlcnJvcnMgPSB7fTtcclxuXHJcbiAgaWYgKCF2YWx1ZXMubWVtYmVycyB8fCAhdmFsdWVzLm1lbWJlcnMubGVuZ3RoKSB7XHJcbiAgICBlcnJvcnMubWVtYmVycyA9IHsgX2Vycm9yOiAnQXQgbGVhc3Qgb25lIG1lbWJlciBtdXN0IGJlIGVudGVyZWQnIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1lbWJlcnNBcnJheUVycm9ycyA9IFtdO1xyXG4gICAgdmFsdWVzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyLCBtZW1iZXJJbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBtZW1iZXJFcnJvcnMgPSB7fTtcclxuICAgICAgaWYgKCFtZW1iZXIgfHwgIW1lbWJlci5maXJzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMuZmlyc3ROYW1lID0gJ1JlcXVpcmVkJztcclxuICAgICAgICBtZW1iZXJzQXJyYXlFcnJvcnNbbWVtYmVySW5kZXhdID0gbWVtYmVyRXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghbWVtYmVyIHx8ICFtZW1iZXIubGFzdE5hbWUpIHtcclxuICAgICAgICBtZW1iZXJFcnJvcnMubGFzdE5hbWUgPSAnUmVxdWlyZWQnO1xyXG4gICAgICAgIG1lbWJlcnNBcnJheUVycm9yc1ttZW1iZXJJbmRleF0gPSBtZW1iZXJFcnJvcnM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9KTtcclxuICAgIGlmIChtZW1iZXJzQXJyYXlFcnJvcnMubGVuZ3RoKSB7XHJcbiAgICAgIGVycm9ycy5tZW1iZXJzID0gbWVtYmVyc0FycmF5RXJyb3JzO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCI7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgPFJvdXRlcj5cclxuLy8gICAgIDxBcHAgLz5cclxuLy8gICA8L1JvdXRlcj4sXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbi8vICk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEJhc2UgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbWVyL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxDdXN0b21lckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ29sLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRGdWxsWWVhcigpO1xyXG5jb25zdCBtb250aCA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgbW9udGg6IG1vbnRoLFxyXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpKVxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKCkge1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2Rhc2hib2FyZD95ZWFyPSR7dGhpcy5zdGF0ZS55ZWFyfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZGF0ZSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZGF0ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1vbnRoKG1vbnRoKSB7XHJcbiAgICBzd2l0Y2ggKG1vbnRoKSB7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gXCJKYW51YXJ5XCI7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gXCJGZWJ1YXJ5XCI7XHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICByZXR1cm4gXCJNYXJjaFwiO1xyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgcmV0dXJuIFwiQXByaWxcIjtcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIHJldHVybiBcIk1heVwiO1xyXG4gICAgICBjYXNlIDY6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVuZVwiO1xyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgcmV0dXJuIFwiSnVseVwiO1xyXG4gICAgICBjYXNlIDg6XHJcbiAgICAgICAgcmV0dXJuIFwiQXVndXN0XCI7XHJcbiAgICAgIGNhc2UgOTpcclxuICAgICAgICByZXR1cm4gXCJTZXB0ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMDpcclxuICAgICAgICByZXR1cm4gXCJPY2t0b2JlclwiO1xyXG4gICAgICBjYXNlIDExOlxyXG4gICAgICAgIHJldHVybiBcIk5vdmVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgcmV0dXJuIFwiRGlzZW1iZXJcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVJbnB1dCA9IGUgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBmb3IgZGFzaGJvYXJkXCIsIHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCB5ZWFyLCBtb250aCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+Q2hhbmdlIE1vbnRoIGFuZCBZZWFyIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS50b3RhbF9zdW0gPyBkYXRhLnRvdGFsX3N1bSA6IDApLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Ub3RhbCBTYWxlczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gPGg0PntkYXRhLnVzZXJzfTwvaDQ+IDogPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PkN1c3RvbWVyczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW1beWVhcl0gPyBkYXRhLnN1bVt5ZWFyXSA6IDAuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+WWVhcmx5IFNhbGVzIDoge3llYXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+Uk0ge3BhcnNlRmxvYXQoZGF0YS5tb250aFttb250aF0pLnRvRml4ZWQoMil9PC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Nb250bHkgU2FsZXMgOiB7dGhpcy5oYW5kbGVNb250aChtb250aCl9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJCYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJzYWxlc1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwgZGVzaWduIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRvdGFsIFNhbGVzIEJ5IE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMlwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwiT3JkZXIgQ291bnRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJjaFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMl0pXVxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjFcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2luYXRlT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9vcmRlci9QYWdpbmF0ZU9yZGVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyc1xyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UGFnaW5hdGVPcmRlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvcHJvZHVjdC9Qcm9kdWN0TGlzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBDdXN0b21lclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvZm9ybXJlZHV4XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHJlZHV4Rm9ybVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcblxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=