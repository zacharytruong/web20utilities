/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/xmlEnd.xml":
/*!************************!*\
  !*** ./src/xmlEnd.xml ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("</channel>\r\n</rss>\r\n\t");

/***/ }),

/***/ "./src/xmlStart.xml":
/*!**************************!*\
  !*** ./src/xmlStart.xml ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n<rss version=\"2.0\"\r\n\txmlns:excerpt=\"http://wordpress.org/export/1.2/excerpt/\"\r\n\txmlns:content=\"http://purl.org/rss/1.0/modules/content/\"\r\n\txmlns:wfw=\"http://wellformedweb.org/CommentAPI/\"\r\n\txmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n\txmlns:wp=\"http://wordpress.org/export/1.2/\"\r\n>\r\n<channel>\r\n\t<wp:wxr_version>1.2</wp:wxr_version>");

/***/ }),

/***/ "./src/memberProfiles/memberProfiles.js":
/*!**********************************************!*\
  !*** ./src/memberProfiles/memberProfiles.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "memberProfiles": () => (/* binding */ memberProfiles)
/* harmony export */ });
const memberProfiles = ( function () {
  
  class Agent {
    constructor(name, mlsArea, mlsID) {
        this.title = `<item>
        <title><![CDATA[${name}]]></title>
        <description></description>
        <content:encoded>
          <![CDATA[`;
        this.mainBlock = `<!-- wp:acf/block-callout-block {
          "name": "acf\\/block-callout-block",
          "data": {
              "header": "${name}",
              "_header": "field_5e0f4a7e86613",
              "sub": "Please replace with partner's sub header",
              "_sub": "field_5e0f4bdbad92a",
              "text_align": "center",
              "_text_align": "field_5e8f74b3303f0",
              "overlay_style": "full",
              "_overlay_style": "field_5fea3f62e4059",
              "block_size": "default",
              "_block_size": "field_5e0f4cc5ad931",
              "block_type": "image",
              "_block_type": "field_5e0f4be4ad92b",
              "image": 18,
              "_image": "field_5e0f4c25ad92c",
              "has_modal": "1",
              "_has_modal": "field_5e0f4cadad92f",
              "button_text": "Contact Us",
              "_button_text": "field_5ed12da12cc77",
              "button_style": "stroke-white",
              "_button_style": "field_5e187d707743f",
              "form_fields_selected_form": "2",
              "_form_fields_selected_form": "field_614124d48f2ef",
              "form_fields_form_title": "0",
              "_form_fields_form_title": "field_6148e524982f6",
              "form_fields_form_subtitle": "0",
              "_form_fields_form_subtitle": "field_6148e5c6982f8",
              "form_fields_lead_routing_destination": "",
              "_form_fields_lead_routing_destination": "field_6148e61c982fa",
              "form_fields_confirmation_behaviour": "Default Confirmation Message",
              "_form_fields_confirmation_behaviour": "field_6148e67b982fb",
              "form_fields": "",
              "_form_fields": "field_614910438f413"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.memberBlock = `<!-- wp:acf/block-team-member-block {
          "id": "block_620ed4cc205b9",
          "name": "acf\/block-team-member-block",
          "data": [],
          "align": "",
          "mode": "preview"
        } /-->`;
        this.statBlockGroup = `<!-- wp:group {"backgroundColor":"neutral-200"} -->
        <div class="wp-block-group has-neutral-200-background-color has-background"><!-- wp:acf/block-stat-block {
          "name": "acf\\/block-stat-block",
          "data": {
              "has_title": "1",
              "_has_title": "field_5e18937f3e93a",
              "section_title": "Highlights",
              "_section_title": "field_5e1893923e93b",
              "text_alignment": "center",
              "_text_alignment": "field_5e1893ba3e93c",
              "items_0_text": "Families Served",
              "_items_0_text": "field_5dc55d916245e",
              "items_0_number": "1000+",
              "_items_0_number": "field_5dc55d966245f",
              "items_1_text": "WSJ Ranking",
              "_items_1_text": "field_5dc55d916245e",
              "items_1_number": "Top 1%",
              "_items_1_number": "field_5dc55d966245f",
              "items_2_text": "5-Star Zillow Reviews",
              "_items_2_text": "field_5dc55d916245e",
              "items_2_number": "600+",
              "_items_2_number": "field_5dc55d966245f",
              "items": 3,
              "_items": "field_5dc55d6c6245c"
            },
          "align": "",
          "mode": "edit"
        } /--></div>
        <!-- /wp:group -->`;
        this.sectionHeader = `<!-- wp:acf/block-section-head {
          "name": "acf\\/block-section-head",
          "data": {
              "section_title": "My Listings",
              "_section_title": "field_5dec10001f528",
              "title_heading_size": "large",
              "_title_heading_size": "field_610a4774d17b5",
              "show_colored_line": "1",
              "_show_colored_line": "field_5e6006f36dddf",
              "section_subtitle": "",
              "_section_subtitle": "field_5dec10081f529"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.hjBlock = ` <!-- wp:acf/block-home-junction-block {
          "name": "acf\\/block-home-junction-block",
          "data": {
              "shortcode": "[listings market=\\"${mlsArea}\\" agentId=\\"${mlsID}\\" listingType=\\"residential,multifamily\\" sortfield=\\"daysOnHJI\\" sortorder=\\"asc\\" pageSize=\\"8\\" grid_size=\\"4\\" map=\\"0\\" pagination=\\"0\\"]",
              "_shortcode": "field_5ebe3e373e5d6"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.pastSalesSection = `    <!-- wp:acf/block-section-head {
          "name": "acf\\/block-section-head",
          "data": {
              "section_title": "Past Sales",
              "_section_title": "field_5dec10001f528",
              "title_heading_size": "large",
              "_title_heading_size": "field_610a4774d17b5",
              "show_colored_line": "1",
              "_show_colored_line": "field_5e6006f36dddf",
              "section_subtitle": "",
              "_section_subtitle": "field_5dec10081f529"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.hjPastSales = `<!-- wp:acf/block-home-junction-block {
          "name": "acf\\/block-home-junction-block",
          "data": {
              "shortcode": "<div data-pm-slice=\\"1 1 []\\" data-en-clipboard=\\"true\\">[past_sales market=\\"${mlsArea}\\" agentId=\\"${mlsID}\\" sortfield=\\"offMarketDate\\" sortorder=\\"desc\\" status=\\"Sold\\" pageSize=\\"8\\" grid_size=\\"3\\" map=\\"0\\" pagination=\\"1\\"]<\\/div>",
              "_shortcode": "field_5ebe3e373e5d6"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.neighborhoodsCardsGroup = `<!-- wp:group {"backgroundColor":"neutral-200"} -->
        <div class="wp-block-group has-neutral-200-background-color has-background"><!-- wp:spacer {"height":1} -->
        <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
        <!-- /wp:spacer -->
    
        <!-- wp:acf/block-cards {
          "name": "acf\\/block-cards",
          "data": {
              "title": "Explore Our Neighborhoods",
              "_title": "field_6030498934b30",
              "card_0_image": 124,
              "_card_0_image": "field_60304a3034b32",
              "card_0_image_size": "fill",
              "_card_0_image_size": "field_6035a3e032cc5",
              "card_0_link_to": "\\/community-details\\/almaden-valley\\/",
              "_card_0_link_to": "field_60304a5834b33",
              "card_0_title": "Almaden Valley",
              "_card_0_title": "field_60304a7334b34",
              "card_1_image": 126,
              "_card_1_image": "field_60304a3034b32",
              "card_1_image_size": "fill",
              "_card_1_image_size": "field_6035a3e032cc5",
              "card_1_link_to": "\\/community-details\\/cambrian-park\\/",
              "_card_1_link_to": "field_60304a5834b33",
              "card_1_title": "Cambrian Park",
              "_card_1_title": "field_60304a7334b34",
              "card_2_image": 129,
              "_card_2_image": "field_60304a3034b32",
              "card_2_image_size": "fill",
              "_card_2_image_size": "field_6035a3e032cc5",
              "card_2_link_to": "\\/community-details\\/downtown-san-jose\\/",
              "_card_2_link_to": "field_60304a5834b33",
              "card_2_title": "San Jose",
              "_card_2_title": "field_60304a7334b34",
              "card_3_image": 133,
              "_card_3_image": "field_60304a3034b32",
              "card_3_image_size": "fill",
              "_card_3_image_size": "field_6035a3e032cc5",
              "card_3_link_to": "\\/community-details\\/willow-glen\\/",
              "_card_3_link_to": "field_60304a5834b33",
              "card_3_title": "Willow Glen",
              "_card_3_title": "field_60304a7334b34",
              "card_4_image": 128,
              "_card_4_image": "field_60304a3034b32",
              "card_4_image_size": "fill",
              "_card_4_image_size": "field_6035a3e032cc5",
              "card_4_link_to": "\\/community-details\\/los-gatos\\/",
              "_card_4_link_to": "field_60304a5834b33",
              "card_4_title": "Los Gatos",
              "_card_4_title": "field_60304a7334b34",
              "card_5_image": 132,
              "_card_5_image": "field_60304a3034b32",
              "card_5_image_size": "fill",
              "_card_5_image_size": "field_6035a3e032cc5",
              "card_5_link_to": "\\/community-details\\/saratoga\\/",
              "_card_5_link_to": "field_60304a5834b33",
              "card_5_title": "Saratoga",
              "_card_5_title": "field_60304a7334b34",
              "card_6_image": 468,
              "_card_6_image": "field_60304a3034b32",
              "card_6_image_size": "fill",
              "_card_6_image_size": "field_6035a3e032cc5",
              "card_6_link_to": "\\/community-details\\/santa-cruz\\/",
              "_card_6_link_to": "field_60304a5834b33",
              "card_6_title": "Santa Cruz",
              "_card_6_title": "field_60304a7334b34",
              "card_7_image": 460,
              "_card_7_image": "field_60304a3034b32",
              "card_7_image_size": "fill",
              "_card_7_image_size": "field_6035a3e032cc5",
              "card_7_link_to": "\\/community-details\\/carmel\\/",
              "_card_7_link_to": "field_60304a5834b33",
              "card_7_title": "Carmel",
              "_card_7_title": "field_60304a7334b34",
              "card": 8,
              "_card": "field_603049a234b31"
            },
          "align": "",
          "mode": "edit"
        } /-->
    
        <!-- wp:spacer {"height":1} -->
        <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
        <!-- /wp:spacer -->
    
        <!-- wp:buttons {"contentJustification":"center"} -->
        <div class="wp-block-buttons is-content-justification-center"><!-- wp:button -->
        <div class="wp-block-button"><a class="wp-block-button__link" href="/communities">view all</a></div>
        <!-- /wp:button --></div>
        <!-- /wp:buttons -->
    
        <!-- wp:spacer {"height":50} -->
        <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
        <!-- /wp:spacer --></div>
        <!-- /wp:group -->`;
        this.homeValuation = `<!-- wp:acf/block-callout-block {
          "name": "acf\\/block-callout-block",
          "data": {
              "header": "Discover Your Home's Value",
              "_header": "field_5e0f4a7e86613",
              "sub": "",
              "_sub": "field_5e0f4bdbad92a",
              "text_align": "center",
              "_text_align": "field_5e8f74b3303f0",
              "overlay_style": "full",
              "_overlay_style": "field_5fea3f62e4059",
              "block_size": "default",
              "_block_size": "field_5e0f4cc5ad931",
              "block_type": "image",
              "_block_type": "field_5e0f4be4ad92b",
              "image": 679,
              "_image": "field_5e0f4c25ad92c",
              "has_modal": "0",
              "_has_modal": "field_5e0f4cadad92f",
              "button": {
                  "title": "Get Home Value",
                  "url": "\\/home-valuation",
                  "target": ""
              },
              "_button": "field_5e0f4cbcad930",
              "button_style": "stroke-white",
              "_button_style": "field_5e187d707743f"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.featureListings =`<!-- wp:acf/block-featured-listings-cards {
          "name": "acf\\/block-featured-listings-cards",
          "data": {
              "section_title": "Featured Listings",
              "_section_title": "field_5dec10001f528",
              "title_heading_size": "large",
              "_title_heading_size": "field_610a4774d17b5",
              "show_colored_line": "0",
              "_show_colored_line": "field_5e6006f36dddf",
              "section_subtitle": "",
              "_section_subtitle": "field_5dec10081f529",
              "button": "",
              "_button": "field_6090a0da24a8b"
            },
          "align": "",
          "mode": "edit"
        } /-->`;
        this.letsTalk = `<!-- wp:acf/block-callout-block {
          "name": "acf\\/block-callout-block",
          "data": {
              "header": "Let's Talk",
              "_header": "field_5e0f4a7e86613",
              "sub": "You've got questions and we can't wait to answer them.",
              "_sub": "field_5e0f4bdbad92a",
              "block_size": "default",
              "_block_size": "field_5e0f4cc5ad931",
              "block_type": "image",
              "_block_type": "field_5e0f4be4ad92b",
              "image": 18,
              "_image": "field_5e0f4c25ad92c",
              "has_modal": "1",
              "_has_modal": "field_5e0f4cadad92f",
              "select_modal_form": "2",
              "_select_modal_form": "field_5e18be809a1c7",
              "button": "",
              "_button": "field_5e0f4cbcad930",
              "button_style": "stroke-white",
              "_button_style": "field_5e187d707743f",
              "form_fields_selected_form": "2",
              "_form_fields_selected_form": "field_614124d48f2ef",
              "form_fields_form_title": "0",
              "_form_fields_form_title": "field_6148e524982f6",
              "form_fields_form_subtitle": "0",
              "_form_fields_form_subtitle": "field_6148e5c6982f8",
              "form_fields_lead_routing_destination": "",
              "_form_fields_lead_routing_destination": "field_6148e61c982fa",
              "form_fields_confirmation_behaviour": "Default Confirmation Message",
              "_form_fields_confirmation_behaviour": "field_6148e67b982fb",
              "form_fields": "",
              "_form_fields": "field_614910438f413"
            },
          "align": "",
          "mode": "edit"
        }
      /-->]]>`;
        this.mpEnd = `</content:encoded>

        <wp:post_type><![CDATA[member-profile]]></wp:post_type>
        </item>`;
    }
  }
  
  function createAgents(arr1, arr2) {
    arr1.forEach( (arrItem) => {
      const agent = new Agent(arrItem['Preferred Name'], arrItem['MLS Area'], arrItem['MLS ID']);
      arr2.push(agent);
    });
    return arr2;
  }
  function createAgentData(obj) {
    let agentData = '';
    for (let prop in obj) {
      agentData += obj[prop];
    }
    return agentData;
  }
  function createAgentsArrayData(arr) {
    let data = '';
    for (let arrItem of arr) {
      data += createAgentData(arrItem);
    }
    return data;
  }
  return {
    createAgents,
    createAgentData,
    createAgentsArrayData,
  }

})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memberProfiles_memberProfiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memberProfiles/memberProfiles.js */ "./src/memberProfiles/memberProfiles.js");
/* harmony import */ var _xmlStart_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xmlStart.xml */ "./src/xmlStart.xml");
/* harmony import */ var _xmlEnd_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xmlEnd.xml */ "./src/xmlEnd.xml");






( function localStorage() {
  const localStorage = window.localStorage;
  const AgentsArr = [];
  localStorage.setItem('AgentsArr', JSON.stringify(AgentsArr));
})();

(function uploadForm() {

  const uploadForm = document.createElement('form');
  uploadForm.style.display = 'flex';
  uploadForm.style.height = '5rem';
  uploadForm.style.width = '100%';
  mainContent.appendChild(uploadForm);
  
  const uploadBtn = document.createElement('input');
  uploadBtn.id = 'upload';
  uploadBtn.type = 'file';
  uploadBtn.style.display = 'none';
  uploadBtn.addEventListener('change', handleUploadFile);
  uploadForm.appendChild(uploadBtn);
  const uploadBtnLabel = document.createElement('label');
  uploadBtnLabel.setAttribute('for', 'upload');
  uploadBtnLabel.textContent = 'Browse';
  uploadBtnLabel.style.alignSelf = 'flex-start';
  uploadBtnLabel.style.padding = '1.5rem 3rem';
  uploadBtnLabel.style.background = '#3f4241';
  uploadBtnLabel.style['border-radius'] = '.7rem';
  uploadBtnLabel.style.color = '#FFFFFF';
  uploadForm.appendChild(uploadBtnLabel);
  mainContent.appendChild(uploadForm);

  const dropArea = document.createElement('div');
  dropArea.id = 'drop-area';
  dropArea.style.width = '30rem';
  dropArea.style.height = '30rem';
  dropArea.style.background = 'rgba(63, 66, 65, .5)';
  dropArea.style.borderRadius = '1rem';
  const dropNotice = document.createElement('p');
  dropNotice.textContent = 'Drop Your File Here';
  dropNotice.style.fontSize = '2rem';
  dropNotice.style.textAlign = 'center';
  dropNotice.style.padding = '2rem';
  dropNotice.style.userSelect = 'none';
  dropArea.appendChild(dropNotice);
  mainContent.appendChild(dropArea);
  
  // Reading uploaded file
  let reader = new FileReader();
  reader.addEventListener('load', handleFileRead);

  dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Style the drag-and-drop as a "copy file" operation.
    event.dataTransfer.dropEffect = 'copy';
  });
  
  dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const fileType = file.type;
    // fileType === 'text' ? dropNotice.textContent = file.name : dropNotice.textContent = 'Unsupported file, please add csv file only.'
    dropNotice.textContent = file.name
    // Trigger change event
    reader.readAsText(file);
  });
  
  function handleUploadFile(e) {
    let file = e.target.files[0];
    // Trigger change event
    reader.readAsText(file);
  }
  function handleFileRead(e) {
    const save = e.target.result;
    // Convert uploaded file to readable objects
    const uploadedData = strToArr(save);
    localStorage.setItem('uploadedData', JSON.stringify(uploadedData));
    // Clear local storage after 120s for security purposes
    setTimeout(( () => localStorage.removeItem('uploadedData')), 120000)
  }

  // Function to convert csv file to readable objects
  function strToArr(str, delimiter = ',') {
    str = str.replace(/"/g, '');
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }

})();

