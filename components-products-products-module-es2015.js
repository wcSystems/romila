(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-category/product-category.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-category/product-category.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [data]=\"obj\"></app-breadcrumb>\n<div class=\"container\">\n    <div class=\"row\">\n        <app-category-sidebar class=\"col-lg-3 \"></app-category-sidebar>\n        <div class=\"col-lg-9\">\n            <app-banner></app-banner>\n            <app-category-items></app-category-items>\n        </div>\n        \n    </div>\n</div>\n<div class=\"mb-5\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-detail/product-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-detail/product-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-breadcrumb [data]=\"obj\"></app-breadcrumb>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <app-product-container></app-product-container>\n            <app-product-tabs></app-product-tabs>\n        </div>\n        <div class=\"sidebar-overlay\"></div>\n        <div class=\"sidebar-toggle\"><i class=\"icon-sliders\"></i></div>\n        <app-product-sidebar class=\"col-lg-3 \"></app-product-sidebar>\n    </div>\n</div>\n<app-product-featured></app-product-featured>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav aria-label=\"breadcrumb\" class=\"breadcrumb-nav\">\n    <div class=\"container\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a [href]=\"data.link1\"><i [class]=\"data.icon\"></i></a></li>\n            <li class=\"breadcrumb-item\"><a [href]=\"data.link2\">{{ data.text1 }}</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">{{ data.text2 }}</li>\n        </ol>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/banner/banner.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/banner/banner.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner banner-cat\" style=\"background-image: url('assets/images/banners/banner-top.jpg');\">\n    <div class=\"banner-content\">\n        <h2 class=\"banner-subtitle\">check out over <span>200+</span></h2>\n        <h1 class=\"banner-title\">\n            INCREDIBLE deals\n        </h1>\n        <a href=\"#\" class=\"btn btn-dark\">Shop Now</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-items/category-items.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-items/category-items.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"toolbox\">\n    <div class=\"toolbox-left\">\n        <div class=\"toolbox-item toolbox-sort\">\n            <div class=\"select-custom\">\n                <select name=\"orderby\" class=\"form-control\">\n                    <option value=\"menu_order\" selected=\"selected\">Default sorting</option>\n                    <option value=\"popularity\">Sort by popularity</option>\n                    <option value=\"rating\">Sort by average rating</option>\n                    <option value=\"date\">Sort by newness</option>\n                    <option value=\"price\">Sort by price: low to high</option>\n                    <option value=\"price-desc\">Sort by price: high to low</option>\n                </select>\n            </div><!-- End .select-custom -->\n\n            <a href=\"#\" class=\"sorter-btn\" title=\"Set Ascending Direction\"><span class=\"sr-only\">Set Ascending Direction</span></a>\n        </div><!-- End .toolbox-item -->\n    </div><!-- End .toolbox-left -->\n\n    <div class=\"toolbox-item toolbox-show\">\n        <label>Showing 1–9 of 60 results</label>\n    </div><!-- End .toolbox-item -->\n\n    <div class=\"layout-modes\">\n        <a href=\"category.html\" class=\"layout-btn btn-grid active\" title=\"Grid\">\n            <i class=\"icon-mode-grid\"></i>\n        </a>\n        <a href=\"category-list.html\" class=\"layout-btn btn-list\" title=\"List\">\n            <i class=\"icon-mode-list\"></i>\n        </a>\n    </div><!-- End .layout-modes -->\n</nav>\n\n<div class=\"row row-sm\">\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-1.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-2.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-3.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-4.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-5.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-6.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-7.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-8.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-9.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-10.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-11.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n    <div class=\"col-6 col-md-4\">\n        <div class=\"product-default\">\n            <figure>\n                <a href=\"product.html\">\n                    <img src=\"assets/images/products/product-12.jpg\">\n                </a>\n            </figure>\n            <div class=\"product-details\">\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                        <span class=\"tooltiptext tooltip-top\"></span>\n                    </div><!-- End .product-ratings -->\n                </div><!-- End .product-container -->\n                <h2 class=\"product-title\">\n                    <a href=\"product.html\">Product Short Name</a>\n                </h2>\n                <div class=\"price-box\">\n                    <span class=\"product-price\">$9.00</span>\n                </div><!-- End .price-box -->\n                <div class=\"product-action\">\n                    <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                    <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                    <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                </div>\n            </div><!-- End .product-details -->\n        </div>\n    </div>\n</div>\n\n<nav class=\"toolbox toolbox-pagination\">\n    <div class=\"toolbox-item toolbox-show\">\n        <label>Showing 1–9 of 60 results</label>\n    </div><!-- End .toolbox-item -->\n\n    <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n            <a class=\"page-link page-link-btn\" href=\"#\"><i class=\"icon-angle-left\"></i></a>\n        </li>\n        <li class=\"page-item active\">\n            <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><span>...</span></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">15</a></li>\n        <li class=\"page-item\">\n            <a class=\"page-link page-link-btn\" href=\"#\"><i class=\"icon-angle-right\"></i></a>\n        </li>\n    </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-sidebar/category-sidebar.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-sidebar/category-sidebar.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside class=\"sidebar-shop order-lg-first\">\n    <div class=\"sidebar-wrapper\">\n        <div class=\"widget\">\n            <h3 class=\"widget-title\">\n                <a data-toggle=\"collapse\" href=\"#widget-body-1\" role=\"button\" aria-expanded=\"true\" aria-controls=\"widget-body-1\">electronics</a>\n            </h3>\n\n            <div class=\"collapse show\" id=\"widget-body-1\">\n                <div class=\"widget-body\">\n                    <ul class=\"cat-list\">\n                        <li><a href=\"#\">Smart TVs</a></li>\n                        <li><a href=\"#\">Cameras</a></li>\n                        <li><a href=\"#\">Head Phones</a></li>\n                        <li><a href=\"#\">Games</a></li>\n                    </ul>\n                </div><!-- End .widget-body -->\n            </div><!-- End .collapse -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget\">\n            <h3 class=\"widget-title\">\n                <a data-toggle=\"collapse\" href=\"#widget-body-2\" role=\"button\" aria-expanded=\"true\" aria-controls=\"widget-body-2\">Price</a>\n            </h3>\n\n            <div class=\"collapse show\" id=\"widget-body-2\">\n                <div class=\"widget-body\">\n                    <form action=\"#\">\n                        <div class=\"price-slider-wrapper\">\n                            <div id=\"price-slider\"></div><!-- End #price-slider -->\n                        </div><!-- End .price-slider-wrapper -->\n\n                        <div class=\"filter-price-action\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Filter</button>\n\n                            <div class=\"filter-price-text\">\n                                <span id=\"filter-price-range\"></span>\n                            </div><!-- End .filter-price-text -->\n                        </div><!-- End .filter-price-action -->\n                    </form>\n                </div><!-- End .widget-body -->\n            </div><!-- End .collapse -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget\">\n            <h3 class=\"widget-title\">\n                <a data-toggle=\"collapse\" href=\"#widget-body-3\" role=\"button\" aria-expanded=\"true\" aria-controls=\"widget-body-3\">Size</a>\n            </h3>\n\n            <div class=\"collapse show\" id=\"widget-body-3\">\n                <div class=\"widget-body\">\n                    <ul class=\"config-size-list\">\n                        <li><a href=\"#\">S</a></li>\n                        <li class=\"active\"><a href=\"#\">M</a></li>\n                        <li><a href=\"#\">L</a></li>\n                        <li><a href=\"#\">XL</a></li>\n                        <li><a href=\"#\">2XL</a></li>\n                        <li><a href=\"#\">3XL</a></li>\n                    </ul>\n                </div><!-- End .widget-body -->\n            </div><!-- End .collapse -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget\">\n            <h3 class=\"widget-title\">\n                <a data-toggle=\"collapse\" href=\"#widget-body-4\" role=\"button\" aria-expanded=\"true\" aria-controls=\"widget-body-4\">Brands</a>\n            </h3>\n\n            <div class=\"collapse show\" id=\"widget-body-4\">\n                <div class=\"widget-body\">\n                    <ul class=\"cat-list\">\n                        <li><a href=\"#\">Adidas <span>18</span></a></li>\n                        <li><a href=\"#\">Camel <span>22</span></a></li>\n                        <li><a href=\"#\">Seiko <span>05</span></a></li>\n                        <li><a href=\"#\">Samsung Galaxy <span>68</span></a></li>\n                        <li><a href=\"#\">Sony <span>03</span></a></li>\n                    </ul>\n                </div><!-- End .widget-body -->\n            </div><!-- End .collapse -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget\">\n            <h3 class=\"widget-title\">\n                <a data-toggle=\"collapse\" href=\"#widget-body-6\" role=\"button\" aria-expanded=\"true\" aria-controls=\"widget-body-6\">Color</a>\n            </h3>\n\n            <div class=\"collapse show\" id=\"widget-body-6\">\n                <div class=\"widget-body\">\n                    <ul class=\"config-swatch-list\">\n                        <li>\n                            <a href=\"#\" style=\"background-color: #4090d5;\"></a>\n                        </li>\n                        <li class=\"active\">\n                            <a href=\"#\" style=\"background-color: #f5494a;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #fca309;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #11426b;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #f0f0f0;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #3fd5c9;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #979c1c;\"></a>\n                        </li>\n                        <li>\n                            <a href=\"#\" style=\"background-color: #7d5a3c;\"></a>\n                        </li>\n                    </ul>\n                </div><!-- End .widget-body -->\n            </div><!-- End .collapse -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget widget-featured\">\n            <h3 class=\"widget-title\">Featured Products</h3>\n            \n            <div class=\"widget-body\">\n                <div class=\"owl-carousel widget-featured-products\">\n                    <div class=\"featured-col\">\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-1.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-2.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-3.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                    </div><!-- End .featured-col -->\n\n                    <div class=\"featured-col\">\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-4.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-5.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-6.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                    </div><!-- End .featured-col -->\n                </div><!-- End .widget-featured-slider -->\n            </div><!-- End .widget-body -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget widget-block\">\n            <h3 class=\"widget-title\">Custom HTML Block</h3>\n            <h5>This is a custom sub-title.</h5>\n            <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>\n        </div><!-- End .widget -->\n    </div><!-- End .sidebar-wrapper -->\n</aside>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-container/product-container.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-container/product-container.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-single-container product-single-default\">\n    <div class=\"row\">\n        <div class=\"col-lg-7 col-md-6 product-single-gallery\">\n            <div class=\"product-slider-container product-item\">\n                <div class=\"product-single-carousel owl-carousel owl-theme\">\n                    <div class=\"product-item\">\n                        <img class=\"product-single-image\" src=\"assets/images/products/zoom/product-1.jpg\" data-zoom-image=\"assets/images/products/zoom/product-1-big.jpg\"/>\n                    </div>\n                    <div class=\"product-item\">\n                        <img class=\"product-single-image\" src=\"assets/images/products/zoom/product-2.jpg\" data-zoom-image=\"assets/images/products/zoom/product-2-big.jpg\"/>\n                    </div>\n                    <div class=\"product-item\">\n                        <img class=\"product-single-image\" src=\"assets/images/products/zoom/product-3.jpg\" data-zoom-image=\"assets/images/products/zoom/product-3-big.jpg\"/>\n                    </div>\n                    <div class=\"product-item\">\n                        <img class=\"product-single-image\" src=\"assets/images/products/zoom/product-4.jpg\" data-zoom-image=\"assets/images/products/zoom/product-4-big.jpg\"/>\n                    </div>\n                </div>\n                <!-- End .product-single-carousel -->\n                <span class=\"prod-full-screen\">\n                    <i class=\"icon-plus\"></i>\n                </span>\n            </div>\n            <div class=\"prod-thumbnail row owl-dots\" id='carousel-custom-dots'>\n                <div class=\"col-3 owl-dot\">\n                    <img src=\"assets/images/products/zoom/product-1.jpg\"/>\n                </div>\n                <div class=\"col-3 owl-dot\">\n                    <img src=\"assets/images/products/zoom/product-2.jpg\"/>\n                </div>\n                <div class=\"col-3 owl-dot\">\n                    <img src=\"assets/images/products/zoom/product-3.jpg\"/>\n                </div>\n                <div class=\"col-3 owl-dot\">\n                    <img src=\"assets/images/products/zoom/product-4.jpg\"/>\n                </div>\n            </div>\n        </div><!-- End .col-lg-7 -->\n\n        <div class=\"col-lg-5 col-md-6\">\n            <div class=\"product-single-details\">\n                <h1 class=\"product-title\">Silver Porto Headset</h1>\n\n                <div class=\"ratings-container\">\n                    <div class=\"product-ratings\">\n                        <span class=\"ratings\" style=\"width:60%\"></span><!-- End .ratings -->\n                    </div><!-- End .product-ratings -->\n\n                    <a href=\"#\" class=\"rating-link\">( 6 Reviews )</a>\n                </div><!-- End .product-container -->\n\n                <div class=\"price-box\">\n                    <span class=\"old-price\">$81.00</span>\n                    <span class=\"product-price\">$101.00</span>\n                </div><!-- End .price-box -->\n\n                <div class=\"product-desc\">\n                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>\n                </div><!-- End .product-desc -->\n\n                <div class=\"product-filters-container\">\n                    <div class=\"product-single-filter\">\n                        <label>Colors:</label>\n                        <ul class=\"config-swatch-list\">\n                            <li class=\"active\">\n                                <a href=\"#\" style=\"background-color: #6085a5;\"></a>\n                            </li>\n                            <li>\n                                <a href=\"#\" style=\"background-color: #ab6e6e;\"></a>\n                            </li>\n                            <li>\n                                <a href=\"#\" style=\"background-color: #b19970;\"></a>\n                            </li>\n                            <li>\n                                <a href=\"#\" style=\"background-color: #11426b;\"></a>\n                            </li>\n                        </ul>\n                    </div><!-- End .product-single-filter -->\n                </div><!-- End .product-filters-container -->\n\n                <div class=\"product-action product-all-icons\">\n                    <div class=\"product-single-qty\">\n                        <input class=\"horizontal-quantity form-control\" type=\"text\">\n                    </div><!-- End .product-single-qty -->\n\n                    <a href=\"cart.html\" class=\"paction add-cart\" title=\"Add to Cart\">\n                        <span>Add to Cart</span>\n                    </a>\n                    <a href=\"#\" class=\"paction add-wishlist\" title=\"Add to Wishlist\">\n                        <span>Add to Wishlist</span>\n                    </a>\n                    <a href=\"#\" class=\"paction add-compare\" title=\"Add to Compare\">\n                        <span>Add to Compare</span>\n                    </a>\n                </div><!-- End .product-action -->\n\n                <div class=\"product-single-share\">\n                    <label>Share:</label>\n                    <!-- www.addthis.com share plugin-->\n                    <div class=\"addthis_inline_share_toolbox\"></div>\n                </div><!-- End .product single-share -->\n            </div><!-- End .product-single-details -->\n        </div><!-- End .col-lg-5 -->\n    </div><!-- End .row -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-featured/product-featured.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-featured/product-featured.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"featured-section\">\n    <div class=\"container\">\n        <h2 class=\"carousel-title\">Featured Products</h2>\n\n        <div class=\"featured-products owl-carousel owl-theme owl-dots-top\">\n            <div class=\"product-default\">\n                <figure>\n                    <a href=\"product.html\">\n                        <img src=\"assets/images/products/product-1.jpg\">\n                    </a>\n                </figure>\n                <div class=\"product-details\">\n                    <div class=\"ratings-container\">\n                        <div class=\"product-ratings\">\n                            <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                            <span class=\"tooltiptext tooltip-top\"></span>\n                        </div><!-- End .product-ratings -->\n                    </div><!-- End .product-container -->\n                    <h2 class=\"product-title\">\n                        <a href=\"product.html\">Product Short Name</a>\n                    </h2>\n                    <div class=\"price-box\">\n                        <span class=\"product-price\">$9.00</span>\n                    </div><!-- End .price-box -->\n                    <div class=\"product-action\">\n                        <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                        <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                        <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                    </div>\n                </div><!-- End .product-details -->\n            </div>\n            <div class=\"product-default\">\n                <figure>\n                    <a href=\"product.html\">\n                        <img src=\"assets/images/products/product-2.jpg\">\n                    </a>\n                </figure>\n                <div class=\"product-details\">\n                    <div class=\"ratings-container\">\n                        <div class=\"product-ratings\">\n                            <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                            <span class=\"tooltiptext tooltip-top\"></span>\n                        </div><!-- End .product-ratings -->\n                    </div><!-- End .product-container -->\n                    <h2 class=\"product-title\">\n                        <a href=\"product.html\">Product Short Name</a>\n                    </h2>\n                    <div class=\"price-box\">\n                        <span class=\"product-price\">$9.00</span>\n                    </div><!-- End .price-box -->\n                    <div class=\"product-action\">\n                        <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                        <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                        <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                    </div>\n                </div><!-- End .product-details -->\n            </div>\n            <div class=\"product-default\">\n                <figure>\n                    <a href=\"product.html\">\n                        <img src=\"assets/images/products/product-3.jpg\">\n                    </a>\n                </figure>\n                <div class=\"product-details\">\n                    <div class=\"ratings-container\">\n                        <div class=\"product-ratings\">\n                            <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                            <span class=\"tooltiptext tooltip-top\"></span>\n                        </div><!-- End .product-ratings -->\n                    </div><!-- End .product-container -->\n                    <h2 class=\"product-title\">\n                        <a href=\"product.html\">Product Short Name</a>\n                    </h2>\n                    <div class=\"price-box\">\n                        <span class=\"product-price\">$9.00</span>\n                    </div><!-- End .price-box -->\n                    <div class=\"product-action\">\n                        <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                        <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                        <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                    </div>\n                </div><!-- End .product-details -->\n            </div>\n            <div class=\"product-default\">\n                <figure>\n                    <a href=\"product.html\">\n                        <img src=\"assets/images/products/product-4.jpg\">\n                    </a>\n                </figure>\n                <div class=\"product-details\">\n                    <div class=\"ratings-container\">\n                        <div class=\"product-ratings\">\n                            <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                            <span class=\"tooltiptext tooltip-top\"></span>\n                        </div><!-- End .product-ratings -->\n                    </div><!-- End .product-container -->\n                    <h2 class=\"product-title\">\n                        <a href=\"product.html\">Product Short Name</a>\n                    </h2>\n                    <div class=\"price-box\">\n                        <span class=\"product-price\">$9.00</span>\n                    </div><!-- End .price-box -->\n                    <div class=\"product-action\">\n                        <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                        <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                        <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                    </div>\n                </div><!-- End .product-details -->\n            </div>\n            <div class=\"product-default\">\n                <figure>\n                    <a href=\"product.html\">\n                        <img src=\"assets/images/products/product-5.jpg\">\n                    </a>\n                </figure>\n                <div class=\"product-details\">\n                    <div class=\"ratings-container\">\n                        <div class=\"product-ratings\">\n                            <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                            <span class=\"tooltiptext tooltip-top\"></span>\n                        </div><!-- End .product-ratings -->\n                    </div><!-- End .product-container -->\n                    <h2 class=\"product-title\">\n                        <a href=\"product.html\">Product Short Name</a>\n                    </h2>\n                    <div class=\"price-box\">\n                        <span class=\"product-price\">$9.00</span>\n                    </div><!-- End .price-box -->\n                    <div class=\"product-action\">\n                        <a href=\"#\" class=\"btn-icon-wish\"><i class=\"icon-heart\"></i></a>\n                        <button class=\"btn-icon btn-add-cart\" data-toggle=\"modal\" data-target=\"#addCartModal\"><i class=\"icon-bag\"></i>ADD TO CART</button>\n                        <a href=\"ajax/product-quick-view.html\" class=\"btn-quickview\" title=\"Quick View\"><i class=\"fas fa-external-link-alt\"></i></a> \n                    </div>\n                </div><!-- End .product-details -->\n            </div>\n        </div><!-- End .featured-proucts -->\n    </div><!-- End .container -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-sidebar/product-sidebar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-sidebar/product-sidebar.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside class=\"sidebar-product padding-left-lg mobile-sidebar\">\n    <div class=\"sidebar-wrapper\">\n        <div class=\"widget widget-brand\">\n            <a href=\"#\">\n                <img src=\"assets/images/product-brand.png\" alt=\"brand name\">\n            </a>\n        </div><!-- End .widget -->\n\n        <div class=\"widget widget-info\">\n            <ul>\n                <li>\n                    <i class=\"icon-shipping\"></i>\n                    <h4>FREE<br>SHIPPING</h4>\n                </li>\n                <li>\n                    <i class=\"icon-us-dollar\"></i>\n                    <h4>100% MONEY<br>BACK GUARANTEE</h4>\n                </li>\n                <li>\n                    <i class=\"icon-online-support\"></i>\n                    <h4>ONLINE<br>SUPPORT 24/7</h4>\n                </li>\n            </ul>\n        </div><!-- End .widget -->\n\n        <div class=\"widget widget-banner\">\n            <div class=\"banner banner-image\">\n                <a href=\"#\">\n                    <img src=\"assets/images/banners/banner-sidebar.jpg\" alt=\"Banner Desc\">\n                </a>\n            </div><!-- End .banner -->\n        </div><!-- End .widget -->\n\n        <div class=\"widget widget-featured\">\n            <h3 class=\"widget-title\">Featured Products</h3>\n            \n            <div class=\"widget-body\">\n                <div class=\"owl-carousel widget-featured-products\">\n                    <div class=\"featured-col\">\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-1.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-2.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-3.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                    </div><!-- End .featured-col -->\n\n                    <div class=\"featured-col\">\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-4.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-5.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                        <div class=\"product-default left-details product-widget\">\n                            <figure>\n                                <a href=\"product.html\">\n                                    <img src=\"assets/images/products/small/product-6.jpg\">\n                                </a>\n                            </figure>\n                            <div class=\"product-details\">\n                                <h2 class=\"product-title\">\n                                    <a href=\"product.html\">Product Short Name</a>\n                                </h2>\n                                <div class=\"ratings-container\">\n                                    <div class=\"product-ratings\">\n                                        <span class=\"ratings\" style=\"width:100%\"></span><!-- End .ratings -->\n                                        <span class=\"tooltiptext tooltip-top\"></span>\n                                    </div><!-- End .product-ratings -->\n                                </div><!-- End .product-container -->\n                                <div class=\"price-box\">\n                                    <span class=\"product-price\">$49.00</span>\n                                </div><!-- End .price-box -->\n                            </div><!-- End .product-details -->\n                        </div>\n                    </div><!-- End .featured-col -->\n                </div><!-- End .widget-featured-slider -->\n            </div><!-- End .widget-body -->\n        </div><!-- End .widget -->\n    </div>\n</aside>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-tabs/product-tabs.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-tabs/product-tabs.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"product-single-tabs\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"product-tab-desc\" data-toggle=\"tab\" href=\"#product-desc-content\" role=\"tab\" aria-controls=\"product-desc-content\" aria-selected=\"true\">Description</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"product-tab-tags\" data-toggle=\"tab\" href=\"#product-tags-content\" role=\"tab\" aria-controls=\"product-tags-content\" aria-selected=\"false\">Tags</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"product-tab-reviews\" data-toggle=\"tab\" href=\"#product-reviews-content\" role=\"tab\" aria-controls=\"product-reviews-content\" aria-selected=\"false\">Reviews</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div class=\"tab-pane fade show active\" id=\"product-desc-content\" role=\"tabpanel\" aria-labelledby=\"product-tab-desc\">\n            <div class=\"product-desc-content\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>\n                <ul>\n                    <li><i class=\"icon-ok\"></i>Any Product types that You want - Simple, Configurable</li>\n                    <li><i class=\"icon-ok\"></i>Downloadable/Digital Products, Virtual Products</li>\n                    <li><i class=\"icon-ok\"></i>Inventory Management with Backordered items</li>\n                </ul>\n                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n            </div><!-- End .product-desc-content -->\n        </div><!-- End .tab-pane -->\n\n        <div class=\"tab-pane fade\" id=\"product-tags-content\" role=\"tabpanel\" aria-labelledby=\"product-tab-tags\">\n            <div class=\"product-tags-content\">\n                <form action=\"#\">\n                    <h4>Add Your Tags:</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control form-control-sm\" required>\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Tags\">\n                    </div><!-- End .form-group -->\n                </form>\n                <p class=\"note\">Use spaces to separate tags. Use single quotes (') for phrases.</p>\n            </div><!-- End .product-tags-content -->\n        </div><!-- End .tab-pane -->\n\n        <div class=\"tab-pane fade\" id=\"product-reviews-content\" role=\"tabpanel\" aria-labelledby=\"product-tab-reviews\">\n            <div class=\"product-reviews-content\">\n                <div class=\"collateral-box\">\n                    <ul>\n                        <li>Be the first to review this product</li>\n                    </ul>\n                </div><!-- End .collateral-box -->\n\n                <div class=\"add-product-review\">\n                    <h3 class=\"text-uppercase heading-text-color font-weight-semibold\">WRITE YOUR OWN REVIEW</h3>\n                    <p>How do you rate this product? *</p>\n\n                    <form action=\"#\">\n                        <table class=\"ratings-table\">\n                            <thead>\n                                <tr>\n                                    <th>&nbsp;</th>\n                                    <th>1 star</th>\n                                    <th>2 stars</th>\n                                    <th>3 stars</th>\n                                    <th>4 stars</th>\n                                    <th>5 stars</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Quality</td>\n                                    <td>\n                                        <input type=\"radio\" name=\"ratings[1]\" id=\"Quality_1\" value=\"1\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"ratings[1]\" id=\"Quality_2\" value=\"2\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"ratings[1]\" id=\"Quality_3\" value=\"3\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"ratings[1]\" id=\"Quality_4\" value=\"4\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"ratings[1]\" id=\"Quality_5\" value=\"5\" class=\"radio\">\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Value</td>\n                                    <td>\n                                        <input type=\"radio\" name=\"value[1]\" id=\"Value_1\" value=\"1\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"value[1]\" id=\"Value_2\" value=\"2\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"value[1]\" id=\"Value_3\" value=\"3\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"value[1]\" id=\"Value_4\" value=\"4\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"value[1]\" id=\"Value_5\" value=\"5\" class=\"radio\">\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>Price</td>\n                                    <td>\n                                        <input type=\"radio\" name=\"price[1]\" id=\"Price_1\" value=\"1\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"price[1]\" id=\"Price_2\" value=\"2\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"price[1]\" id=\"Price_3\" value=\"3\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"price[1]\" id=\"Price_4\" value=\"4\" class=\"radio\">\n                                    </td>\n                                    <td>\n                                        <input type=\"radio\" name=\"price[1]\" id=\"Price_5\" value=\"5\" class=\"radio\">\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                        <div class=\"form-group\">\n                            <label>Nickname <span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control form-control-sm\" required>\n                        </div><!-- End .form-group -->\n                        <div class=\"form-group\">\n                            <label>Summary of Your Review <span class=\"required\">*</span></label>\n                            <input type=\"text\" class=\"form-control form-control-sm\" required>\n                        </div><!-- End .form-group -->\n                        <div class=\"form-group mb-2\">\n                            <label>Review <span class=\"required\">*</span></label>\n                            <textarea cols=\"5\" rows=\"6\" class=\"form-control form-control-sm\"></textarea>\n                        </div><!-- End .form-group -->\n\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit Review\">\n                    </form>\n                </div><!-- End .add-product-review -->\n            </div><!-- End .product-reviews-content -->\n        </div><!-- End .tab-pane -->\n    </div><!-- End .tab-content -->\n</div>");

