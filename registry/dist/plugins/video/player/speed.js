!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/speed"]=t():e["video/player/speed"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>X});const n=coreApis.toast,o=coreApis.componentApis.video.playerAgent,r=coreApis.lifeCycle,i=coreApis.observer,s=coreApis.utils,a=coreApis.utils.sort,l=coreApis.settings,c=e=>"function"==typeof e?{next:e}:e,d=e=>function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=!1;const i=[],s=[];let a=!1;const d=()=>{for(;i.length;)i.pop()();s.length=0,a=!0},p=e=>{a||(s.forEach((t=>{t.error?.(e),(0,l.getGeneralSettings)().devMode&&console.error(e)})),d())},u=e=>{a||s.forEach((t=>{try{t.next(e)}catch(e){p(e)}}))},h=()=>{s.forEach((e=>{e.complete?.()})),d()},b=()=>{if(r)return;const e=t?.({next:u,error:p,complete:h});e&&i.push(e),r=!0},m=e=>null==e?null:(s.push(e),()=>{lodash.pull(s,e)}),g=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?{subscribe:e=>{const t=m(c(e));return(o?.connect??b)(),t},pipe:g,next:u,error:p,complete:h,...o}:e(n[0],{subscribe:m},o||{connect:b,next:u}).pipe(...n.slice(1))};if(n){const e=t?.({subscribe:e=>n.subscribe({error:p,complete:h,...c(e)}),next:u,error:p,complete:h});e&&i.push(e)}return g()}(e),p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,complete:o}=e;t.forEach((e=>{n(e)})),o()}))},u=(e,t)=>d((n=>{let{next:o}=n;return e.addEventListener(t,o),()=>e.removeEventListener(t,o)})),h=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return d((t=>{let{next:o}=t;e(...n,o)}))},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,complete:o}=e;const r=[...t],i=()=>{const e=r.shift();e||o(),e.subscribe({next:n,complete:()=>{i()}})};i()}))},m=e=>new Promise(((t,n)=>{const o=e.subscribe({next:e=>{t(e),o()},error:()=>{n(),o()},complete:()=>{n(),o()}})})),g=e=>t=>{let{subscribe:n,next:o,complete:r,error:i}=t;n(lodash.mapValues({next:o,complete:r,error:i},(t=>e(t))))},f=e=>function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];Promise.resolve().then((()=>e(...n)))},v=e=>{const t=new Set;return e((e=>{lodash.castArray(e).forEach((e=>{t.add(e)}))})),()=>{t.forEach((e=>{e()}))}},y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d((e=>{let{next:n,error:o,complete:r}=e;return v((e=>{const i=[];let s=0;e(t.map(((e,a)=>e.pipe(g(f)).subscribe({next:e=>{i[a]=e,i.reduce((e=>e+1),0)===t.length&&n(i.slice())},complete:()=>{s++,s===t.length&&r()},error:o})))),e((()=>{i.length=0,s=0}))}))}))},x=e=>t=>{let{subscribe:n,next:o,error:r}=t;n(lodash.debounce((e=>{try{o(e)}catch(e){r(e)}}),e))},w=e=>t=>{let{subscribe:n,next:o}=t;n((t=>{e(t)&&o(t)}))},S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{let{next:n,subscribe:o}=e,r=!1;o((e=>{r||t.forEach((e=>n(e))),n(e),r=!0}))}},E=coreApis.pluginApis.data,A=e=>e.split(",").map((e=>e.trim().replace(/^\./,""))).join(","),k=(e,t)=>{const n=t=>{(0,E.registerAndGetData)(e,t)[0]=t},o=(0,E.getData)(e);if(o.length)return[o[0],n];if(t){const e=t();return n(e),[e,n]}return[void 0,n]},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&1===e?"倍速":Math.trunc(e)===e?`${e}.0x`:`${e}x`},C=e=>{if("倍速"===e)return 1;const t=/([0-9]*[.]?[0-9]+)x/.exec(e);if(t)return parseFloat(t[1]);throw new Error(`unknown speed text: ${e}`)};function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const N=o.playerAgent.provideCustomQuery({video:{speedMenuList:".bilibili-player-video-btn-speed-menu,.bpx-player-ctrl-playbackrate-menu",speedMenuItem:".bilibili-player-video-btn-speed-menu-list,.bpx-player-ctrl-playbackrate-menu-item",speedNameBtn:".bilibili-player-video-btn-speed-name,.bpx-player-ctrl-playbackrate-result",speedContainer:".bilibili-player-video-btn-speed,.bpx-player-ctrl-playbackrate",active:".bilibili-player-active,.bpx-state-active",show:".bilibili-player-speed-show,.bpx-state-show"},bangumi:{speedMenuList:".squirtle-speed-select-list",speedMenuItem:".squirtle-select-item",speedNameBtn:".squirtle-speed-select-result",speedContainer:".squirtle-speed-wrap",active:".active",show:".bilibili-player-speed-show"}});let $;!function(e){e[e.MIN=0]="MIN",e[e.CURRENT=1]="CURRENT",e[e.MAX=2]="MAX"}($||($={}));const T=(e,t,n)=>{const o=new MutationObserver(n);return o.observe(e,t),o},j=e=>{let[t,n]=e;if(!t)throw new Error("speed container element not found!");if(!n)throw new Error("video element not found!");const o=t.querySelector(N.custom.speedNameBtn.selector),r=t.querySelector(N.custom.speedMenuList.selector);let i,l,c;const p=d(),u=d().pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))}));u.pipe(S(void 0),(e=>{let{subscribe:t,next:n}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&n(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t,n]=e;l=t,i=n}));const h=e=>{if(e)switch(e.nodeType){case Node.TEXT_NODE:u.next(C(e.data));break;case Node.ELEMENT_NODE:u.next(C(e.innerHTML));break;default:console.warn("The target parameter of updateActiveVideoSpeed must be a Node, and the node type must be one of TEXT_NODE and ELEMENT_NODE")}},b=()=>{c=lodash([...r.children]).map((e=>lodash.attempt((()=>C(e.textContent))))).reject((e=>lodash.isError(e))).sort((0,a.ascendingSort)()).value()};h(o),b();const m=T(r,{childList:!0,attributes:!0},(e=>{const{attributes:t=[],childList:n=[]}=lodash.groupBy(e,"type");n.length&&b(),p.next({attributes:t,childList:n})})),g=T(o,{childList:!0,subtree:!0},(e=>{e.forEach((e=>{const[t]=e.addedNodes;h(t)}))}));return{containerElement:t,videoElement:n,nameBtnElement:o,menuListElement:r,query:e=>(0,s.des)(`./*[(${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"or";return e.split(",").map(A).flat().map((e=>`contains(@class, "${e}")`)).join(` ${t} `)}(N.custom.speedMenuItem.selector)}) and normalize-space()="${V(e)}"]`,r),dispose:()=>{m.disconnect(),g.disconnect()},activeVideoSpeed$:u,menuListElementMutations$:p,getActiveVideoSpeed:()=>i,getOldActiveVideoSpeed:()=>l,getAvailableSpeedValues:()=>c}},M=e=>{const{videoElement:t,menuListElement:n}=e,o=u(n,"click").pipe((r=e=>{const{innerText:t,innerHTML:n}=e.target,o=t.trim()||n.trim();return lodash.attempt((()=>C(o)))},e=>{let{subscribe:t,next:n}=e;t((e=>{n(r(e))}))}),w((e=>!lodash.isError(e))));var r;const i=d((e=>{let{next:n}=e,o=t;do{o=Object.getPrototypeOf(o)}while(null===o||!Object.prototype.hasOwnProperty.call(o,"playbackRate"));const r=Object.getOwnPropertyDescriptor(o,"playbackRate");return Object.defineProperty(o,"playbackRate",{set(e){r.set.call(this,e),n(e)}}),()=>{Object.defineProperty(o,"playbackRate",r)}})),s=o.pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))})),a=i.pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))})),l=d((e=>{let{next:t}=e;const n=y(s,a);return n.subscribe((e=>{let[n,o]=e;n===o&&t(o)})),()=>n.complete()})).pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))}));let c;a.pipe(x(200),S(void 0),(e=>{let{subscribe:t,next:n}=e;const o=[];return t((e=>{2===o.length&&o.shift(),o.push(e),2===o.length&&n(o.slice())})),()=>{o.length=0}})).subscribe((e=>{let[t]=e;c=t}));const p={menuListElementClickSpeed$:o,menuListElementClickSpeedChange$:s,playbackRate$:i,playbackRateChange$:a,videoSpeedChange$:l};return{...e,...p,dispose:()=>{lodash.values(p).forEach((e=>{e.complete()})),e.dispose()},getOldPlaybackRate:()=>c}},[L]=k("speed.NoSuchSpeedMenuItemElementError",(()=>class extends Error{constructor(e){const t=lodash.attempt((()=>V(e))),n=lodash.isError(t)?String(e):String(t);super(`There is no such speed menu item as ${n}`),this.speed=e,O(this,"formattedSpeed",void 0),this.formattedSpeed=n}})),R=e=>{const{query:t,videoElement:n,videoSpeedChange$:o,getOldActiveVideoSpeed:r,getAvailableSpeedValues:i,getActiveVideoSpeed:s}=e,a=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;const i=t(e);if(null==i)throw new L(e);i.click();const s=t=>{if((t??n.playbackRate)!==e)throw new Error(`failed to set ${V(e)} video speed.`)},a=[m(o.pipe(x(Math.max(0,r||0))))];r>0&&a.push(new Promise(((e,t)=>setTimeout((()=>setTimeout(t,r)))))),await Promise.all(a).then(s).catch(s)},l=async()=>{await a(1)},c=async(e,t)=>{if(lodash.isNil(e)&&(e=!1),"boolean"==typeof e)e||1===n.playbackRate?await a(r()):await l();else{const n=i();switch(t){case $.MIN:await a(n[e]);break;case $.MAX:await a(n[n.length-1+e]);break;case $.CURRENT:default:{const t=n.indexOf(s());if(-1===t)throw new Error("Unexpected Error: The available speed values do not include the active speed value, this should be a bug, please report the issue on github!");await a(n[t+e])}}}},d=async e=>{try{await c(e,$.CURRENT)}catch(e){if(console.warn(e),!(e instanceof L))throw e}};return Object.assign(e,{set:a,force:async e=>{n.playbackRate=e},reset:l,toggle:c,step:d,increase:async()=>{await d(1)},decrease:async()=>{await d(-1)}})},P=()=>k("speed.speedContext"),I=()=>k("speed.buildArguments$",(()=>{return d().pipe((e=e=>e.settings.enabled,t=>{let{subscribe:n,next:o}=t;const r=new Set;return n((t=>{const n=r.size;e(t)?r.add(t):r.delete(t),r.size!==n&&o([...r])})),()=>{r.clear()}}));var e})),D=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash.identity;const[t,n]=P();if(t)return t;let o,s;const[a]=k("lifeCycleComponentLoaded$",(()=>u(unsafeWindow,r.LifeCycleEventTypes.ComponentsLoaded))),[l]=I(),[c]=k("speed.videoChange$",(()=>h(i.videoChange).pipe(w((e=>{let{aid:t,cid:n}=e;return t||n}))))),[g]=k("speed.speedContext$",(()=>d((t=>{let{next:n}=t;return y(c,b(p([]),l),a).subscribe((t=>{let[r,i]=t;const[a]=P();a?.dispose(),s?.("context update");const l=new Promise(((e,t)=>{o=e,s=t}));Promise.all([Promise.all([N.custom.speedContainer(),N.query.video.element()]).then(o),l]).then((e=>{let[,t]=e;return t})).then(j).then(M).then(R).then((e=>Object.assign(e,{videoIdObject:r,speedContext$:g,videoChange$:c}))).then(e(i)).then(n).catch((e=>console.error(e)))}))}))));return g.subscribe(n),m(g)},q=coreApis.utils.log,U=coreApis.pluginApis.hook;function B(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class H{constructor(e,t){this.entryContext=e,this.enabled$=t,B(this,"speedContext",void 0),B(this,"settings",void 0),B(this,"coreApis",void 0),B(this,"metadata",void 0),B(this,"options",void 0),B(this,"getVideoIdObject",void 0),B(this,"getAvailableSpeedValues",void 0),B(this,"getOldActiveVideoSpeed",void 0),B(this,"forceVideoSpeed",void 0),B(this,"getVideoSpeed",void 0),B(this,"setVideoSpeed",void 0),B(this,"resetVideoSpeed",void 0),B(this,"toggleVideoSpeed",void 0),B(this,"increaseVideoSpeed",void 0),B(this,"decreaseVideoSpeed",void 0),lodash.assign(this,e,{options:e.settings.options}),this.migrate?.(),lodash.assign(this,lodash.mapValues(H.contextMap,(e=>async function(){const t=await D(),n=lodash.get(t,e),o=lodash.isFunction(n)?await n(...arguments):n;return o})))}}B(H,"create",void 0),B(H,"contextMap",{getVideoIdObject:"videoIdObject",getAvailableSpeedValues:"getAvailableSpeedValues",getOldActiveVideoSpeed:"getOldActiveVideoSpeed",getVideoSpeed:"videoElement.playbackRate",setVideoSpeed:"set",forceVideoSpeed:"force",resetVideoSpeed:"reset",toggleVideoSpeed:"toggle",increaseVideoSpeed:"increase",decreaseVideoSpeed:"decrease"}),D((e=>t=>{const n=lodash.omit(t,"dispose"),o=e.map((e=>e.getSpeedContextMixin(n)));if(o.length>1){const e=lodash.intersection(...o.map(Object.keys));if(e.length)throw new Error(`In the registered speed component, there is an implementation of getSpeedContextMixin that causes the speed context to be mixed in ambiguous.\nThe repeated key names are ${e.join(", ")}`)}lodash.assign(n,...o);const r=[];return e.forEach((e=>{const t=lodash(e.settings.options).mapValues(((t,n)=>h(l.addComponentListener,`${e.metadata.name}.${n}`).pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))})))).mapKeys(((e,t)=>`${t}$`)).value();r.push(...lodash.values(t)),e.options=new Proxy(e.settings.options,{get:(e,n,o)=>lodash.isSymbol(n)?Reflect.get(e,n,o):!Reflect.has(e,n)&&n.endsWith("$")?t[n]:Reflect.get(e,n,o)}),e.speedContext=n,e.onSpeedContext(n),e.settings.enabled&&lodash(t).entries().forEach((t=>{let[n,o]=t;o.next(e.settings.options[n.slice(0,-1)])}))})),{...n,dispose:()=>{r.forEach((e=>e.complete())),t.dispose()}}})),H.create=function(e){const t=d().pipe((e=>{let t,{subscribe:n,next:o}=e,r=!0;n((e=>{(r||t!==e)&&(r=!1,t=e,o(e))}))}));return{...e,entry:n=>{const o=lodash.attempt((()=>new this(n,t)));if(o instanceof Error)return(0,q.logError)(o),null;const[r]=I();return t.subscribe((()=>{r.next(o)})),t.next(!0),(0,U.getHook)(`speed.component.${e.name}`).after(o),o},reload:()=>t.next(!0),unload:()=>t.next(!1)}};const X={name:"speed.keymap",displayName:"快捷键扩展 - 视频倍速",author:{name:"JLoeve",link:"https://github.com/LonelySteve"},description:"\n\n为操作视频倍速提供快捷键支持：\n\n- 提高倍速\n- 降低倍速\n- 切换倍速\n\n若添加并启用了记忆倍速组件，则还会增加一个快捷键：\n\n- 清除倍速记忆\n  ",setup:e=>{let{addData:t,addHook:o}=e;const r=e=>async t=>{const n=await D();return await e(n),t.showTip(V(n.videoElement.playbackRate),"mdi-fast-forward"),!0};t("keymap.actions",(e=>{Object.assign(e,{videoSpeedIncrease:{displayName:"提高倍速",run:r((e=>{let{increase:t}=e;return t()}))},videoSpeedDecrease:{displayName:"降低倍速",run:r((e=>{let{decrease:t}=e;return t()}))},videoSpeedToggle:{displayName:"切换倍速",run:r((e=>{let{toggle:t}=e;t()}))}})})),t("keymap.presets",(e=>{e.videoSpeedIncrease="shift > 》 arrowUp",e.videoSpeedDecrease="shift < 《 arrowDown",e.videoSpeedToggle="shift ? ？"})),o("speed.component.rememberVideoSpeed",{after:e=>{t("keymap.actions",(t=>{t.videoSpeedForget={displayName:"清除倍速记忆",run:lodash.debounce(r((async()=>{e.settings.enabled?e.options.individualRemember?(e.forgetSpeed(),await e.resetVideoSpeed(),n.Toast.success("已清除当前视频倍速记忆值",e.metadata.displayName,3e3)):n.Toast.error("选项「各视频分别记忆」已禁用，不能清除当前视频倍速记忆值",e.metadata.displayName,5e3):n.Toast.error("组件已禁用，不能清除当前视频倍速记忆值",e.metadata.displayName,5e3)})),200)}})),t("keymap.presets",(e=>{e.videoSpeedForget="shift : ："}))}})},commitHash:"276518e31e164e958ee32f4194e44172e4aeaae7",coreVersion:"2.8.1"};return t=t.plugin})()));