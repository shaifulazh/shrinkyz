(self["webpackChunk"] = self["webpackChunk"] || []).push([["shipping"],{

/***/ "./assets/shipping/DataShipping.js":
/*!*****************************************!*\
  !*** ./assets/shipping/DataShipping.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataShipping)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function DataShipping() {
  const [countryCode, setCountryCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [postcode, setPostcode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [weight, setWeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.5);

  const handleChangeCountry = e => {
    const target = e.target.value;
    setCountryCode(target);
    axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method: "POST",
      url: `/api/admin/test/poslajus`,
      data: {
        country: target,
        postcode: postcode,
        weight: weight
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "number",
    value: postcode,
    onChange: e => setPostcode(e.target.value),
    placeholder: "Postcode etc 88200"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "number",
    value: weight,
    onChange: e => setWeight(e.target.value),
    placeholder: "Weight"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", {
    disabled: postcode && weight ? false : true,
    name: "receiver_country_code",
    onChange: handleChangeCountry,
    value: countryCode
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MY"
  }, "Malaysia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    selected: true,
    value: "null"
  }, "Select Your Country"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AF"
  }, "Afghanistan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AX"
  }, "Aland Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AL"
  }, "Albania"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DZ"
  }, "Algeria"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AD"
  }, "Andorra (France)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AO"
  }, "Angola"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AI"
  }, "Anguilla"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AG"
  }, "Antigua and Barbuda"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AR"
  }, "Argentina"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AM"
  }, "Armenia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AW"
  }, "Aruba"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AC"
  }, "Ascension"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AU"
  }, "Australia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AT"
  }, "Austria"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AZ"
  }, "Azerbaijan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PT-20"
  }, "Azores"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BS"
  }, "Bahamas"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BH"
  }, "Bahrain"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IB"
  }, "Balearic Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BD"
  }, "Bangladesh"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BB"
  }, "Barbados"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BY"
  }, "Belarus"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BE"
  }, "Belgium"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BZ"
  }, "Belize"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BJ"
  }, "Benin"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BM"
  }, "Bermuda"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BT"
  }, "Bhutan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BO"
  }, "Bolivia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BQ"
  }, "Bonaire, Sint Eustaius an"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BA"
  }, "Bosnia and Herzegovina"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BW"
  }, "Botswana"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BR"
  }, "Brazil"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VG"
  }, "British Virgin Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BN"
  }, "Brunei"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BG"
  }, "Bulgaria"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BF"
  }, "Burkina Faso"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BI"
  }, "Burundi"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KH"
  }, "Cambodia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CM"
  }, "Cameroon"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CA"
  }, "Canada"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IC"
  }, "Canary Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CV"
  }, "Cape Verde"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KY"
  }, "Cayman Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CF"
  }, "Central African Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TD"
  }, "Chad"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CL"
  }, "Chile"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CL-EI"
  }, "Chile - Easter Island"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CN"
  }, "China"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CX"
  }, "Christmas Island"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CC"
  }, "Cocos Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CO"
  }, "Colombia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KM"
  }, "Comoros"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CG"
  }, "Congo Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FR-COR"
  }, "Corsica (France)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CR"
  }, "Costa Rica"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CI"
  }, "Cote d' Ivoire"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "HR"
  }, "Croatia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CU"
  }, "Cuba"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CU-14"
  }, "Cuba - Guantanamo Bay"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CW"
  }, "Curacao"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CY"
  }, "Cyprus"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CZ"
  }, "Czech Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CD"
  }, "Democratic Republic of Co"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DK"
  }, "Denmark"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DJ"
  }, "Djibouti"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DM"
  }, "Dominica"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DO"
  }, "Dominican Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "EC"
  }, "Ecuador"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "EG"
  }, "Egypt"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SV"
  }, "El Salvador"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GQ"
  }, "Equatorial Guinea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ER"
  }, "Eritrea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "EE"
  }, "Estonia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ET"
  }, "Ethiopia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FK"
  }, "Falkland Islands and Falk"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FO"
  }, "Faroe Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FJ"
  }, "Fiji"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FI"
  }, "Finland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FR"
  }, "France"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GF"
  }, "French Guiana"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PF"
  }, "French Polynesia (Tahiti)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GP"
  }, "French West Indies - Guad"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MQ"
  }, "French West Indies - Mart"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GA"
  }, "Gabon"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GM"
  }, "Gambia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GE"
  }, "Georgia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "DE"
  }, "Germany"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GH"
  }, "Ghana"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GI"
  }, "Gibraltar"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GR"
  }, "Greece"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GL"
  }, "Greenland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GD"
  }, "Grenada"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GU"
  }, "Guam"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GT"
  }, "Guatemala"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GG"
  }, "Guernsey (GB)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GN"
  }, "Guinea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GW"
  }, "Guinea-Bissau"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GY"
  }, "Guyana"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "HT"
  }, "Haiti"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "HN"
  }, "Honduras"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "HK"
  }, "Hong Kong"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "HU"
  }, "Hungary"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IS"
  }, "Iceland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IN"
  }, "India"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ID"
  }, "Indonesia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IR"
  }, "Iran"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IQ"
  }, "Iraq"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IE"
  }, "Ireland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IM"
  }, "Isle of Man"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IL"
  }, "Israel"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "IT"
  }, "Italy"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "JM"
  }, "Jamaica"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "JP"
  }, "Japan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "JE"
  }, "Jersey"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "JO"
  }, "Jordan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KZ"
  }, "Kazakhstan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KE"
  }, "Kenya"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KI"
  }, "Kiribati"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "XZ"
  }, "Kosovo"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KW"
  }, "Kuwait"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KG"
  }, "Kyrgyzstan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LA"
  }, "Laos"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LV"
  }, "Latvia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LB"
  }, "Lebanon"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LS"
  }, "Lesotho"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LR"
  }, "Liberia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LY"
  }, "Libya"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LI"
  }, "Liechtenstein"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LT"
  }, "Lithuania"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LU"
  }, "Luxembourg"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MO"
  }, "Macao"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MK"
  }, "Macedonia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MG"
  }, "Madagascar"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PT-30"
  }, "Madeira (PT)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MW"
  }, "Malawi"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MV"
  }, "Maldives"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ML"
  }, "Mali"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MT"
  }, "Malta"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MP"
  }, "Mariana Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MH"
  }, "Marshall Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MR"
  }, "Mauritania"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MU"
  }, "Mauritius"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "YT"
  }, "Mayotte"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MX"
  }, "Mexico"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "FM"
  }, "Micronesia (Caroline Isla"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MD"
  }, "Moldova"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MC"
  }, "Monaco"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MN"
  }, "Mongolia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ME"
  }, "Montenegro"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MS"
  }, "Montserrat"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MA"
  }, "Morocco"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MZ"
  }, "Mozambique"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MM"
  }, "Myanmar"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NA"
  }, "Namibia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NR"
  }, "Nauru"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NP"
  }, "Nepal"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NL"
  }, "Netherlands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AN"
  }, "Netherlands Antilles"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NC"
  }, "New Caledonia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NZ"
  }, "New Zealand"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CK"
  }, "New Zealand Island Territ"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NU"
  }, "New Zealand Island Territ"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TK"
  }, "New Zealand Island Territ"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NI"
  }, "Nicaragua"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NE"
  }, "Niger Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NG"
  }, "Nigeria"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NF"
  }, "Norfolk Island"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KP"
  }, "North Korea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "NO"
  }, "Norway"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "OM"
  }, "Oman"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PK"
  }, "Pakistan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PW"
  }, "Palau"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PS"
  }, "Palestine"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PA"
  }, "Panama"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PG"
  }, "Papua New Guinea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PY"
  }, "Paraguay"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PE"
  }, "Peru"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PH"
  }, "Philippines"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PN"
  }, "Pitcairn Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PL"
  }, "Poland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PT"
  }, "Portugal"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PR"
  }, "Puerto Rico"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "QA"
  }, "Qatar"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "RE"
  }, "Reunion"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "RO"
  }, "Romania"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "RU"
  }, "Russian Federation"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "RW"
  }, "Rwanda"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "BL"
  }, "Saint Barthelemy"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KN"
  }, "Saint Christopher (St Kit"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LC"
  }, "Saint Lucia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "MF"
  }, "Saint Martin"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VC"
  }, "Saint Vincent and the Gre"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AS"
  }, "Samoa (U.S.A.)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "WS"
  }, "Samoa (Western Samoa)"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SM"
  }, "San Marino"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ST"
  }, "Sao Tome and Principe"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SA"
  }, "Saudi Arabia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SN"
  }, "Senegal"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "RS"
  }, "Serbia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SC"
  }, "Seychelles"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SL"
  }, "Sierra Leone"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SG"
  }, "Singapore"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SX"
  }, "Sint Maarten"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SK"
  }, "Slovakia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SI"
  }, "Slovenia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SB"
  }, "Solomon Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SO"
  }, "Somalia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ZA"
  }, "South Africa"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "KR"
  }, "South Korea"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SS"
  }, "South Sudan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ES"
  }, "Spain"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "EA"
  }, "Spanish Territories of No"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "LK"
  }, "Sri Lanka"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SH"
  }, "St. Helena"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "PM"
  }, "St. Pierre and Miquelon"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SD"
  }, "Sudan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SR"
  }, "Suriname"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SZ"
  }, "Swaziland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SE"
  }, "Sweden"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "CH"
  }, "Switzerland"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "SY"
  }, "Syrian Arab Republic"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TW"
  }, "Taiwan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TJ"
  }, "Tajikistan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TZ"
  }, "Tanzania"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TH"
  }, "Thailand"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TL"
  }, "Timor Leste"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TG"
  }, "Togo"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TO"
  }, "Tonga"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TT"
  }, "Trinidad and Tobago"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TA"
  }, "Tristan Da Cunha"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TN"
  }, "Tunisia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TR"
  }, "Turkey"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TM"
  }, "Turkmenistan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TC"
  }, "Turks and Caicos Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "TV"
  }, "Tuvalu"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "UG"
  }, "Uganda"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "UA"
  }, "Ukraine"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "AE"
  }, "United Arab Emirates"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "GB"
  }, "United Kingdom"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "US"
  }, "United States of America"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "UY"
  }, "Uruguay"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "UZ"
  }, "Uzbekistan"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VU"
  }, "Vanuatu"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VA"
  }, "Vatican City"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VE"
  }, "Venezuela"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VN"
  }, "Vietnam"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "VI"
  }, "Virgin Islands of the U.S"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "WF"
  }, "Wallis and Futuna Islands"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "EH"
  }, "Western Sahara"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "YE"
  }, "Yemen"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ZM"
  }, "Zambia"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    value: "ZW"
  }, "Zimbabwe")), react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "price-right"
  }, "12.00"));
}

/***/ }),

/***/ "./assets/shipping/Shipping.js":
/*!*************************************!*\
  !*** ./assets/shipping/Shipping.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _DataShipping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataShipping */ "./assets/shipping/DataShipping.js");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DataShipping__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById("shipping"));

