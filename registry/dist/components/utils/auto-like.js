!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/auto-like"]=e():t["utils/auto-like"]=e()}(globalThis,(()=>(()=>{var t,e,n={749:(t,e,n)=>{var i=n(218)((function(t){return t[1]}));i.push([t.id,".like-black-list {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  width: 400px;\n  font-size: 14px;\n  padding: 12px 12px 12px 18px;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: 0.2s ease-out;\n  z-index: 100002;\n}\nbody.dark .like-black-list {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .like-black-list {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .like-black-list {\n  background-color: #222;\n}\n.like-black-list.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.like-black-list .black-list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.like-black-list .black-list-header .title {\n  margin-left: 6px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.like-black-list .black-list-header .grow {\n  flex: 1;\n}\n.like-black-list .black-list-header .close {\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n}\n.like-black-list .black-list-header .close:hover {\n  color: var(--theme-color);\n}\n.like-black-list .black-list-content .black-list-section {\n  margin-top: 12px;\n}\n.like-black-list .black-list-content .black-list-section > :not(:last-child) {\n  margin-bottom: 6px;\n}\n.like-black-list .black-list-content .black-list-section-title {\n  font-size: 14px;\n}\n.like-black-list .black-list-content .black-list-section-input {\n  display: flex;\n}\n.like-black-list .black-list-content .black-list-section-input div {\n  margin: 0 10px;\n}\n.like-black-list .black-list-content .black-list-section-description {\n  font-size: 12px;\n  opacity: 0.6;\n  line-height: 1.5;\n}\n.like-black-list .black-list-content .black-list-section-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.like-black-list .black-list-content .black-list-section-content .be-slider {\n  margin: 0 4px;\n  flex: 1;\n}\n.like-black-list .black-list-content .black-list-section-content .padding-value {\n  margin-left: 12px;\n  width: 50px;\n  text-align: end;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  transition: none;\n  white-space: nowrap;\n  padding: 6px;\n  padding-left: 8px;\n  margin: 0 4px 4px 0;\n  cursor: move;\n}\nbody.dark .like-black-list .black-list-content .black-list-section-content .black-list-sort-item {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .like-black-list .black-list-content .black-list-section-content .black-list-sort-item {\n  background-color: #282828;\n  color: #eee;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item:hover {\n  border-color: var(--theme-color);\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item.black-list-hidden {\n  opacity: 0.5;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item.sortable-ghost {\n  opacity: 0;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item.sortable-chosen {\n  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.16);\n  transform: scale(1.05);\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item.sortable-drag {\n  opacity: 1;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item.sortable-drag.black-list-hidden {\n  opacity: 0.5;\n}\n.like-black-list .black-list-content .black-list-section-content .black-list-sort-item .toggle-visible {\n  margin-left: 6px;\n  cursor: pointer;\n}",""]),t.exports=i},588:(t,e,n)=>{var i=n(218)((function(t){return t[1]}));i.push([t.id,".manual-like {\n  left: 5px;\n  z-index: 1001;\n  height: 30px;\n  position: fixed;\n}\n.manual-like * {\n  color: rgb(251, 114, 153);\n}\n.manual-like #text {\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 0px;\n  transition: max-width 0.4s linear !important;\n}\n.manual-like #text.like {\n  max-width: 150px;\n}",""]),t.exports=i},682:(t,e,n)=>{var i=n(218)((function(t){return t[1]}));i.push([t.id,".custom-black-list-extra-options {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}",""]),t.exports=i},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,i){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var s={};if(i)for(var o=0;o<this.length;o++){
// eslint-disable-next-line prefer-destructuring
var l=this[o][0];null!=l&&(s[l]=!0)}for(var a=0;a<t.length;a++){var r=[].concat(t[a]);i&&s[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),e.push(r))}},e}},454:(t,e,n)=>{"use strict";n.d(e,{J9:()=>d,Ts:()=>c,h4:()=>u,qt:()=>l,sz:()=>r});var i=n(200),s=n(605),o=n(153);const l="like-black-List.data";let a=null;const r=t=>{if(!a)return;a.triggerElement=t;const e=(0,o.getData)(l);a.list=e[0].users,a.titleName="黑名单"},c=async()=>{const t=await Promise.resolve().then(n.bind(n,773)).then((t=>t.default)),e=(0,o.getData)(l),a=(0,s.mountVueComponent)(t);a.list=e[0].users;(await(0,i.select)("#app")).insertAdjacentElement("afterbegin",a.$el)},d=async()=>{if(a)return!1;const t=await Promise.resolve().then(n.bind(n,7)).then((t=>t.default));return a=(0,s.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",a.$el),!0},u=async()=>{a||await d(),a?.toggle()}},7:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("VPopup",{ref:"popup",staticClass:"like-black-list",attrs:{fixed:"",lazy:!1,"trigger-element":t.triggerElement},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[e("div",{staticClass:"black-list-header"},[e("VIcon",{staticClass:"title-icon",attrs:{icon:"mdi-sort",size:24}}),t._v(" "),e("div",{staticClass:"title"},[t._v("添加黑名单")]),t._v(" "),e("div",{staticClass:"close",on:{click:function(e){t.isOpen=!1}}},[e("VIcon",{attrs:{icon:"close",size:18}})],1)],1),t._v(" "),e("div",{staticClass:"black-list-content"},[e("div",{staticClass:"black-list-section"},[e("div",{staticClass:"black-list-section-title"},[t._v("添加到黑名单")]),t._v(" "),e("div",{staticClass:"black-list-section-input"},[e("TextBox",{attrs:{text:t.name},on:{change:t.changeName}}),t._v(" "),e("VButton",{on:{click:t.add}},[t._v("添加")])],1)]),t._v(" "),e("div",{staticClass:"black-list-section"},[e("div",{staticClass:"black-list-section-title"},[t._v("黑名单列表")]),t._v(" "),e("div",{staticClass:"black-list-section-description"},[t._v("点击×图标可以删除名单.")]),t._v(" "),t.isLoaded?t._e():e("VLoading"),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],ref:"black-listSortList",staticClass:"black-list-section-content black-list-sort-list"},t._l(t.list,(function(n){return e("div",{key:n,staticClass:"black-list-sort-item",attrs:{"data-name":n}},[e("div",{staticClass:"item-name"},[t._v("\n            "+t._s(n)+"\n          ")]),t._v(" "),e("div",{staticClass:"toggle-visible"},[e("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(e){return t.toggleVisible(n)}}})],1)])})),0)],1)])])};i._withStripped=!0;var s=n(648);const o=Vue.extend({components:{VPopup:s.VPopup,TextBox:s.TextBox,VIcon:s.VIcon,VButton:s.VButton},props:{triggerElement:{type:HTMLElement,default:null},list:{type:Array,default:null},titleName:{type:String,default:""}},data:()=>({isOpen:!1,isLoaded:!1,name:""}),async mounted(){this.isLoaded=!0},methods:{toggle(){this.$refs.popup.toggle()},changeName(t){this.name=t},add(){this.name.length&&!this.list.includes(this.name)&&
// eslint-disable-next-line vue/no-mutating-props
this.list.push(this.name),this.name=""},toggleVisible(t){
// eslint-disable-next-line vue/no-mutating-props
this.list.splice(this.list.indexOf(t),1)}}});var l=n(332),a=n.n(l),r=n(749),c=n.n(r),d={insert:"head",singleton:!1};a()(c(),d);c().locals;const u=(0,n(499).Z)(o,i,[],!1,null,null,null).exports},773:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("VButton",{staticClass:"manual-like",attrs:{round:""},on:{click:t.like}},[e("div",{class:{like:t.isLike},attrs:{id:"text"}},[t._v("正在点赞: "+t._s(t.curLikeCnt)+" / "+t._s(t.totalLikeCnt))]),t._v(" "),e("VIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isLike,expression:"!isLike"}],attrs:{colored:"",icon:"like",size:20}})],1)};i._withStripped=!0;var s=n(648);const o=Vue.extend({components:{VButton:s.VButton,VIcon:s.VIcon},props:{list:{type:Array,default:null}},data:()=>({isClick:!1,isLike:!1,totalLikeCnt:0,curLikeCnt:0,feedsLikeQueue:[]}),methods:{like(){if(this.isClick)return;this.isClick=!0;const t=Array.from(document.getElementsByClassName("bili-dyn-title__text")).reduce(((t,e)=>{if(this.list.includes(e.textContent.trim()))return t;const n=e.closest(".bili-dyn-item__main").querySelector(".bili-dyn-action.like");return n&&!n.classList.contains("active")&&t.push(n),t}),[]);this.feedsLikeQueue.push(...t),this.totalLikeCnt=this.feedsLikeQueue.length,this.curLikeCnt=0,this.isLike=!0;const e=window.setInterval((()=>{if(0===this.feedsLikeQueue.length)return this.isLike=!1,this.isClick=!1,void clearInterval(e);this.feedsLikeQueue.shift()?.click(),this.curLikeCnt++}),1200)}}});var l=n(332),a=n.n(l),r=n(588),c=n.n(r),d={insert:"head",singleton:!1};a()(c(),d);c().locals;const u=(0,n(499).Z)(o,i,[],!1,null,null,null).exports},139:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"custom-black-list-extra-options"},[e("VButton",{ref:"button",on:{mouseover:t.setBlackListProps,click:t.toggleBlackList}},[t._v("\n      黑名单\n      "),e("VIcon",{attrs:{icon:"right-arrow",size:16}})],1)],1)])};i._withStripped=!0;var s=n(648),o=n(454);const l=Vue.extend({components:{VIcon:s.VIcon,VButton:s.VButton},data:()=>({isFirstLoad:!1}),methods:{toggle(){this.$refs.popup.toggle()},async setBlackListProps(){if(!this.isFirstLoad&&(this.isFirstLoad=await(0,o.J9)(),this.isFirstLoad)){const t=this.$refs.button.$el;(0,o.sz)(t)}},toggleBlackList:o.h4}});var a=n(332),r=n.n(a),c=n(682),d=n.n(c),u={insert:"head",singleton:!1};r()(d(),u);d().locals;const p=(0,n(499).Z)(l,i,[],!1,null,null,null).exports},499:(t,e,n)=>{"use strict";function i(t,e,n,i,s,o,l,a){var r,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),l?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=r):s&&(r=a?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),r)if(c.functional){c._injectStyles=r;var d=c.render;c.render=function(t,e){return r.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,r):[r]}return{exports:t,options:c}}n.d(e,{Z:()=>i})},332:(t,e,n)=>{"use strict";var i,s=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),l=[];function a(t){for(var e=-1,n=0;n<l.length;n++)if(l[n].identifier===t){e=n;break}return e}function r(t,e){for(var n={},i=[],s=0;s<t.length;s++){var o=t[s],r=e.base?o[0]+e.base:o[0],c=n[r]||0,d="".concat(r," ").concat(c);n[r]=c+1;var u=a(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(l[u].references++,l[u].updater(p)):l.push({identifier:d,updater:m(p,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var l=o(t.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function p(t,e,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var o=document.createTextNode(s),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(o,l[e]):t.appendChild(o)}}function f(t,e,n){var i=n.css,s=n.media,o=n.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var b=null,k=0;function m(t,e){var n,i,s;if(e.singleton){var o=k++;n=b||(b=c(e)),i=p.bind(null,n,o,!1),s=p.bind(null,n,o,!0)}else n=c(e),i=f.bind(null,n,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var n=r(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var s=a(n[i]);l[s].references--}for(var o=r(t,e),c=0;c<n.length;c++){var d=a(n[c]);0===l[d].references&&(l[d].updater(),l.splice(d,1))}n=o}}}},945:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=945,t.exports=e},185:t=>{"use strict";t.exports="进入视频 / 查看动态时, 自动点赞\\\n无法触发未加载动态的点赞，当启用手动对动态点赞后可手动触发，启用后不会触发动态自动点赞\\\n安装快捷键扩展后可以点击【l】键或【L】键触发\\\n还可以添加动态点赞的黑名单\\\n"},153:t=>{"use strict";t.exports=coreApis.pluginApis.data},200:t=>{"use strict";t.exports=coreApis.spinQuery},648:t=>{"use strict";t.exports=coreApis.ui},605:t=>{"use strict";t.exports=coreApis.utils}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,exports:{}};return n[t](o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,s.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var o=Object.create(null);s.r(o);var l={};t=t||[null,e({}),e([]),e(e)];for(var a=2&i&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>l[t]=()=>n[t]));return l.default=()=>n,s.d(o,l),o},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";s.d(o,{component:()=>d});const t=coreApis.componentApis.define;var e=s(200),n=s(605);const i=coreApis.utils.urls,l=coreApis.componentApis.feeds.api;var a=s(454),r=s(153);const c=[],d=(0,t.defineComponentMetadata)({name:"autoLike",displayName:"自动点赞",tags:[componentsTags.utils,componentsTags.feeds,componentsTags.video],urlInclude:[...i.videoAndBangumiUrls,...i.feedsUrls],author:{name:"CrazyboyQCD",link:"https://github.com/CrazyboyQCD"},options:{video:{defaultValue:!0,displayName:"对视频点赞"},feed:{defaultValue:!0,displayName:"对动态点赞"},manualFeed:{defaultValue:!0,displayName:"手动对动态点赞"},users:{displayName:"黑名单",defaultValue:[],hidden:!0}},extraOptions:()=>Promise.resolve().then(s.bind(s,139)).then((t=>t.default)),entry:async t=>{let{settings:{options:s}}=t;if(s.video&&i.videoAndBangumiUrls.some((t=>(0,n.matchUrlPattern)(t)))){await(0,n.playerReady)();const t=await(0,e.select)(".video-like");if(!t||t.classList.contains("on"))return;t.click()}if(s.feed&&i.feedsUrls.some((t=>(0,n.matchUrlPattern)(t)))){const t={users:s.users};if((0,r.registerData)(a.qt,t),s.manualFeed)(0,a.Ts)();else{window.setInterval((()=>{if(0===c.length)return;c.shift()?.click()}),1e3);const t=(0,r.getData)(a.qt);(0,l.forEachFeedsCard)({added:e=>{if(t.includes(e.username))return;const n=dq(e.element,".bili-dyn-action.like");n&&!n.classList.contains("active")&&c.push(n)}})}}},plugin:{displayName:"点赞 - 手动",setup:t=>{let{addData:e}=t;e("keymap.actions",(t=>{t.manuallike={displayName:"手动触发对动态点赞",run:t=>{const{clickElement:e}=t;return e(".manual-like",t)}}})),e("keymap.presets",(t=>{t.manuallike="l L"}))}},commitHash:"3e4fdda5946b4f6298aec12fb17993ea6b5b1781",coreVersion:"2.8.8",description:(()=>{const t=s(945);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(s.t.bind(s,185,17)).then((t=>t.default))}})()})})(),o=o.component})()));