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
0,[["./assets/react-app/react-app.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_material-ui_core_esm_ButtonBase_ButtonBase_js-node_modules_material-ui_c-cf55f9","vendors-node_modules_popper_js_dist_esm_popper_js","vendors-node_modules_axios_index_js","vendors-node_modules_material-ui_core_esm_Button_Button_js-node_modules_material-ui_core_esm_-c6028e"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2luZGV4LmNzcz9iYWNjIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYXlsb2FkIiwic2V0U3RhdGUiLCJzaG93Q3JvcCIsInNyYyIsInVwbG9hZCIsInNob3d0b3BiYXIiLCJzdGF0ZSIsImlkRWRpdCIsIm1vYmlsZVZpZXciLCJzaG93U2lkZWJhciIsInNob3dFYXN5Q3JvcERpYWxvZyIsInVwZGF0ZVZpZXdTdGF0ZSIsImJpbmQiLCJ0b2dnbGVTaWRlQmFyIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInJlbmRlciIsImNvbnRhaW5lckNsYXNzIiwiaGFuZGxlU2hvd0Nyb3AiLCJoYW5kbGVDbG9zZUNyb3AiLCJoYW5kbGVjYW5jZWx0b3B4IiwiQ3JvcHBpbmciLCJpbWFnZSIsImltYWdlUmVmIiwiY3JvcCIsIm1ha2VDbGllbnRDcm9wIiwiZSIsImxvYWRpbmciLCJjcm9wcGVkSW1hZ2VVcmwiLCJpbWFnZUJsb2IiLCJzaG93Q3JvcEltYWdlIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxMb2FkIiwiY2FuY2VsdG9weCIsIngiLCJ5Iiwid2lkdGgiLCJhc3BlY3QiLCJoZWlnaHQiLCJnZXRDcm9wcGVkSW1nIiwiZmlsZU5hbWUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2NhbGVYIiwibmF0dXJhbFdpZHRoIiwic2NhbGVZIiwibmF0dXJhbEhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRvQmxvYiIsImJsb2IiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiZmlsZVVybCIsImNyZWF0ZU9iamVjdFVSTCIsImhhbmRsZUNsb3NlVG9wWCIsImhhbmRsZUJhY2tBY3Rpb24iLCJoYW5kbGVVcGxvYWQiLCJvbkltYWdlTG9hZGVkIiwib25Dcm9wQ29tcGxldGUiLCJvbkNyb3BDaGFuZ2UiLCJoYW5kbGVTaG93Q3JvcEltYWdlIiwiZGF0YVVSTHRvRmlsZSIsImRhdGFVcmwiLCJyZXMiLCJmZXRjaCIsIkZpbGUiLCJ0eXBlIiwiVmlzaXRvciIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ0YWJsZSIsInNldFRhYmxlIiwiZGF0YW5hbWUiLCJzZXREYXRhbmFtZSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsImxvZyIsImNhdGNoIiwiY291bnRPYmpzIiwiYXJyIiwib2JqIiwiT2JqZWN0IiwiY3JlYXRlIiwiZm9yRWFjaCIsIml0ZW0iLCJzZWxlY3RPbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY291bnRyeSIsIm1hcCIsImluZCIsIkNvdW50cnkiLCJjb3VudENvdW50cnkiLCJjc3RhdGUiLCJjaXR5IiwiY2NpdHkiLCJpcHMiLCJkYXQiLCJpcCIsImlwZCIsInZpc2l0Iiwic2luZ2xlZGF0YSIsImdldE93blByb3BlcnR5TmFtZXMiLCJsZW5ndGgiLCJpIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwibGltaXQiLCJyYW5nZSIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsInBhZ2luYXRlIiwiYWN0aXZlIiwicGFnZSIsImlkIiwiQXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJyZWZzIiwiZW1haWwiLCJkZWZhdWx0RGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInBhZ2luYXRlRGF0YSIsImFycmF5IiwicGFnZV9zaXplIiwicGFnZV9udW1iZXIiLCJzbGljZSIsIm1vdW50ZWQiLCJoYW5kbGVFZGl0IiwiZWRpdCIsIml0ZW1zIiwibnVtYmVyIiwicHVzaCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsZWFyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicG9zdGNvZGUiLCJwaG9uZU51bWJlciIsInBheW1lbnRNZXRob2QiLCJwYXlwYWwiLCJhbW91bnQiLCJjdXJyZW5jeSIsImhhbmRsZVBFTkRJTkciLCJoYW5kbGVQcm9jZXNzaW5nIiwiaGFuZGxlRGVsaXZlcmluZyIsImhhbmRsZUNvbXBsZXRlZCIsIlBhZ2luYXRlT3JkZXIiLCJxdWVyeSIsInN0YXR1c0ZpbHRlciIsImZyb21EYXRlIiwidG9EYXRlIiwib3JkZXJJZCIsImdyZWF0ZXIiLCJsZXNzIiwidXNlciIsImdldFRpbWUiLCJkYXRlU2FtZSIsInNldERhdGUiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsInBpY2EiLCJyZXF1aXJlIiwiY3JlYXRlSW1hZ2UiLCJJbWFnZSIsInNldEF0dHJpYnV0ZSIsImdldFJhZGlhbkFuZ2xlIiwiZGVncmVlVmFsdWUiLCJQSSIsIkNhbnZhc0Nyb3AiLCJpbWFnZVNyYyIsInBpeGVsQ3JvcCIsInJvdGF0aW9uIiwibWF4U2l6ZSIsIm1heCIsInNhZmVBcmVhIiwic3FydCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInJvdW5kIiwibG9hZCIsIkNhdGVnb3J5TGlzdCIsInN1YmNhdGVnb3J5Iiwic2V0c3ViY2F0ZWdvcnkiLCJzdWJ0d28iLCJzZXRzdWJ0d28iLCJkZWxjYXQiLCJzZXRkZWxjYXQiLCJkZWxzdWIiLCJzZXRkZWxzdWIiLCJkZWxzdWJ0d28iLCJzZXRkZWxzdWJ0d28iLCJvblNlbGVjdENhdGVnb3J5IiwicGFyYW1zIiwicmVzZXREZWxldGVJdGVtIiwic3ViQ2F0ZWdvcnlTZWxlY3QiLCJzdWJ0d29DYXRlZ29yeVNlbGVjdCIsImRlbGV0ZUNhdGVnb3J5IiwiZXJyIiwibmV3Y2F0IiwicyIsImRlbGV0ZVN1YkNhdGVnb3J5IiwibmV3c3ViIiwiZGVsZXRlU3VidHdvQ2F0ZWdvcnkiLCJuZXdzdWJ0d28iLCJtaW5XaWR0aCIsInN1YiIsImlzIiwic3ViY2F0ZWdvcnluYW1lIiwic3VidCIsInN1YnR3b2NhdGVnb3J5bmFtZSIsIkNyb3BwZXJ2MiIsInNldENyb3AiLCJzZXRSb3RhdGlvbiIsInpvb20iLCJzZXRab29tIiwiY3JvcHBlZEltYWdlIiwic2V0Q3JvcHBlZEltYWdlIiwiY3JvcHBlZEFyZWFQaXhlbHMiLCJzZXRDcm9wcGVkQXJlYVBpeGVscyIsInVzZUNhbGxiYWNrIiwiY3JvcHBlZEFyZWEiLCJDbG9zZURpYWxvZyIsImNsb3NlRGlhbG9nIiwiY2xlYXJTdGF0ZSIsInNob3dDcm9wcGVkSW1hZ2UiLCJVcGxvYWRJbWFnZSIsInNob3dEaWFsb2ciLCJkaWFsb2dTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiY29udGFpbmVyQnV0dG9uU3R5bGUiLCJjb250YWluZXJDcm9wcGVyU3R5bGUiLCJjcm9wcGVyU3R5bGUiLCJzbGlkZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImRpdkRpYWxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJjcm9wcGVkSW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiTUNhdGVnb3J5IiwiaW5kZXgiLCJhZGRjYXQiLCJjYXRlZ29yaWVzIiwiZmluZCIsImRhdGFzIiwiaWR4IiwidW5kZWZpbmVkIiwibmV3ZGF0YWxpc3QiLCJkYXRhbGlzdCIsIml4IiwiY2F0ZWdvcnluYW1lIiwibmV3RGF0YSIsInBvc3QiLCJkaXNhYmxlIiwiY2F0ZWdvcnlpZCIsImNoYW5nZWNhdGVnb3J5IiwiYWRkc3ViIiwiY2F0IiwiY2F0aSIsInN1YmNhdGVnb3J5aWQiLCJhZGRzdWJ0d28iLCJhZGRzdWJ0d29jYXQiLCJpdHdvIiwiYWRzdCIsImFkc3RpIiwic3VidHdvY2F0ZWdvcnkiLCJzdWJ0d29jYXRlZ29yeWlkIiwiYnV0Y2F0IiwiYWRkbW9yZXN1YiIsImFkZG1vcmUiLCJhaWR4IiwiYnV0c3ViIiwic3VidHdvaW5keCIsImFkZG1vcmVzdWJ0d28iLCJhbXNpIiwic3ViY2F0aW5pdCIsInNjaWR4IiwiZW5hYmxlIiwicmVtb3ZlY2F0IiwiYSIsInJlbW92ZWNhdGVnb3J5Iiwic3ViaSIsInJlbW92ZWQiLCJtb2QiLCJtb2RpbmR4IiwiaXN1YiIsInoiLCJyZW1vdmVzdWJ0d28iLCJmaWwiLCJjYXRpZHgiLCJzdWJpZHgiLCJzdWJkYXRhIiwiY2F0ZWdvcnkiLCJtb2RpZmllZCIsImluY2F0aW5keCIsImluY2F0c3ViaWR4IiwiaW5jYXRzdWJ0d29pZHgiLCJldmVudCIsInN1YnR3b2RhdGEiLCJTdWJ0d29jYXRlZ29yeSIsInN0aSIsInN1YnR3b25ldyIsImNhdHN1YnR3byIsImNhdHN1YnR3b2lkeCIsImNhdHN1YiIsImNhdHN1YmlkeCIsInN1YnR3b2lkeCIsImhhbmRsZUF4aW9zIiwiaGFuZGxlSW5wdXQiLCJrZXkiLCJoYW5kbGVSZW1vdmVDYXRlZ29yeSIsImhhbmRsZUFkZENhdGVnb3J5IiwiaGFuZGxlU3ViSW5wdXQiLCJkYiIsImRiaXgiLCJkYnMiLCJkYmkiLCJoYW5kbGVSZW1vdmVTdWJDYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWIiLCJzdWIyIiwiaW5kdHdvIiwiaGFuZGxlU3ViVHdvSW5wdXQiLCJzZGJpIiwiaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkiLCJoYW5kbGVBZGRNb3JlU3ViVHdvIiwiaGFuZGxlQWRkc3VidHdvY2F0ZWdvcnkiLCJoYW5kbGVBZGRTdWJDYXRlZ29yeSIsIlBEZXRhaWxzIiwiZGV0YWlscyIsImNvbmNhdCIsImRldGFpbG5hbWUiLCJkYXRhZGVzYyIsInJlbW92ZSIsInJlbW92ZWRldGFpbCIsIm5ld2RldGFpbHMiLCJkZXRhaWwiLCJuZXdkZXRhaWxkYXRhZGVzYyIsImhhbmRsZUNoYW5nZURldGFpbE5hbWUiLCJoYW5kbGVDaGFuZ2VEYXRhRGVzYyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZUFkZCIsIlBpY3R1cmUiLCJwaWN0dXJlIiwiaW1hZ2VpZCIsImltYWdlbmFtZSIsImZpbGVJbnB1dCIsImlucHV0RmlsZSIsImZpIiwiaW1hZ2VkZWwiLCJwaWN0dXJldXAiLCJtZXNzYWdlIiwicmVtb3ZlcGljdHVyZSIsImFsZXJ0IiwiZmlsZXMiLCJzaXplIiwidGFyZ2V0aW1hZ2UiLCJsb2FkSW1hZ2UiLCJpbWciLCJwaXhlbCIsInJhdGlvIiwiaW1nY29tcCIsImNvbXByZXNzSW1hZ2UiLCJiYXNlNjRkYXRhIiwidG9EYXRhVVJMIiwic2hvd0Vhc3lDcm9wIiwic2V0VGltZW91dCIsIm9yaWVudGF0aW9uIiwibG9hZGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUFkZEltYWdlIiwiaGFuZGxlQ2xvc2VFYXN5Q3JvcCIsImltYWdlVXBsb2FkIiwic2hvd1BpY3R1cmUiLCJzaG93QmxhY2tTY3JlZW4iLCJoYW5kbGVSZW1vdmVJbWFnZSIsIm9uU2VsZWN0RmlsZSIsImhhbmRsZUltYWdlQWRkIiwic3VibWl0RGlhbG9nIiwiY3J0Iiwib2ZmU2NyZWVuQ2FudmFzIiwicmVzaXplIiwiaW1hZ2VDQ1MiLCJQcm9kdWN0QWRkIiwicHJpY2UiLCJzdG9jayIsImRlc2MiLCJpbWFnZXMiLCJoaXN0b3J5Iiwic2hvd2J1dHRvbiIsInNob3dDcm9wcGVyRGlhbG9nIiwiaGFuZFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVVwbG9hZGVkIiwiY2xvc2VDcm9wIiwiaGFuZGxlUmVtb3ZlUGljdHVyZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlUmVtb3ZlRGV0YWlsIiwiaGFuZGxlTmV3RGV0YWlscyIsImhhbmRsZVNhdmVCdXR0b24iLCJBZGRQcm9kdWN0IiwiY2F0ZWdvcnlJZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2F2ZUJ1dHRvbiIsInZhbGlkYXRlIiwiaW1hZ2VJZCIsImhhbmRsZURldGFpbE5hbWUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJzZWxlY3RlZCIsImhhbmRsZUNhdGVnb3J5IiwiQ2F0ZWdvcnlFZGl0IiwiQ3JvcERpYWxvZyIsImFkZEltYWdlIiwiZGVmYXVsdEltYWdlIiwiRWRpdENhdCIsIkVkaXRQcm9kdWN0RGV0YWlscyIsImRhdGFpbmRleCIsImRhdGFjaGFuZ2UiLCJmb3JkZXRhaWxzIiwiaGFuZGxlRGV0YWlsQ2hhbmdlIiwiaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkRGV0YWlscyIsIkVkaXRpbmciLCJnb3RudWxsZGF0YSIsInNob3dBZGRJbWFnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwicHJvZHVjdERldGFpbHNzIiwiaGFuZGxlU2F2ZSIsIkltYWdlTGlzdCIsImltYWdlQ2xpY2tlZCIsImZpbGVuYW1lIiwiTW9kYWxQcm9kIiwiUHJvZHVjdERldGFpbHMiLCJldnQiLCJuZXdTaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlciIsInNpZHgiLCJuZXdTaGFyZWhvbGRlcmRlc2MiLCJkZXRhaWxuYW1laGFzaW5wdXQiLCJkYXRhZGVzY2hhc2lucHV0IiwiaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlIiwiaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlIiwiaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIiLCJoYW5kbGVBZGRTaGFyZWhvbGRlciIsInByb2R1Y3QiLCJwcm9kdWN0SW5wdXQiLCJzdG9ja2dyZWF0Iiwic3RvY2tncmVhdElucHV0Iiwic3RvY2tsZXNzIiwic3RvY2tsZXNzSW5wdXQiLCJjYXRlZ29yeUZpbHRlciIsImxpc3QiLCJ0b2dnbGVkIiwic29ydCIsImIiLCJ2aWV3IiwiY2F0ZWdvcnlJbnB1dCIsImhhbmRsZVNvcnRWaWV3IiwicGljdHVyZXMiLCJVcGxvYWQiLCJhZGRpbWFnZSIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJDdXN0b21lciIsIm5vdyIsIkRhc2hib2FyZCIsInN0YXJ0RGF0ZSIsImdldERhdGEiLCJoYW5kbGVNb250aCIsImhhbmRsZUNoYW5nZSIsInRleHRBbGlnbiIsInRvdGFsX3N1bSIsInRvRml4ZWQiLCJ1c2VycyIsInN1bSIsImNoYXJ0IiwidGl0bGUiLCJjb3VudCIsImhBeGlzIiwidkF4aXMiLCJNb2JpbGVTaWRlQmFyIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEdBQU4sU0FBa0JDLDRDQUFsQixDQUE0QjtBQUN6Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsNENBaUJEQyxPQUFELElBQWE7QUFDNUIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pDLGdCQUFRLEVBQUUsSUFERTtBQUVaQyxXQUFHLEVBQUVILE9BQU8sQ0FBQ0csR0FGRDtBQUdaQyxjQUFNLEVBQUVKLE9BQU8sQ0FBQ0ksTUFISjtBQUlaQyxrQkFBVSxFQUFFO0FBSkEsT0FBZDtBQU1ELEtBeEJrQjs7QUFBQSw2Q0EwQkQsTUFBTTtBQUN0QixXQUFLSixRQUFMLENBQWM7QUFBRUMsZ0JBQVEsRUFBRSxLQUFaO0FBQW1CRyxrQkFBVSxFQUFFO0FBQS9CLE9BQWQ7QUFDRCxLQTVCa0I7O0FBQUEsOENBb0NBLE1BQU07QUFDdkIsV0FBS0osUUFBTCxDQUFjO0FBQ1pDLGdCQUFRLEVBQUUsS0FERTtBQUVaQyxXQUFHLEVBQUUsSUFGTztBQUdaQyxjQUFNLEVBQUU7QUFISSxPQUFkO0FBS0QsS0ExQ2tCOztBQUdqQixTQUFLRSxLQUFMLEdBQWE7QUFDWEosY0FBUSxFQUFFLEtBREM7QUFFWEMsU0FBRyxFQUFFLElBRk07QUFHWEMsWUFBTSxFQUFFLElBSEc7QUFJWEcsWUFBTSxFQUFFLElBSkc7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FB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QUFDO0FBSFosT0FLRTtBQUFHLFdBQUssRUFBQztBQUFULE1BTEYsWUFERixDQWhERixFQXlERSw2REFDRSxpREFBQyxxREFBRDtBQUNFLFFBQUUsRUFBQyxVQURMO0FBRUUscUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQVMsRUFBQztBQUhaLE9BS0U7QUFBRyxXQUFLLEVBQUM7QUFBVCxNQUxGLGFBREYsQ0F6REYsQ0FERixDQURGO0FBdUVEOztBQXpFNEMsQzs7Ozs7Ozs7Ozs7O0FDSC9DOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJmaWxlIjoicmVhY3RBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9yb3V0ZXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gXCIuL3JvdXRlci9PcmRlcnNcIjtcclxuaW1wb3J0IEN1c3RvbWVyIGZyb20gXCIuL3JvdXRlci9DdXN0b21lclwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL3JvdXRlci9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vcm91dGVyL1Byb2R1Y3RcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL0FkZFByb2R1Y3RcIjtcclxuaW1wb3J0IEVkaXRpbmcgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL0VkaXRpbmdcIjtcclxuaW1wb3J0IENyb3BwaW5nIGZyb20gXCIuL0Nyb3BwaW5nXCI7XHJcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9jb21wb25lbnQvb3JkZXIvT3JkZXJcIjtcclxuaW1wb3J0IENhdGVnb3J5RWRpdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0XCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdEFkZCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9Qcm9kdWN0QWRkXCI7XHJcbmltcG9ydCBNb2JpbGVTaWRlQmFyIGZyb20gXCIuL3JvdXRlci9Nb2JpbGVTaWRlQmFyXCI7XHJcblxyXG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL0NhdGVnb3J5TGlzdFwiO1xyXG5pbXBvcnQgVmlzaXRvciBmcm9tIFwiLi9jb21wb25lbnQvVmlzaXRvci9WaXNpdG9yXCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0Nyb3A6IGZhbHNlLFxyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIHVwbG9hZDogbnVsbCxcclxuICAgICAgaWRFZGl0OiBudWxsLFxyXG4gICAgICBtb2JpbGVWaWV3OiBmYWxzZSxcclxuICAgICAgc2hvd1NpZGViYXI6IHRydWUsXHJcbiAgICAgIHNob3d0b3BiYXI6IHRydWUsXHJcbiAgICAgIHNob3dFYXN5Q3JvcERpYWxvZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGVWaWV3U3RhdGUgPSB0aGlzLnVwZGF0ZVZpZXdTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50b2dnbGVTaWRlQmFyID0gdGhpcy50b2dnbGVTaWRlQmFyLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTaG93Q3JvcCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Nyb3A6IHRydWUsXHJcbiAgICAgIHNyYzogcGF5bG9hZC5zcmMsXHJcbiAgICAgIHVwbG9hZDogcGF5bG9hZC51cGxvYWQsXHJcbiAgICAgIHNob3d0b3BiYXI6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VDcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wOiBmYWxzZSwgc2hvd3RvcGJhcjogdHJ1ZSB9KTtcclxuICB9O1xyXG5cclxuICB0b2dnbGVTaWRlQmFyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dTaWRlYmFyOiAhdGhpcy5zdGF0ZS5zaG93U2lkZWJhcixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlY2FuY2VsdG9weCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy51cGRhdGVWaWV3U3RhdGUoKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVWaWV3U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVmlld1N0YXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLm1vYmlsZVZpZXcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTAyNCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb2JpbGVWaWV3OiB0cnVlLFxyXG4gICAgICAgIHNob3dTaWRlYmFyOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDEwMjQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9iaWxlVmlldzogZmFsc2UsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lckNsYXNzID0gXCJkLWZsZXhcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1vYmlsZVZpZXcpIGNvbnRhaW5lckNsYXNzID0gXCJjb250YWluZXJcIjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd3RvcGJhciAmJiAoXHJcbiAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLnNob3dTaWRlYmFyID8gbnVsbCA6IDxNb2JpbGVTaWRlQmFyIC8+fTwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dTaWRlYmFyID8gPFNpZGViYXIgLz4gOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgcmVuZGVyPXsocHJvcHMpID0+IDxEYXNoYm9hcmQgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvb3JkZXJzXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlcnMgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDdXN0b21lciB7Li4ucHJvcHN9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxQcm9kdWN0IHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvbmV3cHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IChcclxuICAgICAgICAgICAgICAgIDxBZGRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMuaGFuZGxlU2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5oYW5kbGVDbG9zZUNyb3B9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q2F0ZWdvcnlFZGl0IHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZXdvcmRlclwiIHJlbmRlcj17KHByb3BzKSA9PiA8T3JkZXIgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZWRpdFwiIHJlbmRlcj17KHByb3BzKSA9PiA8RWRpdGluZyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIHJlbmRlcj17KHByb3BzKSA9PiA8Q2F0ZWdvcnlMaXN0IHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY3JlYXRlcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxQcm9kdWN0QWRkIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi92aXNpdG9yXCIgcmVuZGVyPXsocHJvcHMpID0+IDxWaXNpdG9yIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgIDxDcm9wcGluZ1xyXG4gICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5zdGF0ZS5zaG93Q3JvcH1cclxuICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLnNyY31cclxuICAgICAgICAgICAgdXBsb2FkPXt0aGlzLnN0YXRlLnVwbG9hZH1cclxuICAgICAgICAgICAgY2FuY2VsdG9weD17dGhpcy5oYW5kbGVjYW5jZWx0b3B4fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IFwiLi9jcm9wLmNzc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BwaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgY3JvcDoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIGFzcGVjdDogMSAvIDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSkgPT4ge1xyXG4gICAgdGhpcy5pbWFnZVJlZiA9IGltYWdlO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENvbXBsZXRlID0gKGNyb3ApID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gKGNyb3ApID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcclxuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxyXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXHJcbiAgICAgICAgY3JvcCxcclxuICAgICAgICBcIm5ld0ZpbGUuanBlZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2IsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Nyb3BJbWFnZSA9IChlKSA9PiB7fTtcclxuICBjYW5jZWxMb2FkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgc2hvd0Nyb3BJbWFnZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUJhY2tBY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDcm9wSW1hZ2U6IGZhbHNlIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudXBsb2FkKHRoaXMuc3RhdGUuaW1hZ2VCbG9iLCB0aGlzLmNhbmNlbExvYWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVTaG93Q3JvcEltYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93Q3JvcEltYWdlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VUb3BYID0gKGUpID0+e1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmNhbmNlbExvYWQoKTsgLy9jYXV0aW9uIHRoaXMgaXMgbmV3XHJcbiAgICAgIHRoaXMucHJvcHMuY2FuY2VsdG9weCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjcm9wcGVkSW1hZ2VVcmwsIHNob3dDcm9wSW1hZ2UgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JvcCAmJiAhdGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JvcCBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2cgY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VUb3BYfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7c2hvd0Nyb3BJbWFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2tBY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgIFwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFJlYWN0Q3JvcFxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgY3JvcD17dGhpcy5zdGF0ZS5jcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Nyb3BwZWRJbWFnZVVybCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dDcm9wSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93Q3JvcCAmJiB0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtNVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+IFVwbG9hZGluZyBJbWFnZS4uLi5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGF0YVVSTHRvRmlsZShkYXRhVXJsLCBmaWxlTmFtZSkge1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkYXRhVXJsKTtcclxuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcclxuICByZXR1cm4gbmV3IEZpbGUoW2Jsb2JdLCBmaWxlTmFtZSwgeyB0eXBlOiAnaW1hZ2UvanBlZycgfSk7XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlzaXRvcigpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGFibGUsIHNldFRhYmxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkYXRhbmFtZSwgc2V0RGF0YW5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiYXBpL2FkbWluL3Rlc3QvdGVzdFwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNvdW50T2JqcyhhcnIpIHtcclxuICAgIC8vIFNvIHRoZSBvYmplY3QgZG9lc24ndCBpbmhlcml0IGZyb20gT2JqZWN0LnByb3RvdHlwZSBhbmQgYXZvaWRzIHByb3BlcnR5XHJcbiAgICAvLyBuYW1lIGNvbGxpc2lvbnNcclxuICAgIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgaWYgKG9ialtpdGVtXSkge1xyXG4gICAgICAgIG9ialtpdGVtXSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9ialtpdGVtXSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdE9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gXCJDb3VudHJ5XCIpIHtcclxuICAgICAgY29uc3QgY291bnRyeSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5kLkNvdW50cnk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjb3VudENvdW50cnkgPSBjb3VudE9ianMoY291bnRyeSk7XHJcbiAgICAgIHNldERhdGFuYW1lKFwiQ291bnRyeVwiKVxyXG4gICAgICBzZXRUYWJsZShjb3VudENvdW50cnkpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiU3RhdGVcIikge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5kLnN0YXRlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNzdGF0ZSA9IGNvdW50T2JqcyhzdGF0ZSk7XHJcbiAgICAgIHNldERhdGFuYW1lKFwiU3RhdGVcIilcclxuICAgICAgc2V0VGFibGUoY3N0YXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBcIkNpdHlcIikge1xyXG4gICAgICBjb25zdCBjaXR5ID0gZGF0YS5tYXAoKGluZCkgPT4gaW5kLmNpdHkpO1xyXG4gICAgICBjb25zdCBjY2l0eSA9IGNvdW50T2JqcyhjaXR5KTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJDaXR5XCIpXHJcbiAgICAgIHNldFRhYmxlKGNjaXR5KTtcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBcIklQXCIpIHtcclxuICAgICAgY29uc3QgaXBzID0gZGF0YS5tYXAoZGF0PT5kYXQuaXApXHJcbiAgICAgIGNvbnN0IGlwZCA9IGNvdW50T2JqcyhpcHMpO1xyXG4gICAgICBzZXREYXRhbmFtZShcIklQXCIpXHJcbiAgICAgIHNldFRhYmxlKGlwZClcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoZGF0YSkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbmQuc3RhdGU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IENvdW50cnkgPSBkYXRhLm1hcCgoaW5kKSA9PiB7XHJcbiAgICAgIHJldHVybiBpbmQuQ291bnRyeTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdmlzaXQgPSBjb3VudE9ianMoc3RhdGUpO1xyXG4gICAgY29uc3Qgc2luZ2xlZGF0YSA9IGRhdGFbMF07XHJcbiAgICBjb25zdCBuYW1lID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2luZ2xlZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5hbWVcIiwgbmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyh0YWJsZSk7XHJcblxyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICB7ZGF0YSAmJiA8aDM+VG90YWwgVmlzaXRvciA6IHtkYXRhLmxlbmd0aH08L2gzPn1cclxuXHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17c2VsZWN0T25DaGFuZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiAgZGVmYXVsdFZhbHVlPlBsZWFzZSBzZWxlY3QgYW4gT3B0aW9uPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ291bnRyeVwiPkNvdW50cnk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdGF0ZVwiPlN0YXRlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2l0eVwiPkNpdHk8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJUFwiPklQPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJyLz5cclxuXHJcbiAgICAgICAge3RhYmxlICYmIGRhdGFuYW1lICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHNpemU9XCJzbVwiICA+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+e2RhdGFuYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5Db3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YWJsZSkubWFwKCh4LCBpKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKCA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3h9PC90ZD48dGQ+e3RhYmxlW3hdfTwvdGQ+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj4pXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG4gIH07XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9jdXN0b21lcmApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSByZW1vdmVcIiwgaWQpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZSh0aGlzLnN0YXRlLmFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUVkaXQoaWQpIHtcclxuICAgIHRoaXMucHJvcHMuZWRpdChpZCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJpbmdcIik7XHJcbiAgICB0aGlzLnJlZnMuZW1haWwudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiAvPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVnaXN0ZXJlZCBPbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guZmlyc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5sYXN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJtb2RhbFwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIENvbmZpcm0gRGVsZXRlIE9yZGVyIHt0aGlzLnByb3BzLmlkfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcIm1vZGFsb3JkZXJcIiArIHRoaXMucHJvcHMubmFtZSArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcclxuICAgICAgICAgIFwibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19Pnt0aGlzLnByb3BzLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBPcmRlciBTdGF0dXMgV2lsbCBDaGFuZ2UgdG8ge3RoaXMucHJvcHMubmFtZX0/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTW9kYWxPcmRlciBmcm9tIFwiLi9Nb2RhbE9yZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBudWxsLCBzdGF0dXM6IG51bGwgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHN0YXR1czogZGF0YS5zdGF0dXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUEVORElORyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBFTkRJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNvbXBsZXRlZCA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiQ09NUExFVEVEXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVEZWxpdmVyaW5nID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiREVMSVZFUklOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2Nlc3NpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJQUk9DRVNTSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvb3JkZXJzXCI+T3JkZXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgVmlldyBPcmRlclxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMyBtdC0zXCI+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pk9yZGVyIExpc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXNtIHRhYmxlLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD4jPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5vcmRlcmRldGFpbHMubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17eC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIHgucHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5xdHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YS50b3RhbH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGF0YSl9ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+Q3VzdG9tZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFkZHJlc3MgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENpdHkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNpdHl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5zdGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBvc3Rjb2RlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDb3VudHJ5IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQaG9uZSBOdW1iZXIgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnBob25lTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1Pk9yZGVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgT3JkZXIgRGF0ZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgUGF5bWVudCBNZXRob2QgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXltZW50TWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBTdGF0dXMgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57c3RhdHVzICYmIHN0YXR1c308L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFVwZGF0ZWQgQXQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS51cGRhdGVfYXR9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+UGF5UGFsIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQW1vdW50IDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEucGF5cGFsLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ3VycmVuY3kgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgZGF0YS5wYXlwYWwuc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0zXCI+XHJcbiAgICAgICAgICAgICAgPGg1PkFjdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQRU5ESU5HKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUEVORElOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUEVORElOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVBFTkRJTkd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBFTkRJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQcm9jZXNzaW5nKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyUFJPQ0VTU0lOR1wiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPQ0VTU0lOR1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vZGFsT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlPXt0aGlzLmhhbmRsZVByb2Nlc3Npbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIlBST0NFU1NJTkdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURlbGl2ZXJpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJERUxJVkVSSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBERUxJVkVSSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlRGVsaXZlcmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiREVMSVZFUklOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDb21wbGV0ZWQoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckNPTVBMRVRFRFwiICsgZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ09NUExFVEVEXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlQ29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJDT01QTEVURURcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIFJvdywgQ29sLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0ZU9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgc3RhdHVzRmlsdGVyOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL29yZGVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSByZXNcIiwgZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdERhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHsgbGltaXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCByYW5nZSA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIGxpbWl0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKGRhdGEsIGxpbWl0LCAwKSxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZpbHRlckl0ZW1zID0gKGFyciwgcXVlcnkpID0+IHtcclxuICAgIHJldHVybiBhcnIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICB9O1xyXG5cclxuICBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF0ZSgpO1xyXG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aCArIDF9LSR7eWVhcn1gO1xyXG5cclxuICAgIC8vIGxldCB0b0Zvcm1hdCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgLy8gbGV0IGZvcm1hdERhdGUgPVxyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXREYXRlKCkgK1xyXG4gICAgLy8gICBcIi1cIih0b0Zvcm1hdC5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgLy8gICB0b0Zvcm1hdC5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcixcclxuICAgICAgZnJvbURhdGUsXHJcbiAgICAgIHRvRGF0ZSxcclxuICAgICAgb3JkZXJJZCxcclxuICAgICAgZ3JlYXRlcixcclxuICAgICAgbGVzcyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKGVtYWlsKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihcclxuICAgICAgICAoeCkgPT4geC51c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzRmlsdGVyKSB7XHJcbiAgICAgIGlmIChzdGF0dXNGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnN0YXR1cyA9PT0gc3RhdHVzRmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmcm9tRGF0ZSAmJiB0b0RhdGUpIHtcclxuICAgICAgaWYgKG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgPT09IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgbGV0IGRhdGVTYW1lID0gbmV3IERhdGUodG9EYXRlKTtcclxuICAgICAgICBkYXRlU2FtZS5zZXREYXRlKGRhdGVTYW1lLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA+PVxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGZyb21EYXRlKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgbmV3IERhdGUoaXRlbS5jcmVhdGVkQXQpLmdldFRpbWUoKSA8PSBkYXRlU2FtZS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IG5ldyBEYXRlKHRvRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkID09PSBwYXJzZUludChvcmRlcklkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdyZWF0ZXIpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnRvdGFsID4gcGFyc2VGbG9hdChncmVhdGVyKSk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPCBwYXJzZUZsb2F0KGxlc3MpKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vb3JkZXJzLyR7dmFsdWV9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGxldCB7IGRhdGEsIGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBsZXQgZGVsZXRlZCA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRlbGV0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuc3RhdHVzLnZhbHVlID0gXCJOT05FXCI7XHJcbiAgICB0aGlzLnJlZnMub3JkZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmdyZWF0ZXIudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWZzLmxlc3MudmFsdWUgPSBcIlwiO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIGZyb21EYXRlOiBudWxsLFxyXG4gICAgICB0b0RhdGU6IG51bGwsXHJcbiAgICAgIG9yZGVySWQ6IG51bGwsXHJcbiAgICAgIGdyZWF0ZXI6IG51bGwsXHJcbiAgICAgIGxlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHJhbmdlLCBhY3RpdmUsIHBhZ2luYXRpb24sIHN0YXR1c0ZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1c0ZpbHRlcik7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzRmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVORElOR1wiPlBFTkRJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERUxJVkVSSU5HXCI+REVMSVZFUklORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBST0NFU1NJTkdcIj5QUk9DRVNTSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09NUExFVEVEXCI+Q09NUExFVEVEPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnJvbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RzU3RhcnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZyb21EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXt0aGlzLnN0YXRlLnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNFbmRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwiQ2xpY2sgdG8gc2VsZWN0IGEgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRvRGF0ZTogZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JkZXIgSWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgb3JkZXJJZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgR3JlYXRlciBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJncmVhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZ3JlYXRlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+VG90YWwgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbGVzczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntkYXRhLmxlbmd0aH0gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBFbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlIENyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge3BhZ2luYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5tYXAoKHgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC51c2VyLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuZm9ybWF0RGF0ZSh4LmNyZWF0ZWRBdCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL3ZpZXdvcmRlclwiLCBzdGF0ZTogeyBkYXRhOiB4IH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuLXNxdWFyZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgIFwifVZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGV9IGlkPXt4LmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5jb25zdCBjcmVhdGVJbWFnZSA9ICh1cmwpID0+XHJcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoaW1hZ2UpKTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY3Jvc3NPcmlnaW5cIiwgXCJhbm9ueW1vdXNcIik7IC8vIG5lZWRlZCB0byBhdm9pZCBjcm9zcy1vcmlnaW4gaXNzdWVzIG9uIENvZGVTYW5kYm94XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgfSk7XHJcblxyXG5mdW5jdGlvbiBnZXRSYWRpYW5BbmdsZShkZWdyZWVWYWx1ZSkge1xyXG4gIHJldHVybiAoZGVncmVlVmFsdWUgKiBNYXRoLlBJKSAvIDE4MDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gd2FzIGFkYXB0ZWQgZnJvbSB0aGUgb25lIGluIHRoZSBSZWFkTWUgb2YgaHR0cHM6Ly9naXRodWIuY29tL0RvbWluaWNUb2JpYXMvcmVhY3QtaW1hZ2UtY3JvcFxyXG4gKiBAcGFyYW0ge0ZpbGV9IGltYWdlIC0gSW1hZ2UgRmlsZSB1cmxcclxuICogQHBhcmFtIHtPYmplY3R9IHBpeGVsQ3JvcCAtIHBpeGVsQ3JvcCBPYmplY3QgcHJvdmlkZWQgYnkgcmVhY3QtZWFzeS1jcm9wXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvbiAtIG9wdGlvbmFsIHJvdGF0aW9uIHBhcmFtZXRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQ2FudmFzQ3JvcChpbWFnZVNyYywgcGl4ZWxDcm9wLCByb3RhdGlvbiA9IDApIHtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IGNyZWF0ZUltYWdlKGltYWdlU3JjKTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gIGNvbnN0IG1heFNpemUgPSBNYXRoLm1heChpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICBjb25zdCBzYWZlQXJlYSA9IDIgKiAoKG1heFNpemUgLyAyKSAqIE1hdGguc3FydCgyKSk7XHJcblxyXG4gIC8vIHNldCBlYWNoIGRpbWVuc2lvbnMgdG8gZG91YmxlIGxhcmdlc3QgZGltZW5zaW9uIHRvIGFsbG93IGZvciBhIHNhZmUgYXJlYSBmb3IgdGhlXHJcbiAgLy8gaW1hZ2UgdG8gcm90YXRlIGluIHdpdGhvdXQgYmVpbmcgY2xpcHBlZCBieSBjYW52YXMgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHNhZmVBcmVhO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSBzYWZlQXJlYTtcclxuXHJcbiAgLy8gdHJhbnNsYXRlIGNhbnZhcyBjb250ZXh0IHRvIGEgY2VudHJhbCBsb2NhdGlvbiBvbiBpbWFnZSB0byBhbGxvdyByb3RhdGluZyBhcm91bmQgdGhlIGNlbnRlci5cclxuICBjdHgudHJhbnNsYXRlKHNhZmVBcmVhIC8gMiwgc2FmZUFyZWEgLyAyKTtcclxuICBjdHgucm90YXRlKGdldFJhZGlhbkFuZ2xlKHJvdGF0aW9uKSk7XHJcbiAgY3R4LnRyYW5zbGF0ZSgtc2FmZUFyZWEgLyAyLCAtc2FmZUFyZWEgLyAyKTtcclxuXHJcbiAgLy8gZHJhdyByb3RhdGVkIGltYWdlIGFuZCBzdG9yZSBkYXRhLlxyXG4gIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICBpbWFnZSxcclxuICAgIHNhZmVBcmVhIC8gMiAtIGltYWdlLndpZHRoICogMC41LFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2UuaGVpZ2h0ICogMC41XHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzYWZlQXJlYSwgc2FmZUFyZWEpO1xyXG5cclxuICAvLyBzZXQgY2FudmFzIHdpZHRoIHRvIGZpbmFsIGRlc2lyZWQgY3JvcCBzaXplIC0gdGhpcyB3aWxsIGNsZWFyIGV4aXN0aW5nIGNvbnRleHRcclxuICBjYW52YXMud2lkdGggPSBwaXhlbENyb3Aud2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHBpeGVsQ3JvcC5oZWlnaHQ7XHJcblxyXG4gIC8vIHBhc3RlIGdlbmVyYXRlZCByb3RhdGUgaW1hZ2Ugd2l0aCBjb3JyZWN0IG9mZnNldHMgZm9yIHgseSBjcm9wIHZhbHVlcy5cclxuICBjdHgucHV0SW1hZ2VEYXRhKFxyXG4gICAgZGF0YSxcclxuICAgIE1hdGgucm91bmQoMCAtIHNhZmVBcmVhIC8gMiArIGltYWdlLndpZHRoICogMC41IC0gcGl4ZWxDcm9wLngpLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2UuaGVpZ2h0ICogMC41IC0gcGl4ZWxDcm9wLnkpXHJcbiAgKTtcclxuXHJcbiAgLy8gQXMgQmFzZTY0IHN0cmluZ1xyXG4gIC8vIHJldHVybiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7XHJcblxyXG4gIC8vIEFzIGEgYmxvYlxyXG4gIHJldHVybiBhd2FpdCBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gICAgcmV0dXJuIGxvYWQ7XHJcbiAgfSk7XHJcblxyXG4gIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gIC8vICAgcGljYS50b0Jsb2IoY2FudmFzLCBcImltYWdlL2pwZWdcIiwgMC45KS50aGVuKChibG9iKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGxvYWQgPSB7IGJsb2I6IGJsb2IsIHVybDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSB9O1xyXG4gIC8vICAgICByZXNvbHZlKGxvYWQpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVW5kb1JvdW5kZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5TGlzdChwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzdWJjYXRlZ29yeSwgc2V0c3ViY2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YnR3bywgc2V0c3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxjYXQsIHNldGRlbGNhdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3ViLCBzZXRkZWxzdWJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbHN1YnR3bywgc2V0ZGVsc3VidHdvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3QvYWxsY2F0ZWdvcmllc1wiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2VsZWN0Q2F0ZWdvcnkocGFyYW1zKSB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0c3VidHdvKG51bGwpO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YmNhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsY2F0KHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YmNhdGVnb3J5KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0RGVsZXRlSXRlbSA9ICgpID0+IHtcclxuICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgIHNldGRlbHN1YihudWxsKTtcclxuICAgIHNldGRlbHN1YnR3byhudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJDYXRlZ29yeVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICByZXNldERlbGV0ZUl0ZW0oKTtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGFyZ2V0fS9zdWJ0d29jYXRlZ29yaWVzYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgIHNldGRlbHN1YihwYXJzZUludCh0YXJnZXQpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRzdWJ0d28ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YnR3b0NhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgc2V0ZGVsc3VidHdvKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWxzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vY2F0ZWdvcmllcy8ke2RlbGNhdH1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3Y2F0ID0gZGF0YS5maWx0ZXIoKHMsIGkpID0+IGRlbGNhdCAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdjYXQpO1xyXG4gICAgc2V0RGF0YShuZXdjYXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVN1YkNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vc3ViY2F0ZWdvcmllcy8ke2RlbHN1Yn1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgY29uc3QgbmV3c3ViID0gc3ViY2F0ZWdvcnkuZmlsdGVyKChzLCBpKSA9PiBkZWxzdWIgIT09IHMuaWQpO1xyXG4gICAgY29uc29sZS5sb2cobmV3c3ViKTtcclxuICAgIHNldHN1YmNhdGVnb3J5KG5ld3N1Yik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3VidHdvQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJ0d29jYXRlZ29yaWVzLyR7ZGVsc3VidHdvfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWJ0d28gPSBzdWJ0d28uZmlsdGVyKChzLCBpKSA9PiBkZWxzdWJ0d28gIT09IHMuaWQpO1xyXG4gICAgc2V0c3VidHdvKG5ld3N1YnR3byk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPHA+dGhpcyBpcyBjYXRlZ29yeSBsaXN0PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDYXRlZ29yeX1cclxuICAgICAgICAgICAgc2l6ZT1cIjIwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiMTUwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAge1wiID5cIn1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGNhdCA9PT0gbnVsbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgb25DbGljaz17ZGVsZXRlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlbGV0ZSBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJDYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YmNhdGVnb3J5ICYmXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnkubWFwKChzdWIsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lfSB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3ViID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+U3ViVHdvIENhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzdWJ0d29DYXRlZ29yeVNlbGVjdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1YnR3byAmJlxyXG4gICAgICAgICAgICAgIHN1YnR3by5tYXAoKHN1YnQsIGlzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXN9IHZhbHVlPXtzdWJ0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3VidC5zdWJ0d29jYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsc3VidHdvID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVTdWJ0d29DYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIFN1YnR3byBDYXRlZ29yeVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtZWFzeS1jcm9wXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgU2xpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1wiO1xyXG5pbXBvcnQgQ2FudmFzQ3JvcCBmcm9tIFwiLi9DYW52YXNDcm9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcm9wcGVydjIocHJvcHMpIHtcclxuICBjb25zdCBbY3JvcCwgc2V0Q3JvcF0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgY29uc3QgW3JvdGF0aW9uLCBzZXRSb3RhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbY3JvcHBlZEltYWdlLCBzZXRDcm9wcGVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Nyb3BwZWRBcmVhUGl4ZWxzLCBzZXRDcm9wcGVkQXJlYVBpeGVsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25Dcm9wQ29tcGxldGUgPSB1c2VDYWxsYmFjaygoY3JvcHBlZEFyZWEsIGNyb3BwZWRBcmVhUGl4ZWxzKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhjcm9wcGVkQXJlYVBpeGVscyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBmdW5jdGlvbiBDbG9zZURpYWxvZygpIHtcclxuICAgIHByb3BzLmNsb3NlRGlhbG9nKCk7XHJcbiAgICBjbGVhclN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93Q3JvcHBlZEltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlID0gYXdhaXQgQ2FudmFzQ3JvcChcclxuICAgICAgICBwcm9wcy5wYXlsb2FkLnNyYyxcclxuICAgICAgICBjcm9wcGVkQXJlYVBpeGVscyxcclxuICAgICAgICByb3RhdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVlXCIsIHsgY3JvcHBlZEltYWdlIH0pO1xyXG4gICAgICBzZXRDcm9wcGVkSW1hZ2UoY3JvcHBlZEltYWdlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBVcGxvYWRJbWFnZSA9ICgpID0+IHtcclxuICAgIHByb3BzLnBheWxvYWQudXBsb2FkKGNyb3BwZWRJbWFnZS5ibG9iLCBjbGVhclN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGVhclN0YXRlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3JvcHBlZEltYWdlKG51bGwpO1xyXG4gICAgc2V0Wm9vbSgxKTtcclxuICAgIHNldENyb3AoeyB4OiAwLCB5OiAwIH0pO1xyXG4gICAgc2V0Um90YXRpb24oMCk7XHJcbiAgICBzZXRDcm9wcGVkQXJlYVBpeGVscyhudWxsKTtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkZWRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjcm9wcGVkSW1hZ2UgJiYgcHJvcHMuc2hvd0RpYWxvZyA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Q2xvc2VEaWFsb2d9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb250YWluZXIgIFwiIHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBoZWlnaHQ6IFwiMjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9wcy5zaG93RGlhbG9nICYmIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlhbG9nU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckJ1dHRvblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0Nyb3BwZWRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJDcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjcm9wcGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDcm9wcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMucGF5bG9hZC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgem9vbT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzcGVjdD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENoYW5nZT17c2V0Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ3JvcENvbXBsZXRlPXtvbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17c2V0Wm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c2xpZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5ab29tPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17em9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgem9vbSkgPT4gc2V0Wm9vbSh6b29tKX1cclxuICAgICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+Um90YXRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZGlhbG9nU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMCwgMCwgMC40KVwiLFxyXG4gIHpJbmRleDogXCI1XCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgd2lkdGg6IFwiMTAwdndcIixcclxufTtcclxuY29uc3QgY29udGFpbmVyQ3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwYWRkaW5nOiBcIjEwcHhcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiOTAlXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgd2lkdGg6IFwiNjAlXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJCdXR0b25TdHlsZSA9IHtcclxuICAvLyBib3JkZXI6IFwiMXB4IHNvbGlkICNmNWY1ZjVcIixcclxuICBoZWlnaHQ6IFwiMTAlXCIsXHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbmNvbnN0IGNyb3BwZWRJbWFnZVN0eWxlID0ge1xyXG4gIG1heFdpZHRoOiBcIjUwdndcIixcclxuXHJcbiAgLy8gcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxufTtcclxuIiwiaW1wb3J0IHsgRmFjZVNoYXJwLCBUcmVuZGluZ1VwU2hhcnAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUNhdGVnb3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIGRhdGFsaXN0OiBbXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgZGF0YWxpc3Q6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRDYXRlZ29yeSA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgYWRkY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbmQoKGRhdGFzLCBpZHgpID0+IGluZGV4ID09PSBpZHgpO1xyXG4gICAgY29uc29sZS5sb2coXCJrZW5hIGNhcmlcIiwgYWRkY2F0KTtcclxuXHJcbiAgICBpZiAoYWRkY2F0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbmV3ZGF0YWxpc3QgPSB0aGlzLnN0YXRlLmRhdGFsaXN0LmZpbHRlcihcclxuICAgICAgICAoZGF0YWxpc3QsIGl4KSA9PiBhZGRjYXQuY2F0ZWdvcnluYW1lICE9PSBkYXRhbGlzdC5uYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGFsaXN0OiBuZXdkYXRhbGlzdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHBvc3QsIGlkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gdmFsdWUgaWYgc2VsZWN0XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGRpc2FibGU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeWlkOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5bmFtZTogXCJcIixcclxuICAgICAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeSh0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gIH07XHJcbiAgaGFuZGxlQWRkU3ViQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYWRkc3ViID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoY2F0LCBjYXRpKSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gY2F0aSkgcmV0dXJuIGNhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiLCBkaXNhYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YlwiLCBhZGRzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZHN1YiB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRzdWJ0d29jYXRlZ29yeSA9IChpLCBzKSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbml0IGFkZHN1YjJcIiwgdGhpcy5zdGF0ZS5jYXRlZ29yaWVzKTtcclxuICAgIGNvbnN0IGFkZHN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAocyAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IFt7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9XSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkIHN1YiB0d29cIiwgYWRkc3VidHdvKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBhZGRzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViID0gKGJ1dGNhdCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZG1vcmVzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRtb3JlLCBhaWR4KSA9PiB7XHJcbiAgICAgIGlmIChidXRjYXQgIT09IGFpZHgpIHJldHVybiBhZGRtb3JlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZG1vcmUsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IFtcclxuICAgICAgICAgIC4uLmFkZG1vcmUuc3ViY2F0ZWdvcnksXHJcbiAgICAgICAgICB7IHN1YmNhdGVnb3J5aWQ6IFwiXCIsIHN1YmNhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkbW9yZXN1YlwiLCBhZGRtb3Jlc3ViKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiBhZGRtb3Jlc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3ViKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGRNb3JlU3ViVHdvID0gKGFkZGNhdCwgYnV0c3ViLCBzdWJ0d29pbmR4KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmVzdWIsIGFtc2kpID0+IHtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gYW1zaSkgcmV0dXJuIGFkZG1vcmVzdWI7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZXN1YixcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkbW9yZXN1Yi5zdWJjYXRlZ29yeS5tYXAoKHN1YmNhdGluaXQsIHNjaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoYnV0c3ViICE9PSBzY2lkeCkgcmV0dXJuIHN1YmNhdGluaXQ7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdWJjYXRpbml0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW1xyXG4gICAgICAgICAgICAgIC4uLnN1YmNhdGluaXQuc3VidHdvY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgeyBzdWJ0d29jYXRlZ29yeWlkOiBcIlwiLCBzdWJ0d29jYXRlZ29yeW5hbWU6IFwiXCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGFkZG1vcmVzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZG1vcmVzdWJ0d28sXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkoYWRkbW9yZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoaW5kZXgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGNvbnN0IGVuYWJsZSA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKHgsIGkpID0+IHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLngsIGRpc2FibGU6IGZhbHNlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcmllczogZW5hYmxlLFxyXG4gICAgICAgIGRhdGFsaXN0OiB0aGlzLnN0YXRlLmRhdGEsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlY2F0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmZpbHRlcigoYSwgaSkgPT4gaW5kZXggIT09IGkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IHJlbW92ZWNhdCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVjYXQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5ID0gKGNhdGksIHN1YmkpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgobW9kLCBtb2RpbmR4KSA9PiB7XHJcbiAgICAgIGlmIChjYXRpICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICBpZiAoY2F0aSA9PT0gMCAmJiBzdWJpID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ubW9kLCBzdWJjYXRlZ29yeTogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubW9kLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBtb2Quc3ViY2F0ZWdvcnkuZmlsdGVyKChzdWIsIGlzdWIpID0+IHN1YmkgIT09IGlzdWIpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IHJlbW92ZWQgfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5ID0gKHgsIHksIHopID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZW1vdmVzdWJ0d28gPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChhZGRzdWJ0d29jYXQsIGl0d28pID0+IHtcclxuICAgICAgaWYgKHggIT09IGl0d28pIHJldHVybiBhZGRzdWJ0d29jYXQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkc3VidHdvY2F0LFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRzdWJ0d29jYXQuc3ViY2F0ZWdvcnkubWFwKChhZHN0LCBhZHN0aSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHkgIT09IGFkc3RpKSByZXR1cm4gYWRzdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmFkc3QsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBhZHN0LnN1YnR3b2NhdGVnb3J5LmZpbHRlcigoZmlsLCBpbmQpID0+IHogIT09IGluZCksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3Zlc3VidHdvIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5yZW1vdmVjYXRlZ29yeShyZW1vdmVzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkeCkgPT4gZS50YXJnZXQudmFsdWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpZHgpIHJldHVybiBwb3N0O1xyXG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGRhdGEubmFtZSwgY2F0ZWdvcnlpZDogZGF0YS5pZCB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vdGhpcyByZXR1cm4gbmV3IHZhbHVlIHdpdGhvdXQgc2VsZWN0XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgY2F0ZWdvcnluYW1lOiBlLnRhcmdldC52YWx1ZSwgY2F0ZWdvcnlpZDogXCJcIiB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3IGRhdGEgOiBcIiwgbmV3RGF0YSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbmV3RGF0YSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJJbnB1dCA9IChjYXRpZHgsIHN1YmlkeCwgY2F0ZWdvcnluYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgc3ViY2F0XCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IGNhdFwiLCBjYXRlZ29yeW5hbWUpO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgY2F0ZWdvcmlcIiwgc3ViZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kaWZpZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGlkeCAhPT0gbW9kaW5keCkgcmV0dXJuIG1vZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXN1YikgPT4ge1xyXG4gICAgICAgICAgaWYgKHN1YmlkeCAhPT0gaXN1YikgcmV0dXJuIHN1YjtcclxuXHJcbiAgICAgICAgICBpZiAoc3ViZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IHN1YmRhdGEuc3ViY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IHN1YmRhdGEuaWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN1YixcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIm1vZGlmaWVkIDpcIiwgbW9kaWZpZWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IG1vZGlmaWVkLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG1vZGlmaWVkKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTdWJUd29JbnB1dCA9IChcclxuICAgIGluY2F0aW5keCxcclxuICAgIGluY2F0c3ViaWR4LFxyXG4gICAgaW5jYXRzdWJ0d29pZHgsXHJcbiAgICBjYXRlZ29yeW5hbWUsXHJcbiAgICBzdWJjYXRlZ29yeW5hbWVcclxuICApID0+IChldmVudCkgPT4ge1xyXG4gICAgbGV0IHN1YnR3b2RhdGEgPSBudWxsO1xyXG4gICAgbGV0IHN1YmRhdGEgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWQpID0+IGNhdGVnb3J5bmFtZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGlmIChjYXRlZ29yeSkge1xyXG4gICAgICBzdWJkYXRhID0gY2F0ZWdvcnkuc3ViY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3ViLCBpeCkgPT4gc3ViLnN1YmNhdGVnb3J5bmFtZSA9PT0gc3ViY2F0ZWdvcnluYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgIHN1YnR3b2RhdGEgPSBzdWJkYXRhLlN1YnR3b2NhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YnR3bywgc3RpKSA9PiBzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lID09PSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdWJ0d29uZXcgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXRzdWJ0d28sIGNhdHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICBpZiAoaW5jYXRpbmR4ICE9PSBjYXRzdWJ0d29pZHgpIHJldHVybiBjYXRzdWJ0d287XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uY2F0c3VidHdvLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBjYXRzdWJ0d28uc3ViY2F0ZWdvcnkubWFwKChjYXRzdWIsIGNhdHN1YmlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluY2F0c3ViaWR4ICE9PSBjYXRzdWJpZHgpIHJldHVybiBjYXRzdWI7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5jYXRzdWIsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBjYXRzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWJ0d28sIHN1YnR3b2lkeCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpbmNhdHN1YnR3b2lkeCAhPT0gc3VidHdvaWR4KSByZXR1cm4gc3VidHdvO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoc3VidHdvZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogc3VidHdvZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnN1YnR3byxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnluYW1lOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1YnR3b25ldyBjYXQgOlwiLCBzdWJ0d29uZXcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IHN1YnR3b25ldyxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShzdWJ0d29uZXcpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNT57YENhdGVnb3JpICMke2luZGV4ICsgMX0gLSAke2RhdGEuY2F0ZWdvcnluYW1lfWB9PC9oNT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGxpc3Q9e2BkYXRhbGlzdCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkYXRhLnN1YmNhdGVnb3J5IHx8IGRhdGEuZGlzYWJsZSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0KGluZGV4KX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YENhdGVnb3J5ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGRhdGFsaXN0IGlkPXtgZGF0YWxpc3Qke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFsaXN0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGFsaXN0Lm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICB7IWRhdGEuZGlzYWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkQ2F0ZWdvcnkoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tYmxvY2sgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YS5zdWJjYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICBkYXRhLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBzdWJpZHgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzdWJpZHh9PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWIuc3VidHdvY2F0ZWdvcnkgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtzdWIuc3ViY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU3ViIENhdGVnb3J5IyR7c3ViaWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YklucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7ZGF0YS5jYXRlZ29yeWlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGJpfSB2YWx1ZT17ZGJzLnN1YmNhdGVnb3J5bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YkNhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWIoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3N1Yi5zdWJ0d29jYXRlZ29yeSA/IChcclxuICAgICAgICAgICAgICAgICAgICBzdWIuc3VidHdvY2F0ZWdvcnkubWFwKChzdWIyLCBpbmR0d28pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmR0d299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2BTdWIgMm5kIENhdGVnb3J5ICR7c3ViMi5zdWJ0d29jYXRlZ29yeW5hbWV9ICMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gU3ViIENhdGVnb3J5ICR7c3ViLnN1YmNhdGVnb3J5bmFtZX0jJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IG9mIENhdGVnb3J5ICR7ZGF0YS5jYXRlZ29yeW5hbWV9ICMke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e2Ake2RhdGEuY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeWlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgVHdvIENhdGVnb3J5IyR7aW5kdHdvICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN1YlR3b0lucHV0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNhdGVnb3J5bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJjYXRlZ29yeW5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGF0YWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEubWFwKChkYiwgZGJpeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRiLmlkID09PSBkYXRhLmNhdGVnb3J5aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRiLnN1YmNhdGVnb3J5Lm1hcCgoZGJzLCBkYmkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGJzLmlkID09PSBzdWIuc3ViY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRicy5TdWJ0d29jYXRlZ29yeS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdWJ0d28sIHNkYmkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NkYml9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VidHdvLnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVN1YlR3b0NhdGVnb3J5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgYnRuLXNtIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZE1vcmVTdWJUd28oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgTW9yZSBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzdWIuc3ViY2F0ZWdvcnluYW1lICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRzdWJ0d29jYXRlZ29yeShpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgVHdvIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFN1YkNhdGVnb3J5KGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBTdWIgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGV0YWlsczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRldGFpbG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkYXRhZGVzYzogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2RldGFpbHNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGcm9tIERldGFpbHM6IFwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kZXRhaWxzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUuZGV0YWlscy5maWx0ZXIoKGRhdGEsIGluZGV4KSA9PiB2YWx1ZSAhPT0gaW5kZXgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5yZW1vdmVkZXRhaWwocmVtb3ZlKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEZXRhaWxOYW1lID0gKGlkKSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld2RldGFpbHMgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGV0YWlsbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxzLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLm5ld2RldGFpbHMobmV3ZGV0YWlscylcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlRGF0YURlc2MgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlsZGF0YWRlc2MgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkZXRhaWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpZCAhPT0gaW5kZXgpIHJldHVybiBkZXRhaWw7XHJcbiAgICAgIHJldHVybiB7IC4uLmRldGFpbCwgZGF0YWRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogbmV3ZGV0YWlsZGF0YWRlc2MsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxkYXRhZGVzYylcclxuICAgICk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRldGFpbHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIE5hbWUgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEZXRhaWxOYW1lKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjE1XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5kYXRhZGVzY31cclxuICAgICAgICAgICAgICAgIGxpc3Q9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YERldGFpbHMgIyR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURhdGFEZXNjKGluZGV4KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5ICBwLTIgbXQtMiBtYi0yIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhICYmXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtpdGVtLmRldGFpbG5hbWV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImRlc2NcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGF0YWRlc2N9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGF0YWxpc3Q+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbWItMyBtdC0zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgTW9yZSBEZXRhaWxcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBsb2FkSW1hZ2UgZnJvbSBcImJsdWVpbXAtbG9hZC1pbWFnZS9qc1wiO1xyXG5pbXBvcnQgQ3JvcHBlcnYyIGZyb20gXCIuL0Nyb3BwZXJ2MlwiO1xyXG5jb25zdCBwaWNhID0gcmVxdWlyZShcInBpY2FcIikoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGljdHVyZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGltYWdlaWQ6IFwiXCIsXHJcbiAgICAgICAgICBpbWFnZW5hbWU6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgdGFyZ2V0aW1hZ2U6IG51bGwsXHJcbiAgICAgIHNob3dCbGFja1NjcmVlbjogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIHNob3dFYXN5Q3JvcDogZmFsc2UsXHJcbiAgICAgIHBheWxvYWQ6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbnB1dEZpbGUgPSBbXTtcclxuXHJcbiAgICB0aGlzLmZpbGVJbnB1dCA9IChpKSA9PiAoZSkgPT4ge1xyXG4gICAgICB0aGlzLmlucHV0RmlsZVtpXSA9IGU7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW1hZ2VBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGljdHVyZTogdGhpcy5zdGF0ZS5waWN0dXJlLmNvbmNhdChbeyBpbWFnZWlkOiBcIlwiLCBpbWFnZW5hbWU6IFwiXCIgfV0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoaSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucGljdHVyZS5sZW5ndGggPCAyKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5maWxlSW5wdXQpIHRoaXMuaW5wdXRGaWxlW2ldLnZhbHVlID0gXCJcIjtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKHMsIGZpKSA9PiBpICE9PSBmaSk7XHJcbiAgICBjb25zdCBpbWFnZWRlbCA9IHRoaXMuc3RhdGUucGljdHVyZS5maWx0ZXIoKGltYWdlLCBpZHgpID0+IGkgPT09IGlkeCk7XHJcbiAgICBjb25zdCBwaWN0dXJldXAgPSBpbWFnZWRlbC5maW5kKCh4KSA9PiB4LmltYWdlaWQpO1xyXG4gICAgaWYgKHR5cGVvZiBwaWN0dXJldXAgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiRGVsZXRpbmcgSW1hZ2VcIiB9KTtcclxuICAgICAgQXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cGljdHVyZXVwLmltYWdlaWR9L2ltYWdlYCxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgICAgIHsgcGljdHVyZTogcmVtb3ZlLCBtZXNzYWdlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlcGljdHVyZShyZW1vdmUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSk7XHJcbiAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyBOb3QgR29vZCBpIGNhbiBmZWVsIGl0Li5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBwaWN0dXJlOiByZW1vdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChhKSA9PiAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgYSA6XCIsIGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmkgZSA6XCIsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL29yaWdpbmFsIGkgZWRpdCBvbiAyLzgvMjAyMSBjb2RlXHJcblxyXG4gICAgLy8gaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldGltYWdlOiBhIH0pO1xyXG4gICAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgLy8gICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAvLyAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAvLyAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAgIGxvYWRJbWFnZShcclxuICAgICAgICBlLnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICBhc3luYyAoaW1nKSA9PiB7XHJcbiAgICAgICAgICB2YXIgcGl4ZWwgPSBpbWcuaGVpZ2h0ICogaW1nLndpZHRoO1xyXG5cclxuICAgICAgICAgIGlmIChwaXhlbCA+IDMxNDU3MjgpIHtcclxuICAgICAgICAgICAgdmFyIHJhdGlvID0gcGl4ZWwgPiA1MDM4ODQ4ID8gMC41IDogMC44O1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJQbGVhc2Ugd2FpdCAuLi5cIiB9KTtcclxuICAgICAgICAgICAgICB2YXIgaW1nY29tcCA9IGF3YWl0IGNvbXByZXNzSW1hZ2UoaW1nLCByYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nY29tcC50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRkYXRhLFxyXG4gICAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGVycm9yIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYmFzZTY0ZGF0YSA9IGltZy50b0RhdGFVUkwoYGltYWdlL2pwZWdgKTtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG9yaWVudGF0aW9uOiB0cnVlLCBjYW52YXM6IHRydWUgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9IChpbWFnZUJsb2IsIGxvYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgLy90ZXN0aW5nIHB1cnBvc2VcclxuICAgIC8vIGNvbnN0IGZpbGUgPSBkYXRhVVJMdG9GaWxlKFwiaW1hZ2VCbG9iXCIsIGltYWdlQmxvYilcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImltYWdlIGJsb2JcIixmaWxlKVxyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRJbWFnZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTsgLy90aGlzIGlzIHVwbG9hZHMgdG8gcmVzZXQgYWxsIHRvIG51bGwgZm9yIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgY29uc3QgaW1hZ2VVcGxvYWQgPSB0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChpbWFnZSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSAhPT0gdGhpcy5zdGF0ZS50YXJnZXRpbWFnZSkgcmV0dXJuIGltYWdlO1xyXG4gICAgICByZXR1cm4geyAuLi5pbWFnZSwgaW1hZ2VpZDogZS5pZCwgaW1hZ2VuYW1lOiBlLmltYWdlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwaWN0dXJlOiBpbWFnZVVwbG9hZCB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuc2hvd1BpY3R1cmUoaW1hZ2VVcGxvYWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2hvd0Vhc3lDcm9wID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsb3NlRWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5waWN0dXJlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnBpY3R1cmUubWFwKChkYXRhLCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwLTEgcHQtMSBtdC0wLjggbXItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoaSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj57aSArIDEgKyBcIi5cIn08L2Rpdj5cclxuICAgICAgICAgICAge2RhdGEuaW1hZ2VuYW1lID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7ZGF0YS5pbWFnZW5hbWV9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5maWxlSW5wdXQoaSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1maWxlIG0tMVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlKGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuICBidG4tcHJpbWFyeSBidG4tc20gYnRuLWJsb2NrIG15LTNcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQWRkKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIFBpY3R1cmVcclxuICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q3JvcHBlcnYyXHJcbiAgICAgICAgICBzaG93RGlhbG9nPXt0aGlzLnN0YXRlLnNob3dFYXN5Q3JvcH1cclxuICAgICAgICAgIGNsb3NlRGlhbG9nPXt0aGlzLmhhbmRsZUNsb3NlRWFzeUNyb3B9XHJcbiAgICAgICAgICBwYXlsb2FkPXt0aGlzLnN0YXRlLnBheWxvYWR9XHJcbiAgICAgICAgICB1cGxvYWQ9e3RoaXMuaGFuZGxlVXBsb2FkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gIHpJbmRleDogXCIxXCIsXHJcbn07XHJcbmNvbnN0IGRpdkRpYWxvZyA9IHtcclxuICBiYWNrZ3JvdW5kOiBcInJnYigyNTUsIDI1NSwgMjU1KVwiLFxyXG59O1xyXG5cclxuY29uc3QgY29tcHJlc3NJbWFnZSA9IChpbWcsIGNydCkgPT4ge1xyXG4gIHZhciBvZmZTY3JlZW5DYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIG9mZlNjcmVlbkNhbnZhcy53aWR0aCA9IGltZy53aWR0aCAqIGNydDtcclxuICBvZmZTY3JlZW5DYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodCAqIGNydDtcclxuICByZXR1cm4gcGljYVxyXG4gICAgLnJlc2l6ZShpbWcsIG9mZlNjcmVlbkNhbnZhcylcclxuICAgIC50aGVuKChpbWFnZUNDUykgPT4gaW1hZ2VDQ1MpXHJcbiAgICAuY2F0Y2goKGUpID0+IGUpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRCb2R5LCBDb2wsIFJvdywgU3Bpbm5lciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBNQ2F0ZWdvcnkgZnJvbSBcIi4vTUNhdGVnb3J5XCI7XHJcbmltcG9ydCBQRGV0YWlscyBmcm9tIFwiLi9QRGV0YWlsc1wiO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tIFwiLi9QaWN0dXJlXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZGQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIHNob3didXR0b246IGZhbHNlLFxyXG4gICAgICBzaG93Q3JvcHBlckRpYWxvZzogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIGltYWdlcyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwiU2F2aW5nIGRhdGEuLiBQbGVhc2UgVGFrZSBEZWVwIEJyZWF0aCAuLlwiIH0pO1xyXG4gICAgQXhpb3MoXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHNgLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgZGV0YWlsczogZGV0YWlscyxcclxuICAgICAgICAgIGltYWdlczogaW1hZ2VzLFxyXG4gICAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBTYXZlZCEhXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgV3JvbmcuLmVyb3JyIHBsZWFzZSBjb250YWN0IHB1bGlzXCIsXHJcbiAgICAgICAgICBzaG93YnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVVwbG9hZGVkID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUmVtb3ZlUGljdHVyZSA9IChpbWFnZXMpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZXM6IGltYWdlcyB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUNoYW5nZUNhdGVnb3J5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogdmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkgPSAoY2F0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjYXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGNhdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlTmV3RGV0YWlscyA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiBlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlRGV0YWlsID0gKHJlbW92ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVtb3ZlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiByZW1vdmUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgey8qIFRvcCBSb3cgKi99XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwcmljZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UGljdHVyZVxyXG4gICAgICAgICAgICAgICAgc2hvd0Nyb3A9e3RoaXMucHJvcHMuc2hvd0Nyb3B9XHJcbiAgICAgICAgICAgICAgICBzaG93UGljdHVyZT17dGhpcy5oYW5kbGVVcGxvYWRlZH1cclxuICAgICAgICAgICAgICAgIGNsb3NlQ3JvcD17dGhpcy5wcm9wcy5jbG9zZUNyb3B9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVwaWN0dXJlPXt0aGlzLmhhbmRsZVJlbW92ZVBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICBzaG93RWFzeUNyb3A9e3RoaXMucHJvcHMuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8TUNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICByZW1vdmVjYXRlZ29yeT17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZWNhdGVnb3J5PXt0aGlzLmhhbmRsZUNoYW5nZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8UERldGFpbHNcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRldGFpbD17dGhpcy5oYW5kbGVSZW1vdmVEZXRhaWx9XHJcbiAgICAgICAgICAgICAgICBuZXdkZXRhaWxzPXt0aGlzLmhhbmRsZU5ld0RldGFpbHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93YnV0dG9uICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXREaWFsb2cgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIi4vQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSBcIi4vUHJvZHVjdERldGFpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBzYXZlQnV0dG9uOiBcImRpc2FibGVkXCIsXHJcbiAgICAgIGNhdGVnb3J5SWQ6IG51bGwsXHJcbiAgICAgIGltYWdlaWQ6IG51bGwsXHJcbiAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IFtdLFxyXG4gICAgICB2YWxpZGF0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgZGVzYyxcclxuICAgICAgZGV0YWlscyxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGltYWdlaWQgJiYgbmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBjYXRlZ29yeUlkICYmIGRlc2MpIHtcclxuICAgICAgQXhpb3MoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtjYXRlZ29yeUlkfWAsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgICBpbWFnZWlkOiBpbWFnZWlkLFxyXG4gICAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBkYXRhIHRvIHNlcnZlci4uLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3Byb2R1Y3RcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7dGhpcy5zdGF0ZS5pbWFnZWlkfS9pbWFnZWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IG51bGwsIGltYWdlOiBudWxsIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBpbWFnZUlkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICBpZiAoaW1hZ2VJZCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUltYWdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHVwbG9hZFwiLCBlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbWFnZWlkOiBlLmlkLCBpbWFnZTogZS5pbWFnZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWxlY3QgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXNbMF0uc2l6ZSA+IDgzODg2MDgpIHtcclxuICAgICAgYWxlcnQoXCJJbWFnZSBGaWxlIHRvbyBiaWcuLiBQbGVhc2UgUHV0IGxlc3MgdGhhbiA4bWJcIik7XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgc3JjOiByZWFkZXIucmVzdWx0LFxyXG4gICAgICAgICAgdXBsb2FkOiB0aGlzLmhhbmRsZVVwbG9hZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2hvd0Nyb3AocGF5bG9hZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2VDcm9wKCk7XHJcbiAgICAgICAgbG9hZGVyKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsTmFtZSA9IChlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImZyb20gUHJvZHVjdERldGFpbHMuanMgRGV0YWlsTmFtZTogXCIsIGUpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZSB9KTtcclxuICB9O1xyXG5cclxuICAvLyBoYW5kbGVEZXRhaWxEZXNjID0gZSA9PntcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxEZXNjOiBcIiwgZSlcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpbWFnZWlkLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgY2F0ZWdvcnlJZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICB2YWxpZGF0ZSxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0IExpc3Q8L0xpbms+IHtcIj4gTmV3IFByb2R1Y3RcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9jazogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiNWVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbG5hbWU9e3RoaXMuaGFuZGxlRGV0YWlsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dGhpcy52YWxpZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpbWFnZWlkID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBJbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMTMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yaWVzIHNlbGVjdGVkPXt0aGlzLmhhbmRsZVNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgJiZcclxuICAgICAgICAgICAgICAgICAgbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSAmJlxyXG4gICAgICAgICAgICAgICAgICBwcmljZSA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrICYmXHJcbiAgICAgICAgICAgICAgICAgIHN0b2NrID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJZCAmJlxyXG4gICAgICAgICAgICAgICAgICBkZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+U2F2ZSBQcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NhdmVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZSBmYS0yeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEZpbGwgQWxsIEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtzdG9jayA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIFN0b2NrIEFtb3VudCBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7cHJpY2UgPCAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBwdXQgcHJpY2UgbW9yZSB0aGFuIDBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yaWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBzaG93OiB0cnVlLFxyXG4gICAgY2F0ZWdvcnlEYXRhOiBudWxsXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBudWxsIH0pO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiYXBpL2FkbWluL3Byb2R1Y3RzL2NhdGVnb3JpZXNcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLCBzaG93OiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS5jYXRlZ29yeURhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IFwiXCIsIGRldGFpbHM6IFwiXCIsIHNob3c6IHRydWUgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgc2hvdywgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YSAmJiBzaG93ICYmIChcclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5zZWxlY3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlEYXRhID8gY2F0ZWdvcnlEYXRhLmlkIDogbnVsbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEgIT09IG51bGwgJiYgc2hvdyAmJiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhbHNlXCI+UGxlYXNlIFNlbGVjdCBBIENhdGVnb3J5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKGRhdGEgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxPQURJTkdcIj5MT0FESU5HLi48L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzaG93ID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgQ2F0ZWdvcnlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdG89XCIvY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0XCIgLz4gQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBOYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeSBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IHRydWUgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXRlZ29yeX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIHshc2hvdyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFRhYmxlLCBTcGlubmVyLCBQYWdpbmF0aW9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbENhdCBmcm9tIFwiLi4vT2xkL01vZGFsQ2F0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmUgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIFwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7aWR9YFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4ge1wiICBcIn1cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2R1Y3RcIj5Qcm9kdWN0PC9MaW5rPlxyXG4gICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgIENhdGVnb3J5IExpc3RcclxuICAgICAgICA8L2g0PlxyXG5cclxuICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5DYXRlZ29yeSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+ZGV0YWlsczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICBkYXRhLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt4LmRldGFpbHN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI2NhdGVnb3J5XCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2F0XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbmltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMFxyXG4gICAgICB9LFxyXG4gICAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICAgIGltYWdlQmxvYjogbnVsbCxcclxuICAgICAgZGVmYXVsdEltYWdlOiB0cnVlLFxyXG4gICAgICBsb2FkaW5nOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RGaWxlID0gZSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZWFkZXIucmVzdWx0IH0pXHJcbiAgICAgICk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlLCBjcm9wKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIHRoaXMubWFrZUNsaWVudENyb3AoY3JvcCk7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgeyBpbWFnZUJsb2IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3JjLCBjcm9wLCBkZWZhdWx0SW1hZ2UsIGNyb3BwZWRJbWFnZVVybCwgbG9hZGluZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPlVwbG9hZGluZyAuLi4uPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGg0PkNyb3AgYW5kIFVwbG9hZCBJbWFnZTwvaDQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG5cclxuICAgICAgICB7c3JjICYmIGRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVmYXVsdEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDcm9wXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyFkZWZhdWx0SW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIkNyb3BcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRDYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChcImFwaS9hZG1pbi9wcm9kdWN0L2NhdGVnb3JpZXNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHRoaXMucHJvcHMuY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNhdGVnb3J5SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb3BzIG9mIEVkaXRDYXRcIiwgdGhpcy5wcm9wcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5wcm9wcy5oYW5kbGVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoeCwgeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3l9IHZhbHVlPXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAge3gubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogdGhpcy5wcm9wcy5mb3JkZXRhaWxzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURldGFpbFZhbHVlQ2hhbmdlID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBkYXRhaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBkYXRhaW5kZXgpIHJldHVybiBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5kYXRhLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBuZXdEYXRhIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kYXRhY2hhbmdlKG5ld0RhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSXRlbSA9IChpbmRleCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkRGV0YWlscyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiLCBpZDogXCJcIiB9LFxyXG4gICAgICBdKSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7IGRldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcbiAgICAgICAge2RldGFpbHNcclxuICAgICAgICAgID8gZGV0YWlscy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZWhvbGRlclwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbENoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEZXRhaWxWYWx1ZUNoYW5nZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJdGVtKGRhdGEuaWQgPyBkYXRhLmlkIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGx9XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkRGV0YWlsc30gY2xhc3NOYW1lPVwic21hbGxcIj5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEVkaXRDYXQgZnJvbSBcIi4vRWRpdENhdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4vVXBsb2FkXCI7XHJcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSBcIi4vSW1hZ2VMaXN0XCI7XHJcbmltcG9ydCBDcm9wRGlhbG9nIGZyb20gXCIuL0Nyb3BEaWFsb2dcIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdERldGFpbHMgZnJvbSBcIi4vRWRpdFByb2R1Y3REZXRhaWxzXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGRldGFpbHM6IG51bGwsXHJcbiAgICAgIGdvdG51bGxkYXRhIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxvY2F0aW9uLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtpZH1gXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG5hbWU6IGRhdGEucHJvZHVjdE5hbWUsXHJcbiAgICAgICAgcHJpY2U6IGRhdGEucHJvZHVjdFByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnByb2R1Y3RTdG9jayxcclxuICAgICAgICBkZXNjOiBkYXRhLnByb2R1Y3REZXNjLFxyXG4gICAgICAgIGRldGFpbHMgOiBkYXRhLnByb2R1Y3REZXRhaWxzcyxcclxuICAgICAgICBnb3RudWxsZGF0YSA6IHRydWUsXHJcblxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeSA9IGlkID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yeUlkOiBpZFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlLCBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vaW1hZ2VzLyR7ZGF0YS5pZH0vZmlsZS9wcm9kdWN0YCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGltYWdlOiBpbWFnZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlOiBudWxsIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTYXZlKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBuYW1lLCBwcmljZSwgc3RvY2ssIGRlc2N9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIGlmKG5hbWUgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgbmFtZSA9IGRhdGEucHJvZHVjdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZihwcmljZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBwcmljZSA9IGRhdGEucHJvZHVjdFByaWNlO1xyXG4gICAgfVxyXG4gICAgaWYoc3RvY2sgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgc3RvY2sgPSBkYXRhLnByb2R1Y3RTdG9jaztcclxuICAgIH1cclxuICAgIGlmKGRlc2MgPT0gbnVsbClcclxuICAgIHtcclxuICAgICAgZGVzYyA9IGRhdGEucHJvZHVjdERlc2M7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cclxuXHJcbiAgICBpZiAobmFtZSAmJiBwcmljZSAmJiBzdG9jayAmJiBkZXNjKSB7XHJcblxyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEYXRhIEhhcyBCZWVuIFNhdmVkXCIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBgRGF0YSBOb3QgU2F2ZSAuIEVycm9yIDogJHtlfWAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlOiBcIkRhdGEgbm90IHNhdmUuIFBsZWFzZSBGaWxsIEFsbCByZXF1aXJlbWVudCBmaWVsZHNcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9IHZhbHVlID0+IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUlkOiBudWxsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93IHNvbWV0aGluZyBoZXJlXCIsIHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURldGFpbHNOdWxsID0gZSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlICwgZ290bnVsbGRhdGEgOiBmYWxzZX0pXHJcbiAgfVxyXG4gIGhhbmRsZURldGFpbENoYW5nZSA9IGUgPT4ge1xyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUsIGdvdG51bGxkYXRhIDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSBlID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlLCBzaG93QWRkSW1hZ2U6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBtZXNzYWdlLCBjYXRlZ29yeUlkLCBpbWFnZSwgZGV0YWlscywgZ290bnVsbGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3RcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0UHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0U3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwZW1cIiwgaGVpZ2h0OiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3REZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IGRlc2M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyb3BEaWFsb2cgYWRkSW1hZ2U9e3RoaXMuaGFuZGxlQWRkSW1hZ2V9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRJbWFnZTogZmFsc2UgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHttZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCJcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vaW1hZ2VzL1wiXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IHJlcy5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUNsaWNrZWQgPSBpbWFnZSA9PiB7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2ltYWdlfS9pbWFnZWBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+SW1hZ2UgTGlzdDwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgcC0yXCIga2V5PXt5fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCh4LmlkKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5maWxlbmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJjYXRlZ29yeVwiICsgdGhpcy5wcm9wcy5pZCArIFwiTGFiZWxcIn1cclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PkRlbGV0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgQ2F0ZWdvcnkgd2lsbCBkZWxldGUgYWxsIHByb2R1Y3QgZm9yIHRoaXMgY2F0ZWdvcnkuXHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgQ2F0ZWdvcnkgXCJ7dGhpcy5wcm9wcy5uYW1lfVwiID8gLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFByb2QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgIC8vIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17XCJwcm9kdWN0XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgUHJvZHVjdCBcInt0aGlzLnByb3BzLm5hbWV9XCIgP1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogW3sgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfV0sXHJcbiAgICAgIGRldGFpbG5hbWVoYXNpbnB1dDogZmFsc2UsXHJcbiAgICAgIGRhdGFkZXNjaGFzaW5wdXQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVycyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcCgoc2hhcmVob2xkZXIsIHNpZHgpID0+IHtcclxuICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGV0YWlsbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlaG9sZGVyczogbmV3U2hhcmVob2xkZXJzIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKG5ld1NoYXJlaG9sZGVycyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UgPSAoaWR4KSA9PiAoZXZ0KSA9PiB7XHJcbiAgICBjb25zdCBuZXdTaGFyZWhvbGRlcmRlc2MgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoXHJcbiAgICAgIChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICAgIGlmIChpZHggIT09IHNpZHgpIHJldHVybiBzaGFyZWhvbGRlcjtcclxuICAgICAgICByZXR1cm4geyAuLi5zaGFyZWhvbGRlciwgZGF0YWRlc2M6IGV2dC50YXJnZXQudmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcmRlc2MgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJkZXNjKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFNoYXJlaG9sZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNoYXJlaG9sZGVyczogdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuY29uY2F0KFtcclxuICAgICAgICB7IGRldGFpbG5hbWU6IFwiXCIsIGRhdGFkZXNjOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIgPSAoaWR4KSA9PiAoKSA9PiB7XHJcbiAgICBjb25zdCByZW1vdmVkID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMuZmlsdGVyKChzLCBzaWR4KSA9PiBpZHggIT09IHNpZHgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHNoYXJlaG9sZGVyczogcmVtb3ZlZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+UHJvZHVjdCBEZXRhaWwocyk8L2g0PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTmFtZSBPZiBEZXRhaWwgIyR7aWR4ICsgMX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kZXRhaWxuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNoYXJlaG9sZGVyTmFtZUNoYW5nZShpZHgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kZXRhaWxuYW1laGFzaW5wdXRcclxuICAgICAgICAgICAgICA/IFwiTmFtZSBvZiBkZXRhaWwgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlsIERhdGEgIyR7aWR4ICsgMX0gYH1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkZXIuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhZGVzY2hhc2lucHV0ID8gXCJEZXRhaWwgZGF0YSBpcyByZXF1aXJlZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIoaWR4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFNoYXJlaG9sZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBQcm9kdWN0IERldGFpbFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1vZGFsUHJvZCBmcm9tIFwiLi4vT2xkL01vZGFsUHJvZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RGF0YTogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHN0b2NrZ3JlYXQ6IG51bGwsXHJcbiAgICAgIHN0b2NrbGVzczogbnVsbCxcclxuICAgICAgdG9nZ2xlZCA6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvZHVjdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuY2F0ZWdvcnlJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IG51bGw7XHJcbiAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnByb2R1Y3RJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gXHJcbiAgICB0aGlzLnN0b2NrZ3JlYXQgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrZ3JlYXRJbnB1dCA9IGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdG9ja2xlc3MgPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnN0b2NrbGVzc0lucHV0ID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHNgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGVmYXVsdERhdGE6IGRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IGlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9kdWN0KSB0aGlzLnByb2R1Y3RJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2dyZWF0KSB0aGlzLnN0b2NrZ3JlYXRJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpZiAodGhpcy5zdG9ja2xlc3MpIHRoaXMuc3RvY2tsZXNzSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcm9kdWN0OiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0LCBjYXRlZ29yeUZpbHRlciwgc3RvY2tncmVhdCwgc3RvY2tsZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlLmRlZmF1bHREYXRhO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnByb2R1Y3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihwcm9kdWN0LnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYXRlZ29yeUZpbHRlcikge1xyXG4gICAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIgIT09IFwiTk9ORVwiKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LmNhdGVnb3J5Lm5hbWUgPT09IGNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrZ3JlYXQpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKCh4KSA9PiB4LnByb2R1Y3RTdG9jayA+IHBhcnNlRmxvYXQoc3RvY2tncmVhdCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0b2NrbGVzcykge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrIDwgcGFyc2VGbG9hdChzdG9ja2xlc3MpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTb3J0Vmlldz0gKGUpPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbGlzdCA9IHRoaXMuc3RhdGUuZGF0YVxyXG4gICAgaWYodGhpcy5zdGF0ZS50b2dnbGVkKXtcclxuICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiBhLnZpZXcgLSBiLnZpZXcpXHJcbiAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGxpc3QpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0b2dnbGVkIDogZmFsc2V9KVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGIudmlldyAtIGEudmlldylcclxuICAgICAgdGhpcy5wYWdpbmF0ZURhdGEobGlzdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZ2dsZWQgOiB0cnVlfSlcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgYWN0aXZlLCByYW5nZSwgcGFnaW5hdGlvbiwgY2F0ZWdvcnlEYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgcGFnaW5hdGlvbiA6IFwiLCBwYWdpbmF0aW9uKTtcclxuICAgIGlmIChyYW5nZSkge1xyXG4gICAgICBmb3IgKGxldCBudW1iZXIgPSAwOyBudW1iZXIgPCByYW5nZTsgbnVtYmVyKyspIHtcclxuICAgICAgICBpdGVtcy5wdXNoKFxyXG4gICAgICAgICAgPFBhZ2luYXRpb24uSXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQYWdlKG51bWJlcik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17bnVtYmVyfVxyXG4gICAgICAgICAgICBhY3RpdmU9e251bWJlciA9PT0gYWN0aXZlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bnVtYmVyICsgMX1cclxuICAgICAgICAgIDwvUGFnaW5hdGlvbi5JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJvcmRlciByb3VuZGVkIG1iLTNcIj5cclxuICAgICAgICAgIDxoNT5TZWFyY2g8L2g1PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Q6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB7LyogPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeUZpbHRlcjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTk9ORVwiPkZpbHRlciBCeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5RGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGEubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RhdGEuaWR9IHZhbHVlPXtkYXRhLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2dyZWF0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja2dyZWF0OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RvY2sgTGVzcyBUaGFuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3RvY2tsZXNzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2tsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+IHtcIiAgXCJ9IFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXJhc2VyXCIgLz4ge1wiICBcIn0gQ2xlYXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIiAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJvcmRlciByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDY+Tm8gcmVzdWx0IGZvdW5kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtc3F1YXJlIGZhLTF4XCIgLz4gQ3JlYXRlIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JbWFnZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFZpZXdzPGEgaHJlZj1cIiNcIiAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU29ydFZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2dnbGVkID8gIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtYW1vdW50LWRvd25cIj48L2k+IDo8aSBjbGFzcz1cImZhcyBmYS1zb3J0LWFtb3VudC11cFwiPjwvaT4gfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RvY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlJlbW92ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpKzF9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt4LnBpY3R1cmVzLm1hcCgoYSwgYikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyBhLmZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gudmlldyA/IHgudmlldyA6IG51bGx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3RQcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFN0b2NrfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFZGl0KHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZWRpdCBmYS0xeFwiIC8+IEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e3sgcGF0aG5hbWU6IFwiL2VkaXRcIiwgc3RhdGU6IHsgaWQ6IHguaWQgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lZGl0XCIgLz4ge1wiICBcIn1FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlKHguaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI3Byb2R1Y3RcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxQcm9kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3guaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt4LnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5QcmV2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlIC0gMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24+e2l0ZW1zfTwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlICsgMSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSByYW5nZSAtIDF9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUmVhY3RDcm9wIGZyb20gXCJyZWFjdC1pbWFnZS1jcm9wXCI7XHJcbi8vIGltcG9ydCBcInJlYWN0LWltYWdlLWNyb3AvZGlzdC9SZWFjdENyb3AuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzcmM6IG51bGwsXHJcbiAgICBjcm9wOiB7XHJcbiAgICAgIGFzcGVjdDogMSAvIDFcclxuICAgIH0sXHJcbiAgICBjcm9wcGVkSW1hZ2VVcmw6IG51bGwsXHJcbiAgICBpbWFnZUJsb2I6IG51bGxcclxuICB9O1xyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcCh0aGlzLnN0YXRlLnNyYyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25pbWFnZWxvYWRcIik7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wIGNvbXBsZXRlXCIpO1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwib25jcm9wY2hhbmdlXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBpZiAoIWJsb2IpIHtcclxuICAgICAgICAgIC8vcmVqZWN0KG5ldyBFcnJvcignQ2FudmFzIGlzIGVtcHR5JykpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbnZhcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpbWFnZUJsb2I6IGJsb2JcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRpbWFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgYWRkaW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vdG9kbyB0aGlzIGlzIHN1Y2VzcyB1cGxvYWRcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3JvcCwgY3JvcHBlZEltYWdlVXJsLCBzcmMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHtzcmMgJiYgKFxyXG4gICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgY3JvcD17Y3JvcH1cclxuICAgICAgICAgICAgICBvbkltYWdlTG9hZGVkPXt0aGlzLm9uSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17dGhpcy5vbkNyb3BDb21wbGV0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNyb3BDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgICB7Lyoge2Nyb3BwZWRJbWFnZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17Y3JvcHBlZEltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgVXBsb2FkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxBcHAgLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbik7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXN0b21lckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9jdXN0b21lci9pbmRleFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPlxyXG4gICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgIEN1c3RvbWVyXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8Q3VzdG9tZXJMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcInJlYWN0LWdvb2dsZS1jaGFydHNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0RnVsbFllYXIoKTtcclxuY29uc3QgbW9udGggPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRNb250aCgpICsgMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBudWxsLFxyXG4gICAgeWVhcjogeWVhcixcclxuICAgIG1vbnRoOiBtb250aCxcclxuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoRGF0ZS5ub3coKSksXHJcbiAgfTtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldERhdGEoKSB7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vZGFzaGJvYXJkP3llYXI9JHt0aGlzLnN0YXRlLnllYXJ9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpICsgMTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgZGF0YTogbnVsbCwgeWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBzdGFydERhdGU6IGRhdGUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5nZXREYXRhKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTW9udGgobW9udGgpIHtcclxuICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiBcIkphbnVhcnlcIjtcclxuICAgICAgY2FzZSAyOlxyXG4gICAgICAgIHJldHVybiBcIkZlYnVhcnlcIjtcclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIHJldHVybiBcIk1hcmNoXCI7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gXCJBcHJpbFwiO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgcmV0dXJuIFwiTWF5XCI7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICByZXR1cm4gXCJKdW5lXCI7XHJcbiAgICAgIGNhc2UgNzpcclxuICAgICAgICByZXR1cm4gXCJKdWx5XCI7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICByZXR1cm4gXCJBdWd1c3RcIjtcclxuICAgICAgY2FzZSA5OlxyXG4gICAgICAgIHJldHVybiBcIlNlcHRlbWJlclwiO1xyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIHJldHVybiBcIk9ja3RvYmVyXCI7XHJcbiAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgcmV0dXJuIFwiTm92ZW1iZXJcIjtcclxuICAgICAgY2FzZSAxMjpcclxuICAgICAgICByZXR1cm4gXCJEaXNlbWJlclwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIkVycm9yXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3IERhdGUoZS50YXJnZXQudmFsdWUpLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyBkYXRhOiBudWxsLCB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIHN0YXJ0RGF0ZTogZGF0ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmdldERhdGEoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgZm9yIGRhc2hib2FyZFwiLCB0aGlzLnByb3BzKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgeWVhciwgbW9udGggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSwgeWVhciwgbW9udGgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PkNoYW5nZSBNb250aCBhbmQgWWVhciA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc3RhcnREYXRlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgc2hvd01vbnRoWWVhclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWluZm9cIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSTXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KGRhdGEudG90YWxfc3VtID8gZGF0YS50b3RhbF9zdW0gOiAwKS50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+VG90YWwgU2FsZXM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IDxoND57ZGF0YS51c2Vyc308L2g0PiA6IDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5DdXN0b21lcnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VtW3llYXJdID8gZGF0YS5zdW1beWVhcl0gOiAwLjBcclxuICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbG9yPVwibGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PlllYXJseSBTYWxlcyA6IHt5ZWFyfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlJNIHtwYXJzZUZsb2F0KGRhdGEubW9udGhbbW9udGhdKS50b0ZpeGVkKDIpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+TW9udGx5IFNhbGVzIDoge3RoaXMuaGFuZGxlTW9udGgobW9udGgpfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTVweFwiIH19IC8+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiQmFyXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwic2FsZXNcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbCBkZXNpZ24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVG90YWwgU2FsZXMgQnkgTW9udGhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGVzdHNcclxuICAgICAgICAgICAgICAgICAgICByb290UHJvcHM9e3sgXCJkYXRhLXRlc3RpZFwiOiBcIjJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPVwiOFwiIGxnPVwiNlwiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtcIjQwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17XCIzMjBweFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0VHlwZT1cIkxpbmVDaGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNb250aFwiLCBcIk9yZGVyIENvdW50XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiSmFuXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRmViXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsyXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTWFyY2hcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzNdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBcHJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzRdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXlcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzVdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzZdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKdWxcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzddKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJBdWdcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzhdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJTZXBcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzldKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJPY3RcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzEwXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTm92XCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkRpc1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoQXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNb250aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHZBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9yZGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGJnPVwiZGFya1wiXHJcbiAgICAgICAgdmFyaWFudD1cImRhcmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm0tMCBwLTAgcGwtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTEgXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMSBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJzXCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBhd1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2NyZWF0ZXByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHAtMSBtLTFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxpc3QtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvdmlzaXRvclwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFnaW5hdGVPcmRlciBmcm9tIFwiLi4vY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCIgLz4gT3JkZXJzXHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxQYWdpbmF0ZU9yZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9wcm9kdWN0L09sZC9Qcm9kdWN0TGlzdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFByb2R1Y3RMaXN0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XHJcbiAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLCBwYWRkaW5nOiAwIH19PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2FkbWluXCJcclxuICAgICAgICAgICAgICBleGFjdFxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPiBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9wcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IFByb2R1Y3RcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9vcmRlcnNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPiBDdXN0b21lclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pPiBDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY3JlYXRlcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1saXN0LWFsdFwiPjwvaT4gRGV2b3BzXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvdmlzaXRvclwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1leWVcIj48L2k+IFZpc2l0b3JcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=