/***/ })

},
0,[["./assets/shipping/Shipping.js","runtime","vendors-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2hpcHBpbmcvRGF0YVNoaXBwaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zaGlwcGluZy9TaGlwcGluZy5qcyJdLCJuYW1lcyI6WyJEYXRhU2hpcHBpbmciLCJjb3VudHJ5Q29kZSIsInNldENvdW50cnlDb2RlIiwidXNlU3RhdGUiLCJwb3N0Y29kZSIsInNldFBvc3Rjb2RlIiwid2VpZ2h0Iiwic2V0V2VpZ2h0IiwiaGFuZGxlQ2hhbmdlQ291bnRyeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvdW50cnkiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQ0MsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJGLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUNBLFFBQU0sQ0FBQ0csTUFBRCxFQUFTQyxTQUFULElBQXNCSiwrQ0FBUSxDQUFDLEdBQUQsQ0FBcEM7O0FBRUEsUUFBTUssbUJBQW1CLEdBQUlDLENBQUQsSUFBTztBQUNqQyxVQUFNQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF4QjtBQUNBVCxrQkFBYyxDQUFDUSxNQUFELENBQWQ7QUFFQUUsZ0RBQUssQ0FBQztBQUNKQyxZQUFNLEVBQUUsTUFESjtBQUVKQyxTQUFHLEVBQUcsMEJBRkY7QUFJSkMsVUFBSSxFQUFFO0FBQ0pDLGVBQU8sRUFBRU4sTUFETDtBQUVKTixnQkFBUSxFQUFFQSxRQUZOO0FBR0pFLGNBQU0sRUFBRUE7QUFISjtBQUpGLEtBQUQsQ0FBTDtBQVVELEdBZEQ7O0FBZUEsU0FDRSw4REFDRTtBQUNFLFFB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RUFBQztBQUFkLGNBcFBGLEVBcVBFO0FBQVEsU0FBSyxFQUFDO0FBQWQsY0FyUEYsRUFzUEU7QUFBUSxTQUFLLEVBQUM7QUFBZCxlQXRQRixFQXVQRTtBQUFRLFNBQUssRUFBQztBQUFkLDRCQXZQRixFQXdQRTtBQUFRLFNBQUssRUFBQztBQUFkLHNCQXhQRixFQXlQRTtBQUFRLFNBQUssRUFBQztBQUFkLGdDQXpQRixFQTBQRTtBQUFRLFNBQUssRUFBQztBQUFkLGVBMVBGLEVBMlBFO0FBQVEsU0FBSyxFQUFDO0FBQWQsa0JBM1BGLEVBNFBFO0FBQVEsU0FBSyxFQUFDO0FBQWQsZUE1UEYsRUE2UEU7QUFBUSxTQUFLLEVBQUM7QUFBZCxvQkE3UEYsRUE4UEU7QUFBUSxTQUFLLEVBQUM7QUFBZCxpQkE5UEYsRUErUEU7QUFBUSxTQUFLLEVBQUM7QUFBZCxlQS9QRixFQWdRRTtBQUFRLFNBQUssRUFBQztBQUFkLGlDQWhRRixFQWlRRTtBQUFRLFNBQUssRUFBQztBQUFkLGlDQWpRRixFQWtRRTtBQUFRLFNBQUssRUFBQztBQUFkLHNCQWxRRixFQW1RRTtBQUFRLFNBQUssRUFBQztBQUFkLGFBblFGLEVBb1FFO0FBQVEsU0FBSyxFQUFDO0FBQWQsY0FwUUYsRUFxUUU7QUFBUSxTQUFLLEVBQUM7QUFBZCxnQkFyUUYsQ0FiRixFQXFSRTtBQUFNLGFBQVMsRUFBQztBQUFoQixhQXJSRixDQURGO0FBeVJELEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hURDtBQUNBO0FBQ0E7QUFFQWdCLDZDQUFBLENBQWdCLGlEQUFDLGtEQUFELE9BQWhCLEVBQWtDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbEMsRSIsImZpbGUiOiJzaGlwcGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGFTaGlwcGluZygpIHtcclxuICBjb25zdCBbY291bnRyeUNvZGUsIHNldENvdW50cnlDb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwb3N0Y29kZSwgc2V0UG9zdGNvZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3dlaWdodCwgc2V0V2VpZ2h0XSA9IHVzZVN0YXRlKDAuNSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNvdW50cnkgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRDb3VudHJ5Q29kZSh0YXJnZXQpO1xyXG5cclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBgL2FwaS9hZG1pbi90ZXN0L3Bvc2xhanVzYCxcclxuXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjb3VudHJ5OiB0YXJnZXQsXHJcbiAgICAgICAgcG9zdGNvZGU6IHBvc3Rjb2RlLFxyXG4gICAgICAgIHdlaWdodDogd2VpZ2h0LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e3Bvc3Rjb2RlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdGNvZGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdGNvZGUgZXRjIDg4MjAwXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e3dlaWdodH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFdlaWdodChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXZWlnaHRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgZGlzYWJsZWQ9e3Bvc3Rjb2RlICYmIHdlaWdodCA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICBuYW1lPVwicmVjZWl2ZXJfY291bnRyeV9jb2RlXCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ291bnRyeX1cclxuICAgICAgICB2YWx1ZT17Y291bnRyeUNvZGV9XHJcbiAgICAgID5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVlcIj5NYWxheXNpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJudWxsXCI+XHJcbiAgICAgICAgICBTZWxlY3QgWW91ciBDb3VudHJ5XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFGXCI+QWZnaGFuaXN0YW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVhcIj5BbGFuZCBJc2xhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMXCI+QWxiYW5pYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJEWlwiPkFsZ2VyaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQURcIj5BbmRvcnJhIChGcmFuY2UpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFPXCI+QW5nb2xhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFJXCI+QW5ndWlsbGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUdcIj5BbnRpZ3VhIGFuZCBCYXJidWRhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFSXCI+QXJnZW50aW5hPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFNXCI+QXJtZW5pYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJBV1wiPkFydWJhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDXCI+QXNjZW5zaW9uPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFVXCI+QXVzdHJhbGlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFUXCI+QXVzdHJpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJBWlwiPkF6ZXJiYWlqYW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFQtMjBcIj5Bem9yZXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlNcIj5CYWhhbWFzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJIXCI+QmFocmFpbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJJQlwiPkJhbGVhcmljIElzbGFuZHM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkRcIj5CYW5nbGFkZXNoPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJCXCI+QmFyYmFkb3M8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQllcIj5CZWxhcnVzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJFXCI+QmVsZ2l1bTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCWlwiPkJlbGl6ZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCSlwiPkJlbmluPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJNXCI+QmVybXVkYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCVFwiPkJodXRhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCT1wiPkJvbGl2aWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQlFcIj5Cb25haXJlLCBTaW50IEV1c3RhaXVzIGFuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBXCI+Qm9zbmlhIGFuZCBIZXJ6ZWdvdmluYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCV1wiPkJvdHN3YW5hPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJSXCI+QnJhemlsPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZHXCI+QnJpdGlzaCBWaXJnaW4gSXNsYW5kczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCTlwiPkJydW5laTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCR1wiPkJ1bGdhcmlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJGXCI+QnVya2luYSBGYXNvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJJXCI+QnVydW5kaTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJLSFwiPkNhbWJvZGlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNNXCI+Q2FtZXJvb248L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FcIj5DYW5hZGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUNcIj5DYW5hcnkgSXNsYW5kczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDVlwiPkNhcGUgVmVyZGU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS1lcIj5DYXltYW4gSXNsYW5kczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDRlwiPkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJURFwiPkNoYWQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0xcIj5DaGlsZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDTC1FSVwiPkNoaWxlIC0gRWFzdGVyIElzbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDTlwiPkNoaW5hPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNYXCI+Q2hyaXN0bWFzIElzbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDQ1wiPkNvY29zIElzbGFuZHM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ09cIj5Db2xvbWJpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJLTVwiPkNvbW9yb3M8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0dcIj5Db25nbyBSZXB1YmxpYzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJGUi1DT1JcIj5Db3JzaWNhIChGcmFuY2UpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNSXCI+Q29zdGEgUmljYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDSVwiPkNvdGUgZCcgSXZvaXJlPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhSXCI+Q3JvYXRpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDVVwiPkN1YmE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1UtMTRcIj5DdWJhIC0gR3VhbnRhbmFtbyBCYXk8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1dcIj5DdXJhY2FvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNZXCI+Q3lwcnVzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNaXCI+Q3plY2ggUmVwdWJsaWM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0RcIj5EZW1vY3JhdGljIFJlcHVibGljIG9mIENvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRLXCI+RGVubWFyazwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJESlwiPkRqaWJvdXRpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRNXCI+RG9taW5pY2E8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRE9cIj5Eb21pbmljYW4gUmVwdWJsaWM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRUNcIj5FY3VhZG9yPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVHXCI+RWd5cHQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1ZcIj5FbCBTYWx2YWRvcjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJHUVwiPkVxdWF0b3JpYWwgR3VpbmVhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVSXCI+RXJpdHJlYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJFRVwiPkVzdG9uaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVRcIj5FdGhpb3BpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJGS1wiPkZhbGtsYW5kIElzbGFuZHMgYW5kIEZhbGs8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRk9cIj5GYXJvZSBJc2xhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZKXCI+RmlqaTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJGSVwiPkZpbmxhbmQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRlJcIj5GcmFuY2U8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0ZcIj5GcmVuY2ggR3VpYW5hPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBGXCI+RnJlbmNoIFBvbHluZXNpYSAoVGFoaXRpKTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJHUFwiPkZyZW5jaCBXZXN0IEluZGllcyAtIEd1YWQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVFcIj5GcmVuY2ggV2VzdCBJbmRpZXMgLSBNYXJ0PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdBXCI+R2Fib248L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR01cIj5HYW1iaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0VcIj5HZW9yZ2lhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFXCI+R2VybWFueTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJHSFwiPkdoYW5hPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdJXCI+R2licmFsdGFyPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdSXCI+R3JlZWNlPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdMXCI+R3JlZW5sYW5kPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdEXCI+R3JlbmFkYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJHVVwiPkd1YW08L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR1RcIj5HdWF0ZW1hbGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0dcIj5HdWVybnNleSAoR0IpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdOXCI+R3VpbmVhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdXXCI+R3VpbmVhLUJpc3NhdTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJHWVwiPkd1eWFuYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJIVFwiPkhhaXRpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhOXCI+SG9uZHVyYXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSEtcIj5Ib25nIEtvbmc8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSFVcIj5IdW5nYXJ5PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklTXCI+SWNlbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJJTlwiPkluZGlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklEXCI+SW5kb25lc2lhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklSXCI+SXJhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJJUVwiPklyYXE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUVcIj5JcmVsYW5kPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklNXCI+SXNsZSBvZiBNYW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSUxcIj5Jc3JhZWw8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSVRcIj5JdGFseTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJKTVwiPkphbWFpY2E8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSlBcIj5KYXBhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJKRVwiPkplcnNleTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJKT1wiPkpvcmRhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJLWlwiPkthemFraHN0YW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS0VcIj5LZW55YTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJLSVwiPktpcmliYXRpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlhaXCI+S29zb3ZvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktXXCI+S3V3YWl0PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktHXCI+S3lyZ3l6c3Rhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJMQVwiPkxhb3M8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTFZcIj5MYXR2aWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTEJcIj5MZWJhbm9uPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxTXCI+TGVzb3Robzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJMUlwiPkxpYmVyaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTFlcIj5MaWJ5YTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJMSVwiPkxpZWNodGVuc3RlaW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTFRcIj5MaXRodWFuaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTFVcIj5MdXhlbWJvdXJnPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1PXCI+TWFjYW88L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUtcIj5NYWNlZG9uaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUdcIj5NYWRhZ2FzY2FyPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBULTMwXCI+TWFkZWlyYSAoUFQpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1XXCI+TWFsYXdpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1WXCI+TWFsZGl2ZXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUxcIj5NYWxpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1UXCI+TWFsdGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVBcIj5NYXJpYW5hIElzbGFuZHM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUhcIj5NYXJzaGFsbCBJc2xhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1SXCI+TWF1cml0YW5pYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVVwiPk1hdXJpdGl1czwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJZVFwiPk1heW90dGU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVhcIj5NZXhpY288L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRk1cIj5NaWNyb25lc2lhIChDYXJvbGluZSBJc2xhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TW9sZG92YTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQ1wiPk1vbmFjbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNTlwiPk1vbmdvbGlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1FXCI+TW9udGVuZWdybzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNU1wiPk1vbnRzZXJyYXQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5Nb3JvY2NvPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1aXCI+TW96YW1iaXF1ZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNTVwiPk15YW5tYXI8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkFcIj5OYW1pYmlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5SXCI+TmF1cnU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTlBcIj5OZXBhbDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJOTFwiPk5ldGhlcmxhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFOXCI+TmV0aGVybGFuZHMgQW50aWxsZXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkNcIj5OZXcgQ2FsZWRvbmlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5aXCI+TmV3IFplYWxhbmQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0tcIj5OZXcgWmVhbGFuZCBJc2xhbmQgVGVycml0PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5VXCI+TmV3IFplYWxhbmQgSXNsYW5kIFRlcnJpdDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJUS1wiPk5ldyBaZWFsYW5kIElzbGFuZCBUZXJyaXQ8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTklcIj5OaWNhcmFndWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkVcIj5OaWdlciBSZXB1YmxpYzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJOR1wiPk5pZ2VyaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTkZcIj5Ob3Jmb2xrIElzbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJLUFwiPk5vcnRoIEtvcmVhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5PXCI+Tm9yd2F5PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9NXCI+T21hbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJQS1wiPlBha2lzdGFuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBXXCI+UGFsYXU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFNcIj5QYWxlc3RpbmU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFcIj5QYW5hbWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEdcIj5QYXB1YSBOZXcgR3VpbmVhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBZXCI+UGFyYWd1YXk8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVcIj5QZXJ1PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIXCI+UGhpbGlwcGluZXM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUE5cIj5QaXRjYWlybiBJc2xhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBMXCI+UG9sYW5kPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBUXCI+UG9ydHVnYWw8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJcIj5QdWVydG8gUmljbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJRQVwiPlFhdGFyPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJFXCI+UmV1bmlvbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJST1wiPlJvbWFuaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlVcIj5SdXNzaWFuIEZlZGVyYXRpb248L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUldcIj5Sd2FuZGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkxcIj5TYWludCBCYXJ0aGVsZW15PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIktOXCI+U2FpbnQgQ2hyaXN0b3BoZXIgKFN0IEtpdDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJMQ1wiPlNhaW50IEx1Y2lhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1GXCI+U2FpbnQgTWFydGluPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZDXCI+U2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJBU1wiPlNhbW9hIChVLlMuQS4pPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldTXCI+U2Ftb2EgKFdlc3Rlcm4gU2Ftb2EpPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNNXCI+U2FuIE1hcmlubzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTVFwiPlNhbyBUb21lIGFuZCBQcmluY2lwZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQVwiPlNhdWRpIEFyYWJpYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTTlwiPlNlbmVnYWw8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5TZXJiaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TZXljaGVsbGVzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNMXCI+U2llcnJhIExlb25lPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNHXCI+U2luZ2Fwb3JlPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNYXCI+U2ludCBNYWFydGVuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNLXCI+U2xvdmFraWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0lcIj5TbG92ZW5pYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQlwiPlNvbG9tb24gSXNsYW5kczwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTT1wiPlNvbWFsaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWkFcIj5Tb3V0aCBBZnJpY2E8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS1JcIj5Tb3V0aCBLb3JlYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTU1wiPlNvdXRoIFN1ZGFuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVTXCI+U3BhaW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRUFcIj5TcGFuaXNoIFRlcnJpdG9yaWVzIG9mIE5vPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxLXCI+U3JpIExhbmthPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNIXCI+U3QuIEhlbGVuYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJQTVwiPlN0LiBQaWVycmUgYW5kIE1pcXVlbG9uPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNEXCI+U3VkYW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1JcIj5TdXJpbmFtZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTWlwiPlN3YXppbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlN3ZWRlbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJDSFwiPlN3aXR6ZXJsYW5kPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNZXCI+U3lyaWFuIEFyYWIgUmVwdWJsaWM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVFdcIj5UYWl3YW48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVEpcIj5UYWppa2lzdGFuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRaXCI+VGFuemFuaWE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVEhcIj5UaGFpbGFuZDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJUTFwiPlRpbW9yIExlc3RlPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRHXCI+VG9nbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJUT1wiPlRvbmdhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRUXCI+VHJpbmlkYWQgYW5kIFRvYmFnbzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJUQVwiPlRyaXN0YW4gRGEgQ3VuaGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE5cIj5UdW5pc2lhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRSXCI+VHVya2V5PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRNXCI+VHVya21lbmlzdGFuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRDXCI+VHVya3MgYW5kIENhaWNvcyBJc2xhbmRzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRWXCI+VHV2YWx1PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVHXCI+VWdhbmRhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVBXCI+VWtyYWluZTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJBRVwiPlVuaXRlZCBBcmFiIEVtaXJhdGVzPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCXCI+VW5pdGVkIEtpbmdkb208L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNcIj5Vbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2E8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVlcIj5VcnVndWF5PC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVaXCI+VXpiZWtpc3Rhbjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJWVVwiPlZhbnVhdHU8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVkFcIj5WYXRpY2FuIENpdHk8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVkVcIj5WZW5lenVlbGE8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVk5cIj5WaWV0bmFtPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlZJXCI+VmlyZ2luIElzbGFuZHMgb2YgdGhlIFUuUzwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJXRlwiPldhbGxpcyBhbmQgRnV0dW5hIElzbGFuZHM8L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRUhcIj5XZXN0ZXJuIFNhaGFyYTwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJZRVwiPlllbWVuPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlpNXCI+WmFtYmlhPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlpXXCI+WmltYmFid2U8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZS1yaWdodFwiPjEyLjAwPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBEYXRhU2hpcHBpbmcgZnJvbSBcIi4vRGF0YVNoaXBwaW5nXCI7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPERhdGFTaGlwcGluZyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwcGluZ1wiKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=