if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>s(e,o),d={module:{uri:o},exports:t,require:l};i[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/AdminView-53dbbbdf.js",revision:null},{url:"assets/AdminView-db567cca.css",revision:null},{url:"assets/index-416f28a4.css",revision:null},{url:"assets/index-7be3d6e1.js",revision:null},{url:"index.html",revision:"80b975a585dd48e886241960cf7f2078"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"c5611577c6fa70d967f05315912674a2"},{url:"pwa-192x192.png",revision:"8c4a85040bb81e8ce9a86262e2501516"},{url:"pwa-512x512.png",revision:"9ee455bde94e1ddc798a5d2bf224248e"},{url:"manifest.webmanifest",revision:"f20e24a85efffafa7fc7c4cfe6a231da"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
