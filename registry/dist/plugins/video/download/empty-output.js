!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/empty-output"]=t():e["video/download/empty-output"]=t()}(globalThis,(()=>(()=>{var e,t,o={501:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=501,e.exports=t},532:e=>{"use strict";e.exports='提供一个 "空" 的输出选项, 只想获取下载视频的附带产物 (弹幕, 字幕等) 时可以使用此插件.\n'}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var d=r[e]={exports:{}};return o[e](d,d.exports,n),d.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var d=Object.create(null);n.r(d);var i={};e=e||[null,t({}),t([]),t(t)];for(var p=2&r&&o;"object"==typeof p&&!~e.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,n.d(d,i),d},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var d={};return(()=>{"use strict";n.d(d,{plugin:()=>e});const e={name:"downloadVideo.outputs.empty",displayName:"下载视频 - 空输出",setup:e=>{let{addData:t}=e;t("downloadVideo.outputs",(e=>{e.push({name:"empty",displayName:"空",description:"不输出视频本身, 仅获取下载视频的附带产物.",runAction:async()=>lodash.noop()})}))},commitHash:"3e4fdda5946b4f6298aec12fb17993ea6b5b1781",coreVersion:"2.8.8",description:(()=>{const e=n(501);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,532,17)).then((e=>e.default))}})()}})(),d=d.plugin})()));