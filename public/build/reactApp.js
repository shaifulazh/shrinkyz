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















i;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL0Nyb3BwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L1Zpc2l0b3IvVmlzaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9jdXN0b21lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9vcmRlci9Nb2RhbE9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL09yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L29yZGVyL1BhZ2luYXRlT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9DYW52YXNDcm9wLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ3JvcHBlcnYyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvTUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9BZGRQcm9kdWN0cy9QaWN0dXJlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvUHJvZHVjdEFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9BZGRQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvQ2F0ZWdvcnlFZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL0Nyb3BEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdENhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9FZGl0UHJvZHVjdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2NvbXBvbmVudC9wcm9kdWN0L09sZC9JbWFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxDYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9jb21wb25lbnQvcHJvZHVjdC9PbGQvTW9kYWxQcm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3REZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY29tcG9uZW50L3Byb2R1Y3QvT2xkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JlYWN0LWFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvTW9iaWxlU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9PcmRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0LWFwcC9yb3V0ZXIvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL3JvdXRlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC1hcHAvY3JvcC5jc3M/ODg3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QtYXBwL2luZGV4LmNzcz9iYWNjIl0sIm5hbWVzIjpbImkiLCJBcHAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGF5bG9hZCIsInNldFN0YXRlIiwic2hvd0Nyb3AiLCJzcmMiLCJ1cGxvYWQiLCJzaG93dG9wYmFyIiwic3RhdGUiLCJpZEVkaXQiLCJtb2JpbGVWaWV3Iiwic2hvd1NpZGViYXIiLCJzaG93RWFzeUNyb3BEaWFsb2ciLCJ1cGRhdGVWaWV3U3RhdGUiLCJiaW5kIiwidG9nZ2xlU2lkZUJhciIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJyZW5kZXIiLCJjb250YWluZXJDbGFzcyIsImhhbmRsZVNob3dDcm9wIiwiaGFuZGxlQ2xvc2VDcm9wIiwiaGFuZGxlY2FuY2VsdG9weCIsIkNyb3BwaW5nIiwiaW1hZ2UiLCJpbWFnZVJlZiIsImNyb3AiLCJtYWtlQ2xpZW50Q3JvcCIsImUiLCJsb2FkaW5nIiwiY3JvcHBlZEltYWdlVXJsIiwiaW1hZ2VCbG9iIiwic2hvd0Nyb3BJbWFnZSIsInByZXZlbnREZWZhdWx0IiwiY2FuY2VsTG9hZCIsImNhbmNlbHRvcHgiLCJ4IiwieSIsIndpZHRoIiwiYXNwZWN0IiwiaGVpZ2h0IiwiZ2V0Q3JvcHBlZEltZyIsImZpbGVOYW1lIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNjYWxlWCIsIm5hdHVyYWxXaWR0aCIsInNjYWxlWSIsIm5hdHVyYWxIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b0Jsb2IiLCJibG9iIiwiY29uc29sZSIsImVycm9yIiwibmFtZSIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImZpbGVVcmwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVDbG9zZVRvcFgiLCJoYW5kbGVCYWNrQWN0aW9uIiwiaGFuZGxlVXBsb2FkIiwib25JbWFnZUxvYWRlZCIsIm9uQ3JvcENvbXBsZXRlIiwib25Dcm9wQ2hhbmdlIiwiaGFuZGxlU2hvd0Nyb3BJbWFnZSIsImRhdGFVUkx0b0ZpbGUiLCJkYXRhVXJsIiwicmVzIiwiZmV0Y2giLCJGaWxlIiwidHlwZSIsIlZpc2l0b3IiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwidGFibGUiLCJzZXRUYWJsZSIsImRhdGFuYW1lIiwic2V0RGF0YW5hbWUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJsb2ciLCJjYXRjaCIsImNvdW50T2JqcyIsImFyciIsIm9iaiIsIk9iamVjdCIsImNyZWF0ZSIsImZvckVhY2giLCJpdGVtIiwic2VsZWN0T25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvdW50cnkiLCJtYXAiLCJpbmQiLCJDb3VudHJ5IiwiY291bnRDb3VudHJ5IiwiY3N0YXRlIiwiY2l0eSIsImNjaXR5IiwiaXBzIiwiZGF0IiwiaXAiLCJpcGQiLCJ2aXNpdCIsInNpbmdsZWRhdGEiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwibGVuZ3RoIiwiUHJvZHVjdExpc3QiLCJkYXRlIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwibGltaXQiLCJyYW5nZSIsIk1hdGgiLCJjZWlsIiwicGFnaW5hdGlvbiIsInBhZ2luYXRlIiwiYWN0aXZlIiwicGFnZSIsImlkIiwiQXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJyZXNwb25zZSIsImhhbmRsZVBhZ2UiLCJyZWZzIiwiZW1haWwiLCJkZWZhdWx0RGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInBhZ2luYXRlRGF0YSIsImFycmF5IiwicGFnZV9zaXplIiwicGFnZV9udW1iZXIiLCJzbGljZSIsIm1vdW50ZWQiLCJoYW5kbGVFZGl0IiwiZWRpdCIsIml0ZW1zIiwibnVtYmVyIiwicHVzaCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNsZWFyIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJmb3JtYXREYXRlIiwiY3JlYXRlZEF0IiwiTW9kYWwiLCJjb2xvciIsImRlbGV0ZSIsIk1vZGFsT3JkZXIiLCJPcmRlciIsInN0YXR1cyIsImxvY2F0aW9uIiwiZmxleCIsInBhZGRpbmciLCJvcmRlcmRldGFpbHMiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInF0eSIsInByb2R1Y3RQcmljZSIsInRvdGFsIiwiYWRkcmVzcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicG9zdGNvZGUiLCJwaG9uZU51bWJlciIsInBheW1lbnRNZXRob2QiLCJwYXlwYWwiLCJhbW91bnQiLCJjdXJyZW5jeSIsImhhbmRsZVBFTkRJTkciLCJoYW5kbGVQcm9jZXNzaW5nIiwiaGFuZGxlRGVsaXZlcmluZyIsImhhbmRsZUNvbXBsZXRlZCIsIlBhZ2luYXRlT3JkZXIiLCJxdWVyeSIsInN0YXR1c0ZpbHRlciIsImZyb21EYXRlIiwidG9EYXRlIiwib3JkZXJJZCIsImdyZWF0ZXIiLCJsZXNzIiwidXNlciIsImdldFRpbWUiLCJkYXRlU2FtZSIsInNldERhdGUiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJkZWxldGVkIiwib3JkZXIiLCJwYXRobmFtZSIsImhhbmRsZURlbGV0ZSIsInBpY2EiLCJyZXF1aXJlIiwiY3JlYXRlSW1hZ2UiLCJJbWFnZSIsInNldEF0dHJpYnV0ZSIsImdldFJhZGlhbkFuZ2xlIiwiZGVncmVlVmFsdWUiLCJQSSIsIkNhbnZhc0Nyb3AiLCJpbWFnZVNyYyIsInBpeGVsQ3JvcCIsInJvdGF0aW9uIiwibWF4U2l6ZSIsIm1heCIsInNhZmVBcmVhIiwic3FydCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImdldEltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInJvdW5kIiwibG9hZCIsIkNhdGVnb3J5TGlzdCIsInN1YmNhdGVnb3J5Iiwic2V0c3ViY2F0ZWdvcnkiLCJzdWJ0d28iLCJzZXRzdWJ0d28iLCJkZWxjYXQiLCJzZXRkZWxjYXQiLCJkZWxzdWIiLCJzZXRkZWxzdWIiLCJkZWxzdWJ0d28iLCJzZXRkZWxzdWJ0d28iLCJvblNlbGVjdENhdGVnb3J5IiwicGFyYW1zIiwicmVzZXREZWxldGVJdGVtIiwic3ViQ2F0ZWdvcnlTZWxlY3QiLCJzdWJ0d29DYXRlZ29yeVNlbGVjdCIsImRlbGV0ZUNhdGVnb3J5IiwiZXJyIiwibmV3Y2F0IiwicyIsImRlbGV0ZVN1YkNhdGVnb3J5IiwibmV3c3ViIiwiZGVsZXRlU3VidHdvQ2F0ZWdvcnkiLCJuZXdzdWJ0d28iLCJtaW5XaWR0aCIsInN1YiIsImlzIiwic3ViY2F0ZWdvcnluYW1lIiwic3VidCIsInN1YnR3b2NhdGVnb3J5bmFtZSIsIkNyb3BwZXJ2MiIsInNldENyb3AiLCJzZXRSb3RhdGlvbiIsInpvb20iLCJzZXRab29tIiwiY3JvcHBlZEltYWdlIiwic2V0Q3JvcHBlZEltYWdlIiwiY3JvcHBlZEFyZWFQaXhlbHMiLCJzZXRDcm9wcGVkQXJlYVBpeGVscyIsInVzZUNhbGxiYWNrIiwiY3JvcHBlZEFyZWEiLCJDbG9zZURpYWxvZyIsImNsb3NlRGlhbG9nIiwiY2xlYXJTdGF0ZSIsInNob3dDcm9wcGVkSW1hZ2UiLCJVcGxvYWRJbWFnZSIsInNob3dEaWFsb2ciLCJkaWFsb2dTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiY29udGFpbmVyQnV0dG9uU3R5bGUiLCJjb250YWluZXJDcm9wcGVyU3R5bGUiLCJjcm9wcGVyU3R5bGUiLCJzbGlkZXJTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImRpdkRpYWxvZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJjcm9wcGVkSW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiTUNhdGVnb3J5IiwiaW5kZXgiLCJhZGRjYXQiLCJjYXRlZ29yaWVzIiwiZmluZCIsImRhdGFzIiwiaWR4IiwidW5kZWZpbmVkIiwibmV3ZGF0YWxpc3QiLCJkYXRhbGlzdCIsIml4IiwiY2F0ZWdvcnluYW1lIiwibmV3RGF0YSIsInBvc3QiLCJkaXNhYmxlIiwiY2F0ZWdvcnlpZCIsImNoYW5nZWNhdGVnb3J5IiwiYWRkc3ViIiwiY2F0IiwiY2F0aSIsInN1YmNhdGVnb3J5aWQiLCJhZGRzdWJ0d28iLCJhZGRzdWJ0d29jYXQiLCJpdHdvIiwiYWRzdCIsImFkc3RpIiwic3VidHdvY2F0ZWdvcnkiLCJzdWJ0d29jYXRlZ29yeWlkIiwiYnV0Y2F0IiwiYWRkbW9yZXN1YiIsImFkZG1vcmUiLCJhaWR4IiwiYnV0c3ViIiwic3VidHdvaW5keCIsImFkZG1vcmVzdWJ0d28iLCJhbXNpIiwic3ViY2F0aW5pdCIsInNjaWR4IiwiZW5hYmxlIiwicmVtb3ZlY2F0IiwiYSIsInJlbW92ZWNhdGVnb3J5Iiwic3ViaSIsInJlbW92ZWQiLCJtb2QiLCJtb2RpbmR4IiwiaXN1YiIsInoiLCJyZW1vdmVzdWJ0d28iLCJmaWwiLCJjYXRpZHgiLCJzdWJpZHgiLCJzdWJkYXRhIiwiY2F0ZWdvcnkiLCJtb2RpZmllZCIsImluY2F0aW5keCIsImluY2F0c3ViaWR4IiwiaW5jYXRzdWJ0d29pZHgiLCJldmVudCIsInN1YnR3b2RhdGEiLCJTdWJ0d29jYXRlZ29yeSIsInN0aSIsInN1YnR3b25ldyIsImNhdHN1YnR3byIsImNhdHN1YnR3b2lkeCIsImNhdHN1YiIsImNhdHN1YmlkeCIsInN1YnR3b2lkeCIsImhhbmRsZUF4aW9zIiwiaGFuZGxlSW5wdXQiLCJrZXkiLCJoYW5kbGVSZW1vdmVDYXRlZ29yeSIsImhhbmRsZUFkZENhdGVnb3J5IiwiaGFuZGxlU3ViSW5wdXQiLCJkYiIsImRiaXgiLCJkYnMiLCJkYmkiLCJoYW5kbGVSZW1vdmVTdWJDYXRlZ29yeSIsImhhbmRsZUFkZE1vcmVTdWIiLCJzdWIyIiwiaW5kdHdvIiwiaGFuZGxlU3ViVHdvSW5wdXQiLCJzZGJpIiwiaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkiLCJoYW5kbGVBZGRNb3JlU3ViVHdvIiwiaGFuZGxlQWRkc3VidHdvY2F0ZWdvcnkiLCJoYW5kbGVBZGRTdWJDYXRlZ29yeSIsIlBEZXRhaWxzIiwiZGV0YWlscyIsImNvbmNhdCIsImRldGFpbG5hbWUiLCJkYXRhZGVzYyIsInJlbW92ZSIsInJlbW92ZWRldGFpbCIsIm5ld2RldGFpbHMiLCJkZXRhaWwiLCJuZXdkZXRhaWxkYXRhZGVzYyIsImhhbmRsZUNoYW5nZURldGFpbE5hbWUiLCJoYW5kbGVDaGFuZ2VEYXRhRGVzYyIsImhhbmRsZVJlbW92ZSIsImhhbmRsZUFkZCIsIlBpY3R1cmUiLCJwaWN0dXJlIiwiaW1hZ2VpZCIsImltYWdlbmFtZSIsImZpbGVJbnB1dCIsImlucHV0RmlsZSIsImZpIiwiaW1hZ2VkZWwiLCJwaWN0dXJldXAiLCJtZXNzYWdlIiwicmVtb3ZlcGljdHVyZSIsImFsZXJ0IiwiZmlsZXMiLCJzaXplIiwidGFyZ2V0aW1hZ2UiLCJsb2FkSW1hZ2UiLCJpbWciLCJwaXhlbCIsInJhdGlvIiwiaW1nY29tcCIsImNvbXByZXNzSW1hZ2UiLCJiYXNlNjRkYXRhIiwidG9EYXRhVVJMIiwic2hvd0Vhc3lDcm9wIiwic2V0VGltZW91dCIsIm9yaWVudGF0aW9uIiwibG9hZGVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhhbmRsZUFkZEltYWdlIiwiaGFuZGxlQ2xvc2VFYXN5Q3JvcCIsImltYWdlVXBsb2FkIiwic2hvd1BpY3R1cmUiLCJzaG93QmxhY2tTY3JlZW4iLCJoYW5kbGVSZW1vdmVJbWFnZSIsIm9uU2VsZWN0RmlsZSIsImhhbmRsZUltYWdlQWRkIiwic3VibWl0RGlhbG9nIiwiY3J0Iiwib2ZmU2NyZWVuQ2FudmFzIiwicmVzaXplIiwiaW1hZ2VDQ1MiLCJQcm9kdWN0QWRkIiwicHJpY2UiLCJzdG9jayIsImRlc2MiLCJpbWFnZXMiLCJoaXN0b3J5Iiwic2hvd2J1dHRvbiIsInNob3dDcm9wcGVyRGlhbG9nIiwiaGFuZFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVVwbG9hZGVkIiwiY2xvc2VDcm9wIiwiaGFuZGxlUmVtb3ZlUGljdHVyZSIsImhhbmRsZUNoYW5nZUNhdGVnb3J5IiwiaGFuZGxlUmVtb3ZlRGV0YWlsIiwiaGFuZGxlTmV3RGV0YWlscyIsImhhbmRsZVNhdmVCdXR0b24iLCJBZGRQcm9kdWN0IiwiY2F0ZWdvcnlJZCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2F2ZUJ1dHRvbiIsInZhbGlkYXRlIiwiaW1hZ2VJZCIsImhhbmRsZURldGFpbE5hbWUiLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVBZGRQcm9kdWN0IiwiQ2F0ZWdvcmllcyIsInNob3ciLCJjYXRlZ29yeURhdGEiLCJzZWxlY3RlZCIsImhhbmRsZUNhdGVnb3J5IiwiQ2F0ZWdvcnlFZGl0IiwiQ3JvcERpYWxvZyIsImFkZEltYWdlIiwiZGVmYXVsdEltYWdlIiwiRWRpdENhdCIsIkVkaXRQcm9kdWN0RGV0YWlscyIsImRhdGFpbmRleCIsImRhdGFjaGFuZ2UiLCJmb3JkZXRhaWxzIiwiaGFuZGxlRGV0YWlsQ2hhbmdlIiwiaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UiLCJoYW5kbGVSZW1vdmVJdGVtIiwiaGFuZGxlQWRkRGV0YWlscyIsIkVkaXRpbmciLCJnb3RudWxsZGF0YSIsInNob3dBZGRJbWFnZSIsInByb2R1Y3RTdG9jayIsInByb2R1Y3REZXNjIiwicHJvZHVjdERldGFpbHNzIiwiaGFuZGxlU2F2ZSIsIkltYWdlTGlzdCIsImltYWdlQ2xpY2tlZCIsImZpbGVuYW1lIiwiTW9kYWxQcm9kIiwiUHJvZHVjdERldGFpbHMiLCJldnQiLCJuZXdTaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlcnMiLCJzaGFyZWhvbGRlciIsInNpZHgiLCJuZXdTaGFyZWhvbGRlcmRlc2MiLCJkZXRhaWxuYW1laGFzaW5wdXQiLCJkYXRhZGVzY2hhc2lucHV0IiwiaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlIiwiaGFuZGxlU2hhcmVob2xkZXJEZXNjQ2hhbmdlIiwiaGFuZGxlUmVtb3ZlU2hhcmVob2xkZXIiLCJoYW5kbGVBZGRTaGFyZWhvbGRlciIsInByb2R1Y3QiLCJwcm9kdWN0SW5wdXQiLCJzdG9ja2dyZWF0Iiwic3RvY2tncmVhdElucHV0Iiwic3RvY2tsZXNzIiwic3RvY2tsZXNzSW5wdXQiLCJjYXRlZ29yeUZpbHRlciIsImxpc3QiLCJ0b2dnbGVkIiwic29ydCIsImIiLCJ2aWV3IiwiY2F0ZWdvcnlJbnB1dCIsImhhbmRsZVNvcnRWaWV3IiwicGljdHVyZXMiLCJVcGxvYWQiLCJhZGRpbWFnZSIsIlJlYWN0RE9NIiwiZ2V0RWxlbWVudEJ5SWQiLCJDdXN0b21lciIsIm5vdyIsIkRhc2hib2FyZCIsInN0YXJ0RGF0ZSIsImdldERhdGEiLCJoYW5kbGVNb250aCIsImhhbmRsZUNoYW5nZSIsInRleHRBbGlnbiIsInRvdGFsX3N1bSIsInRvRml4ZWQiLCJ1c2VycyIsInN1bSIsImNoYXJ0IiwidGl0bGUiLCJjb3VudCIsImhBeGlzIiwidkF4aXMiLCJNb2JpbGVTaWRlQmFyIiwiT3JkZXJzIiwiUHJvZHVjdCIsIlNpZGViYXIiLCJsaXN0U3R5bGVUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBQSxDQUFDO0FBR0Q7QUFDQTtBQUNBO0FBRWUsTUFBTUMsR0FBTixTQUFrQkMsNENBQWxCLENBQTRCO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQiw0Q0FpQkRDLE9BQUQsSUFBYTtBQUM1QixXQUFLQyxRQUFMLENBQWM7QUFDWkMsZ0JBQVEsRUFBRSxJQURFO0FBRVpDLFdBQUcsRUFBRUgsT0FBTyxDQUFDRyxHQUZEO0FBR1pDLGNBQU0sRUFBRUosT0FBTyxDQUFDSSxNQUhKO0FBSVpDLGtCQUFVLEVBQUU7QUFKQSxPQUFkO0FBTUQsS0F4QmtCOztBQUFBLDZDQTBCRCxNQUFNO0FBQ3RCLFdBQUtKLFFBQUwsQ0FBYztBQUFFQyxnQkFBUSxFQUFFLEtBQVo7QUFBbUJHLGtCQUFVLEVBQUU7QUFBL0IsT0FBZDtBQUNELEtBNUJrQjs7QUFBQSw4Q0FvQ0EsTUFBTTtBQUN2QixXQUFLSixRQUFMLENBQWM7QUFDWkMsZ0JBQVEsRUFBRSxLQURFO0FBRVpDLFdBQUcsRUFBRSxJQUZPO0FBR1pDLGNBQU0sRUFBRTtBQUhJLE9BQWQ7QUFLRCxLQTFDa0I7O0FBR2pCLFNBQUtFLEtBQUwsR0FBYTtBQUNYSixjQUFRLEVBQUUsS0FEQztBQUVYQyxTQUFHLEVBQUUsSUFGTTtBQUdYQyxZQUFNLEVBQUUsSUFIRztBQUlYRyxZQUFNLEVBQUUsSUFKRztBQUtYQyxnQkFBVSxF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RSxlQUFTLEVBQUM7QUFIWixPQUtFO0FBQUcsV0FBSyxFQUFDO0FBQVQsTUFMRixZQURGLENBaERGLEVBeURFLDZEQUNFLGlEQUFDLHFEQUFEO0FBQ0UsUUFBRSxFQUFDLFVBREw7QUFFRSxxQkFBZSxFQUFDLFFBRmxCO0FBR0UsZUFBUyxFQUFDO0FBSFosT0FLRTtBQUFHLFdBQUssRUFBQztBQUFULE1BTEYsYUFERixDQXpERixDQURGLENBREY7QUF1RUQ7O0FBekU0QyxDOzs7Ozs7Ozs7Ozs7QUNIL0M7Ozs7Ozs7Ozs7Ozs7QUNBQSIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL3JvdXRlci9TaWRlYmFyXCI7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4vcm91dGVyL09yZGVyc1wiO1xyXG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSBcIi4vcm91dGVyL0N1c3RvbWVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vcm91dGVyL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9yb3V0ZXIvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvQWRkUHJvZHVjdFwiO1xyXG5pbXBvcnQgRWRpdGluZyBmcm9tIFwiLi9jb21wb25lbnQvcHJvZHVjdC9PbGQvRWRpdGluZ1wiO1xyXG5pbXBvcnQgQ3JvcHBpbmcgZnJvbSBcIi4vQ3JvcHBpbmdcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCIuL2NvbXBvbmVudC9vcmRlci9PcmRlclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlFZGl0IGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L09sZC9DYXRlZ29yeUVkaXRcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0QWRkIGZyb20gXCIuL2NvbXBvbmVudC9wcm9kdWN0L0FkZFByb2R1Y3RzL1Byb2R1Y3RBZGRcIjtcclxuaW1wb3J0IE1vYmlsZVNpZGVCYXIgZnJvbSBcIi4vcm91dGVyL01vYmlsZVNpZGVCYXJcIjtcclxuaVxyXG5cclxuXHJcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSBcIi4vY29tcG9uZW50L3Byb2R1Y3QvQWRkUHJvZHVjdHMvQ2F0ZWdvcnlMaXN0XCI7XHJcbmltcG9ydCBWaXNpdG9yIGZyb20gXCIuL2NvbXBvbmVudC9WaXNpdG9yL1Zpc2l0b3JcIjtcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93Q3JvcDogZmFsc2UsXHJcbiAgICAgIHNyYzogbnVsbCxcclxuICAgICAgdXBsb2FkOiBudWxsLFxyXG4gICAgICBpZEVkaXQ6IG51bGwsXHJcbiAgICAgIG1vYmlsZVZpZXc6IGZhbHNlLFxyXG4gICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgc2hvd3RvcGJhcjogdHJ1ZSxcclxuICAgICAgc2hvd0Vhc3lDcm9wRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSA9IHRoaXMudXBkYXRlVmlld1N0YXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZVNpZGVCYXIgPSB0aGlzLnRvZ2dsZVNpZGVCYXIuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNob3dDcm9wID0gKHBheWxvYWQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93Q3JvcDogdHJ1ZSxcclxuICAgICAgc3JjOiBwYXlsb2FkLnNyYyxcclxuICAgICAgdXBsb2FkOiBwYXlsb2FkLnVwbG9hZCxcclxuICAgICAgc2hvd3RvcGJhcjogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3A6IGZhbHNlLCBzaG93dG9wYmFyOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVNpZGVCYXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd1NpZGViYXI6ICF0aGlzLnN0YXRlLnNob3dTaWRlYmFyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVjYW5jZWx0b3B4ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wOiBmYWxzZSxcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICB1cGxvYWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSgpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlVmlld1N0YXRlKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVZpZXdTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWV3U3RhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubW9iaWxlVmlldyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxMDI0KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vYmlsZVZpZXc6IHRydWUsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyNCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtb2JpbGVWaWV3OiBmYWxzZSxcclxuICAgICAgICBzaG93U2lkZWJhcjogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyQ2xhc3MgPSBcImQtZmxleFwiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubW9iaWxlVmlldykgY29udGFpbmVyQ2xhc3MgPSBcImNvbnRhaW5lclwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93dG9wYmFyICYmIChcclxuICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyBudWxsIDogPE1vYmlsZVNpZGVCYXIgLz59PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3N9PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGViYXIgPyA8U2lkZWJhciAvPiA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiByZW5kZXI9eyhwcm9wcykgPT4gPERhc2hib2FyZCB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9vcmRlcnNcIiByZW5kZXI9eyhwcm9wcykgPT4gPE9yZGVycyB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgICBwYXRoPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPEN1c3RvbWVyIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RcIiByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3Qgey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEFkZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5oYW5kbGVTaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLmhhbmRsZUNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlld29yZGVyXCIgcmVuZGVyPXsocHJvcHMpID0+IDxPcmRlciB7Li4ucHJvcHN9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0XCIgcmVuZGVyPXsocHJvcHMpID0+IDxFZGl0aW5nIHsuLi5wcm9wc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZVxyXG4gICAgICAgICAgICAgIHBhdGg9XCIvY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgcmVuZGVyPXsocHJvcHMpID0+IDxDYXRlZ29yeUxpc3Qgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgcGF0aD1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICByZW5kZXI9eyhwcm9wcykgPT4gPFByb2R1Y3RBZGQgey4uLnByb3BzfSAvPn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Zpc2l0b3JcIiByZW5kZXI9eyhwcm9wcykgPT4gPFZpc2l0b3Igey4uLnByb3BzfSAvPn0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENyb3BwaW5nXHJcbiAgICAgICAgICAgIHNob3dDcm9wPXt0aGlzLnN0YXRlLnNob3dDcm9wfVxyXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuc3JjfVxyXG4gICAgICAgICAgICB1cGxvYWQ9e3RoaXMuc3RhdGUudXBsb2FkfVxyXG4gICAgICAgICAgICBjYW5jZWx0b3B4PXt0aGlzLmhhbmRsZWNhbmNlbHRvcHh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tIFwicmVhY3QtaW1hZ2UtY3JvcFwiO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1jcm9wL2Rpc3QvUmVhY3RDcm9wLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nyb3AuY3NzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcHBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3JjOiBudWxsLFxyXG4gICAgICBjcm9wOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgYXNwZWN0OiAxIC8gMSxcclxuICAgICAgfSxcclxuICAgICAgY3JvcHBlZEltYWdlVXJsOiBudWxsLFxyXG4gICAgICBpbWFnZUJsb2I6IG51bGwsXHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IGZhbHNlLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkltYWdlTG9hZGVkID0gKGltYWdlKSA9PiB7XHJcbiAgICB0aGlzLmltYWdlUmVmID0gaW1hZ2U7XHJcbiAgfTtcclxuXHJcbiAgb25Dcm9wQ29tcGxldGUgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSAoY3JvcCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSk7XHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgbWFrZUNsaWVudENyb3AoY3JvcCkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgY3JvcC53aWR0aCAmJiBjcm9wLmhlaWdodCkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2VVcmwgPSBhd2FpdCB0aGlzLmdldENyb3BwZWRJbWcoXHJcbiAgICAgICAgdGhpcy5pbWFnZVJlZixcclxuICAgICAgICBjcm9wLFxyXG4gICAgICAgIFwibmV3RmlsZS5qcGVnXCJcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3BwZWRJbWFnZVVybCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENyb3BwZWRJbWcoaW1hZ2UsIGNyb3AsIGZpbGVOYW1lKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gaW1hZ2UubmF0dXJhbFdpZHRoIC8gaW1hZ2Uud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgY2FudmFzLndpZHRoID0gY3JvcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBjcm9wLmhlaWdodDtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIGNyb3AueCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC55ICogc2NhbGVZLFxyXG4gICAgICBjcm9wLndpZHRoICogc2NhbGVYLFxyXG4gICAgICBjcm9wLmhlaWdodCAqIHNjYWxlWSxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgY3JvcC53aWR0aCxcclxuICAgICAgY3JvcC5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYixcclxuICAgICAgICB9KTtcclxuICAgICAgICBibG9iLm5hbWUgPSBmaWxlTmFtZTtcclxuICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5maWxlVXJsKTtcclxuICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaG93Q3JvcEltYWdlID0gKGUpID0+IHt9O1xyXG4gIGNhbmNlbExvYWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBzaG93Q3JvcEltYWdlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQmFja0FjdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Nyb3BJbWFnZTogZmFsc2UgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy51cGxvYWQodGhpcy5zdGF0ZS5pbWFnZUJsb2IsIHRoaXMuY2FuY2VsTG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZVNob3dDcm9wSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dDcm9wSW1hZ2U6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbG9zZVRvcFggPSAoZSkgPT57XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2FuY2VsTG9hZCgpOyAvL2NhdXRpb24gdGhpcyBpcyBuZXdcclxuICAgICAgdGhpcy5wcm9wcy5jYW5jZWx0b3B4KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNyb3BwZWRJbWFnZVVybCwgc2hvd0Nyb3BJbWFnZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmICF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9wIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZyBjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZVRvcFh9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGUgZmEtMnhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHtzaG93Q3JvcEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja0FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3RDcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnNyY31cclxuICAgICAgICAgICAgICAgICAgICBjcm9wPXt0aGlzLnN0YXRlLmNyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbWFnZUxvYWRlZD17dGhpcy5vbkltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9e3RoaXMub25Dcm9wQ29tcGxldGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Dcm9wQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3JvcHBlZEltYWdlVXJsID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd0Nyb3BJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dDcm9wICYmIHRoaXMuc3RhdGUubG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3AgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nIGNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC01XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz4gVXBsb2FkaW5nIEltYWdlLi4uLlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkYXRhVVJMdG9GaWxlKGRhdGFVcmwsIGZpbGVOYW1lKSB7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGRhdGFVcmwpO1xyXG4gIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xyXG4gIHJldHVybiBuZXcgRmlsZShbYmxvYl0sIGZpbGVOYW1lLCB7IHR5cGU6ICdpbWFnZS9qcGVnJyB9KTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNpdG9yKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0YWJsZSwgc2V0VGFibGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RhdGFuYW1lLCBzZXREYXRhbmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJhcGkvYWRtaW4vdGVzdC90ZXN0XCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gY291bnRPYmpzKGFycikge1xyXG4gICAgLy8gU28gdGhlIG9iamVjdCBkb2Vzbid0IGluaGVyaXQgZnJvbSBPYmplY3QucHJvdG90eXBlIGFuZCBhdm9pZHMgcHJvcGVydHlcclxuICAgIC8vIG5hbWUgY29sbGlzaW9uc1xyXG4gICAgdmFyIG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICBpZiAob2JqW2l0ZW1dKSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2l0ZW1dID0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0T25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGFyZ2V0ID09PSBcIkNvdW50cnlcIikge1xyXG4gICAgICBjb25zdCBjb3VudHJ5ID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmQuQ291bnRyeTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50Q291bnRyeSA9IGNvdW50T2Jqcyhjb3VudHJ5KTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJDb3VudHJ5XCIpXHJcbiAgICAgIHNldFRhYmxlKGNvdW50Q291bnRyeSk7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gXCJTdGF0ZVwiKSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gZGF0YS5tYXAoKGluZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpbmQuc3RhdGU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY3N0YXRlID0gY291bnRPYmpzKHN0YXRlKTtcclxuICAgICAgc2V0RGF0YW5hbWUoXCJTdGF0ZVwiKVxyXG4gICAgICBzZXRUYWJsZShjc3RhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiQ2l0eVwiKSB7XHJcbiAgICAgIGNvbnN0IGNpdHkgPSBkYXRhLm1hcCgoaW5kKSA9PiBpbmQuY2l0eSk7XHJcbiAgICAgIGNvbnN0IGNjaXR5ID0gY291bnRPYmpzKGNpdHkpO1xyXG4gICAgICBzZXREYXRhbmFtZShcIkNpdHlcIilcclxuICAgICAgc2V0VGFibGUoY2NpdHkpO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFwiSVBcIikge1xyXG4gICAgICBjb25zdCBpcHMgPSBkYXRhLm1hcChkYXQ9PmRhdC5pcClcclxuICAgICAgY29uc3QgaXBkID0gY291bnRPYmpzKGlwcyk7XHJcbiAgICAgIHNldERhdGFuYW1lKFwiSVBcIilcclxuICAgICAgc2V0VGFibGUoaXBkKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgcmV0dXJuIGluZC5zdGF0ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgQ291bnRyeSA9IGRhdGEubWFwKChpbmQpID0+IHtcclxuICAgICAgcmV0dXJuIGluZC5Db3VudHJ5O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2aXNpdCA9IGNvdW50T2JqcyhzdGF0ZSk7XHJcbiAgICBjb25zdCBzaW5nbGVkYXRhID0gZGF0YVswXTtcclxuICAgIGNvbnN0IG5hbWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzaW5nbGVkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwibmFtZVwiLCBuYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgIHtkYXRhICYmIDxoMz5Ub3RhbCBWaXNpdG9yIDoge2RhdGEubGVuZ3RofTwvaDM+fVxyXG5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RPbkNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiICBkZWZhdWx0VmFsdWU+UGxlYXNlIHNlbGVjdCBhbiBPcHRpb248L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb3VudHJ5XCI+Q291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlN0YXRlXCI+U3RhdGU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaXR5XCI+Q2l0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklQXCI+SVA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnIvPlxyXG5cclxuICAgICAgICB7dGFibGUgJiYgZGF0YW5hbWUgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgc2l6ZT1cInNtXCIgID5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD57ZGF0YW5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPkNvdW50PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAge09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhYmxlKS5tYXAoKHgsIGkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4oIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eH08L3RkPjx0ZD57dGFibGVbeF19PC90ZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPilcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG4gIGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcbiAgfTtcclxuXHJcbiAgcGFnaW5hdGUoYXJyYXksIHBhZ2Vfc2l6ZSwgcGFnZV9udW1iZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKHBhZ2Vfc2l6ZSk7XHJcbiAgICAvLyAtLXBhZ2VfbnVtYmVyOyAvLyBiZWNhdXNlIHBhZ2VzIGxvZ2ljYWxseSBzdGFydCB3aXRoIDEsIGJ1dCB0ZWNobmljYWxseSB3aXRoIDBcclxuICAgIHJldHVybiBhcnJheS5zbGljZShwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSwgKHBhZ2VfbnVtYmVyICsgMSkgKiBwYWdlX3NpemUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KGAvYXBpL2FkbWluL2N1c3RvbWVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRlZmF1bHREYXRhOiBkYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRlRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlUGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZSh0aGlzLnN0YXRlLmRhdGEsIHRoaXMuc3RhdGUubGltaXQsIHBhZ2UpLFxyXG4gICAgICBhY3RpdmU6IHBhZ2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIHJlbW92ZVwiLCBpZCk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYWdlKHRoaXMuc3RhdGUuYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRWRpdChpZCkge1xyXG4gICAgdGhpcy5wcm9wcy5lZGl0KGlkKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsZWFyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGVhcmluZ1wiKTtcclxuICAgIHRoaXMucmVmcy5lbWFpbC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZS5kZWZhdWx0RGF0YTtcclxuICAgIGlmIChlbWFpbCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHguZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgZm9yIChsZXQgbnVtYmVyID0gMDsgbnVtYmVyIDwgcmFuZ2U7IG51bWJlcisrKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaChcclxuICAgICAgICAgIDxQYWdpbmF0aW9uLkl0ZW1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGFnZShudW1iZXIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiIC8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIiAvPiB7XCIgIFwifSBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVyYXNlclwiIC8+IHtcIiAgXCJ9IENsZWFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBwYi0zXCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWdpc3RlcmVkIE9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5maXJzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4Lmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uUHJldlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb24uTmV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcIm1vZGFsXCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgQ29uZmlybSBEZWxldGUgT3JkZXIge3RoaXMucHJvcHMuaWR9P1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZSh0aGlzLnByb3BzLmlkKX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wibW9kYWxvcmRlclwiICsgdGhpcy5wcm9wcy5uYW1lICsgdGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAvLyB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e1xyXG4gICAgICAgICAgXCJtb2RhbG9yZGVyXCIgKyB0aGlzLnByb3BzLm5hbWUgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RoaXMucHJvcHMubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIE9yZGVyIFN0YXR1cyBXaWxsIENoYW5nZSB0byB7dGhpcy5wcm9wcy5uYW1lfT9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGUodGhpcy5wcm9wcy5pZCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb25maXJtXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNb2RhbE9yZGVyIGZyb20gXCIuL01vZGFsT3JkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IGRhdGE6IG51bGwsIHN0YXR1czogbnVsbCB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1c1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQRU5ESU5HID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJQRU5ESU5HXCIgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiUEVORElOR1wiIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ29tcGxldGVkID0gaWQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIGlzIGZpcmVkXCIsIGlkKTtcclxuICAgIEF4aW9zLnBhdGNoKGAvYXBpL2FkbWluL29yZGVycy8ke2lkfS9zdGF0dXNgLCB7IHN0YXR1czogXCJDT01QTEVURURcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJDT01QTEVURURcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZURlbGl2ZXJpbmcgPSBpZCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZSBjaGFuZ2UgaXMgZmlyZWRcIiwgaWQpO1xyXG4gICAgQXhpb3MucGF0Y2goYC9hcGkvYWRtaW4vb3JkZXJzLyR7aWR9L3N0YXR1c2AsIHsgc3RhdHVzOiBcIkRFTElWRVJJTkdcIiB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogXCJERUxJVkVSSU5HXCIgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUHJvY2Vzc2luZyA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSBpcyBmaXJlZFwiLCBpZCk7XHJcbiAgICBBeGlvcy5wYXRjaChgL2FwaS9hZG1pbi9vcmRlcnMvJHtpZH0vc3RhdHVzYCwgeyBzdGF0dXM6IFwiUFJPQ0VTU0lOR1wiIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlBST0NFU1NJTkdcIiB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9vcmRlcnNcIj5PcmRlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIHtcIiAgIFwifT4ge1wiICAgXCJ9XHJcbiAgICAgICAgICAgICAgICBWaWV3IE9yZGVyXHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0zIG10LTNcIj5cclxuICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXIgTGlzdDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc20gdGFibGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPiM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm9yZGVyZGV0YWlscy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL1wiICsgeC5wcm9kdWN0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnF0eX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPntkYXRhLnRvdGFsfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5kYXRhKX0gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5DdXN0b21lciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuYWRkcmVzcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQWRkcmVzcyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgQ2l0eSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MuY2l0eX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGUgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLnN0YXRlfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQb3N0Y29kZSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucG9zdGNvZGV9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvdW50cnkgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5hZGRyZXNzLmNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlciA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmFkZHJlc3MucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlciBEYXRlIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuY3JlYXRlZEF0fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBQYXltZW50IE1ldGhvZCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIFN0YXR1cyA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2PntzdGF0dXMgJiYgc3RhdHVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgVXBkYXRlZCBBdCA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVwZGF0ZV9hdH1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtM1wiPlxyXG4gICAgICAgICAgICAgIDxoNT5QYXlQYWwgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbW91bnQgOlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5wYXlwYWwuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICBDdXJyZW5jeSA6XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnBheXBhbC5jdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdHVzIDpcclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3N0YXR1cyAmJiBkYXRhLnBheXBhbC5zdGF0dXN9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTNcIj5cclxuICAgICAgICAgICAgICA8aDU+QWN0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBFTkRJTkcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQRU5ESU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQRU5ESU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUEVORElOR31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUEVORElOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVByb2Nlc3NpbmcoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsb3JkZXJQUk9DRVNTSU5HXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQUk9DRVNTSU5HXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGU9e3RoaXMuaGFuZGxlUHJvY2Vzc2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2RhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiUFJPQ0VTU0lOR1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRGVsaXZlcmluZyhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjbW9kYWxvcmRlckRFTElWRVJJTkdcIiArIGRhdGEuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERFTElWRVJJTkdcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVEZWxpdmVyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJERUxJVkVSSU5HXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNvbXBsZXRlZChkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTVBMRVRFRFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtcIiNtb2RhbG9yZGVyQ09NUExFVEVEXCIgKyBkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT01QTEVURURcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcIkNPTVBMRVRFRFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgUm93LCBDb2wsIFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRlT3JkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBhY3RpdmU6IDAsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBzdGF0dXNGaWx0ZXI6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuICBwYWdpbmF0ZShhcnJheSwgcGFnZV9zaXplLCBwYWdlX251bWJlcikge1xyXG4gICAgY29uc29sZS5sb2cocGFnZV9zaXplKTtcclxuICAgIC8vIC0tcGFnZV9udW1iZXI7IC8vIGJlY2F1c2UgcGFnZXMgbG9naWNhbGx5IHN0YXJ0IHdpdGggMSwgYnV0IHRlY2huaWNhbGx5IHdpdGggMFxyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKHBhZ2VfbnVtYmVyICogcGFnZV9zaXplLCAocGFnZV9udW1iZXIgKyAxKSAqIHBhZ2Vfc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICBBeGlvcy5nZXQoYC9hcGkvYWRtaW4vb3JkZXJgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIHJlc1wiLCBkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0RGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGFnaW5hdGVEYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgeyBsaW1pdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHJhbmdlID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gbGltaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUoZGF0YSwgbGltaXQsIDApLFxyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICByYW5nZTogcmFuZ2UsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhZ2luYXRpb246IHRoaXMucGFnaW5hdGUodGhpcy5zdGF0ZS5kYXRhLCB0aGlzLnN0YXRlLmxpbWl0LCBwYWdlKSxcclxuICAgICAgYWN0aXZlOiBwYWdlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmlsdGVySXRlbXMgPSAoYXJyLCBxdWVyeSkgPT4ge1xyXG4gICAgcmV0dXJuIGFyci50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gIH07XHJcblxyXG4gIGZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRoICsgMX0tJHt5ZWFyfWA7XHJcblxyXG4gICAgLy8gbGV0IHRvRm9ybWF0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAvLyBsZXQgZm9ybWF0RGF0ZSA9XHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldERhdGUoKSArXHJcbiAgICAvLyAgIFwiLVwiKHRvRm9ybWF0LmdldE1vbnRoKCkgKyAxKSArXHJcbiAgICAvLyAgIHRvRm9ybWF0LmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgc3RhdHVzRmlsdGVyLFxyXG4gICAgICBmcm9tRGF0ZSxcclxuICAgICAgdG9EYXRlLFxyXG4gICAgICBvcmRlcklkLFxyXG4gICAgICBncmVhdGVyLFxyXG4gICAgICBsZXNzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICh4KSA9PiB4LnVzZXIuZW1haWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGVtYWlsLnRvTG93ZXJDYXNlKCkpICE9PSAtMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGF0dXNGaWx0ZXIpIHtcclxuICAgICAgaWYgKHN0YXR1c0ZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguc3RhdHVzID09PSBzdGF0dXNGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZyb21EYXRlICYmIHRvRGF0ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSA9PT0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBsZXQgZGF0ZVNhbWUgPSBuZXcgRGF0ZSh0b0RhdGUpO1xyXG4gICAgICAgIGRhdGVTYW1lLnNldERhdGUoZGF0ZVNhbWUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpID49XHJcbiAgICAgICAgICAgICAgbmV3IERhdGUoZnJvbURhdGUpLmdldFRpbWUoKSAmJlxyXG4gICAgICAgICAgICBuZXcgRGF0ZShpdGVtLmNyZWF0ZWRBdCkuZ2V0VGltZSgpIDw9IGRhdGVTYW1lLmdldFRpbWUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPj1cclxuICAgICAgICAgICAgICBuZXcgRGF0ZShmcm9tRGF0ZSkuZ2V0VGltZSgpICYmXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGl0ZW0uY3JlYXRlZEF0KS5nZXRUaW1lKCkgPD0gbmV3IERhdGUodG9EYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3JkZXJJZCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgPT09IHBhcnNlSW50KG9yZGVySWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ3JlYXRlcikge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgudG90YWwgPiBwYXJzZUZsb2F0KGdyZWF0ZXIpKTtcclxuICAgIH1cclxuICAgIGlmIChsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC50b3RhbCA8IHBhcnNlRmxvYXQobGVzcykpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGVsZXRlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9vcmRlcnMvJHt2YWx1ZX1gLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgbGV0IHsgZGF0YSwgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBkZWxldGVkID0gZGF0YS5maWx0ZXIoKHgpID0+IHguaWQgIT09IHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGVsZXRlZCB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBhZ2UoYWN0aXZlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG4gICAgdGhpcy5yZWZzLmVtYWlsLnZhbHVlID0gXCJcIjtcclxuICAgIHRoaXMucmVmcy5zdGF0dXMudmFsdWUgPSBcIk5PTkVcIjtcclxuICAgIHRoaXMucmVmcy5vcmRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMuZ3JlYXRlci52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnJlZnMubGVzcy52YWx1ZSA9IFwiXCI7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN0YXR1c0ZpbHRlcjogbnVsbCxcclxuICAgICAgZnJvbURhdGU6IG51bGwsXHJcbiAgICAgIHRvRGF0ZTogbnVsbCxcclxuICAgICAgb3JkZXJJZDogbnVsbCxcclxuICAgICAgZ3JlYXRlcjogbnVsbCxcclxuICAgICAgbGVzczogbnVsbCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgcmFuZ2UsIGFjdGl2ZSwgcGFnaW5hdGlvbiwgc3RhdHVzRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzRmlsdGVyKTtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShudW1iZXIpfVxyXG4gICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgYWN0aXZlPXtudW1iZXIgPT09IGFjdGl2ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bWJlciArIDF9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb24uSXRlbT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBib3JkZXIgcm91bmRlZCBtYi0zXCI+XHJcbiAgICAgICAgICA8aDU+U2VhcmNoPC9oNT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXNGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PTkVcIj5GaWx0ZXIgQnk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRU5ESU5HXCI+UEVORElORzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFTElWRVJJTkdcIj5ERUxJVkVSSU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJPQ0VTU0lOR1wiPlBST0NFU1NJTkc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDT01QTEVURURcIj5DT01QTEVURUQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIGxnPVwiM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Gcm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdHNTdGFydFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZnJvbURhdGU6IGUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmZyb21EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGU9e3RoaXMuc3RhdGUuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e3RoaXMuc3RhdGUudG9EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+VG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VsZWN0c0VuZFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9XCJDbGljayB0byBzZWxlY3QgYSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgdG9EYXRlOiBlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17dGhpcy5zdGF0ZS50b0RhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17dGhpcy5zdGF0ZS5mcm9tRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmRlciBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBvcmRlcklkOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBHcmVhdGVyIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImdyZWF0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBncmVhdGVyOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3RhbCBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBsZXNzOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWQgb3ZlcmZsb3ctYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2RhdGEubGVuZ3RofSByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8VGFibGUgc3RyaXBlZCBib3JkZXJlZCBob3ZlciB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIEVtYWlsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGUgQ3JlYXRlZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cGFnaW5hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLm1hcCgoeCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnVzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3guc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5mb3JtYXREYXRlKHguY3JlYXRlZEF0KX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvdmlld29yZGVyXCIsIHN0YXRlOiB7IGRhdGE6IHggfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW4tc3F1YXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgXCJ9Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9e1wiI21vZGFsXCIgKyB4LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwgZGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gaWQ9e3guaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQYWdlKGFjdGl2ZSAtIDEpfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlID09PSAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uPntpdGVtc308L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi5OZXh0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZSA9PT0gcmFuZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgcGljYSA9IHJlcXVpcmUoXCJwaWNhXCIpKCk7XHJcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHVybCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShpbWFnZSkpO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjcm9zc09yaWdpblwiLCBcImFub255bW91c1wiKTsgLy8gbmVlZGVkIHRvIGF2b2lkIGNyb3NzLW9yaWdpbiBpc3N1ZXMgb24gQ29kZVNhbmRib3hcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhZGlhbkFuZ2xlKGRlZ3JlZVZhbHVlKSB7XHJcbiAgcmV0dXJuIChkZWdyZWVWYWx1ZSAqIE1hdGguUEkpIC8gMTgwO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiB3YXMgYWRhcHRlZCBmcm9tIHRoZSBvbmUgaW4gdGhlIFJlYWRNZSBvZiBodHRwczovL2dpdGh1Yi5jb20vRG9taW5pY1RvYmlhcy9yZWFjdC1pbWFnZS1jcm9wXHJcbiAqIEBwYXJhbSB7RmlsZX0gaW1hZ2UgLSBJbWFnZSBGaWxlIHVybFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGl4ZWxDcm9wIC0gcGl4ZWxDcm9wIE9iamVjdCBwcm92aWRlZCBieSByZWFjdC1lYXN5LWNyb3BcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uIC0gb3B0aW9uYWwgcm90YXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBDYW52YXNDcm9wKGltYWdlU3JjLCBwaXhlbENyb3AsIHJvdGF0aW9uID0gMCkge1xyXG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2UoaW1hZ2VTcmMpO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gIGNvbnN0IHNhZmVBcmVhID0gMiAqICgobWF4U2l6ZSAvIDIpICogTWF0aC5zcXJ0KDIpKTtcclxuXHJcbiAgLy8gc2V0IGVhY2ggZGltZW5zaW9ucyB0byBkb3VibGUgbGFyZ2VzdCBkaW1lbnNpb24gdG8gYWxsb3cgZm9yIGEgc2FmZSBhcmVhIGZvciB0aGVcclxuICAvLyBpbWFnZSB0byByb3RhdGUgaW4gd2l0aG91dCBiZWluZyBjbGlwcGVkIGJ5IGNhbnZhcyBjb250ZXh0XHJcbiAgY2FudmFzLndpZHRoID0gc2FmZUFyZWE7XHJcbiAgY2FudmFzLmhlaWdodCA9IHNhZmVBcmVhO1xyXG5cclxuICAvLyB0cmFuc2xhdGUgY2FudmFzIGNvbnRleHQgdG8gYSBjZW50cmFsIGxvY2F0aW9uIG9uIGltYWdlIHRvIGFsbG93IHJvdGF0aW5nIGFyb3VuZCB0aGUgY2VudGVyLlxyXG4gIGN0eC50cmFuc2xhdGUoc2FmZUFyZWEgLyAyLCBzYWZlQXJlYSAvIDIpO1xyXG4gIGN0eC5yb3RhdGUoZ2V0UmFkaWFuQW5nbGUocm90YXRpb24pKTtcclxuICBjdHgudHJhbnNsYXRlKC1zYWZlQXJlYSAvIDIsIC1zYWZlQXJlYSAvIDIpO1xyXG5cclxuICAvLyBkcmF3IHJvdGF0ZWQgaW1hZ2UgYW5kIHN0b3JlIGRhdGEuXHJcbiAgY3R4LmRyYXdJbWFnZShcclxuICAgIGltYWdlLFxyXG4gICAgc2FmZUFyZWEgLyAyIC0gaW1hZ2Uud2lkdGggKiAwLjUsXHJcbiAgICBzYWZlQXJlYSAvIDIgLSBpbWFnZS5oZWlnaHQgKiAwLjVcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNhZmVBcmVhLCBzYWZlQXJlYSk7XHJcblxyXG4gIC8vIHNldCBjYW52YXMgd2lkdGggdG8gZmluYWwgZGVzaXJlZCBjcm9wIHNpemUgLSB0aGlzIHdpbGwgY2xlYXIgZXhpc3RpbmcgY29udGV4dFxyXG4gIGNhbnZhcy53aWR0aCA9IHBpeGVsQ3JvcC53aWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodDtcclxuXHJcbiAgLy8gcGFzdGUgZ2VuZXJhdGVkIHJvdGF0ZSBpbWFnZSB3aXRoIGNvcnJlY3Qgb2Zmc2V0cyBmb3IgeCx5IGNyb3AgdmFsdWVzLlxyXG4gIGN0eC5wdXRJbWFnZURhdGEoXHJcbiAgICBkYXRhLFxyXG4gICAgTWF0aC5yb3VuZCgwIC0gc2FmZUFyZWEgLyAyICsgaW1hZ2Uud2lkdGggKiAwLjUgLSBwaXhlbENyb3AueCksXHJcbiAgICBNYXRoLnJvdW5kKDAgLSBzYWZlQXJlYSAvIDIgKyBpbWFnZS5oZWlnaHQgKiAwLjUgLSBwaXhlbENyb3AueSlcclxuICApO1xyXG5cclxuICAvLyBBcyBCYXNlNjQgc3RyaW5nXHJcbiAgLy8gcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcclxuXHJcbiAgLy8gQXMgYSBibG9iXHJcbiAgcmV0dXJuIGF3YWl0IHBpY2EudG9CbG9iKGNhbnZhcywgXCJpbWFnZS9qcGVnXCIsIDAuOSkudGhlbigoYmxvYikgPT4ge1xyXG4gICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgICByZXR1cm4gbG9hZDtcclxuICB9KTtcclxuXHJcbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgLy8gICBwaWNhLnRvQmxvYihjYW52YXMsIFwiaW1hZ2UvanBlZ1wiLCAwLjkpLnRoZW4oKGJsb2IpID0+IHtcclxuICAvLyAgICAgY29uc3QgbG9hZCA9IHsgYmxvYjogYmxvYiwgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIH07XHJcbiAgLy8gICAgIHJlc29sdmUobG9hZCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBVbmRvUm91bmRlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N1YmNhdGVnb3J5LCBzZXRzdWJjYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VidHdvLCBzZXRzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2RlbGNhdCwgc2V0ZGVsY2F0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkZWxzdWIsIHNldGRlbHN1Yl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZGVsc3VidHdvLCBzZXRkZWxzdWJ0d29dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdC9hbGxjYXRlZ29yaWVzXCIsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShwYXJhbXMpIHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IHBhcmFtcy50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRzdWJ0d28obnVsbCk7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3RhcmdldH0vc3ViY2F0ZWdvcmllc2AsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICBzZXRkZWxjYXQocGFyc2VJbnQodGFyZ2V0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldGRlbGNhdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0c3ViY2F0ZWdvcnkocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzZXREZWxldGVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0ZGVsY2F0KG51bGwpO1xyXG4gICAgc2V0ZGVsc3ViKG51bGwpO1xyXG4gICAgc2V0ZGVsc3VidHdvKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1YkNhdGVnb3J5U2VsZWN0ID0gKGUpID0+IHtcclxuICAgIHJlc2V0RGVsZXRlSXRlbSgpO1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0YXJnZXR9L3N1YnR3b2NhdGVnb3JpZXNgLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgc2V0ZGVsc3ViKHBhcnNlSW50KHRhcmdldCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRkZWxzdWIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHN1YnR3byhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VidHdvQ2F0ZWdvcnlTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgcmVzZXREZWxldGVJdGVtKCk7XHJcbiAgICBzZXRkZWxzdWJ0d28ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKTtcclxuICAgIGNvbnNvbGUubG9nKGRlbHN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9jYXRlZ29yaWVzLyR7ZGVsY2F0fWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdjYXQgPSBkYXRhLmZpbHRlcigocywgaSkgPT4gZGVsY2F0ICE9PSBzLmlkKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld2NhdCk7XHJcbiAgICBzZXREYXRhKG5ld2NhdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3ViQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9zdWJjYXRlZ29yaWVzLyR7ZGVsc3VifWAsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICBjb25zdCBuZXdzdWIgPSBzdWJjYXRlZ29yeS5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YiAhPT0gcy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdzdWIpO1xyXG4gICAgc2V0c3ViY2F0ZWdvcnkobmV3c3ViKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVTdWJ0d29DYXRlZ29yeSA9ICgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3N1YnR3b2NhdGVnb3JpZXMvJHtkZWxzdWJ0d299YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIGNvbnN0IG5ld3N1YnR3byA9IHN1YnR3by5maWx0ZXIoKHMsIGkpID0+IGRlbHN1YnR3byAhPT0gcy5pZCk7XHJcbiAgICBzZXRzdWJ0d28obmV3c3VidHdvKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8cD50aGlzIGlzIGNhdGVnb3J5IGxpc3Q8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENhdGVnb3J5fVxyXG4gICAgICAgICAgICBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7XCIgPlwifVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGVsY2F0ID09PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWIgQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YkNhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3ViY2F0ZWdvcnkgJiZcclxuICAgICAgICAgICAgICBzdWJjYXRlZ29yeS5tYXAoKHN1YiwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1Yi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWV9IHtcIiA+XCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWIgPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YkNhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3ViIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5TdWJUd28gQ2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHNpemU9XCIyMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3N1YnR3b0NhdGVnb3J5U2VsZWN0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c3VidHdvICYmXHJcbiAgICAgICAgICAgICAgc3VidHdvLm1hcCgoc3VidCwgaXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpc30gdmFsdWU9e3N1YnQuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJ0LnN1YnR3b2NhdGVnb3J5bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtkZWxzdWJ0d28gPT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVN1YnR3b0NhdGVnb3J5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWxldGUgU3VidHdvIENhdGVnb3J5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcm9wcGVyIGZyb20gXCJyZWFjdC1lYXN5LWNyb3BcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBTbGlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvXCI7XHJcbmltcG9ydCBDYW52YXNDcm9wIGZyb20gXCIuL0NhbnZhc0Nyb3BcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyb3BwZXJ2Mihwcm9wcykge1xyXG4gIGNvbnN0IFtjcm9wLCBzZXRDcm9wXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuICBjb25zdCBbcm90YXRpb24sIHNldFJvdGF0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtjcm9wcGVkSW1hZ2UsIHNldENyb3BwZWRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY3JvcHBlZEFyZWFQaXhlbHMsIHNldENyb3BwZWRBcmVhUGl4ZWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNyb3BDb21wbGV0ZSA9IHVzZUNhbGxiYWNrKChjcm9wcGVkQXJlYSwgY3JvcHBlZEFyZWFQaXhlbHMpID0+IHtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKGNyb3BwZWRBcmVhUGl4ZWxzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIENsb3NlRGlhbG9nKCkge1xyXG4gICAgcHJvcHMuY2xvc2VEaWFsb2coKTtcclxuICAgIGNsZWFyU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dDcm9wcGVkSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjcm9wcGVkSW1hZ2UgPSBhd2FpdCBDYW52YXNDcm9wKFxyXG4gICAgICAgIHByb3BzLnBheWxvYWQuc3JjLFxyXG4gICAgICAgIGNyb3BwZWRBcmVhUGl4ZWxzLFxyXG4gICAgICAgIHJvdGF0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZWVcIiwgeyBjcm9wcGVkSW1hZ2UgfSk7XHJcbiAgICAgIHNldENyb3BwZWRJbWFnZShjcm9wcGVkSW1hZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFVwbG9hZEltYWdlID0gKCkgPT4ge1xyXG4gICAgcHJvcHMucGF5bG9hZC51cGxvYWQoY3JvcHBlZEltYWdlLmJsb2IsIGNsZWFyU3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDcm9wcGVkSW1hZ2UobnVsbCk7XHJcbiAgICBzZXRab29tKDEpO1xyXG4gICAgc2V0Q3JvcCh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgICBzZXRSb3RhdGlvbigwKTtcclxuICAgIHNldENyb3BwZWRBcmVhUGl4ZWxzKG51bGwpO1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRlZFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2Nyb3BwZWRJbWFnZSAmJiBwcm9wcy5zaG93RGlhbG9nID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJCdXR0b25TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17VXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQ3JvcHBlclN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbnRhaW5lciAgXCIgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nyb3BwZWRJbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIGhlaWdodDogXCIyNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3Byb3BzLnNob3dEaWFsb2cgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaWFsb2dTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyQnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e0Nsb3NlRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93Q3JvcHBlZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lckNyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Nyb3BwZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENyb3BwZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5wYXlsb2FkLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgIGNyb3A9e2Nyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICB6b29tPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXNwZWN0PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ2hhbmdlPXtzZXRDcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Dcm9wQ29tcGxldGU9e29uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtzZXRab29tfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzbGlkZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19Plpvb208L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1heD17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt6b29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB6b29tKSA9PiBzZXRab29tKHpvb20pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5Sb3RhdGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBkaWFsb2dTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYigwLCAwLCAwLjQpXCIsXHJcbiAgekluZGV4OiBcIjVcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICB3aWR0aDogXCIxMDB2d1wiLFxyXG59O1xyXG5jb25zdCBjb250YWluZXJDcm9wcGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjkwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweFwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlclN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI5MCVcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVyU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcIjEwJVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICB3aWR0aDogXCI2MCVcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckJ1dHRvblN0eWxlID0ge1xyXG4gIC8vIGJvcmRlcjogXCIxcHggc29saWQgI2Y1ZjVmNVwiLFxyXG4gIGhlaWdodDogXCIxMCVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuY29uc3QgY3JvcHBlZEltYWdlU3R5bGUgPSB7XHJcbiAgbWF4V2lkdGg6IFwiNTB2d1wiLFxyXG5cclxuICAvLyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBGYWNlU2hhcnAsIFRyZW5kaW5nVXBTaGFycCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNQ2F0ZWdvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeW5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkaXNhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgZGF0YWxpc3Q6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhbGlzdDogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZENhdGVnb3J5ID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBhZGRjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmluZCgoZGF0YXMsIGlkeCkgPT4gaW5kZXggPT09IGlkeCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlbmEgY2FyaVwiLCBhZGRjYXQpO1xyXG5cclxuICAgIGlmIChhZGRjYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBuZXdkYXRhbGlzdCA9IHRoaXMuc3RhdGUuZGF0YWxpc3QuZmlsdGVyKFxyXG4gICAgICAgIChkYXRhbGlzdCwgaXgpID0+IGFkZGNhdC5jYXRlZ29yeW5hbWUgIT09IGRhdGFsaXN0Lm5hbWVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YWxpc3Q6IG5ld2RhdGFsaXN0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdEYXRhID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgocG9zdCwgaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCAhPT0gaWR4KSByZXR1cm4gcG9zdDtcclxuICAgICAgaWYgKGFkZGNhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiB2YWx1ZSBpZiBzZWxlY3RcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucG9zdCwgZGlzYWJsZTogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5aWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnluYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHRoaXMuc3RhdGUuY2F0ZWdvcmllcyk7XHJcbiAgfTtcclxuICBoYW5kbGVBZGRTdWJDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhZGRzdWIgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChjYXQsIGNhdGkpID0+IHtcclxuICAgICAgaWYgKGluZGV4ICE9PSBjYXRpKSByZXR1cm4gY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmNhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgeyBzdWJjYXRlZ29yeWlkOiBcIlwiLCBzdWJjYXRlZ29yeW5hbWU6IFwiXCIsIGRpc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViXCIsIGFkZHN1Yik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogYWRkc3ViIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5ID0gKGksIHMpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaXQgYWRkc3ViMlwiLCB0aGlzLnN0YXRlLmNhdGVnb3JpZXMpO1xyXG4gICAgY29uc3QgYWRkc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkc3VidHdvY2F0LCBpdHdvKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSBpdHdvKSByZXR1cm4gYWRkc3VidHdvY2F0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFkZHN1YnR3b2NhdCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogYWRkc3VidHdvY2F0LnN1YmNhdGVnb3J5Lm1hcCgoYWRzdCwgYWRzdGkpID0+IHtcclxuICAgICAgICAgIGlmIChzICE9PSBhZHN0aSkgcmV0dXJuIGFkc3Q7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5hZHN0LFxyXG4gICAgICAgICAgICBzdWJ0d29jYXRlZ29yeTogW3sgc3VidHdvY2F0ZWdvcnlpZDogXCJcIiwgc3VidHdvY2F0ZWdvcnluYW1lOiBcIlwiIH1dLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGQgc3ViIHR3b1wiLCBhZGRzdWJ0d28pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3JpZXM6IGFkZHN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRzdWJ0d28pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWIgPSAoYnV0Y2F0KSA9PiAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYWRkbW9yZXN1YiA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZG1vcmUsIGFpZHgpID0+IHtcclxuICAgICAgaWYgKGJ1dGNhdCAhPT0gYWlkeCkgcmV0dXJuIGFkZG1vcmU7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWRkbW9yZSxcclxuICAgICAgICBzdWJjYXRlZ29yeTogW1xyXG4gICAgICAgICAgLi4uYWRkbW9yZS5zdWJjYXRlZ29yeSxcclxuICAgICAgICAgIHsgc3ViY2F0ZWdvcnlpZDogXCJcIiwgc3ViY2F0ZWdvcnluYW1lOiBcIlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRtb3Jlc3ViXCIsIGFkZG1vcmVzdWIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IGFkZG1vcmVzdWIgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KGFkZG1vcmVzdWIpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZE1vcmVTdWJUd28gPSAoYWRkY2F0LCBidXRzdWIsIHN1YnR3b2luZHgpID0+IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBhZGRtb3Jlc3VidHdvID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoYWRkbW9yZXN1YiwgYW1zaSkgPT4ge1xyXG4gICAgICBpZiAoYWRkY2F0ICE9PSBhbXNpKSByZXR1cm4gYWRkbW9yZXN1YjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRtb3Jlc3ViLFxyXG4gICAgICAgIHN1YmNhdGVnb3J5OiBhZGRtb3Jlc3ViLnN1YmNhdGVnb3J5Lm1hcCgoc3ViY2F0aW5pdCwgc2NpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChidXRzdWIgIT09IHNjaWR4KSByZXR1cm4gc3ViY2F0aW5pdDtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN1YmNhdGluaXQsXHJcbiAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5OiBbXHJcbiAgICAgICAgICAgICAgLi4uc3ViY2F0aW5pdC5zdWJ0d29jYXRlZ29yeSxcclxuICAgICAgICAgICAgICB7IHN1YnR3b2NhdGVnb3J5aWQ6IFwiXCIsIHN1YnR3b2NhdGVnb3J5bmFtZTogXCJcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYWRkbW9yZXN1YnR3byk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogYWRkbW9yZXN1YnR3byxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VjYXRlZ29yeShhZGRtb3Jlc3VidHdvKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChpbmRleCkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jYXRlZ29yaWVzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgY29uc3QgZW5hYmxlID0gdGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoeCwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4ueCwgZGlzYWJsZTogZmFsc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBlbmFibGUsXHJcbiAgICAgICAgZGF0YWxpc3Q6IHRoaXMuc3RhdGUuZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVjYXQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKChhLCBpKSA9PiBpbmRleCAhPT0gaSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogcmVtb3ZlY2F0LFxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZWNhdClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkgPSAoY2F0aSwgc3ViaSkgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChtb2QsIG1vZGluZHgpID0+IHtcclxuICAgICAgaWYgKGNhdGkgIT09IG1vZGluZHgpIHJldHVybiBtb2Q7XHJcbiAgICAgIGlmIChjYXRpID09PSAwICYmIHN1YmkgPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5tb2QsIHN1YmNhdGVnb3J5OiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2QsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IG1vZC5zdWJjYXRlZ29yeS5maWx0ZXIoKHN1YiwgaXN1YikgPT4gc3ViaSAhPT0gaXN1YiksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcmllczogcmVtb3ZlZCB9KTtcclxuICAgIHRoaXMucHJvcHMucmVtb3ZlY2F0ZWdvcnkocmVtb3ZlZCk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkgPSAoeCwgeSwgeikgPT4gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlbW92ZXN1YnR3byA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGFkZHN1YnR3b2NhdCwgaXR3bykgPT4ge1xyXG4gICAgICBpZiAoeCAhPT0gaXR3bykgcmV0dXJuIGFkZHN1YnR3b2NhdDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hZGRzdWJ0d29jYXQsXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGFkZHN1YnR3b2NhdC5zdWJjYXRlZ29yeS5tYXAoKGFkc3QsIGFkc3RpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoeSAhPT0gYWRzdGkpIHJldHVybiBhZHN0O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uYWRzdCxcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGFkc3Quc3VidHdvY2F0ZWdvcnkuZmlsdGVyKChmaWwsIGluZCkgPT4geiAhPT0gaW5kKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiByZW1vdmVzdWJ0d28gfSk7XHJcbiAgICB0aGlzLnByb3BzLnJlbW92ZWNhdGVnb3J5KHJlbW92ZXN1YnR3byk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlSW5wdXQgPSAoaSkgPT4gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbmQoXHJcbiAgICAgIChkYXRhcywgaWR4KSA9PiBlLnRhcmdldC52YWx1ZSA9PT0gZGF0YXMubmFtZVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwia2VuYSBjYXJpXCIsIGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IG5ld0RhdGEgPSB0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChwb3N0LCBpZHgpID0+IHtcclxuICAgICAgaWYgKGkgIT09IGlkeCkgcmV0dXJuIHBvc3Q7XHJcbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvL3RoaXMgcmV0dXJuIHZhbHVlIGlmIHNlbGVjdFxyXG4gICAgICAgIHJldHVybiB7IC4uLnBvc3QsIGNhdGVnb3J5bmFtZTogZGF0YS5uYW1lLCBjYXRlZ29yeWlkOiBkYXRhLmlkIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy90aGlzIHJldHVybiBuZXcgdmFsdWUgd2l0aG91dCBzZWxlY3RcclxuICAgICAgICByZXR1cm4geyAuLi5wb3N0LCBjYXRlZ29yeW5hbWU6IGUudGFyZ2V0LnZhbHVlLCBjYXRlZ29yeWlkOiBcIlwiIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJuZXcgZGF0YSA6IFwiLCBuZXdEYXRhKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYXRlZ29yaWVzOiBuZXdEYXRhLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YklucHV0ID0gKGNhdGlkeCwgc3ViaWR4LCBjYXRlZ29yeW5hbWUpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldCBzdWJjYXRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgY2F0XCIsIGNhdGVnb3J5bmFtZSk7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMuc3RhdGUuZGF0YS5maW5kKFxyXG4gICAgICAoZGF0YXMsIGlkKSA9PiBjYXRlZ29yeW5hbWUgPT09IGRhdGFzLm5hbWVcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgc3ViZGF0YSA9IGNhdGVnb3J5LnN1YmNhdGVnb3J5LmZpbmQoXHJcbiAgICAgICAgKHN1YiwgaXgpID0+IHN1Yi5zdWJjYXRlZ29yeW5hbWUgPT09IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBjYXRlZ29yaVwiLCBzdWJkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RpZmllZCA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKG1vZCwgbW9kaW5keCkgPT4ge1xyXG4gICAgICBpZiAoY2F0aWR4ICE9PSBtb2RpbmR4KSByZXR1cm4gbW9kO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLm1vZCxcclxuICAgICAgICBzdWJjYXRlZ29yeTogbW9kLnN1YmNhdGVnb3J5Lm1hcCgoc3ViLCBpc3ViKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3ViaWR4ICE9PSBpc3ViKSByZXR1cm4gc3ViO1xyXG5cclxuICAgICAgICAgIGlmIChzdWJkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogc3ViZGF0YS5zdWJjYXRlZ29yeW5hbWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogc3ViZGF0YS5pZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3ViLFxyXG4gICAgICAgICAgICAgIHN1YmNhdGVnb3J5bmFtZTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgc3ViY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwibW9kaWZpZWQgOlwiLCBtb2RpZmllZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogbW9kaWZpZWQsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlY2F0ZWdvcnkobW9kaWZpZWQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1YlR3b0lucHV0ID0gKFxyXG4gICAgaW5jYXRpbmR4LFxyXG4gICAgaW5jYXRzdWJpZHgsXHJcbiAgICBpbmNhdHN1YnR3b2lkeCxcclxuICAgIGNhdGVnb3J5bmFtZSxcclxuICAgIHN1YmNhdGVnb3J5bmFtZVxyXG4gICkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgc3VidHdvZGF0YSA9IG51bGw7XHJcbiAgICBsZXQgc3ViZGF0YSA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmRhdGEuZmluZChcclxuICAgICAgKGRhdGFzLCBpZCkgPT4gY2F0ZWdvcnluYW1lID09PSBkYXRhcy5uYW1lXHJcbiAgICApO1xyXG4gICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgIHN1YmRhdGEgPSBjYXRlZ29yeS5zdWJjYXRlZ29yeS5maW5kKFxyXG4gICAgICAgIChzdWIsIGl4KSA9PiBzdWIuc3ViY2F0ZWdvcnluYW1lID09PSBzdWJjYXRlZ29yeW5hbWVcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJkYXRhIGNhdGVnb3JpXCIsIHN1YmRhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHN1YmRhdGEpIHtcclxuICAgICAgc3VidHdvZGF0YSA9IHN1YmRhdGEuU3VidHdvY2F0ZWdvcnkuZmluZChcclxuICAgICAgICAoc3VidHdvLCBzdGkpID0+IHN1YnR3by5zdWJ0d29jYXRlZ29yeW5hbWUgPT09IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN1YnR3b25ldyA9IHRoaXMuc3RhdGUuY2F0ZWdvcmllcy5tYXAoKGNhdHN1YnR3bywgY2F0c3VidHdvaWR4KSA9PiB7XHJcbiAgICAgIGlmIChpbmNhdGluZHggIT09IGNhdHN1YnR3b2lkeCkgcmV0dXJuIGNhdHN1YnR3bztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5jYXRzdWJ0d28sXHJcbiAgICAgICAgc3ViY2F0ZWdvcnk6IGNhdHN1YnR3by5zdWJjYXRlZ29yeS5tYXAoKGNhdHN1YiwgY2F0c3ViaWR4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5jYXRzdWJpZHggIT09IGNhdHN1YmlkeCkgcmV0dXJuIGNhdHN1YjtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmNhdHN1YixcclxuICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnk6IGNhdHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YnR3bywgc3VidHdvaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGluY2F0c3VidHdvaWR4ICE9PSBzdWJ0d29pZHgpIHJldHVybiBzdWJ0d287XHJcblxyXG4gICAgICAgICAgICAgIGlmIChzdWJ0d29kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5zdWJ0d28sXHJcbiAgICAgICAgICAgICAgICAgIHN1YnR3b2NhdGVnb3J5bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeWlkOiBzdWJ0d29kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgLi4uc3VidHdvLFxyXG4gICAgICAgICAgICAgICAgICBzdWJ0d29jYXRlZ29yeW5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgc3VidHdvY2F0ZWdvcnlpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwic3VidHdvbmV3IGNhdCA6XCIsIHN1YnR3b25ldyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogc3VidHdvbmV3LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZWNhdGVnb3J5KHN1YnR3b25ldyk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1PntgQ2F0ZWdvcmkgIyR7aW5kZXggKyAxfSAtICR7ZGF0YS5jYXRlZ29yeW5hbWV9YH08L2g1PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbGlzdD17YGRhdGFsaXN0JHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RhdGEuc3ViY2F0ZWdvcnkgfHwgZGF0YS5kaXNhYmxlID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgQ2F0ZWdvcnkgIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGF0YWxpc3QgaWQ9e2BkYXRhbGlzdCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YWxpc3QgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YWxpc3QubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVDYXRlZ29yeShpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIHshZGF0YS5kaXNhYmxlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnluYW1lICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRDYXRlZ29yeShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhLnN1YmNhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEuc3ViY2F0ZWdvcnkubWFwKChzdWIsIHN1YmlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1YmlkeH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICB7YFN1YiBDYXRlZ29yeSAke3N1Yi5zdWJjYXRlZ29yeW5hbWV9IyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJpZHggKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSBvZiBDYXRlZ29yeSAke2RhdGEuY2F0ZWdvcnluYW1lfSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Yi5zdWJ0d29jYXRlZ29yeSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0PXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke2RhdGEuY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e3N1Yi5zdWJjYXRlZ29yeW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTdWIgQ2F0ZWdvcnkjJHtzdWJpZHggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtkYXRhLmNhdGVnb3J5aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtkYml9IHZhbHVlPXtkYnMuc3ViY2F0ZWdvcnluYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViQ2F0ZWdvcnkoaW5kZXgsIHN1YmlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSAgcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YihpbmRleCwgc3ViaWR4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7c3ViLnN1YnR3b2NhdGVnb3J5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Yi5zdWJ0d29jYXRlZ29yeS5tYXAoKHN1YjIsIGluZHR3bykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZHR3b30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YFN1YiAybmQgQ2F0ZWdvcnkgJHtzdWIyLnN1YnR3b2NhdGVnb3J5bmFtZX0gIyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmR0d28gKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBTdWIgQ2F0ZWdvcnkgJHtzdWIuc3ViY2F0ZWdvcnluYW1lfSMke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gb2YgQ2F0ZWdvcnkgJHtkYXRhLmNhdGVnb3J5bmFtZX0gIyR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17YCR7ZGF0YS5jYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnluYW1lfSR7c3ViLnN1YmNhdGVnb3J5aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFN1YiBUd28gQ2F0ZWdvcnkjJHtpbmR0d28gKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViVHdvSW5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnluYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnN1YmNhdGVnb3J5bmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRhbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtkYXRhLmNhdGVnb3J5bmFtZX0ke3N1Yi5zdWJjYXRlZ29yeW5hbWV9JHtzdWIuc3ViY2F0ZWdvcnlpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAoKGRiLCBkYml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIuaWQgPT09IGRhdGEuY2F0ZWdvcnlpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGIuc3ViY2F0ZWdvcnkubWFwKChkYnMsIGRiaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYnMuaWQgPT09IHN1Yi5zdWJjYXRlZ29yeWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGJzLlN1YnR3b2NhdGVnb3J5Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YnR3bywgc2RiaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2RiaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdWJ0d28uc3VidHdvY2F0ZWdvcnluYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlU3ViVHdvQ2F0ZWdvcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmlkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZHR3b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBidG4tc20gcC0yIG0tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkTW9yZVN1YlR3byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViaWR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kdHdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5ICBwLTIgbS0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBNb3JlIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3N1Yi5zdWJjYXRlZ29yeW5hbWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZHN1YnR3b2NhdGVnb3J5KGluZGV4LCBzdWJpZHgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBUd28gQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNhdGVnb3J5bmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkU3ViQ2F0ZWdvcnkoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgIHAtMiBtLTJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIFN1YiBDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQRGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXRhaWxzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGV0YWlsbmFtZTogXCJcIixcclxuICAgICAgICAgIGRhdGFkZXNjOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXhpb3MoKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvZGV0YWlsc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZyb20gRGV0YWlsczogXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGV0YWlsczogdGhpcy5zdGF0ZS5kZXRhaWxzLmNvbmNhdChbeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmUgPSAodmFsdWUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmRldGFpbHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5kZXRhaWxzLmZpbHRlcigoZGF0YSwgaW5kZXgpID0+IHZhbHVlICE9PSBpbmRleCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGV0YWlsczogcmVtb3ZlLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnByb3BzLnJlbW92ZWRldGFpbChyZW1vdmUpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZURldGFpbE5hbWUgPSAoaWQpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3ZGV0YWlscyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkZXRhaWxuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIGRldGFpbHM6IG5ld2RldGFpbHMsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMucHJvcHMubmV3ZGV0YWlscyhuZXdkZXRhaWxzKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2VEYXRhRGVzYyA9IChpZCkgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdkZXRhaWxkYXRhZGVzYyA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlkICE9PSBpbmRleCkgcmV0dXJuIGRldGFpbDtcclxuICAgICAgcmV0dXJuIHsgLi4uZGV0YWlsLCBkYXRhZGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBkZXRhaWxzOiBuZXdkZXRhaWxkYXRhZGVzYyxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5wcm9wcy5uZXdkZXRhaWxzKG5ld2RldGFpbGRhdGFkZXNjKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGV0YWlscyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbHMubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbGlzdD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgTmFtZSAjJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURldGFpbE5hbWUoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRhdGFkZXNjfVxyXG4gICAgICAgICAgICAgICAgbGlzdD1cImRlc2NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMiBtYi0yXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRGV0YWlscyAjJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF0YURlc2MoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmUoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgIHAtMiBtdC0yIG1iLTIgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxkYXRhbGlzdCBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEgJiZcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2l0ZW0uZGV0YWlsbmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGRhdGFsaXN0IGlkPVwiZGVzY1wiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YSAmJlxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17aXRlbS5kYXRhZGVzY30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kYXRhbGlzdD5cclxuXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIGJ0bi1ibG9jayBtYi0zIG10LTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBNb3JlIERldGFpbFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGxvYWRJbWFnZSBmcm9tIFwiYmx1ZWltcC1sb2FkLWltYWdlL2pzXCI7XHJcbmltcG9ydCBDcm9wcGVydjIgZnJvbSBcIi4vQ3JvcHBlcnYyXCI7XHJcbmNvbnN0IHBpY2EgPSByZXF1aXJlKFwicGljYVwiKSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGljdHVyZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwaWN0dXJlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaW1hZ2VpZDogXCJcIixcclxuICAgICAgICAgIGltYWdlbmFtZTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0YXJnZXRpbWFnZTogbnVsbCxcclxuICAgICAgc2hvd0JsYWNrU2NyZWVuOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgc2hvd0Vhc3lDcm9wOiBmYWxzZSxcclxuICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmlucHV0RmlsZSA9IFtdO1xyXG5cclxuICAgIHRoaXMuZmlsZUlucHV0ID0gKGkpID0+IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWxlW2ldID0gZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbWFnZUFkZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwaWN0dXJlOiB0aGlzLnN0YXRlLnBpY3R1cmUuY29uY2F0KFt7IGltYWdlaWQ6IFwiXCIsIGltYWdlbmFtZTogXCJcIiB9XSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9IChpKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5waWN0dXJlLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIGlmICh0aGlzLmZpbGVJbnB1dCkgdGhpcy5pbnB1dEZpbGVbaV0udmFsdWUgPSBcIlwiO1xyXG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigocywgZmkpID0+IGkgIT09IGZpKTtcclxuICAgIGNvbnN0IGltYWdlZGVsID0gdGhpcy5zdGF0ZS5waWN0dXJlLmZpbHRlcigoaW1hZ2UsIGlkeCkgPT4gaSA9PT0gaWR4KTtcclxuICAgIGNvbnN0IHBpY3R1cmV1cCA9IGltYWdlZGVsLmZpbmQoKHgpID0+IHguaW1hZ2VpZCk7XHJcbiAgICBpZiAodHlwZW9mIHBpY3R1cmV1cCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJEZWxldGluZyBJbWFnZVwiIH0pO1xyXG4gICAgICBBeGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwaWN0dXJldXAuaW1hZ2VpZH0vaW1hZ2VgLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgeyBwaWN0dXJlOiByZW1vdmUsIG1lc3NhZ2U6IG51bGwgfSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVwaWN0dXJlKHJlbW92ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KTtcclxuICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIE5vdCBHb29kIGkgY2FuIGZlZWwgaXQuLlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHBpY3R1cmU6IHJlbW92ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGEpID0+IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBhIDpcIiwgYSk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluaSBlIDpcIiwgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzWzBdLnNpemUgPiA4Mzg4NjA4KSB7XHJcbiAgICAgIGFsZXJ0KFwiSW1hZ2UgRmlsZSB0b28gYmlnLi4gUGxlYXNlIFB1dCBsZXNzIHRoYW4gOG1iXCIpO1xyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vb3JpZ2luYWwgaSBlZGl0IG9uIDIvOC8yMDIxIGNvZGVcclxuXHJcbiAgICAvLyBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0aW1hZ2U6IGEgfSk7XHJcbiAgICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAvLyAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgIC8vICAgICAgIHNyYzogcmVhZGVyLnJlc3VsdCxcclxuICAgIC8vICAgICAgIHVwbG9hZDogdGhpcy5oYW5kbGVVcGxvYWQsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHBheWxvYWQpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRpbWFnZTogYSB9KTtcclxuICAgICAgbG9hZEltYWdlKFxyXG4gICAgICAgIGUudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgIGFzeW5jIChpbWcpID0+IHtcclxuICAgICAgICAgIHZhciBwaXhlbCA9IGltZy5oZWlnaHQgKiBpbWcud2lkdGg7XHJcblxyXG4gICAgICAgICAgaWYgKHBpeGVsID4gMzE0NTcyOCkge1xyXG4gICAgICAgICAgICB2YXIgcmF0aW8gPSBwaXhlbCA+IDUwMzg4NDggPyAwLjUgOiAwLjg7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIlBsZWFzZSB3YWl0IC4uLlwiIH0pO1xyXG4gICAgICAgICAgICAgIHZhciBpbWdjb21wID0gYXdhaXQgY29tcHJlc3NJbWFnZShpbWcsIHJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGJhc2U2NGRhdGEgPSBpbWdjb21wLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NGRhdGEsXHJcbiAgICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNob3dFYXN5Q3JvcDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogZXJyb3IgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlNjRkYXRhID0gaW1nLnRvRGF0YVVSTChgaW1hZ2UvanBlZ2ApO1xyXG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgIHNyYzogYmFzZTY0ZGF0YSxcclxuICAgICAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgb3JpZW50YXRpb246IHRydWUsIGNhbnZhczogdHJ1ZSB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKGltYWdlQmxvYiwgbG9hZGVyKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2VCbG9iKTtcclxuXHJcbiAgICAvL3Rlc3RpbmcgcHVycG9zZVxyXG4gICAgLy8gY29uc3QgZmlsZSA9IGRhdGFVUkx0b0ZpbGUoXCJpbWFnZUJsb2JcIiwgaW1hZ2VCbG9iKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaW1hZ2UgYmxvYlwiLGZpbGUpXHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzL2ltYWdlc1wiLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUFkZEltYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpOyAvL3RoaXMgaXMgdXBsb2FkcyB0byByZXNldCBhbGwgdG8gbnVsbCBmb3IgdXBsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZUVhc3lDcm9wKCk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZSB1cGxvYWRcIiwgZSk7XHJcbiAgICBjb25zdCBpbWFnZVVwbG9hZCA9IHRoaXMuc3RhdGUucGljdHVyZS5tYXAoKGltYWdlLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpICE9PSB0aGlzLnN0YXRlLnRhcmdldGltYWdlKSByZXR1cm4gaW1hZ2U7XHJcbiAgICAgIHJldHVybiB7IC4uLmltYWdlLCBpbWFnZWlkOiBlLmlkLCBpbWFnZW5hbWU6IGUuaW1hZ2UgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBpY3R1cmU6IGltYWdlVXBsb2FkIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5zaG93UGljdHVyZShpbWFnZVVwbG9hZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTaG93RWFzeUNyb3AgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0Vhc3lDcm9wOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xvc2VFYXN5Q3JvcCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93RWFzeUNyb3A6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBpY3R1cmUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUucGljdHVyZS5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHAtMSBwdC0xIG10LTAuOCBtci0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmVJbWFnZShpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMVwiPntpICsgMSArIFwiLlwifTwvZGl2PlxyXG4gICAgICAgICAgICB7ZGF0YS5pbWFnZW5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtkYXRhLmltYWdlbmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZpbGVJbnB1dChpKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWZpbGUgbS0xXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGUoaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gIGJ0bi1wcmltYXJ5IGJ0bi1zbSBidG4tYmxvY2sgbXktM1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW1hZ2VBZGQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE1vcmUgUGljdHVyZVxyXG4gICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e3RoaXMuc3RhdGUubWVzc2FnZX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxDcm9wcGVydjJcclxuICAgICAgICAgIHNob3dEaWFsb2c9e3RoaXMuc3RhdGUuc2hvd0Vhc3lDcm9wfVxyXG4gICAgICAgICAgY2xvc2VEaWFsb2c9e3RoaXMuaGFuZGxlQ2xvc2VFYXN5Q3JvcH1cclxuICAgICAgICAgIHBheWxvYWQ9e3RoaXMuc3RhdGUucGF5bG9hZH1cclxuICAgICAgICAgIHVwbG9hZD17dGhpcy5oYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0RGlhbG9nID0ge1xyXG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgdG9wOiAwLFxyXG4gIGxlZnQ6IDAsXHJcbiAgcmlnaHQ6IDAsXHJcbiAgYm90dG9tOiAwLFxyXG4gIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCIsXHJcbiAgekluZGV4OiBcIjFcIixcclxufTtcclxuY29uc3QgZGl2RGlhbG9nID0ge1xyXG4gIGJhY2tncm91bmQ6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb21wcmVzc0ltYWdlID0gKGltZywgY3J0KSA9PiB7XHJcbiAgdmFyIG9mZlNjcmVlbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgb2ZmU2NyZWVuQ2FudmFzLndpZHRoID0gaW1nLndpZHRoICogY3J0O1xyXG4gIG9mZlNjcmVlbkNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0ICogY3J0O1xyXG4gIHJldHVybiBwaWNhXHJcbiAgICAucmVzaXplKGltZywgb2ZmU2NyZWVuQ2FudmFzKVxyXG4gICAgLnRoZW4oKGltYWdlQ0NTKSA9PiBpbWFnZUNDUylcclxuICAgIC5jYXRjaCgoZSkgPT4gZSk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENvbCwgUm93LCBTcGlubmVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IE1DYXRlZ29yeSBmcm9tIFwiLi9NQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFBEZXRhaWxzIGZyb20gXCIuL1BEZXRhaWxzXCI7XHJcbmltcG9ydCBQaWN0dXJlIGZyb20gXCIuL1BpY3R1cmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBkZXRhaWxzOiBbXSxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgIHByaWNlOiBudWxsLFxyXG4gICAgICBzdG9jazogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgICAgc2hvd2J1dHRvbjogZmFsc2UsXHJcbiAgICAgIHNob3dDcm9wcGVyRGlhbG9nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICBzdG9jayxcclxuICAgICAgZGVzYyxcclxuICAgICAgaW1hZ2VzLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCJTYXZpbmcgZGF0YS4uIFBsZWFzZSBUYWtlIERlZXAgQnJlYXRoIC4uXCIgfSk7XHJcbiAgICBBeGlvcyhcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0c2AsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgIHN0b2NrOiBzdG9jayxcclxuICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICBkZXRhaWxzOiBkZXRhaWxzLFxyXG4gICAgICAgICAgaW1hZ2VzOiBpbWFnZXMsXHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZGF0YSB0byBzZXJ2ZXIuLi4uXCIpO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgYWxlcnQoXCJQcm9kdWN0IFNhdmVkISFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBXcm9uZy4uZXJvcnIgcGxlYXNlIGNvbnRhY3QgcHVsaXNcIixcclxuICAgICAgICAgIHNob3didXR0b246IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlVXBsb2FkZWQgPSAoaW1hZ2VzKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VzOiBpbWFnZXMgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVSZW1vdmVQaWN0dXJlID0gKGltYWdlcykgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlczogaW1hZ2VzIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlQ2hhbmdlQ2F0ZWdvcnkgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChjYXQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2F0ZWdvcmllczogY2F0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVOZXdEZXRhaWxzID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IGUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVEZXRhaWwgPSAocmVtb3ZlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHJlbW92ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTNcIj5cclxuICAgICAgICB7LyogVG9wIFJvdyAqL31cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgeGw9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiB4bD1cIjZcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxQaWN0dXJlXHJcbiAgICAgICAgICAgICAgICBzaG93Q3JvcD17dGhpcy5wcm9wcy5zaG93Q3JvcH1cclxuICAgICAgICAgICAgICAgIHNob3dQaWN0dXJlPXt0aGlzLmhhbmRsZVVwbG9hZGVkfVxyXG4gICAgICAgICAgICAgICAgY2xvc2VDcm9wPXt0aGlzLnByb3BzLmNsb3NlQ3JvcH1cclxuICAgICAgICAgICAgICAgIHJlbW92ZXBpY3R1cmU9e3RoaXMuaGFuZGxlUmVtb3ZlUGljdHVyZX1cclxuICAgICAgICAgICAgICAgIHNob3dFYXN5Q3JvcD17dGhpcy5wcm9wcy5zaG93RWFzeUNyb3B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxNQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgIHJlbW92ZWNhdGVnb3J5PXt0aGlzLmhhbmRsZVJlbW92ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlY2F0ZWdvcnk9e3RoaXMuaGFuZGxlQ2hhbmdlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHhsPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxQRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZGV0YWlsPXt0aGlzLmhhbmRsZVJlbW92ZURldGFpbH1cclxuICAgICAgICAgICAgICAgIG5ld2RldGFpbHM9e3RoaXMuaGFuZGxlTmV3RGV0YWlsc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N1Ym1pdERpYWxvZ30+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtOCBteC1hdXRvIGNvbC1tZC02IGNvbC1sZy00IHAtMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2RpdkRpYWxvZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3didXR0b24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Ym1pdERpYWxvZyA9IHtcclxuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gIHRvcDogMCxcclxuICBsZWZ0OiAwLFxyXG4gIHJpZ2h0OiAwLFxyXG4gIGJvdHRvbTogMCxcclxuICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG59O1xyXG5jb25zdCBkaXZEaWFsb2cgPSB7XHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XHJcbmltcG9ydCB7IFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9Qcm9kdWN0RGV0YWlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZWlkOiBudWxsLFxyXG4gICAgICBuYW1lOiBudWxsLFxyXG4gICAgICBwcmljZTogbnVsbCxcclxuICAgICAgc3RvY2s6IG51bGwsXHJcbiAgICAgIHNhdmVCdXR0b246IFwiZGlzYWJsZWRcIixcclxuICAgICAgY2F0ZWdvcnlJZDogbnVsbCxcclxuICAgICAgaW1hZ2VpZDogbnVsbCxcclxuICAgICAgZGVzYzogbnVsbCxcclxuICAgICAgZGV0YWlsczogW10sXHJcbiAgICAgIHZhbGlkYXRlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXRhaWxzKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW1hZ2VpZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIHN0b2NrLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBkZXNjLFxyXG4gICAgICBkZXRhaWxzLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoaW1hZ2VpZCAmJiBuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGNhdGVnb3J5SWQgJiYgZGVzYykge1xyXG4gICAgICBBeGlvcyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2NhdGVnb3J5SWR9YCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICBzdG9jazogc3RvY2ssXHJcbiAgICAgICAgICAgIGltYWdlaWQ6IGltYWdlaWQsXHJcbiAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGRldGFpbHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGRhdGEgdG8gc2VydmVyLi4uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcHJvZHVjdFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZUltYWdlID0gKCkgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIHVybDogYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHt0aGlzLnN0YXRlLmltYWdlaWR9L2ltYWdlYCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogbnVsbCwgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IGltYWdlSWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIGlmIChpbWFnZUlkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlSW1hZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZEltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgdXBsb2FkXCIsIGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlaWQ6IGUuaWQsIGltYWdlOiBlLmltYWdlIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNlbGVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25TZWxlY3RGaWxlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlc1swXS5zaXplID4gODM4ODYwOCkge1xyXG4gICAgICBhbGVydChcIkltYWdlIEZpbGUgdG9vIGJpZy4uIFBsZWFzZSBQdXQgbGVzcyB0aGFuIDhtYlwiKTtcclxuICAgICAgZS50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBzcmM6IHJlYWRlci5yZXN1bHQsXHJcbiAgICAgICAgICB1cGxvYWQ6IHRoaXMuaGFuZGxlVXBsb2FkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Q3JvcChwYXlsb2FkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVVcGxvYWQgPSAoaW1hZ2VCbG9iLCBsb2FkZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZUNyb3AoKTtcclxuICAgICAgICBsb2FkZXIoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ3JvcCgpO1xyXG4gICAgICAgIGxvYWRlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVEZXRhaWxOYW1lID0gKGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZnJvbSBQcm9kdWN0RGV0YWlscy5qcyBEZXRhaWxOYW1lOiBcIiwgZSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiBlIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGhhbmRsZURldGFpbERlc2MgPSBlID0+e1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJmcm9tIFByb2R1Y3REZXRhaWxzLmpzIERldGFpbERlc2M6IFwiLCBlKVxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHMgOiBlIH0pXHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGltYWdlaWQsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBzYXZlQnV0dG9uLFxyXG4gICAgICBjYXRlZ29yeUlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgc3RvY2ssXHJcbiAgICAgIGRlc2MsXHJcbiAgICAgIHZhbGlkYXRlLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3QgTGlzdDwvTGluaz4ge1wiPiBOZXcgUHJvZHVjdFwifVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0b2NrOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBkZXNjOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzMGVtXCIsIGhlaWdodDogXCI1ZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsbmFtZT17dGhpcy5oYW5kbGVEZXRhaWxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt0aGlzLnZhbGlkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAge2ltYWdlaWQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9kdWN0IEltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2VsZWN0RmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2ltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIxMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmUgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPENhdGVnb3JpZXMgc2VsZWN0ZWQ9e3RoaXMuaGFuZGxlU2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aW1hZ2VpZCAmJlxyXG4gICAgICAgICAgICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlICYmXHJcbiAgICAgICAgICAgICAgICAgIHByaWNlID49IDAgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgJiZcclxuICAgICAgICAgICAgICAgICAgc3RvY2sgPj0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGRlc2MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5TYXZlIFByb2R1Y3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2F2ZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlIGZhLTJ4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRmlsbCBBbGwgRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge3N0b2NrIDwgMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgU3RvY2sgQW1vdW50IG1vcmUgdGhhbiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtwcmljZSA8IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHB1dCBwcmljZSBtb3JlIHRoYW4gMFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVsbCxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBjYXRlZ29yeURhdGE6IG51bGxcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG51bGwgfSk7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIHVybDogXCJhcGkvYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcmllc1wiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICBkZXRhaWxzOiB0aGlzLnN0YXRlLmRldGFpbHNcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsIHNob3c6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCh0aGlzLnN0YXRlLmNhdGVnb3J5RGF0YS5pZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogXCJcIiwgZGV0YWlsczogXCJcIiwgc2hvdzogdHJ1ZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBzaG93LCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtkYXRhICYmIHNob3cgJiYgKFxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeURhdGEgPyBjYXRlZ29yeURhdGEuaWQgOiBudWxsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YSAhPT0gbnVsbCAmJiBzaG93ICYmIChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFsc2VcIj5QbGVhc2UgU2VsZWN0IEEgQ2F0ZWdvcnk8L29wdGlvbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtkYXRhICE9PSBudWxsICYmIHNob3cgPyAoXHJcbiAgICAgICAgICAgICAgZGF0YS5tYXAoZGF0YSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTE9BRElOR1wiPkxPQURJTkcuLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIE5ldyBDYXRlZ29yeVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0bz1cIi9jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVkaXRcIiAvPiBDYXRlZ29yeSBMaXN0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IE5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhdGVnb3J5IERldGFpbHNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWwgQWRkIENhdGVnb3J5XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhdGVnb3J5fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7LyogeyFzaG93ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgVGFibGUsIFNwaW5uZXIsIFBhZ2luYXRpb24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE1vZGFsQ2F0IGZyb20gXCIuLi9PbGQvTW9kYWxDYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF4aW9zKCkge1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IGlkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL2NhdGVnb3JpZXMvJHtpZH1gXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXhpb3MoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBmbGV4OiAxLCBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYm94ZXNcIiAvPiB7XCIgIFwifVxyXG4gICAgICAgICAgPExpbmsgdG89XCIvcHJvZHVjdFwiPlByb2R1Y3Q8L0xpbms+XHJcbiAgICAgICAgICB7XCIgICBcIn0+IHtcIiAgIFwifVxyXG4gICAgICAgICAgQ2F0ZWdvcnkgTGlzdFxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIHZhcmlhbnQ9XCJkYXJrXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkNhdGVnb3J5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5kZXRhaWxzPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgIGRhdGEubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPHRkPntpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3gubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3guZGV0YWlsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjY2F0ZWdvcnlcIiArIHguaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLTF4IGZhLXRyYXNoLWFsdFwiIC8+IFJlbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxDYXRcclxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JvcERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzcmM6IG51bGwsXHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICBhc3BlY3Q6IDEgLyAxLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgICAgaW1hZ2VCbG9iOiBudWxsLFxyXG4gICAgICBkZWZhdWx0SW1hZ2U6IHRydWUsXHJcbiAgICAgIGxvYWRpbmc6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdEZpbGUgPSBlID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlYWRlci5yZXN1bHQgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uSW1hZ2VMb2FkZWQgPSAoaW1hZ2UsIGNyb3ApID0+IHtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgdGhpcy5tYWtlQ2xpZW50Q3JvcChjcm9wKTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDaGFuZ2UgPSBjcm9wID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wIH0pO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIG1ha2VDbGllbnRDcm9wKGNyb3ApIHtcclxuICAgIGlmICh0aGlzLmltYWdlUmVmICYmIGNyb3Aud2lkdGggJiYgY3JvcC5oZWlnaHQpIHtcclxuICAgICAgY29uc3QgY3JvcHBlZEltYWdlVXJsID0gYXdhaXQgdGhpcy5nZXRDcm9wcGVkSW1nKFxyXG4gICAgICAgIHRoaXMuaW1hZ2VSZWYsXHJcbiAgICAgICAgY3JvcCxcclxuICAgICAgICBcIm5ld0ZpbGUuanBlZ1wiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjcm9wcGVkSW1hZ2VVcmwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wcGVkSW1nKGltYWdlLCBjcm9wLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGltYWdlLm5hdHVyYWxXaWR0aCAvIGltYWdlLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVZID0gaW1hZ2UubmF0dXJhbEhlaWdodCAvIGltYWdlLmhlaWdodDtcclxuICAgIGNhbnZhcy53aWR0aCA9IGNyb3Aud2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gY3JvcC5oZWlnaHQ7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGltYWdlLFxyXG4gICAgICBjcm9wLnggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AueSAqIHNjYWxlWSxcclxuICAgICAgY3JvcC53aWR0aCAqIHNjYWxlWCxcclxuICAgICAgY3JvcC5oZWlnaHQgKiBzY2FsZVksXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGNyb3Aud2lkdGgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAvL3JlamVjdChuZXcgRXJyb3IoJ0NhbnZhcyBpcyBlbXB0eScpKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW52YXMgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaW1hZ2VCbG9iOiBibG9iXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmxvYi5uYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5maWxlVXJsKTtcclxuICAgICAgICB0aGlzLmZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgIH0sIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRpbmcuLi5cIik7XHJcbiAgICBjb25zdCB7IGltYWdlQmxvYiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZUJsb2IpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvYWRtaW4vcHJvZHVjdHMvaW1hZ2VzXCIsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRkSW1hZ2UocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzcmMsIGNyb3AsIGRlZmF1bHRJbWFnZSwgY3JvcHBlZEltYWdlVXJsLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VXBsb2FkaW5nIC4uLi48L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aDQ+Q3JvcCBhbmQgVXBsb2FkIEltYWdlPC9oND5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vblNlbGVjdEZpbGV9IC8+XHJcblxyXG4gICAgICAgIHtzcmMgJiYgZGVmYXVsdEltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBkZWZhdWx0SW1hZ2U6IGZhbHNlIH0pfT5cclxuICAgICAgICAgICAgICAgIENyb3BcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7IWRlZmF1bHRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ3JvcFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdENhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgQXhpb3MuZ2V0KFwiYXBpL2FkbWluL3Byb2R1Y3QvY2F0ZWdvcmllc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogdGhpcy5wcm9wcy5jYXRlZ29yeUlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgY2F0ZWdvcnlJZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvcHMgb2YgRWRpdENhdFwiLCB0aGlzLnByb3BzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnByb3BzLmhhbmRsZUNhdGVnb3J5KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtjYXRlZ29yeUlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKCh4LCB5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17eX0gdmFsdWU9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICB7eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0UHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzOiB0aGlzLnByb3BzLmZvcmRldGFpbHMgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEZXRhaWxDaGFuZ2UgPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRhdGEsIGRhdGFpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGRhdGFpbmRleCkgcmV0dXJuIGRhdGE7XHJcbiAgICAgIHJldHVybiB7IC4uLmRhdGEsIGRldGFpbG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlsczogbmV3RGF0YSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGF0YWNoYW5nZShuZXdEYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgaGFuZGxlRGV0YWlsVmFsdWVDaGFuZ2UgPSAoaW5kZXgpID0+IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IHRoaXMuc3RhdGUuZGV0YWlscy5tYXAoKGRhdGEsIGRhdGFpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggIT09IGRhdGFpbmRleCkgcmV0dXJuIGRhdGE7XHJcbiAgICAgIHJldHVybiB7IC4uLmRhdGEsIGRhdGFkZXNjOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRldGFpbHM6IG5ld0RhdGEgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRhdGFjaGFuZ2UobmV3RGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJdGVtID0gKGluZGV4KSA9PiAoZXZlbnQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBZGREZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRldGFpbHM6IHRoaXMuc3RhdGUuZGV0YWlscy5jb25jYXQoW1xyXG4gICAgICAgIHsgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIsIGlkOiBcIlwiIH0sXHJcbiAgICAgIF0pLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIGNvbnN0IHsgZGV0YWlscyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg0PlByb2R1Y3QgRGV0YWlsKHMpPC9oND5cclxuICAgICAgICB7ZGV0YWlsc1xyXG4gICAgICAgICAgPyBkZXRhaWxzLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlaG9sZGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuZGV0YWlsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGV0YWlsQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuZGF0YWRlc2N9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURldGFpbFZhbHVlQ2hhbmdlKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZUl0ZW0oZGF0YS5pZCA/IGRhdGEuaWQgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbH1cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGREZXRhaWxzfSBjbGFzc05hbWU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3QgRGV0YWlsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgRWRpdENhdCBmcm9tIFwiLi9FZGl0Q2F0XCI7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIjtcclxuaW1wb3J0IFVwbG9hZCBmcm9tIFwiLi9VcGxvYWRcIjtcclxuaW1wb3J0IEltYWdlTGlzdCBmcm9tIFwiLi9JbWFnZUxpc3RcIjtcclxuaW1wb3J0IENyb3BEaWFsb2cgZnJvbSBcIi4vQ3JvcERpYWxvZ1wiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEVkaXRQcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9FZGl0UHJvZHVjdERldGFpbHNcIjtcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL1Byb2R1Y3REZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgbmFtZTogbnVsbCxcclxuICAgICAgcHJpY2U6IG51bGwsXHJcbiAgICAgIHN0b2NrOiBudWxsLFxyXG4gICAgICBkZXNjOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUlkOiBudWxsLFxyXG4gICAgICBpbWFnZTogbnVsbCxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgZGV0YWlsczogbnVsbCxcclxuICAgICAgZ290bnVsbGRhdGEgOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubG9jYXRpb24uc3RhdGU7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2lkfWBcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgbmFtZTogZGF0YS5wcm9kdWN0TmFtZSxcclxuICAgICAgICBwcmljZTogZGF0YS5wcm9kdWN0UHJpY2UsXHJcbiAgICAgICAgc3RvY2s6IGRhdGEucHJvZHVjdFN0b2NrLFxyXG4gICAgICAgIGRlc2M6IGRhdGEucHJvZHVjdERlc2MsXHJcbiAgICAgICAgZGV0YWlscyA6IGRhdGEucHJvZHVjdERldGFpbHNzLFxyXG4gICAgICAgIGdvdG51bGxkYXRhIDogdHJ1ZSxcclxuXHJcblxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5ID0gaWQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhdGVnb3J5SWQ6IGlkXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBBeGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi9pbWFnZXMvJHtkYXRhLmlkfS9maWxlL3Byb2R1Y3RgLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW1hZ2U6IGltYWdlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNhdmUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIG5hbWUsIHByaWNlLCBzdG9jaywgZGVzY30gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgaWYobmFtZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBuYW1lID0gZGF0YS5wcm9kdWN0TmFtZTtcclxuICAgIH1cclxuICAgIGlmKHByaWNlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgIHByaWNlID0gZGF0YS5wcm9kdWN0UHJpY2U7XHJcbiAgICB9XHJcbiAgICBpZihzdG9jayA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBzdG9jayA9IGRhdGEucHJvZHVjdFN0b2NrO1xyXG4gICAgfVxyXG4gICAgaWYoZGVzYyA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICBkZXNjID0gZGF0YS5wcm9kdWN0RGVzYztcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblxyXG5cclxuICAgIGlmIChuYW1lICYmIHByaWNlICYmIHN0b2NrICYmIGRlc2MpIHtcclxuXHJcbiAgICAgIEF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgdXJsOiBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke2RhdGEuaWR9YCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHN0b2NrLFxyXG4gICAgICAgICAgZGVzYzogZGVzYyxcclxuICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlOiBcIkRhdGEgSGFzIEJlZW4gU2F2ZWRcIiB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IGBEYXRhIE5vdCBTYXZlIC4gRXJyb3IgOiAke2V9YCB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiRGF0YSBub3Qgc2F2ZS4gUGxlYXNlIEZpbGwgQWxsIHJlcXVpcmVtZW50IGZpZWxkc1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0ID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5SWQ6IG51bGwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNob3cgc29tZXRoaW5nIGhlcmVcIiwgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2F0ZWdvcnlJZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRGV0YWlsc051bGwgPSBlID0+IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGV0YWlscyA6IGUgLCBnb3RudWxsZGF0YSA6IGZhbHNlfSlcclxuICB9XHJcbiAgaGFuZGxlRGV0YWlsQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkZXRhaWxzIDogZSwgZ290bnVsbGRhdGEgOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBZGRJbWFnZSA9IGUgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VpZDogZS5pZCwgaW1hZ2U6IGUuaW1hZ2UsIHNob3dBZGRJbWFnZTogZmFsc2UgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIG1lc3NhZ2UsIGNhdGVnb3J5SWQsIGltYWdlLCBkZXRhaWxzLCBnb3RudWxsZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib3hlc1wiIC8+IHtcIiAgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9kdWN0XCI+UHJvZHVjdCBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAge1wiICAgXCJ9PiB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgUHJvZHVjdFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jazwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMGVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhLnByb2R1Y3RTdG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2s6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzBlbVwiLCBoZWlnaHQ6IFwiMTBlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEucHJvZHVjdERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZGVzYzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dBZGRJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdWJtaXREaWFsb2d9PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTggbXgtYXV0byBjb2wtbWQtNiBjb2wtbGctNCBwLTJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtkaXZEaWFsb2d9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JvcERpYWxvZyBhZGRJbWFnZT17dGhpcy5oYW5kbGVBZGRJbWFnZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZEltYWdlOiBmYWxzZSB9KX0+XHJcbiAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge21lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3VibWl0RGlhbG9nfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC04IG14LWF1dG8gY29sLW1kLTYgY29sLWxnLTQgcC0yXCJcclxuICAgICAgICAgICAgICBzdHlsZT17ZGl2RGlhbG9nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPnttZXNzYWdlfTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXREaWFsb2cgPSB7XHJcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICB0b3A6IDAsXHJcbiAgbGVmdDogMCxcclxuICByaWdodDogMCxcclxuICBib3R0b206IDAsXHJcbiAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIlxyXG59O1xyXG5jb25zdCBkaXZEaWFsb2cgPSB7XHJcbiAgYmFja2dyb3VuZDogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5oYW5kbGVBeGlvcygpO1xyXG4gIH1cclxuICBoYW5kbGVBeGlvcygpIHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9pbWFnZXMvXCJcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF0YTogcmVzLmRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGltYWdlQ2xpY2tlZCA9IGltYWdlID0+IHtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aW1hZ2V9L2ltYWdlYFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogbnVsbCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUF4aW9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5JbWFnZSBMaXN0PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgZGF0YS5tYXAoKHgsIHkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBwLTJcIiBrZXk9e3l9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDbGlja2VkKHguaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBYXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvXCIgKyB4LmZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9e1wiY2F0ZWdvcnlcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcImNhdGVnb3J5XCIgKyB0aGlzLnByb3BzLmlkICsgXCJMYWJlbFwifVxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+RGVsZXRlPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgRGVsZXRpbmcgdGhpcyBDYXRlZ29yeSB3aWxsIGRlbGV0ZSBhbGwgcHJvZHVjdCBmb3IgdGhpcyBjYXRlZ29yeS5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBDYXRlZ29yeSBcInt0aGlzLnByb3BzLm5hbWV9XCIgPyAuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsUHJvZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgIGlkPXtcInByb2R1Y3RcIiArIHRoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgLy8gdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtcInByb2R1Y3RcIiArIHRoaXMucHJvcHMuaWQgKyBcIkxhYmVsXCJ9XHJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5EZWxldGU8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICBDb25maXJtIERlbGV0ZSBQcm9kdWN0IFwie3RoaXMucHJvcHMubmFtZX1cIiA/XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlKHRoaXMucHJvcHMuaWQpfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hhcmVob2xkZXJzOiBbeyBkZXRhaWxuYW1lOiBcIlwiLCBkYXRhZGVzYzogXCJcIiB9XSxcclxuICAgICAgZGV0YWlsbmFtZWhhc2lucHV0OiBmYWxzZSxcclxuICAgICAgZGF0YWRlc2NoYXNpbnB1dDogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlID0gKGlkeCkgPT4gKGV2dCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U2hhcmVob2xkZXJzID0gdGhpcy5zdGF0ZS5zaGFyZWhvbGRlcnMubWFwKChzaGFyZWhvbGRlciwgc2lkeCkgPT4ge1xyXG4gICAgICBpZiAoaWR4ICE9PSBzaWR4KSByZXR1cm4gc2hhcmVob2xkZXI7XHJcbiAgICAgIHJldHVybiB7IC4uLnNoYXJlaG9sZGVyLCBkZXRhaWxuYW1lOiBldnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVob2xkZXJzOiBuZXdTaGFyZWhvbGRlcnMgfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmRldGFpbG5hbWUobmV3U2hhcmVob2xkZXJzKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNoYXJlaG9sZGVyRGVzY0NoYW5nZSA9IChpZHgpID0+IChldnQpID0+IHtcclxuICAgIGNvbnN0IG5ld1NoYXJlaG9sZGVyZGVzYyA9IHRoaXMuc3RhdGUuc2hhcmVob2xkZXJzLm1hcChcclxuICAgICAgKHNoYXJlaG9sZGVyLCBzaWR4KSA9PiB7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gc2lkeCkgcmV0dXJuIHNoYXJlaG9sZGVyO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnNoYXJlaG9sZGVyLCBkYXRhZGVzYzogZXZ0LnRhcmdldC52YWx1ZSB9O1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZWhvbGRlcnM6IG5ld1NoYXJlaG9sZGVyZGVzYyB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShuZXdTaGFyZWhvbGRlcmRlc2MpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQWRkU2hhcmVob2xkZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hhcmVob2xkZXJzOiB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5jb25jYXQoW1xyXG4gICAgICAgIHsgZGV0YWlsbmFtZTogXCJcIiwgZGF0YWRlc2M6IFwiXCIgfSxcclxuICAgICAgXSksXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVSZW1vdmVTaGFyZWhvbGRlciA9IChpZHgpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbW92ZWQgPSB0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5maWx0ZXIoKHMsIHNpZHgpID0+IGlkeCAhPT0gc2lkeCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hhcmVob2xkZXJzOiByZW1vdmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZXRhaWxuYW1lKHJlbW92ZWQpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucHJvcHMuZGV0YWlsbmFtZShyZW1vdmVkKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND5Qcm9kdWN0IERldGFpbChzKTwvaDQ+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNoYXJlaG9sZGVycy5tYXAoKHNoYXJlaG9sZGVyLCBpZHgpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVob2xkZXJcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BOYW1lIE9mIERldGFpbCAjJHtpZHggKyAxfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NoYXJlaG9sZGVyLmRldGFpbG5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcmVob2xkZXJOYW1lQ2hhbmdlKGlkeCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRldGFpbG5hbWVoYXNpbnB1dFxyXG4gICAgICAgICAgICAgID8gXCJOYW1lIG9mIGRldGFpbCBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjEyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BEZXRhaWwgRGF0YSAjJHtpZHggKyAxfSBgfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaGFyZWhvbGRlci5kYXRhZGVzY31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGFyZWhvbGRlckRlc2NDaGFuZ2UoaWR4KX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFkZXNjaGFzaW5wdXQgPyBcIkRldGFpbCBkYXRhIGlzIHJlcXVpcmVkXCIgOiBudWxsfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmVTaGFyZWhvbGRlcihpZHgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkU2hhcmVob2xkZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIFByb2R1Y3QgRGV0YWlsXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgU3Bpbm5lciwgUGFnaW5hdGlvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgTW9kYWxQcm9kIGZyb20gXCIuLi9PbGQvTW9kYWxQcm9kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIHBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgcHJvZHVjdDogbnVsbCxcclxuICAgICAgY2F0ZWdvcnlEYXRhOiBudWxsLFxyXG4gICAgICBjYXRlZ29yeUZpbHRlcjogbnVsbCxcclxuICAgICAgc3RvY2tncmVhdDogbnVsbCxcclxuICAgICAgc3RvY2tsZXNzOiBudWxsLFxyXG4gICAgICB0b2dnbGVkIDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9kdWN0SW5wdXQgPSBudWxsO1xyXG4gICAgdGhpcy5jYXRlZ29yeUlucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gbnVsbDtcclxuICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucHJvZHVjdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvZHVjdElucHV0ID0gZTtcclxuICAgIH07XHJcbiBcclxuICAgIHRoaXMuc3RvY2tncmVhdCA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tncmVhdElucHV0ID0gZTtcclxuICAgIH07XHJcbiAgICB0aGlzLnN0b2NrbGVzcyA9IChlKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvY2tsZXNzSW5wdXQgPSBlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYWdlX3NpemUpO1xyXG4gICAgLy8gLS1wYWdlX251bWJlcjsgLy8gYmVjYXVzZSBwYWdlcyBsb2dpY2FsbHkgc3RhcnQgd2l0aCAxLCBidXQgdGVjaG5pY2FsbHkgd2l0aCAwXHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UocGFnZV9udW1iZXIgKiBwYWdlX3NpemUsIChwYWdlX251bWJlciArIDEpICogcGFnZV9zaXplKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0c2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkZWZhdWx0RGF0YTogZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5wYWdpbmF0ZURhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuXHJcbiAgICBBeGlvcy5nZXQoXCJhcGkvYWRtaW4vcHJvZHVjdC9jYXRlZ29yaWVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjYXRlZ29yeURhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwYWdpbmF0ZURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgcmFuZ2UgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyBsaW1pdCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFnaW5hdGlvbjogdGhpcy5wYWdpbmF0ZShkYXRhLCBsaW1pdCwgMCksXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgYWN0aXZlOiAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRlKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5zdGF0ZS5saW1pdCwgcGFnZSksXHJcbiAgICAgIGFjdGl2ZTogcGFnZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJoYW5kbGUgcmVtb3ZlXCIsIGlkKTtcclxuICAgIEF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICB1cmw6IGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7aWR9YCxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBsZXQgeyBkYXRhLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgbGV0IGRlbGV0ZWQgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5pZCAhPT0gaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkZWxldGVkIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGFnZShhY3RpdmUpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVFZGl0KGlkKSB7XHJcbiAgICB0aGlzLnByb3BzLmVkaXQoaWQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsZWFyaW5nXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2R1Y3QpIHRoaXMucHJvZHVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrZ3JlYXQpIHRoaXMuc3RvY2tncmVhdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnN0b2NrbGVzcykgdGhpcy5zdG9ja2xlc3NJbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByb2R1Y3Q6IG51bGwsXHJcbiAgICAgIGNhdGVnb3J5RmlsdGVyOiBudWxsLFxyXG4gICAgICBzdG9ja2dyZWF0OiBudWxsLFxyXG4gICAgICBzdG9ja2xlc3M6IG51bGwsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3QsIGNhdGVnb3J5RmlsdGVyLCBzdG9ja2dyZWF0LCBzdG9ja2xlc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGVmYXVsdERhdGE7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoXHJcbiAgICAgICAgKHgpID0+IHgucHJvZHVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb2R1Y3QudG9Mb3dlckNhc2UoKSkgIT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5RmlsdGVyKSB7XHJcbiAgICAgIGlmIChjYXRlZ29yeUZpbHRlciAhPT0gXCJOT05FXCIpIHtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHguY2F0ZWdvcnkubmFtZSA9PT0gY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tncmVhdCkge1xyXG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKHgpID0+IHgucHJvZHVjdFN0b2NrID4gcGFyc2VGbG9hdChzdG9ja2dyZWF0KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RvY2tsZXNzKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoeCkgPT4geC5wcm9kdWN0U3RvY2sgPCBwYXJzZUZsb2F0KHN0b2NrbGVzcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnaW5hdGVEYXRhKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVNvcnRWaWV3PSAoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBsaXN0ID0gdGhpcy5zdGF0ZS5kYXRhXHJcbiAgICBpZih0aGlzLnN0YXRlLnRvZ2dsZWQpe1xyXG4gICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGEudmlldyAtIGIudmlldylcclxuICAgICAgdGhpcy5wYWdpbmF0ZURhdGEobGlzdCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvZ2dsZWQgOiBmYWxzZX0pXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4gYi52aWV3IC0gYS52aWV3KVxyXG4gICAgICB0aGlzLnBhZ2luYXRlRGF0YShsaXN0KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dG9nZ2xlZCA6IHRydWV9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBhY3RpdmUsIHJhbmdlLCBwYWdpbmF0aW9uLCBjYXRlZ29yeURhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBwYWdpbmF0aW9uIDogXCIsIHBhZ2luYXRpb24pO1xyXG4gICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgIGZvciAobGV0IG51bWJlciA9IDA7IG51bWJlciA8IHJhbmdlOyBudW1iZXIrKykge1xyXG4gICAgICAgIGl0ZW1zLnB1c2goXHJcbiAgICAgICAgICA8UGFnaW5hdGlvbi5JdGVtXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBhZ2UobnVtYmVyKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17bnVtYmVyID09PSBhY3RpdmV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtudW1iZXIgKyAxfVxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uLkl0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYm9yZGVyIHJvdW5kZWQgbWItM1wiPlxyXG4gICAgICAgICAgPGg1PlNlYXJjaDwvaDU+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3J5RmlsdGVyOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEyZW1cIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOT05FXCI+RmlsdGVyIEJ5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlEYXRhICYmXHJcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RGF0YS5tYXAoKGRhdGEpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZGF0YS5pZH0gdmFsdWU9e2RhdGEubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0b2NrIEdyZWF0ZXIgVGhhbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnN0b2NrZ3JlYXR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrZ3JlYXQ6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdG9jayBMZXNzIFRoYW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zdG9ja2xlc3N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBzdG9ja2xlc3M6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz4ge1wiICBcIn0gU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lcmFzZXJcIiAvPiB7XCIgIFwifSBDbGVhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMgcGItM1wiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZGF0YS5sZW5ndGh9IHJlc3VsdCBmb3VuZDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoNj5ObyByZXN1bHQgZm91bmQ8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0XCIgdG89XCIvY3JlYXRlcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1zcXVhcmUgZmEtMXhcIiAvPiBDcmVhdGUgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlld3M8YSBocmVmPVwiI1wiICAgb25DbGljaz17dGhpcy5oYW5kbGVTb3J0Vmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZ2dsZWQgPyAgPGkgY2xhc3M9XCJmYXMgZmEtc29ydC1hbW91bnQtZG93blwiPjwvaT4gOjxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtYW1vdW50LXVwXCI+PC9pPiB9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtwYWdpbmF0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb24ubWFwKCh4LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2krMX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3gucGljdHVyZXMubWFwKChhLCBiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Yn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9cIiArIGEuZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt4LnByb2R1Y3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC52aWV3ID8geC52aWV3IDogbnVsbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3gucHJvZHVjdFByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eC5wcm9kdWN0U3RvY2t9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUVkaXQoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lZGl0IGZhLTF4XCIgLz4gRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBwYXRobmFtZTogXCIvZWRpdFwiLCBzdGF0ZTogeyBpZDogeC5pZCB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVkaXRcIiAvPiB7XCIgIFwifUVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZW1vdmUoeC5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS0xeCBmYS10cmFzaC1hbHRcIiAvPiBSZW1vdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD17XCIjcHJvZHVjdFwiICsgeC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtMXggZmEtdHJhc2gtYWx0XCIgLz4gUmVtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFByb2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZT17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17eC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3gucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLlByZXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgLSAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IDB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbj57aXRlbXN9PC9QYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uLk5leHRcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGFnZShhY3RpdmUgKyAxKX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmUgPT09IHJhbmdlIC0gMX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBSZWFjdENyb3AgZnJvbSBcInJlYWN0LWltYWdlLWNyb3BcIjtcclxuLy8gaW1wb3J0IFwicmVhY3QtaW1hZ2UtY3JvcC9kaXN0L1JlYWN0Q3JvcC5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNyYzogbnVsbCxcclxuICAgIGNyb3A6IHtcclxuICAgICAgYXNwZWN0OiAxIC8gMVxyXG4gICAgfSxcclxuICAgIGNyb3BwZWRJbWFnZVVybDogbnVsbCxcclxuICAgIGltYWdlQmxvYjogbnVsbFxyXG4gIH07XHJcblxyXG4gIG9uU2VsZWN0RmlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogcmVhZGVyLnJlc3VsdCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dDcm9wKHRoaXMuc3RhdGUuc3JjKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25JbWFnZUxvYWRlZCA9IChpbWFnZSwgY3JvcCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmltYWdlbG9hZFwiKTtcclxuICAgIHRoaXMuaW1hZ2VSZWYgPSBpbWFnZTtcclxuICB9O1xyXG5cclxuICBvbkNyb3BDb21wbGV0ZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3AgY29tcGxldGVcIik7XHJcbiAgICB0aGlzLm1ha2VDbGllbnRDcm9wKGNyb3ApO1xyXG4gIH07XHJcblxyXG4gIG9uQ3JvcENoYW5nZSA9IGNyb3AgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvbmNyb3BjaGFuZ2VcIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcCB9KTtcclxuICB9O1xyXG5cclxuICBhc3luYyBtYWtlQ2xpZW50Q3JvcChjcm9wKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZVJlZiAmJiBjcm9wLndpZHRoICYmIGNyb3AuaGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IGNyb3BwZWRJbWFnZVVybCA9IGF3YWl0IHRoaXMuZ2V0Q3JvcHBlZEltZyhcclxuICAgICAgICB0aGlzLmltYWdlUmVmLFxyXG4gICAgICAgIGNyb3AsXHJcbiAgICAgICAgXCJuZXdGaWxlLmpwZWdcIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEltYWdlVXJsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q3JvcHBlZEltZyhpbWFnZSwgY3JvcCwgZmlsZU5hbWUpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICBjb25zdCBzY2FsZVggPSBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGltYWdlLm5hdHVyYWxIZWlnaHQgLyBpbWFnZS5oZWlnaHQ7XHJcbiAgICBjYW52YXMud2lkdGggPSBjcm9wLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGNyb3AuaGVpZ2h0O1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgY3JvcC54ICogc2NhbGVYLFxyXG4gICAgICBjcm9wLnkgKiBzY2FsZVksXHJcbiAgICAgIGNyb3Aud2lkdGggKiBzY2FsZVgsXHJcbiAgICAgIGNyb3AuaGVpZ2h0ICogc2NhbGVZLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBjcm9wLndpZHRoLFxyXG4gICAgICBjcm9wLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGlmICghYmxvYikge1xyXG4gICAgICAgICAgLy9yZWplY3QobmV3IEVycm9yKCdDYW52YXMgaXMgZW1wdHknKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FudmFzIGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGltYWdlQmxvYjogYmxvYlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJsb2IubmFtZSA9IGZpbGVOYW1lO1xyXG4gICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZmlsZVVybCk7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVVcmwpO1xyXG4gICAgICB9LCBcImltYWdlL2pwZWdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VCbG9iIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGltYWdlQmxvYik7XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0cy9pbWFnZXNcIixcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zdCB7IGFkZGltYWdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICBhZGRpbWFnZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgLy90b2RvIHRoaXMgaXMgc3VjZXNzIHVwbG9hZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjcm9wLCBjcm9wcGVkSW1hZ2VVcmwsIHNyYyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25TZWxlY3RGaWxlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3NyYyAmJiAoXHJcbiAgICAgICAgICAgIDxSZWFjdENyb3BcclxuICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICBjcm9wPXtjcm9wfVxyXG4gICAgICAgICAgICAgIG9uSW1hZ2VMb2FkZWQ9e3RoaXMub25JbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXt0aGlzLm9uQ3JvcENvbXBsZXRlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPHAgLz5cclxuICAgICAgICAgIHsvKiB7Y3JvcHBlZEltYWdlVXJsICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDcm9wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtjcm9wcGVkSW1hZ2VVcmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVVcGxvYWR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICBVcGxvYWRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8Um91dGVyPlxyXG4gICAgPEFwcCAvPlxyXG4gIDwvUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1c3RvbWVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L2N1c3RvbWVyL2luZGV4XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiIHN0eWxlPXt7IGZsZXg6IDEsIHBhZGRpbmc6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIDxoND5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+XHJcbiAgICAgICAgICB7XCIgIFwifVxyXG4gICAgICAgICAgQ3VzdG9tZXJcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxDdXN0b21lckxpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ29sLCBSb3csIFNwaW5uZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuXHJcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRGdWxsWWVhcigpO1xyXG5jb25zdCBtb250aCA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgbW9udGg6IG1vbnRoLFxyXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZShEYXRlLm5vdygpKSxcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIEF4aW9zLmdldChgL2FwaS9hZG1pbi9kYXNoYm9hcmQ/eWVhcj0ke3RoaXMuc3RhdGUueWVhcn1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGRhdGUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IG5ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyBkYXRhOiBudWxsLCB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIHN0YXJ0RGF0ZTogZGF0ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmdldERhdGEoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVNb250aChtb250aCkge1xyXG4gICAgc3dpdGNoIChtb250aCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIFwiSmFudWFyeVwiO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgcmV0dXJuIFwiRmVidWFyeVwiO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgcmV0dXJuIFwiTWFyY2hcIjtcclxuICAgICAgY2FzZSA0OlxyXG4gICAgICAgIHJldHVybiBcIkFwcmlsXCI7XHJcbiAgICAgIGNhc2UgNTpcclxuICAgICAgICByZXR1cm4gXCJNYXlcIjtcclxuICAgICAgY2FzZSA2OlxyXG4gICAgICAgIHJldHVybiBcIkp1bmVcIjtcclxuICAgICAgY2FzZSA3OlxyXG4gICAgICAgIHJldHVybiBcIkp1bHlcIjtcclxuICAgICAgY2FzZSA4OlxyXG4gICAgICAgIHJldHVybiBcIkF1Z3VzdFwiO1xyXG4gICAgICBjYXNlIDk6XHJcbiAgICAgICAgcmV0dXJuIFwiU2VwdGVtYmVyXCI7XHJcbiAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgcmV0dXJuIFwiT2NrdG9iZXJcIjtcclxuICAgICAgY2FzZSAxMTpcclxuICAgICAgICByZXR1cm4gXCJOb3ZlbWJlclwiO1xyXG4gICAgICBjYXNlIDEyOlxyXG4gICAgICAgIHJldHVybiBcIkRpc2VtYmVyXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiRXJyb3JcIjtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IGRhdGE6IG51bGwsIHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgc3RhcnREYXRlOiBkYXRlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuZ2V0RGF0YSgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBmb3IgZGFzaGJvYXJkXCIsIHRoaXMucHJvcHMpO1xyXG4gICAgY29uc3QgeyBkYXRhLCB5ZWFyLCBtb250aCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCB5ZWFyLCBtb250aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAge1wiICBcIn1cclxuICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+Q2hhbmdlIE1vbnRoIGFuZCBZZWFyIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zdGFydERhdGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD1cIk1NL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9udGhZZWFyUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgIFJNe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoZGF0YS50b3RhbF9zdW0gPyBkYXRhLnRvdGFsX3N1bSA6IDApLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Ub3RhbCBTYWxlczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhID8gPGg0PntkYXRhLnVzZXJzfTwvaDQ+IDogPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGg2PkN1c3RvbWVyczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBsZz1cIjNcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgUk17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zdW1beWVhcl0gPyBkYXRhLnN1bVt5ZWFyXSA6IDAuMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDY+WWVhcmx5IFNhbGVzIDoge3llYXJ9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCIzXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwicGItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aDQ+Uk0ge3BhcnNlRmxvYXQoZGF0YS5tb250aFttb250aF0pLnRvRml4ZWQoMil9PC9oND5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cImxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5Nb250bHkgU2FsZXMgOiB7dGhpcy5oYW5kbGVNb250aChtb250aCl9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzIwcHhcIn1cclxuICAgICAgICAgICAgICAgICAgICBjaGFydFR5cGU9XCJCYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiTW9udGhcIiwgXCJzYWxlc1wiXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkphblwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkZlYlwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1hclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEubW9udGhbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLm1vbnRoWzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5tb250aFsxMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFsIGRlc2lnbiBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUb3RhbCBTYWxlcyBCeSBNb250aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB0ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RQcm9wcz17eyBcImRhdGEtdGVzdGlkXCI6IFwiMlwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzdHlsZT17eyB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9XCI4XCIgbGc9XCI2XCI+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e1wiNDAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMyMHB4XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRUeXBlPVwiTGluZUNoYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc3R5bGU9e3sgd2lkdGg6IFwiM3JlbVwiLCBoZWlnaHQ6IFwiM3JlbVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1vbnRoXCIsIFwiT3JkZXIgQ291bnRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJKYW5cIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzFdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJGZWJcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzJdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJNYXJjaFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbM10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkFwclwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk1heVwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1blwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbNl0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkp1bFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbN10pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOF0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIlNlcFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbOV0pXSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIk9jdFwiLCBwYXJzZUZsb2F0KGRhdGEuY291bnRbMTBdKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgcGFyc2VGbG9hdChkYXRhLmNvdW50WzExXSldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiRGlzXCIsIHBhcnNlRmxvYXQoZGF0YS5jb3VudFsxMl0pXSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1vbnRoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdkF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3JkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFByb3BzPXt7IFwiZGF0YS10ZXN0aWRcIjogXCIxXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHN0eWxlPXt7IHdpZHRoOiBcIjNyZW1cIiwgaGVpZ2h0OiBcIjNyZW1cIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGVTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgYmc9XCJkYXJrXCJcclxuICAgICAgICB2YXJpYW50PVwiZGFya1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibS0wIHAtMCBwbC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXBpbGxzIFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMSBcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvYWRtaW5cIlxyXG4gICAgICAgICAgICAgICAgZXhhY3RcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLTEgbS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlcnNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGF3XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtMSBtLTFcIj5cclxuICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvY3JlYXRlcHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgcC0xIG0tMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC0xIG0tMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICB0bz1cIi92aXNpdG9yXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBwLTEgbS0xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1leWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdpbmF0ZU9yZGVyIGZyb20gXCIuLi9jb21wb25lbnQvb3JkZXIvUGFnaW5hdGVPcmRlclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3sgZmxleDogMSwgcGFkZGluZzogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIiAvPiBPcmRlcnNcclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPFBhZ2luYXRlT3JkZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L3Byb2R1Y3QvT2xkL1Byb2R1Y3RMaXN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4gUHJvZHVjdFxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8UHJvZHVjdExpc3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cclxuICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogXCJub25lXCIsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvYWRtaW5cIlxyXG4gICAgICAgICAgICAgIGV4YWN0XHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+IERhc2hib2FyZFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL3Byb2R1Y3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJveGVzXCIgLz4gUHJvZHVjdFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL29yZGVyc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctY2FydFwiIC8+IE9yZGVyXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgIHRvPVwiL2N1c3RvbWVyXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2Vyc1wiIC8+IEN1c3RvbWVyXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgdG89XCIvY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXdcIj48L2k+IENhdGVnb3JpZXNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi9jcmVhdGVwcm9kdWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxpc3QtYWx0XCI+PC9pPiBEZXZvcHNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICB0bz1cIi92aXNpdG9yXCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWV5ZVwiPjwvaT4gVmlzaXRvclxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==