(function downloadBtn() {
  
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = 'Download';
  downloadBtn.style.padding = `1.5rem 3rem`;
  downloadBtn.style.cursor = 'pointer';
  downloadBtn.style.fontSize = '2rem';
  downloadBtn.style.background = '#3f4241';
  downloadBtn.style.color = '#FFFFFF';
  downloadBtn.style['border-radius'] = '.7rem';
  mainContent.appendChild(downloadBtn);
  
  downloadBtn.onclick = (() => {
    if (localStorage.getItem('uploadedData')) {
      // Generate Data
      const uploadedData = JSON.parse(localStorage.getItem('uploadedData'));
      const AgentsArr = JSON.parse(localStorage.getItem('AgentsArr'));
      _memberProfiles_memberProfiles_js__WEBPACK_IMPORTED_MODULE_2__.memberProfiles.createAgents(uploadedData, AgentsArr);
      const data = _memberProfiles_memberProfiles_js__WEBPACK_IMPORTED_MODULE_2__.memberProfiles.createAgentsArrayData(AgentsArr);

      // Download functionality
      const blobData = createBlobData([], _xmlStart_xml__WEBPACK_IMPORTED_MODULE_3__["default"] ,data, _xmlEnd_xml__WEBPACK_IMPORTED_MODULE_4__["default"]);
      const blob = new Blob(blobData, {type: "text/plain;charset=utf-8"});
      file_saver__WEBPACK_IMPORTED_MODULE_1___default().saveAs(blob, "memberProfiles.xml");
      localStorage.removeItem('uploadedData');
     } else return;
  });
    function createBlobData(arr, ...args) {
      for (let arg of args) {
        arr.push(arg);
      }
      return arr;
    }
})();

