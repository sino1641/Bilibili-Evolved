!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/manual-input"]=t():e["video/download/manual-input"]=t()}(globalThis,(()=>(()=>{var e={301:(e,t,n)=>{var i=n(218)((function(e){return e[1]}));i.push([e.id,".manual-input.download-video-config-section .be-text-area {\n  min-height: 200px;\n}",""]),e.exports=i},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},943:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"manual-input download-video-config-section"},[t("TextArea",{attrs:{placeholder:"输入 av 号或 BV 号, 空格或换行分隔"},model:{value:e.inputText,callback:function(t){e.inputText=t},expression:"inputText"}}),e._v(" "),t("div",{staticClass:"manual-input-stats download-video-config-description"},[e._v("\n    已输入 "+e._s(e.ids.length)+" 个视频\n  ")]),e._v(" "),t("div",{staticClass:"manual-input-description download-video-config-description"},[e._v("\n    手动输入可以自行输入要下载的视频编号, 但下面清晰度的选择依然是以当前视频为准的,\n    所以建议在高清的视频页面里操作. 批量命名格式至少需要包含 title 和 ep 变量.\n  ")]),e._v(" "),t("div",{staticClass:"manual-input-description download-video-config-description"},[e._v("\n    一次最多 36 个视频, 请勿短时间进行大量下载, 以免遭到 b 站封禁.\n  ")])],1)};i._withStripped=!0;const o=coreApis.ui,r=Vue.extend({components:{TextArea:o.TextArea},data:()=>({inputText:""}),computed:{ids(){const e=this.inputText,t=/(BV.+)|av(\d+)/i;return e.split(/\n| /).map((e=>{const t=e.trim();return/^\d+$/.test(t)?`av${t}`:t})).filter((e=>t.test(e))).map((e=>{const n=e.match(t);return n[1]??n[2]})).slice(0,36)}}});var a=n(332),s=n.n(a),l=n(301),c=n.n(l),d={insert:"head",singleton:!1};s()(c(),d);c().locals;var u=function(e,t,n,i,o,r,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}(r,i,[],!1,null,null,null);const p=u.exports},332:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:h(p,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function h(e,t){var n,i,o;if(t.singleton){var r=m++;n=v||(v=c(t)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=c(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{plugin:()=>l});const e=coreApis.ajax,t=coreApis.settings,o=coreApis.utils.formatters,r=coreApis.utils.log,a=coreApis.utils.title,s=coreApis.utils.urls,l={name:"downloadVideo.inputs.manual",displayName:"下载视频 - 手动输入",description:"为下载视频增加手动输入支持.",setup:i=>{let{addData:l}=i;l("downloadVideo.inputs",(i=>{i.push({name:"videoManual",displayName:"手动输入",match:s.videoUrls,batch:!0,getInputs:async n=>{const i=(0,r.useScopedConsole)("手动输入"),s=await Promise.allSettled(n.ids.map((t=>/av(\d+)/i.test(t)?(t=>{const n=`https://api.bilibili.com/x/web-interface/view?aid=${t}`;return(0,e.bilibiliApi)((0,e.getJsonWithCredentials)(n),`获取视频信息失败, aid = ${t}`)})(t):/BV(.+)/i.test(t)?(t=>{const n=`https://api.bilibili.com/x/web-interface/view?bvid=${t}`;return(0,e.bilibiliApi)((0,e.getJsonWithCredentials)(n),`获取视频信息失败, bvid = ${t}`)})(t):(i.error(`无效输入: ${t}`),null))));return s.filter((e=>"rejected"===e.status)).forEach((e=>{i.error(e.reason)})),s.filter((e=>"fulfilled"===e.status)).flatMap((e=>{const{aid:n,cid:i,bvid:r,title:s,pages:l}=e.value;if(l.length>1)return l.map(((e,i)=>({aid:n.toString(),cid:e.cid.toString(),bvid:r,allowQualityDrop:!0,title:(0,a.formatTitle)((0,t.getGeneralSettings)().batchFilenameFormat,!1,e.part?{title:s,n:(0,o.formatNumber)(i+1,l.length),ep:e.part}:{title:s})})));return{aid:n.toString(),cid:i.toString(),bvid:r,allowQualityDrop:!0,title:(0,a.formatTitle)((0,t.getGeneralSettings)().batchFilenameFormat,!1,{title:s})}}))},component:()=>Promise.resolve().then(n.bind(n,943)).then((e=>e.default))})}))},commitHash:"2819ddbe63830235c7ca94410fd7415b554e7488",coreVersion:"2.8.6"}})(),i=i.plugin})()));