/***/ }),

/***/ "./src/app/components/products/product-category/product-category.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/products/product-category/product-category.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/products/product-category/product-category.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/products/product-category/product-category.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryComponent", function() { return ProductCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductCategoryComponent = class ProductCategoryComponent {
    constructor() {
        this.obj = {
            link1: 'index.html',
            link2: '',
            text1: 'Electronica',
            text2: 'Auriculares',
            icon: 'icon-home'
        };
    }
    ngOnInit() {
    }
};
ProductCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-category/product-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-category.component.scss */ "./src/app/components/products/product-category/product-category.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductCategoryComponent);



/***/ }),

/***/ "./src/app/components/products/product-detail/product-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/products/product-detail/product-detail.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/products/product-detail/product-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/product-detail/product-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductDetailComponent = class ProductDetailComponent {
    constructor() {
        this.obj = {
            link1: 'index.html',
            link2: '',
            text1: 'Electronica',
            text2: 'Auriculares',
            icon: 'icon-home'
        };
    }
    ngOnInit() {
    }
};
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-detail/product-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/components/products/product-detail/product-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/components/products/products-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/products/products-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/components/products/product-detail/product-detail.component.ts");
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-category/product-category.component */ "./src/app/components/products/product-category/product-category.component.ts");





const routes = [
    {
        path: '', component: _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_4__["ProductCategoryComponent"]
    },
    {
        path: 'detail', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]
    }
];
let ProductRoutingModule = class ProductRoutingModule {
};
ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductRoutingModule);



