(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Qh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Se={},yi=[],zt=()=>{},Bw=()=>!1,jw=/^on[^a-z]/,Ul=t=>jw.test(t),Yh=t=>t.startsWith("onUpdate:"),Ke=Object.assign,Xh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hw=Object.prototype.hasOwnProperty,ae=(t,e)=>Hw.call(t,e),Q=Array.isArray,vi=t=>$l(t)==="[object Map]",Og=t=>$l(t)==="[object Set]",ee=t=>typeof t=="function",Fe=t=>typeof t=="string",Jh=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Dg=t=>Pe(t)&&ee(t.then)&&ee(t.catch),xg=Object.prototype.toString,$l=t=>xg.call(t),Ww=t=>$l(t).slice(8,-1),Mg=t=>$l(t)==="[object Object]",Zh=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oa=Qh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qw=/-(\w)/g,mn=Bl(t=>t.replace(qw,(e,n)=>n?n.toUpperCase():"")),Kw=/\B([A-Z])/g,Ji=Bl(t=>t.replace(Kw,"-$1").toLowerCase()),jl=Bl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bc=Bl(t=>t?`on${jl(t)}`:""),Jr=(t,e)=>!Object.is(t,e),jc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},zw=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _p;const Du=()=>_p||(_p=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ed(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Fe(s)?Xw(s):ed(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Fe(t))return t;if(Pe(t))return t}}const Gw=/;(?![^(]*\))/g,Qw=/:([^]+)/,Yw=/\/\*[^]*?\*\//g;function Xw(t){const e={};return t.replace(Yw,"").split(Gw).forEach(n=>{if(n){const s=n.split(Qw);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function td(t){let e="";if(Fe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=td(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zw=Qh(Jw);function Lg(t){return!!t||t===""}const LV=t=>Fe(t)?t:t==null?"":Q(t)||Pe(t)&&(t.toString===xg||!ee(t.toString))?JSON.stringify(t,Vg,2):String(t),Vg=(t,e)=>e&&e.__v_isRef?Vg(t,e.value):vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Og(e)?{[`Set(${e.size})`]:[...e.values()]}:Pe(e)&&!Q(e)&&!Mg(e)?String(e):e;let St;class Fg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ug(t){return new Fg(t)}function e0(t,e=St){e&&e.active&&e.effects.push(t)}function $g(){return St}function t0(t){St&&St.cleanups.push(t)}const nd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bg=t=>(t.w&ls)>0,jg=t=>(t.n&ls)>0,n0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ls},s0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Bg(i)&&!jg(i)?i.delete(t):e[n++]=i,i.w&=~ls,i.n&=~ls}e.length=n}},xu=new WeakMap;let br=0,ls=1;const Mu=30;let Bt;const Ds=Symbol(""),Lu=Symbol("");class sd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,e0(this,s)}run(){if(!this.active)return this.fn();let e=Bt,n=ts;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,ts=!0,ls=1<<++br,br<=Mu?n0(this):mp(this),this.fn()}finally{br<=Mu&&s0(this),ls=1<<--br,Bt=this.parent,ts=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(mp(this),this.onStop&&this.onStop(),this.active=!1)}}function mp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ts=!0;const Hg=[];function Zi(){Hg.push(ts),ts=!1}function er(){const t=Hg.pop();ts=t===void 0?!0:t}function Rt(t,e,n){if(ts&&Bt){let s=xu.get(t);s||xu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=nd()),Wg(i)}}function Wg(t,e){let n=!1;br<=Mu?jg(t)||(t.n|=ls,n=!Bg(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function Dn(t,e,n,s,i,r){const o=xu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Zh(n)&&a.push(o.get("length")):(a.push(o.get(Ds)),vi(t)&&a.push(o.get(Lu)));break;case"delete":Q(t)||(a.push(o.get(Ds)),vi(t)&&a.push(o.get(Lu)));break;case"set":vi(t)&&a.push(o.get(Ds));break}if(a.length===1)a[0]&&Vu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vu(nd(l))}}function Vu(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&gp(s);for(const s of n)s.computed||gp(s)}function gp(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const i0=Qh("__proto__,__v_isRef,__isVue"),qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jh)),r0=id(),o0=id(!1,!0),a0=id(!0),yp=l0();function l0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)Rt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zi();const s=ue(this)[e].apply(this,n);return er(),s}}),t}function c0(t){const e=ue(this);return Rt(e,"has",t),e.hasOwnProperty(t)}function id(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?R0:Yg:e?Qg:Gg).get(s))return s;const o=Q(s);if(!t){if(o&&ae(yp,i))return Reflect.get(yp,i,r);if(i==="hasOwnProperty")return c0}const a=Reflect.get(s,i,r);return(Jh(i)?qg.has(i):i0(i))||(t||Rt(s,"get",i),e)?a:tt(a)?o&&Zh(i)?a:a.value:Pe(a)?t?Jg(a):Wl(a):a}}const u0=Kg(),h0=Kg(!0);function Kg(t=!1){return function(n,s,i,r){let o=n[s];if(Ni(o)&&tt(o)&&!tt(i))return!1;if(!t&&(!za(i)&&!Ni(i)&&(o=ue(o),i=ue(i)),!Q(n)&&tt(o)&&!tt(i)))return o.value=i,!0;const a=Q(n)&&Zh(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,r);return n===ue(r)&&(a?Jr(i,o)&&Dn(n,"set",s,i):Dn(n,"add",s,i)),l}}function d0(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Dn(t,"delete",e,void 0),s}function f0(t,e){const n=Reflect.has(t,e);return(!Jh(e)||!qg.has(e))&&Rt(t,"has",e),n}function p0(t){return Rt(t,"iterate",Q(t)?"length":Ds),Reflect.ownKeys(t)}const zg={get:r0,set:u0,deleteProperty:d0,has:f0,ownKeys:p0},_0={get:a0,set(t,e){return!0},deleteProperty(t,e){return!0}},m0=Ke({},zg,{get:o0,set:h0}),rd=t=>t,Hl=t=>Reflect.getPrototypeOf(t);function ca(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&Rt(i,"get",e),Rt(i,"get",r));const{has:o}=Hl(i),a=s?rd:n?cd:Zr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ua(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&Rt(s,"has",t),Rt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ha(t,e=!1){return t=t.__v_raw,!e&&Rt(ue(t),"iterate",Ds),Reflect.get(t,"size",t)}function vp(t){t=ue(t);const e=ue(this);return Hl(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function Ep(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=Hl(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Jr(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Tp(t){const e=ue(this),{has:n,get:s}=Hl(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Dn(e,"delete",t,void 0),r}function Ip(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function da(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),l=e?rd:t?cd:Zr;return!t&&Rt(a,"iterate",Ds),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function fa(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=vi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?rd:e?cd:Zr;return!e&&Rt(r,"iterate",l?Lu:Ds),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:this}}function g0(){const t={get(r){return ca(this,r)},get size(){return ha(this)},has:ua,add:vp,set:Ep,delete:Tp,clear:Ip,forEach:da(!1,!1)},e={get(r){return ca(this,r,!1,!0)},get size(){return ha(this)},has:ua,add:vp,set:Ep,delete:Tp,clear:Ip,forEach:da(!1,!0)},n={get(r){return ca(this,r,!0)},get size(){return ha(this,!0)},has(r){return ua.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:da(!0,!1)},s={get(r){return ca(this,r,!0,!0)},get size(){return ha(this,!0)},has(r){return ua.call(this,r,!0)},add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=fa(r,!1,!1),n[r]=fa(r,!0,!1),e[r]=fa(r,!1,!0),s[r]=fa(r,!0,!0)}),[t,n,e,s]}const[y0,v0,E0,T0]=g0();function od(t,e){const n=e?t?T0:E0:t?v0:y0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,r)}const I0={get:od(!1,!1)},w0={get:od(!1,!0)},A0={get:od(!0,!1)},Gg=new WeakMap,Qg=new WeakMap,Yg=new WeakMap,R0=new WeakMap;function C0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S0(t){return t.__v_skip||!Object.isExtensible(t)?0:C0(Ww(t))}function Wl(t){return Ni(t)?t:ad(t,!1,zg,I0,Gg)}function Xg(t){return ad(t,!1,m0,w0,Qg)}function Jg(t){return ad(t,!0,_0,A0,Yg)}function ad(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=S0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ei(t){return Ni(t)?Ei(t.__v_raw):!!(t&&t.__v_isReactive)}function Ni(t){return!!(t&&t.__v_isReadonly)}function za(t){return!!(t&&t.__v_isShallow)}function Zg(t){return Ei(t)||Ni(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ld(t){return Ka(t,"__v_skip",!0),t}const Zr=t=>Pe(t)?Wl(t):t,cd=t=>Pe(t)?Jg(t):t;function ey(t){ts&&Bt&&(t=ue(t),Wg(t.dep||(t.dep=nd())))}function ty(t,e){t=ue(t);const n=t.dep;n&&Vu(n)}function tt(t){return!!(t&&t.__v_isRef===!0)}function Nn(t){return sy(t,!1)}function ny(t){return sy(t,!0)}function sy(t,e){return tt(t)?t:new b0(t,e)}class b0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Zr(e)}get value(){return ey(this),this._value}set value(e){const n=this.__v_isShallow||za(e)||Ni(e);e=n?e:ue(e),Jr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zr(e),ty(this))}}function Je(t){return tt(t)?t.value:t}const P0={get:(t,e,n)=>Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return tt(i)&&!tt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function iy(t){return Ei(t)?t:new Proxy(t,P0)}class k0{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new sd(e,()=>{this._dirty||(this._dirty=!0,ty(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return ey(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function N0(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=zt):(s=t.get,i=t.set),new k0(s,i,r||!i,n)}function ns(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ql(r,e,n)}return i}function Gt(t,e,n,s){if(ee(t)){const r=ns(t,e,n,s);return r&&Dg(r)&&r.catch(o=>{ql(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Gt(t[r],e,n,s));return i}function ql(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ns(l,null,10,[t,o,a]);return}}O0(t,n,i,s)}function O0(t,e,n,s=!0){console.error(t)}let eo=!1,Fu=!1;const lt=[];let on=0;const Ti=[];let Cn=null,Rs=0;const ry=Promise.resolve();let ud=null;function oy(t){const e=ud||ry;return t?e.then(this?t.bind(this):t):e}function D0(t){let e=on+1,n=lt.length;for(;e<n;){const s=e+n>>>1;to(lt[s])<t?e=s+1:n=s}return e}function hd(t){(!lt.length||!lt.includes(t,eo&&t.allowRecurse?on+1:on))&&(t.id==null?lt.push(t):lt.splice(D0(t.id),0,t),ay())}function ay(){!eo&&!Fu&&(Fu=!0,ud=ry.then(cy))}function x0(t){const e=lt.indexOf(t);e>on&&lt.splice(e,1)}function M0(t){Q(t)?Ti.push(...t):(!Cn||!Cn.includes(t,t.allowRecurse?Rs+1:Rs))&&Ti.push(t),ay()}function wp(t,e=eo?on+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function ly(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,Cn){Cn.push(...e);return}for(Cn=e,Cn.sort((n,s)=>to(n)-to(s)),Rs=0;Rs<Cn.length;Rs++)Cn[Rs]();Cn=null,Rs=0}}const to=t=>t.id==null?1/0:t.id,L0=(t,e)=>{const n=to(t)-to(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cy(t){Fu=!1,eo=!0,lt.sort(L0);const e=zt;try{for(on=0;on<lt.length;on++){const n=lt[on];n&&n.active!==!1&&ns(n,null,14)}}finally{on=0,lt.length=0,ly(),eo=!1,ud=null,(lt.length||Ti.length)&&cy()}}function V0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Se;d&&(i=n.map(f=>Fe(f)?f.trim():f)),h&&(i=n.map(zw))}let a,l=s[a=Bc(e)]||s[a=Bc(mn(e))];!l&&r&&(l=s[a=Bc(Ji(e))]),l&&Gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(c,t,6,i)}}function uy(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=uy(c,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(Q(r)?r.forEach(l=>o[l]=null):Ke(o,r),Pe(t)&&s.set(t,o),o)}function Kl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Ji(e))||ae(t,e))}let ut=null,zl=null;function Ga(t){const e=ut;return ut=t,zl=t&&t.type.__scopeId||null,e}function dd(t){zl=t}function fd(){zl=null}function Gn(t,e=ut,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&xp(-1);const r=Ga(e);let o;try{o=t(...i)}finally{Ga(r),s._d&&xp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Hc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,I;const b=Ga(t);try{if(n.shapeFlag&4){const R=i||s;v=rn(u.call(R,R,h,r,f,d,m)),I=l}else{const R=e;v=rn(R.length>1?R(r,{attrs:l,slots:a,emit:c}):R(r,null)),I=e.props?l:F0(l)}}catch(R){Fr.length=0,ql(R,t,1),v=Me(cs)}let k=v;if(I&&y!==!1){const R=Object.keys(I),{shapeFlag:Y}=k;R.length&&Y&7&&(o&&R.some(Yh)&&(I=U0(I,o)),k=Oi(k,I))}return n.dirs&&(k=Oi(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),v=k,Ga(b),v}const F0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},U0=(t,e)=>{const n={};for(const s in t)(!Yh(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function $0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ap(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Kl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ap(s,o,c):!0:!!o;return!1}function Ap(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Kl(n,r))return!0}return!1}function B0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const j0=t=>t.__isSuspense;function H0(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):M0(t)}const pa={};function Ii(t,e,n){return hy(t,e,n)}function hy(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Se){var a;const l=$g()===((a=We)==null?void 0:a.scope)?We:null;let c,u=!1,h=!1;if(tt(t)?(c=()=>t.value,u=za(t)):Ei(t)?(c=()=>t,s=!0):Q(t)?(h=!0,u=t.some(R=>Ei(R)||za(R)),c=()=>t.map(R=>{if(tt(R))return R.value;if(Ei(R))return fi(R);if(ee(R))return ns(R,l,2)})):ee(t)?e?c=()=>ns(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),Gt(t,l,3,[f])}:c=zt,e&&s){const R=c;c=()=>fi(R())}let d,f=R=>{d=b.onStop=()=>{ns(R,l,4)}},m;if(io)if(f=zt,e?n&&Gt(e,l,3,[c(),h?[]:void 0,f]):c(),i==="sync"){const R=LA();m=R.__watcherHandles||(R.__watcherHandles=[])}else return zt;let y=h?new Array(t.length).fill(pa):pa;const v=()=>{if(b.active)if(e){const R=b.run();(s||u||(h?R.some((Y,z)=>Jr(Y,y[z])):Jr(R,y)))&&(d&&d(),Gt(e,l,3,[R,y===pa?void 0:h&&y[0]===pa?[]:y,f]),y=R)}else b.run()};v.allowRecurse=!!e;let I;i==="sync"?I=v:i==="post"?I=()=>At(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),I=()=>hd(v));const b=new sd(c,I);e?n?v():y=b.run():i==="post"?At(b.run.bind(b),l&&l.suspense):b.run();const k=()=>{b.stop(),l&&l.scope&&Xh(l.scope.effects,b)};return m&&m.push(k),k}function W0(t,e,n){const s=this.proxy,i=Fe(t)?t.includes(".")?dy(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=We;Di(this);const a=hy(i,r.bind(s),n);return o?Di(o):xs(),a}function dy(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fi(t,e){if(!Pe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))fi(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)fi(t[n],e);else if(Og(t)||vi(t))t.forEach(n=>{fi(n,e)});else if(Mg(t))for(const n in t)fi(t[n],e);return t}function Es(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Zi(),Gt(l,n,8,[t.el,a,t,e]),er())}}function tr(t,e){return ee(t)?(()=>Ke({name:t.name},e,{setup:t}))():t}const Lr=t=>!!t.type.__asyncLoader,fy=t=>t.type.__isKeepAlive;function q0(t,e){py(t,"a",e)}function K0(t,e){py(t,"da",e)}function py(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)fy(i.parent.vnode)&&z0(s,e,n,i),i=i.parent}}function z0(t,e,n,s){const i=Gl(e,t,s,!0);_y(()=>{Xh(s[e],i)},n)}function Gl(t,e,n=We,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zi(),Di(n);const a=Gt(e,n,t,o);return xs(),er(),a});return s?i.unshift(r):i.push(r),r}}const Un=t=>(e,n=We)=>(!io||t==="sp")&&Gl(t,(...s)=>e(...s),n),G0=Un("bm"),Q0=Un("m"),Y0=Un("bu"),X0=Un("u"),J0=Un("bum"),_y=Un("um"),my=Un("sp"),Z0=Un("rtg"),eA=Un("rtc");function tA(t,e=We){Gl("ec",t,e)}const gy="components";function yy(t,e){return sA(gy,t,!0,e)||t}const nA=Symbol.for("v-ndc");function sA(t,e,n=!0,s=!1){const i=ut||We;if(i){const r=i.type;if(t===gy){const a=DA(r,!1);if(a&&(a===e||a===mn(e)||a===jl(mn(e))))return r}const o=Rp(i[t]||r[t],e)||Rp(i.appContext[t],e);return!o&&s?r:o}}function Rp(t,e){return t&&(t[e]||t[mn(e)]||t[jl(mn(e))])}function VV(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||Fe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function iA(t,e,n={},s,i){if(ut.isCE||ut.parent&&Lr(ut.parent)&&ut.parent.isCE)return e!=="default"&&(n.name=e),Me("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),ss();const o=r&&vy(r(n)),a=so($t,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function vy(t){return t.some(e=>Xa(e)?!(e.type===cs||e.type===$t&&!vy(e.children)):!0)?t:null}const Uu=t=>t?Ny(t)?vd(t)||t.proxy:Uu(t.parent):null,Vr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uu(t.parent),$root:t=>Uu(t.root),$emit:t=>t.emit,$options:t=>pd(t),$forceUpdate:t=>t.f||(t.f=()=>hd(t.update)),$nextTick:t=>t.n||(t.n=oy.bind(t.proxy)),$watch:t=>W0.bind(t)}),Wc=(t,e)=>t!==Se&&!t.__isScriptSetup&&ae(t,e),rA={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Wc(s,e))return o[e]=1,s[e];if(i!==Se&&ae(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ae(c,e))return o[e]=3,r[e];if(n!==Se&&ae(n,e))return o[e]=4,n[e];$u&&(o[e]=0)}}const u=Vr[e];let h,d;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ae(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Wc(i,e)?(i[e]=n,!0):s!==Se&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&ae(t,o)||Wc(e,o)||(a=r[0])&&ae(a,o)||ae(s,o)||ae(Vr,o)||ae(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cp(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $u=!0;function oA(t){const e=pd(t),n=t.proxy,s=t.ctx;$u=!1,e.beforeCreate&&Sp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:I,beforeUnmount:b,destroyed:k,unmounted:R,render:Y,renderTracked:z,renderTriggered:ve,errorCaptured:Ie,serverPrefetch:It,expose:Ye,inheritAttrs:Bn,components:vs,directives:en,filters:mr}=e;if(c&&aA(c,s,null),o)for(const Ee in o){const he=o[Ee];ee(he)&&(s[Ee]=he.bind(n))}if(i){const Ee=i.call(n,n);Pe(Ee)&&(t.data=Wl(Ee))}if($u=!0,r)for(const Ee in r){const he=r[Ee],An=ee(he)?he.bind(n,n):ee(he.get)?he.get.bind(n,n):zt,jn=!ee(he)&&ee(he.set)?he.set.bind(n):zt,tn=jt({get:An,set:jn});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>tn.value,set:wt=>tn.value=wt})}if(a)for(const Ee in a)Ey(a[Ee],s,n,Ee);if(l){const Ee=ee(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(he=>{Da(he,Ee[he])})}u&&Sp(u,t,"c");function Ue(Ee,he){Q(he)?he.forEach(An=>Ee(An.bind(n))):he&&Ee(he.bind(n))}if(Ue(G0,h),Ue(Q0,d),Ue(Y0,f),Ue(X0,m),Ue(q0,y),Ue(K0,v),Ue(tA,Ie),Ue(eA,z),Ue(Z0,ve),Ue(J0,b),Ue(_y,R),Ue(my,It),Q(Ye))if(Ye.length){const Ee=t.exposed||(t.exposed={});Ye.forEach(he=>{Object.defineProperty(Ee,he,{get:()=>n[he],set:An=>n[he]=An})})}else t.exposed||(t.exposed={});Y&&t.render===zt&&(t.render=Y),Bn!=null&&(t.inheritAttrs=Bn),vs&&(t.components=vs),en&&(t.directives=en)}function aA(t,e,n=zt){Q(t)&&(t=Bu(t));for(const s in t){const i=t[s];let r;Pe(i)?"default"in i?r=kt(i.from||s,i.default,!0):r=kt(i.from||s):r=kt(i),tt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Sp(t,e,n){Gt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ey(t,e,n,s){const i=s.includes(".")?dy(n,s):()=>n[s];if(Fe(t)){const r=e[t];ee(r)&&Ii(i,r)}else if(ee(t))Ii(i,t.bind(n));else if(Pe(t))if(Q(t))t.forEach(r=>Ey(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&Ii(i,r,t)}}function pd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Qa(l,c,o,!0)),Qa(l,e,o)),Pe(e)&&r.set(e,l),l}function Qa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Qa(t,r,n,!0),i&&i.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=lA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lA={data:bp,props:Pp,emits:Pp,methods:Pr,computed:Pr,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Pr,directives:Pr,watch:uA,provide:bp,inject:cA};function bp(t,e){return e?t?function(){return Ke(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function cA(t,e){return Pr(Bu(t),Bu(e))}function Bu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Pr(t,e){return t?Ke(Object.create(null),t,e):e}function Pp(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Ke(Object.create(null),Cp(t),Cp(e??{})):e}function uA(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=yt(t[s],e[s]);return n}function Ty(){return{app:null,config:{isNativeTag:Bw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hA=0;function dA(t,e){return function(s,i=null){ee(s)||(s=Ke({},s)),i!=null&&!Pe(i)&&(i=null);const r=Ty(),o=new Set;let a=!1;const l=r.app={_uid:hA++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:VA,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Me(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,vd(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ya=l;try{return c()}finally{Ya=null}}};return l}}let Ya=null;function Da(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=We||ut;if(s||Ya){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ya._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function fA(t,e,n,s=!1){const i={},r={};Ka(r,Yl,1),t.propsDefaults=Object.create(null),Iy(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Xg(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function pA(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Kl(t.emitsOptions,d))continue;const f=e[d];if(l)if(ae(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=mn(d);i[m]=ju(l,a,m,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Iy(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Ji(h))===h||!ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ju(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ae(e,h))&&(delete r[h],c=!0)}c&&Dn(t,"set","$attrs")}function Iy(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oa(l))continue;const c=e[l];let u;i&&ae(i,u=mn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Kl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ue(n),c=a||Se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ju(i,l,h,c[h],t,!ae(c,h))}}return o}function ju(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Di(i),s=c[n]=l.call(null,e),xs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ji(n))&&(s=!0))}return s}function wy(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[d,f]=wy(h,e,!0);Ke(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,yi),yi;if(Q(r))for(let u=0;u<r.length;u++){const h=mn(r[u]);kp(h)&&(o[h]=Se)}else if(r)for(const u in r){const h=mn(u);if(kp(h)){const d=r[u],f=o[h]=Q(d)||ee(d)?{type:d}:Ke({},d);if(f){const m=Dp(Boolean,f.type),y=Dp(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||ae(f,"default"))&&a.push(h)}}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function kp(t){return t[0]!=="$"}function Np(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Op(t,e){return Np(t)===Np(e)}function Dp(t,e){return Q(e)?e.findIndex(n=>Op(n,t)):ee(e)&&Op(e,t)?0:-1}const Ay=t=>t[0]==="_"||t==="$stable",_d=t=>Q(t)?t.map(rn):[rn(t)],_A=(t,e,n)=>{if(e._n)return e;const s=Gn((...i)=>_d(e(...i)),n);return s._c=!1,s},Ry=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ay(i))continue;const r=t[i];if(ee(r))e[i]=_A(i,r,s);else if(r!=null){const o=_d(r);e[i]=()=>o}}},Cy=(t,e)=>{const n=_d(e);t.slots.default=()=>n},mA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Ka(e,"_",n)):Ry(e,t.slots={})}else t.slots={},e&&Cy(t,e);Ka(t.slots,Yl,1)},gA=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ke(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Ry(e,i)),o=e}else e&&(Cy(t,e),o={default:1});if(r)for(const a in i)!Ay(a)&&!(a in o)&&delete i[a]};function Hu(t,e,n,s,i=!1){if(Q(t)){t.forEach((d,f)=>Hu(d,e&&(Q(e)?e[f]:e),n,s,i));return}if(Lr(s)&&!i)return;const r=s.shapeFlag&4?vd(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,ae(h,c)&&(h[c]=null)):tt(c)&&(c.value=null)),ee(l))ns(l,a,12,[o,u]);else{const d=Fe(l),f=tt(l);if(d||f){const m=()=>{if(t.f){const y=d?ae(h,l)?h[l]:u[l]:l.value;i?Q(y)&&Xh(y,r):Q(y)?y.includes(r)||y.push(r):d?(u[l]=[r],ae(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ae(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,At(m,n)):m()}}}const At=H0;function yA(t){return vA(t)}function vA(t,e){const n=Du();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=zt,insertStaticContent:m}=t,y=(p,_,g,E=null,w=null,C=null,L=!1,N=null,O=!!_.dynamicChildren)=>{if(p===_)return;p&&!yr(p,_)&&(E=T(p),wt(p,w,C,!0),p=null),_.patchFlag===-2&&(O=!1,_.dynamicChildren=null);const{type:S,ref:j,shapeFlag:U}=_;switch(S){case Ql:v(p,_,g,E);break;case cs:I(p,_,g,E);break;case qc:p==null&&b(_,g,E,L);break;case $t:vs(p,_,g,E,w,C,L,N,O);break;default:U&1?Y(p,_,g,E,w,C,L,N,O):U&6?en(p,_,g,E,w,C,L,N,O):(U&64||U&128)&&S.process(p,_,g,E,w,C,L,N,O,D)}j!=null&&w&&Hu(j,p&&p.ref,C,_||p,!_)},v=(p,_,g,E)=>{if(p==null)s(_.el=a(_.children),g,E);else{const w=_.el=p.el;_.children!==p.children&&c(w,_.children)}},I=(p,_,g,E)=>{p==null?s(_.el=l(_.children||""),g,E):_.el=p.el},b=(p,_,g,E)=>{[p.el,p.anchor]=m(p.children,_,g,E,p.el,p.anchor)},k=({el:p,anchor:_},g,E)=>{let w;for(;p&&p!==_;)w=d(p),s(p,g,E),p=w;s(_,g,E)},R=({el:p,anchor:_})=>{let g;for(;p&&p!==_;)g=d(p),i(p),p=g;i(_)},Y=(p,_,g,E,w,C,L,N,O)=>{L=L||_.type==="svg",p==null?z(_,g,E,w,C,L,N,O):It(p,_,w,C,L,N,O)},z=(p,_,g,E,w,C,L,N)=>{let O,S;const{type:j,props:U,shapeFlag:H,transition:X,dirs:te}=p;if(O=p.el=o(p.type,C,U&&U.is,U),H&8?u(O,p.children):H&16&&Ie(p.children,O,null,E,w,C&&j!=="foreignObject",L,N),te&&Es(p,null,E,"created"),ve(O,p,p.scopeId,L,E),U){for(const ge in U)ge!=="value"&&!Oa(ge)&&r(O,ge,null,U[ge],C,p.children,E,w,st);"value"in U&&r(O,"value",null,U.value),(S=U.onVnodeBeforeMount)&&sn(S,E,p)}te&&Es(p,null,E,"beforeMount");const Te=(!w||w&&!w.pendingBranch)&&X&&!X.persisted;Te&&X.beforeEnter(O),s(O,_,g),((S=U&&U.onVnodeMounted)||Te||te)&&At(()=>{S&&sn(S,E,p),Te&&X.enter(O),te&&Es(p,null,E,"mounted")},w)},ve=(p,_,g,E,w)=>{if(g&&f(p,g),E)for(let C=0;C<E.length;C++)f(p,E[C]);if(w){let C=w.subTree;if(_===C){const L=w.vnode;ve(p,L,L.scopeId,L.slotScopeIds,w.parent)}}},Ie=(p,_,g,E,w,C,L,N,O=0)=>{for(let S=O;S<p.length;S++){const j=p[S]=N?Kn(p[S]):rn(p[S]);y(null,j,_,g,E,w,C,L,N)}},It=(p,_,g,E,w,C,L)=>{const N=_.el=p.el;let{patchFlag:O,dynamicChildren:S,dirs:j}=_;O|=p.patchFlag&16;const U=p.props||Se,H=_.props||Se;let X;g&&Ts(g,!1),(X=H.onVnodeBeforeUpdate)&&sn(X,g,_,p),j&&Es(_,p,g,"beforeUpdate"),g&&Ts(g,!0);const te=w&&_.type!=="foreignObject";if(S?Ye(p.dynamicChildren,S,N,g,E,te,C):L||he(p,_,N,null,g,E,te,C,!1),O>0){if(O&16)Bn(N,_,U,H,g,E,w);else if(O&2&&U.class!==H.class&&r(N,"class",null,H.class,w),O&4&&r(N,"style",U.style,H.style,w),O&8){const Te=_.dynamicProps;for(let ge=0;ge<Te.length;ge++){const Oe=Te[ge],Ut=U[Oe],ri=H[Oe];(ri!==Ut||Oe==="value")&&r(N,Oe,Ut,ri,w,p.children,g,E,st)}}O&1&&p.children!==_.children&&u(N,_.children)}else!L&&S==null&&Bn(N,_,U,H,g,E,w);((X=H.onVnodeUpdated)||j)&&At(()=>{X&&sn(X,g,_,p),j&&Es(_,p,g,"updated")},E)},Ye=(p,_,g,E,w,C,L)=>{for(let N=0;N<_.length;N++){const O=p[N],S=_[N],j=O.el&&(O.type===$t||!yr(O,S)||O.shapeFlag&70)?h(O.el):g;y(O,S,j,null,E,w,C,L,!0)}},Bn=(p,_,g,E,w,C,L)=>{if(g!==E){if(g!==Se)for(const N in g)!Oa(N)&&!(N in E)&&r(p,N,g[N],null,L,_.children,w,C,st);for(const N in E){if(Oa(N))continue;const O=E[N],S=g[N];O!==S&&N!=="value"&&r(p,N,S,O,L,_.children,w,C,st)}"value"in E&&r(p,"value",g.value,E.value)}},vs=(p,_,g,E,w,C,L,N,O)=>{const S=_.el=p?p.el:a(""),j=_.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:H,slotScopeIds:X}=_;X&&(N=N?N.concat(X):X),p==null?(s(S,g,E),s(j,g,E),Ie(_.children,g,j,w,C,L,N,O)):U>0&&U&64&&H&&p.dynamicChildren?(Ye(p.dynamicChildren,H,g,w,C,L,N),(_.key!=null||w&&_===w.subTree)&&Sy(p,_,!0)):he(p,_,g,j,w,C,L,N,O)},en=(p,_,g,E,w,C,L,N,O)=>{_.slotScopeIds=N,p==null?_.shapeFlag&512?w.ctx.activate(_,g,E,L,O):mr(_,g,E,w,C,L,O):ni(p,_,O)},mr=(p,_,g,E,w,C,L)=>{const N=p.component=bA(p,E,w);if(fy(p)&&(N.ctx.renderer=D),PA(N),N.asyncDep){if(w&&w.registerDep(N,Ue),!p.el){const O=N.subTree=Me(cs);I(null,O,_,g)}return}Ue(N,p,_,g,w,C,L)},ni=(p,_,g)=>{const E=_.component=p.component;if($0(p,_,g))if(E.asyncDep&&!E.asyncResolved){Ee(E,_,g);return}else E.next=_,x0(E.update),E.update();else _.el=p.el,E.vnode=_},Ue=(p,_,g,E,w,C,L)=>{const N=()=>{if(p.isMounted){let{next:j,bu:U,u:H,parent:X,vnode:te}=p,Te=j,ge;Ts(p,!1),j?(j.el=te.el,Ee(p,j,L)):j=te,U&&jc(U),(ge=j.props&&j.props.onVnodeBeforeUpdate)&&sn(ge,X,j,te),Ts(p,!0);const Oe=Hc(p),Ut=p.subTree;p.subTree=Oe,y(Ut,Oe,h(Ut.el),T(Ut),p,w,C),j.el=Oe.el,Te===null&&B0(p,Oe.el),H&&At(H,w),(ge=j.props&&j.props.onVnodeUpdated)&&At(()=>sn(ge,X,j,te),w)}else{let j;const{el:U,props:H}=_,{bm:X,m:te,parent:Te}=p,ge=Lr(_);if(Ts(p,!1),X&&jc(X),!ge&&(j=H&&H.onVnodeBeforeMount)&&sn(j,Te,_),Ts(p,!0),U&&de){const Oe=()=>{p.subTree=Hc(p),de(U,p.subTree,p,w,null)};ge?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Oe()):Oe()}else{const Oe=p.subTree=Hc(p);y(null,Oe,g,E,p,w,C),_.el=Oe.el}if(te&&At(te,w),!ge&&(j=H&&H.onVnodeMounted)){const Oe=_;At(()=>sn(j,Te,Oe),w)}(_.shapeFlag&256||Te&&Lr(Te.vnode)&&Te.vnode.shapeFlag&256)&&p.a&&At(p.a,w),p.isMounted=!0,_=g=E=null}},O=p.effect=new sd(N,()=>hd(S),p.scope),S=p.update=()=>O.run();S.id=p.uid,Ts(p,!0),S()},Ee=(p,_,g)=>{_.component=p;const E=p.vnode.props;p.vnode=_,p.next=null,pA(p,_.props,E,g),gA(p,_.children,g),Zi(),wp(),er()},he=(p,_,g,E,w,C,L,N,O=!1)=>{const S=p&&p.children,j=p?p.shapeFlag:0,U=_.children,{patchFlag:H,shapeFlag:X}=_;if(H>0){if(H&128){jn(S,U,g,E,w,C,L,N,O);return}else if(H&256){An(S,U,g,E,w,C,L,N,O);return}}X&8?(j&16&&st(S,w,C),U!==S&&u(g,U)):j&16?X&16?jn(S,U,g,E,w,C,L,N,O):st(S,w,C,!0):(j&8&&u(g,""),X&16&&Ie(U,g,E,w,C,L,N,O))},An=(p,_,g,E,w,C,L,N,O)=>{p=p||yi,_=_||yi;const S=p.length,j=_.length,U=Math.min(S,j);let H;for(H=0;H<U;H++){const X=_[H]=O?Kn(_[H]):rn(_[H]);y(p[H],X,g,null,w,C,L,N,O)}S>j?st(p,w,C,!0,!1,U):Ie(_,g,E,w,C,L,N,O,U)},jn=(p,_,g,E,w,C,L,N,O)=>{let S=0;const j=_.length;let U=p.length-1,H=j-1;for(;S<=U&&S<=H;){const X=p[S],te=_[S]=O?Kn(_[S]):rn(_[S]);if(yr(X,te))y(X,te,g,null,w,C,L,N,O);else break;S++}for(;S<=U&&S<=H;){const X=p[U],te=_[H]=O?Kn(_[H]):rn(_[H]);if(yr(X,te))y(X,te,g,null,w,C,L,N,O);else break;U--,H--}if(S>U){if(S<=H){const X=H+1,te=X<j?_[X].el:E;for(;S<=H;)y(null,_[S]=O?Kn(_[S]):rn(_[S]),g,te,w,C,L,N,O),S++}}else if(S>H)for(;S<=U;)wt(p[S],w,C,!0),S++;else{const X=S,te=S,Te=new Map;for(S=te;S<=H;S++){const Ct=_[S]=O?Kn(_[S]):rn(_[S]);Ct.key!=null&&Te.set(Ct.key,S)}let ge,Oe=0;const Ut=H-te+1;let ri=!1,dp=0;const gr=new Array(Ut);for(S=0;S<Ut;S++)gr[S]=0;for(S=X;S<=U;S++){const Ct=p[S];if(Oe>=Ut){wt(Ct,w,C,!0);continue}let nn;if(Ct.key!=null)nn=Te.get(Ct.key);else for(ge=te;ge<=H;ge++)if(gr[ge-te]===0&&yr(Ct,_[ge])){nn=ge;break}nn===void 0?wt(Ct,w,C,!0):(gr[nn-te]=S+1,nn>=dp?dp=nn:ri=!0,y(Ct,_[nn],g,null,w,C,L,N,O),Oe++)}const fp=ri?EA(gr):yi;for(ge=fp.length-1,S=Ut-1;S>=0;S--){const Ct=te+S,nn=_[Ct],pp=Ct+1<j?_[Ct+1].el:E;gr[S]===0?y(null,nn,g,pp,w,C,L,N,O):ri&&(ge<0||S!==fp[ge]?tn(nn,g,pp,2):ge--)}}},tn=(p,_,g,E,w=null)=>{const{el:C,type:L,transition:N,children:O,shapeFlag:S}=p;if(S&6){tn(p.component.subTree,_,g,E);return}if(S&128){p.suspense.move(_,g,E);return}if(S&64){L.move(p,_,g,D);return}if(L===$t){s(C,_,g);for(let U=0;U<O.length;U++)tn(O[U],_,g,E);s(p.anchor,_,g);return}if(L===qc){k(p,_,g);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(C),s(C,_,g),At(()=>N.enter(C),w);else{const{leave:U,delayLeave:H,afterLeave:X}=N,te=()=>s(C,_,g),Te=()=>{U(C,()=>{te(),X&&X()})};H?H(C,te,Te):Te()}else s(C,_,g)},wt=(p,_,g,E=!1,w=!1)=>{const{type:C,props:L,ref:N,children:O,dynamicChildren:S,shapeFlag:j,patchFlag:U,dirs:H}=p;if(N!=null&&Hu(N,null,g,p,!0),j&256){_.ctx.deactivate(p);return}const X=j&1&&H,te=!Lr(p);let Te;if(te&&(Te=L&&L.onVnodeBeforeUnmount)&&sn(Te,_,p),j&6)la(p.component,g,E);else{if(j&128){p.suspense.unmount(g,E);return}X&&Es(p,null,_,"beforeUnmount"),j&64?p.type.remove(p,_,g,w,D,E):S&&(C!==$t||U>0&&U&64)?st(S,_,g,!1,!0):(C===$t&&U&384||!w&&j&16)&&st(O,_,g),E&&si(p)}(te&&(Te=L&&L.onVnodeUnmounted)||X)&&At(()=>{Te&&sn(Te,_,p),X&&Es(p,null,_,"unmounted")},g)},si=p=>{const{type:_,el:g,anchor:E,transition:w}=p;if(_===$t){ii(g,E);return}if(_===qc){R(p);return}const C=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:L,delayLeave:N}=w,O=()=>L(g,C);N?N(p.el,C,O):O()}else C()},ii=(p,_)=>{let g;for(;p!==_;)g=d(p),i(p),p=g;i(_)},la=(p,_,g)=>{const{bum:E,scope:w,update:C,subTree:L,um:N}=p;E&&jc(E),w.stop(),C&&(C.active=!1,wt(L,p,_,g)),N&&At(N,_),At(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},st=(p,_,g,E=!1,w=!1,C=0)=>{for(let L=C;L<p.length;L++)wt(p[L],_,g,E,w)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),V=(p,_,g)=>{p==null?_._vnode&&wt(_._vnode,null,null,!0):y(_._vnode||null,p,_,null,null,null,g),wp(),ly(),_._vnode=p},D={p:y,um:wt,m:tn,r:si,mt:mr,mc:Ie,pc:he,pbc:Ye,n:T,o:t};let B,de;return e&&([B,de]=e(D)),{render:V,hydrate:B,createApp:dA(V,B)}}function Ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sy(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kn(i[r]),a.el=o.el),n||Sy(o,a)),a.type===Ql&&(a.el=o.el)}}function EA(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const TA=t=>t.__isTeleport,$t=Symbol.for("v-fgt"),Ql=Symbol.for("v-txt"),cs=Symbol.for("v-cmt"),qc=Symbol.for("v-stc"),Fr=[];let Wt=null;function ss(t=!1){Fr.push(Wt=t?null:[])}function IA(){Fr.pop(),Wt=Fr[Fr.length-1]||null}let no=1;function xp(t){no+=t}function by(t){return t.dynamicChildren=no>0?Wt||yi:null,IA(),no>0&&Wt&&Wt.push(t),t}function md(t,e,n,s,i,r){return by(Qs(t,e,n,s,i,r,!0))}function so(t,e,n,s,i){return by(Me(t,e,n,s,i,!0))}function Xa(t){return t?t.__v_isVNode===!0:!1}function yr(t,e){return t.type===e.type&&t.key===e.key}const Yl="__vInternal",Py=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||tt(t)||ee(t)?{i:ut,r:t,k:e,f:!!n}:t:null);function Qs(t,e=null,n=null,s=0,i=null,r=t===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Py(e),ref:e&&xa(e),scopeId:zl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ut};return a?(gd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),no>0&&!o&&Wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Wt.push(l),l}const Me=wA;function wA(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===nA)&&(t=cs),Xa(t)){const a=Oi(t,e,!0);return n&&gd(a,n),no>0&&!r&&Wt&&(a.shapeFlag&6?Wt[Wt.indexOf(t)]=a:Wt.push(a)),a.patchFlag|=-2,a}if(xA(t)&&(t=t.__vccOpts),e){e=AA(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=td(a)),Pe(l)&&(Zg(l)&&!Q(l)&&(l=Ke({},l)),e.style=ed(l))}const o=Fe(t)?1:j0(t)?128:TA(t)?64:Pe(t)?4:ee(t)?2:0;return Qs(t,e,n,s,i,o,r,!0)}function AA(t){return t?Zg(t)||Yl in t?Ke({},t):t:null}function Oi(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?RA(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Py(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(xa(e)):[i,xa(e)]:xa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oi(t.ssContent),ssFallback:t.ssFallback&&Oi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ma(t=" ",e=0){return Me(Ql,null,t,e)}function FV(t="",e=!1){return e?(ss(),so(cs,null,t)):Me(cs,null,t)}function rn(t){return t==null||typeof t=="boolean"?Me(cs):Q(t)?Me($t,null,t.slice()):typeof t=="object"?Kn(t):Me(Ql,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oi(t)}function gd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),gd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Yl in e)?e._ctx=ut:i===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),s&64?(n=16,e=[Ma(e)]):n=8);t.children=e,t.shapeFlag|=n}function RA(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=td([e.class,s.class]));else if(i==="style")e.style=ed([e.style,s.style]);else if(Ul(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function sn(t,e,n,s=null){Gt(t,e,7,[n,s])}const CA=Ty();let SA=0;function bA(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||CA,r={uid:SA++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wy(s,i),emitsOptions:uy(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=V0.bind(null,r),t.ce&&t.ce(r),r}let We=null;const ky=()=>We||ut;let yd,oi,Mp="__VUE_INSTANCE_SETTERS__";(oi=Du()[Mp])||(oi=Du()[Mp]=[]),oi.push(t=>We=t),yd=t=>{oi.length>1?oi.forEach(e=>e(t)):oi[0](t)};const Di=t=>{yd(t),t.scope.on()},xs=()=>{We&&We.scope.off(),yd(null)};function Ny(t){return t.vnode.shapeFlag&4}let io=!1;function PA(t,e=!1){io=e;const{props:n,children:s}=t.vnode,i=Ny(t);fA(t,n,i,e),mA(t,s);const r=i?kA(t,e):void 0;return io=!1,r}function kA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ld(new Proxy(t.ctx,rA));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?OA(t):null;Di(t),Zi();const r=ns(s,t,0,[t.props,i]);if(er(),xs(),Dg(r)){if(r.then(xs,xs),e)return r.then(o=>{Lp(t,o,e)}).catch(o=>{ql(o,t,0)});t.asyncDep=r}else Lp(t,r,e)}else Oy(t,e)}function Lp(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=iy(e)),Oy(t,n)}let Vp;function Oy(t,e,n){const s=t.type;if(!t.render){if(!e&&Vp&&!s.render){const i=s.template||pd(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ke(Ke({isCustomElement:r,delimiters:a},o),l);s.render=Vp(i,c)}}t.render=s.render||zt}Di(t),Zi(),oA(t),er(),xs()}function NA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function OA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return NA(t)},slots:t.slots,emit:t.emit,expose:e}}function vd(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(iy(ld(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vr)return Vr[n](t)},has(e,n){return n in e||n in Vr}}))}function DA(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function xA(t){return ee(t)&&"__vccOpts"in t}const jt=(t,e)=>N0(t,e,io);function Dy(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!Q(e)?Xa(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xa(n)&&(n=[n]),Me(t,e,n))}const MA=Symbol.for("v-scx"),LA=()=>kt(MA),VA="3.3.4",FA="http://www.w3.org/2000/svg",Cs=typeof document<"u"?document:null,Fp=Cs&&Cs.createElement("template"),UA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Cs.createElementNS(FA,t):Cs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Cs.createTextNode(t),createComment:t=>Cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fp.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $A(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function BA(t,e,n){const s=t.style,i=Fe(n);if(n&&!i){if(e&&!Fe(e))for(const r in e)n[r]==null&&Wu(s,r,"");for(const r in n)Wu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Up=/\s*!important$/;function Wu(t,e,n){if(Q(n))n.forEach(s=>Wu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jA(t,e);Up.test(n)?t.setProperty(Ji(s),n.replace(Up,""),"important"):t[s]=n}}const $p=["Webkit","Moz","ms"],Kc={};function jA(t,e){const n=Kc[e];if(n)return n;let s=mn(e);if(s!=="filter"&&s in t)return Kc[e]=s;s=jl(s);for(let i=0;i<$p.length;i++){const r=$p[i]+s;if(r in t)return Kc[e]=r}return e}const Bp="http://www.w3.org/1999/xlink";function HA(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bp,e.slice(6,e.length)):t.setAttributeNS(Bp,e,n);else{const r=Zw(e);n==null||r&&!Lg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function WA(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function qA(t,e,n,s){t.addEventListener(e,n,s)}function KA(t,e,n,s){t.removeEventListener(e,n,s)}function zA(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=GA(e);if(s){const c=r[e]=XA(s,i);qA(t,a,c,l)}else o&&(KA(t,a,o,l),r[e]=void 0)}}const jp=/(?:Once|Passive|Capture)$/;function GA(t){let e;if(jp.test(t)){e={};let s;for(;s=t.match(jp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ji(t.slice(2)),e]}let zc=0;const QA=Promise.resolve(),YA=()=>zc||(QA.then(()=>zc=0),zc=Date.now());function XA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Gt(JA(s,n.value),e,5,[s])};return n.value=t,n.attached=YA(),n}function JA(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Hp=/^on[a-z]/,ZA=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?$A(t,s,i):e==="style"?BA(t,n,s):Ul(e)?Yh(e)||zA(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eR(t,e,s,i))?WA(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),HA(t,e,s,i))};function eR(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Hp.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hp.test(e)&&Fe(n)?!1:e in t}const tR=["ctrl","shift","alt","meta"],nR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tR.some(n=>t[`${n}Key`]&&!e.includes(n))},UV=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=nR[e[i]];if(r&&r(n,e))return}return t(n,...s)},sR=Ke({patchProp:ZA},UA);let Wp;function iR(){return Wp||(Wp=yA(sR))}const rR=(...t)=>{const e=iR().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=oR(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function oR(t){return Fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw nr(e)},nr=function(t){return new Error("Firebase Database ("+xy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(My(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new lR;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ly=function(t){const e=My(t);return Xl.encodeByteArray(e,!0)},Ja=function(t){return Ly(t).replace(/\./g,"")},Za=function(t){try{return Xl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){return Vy(void 0,t)}function Vy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uR(n)||(t[n]=Vy(t[n],e[n]));return t}function uR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=()=>hR().__FIREBASE_DEFAULTS__,fR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Za(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return dR()||fR()||pR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fy=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_R=t=>{const e=Fy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Uy=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},$y=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function gR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function By(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yR(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jy(){return xy.NODE_ADMIN===!0}function Hy(){try{return typeof indexedDB=="object"}catch{return!1}}function vR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ER,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?TR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new In(i,a,s)}}function TR(t,e){return t.replace(IR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const IR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=oo(Za(r[0])||""),n=oo(Za(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wR=function(t){const e=Wy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},AR=function(t){const e=Wy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function el(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function tl(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(qp(r)&&qp(o)){if(!tl(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function CR(t,e){const n=new SR(t,e);return n.subscribe.bind(n)}class SR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");bR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Gc),i.error===void 0&&(i.error=Gc),i.complete===void 0&&(i.complete=Gc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}function PR(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,x(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ro;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DR(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:OR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OR(t){return t===ws?void 0:t}function DR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const MR={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},LR=le.INFO,VR={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},FR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=VR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=LR,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const UR=(t,e)=>e.some(n=>t instanceof n);let Kp,zp;function $R(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BR(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qy=new WeakMap,Ku=new WeakMap,Ky=new WeakMap,Qc=new WeakMap,Id=new WeakMap;function jR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(is(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qy.set(n,t)}).catch(()=>{}),Id.set(e,t),e}function HR(t){if(Ku.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ku.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ky.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WR(t){zu=t(zu)}function qR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yc(this),e,...n);return Ky.set(s,e.sort?e.sort():[e]),is(s)}:BR().includes(t)?function(...e){return t.apply(Yc(this),e),is(qy.get(this))}:function(...e){return is(t.apply(Yc(this),e))}}function KR(t){return typeof t=="function"?qR(t):(t instanceof IDBTransaction&&HR(t),UR(t,$R())?new Proxy(t,zu):t)}function is(t){if(t instanceof IDBRequest)return jR(t);if(Qc.has(t))return Qc.get(t);const e=KR(t);return e!==t&&(Qc.set(t,e),Id.set(e,t)),e}const Yc=t=>Id.get(t);function zR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=is(o);return s&&o.addEventListener("upgradeneeded",l=>{s(is(o.result),l.oldVersion,l.newVersion,is(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const GR=["get","getKey","getAll","getAllKeys","count"],QR=["put","add","delete","clear"],Xc=new Map;function Gp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xc.get(e))return Xc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=QR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||GR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xc.set(e,r),r}WR(t=>({...t,get:(e,n,s)=>Gp(e,n)||t.get(e,n,s),has:(e,n)=>!!Gp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function XR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gu="@firebase/app",Qp="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new No("@firebase/app"),JR="@firebase/app-compat",ZR="@firebase/analytics-compat",eC="@firebase/analytics",tC="@firebase/app-check-compat",nC="@firebase/app-check",sC="@firebase/auth",iC="@firebase/auth-compat",rC="@firebase/database",oC="@firebase/database-compat",aC="@firebase/functions",lC="@firebase/functions-compat",cC="@firebase/installations",uC="@firebase/installations-compat",hC="@firebase/messaging",dC="@firebase/messaging-compat",fC="@firebase/performance",pC="@firebase/performance-compat",_C="@firebase/remote-config",mC="@firebase/remote-config-compat",gC="@firebase/storage",yC="@firebase/storage-compat",vC="@firebase/firestore",EC="@firebase/firestore-compat",TC="firebase",IC="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="[DEFAULT]",wC={[Gu]:"fire-core",[JR]:"fire-core-compat",[eC]:"fire-analytics",[ZR]:"fire-analytics-compat",[nC]:"fire-app-check",[tC]:"fire-app-check-compat",[sC]:"fire-auth",[iC]:"fire-auth-compat",[rC]:"fire-rtdb",[oC]:"fire-rtdb-compat",[aC]:"fire-fn",[lC]:"fire-fn-compat",[cC]:"fire-iid",[uC]:"fire-iid-compat",[hC]:"fire-fcm",[dC]:"fire-fcm-compat",[fC]:"fire-perf",[pC]:"fire-perf-compat",[_C]:"fire-rc",[mC]:"fire-rc-compat",[gC]:"fire-gcs",[yC]:"fire-gcs-compat",[vC]:"fire-fst",[EC]:"fire-fst-compat","fire-js":"fire-js",[TC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,Yu=new Map;function AC(t,e){try{t.container.addComponent(e)}catch(n){Fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Yu.has(e))return Fs.debug(`There were multiple attempts to register component ${e}.`),!1;Yu.set(e,t);for(const n of nl.values())AC(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rs=new sr("app","Firebase",RC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=IC;function zy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw rs.create("bad-app-name",{appName:String(i)});if(n||(n=Uy()),!n)throw rs.create("no-options");const r=nl.get(i);if(r){if(tl(n,r.options)&&tl(s,r.config))return r;throw rs.create("duplicate-app",{appName:i})}const o=new xR(i);for(const l of Yu.values())o.addComponent(l);const a=new CC(n,s,o);return nl.set(i,a),a}function Ad(t=Qu){const e=nl.get(t);if(!e&&t===Qu&&Uy())return zy();if(!e)throw rs.create("no-app",{appName:t});return e}function Nt(t,e,n){var s;let i=(s=wC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fs.warn(a.join(" "));return}gn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="firebase-heartbeat-database",bC=1,ao="firebase-heartbeat-store";let Jc=null;function Gy(){return Jc||(Jc=zR(SC,bC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ao)}}}).catch(t=>{throw rs.create("idb-open",{originalErrorMessage:t.message})})),Jc}async function PC(t){try{return await(await Gy()).transaction(ao).objectStore(ao).get(Qy(t))}catch(e){if(e instanceof In)Fs.warn(e.message);else{const n=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fs.warn(n.message)}}}async function Yp(t,e){try{const s=(await Gy()).transaction(ao,"readwrite");await s.objectStore(ao).put(e,Qy(t)),await s.done}catch(n){if(n instanceof In)Fs.warn(n.message);else{const s=rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fs.warn(s.message)}}}function Qy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1024,NC=30*24*60*60*1e3;class OC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=NC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xp(),{heartbeatsToSend:n,unsentEntries:s}=DC(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xp(){return new Date().toISOString().substring(0,10)}function DC(t,e=kC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Jp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hy()?vR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jp(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){gn(new Yt("platform-logger",e=>new YR(e),"PRIVATE")),gn(new Yt("heartbeat",e=>new OC(e),"PRIVATE")),Nt(Gu,Qp,t),Nt(Gu,Qp,"esm2017"),Nt("fire-js","")}MC("");function Rd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Yy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LC=Yy,Xy=new sr("auth","Firebase",Yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new No("@firebase/auth");function VC(t,...e){sl.logLevel<=le.WARN&&sl.warn(`Auth (${_s}): ${t}`,...e)}function La(t,...e){sl.logLevel<=le.ERROR&&sl.error(`Auth (${_s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,...e){throw Cd(t,...e)}function fn(t,...e){return Cd(t,...e)}function Jy(t,e,n){const s=Object.assign(Object.assign({},LC()),{[e]:n});return new sr("auth","Firebase",s).create(e,{appName:t.name})}function FC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&yn(t,"argument-error"),Jy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xy.create(t,...e)}function J(t,e,...n){if(!t)throw Cd(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw La(e),new Error(e)}function xn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UC(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UC()||gR()||"connection"in navigator)?navigator.onLine:!0}function BC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Td()||By()}get(){return $C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new Oo(3e4,6e4);function ev(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Do(t,e,n,s,i={}){return tv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ir(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zy.fetch()(nv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function tv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jC),e);try{const i=new qC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jy(t,u,c);yn(t,u)}}catch(i){if(i instanceof In)throw i;yn(t,"network-request-failed",{message:String(i)})}}async function WC(t,e,n,s,i={}){const r=await Do(t,e,n,s,i);return"mfaPendingCredential"in r&&yn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function nv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`}class qC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),HC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=fn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return Do(t,"POST","/v1/accounts:delete",e)}async function zC(t,e){return Do(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GC(t,e=!1){const n=ze(t),s=await n.getIdToken(e),i=bd(s);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ur(Zc(i.auth_time)),issuedAtTime:Ur(Zc(i.iat)),expirationTime:Ur(Zc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zc(t){return Number(t)*1e3}function bd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return La("JWT malformed, contained fewer than 3 sections"),null;try{const i=Za(n);return i?JSON.parse(i):(La("Failed to decode base64 JWT payload"),null)}catch(i){return La("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function QC(t){const e=bd(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof In&&YC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function YC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t){var e;const n=t.auth,s=await t.getIdToken(),i=await lo(t,zC(n,{idToken:s}));J(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?eS(r.providerUserInfo):[],a=ZC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new sv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JC(t){const e=ze(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function eS(t){return t.map(e=>{var{providerId:n}=e,s=Rd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e){const n=await tv(t,{},async()=>{const s=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=nv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await tS(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new co;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ms{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GC(this,e)}reload(){return JC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lo(this,KC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:R,isAnonymous:Y,providerData:z,stsTokenManager:ve}=n;J(k&&ve,e,"internal-error");const Ie=co.fromJSON(this.name,ve);J(typeof k=="string",e,"internal-error"),Wn(h,e.name),Wn(d,e.name),J(typeof R=="boolean",e,"internal-error"),J(typeof Y=="boolean",e,"internal-error"),Wn(f,e.name),Wn(m,e.name),Wn(y,e.name),Wn(v,e.name),Wn(I,e.name),Wn(b,e.name);const It=new Ms({uid:k,auth:e,email:d,emailVerified:R,displayName:h,isAnonymous:Y,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:Ie,createdAt:I,lastLoginAt:b});return z&&Array.isArray(z)&&(It.providerData=z.map(Ye=>Object.assign({},Ye))),v&&(It._redirectEventId=v),It}static async _fromIdTokenResponse(e,n,s=!1){const i=new co;i.updateFromServerResponse(n);const r=new Ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await il(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function bn(t){xn(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iv.type="NONE";const t_=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Va(this.userKey,i.apiKey,r),this.fullPersistenceKey=Va("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new wi(bn(t_),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||bn(t_);const o=Va(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ms._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new wi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new wi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cv(e))return"Blackberry";if(uv(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||ov(e))&&!e.includes("edge/"))return"Chrome";if(lv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rv(t=mt()){return/firefox\//i.test(t)}function Pd(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ov(t=mt()){return/crios\//i.test(t)}function av(t=mt()){return/iemobile/i.test(t)}function lv(t=mt()){return/android/i.test(t)}function cv(t=mt()){return/blackberry/i.test(t)}function uv(t=mt()){return/webos/i.test(t)}function Zl(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nS(t=mt()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sS(){return yR()&&document.documentMode===10}function hv(t=mt()){return Zl(t)||lv(t)||uv(t)||cv(t)||/windows phone/i.test(t)||av(t)}function iS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e=[]){let n;switch(t){case"Browser":n=n_(mt());break;case"Worker":n=`${n_(mt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${s}`}async function fv(t,e){return Do(t,"GET","/v2/recaptchaConfig",ev(t,e))}function s_(t){return t!==void 0&&t.enterprise!==void 0}class pv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _v(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=fn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rS().appendChild(s)})}function oS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aS="https://www.google.com/recaptcha/enterprise.js?render=",lS="recaptcha-enterprise",cS="NO_RECAPTCHA";class uS{constructor(e){this.type=lS,this.auth=rr(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{fv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new pv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;s_(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(cS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&s_(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_v(aS+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new i_(this),this.idTokenSubscription=new i_(this),this.beforeStateQueue=new hS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}async initializeRecaptchaConfig(){const e=await fv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return ze(t)}class i_{constructor(e){this.auth=e,this.observer=null,this.addObserver=CR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(tl(r,e??{}))return i;yn(i,"already-initialized")}return n.initialize({options:e})}function pS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function _S(t,e,n){const s=rr(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=mv(e),{host:o,port:a}=mS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gS()}function mv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mS(t){const e=mv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:r_(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:r_(o)}}}function r_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return WC(t,"POST","/v1/accounts:signInWithIdp",ev(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="http://localhost";class Us extends gv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Rd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Us(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:yS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ir(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends xo{constructor(){super("facebook.com")}static credential(e){return Us._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Us._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends xo{constructor(){super("github.com")}static credential(e){return Us._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends xo{constructor(){super("twitter.com")}static credential(e,n){return Us._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jn.credential(n,s)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ms._fromIdTokenResponse(e,s,i),o=o_(s);return new Mi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=o_(s);return new Mi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends In{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new rl(e,n,s,i)}}function yv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,r,e,s):r})}async function vS(t,e,n=!1){const s=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await lo(t,yv(s,i,e,t),n);J(r.idToken,s,"internal-error");const o=bd(r.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),Mi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e,n=!1){const s="signIn",i=await yv(t,s,e),r=await Mi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function vv(t,e,n,s){return ze(t).onIdTokenChanged(e,n,s)}function IS(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}const ol="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ol,"1"),this.storage.removeItem(ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){const t=mt();return Pd(t)||Zl(t)}const AS=1e3,RS=10;class Tv extends Ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wS()&&iS(),this.fallbackToPolling=hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);sS()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tv.type="LOCAL";const CS=Tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends Ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iv.type="SESSION";const wv=Iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ec(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await SS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Nd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function PS(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function kS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OS(){return Av()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebaseLocalStorageDb",DS=1,al="firebaseLocalStorage",Cv="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([al],e?"readwrite":"readonly").objectStore(al)}function xS(){const t=indexedDB.deleteDatabase(Rv);return new Mo(t).toPromise()}function Ju(){const t=indexedDB.open(Rv,DS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(al,{keyPath:Cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(al)?e(s):(s.close(),await xS(),e(await Ju()))})})}async function a_(t,e,n){const s=tc(t,!0).put({[Cv]:e,value:n});return new Mo(s).toPromise()}async function MS(t,e){const n=tc(t,!1).get(e),s=await new Mo(n).toPromise();return s===void 0?null:s.value}function l_(t,e){const n=tc(t,!0).delete(e);return new Mo(n).toPromise()}const LS=800,VS=3;class Sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>VS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kS(),!this.activeServiceWorker)return;this.sender=new bS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ju();return await a_(e,ol,"1"),await l_(e,ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>a_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>MS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=tc(i,!1).getAll();return new Mo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sv.type="LOCAL";const FS=Sv;new Oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e){return e?bn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends gv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function US(t){return TS(t.auth,new Od(t),t.bypassAuthState)}function $S(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),ES(n,new Od(t),t.bypassAuthState)}async function BS(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),vS(n,new Od(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return US;case"linkViaPopup":case"linkViaRedirect":return BS;case"reauthViaPopup":case"reauthViaRedirect":return $S;default:yn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Oo(2e3,1e4);async function $V(t,e,n){const s=rr(t);FC(t,e,kd);const i=bv(s,n);return new Ss(s,"signInViaPopup",e,i).executeNotNull()}class Ss extends Pv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jS.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="pendingRedirect",Fa=new Map;class WS extends Pv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const s=await qS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qS(t,e){const n=GS(e),s=zS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function KS(t,e){Fa.set(t._key(),e)}function zS(t){return bn(t._redirectPersistence)}function GS(t){return Va(HS,t.config.apiKey,t.name)}async function BV(t,e){return await rr(t)._initializationPromise,kv(t,e,!1)}async function kv(t,e,n=!1){const s=rr(t),i=bv(s,e),o=await new WS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=10*60*1e3;class YS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Nv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QS&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e={}){return Do(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JS(t);for(const n of e)try{if(nb(n))return}catch{}yn(t,"unauthorized-domain")}function nb(t){const e=Xu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!eb.test(n))return!1;if(ZS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Oo(3e4,6e4);function u_(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ib(t){return new Promise((e,n)=>{var s,i,r;function o(){u_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{u_(),n(fn(t,"network-request-failed"))},timeout:sb.get()})}if(!((i=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pn().gapi)===null||r===void 0)&&r.load)o();else{const a=oS("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},_v(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ua=null,e})}let Ua=null;function rb(t){return Ua=Ua||ib(t),Ua}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new Oo(5e3,15e3),ab="__/auth/iframe",lb="emulator/auth/iframe",cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,lb):`https://${t.config.authDomain}/${ab}`,s={apiKey:e.apiKey,appName:t.name,v:_s},i=ub.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ir(s).slice(1)}`}async function db(t){const e=await rb(t),n=pn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{r(o)},ob.get());function l(){pn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,_b=600,mb="_blank",gb="http://localhost";class h_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yb(t,e,n,s=pb,i=_b){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fb),{width:s.toString(),height:i.toString(),top:r,left:o}),c=mt().toLowerCase();n&&(a=ov(c)?mb:n),rv(c)&&(e=e||gb,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(nS(c)&&a!=="_self")return vb(e||"",a),new h_(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new h_(h)}function vb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="__/auth/handler",Tb="emulator/auth/handler",Ib=encodeURIComponent("fac");async function d_(t,e,n,s,i,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:_s,eventId:i};if(e instanceof kd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof xo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ib}=${encodeURIComponent(l)}`:"";return`${wb(t)}?${ir(a).slice(1)}${c}`}function wb({config:t}){return t.emulator?Sd(t,Tb):`https://${t.authDomain}/${Eb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="webStorageSupport";class Ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wv,this._completeRedirectFn=kv,this._overrideRedirectResult=KS}async _openPopup(e,n,s,i){var r;xn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await d_(e,n,s,Xu(),i);return yb(e,o,Nd())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await d_(e,n,s,Xu(),i);return PS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(xn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await db(e),s=new YS(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eu,{type:eu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[eu];o!==void 0&&n(!!o),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hv()||Pd()||Zl()}}const Rb=Ab;var f_="@firebase/auth",p_="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bb(t){gn(new Yt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dv(t)},c=new dS(s,i,r,l);return pS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gn(new Yt("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(s=>new Cb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(f_,p_,Sb(t)),Nt(f_,p_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=5*60,kb=$y("authIdTokenMaxAge")||Pb;let __=null;const Nb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kb)return;const i=n==null?void 0:n.token;__!==i&&(__=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ov(t=Ad()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fS(t,{popupRedirectResolver:Rb,persistence:[FS,CS,wv]}),s=$y("authTokenSyncURL");if(s){const r=Nb(s);IS(n,r,()=>r(n.currentUser)),vv(n,o=>r(o))}const i=Fy("auth");return i&&_S(n,`http://${i}`),n}bb("Browser");var Ob=!1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new Map,xb={activated:!1,tokenObservers:[]};function Xt(t){return Db.get(t)||Object.assign({},xb)}const m_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ro,await Lb(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ro,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function Lb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ll=new sr("appCheck","AppCheck",Vb);function Dv(t){if(!Xt(t).activated)throw ll.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="firebase-app-check-database",Ub=1,Zu="firebase-app-check-store";let ma=null;function $b(){return ma||(ma=new Promise((t,e)=>{try{const n=indexedDB.open(Fb,Ub);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(ll.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Zu,{keyPath:"compositeKey"})}}}catch(n){e(ll.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),ma)}function Bb(t,e){return jb(Hb(t),e)}async function jb(t,e){const s=(await $b()).transaction(Zu,"readwrite"),r=s.objectStore(Zu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(ll.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Hb(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new No("@firebase/app-check");function g_(t,e){return Hy()?Bb(t,e).catch(n=>{eh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb={error:"UNKNOWN_ERROR"};function qb(t){return Xl.encodeString(JSON.stringify(t),!1)}async function th(t,e=!1){const n=t.app;Dv(n);const s=Xt(n);let i=s.token,r;if(i&&!kr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(kr(l)?i=l:await g_(n,void 0))}if(!e&&i&&kr(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Xt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?eh.warn(l.message):eh.error(l),r=l}let a;return i?r?kr(i)?a={token:i.token,internalError:r}:a=v_(r):(a={token:i.token},s.token=i,await g_(n,i)):a=v_(r),o&&Qb(n,a),a}async function Kb(t){const e=t.app;Dv(e);const{provider:n}=Xt(e);{const{token:s}=await n.getToken();return{token:s}}}function zb(t,e,n,s){const{app:i}=t,r=Xt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&kr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),y_(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>y_(t))}function xv(t,e){const n=Xt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function y_(t){const{app:e}=t,n=Xt(e);let s=n.tokenRefresher;s||(s=Gb(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function Gb(t){const{app:e}=t;return new Mb(async()=>{const n=Xt(e);let s;if(n.token?s=await th(t,!0):s=await th(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Xt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},m_.RETRIAL_MIN_WAIT,m_.RETRIAL_MAX_WAIT)}function Qb(t,e){const n=Xt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function kr(t){return t.expireTimeMillis-Date.now()>0}function v_(t){return{token:qb(Wb),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Xt(this.app);for(const n of e)xv(this.app,n.next);return Promise.resolve()}}function Xb(t,e){return new Yb(t,e)}function Jb(t){return{getToken:e=>th(t,e),getLimitedUseToken:()=>Kb(t),addTokenListener:e=>zb(t,"INTERNAL",e),removeTokenListener:e=>xv(t.app,e)}}const Zb="@firebase/app-check",eP="0.8.0",tP="app-check",E_="app-check-internal";function nP(){gn(new Yt(tP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Xb(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(E_).initialize()})),gn(new Yt(E_,t=>{const e=t.getProvider("app-check").getImmediate();return Jb(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Nt(Zb,eP)}nP();var sP="firebase",iP="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(sP,iP,"app");const Mv=Symbol("firebaseApp");function Lo(t){return ky()&&kt(Mv,null)||Ad(t)}const ln=()=>{},rP=typeof window<"u";function Dd(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function oP(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ys(t){return!!t&&typeof t=="object"}const aP=Object.prototype;function lP(t){return Ys(t)&&Object.getPrototypeOf(t)===aP}function xd(t){return Ys(t)&&t.type==="document"}function cP(t){return Ys(t)&&t.type==="collection"}function uP(t){return xd(t)||cP(t)}function hP(t){return Ys(t)&&t.type==="query"}function dP(t){return Ys(t)&&"ref"in t}function fP(t){return Ys(t)&&typeof t.bucket=="string"}function pP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const _P=Symbol.for("v-scx");function mP(){return!!kt(_P,0)}const ga=new WeakMap;function gP(t,e){if(!ga.has(t)){const n=Ug(!0);ga.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ga.delete(t)}}return ga.get(t)}const Lv=new WeakMap;function Vv(t){return Lv.get(Lo(t))}const ya=new WeakMap;function Fv(t){const e=Lo(t);if(!ya.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{ya.set(e,r),n(r.value)}];ya.set(e,i)}return ya.get(e)}function yP(t){const e=Fv(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function vP(t,e){const n=Ov(e);vv(n,s=>{const i=Fv();t.value=s,Array.isArray(i)&&i[1](t)})}const T_="@firebase/database",I_="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uv="";function EP(t){Uv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new TP(e)}}catch{}return new IP},bs=$v("localStorage"),nh=$v("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new No("@firebase/database"),wP=function(){let t=1;return function(){return t++}}(),Bv=function(t){const e=kR(t),n=new RR;n.update(e);const s=n.digest();return Xl.encodeByteArray(s)},Vo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Vo.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let Ls=null,w_=!0;const AP=function(t,e){x(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ri.logLevel=le.VERBOSE,Ls=Ri.log.bind(Ri),e&&nh.set("logging_enabled",!0)):typeof t=="function"?Ls=t:(Ls=null,nh.remove("logging_enabled"))},ot=function(...t){if(w_===!0&&(w_=!1,Ls===null&&nh.get("logging_enabled")===!0&&AP(!0)),Ls){const e=Vo.apply(null,t);Ls(e)}},Fo=function(t){return function(...e){ot(t,...e)}},sh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Vo(...t);Ri.error(e)},$s=function(...t){const e=`FIREBASE FATAL ERROR: ${Vo(...t)}`;throw Ri.error(e),new Error(e)},Ot=function(...t){const e="FIREBASE WARNING: "+Vo(...t);Ri.warn(e)},RP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jv=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},CP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Bs="[MAX_NAME]",or=function(t,e){if(t===e)return 0;if(t===Li||e===Bs)return-1;if(e===Li||t===Bs)return 1;{const n=A_(t),s=A_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},SP=function(t,e){return t===e?0:t<e?-1:1},vr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},Md=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=et(e[s]),n+=":",n+=Md(t[e[s]]);return n+="}",n},Hv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wv=function(t){x(!jv(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},bP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kP=new RegExp("^-?(0*)\\d{1,10}$"),NP=-2147483648,OP=2147483647,A_=function(t){if(kP.test(t)){const e=Number(t);if(e>=NP&&e<=OP)return e}return null},Uo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},DP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$r=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class ih{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ih.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="5",qv="v",Kv="s",zv="r",Gv="f",Qv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yv="ls",Xv="p",rh="ac",Jv="websocket",Zv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function VP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function eE(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let s;if(e===Jv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VP(t)&&(n.ns=t.namespace);const i=[];return Ft(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.counters_={}}incrementCounter(e,n=1){$n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return cR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu={},nu={};function Vd(t){const e=t.toString();return tu[e]||(tu[e]=new FP),tu[e]}function UP(t,e){const n=t.toString();return nu[n]||(nu[n]=e()),nu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Uo(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="start",BP="close",jP="pLPCommand",HP="pRTLPCB",tE="id",nE="pw",sE="ser",WP="cb",qP="seg",KP="ts",zP="d",GP="dframe",iE=1870,rE=30,QP=iE-rE,YP=25e3,XP=3e4;class pi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(e),this.stats_=Vd(n),this.urlFn=l=>(this.appCheckToken&&(l[rh]=this.appCheckToken),eE(n,Zv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $P(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(XP)),CP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fd((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===R_)this.id=a,this.password=l;else if(o===BP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[R_]="t",s[sE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WP]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qv]=Ld,this.transportSessionId&&(s[Kv]=this.transportSessionId),this.lastSessionId&&(s[Yv]=this.lastSessionId),this.applicationId&&(s[Xv]=this.applicationId),this.appCheckToken&&(s[rh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qv.test(location.hostname)&&(s[zv]=Gv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return pi.forceAllow_?!0:!pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bP()&&!PP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ly(n),i=Hv(s,QP);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[GP]="t",s[tE]=e,s[nE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fd{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wP(),window[jP+this.uniqueCallbackIdentifier]=e,window[HP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fd.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ot("frame writing exception"),a.stack&&ot(a.stack),ot(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tE]=this.myID,e[nE]=this.myPW,e[sE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rE+s.length<=iE;){const o=this.pendingSegs.shift();s=s+"&"+qP+i+"="+o.seg+"&"+KP+i+"="+o.ts+"&"+zP+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(YP)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=16384,ZP=45e3;let cl=null;typeof MozWebSocket<"u"?cl=MozWebSocket:typeof WebSocket<"u"&&(cl=WebSocket);class Ht{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=Vd(n),this.connURL=Ht.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[qv]=Ld,typeof location<"u"&&location.hostname&&Qv.test(location.hostname)&&(o[zv]=Gv),n&&(o[Kv]=n),s&&(o[Yv]=s),i&&(o[rh]=i),r&&(o[Xv]=r),eE(e,Jv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bs.set("previous_websocket_failure",!0);try{let s;jy(),this.mySock=new cl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&cl!==null&&!Ht.forceDisallow_}static previouslyFailed(){return bs.isInMemoryStorage||bs.get("previous_websocket_failure")===!0}markConnectionHealthy(){bs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=oo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hv(n,JP);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ht.responsesRequiredToBeHealthy=2;Ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,Ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ht&&Ht.isAvailable();let s=n&&!Ht.previouslyFailed();if(e.webSocketOnly&&(n||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ht];else{const i=this.transports_=[];for(const r of uo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}uo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=6e4,tk=5e3,nk=10*1024,sk=100*1024,su="t",C_="d",ik="s",S_="r",rk="e",b_="o",P_="a",k_="n",N_="p",ok="h";class ak{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new uo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$r(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(su in e){const n=e[su];n===P_?this.upgradeIfSecondaryHealthy_():n===S_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===b_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vr("t",e),s=vr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:N_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:P_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:k_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vr("t",e),s=vr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vr(su,e);if(C_ in e){const s=e[C_];if(n===ok){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===k_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ik?this.onConnectionShutdown_(s):n===S_?this.onReset_(s):n===rk?sh("Server Error: "+s):n===b_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ld!==s&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),$r(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ek))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$r(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:N_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends aE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Td()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ul}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=32,D_=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ce("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function us(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function lE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function qe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ce(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function Vt(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Vt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hE(t,e){if(us(t)!==us(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(us(t)>us(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ck{constructor(e,n){this.errorPrefix_=n,this.parts_=cE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jl(this.parts_[s]);dE(this)}}function uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),dE(t)}function hk(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function dE(t){if(t.byteLength_>D_)throw new Error(t.errorPrefix_+"has a key path longer than "+D_+" bytes ("+t.byteLength_+").");if(t.parts_.length>O_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O_+") or object contains a cycle "+As(t))}function As(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends aE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ud}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=1e3,dk=60*5*1e3,x_=30*1e3,fk=1.3,pk=3e4,_k="server_kill",M_=3;class On extends oE{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=On.nextPersistentConnectionId_++,this.log_=Fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Er,this.maxReconnectDelay_=dk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!jy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ud.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(et(r)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ro,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;On.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$n(e,"w")){const s=xi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||AR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=x_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sh("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pk&&(this.reconnectDelay_=Er),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+On.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ak(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Ot(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_k)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ot(h),l())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qu(this.interruptReasons_)&&(this.reconnectDelay_=Er,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Md(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=M_&&(this.reconnectDelay_=x_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=M_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uv.replace(/\./g,"-")]=1,Td()?e["framework.cordova"]=1:By()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ul.getInstance().currentlyOnline();return qu(this.interruptReasons_)&&e}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Li,e),i=new oe(Li,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;class fE extends nc{static get __EMPTY_NODE(){return va}static set __EMPTY_NODE(e){va=e}compare(e,n){return or(e.name,n.name)}isDefinedOn(e){throw nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Bs,va)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,va)}toString(){return".key"}}const Ci=new fE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},bt=class Nr{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Nr.RED,this.left=i??cn.EMPTY_NODE,this.right=r??cn.EMPTY_NODE}copy(e,n,s,i,r){return new Nr(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return cn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};bt.RED=!0;bt.BLACK=!1;class mk{copy(e,n,s,i,r){return this}insert(e,n,s){return new bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let cn=class $a{constructor(e,n=$a.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $a(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,bt.BLACK,null,null))}remove(e){return new $a(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ea(this.root_,null,this.comparator_,!0,e)}};cn.EMPTY_NODE=new mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e){return or(t.name,e.name)}function $d(t,e){return or(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;function yk(t){oh=t}const pE=function(t){return typeof t=="number"?"number:"+Wv(t):"string:"+t},_E=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$n(e,".sv"),"Priority must be a string or number.")}else x(t===oh||t.isEmpty(),"priority of unexpected type.");x(t===oh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L_;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_E(this.priorityNode_)}static set __childrenNodeConstructor(e){L_=e}static get __childrenNodeConstructor(){return L_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:re(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(x(s!==".priority"||us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wv(this.value_):e+=this.value_,this.lazyHash_=Bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),r=$e.VALUE_TYPE_ORDER.indexOf(s);return x(i>=0,"Unknown leaf type: "+n),x(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mE,gE;function vk(t){mE=t}function Ek(t){gE=t}class Tk extends nc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?or(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Bs,new $e("[PRIORITY-POST]",gE))}makePost(e,n){const s=mE(e);return new oe(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ht=new Tk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=Math.log(2);class wk{constructor(e){const n=r=>parseInt(Math.log(r)/Ik,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new bt(d,h.node,bt.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new bt(d,h.node,bt.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const v=h-m,I=h;h-=m;const b=i(v+1,I),k=t[v],R=n?n(k):k;f(new bt(R,k.node,y,null,b))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),v=Math.pow(2,l.count-(m+1));y?d(v,bt.BLACK):(d(v,bt.BLACK),d(v,bt.RED))}return u},o=new wk(t.length),a=r(o);return new cn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;const ai={};class Pn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ai&&ht,"ChildrenNode.ts has not been loaded"),iu=iu||new Pn({".priority":ai},{".priority":ht}),iu}get(e){const n=xi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof cn?n:null}hasIndex(e){return $n(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=hl(s,e.getCompare()):a=ai;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Pn(u,c)}addToIndexes(e,n){const s=el(this.indexes_,(i,r)=>{const o=xi(this.indexSet_,r);if(x(o,"Missing index implementation for "+r),i===ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),hl(a,o.getCompare())}else return ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Pn(s,this.indexSet_)}removeFromIndexes(e,n){const s=el(this.indexes_,i=>{if(i===ai)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new Pn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tr;class fe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_E(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tr||(Tr=new fe(new cn($d),null,Pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Tr:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Tr:this.priorityNode_;return new fe(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{x(re(e)!==".priority"||us(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ht,(o,a)=>{n[o]=a.val(e),s++,r&&fe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pE(this.getPriority().val())+":"),this.forEachChild(ht,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Bv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$o?-1:0}withIndex(e){if(e===Ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new fe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ht),i=n.getIterator(ht);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ci?null:this.indexMap_.get(e.toString())}}fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ak extends fe{constructor(){super(new cn($d),fe.EMPTY_NODE,Pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fe.EMPTY_NODE}isEmpty(){return!1}}const $o=new Ak;Object.defineProperties(oe,{MIN:{value:new oe(Li,fe.EMPTY_NODE)},MAX:{value:new oe(Bs,$o)}});fE.__EMPTY_NODE=fe.EMPTY_NODE;$e.__childrenNodeConstructor=fe;yk($o);Ek($o);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=!0;function at(t,e=null){if(t===null)return fe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,at(e))}if(!(t instanceof Array)&&Rk){const n=[];let s=!1;if(Ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=at(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return fe.EMPTY_NODE;const r=hl(n,gk,o=>o.name,$d);if(s){const o=hl(n,ht.getCompare());return new fe(r,at(e),new Pn({".priority":o},{".priority":ht}))}else return new fe(r,at(e),Pn.Default)}else{let n=fe.EMPTY_NODE;return Ft(t,(s,i)=>{if($n(t,s)&&s.substring(0,1)!=="."){const r=at(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(at(e))}}vk(at);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck extends nc{constructor(e){super(),this.indexPath_=e,x(!se(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?or(e.name,n.name):r}makePost(e,n){const s=at(e),i=fe.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=fe.EMPTY_NODE.updateChild(this.indexPath_,$o);return new oe(Bs,e)}toString(){return cE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends nc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?or(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=at(e);return new oe(n,s)}toString(){return".value"}}const bk=new Sk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){return{type:"value",snapshotNode:t}}function kk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Nk(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function V_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ok(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ht}copy(){const e=new Bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function F_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ht?n="$priority":t.index_===bk?n="$value":t.index_===Ci?n="$key":(x(t.index_ instanceof Ck,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function U_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ht&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends oE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=dl.getListenId_(e,s),a={};this.listens_[o]=a;const l=F_(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),xi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=dl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=F_(e._queryParams),s=e._path.toString(),i=new ro;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ir(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oo(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.rootNode_=fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function yE(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,fl());const i=t.children.get(s);e=Ae(e),yE(i,e,n)}}function ah(t,e,n){t.value!==null?n(e,t.value):xk(t,(s,i)=>{const r=new Ce(e.toString()+"/"+s);ah(i,r,n)})}function xk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ft(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=10*1e3,Lk=30*1e3,Vk=5*60*1e3;class Fk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Mk(e);const s=$_+(Lk-$_)*Math.random();$r(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ft(e,(i,r)=>{r>0&&$n(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),$r(this.reportStats_.bind(this),Math.floor(Math.random()*2*Vk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function vE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function EE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function TE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=un.ACK_USER_WRITE,this.source=vE()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new pl(ye(),n,this.revert)}}else return x(re(this.path)===e,"operationForChild called for unrelated child."),new pl(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=un.OVERWRITE}operationForChild(e){return se(this.path)?new js(this.source,ye(),this.snap.getImmediateChild(e)):new js(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=un.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new js(this.source,ye(),n.value):new ho(this.source,ye(),n)}else return x(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ho(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Uk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ok(o.childName,o.snapshotNode))}),Ir(t,i,"child_removed",e,s,n),Ir(t,i,"child_added",e,s,n),Ir(t,i,"child_moved",r,s,n),Ir(t,i,"child_changed",e,s,n),Ir(t,i,"value",e,s,n),i}function Ir(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Bk(t,a,l)),o.forEach(a=>{const l=$k(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function $k(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bk(t,e,n){if(e.childName==null||n.childName==null)throw nr("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){return{eventCache:t,serverCache:e}}function Br(t,e,n,s){return IE(new jd(e,n,s),t.serverCache)}function wE(t,e,n,s){return IE(t.eventCache,new jd(e,n,s))}function lh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;const jk=()=>(ru||(ru=new cn(SP)),ru);class we{constructor(e,n=jk()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Ft(e,(s,i)=>{n=n.set(new Ce(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(se(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:qe(new Ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new we(null)}}set(e,n){if(se(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(Ae(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(se(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(se(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(qe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(se(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),qe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(se(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),qe(n,i),s):new we(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(qe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new we(null))}}function jr(t,e,n){if(se(e))return new Qt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Vt(i,e);return r=r.updateChild(o,n),new Qt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new Qt(r)}}}function B_(t,e,n){let s=t;return Ft(n,(i,r)=>{s=jr(s,qe(e,i),r)}),s}function j_(t,e){if(se(e))return Qt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new Qt(n)}}function ch(t,e){return Xs(t,e)!=null}function Xs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Vt(n.path,e)):null}function H_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ht,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function os(t,e){if(se(e))return t;{const n=Xs(t,e);return n!=null?new Qt(new we(n)):new Qt(t.writeTree_.subtree(e))}}function uh(t){return t.writeTree_.isEmpty()}function Vi(t,e){return AE(ye(),t.writeTree_,e)}function AE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(x(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=AE(qe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(qe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){return kE(e,t)}function Hk(t,e,n,s,i){x(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=jr(t.visibleWrites,e,n)),t.lastWriteId=s}function Wk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Kk(a,s.path)?i=!1:qt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zk(t),!0;if(s.snap)t.visibleWrites=j_(t.visibleWrites,s.path);else{const a=s.children;Ft(a,l=>{t.visibleWrites=j_(t.visibleWrites,qe(s.path,l))})}return!0}else return!1}function Kk(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(qe(t.path,n),e))return!0;return!1}function zk(t){t.visibleWrites=CE(t.allWrites,Gk,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gk(t){return t.visible}function CE(t,e,n){let s=Qt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)qt(n,o)?(a=Vt(n,o),s=jr(s,a,r.snap)):qt(o,n)&&(a=Vt(o,n),s=jr(s,ye(),r.snap.getChild(a)));else if(r.children){if(qt(n,o))a=Vt(n,o),s=B_(s,a,r.children);else if(qt(o,n))if(a=Vt(o,n),se(a))s=B_(s,ye(),r.children);else{const l=xi(r.children,re(a));if(l){const c=l.getChild(Ae(a));s=jr(s,ye(),c)}}}else throw nr("WriteRecord should have .snap or .children")}}return s}function SE(t,e,n,s,i){if(!s&&!i){const r=Xs(t.visibleWrites,e);if(r!=null)return r;{const o=os(t.visibleWrites,e);if(uh(o))return n;if(n==null&&!ch(o,ye()))return null;{const a=n||fe.EMPTY_NODE;return Vi(o,a)}}}else{const r=os(t.visibleWrites,e);if(!i&&uh(r))return n;if(!i&&n==null&&!ch(r,ye()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(qt(c.path,e)||qt(e,c.path))},a=CE(t.allWrites,o,e),l=n||fe.EMPTY_NODE;return Vi(a,l)}}}function Qk(t,e,n){let s=fe.EMPTY_NODE;const i=Xs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ht,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=os(t.visibleWrites,e);return n.forEachChild(ht,(o,a)=>{const l=Vi(os(r,new Ce(o)),a);s=s.updateImmediateChild(o,l)}),H_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=os(t.visibleWrites,e);return H_(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yk(t,e,n,s,i){x(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=qe(e,n);if(ch(t.visibleWrites,r))return null;{const o=os(t.visibleWrites,r);return uh(o)?i.getChild(n):Vi(o,i.getChild(n))}}function Xk(t,e,n,s){const i=qe(e,n),r=Xs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=os(t.visibleWrites,i);return Vi(o,s.getNode().getImmediateChild(n))}else return null}function Jk(t,e){return Xs(t.visibleWrites,e)}function Zk(t,e,n,s,i,r,o){let a;const l=os(t.visibleWrites,e),c=Xs(l,ye());if(c!=null)a=c;else if(n!=null)a=Vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function eN(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function hh(t,e,n,s){return SE(t.writeTree,t.treePath,e,n,s)}function bE(t,e){return Qk(t.writeTree,t.treePath,e)}function W_(t,e,n,s){return Yk(t.writeTree,t.treePath,e,n,s)}function _l(t,e){return Jk(t.writeTree,qe(t.treePath,e))}function tN(t,e,n,s,i,r){return Zk(t.writeTree,t.treePath,e,n,s,i,r)}function Hd(t,e,n){return Xk(t.writeTree,t.treePath,e,n)}function PE(t,e){return kE(qe(t.treePath,e),t.writeTree)}function kE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,V_(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Nk(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,kk(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,V_(s,e.snapshotNode,i.oldSnap));else throw nr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const NE=new sN;class Wd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hs(this.viewCache_),r=tN(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function iN(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rN(t,e,n,s,i){const r=new nN;let o,a;if(n.type===un.OVERWRITE){const c=n;c.source.fromUser?o=dh(t,e,c.path,c.snap,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!se(c.path),o=ml(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===un.MERGE){const c=n;c.source.fromUser?o=aN(t,e,c.path,c.children,s,i,r):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=fh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===un.ACK_USER_WRITE){const c=n;c.revert?o=uN(t,e,c.path,s,i,r):o=lN(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===un.LISTEN_COMPLETE)o=cN(t,e,n.path,s,r);else throw nr("Unknown operation type: "+n.type);const l=r.getChanges();return oN(e,o,l),{viewCache:o,changes:l}}function oN(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=lh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Pk(lh(e)))}}function OE(t,e,n,s,i,r){const o=e.eventCache;if(_l(s,n)!=null)return e;{let a,l;if(se(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Hs(e),u=c instanceof fe?c:fe.EMPTY_NODE,h=bE(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=hh(s,Hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){x(us(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=W_(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=W_(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Hd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Br(e,a,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function ml(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=re(n);if(!l.isCompleteForPath(n)&&us(n)>1)return e;const m=Ae(n),v=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,m,NE,null)}const h=wE(e,c,l.isFullyInitialized()||se(n),u.filtersNodes()),d=new Wd(i,h,r);return OE(t,h,n,i,d,a)}function dh(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Wd(i,e,r);if(se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Br(e,c,!0,t.filter.filtersNodes());else{const h=re(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Br(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),f=a.getNode().getImmediateChild(h);let m;if(se(d))m=s;else{const y=u.getCompleteChild(h);y!=null?lE(d)===".priority"&&y.getChild(uE(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=fe.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Br(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function q_(t,e){return t.eventCache.isCompleteForChild(e)}function aN(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=qe(n,l);q_(e,re(u))&&(a=dh(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=qe(n,l);q_(e,re(u))||(a=dh(t,a,u,c,i,r,o))}),a}function K_(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function fh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;se(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=K_(t,f,d);l=ml(t,l,new Ce(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=K_(t,m,d);l=ml(t,l,new Ce(h),y,i,r,o,a)}}),l}function lN(t,e,n,s,i,r,o){if(_l(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ml(t,e,n,l.getNode().getChild(n),i,r,a,o);if(se(n)){let c=new we(null);return l.getNode().forEachChild(Ci,(u,h)=>{c=c.set(new Ce(u),h)}),fh(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,h)=>{const d=qe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),fh(t,e,n,c,i,r,a,o)}}function cN(t,e,n,s,i){const r=e.serverCache,o=wE(e,r.getNode(),r.isFullyInitialized()||se(n),r.isFiltered());return OE(t,o,n,s,NE,i)}function uN(t,e,n,s,i,r){let o;if(_l(s,n)!=null)return e;{const a=new Wd(s,e,i),l=e.eventCache.getNode();let c;if(se(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=hh(s,Hs(e));else{const h=e.serverCache.getNode();x(h instanceof fe,"serverChildren would be complete if leaf node"),u=bE(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let h=Hd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,fe.EMPTY_NODE,Ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hh(s,Hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||_l(s,ye())!=null,Br(e,c,o,t.filter.filtersNodes())}}function hN(t,e){const n=Hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function z_(t,e,n,s){e.type===un.MERGE&&e.source.queryId!==null&&(x(Hs(t.viewCache_),"We should always have a full cache before handling merges"),x(lh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=rN(t.processor_,i,e,n,s);return iN(t.processor_,r.viewCache),x(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,dN(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dN(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Uk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_;function fN(t){x(!G_,"__referenceConstructor has already been defined"),G_=t}function qd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return x(r!=null,"SyncTree gave us an op for an invalid query."),z_(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(z_(o,e,n,s));return r}}function Kd(t,e){let n=null;for(const s of t.views.values())n=n||hN(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q_;function pN(t){x(!Q_,"__referenceConstructor has already been defined"),Q_=t}class Y_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=eN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _N(t,e,n,s,i){return Hk(t.pendingWriteTree_,e,n,s,i),i?ic(t,new js(vE(),e,n)):[]}function _i(t,e,n=!1){const s=Wk(t.pendingWriteTree_,e);if(qk(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ye(),!0):Ft(s.children,o=>{r=r.set(new Ce(o),!0)}),ic(t,new pl(s.path,r,n))}else return[]}function sc(t,e,n){return ic(t,new js(EE(),e,n))}function mN(t,e,n){const s=we.fromObject(n);return ic(t,new ho(EE(),e,s))}function gN(t,e,n,s){const i=LE(t,s);if(i!=null){const r=VE(i),o=r.path,a=r.queryId,l=Vt(o,e),c=new js(TE(a),l,n);return FE(t,o,c)}else return[]}function yN(t,e,n,s){const i=LE(t,s);if(i){const r=VE(i),o=r.path,a=r.queryId,l=Vt(o,e),c=we.fromObject(n),u=new ho(TE(a),l,c);return FE(t,o,u)}else return[]}function DE(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Vt(o,e),c=Kd(a,l);if(c)return c});return SE(i,e,r,n,!0)}function ic(t,e){return xE(e,t.syncPointTree_,null,RE(t.pendingWriteTree_,ye()))}function xE(t,e,n,s){if(se(t.path))return ME(t,e,n,s);{const i=e.get(ye());n==null&&i!=null&&(n=Kd(i,ye()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=PE(s,o);r=r.concat(xE(a,l,c,u))}return i&&(r=r.concat(qd(i,t,s,n))),r}}function ME(t,e,n,s){const i=e.get(ye());n==null&&i!=null&&(n=Kd(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=PE(s,o),u=t.operationForChild(o);u&&(r=r.concat(ME(u,a,l,c)))}),i&&(r=r.concat(qd(i,t,s,n))),r}function LE(t,e){return t.tagToQueryMap.get(e)}function VE(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function FE(t,e,n){const s=t.syncPointTree_.get(e);x(s,"Missing sync point for query tag that we're tracking");const i=RE(t.pendingWriteTree_,e);return qd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zd(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=qe(this.path_,e);return new Gd(this.syncTree_,n)}node(){return DE(this.syncTree_,this.path_)}}const vN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},X_=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return EN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TN(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},EN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},TN=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&x(!1,"Unexpected increment value: "+s);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},IN=function(t,e,n,s){return Qd(e,new Gd(n,t),s)},wN=function(t,e,n){return Qd(t,new zd(e),n)};function Qd(t,e,n){const s=t.getPriority().val(),i=X_(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=X_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new $e(a,at(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new $e(i))),o.forEachChild(ht,(a,l)=>{const c=Qd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Xd(t,e){let n=e instanceof Ce?e:new Ce(e),s=t,i=re(n);for(;i!==null;){const r=xi(s.node.children,i)||{children:{},childCount:0};s=new Yd(i,s,r),n=Ae(n),i=re(n)}return s}function ar(t){return t.node.value}function UE(t,e){t.node.value=e,ph(t)}function $E(t){return t.node.childCount>0}function AN(t){return ar(t)===void 0&&!$E(t)}function rc(t,e){Ft(t.node.children,(n,s)=>{e(new Yd(n,t,s))})}function BE(t,e,n,s){n&&!s&&e(t),rc(t,i=>{BE(i,e,!0,s)}),n&&s&&e(t)}function RN(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bo(t){return new Ce(t.parent===null?t.name:Bo(t.parent)+"/"+t.name)}function ph(t){t.parent!==null&&CN(t.parent,t.name,t)}function CN(t,e,n){const s=AN(n),i=$n(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ph(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ph(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=/[\[\].#$\/\u0000-\u001F\u007F]/,bN=/[\[\].#$\u0000-\u001F\u007F]/,ou=10*1024*1024,jE=function(t){return typeof t=="string"&&t.length!==0&&!SN.test(t)},PN=function(t){return typeof t=="string"&&t.length!==0&&!bN.test(t)},kN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),PN(t)},HE=function(t,e,n){const s=n instanceof Ce?new ck(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+As(s));if(typeof e=="function")throw new Error(t+"contains a function "+As(s)+" with contents = "+e.toString());if(jv(e))throw new Error(t+"contains "+e.toString()+" "+As(s));if(typeof e=="string"&&e.length>ou/3&&Jl(e)>ou)throw new Error(t+"contains a string greater than "+ou+" utf8 bytes "+As(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ft(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!jE(o)))throw new Error(t+" contains an invalid key ("+o+") "+As(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uk(s,o),HE(t,a,s),hk(s)}),i&&r)throw new Error(t+' contains ".value" child '+As(s)+" in addition to actual children.")}},NN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kN(n))throw new Error(PR(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DN(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!hE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Js(t,e,n){DN(t,n),xN(t,s=>qt(s,e)||qt(e,s))}function xN(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(MN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function MN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ls&&ot("event: "+n.toString()),Uo(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="repo_interrupt",VN=25;class FN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ON,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new Yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UN(t,e,n){if(t.stats_=Vd(t.repoInfo_),t.forceRestClient_||DP())t.server_=new dl(t.repoInfo_,(s,i,r,o)=>{J_(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Z_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new On(t.repoInfo_,e,(s,i,r,o)=>{J_(t,s,i,r,o)},s=>{Z_(t,s)},s=>{BN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=UP(t.repoInfo_,()=>new Fk(t.stats_,t.server_)),t.infoData_=new Dk,t.infoSyncTree_=new Y_({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=sc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jd(t,"connected",!1),t.serverSyncTree_=new Y_({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Js(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function $N(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function WE(t){return vN({timestamp:$N(t)})}function J_(t,e,n,s,i){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=el(n,c=>at(c));o=yN(t.serverSyncTree_,r,l,i)}else{const l=at(n);o=gN(t.serverSyncTree_,r,l,i)}else if(s){const l=el(n,c=>at(c));o=mN(t.serverSyncTree_,r,l)}else{const l=at(n);o=sc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ef(t,r)),Js(t.eventQueue_,a,o)}function Z_(t,e){Jd(t,"connected",e),e===!1&&HN(t)}function BN(t,e){Ft(e,(n,s)=>{Jd(t,n,s)})}function Jd(t,e,n){const s=new Ce("/.info/"+e),i=at(n);t.infoData_.updateSnapshot(s,i);const r=sc(t.infoSyncTree_,s,i);Js(t.eventQueue_,s,r)}function jN(t){return t.nextWriteId_++}function HN(t){qE(t,"onDisconnectEvents");const e=WE(t),n=fl();ah(t.onDisconnect_,ye(),(i,r)=>{const o=IN(i,r,t.serverSyncTree_,e);yE(n,i,o)});let s=[];ah(n,ye(),(i,r)=>{s=s.concat(sc(t.serverSyncTree_,i,r));const o=zN(t,i);ef(t,o)}),t.onDisconnect_=fl(),Js(t.eventQueue_,ye(),s)}function WN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(LN)}function qE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ot(n,...e)}function KE(t,e,n){return DE(t.serverSyncTree_,e,n)||fe.EMPTY_NODE}function Zd(t,e=t.transactionQueueTree_){if(e||oc(t,e),ar(e)){const n=GE(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&qN(t,Bo(e),n)}else $E(e)&&rc(e,n=>{Zd(t,n)})}function qN(t,e,n){const s=n.map(c=>c.currentWriteId),i=KE(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Vt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qE(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(_i(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();oc(t,Xd(t.transactionQueueTree_,e)),Zd(t,t.transactionQueueTree_),Js(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Uo(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ot("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ef(t,e)}},o)}function ef(t,e){const n=zE(t,e),s=Bo(n),i=GE(t,n);return KN(t,i,s),s}function KN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Vt(n,l.path);let u=!1,h;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(_i(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VN)u=!0,h="maxretry",i=i.concat(_i(t.serverSyncTree_,l.currentWriteId,!0));else{const d=KE(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){HE("transaction failed: Data returned ",f,l.path);let m=at(f);typeof f=="object"&&f!=null&&$n(f,".priority")||(m=m.updatePriority(d.getPriority()));const v=l.currentWriteId,I=WE(t),b=wN(m,d,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=jN(t),o.splice(o.indexOf(v),1),i=i.concat(_N(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(_i(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(_i(t.serverSyncTree_,l.currentWriteId,!0))}Js(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}oc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Uo(s[a]);Zd(t,t.transactionQueueTree_)}function zE(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&ar(s)===void 0;)s=Xd(s,n),e=Ae(e),n=re(e);return s}function GE(t,e){const n=[];return QE(t,e,n),n.sort((s,i)=>s.order-i.order),n}function QE(t,e,n){const s=ar(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);rc(e,i=>{QE(t,i,n)})}function oc(t,e){const n=ar(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,UE(e,n.length>0?n:void 0)}rc(e,s=>{oc(t,s)})}function zN(t,e){const n=Bo(zE(t,e)),s=Xd(t.transactionQueueTree_,e);return RN(s,i=>{au(t,i)}),au(t,s),BE(s,i=>{au(t,i)}),n}function au(t,e){const n=ar(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_i(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?UE(e,void 0):n.length=r+1,Js(t.eventQueue_,Bo(e),i);for(let o=0;o<s.length;o++)Uo(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function QN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const em=function(t,e){const n=YN(t),s=n.namespace;n.domain==="firebase.com"&&$s(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new LP(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},YN=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=GN(t.substring(u,h)));const d=QN(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return se(this._path)?null:lE(this._path)}get ref(){return new lr(this._repo,this._path)}get _queryIdentifier(){const e=U_(this._queryParams),n=Md(e);return n==="{}"?"default":n}get _queryObject(){return U_(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof tf))return!1;const n=this._repo===e._repo,s=hE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lk(this._path)}}class lr extends tf{constructor(e,n){super(e,n,new Bd,!1)}get parent(){const e=uE(this._path);return e===null?null:new lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}fN(lr);pN(lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="FIREBASE_DATABASE_EMULATOR_HOST",_h={};let JN=!1;function ZN(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=em(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[XN]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=em(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ih(ih.OWNER):new MP(t.name,t.options,e);NN("Invalid Firebase Database URL",o),se(o.path)||$s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=t1(a,t,u,new xP(t.name,n));return new n1(h,t)}function e1(t,e){const n=_h[e];(!n||n[t.key]!==t)&&$s(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WN(t),delete n[t.key]}function t1(t,e,n,s){let i=_h[e.name];i||(i={},_h[e.name]=i);let r=i[t.toURLString()];return r&&$s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new FN(t,JN,n,s),i[t.toURLString()]=r,r}class n1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lr(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$s("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){EP(_s),gn(new Yt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZN(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nt(T_,I_,t),Nt(T_,I_,"esm2017")}On.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};On.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};s1();var i1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,nf=nf||{},G=i1||self;function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function r1(t){return Object.prototype.hasOwnProperty.call(t,lu)&&t[lu]||(t[lu]=++o1)}var lu="closure_uid_"+(1e9*Math.random()>>>0),o1=0;function a1(t,e,n){return t.call.apply(t.bind,arguments)}function l1(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=a1:dt=l1,dt.apply(null,arguments)}function Ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function ms(){this.s=this.s,this.o=this.o}var c1=0;ms.prototype.s=!1;ms.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),c1!=0)&&r1(this)};ms.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const YE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sf(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function tm(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ac(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var u1=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function fo(t){return/^[\s\xa0]*$/.test(t)}function lc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return lc().indexOf(t)!=-1}function rf(t){return rf[" "](t),t}rf[" "]=function(){};function h1(t,e){var n=sO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var d1=an("Opera"),Fi=an("Trident")||an("MSIE"),XE=an("Edge"),mh=XE||Fi,JE=an("Gecko")&&!(lc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),f1=lc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function ZE(){var t=G.document;return t?t.documentMode:void 0}var gh;e:{var cu="",uu=function(){var t=lc();if(JE)return/rv:([^\);]+)(\)|;)/.exec(t);if(XE)return/Edge\/([\d\.]+)/.exec(t);if(Fi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(f1)return/WebKit\/(\S+)/.exec(t);if(d1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uu&&(cu=uu?uu[1]:""),Fi){var hu=ZE();if(hu!=null&&hu>parseFloat(cu)){gh=String(hu);break e}}gh=cu}var yh;if(G.document&&Fi){var nm=ZE();yh=nm||parseInt(gh,10)||void 0}else yh=void 0;var p1=yh;function po(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(JE){e:{try{rf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&po.$.h.call(this)}}Qe(po,ft);var _1={2:"touch",3:"pen",4:"mouse"};po.prototype.h=function(){po.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ho="closure_listenable_"+(1e6*Math.random()|0),m1=0;function g1(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++m1,this.fa=this.ia=!1}function cc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function of(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function y1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function eT(t){const e={};for(const n in t)e[n]=t[n];return e}const sm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tT(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<sm.length;r++)n=sm[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function uc(t){this.src=t,this.g={},this.h=0}uc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Eh(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new g1(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function vh(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=YE(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(cc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Eh(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var af="closure_lm_"+(1e6*Math.random()|0),du={};function nT(t,e,n,s,i){if(s&&s.once)return iT(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)nT(t,e[r],n,s,i);return null}return n=uf(n),t&&t[Ho]?t.O(e,n,jo(s)?!!s.capture:!!s,i):sT(t,e,n,!1,s,i)}function sT(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=jo(i)?!!i.capture:!!i,a=cf(t);if(a||(t[af]=a=new uc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=v1(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)u1||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(oT(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function v1(){function t(n){return e.call(t.src,t.listener,n)}const e=E1;return t}function iT(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)iT(t,e[r],n,s,i);return null}return n=uf(n),t&&t[Ho]?t.P(e,n,jo(s)?!!s.capture:!!s,i):sT(t,e,n,!0,s,i)}function rT(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)rT(t,e[r],n,s,i);else s=jo(s)?!!s.capture:!!s,n=uf(n),t&&t[Ho]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Eh(r,n,s,i),-1<n&&(cc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=cf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Eh(e,n,s,i)),(n=-1<t?e[t]:null)&&lf(n))}function lf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ho])vh(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(oT(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=cf(e))?(vh(n,t),n.h==0&&(n.src=null,e[af]=null)):cc(t)}}}function oT(t){return t in du?du[t]:du[t]="on"+t}function E1(t,e){if(t.fa)t=!0;else{e=new po(e,this);var n=t.listener,s=t.la||t.src;t.ia&&lf(t),t=n.call(s,e)}return t}function cf(t){return t=t[af],t instanceof uc?t:null}var fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function uf(t){return typeof t=="function"?t:(t[fu]||(t[fu]=function(e){return t.handleEvent(e)}),t[fu])}function Ge(){ms.call(this),this.i=new uc(this),this.S=this,this.J=null}Qe(Ge,ms);Ge.prototype[Ho]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){rT(this,t,e,n,s)};function nt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var i=e;e=new ft(s,t),tT(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ia(o,s,!0,e)&&i}if(o=e.g=t,i=Ia(o,s,!0,e)&&i,i=Ia(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ia(o,s,!1,e)&&i}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)cc(n[s]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ia(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vh(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var hf=G.JSON.stringify;class T1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function I1(){var t=df;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class w1{constructor(){this.h=this.g=null}add(e,n){const s=aT.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var aT=new T1(()=>new A1,t=>t.reset());class A1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function R1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function C1(t){G.setTimeout(()=>{throw t},0)}let _o,mo=!1,df=new w1,lT=()=>{const t=G.Promise.resolve(void 0);_o=()=>{t.then(S1)}};var S1=()=>{for(var t;t=I1();){try{t.h.call(t.g)}catch(n){C1(n)}var e=aT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mo=!1};function hc(t,e){Ge.call(this),this.h=t||1,this.g=e||G,this.j=dt(this.qb,this),this.l=Date.now()}Qe(hc,Ge);M=hc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(ff(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ff(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){hc.$.N.call(this),ff(this),delete this.g};function pf(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function cT(t){t.g=pf(()=>{t.g=null,t.i&&(t.i=!1,cT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class b1 extends ms{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cT(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(t){ms.call(this),this.h=t,this.g={}}Qe(go,ms);var im=[];function uT(t,e,n,s){Array.isArray(n)||(n&&(im[0]=n.toString()),n=im);for(var i=0;i<n.length;i++){var r=nT(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function hT(t){of(t.g,function(e,n){this.g.hasOwnProperty(n)&&lf(e)},t),t.g={}}go.prototype.N=function(){go.$.N.call(this),hT(this)};go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dc(){this.g=!0}dc.prototype.Ea=function(){this.g=!1};function P1(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function k1(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function mi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+O1(t,n)+(s?" "+s:"")})}function N1(t,e){t.info(function(){return"TIMEOUT: "+e})}dc.prototype.info=function(){};function O1(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return hf(n)}catch{return e}}var Zs={},rm=null;function fc(){return rm=rm||new Ge}Zs.Ta="serverreachability";function dT(t){ft.call(this,Zs.Ta,t)}Qe(dT,ft);function yo(t){const e=fc();nt(e,new dT(e))}Zs.STAT_EVENT="statevent";function fT(t,e){ft.call(this,Zs.STAT_EVENT,t),this.stat=e}Qe(fT,ft);function Tt(t){const e=fc();nt(e,new fT(e,t))}Zs.Ua="timingevent";function pT(t,e){ft.call(this,Zs.Ua,t),this.size=e}Qe(pT,ft);function Wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_T={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _f(){}_f.prototype.h=null;function om(t){return t.h||(t.h=t.i())}function mT(){}var qo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function mf(){ft.call(this,"d")}Qe(mf,ft);function gf(){ft.call(this,"c")}Qe(gf,ft);var Th;function _c(){}Qe(_c,_f);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};Th=new _c;function Ko(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new go(this),this.P=D1,t=mh?125:void 0,this.V=new hc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gT}function gT(){this.i=null,this.g="",this.h=!1}var D1=45e3,Ih={},gl={};M=Ko.prototype;M.setTimeout=function(t){this.P=t};function wh(t,e,n){t.L=1,t.v=gc(Mn(e)),t.s=n,t.S=!0,yT(t,null)}function yT(t,e){t.G=Date.now(),zo(t),t.A=Mn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),CT(n.i,"t",s),t.C=0,n=t.l.J,t.h=new gT,t.g=zT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new b1(dt(t.Pa,t,t.g),t.O)),uT(t.U,t.g,"readystatechange",t.nb),e=t.I?eT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),yo(),P1(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=hn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||mh||this.g&&(this.h.h||this.g.ja()||um(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?yo(3):yo(2)),mc(this);var n=this.g.da();this.ca=n;t:if(vT(this)){var s=um(this.g);t="";var i=s.length,r=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),Hr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,k1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fo(a)){var c=a;break t}}c=null}if(n=c)mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ah(this,n);else{this.i=!1,this.o=3,Tt(12),Ps(this),Hr(this);break e}}this.S?(ET(this,u,o),mh&&this.i&&u==3&&(uT(this.U,this.V,"tick",this.mb),this.V.start())):(mi(this.j,this.m,o,null),Ah(this,o)),u==4&&Ps(this),this.i&&!this.J&&(u==4?HT(this.l,this):(this.i=!1,zo(this)))}else eO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Ps(this),Hr(this)}}}catch{}finally{}};function vT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ET(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=x1(t,n),i==gl){e==4&&(t.o=4,Tt(14),s=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ih){t.o=4,Tt(15),mi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mi(t.j,t.m,i,null),Ah(t,i);vT(t)&&i!=gl&&i!=Ih&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wf(e),e.M=!0,Tt(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),Hr(t))}M.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.C<e.length&&(mc(this),ET(this,t,e),this.i&&t!=4&&zo(this))}};function x1(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?gl:(n=Number(e.substring(n,s)),isNaN(n)?Ih:(s+=1,s+n>e.length?gl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Ps(this)};function zo(t){t.Y=Date.now()+t.P,TT(t,t.P)}function TT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wo(dt(t.lb,t),e)}function mc(t){t.B&&(G.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(N1(this.j,this.A),this.L!=2&&(yo(),Tt(17)),Ps(this),this.o=2,Hr(this)):TT(this,this.Y-t)};function Hr(t){t.l.H==0||t.J||HT(t.l,t)}function Ps(t){mc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ff(t.V),hT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ah(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Rh(n.i,t))){if(!t.K&&Rh(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)El(n),Ec(n);else break e;If(n),Tt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wo(dt(n.ib,n),6e3));if(1>=PT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ks(n,11)}else if((t.K||n.g==t)&&El(n),!fo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(yf(r,r.h),r.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Re(s.I,s.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=KT(s,s.J?s.pa:null,s.Y),o.K){kT(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(mc(a),zo(a)),s.g=o}else BT(s);0<n.j.length&&Tc(n)}else c[0]!="stop"&&c[0]!="close"||ks(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ks(n,7):Tf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}yo(4)}catch{}}function M1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function L1(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ac(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function IT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=L1(t),s=M1(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var wT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function V1(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vs){this.h=t.h,yl(this,t.j),this.s=t.s,this.g=t.g,vl(this,t.m),this.l=t.l;var e=t.i,n=new vo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),am(this,n),this.o=t.o}else t&&(e=String(t).match(wT))?(this.h=!1,yl(this,e[1]||"",!0),this.s=Or(e[2]||""),this.g=Or(e[3]||"",!0),vl(this,e[4]),this.l=Or(e[5]||"",!0),am(this,e[6]||"",!0),this.o=Or(e[7]||"")):(this.h=!1,this.i=new vo(null,this.h))}Vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,lm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,lm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?$1:U1,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,j1)),t.join("")};function Mn(t){return new Vs(t)}function yl(t,e,n){t.j=n?Or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function am(t,e,n){e instanceof vo?(t.i=e,H1(t.i,t.h)):(n||(e=Dr(e,B1)),t.i=new vo(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function gc(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,F1),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function F1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lm=/[#\/\?@]/g,U1=/[#\?:]/g,$1=/[#\?]/g,B1=/[#\?@]/g,j1=/#/g;function vo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gs(t){t.g||(t.g=new Map,t.h=0,t.i&&V1(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=vo.prototype;M.add=function(t,e){gs(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function AT(t,e){gs(t),e=cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function RT(t,e){return gs(t),e=cr(t,e),t.g.has(e)}M.forEach=function(t,e){gs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){gs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){gs(this);let e=[];if(typeof t=="string")RT(this,t)&&(e=e.concat(this.g.get(cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return gs(this),this.i=null,t=cr(this,t),RT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function CT(t,e,n){AT(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),sf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function H1(t,e){e&&!t.j&&(gs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(AT(this,s),CT(this,i,n))},t)),t.j=e}var W1=class{constructor(t,e){this.g=t,this.map=e}};function ST(t){this.l=t||q1,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var q1=10;function bT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PT(t){return t.h?1:t.g?t.g.size:0}function Rh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yf(t,e){t.g?t.g.add(e):t.h=e}function kT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ST.prototype.cancel=function(){if(this.i=NT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function NT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return sf(t.i)}var K1=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function z1(){this.g=new K1}function G1(t,e,n){const s=n||"";try{IT(t,function(i,r){let o=i;jo(i)&&(o=hf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Q1(t,e){const n=new dc;if(G.Image){const s=new Image;s.onload=Ta(wa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ta(wa,n,s,"TestLoadImage: error",!1,e),s.onabort=Ta(wa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ta(wa,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Go(t){this.l=t.fc||null,this.j=t.ob||!1}Qe(Go,_f);Go.prototype.g=function(){return new yc(this.l,this.j)};Go.prototype.i=function(t){return function(){return t}}({});function yc(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(yc,Ge);var vf=0;M=yc.prototype;M.open=function(t,e){if(this.readyState!=vf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Eo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=vf};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Eo(this)),this.g&&(this.readyState=3,Eo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qo(this):Eo(this),this.readyState==3&&OT(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Qo(this))};M.Ya=function(t){this.g&&(this.response=t,Qo(this))};M.ka=function(){this.g&&Qo(this)};function Qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Eo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Eo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Y1=G.JSON.parse;function Ne(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=DT,this.L=this.M=!1}Qe(Ne,Ge);var DT="",X1=/^https?$/i,J1=["POST","PUT"];M=Ne.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Th.g(),this.C=this.u?om(this.u):om(Th),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){cm(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=YE(J1,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LT(this),0<this.B&&((this.L=Z1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=pf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){cm(this,r)}};function Z1(t){return Fi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof nf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function cm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xT(t),vc(t)}function xT(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),vc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vc(this,!0)),Ne.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?MT(this):this.kb())};M.kb=function(){MT(this)};function MT(t){if(t.h&&typeof nf<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)pf(t.La,0,t);else if(nt(t,"readystatechange"),hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(wT)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),s=!X1.test(i?i.toLowerCase():"")}n=s}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var r=2<hn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",xT(t)}}finally{vc(t)}}}}function vc(t,e){if(t.g){LT(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=s}catch{}}}function LT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function hn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Y1(e)}};function um(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case DT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eO(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(fo(t[s]))continue;var n=R1(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}y1(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function VT(t){let e="";return of(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Ef(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=VT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function wr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FT(t){this.Ga=0,this.j=[],this.l=new dc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=wr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=wr("baseRetryDelayMs",5e3,t),this.hb=wr("retryDelaySeedMs",1e4,t),this.eb=wr("forwardChannelMaxRetries",2,t),this.xa=wr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ST(t&&t.concurrentRequestLimit),this.Ja=new z1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=FT.prototype;M.ra=8;M.H=1;function Tf(t){if(UT(t),t.H==3){var e=t.W++,n=Mn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Yo(t,n),e=new Ko(t,t.l,e),e.L=2,e.v=gc(Mn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=zT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zo(e)}qT(t)}function Ec(t){t.g&&(wf(t),t.g.cancel(),t.g=null)}function UT(t){Ec(t),t.u&&(G.clearTimeout(t.u),t.u=null),El(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Tc(t){if(!bT(t.i)&&!t.m){t.m=!0;var e=t.Na;_o||lT(),mo||(_o(),mo=!0),df.add(e,t),t.C=0}}function tO(t,e){return PT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wo(dt(t.Na,t,e),WT(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ko(this,this.l,t);let r=this.s;if(this.U&&(r?(r=eT(r),tT(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$T(this,i,e),n=Mn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Yo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(VT(r)))+"&"+e:this.o&&Ef(n,this.o,r)),yf(this.i,i),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),i.aa=!0,wh(i,n,null)):wh(i,n,e),this.H=2}}else this.H==3&&(t?hm(this,t):this.j.length==0||bT(this.i)||hm(this))};function hm(t,e){var n;e?n=e.m:n=t.W++;const s=Mn(t.I);Re(s,"SID",t.K),Re(s,"RID",n),Re(s,"AID",t.V),Yo(t,s),t.o&&t.s&&Ef(s,t.o,t.s),n=new Ko(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$T(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),yf(t.i,n),wh(n,s,e)}function Yo(t,e){t.na&&of(t.na,function(n,s){Re(e,s,n)}),t.h&&IT({},function(n,s){Re(e,s,n)})}function $T(t,e,n){n=Math.min(t.j.length,n);var s=t.h?dt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{G1(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function BT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;_o||lT(),mo||(_o(),mo=!0),df.add(e,t),t.A=0}}function If(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wo(dt(t.Ma,t),WT(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,jT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wo(dt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),Ec(this),jT(this))};function wf(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function jT(t){t.g=new Ko(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Mn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Yo(t,e),t.o&&t.s&&Ef(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=gc(Mn(e)),n.s=null,n.S=!0,yT(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Ec(this),If(this),Tt(19))};function El(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function HT(t,e){var n=null;if(t.g==e){El(t),wf(t),t.g=null;var s=2}else if(Rh(t.i,e))n=e.F,kT(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=fc(),nt(s,new pT(s,n)),Tc(t)}else BT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&tO(t,e)||s==2&&If(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ks(t,5);break;case 4:ks(t,10);break;case 3:ks(t,6);break;default:ks(t,2)}}}function WT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ks(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=dt(t.pb,t);n||(n=new Vs("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||yl(n,"https"),gc(n)),Q1(n.toString(),s)}else Tt(2);t.H=0,t.h&&t.h.za(e),qT(t),UT(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function qT(t){if(t.H=0,t.ma=[],t.h){const e=NT(t.i);(e.length!=0||t.j.length!=0)&&(tm(t.ma,e),tm(t.ma,t.j),t.i.i.length=0,sf(t.j),t.j.length=0),t.h.ya()}}function KT(t,e,n){var s=n instanceof Vs?Mn(n):new Vs(n);if(s.g!="")e&&(s.g=e+"."+s.g),vl(s,s.m);else{var i=G.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Vs(null);s&&yl(r,s),e&&(r.g=e),i&&vl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.ra),Yo(t,s),s}function zT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Go({ob:!0})):new Ne(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function GT(){}M=GT.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Tl(){if(Fi&&!(10<=Number(p1)))throw Error("Environmental error: no available transport.")}Tl.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){Ge.call(this),this.g=new FT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ur(this)}Qe(Mt,Ge);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=KT(t,null,t.Y),Tc(t)};Mt.prototype.close=function(){Tf(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hf(t),t=n);e.j.push(new W1(e.fb++,t)),e.H==3&&Tc(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,Tf(this.g),delete this.g,Mt.$.N.call(this)};function QT(t){mf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(QT,mf);function YT(){gf.call(this),this.status=1}Qe(YT,gf);function ur(t){this.g=t}Qe(ur,GT);ur.prototype.Ba=function(){nt(this.g,"a")};ur.prototype.Aa=function(t){nt(this.g,new QT(t))};ur.prototype.za=function(t){nt(this.g,new YT)};ur.prototype.ya=function(){nt(this.g,"b")};function nO(){this.blockSize=-1}function Jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(Jt,nO);Jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pu(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}Jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)pu(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){pu(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){pu(this,s),i=0;break}}this.h=i,this.i+=e};Jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function me(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var sO={};function Af(t){return-128<=t&&128>t?h1(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function dn(t){if(isNaN(t)||!isFinite(t))return Si;if(0>t)return Ze(dn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ch;return new me(e,0)}function XT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(XT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dn(Math.pow(e,8)),s=Si,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=dn(Math.pow(e,r)),s=s.R(r).add(dn(o))):(s=s.R(n),s=s.add(dn(o)))}return s}var Ch=4294967296,Si=Af(0),Sh=Af(1),dm=Af(16777216);M=me.prototype;M.ea=function(){if(Lt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ch+s)*e,e*=Ch}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kn(this))return"0";if(Lt(this))return"-"+Ze(this).toString(t);for(var e=dn(Math.pow(t,6)),n=this,s="";;){var i=wl(n,e).g;n=Il(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Lt(t){return t.h==-1}M.X=function(t){return t=Il(this,t),Lt(t)?-1:kn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new me(n,~t.h).add(Sh)}M.abs=function(){return Lt(this)?Ze(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Il(t,e){return t.add(Ze(e))}M.R=function(t){if(kn(this)||kn(t))return Si;if(Lt(this))return Lt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Lt(t))return Ze(this.R(Ze(t)));if(0>this.X(dm)&&0>t.X(dm))return dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Aa(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Aa(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Aa(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Aa(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new me(n,0)};function Aa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ar(t,e){this.g=t,this.h=e}function wl(t,e){if(kn(e))throw Error("division by zero");if(kn(t))return new Ar(Si,Si);if(Lt(t))return e=wl(Ze(t),e),new Ar(Ze(e.g),Ze(e.h));if(Lt(e))return e=wl(t,Ze(e)),new Ar(Ze(e.g),e.h);if(30<t.g.length){if(Lt(t)||Lt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Sh,s=e;0>=s.X(t);)n=fm(n),s=fm(s);var i=li(n,1),r=li(s,1);for(s=li(s,2),n=li(n,2);!kn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=li(s,1),n=li(n,1)}return e=Il(t,i.R(e)),new Ar(i,e)}for(i=Si;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=dn(n),o=r.R(e);Lt(o)||0<o.X(t);)n-=s,r=dn(n),o=r.R(e);kn(r)&&(r=Sh),i=i.add(r),t=Il(t,o)}return new Ar(i,t)}M.gb=function(t){return wl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new me(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new me(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new me(n,this.h^t.h)};function fm(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new me(n,t.h)}function li(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new me(i,t.h)}Tl.prototype.createWebChannel=Tl.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;pc.NO_ERROR=0;pc.TIMEOUT=8;pc.HTTP_ERROR=6;_T.COMPLETE="complete";mT.EventType=qo;qo.OPEN="a";qo.CLOSE="b";qo.ERROR="c";qo.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Jt.prototype.digest=Jt.prototype.l;Jt.prototype.reset=Jt.prototype.reset;Jt.prototype.update=Jt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=dn;me.fromString=XT;var iO=function(){return new Tl},rO=function(){return fc()},_u=pc,oO=_T,aO=Zs,pm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lO=Go,Ra=mT,cO=Ne,uO=Jt,bi=me;const _m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new No("@firebase/firestore");function mm(){return Ws.logLevel}function $(t,...e){if(Ws.logLevel<=le.DEBUG){const n=e.map(Rf);Ws.debug(`Firestore (${hr}): ${t}`,...n)}}function Ln(t,...e){if(Ws.logLevel<=le.ERROR){const n=e.map(Rf);Ws.error(`Firestore (${hr}): ${t}`,...n)}}function Ui(t,...e){if(Ws.logLevel<=le.WARN){const n=e.map(Rf);Ws.warn(`Firestore (${hr}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function _e(t,e){t||q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class dO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fO{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new _n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(_e(typeof s.accessToken=="string"),new JT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new rt(e)}}class pO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _O{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new pO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new mO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=yO(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function $i(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Le(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Le(0,0))}static max(){return new K(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,s){n===void 0?n=0:n>e.length&&q(),s===void 0?s=e.length-n:s>e.length-n&&q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return To.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof To?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends To{construct(e,n,s){return new be(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const vO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends To{construct(e,n,s){return new ct(e,n,s)}static isValidIdentifier(e){return vO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(be.fromString(e))}static fromName(e){return new W(be.fromString(e).popFirst(5))}static empty(){return new W(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new be(e.slice()))}}function EO(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(s===1e9?new Le(n+1,0):new Le(n,s));return new hs(i,W.empty(),e)}function TO(t){return new hs(t.readTime,t.key,-1)}class hs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new hs(K.min(),W.empty(),-1)}static max(){return new hs(K.max(),W.empty(),-1)}}function IO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==wO)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,s)=>{n(e)})}static reject(e){return new P((n,s)=>{s(e)})}static waitFor(e){return new P((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=P.resolve(!1);for(const s of e)n=n.next(i=>i?P.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new P((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new P((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Cf.ae=-1;function Zo(t){return t==null}function Al(t){return t===0&&1/t==-1/0}function RO(t){return typeof t=="number"&&Number.isInteger(t)&&!Al(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??Xe.EMPTY,this.right=r??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,s,i,r){return this}insert(e,n,s){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ym(this.data.getIterator())}getIteratorFrom(e){return new ym(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class ym{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new pt(ct.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $i(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new tI("Invalid base64 string: "+r):r}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const CO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(t){if(_e(!!t),typeof t=="string"){let e=0;const n=CO.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qs(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Sf(e)?bf(e):e}function Io(t){const e=ds(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class wo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sf(t)?4:bO(t)?9007199254740991:10:q()}function vn(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ds(i.timestampValue),a=ds(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return qs(i.bytesValue).isEqual(qs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return xe(i.geoPointValue.latitude)===xe(r.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return xe(i.integerValue)===xe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=xe(i.doubleValue),a=xe(r.doubleValue);return o===a?Al(o)===Al(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $i(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(gm(o)!==gm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!vn(o[l],a[l])))return!1;return!0}(t,e);default:return q()}}function Ao(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=xe(r.integerValue||r.doubleValue),l=xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return vm(t.timestampValue,e.timestampValue);case 4:return vm(Io(t),Io(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,o){const a=qs(r),l=qs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ce(a[c],l[c]);if(u!==0)return u}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=ce(xe(r.latitude),xe(o.latitude));return a!==0?a:ce(xe(r.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Bi(a[c],l[c]);if(u)return u}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Sa.mapValue&&o===Sa.mapValue)return 0;if(r===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ce(l[h],u[h]);if(d!==0)return d;const f=Bi(a[l[h]],c[u[h]]);if(f!==0)return f}return ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function vm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=ds(t),s=ds(e),i=ce(n.seconds,s.seconds);return i!==0?i:ce(n.nanos,s.nanos)}function ji(t){return bh(t)}function bh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ds(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=bh(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${bh(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function Ph(t){return!!t&&"integerValue"in t}function Pf(t){return!!t&&"arrayValue"in t}function Em(t){return!!t&&"nullValue"in t}function Tm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function Wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Wr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wr(n)}setAll(e){let n=ct.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Wr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ei(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new vt(Wr(this.value))}}function nI(t){const e=[];return ei(t.fields,(n,s)=>{const i=new ct([n]);if(Ba(s)){const r=nI(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new je(e,0,K.min(),K.min(),K.min(),vt.empty(),0)}static newFoundDocument(e,n,s,i){return new je(e,1,n,K.min(),s,i,0)}static newNoDocument(e,n){return new je(e,2,n,K.min(),K.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new je(e,3,n,K.min(),K.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Im(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=Bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n="asc"){this.field=e,this.dir=n}}function PO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{}class Ve extends sI{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new NO(e,n,s):n==="array-contains"?new xO(e,s):n==="in"?new MO(e,s):n==="not-in"?new LO(e,s):n==="array-contains-any"?new VO(e,s):new Ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OO(e,s):new DO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bi(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class En extends sI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new En(e,n)}matches(e){return iI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function iI(t){return t.op==="and"}function rI(t){return kO(t)&&iI(t)}function kO(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function kh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+ji(t.value);if(rI(t))return t.filters.map(e=>kh(e)).join(",");{const e=t.filters.map(n=>kh(n)).join(",");return`${t.op}(${e})`}}function oI(t,e){return t instanceof Ve?function(s,i){return i instanceof Ve&&s.op===i.op&&s.field.isEqual(i.field)&&vn(s.value,i.value)}(t,e):t instanceof En?function(s,i){return i instanceof En&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&oI(o,i.filters[a]),!0):!1}(t,e):void q()}function aI(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${ji(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(aI).join(" ,")+"}"}(t):"Filter"}class NO extends Ve{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class OO extends Ve{constructor(e,n){super(e,"in",n),this.keys=lI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DO extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=lI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class xO extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pf(n)&&Ao(n.arrayValue,this.value)}}class MO extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ao(this.value.arrayValue,n)}}class LO extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ao(this.value.arrayValue,n)}}class VO extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ao(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.he=null}}function Am(t,e=null,n=[],s=[],i=null,r=null,o=null){return new FO(t,e,n,s,i,r,o)}function kf(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>kh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Zo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ji(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ji(s)).join(",")),e.he=n}return e.he}function Nf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wm(t.startAt,e.startAt)&&wm(t.endAt,e.endAt)}function Nh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function UO(t,e,n,s,i,r,o,a){return new Ic(t,e,n,s,i,r,o,a)}function wc(t){return new Ic(t)}function Rm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $O(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function BO(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function jO(t){return t.collectionGroup!==null}function Pi(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=BO(e),s=$O(e);if(n!==null&&s===null)n.isKeyField()||e.Pe.push(new qr(n)),e.Pe.push(new qr(ct.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new qr(ct.keyField(),r))}}}return e.Pe}function Vn(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=Am(e.path,e.collectionGroup,Pi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Pi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new qr(r.field,o))}const s=e.endAt?new Rl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rl(e.startAt.position,e.startAt.inclusive):null;e.Ie=Am(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.Ie}function Oh(t,e,n){return new Ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return Nf(Vn(t),Vn(e))&&t.limitType===e.limitType}function cI(t){return`${kf(Vn(t))}|lt:${t.limitType}`}function Dh(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>aI(i)).join(", ")}]`),Zo(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>ji(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>ji(i)).join(",")),`Target(${s})`}(Vn(t))}; limitType=${t.limitType})`}function Rc(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):W.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Pi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Im(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Pi(s),i)||s.endAt&&!function(o,a,l){const c=Im(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Pi(s),i))}(t,e)}function HO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uI(t){return(e,n)=>{let s=!1;for(const i of Pi(t)){const r=WO(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function WO(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Bi(l,c):q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return eI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new ke(W.comparator);function Fn(){return qO}const hI=new ke(W.comparator);function xr(...t){let e=hI;for(const n of t)e=e.insert(n.key,n);return e}function dI(t){let e=hI;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ns(){return Kr()}function fI(){return Kr()}function Kr(){return new dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const KO=new ke(W.comparator),zO=new pt(W.comparator);function ne(...t){let e=zO;for(const n of t)e=e.add(n);return e}const GO=new pt(ce);function QO(){return GO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Al(e)?"-0":e}}function _I(t){return{integerValue:""+t}}function mI(t,e){return RO(e)?_I(e):pI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function YO(t,e,n){return t instanceof Cl?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Sf(r)&&(r=bf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Hi?yI(t,e):t instanceof Wi?vI(t,e):function(i,r){const o=gI(i,r),a=Cm(o)+Cm(i.Te);return Ph(o)&&Ph(i.Te)?_I(a):pI(i.serializer,a)}(t,e)}function XO(t,e,n){return t instanceof Hi?yI(t,e):t instanceof Wi?vI(t,e):n}function gI(t,e){return t instanceof Ro?function(s){return Ph(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Cl extends Cc{}class Hi extends Cc{constructor(e){super(),this.elements=e}}function yI(t,e){const n=EI(e);for(const s of t.elements)n.some(i=>vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Wi extends Cc{constructor(e){super(),this.elements=e}}function vI(t,e){let n=EI(e);for(const s of t.elements)n=n.filter(i=>!vn(i,s));return{arrayValue:{values:n}}}class Ro extends Cc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Cm(t){return xe(t.integerValue||t.doubleValue)}function EI(t){return Pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){this.field=e,this.transform=n}}function JO(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Hi&&i instanceof Hi||s instanceof Wi&&i instanceof Wi?$i(s.elements,i.elements,vn):s instanceof Ro&&i instanceof Ro?vn(s.Te,i.Te):s instanceof Cl&&i instanceof Cl}(t.transform,e.transform)}class ZO{constructor(e,n){this.version=e,this.transformResults=n}}class Et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sc{}function TI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Df(t.key,Et.none()):new ea(t.key,t.data,Et.none());{const n=t.data,s=vt.empty();let i=new pt(ct.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ys(t.key,s,new Pt(i.toArray()),Et.none())}}function eD(t,e,n){t instanceof ea?function(i,r,o){const a=i.value.clone(),l=bm(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ys?function(i,r,o){if(!ja(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=bm(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(II(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zr(t,e,n,s){return t instanceof ea?function(r,o,a,l){if(!ja(r.precondition,o))return a;const c=r.value.clone(),u=Pm(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ys?function(r,o,a,l){if(!ja(r.precondition,o))return a;const c=Pm(r.fieldTransforms,l,o),u=o.data;return u.setAll(II(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return ja(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tD(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=gI(s.transform,i||null);r!=null&&(n===null&&(n=vt.empty()),n.set(s.field,r))}return n||null}function Sm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&$i(s,i,(r,o)=>JO(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Sc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ys extends Sc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function II(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function bm(t,e,n){const s=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,XO(o,a,n[i]))}return s}function Pm(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,YO(r,o,e))}return s}class Df extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wI extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&eD(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=TI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&$i(this.mutations,e.mutations,(n,s)=>Sm(n,s))&&$i(this.baseMutations,e.baseMutations,(n,s)=>Sm(n,s))}}class xf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){_e(e.mutations.length===s.length);let i=function(){return KO}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new xf(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function AI(t){switch(t){default:return q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function RI(t){if(t===void 0)return Ln("GRPC error has no .code"),A.UNKNOWN;switch(t){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return q()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return ba===null&&(ba=new Mf),ba}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ba=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new bi([4294967295,4294967295],0);function km(t){const e=rD().encode(t),n=new uO;return n.update(e),new Uint8Array(n.digest())}function Nm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new bi([n,s],0),new bi([i,r],0)]}class Lf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Mr(`Invalid padding: ${n}`);if(s<0)throw new Mr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Mr(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=bi.fromNumber(this.de)}Re(e,n,s){let i=e.add(n.multiply(bi.fromNumber(s)));return i.compare(oD)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=km(e),[s,i]=Nm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);if(!this.Ve(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Lf(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=km(e),[s,i]=Nm(n);for(let r=0;r<this.hashCount;r++){const o=this.Re(s,i,r);this.me(o)}}me(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new bc(K.min(),i,new ke(ce),Fn(),ne())}}class ta{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ta(s,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,s,i){this.fe=e,this.removedTargetIds=n,this.key=s,this.ge=i}}class CI{constructor(e,n){this.targetId=e,this.pe=n}}class SI{constructor(e,n,s=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Om{constructor(){this.ye=0,this.we=xm(),this.Se=gt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=ne(),n=ne(),s=ne();return this.we.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:q()}}),new ta(this.Se,this.be,e,n,s)}xe(){this.De=!1,this.we=xm()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class aD{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Fn(),this.$e=Dm(),this.Ue=new ke(ce)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Fe(e.resumeToken);break;case 1:s.Le(),s.ve||s.xe(),s.Fe(e.resumeToken);break;case 2:s.Le(),s.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(s.ke(),s.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Fe(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((s,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,s;const i=e.targetId,r=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Nh(a))if(r===0){const l=new W(a.path);this.ze(i,l,je.newNoDocument(l,K.min()))}else _e(r===1);else{const l=this.et(i);if(l!==r){const c=this.tt(e,l);if(c.status!==0){this.Ye(i);const u=c.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=Mf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var y,v,I,b,k,R;const Y={localCacheCount:f,existenceFilterCount:m.count},z=m.unchangedNames;return z&&(Y.bloomFilter={applied:h===0,hashCount:(y=z==null?void 0:z.hashCount)!==null&&y!==void 0?y:0,bitmapLength:(b=(I=(v=z==null?void 0:z.bits)===null||v===void 0?void 0:v.bitmap)===null||I===void 0?void 0:I.length)!==null&&b!==void 0?b:0,padding:(R=(k=z==null?void 0:z.bits)===null||k===void 0?void 0:k.padding)!==null&&R!==void 0?R:0},d&&(Y.bloomFilter.mightContain=d)),Y}(c.status,(s=c.nt)!==null&&s!==void 0?s:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:s,count:i}=e.pe;if(!s||!s.bits)return{status:1};const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let l,c;try{l=qs(r).toUint8Array()}catch(h){if(h instanceof tI)return Ui("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{c=new Lf(l,o,a)}catch(h){return Ui(h instanceof Mr?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return c.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return c.de===0?{status:1}:{status:i===n-this.it(e.targetId,u)?0:2,nt:u}}it(e,n){const s=this.qe.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{n(r.path.canonicalString())||(this.ze(e,r,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((r,o)=>{const a=this.Xe(o);if(a){if(r.current&&Nh(a.target)){const l=new W(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,je.newNoDocument(l,e))}r.Ce&&(n.set(o,r.Me()),r.xe())}});let s=ne();this.$e.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xe(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ke.forEach((r,o)=>o.setReadTime(e));const i=new bc(e,n,this.Ue,this.Ke,s);return this.Ke=Fn(),this.$e=Dm(),this.Ue=new ke(ce),i}Ge(e,n){if(!this.Je(e))return;const s=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,s),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),s&&(this.Ke=this.Ke.insert(n,s))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new Om,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new pt(ce),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new Om),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function Dm(){return new ke(W.comparator)}function xm(){return new ke(W.comparator)}const lD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uD=(()=>({and:"AND",or:"OR"}))();class hD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xh(t,e){return t.useProto3Json||Zo(e)?e:{value:e}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dD(t,e){return Sl(t,e.toTimestamp())}function Dt(t){return _e(!!t),K.fromTimestamp(function(n){const s=ds(n);return new Le(s.seconds,s.nanos)}(t))}function Vf(t,e){return function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function PI(t){const e=be.fromString(t);return _e(xI(e)),e}function bl(t,e){return Vf(t.databaseId,e.path)}function Gr(t,e){const n=PI(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(kI(n))}function Mh(t,e){return Vf(t.databaseId,e)}function fD(t){const e=PI(t);return e.length===4?be.emptyPath():kI(e)}function Co(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kI(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mm(t,e,n){return{name:bl(t,e),fields:n.value.mapValue.fields}}function pD(t,e){return"found"in e?function(s,i){_e(!!i.found),i.found.name,i.found.updateTime;const r=Gr(s,i.found.name),o=Dt(i.found.updateTime),a=i.found.createTime?Dt(i.found.createTime):K.min(),l=new vt({mapValue:{fields:i.found.fields}});return je.newFoundDocument(r,o,a,l)}(t,e):"missing"in e?function(s,i){_e(!!i.missing),_e(!!i.readTime);const r=Gr(s,i.missing),o=Dt(i.readTime);return je.newNoDocument(r,o)}(t,e):q()}function _D(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(_e(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(_e(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:RI(c.code);return new F(u,c.message||"")}(o);n=new SI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Gr(t,s.document.name),r=Dt(s.document.updateTime),o=s.document.createTime?Dt(s.document.createTime):K.min(),a=new vt({mapValue:{fields:s.document.fields}}),l=je.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ha(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Gr(t,s.document),r=s.readTime?Dt(s.readTime):K.min(),o=je.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Gr(t,s.document),r=s.removedTargetIds||[];n=new Ha([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new iD(i,r),a=s.targetId;n=new CI(a,o)}}return n}function NI(t,e){let n;if(e instanceof ea)n={update:Mm(t,e.key,e.value)};else if(e instanceof Df)n={delete:bl(t,e.key)};else if(e instanceof ys)n={update:Mm(t,e.key,e.data),updateMask:AD(e.fieldMask)};else{if(!(e instanceof wI))return q();n={verify:bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ro)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw q()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:dD(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:q()}(t,e.precondition)),n}function mD(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Dt(i.updateTime):Dt(r);return o.isEqual(K.min())&&(o=Dt(r)),new ZO(o,i.transformResults||[])}(n,e))):[]}function gD(t,e){return{documents:[Mh(t,e.path)]}}function yD(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Mh(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mh(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return DI(En.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:ci(h.field),direction:TD(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=xh(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vD(t){let e=fD(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){_e(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=OI(h);return d instanceof En&&rI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new qr(ui(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Zo(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Rl(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Rl(f,d)}(n.endAt)),UO(e,i,o,r,a,"F",l,c)}function ED(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ui(n.unaryFilter.field);return Ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ui(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ui(n.unaryFilter.field);return Ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(s=>OI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function TD(t){return lD[t]}function ID(t){return cD[t]}function wD(t){return uD[t]}function ci(t){return{fieldPath:t.canonicalString()}}function ui(t){return ct.fromServerFormat(t.fieldPath)}function DI(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Tm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(Em(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tm(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(Em(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:ID(n.op),value:n.value}}}(t):t instanceof En?function(n){const s=n.getFilters().map(i=>DI(i));return s.length===1?s[0]:{compositeFilter:{op:wD(n.op),filters:s}}}(t):q()}function AD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s,i,r=K.min(),o=K.min(),a=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.ct=e}}function CD(t){const e=vD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.sn=new bD}addToCollectionParentIndex(e,n){return this.sn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(hs.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(hs.min())}updateCollectionGroup(e,n,s){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class bD{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new pt(be.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new pt(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new qi(0)}static On(){return new qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.changes=new dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?P.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&zr(s.mutation,i,Pt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=xr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Fn();const o=Kr(),a=function(){return Kr()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof ys)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),zr(u.mutation,c,u.mutation.getFieldMask(),Le.now())):o.set(c.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new kD(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Kr();let i=new ke((o,a)=>o-a),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Pt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=fI();u.forEach(d=>{if(!r.has(d)){const f=TI(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):P.resolve(Ns());let a=-1,l=r;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ne())).next(u=>({batchId:a,changes:dI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(s=>{let i=xr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=xr();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(u,h){return new Ic(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,je.newInvalidDocument(c)))});let o=xr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&zr(c.mutation,l,Pt.empty(),Le.now()),Rc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return P.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:CD(i.bundledQuery),readTime:Dt(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.overlays=new ke(W.comparator),this.cr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ns();return P.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),P.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.cr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.cr.delete(s)),P.resolve()}getOverlaysForCollection(e,n,s){const i=Ns(),r=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ns(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return P.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(s.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sD(n,s));let r=this.cr.get(n);r===void 0&&(r=ne(),this.cr.set(n,r)),this.cr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.lr=new pt(Be.hr),this.Pr=new pt(Be.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const s=new Be(e,n);this.lr=this.lr.add(s),this.Pr=this.Pr.add(s)}Tr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Er(new Be(e,n))}dr(e,n){e.forEach(s=>this.removeReference(s,n))}Ar(e){const n=new W(new be([])),s=new Be(n,e),i=new Be(n,e+1),r=[];return this.Pr.forEachInRange([s,i],o=>{this.Er(o),r.push(o.key)}),r}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new W(new be([])),s=new Be(n,e),i=new Be(n,e+1);let r=ne();return this.Pr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Be(e,0),s=this.lr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Be{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return W.comparator(e.key,n.key)||ce(e.mr,n.mr)}static Ir(e,n){return ce(e.mr,n.mr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new pt(Be.hr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nD(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.wr(s),r=i<0?0:i;return P.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([s,i],o=>{const a=this.yr(o.mr);r.push(a)}),P.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new pt(ce);return n.forEach(i=>{const r=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([r,o],a=>{s=s.add(a.mr)})}),P.resolve(this.Sr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Be(new W(r),0);let a=new pt(ce);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),P.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(s=>{const i=this.yr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.pr;return P.forEach(n.mutations,i=>{const r=new Be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=s})}Cn(e){}containsKey(e,n){const s=new Be(n,0),i=this.pr.firstAfterOrEqual(s);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.Dr=e,this.docs=function(){return new ke(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return P.resolve(s?s.document.mutableCopy():je.newInvalidDocument(n))}getEntries(e,n){let s=Fn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():je.newInvalidDocument(i))}),P.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Fn();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IO(TO(u),s)<=0||(i.has(u.key)||Rc(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return P.resolve(r)}getAllFromCollectionGroup(e,n,s,i){q()}vr(e,n){return P.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LD(this)}getSize(e){return P.resolve(this.size)}}class LD extends PD{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(s)}),P.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.persistence=e,this.Cr=new dr(n=>kf(n),Nf),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Ff,this.targetCount=0,this.Or=qi.xn()}forEachTarget(e,n){return this.Cr.forEach((s,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fr&&(this.Fr=n),P.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Ln(n),P.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(r).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cr.get(n)||null;return P.resolve(s)}addMatchingKeys(e,n,s){return this.Mr.Tr(n,s),P.resolve()}removeMatchingKeys(e,n,s){this.Mr.dr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),P.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Mr.Vr(n);return P.resolve(s)}containsKey(e,n){return P.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.Nr={},this.overlays={},this.Br=new Cf(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new VD(this),this.indexManager=new SD,this.remoteDocumentCache=function(i){return new MD(i)}(s=>this.referenceDelegate.qr(s)),this.serializer=new RD(n),this.Qr=new OD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Nr[e.toKey()];return s||(s=new xD(n,this.referenceDelegate),this.Nr[e.toKey()]=s),s}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const i=new UD(this.Br.next());return this.referenceDelegate.Kr(),s(i).next(r=>this.referenceDelegate.$r(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ur(e,n){return P.or(Object.values(this.Nr).map(s=>()=>s.containsKey(e,n)))}}class UD extends AO{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.Wr=new Ff,this.Gr=null}static zr(e){return new Uf(e)}get jr(){if(this.Gr)return this.Gr;throw q()}addReference(e,n,s){return this.Wr.addReference(s,n),this.jr.delete(s.toString()),P.resolve()}removeReference(e,n,s){return this.Wr.removeReference(s,n),this.jr.add(s.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.jr,s=>{const i=W.fromPath(s);return this.Hr(e,i).next(r=>{r||n.removeEntry(i,K.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(s=>{s?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return P.or([()=>P.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Li=s,this.ki=i}static qi(e,n){let s=ne(),i=ne();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $f(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.$i(e,n).next(r=>r||this.Ui(e,n,i,s)).next(r=>r||this.Wi(e,n))}$i(e,n){if(Rm(n))return P.resolve(null);let s=Vn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Oh(n,null,"F"),s=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ne(...r);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(e,Oh(n,null,"F")):this.ji(e,c,n,l)}))})))}Ui(e,n,s,i){return Rm(n)||i.isEqual(K.min())?this.Wi(e,n):this.Ki.getDocuments(e,s).next(r=>{const o=this.Gi(n,r);return this.zi(n,o,s,i)?this.Wi(e,n):(mm()<=le.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dh(n)),this.ji(e,o,n,EO(i,-1)))})}Gi(e,n){let s=new pt(uI(e));return n.forEach((i,r)=>{Rc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,n){return mm()<=le.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Dh(n)),this.Ki.getDocumentsMatchingQuery(e,n,hs.min())}ji(e,n,s,i){return this.Ki.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new ke(ce),this.Yi=new dr(r=>kf(r),Nf),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(s)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ND(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function jD(t,e,n,s){return new BD(t,e,n,s)}async function MI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ne();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function HD(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=P.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(l,m)).next(y=>{const v=c.docVersions.get(m);_e(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function LI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function WD(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(gt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(r,f))});let l=Fn(),c=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(qD(r,o,e.documentUpdates).next(u=>{l=u.ns,c=u.rs})),!s.isEqual(K.min())){const u=n.kr.getLastRemoteSnapshotVersion(r).next(h=>n.kr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return P.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=i,r))}function qD(t,e,n){let s=ne(),i=ne();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Fn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ns:o,rs:i}})}function KD(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zD(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.kr.getTargetData(s,e).next(r=>r?(i=r,P.resolve(i)):n.kr.allocateTargetId(s).next(o=>(i=new es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.kr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Lh(t,e,n){const s=Z(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Lm(t,e,n){const s=Z(t);let i=K.min(),r=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(l,c,u){const h=Z(l),d=h.Yi.get(u);return d!==void 0?P.resolve(h.Ji.get(d)):h.kr.getTargetData(c,u)}(s,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?r:ne())).next(a=>(GD(s,HO(e),a),{documents:a,ss:r})))}function GD(t,e,n){let s=t.Zi.get(e)||K.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Zi.set(e,s)}class Vm{constructor(){this.activeTargetIds=QO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QD{constructor(){this.Hs=new Vm,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,s){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new Vm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa=null;function mu(){return Pa===null?Pa=function(){return 268435456+Math.round(2147483648*Math.random())}():Pa++,"0x"+Pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class ZD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=s+"://"+n.host,this.Eo=`projects/${i}/databases/${r}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Ro(){return!1}Vo(n,s,i,r,o){const a=mu(),l=this.mo(n,s);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,r,o),this.po(n,l,c,i).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ui("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,s,i,r,o,a){return this.Vo(n,s,i,r,o)}fo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}mo(n,s){const i=XD[n];return`${this.To}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,s,i){const r=mu();return new Promise((o,a)=>{const l=new cO;l.setWithCredentials(!0),l.listenOnce(oO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _u.NO_ERROR:const u=l.getResponseJson();$(it,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case _u.TIMEOUT:$(it,`RPC '${e}' ${r} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const h=l.getStatus();if($(it,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(I)>=0?I:A.UNKNOWN}(f.status);a(new F(m,f.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{$(it,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);$(it,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}wo(e,n,s){const i=mu(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iO(),a=rO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new lO({})),this.fo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");$(it,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const m=new JD({so:v=>{f?$(it,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||($(it,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),$(it,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},oo:()=>h.close()}),y=(v,I,b)=>{v.listen(I,k=>{try{b(k)}catch(R){setTimeout(()=>{throw R},0)}})};return y(h,Ra.EventType.OPEN,()=>{f||$(it,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Ra.EventType.CLOSE,()=>{f||(f=!0,$(it,`RPC '${e}' stream ${i} transport closed`),m.Po())}),y(h,Ra.EventType.ERROR,v=>{f||(f=!0,Ui(it,`RPC '${e}' stream ${i} transport errored:`,v),m.Po(new F(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,Ra.EventType.MESSAGE,v=>{var I;if(!f){const b=v.data[0];_e(!!b);const k=b,R=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(R){$(it,`RPC '${e}' stream ${i} received error:`,R);const Y=R.status;let z=function(It){const Ye=De[It];if(Ye!==void 0)return RI(Ye)}(Y),ve=R.message;z===void 0&&(z=A.INTERNAL,ve="Unknown error status: "+Y+" with message "+R.message),f=!0,m.Po(new F(z,ve)),h.close()}else $(it,`RPC '${e}' stream ${i} received:`,b),m.Io(b)}}),y(a,aO.STAT_EVENT,v=>{v.stat===pm.PROXY?$(it,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===pm.NOPROXY&&$(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function gu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return new hD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.So=s,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),s=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-s);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,s,i,r,o,a,l){this.ii=e,this.Bo=s,this.Lo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Bf(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.ko===n&&this.e_(s,i)},s=>{e(()=>{const i=new F(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.t_(i)})})}e_(e,n){const s=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{s(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{s(()=>this.t_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ex extends VI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=_D(this.serializer,e),s=function(r){if(!("targetChange"in r))return K.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Dt(o.readTime):K.min()}(e);return this.listener.r_(n,s)}i_(e){const n={};n.database=Co(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=Nh(l)?{documents:gD(r,l)}:{query:yD(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bI(r,o.resumeToken);const c=xh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(K.min())>0){a.readTime=Sl(r,o.snapshotVersion.toTimestamp());const c=xh(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=ED(this.serializer,e);s&&(n.labels=s),this.Ho(n)}s_(e){const n={};n.database=Co(this.serializer),n.removeTarget=e,this.Ho(n)}}class tx extends VI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=mD(e.writeResults,e.commitTime),s=Dt(e.commitTime);return this.listener.u_(s,n)}return _e(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=Co(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>NI(this.serializer,s))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Vo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}yo(e,n,s,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.yo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(A.UNKNOWN,r.toString())})}terminate(){this.h_=!0}}class sx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Ln(n),this.d_=!1):$("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys(o=>{s.enqueueAndForget(async()=>{ti(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=Z(l);c.y_.add(4),await na(c),c.b_.set("Unknown"),c.y_.delete(4),await kc(c)}(this))})}),this.b_=new sx(s,i)}}async function kc(t){if(ti(t))for(const e of t.w_)await e(!0)}async function na(t){for(const e of t.w_)await e(!1)}function FI(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Wf(n)?Hf(n):fr(n).Uo()&&jf(n,e))}function UI(t,e){const n=Z(t),s=fr(n);n.p_.delete(e),s.Uo()&&$I(n,e),n.p_.size===0&&(s.Uo()?s.zo():ti(n)&&n.b_.set("Unknown"))}function jf(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fr(t).i_(e)}function $I(t,e){t.D_.Be(e),fr(t).s_(e)}function Hf(t){t.D_=new aD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),fr(t).start(),t.b_.A_()}function Wf(t){return ti(t)&&!fr(t).$o()&&t.p_.size>0}function ti(t){return Z(t).y_.size===0}function BI(t){t.D_=void 0}async function rx(t){t.p_.forEach((e,n)=>{jf(t,e)})}async function ox(t,e){BI(t),Wf(t)?(t.b_.m_(e),Hf(t)):t.b_.set("Unknown")}async function ax(t,e,n){if(t.b_.set("Online"),e instanceof SI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pl(t,s)}else if(e instanceof Ha?t.D_.We(e):e instanceof CI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(K.min()))try{const s=await LI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.D_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.p_.get(c);u&&r.p_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.p_.get(l);if(!u)return;r.p_.set(l,u.withResumeToken(gt.EMPTY_BYTE_STRING,u.snapshotVersion)),$I(r,l);const h=new es(u.target,l,c,u.sequenceNumber);jf(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Pl(t,s)}}async function Pl(t,e,n){if(!Jo(e))throw e;t.y_.add(1),await na(t),t.b_.set("Offline"),n||(n=()=>LI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await kc(t)})}function jI(t,e){return e().catch(n=>Pl(t,n,e))}async function Nc(t){const e=Z(t),n=fs(e);let s=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;lx(e);)try{const i=await KD(e.localStore,s);if(i===null){e.g_.length===0&&n.zo();break}s=i.batchId,cx(e,i)}catch(i){await Pl(e,i)}HI(e)&&WI(e)}function lx(t){return ti(t)&&t.g_.length<10}function cx(t,e){t.g_.push(e);const n=fs(t);n.Uo()&&n.__&&n.a_(e.mutations)}function HI(t){return ti(t)&&!fs(t).$o()&&t.g_.length>0}function WI(t){fs(t).start()}async function ux(t){fs(t).l_()}async function hx(t){const e=fs(t);for(const n of t.g_)e.a_(n.mutations)}async function dx(t,e,n){const s=t.g_.shift(),i=xf.from(s,e,n);await jI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nc(t)}async function fx(t,e){e&&fs(t).__&&await async function(s,i){if(function(o){return AI(o)&&o!==A.ABORTED}(i.code)){const r=s.g_.shift();fs(s).Go(),await jI(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Nc(s)}}(t,e),HI(t)&&WI(t)}async function Um(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=ti(n);n.y_.add(3),await na(n),s&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await kc(n)}async function px(t,e){const n=Z(t);e?(n.y_.delete(2),await kc(n)):e||(n.y_.add(2),await na(n),n.b_.set("Unknown"))}function fr(t){return t.v_||(t.v_=function(n,s,i){const r=Z(n);return r.P_(),new ex(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:rx.bind(null,t),uo:ox.bind(null,t),r_:ax.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Wf(t)?Hf(t):t.b_.set("Unknown")):(await t.v_.stop(),BI(t))})),t.v_}function fs(t){return t.C_||(t.C_=function(n,s,i){const r=Z(n);return r.P_(),new tx(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{_o:ux.bind(null,t),uo:fx.bind(null,t),c_:hx.bind(null,t),u_:dx.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Nc(t)):(await t.C_.stop(),t.g_.length>0&&($("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new qf(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Jo(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=xr(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ki;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.F_=new ke(W.comparator)}track(e){const n=e.doc.key,s=this.F_.get(n);s?e.type!==0&&s.type===3?this.F_=this.F_.insert(n,e):e.type===3&&s.type!==1?this.F_=this.F_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.F_=this.F_.remove(n):e.type===1&&s.type===2?this.F_=this.F_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):q():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ki{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ki(e,n,ki.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.x_=void 0,this.listeners=[]}}class mx{constructor(){this.queries=new dr(e=>cI(e),Ac),this.onlineState="Unknown",this.O_=new Set}}async function zf(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new _x),i)try{r.x_=await n.onListen(s)}catch(o){const a=Kf(o,`Initialization of query '${Dh(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.N_(n.onlineState),r.x_&&e.B_(r.x_)&&Qf(n)}async function Gf(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function gx(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.B_(i)&&(s=!0);o.x_=i}}s&&Qf(n)}function yx(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Qf(t){t.O_.forEach(e=>{e.next()})}class Yf{constructor(e,n,s){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=s||{}}B_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ki(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.W_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.key=e}}class KI{constructor(e){this.key=e}}class vx{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=ne(),this.mutatedKeys=ne(),this.na=uI(e),this.ra=new ki(this.na)}get ia(){return this.X_}sa(e,n){const s=n?n.oa:new $m,i=n?n.ra:this.ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Rc(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),v=!0):this._a(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||c&&this.na(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ra:o,oa:s,zi:a,mutatedKeys:r}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort((c,u)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return m(d)-m(f)}(c.type,u.type)||this.na(c.doc,u.doc)),this.aa(s);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,r.length!==0||l?{snapshot:new Ki(this.query,e.ra,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new $m,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=ne(),this.ra.forEach(s=>{this.la(s.key)&&(this.ta=this.ta.add(s.key))});const n=[];return e.forEach(s=>{this.ta.has(s)||n.push(new KI(s))}),this.ta.forEach(s=>{e.has(s)||n.push(new qI(s))}),n}ha(e){this.X_=e.ss,this.ta=ne();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Ki.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class Ex{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Tx{constructor(e){this.key=e,this.Ia=!1}}class Ix{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new dr(a=>cI(a),Ac),this.da=new Map,this.Aa=new Set,this.Ra=new ke(W.comparator),this.Va=new Map,this.ma=new Ff,this.fa={},this.ga=new Map,this.pa=qi.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function wx(t,e){const n=Dx(t);let s,i;const r=n.Ea.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Pa();else{const o=await zD(n.localStore,Vn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Ax(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&FI(n.remoteStore,o)}return i}async function Ax(t,e,n,s,i){t.wa=(h,d,f)=>async function(y,v,I,b){let k=v.view.sa(I);k.zi&&(k=await Lm(y.localStore,v.query,!1).then(({documents:z})=>v.view.sa(z,k)));const R=b&&b.targetChanges.get(v.targetId),Y=v.view.applyChanges(k,y.isPrimaryClient,R);return jm(y,v.targetId,Y.ca),Y.snapshot}(t,h,d,f);const r=await Lm(t.localStore,e,!0),o=new vx(e,r.ss),a=o.sa(r.documents),l=ta.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);jm(t,n,c.ca);const u=new Ex(e,n,o);return t.Ea.set(e,u),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),c.snapshot}async function Rx(t,e){const n=Z(t),s=n.Ea.get(e),i=n.da.get(s.targetId);if(i.length>1)return n.da.set(s.targetId,i.filter(r=>!Ac(r,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Lh(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),UI(n.remoteStore,s.targetId),Vh(n,s.targetId)}).catch(Xo)):(Vh(n,s.targetId),await Lh(n.localStore,s.targetId,!0))}async function Cx(t,e,n){const s=xx(t);try{const i=await function(o,a){const l=Z(o),c=Le.now(),u=a.reduce((f,m)=>f.add(m.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Fn(),y=ne();return l.Xi.getEntries(f,u).next(v=>{m=v,m.forEach((I,b)=>{b.isValidDocument()||(y=y.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{h=v;const I=[];for(const b of a){const k=tD(b,h.get(b.key).overlayedDocument);k!=null&&I.push(new ys(b.key,k,nI(k.value.mapValue),Et.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,I,a)}).next(v=>{d=v;const I=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,I)})}).then(()=>({batchId:d.batchId,changes:dI(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new ke(ce)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await sa(s,i.changes),await Nc(s.remoteStore)}catch(i){const r=Kf(i,"Failed to persist write");n.reject(r)}}async function zI(t,e){const n=Z(t);try{const s=await WD(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Va.get(r);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?_e(o.Ia):i.removedDocuments.size>0&&(_e(o.Ia),o.Ia=!1))}),await sa(n,s,e)}catch(s){await Xo(s)}}function Bm(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Ea.forEach((r,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&Qf(l)}(s.eventManager,e),i.length&&s.Ta.r_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Sx(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Va.get(e),r=i&&i.key;if(r){let o=new ke(W.comparator);o=o.insert(r,je.newNoDocument(r,K.min()));const a=ne().add(r),l=new bc(K.min(),new Map,new ke(ce),o,a);await zI(s,l),s.Ra=s.Ra.remove(r),s.Va.delete(e),Xf(s)}else await Lh(s.localStore,e,!1).then(()=>Vh(s,e,n)).catch(Xo)}async function bx(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await HD(n.localStore,e);QI(n,s,null),GI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await sa(n,i)}catch(i){await Xo(i)}}async function Px(t,e,n){const s=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(_e(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);QI(s,e,n),GI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await sa(s,i)}catch(i){await Xo(i)}}function GI(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function QI(t,e,n){const s=Z(t);let i=s.fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fa[s.currentUser.toKey()]=i}}function Vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.da.get(e))t.Ea.delete(s),n&&t.Ta.Sa(s,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(s=>{t.ma.containsKey(s)||YI(t,s)})}function YI(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(UI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Xf(t))}function jm(t,e,n){for(const s of n)s instanceof qI?(t.ma.addReference(s.key,e),kx(t,s)):s instanceof KI?($("SyncEngine","Document no longer in limbo: "+s.key),t.ma.removeReference(s.key,e),t.ma.containsKey(s.key)||YI(t,s.key)):q()}function kx(t,e){const n=e.key,s=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(s)||($("SyncEngine","New document in limbo: "+n),t.Aa.add(s),Xf(t))}function Xf(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new W(be.fromString(e)),s=t.pa.next();t.Va.set(s,new Tx(n)),t.Ra=t.Ra.insert(n,s),FI(t.remoteStore,new es(Vn(wc(n.path)),s,"TargetPurposeLimboResolution",Cf.ae))}}async function sa(t,e,n){const s=Z(t),i=[],r=[],o=[];s.Ea.isEmpty()||(s.Ea.forEach((a,l)=>{o.push(s.wa(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=$f.qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Ta.r_(i),await async function(l,c){const u=Z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Jo(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,y)}}}(s.localStore,r))}async function Nx(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await MI(n.localStore,e);n.currentUser=e,function(r,o){r.ga.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),r.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sa(n,s.ts)}}function Ox(t,e){const n=Z(t),s=n.Va.get(e);if(s&&s.Ia)return ne().add(s.key);{let i=ne();const r=n.da.get(e);if(!r)return i;for(const o of r){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Dx(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ox.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sx.bind(null,e),e.Ta.r_=gx.bind(null,e.eventManager),e.Ta.Sa=yx.bind(null,e.eventManager),e}function xx(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Px.bind(null,e),e}class Hm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Pc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jD(this.persistence,new $D,e.initialUser,this.serializer)}createPersistence(e){return new FD(Uf.zr,this.serializer)}createSharedClientState(e){return new QD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nx.bind(null,this.syncEngine),await px(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mx}()}createDatastore(e){const n=Pc(e.databaseInfo.databaseId),s=function(r){return new ZD(r)}(e.databaseInfo);return function(r,o,a,l){return new nx(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new ix(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Bm(this.syncEngine,n,0),function(){return Fm.v()?new Fm:new YD}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new Ix(i,r,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=Z(n);$("RemoteStore","RemoteStore shutting down."),s.y_.add(5),await na(s),s.S_.shutdown(),s.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new F(A.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const o=Z(i),a=Co(o.serializer)+"/documents",l={documents:r.map(d=>bl(o.serializer,d))},c=await o.yo("BatchGetDocuments",a,l,r.length),u=new Map;c.forEach(d=>{const f=pD(o.serializer,d);u.set(f.key.toString(),f)});const h=[];return r.forEach(d=>{const f=u.get(d.toString());_e(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(s=>this.recordVersion(s)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Df(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,s)=>{const i=W.fromPath(s);this.mutations.push(new wI(i,this.precondition(i)))}),await async function(s,i){const r=Z(s),o=Co(r.serializer)+"/documents",a={writes:i.map(l=>NI(r.serializer,l))};await r.Vo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=K.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!n.isEqual(s))throw new F(A.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(K.min())?Et.exists(!1):Et.updateTime(n):Et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(K.min()))throw new F(A.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Et.updateTime(n)}return Et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n,s,i,r){this.asyncQueue=e,this.datastore=n,this.options=s,this.updateFunction=i,this.deferred=r,this.qa=s.maxAttempts,this.Ko=new Bf(this.asyncQueue,"transaction_retry")}run(){this.qa-=1,this.Qa()}Qa(){this.Ko.xo(async()=>{const e=new Lx(this.datastore),n=this.Ka(e);n&&n.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.$a(i)}))}).catch(s=>{this.$a(s)})})}Ka(e){try{const n=this.updateFunction(e);return!Zo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}$a(e){this.qa>0&&this.Ua(e)?(this.qa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Qa(),Promise.resolve()))):this.deferred.reject(e)}Ua(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!AI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=ZT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Kf(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yu(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await MI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $x(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Um(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Um(e.remoteStore,r)),t._onlineComponents=e}function Ux(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function $x(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await yu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ux(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await yu(t,new Hm)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await yu(t,new Hm);return t._offlineComponents}async function Zf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Wm(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Wm(t,new Mx))),t._onlineComponents}function Bx(t){return Zf(t).then(e=>e.syncEngine)}function jx(t){return Zf(t).then(e=>e.datastore)}async function kl(t){const e=await Zf(t),n=e.eventManager;return n.onListen=wx.bind(null,e.syncEngine),n.onUnlisten=Rx.bind(null,e.syncEngine),n}function Hx(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Jf({next:d=>{o.enqueueAndForget(()=>Gf(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new F(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Yf(wc(a.path),u,{includeMetadataChanges:!0,W_:!0});return zf(r,h)}(await kl(t),t.asyncQueue,e,n,s)),s.promise}function Wx(t,e,n={}){const s=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new Jf({next:d=>{o.enqueueAndForget(()=>Gf(r,h)),d.fromCache&&l.source==="server"?c.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Yf(a,u,{includeMetadataChanges:!0,W_:!0});return zf(r,h)}(await kl(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qx(t,e,n,s){if(e===!0&&s===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Km(t){if(!W.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zm(t){if(W.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ep(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ep(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new hO;switch(s.type){case"firstParty":return new _O(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=qm.get(n);s&&($("ComponentProvider","Removing Datastore"),qm.delete(n),s.terminate())}(this),Promise.resolve()}}function Kx(t,e,n,s={}){var i;const r=(t=xt(t,Oc))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=rt.MOCK_USER;else{a=mR(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(c)}t._authCredentials=new dO(new JT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ia(this.firestore,e,this._query)}}class _t{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class as extends ia{constructor(e,n,s){super(e,n,wc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new W(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function KV(t,e,...n){if(t=ze(t),JI("collection","path",e),t instanceof Oc){const s=be.fromString(e,...n);return zm(s),new as(t,null,s)}{if(!(t instanceof _t||t instanceof as))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return zm(s),new as(t.firestore,null,s)}}function zV(t,e,...n){if(t=ze(t),arguments.length===1&&(e=ZT.V()),JI("doc","path",e),t instanceof Oc){const s=be.fromString(e,...n);return Km(s),new _t(t,null,new W(s))}{if(!(t instanceof _t||t instanceof as))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(be.fromString(e,...n));return Km(s),new _t(t.firestore,t instanceof as?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Bf(this,"async_queue_retry"),this.Xa=()=>{const n=gu();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new _n;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Jo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(s=>{this.Ha=s,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Ln("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ja=!1,s))));return this.Wa=n,n}enqueueAfterDelay(e,n,s){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=qf.createAndSchedule(this,e,n,s,r=>this.ru(r));return this.ja.push(i),i}eu(){this.Ha&&q()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function Qm(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ps extends Oc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new zx}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZI(this),this._firestoreClient.terminate()}}function Gx(t,e){const n=typeof t=="object"?t:Ad(),s=typeof t=="string"?t:e||"(default)",i=wd(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=_R("firestore");r&&Kx(i,...r)}return i}function ra(t){return t._firestoreClient||ZI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ZI(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new SO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,XI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Fx(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zs(gt.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=/^__.*__$/;class Yx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class ew{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ys(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class xc{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.au(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.Pu(e),i}Iu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:s,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Nl(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(tw(this.uu)&&Qx.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class Xx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Pc(e)}Ru(e,n,s,i=!1){return new xc({uu:e,methodName:n,Au:s,path:ct.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tp(t){const e=t._freezeSettings(),n=Pc(t._databaseId);return new Xx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nw(t,e,n,s,i,r={}){const o=t.Ru(r.merge||r.mergeFields?2:0,e,n,i);np("Data must be an object, but it was:",o,s);const a=ow(s,o);let l,c;if(r.merge)l=new Pt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Fh(e,h,n);if(!o.contains(d))throw new F(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);lw(u,d)||u.push(d)}l=new Pt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Yx(new vt(a),l,c)}class Mc extends pr{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function sw(t,e,n){return new xc({uu:3,Au:e.settings.Au,methodName:t._methodName,hu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Jx extends pr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=sw(this,e,!0),s=this.Vu.map(r=>_r(r,n)),i=new Hi(s);return new Of(e.path,i)}isEqual(e){return this===e}}class Zx extends pr{constructor(e,n){super(e),this.Vu=n}_toFieldTransform(e){const n=sw(this,e,!0),s=this.Vu.map(r=>_r(r,n)),i=new Wi(s);return new Of(e.path,i)}isEqual(e){return this===e}}class eM extends pr{constructor(e,n){super(e),this.mu=n}_toFieldTransform(e){const n=new Ro(e.serializer,mI(e.serializer,this.mu));return new Of(e.path,n)}isEqual(e){return this===e}}function iw(t,e,n,s){const i=t.Ru(1,e,n);np("Data must be an object, but it was:",i,s);const r=[],o=vt.empty();ei(s,(l,c)=>{const u=sp(e,l,n);c=ze(c);const h=i.Iu(u);if(c instanceof Mc)r.push(u);else{const d=_r(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Pt(r);return new ew(o,a,i.fieldTransforms)}function rw(t,e,n,s,i,r){const o=t.Ru(1,e,n),a=[Fh(e,s,n)],l=[i];if(r.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Fh(e,r[d])),l.push(r[d+1]);const c=[],u=vt.empty();for(let d=a.length-1;d>=0;--d)if(!lw(c,a[d])){const f=a[d];let m=l[d];m=ze(m);const y=o.Iu(f);if(m instanceof Mc)c.push(f);else{const v=_r(m,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new Pt(c);return new ew(u,h,o.fieldTransforms)}function _r(t,e){if(aw(t=ze(t)))return np("Unsupported field value:",e,t),ow(t,e);if(t instanceof pr)return function(s,i){if(!tw(i.uu))throw i.Eu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=_r(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mI(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Le.fromDate(s);return{timestampValue:Sl(i.serializer,r)}}if(s instanceof Le){const r=new Le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Sl(i.serializer,r)}}if(s instanceof Dc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof zs)return{bytesValue:bI(i.serializer,s._byteString)};if(s instanceof _t){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vf(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Eu(`Unsupported field value: ${ep(s)}`)}(t,e)}function ow(t,e){const n={};return eI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(s,i)=>{const r=_r(i,e.lu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function aw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Dc||t instanceof zs||t instanceof _t||t instanceof pr)}function np(t,e,n){if(!aw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=ep(n);throw s==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+s)}}function Fh(t,e,n){if((e=ze(e))instanceof oa)return e._internalPath;if(typeof e=="string")return sp(t,e);throw Nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const tM=new RegExp("[~\\*/\\[\\]]");function sp(t,e,n){if(e.search(tM)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oa(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}function lw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nM extends Ol{data(){return super.data()}}function cw(t,e){return typeof e=="string"?sp(t,e):e instanceof oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hw{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ei(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Dc(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=ds(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=be.fromString(e);_e(xI(s));const i=new wo(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(n)||Ln(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class sM extends hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ip extends Ol{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Wa extends ip{data(e={}){return super.data(e)}}class fw{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new gi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Wa(this._firestore,this._userDataWriter,s.key,s,new gi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Wa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Wa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:iM(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t){t=xt(t,_t);const e=xt(t.firestore,ps);return Hx(ra(e),t._key).then(n=>mw(e,t,n))}class Lc extends hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function rM(t){t=xt(t,ia);const e=xt(t.firestore,ps),n=ra(e),s=new Lc(e);return uw(t._query),Wx(n,t._query).then(i=>new fw(e,s,t,i))}function GV(t,e,n){t=xt(t,_t);const s=xt(t.firestore,ps),i=dw(t.converter,e,n);return _w(s,[nw(tp(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Et.none())])}function QV(t,e,n,...s){t=xt(t,_t);const i=xt(t.firestore,ps),r=tp(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof oa?rw(r,"updateDoc",t._key,e,n,s):iw(r,"updateDoc",t._key,e),_w(i,[o.toMutation(t._key,Et.exists(!0))])}function rp(t,...e){var n,s,i;t=ze(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Qm(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Qm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof _t)c=xt(t.firestore,ps),u=wc(t._key.path),l={next:h=>{e[o]&&e[o](mw(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xt(t,ia);c=xt(h.firestore,ps),u=h._query;const d=new Lc(c);l={next:f=>{e[o]&&e[o](new fw(c,d,h,f))},error:e[o+1],complete:e[o+2]},uw(t._query)}return function(d,f,m,y){const v=new Jf(y),I=new Yf(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>zf(await kl(d),I)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>Gf(await kl(d),I))}}(ra(c),u,a,l)}function _w(t,e){return function(s,i){const r=new _n;return s.asyncQueue.enqueueAndForget(async()=>Cx(await Bx(s),i,r)),r.promise}(ra(t),e)}function mw(t,e,n){const s=n.docs.get(e._key),i=new Lc(t);return new ip(t,i,e._key,s,new gi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM={maxAttempts:5};function Rr(t,e){if((t=ze(t)).firestore!==e)throw new F(A.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM extends class{constructor(n,s){this._firestore=n,this._transaction=s,this._dataReader=tp(n)}get(n){const s=Rr(n,this._firestore),i=new sM(this._firestore);return this._transaction.lookup([s._key]).then(r=>{if(!r||r.length!==1)return q();const o=r[0];if(o.isFoundDocument())return new Ol(this._firestore,i,o.key,o,s.converter);if(o.isNoDocument())return new Ol(this._firestore,i,s._key,null,s.converter);throw q()})}set(n,s,i){const r=Rr(n,this._firestore),o=dw(r.converter,s,i),a=nw(this._dataReader,"Transaction.set",r._key,o,r.converter!==null,i);return this._transaction.set(r._key,a),this}update(n,s,i,...r){const o=Rr(n,this._firestore);let a;return a=typeof(s=ze(s))=="string"||s instanceof oa?rw(this._dataReader,"Transaction.update",o._key,s,i,r):iw(this._dataReader,"Transaction.update",o._key,s),this._transaction.update(o._key,a),this}delete(n){const s=Rr(n,this._firestore);return this._transaction.delete(s._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Rr(e,this._firestore),s=new Lc(this._firestore);return super.get(e).then(i=>new ip(this._firestore,s,n._key,i._document,new gi(!1,!1),n.converter))}}function XV(t,e,n){t=xt(t,ps);const s=Object.assign(Object.assign({},oM),n);return function(r){if(r.maxAttempts<1)throw new F(A.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,o,a){const l=new _n;return r.asyncQueue.enqueueAndForget(async()=>{const c=await jx(r);new Vx(r.asyncQueue,c,a,o,l).run()}),l.promise}(ra(t),i=>e(new aM(t,i)),s)}function JV(...t){return new Jx("arrayUnion",t)}function ZV(...t){return new Zx("arrayRemove",t)}function eF(t){return new eM("increment",t)}(function(e,n=!0){(function(i){hr=i})(_s),gn(new Yt("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new ps(new fO(s.getProvider("auth-internal")),new gO(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Nt(_m,"4.1.0",e),Nt(_m,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="firebasestorage.googleapis.com",lM="storageBucket",cM=2*60*1e3,uM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends In{constructor(e,n,s=0){super(vu(e),`Firebase Storage: ${n} (${vu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Tn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Tn||(Tn={}));function vu(t){return"storage/"+t}function hM(){const t="An unknown error occurred, please check the error payload for server response.";return new wn(Tn.UNKNOWN,t)}function dM(){return new wn(Tn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fM(){return new wn(Tn.CANCELED,"User canceled the upload/download.")}function pM(t){return new wn(Tn.INVALID_URL,"Invalid URL '"+t+"'.")}function _M(t){return new wn(Tn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ym(t){return new wn(Tn.INVALID_ARGUMENT,t)}function yw(){return new wn(Tn.APP_DELETED,"The Firebase app was deleted.")}function mM(t){return new wn(Tn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(s.path==="")return s;throw _M(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===gw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",I=new RegExp(`^https?://${y}/${i}/${v}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:f,indices:m,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<k.length;R++){const Y=k[R],z=Y.regex.exec(e);if(z){const ve=z[Y.indices.bucket];let Ie=z[Y.indices.path];Ie||(Ie=""),s=new Kt(ve,Ie),Y.postModify(s);break}}if(s==null)throw pM(e);return s}}class gM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yM(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...I){if(c){d();return}if(v){d(),u.call(null,v,...I);return}if(l()||o){d(),u.call(null,v,...I);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function y(v){m||(m=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function vM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t){return t!==void 0}function Xm(t,e,n,s){if(s<e)throw Ym(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ym(`Invalid value for '${t}'. Expected ${n} or less.`)}function TM(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dl||(Dl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ka(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Dl.NO_ERROR,l=r.getStatus();if(!a||IM(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Dl.ABORT;s(!1,new ka(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ka(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());EM(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=hM();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?yw():fM();o(l)}else{const l=dM();o(l)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=yM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function AM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bM(t,e,n,s,i,r,o=!0){const a=TM(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return CM(c,e),AM(c,n),RM(c,r),SM(c,s),new wM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xl(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kM(this._location.path)}get storage(){return this._service}get parent(){const e=PM(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new xl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw mM(e)}}function Jm(t,e){const n=e==null?void 0:e[lM];return n==null?null:Kt.makeFromBucketSpec(n,t)}class NM{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=gw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cM,this._maxUploadRetryTime=uM,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=Jm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=Jm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new gM(yw());{const o=bM(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Zm="@firebase/storage",eg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM="storage";function DM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new NM(n,s,i,e,_s)}function xM(){gn(new Yt(OM,DM,"PUBLIC").setMultipleInstances(!0)),Nt(Zm,eg,""),Nt(Zm,eg,"esm2017")}xM();const Eu=new WeakMap;function vw(t,e){return Eu.has(e)||Eu.set(e,t||{f:{},r:{},s:{},u:{}}),Eu.get(e)}function MM(t,e,n,s){if(!t)return n;const[i,r]=Ew(t);if(!i)return n;const o=vw(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function LM(t,e,n,s){if(!t)return;const[i,r]=Ew(t);if(!i)return;const o=vw(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(ln),a}function Ew(t){return uP(t)||hP(t)?["f",t.path]:dP(t)?["r",t.toString()]:fP(t)?["s",t.toString()]:[]}const Tu=new WeakMap;function VM(t,e,n){const s=Lo();Tu.has(s)||Tu.set(s,new Map);const i=Tu.get(s),r=LM(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):ln}const FM={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Uh(t,e,n,s){if(!lP(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const m=Object.getOwnPropertyDescriptor(a,f);m&&!m.enumerable&&Object.defineProperty(h,f,m)});for(const f in a){const m=a[f];if(m==null||m instanceof Date||m instanceof Le||m instanceof Dc)h[f]=m;else if(xd(m)){const y=c+f;h[f]=y in n?l[f]:m.path,d[y]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[f]=Array(m.length);for(let y=0;y<m.length;y++){const v=m[y];v&&v.path in r&&(h[f][y]=r[v.path])}o(m,l[f]||h[f],c+f+".",[h[f],d])}else Ys(m)?(h[f]={},o(m,l[f],c+f+".",[h[f],d])):h[f]=m}}return o(t,e,"",i),i}const op={reset:!1,wait:!0,maxRefDepth:2,converter:FM,snapshotOptions:{serverTimestamps:"estimate"}};function Ml(t){for(const e in t)t[e].unsub()}function $h(t,e,n,s,i,r,o,a,l){const[c,u]=Uh(s.data(t.snapshotOptions),Dd(e,n),i,t);r.set(e,n,c),Bh(t,e,n,i,u,r,o,a,l)}function UM({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=ln;return a.once?pw(t).then(u=>{u.exists()?$h(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=rp(t,u=>{u.exists()?$h(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Ml(l)}}function Bh(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(y=>c.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function m(y){y in f&&++h>=d&&a(n)}c.forEach(y=>{const v=s[y],I=i[y],b=`${n}.${y}`;if(f[b]=!0,v)if(v.path!==I.path)v.unsub();else return;s[y]={data:()=>Dd(e,b),unsub:UM({ref:I,target:e,path:b,depth:o,ops:r,resolve:m.bind(null,b),reject:l},t),path:I.path}})}function $M(t,e,n,s,i,r){const o=Object.assign({},op,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=Nn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let m,y=ln;const v=[],I={added:({newIndex:k,doc:R})=>{v.splice(k,0,Object.create(null));const Y=v[k],[z,ve]=Uh(R.data(l),void 0,Y,o);n.add(Je(d),k,z),Bh(o,d,`${h}.${k}`,Y,ve,n,0,s.bind(null,R),i)},modified:({oldIndex:k,newIndex:R,doc:Y})=>{const z=Je(d),ve=v[k],Ie=z[k],[It,Ye]=Uh(Y.data(l),Ie,ve,o);v.splice(R,0,ve),n.remove(z,k),n.add(z,R,It),Bh(o,d,`${h}.${R}`,ve,Ye,n,0,s,i)},removed:({oldIndex:k})=>{const R=Je(d);n.remove(R,k),Ml(v.splice(k,1)[0])}};function b(k){const R=k.docChanges(a);if(!m&&R.length){m=!0;let Y=0;const z=R.length,ve=Object.create(null);for(let Ie=0;Ie<z;Ie++)ve[R[Ie].doc.id]=!0;s=Ie=>{Ie&&Ie.id in ve&&++Y>=z&&(c&&(n.set(t,h,Je(d)),d=t),f(Je(d)),s=ln)}}R.forEach(Y=>{I[Y.type](Y)}),R.length||(c&&(n.set(t,h,Je(d)),d=t),s(Je(d)))}return u?rM(e).then(b).catch(i):y=rp(e,b,i),k=>{if(y(),k){const R=typeof k=="function"?k():[];n.set(t,h,R)}v.forEach(Ml)}}function BM(t,e,n,s,i,r){const o=Object.assign({},op,r),a="value",l=Object.create(null);s=pP(s,()=>Dd(t,a));let c=ln;function u(h){h.exists()?$h(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?pw(e).then(u).catch(i):c=rp(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Ml(l)}}const tg=Symbol();function Tw(t,e){let n=ln;const s=Object.assign({},op,e),i=Je(t),r=s.target||Nn();mP()&&(s.once=!0);const o=MM(i,s.ssrKey,tg,Lo()),a=o!==tg;a&&(r.value=o);let l=!a;const c=Nn(!1),u=Nn(),h=ny(),d=$g();let f=ln;function m(){let I=Je(t);const b=new Promise((k,R)=>{if(n(s.reset),!I)return n=ln,k(null);c.value=l,l=!0,I.converter||(I=I.withConverter(s.converter)),n=(xd(I)?BM:$M)(r,I,jM,k,R,s)}).catch(k=>(h.value===b&&(u.value=k),Promise.reject(k))).finally(()=>{h.value===b&&(c.value=!1)});h.value=b}let y=ln;tt(t)&&(y=Ii(t,m)),m(),i&&(f=VM(h.value,i,s.ssrKey)),ky()&&my(()=>h.value),d&&t0(v);function v(I=s.reset){y(),f(),n(I)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>v}})}const jM={set:(t,e,n)=>oP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function tF(t,e){return Tw(t,{target:Nn([]),...e})}function nF(t,e){return Tw(t,e)}function HM(t){return(e,n)=>{const s=gP(e,n).run(()=>Nn(t));Lv.set(e,s),vP(s,e)}}function sF(t){return rP?Ov(Lo(t)):null}function WM(t,{firebaseApp:e,modules:n=[]}){t.provide(Mv,e);for(const s of n)s(e,t)}/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const qM=Symbol();var ng;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ng||(ng={}));function KM(){const t=Ug(!0),e=t.run(()=>Nn({}));let n=[],s=[];const i=ld({install(r){i._a=r,r.provide(qM,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Ob?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Iw=zy({apiKey:"AIzaSyCoNK6X1xjzHY2oquSwyz7oF2PRQPi1d4A",authDomain:"fonti-paintball.firebaseapp.com",projectId:"fonti-paintball",storageBucket:"fonti-paintball.appspot.com",messagingSenderId:"778438522690",appId:"1:778438522690:web:a4c394a2732663a3cc3adb",measurementId:"G-9JV9LHBR8P"}),iF=Gx(Iw);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof window<"u";function zM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Iu(t,e){const n={};for(const s in e){const i=e[s];n[s]=Zt(i)?i.map(t):t(i)}return n}const Qr=()=>{},Zt=Array.isArray,GM=/\/$/,QM=t=>t.replace(GM,"");function wu(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=ZM(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function YM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function XM(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&zi(e.matched[s],n.matched[i])&&ww(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ww(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JM(t[n],e[n]))return!1;return!0}function JM(t,e){return Zt(t)?ig(t,e):Zt(e)?ig(e,t):t===e}function ig(t,e){return Zt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ZM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var So;(function(t){t.pop="pop",t.push="push"})(So||(So={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function eL(t){if(!t)if(hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QM(t)}const tL=/^[^#]+#/;function nL(t,e){return t.replace(tL,"#")+e}function sL(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Vc=()=>({left:window.pageXOffset,top:window.pageYOffset});function iL(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=sL(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function rg(t,e){return(history.state?history.state.position-e:-1)+t}const jh=new Map;function rL(t,e){jh.set(t,e)}function oL(t){const e=jh.get(t);return jh.delete(t),e}let aL=()=>location.protocol+"//"+location.host;function Aw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),sg(l,"")}return sg(n,t)+s+i}function lL(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=Aw(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else s(f);i.forEach(I=>{I(n.value,m,{delta:v,type:So.pop,direction:v?v>0?Yr.forward:Yr.back:Yr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:Vc()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function og(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Vc():null}}function cL(t){const{history:e,location:n}=window,s={value:Aw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:aL()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=pe({},e.state,og(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:Vc()});r(u.current,u,!0);const h=pe({},og(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function uL(t){t=eL(t);const e=cL(t),n=lL(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:nL.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function hL(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),uL(t)}function dL(t){return typeof t=="string"||t&&typeof t=="object"}function Rw(t){return typeof t=="string"||typeof t=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cw=Symbol("");var ag;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ag||(ag={}));function Gi(t,e){return pe(new Error,{type:t,[Cw]:!0},e)}function Rn(t,e){return t instanceof Error&&Cw in t&&(e==null||!!(t.type&e))}const lg="[^/]+?",fL={sensitive:!1,strict:!1,start:!0,end:!0},pL=/[.+*?^${}()[\]/\\]/g;function _L(t,e){const n=pe({},fL,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(pL,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:I}=d;r.push({name:m,repeatable:y,optional:v});const b=I||lg;if(b!==lg){f+=10;try{new RegExp(`(${b})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+R.message)}}let k=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),i+=k,f+=20,v&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=r[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,I=m in c?c[m]:"";if(Zt(I)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=Zt(I)?I.join("/"):I;if(!b)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function mL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gL(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=mL(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(cg(s))return 1;if(cg(i))return-1}return i.length-s.length}function cg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const yL={type:0,value:""},vL=/[a-zA-Z0-9_]/;function EL(t){if(!t)return[[]];if(t==="/")return[[yL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:vL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function TL(t,e,n){const s=_L(EL(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function IL(t,e){const n=[],s=new Map;e=dg({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,m=wL(u);m.aliasOf=d&&d.record;const y=dg(e,u),v=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of k)v.push(pe({},m,{components:d?d.record.components:m.components,path:R,aliasOf:d?d.record:m}))}let I,b;for(const k of v){const{path:R}=k;if(h&&R[0]!=="/"){const Y=h.record.path,z=Y[Y.length-1]==="/"?"":"/";k.path=h.record.path+(R&&z+R)}if(I=TL(k,h,y),d?d.alias.push(I):(b=b||I,b!==I&&b.alias.push(I),f&&u.name&&!hg(I)&&o(u.name)),m.children){const Y=m.children;for(let z=0;z<Y.length;z++)r(Y[z],I,d&&d.children[z])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return b?()=>{o(b)}:Qr}function o(u){if(Rw(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&gL(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sw(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!hg(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,y;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Gi(1,{location:u});y=d.record.name,f=pe(ug(h.params,d.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&ug(u.params,d.keys.map(b=>b.name))),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(b=>b.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=h.name?s.get(h.name):n.find(b=>b.re.test(h.path)),!d)throw Gi(1,{location:u,currentLocation:h});y=d.record.name,f=pe({},h.params,u.params),m=d.stringify(f)}const v=[];let I=d;for(;I;)v.unshift(I.record),I=I.parent;return{name:y,path:m,params:f,matched:v,meta:RL(v)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ug(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function wL(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:AL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function AL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function hg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RL(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function dg(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Sw(t,e){return e.children.some(n=>n===t||Sw(t,n))}const bw=/#/g,CL=/&/g,SL=/\//g,bL=/=/g,PL=/\?/g,Pw=/\+/g,kL=/%5B/g,NL=/%5D/g,kw=/%5E/g,OL=/%60/g,Nw=/%7B/g,DL=/%7C/g,Ow=/%7D/g,xL=/%20/g;function ap(t){return encodeURI(""+t).replace(DL,"|").replace(kL,"[").replace(NL,"]")}function ML(t){return ap(t).replace(Nw,"{").replace(Ow,"}").replace(kw,"^")}function Hh(t){return ap(t).replace(Pw,"%2B").replace(xL,"+").replace(bw,"%23").replace(CL,"%26").replace(OL,"`").replace(Nw,"{").replace(Ow,"}").replace(kw,"^")}function LL(t){return Hh(t).replace(bL,"%3D")}function VL(t){return ap(t).replace(bw,"%23").replace(PL,"%3F")}function FL(t){return t==null?"":VL(t).replace(SL,"%2F")}function Ll(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function UL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Pw," "),o=r.indexOf("="),a=Ll(o<0?r:r.slice(0,o)),l=o<0?null:Ll(r.slice(o+1));if(a in e){let c=e[a];Zt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function fg(t){let e="";for(let n in t){const s=t[n];if(n=LL(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(s)?s.map(r=>r&&Hh(r)):[s&&Hh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function $L(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Zt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BL=Symbol(""),pg=Symbol(""),Fc=Symbol(""),lp=Symbol(""),Wh=Symbol("");function Cr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Gi(4,{from:n,to:e})):h instanceof Error?a(h):dL(h)?a(Gi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Au(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(jL(a)){const c=(a.__vccOpts||a)[e];c&&i.push(zn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=zM(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&zn(d,n,s,r,o)()}))}}return i}function jL(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _g(t){const e=kt(Fc),n=kt(lp),s=jt(()=>e.resolve(Je(t.to))),i=jt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(zi.bind(null,u));if(d>-1)return d;const f=mg(l[c-2]);return c>1&&mg(u)===f&&h[h.length-1].path!==f?h.findIndex(zi.bind(null,l[c-2])):d}),r=jt(()=>i.value>-1&&KL(n.params,s.value.params)),o=jt(()=>i.value>-1&&i.value===n.matched.length-1&&ww(n.params,s.value.params));function a(l={}){return qL(l)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Qr):Promise.resolve()}return{route:s,href:jt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const HL=tr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_g,setup(t,{slots:e}){const n=Wl(_g(t)),{options:s}=kt(Fc),i=jt(()=>({[gg(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[gg(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Dy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),WL=HL;function qL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KL(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Zt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function mg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gg=(t,e,n)=>t??e??n,zL=tr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kt(Wh),i=jt(()=>t.route||s.value),r=kt(pg,0),o=jt(()=>{let c=Je(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=jt(()=>i.value.matched[o.value]);Da(pg,jt(()=>o.value+1)),Da(BL,a),Da(Wh,i);const l=Nn();return Ii(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!zi(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return yg(n.default,{Component:d,route:c});const f=h.props[u],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Dy(d,pe({},m,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return yg(n.default,{Component:v,route:c})||v}}});function yg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dw=zL;function GL(t){const e=IL(t.routes,t),n=t.parseQuery||UL,s=t.stringifyQuery||fg,i=t.history,r=Cr(),o=Cr(),a=Cr(),l=ny(qn);let c=qn;hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Iu.bind(null,T=>""+T),h=Iu.bind(null,FL),d=Iu.bind(null,Ll);function f(T,V){let D,B;return Rw(T)?(D=e.getRecordMatcher(T),B=V):B=T,e.addRoute(B,D)}function m(T){const V=e.getRecordMatcher(T);V&&e.removeRoute(V)}function y(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function I(T,V){if(V=pe({},V||l.value),typeof T=="string"){const g=wu(n,T,V.path),E=e.resolve({path:g.path},V),w=i.createHref(g.fullPath);return pe(g,E,{params:d(E.params),hash:Ll(g.hash),redirectedFrom:void 0,href:w})}let D;if("path"in T)D=pe({},T,{path:wu(n,T.path,V.path).path});else{const g=pe({},T.params);for(const E in g)g[E]==null&&delete g[E];D=pe({},T,{params:h(g)}),V.params=h(V.params)}const B=e.resolve(D,V),de=T.hash||"";B.params=u(d(B.params));const p=YM(s,pe({},T,{hash:ML(de),path:B.path})),_=i.createHref(p);return pe({fullPath:p,hash:de,query:s===fg?$L(T.query):T.query||{}},B,{redirectedFrom:void 0,href:_})}function b(T){return typeof T=="string"?wu(n,T,l.value.path):pe({},T)}function k(T,V){if(c!==T)return Gi(8,{from:V,to:T})}function R(T){return ve(T)}function Y(T){return R(pe(b(T),{replace:!0}))}function z(T){const V=T.matched[T.matched.length-1];if(V&&V.redirect){const{redirect:D}=V;let B=typeof D=="function"?D(T):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=b(B):{path:B},B.params={}),pe({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function ve(T,V){const D=c=I(T),B=l.value,de=T.state,p=T.force,_=T.replace===!0,g=z(D);if(g)return ve(pe(b(g),{state:typeof g=="object"?pe({},de,g.state):de,force:p,replace:_}),V||D);const E=D;E.redirectedFrom=V;let w;return!p&&XM(s,B,D)&&(w=Gi(16,{to:E,from:B}),tn(B,B,!0,!1)),(w?Promise.resolve(w):Ye(E,B)).catch(C=>Rn(C)?Rn(C,2)?C:jn(C):he(C,E,B)).then(C=>{if(C){if(Rn(C,2))return ve(pe({replace:_},b(C.to),{state:typeof C.to=="object"?pe({},de,C.to.state):de,force:p}),V||E)}else C=vs(E,B,!0,_,de);return Bn(E,B,C),C})}function Ie(T,V){const D=k(T,V);return D?Promise.reject(D):Promise.resolve()}function It(T){const V=ii.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(T):T()}function Ye(T,V){let D;const[B,de,p]=QL(T,V);D=Au(B.reverse(),"beforeRouteLeave",T,V);for(const g of B)g.leaveGuards.forEach(E=>{D.push(zn(E,T,V))});const _=Ie.bind(null,T,V);return D.push(_),st(D).then(()=>{D=[];for(const g of r.list())D.push(zn(g,T,V));return D.push(_),st(D)}).then(()=>{D=Au(de,"beforeRouteUpdate",T,V);for(const g of de)g.updateGuards.forEach(E=>{D.push(zn(E,T,V))});return D.push(_),st(D)}).then(()=>{D=[];for(const g of p)if(g.beforeEnter)if(Zt(g.beforeEnter))for(const E of g.beforeEnter)D.push(zn(E,T,V));else D.push(zn(g.beforeEnter,T,V));return D.push(_),st(D)}).then(()=>(T.matched.forEach(g=>g.enterCallbacks={}),D=Au(p,"beforeRouteEnter",T,V),D.push(_),st(D))).then(()=>{D=[];for(const g of o.list())D.push(zn(g,T,V));return D.push(_),st(D)}).catch(g=>Rn(g,8)?g:Promise.reject(g))}function Bn(T,V,D){a.list().forEach(B=>It(()=>B(T,V,D)))}function vs(T,V,D,B,de){const p=k(T,V);if(p)return p;const _=V===qn,g=hi?history.state:{};D&&(B||_?i.replace(T.fullPath,pe({scroll:_&&g&&g.scroll},de)):i.push(T.fullPath,de)),l.value=T,tn(T,V,D,_),jn()}let en;function mr(){en||(en=i.listen((T,V,D)=>{if(!la.listening)return;const B=I(T),de=z(B);if(de){ve(pe(de,{replace:!0}),B).catch(Qr);return}c=B;const p=l.value;hi&&rL(rg(p.fullPath,D.delta),Vc()),Ye(B,p).catch(_=>Rn(_,12)?_:Rn(_,2)?(ve(_.to,B).then(g=>{Rn(g,20)&&!D.delta&&D.type===So.pop&&i.go(-1,!1)}).catch(Qr),Promise.reject()):(D.delta&&i.go(-D.delta,!1),he(_,B,p))).then(_=>{_=_||vs(B,p,!1),_&&(D.delta&&!Rn(_,8)?i.go(-D.delta,!1):D.type===So.pop&&Rn(_,20)&&i.go(-1,!1)),Bn(B,p,_)}).catch(Qr)}))}let ni=Cr(),Ue=Cr(),Ee;function he(T,V,D){jn(T);const B=Ue.list();return B.length?B.forEach(de=>de(T,V,D)):console.error(T),Promise.reject(T)}function An(){return Ee&&l.value!==qn?Promise.resolve():new Promise((T,V)=>{ni.add([T,V])})}function jn(T){return Ee||(Ee=!T,mr(),ni.list().forEach(([V,D])=>T?D(T):V()),ni.reset()),T}function tn(T,V,D,B){const{scrollBehavior:de}=t;if(!hi||!de)return Promise.resolve();const p=!D&&oL(rg(T.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return oy().then(()=>de(T,V,p)).then(_=>_&&iL(_)).catch(_=>he(_,T,V))}const wt=T=>i.go(T);let si;const ii=new Set,la={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:I,options:t,push:R,replace:Y,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Ue.add,isReady:An,install(T){const V=this;T.component("RouterLink",WL),T.component("RouterView",Dw),T.config.globalProperties.$router=V,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(l)}),hi&&!si&&l.value===qn&&(si=!0,R(i.location).catch(de=>{}));const D={};for(const de in qn)Object.defineProperty(D,de,{get:()=>l.value[de],enumerable:!0});T.provide(Fc,V),T.provide(lp,Xg(D)),T.provide(Wh,l);const B=T.unmount;ii.add(T),T.unmount=function(){ii.delete(T),ii.size<1&&(c=qn,en&&en(),en=null,l.value=qn,si=!1,Ee=!1),B()}}};function st(T){return T.reduce((V,D)=>V.then(()=>It(D)),Promise.resolve())}return la}function QL(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>zi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>zi(c,l))||i.push(l))}return[n,s,i]}function YL(){return kt(Fc)}function XL(){return kt(lp)}const JL=tr({__name:"App",setup(t){const e=Vv(),n=YL(),s=XL();return Ii(e,async(i,r)=>{if(!i&&r&&s.meta.requiresAuth)return n.push({name:"login"});if(i&&typeof s.query.redirect=="string")return n.push(s.query.redirect)}),(i,r)=>(ss(),so(Je(Dw)))}}),ZL="modulepreload",eV=function(t){return"/"+t},vg={},Na=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=eV(r),r in vg)return;vg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ZL,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function tV(t,e,n,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i<3?o(r):i>3?o(e,n,r):o(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nV=t=>e=>typeof e=="function"?((n,s)=>(customElements.define(n,s),s))(t,e):((n,s)=>{const{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sV=({finisher:t,descriptor:e})=>(n,s)=>{var i;if(s===void 0){const r=(i=n.originalKey)!==null&&i!==void 0?i:n.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(n.key)}:{...n,key:r};return t!=null&&(o.finisher=function(a){t(a,r)}),o}{const r=n.constructor;e!==void 0&&Object.defineProperty(n,s,e(s)),t==null||t(r,s)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ru;const iV=((Ru=window.HTMLSlotElement)===null||Ru===void 0?void 0:Ru.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function rF(t){const{slot:e,selector:n}=t??{};return sV({descriptor:s=>({get(){var i;const r="slot"+(e?`[name=${e}]`:":not([name])"),o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(r),a=o!=null?iV(o,t):[];return n?a.filter(l=>l.matches(n)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qa=window,cp=qa.ShadowRoot&&(qa.ShadyCSS===void 0||qa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,up=Symbol(),Eg=new WeakMap;let xw=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==up)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(cp&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=Eg.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Eg.set(n,e))}return e}toString(){return this.cssText}};const rV=t=>new xw(typeof t=="string"?t:t+"",void 0,up),oV=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new xw(n,t,up)},aV=(t,e)=>{cp?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const s=document.createElement("style"),i=qa.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,t.appendChild(s)})},Tg=cp?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return rV(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cu;const Vl=window,Ig=Vl.trustedTypes,lV=Ig?Ig.emptyScript:"",wg=Vl.reactiveElementPolyfillSupport,qh={toAttribute(t,e){switch(e){case Boolean:t=t?lV:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Mw=(t,e)=>e!==t&&(e==e||t==t),Su={attribute:!0,type:String,converter:qh,reflect:!1,hasChanged:Mw},Kh="finalized";let di=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,s)=>{const i=this._$Ep(s,n);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,n=Su){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,n);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,n,s){return{get(){return this[n]},set(i){const r=this[e];this[n]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Su}static finalize(){if(this.hasOwnProperty(Kh))return!1;this[Kh]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,s=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const i of s)this.createProperty(i,n[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)n.unshift(Tg(i))}else e!==void 0&&n.push(Tg(e));return n}static _$Ep(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,s;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return aV(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostConnected)===null||s===void 0?void 0:s.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostDisconnected)===null||s===void 0?void 0:s.call(n)})}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$EO(e,n,s=Su){var i;const r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:qh).toAttribute(n,s.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,n){var s;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:qh;this._$El=r,this[r]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Mw)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let n=!1;const s=this._$AL;try{n=this.shouldUpdate(s),n?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw n=!1,this._$Ek(),i}n&&this._$AE(s)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,s)=>this._$EO(s,this[s],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};di[Kh]=!0,di.elementProperties=new Map,di.elementStyles=[],di.shadowRootOptions={mode:"open"},wg==null||wg({ReactiveElement:di}),((Cu=Vl.reactiveElementVersions)!==null&&Cu!==void 0?Cu:Vl.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bu;const Fl=window,Qi=Fl.trustedTypes,Ag=Qi?Qi.createPolicy("lit-html",{createHTML:t=>t}):void 0,zh="$lit$",Zn=`lit$${(Math.random()+"").slice(9)}$`,Lw="?"+Zn,cV=`<${Lw}>`,Gs=document,bo=()=>Gs.createComment(""),Po=t=>t===null||typeof t!="object"&&typeof t!="function",Vw=Array.isArray,uV=t=>Vw(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Pu=`[ 	
\f\r]`,Sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rg=/-->/g,Cg=/>/g,Is=RegExp(`>|${Pu}(?:([^\\s"'>=/]+)(${Pu}*=${Pu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sg=/'/g,bg=/"/g,Fw=/^(?:script|style|textarea|title)$/i,hV=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),dV=hV(1),Yi=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),Pg=new WeakMap,Os=Gs.createTreeWalker(Gs,129,null,!1);function Uw(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ag!==void 0?Ag.createHTML(e):e}const fV=(t,e)=>{const n=t.length-1,s=[];let i,r=e===2?"<svg>":"",o=Sr;for(let a=0;a<n;a++){const l=t[a];let c,u,h=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===Sr?u[1]==="!--"?o=Rg:u[1]!==void 0?o=Cg:u[2]!==void 0?(Fw.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Is):u[3]!==void 0&&(o=Is):o===Is?u[0]===">"?(o=i??Sr,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Is:u[3]==='"'?bg:Sg):o===bg||o===Sg?o=Is:o===Rg||o===Cg?o=Sr:(o=Is,i=void 0);const f=o===Is&&t[a+1].startsWith("/>")?" ":"";r+=o===Sr?l+cV:h>=0?(s.push(c),l.slice(0,h)+zh+l.slice(h)+Zn+f):l+Zn+(h===-2?(s.push(void 0),a):f)}return[Uw(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),s]};class ko{constructor({strings:e,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,u]=fV(e,n);if(this.el=ko.createElement(c,s),Os.currentNode=this.el.content,n===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=Os.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(zh)||d.startsWith(Zn)){const f=u[o++];if(h.push(d),f!==void 0){const m=i.getAttribute(f.toLowerCase()+zh).split(Zn),y=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:y[2],strings:m,ctor:y[1]==="."?_V:y[1]==="?"?gV:y[1]==="@"?yV:Uc})}else l.push({type:6,index:r})}for(const d of h)i.removeAttribute(d)}if(Fw.test(i.tagName)){const h=i.textContent.split(Zn),d=h.length-1;if(d>0){i.textContent=Qi?Qi.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],bo()),Os.nextNode(),l.push({type:2,index:++r});i.append(h[d],bo())}}}else if(i.nodeType===8)if(i.data===Lw)l.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(Zn,h+1))!==-1;)l.push({type:7,index:r}),h+=Zn.length-1}r++}}static createElement(e,n){const s=Gs.createElement("template");return s.innerHTML=e,s}}function Xi(t,e,n=t,s){var i,r,o,a;if(e===Yi)return e;let l=s!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[s]:n._$Cl;const c=Po(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,n,s)),s!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:n._$Cl=l),l!==void 0&&(e=Xi(t,l._$AS(t,e.values),l,s)),e}class pV{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:s},parts:i}=this._$AD,r=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Gs).importNode(s,!0);Os.currentNode=r;let o=Os.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new aa(o,o.nextSibling,this,e):c.type===1?u=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(u=new vV(o,this,e)),this._$AV.push(u),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=Os.nextNode(),a++)}return Os.currentNode=Gs,r}v(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}}class aa{constructor(e,n,s,i){var r;this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Xi(this,e,n),Po(e)?e===He||e==null||e===""?(this._$AH!==He&&this._$AR(),this._$AH=He):e!==this._$AH&&e!==Yi&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):uV(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==He&&Po(this._$AH)?this._$AA.nextSibling.data=e:this.$(Gs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ko.createElement(Uw(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.v(s);else{const o=new pV(r,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(e){let n=Pg.get(e.strings);return n===void 0&&Pg.set(e.strings,n=new ko(e)),n}T(e){Vw(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of e)i===n.length?n.push(s=new aa(this.k(bo()),this.k(bo()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Uc{constructor(e,n,s,i,r){this.type=1,this._$AH=He,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=He}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=Xi(this,e,n,0),o=!Po(e)||e!==this._$AH&&e!==Yi,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Xi(this,a[s+l],n,l),c===Yi&&(c=this._$AH[l]),o||(o=!Po(c)||c!==this._$AH[l]),c===He?e=He:e!==He&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _V extends Uc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===He?void 0:e}}const mV=Qi?Qi.emptyScript:"";class gV extends Uc{constructor(){super(...arguments),this.type=4}j(e){e&&e!==He?this.element.setAttribute(this.name,mV):this.element.removeAttribute(this.name)}}class yV extends Uc{constructor(e,n,s,i,r){super(e,n,s,i,r),this.type=5}_$AI(e,n=this){var s;if((e=(s=Xi(this,e,n,0))!==null&&s!==void 0?s:He)===Yi)return;const i=this._$AH,r=e===He&&i!==He||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==He&&(i===He||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class vV{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Xi(this,e)}}const kg=Fl.litHtmlPolyfillSupport;kg==null||kg(ko,aa),((bu=Fl.litHtmlVersions)!==null&&bu!==void 0?bu:Fl.litHtmlVersions=[]).push("2.8.0");const EV=(t,e,n)=>{var s,i;const r=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:e;let o=r._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new aa(e.insertBefore(bo(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ku,Nu;class Xr extends di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const s=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=s.firstChild),s}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=EV(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Yi}}Xr.finalized=!0,Xr._$litElement$=!0,(ku=globalThis.litElementHydrateSupport)===null||ku===void 0||ku.call(globalThis,{LitElement:Xr});const Ng=globalThis.litElementPolyfillSupport;Ng==null||Ng({LitElement:Xr});((Nu=globalThis.litElementVersions)!==null&&Nu!==void 0?Nu:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class TV extends Xr{render(){return dV`<span class="shadow"></span>`}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const IV=oV`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Gh=class extends TV{};Gh.styles=[IV];Gh=tV([nV("md-elevation")],Gh);const wV=t=>(dd("data-v-7a114a21"),t=t(),fd(),t),AV={class:"card"},RV=wV(()=>Qs("md-elevation",null,null,-1)),CV=tr({__name:"ListItem",setup(t){return(e,n)=>(ss(),md("div",AV,[RV,iA(e.$slots,"title",{},void 0,!0)]))}});const hp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Ou=hp(CV,[["__scopeId","data-v-7a114a21"]]),SV=t=>(dd("data-v-b5b1e296"),t=t(),fd(),t),bV=["src"],PV=SV(()=>Qs("img",{class:"accountImage",src:"https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/llwijg0ncg0pyknjcmnk",alt:""},null,-1)),kV=tr({__name:"AccountImage",setup(t){var s;const e=Vv(),n=Nn((s=e.value)==null?void 0:s.providerData[0].photoURL);return(i,r)=>{const o=yy("RouterLink");return ss(),md("div",null,[Je(e)?(ss(),so(o,{key:0,to:"/myAccount"},{default:Gn(()=>[Qs("img",{class:"accountImage",src:n.value,alt:""},null,8,bV)]),_:1})):(ss(),so(o,{key:1,to:"/login"},{default:Gn(()=>[PV]),_:1}))])}}});const NV=hp(kV,[["__scopeId","data-v-b5b1e296"]]),OV=t=>(dd("data-v-13af1bcb"),t=t(),fd(),t),DV=OV(()=>Qs("h1",null,"Fonti Paintball",-1)),xV=tr({__name:"HomeView",setup(t){return(e,n)=>{const s=yy("RouterLink");return ss(),md("div",null,[Me(NV),Qs("main",null,[DV,Me(s,{to:"/rules"},{default:Gn(()=>[Me(Ou,null,{title:Gn(()=>[Ma(" Regolamento (leggere prima di prenotare) ")]),_:1})]),_:1}),Me(s,{to:"/availability"},{default:Gn(()=>[Me(Ou,null,{title:Gn(()=>[Ma(" Inserisci disponibilità ")]),_:1})]),_:1}),Me(Ou,null,{title:Gn(()=>[Ma(" Statistiche giocatori (prossimamente...) ")]),_:1})])])}}});const MV=hp(xV,[["__scopeId","data-v-13af1bcb"]]),$w=GL({history:hL("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!1},component:MV},{path:"/login",name:"login",component:()=>Na(()=>import("./LoginView-7263ec23.js"),["assets/LoginView-7263ec23.js","assets/LoginView-41f8948d.css"])},{path:"/availability",name:"availability",meta:{requiresAuth:!0},component:()=>Na(()=>import("./AvailabilityView-dab6ab7e.js"),["assets/AvailabilityView-dab6ab7e.js","assets/dialog-e6d5860c.js","assets/AvailabilityView-ee1597a6.css"])},{path:"/myAccount",name:"myAccount",meta:{requiresAuth:!0},component:()=>Na(()=>import("./UserView-c45f9994.js"),["assets/UserView-c45f9994.js","assets/dialog-e6d5860c.js","assets/UserView-25b4dc95.css"])},{path:"/rules",name:"rules",meta:{requiresAuth:!1},component:()=>Na(()=>import("./RulesView-265f1eaf.js"),["assets/RulesView-265f1eaf.js","assets/RulesView-af284cb9.css"])}]});$w.beforeEach(async t=>{if(t.meta.requiresAuth&&!await yP())return{path:"/login",query:{redirect:t.fullPath}}});const $c=rR(JL);$c.use(KM());$c.use($w);$c.use(WM,{firebaseApp:Iw,modules:[HM()]});$c.mount("#app");export{He as A,VV as B,td as C,UV as D,ed as E,$t as F,Yn as G,Ma as H,Nn as I,KV as J,iF as K,tF as L,nF as M,zV as N,so as O,pw as P,QV as Q,JV as R,GV as S,rF as T,XV as U,ZV as V,eF as W,sV as X,Yi as Y,hp as _,Vv as a,ss as b,md as c,tr as d,Je as e,FV as f,BV as g,Qs as h,Me as i,fd as j,oV as k,Xr as l,tV as m,nV as n,Q0 as o,dd as p,Wl as q,yy as r,$V as s,LV as t,sF as u,jt as v,Gn as w,dV as x,Ii as y,iA as z};