( function clearStorage() {
  const btn = document.createElement('button');
  btn.textContent = 'CLEAR';
  btn.style.padding = '1rem 3rem';
  btn.onclick = clearStorage;


  mainContent.appendChild(btn);
  function clearStorage() {
    window.localStorage.clear();
    location.reload();
  }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtHQUFlLEdBQUcsSUFBcUMsQ0FBQyxpQ0FBTyxFQUFFLG9DQUFDLENBQUM7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxLQUFLLEVBQTZFLENBQUMsa0JBQWtCLGFBQWEsZ0JBQWdCLCtCQUErQixXQUFXLDRGQUE0RixXQUFXLGtFQUFrRSw0REFBNEQsWUFBWSxJQUFJLGtCQUFrQix5QkFBeUIsMERBQTBELGtCQUFrQixzQkFBc0IseUNBQXlDLFVBQVUsY0FBYyx5QkFBeUIsb0JBQW9CLElBQUksU0FBUyxVQUFVLG9DQUFvQyxjQUFjLElBQUkseUNBQXlDLFNBQVMsMENBQTBDLDBGQUEwRiwySEFBMkgscUJBQU0sRUFBRSxxQkFBTSxVQUFVLHFCQUFNLENBQUMscUJBQU0sd01BQXdNLDhEQUE4RCx1REFBdUQsaU5BQWlOLDBCQUEwQiw0QkFBNEIsS0FBSyxLQUFLLGdEQUFnRCxtRkFBbUYsc0JBQXNCLEtBQUssa0NBQWtDLGlEQUFpRCxLQUFLLEdBQUcsbUJBQW1CLDhIQUE4SCxvSUFBb0ksaURBQWlELHFCQUFxQix1QkFBdUIsZUFBZSwwQkFBMEIsR0FBRyx3QkFBd0IseUNBQXlDLG9CQUFvQixLQUFLLGdEQUFnRCw0REFBNEQscUJBQXFCLE9BQU8sRUFBRSxvQkFBb0IsS0FBMEIscUJBQXFCOztBQUVocEY7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsaUVBQWUsNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0MsaUVBQWUsK1pBQStaOzs7Ozs7Ozs7Ozs7Ozs7QUNBOWE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDhDQUE4QyxpQ0FBaUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxRQUFRLGlCQUFpQixNQUFNO0FBQ2pGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGlIQUFpSCxRQUFRLGlCQUFpQixNQUFNO0FBQ2hKO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsdURBQXVELGlDQUFpQztBQUN4RixvR0FBb0csWUFBWTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7OztVQzVWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzBCO0FBQ21CO0FBQzVCO0FBQ0o7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEZBQTJCO0FBQ2pDLG1CQUFtQixtR0FBb0M7QUFDdkQ7QUFDQTtBQUNBLDBDQUEwQyxxREFBUSxRQUFRLG1EQUFNO0FBQ2hFLHVDQUF1QyxrQkFBa0IsZUFBZTtBQUN4RSxNQUFNLHdEQUFnQjtBQUN0QjtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViMjB1dGlsaXRpZXMvLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCJ3ZWJwYWNrOi8vd2ViMjB1dGlsaXRpZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzLy4vc3JjL3htbEVuZC54bWwiLCJ3ZWJwYWNrOi8vd2ViMjB1dGlsaXRpZXMvLi9zcmMveG1sU3RhcnQueG1sIiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzLy4vc3JjL21lbWJlclByb2ZpbGVzL21lbWJlclByb2ZpbGVzLmpzIiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWIyMHV0aWxpdGllcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYjIwdXRpbGl0aWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViMjB1dGlsaXRpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWIyMHV0aWxpdGllcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgXCI8L2NoYW5uZWw+XFxyXFxuPC9yc3M+XFxyXFxuXFx0XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJVVEYtOFxcXCIgPz5cXHJcXG48cnNzIHZlcnNpb249XFxcIjIuMFxcXCJcXHJcXG5cXHR4bWxuczpleGNlcnB0PVxcXCJodHRwOi8vd29yZHByZXNzLm9yZy9leHBvcnQvMS4yL2V4Y2VycHQvXFxcIlxcclxcblxcdHhtbG5zOmNvbnRlbnQ9XFxcImh0dHA6Ly9wdXJsLm9yZy9yc3MvMS4wL21vZHVsZXMvY29udGVudC9cXFwiXFxyXFxuXFx0eG1sbnM6d2Z3PVxcXCJodHRwOi8vd2VsbGZvcm1lZHdlYi5vcmcvQ29tbWVudEFQSS9cXFwiXFxyXFxuXFx0eG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIlxcclxcblxcdHhtbG5zOndwPVxcXCJodHRwOi8vd29yZHByZXNzLm9yZy9leHBvcnQvMS4yL1xcXCJcXHJcXG4+XFxyXFxuPGNoYW5uZWw+XFxyXFxuXFx0PHdwOnd4cl92ZXJzaW9uPjEuMjwvd3A6d3hyX3ZlcnNpb24+XCI7IiwiY29uc3QgbWVtYmVyUHJvZmlsZXMgPSAoIGZ1bmN0aW9uICgpIHtcclxuICBcclxuICBjbGFzcyBBZ2VudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBtbHNBcmVhLCBtbHNJRCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBgPGl0ZW0+XHJcbiAgICAgICAgPHRpdGxlPjwhW0NEQVRBWyR7bmFtZX1dXT48L3RpdGxlPlxyXG4gICAgICAgIDxkZXNjcmlwdGlvbj48L2Rlc2NyaXB0aW9uPlxyXG4gICAgICAgIDxjb250ZW50OmVuY29kZWQ+XHJcbiAgICAgICAgICA8IVtDREFUQVtgO1xyXG4gICAgICAgIHRoaXMubWFpbkJsb2NrID0gYDwhLS0gd3A6YWNmL2Jsb2NrLWNhbGxvdXQtYmxvY2sge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1jYWxsb3V0LWJsb2NrXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwiaGVhZGVyXCI6IFwiJHtuYW1lfVwiLFxyXG4gICAgICAgICAgICAgIFwiX2hlYWRlclwiOiBcImZpZWxkXzVlMGY0YTdlODY2MTNcIixcclxuICAgICAgICAgICAgICBcInN1YlwiOiBcIlBsZWFzZSByZXBsYWNlIHdpdGggcGFydG5lcidzIHN1YiBoZWFkZXJcIixcclxuICAgICAgICAgICAgICBcIl9zdWJcIjogXCJmaWVsZF81ZTBmNGJkYmFkOTJhXCIsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0X2FsaWduXCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgXCJfdGV4dF9hbGlnblwiOiBcImZpZWxkXzVlOGY3NGIzMzAzZjBcIixcclxuICAgICAgICAgICAgICBcIm92ZXJsYXlfc3R5bGVcIjogXCJmdWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJfb3ZlcmxheV9zdHlsZVwiOiBcImZpZWxkXzVmZWEzZjYyZTQwNTlcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3NpemVcIjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgXCJfYmxvY2tfc2l6ZVwiOiBcImZpZWxkXzVlMGY0Y2M1YWQ5MzFcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3R5cGVcIjogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2Jsb2NrX3R5cGVcIjogXCJmaWVsZF81ZTBmNGJlNGFkOTJiXCIsXHJcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiAxOCxcclxuICAgICAgICAgICAgICBcIl9pbWFnZVwiOiBcImZpZWxkXzVlMGY0YzI1YWQ5MmNcIixcclxuICAgICAgICAgICAgICBcImhhc19tb2RhbFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICBcIl9oYXNfbW9kYWxcIjogXCJmaWVsZF81ZTBmNGNhZGFkOTJmXCIsXHJcbiAgICAgICAgICAgICAgXCJidXR0b25fdGV4dFwiOiBcIkNvbnRhY3QgVXNcIixcclxuICAgICAgICAgICAgICBcIl9idXR0b25fdGV4dFwiOiBcImZpZWxkXzVlZDEyZGExMmNjNzdcIixcclxuICAgICAgICAgICAgICBcImJ1dHRvbl9zdHlsZVwiOiBcInN0cm9rZS13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2J1dHRvbl9zdHlsZVwiOiBcImZpZWxkXzVlMTg3ZDcwNzc0M2ZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX3NlbGVjdGVkX2Zvcm1cIjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfc2VsZWN0ZWRfZm9ybVwiOiBcImZpZWxkXzYxNDEyNGQ0OGYyZWZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2Zvcm1fdGl0bGVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfZm9ybV90aXRsZVwiOiBcImZpZWxkXzYxNDhlNTI0OTgyZjZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2Zvcm1fc3VidGl0bGVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfZm9ybV9zdWJ0aXRsZVwiOiBcImZpZWxkXzYxNDhlNWM2OTgyZjhcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2xlYWRfcm91dGluZ19kZXN0aW5hdGlvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgIFwiX2Zvcm1fZmllbGRzX2xlYWRfcm91dGluZ19kZXN0aW5hdGlvblwiOiBcImZpZWxkXzYxNDhlNjFjOTgyZmFcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2NvbmZpcm1hdGlvbl9iZWhhdmlvdXJcIjogXCJEZWZhdWx0IENvbmZpcm1hdGlvbiBNZXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfY29uZmlybWF0aW9uX2JlaGF2aW91clwiOiBcImZpZWxkXzYxNDhlNjdiOTgyZmJcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNcIjogXCJmaWVsZF82MTQ5MTA0MzhmNDEzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWxpZ25cIjogXCJcIixcclxuICAgICAgICAgIFwibW9kZVwiOiBcImVkaXRcIlxyXG4gICAgICAgIH0gLy0tPmA7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJCbG9jayA9IGA8IS0tIHdwOmFjZi9ibG9jay10ZWFtLW1lbWJlci1ibG9jayB7XHJcbiAgICAgICAgICBcImlkXCI6IFwiYmxvY2tfNjIwZWQ0Y2MyMDViOVwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFwvYmxvY2stdGVhbS1tZW1iZXItYmxvY2tcIixcclxuICAgICAgICAgIFwiZGF0YVwiOiBbXSxcclxuICAgICAgICAgIFwiYWxpZ25cIjogXCJcIixcclxuICAgICAgICAgIFwibW9kZVwiOiBcInByZXZpZXdcIlxyXG4gICAgICAgIH0gLy0tPmA7XHJcbiAgICAgICAgdGhpcy5zdGF0QmxvY2tHcm91cCA9IGA8IS0tIHdwOmdyb3VwIHtcImJhY2tncm91bmRDb2xvclwiOlwibmV1dHJhbC0yMDBcIn0gLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndwLWJsb2NrLWdyb3VwIGhhcy1uZXV0cmFsLTIwMC1iYWNrZ3JvdW5kLWNvbG9yIGhhcy1iYWNrZ3JvdW5kXCI+PCEtLSB3cDphY2YvYmxvY2stc3RhdC1ibG9jayB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhY2ZcXFxcL2Jsb2NrLXN0YXQtYmxvY2tcIixcclxuICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJoYXNfdGl0bGVcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgXCJfaGFzX3RpdGxlXCI6IFwiZmllbGRfNWUxODkzN2YzZTkzYVwiLFxyXG4gICAgICAgICAgICAgIFwic2VjdGlvbl90aXRsZVwiOiBcIkhpZ2hsaWdodHNcIixcclxuICAgICAgICAgICAgICBcIl9zZWN0aW9uX3RpdGxlXCI6IFwiZmllbGRfNWUxODkzOTIzZTkzYlwiLFxyXG4gICAgICAgICAgICAgIFwidGV4dF9hbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBcIl90ZXh0X2FsaWdubWVudFwiOiBcImZpZWxkXzVlMTg5M2JhM2U5M2NcIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXzBfdGV4dFwiOiBcIkZhbWlsaWVzIFNlcnZlZFwiLFxyXG4gICAgICAgICAgICAgIFwiX2l0ZW1zXzBfdGV4dFwiOiBcImZpZWxkXzVkYzU1ZDkxNjI0NWVcIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXzBfbnVtYmVyXCI6IFwiMTAwMCtcIixcclxuICAgICAgICAgICAgICBcIl9pdGVtc18wX251bWJlclwiOiBcImZpZWxkXzVkYzU1ZDk2NjI0NWZcIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXzFfdGV4dFwiOiBcIldTSiBSYW5raW5nXCIsXHJcbiAgICAgICAgICAgICAgXCJfaXRlbXNfMV90ZXh0XCI6IFwiZmllbGRfNWRjNTVkOTE2MjQ1ZVwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbXNfMV9udW1iZXJcIjogXCJUb3AgMSVcIixcclxuICAgICAgICAgICAgICBcIl9pdGVtc18xX251bWJlclwiOiBcImZpZWxkXzVkYzU1ZDk2NjI0NWZcIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXzJfdGV4dFwiOiBcIjUtU3RhciBaaWxsb3cgUmV2aWV3c1wiLFxyXG4gICAgICAgICAgICAgIFwiX2l0ZW1zXzJfdGV4dFwiOiBcImZpZWxkXzVkYzU1ZDkxNjI0NWVcIixcclxuICAgICAgICAgICAgICBcIml0ZW1zXzJfbnVtYmVyXCI6IFwiNjAwK1wiLFxyXG4gICAgICAgICAgICAgIFwiX2l0ZW1zXzJfbnVtYmVyXCI6IFwiZmllbGRfNWRjNTVkOTY2MjQ1ZlwiLFxyXG4gICAgICAgICAgICAgIFwiaXRlbXNcIjogMyxcclxuICAgICAgICAgICAgICBcIl9pdGVtc1wiOiBcImZpZWxkXzVkYzU1ZDZjNjI0NWNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+PC9kaXY+XHJcbiAgICAgICAgPCEtLSAvd3A6Z3JvdXAgLS0+YDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25IZWFkZXIgPSBgPCEtLSB3cDphY2YvYmxvY2stc2VjdGlvbi1oZWFkIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcImFjZlxcXFwvYmxvY2stc2VjdGlvbi1oZWFkXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwic2VjdGlvbl90aXRsZVwiOiBcIk15IExpc3RpbmdzXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl90aXRsZVwiOiBcImZpZWxkXzVkZWMxMDAwMWY1MjhcIixcclxuICAgICAgICAgICAgICBcInRpdGxlX2hlYWRpbmdfc2l6ZVwiOiBcImxhcmdlXCIsXHJcbiAgICAgICAgICAgICAgXCJfdGl0bGVfaGVhZGluZ19zaXplXCI6IFwiZmllbGRfNjEwYTQ3NzRkMTdiNVwiLFxyXG4gICAgICAgICAgICAgIFwic2hvd19jb2xvcmVkX2xpbmVcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2hvd19jb2xvcmVkX2xpbmVcIjogXCJmaWVsZF81ZTYwMDZmMzZkZGRmXCIsXHJcbiAgICAgICAgICAgICAgXCJzZWN0aW9uX3N1YnRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl9zdWJ0aXRsZVwiOiBcImZpZWxkXzVkZWMxMDA4MWY1MjlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+YDtcclxuICAgICAgICB0aGlzLmhqQmxvY2sgPSBgIDwhLS0gd3A6YWNmL2Jsb2NrLWhvbWUtanVuY3Rpb24tYmxvY2sge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1ob21lLWp1bmN0aW9uLWJsb2NrXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwic2hvcnRjb2RlXCI6IFwiW2xpc3RpbmdzIG1hcmtldD1cXFxcXCIke21sc0FyZWF9XFxcXFwiIGFnZW50SWQ9XFxcXFwiJHttbHNJRH1cXFxcXCIgbGlzdGluZ1R5cGU9XFxcXFwicmVzaWRlbnRpYWwsbXVsdGlmYW1pbHlcXFxcXCIgc29ydGZpZWxkPVxcXFxcImRheXNPbkhKSVxcXFxcIiBzb3J0b3JkZXI9XFxcXFwiYXNjXFxcXFwiIHBhZ2VTaXplPVxcXFxcIjhcXFxcXCIgZ3JpZF9zaXplPVxcXFxcIjRcXFxcXCIgbWFwPVxcXFxcIjBcXFxcXCIgcGFnaW5hdGlvbj1cXFxcXCIwXFxcXFwiXVwiLFxyXG4gICAgICAgICAgICAgIFwiX3Nob3J0Y29kZVwiOiBcImZpZWxkXzVlYmUzZTM3M2U1ZDZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+YDtcclxuICAgICAgICB0aGlzLnBhc3RTYWxlc1NlY3Rpb24gPSBgICAgIDwhLS0gd3A6YWNmL2Jsb2NrLXNlY3Rpb24taGVhZCB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhY2ZcXFxcL2Jsb2NrLXNlY3Rpb24taGVhZFwiLFxyXG4gICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICBcInNlY3Rpb25fdGl0bGVcIjogXCJQYXN0IFNhbGVzXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl90aXRsZVwiOiBcImZpZWxkXzVkZWMxMDAwMWY1MjhcIixcclxuICAgICAgICAgICAgICBcInRpdGxlX2hlYWRpbmdfc2l6ZVwiOiBcImxhcmdlXCIsXHJcbiAgICAgICAgICAgICAgXCJfdGl0bGVfaGVhZGluZ19zaXplXCI6IFwiZmllbGRfNjEwYTQ3NzRkMTdiNVwiLFxyXG4gICAgICAgICAgICAgIFwic2hvd19jb2xvcmVkX2xpbmVcIjogXCIxXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2hvd19jb2xvcmVkX2xpbmVcIjogXCJmaWVsZF81ZTYwMDZmMzZkZGRmXCIsXHJcbiAgICAgICAgICAgICAgXCJzZWN0aW9uX3N1YnRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl9zdWJ0aXRsZVwiOiBcImZpZWxkXzVkZWMxMDA4MWY1MjlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+YDtcclxuICAgICAgICB0aGlzLmhqUGFzdFNhbGVzID0gYDwhLS0gd3A6YWNmL2Jsb2NrLWhvbWUtanVuY3Rpb24tYmxvY2sge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1ob21lLWp1bmN0aW9uLWJsb2NrXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwic2hvcnRjb2RlXCI6IFwiPGRpdiBkYXRhLXBtLXNsaWNlPVxcXFxcIjEgMSBbXVxcXFxcIiBkYXRhLWVuLWNsaXBib2FyZD1cXFxcXCJ0cnVlXFxcXFwiPltwYXN0X3NhbGVzIG1hcmtldD1cXFxcXCIke21sc0FyZWF9XFxcXFwiIGFnZW50SWQ9XFxcXFwiJHttbHNJRH1cXFxcXCIgc29ydGZpZWxkPVxcXFxcIm9mZk1hcmtldERhdGVcXFxcXCIgc29ydG9yZGVyPVxcXFxcImRlc2NcXFxcXCIgc3RhdHVzPVxcXFxcIlNvbGRcXFxcXCIgcGFnZVNpemU9XFxcXFwiOFxcXFxcIiBncmlkX3NpemU9XFxcXFwiM1xcXFxcIiBtYXA9XFxcXFwiMFxcXFxcIiBwYWdpbmF0aW9uPVxcXFxcIjFcXFxcXCJdPFxcXFwvZGl2PlwiLFxyXG4gICAgICAgICAgICAgIFwiX3Nob3J0Y29kZVwiOiBcImZpZWxkXzVlYmUzZTM3M2U1ZDZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+YDtcclxuICAgICAgICB0aGlzLm5laWdoYm9yaG9vZHNDYXJkc0dyb3VwID0gYDwhLS0gd3A6Z3JvdXAge1wiYmFja2dyb3VuZENvbG9yXCI6XCJuZXV0cmFsLTIwMFwifSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2stZ3JvdXAgaGFzLW5ldXRyYWwtMjAwLWJhY2tncm91bmQtY29sb3IgaGFzLWJhY2tncm91bmRcIj48IS0tIHdwOnNwYWNlciB7XCJoZWlnaHRcIjoxfSAtLT5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjFweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgPCEtLSAvd3A6c3BhY2VyIC0tPlxyXG4gICAgXHJcbiAgICAgICAgPCEtLSB3cDphY2YvYmxvY2stY2FyZHMge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1jYXJkc1wiLFxyXG4gICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9yZSBPdXIgTmVpZ2hib3Job29kc1wiLFxyXG4gICAgICAgICAgICAgIFwiX3RpdGxlXCI6IFwiZmllbGRfNjAzMDQ5ODkzNGIzMFwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF8wX2ltYWdlXCI6IDEyNCxcclxuICAgICAgICAgICAgICBcIl9jYXJkXzBfaW1hZ2VcIjogXCJmaWVsZF82MDMwNGEzMDM0YjMyXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzBfaW1hZ2Vfc2l6ZVwiOiBcImZpbGxcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzBfaW1hZ2Vfc2l6ZVwiOiBcImZpZWxkXzYwMzVhM2UwMzJjYzVcIixcclxuICAgICAgICAgICAgICBcImNhcmRfMF9saW5rX3RvXCI6IFwiXFxcXC9jb21tdW5pdHktZGV0YWlsc1xcXFwvYWxtYWRlbi12YWxsZXlcXFxcL1wiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMF9saW5rX3RvXCI6IFwiZmllbGRfNjAzMDRhNTgzNGIzM1wiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF8wX3RpdGxlXCI6IFwiQWxtYWRlbiBWYWxsZXlcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzBfdGl0bGVcIjogXCJmaWVsZF82MDMwNGE3MzM0YjM0XCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzFfaW1hZ2VcIjogMTI2LFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMV9pbWFnZVwiOiBcImZpZWxkXzYwMzA0YTMwMzRiMzJcIixcclxuICAgICAgICAgICAgICBcImNhcmRfMV9pbWFnZV9zaXplXCI6IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMV9pbWFnZV9zaXplXCI6IFwiZmllbGRfNjAzNWEzZTAzMmNjNVwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF8xX2xpbmtfdG9cIjogXCJcXFxcL2NvbW11bml0eS1kZXRhaWxzXFxcXC9jYW1icmlhbi1wYXJrXFxcXC9cIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzFfbGlua190b1wiOiBcImZpZWxkXzYwMzA0YTU4MzRiMzNcIixcclxuICAgICAgICAgICAgICBcImNhcmRfMV90aXRsZVwiOiBcIkNhbWJyaWFuIFBhcmtcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzFfdGl0bGVcIjogXCJmaWVsZF82MDMwNGE3MzM0YjM0XCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzJfaW1hZ2VcIjogMTI5LFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMl9pbWFnZVwiOiBcImZpZWxkXzYwMzA0YTMwMzRiMzJcIixcclxuICAgICAgICAgICAgICBcImNhcmRfMl9pbWFnZV9zaXplXCI6IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMl9pbWFnZV9zaXplXCI6IFwiZmllbGRfNjAzNWEzZTAzMmNjNVwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF8yX2xpbmtfdG9cIjogXCJcXFxcL2NvbW11bml0eS1kZXRhaWxzXFxcXC9kb3dudG93bi1zYW4tam9zZVxcXFwvXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF8yX2xpbmtfdG9cIjogXCJmaWVsZF82MDMwNGE1ODM0YjMzXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzJfdGl0bGVcIjogXCJTYW4gSm9zZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfMl90aXRsZVwiOiBcImZpZWxkXzYwMzA0YTczMzRiMzRcIixcclxuICAgICAgICAgICAgICBcImNhcmRfM19pbWFnZVwiOiAxMzMsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF8zX2ltYWdlXCI6IFwiZmllbGRfNjAzMDRhMzAzNGIzMlwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF8zX2ltYWdlX3NpemVcIjogXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF8zX2ltYWdlX3NpemVcIjogXCJmaWVsZF82MDM1YTNlMDMyY2M1XCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzNfbGlua190b1wiOiBcIlxcXFwvY29tbXVuaXR5LWRldGFpbHNcXFxcL3dpbGxvdy1nbGVuXFxcXC9cIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzNfbGlua190b1wiOiBcImZpZWxkXzYwMzA0YTU4MzRiMzNcIixcclxuICAgICAgICAgICAgICBcImNhcmRfM190aXRsZVwiOiBcIldpbGxvdyBHbGVuXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF8zX3RpdGxlXCI6IFwiZmllbGRfNjAzMDRhNzMzNGIzNFwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF80X2ltYWdlXCI6IDEyOCxcclxuICAgICAgICAgICAgICBcIl9jYXJkXzRfaW1hZ2VcIjogXCJmaWVsZF82MDMwNGEzMDM0YjMyXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzRfaW1hZ2Vfc2l6ZVwiOiBcImZpbGxcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzRfaW1hZ2Vfc2l6ZVwiOiBcImZpZWxkXzYwMzVhM2UwMzJjYzVcIixcclxuICAgICAgICAgICAgICBcImNhcmRfNF9saW5rX3RvXCI6IFwiXFxcXC9jb21tdW5pdHktZGV0YWlsc1xcXFwvbG9zLWdhdG9zXFxcXC9cIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzRfbGlua190b1wiOiBcImZpZWxkXzYwMzA0YTU4MzRiMzNcIixcclxuICAgICAgICAgICAgICBcImNhcmRfNF90aXRsZVwiOiBcIkxvcyBHYXRvc1wiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfNF90aXRsZVwiOiBcImZpZWxkXzYwMzA0YTczMzRiMzRcIixcclxuICAgICAgICAgICAgICBcImNhcmRfNV9pbWFnZVwiOiAxMzIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF81X2ltYWdlXCI6IFwiZmllbGRfNjAzMDRhMzAzNGIzMlwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF81X2ltYWdlX3NpemVcIjogXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF81X2ltYWdlX3NpemVcIjogXCJmaWVsZF82MDM1YTNlMDMyY2M1XCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzVfbGlua190b1wiOiBcIlxcXFwvY29tbXVuaXR5LWRldGFpbHNcXFxcL3NhcmF0b2dhXFxcXC9cIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzVfbGlua190b1wiOiBcImZpZWxkXzYwMzA0YTU4MzRiMzNcIixcclxuICAgICAgICAgICAgICBcImNhcmRfNV90aXRsZVwiOiBcIlNhcmF0b2dhXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF81X3RpdGxlXCI6IFwiZmllbGRfNjAzMDRhNzMzNGIzNFwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF82X2ltYWdlXCI6IDQ2OCxcclxuICAgICAgICAgICAgICBcIl9jYXJkXzZfaW1hZ2VcIjogXCJmaWVsZF82MDMwNGEzMDM0YjMyXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzZfaW1hZ2Vfc2l6ZVwiOiBcImZpbGxcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzZfaW1hZ2Vfc2l6ZVwiOiBcImZpZWxkXzYwMzVhM2UwMzJjYzVcIixcclxuICAgICAgICAgICAgICBcImNhcmRfNl9saW5rX3RvXCI6IFwiXFxcXC9jb21tdW5pdHktZGV0YWlsc1xcXFwvc2FudGEtY3J1elxcXFwvXCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF82X2xpbmtfdG9cIjogXCJmaWVsZF82MDMwNGE1ODM0YjMzXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzZfdGl0bGVcIjogXCJTYW50YSBDcnV6XCIsXHJcbiAgICAgICAgICAgICAgXCJfY2FyZF82X3RpdGxlXCI6IFwiZmllbGRfNjAzMDRhNzMzNGIzNFwiLFxyXG4gICAgICAgICAgICAgIFwiY2FyZF83X2ltYWdlXCI6IDQ2MCxcclxuICAgICAgICAgICAgICBcIl9jYXJkXzdfaW1hZ2VcIjogXCJmaWVsZF82MDMwNGEzMDM0YjMyXCIsXHJcbiAgICAgICAgICAgICAgXCJjYXJkXzdfaW1hZ2Vfc2l6ZVwiOiBcImZpbGxcIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzdfaW1hZ2Vfc2l6ZVwiOiBcImZpZWxkXzYwMzVhM2UwMzJjYzVcIixcclxuICAgICAgICAgICAgICBcImNhcmRfN19saW5rX3RvXCI6IFwiXFxcXC9jb21tdW5pdHktZGV0YWlsc1xcXFwvY2FybWVsXFxcXC9cIixcclxuICAgICAgICAgICAgICBcIl9jYXJkXzdfbGlua190b1wiOiBcImZpZWxkXzYwMzA0YTU4MzRiMzNcIixcclxuICAgICAgICAgICAgICBcImNhcmRfN190aXRsZVwiOiBcIkNhcm1lbFwiLFxyXG4gICAgICAgICAgICAgIFwiX2NhcmRfN190aXRsZVwiOiBcImZpZWxkXzYwMzA0YTczMzRiMzRcIixcclxuICAgICAgICAgICAgICBcImNhcmRcIjogOCxcclxuICAgICAgICAgICAgICBcIl9jYXJkXCI6IFwiZmllbGRfNjAzMDQ5YTIzNGIzMVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFsaWduXCI6IFwiXCIsXHJcbiAgICAgICAgICBcIm1vZGVcIjogXCJlZGl0XCJcclxuICAgICAgICB9IC8tLT5cclxuICAgIFxyXG4gICAgICAgIDwhLS0gd3A6c3BhY2VyIHtcImhlaWdodFwiOjF9IC0tPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MXB4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ3cC1ibG9jay1zcGFjZXJcIj48L2Rpdj5cclxuICAgICAgICA8IS0tIC93cDpzcGFjZXIgLS0+XHJcbiAgICBcclxuICAgICAgICA8IS0tIHdwOmJ1dHRvbnMge1wiY29udGVudEp1c3RpZmljYXRpb25cIjpcImNlbnRlclwifSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3AtYmxvY2stYnV0dG9ucyBpcy1jb250ZW50LWp1c3RpZmljYXRpb24tY2VudGVyXCI+PCEtLSB3cDpidXR0b24gLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndwLWJsb2NrLWJ1dHRvblwiPjxhIGNsYXNzPVwid3AtYmxvY2stYnV0dG9uX19saW5rXCIgaHJlZj1cIi9jb21tdW5pdGllc1wiPnZpZXcgYWxsPC9hPjwvZGl2PlxyXG4gICAgICAgIDwhLS0gL3dwOmJ1dHRvbiAtLT48L2Rpdj5cclxuICAgICAgICA8IS0tIC93cDpidXR0b25zIC0tPlxyXG4gICAgXHJcbiAgICAgICAgPCEtLSB3cDpzcGFjZXIge1wiaGVpZ2h0XCI6NTB9IC0tPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NTBweFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwid3AtYmxvY2stc3BhY2VyXCI+PC9kaXY+XHJcbiAgICAgICAgPCEtLSAvd3A6c3BhY2VyIC0tPjwvZGl2PlxyXG4gICAgICAgIDwhLS0gL3dwOmdyb3VwIC0tPmA7XHJcbiAgICAgICAgdGhpcy5ob21lVmFsdWF0aW9uID0gYDwhLS0gd3A6YWNmL2Jsb2NrLWNhbGxvdXQtYmxvY2sge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1jYWxsb3V0LWJsb2NrXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwiaGVhZGVyXCI6IFwiRGlzY292ZXIgWW91ciBIb21lJ3MgVmFsdWVcIixcclxuICAgICAgICAgICAgICBcIl9oZWFkZXJcIjogXCJmaWVsZF81ZTBmNGE3ZTg2NjEzXCIsXHJcbiAgICAgICAgICAgICAgXCJzdWJcIjogXCJcIixcclxuICAgICAgICAgICAgICBcIl9zdWJcIjogXCJmaWVsZF81ZTBmNGJkYmFkOTJhXCIsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0X2FsaWduXCI6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgXCJfdGV4dF9hbGlnblwiOiBcImZpZWxkXzVlOGY3NGIzMzAzZjBcIixcclxuICAgICAgICAgICAgICBcIm92ZXJsYXlfc3R5bGVcIjogXCJmdWxsXCIsXHJcbiAgICAgICAgICAgICAgXCJfb3ZlcmxheV9zdHlsZVwiOiBcImZpZWxkXzVmZWEzZjYyZTQwNTlcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3NpemVcIjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgXCJfYmxvY2tfc2l6ZVwiOiBcImZpZWxkXzVlMGY0Y2M1YWQ5MzFcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3R5cGVcIjogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2Jsb2NrX3R5cGVcIjogXCJmaWVsZF81ZTBmNGJlNGFkOTJiXCIsXHJcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiA2NzksXHJcbiAgICAgICAgICAgICAgXCJfaW1hZ2VcIjogXCJmaWVsZF81ZTBmNGMyNWFkOTJjXCIsXHJcbiAgICAgICAgICAgICAgXCJoYXNfbW9kYWxcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfaGFzX21vZGFsXCI6IFwiZmllbGRfNWUwZjRjYWRhZDkyZlwiLFxyXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdldCBIb21lIFZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiXFxcXC9ob21lLXZhbHVhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcInRhcmdldFwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcIl9idXR0b25cIjogXCJmaWVsZF81ZTBmNGNiY2FkOTMwXCIsXHJcbiAgICAgICAgICAgICAgXCJidXR0b25fc3R5bGVcIjogXCJzdHJva2Utd2hpdGVcIixcclxuICAgICAgICAgICAgICBcIl9idXR0b25fc3R5bGVcIjogXCJmaWVsZF81ZTE4N2Q3MDc3NDNmXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWxpZ25cIjogXCJcIixcclxuICAgICAgICAgIFwibW9kZVwiOiBcImVkaXRcIlxyXG4gICAgICAgIH0gLy0tPmA7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlTGlzdGluZ3MgPWA8IS0tIHdwOmFjZi9ibG9jay1mZWF0dXJlZC1saXN0aW5ncy1jYXJkcyB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJhY2ZcXFxcL2Jsb2NrLWZlYXR1cmVkLWxpc3RpbmdzLWNhcmRzXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwic2VjdGlvbl90aXRsZVwiOiBcIkZlYXR1cmVkIExpc3RpbmdzXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl90aXRsZVwiOiBcImZpZWxkXzVkZWMxMDAwMWY1MjhcIixcclxuICAgICAgICAgICAgICBcInRpdGxlX2hlYWRpbmdfc2l6ZVwiOiBcImxhcmdlXCIsXHJcbiAgICAgICAgICAgICAgXCJfdGl0bGVfaGVhZGluZ19zaXplXCI6IFwiZmllbGRfNjEwYTQ3NzRkMTdiNVwiLFxyXG4gICAgICAgICAgICAgIFwic2hvd19jb2xvcmVkX2xpbmVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2hvd19jb2xvcmVkX2xpbmVcIjogXCJmaWVsZF81ZTYwMDZmMzZkZGRmXCIsXHJcbiAgICAgICAgICAgICAgXCJzZWN0aW9uX3N1YnRpdGxlXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJfc2VjdGlvbl9zdWJ0aXRsZVwiOiBcImZpZWxkXzVkZWMxMDA4MWY1MjlcIixcclxuICAgICAgICAgICAgICBcImJ1dHRvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgIFwiX2J1dHRvblwiOiBcImZpZWxkXzYwOTBhMGRhMjRhOGJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhbGlnblwiOiBcIlwiLFxyXG4gICAgICAgICAgXCJtb2RlXCI6IFwiZWRpdFwiXHJcbiAgICAgICAgfSAvLS0+YDtcclxuICAgICAgICB0aGlzLmxldHNUYWxrID0gYDwhLS0gd3A6YWNmL2Jsb2NrLWNhbGxvdXQtYmxvY2sge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYWNmXFxcXC9ibG9jay1jYWxsb3V0LWJsb2NrXCIsXHJcbiAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgIFwiaGVhZGVyXCI6IFwiTGV0J3MgVGFsa1wiLFxyXG4gICAgICAgICAgICAgIFwiX2hlYWRlclwiOiBcImZpZWxkXzVlMGY0YTdlODY2MTNcIixcclxuICAgICAgICAgICAgICBcInN1YlwiOiBcIllvdSd2ZSBnb3QgcXVlc3Rpb25zIGFuZCB3ZSBjYW4ndCB3YWl0IHRvIGFuc3dlciB0aGVtLlwiLFxyXG4gICAgICAgICAgICAgIFwiX3N1YlwiOiBcImZpZWxkXzVlMGY0YmRiYWQ5MmFcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3NpemVcIjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgXCJfYmxvY2tfc2l6ZVwiOiBcImZpZWxkXzVlMGY0Y2M1YWQ5MzFcIixcclxuICAgICAgICAgICAgICBcImJsb2NrX3R5cGVcIjogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2Jsb2NrX3R5cGVcIjogXCJmaWVsZF81ZTBmNGJlNGFkOTJiXCIsXHJcbiAgICAgICAgICAgICAgXCJpbWFnZVwiOiAxOCxcclxuICAgICAgICAgICAgICBcIl9pbWFnZVwiOiBcImZpZWxkXzVlMGY0YzI1YWQ5MmNcIixcclxuICAgICAgICAgICAgICBcImhhc19tb2RhbFwiOiBcIjFcIixcclxuICAgICAgICAgICAgICBcIl9oYXNfbW9kYWxcIjogXCJmaWVsZF81ZTBmNGNhZGFkOTJmXCIsXHJcbiAgICAgICAgICAgICAgXCJzZWxlY3RfbW9kYWxfZm9ybVwiOiBcIjJcIixcclxuICAgICAgICAgICAgICBcIl9zZWxlY3RfbW9kYWxfZm9ybVwiOiBcImZpZWxkXzVlMThiZTgwOWExYzdcIixcclxuICAgICAgICAgICAgICBcImJ1dHRvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgIFwiX2J1dHRvblwiOiBcImZpZWxkXzVlMGY0Y2JjYWQ5MzBcIixcclxuICAgICAgICAgICAgICBcImJ1dHRvbl9zdHlsZVwiOiBcInN0cm9rZS13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIFwiX2J1dHRvbl9zdHlsZVwiOiBcImZpZWxkXzVlMTg3ZDcwNzc0M2ZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX3NlbGVjdGVkX2Zvcm1cIjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfc2VsZWN0ZWRfZm9ybVwiOiBcImZpZWxkXzYxNDEyNGQ0OGYyZWZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2Zvcm1fdGl0bGVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfZm9ybV90aXRsZVwiOiBcImZpZWxkXzYxNDhlNTI0OTgyZjZcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2Zvcm1fc3VidGl0bGVcIjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfZm9ybV9zdWJ0aXRsZVwiOiBcImZpZWxkXzYxNDhlNWM2OTgyZjhcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2xlYWRfcm91dGluZ19kZXN0aW5hdGlvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgIFwiX2Zvcm1fZmllbGRzX2xlYWRfcm91dGluZ19kZXN0aW5hdGlvblwiOiBcImZpZWxkXzYxNDhlNjFjOTgyZmFcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzX2NvbmZpcm1hdGlvbl9iZWhhdmlvdXJcIjogXCJEZWZhdWx0IENvbmZpcm1hdGlvbiBNZXNzYWdlXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNfY29uZmlybWF0aW9uX2JlaGF2aW91clwiOiBcImZpZWxkXzYxNDhlNjdiOTgyZmJcIixcclxuICAgICAgICAgICAgICBcImZvcm1fZmllbGRzXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgXCJfZm9ybV9maWVsZHNcIjogXCJmaWVsZF82MTQ5MTA0MzhmNDEzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWxpZ25cIjogXCJcIixcclxuICAgICAgICAgIFwibW9kZVwiOiBcImVkaXRcIlxyXG4gICAgICAgIH1cclxuICAgICAgLy0tPl1dPmA7XHJcbiAgICAgICAgdGhpcy5tcEVuZCA9IGA8L2NvbnRlbnQ6ZW5jb2RlZD5cclxuXHJcbiAgICAgICAgPHdwOnBvc3RfdHlwZT48IVtDREFUQVttZW1iZXItcHJvZmlsZV1dPjwvd3A6cG9zdF90eXBlPlxyXG4gICAgICAgIDwvaXRlbT5gO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVBZ2VudHMoYXJyMSwgYXJyMikge1xyXG4gICAgYXJyMS5mb3JFYWNoKCAoYXJySXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBhZ2VudCA9IG5ldyBBZ2VudChhcnJJdGVtWydQcmVmZXJyZWQgTmFtZSddLCBhcnJJdGVtWydNTFMgQXJlYSddLCBhcnJJdGVtWydNTFMgSUQnXSk7XHJcbiAgICAgIGFycjIucHVzaChhZ2VudCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnIyO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjcmVhdGVBZ2VudERhdGEob2JqKSB7XHJcbiAgICBsZXQgYWdlbnREYXRhID0gJyc7XHJcbiAgICBmb3IgKGxldCBwcm9wIGluIG9iaikge1xyXG4gICAgICBhZ2VudERhdGEgKz0gb2JqW3Byb3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFnZW50RGF0YTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlQWdlbnRzQXJyYXlEYXRhKGFycikge1xyXG4gICAgbGV0IGRhdGEgPSAnJztcclxuICAgIGZvciAobGV0IGFyckl0ZW0gb2YgYXJyKSB7XHJcbiAgICAgIGRhdGEgKz0gY3JlYXRlQWdlbnREYXRhKGFyckl0ZW0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBjcmVhdGVBZ2VudHMsXHJcbiAgICBjcmVhdGVBZ2VudERhdGEsXHJcbiAgICBjcmVhdGVBZ2VudHNBcnJheURhdGEsXHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7bWVtYmVyUHJvZmlsZXN9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgRmlsZVNhdmVyLCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQge21lbWJlclByb2ZpbGVzfSBmcm9tICcuL21lbWJlclByb2ZpbGVzL21lbWJlclByb2ZpbGVzLmpzJztcclxuaW1wb3J0IHhtbFN0YXJ0IGZyb20gJy4veG1sU3RhcnQueG1sJztcclxuaW1wb3J0IHhtbEVuZCBmcm9tICcuL3htbEVuZC54bWwnO1xyXG5cclxuKCBmdW5jdGlvbiBsb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuICBjb25zdCBBZ2VudHNBcnIgPSBbXTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQWdlbnRzQXJyJywgSlNPTi5zdHJpbmdpZnkoQWdlbnRzQXJyKSk7XHJcbn0pKCk7XHJcblxyXG4oZnVuY3Rpb24gdXBsb2FkRm9ybSgpIHtcclxuXHJcbiAgY29uc3QgdXBsb2FkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICB1cGxvYWRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgdXBsb2FkRm9ybS5zdHlsZS5oZWlnaHQgPSAnNXJlbSc7XHJcbiAgdXBsb2FkRm9ybS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh1cGxvYWRGb3JtKTtcclxuICBcclxuICBjb25zdCB1cGxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHVwbG9hZEJ0bi5pZCA9ICd1cGxvYWQnO1xyXG4gIHVwbG9hZEJ0bi50eXBlID0gJ2ZpbGUnO1xyXG4gIHVwbG9hZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHVwbG9hZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVVcGxvYWRGaWxlKTtcclxuICB1cGxvYWRGb3JtLmFwcGVuZENoaWxkKHVwbG9hZEJ0bik7XHJcbiAgY29uc3QgdXBsb2FkQnRuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHVwbG9hZEJ0bkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VwbG9hZCcpO1xyXG4gIHVwbG9hZEJ0bkxhYmVsLnRleHRDb250ZW50ID0gJ0Jyb3dzZSc7XHJcbiAgdXBsb2FkQnRuTGFiZWwuc3R5bGUuYWxpZ25TZWxmID0gJ2ZsZXgtc3RhcnQnO1xyXG4gIHVwbG9hZEJ0bkxhYmVsLnN0eWxlLnBhZGRpbmcgPSAnMS41cmVtIDNyZW0nO1xyXG4gIHVwbG9hZEJ0bkxhYmVsLnN0eWxlLmJhY2tncm91bmQgPSAnIzNmNDI0MSc7XHJcbiAgdXBsb2FkQnRuTGFiZWwuc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9ICcuN3JlbSc7XHJcbiAgdXBsb2FkQnRuTGFiZWwuc3R5bGUuY29sb3IgPSAnI0ZGRkZGRic7XHJcbiAgdXBsb2FkRm9ybS5hcHBlbmRDaGlsZCh1cGxvYWRCdG5MYWJlbCk7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodXBsb2FkRm9ybSk7XHJcblxyXG4gIGNvbnN0IGRyb3BBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZHJvcEFyZWEuaWQgPSAnZHJvcC1hcmVhJztcclxuICBkcm9wQXJlYS5zdHlsZS53aWR0aCA9ICczMHJlbSc7XHJcbiAgZHJvcEFyZWEuc3R5bGUuaGVpZ2h0ID0gJzMwcmVtJztcclxuICBkcm9wQXJlYS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYmEoNjMsIDY2LCA2NSwgLjUpJztcclxuICBkcm9wQXJlYS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMXJlbSc7XHJcbiAgY29uc3QgZHJvcE5vdGljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkcm9wTm90aWNlLnRleHRDb250ZW50ID0gJ0Ryb3AgWW91ciBGaWxlIEhlcmUnO1xyXG4gIGRyb3BOb3RpY2Uuc3R5bGUuZm9udFNpemUgPSAnMnJlbSc7XHJcbiAgZHJvcE5vdGljZS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICBkcm9wTm90aWNlLnN0eWxlLnBhZGRpbmcgPSAnMnJlbSc7XHJcbiAgZHJvcE5vdGljZS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xyXG4gIGRyb3BBcmVhLmFwcGVuZENoaWxkKGRyb3BOb3RpY2UpO1xyXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGRyb3BBcmVhKTtcclxuICBcclxuICAvLyBSZWFkaW5nIHVwbG9hZGVkIGZpbGVcclxuICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZUZpbGVSZWFkKTtcclxuXHJcbiAgZHJvcEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIFN0eWxlIHRoZSBkcmFnLWFuZC1kcm9wIGFzIGEgXCJjb3B5IGZpbGVcIiBvcGVyYXRpb24uXHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcclxuICB9KTtcclxuICBcclxuICBkcm9wQXJlYS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmaWxlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xyXG4gICAgY29uc3QgZmlsZVR5cGUgPSBmaWxlLnR5cGU7XHJcbiAgICAvLyBmaWxlVHlwZSA9PT0gJ3RleHQnID8gZHJvcE5vdGljZS50ZXh0Q29udGVudCA9IGZpbGUubmFtZSA6IGRyb3BOb3RpY2UudGV4dENvbnRlbnQgPSAnVW5zdXBwb3J0ZWQgZmlsZSwgcGxlYXNlIGFkZCBjc3YgZmlsZSBvbmx5LidcclxuICAgIGRyb3BOb3RpY2UudGV4dENvbnRlbnQgPSBmaWxlLm5hbWVcclxuICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBoYW5kbGVVcGxvYWRGaWxlKGUpIHtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGVSZWFkKGUpIHtcclxuICAgIGNvbnN0IHNhdmUgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAvLyBDb252ZXJ0IHVwbG9hZGVkIGZpbGUgdG8gcmVhZGFibGUgb2JqZWN0c1xyXG4gICAgY29uc3QgdXBsb2FkZWREYXRhID0gc3RyVG9BcnIoc2F2ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXBsb2FkZWREYXRhJywgSlNPTi5zdHJpbmdpZnkodXBsb2FkZWREYXRhKSk7XHJcbiAgICAvLyBDbGVhciBsb2NhbCBzdG9yYWdlIGFmdGVyIDEyMHMgZm9yIHNlY3VyaXR5IHB1cnBvc2VzXHJcbiAgICBzZXRUaW1lb3V0KCggKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VwbG9hZGVkRGF0YScpKSwgMTIwMDAwKVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gY29udmVydCBjc3YgZmlsZSB0byByZWFkYWJsZSBvYmplY3RzXHJcbiAgZnVuY3Rpb24gc3RyVG9BcnIoc3RyLCBkZWxpbWl0ZXIgPSAnLCcpIHtcclxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cIi9nLCAnJyk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gc3RyLnNsaWNlKDAsIHN0ci5pbmRleE9mKFwiXFxuXCIpKS5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgY29uc3Qgcm93cyA9IHN0ci5zbGljZShzdHIuaW5kZXhPZihcIlxcblwiKSArIDEpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgY29uc3QgYXJyID0gcm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSByb3cuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgY29uc3QgZWwgPSBoZWFkZXJzLnJlZHVjZShmdW5jdGlvbiAob2JqZWN0LCBoZWFkZXIsIGluZGV4KSB7XHJcbiAgICAgICAgb2JqZWN0W2hlYWRlcl0gPSB2YWx1ZXNbaW5kZXhdO1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxyXG4oZnVuY3Rpb24gZG93bmxvYWRCdG4oKSB7XHJcbiAgXHJcbiAgY29uc3QgZG93bmxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkb3dubG9hZEJ0bi50ZXh0Q29udGVudCA9ICdEb3dubG9hZCc7XHJcbiAgZG93bmxvYWRCdG4uc3R5bGUucGFkZGluZyA9IGAxLjVyZW0gM3JlbWA7XHJcbiAgZG93bmxvYWRCdG4uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIGRvd25sb2FkQnRuLnN0eWxlLmZvbnRTaXplID0gJzJyZW0nO1xyXG4gIGRvd25sb2FkQnRuLnN0eWxlLmJhY2tncm91bmQgPSAnIzNmNDI0MSc7XHJcbiAgZG93bmxvYWRCdG4uc3R5bGUuY29sb3IgPSAnI0ZGRkZGRic7XHJcbiAgZG93bmxvYWRCdG4uc3R5bGVbJ2JvcmRlci1yYWRpdXMnXSA9ICcuN3JlbSc7XHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZG93bmxvYWRCdG4pO1xyXG4gIFxyXG4gIGRvd25sb2FkQnRuLm9uY2xpY2sgPSAoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1cGxvYWRlZERhdGEnKSkge1xyXG4gICAgICAvLyBHZW5lcmF0ZSBEYXRhXHJcbiAgICAgIGNvbnN0IHVwbG9hZGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VwbG9hZGVkRGF0YScpKTtcclxuICAgICAgY29uc3QgQWdlbnRzQXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQWdlbnRzQXJyJykpO1xyXG4gICAgICBtZW1iZXJQcm9maWxlcy5jcmVhdGVBZ2VudHModXBsb2FkZWREYXRhLCBBZ2VudHNBcnIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gbWVtYmVyUHJvZmlsZXMuY3JlYXRlQWdlbnRzQXJyYXlEYXRhKEFnZW50c0Fycik7XHJcblxyXG4gICAgICAvLyBEb3dubG9hZCBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGNvbnN0IGJsb2JEYXRhID0gY3JlYXRlQmxvYkRhdGEoW10sIHhtbFN0YXJ0ICxkYXRhLCB4bWxFbmQpO1xyXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoYmxvYkRhdGEsIHt0eXBlOiBcInRleHQvcGxhaW47Y2hhcnNldD11dGYtOFwifSk7XHJcbiAgICAgIEZpbGVTYXZlci5zYXZlQXMoYmxvYiwgXCJtZW1iZXJQcm9maWxlcy54bWxcIik7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1cGxvYWRlZERhdGEnKTtcclxuICAgICB9IGVsc2UgcmV0dXJuO1xyXG4gIH0pO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQmxvYkRhdGEoYXJyLCAuLi5hcmdzKSB7XHJcbiAgICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XHJcbiAgICAgICAgYXJyLnB1c2goYXJnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuKCBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnRuLnRleHRDb250ZW50ID0gJ0NMRUFSJztcclxuICBidG4uc3R5bGUucGFkZGluZyA9ICcxcmVtIDNyZW0nO1xyXG4gIGJ0bi5vbmNsaWNrID0gY2xlYXJTdG9yYWdlO1xyXG5cclxuXHJcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9