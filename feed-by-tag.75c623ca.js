parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AI6c":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$isEmptyArticles=exports.$totalPages=exports.$articles=exports.$loading=exports.$feedByTag=exports.$feed=exports.$status=exports.fetchFeedFx=exports.currentPageWasSet=exports.setUnfavoriteArticleFx=exports.setFavoriteArticleFx=exports.$pageSize=exports.$currentTag=exports.$currentPage=exports.favoriteToggled=exports.PageGate=void 0;var e,t=require("effector"),r=require("patronum/status"),o=i(require("api")),a=i(require("features/feed")),n=require("library/limit");function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=o?Object.getOwnPropertyDescriptor(e,a):null;n&&(n.get||n.set)?Object.defineProperty(r,a,n):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var p=(e=a.createFeedModel()).PageGate,c=e.favoriteToggled,u=e.$currentPage,f=e.$currentTag,l=e.$pageSize,x=e.setFavoriteArticleFx,g=e.setUnfavoriteArticleFx;exports.setUnfavoriteArticleFx=g,exports.setFavoriteArticleFx=x,exports.$pageSize=l,exports.$currentTag=f,exports.$currentPage=u,exports.favoriteToggled=c,exports.PageGate=p;var v=(0,t.createEvent)();exports.currentPageWasSet=v;var d=(0,t.createEffect)(function(e){var t=e.tag,r=e.page;return o.get("/articles?tag="+encodeURIComponent(t)+"&"+(0,n.limit)(10,r))});exports.fetchFeedFx=d;var $=(0,r.status)({effect:d});exports.$status=$;var P=(0,t.createStore)({});exports.$feed=P;var y=(0,t.combine)(P,f,function(e,t){var r;return null!==(r=e[t])&&void 0!==r?r:{articles:[],articlesCount:0}});exports.$feedByTag=y;var F=(0,t.combine)(f,P,d.pending,function(e,t,r){return!t[e]||r});exports.$loading=F;var b=y.map(function(e){return e.articles});exports.$articles=b;var m=y.map(function(e){return e.articlesCount});exports.$totalPages=m;var O=(0,t.combine)($,b,function(e,t){return"done"===e&&0===t.length});exports.$isEmptyArticles=O;
},{"effector":"hr1S","patronum/status":"lYeu","api":"in7L","features/feed":"emfq","library/limit":"nHV0"}],"lqzr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=r(require("./model"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}exports.model=e;
},{"./model":"AI6c"}],"WGom":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;var e=a(require("react")),r=require("effector-react"),t=require("ui"),o=require("../model");function a(e){return e&&e.__esModule?e:{default:e}}var u=function(){var a=(0,r.useStore)(o.model.$totalPages),u=(0,r.useStore)(o.model.$currentPage),i=(0,r.useStore)(o.model.$pageSize);return e.default.createElement(t.Pagination,{current:u,pageSize:i,total:a,onItemClick:o.model.currentPageWasSet})};exports.Pagination=u;
},{"react":"AQ6k","effector-react":"wuaz","ui":"npgd","../model":"lqzr"}],"oHzj":[function(require,module,exports) {
"use strict";var e=require("effector"),t=n(require("library/router")),r=require("./model");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};(0,e.forward)({from:[r.PageGate.open,r.currentPageWasSet,(0,e.guard)(r.$currentTag,{filter:Boolean})],to:(0,e.attach)({source:{tag:r.$currentTag,page:r.$currentPage,pageSize:r.$pageSize},effect:r.fetchFeedFx})}),r.$feed.on(r.fetchFeedFx.done,function(e,t){var r,a=t.params,n=t.result;return o(o({},e),((r={})[a.tag]=n,r))}),r.$feedByTag.on([r.setFavoriteArticleFx.done,r.setUnfavoriteArticleFx.done],function(e,t){var r=t.params,a=t.result;return o(o({},e),{articles:e.articles.map(function(e){return e.slug!==r?e:o(o({},e),{favorited:a.article.favorited,favoritesCount:a.article.favoritesCount})})})}),(0,e.sample)({source:{path:t.model.$pathname,tag:r.$currentTag},clock:r.currentPageWasSet,fn:function(e,t){return{path:e.path,page:t,tag:e.tag}}}).watch(function(e){var r=e.path,a=e.page,n=e.tag;t.model.history.replace(r+"?tag="+n+"&page="+a)});
},{"effector":"hr1S","library/router":"CgWG","./model":"AI6c"}],"z8T2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FeedByTagPage=void 0;var e=i(require("react")),t=require("effector-react"),r=require("features/feed"),l=require("ui"),a=require("../model"),u=require("./pagination");function i(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var n=function(){(0,t.useGate)(a.model.PageGate);var i=(0,t.useStore)(a.model.$loading),n=(0,t.useStore)(a.model.$isEmptyArticles);return e.default.createElement(e.default.Fragment,null,e.default.createElement(r.EmptyArticles,{show:n}),e.default.createElement(r.ArticlesWrapper,null,(0,t.useList)(a.model.$articles,function(t){return e.default.createElement("li",null,e.default.createElement(r.ArticlePreview,{data:t,onClick:function(){a.model.favoriteToggled(t)}}))})),e.default.createElement(u.Pagination,null),e.default.createElement(l.Spinner,{loading:i}))};exports.FeedByTagPage=n;
},{"react":"AQ6k","effector-react":"wuaz","features/feed":"emfq","ui":"npgd","../model":"lqzr","./pagination":"WGom","../model/init":"oHzj"}],"aPCH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FeedByTagPage",{enumerable:!0,get:function(){return e.FeedByTagPage}});var e=require("./ui/feed-by-tag");
},{"./ui/feed-by-tag":"z8T2"}]},{},[], null)