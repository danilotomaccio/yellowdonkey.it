if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AdminView-09e49438.css",revision:null},{url:"assets/AdminView-d976d3b8.js",revision:null},{url:"assets/AvailabilityView-b4afcfb7.css",revision:null},{url:"assets/AvailabilityView-e5e37e63.js",revision:null},{url:"assets/index-c0895251.js",revision:null},{url:"assets/index-ffe6c039.css",revision:null},{url:"assets/LoginView-41f8948d.css",revision:null},{url:"assets/LoginView-ddf37d57.js",revision:null},{url:"assets/RulesView-76a188d7.js",revision:null},{url:"assets/RulesView-fa63a5c5.css",revision:null},{url:"index.html",revision:"42e623b7e7a81bf0bdfabd2aeb5e1189"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"585145faddc69d68529a9e830a5a8bba"},{url:"pwa-192x192.png",revision:"f5c95e2012dbb1f7075a563b4d787965"},{url:"pwa-512x512.png",revision:"8ef654740475d072816172f5c1a2a03f"},{url:"manifest.webmanifest",revision:"6cee8d2059c06bb51a0e48fecc660ef3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
