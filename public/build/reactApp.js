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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
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
/* harmony import */ var _component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/product/AddProducts/ProductAdd */ "./assets/react-app/component/product/AddProducts/ProductAdd.js");
/* harmony import */ var _router_MobileSideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./router/MobileSideBar */ "./assets/react-app/router/MobileSideBar.js");
/* harmony import */ var _component_product_AddProducts_CategoryList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/product/AddProducts/CategoryList */ "./assets/react-app/component/product/AddProducts/CategoryList.js");
/* harmony import */ var _component_Visitor_Visitor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/Visitor/Visitor */ "./assets/react-app/component/Visitor/Visitor.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index.css */ "./assets/react-app/index.css");
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
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showtopbar && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.state.showSidebar ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_MobileSideBar__WEBPACK_IMPORTED_MODULE_12__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: containerClass
    }, this.state.showSidebar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Sidebar__WEBPACK_IMPORTED_MODULE_1__.default, null) : null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/admin",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Dashboard__WEBPACK_IMPORTED_MODULE_4__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/orders",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Orders__WEBPACK_IMPORTED_MODULE_2__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/customer",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Customer__WEBPACK_IMPORTED_MODULE_3__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/product",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_router_Product__WEBPACK_IMPORTED_MODULE_5__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/newproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_AddProduct__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, props, {
        showCrop: this.handleShowCrop,
        closeCrop: this.handleCloseCrop
      }))
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/category",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_CategoryEdit__WEBPACK_IMPORTED_MODULE_10__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/vieworder",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_order_Order__WEBPACK_IMPORTED_MODULE_9__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_Old_Editing__WEBPACK_IMPORTED_MODULE_7__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/categories",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_CategoryList__WEBPACK_IMPORTED_MODULE_13__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/createproduct",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_product_AddProducts_ProductAdd__WEBPACK_IMPORTED_MODULE_11__.default, props)
    }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Route, {
      path: "/visitor",
      render: props => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Visitor_Visitor__WEBPACK_IMPORTED_MODULE_14__.default, props)
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
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
    axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/jsondata`).then(response => {
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
    }, pagination && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data && data.length ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, data.length, " result found") : react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, "No result found"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "overflow-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
      striped: true,
      bordered: true,
      hover: true,
      variant: "dark"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Email "), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Registered On"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, pagination ? pagination.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.email), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.firstname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, x.lastname), react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, this.formatDate(x.createdAt)))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
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
      step: ".01",
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
      step: ".01",
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
      className: "container-fluid",
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
      className: "container-fluid",
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
      bg: "dark",
      variant: "dark",
      className: "m-0 p-0 pl-3 justify-content-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row"
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "nav nav-pills "
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
      className: "container-fluid",
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
      className: "container-fluid"
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

/***/ "./assets/react-app/index.css":
/*!************************************!*\
  !*** ./assets/react-app/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/react-app/react-app.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_jquery_dist_jquery_js-node_modules_popper_js_dist_esm_popper_js","vendors-node_modules_material-ui_core_esm_ButtonBase_ButtonBase_js-node_modules_material-ui_c-cf55f9","vendors-node_modules_axios_index_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-c6028e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2luZGV4LmNzcz9iYWNjIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYXlsb2FkIiwic2V0U3RhdGUiLCJzaG93Q3JvcCIsInNyYyIsInVwbG9hZCIsInNob3d0b3BiYXIiLCJzdGF0ZSIsImlkRWRpdCIsIm1vYmlsZVZpZXciLCJzaG93U2lkZWJhciIsInNob3dFYXN5Q3JvcERpYWxvZyIsInVwZGF0ZVZpZXdTdGF0ZSIsImJpbmQiLCJ0b2dnbGVTaWRlQmFyIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJlbmRlciIsImNvbnRhaW5lckNsYXNzIiwiaGFuZGxlU2hvd0Nyb3AiLCJoYW5kbGVDbG9zZUNyb3AiLCJoYW5kbGVjYW5jZWx0b3B4IiwiQ3JvcHBpbmciLCJpbWFnZSIsImltYWdlUmVmIiwiY3JvcCIsIm1ha2VDbGllbnRDcm9wIiwiZSIsImxvYWRpbmciLCJjcm9wcGVkSW1hZ2VVcmwiLCJpbWFnZUJsb2IiLCJzaG93Q3JvcEltYWdlIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxMb2FkIiwiY2FuY2VsdG9weCIsIngiLCJ5Iiwid2lkdGgiLCJhc3BlY3QiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2NhbGVYIiwibmF0dXJhbFdpZHRoIiwic2NhbGVZIiwibmF0dXJhbEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRvQmxvYiIsImJsb2IiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiZmlsZVVybCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsb3NlVG9wWCIsImhhbmRsZUJhY2tBY3Rpb24iLCJoYW5kbGVVcGxvYWQiLCJvbkltYWdlTG9hZGVkIiwib25Dcm9wQ29tcGxldGUiLCJvbkNyb3BDaGFuZ2UiLCJoYW5kbGVTaG93Q3JvcEltYWdlIiwiZGF0YVVSTHRvRmlsZSIsImRhdGFVcmwiLCJyZXMiLCJmZXRjaCIsIkZpbGUiLCJ0eXBlIiwiVmlzaXRvciIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ0YWJsZSIsInNldFRhYmxlIiwiZGF0YW5hbWUiLCJzZXREYXRhbmFtZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsImxvZyIsImNhdGNoIiwiY291bnRPYmpzIiwiYXJyIiwib2JqIiwiT2JqZWN0IiwiY3JlYXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJzZWxlY3RPbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY291bnRyeSIsIm1hcCIsImluZCIsIkNvdW50cnkiLCJjb3VudENvdW50cnkiLCJjc3RhdGUiLCJjaXR5IiwiY2NpdHkiLCJpcHMiLCJkYXQiLCJpcCIsImlwZCIsInZpc2l0Iiwic2luZ2xlZGF0YSIsImdldE93blByb3BlcnR5TmFtZXMiLCJsZW5ndGgiLCJpIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwibGltaXQiLCJyYW5nZSIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsInBhZ2luYXRlIiwiYWN0aXZlIiwicGFnZSIsImlkIiwiQXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJyZWZzIiwiZW1haWwiLCJkZWZhdWx0RGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInBhZ2luYXRlRGF0YSIsImFycmF5IiwicGFnZV9zaXplIiwicGFnZV9udW1iZXIiLCJzbGljZSIsIm1vdW50ZWQiLCJoYW5kbGVFZGl0IiwiZWRpdCIsIml0ZW1zIiwibnVtYmVyIiwicHVzaCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsZWFyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicG9zdGNvZGUiLCJwaG9uZU51bWJlciIsInBheW1lbnRNZXRob2QiLCJwYXlwYWwiLCJhbW91bnQiLCJjdXJyZW5jeSIsImhhbmRsZVBFTkRJTkciLCJoYW5kbGVQcm9jZXNzaW5nIiwiaGFuZGxlRGVsaXZlcmluZyIsImhhbmRsZUNvbXBsZXRlZCIsIlBhZ2luYXRlT3JkZXIiLCJxdWVyeSIsInN0YXR1c0ZpbHRlciIsImZyb21EYXRlIiwidG9EYXRlIiwib3JkZXJJZCIsImdyZWF0ZXIiLCJsZXNzIiwidXNlciIsImdldFRpbWUiLCJkYXRlU2FtZSIsInNldERhdGUiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsInBpY2EiLCJyZXF1aXJlIiwiY3JlYXRlSW1hZ2UiLCJJbWFnZSIsInNldEF0dHJpYnV0ZSIsImdldFJhZGlhbkFuZ2xlIiwiZGVncmVlVmFsdWUiLCJQSSIsIkNhbnZhc0Nyb3AiLCJpbWFnZVNyYyIsInBpeGVsQ3JvcCIsInJvdGF0aW9uIiwibWF4U2l6ZSIsIm1heCIsInNhZmVBcmVhIiwic3FydCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInJvdW5kIiwibG9hZCIsIkNhdGVnb3J5TGlzdCIsInN1YmNhdGVnb3J5Iiwic2V0c3ViY2F0ZWdvcnkiLCJzdWJ0d28iLCJzZXRzdWJ0d28iLCJkZWxjYXQiLCJzZXRkZWxjYXQiLCJkZWxzdWIiLCJzZXRkZWxzdWIiLCJkZWxzdWJ0d28iLCJzZXRkZWxzdWJ0d28iLCJvblNlbGVjdENhdGVnb3J5IiwicGFyYW1zIiwicmVzZXREZWxldGVJdGVtIiwic3ViQ2F0ZWdvcnlTZWxlY3QiLCJzdWJ0d29DYXRlZ29yeVNlbGVjdCIsImRlbGV0ZUNhdGVnb3J5IiwiZXJyIiwibmV3Y2F0IiwicyIsImRlbGV0ZVN1YkNhdGVnb3J5IiwibmV3c3ViIiwiZGVsZXRlU3VidHdvQ2F0ZWdvcnkiLCJuZXdzdWJ0d28iLCJtaW5XaWR0aCIsInN1YiIsImlzIiwic3ViY2F0ZWdvcnluYW1lIiwic3VidCIsInN1YnR3b2NhdGVnb3J5bmFtZSIsIkNyb3BwZXJ2MiIsInNldENyb3AiLCJzZXRSb3RhdGlvbiIsInpvb20iLCJzZXRab29tIiwiY3JvcHBlZEltYWdlIiwic2V0Q3JvcHBlZEltYWdlIiwiY3JvcHBlZEFyZWFQaXhlbHMiLCJzZXRDcm9wcGVkQXJlYVBpeGVscyIsInVzZUNhbGxiYWNrIiwiY3JvcHBlZEFyZWEiLCJDbG9zZURpYWxvZyIsImNsb3NlRGlhbG9nIiwiY2xlYXJTdGF0ZSIsInNob3dDcm9wcGVkSW1hZ2UiLCJVcGxvYWRJbWFnZSIsInNob3dEaWFsb2ciLCJkaWFsb2dTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiY29udGFpbmVyQnV0dG9uU3R5bGUiLCJjb250YWluZXJDcm9wcGVyU3R5bGUiLCJjcm9wcGVyU3R5bGUiLCJzbGlkZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImRpdkRpYWxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJjcm9wcGVkSW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiTUNhdGVnb3J5IiwiaW5kZXgiLCJhZGRjYXQiLCJjYXRlZ29yaWVzIiwiZmluZCIsImRhdGFzIiwiaWR4IiwidW5kZWZpbmVkIiwibmV3ZGF0YWxpc3QiLCJkYXRhbGlzdCIsIml4IiwiY2F0ZWdvcnluYW1lIiwibmV3RGF0YSIsInBvc3QiLCJkaXNhYmxlIiwiY2F0ZWdvcnlpZCIsImNoYW5nZWNhdGVnb3J5IiwiYWRkc3ViIiwiY2F0IiwiY2F0aSIsInN1YmNhdGVnb3J5aWQiLCJhZGRzdWJ0d28iLCJhZGRzdWJ0d29jYXQiLCJpdHdvIiwiYWRzdCIsImFkc3RpIiwic3VidHdvY2F0ZWdvcnkiLCJzdWJ0d29jYXRlZ29yeWlkIiwiYnV0Y2F0IiwiYWRkbW9yZXN1YiIsImFkZG1vcmUiLCJhaWR4IiwiYnV0c3ViIiwic3VidHdvaW5keCIsImFkZG1vcmVzdWJ0d28iLCJhbXNpIiwic3ViY2F0aW5pdCIsInNjaWR4IiwiZW5hYmxlIiwicmVtb3ZlY2F0IiwiYSIsInJlbW92ZWNhdGVnb3J5Iiwic3ViaSIsInJlbW92ZWQiLCJtb2QiLCJtb2RpbmR4IiwiaXN1YiIsInoiLCJyZW1vdmVzdWJ0d28iLCJmaWwiLCJjYXRpZHgiLCJzdWJpZHgiLCJzdWJkYXRhIiwiY2F0ZWdvcnkiLCJtb2RpZmllZCIsImluY2F0aW5keCIsImluY2F0c3ViaWR4IiwiaW5jYXRzdWJ0d29pZHgiLCJldmVudCIsInN1YnR3b2RhdGEiLCJTdWJ0d29jYXRlZ29yeSIsInN0aSIsInN1YnR3b25ldyIsImNhdHN1YnR3byIsImNhdHN1YnR3b2lkeCIsImNhdHN1YiIsImNhdHN1YmlkeCIsInN1YnR3b2lkeCIsImhhbmRsZUF4aW9zIiwiaGFuZGxlSW5wdXQiLCJrZXkiLCJoYW5kbGVSZW1vdmVDYXRlZ29yeSIsImhhbmRsZUFkZENhdGVnb3J5IiwiaGFuZGxlU3ViSW5wdXQiLCJkYiIsImRiaXgiLCJkYnMiLCJkYmkiLCJoYW5kbGVSZW1vdmVTdWJDYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWIiLCJzdWIyIiwiaW5kdHdvIiwiaGFuZGxlU3ViVHdvSW5wdXQiLCJzZGJpIiwiaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkiLCJoYW5kbGVBZGRNb3JlU3ViVHdvIiwiaGFuZGxlQWRkc3VidHdvY2F0ZWdvcnkiLCJoYW5kbGVBZGRTdWJDYXRlZ29yeSIsIlBEZXRhaWxzIiwiZGV0YWlscyIsImNvbmNhdCIsImRldGFpbG5hbWUiLCJkYXRhZGVzYyIsInJlbW92ZSIsInJlbW92ZWRldGFpbCIsIm5ld2RldGFpbHMiLCJkZXRhaWwiLCJuZXdkZXRhaWxkYXRhZGVzYyIsImhhbmRsZUNoYW5nZURldGFpbE5hbWUiLCJoYW5kbGVDaGFuZ2VEYXRhRGVzYyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZUFkZCIsIlBpY3R1cmUiLCJwaWN0dXJlIiwiaW1hZ2VpZCIsImltYWdlbmFtZSIsImZpbGVJbnB1dCIsImlucHV0RmlsZSIsImZpIiwiaW1hZ2VkZWwiLCJwaWN0dXJldXAiLCJtZXNzYWdlIiwicmVtb3ZlcGljdHVyZSIsImFsZXJ0IiwiZmlsZXMiLCJzaXplIiwidGFyZ2V0aW1hZ2UiLCJsb2FkSW1hZ2UiLCJpbWciLCJwaXhlbCIsInJhdGlvIiwiaW1nY29tcCIsImNvbXByZXNzSW1hZ2UiLCJiYXNlNjRkYXRhIiwidG9EYXRhVVJMIiwic2hvd0Vhc3lDcm9wIiwic2V0VGltZW91dCIsIm9yaWVudGF0aW9uIiwibG9hZGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUFkZEltYWdlIiwiaGFuZGxlQ2xvc2VFYXN5Q3JvcCIsImltYWdlVXBsb2FkIiwic2hvd1BpY3R1cmUiLCJzaG93QmxhY2tTY3JlZW4iLCJoYW5kbGVSZW1vdmVJbWFnZSIsIm9uU2VsZWN0RmlsZSIsImhhbmRsZUltYWdlQWRkIiwic3VibWl0RGlhbG9nIiwiY3J0Iiwib2ZmU2NyZWVuQ2FudmFzIiwicmVzaXplIiwiaW1hZ2VDQ1MiLCJQcm9kdWN0QWRkIiwicHJpY2UiLCJzdG9jayIsImRlc2MiLCJpbWFnZXMiLCJoaXN0b3J5Iiwic2hvd2J1dHRvbiIsInNob3dDcm9wcGVyRGlhbG9nIiwiaGFuZFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVVwbG9hZGVkIiwiY2xvc2VDcm9wIiwiaGFuZGxlUmVtb3ZlUGljdHVyZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlUmVtb3ZlRGV0YWlsIiwiaGFuZGxlTmV3RGV0YWlscyIsImhhbmRsZVNhdmVCdXR0b24iLCJBZGRQcm9kdWN0IiwiY2F0ZWdvcnlJZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2F2ZUJ1dHRvbiIsInZhbGlkYXRlIiwiaW1hZ2VJZCIsImhhbmRsZURldGFpbE5hbWUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJzZWxlY3RlZCIsImhhbmRsZUNhdGVnb3J5IiwiQ2F0ZWdvcnlFZGl0IiwiQ3JvcERpYWxvZyIsImFkZEltYWdlIiwiZGVmYXVsdEltYWdlIiwiRWRpdENhdCIsIkVkaXRQcm9kdWN0RGV0YWlscyIsImRhdGFpbmRleCIsImRhdGFjaGFuZ2UiLCJmb3JkZXRhaWxzIiwiaGFuZGxlRGV0YWlsQ2hhbmdlIiwiaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkRGV0YWlscyIsIkVkaXRpbmciLCJnb3RudWxsZGF0YSIsInNob3dBZGRJbWFnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwicHJvZHVjdERldGFpbHNzIiwiaGFuZGxlU2F2ZSIsIkltYWdlTGlzdCIsImltYWdlQ2xpY2tlZCIsImZpbGVuYW1lIiwiTW9kYWxQcm9kIiwiUHJvZHVjdERldGFpbHMiLCJldnQiLCJuZXdTaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlciIsInNpZHgiLCJuZXdTaGFyZWhvbGRlcmRlc2MiLCJkZXRhaWxuYW1laGFzaW5wdXQiLCJkYXRhZGVzY2hhc2lucHV0IiwiaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlIiwiaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlIiwiaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIiLCJoYW5kbGVBZGRTaGFyZWhvbGRlciIsInByb2R1Y3QiLCJwcm9kdWN0SW5wdXQiLCJzdG9ja2dyZWF0Iiwic3RvY2tncmVhdElucHV0Iiwic3RvY2tsZXNzIiwic3RvY2tsZXNzSW5wdXQiLCJjYXRlZ29yeUZpbHRlciIsImxpc3QiLCJ0b2dnbGVkIiwic29ydCIsImIiLCJ2aWV3IiwiY2F0ZWdvcnlJbnB1dCIsImhhbmRsZVNvcnRWaWV3IiwicGljdHVyZXMiLCJVcGxvYWQiLCJhZGRpbWFnZSIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJDdXN0b21lciIsIm5vdyIsIkRhc2hib2FyZCIsInN0YXJ0RGF0ZSIsImdldERhdGEiLCJoYW5kbGVNb250aCIsImhhbmRsZUNoYW5nZSIsInRleHRBbGlnbiIsInRvdGFsX3N1bSIsInRvRml4ZWQiLCJ1c2VycyIsInN1bSIsImNoYXJ0IiwidGl0bGUiLCJjb3VudCIsImhBeGlzIiwidkF4aXMiLCJNb2JpbGVTaWRlQmFyIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEdBQU4sU0FBa0JDLDRDQUFsQixDQUE0QjtBQUN6Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsNENBaUJEQyxPQUFELElBQWE7QUFDNUIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pDLGdCQUFRLEVBQUUsSUFERTtBQUVaQyxXQUFHLEVBQUVILE9BQU8sQ0FBQ0csR0FGRDtBQUdaQyxjQUFNLEVBQUVKLE9BQU8sQ0FBQ0ksTUFISjtBQUlaQyxrQkFBVSxFQUFFO0FBSkEsT0FBZDtBQU1ELEtBeEJrQjs7QUFBQSw2Q0EwQkQsTUFBTTtBQUN0QixXQUFLSixRQUFMLENBQWM7QUFBRUMsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CRyxrQkFBVSxFQUFFO0FBQS9CLE9BQWQ7QUFDRCxLQTVCa0I7O0FBQUEsOENBb0NBLE1BQU07QUFDdkIsV0FBS0osUUFBTCxDQUFjO0FBQ1pDLGdCQUFRLEVBQUUsS0FERTtBQUVaQyxXQUFHLEVBQUUsSUFGTztBQUdaQyxjQUFNLEVBQUU7QUFISSxPQUFkO0FBS0QsS0ExQ2tCOztBQUdqQixTQUFLRSxLQUFMLEdBQWE7QUFDWEosY0FBUSxFQUFFLEtBREM7QUFFWEMsU0FBRyxFQUFFLElBRk07QUFHWEMsWUFBTSxFQUFFLElBSEc7QUFJWEcsWUFBTSxFQUFFLElBSkc7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FB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RSxFQUFDLGdCQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxXQUFLLEVBQUM7QUFBVCxNQUxGLFlBREYsQ0FoREYsRUF5REUsNkRBQ0UsaURBQUMscURBQUQ7QUFDRSxRQUFFLEVBQUMsVUFETDtBQUVFLHFCQUFlLEVBQUMsUUFGbEI7QUFHRSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsV0FBSyxFQUFDO0FBQVQsTUFMRixhQURGLENBekRGLENBREYsQ0FERjtBQXVFRDs7QUF6RTRDLEM7Ozs7Ozs7Ozs7OztBQ0gvQzs7Ozs7Ozs7Ozs7OztBQ0FBIiwiZmlsZSI6InJlYWN0QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vcm91dGVyL1NpZGViYXJcIjtcclxuaW1wb3J0IE9yZGVycyBmcm9tIFwiLi9yb3V0ZXIvT3JkZXJzXCI7XHJcbmltcG9ydCBDdXN0b21lciBmcm9tIFwiLi9yb3V0ZXIvQ3VzdG9tZXJcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9yb3V0ZXIvRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuL3JvdXRlci9Qcm9kdWN0XCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0XCI7XHJcbmltcG9ydCBFZGl0aW5nIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0aW5nXCI7XHJcbmltcG9ydCBDcm9wcGluZyBmcm9tIFwiLi9Dcm9wcGluZ1wiO1xyXG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vY29tcG9uZW50L29yZGVyL09yZGVyXCI7XHJcbmltcG9ydCBDYXRlZ29yeUVkaXQgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3J5RWRpdFwiO1xyXG5cclxuaW1wb3J0IFByb2R1Y3RBZGQgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZFwiO1xyXG5pbXBvcnQgTW9iaWxlU2lkZUJhciBmcm9tIFwiLi9yb3V0ZXIvTW9iaWxlU2lkZUJhclwiO1xyXG5cclxuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYXRlZ29yeUxpc3RcIjtcclxuaW1wb3J0IFZpc2l0b3IgZnJvbSBcIi4vY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvclwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICAgIGlkRWRpdDogbnVsbCxcclxuICAgICAgbW9iaWxlVmlldzogZmFsc2UsXHJcbiAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICBzaG93dG9wYmFyOiB0cnVlLFxyXG4gICAgICBzaG93RWFzeUNyb3BEaWFsb2c6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlID0gdGhpcy51cGRhdGVWaWV3U3RhdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudG9nZ2xlU2lkZUJhciA9IHRoaXMudG9nZ2xlU2lkZUJhci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hvd0Nyb3AgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wOiB0cnVlLFxyXG4gICAgICBzcmM6IHBheWxvYWQuc3JjLFxyXG4gICAgICB1cGxvYWQ6IHBheWxvYWQudXBsb2FkLFxyXG4gICAgICBzaG93dG9wYmFyOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlQ3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcDogZmFsc2UsIHNob3d0b3BiYXI6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlU2lkZUJhcigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93U2lkZWJhcjogIXRoaXMuc3RhdGUuc2hvd1NpZGViYXIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZWNhbmNlbHRvcHggPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3A6IGZhbHNlLFxyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIHVwbG9hZDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmlld1N0YXRlKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVWaWV3U3RhdGUpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZXdTdGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5tb2JpbGVWaWV3ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9iaWxlVmlldzogdHJ1ZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHNob3dTaWRlYmFyOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBjb250YWluZXJDbGFzcyA9IFwiZC1mbGV4XCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tb2JpbGVWaWV3KSBjb250YWluZXJDbGFzcyA9IFwiY29udGFpbmVyXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3d0b3BiYXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5zaG93U2lkZWJhciA/IG51bGwgOiA8TW9iaWxlU2lkZUJhciAvPn08L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc30+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2lkZWJhciA/IDxTaWRlYmFyIC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hZG1pblwiIHJlbmRlcj17KHByb3BzKSA9PiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL29yZGVyc1wiIHJlbmRlcj17KHByb3BzKSA9PiA8T3JkZXJzIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q3VzdG9tZXIgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdFwiIHJlbmRlcj17KHByb3BzKSA9PiA8UHJvZHVjdCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QWRkUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLmhhbmRsZVNob3dDcm9wfVxyXG4gICAgICAgICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMuaGFuZGxlQ2xvc2VDcm9wfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5RWRpdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi92aWV3b3JkZXJcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVyIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXRcIiByZW5kZXI9eyhwcm9wcykgPT4gPEVkaXRpbmcgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPENhdGVnb3J5TGlzdCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8UHJvZHVjdEFkZCB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlzaXRvclwiIHJlbmRlcj17KHByb3BzKSA9PiA8VmlzaXRvciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICA8Q3JvcHBpbmdcclxuICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuc3RhdGUuc2hvd0Nyb3B9XHJcbiAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5zcmN9XHJcbiAgICAgICAgICAgIHVwbG9hZD17dGhpcy5zdGF0ZS51cGxvYWR9XHJcbiAgICAgICAgICAgIGNhbmNlbHRvcHg9e3RoaXMuaGFuZGxlY2FuY2VsdG9weH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3JvcC5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wcGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICBhc3BlY3Q6IDEgLyAxLFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2UsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UpID0+IHtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IChjcm9wKSA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IChjcm9wKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dDcm9wSW1hZ2UgPSAoZSkgPT4ge307XHJcbiAgY2FuY2VsTG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVCYWNrQWN0aW9uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q3JvcEltYWdlOiBmYWxzZSB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVwbG9hZCh0aGlzLnN0YXRlLmltYWdlQmxvYiwgdGhpcy5jYW5jZWxMb2FkKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlU2hvd0Nyb3BJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlVG9wWCA9IChlKSA9PntcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jYW5jZWxMb2FkKCk7IC8vY2F1dGlvbiB0aGlzIGlzIG5ld1xyXG4gICAgICB0aGlzLnByb3BzLmNhbmNlbHRvcHgoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcHBlZEltYWdlVXJsLCBzaG93Q3JvcEltYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgIXRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlVG9wWH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge3Nob3dDcm9wSW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrQWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAge1wiICBcIn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyb3A9e3RoaXMuc3RhdGUuY3JvcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjcm9wcGVkSW1hZ2VVcmwgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93Q3JvcEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JvcFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3RoaXMucHJvcHMuc2hvd0Nyb3AgJiYgdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2cgY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTVcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPiBVcGxvYWRpbmcgSW1hZ2UuLi4uXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRhdGFVUkx0b0ZpbGUoZGF0YVVybCwgZmlsZU5hbWUpIHtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZGF0YVVybCk7XHJcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XHJcbiAgcmV0dXJuIG5ldyBGaWxlKFtibG9iXSwgZmlsZU5hbWUsIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpc2l0b3IoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RhYmxlLCBzZXRUYWJsZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGF0YW5hbWUsIHNldERhdGFuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImFwaS9hZG1pbi90ZXN0L3Rlc3RcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBjb3VudE9ianMoYXJyKSB7XHJcbiAgICAvLyBTbyB0aGUgb2JqZWN0IGRvZXNuJ3QgaW5oZXJpdCBmcm9tIE9iamVjdC5wcm90b3R5cGUgYW5kIGF2b2lkcyBwcm9wZXJ0eVxyXG4gICAgLy8gbmFtZSBjb2xsaXNpb25zXHJcbiAgICB2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIGlmIChvYmpbaXRlbV0pIHtcclxuICAgICAgICBvYmpbaXRlbV0rKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvYmpbaXRlbV0gPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWxlY3RPbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh0YXJnZXQgPT09IFwiQ291bnRyeVwiKSB7XHJcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluZC5Db3VudHJ5O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgY291bnRDb3VudHJ5ID0gY291bnRPYmpzKGNvdW50cnkpO1xyXG4gICAgICBzZXREYXRhbmFtZShcIkNvdW50cnlcIilcclxuICAgICAgc2V0VGFibGUoY291bnRDb3VudHJ5KTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBcIlN0YXRlXCIpIHtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGluZC5zdGF0ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjc3RhdGUgPSBjb3VudE9ianMoc3RhdGUpO1xyXG4gICAgICBzZXREYXRhbmFtZShcIlN0YXRlXCIpXHJcbiAgICAgIHNldFRhYmxlKGNzdGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gXCJDaXR5XCIpIHtcclxuICAgICAgY29uc3QgY2l0eSA9IGRhdGEubWFwKChpbmQpID0+IGluZC5jaXR5KTtcclxuICAgICAgY29uc3QgY2NpdHkgPSBjb3VudE9ianMoY2l0eSk7XHJcbiAgICAgIHNldERhdGFuYW1lKFwiQ2l0eVwiKVxyXG4gICAgICBzZXRUYWJsZShjY2l0eSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gXCJJUFwiKSB7XHJcbiAgICAgIGNvbnN0IGlwcyA9IGRhdGEubWFwKGRhdD0+ZGF0LmlwKVxyXG4gICAgICBjb25zdCBpcGQgPSBjb3VudE9ianMoaXBzKTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJJUFwiKVxyXG4gICAgICBzZXRUYWJsZShpcGQpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICByZXR1cm4gaW5kLnN0YXRlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBDb3VudHJ5ID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICByZXR1cm4gaW5kLkNvdW50cnk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHZpc2l0ID0gY291bnRPYmpzKHN0YXRlKTtcclxuICAgIGNvbnN0IHNpbmdsZWRhdGEgPSBkYXRhWzBdO1xyXG4gICAgY29uc3QgbmFtZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNpbmdsZWRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJuYW1lXCIsIG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2codGFibGUpO1xyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAge2RhdGEgJiYgPGgzPlRvdGFsIFZpc2l0b3IgOiB7ZGF0YS5sZW5ndGh9PC9oMz59XHJcblxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NlbGVjdE9uQ2hhbmdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgIGRlZmF1bHRWYWx1ZT5QbGVhc2Ugc2VsZWN0IGFuIE9wdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvdW50cnlcIj5Db3VudHJ5PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RhdGVcIj5TdGF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNpdHlcIj5DaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSVBcIj5JUDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIHt0YWJsZSAmJiBkYXRhbmFtZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciBzaXplPVwic21cIiAgPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPntkYXRhbmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Q291bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB7T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFibGUpLm1hcCgoeCwgaSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiggPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4fTwvdGQ+PHRkPnt0YWJsZVt4XX08L3RkPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KVxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MucG9zdChgL2pzb25kYXRhYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKHRoaXMuc3RhdGUuYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHguZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlcmVkIE9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4Lmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgT3JkZXIge3RoaXMucHJvcHMuaWR9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1xyXG4gICAgICAgICAgXCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIE9yZGVyIFN0YXR1cyBXaWxsIENoYW5nZSB0byB7dGhpcy5wcm9wcy5uYW1lfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbE9yZGVyIGZyb20gXCIuL01vZGFsT3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IG51bGwsIHN0YXR1czogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQRU5ESU5HID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQRU5ESU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ29tcGxldGVkID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJDT01QTEVURURcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJDT01QTEVURURcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURlbGl2ZXJpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvY2Vzc2luZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9vcmRlcnNcIj5PcmRlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBWaWV3IE9yZGVyXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0zIG10LTNcIj5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9yZGVyZGV0YWlscy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLnRvdGFsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhKX0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5DdXN0b21lciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ2l0eSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY2l0eX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0Y29kZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50cnkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlciA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlciBEYXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQYXltZW50IE1ldGhvZCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgVXBkYXRlZCBBdCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVwZGF0ZV9hdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5QYXlQYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDdXJyZW5jeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBkYXRhLnBheXBhbC5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+QWN0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBFTkRJTkcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQRU5ESU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUEVORElOR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUEVORElOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2Nlc3NpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQUk9DRVNTSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUFJPQ0VTU0lOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsaXZlcmluZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckRFTElWRVJJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxpdmVyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJERUxJVkVSSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvbXBsZXRlZChkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyQ09NUExFVEVEXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkNPTVBMRVRFRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vb3JkZXJgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJlc1wiLCBkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVySXRlbXMgPSAoYXJyLCBxdWVyeSkgPT4ge1xyXG4gICAgcmV0dXJuIGFyci50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIH07XHJcblxyXG4gIGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcblxyXG4gICAgLy8gbGV0IHRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAvLyBsZXQgZm9ybWF0RGF0ZSA9XHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldERhdGUoKSArXHJcbiAgICAvLyAgIFwiLVwiKHRvRm9ybWF0LmdldE1vbnRoKCkgKyAxKSArXHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgc3RhdHVzRmlsdGVyLFxyXG4gICAgICBmcm9tRGF0ZSxcclxuICAgICAgdG9EYXRlLFxyXG4gICAgICBvcmRlcklkLFxyXG4gICAgICBncmVhdGVyLFxyXG4gICAgICBsZXNzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcclxuICAgICAgaWYgKHN0YXR1c0ZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguc3RhdHVzID09PSBzdGF0dXNGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSA9PT0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBsZXQgZGF0ZVNhbWUgPSBuZXcgRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgIGRhdGVTYW1lLnNldERhdGUoZGF0ZVNhbWUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IGRhdGVTYW1lLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj1cclxuICAgICAgICAgICAgICBuZXcgRGF0ZShmcm9tRGF0ZSkuZ2V0VGltZSgpICYmXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3JkZXJJZCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgPT09IHBhcnNlSW50KG9yZGVySWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JlYXRlcikge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPiBwYXJzZUZsb2F0KGdyZWF0ZXIpKTtcclxuICAgIH1cclxuICAgIGlmIChsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC50b3RhbCA8IHBhcnNlRmxvYXQobGVzcykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGVsZXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9vcmRlcnMvJHt2YWx1ZX1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG4gICAgdGhpcy5yZWZzLmVtYWlsLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5zdGF0dXMudmFsdWUgPSBcIk5PTkVcIjtcclxuICAgIHRoaXMucmVmcy5vcmRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuZ3JlYXRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMubGVzcy52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcjogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgb3JkZXJJZDogbnVsbCxcclxuICAgICAgZ3JlYXRlcjogbnVsbCxcclxuICAgICAgbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmFuZ2UsIGFjdGl2ZSwgcGFnaW5hdGlvbiwgc3RhdHVzRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzRmlsdGVyKTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShudW1iZXIpfVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRU5ESU5HXCI+UEVORElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFTElWRVJJTkdcIj5ERUxJVkVSSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPQ0VTU0lOR1wiPlBST0NFU1NJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT01QTEVURURcIj5DT01QTEVURUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNTdGFydFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZnJvbURhdGU6IGUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+VG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0c0VuZFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdG9EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmRlciBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBvcmRlcklkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImdyZWF0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBncmVhdGVyOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgQ3JlYXRlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnVzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdmlld29yZGVyXCIsIHN0YXRlOiB7IGRhdGE6IHggfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW4tc3F1YXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsXCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gaWQ9e3guaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2UgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBDYW52YXNDcm9wKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gIGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuICAvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG4gIGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuICAvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltYWdlLFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApO1xyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIGF3YWl0IHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgICByZXR1cm4gbG9hZDtcclxuICB9KTtcclxuXHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAvLyAgICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgLy8gICAgIHJlc29sdmUobG9hZCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBVbmRvUm91bmRlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YmNhdGVnb3J5LCBzZXRzdWJjYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VidHdvLCBzZXRzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbGNhdCwgc2V0ZGVsY2F0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxzdWIsIHNldGRlbHN1Yl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3VidHdvLCBzZXRkZWxzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdC9hbGxjYXRlZ29yaWVzXCIsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShwYXJhbXMpIHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IHBhcmFtcy50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRzdWJ0d28obnVsbCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3RhcmdldH0vc3ViY2F0ZWdvcmllc2AsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQocGFyc2VJbnQodGFyZ2V0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0c3ViY2F0ZWdvcnkocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXREZWxldGVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0ZGVsY2F0KG51bGwpO1xyXG4gICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgc2V0ZGVsc3VidHdvKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YkNhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YnR3b2NhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxzdWIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YnR3byhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VidHdvQ2F0ZWdvcnlTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgcmVzZXREZWxldGVJdGVtKCk7XHJcbiAgICBzZXRkZWxzdWJ0d28ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIGNvbnNvbGUubG9nKGRlbHN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7ZGVsY2F0fWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdjYXQgPSBkYXRhLmZpbHRlcigocywgaSkgPT4gZGVsY2F0ICE9PSBzLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld2NhdCk7XHJcbiAgICBzZXREYXRhKG5ld2NhdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3ViQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJjYXRlZ29yaWVzLyR7ZGVsc3VifWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWIgPSBzdWJjYXRlZ29yeS5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YiAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdzdWIpO1xyXG4gICAgc2V0c3ViY2F0ZWdvcnkobmV3c3ViKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVTdWJ0d29DYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3N1YnR3b2NhdGVnb3JpZXMvJHtkZWxzdWJ0d299YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIGNvbnN0IG5ld3N1YnR3byA9IHN1YnR3by5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YnR3byAhPT0gcy5pZCk7XHJcbiAgICBzZXRzdWJ0d28obmV3c3VidHdvKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8cD50aGlzIGlzIGNhdGVnb3J5IGxpc3Q8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENhdGVnb3J5fVxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsY2F0ID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWIgQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YkNhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3ViY2F0ZWdvcnkgJiZcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1Yi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWV9IHtcIiA+XCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWIgPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YkNhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3ViIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWJUd28gQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YnR3b0NhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidHdvICYmXHJcbiAgICAgICAgICAgICAgc3VidHdvLm1hcCgoc3VidCwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1YnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJ0LnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWJ0d28gPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YnR3b0NhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3VidHdvIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBTbGlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvXCI7XHJcbmltcG9ydCBDYW52YXNDcm9wIGZyb20gXCIuL0NhbnZhc0Nyb3BcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3BwZXJ2Mihwcm9wcykge1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjcm9wcGVkSW1hZ2UsIHNldENyb3BwZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEFyZWFQaXhlbHMsIHNldENyb3BwZWRBcmVhUGl4ZWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNyb3BDb21wbGV0ZSA9IHVzZUNhbGxiYWNrKChjcm9wcGVkQXJlYSwgY3JvcHBlZEFyZWFQaXhlbHMpID0+IHtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKGNyb3BwZWRBcmVhUGl4ZWxzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIENsb3NlRGlhbG9nKCkge1xyXG4gICAgcHJvcHMuY2xvc2VEaWFsb2coKTtcclxuICAgIGNsZWFyU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dDcm9wcGVkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBDYW52YXNDcm9wKFxyXG4gICAgICAgIHByb3BzLnBheWxvYWQuc3JjLFxyXG4gICAgICAgIGNyb3BwZWRBcmVhUGl4ZWxzLFxyXG4gICAgICAgIHJvdGF0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZWVcIiwgeyBjcm9wcGVkSW1hZ2UgfSk7XHJcbiAgICAgIHNldENyb3BwZWRJbWFnZShjcm9wcGVkSW1hZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFVwbG9hZEltYWdlID0gKCkgPT4ge1xyXG4gICAgcHJvcHMucGF5bG9hZC51cGxvYWQoY3JvcHBlZEltYWdlLmJsb2IsIGNsZWFyU3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkSW1hZ2UobnVsbCk7XHJcbiAgICBzZXRab29tKDEpO1xyXG4gICAgc2V0Q3JvcCh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgICBzZXRSb3RhdGlvbigwKTtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRlZFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2Nyb3BwZWRJbWFnZSAmJiBwcm9wcy5zaG93RGlhbG9nID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17VXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQ3JvcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRhaW5lciAgXCIgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGhlaWdodDogXCIyNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3Byb3BzLnNob3dEaWFsb2cgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0Nsb3NlRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93Q3JvcHBlZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5wYXlsb2FkLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXNwZWN0PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ2hhbmdlPXtzZXRDcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzbGlkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19Plpvb208L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1heD17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB6b29tKSA9PiBzZXRab29tKHpvb20pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5Sb3RhdGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYigwLCAwLCAwLjQpXCIsXHJcbiAgekluZGV4OiBcIjVcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB3aWR0aDogXCIxMDB2d1wiLFxyXG59O1xyXG5jb25zdCBjb250YWluZXJDcm9wcGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjkwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICB3aWR0aDogXCI2MCVcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckJ1dHRvblN0eWxlID0ge1xyXG4gIC8vIGJvcmRlcjogXCIxcHggc29saWQgI2Y1ZjVmNVwiLFxyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlZEltYWdlU3R5bGUgPSB7XHJcbiAgbWF4V2lkdGg6IFwiNTB2d1wiLFxyXG5cclxuICAvLyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBGYWNlU2hhcnAsIFRyZW5kaW5nVXBTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNQ2F0ZWdvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeW5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgZGF0YWxpc3Q6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhbGlzdDogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZENhdGVnb3J5ID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBhZGRjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmluZCgoZGF0YXMsIGlkeCkgPT4gaW5kZXggPT09IGlkeCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBhZGRjYXQpO1xyXG5cclxuICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuZXdkYXRhbGlzdCA9IHRoaXMuc3RhdGUuZGF0YWxpc3QuZmlsdGVyKFxyXG4gICAgICAgIChkYXRhbGlzdCwgaXgpID0+IGFkZGNhdC5jYXRlZ29yeW5hbWUgIT09IGRhdGFsaXN0Lm5hbWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YWxpc3Q6IG5ld2RhdGFsaXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gaWR4KSByZXR1cm4gcG9zdDtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgZGlzYWJsZTogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHRoaXMuc3RhdGUuY2F0ZWdvcmllcyk7XHJcbiAgfTtcclxuICBoYW5kbGVBZGRTdWJDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhZGRzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXQsIGNhdGkpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBjYXRpKSByZXR1cm4gY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgeyBzdWJjYXRlZ29yeWlkOiBcIlwiLCBzdWJjYXRlZ29yeW5hbWU6IFwiXCIsIGRpc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViXCIsIGFkZHN1Yik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogYWRkc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5ID0gKGksIHMpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaXQgYWRkc3ViMlwiLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gICAgY29uc3QgYWRkc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkc3VidHdvY2F0LCBpdHdvKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpdHdvKSByZXR1cm4gYWRkc3VidHdvY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZHN1YnR3b2NhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkc3VidHdvY2F0LnN1YmNhdGVnb3J5Lm1hcCgoYWRzdCwgYWRzdGkpID0+IHtcclxuICAgICAgICAgIGlmIChzICE9PSBhZHN0aSkgcmV0dXJuIGFkc3Q7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hZHN0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW3sgc3VidHdvY2F0ZWdvcnlpZDogXCJcIiwgc3VidHdvY2F0ZWdvcnluYW1lOiBcIlwiIH1dLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViIHR3b1wiLCBhZGRzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZHN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWIgPSAoYnV0Y2F0KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YiA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmUsIGFpZHgpID0+IHtcclxuICAgICAgaWYgKGJ1dGNhdCAhPT0gYWlkeCkgcmV0dXJuIGFkZG1vcmU7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZSxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgLi4uYWRkbW9yZS5zdWJjYXRlZ29yeSxcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRtb3Jlc3ViXCIsIGFkZG1vcmVzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZG1vcmVzdWIgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KGFkZG1vcmVzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWJUd28gPSAoYWRkY2F0LCBidXRzdWIsIHN1YnR3b2luZHgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBhZGRtb3Jlc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkbW9yZXN1YiwgYW1zaSkgPT4ge1xyXG4gICAgICBpZiAoYWRkY2F0ICE9PSBhbXNpKSByZXR1cm4gYWRkbW9yZXN1YjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRtb3Jlc3ViLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRtb3Jlc3ViLnN1YmNhdGVnb3J5Lm1hcCgoc3ViY2F0aW5pdCwgc2NpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChidXRzdWIgIT09IHNjaWR4KSByZXR1cm4gc3ViY2F0aW5pdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN1YmNhdGluaXQsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBbXHJcbiAgICAgICAgICAgICAgLi4uc3ViY2F0aW5pdC5zdWJ0d29jYXRlZ29yeSxcclxuICAgICAgICAgICAgICB7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYWRkbW9yZXN1YnR3byk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogYWRkbW9yZXN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgY29uc3QgZW5hYmxlID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoeCwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ueCwgZGlzYWJsZTogZmFsc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBlbmFibGUsXHJcbiAgICAgICAgZGF0YWxpc3Q6IHRoaXMuc3RhdGUuZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKChhLCBpKSA9PiBpbmRleCAhPT0gaSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogcmVtb3ZlY2F0LFxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWNhdClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkgPSAoY2F0aSwgc3ViaSkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGkgIT09IG1vZGluZHgpIHJldHVybiBtb2Q7XHJcbiAgICAgIGlmIChjYXRpID09PSAwICYmIHN1YmkgPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5tb2QsIHN1YmNhdGVnb3J5OiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5maWx0ZXIoKHN1YiwgaXN1YikgPT4gc3ViaSAhPT0gaXN1YiksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3ZlZCB9KTtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlY2F0ZWdvcnkocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkgPSAoeCwgeSwgeikgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoeCAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoeSAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGFkc3Quc3VidHdvY2F0ZWdvcnkuZmlsdGVyKChmaWwsIGluZCkgPT4geiAhPT0gaW5kKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiByZW1vdmVzdWJ0d28gfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXQgPSAoaSkgPT4gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWR4KSA9PiBlLnRhcmdldC52YWx1ZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwia2VuYSBjYXJpXCIsIGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChwb3N0LCBpZHgpID0+IHtcclxuICAgICAgaWYgKGkgIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvL3RoaXMgcmV0dXJuIHZhbHVlIGlmIHNlbGVjdFxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGNhdGVnb3J5bmFtZTogZGF0YS5uYW1lLCBjYXRlZ29yeWlkOiBkYXRhLmlkIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiBuZXcgdmFsdWUgd2l0aG91dCBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLCBjYXRlZ29yeWlkOiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXcgZGF0YSA6IFwiLCBuZXdEYXRhKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YklucHV0ID0gKGNhdGlkeCwgc3ViaWR4LCBjYXRlZ29yeW5hbWUpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzdWJjYXRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgY2F0XCIsIGNhdGVnb3J5bmFtZSk7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkKSA9PiBjYXRlZ29yeW5hbWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgc3ViZGF0YSA9IGNhdGVnb3J5LnN1YmNhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YiwgaXgpID0+IHN1Yi5zdWJjYXRlZ29yeW5hbWUgPT09IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RpZmllZCA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKG1vZCwgbW9kaW5keCkgPT4ge1xyXG4gICAgICBpZiAoY2F0aWR4ICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLm1vZCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogbW9kLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBpc3ViKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3ViaWR4ICE9PSBpc3ViKSByZXR1cm4gc3ViO1xyXG5cclxuICAgICAgICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogc3ViZGF0YS5zdWJjYXRlZ29yeW5hbWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogc3ViZGF0YS5pZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibW9kaWZpZWQgOlwiLCBtb2RpZmllZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbW9kaWZpZWQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkobW9kaWZpZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YlR3b0lucHV0ID0gKFxyXG4gICAgaW5jYXRpbmR4LFxyXG4gICAgaW5jYXRzdWJpZHgsXHJcbiAgICBpbmNhdHN1YnR3b2lkeCxcclxuICAgIGNhdGVnb3J5bmFtZSxcclxuICAgIHN1YmNhdGVnb3J5bmFtZVxyXG4gICkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgc3VidHdvZGF0YSA9IG51bGw7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBzdWJjYXRlZ29yeW5hbWVcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGNhdGVnb3JpXCIsIHN1YmRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1YmRhdGEpIHtcclxuICAgICAgc3VidHdvZGF0YSA9IHN1YmRhdGEuU3VidHdvY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3VidHdvLCBzdGkpID0+IHN1YnR3by5zdWJ0d29jYXRlZ29yeW5hbWUgPT09IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1YnR3b25ldyA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGNhdHN1YnR3bywgY2F0c3VidHdvaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmNhdGluZHggIT09IGNhdHN1YnR3b2lkeCkgcmV0dXJuIGNhdHN1YnR3bztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXRzdWJ0d28sXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGNhdHN1YnR3by5zdWJjYXRlZ29yeS5tYXAoKGNhdHN1YiwgY2F0c3ViaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5jYXRzdWJpZHggIT09IGNhdHN1YmlkeCkgcmV0dXJuIGNhdHN1YjtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNhdHN1YixcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGNhdHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YnR3bywgc3VidHdvaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGluY2F0c3VidHdvaWR4ICE9PSBzdWJ0d29pZHgpIHJldHVybiBzdWJ0d287XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzdWJ0d29kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdWJ0d28sXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeWlkOiBzdWJ0d29kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwic3VidHdvbmV3IGNhdCA6XCIsIHN1YnR3b25ldyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogc3VidHdvbmV3LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHN1YnR3b25ldyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1PntgQ2F0ZWdvcmkgIyR7aW5kZXggKyAxfSAtICR7ZGF0YS5jYXRlZ29yeW5hbWV9YH08L2g1PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGlzdD17YGRhdGFsaXN0JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RhdGEuc3ViY2F0ZWdvcnkgfHwgZGF0YS5kaXNhYmxlID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQ2F0ZWdvcnkgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2BkYXRhbGlzdCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YWxpc3QgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YWxpc3QubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeShpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIHshZGF0YS5kaXNhYmxlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnluYW1lICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRDYXRlZ29yeShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhLnN1YmNhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEuc3ViY2F0ZWdvcnkubWFwKChzdWIsIHN1YmlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YmlkeH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICB7YFN1YiBDYXRlZ29yeSAke3N1Yi5zdWJjYXRlZ29yeW5hbWV9IyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSBvZiBDYXRlZ29yeSAke2RhdGEuY2F0ZWdvcnluYW1lfSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Yi5zdWJ0d29jYXRlZ29yeSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke2RhdGEuY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3N1Yi5zdWJjYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgQ2F0ZWdvcnkjJHtzdWJpZHggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYml9IHZhbHVlPXtkYnMuc3ViY2F0ZWdvcnluYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YihpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c3ViLnN1YnR3b2NhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YjIsIGluZHR3bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZHR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YFN1YiAybmQgQ2F0ZWdvcnkgJHtzdWIyLnN1YnR3b2NhdGVnb3J5bmFtZX0gIyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFN1YiBUd28gQ2F0ZWdvcnkjJHtpbmR0d28gKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViVHdvSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnN1YmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYnMuaWQgPT09IHN1Yi5zdWJjYXRlZ29yeWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGJzLlN1YnR3b2NhdGVnb3J5Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YnR3bywgc2RiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2RiaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tc20gcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YlR3byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkU3ViQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXRhaWxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGV0YWlsbmFtZTogXCJcIixcclxuICAgICAgICAgIGRhdGFkZXNjOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvZGV0YWlsc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gRGV0YWlsczogXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzLmNvbmNhdChbeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5kZXRhaWxzLmZpbHRlcigoZGF0YSwgaW5kZXgpID0+IHZhbHVlICE9PSBpbmRleCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogcmVtb3ZlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnJlbW92ZWRldGFpbChyZW1vdmUpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZURldGFpbE5hbWUgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlscyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IG5ld2RldGFpbHMsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxzKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEYXRhRGVzYyA9IChpZCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdkZXRhaWxkYXRhZGVzYyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxkYXRhZGVzYyxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5uZXdkZXRhaWxzKG5ld2RldGFpbGRhdGFkZXNjKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGlzdD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgTmFtZSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURldGFpbE5hbWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgbGlzdD1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlscyAjJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF0YURlc2MoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgIHAtMiBtdC0yIG1iLTIgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGV0YWlsbmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwiZGVzY1wiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17aXRlbS5kYXRhZGVzY30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9jayBtYi0zIG10LTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIERldGFpbFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBDcm9wcGVydjIgZnJvbSBcIi4vQ3JvcHBlcnYyXCI7XHJcbmNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGljdHVyZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwaWN0dXJlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2VpZDogXCJcIixcclxuICAgICAgICAgIGltYWdlbmFtZTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0YXJnZXRpbWFnZTogbnVsbCxcclxuICAgICAgc2hvd0JsYWNrU2NyZWVuOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmlucHV0RmlsZSA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmlsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWxlW2ldID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbWFnZUFkZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwaWN0dXJlOiB0aGlzLnN0YXRlLnBpY3R1cmUuY29uY2F0KFt7IGltYWdlaWQ6IFwiXCIsIGltYWdlbmFtZTogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9IChpKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5waWN0dXJlLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGlmICh0aGlzLmZpbGVJbnB1dCkgdGhpcy5pbnB1dEZpbGVbaV0udmFsdWUgPSBcIlwiO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigocywgZmkpID0+IGkgIT09IGZpKTtcclxuICAgIGNvbnN0IGltYWdlZGVsID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigoaW1hZ2UsIGlkeCkgPT4gaSA9PT0gaWR4KTtcclxuICAgIGNvbnN0IHBpY3R1cmV1cCA9IGltYWdlZGVsLmZpbmQoKHgpID0+IHguaW1hZ2VpZCk7XHJcbiAgICBpZiAodHlwZW9mIHBpY3R1cmV1cCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEZWxldGluZyBJbWFnZVwiIH0pO1xyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwaWN0dXJldXAuaW1hZ2VpZH0vaW1hZ2VgLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgeyBwaWN0dXJlOiByZW1vdmUsIG1lc3NhZ2U6IG51bGwgfSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVwaWN0dXJlKHJlbW92ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIE5vdCBHb29kIGkgY2FuIGZlZWwgaXQuLlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBpY3R1cmU6IHJlbW92ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGEpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBhIDpcIiwgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBlIDpcIiwgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdLnNpemUgPiA4Mzg4NjA4KSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgRmlsZSB0b28gYmlnLi4gUGxlYXNlIFB1dCBsZXNzIHRoYW4gOG1iXCIpO1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vb3JpZ2luYWwgaSBlZGl0IG9uIDIvOC8yMDIxIGNvZGVcclxuXHJcbiAgICAvLyBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgIC8vICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCxcclxuICAgIC8vICAgICAgIHVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHBheWxvYWQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRpbWFnZTogYSB9KTtcclxuICAgICAgbG9hZEltYWdlKFxyXG4gICAgICAgIGUudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIGFzeW5jIChpbWcpID0+IHtcclxuICAgICAgICAgIHZhciBwaXhlbCA9IGltZy5oZWlnaHQgKiBpbWcud2lkdGg7XHJcblxyXG4gICAgICAgICAgaWYgKHBpeGVsID4gMzE0NTcyOCkge1xyXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBwaXhlbCA+IDUwMzg4NDggPyAwLjUgOiAwLjg7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIlBsZWFzZSB3YWl0IC4uLlwiIH0pO1xyXG4gICAgICAgICAgICAgIHZhciBpbWdjb21wID0gYXdhaXQgY29tcHJlc3NJbWFnZShpbWcsIHJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWdjb21wLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZXJyb3IgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgIHNyYzogYmFzZTY0ZGF0YSxcclxuICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb3JpZW50YXRpb246IHRydWUsIGNhbnZhczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICAvL3Rlc3RpbmcgcHVycG9zZVxyXG4gICAgLy8gY29uc3QgZmlsZSA9IGRhdGFVUkx0b0ZpbGUoXCJpbWFnZUJsb2JcIiwgaW1hZ2VCbG9iKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgYmxvYlwiLGZpbGUpXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpOyAvL3RoaXMgaXMgdXBsb2FkcyB0byByZXNldCBhbGwgdG8gbnVsbCBmb3IgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZUVhc3lDcm9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSB1cGxvYWRcIiwgZSk7XHJcbiAgICBjb25zdCBpbWFnZVVwbG9hZCA9IHRoaXMuc3RhdGUucGljdHVyZS5tYXAoKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSB0aGlzLnN0YXRlLnRhcmdldGltYWdlKSByZXR1cm4gaW1hZ2U7XHJcbiAgICAgIHJldHVybiB7IC4uLmltYWdlLCBpbWFnZWlkOiBlLmlkLCBpbWFnZW5hbWU6IGUuaW1hZ2UgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBpY3R1cmU6IGltYWdlVXBsb2FkIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5zaG93UGljdHVyZShpbWFnZVVwbG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaG93RWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VFYXN5Q3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93RWFzeUNyb3A6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBpY3R1cmUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUucGljdHVyZS5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHAtMSBwdC0xIG10LTAuOCBtci0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJbWFnZShpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMVwiPntpICsgMSArIFwiLlwifTwvZGl2PlxyXG4gICAgICAgICAgICB7ZGF0YS5pbWFnZW5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtkYXRhLmltYWdlbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZpbGVJbnB1dChpKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGUgbS0xXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGUoaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbXktM1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW1hZ2VBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE1vcmUgUGljdHVyZVxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxDcm9wcGVydjJcclxuICAgICAgICAgIHNob3dEaWFsb2c9e3RoaXMuc3RhdGUuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcH1cclxuICAgICAgICAgIHBheWxvYWQ9e3RoaXMuc3RhdGUucGF5bG9hZH1cclxuICAgICAgICAgIHVwbG9hZD17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgekluZGV4OiBcIjFcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb21wcmVzc0ltYWdlID0gKGltZywgY3J0KSA9PiB7XHJcbiAgdmFyIG9mZlNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgb2ZmU2NyZWVuQ2FudmFzLndpZHRoID0gaW1nLndpZHRoICogY3J0O1xyXG4gIG9mZlNjcmVlbkNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogY3J0O1xyXG4gIHJldHVybiBwaWNhXHJcbiAgICAucmVzaXplKGltZywgb2ZmU2NyZWVuQ2FudmFzKVxyXG4gICAgLnRoZW4oKGltYWdlQ0NTKSA9PiBpbWFnZUNDUylcclxuICAgIC5jYXRjaCgoZSkgPT4gZSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1DYXRlZ29yeSBmcm9tIFwiLi9NQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFBEZXRhaWxzIGZyb20gXCIuL1BEZXRhaWxzXCI7XHJcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuL1BpY3R1cmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBkZXRhaWxzOiBbXSxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgICAgc2hvd2J1dHRvbjogZmFsc2UsXHJcbiAgICAgIHNob3dDcm9wcGVyRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJTYXZpbmcgZGF0YS4uIFBsZWFzZSBUYWtlIERlZXAgQnJlYXRoIC4uXCIgfSk7XHJcbiAgICBBeGlvcyhcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0c2AsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZGF0YSB0byBzZXJ2ZXIuLi4uXCIpO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgYWxlcnQoXCJQcm9kdWN0IFNhdmVkISFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBXcm9uZy4uZXJvcnIgcGxlYXNlIGNvbnRhY3QgcHVsaXNcIixcclxuICAgICAgICAgIHNob3didXR0b246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlVXBsb2FkZWQgPSAoaW1hZ2VzKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VzOiBpbWFnZXMgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVSZW1vdmVQaWN0dXJlID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChjYXQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogY2F0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVOZXdEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVEZXRhaWwgPSAocmVtb3ZlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICB7LyogVG9wIFJvdyAqL31cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHN0ZXA9XCIuMDFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPFBpY3R1cmVcclxuICAgICAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLnByb3BzLnNob3dDcm9wfVxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY3R1cmU9e3RoaXMuaGFuZGxlVXBsb2FkZWR9XHJcbiAgICAgICAgICAgICAgICBjbG9zZUNyb3A9e3RoaXMucHJvcHMuY2xvc2VDcm9wfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlcGljdHVyZT17dGhpcy5oYW5kbGVSZW1vdmVQaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgc2hvd0Vhc3lDcm9wPXt0aGlzLnByb3BzLnNob3dFYXN5Q3JvcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPE1DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlY2F0ZWdvcnk9e3RoaXMuaGFuZGxlUmVtb3ZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VjYXRlZ29yeT17dGhpcy5oYW5kbGVDaGFuZ2VDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPFBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkZXRhaWw9e3RoaXMuaGFuZGxlUmVtb3ZlRGV0YWlsfVxyXG4gICAgICAgICAgICAgICAgbmV3ZGV0YWlscz17dGhpcy5oYW5kbGVOZXdEZXRhaWxzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlQnV0dG9ufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd2J1dHRvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL1Byb2R1Y3REZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgc2F2ZUJ1dHRvbjogXCJkaXNhYmxlZFwiLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsLFxyXG4gICAgICBpbWFnZWlkOiBudWxsLFxyXG4gICAgICBkZXNjOiBudWxsLFxyXG4gICAgICBkZXRhaWxzOiBbXSxcclxuICAgICAgdmFsaWRhdGU6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRldGFpbHMpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbWFnZWlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIGRldGFpbHMsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmIChpbWFnZWlkICYmIG5hbWUgJiYgcHJpY2UgJiYgc3RvY2sgJiYgY2F0ZWdvcnlJZCAmJiBkZXNjKSB7XHJcbiAgICAgIEF4aW9zKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7Y2F0ZWdvcnlJZH1gLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgICAgaW1hZ2VpZDogaW1hZ2VpZCxcclxuICAgICAgICAgICAgZGVzYzogZGVzYyxcclxuICAgICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZGF0YSB0byBzZXJ2ZXIuLi4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9wcm9kdWN0XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3RoaXMuc3RhdGUuaW1hZ2VpZH0vaW1hZ2VgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBudWxsLCBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaW1hZ2VJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgaWYgKGltYWdlSWQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJbWFnZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSB1cGxvYWRcIiwgZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogZS5pZCwgaW1hZ2U6IGUuaW1hZ2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VsZWN0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2hvdyBzb21ldGhpbmcgaGVyZVwiLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdLnNpemUgPiA4Mzg4NjA4KSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgRmlsZSB0b28gYmlnLi4gUGxlYXNlIFB1dCBsZXNzIHRoYW4gOG1iXCIpO1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCxcclxuICAgICAgICAgIHVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHBheWxvYWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9IChpbWFnZUJsb2IsIGxvYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbE5hbWUgPSAoZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJmcm9tIFByb2R1Y3REZXRhaWxzLmpzIERldGFpbE5hbWU6IFwiLCBlKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gaGFuZGxlRGV0YWlsRGVzYyA9IGUgPT57XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsRGVzYzogXCIsIGUpXHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUgfSlcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIGNhdGVnb3J5SWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgICAgdmFsaWRhdGUsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdCBMaXN0PC9MaW5rPiB7XCI+IE5ldyBQcm9kdWN0XCJ9XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjVlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxuYW1lPXt0aGlzLmhhbmRsZURldGFpbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3RoaXMudmFsaWRhdGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VpZCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7aW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTMwcHhcIiwgaGVpZ2h0OiBcIjEzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmllcyBzZWxlY3RlZD17dGhpcy5oYW5kbGVTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZWlkICYmXHJcbiAgICAgICAgICAgICAgICAgIG5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgcHJpY2UgJiZcclxuICAgICAgICAgICAgICAgICAgcHJpY2UgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICBzdG9jayAmJlxyXG4gICAgICAgICAgICAgICAgICBzdG9jayA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQgJiZcclxuICAgICAgICAgICAgICAgICAgZGVzYyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmUgZmEtMnggXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlNhdmUgUHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzYXZlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmUgZmEtMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBGaWxsIEFsbCBGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7c3RvY2sgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBFbnRlciBTdG9jayBBbW91bnQgbW9yZSB0aGFuIDBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge3ByaWNlIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgcHV0IHByaWNlIG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgc2hvdzogdHJ1ZSxcclxuICAgIGNhdGVnb3J5RGF0YTogbnVsbFxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9KTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcImFwaS9hZG1pbi9wcm9kdWN0cy9jYXRlZ29yaWVzXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlsc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RGF0YTogcmVzcG9uc2UuZGF0YSwgc2hvdzogdHJ1ZSB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkKHRoaXMuc3RhdGUuY2F0ZWdvcnlEYXRhLmlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5OiBcIlwiLCBkZXRhaWxzOiBcIlwiLCBzaG93OiB0cnVlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIHNob3csIGNhdGVnb3J5RGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2RhdGEgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2VsZWN0ZWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5RGF0YSA/IGNhdGVnb3J5RGF0YS5pZCA6IG51bGx9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhICE9PSBudWxsICYmIHNob3cgJiYgKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWxzZVwiPlBsZWFzZSBTZWxlY3QgQSBDYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcChkYXRhID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYXRhLmlkfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMT0FESU5HXCI+TE9BRElORy4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2hvdyA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgTmV3IENhdGVnb3J5XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHRvPVwiL2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdFwiIC8+IENhdGVnb3J5IExpc3RcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcnkgTmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcnkgRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbCBBZGQgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2F0ZWdvcnl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsvKiB7IXNob3cgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWxDYXQgZnJvbSBcIi4uL09sZC9Nb2RhbENhdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZW1vdmluZyBcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2lkfWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdDwvTGluaz5cclxuICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Q2F0ZWdvcnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPmRldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5SZW1vdmU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57eC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57eC5kZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNjYXRlZ29yeVwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVJlbW92ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPXt4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgY3JvcDoge1xyXG4gICAgICAgIGFzcGVjdDogMSAvIDEsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDBcclxuICAgICAgfSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIGRlZmF1bHRJbWFnZTogdHJ1ZSxcclxuICAgICAgbG9hZGluZzogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVwbG9hZGluZy4uLlwiKTtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNyYywgY3JvcCwgZGVmYXVsdEltYWdlLCBjcm9wcGVkSW1hZ2VVcmwsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5VcGxvYWRpbmcgLi4uLjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxoND5Dcm9wIGFuZCBVcGxvYWQgSW1hZ2U8L2g0PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuXHJcbiAgICAgICAge3NyYyAmJiBkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlZmF1bHRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ3JvcFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZVVybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0Q2F0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB0aGlzLnByb3BzLmNhdGVnb3J5SWRcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBjYXRlZ29yeUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9wcyBvZiBFZGl0Q2F0XCIsIHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMucHJvcHMuaGFuZGxlQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5SWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHgsIHkpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt5fSB2YWx1ZT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXRhaWxzOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IHRoaXMucHJvcHMuZm9yZGV0YWlscyB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgZGF0YWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gZGF0YWluZGV4KSByZXR1cm4gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgZGV0YWlsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgZGF0YWluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gZGF0YWluZGV4KSByZXR1cm4gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgLi4uZGF0YSwgZGF0YWRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogbmV3RGF0YSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGF0YWNoYW5nZShuZXdEYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUl0ZW0gPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZERldGFpbHMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzLmNvbmNhdChbXHJcbiAgICAgICAgeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiwgaWQ6IFwiXCIgfSxcclxuICAgICAgXSksXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3QgeyBkZXRhaWxzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG4gICAgICAgIHtkZXRhaWxzXHJcbiAgICAgICAgICA/IGRldGFpbHMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVob2xkZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5kYXRhZGVzY31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSXRlbShkYXRhLmlkID8gZGF0YS5pZCA6IG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsfVxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZERldGFpbHN9IGNsYXNzTmFtZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICBBZGQgUHJvZHVjdCBEZXRhaWxcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBFZGl0Q2F0IGZyb20gXCIuL0VkaXRDYXRcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgVXBsb2FkIGZyb20gXCIuL1VwbG9hZFwiO1xyXG5pbXBvcnQgSW1hZ2VMaXN0IGZyb20gXCIuL0ltYWdlTGlzdFwiO1xyXG5pbXBvcnQgQ3JvcERpYWxvZyBmcm9tIFwiLi9Dcm9wRGlhbG9nXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRWRpdFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL0VkaXRQcm9kdWN0RGV0YWlsc1wiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICBkZXRhaWxzOiBudWxsLFxyXG4gICAgICBnb3RudWxsZGF0YSA6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YFxyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBuYW1lOiBkYXRhLnByb2R1Y3ROYW1lLFxyXG4gICAgICAgIHByaWNlOiBkYXRhLnByb2R1Y3RQcmljZSxcclxuICAgICAgICBzdG9jazogZGF0YS5wcm9kdWN0U3RvY2ssXHJcbiAgICAgICAgZGVzYzogZGF0YS5wcm9kdWN0RGVzYyxcclxuICAgICAgICBkZXRhaWxzIDogZGF0YS5wcm9kdWN0RGV0YWlsc3MsXHJcbiAgICAgICAgZ290bnVsbGRhdGEgOiB0cnVlLFxyXG5cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnkgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcnlJZDogaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpbWFnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2ltYWdlcy8ke2RhdGEuaWR9L2ZpbGUvcHJvZHVjdGAsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpbWFnZTogaW1hZ2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZTogbnVsbCB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2F2ZSgpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbmFtZSwgcHJpY2UsIHN0b2NrLCBkZXNjfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBpZihuYW1lID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIG5hbWUgPSBkYXRhLnByb2R1Y3ROYW1lO1xyXG4gICAgfVxyXG4gICAgaWYocHJpY2UgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgcHJpY2UgPSBkYXRhLnByb2R1Y3RQcmljZTtcclxuICAgIH1cclxuICAgIGlmKHN0b2NrID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHN0b2NrID0gZGF0YS5wcm9kdWN0U3RvY2s7XHJcbiAgICB9XHJcbiAgICBpZihkZXNjID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIGRlc2MgPSBkYXRhLnByb2R1Y3REZXNjO1xyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHJcblxyXG4gICAgaWYgKG5hbWUgJiYgcHJpY2UgJiYgc3RvY2sgJiYgZGVzYykge1xyXG5cclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7ZGF0YS5pZH1gLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiRGF0YSBIYXMgQmVlbiBTYXZlZFwiIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogYERhdGEgTm90IFNhdmUgLiBFcnJvciA6ICR7ZX1gIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZTogXCJEYXRhIG5vdCBzYXZlLiBQbGVhc2UgRmlsbCBBbGwgcmVxdWlyZW1lbnQgZmllbGRzXCJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWxlY3QgPSB2YWx1ZSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogbnVsbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvdyBzb21ldGhpbmcgaGVyZVwiLCB2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxzTnVsbCA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSAsIGdvdG51bGxkYXRhIDogZmFsc2V9KVxyXG4gIH1cclxuICBoYW5kbGVEZXRhaWxDaGFuZ2UgPSBlID0+IHtcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlLCBnb3RudWxsZGF0YSA6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gZSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSwgc2hvd0FkZEltYWdlOiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbWVzc2FnZSwgY2F0ZWdvcnlJZCwgaW1hZ2UsIGRldGFpbHMsIGdvdG51bGxkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgRWRpdCBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiLjAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0sXHJcbiAgICAgIGRldGFpbG5hbWVoYXNpbnB1dDogZmFsc2UsXHJcbiAgICAgIGRhdGFkZXNjaGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVycyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGV0YWlsbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJzIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoXHJcbiAgICAgIChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGF0YWRlc2M6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJkZXNjKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIgPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNoYXJlaG9sZGVyczogcmVtb3ZlZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxuYW1laGFzaW5wdXRcclxuICAgICAgICAgICAgICA/IFwiTmFtZSBvZiBkZXRhaWwgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIERhdGEgIyR7aWR4ICsgMX0gYH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhZGVzY2hhc2lucHV0ID8gXCJEZXRhaWwgZGF0YSBpcyByZXF1aXJlZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIoaWR4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFNoYXJlaG9sZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vT2xkL01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgICAgdG9nZ2xlZCA6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvZHVjdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuY2F0ZWdvcnlJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB0aGlzLnN0b2NrZ3JlYXQgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdG9ja2xlc3MgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHNgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGVmYXVsdERhdGE6IGRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB0aGlzLnByb2R1Y3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2dyZWF0KSB0aGlzLnN0b2NrZ3JlYXRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2xlc3MpIHRoaXMuc3RvY2tsZXNzSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCBjYXRlZ29yeUZpbHRlciwgc3RvY2tncmVhdCwgc3RvY2tsZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnByb2R1Y3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9kdWN0LnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYXRlZ29yeUZpbHRlcikge1xyXG4gICAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmNhdGVnb3J5Lm5hbWUgPT09IGNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrZ3JlYXQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA+IHBhcnNlRmxvYXQoc3RvY2tncmVhdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrbGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrIDwgcGFyc2VGbG9hdChzdG9ja2xlc3MpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTb3J0Vmlldz0gKGUpPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbGlzdCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgaWYodGhpcy5zdGF0ZS50b2dnbGVkKXtcclxuICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBhLnZpZXcgLSBiLnZpZXcpXHJcbiAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGxpc3QpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0b2dnbGVkIDogZmFsc2V9KVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGIudmlldyAtIGEudmlldylcclxuICAgICAgdGhpcy5wYWdpbmF0ZURhdGEobGlzdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZ2dsZWQgOiB0cnVlfSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiwgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgcGFnaW5hdGlvbiA6IFwiLCBwYWdpbmF0aW9uKTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7LyogPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUZpbHRlcjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPkZpbHRlciBCeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2dyZWF0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2dyZWF0OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2sgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3RvY2tsZXNzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2tsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtc3F1YXJlIGZhLTF4XCIgLz4gQ3JlYXRlIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFZpZXdzPGEgaHJlZj1cIiNcIiAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU29ydFZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2dnbGVkID8gIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtYW1vdW50LWRvd25cIj48L2k+IDo8aSBjbGFzcz1cImZhcyBmYS1zb3J0LWFtb3VudC11cFwiPjwvaT4gfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpKzF9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt4LnBpY3R1cmVzLm1hcCgoYSwgYikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBhLmZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudmlldyA/IHgudmlldyA6IG51bGx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0KHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdCBmYS0xeFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL2VkaXRcIiwgc3RhdGU6IHsgaWQ6IHguaWQgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz4ge1wiICBcIn1FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI3Byb2R1Y3RcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxQcm9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbi8vIGltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzcmM6IG51bGwsXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgIGFzcGVjdDogMSAvIDFcclxuICAgIH0sXHJcbiAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICBpbWFnZUJsb2I6IG51bGxcclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcCh0aGlzLnN0YXRlLnNyYyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25pbWFnZWxvYWRcIik7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wIGNvbXBsZXRlXCIpO1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wY2hhbmdlXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRpbWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgYWRkaW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICB7Lyoge2Nyb3BwZWRJbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxBcHAgLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXN0b21lckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21lci9pbmRleFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPlxyXG4gICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8Q3VzdG9tZXJMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgbW9udGggPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNb250aCgpICsgMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgeWVhcjogeWVhcixcclxuICAgIG1vbnRoOiBtb250aCxcclxuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSksXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vZGFzaGJvYXJkP3llYXI9JHt0aGlzLnN0YXRlLnllYXJ9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTW9udGgobW9udGgpIHtcclxuICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBcIkZlYnVhcnlcIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gXCJBcHJpbFwiO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIFwiTWF5XCI7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XHJcbiAgICAgIGNhc2UgNzpcclxuICAgICAgICByZXR1cm4gXCJKdWx5XCI7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICByZXR1cm4gXCJBdWd1c3RcIjtcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIHJldHVybiBcIk9ja3RvYmVyXCI7XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgcmV0dXJuIFwiTm92ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICByZXR1cm4gXCJEaXNlbWJlclwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyBkYXRhOiBudWxsLCB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIHN0YXJ0RGF0ZTogZGF0ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmdldERhdGEoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgZm9yIGRhc2hib2FyZFwiLCB0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgeWVhciwgbW9udGggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSwgeWVhciwgbW9udGgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PkNoYW5nZSBNb250aCBhbmQgWWVhciA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWluZm9cIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KGRhdGEudG90YWxfc3VtID8gZGF0YS50b3RhbF9zdW0gOiAwKS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+VG90YWwgU2FsZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IDxoND57ZGF0YS51c2Vyc308L2g0PiA6IDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5DdXN0b21lcnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VtW3llYXJdID8gZGF0YS5zdW1beWVhcl0gOiAwLjBcclxuICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlllYXJseSBTYWxlcyA6IHt5ZWFyfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlJNIHtwYXJzZUZsb2F0KGRhdGEubW9udGhbbW9udGhdKS50b0ZpeGVkKDIpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+TW9udGx5IFNhbGVzIDoge3RoaXMuaGFuZGxlTW9udGgobW9udGgpfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19IC8+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiQmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwic2FsZXNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbCBkZXNpZ24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVG90YWwgU2FsZXMgQnkgTW9udGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGVzdHNcclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcIk9yZGVyIENvdW50XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyY2hcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoQXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNb250aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGJnPVwiZGFya1wiXHJcbiAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm0tMCBwLTAgcGwtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTEgXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMSBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxpc3QtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvdmlzaXRvclwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFnaW5hdGVPcmRlciBmcm9tIFwiLi4vY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJzXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQYWdpbmF0ZU9yZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Qcm9kdWN0TGlzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBDdXN0b21lclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pPiBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT4gRGV2b3BzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvdmlzaXRvclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1leWVcIj48L2k+IFZpc2l0b3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=