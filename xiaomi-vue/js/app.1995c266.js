(()=>{var e={208:(e,t,r)=>{const n=r(530);function a(e){return{code:200,msg:"成功",data:e}}function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}n.mock(/api\/addRegUser(\?.*)/,"post",(e=>{console.log("addRegUser",e);let t=JSON.parse(e.body);return{code:200,msg:"添加成功",data:t}})),n.mock(/api\/getHeaderDetail(\?.*)/,"get",(e=>{const t={href:"#",name:"小米手机红米手机",price:"1888元",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4846501f1e9be04d6d2e859deb0d80e.png?thumb=1&w=160&h=110&f=webp&q=90"};return a(new Array(6).fill(t))})),n.mock(/api\/getSixbox(\?.*)/,"get",(e=>{let t=[{src:"https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281411_fc68b941c011a8bbf67db570d0985d7a.png?thumb=1&w=200&h=200&f=webp&q=90",name:"小米电视S系列",description:"144HZ超高刷 3+32G 多色温色彩还原技术",price:"1999元",noPrice:"2999元"}];return t=new Array(8).fill(t[0]),a(t)})),n.mock(/api\/getFourthImg(\?.*)/,"get",(e=>a([{href:"#",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b67117bc92924fb2ff0e7ad2be86084.png?w=632&h=340"},{href:"#",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8dede2520f8dfff9c9b690af498cafe8.jpg?w=632&h=340"},{href:"#",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ac77590368ff636d0b4f6a988133f55.png?w=632&h=340"}]))),n.mock(/api\/getIconFourth(\?.*)/,"get",(e=>a([{href:"#",name:"保障服务",class:"i-clock"},{href:"#",name:"企业团购",class:"i-building"},{href:"#",name:"F码通道",class:"i-F"},{href:"#",name:"米粉卡",class:"i-sim"},{href:"#",name:"以旧换新",class:"i-chongzhi"},{href:"#",name:"话费充值",class:"i-paid"}]))),n.mock(/api\/getCarouselImg(\?.*)/,"get",(e=>{const t="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34bf4e726f493dc212757b6c3436cf7d.png?w=2452&h=920",r="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/397f2569b126d8fba446b6bbf57ef771.jpg?thumb=1&w=1226&h=460&f=webp&q=90",n="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01a422c2d04a7668e6d1d4748aeadf61.jpg?thumb=1&w=1226&h=460&f=webp&q=90",i="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69d476acc0af86cce9521b97ea29214f.jpg?thumb=1&w=1226&h=460&f=webp&q=90";return a([{href:"javascript:void(0)",src:t},{href:"javascript:void(0)",src:r},{href:"javascript:void(0)",src:n},{href:"javascript:void(0)",src:i}])})),n.mock(/api\/getMenuPageBoxProxy(\?.*)/,"get",(e=>{const t={href:"#",name:"小米智能电视",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c2e3fdbf6fe7a13c06644f16c8dc8877.png?thumb=1&w=40&h=40&f=webp&q=90"};return a(new Array(i(1,24)).fill(t))})),n.mock(/api\/getMenuLi(\?.*)/,"get",(e=>a([{pick:"mobile",name:"手机"},{pick:"tv",name:"电视"},{pick:"appliances",name:"家电"},{pick:"desktop",name:"笔记本 平板"},{pick:"outdoor",name:"出行 穿戴"},{pick:"player",name:"耳机 音响"},{pick:"health",name:"健康 儿童"},{pick:"life",name:"生活 箱包"},{pick:"wifi",name:"智能 路由器"},{pick:"power",name:"电源 配件"}])))},409:(e,t,r)=>{"use strict";var n=r(402),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[];const o={created(){this.$router.push("/")}},c=o;var s=r(378),d=(0,s.A)(c,a,i,!1,null,null,null);const l=d.exports;n.A.config.silent=!1,n.A.config.devtools=!0,n.A.config.productionTip=!1,n.A.config.performance=!0;var f=r(821);n.A.use(f.Ay);const p=[{path:"/",component:()=>Promise.all([r.e(569),r.e(816),r.e(478)]).then(r.bind(r,478)),hidden:!0,meta:{keepAlive:!0}},{path:"/login",component:()=>Promise.all([r.e(569),r.e(320)]).then(r.bind(r,320)),hidden:!0},{path:"/register",component:()=>Promise.all([r.e(569),r.e(816),r.e(511)]).then(r.bind(r,511)),hidden:!0}];let m={scrollBehavior:()=>({y:0}),routes:p};const u=new f.Ay(m),h=u;({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.lwrong.com/github/",BASE_URL:""}).VUE_APP_MOCK&&r(208);new n.A({router:h,render:e=>e(l)}).$mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,a,i]=e[l],c=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,i<o&&(o=i));if(c){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,a,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{320:"9f16cb6f",478:"daf784cf",511:"c2572611",569:"24b52790",816:"11a1c7a2"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{320:"7e3fc936",478:"20eda12d",511:"a0a2761e"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vue-learn:";r.l=(n,a,i,o)=>{if(e[n])e[n].push(a);else{var c,s;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+i),c.src=n),e[n]=[a];var p=(t,r)=>{c.onerror=c.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,a,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",r.nc&&(o.nonce=r.nc);var c=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var n=r&&r.type,c=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=n,s.request=c,o.parentNode&&o.parentNode.removeChild(o),i(s)}};return o.onerror=o.onload=c,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){a=o[n],i=a.getAttribute("data-href");if(i===e||i===t)return a}},n=n=>new Promise(((a,i)=>{var o=r.miniCssF(n),c=r.p+o;if(t(o,c))return a();e(n,c,null,a,i)})),a={524:0};r.f.miniCss=(e,t)=>{var r={320:1,478:1,511:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={524:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=i);var o=r.p+r.u(t),c=new Error,s=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,a[1](c)}};r.l(o,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[o,c,s]=n,d=0;if(o.some((t=>0!==e[t]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var l=s(r)}for(t&&t(n);d<o.length;d++)i=o[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},n=self["webpackChunkvue_learn"]=self["webpackChunkvue_learn"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[504],(()=>r(409)));n=r.O(n)})();
//# sourceMappingURL=app.1995c266.js.map