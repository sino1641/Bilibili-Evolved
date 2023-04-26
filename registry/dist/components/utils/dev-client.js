!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/dev-client"]=t():e["utils/dev-client"]=t()}(globalThis,(()=>(()=>{var e,t,n={390:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DevClient:()=>f,DevClientEvents:()=>m,devClient:()=>b});const s=coreApis.utils.log,o=coreApis.componentApis.component,i=coreApis.style;var r=n(721),a=n(917);const c=coreApis.ajax,d=coreApis.pluginApis.plugin;var l=n(391);function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,r.Ub)(),v=(0,s.useScopedConsole)("DevClient"),h=(e,t)=>{const{data:n}=e;try{const e=JSON.parse(n);v.log("接收信息",e),t(e)}catch(e){v.error("无效信息",n)}};let m;!function(e){e.CoreUpdate="coreUpdate",e.ItemUpdate="itemUpdate",e.SessionsUpdate="sessionsUpdate",e.ServerChange="serverChange",e.ServerConnected="serverConnected",e.ServerDisconnected="serverDisconnected"}(m||(m={}));class f extends EventTarget{constructor(){super(...arguments),u(this,"socket",void 0),u(this,"sessions",[])}addEventListener(e,t,n){super.addEventListener(e,t,n)}removeEventListener(e,t,n){super.removeEventListener(e,t,n)}createSocket(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((t=>{this.closeSocket();const n=()=>{this.closeSocket()};this.socket=new WebSocket(`ws://localhost:${p.port}`),this.socket.addEventListener("error",(()=>{v.warn("未能连接到 DevServer"),e&&l.Toast.error("连接失败, 请确保 DevServer 已启动, 并检查连接配置.","DevClient",2e3),this.closeSocket(),t(!1)})),this.socket.addEventListener("close",(()=>{v.log("已断开 DevServer 连接"),window.removeEventListener("unload",n)})),this.socket.addEventListener("open",(()=>{v.log("已连接到 DevServer"),this.dispatchEvent(new CustomEvent(m.ServerChange,{detail:!0})),this.dispatchEvent(new CustomEvent(m.ServerConnected)),t(!0)})),this.socket.addEventListener("message",(e=>{h(e,(e=>{switch(e.type){default:break;case"start":this.sessions=e.sessions,this.dispatchEvent(new CustomEvent(m.SessionsUpdate,{detail:this.sessions}));break;case"stop":this.closeSocket();break;case"coreUpdate":this.handleCoreUpdate();break;case"itemUpdate":{const{path:t}=e;this.handleItemUpdate(t);break}}}))})),window.addEventListener("unload",n)}))}closeSocket(){this.socket&&(this.socket.close(),this.socket=null,this.sessions=[],this.dispatchEvent(new CustomEvent(m.SessionsUpdate,{detail:this.sessions})),this.dispatchEvent(new CustomEvent(m.ServerChange,{detail:!1})),this.dispatchEvent(new CustomEvent(m.ServerDisconnected)))}get isConnected(){return this.socket?.readyState===WebSocket.OPEN}handleCoreUpdate(){this.dispatchEvent(new CustomEvent(m.CoreUpdate)),p.coreRefreshMethod===a.v.AlwaysRefresh&&(v.log("本体已更新, 刷新页面..."),location.reload())}async handleItemUpdate(e){this.dispatchEvent(new CustomEvent(m.ItemUpdate,{detail:e}));const t=`http://localhost:${p.port}${e}`,s=Object.entries(r.Db.urls.components).find((t=>{let[,{url:n}]=t;return n.endsWith(e)}));if(s){const[e]=s,r=o.componentsMap[e];if(!r)return;const d=await(0,c.monkey)({url:t}),{installFeatureFromCode:l}=await Promise.resolve().then(n.t.bind(n,890,23)),{metadata:u}=await l(d,t),h=u,m=r.instantStyles??[],f=h.instantStyles??[],b=()=>{v.log(`组件 [${h.displayName}] 已更新`)},y=()=>{v.log(`组件 [${h.displayName}] 已更新, 刷新页面...`),location.reload()},g=()=>(m.length>0||f.length>0)&&((0,i.loadInstantStyle)(h),m.forEach((e=>{(0,i.removeStyle)(e.name)})),r.instantStyles=f,!0);switch(p.registryReloadMethod){default:case a._.Disabled:p.registryRefreshMethod===a.v.DoNotRefresh?b():y();break;case a._.Enabled:g()?b():y()}return}const l=Object.entries(r.Db.urls.plugins).find((t=>{let[,{url:n}]=t;return n.endsWith(e)}));if(l){const[e]=l,t=d.plugins.find((t=>t.name===e));if(!t)return;const{displayName:n}=t;p.registryRefreshMethod!==a.v.DoNotRefresh?(v.log(`插件 [${n}] 已更新, 刷新页面...`),location.reload()):v.log(`插件 [${n}] 已更新`)}}async querySessions(){return new Promise((e=>{this.socket?.addEventListener("message",(t=>{h(t,(t=>{"querySessionsResponse"===t.type&&(this.sessions=t.sessions,this.dispatchEvent(new CustomEvent(m.SessionsUpdate,{detail:t.sessions})),e(t.sessions))}))}),{once:!0}),this.socket?.send(JSON.stringify({type:"querySessions"}))}))}async startDebug(e){return await(0,c.monkey)({url:e}),this.querySessions()}async stopDebug(e){const t={type:"itemStop",path:e};return this.socket?.send(JSON.stringify(t)),this.querySessions()}}const b=new f},721:(e,t,n)=>{"use strict";n.d(t,{Db:()=>a,j4:()=>d,Ub:()=>c});var s=n(952);const o=coreApis.settings;var i=n(605),r=n(917);const{options:a}=(0,o.getComponentSettings)("autoUpdate"),c=()=>(0,o.getComponentSettings)("devClient").options,d=(0,s.defineOptionsMetadata)({port:{defaultValue:23333,displayName:"端口",validator:(0,i.getNumberValidator)(1024,65535)},autoConnect:{defaultValue:!0,displayName:"自动连接"},coreRefreshMethod:{defaultValue:r.v.AlwaysRefresh,displayName:"本体刷新策略",dropdownEnum:r.v},registryRefreshMethod:{defaultValue:r.v.AlwaysRefresh,displayName:"功能刷新策略",dropdownEnum:r.v},registryReloadMethod:{defaultValue:r._.Enabled,displayName:"功能热重载策略",dropdownEnum:r._},devRecords:{defaultValue:{},displayName:"调试模式临时存储",hidden:!0}})},917:(e,t,n)=>{"use strict";let s,o;n.d(t,{_:()=>s,v:()=>o}),function(e){e.Enabled="开启热重载",e.Disabled="关闭热重载"}(s||(s={})),function(e){e.AlwaysRefresh="总是刷新",e.DoNotRefresh="不刷新"}(o||(o={}))},463:(e,t,n)=>{var s=n(355)((function(e){return e[1]}));s.push([e.id,".be-dev-client[data-v-5563add7] {\n  box-shadow: 0 0 0 1px rgba(136, 136, 136, 0.2666666667);\n  order: -2;\n  border-radius: 4px;\n  padding: 6px 6px 6px 10px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  gap: 6px;\n}\nbody.dark .be-dev-client[data-v-5563add7] {\n  background-color: #333;\n}\n.be-dev-client .title[data-v-5563add7] {\n  font-weight: 600;\n}\n.be-dev-client .connection-status[data-v-5563add7] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n}\n.be-dev-client .connection-status .status-dot[data-v-5563add7] {\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n}\n.be-dev-client .connection-status .status-dot.connected[data-v-5563add7] {\n  background-color: #81c785;\n}\n.be-dev-client .connection-status .status-dot.disconnected[data-v-5563add7] {\n  background-color: #78909c;\n}\n.be-dev-client .connection-status .be-button[data-v-5563add7] {\n  margin-left: 4px;\n  padding-left: 4px;\n}\n.be-dev-client .connection-status .be-button .be-icon[data-v-5563add7] {\n  margin-right: 4px;\n}",""]),e.exports=s},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,s){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(s)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var r=this[i][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);s&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},662:(e,t,n)=>{"use strict";var s,o=function(){return void 0===s&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
s=Boolean(window&&document&&document.all&&!window.atob)),s},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},s=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:f(p,t),references:1}),s.push(l)}return s}function d(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var o=n.nc;o&&(s.nonce=o)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,s){var o=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function v(e,t,n){var s=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var h=null,m=0;function f(e,t){var n,s,o;if(t.singleton){var i=m++;n=h||(h=d(t)),s=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=d(t),s=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var o=a(n[s]);r[o].references--}for(var i=c(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=i}}}},782:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isConnected,expression:"isConnected"}]},[e.canStartDebug?n("div",{staticClass:"component-action dev-client-action",on:{click:e.startDebug}},[e.busy?n("VIcon",{attrs:{icon:"mdi-network-outline",size:16}}):n("VIcon",{attrs:{icon:"mdi-play-network-outline",size:16}}),e._v("\n    "+e._s(e.busy?"启动中":"开始调试")+"\n  ")],1):e._e(),e._v(" "),e.canStopDebug?n("div",{staticClass:"component-action dev-client-action",on:{click:e.stopDebug}},[e.busy?n("VIcon",{attrs:{icon:"mdi-network-outline",size:16}}):n("VIcon",{attrs:{icon:"mdi-minus-network-outline",size:16}}),e._v("\n    "+e._s(e.busy?"停止中":"停止调试")+"\n  ")],1):e._e()])};s._withStripped=!0;var o=n(391),i=n(648),r=n(390),a=n(721);const c=(0,a.Ub)(),d=e=>{if(!e)return null;if(e.match(new RegExp(`localhost:${c.port}\\/registry\\/components\\/(.+)$`)))return e;const t=e.match(/localhost:(\d+?)\/components\/(.+)$/);if(t)return`http://localhost:${c.port}/registry/dist/components/${t[2]}`;const n=e.match(/\/registry\/dist\/components\/(.+)$/);return n?`http://localhost:${c.port}/registry/dist/components/${n[1]}`:null},l=(0,a.Ub)(),u=Vue.extend({components:{VIcon:i.VIcon},props:{item:{type:Object,required:!0},component:{type:Object,required:!0}},data:()=>({busy:!1,autoUpdateComponents:a.Db.urls.components,sessions:[],isConnected:!1}),computed:{autoUpdateRecord(){const e=this.component;return this.autoUpdateComponents[e.name]},componentUpdateUrl(){return this.autoUpdateRecord?.url},isDebugging(){return this.componentUpdateUrl&&this.sessions.some((e=>{const{pathname:t}=new URL(this.componentUpdateUrl);return e===t}))},canStartDebug(){return!this.isDebugging&&null!==d(this.componentUpdateUrl)},canStopDebug(){return Boolean(this.isDebugging&&this.componentUpdateUrl)}},async created(){const{devClient:e}=await Promise.resolve().then(n.bind(n,390));this.sessions=e.sessions,this.isConnected=e.isConnected,e.addEventListener(r.DevClientEvents.ServerChange,this.handleServerChange),e.addEventListener(r.DevClientEvents.SessionsUpdate,this.handleSessionsUpdate)},async beforeDestroy(){const{devClient:e}=await Promise.resolve().then(n.bind(n,390));e.removeEventListener(r.DevClientEvents.SessionsUpdate,this.handleSessionsUpdate)},methods:{handleSessionsUpdate(e){this.sessions=e.detail},handleServerChange(e){this.isConnected=e.detail},async handleClick(e){if(!this.busy)try{this.busy=!0,await e()}finally{this.busy=!1}},async startDebug(){await this.handleClick((async()=>{const{devClient:e}=await Promise.resolve().then(n.bind(n,390)),t=this.component,s=d(this.componentUpdateUrl);this.autoUpdateRecord.url!==s&&(l.devRecords[t.name]={name:t.name,originalUrl:this.componentUpdateUrl},this.autoUpdateRecord.url=s);const i=o.Toast.info("启动调试中...","DevClient");try{await e.startDebug(this.autoUpdateRecord.url)}catch(e){console.error(e)}finally{i.close()}}))},async stopDebug(){await this.handleClick((async()=>{const{devClient:e}=await Promise.resolve().then(n.bind(n,390)),t=this.component,{pathname:s}=new URL(this.componentUpdateUrl);e.isConnected&&await e.stopDebug(s),l.devRecords[t.name]&&(this.autoUpdateRecord.url=l.devRecords[t.name].originalUrl,delete l.devRecords[t.name])}))}}});var p=(0,n(133).Z)(u,s,[],!1,null,null,null);p.options.__file="registry/lib/components/utils/dev-client/Action.vue";const v=p.exports},109:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"be-dev-client"},[n("div",{staticClass:"title"},[e._v("DevClient")]),e._v(" "),n("div",{staticClass:"connection-status"},[e.isConnected?[n("div",{staticClass:"status-dot connected"}),e._v(" "),n("div",{staticClass:"status-text"},[e._v("已连接")]),e._v(" "),n("AsyncButton",{attrs:{title:"断开连接"},on:{click:e.disconnect}},[n("VIcon",{attrs:{icon:"mdi-stop",size:14}}),e._v("\n        断开连接\n      ")],1)]:[n("div",{staticClass:"status-dot disconnected"}),e._v(" "),n("div",{staticClass:"status-text"},[e._v("未连接")]),e._v(" "),n("AsyncButton",{attrs:{title:"连接"},on:{click:e.connect}},[n("VIcon",{attrs:{icon:"mdi-play",size:14}}),e._v("\n        连接\n      ")],1)]],2)])};s._withStripped=!0;var o=n(648),i=n(390);const r=Vue.extend({components:{AsyncButton:o.AsyncButton,VIcon:o.VIcon},data:()=>({client:null,isConnected:!1}),async created(){const{devClient:e}=await Promise.resolve().then(n.bind(n,390));this.client=e,this.updateConnectionStatus(),e.addEventListener(i.DevClientEvents.ServerChange,this.updateConnectionStatus)},beforeDestroy(){this.client.removeEventListener(i.DevClientEvents.ServerChange,this.updateConnectionStatus)},methods:{async connect(){return this.client.createSocket(!0)},disconnect(){this.client.closeSocket()},updateConnectionStatus(){this.isConnected=this.client.isConnected}}});var a=n(662),c=n.n(a),d=n(463),l=n.n(d),u={insert:"head",singleton:!1};c()(l(),u);l().locals;var p=(0,n(133).Z)(r,s,[],!1,null,"5563add7",null);p.options.__file="registry/lib/components/utils/dev-client/Widget.vue";const v=p.exports},133:(e,t,n)=>{"use strict";function s(e,t,n,s,o,i,r,a){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):o&&(c=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,{Z:()=>s})},456:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=456,e.exports=t},626:e=>{"use strict";e.exports="本地开发工具, 提供自动更新功能和样式热重载的能力, 需要与 DevServer 配合使用. (DevServer 的使用方式见 [CONTRIBUTING.md](https://github.com/the1812/Bilibili-Evolved/blob/preview/CONTRIBUTING.md))\r\n\r\n`自动连接` 开启时, 每次进入网页都会自动尝试连接到 DevServer, 如果关闭则需要手动操作连接.\r\n\r\n`刷新策略` 决定了收到本体或者功能更新的消息时是否刷新:\r\n  - **总是刷新**: 收到更新时立即刷新页面\r\n  - 不刷新: 收到更新时不刷新页面\r\n\r\n`热重载策略` 决定了是否开启热重载功能, 只要成功触发热重载, 就不刷新页面:\r\n  - **开启热重载**: 功能带有 `instantStyles` 时, 热重载 `instantStyles` 中的样式\r\n  - 关闭热重载: 收到更新时按 `刷新策略` 执行\r\n\r\n> 目前就这两个选项, 将来可能会支持对 `entry` 的热重载\r\n"},952:e=>{"use strict";e.exports=coreApis.componentApis.define},890:e=>{"use strict";e.exports=coreApis.installFeature},391:e=>{"use strict";e.exports=coreApis.toast},648:e=>{"use strict";e.exports=coreApis.ui},605:e=>{"use strict";e.exports=coreApis.utils}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={id:e,exports:{}};return n[e](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"==typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"==typeof n.then)return n}var i=Object.create(null);o.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&s&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>r[e]=()=>n[e]));return r.default=()=>n,o.d(i,r),i},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.d(i,{component:()=>s});var e=o(952),t=o(605),n=o(721);const s=(0,e.defineComponentMetadata)({name:"devClient",displayName:"DevClient",tags:[componentsTags.utils],entry:async e=>{let{settings:{options:s}}=e;if((0,t.isIframe)())return;const{devClient:i,DevClientEvents:r}=await Promise.resolve().then(o.bind(o,390));i.addEventListener(r.ServerConnected,(()=>{i.addEventListener(r.SessionsUpdate,(()=>{Object.entries(s.devRecords).forEach((e=>{let[,{name:t,originalUrl:o}]=e;const r=n.Db.urls.components[t];if(!r)return;const a=r.url;i.sessions.find((e=>a.endsWith(e)))||(r.url=o,console.log("cleanUpDevRecords",t,a,o,r),delete s.devRecords[t])}))}),{once:!0})})),s.autoConnect&&i.createSocket()},options:n.j4,widget:{component:()=>Promise.resolve().then(o.bind(o,109)).then((e=>e.default))},plugin:{setup:async e=>{let{addData:s}=e;(0,t.isIframe)()||(s("settingsPanel.componentActions",(e=>{e.push((e=>{if(!n.Db.urls.components[e.name])return;return{name:"devClient",component:()=>Promise.resolve().then(o.bind(o,782))}}))})),s("launchBar.actions",(e=>{e.push({name:"devClientActions",getActions:async()=>{const{devClient:e}=await Promise.resolve().then(o.bind(o,390)),t=[];return e.isConnected?t.push({name:"断开 DevServer 连接",description:"Disconnect from DevServer",icon:"mdi-stop-circle-outline",action:()=>e.closeSocket()}):t.push({name:"连接 DevServer",description:"Connect to DevServer",icon:"mdi-play-circle-outline",action:async()=>{await e.createSocket(!0)}}),t}})})))}},commitHash:"f64801060d2d83daeba6eebb3462941893da548d",coreVersion:"2.7.1",description:(()=>{const e=o(456);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,626,17)).then((e=>e.default))}})()})})(),i=i.component})()));