/***/ }),

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/components/products/product-detail/product-detail.component.ts");
/* harmony import */ var _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-category/product-category.component */ "./src/app/components/products/product-category/product-category.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");






let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"], _product_category_product_category_component__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRoutingModule"],
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() {
        this.data = {
            link1: '',
            link2: '',
            text1: '',
            text2: '',
            icon: ''
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BreadcrumbComponent.prototype, "data", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/products/banner/banner.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/products/banner/banner.component.ts ***!
  \************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/banner/banner.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BannerComponent);



/***/ }),

/***/ "./src/app/shared/products/category-items/category-items.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/products/category-items/category-items.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoryItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemsComponent", function() { return CategoryItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryItemsComponent = class CategoryItemsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-items',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-items/category-items.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategoryItemsComponent);



/***/ }),

/***/ "./src/app/shared/products/category-sidebar/category-sidebar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/products/category-sidebar/category-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategorySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySidebarComponent", function() { return CategorySidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategorySidebarComponent = class CategorySidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategorySidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/category-sidebar/category-sidebar.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CategorySidebarComponent);



/***/ }),

/***/ "./src/app/shared/products/product-container/product-container.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/products/product-container/product-container.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductContainerComponent", function() { return ProductContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductContainerComponent = class ProductContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-container',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-container/product-container.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductContainerComponent);



/***/ }),

