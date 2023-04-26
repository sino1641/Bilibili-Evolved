!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/import-series"]=t():e["utils/import-series"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{component:()=>c});const i=coreApis.componentApis.define,a=coreApis.utils,o=coreApis.spinQuery,s=coreApis.observer,n=coreApis.toast,r=async()=>{let e;!function(e){e[e.Collection=0]="Collection",e[e.Series=1]="Series"}(e||(e={}));const t=new URL(window.location.href);let i,s;if(t.pathname.includes("seriesdetail"))s=t.searchParams.get("sid"),i=e.Series;else{if(!t.pathname.includes("collectiondetail"))return;s=t.searchParams.get("sid"),i=e.Collection}const r=t.pathname.split("/")[1],c=(0,a.getCsrf)(),l=await(0,o.select)(".page-head"),d=l.children[1],p=document.createElement("a");p.className="paly-all-btn",p.textContent="一键收藏",p.style.cssText="\n        right: 6rem;\n        display: block;\n        text-align: center;\n        width: 65px;\n  ",l.insertBefore(p,d),p.onclick=async()=>{i===e.Series?await(async(e,t,i)=>{const s=(await fetch(`https://api.bilibili.com/x/series/archives?mid=${t}&series_id=${e}&only_normal=true&sort=desc&pn=1&ps=99999`).then((e=>e.json()))).data.archives,r=await(0,o.sq)((()=>document.getElementsByClassName("item cur")[0].innerHTML),(e=>""!==e));let c=0;for(;;){const e=await fetch("https://api.bilibili.com/x/v3/fav/folder/add",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`title=${r}&csrf=${i}&privacy=0`}).then((e=>e.json()));if(0===e.code){c=e.data.id;break}await(0,a.delay)(2e3)}const l="   过久未动即触发风控，等待一段时间自动继续",d=n.Toast.info(`0 / ${s.length}${l}`,"收藏系列");for(let e=0;e<s.length;e++)for(await(0,a.delay)(500);;){if(0===(await fetch("https://api.bilibili.com/x/v3/fav/resource/deal",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`rid=${s[e].aid}&add_media_ids=${c}&type=2&csrf=${i}`}).then((e=>e.json()))).code){d.message=`${e+1} / ${s.length}${l}`;break}{const e=2e3*Math.random()+2e3;console.log(`请求失败，等待${(e/1e3).toFixed(1)}s后重试`),await(0,a.delay)(e)}}d.duration=1e3,n.Toast.success("完成","收藏系列",2e3)})(s,r,c):await(async(e,t)=>{for(;;){if(0===(await fetch("https://api.bilibili.com/x/v3/fav/season/fav",{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`platform=web&season_id=${e}&csrf=${t}`}).then((e=>e.json()))).code){n.Toast.success("成功","导入合集",2e3);break}await(0,a.delay)(2e3)}})(s,c)}},c=(0,i.defineComponentMetadata)({name:"importSeries",author:{name:"aiden",link:"https://github.com/swhoro"},displayName:"批量导入合集",tags:[componentsTags.utils],entry:()=>{(0,s.urlChange)((()=>{r()}))},description:{"zh-CN":"在合集页面制作一个批量导入按钮，可以新增所有合集内视频至同名收藏夹"},urlInclude:[/^https:\/\/space\.bilibili\.com\//],commitHash:"f64801060d2d83daeba6eebb3462941893da548d",coreVersion:"2.7.1"});return t=t.component})()));