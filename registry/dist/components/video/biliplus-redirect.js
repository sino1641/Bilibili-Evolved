!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/biliplus-redirect"]=t():e["video/biliplus-redirect"]=t()}(globalThis,(()=>(()=>{"use strict";var e={249:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("a",{attrs:{href:e.url,target:"_blank",tabindex:"-1"}},[t("DefaultWidget",{attrs:{name:"转到BiliPlus",icon:"biliplus",disabled:!e.url}})],1)};i._withStripped=!0;const n=coreApis.observer,r=coreApis.ui,s=/\/(video|medialist\/play)\/([^\/]+\/)?(av[\d]+|BV.+)/i,l=[{condition:()=>"space.bilibili.com"===window.location.host,getUrl:e=>document.URL.replace("space.bilibili.com/",`${e}/space/`)},{condition:()=>"space.bilibili.com"===window.location.host,getUrl:e=>document.URL.replace("space.bilibili.com/",`${e}/space/`)},{condition:()=>document.URL.includes("/bangumi/play"),getUrl:(e,t)=>((0,n.videoChange)((()=>{const o=unsafeWindow.aid||document.querySelector(".av-link,.info-sec-av").innerText.replace(/[aAvV]/g,""),i=`https://${e}/video/av${o}/`;document.URL!==i?t(i):t("")})),`https://${e}${window.location.pathname}${window.location.search}`)},{condition:()=>s.test(document.URL),getUrl:e=>`https://${e}/video/${document.URL.match(s)[3]}/`}];var a=function(e,t,o,i,n,r,s,l){var a,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):n&&(a=l?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(e,t){return a.call(t),d(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,a):[a]}return{exports:e,options:c}}(Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({url:""}),created(){const e="www.biliplus.com",t=e=>this.url=e,o=l.find((e=>e.condition()));o?t(o.getUrl(e,t)):(0,n.videoChange)((()=>{this.url=document.URL.replace(window.location.host,e)}))}}),i,[],!1,null,null,null);const c=a.exports}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,n=(0,e.defineComponentMetadata)({name:"biliplusRedirect",displayName:"BiliPlus 跳转支持",description:{"zh-CN":"在视频 / 番剧 / 空间中, 可以从功能中的按钮点击转到 BiliPlus 上对应的页面."},urlInclude:[...t.videoAndBangumiUrls,"//space.bilibili.com"],entry:none,tags:[componentsTags.video,componentsTags.utils],widget:{component:()=>Promise.resolve().then(o.bind(o,249)).then((e=>e.default))},commitHash:"160747d500bed9d3b8ef5b38e0f1e008446b2f11",coreVersion:"2.8.8"})})(),i=i.component})()));