!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/image-resolution"]=e():t["utils/image-resolution"]=e()}(globalThis,(()=>(()=>{var t,e,o={333:(t,e,o)=>{var n=o(355)((function(t){return t[1]}));n.push([t.id,".favInfo-box .collection-cover img,\n.favInfo-box .favInfo-cover img {\n  width: 100% !important;\n  object-position: left !important;\n}\n\n.bb-comment .sailing .sailing-img,\n.comment-bilibili-fold .sailing .sailing-img {\n  width: 288px;\n}",""]),t.exports=n},355:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,o,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},177:(t,e,o)=>{var n=o(333);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},391:t=>{"use strict";t.exports=coreApis.observer}},n={};function r(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={id:t,exports:{}};return o[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&n&&o;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>o[t]));return a.default=()=>o,r.d(i,a),i},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>l});const t=coreApis.componentApis.define,e=coreApis.componentApis.styledComponent,o=/@(\d+)[Ww]_(\d+)[Hh]/,n=["#certify-img1","#certify-img2"],a=(t,e)=>{const o=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT);let n=o.nextNode();for(;n;)e(n),n=o.nextNode()},s=async(t,e)=>{const{attributes:i}=await Promise.resolve().then(r.t.bind(r,391,23)),a=(r,i)=>{const a=r(e);if(null===a)return;if(n.some((t=>e.matches(t))))return;if(a.includes(","))return;const s=a.match(o);if(!s)return;const[,c,u]=s,l=parseInt(e.getAttribute("data-resolution-width")||"0");if(parseInt(c)>=l&&0!==l)return;null===e.getAttribute("width")&&null===e.getAttribute("height")&&(e.classList.contains("bili-avatar-img")?e.setAttribute("height",u):e.setAttribute("width",c));const d=Math.round(t*parseInt(c)).toString(),f=Math.round(t*parseInt(u)).toString();e.setAttribute("data-resolution-width",d),i(e,a.replace(o,`@${d}w_${f}h`))};i(e,(()=>{a((t=>t.getAttribute("src")),((t,e)=>t.setAttribute("src",e))),a((t=>t.getAttribute("srcset")),((t,e)=>t.setAttribute("srcset",e))),a((t=>t.style.backgroundImage),((t,e)=>t.style.backgroundImage=e))}))},c=(0,e.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,177,23))),(async t=>{let{settings:e}=t;const{allMutations:o}=await Promise.resolve().then(r.t.bind(r,391,23)),n="auto"===e.options.scale?window.devicePixelRatio:parseFloat(e.options.scale);a(document.body,(t=>s(n,t))),o((t=>{t.forEach((t=>t.addedNodes.forEach((t=>{t instanceof HTMLElement&&(s(n,t),"IMG"!==t.nodeName.toUpperCase()&&a(t,(t=>s(n,t))))}))))}))})),u=(0,t.defineOptionsMetadata)({scale:{displayName:"缩放级别",defaultValue:"auto",hidden:!0}}),l=(0,t.defineComponentMetadata)({name:"imageResolution",displayName:"高分辨率图片",tags:[componentsTags.utils],enabledByDefault:window.devicePixelRatio>1,entry:c,description:{"zh-CN":"根据屏幕 DPI 请求更高分辨率的图片, 例如 DPI 缩放 200% 则请求 2 倍的分辨率, 加载时间也会相应变长一些. (也会导致某些浏览器里出现图片闪动, 因为本质上是更换了图片源)"},options:u,commitHash:"f64801060d2d83daeba6eebb3462941893da548d",coreVersion:"2.7.1"})})(),i=i.component})()));