/***/ "./src/app/shared/products/product-featured/product-featured.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/products/product-featured/product-featured.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductFeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFeaturedComponent", function() { return ProductFeaturedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductFeaturedComponent = class ProductFeaturedComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductFeaturedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-featured',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-featured.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-featured/product-featured.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductFeaturedComponent);



/***/ }),

/***/ "./src/app/shared/products/product-sidebar/product-sidebar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/products/product-sidebar/product-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function() { return ProductSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductSidebarComponent = class ProductSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-sidebar/product-sidebar.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductSidebarComponent);



/***/ }),

/***/ "./src/app/shared/products/product-tabs/product-tabs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/products/product-tabs/product-tabs.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductTabsComponent = class ProductTabsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-tabs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/products/product-tabs/product-tabs.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductTabsComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/product-container/product-container.component */ "./src/app/shared/products/product-container/product-container.component.ts");
/* harmony import */ var _products_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-tabs/product-tabs.component */ "./src/app/shared/products/product-tabs/product-tabs.component.ts");
/* harmony import */ var _products_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-sidebar/product-sidebar.component */ "./src/app/shared/products/product-sidebar/product-sidebar.component.ts");
/* harmony import */ var _products_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product-featured/product-featured.component */ "./src/app/shared/products/product-featured/product-featured.component.ts");
/* harmony import */ var _products_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/category-sidebar/category-sidebar.component */ "./src/app/shared/products/category-sidebar/category-sidebar.component.ts");
/* harmony import */ var _products_category_items_category_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/category-items/category-items.component */ "./src/app/shared/products/category-items/category-items.component.ts");
/* harmony import */ var _products_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/banner/banner.component */ "./src/app/shared/products/banner/banner.component.ts");











let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
            _products_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_4__["ProductContainerComponent"],
            _products_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_5__["ProductTabsComponent"],
            _products_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["ProductSidebarComponent"],
            _products_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_7__["ProductFeaturedComponent"],
            _products_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["CategorySidebarComponent"],
            _products_category_items_category_items_component__WEBPACK_IMPORTED_MODULE_9__["CategoryItemsComponent"],
            _products_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
            _products_product_container_product_container_component__WEBPACK_IMPORTED_MODULE_4__["ProductContainerComponent"],
            _products_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_5__["ProductTabsComponent"],
            _products_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["ProductSidebarComponent"],
            _products_product_featured_product_featured_component__WEBPACK_IMPORTED_MODULE_7__["ProductFeaturedComponent"],
            _products_category_sidebar_category_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["CategorySidebarComponent"],
            _products_category_items_category_items_component__WEBPACK_IMPORTED_MODULE_9__["CategoryItemsComponent"],
            _products_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=components-products-products-module-es2015.js.map